#!/bin/bash
# Capture screenshots for the PR
set -e

# Create artifacts directory
mkdir -p /opt/cursor/artifacts

# Start a simple HTTP server in the background
cd /agent/repos/suhail39ahmed
python3 -m http.server 8765 > /dev/null 2>&1 &
SERVER_PID=$!

# Give server time to start
sleep 2

echo "Server started on PID $SERVER_PID"

# Take terminal screenshot (desktop view)
echo "Capturing terminal screenshot (desktop)..."
google-chrome --headless --screenshot=/opt/cursor/artifacts/terminal-desktop.png \
  --window-size=1920,1080 \
  --default-background-color=0 \
  http://localhost:8765/#terminal 2>/dev/null || true

sleep 1

# Take terminal screenshot (mobile view)
echo "Capturing terminal screenshot (mobile)..."
google-chrome --headless --screenshot=/opt/cursor/artifacts/terminal-mobile.png \
  --window-size=375,812 \
  --default-background-color=0 \
  http://localhost:8765/#terminal 2>/dev/null || true

sleep 1

# Create a simple preview page for README
cat > /tmp/readme-preview.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README Preview</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292f;
      background: #ffffff;
      max-width: 1012px;
      margin: 0 auto;
      padding: 32px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    pre {
      background: #f6f8fa;
      padding: 16px;
      border-radius: 6px;
      overflow-x: auto;
    }
    code {
      background: #f6f8fa;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: ui-monospace, monospace;
    }
    h1, h2, h3 {
      border-bottom: 1px solid #d0d7de;
      padding-bottom: 8px;
    }
    a {
      color: #0969da;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div id="content"></div>
  <script>
    fetch('http://localhost:8765/README.md')
      .then(r => r.text())
      .then(md => {
        // Very simple markdown rendering for preview
        let html = md
          .replace(/^# (.+)$/gm, '<h1>$1</h1>')
          .replace(/^## (.+)$/gm, '<h2>$1</h2>')
          .replace(/^### (.+)$/gm, '<h3>$1</h3>')
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
          .replace(/`([^`]+)`/g, '<code>$1</code>')
          .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="http://localhost:8765/$2" alt="$1" />')
          .replace(/^---$/gm, '<hr>')
          .replace(/\n\n/g, '</p><p>')
          .replace(/^(.+)$/gm, '<p>$1</p>');
        document.getElementById('content').innerHTML = html;
      });
  </script>
</body>
</html>
EOF

# Take README preview screenshot
echo "Capturing README preview (desktop)..."
google-chrome --headless --screenshot=/opt/cursor/artifacts/readme-preview-desktop.png \
  --window-size=1920,1080 \
  --default-background-color=0 \
  file:///tmp/readme-preview.html 2>/dev/null || true

sleep 1

# Profile page screenshot
echo "Capturing profile page (desktop)..."
google-chrome --headless --screenshot=/opt/cursor/artifacts/profile-page-desktop.png \
  --window-size=1920,1080 \
  --default-background-color=0 \
  http://localhost:8765/ 2>/dev/null || true

sleep 1

# Kill server
kill $SERVER_PID 2>/dev/null || true

echo "Screenshots saved to /opt/cursor/artifacts/"
ls -lh /opt/cursor/artifacts/*.png
