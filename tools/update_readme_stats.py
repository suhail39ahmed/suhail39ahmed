#!/usr/bin/env python3
"""
Update README.md with stats from stats.json.
Only updates content between special markers.
"""

import json
import re
import html
from datetime import datetime
from pathlib import Path

def escapeHtml(text: str) -> str:
    """Escape HTML to prevent XSS."""
    return html.escape(text)

def load_stats() -> dict:
    """Load stats from stats.json."""
    stats_path = Path('tools/stats.json')
    if not stats_path.exists():
        raise FileNotFoundError(f"{stats_path} not found. Run fetch_github_stats.py first.")
    
    with open(stats_path) as f:
        return json.load(f)

def format_updated_time(iso_timestamp: str) -> str:
    """Format ISO timestamp to readable format."""
    dt = datetime.fromisoformat(iso_timestamp.replace('Z', '+00:00'))
    return dt.strftime('%B %d, %Y')

def generate_stats_section(stats: dict) -> str:
    """Generate the stats section markdown."""
    updated = format_updated_time(stats['updated_at'])
    
    lines = []
    lines.append("<!-- STATS_START -->")
    lines.append("")
    
    if 'error' in stats:
        lines.append(f"**Stats unavailable** (last checked: {updated})")
    else:
        # Repository count
        repo_count = stats.get('repo_count', 0)
        lines.append(f"📦 **{repo_count}** public repositories")
        lines.append("")
        
        # Top languages
        languages = stats.get('languages', {})
        if languages:
            top_langs = sorted(languages.items(), key=lambda x: x[1], reverse=True)[:6]
            lang_badges = []
            for lang, count in top_langs:
                # Use shields.io badges for visual appeal
                lang_clean = lang.replace(' ', '%20')
                badge = f"![{lang}](https://img.shields.io/badge/{lang_clean}-{count}_repos-0B1F3A?style=flat-square&logo=github)"
                lang_badges.append(badge)
            
            lines.append("**Languages:**")
            lines.append(" ".join(lang_badges))
            lines.append("")
        
        # Recent activity with genuine repo links
        recent = stats.get('recent_activity', [])
        if recent:
            lines.append("**Recently active repositories:**")
            for repo in recent[:3]:
                name = escapeHtml(repo['name'])
                url = repo['url']  # URLs don't need escaping in markdown links
                # Truncate BEFORE escaping to avoid breaking HTML entities
                raw_desc = repo.get('description', 'No description')[:80]
                desc = escapeHtml(raw_desc)
                lang = escapeHtml(repo.get('language', 'N/A'))
                repo_updated = repo.get('updated_at', '')
                # Parse and format the update time
                if repo_updated:
                    from datetime import datetime
                    dt = datetime.fromisoformat(repo_updated.replace('Z', '+00:00'))
                    time_str = dt.strftime('%b %d')
                    lines.append(f"- [{name}]({url}) — {desc} · `{lang}` · Updated {time_str}")
                else:
                    lines.append(f"- [{name}]({url}) — {desc} · `{lang}`")
            lines.append("")
    
    lines.append(f"*Last updated: {updated}*")
    lines.append("")
    lines.append("<!-- STATS_END -->")
    
    return '\n'.join(lines)

def update_readme(stats_section: str) -> None:
    """Update README.md with new stats section."""
    readme_path = Path('README.md')
    
    if not readme_path.exists():
        raise FileNotFoundError("README.md not found")
    
    content = readme_path.read_text()
    
    # Check if markers exist
    if '<!-- STATS_START -->' not in content or '<!-- STATS_END -->' not in content:
        print("Error: README.md missing stats markers (<!-- STATS_START --> and <!-- STATS_END -->)")
        print("Stats section not updated.")
        return
    
    # Replace content between markers
    pattern = r'<!-- STATS_START -->.*?<!-- STATS_END -->'
    new_content = re.sub(pattern, stats_section, content, flags=re.DOTALL)
    
    # Write back
    readme_path.write_text(new_content)
    print("README.md updated successfully")

def main():
    """Main entry point."""
    try:
        stats = load_stats()
        stats_section = generate_stats_section(stats)
        update_readme(stats_section)
    except Exception as e:
        print(f"Error: {e}")
        raise

if __name__ == '__main__':
    main()
