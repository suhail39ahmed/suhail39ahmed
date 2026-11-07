#!/usr/bin/env python3
"""
Fetch GitHub statistics using the GitHub API.
Excludes EMBER and LakeShift repositories.
Outputs to stats.json for consumption by update_readme_stats.py
"""

import os
import sys
import json
import requests
from datetime import datetime, timezone
from typing import Dict, List, Any

# Repositories to exclude from all queries
EXCLUDED_REPOS = {'ember-fire-commander', 'lakeshift'}

def get_github_token() -> str:
    """Get GitHub token from environment."""
    token = os.getenv('GITHUB_TOKEN')
    if not token:
        print("Error: GITHUB_TOKEN environment variable not set", file=sys.stderr)
        sys.exit(1)
    return token

def fetch_user_repos(token: str, username: str = 'suhail39ahmed') -> List[Dict[str, Any]]:
    """Fetch all public repositories for the user, excluding specified repos."""
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    repos = []
    page = 1
    per_page = 100
    
    while True:
        url = f'https://api.github.com/users/{username}/repos'
        params = {
            'type': 'owner',
            'sort': 'updated',
            'per_page': per_page,
            'page': page
        }
        
        response = requests.get(url, headers=headers, params=params, timeout=30)
        
        if response.status_code != 200:
            print(f"Error fetching repos: {response.status_code}", file=sys.stderr)
            print(f"Response: {response.text}", file=sys.stderr)
            return []
        
        batch = response.json()
        if not batch:
            break
        
        # Filter out excluded repositories
        filtered_batch = [r for r in batch if r['name'] not in EXCLUDED_REPOS]
        repos.extend(filtered_batch)
        
        page += 1
        
        # GitHub returns max 100 per page
        if len(batch) < per_page:
            break
    
    return repos

def count_languages(repos: List[Dict[str, Any]]) -> Dict[str, int]:
    """Count languages across all repositories."""
    language_counts = {}
    
    for repo in repos:
        if repo.get('language'):
            lang = repo['language']
            language_counts[lang] = language_counts.get(lang, 0) + 1
    
    return language_counts

def get_recent_activity(repos: List[Dict[str, Any]], limit: int = 5) -> List[Dict[str, Any]]:
    """Get recently updated repositories."""
    # Sort by updated_at
    sorted_repos = sorted(
        repos,
        key=lambda r: r.get('updated_at', ''),
        reverse=True
    )
    
    recent = []
    for repo in sorted_repos[:limit]:
        recent.append({
            'name': repo['name'],
            'description': repo.get('description', ''),
            'url': repo['html_url'],
            'updated_at': repo['updated_at'],
            'language': repo.get('language', 'N/A'),
            'stars': repo.get('stargazers_count', 0)
        })
    
    return recent

def calculate_total_commits(token: str, repos: List[Dict[str, Any]]) -> int:
    """
    Calculate total commits across all repos (approximate).
    Note: This is a best-effort count using repo statistics.
    """
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    total = 0
    
    for repo in repos:
        # Get commit count from repo stats
        url = f"https://api.github.com/repos/suhail39ahmed/{repo['name']}/contributors"
        try:
            response = requests.get(url, headers=headers, timeout=30)
            if response.status_code == 200:
                contributors = response.json()
                # Sum contributions from all contributors
                # (In practice, mostly just the user's own commits)
                for contributor in contributors:
                    if contributor['login'] == 'suhail39ahmed':
                        total += contributor.get('contributions', 0)
                        break
        except Exception as e:
            print(f"Warning: Could not fetch commits for {repo['name']}: {e}", file=sys.stderr)
            continue
    
    return total

def main():
    """Main entry point."""
    token = get_github_token()
    username = 'suhail39ahmed'
    
    print(f"Fetching GitHub stats for {username}...", file=sys.stderr)
    print(f"Excluding repositories: {', '.join(EXCLUDED_REPOS)}", file=sys.stderr)
    
    # Fetch all repos
    repos = fetch_user_repos(token, username)
    
    if not repos:
        print("Warning: No repositories found or API error", file=sys.stderr)
        # Create minimal stats for graceful fallback
        stats = {
            'updated_at': datetime.now(timezone.utc).isoformat(),
            'repo_count': 0,
            'languages': {},
            'recent_activity': [],
            'total_commits': 0,
            'error': 'No repositories found or API error'
        }
    else:
        print(f"Found {len(repos)} repositories (after exclusions)", file=sys.stderr)
        
        # Calculate stats
        languages = count_languages(repos)
        recent = get_recent_activity(repos, limit=5)
        
        # Note: Total commits calculation can be slow, skip if too many repos
        if len(repos) <= 50:
            total_commits = calculate_total_commits(token, repos)
        else:
            print("Skipping commit count (too many repos)", file=sys.stderr)
            total_commits = 0
        
        stats = {
            'updated_at': datetime.now(timezone.utc).isoformat(),
            'repo_count': len(repos),
            'languages': languages,
            'recent_activity': recent,
            'total_commits': total_commits
        }
    
    # Write to stats.json
    output_path = 'tools/stats.json'
    with open(output_path, 'w') as f:
        json.dump(stats, f, indent=2)
    
    print(f"Stats written to {output_path}", file=sys.stderr)
    print(json.dumps(stats, indent=2))

if __name__ == '__main__':
    main()
