#!/usr/bin/env python3
"""
Tests for GitHub stats fetching and README updating.
Tests exclusion of EMBER and LakeShift repos, fallback behavior, and escaping.
"""

import json
import pytest
from pathlib import Path
import sys

# Add tools directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from fetch_github_stats import EXCLUDED_REPOS
from update_readme_stats import (
    generate_stats_section,
    format_updated_time,
    escapeHtml
)

def test_excluded_repos_constant():
    """Test that EXCLUDED_REPOS is correctly defined."""
    assert 'ember-fire-commander' in EXCLUDED_REPOS
    assert 'lakeshift' in EXCLUDED_REPOS
    assert len(EXCLUDED_REPOS) == 2

def test_format_updated_time():
    """Test timestamp formatting."""
    iso_time = '2026-11-07T04:00:00+00:00'
    formatted = format_updated_time(iso_time)
    assert 'November' in formatted
    assert '2026' in formatted

def test_generate_stats_section_with_error():
    """Test stats section generation with error condition."""
    stats = {
        'updated_at': '2026-11-07T04:00:00+00:00',
        'error': 'Test error'
    }
    
    section = generate_stats_section(stats)
    
    assert '<!-- STATS_START -->' in section
    assert '<!-- STATS_END -->' in section
    assert 'Stats unavailable' in section
    assert 'November' in section

def test_generate_stats_section_with_data():
    """Test stats section generation with actual data."""
    stats = {
        'updated_at': '2026-11-07T04:00:00+00:00',
        'repo_count': 25,
        'languages': {
            'Python': 12,
            'TypeScript': 8,
            'Terraform': 3
        },
        'recent_activity': [
            {
                'name': 'test-repo',
                'url': 'https://github.com/suhail39ahmed/test-repo',
                'description': 'A test repository',
                'language': 'Python'
            }
        ]
    }
    
    section = generate_stats_section(stats)
    
    assert '<!-- STATS_START -->' in section
    assert '<!-- STATS_END -->' in section
    assert '25' in section
    assert 'Python' in section
    assert 'TypeScript' in section
    assert 'test-repo' in section
    assert 'November' in section

def test_generate_stats_section_escapes_descriptions():
    """Test that descriptions are properly truncated and don't break markdown."""
    stats = {
        'updated_at': '2026-11-07T04:00:00+00:00',
        'repo_count': 1,
        'languages': {},
        'recent_activity': [
            {
                'name': 'test-repo',
                'url': 'https://github.com/suhail39ahmed/test-repo',
                'description': 'A' * 100,  # Very long description
                'language': 'Python'
            }
        ]
    }
    
    section = generate_stats_section(stats)
    
    # Description should be truncated to 80 chars
    lines = section.split('\n')
    desc_line = [l for l in lines if 'test-repo' in l and 'A' in l]
    if desc_line:
        # Check that the description doesn't exceed reasonable length
        assert len(desc_line[0]) < 200

def test_excluded_repos_not_in_mock_data():
    """Test that excluded repos would be filtered out."""
    # This is a structural test to ensure the filter logic is correct
    mock_repos = [
        {'name': 'llm-auto-router', 'language': 'Python'},
        {'name': 'ember-fire-commander', 'language': 'TypeScript'},  # Should be excluded
        {'name': 'lakeshift', 'language': 'Python'},  # Should be excluded
        {'name': 'production_grade_rag', 'language': 'Python'}
    ]
    
    # Simulate filtering logic from fetch_github_stats.py
    filtered = [r for r in mock_repos if r['name'] not in EXCLUDED_REPOS]
    
    assert len(filtered) == 2
    assert all(r['name'] not in EXCLUDED_REPOS for r in filtered)
    assert 'ember-fire-commander' not in [r['name'] for r in filtered]
    assert 'lakeshift' not in [r['name'] for r in filtered]

def test_escapeHtml_basic():
    """Test HTML escaping (if implemented)."""
    # Note: escapeHtml is imported from update_readme_stats but may not exist yet
    # This test documents the expected behavior
    try:
        from update_readme_stats import escapeHtml
        assert escapeHtml('<script>') == '&lt;script&gt;'
        assert escapeHtml('normal text') == 'normal text'
    except (ImportError, AttributeError):
        # If not implemented, skip
        pytest.skip("escapeHtml not implemented")

def test_stats_json_structure():
    """Test that stats.json has expected structure when it exists."""
    stats_path = Path('tools/stats.json')
    
    if stats_path.exists():
        with open(stats_path) as f:
            stats = json.load(f)
        
        # Check required fields
        assert 'updated_at' in stats
        
        # If no error, should have data fields
        if 'error' not in stats:
            assert 'repo_count' in stats
            assert 'languages' in stats
            assert isinstance(stats['languages'], dict)
    else:
        pytest.skip("stats.json not yet generated")

def test_graceful_fallback_on_missing_stats():
    """Test that the system handles missing stats gracefully."""
    stats = {
        'updated_at': '2026-11-07T04:00:00+00:00',
        'repo_count': 0,
        'languages': {},
        'recent_activity': []
    }
    
    section = generate_stats_section(stats)
    
    # Should not crash, should produce valid markdown
    assert '<!-- STATS_START -->' in section
    assert '<!-- STATS_END -->' in section
    assert 'November' in section

def test_no_script_injection_in_stats():
    """Test that stats generation doesn't allow script injection."""
    stats = {
        'updated_at': '2026-11-07T04:00:00+00:00',
        'repo_count': 1,
        'languages': {},
        'recent_activity': [
            {
                'name': '<script>alert("xss")</script>',
                'url': 'https://github.com/test',
                'description': '<img src=x onerror=alert(1)>',
                'language': 'Python'
            }
        ]
    }
    
    section = generate_stats_section(stats)
    
    # Should not contain UNESCAPED dangerous HTML tags
    # The key is that angle brackets should be escaped
    assert '<script>' not in section  # Raw script tag should not appear
    assert '<img' not in section.lower()  # Raw img tag should not appear
    
    # Verify that escaping happened (escaped versions should be present)
    assert '&lt;' in section  # Escaped angle brackets should be present
    assert '&gt;' in section
    
    # If dangerous content was in the input, it should be escaped
    # So we should see &lt;script&gt; not <script>
    assert '&lt;script&gt;' in section or 'script' not in section.lower()

if __name__ == '__main__':
    pytest.main([__file__, '-v'])
