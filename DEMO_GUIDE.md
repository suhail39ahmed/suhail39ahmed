# Demo & Testing Guide

## Overview

This PR adds three major features to the portfolio. This guide shows how to test and verify each one.

---

## 1. Animated GitHub Profile README

### What's New
- Architecture diagram showing Azure cloud, AI request flow, and data platform
- Auto-updating stats sections
- First-person casual voice
- Links to interactive terminal

### How to Test
1. **View on GitHub**: The README renders natively on GitHub with the architecture diagram
2. **Check diagram**: View `assets/architecture.svg` - should show animated flow with nodes and connections
3. **Verify stats markers**: Look for `<!-- STATS_START -->` and `<!-- STATS_END -->` in README.md
4. **Preview locally**: Open `tools/demo_readme.html` in a browser to see the styled README

### Key Files
- `README.md` - Main profile README
- `assets/architecture.svg` - Animated architecture diagram
- `tools/demo_readme.html` - Styled preview (for testing)

---

## 2. Daily GitHub Stats Workflow

### What's New
- GitHub Action that runs daily at 00:00 UTC
- Fetches repos, languages, and recent activity
- Excludes EMBER and LakeShift repos
- Updates only bounded sections in README

### How to Test

#### Run Tests:
```bash
pip install -r requirements.txt
pytest tools/test_stats_generator.py -v
```

Expected output:
```
============================= test session starts ==============================
9 passed, 1 skipped in 0.05s
===============================
```

#### Test Stats Generation (requires GitHub token):
```bash
export GITHUB_TOKEN="your_github_token"
python3 tools/fetch_github_stats.py
python3 tools/update_readme_stats.py
```

This will:
1. Fetch public repos (excluding EMBER and LakeShift)
2. Generate `tools/stats.json`
3. Update README between the markers

#### Verify Exclusion:
```bash
# Check that EMBER and LakeShift are excluded
python3 -c "from tools.fetch_github_stats import EXCLUDED_REPOS; print(EXCLUDED_REPOS)"
# Should output: {'ember-fire-commander', 'lakeshift'}
```

### Key Files
- `.github/workflows/update-profile.yml` - GitHub Action workflow
- `tools/fetch_github_stats.py` - Fetches stats from GitHub API
- `tools/update_readme_stats.py` - Updates README
- `tools/test_stats_generator.py` - Comprehensive test suite
- `requirements.txt` - Python dependencies

---

## 3. Interactive Terminal UI

### What's New
- Real functional terminal embedded in portfolio site
- Commands: help, whoami, projects, stack, contact, clear
- Keyboard accessible (Tab, Up/Down arrows)
- Mobile-friendly

### How to Test

#### Quick Demo:
```bash
cd /path/to/repo
python3 -m http.server 8000
```

Then open in browser:
- **Terminal demo**: http://localhost:8000/tools/demo_terminal.html
- **Full site**: http://localhost:8000/#terminal

#### Commands to Try:
```bash
help                # Show all commands
whoami              # About Suhail
projects            # List all projects
projects ai         # Filter by AI projects
projects cloud      # Filter by cloud projects
projects data       # Filter by data projects
stack               # Show tech stack
contact             # Contact information
clear               # Clear terminal
```

#### Keyboard Features:
- **Tab**: Command completion
- **Up/Down arrows**: Command history
- **Enter**: Execute command
- **Click anywhere**: Focus input

#### Mobile Testing:
1. Open on mobile device or use browser DevTools mobile emulation
2. Terminal should be responsive
3. Mobile keyboard should work
4. Scroll should work within terminal viewport

### Key Files
- `js/terminal.js` - Terminal logic and commands
- `css/terminal.css` - Terminal styling
- `tools/src-index.html` - Updated terminal section
- `tools/demo_terminal.html` - Standalone demo (for testing)

---

## Build & Deploy Testing

### Build Site:
```bash
python3 tools/build_site.py
```

Expected output: `ok`

This generates:
- `index.html` - Homepage with terminal
- `projects/index.html`
- `hackathons/index.html`
- `about/index.html`

### Verify Terminal Integration:
```bash
grep -q "term-container" index.html && echo "✓ Terminal found"
grep -q "terminal.js" index.html && echo "✓ Terminal JS linked"
grep -q "terminal.css" index.html && echo "✓ Terminal CSS linked"
```

---

## Visual Testing Checklist

### README (GitHub)
- [ ] Architecture diagram displays correctly
- [ ] Animated SVG shows flow (packets moving)
- [ ] Stats section has clear markers
- [ ] Links work (Portfolio, Terminal, LinkedIn)
- [ ] EMBER and LakeShift projects still referenced

### Terminal (Browser)
- [ ] Terminal loads on page
- [ ] Commands respond correctly
- [ ] Tab completion works
- [ ] Up/Down arrow history works
- [ ] Help command shows all commands
- [ ] Projects filter (ai/cloud/data) works
- [ ] Links are clickable and correct
- [ ] Mobile view is usable
- [ ] Reduced motion respected

### Site Build
- [ ] Site builds without errors
- [ ] All pages generate correctly
- [ ] No broken links
- [ ] EMBER and LakeShift cards unchanged
- [ ] Architecture diagram loads

---

## Screenshots Guide

### To Capture Screenshots:

#### Terminal (Desktop):
1. Open http://localhost:8000/tools/demo_terminal.html
2. Type `help` and press Enter
3. Take screenshot at 1920x1080
4. Save as `terminal-desktop.png`

#### Terminal (Mobile):
1. Open same URL in mobile view (375x812)
2. Type `projects ai`
3. Take screenshot
4. Save as `terminal-mobile.png`

#### README Preview:
1. Open http://localhost:8000/tools/demo_readme.html
2. Scroll to show architecture diagram
3. Take screenshot at 1920x1080
4. Save as `readme-preview-desktop.png`

#### Profile Page:
1. Open http://localhost:8000/
2. Scroll to terminal section
3. Take screenshot at 1920x1080
4. Save as `profile-page-desktop.png`

---

## Troubleshooting

### Tests Fail
- Ensure pytest is installed: `pip install pytest`
- Check Python version: `python3 --version` (should be 3.8+)

### Stats Not Updating
- Check GITHUB_TOKEN is set
- Verify token has repo read permissions
- Check rate limits: `curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/rate_limit`

### Terminal Not Working
- Check browser console for errors
- Verify terminal.js and terminal.css are loaded
- Try opening demo_terminal.html directly

### Site Build Fails
- Check tools/src-index.html for syntax errors
- Verify all asset paths are correct
- Run: `python3 -c "import tools.build_site"`

---

## What's Next

After review:
1. Add screenshots to artifacts
2. Enable workflow (if approved)
3. Test workflow with `workflow_dispatch`
4. Monitor first automated run
5. Merge to main (if approved)

---

## Notes

- **EMBER and LakeShift**: Completely excluded from stats queries, references preserved in site
- **No merge yet**: PR is for review only
- **Workflow disabled**: Requires manual enablement after approval
- **Screenshots**: Manual capture or automated (see scripts in tools/)

---

For questions or issues, check the PR description or test locally using the instructions above.
