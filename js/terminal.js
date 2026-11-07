/**
 * Interactive Terminal for Portfolio Site
 * Real functional keyboard/touch accessible UI
 * No arbitrary command execution - safe predefined commands only
 */

(()=>{
  'use strict';
  
  const PROJECTS = {
    ai: [
      { name: 'llm-auto-router', url: 'https://github.com/suhail39ahmed/llm-auto-router', desc: 'Routes prompts to cheapest capable model. 98% accuracy, ~27-29% cheaper.', tech: 'Azure AI Foundry, Python' },
      { name: 'production_grade_rag', url: 'https://github.com/suhail39ahmed/production_grade_rag', desc: 'RAG through 7 phases. Hybrid BM25+vector, rerank, CI eval gate.', tech: 'RAG, Python, Retrieval' },
      { name: 'ember-fire-commander', url: 'https://github.com/suhail39ahmed/ember-fire-commander', desc: 'EMBER: Weather-aware wildfire triage for village brigades.', tech: 'Gemini Live, ADK, Cloud Run' },
      { name: 'foundry-eval-gate', url: 'https://github.com/suhail39ahmed/foundry-eval-gate', desc: 'CI eval gate on agent traces: faithfulness, tool success, PII leak.', tech: 'Evals, CI/CD, Agents' },
      { name: 'fraud-policy-copilot', url: 'https://github.com/suhail39ahmed/fraud-policy-copilot', desc: 'Snowflake CoCo CLI fraud case copilot with policy citations.', tech: 'Snowflake, CoCo CLI' },
      { name: 'ado-pipeline-doctor', url: 'https://github.com/suhail39ahmed/ado-pipeline-doctor', desc: 'Failed pipeline logs → RCA JSON, human approval required.', tech: 'Azure DevOps, GitHub Actions' }
    ],
    cloud: [
      { name: 'azure-hub-spoke-terraform', url: 'https://github.com/suhail39ahmed/azure-hub-spoke-terraform', desc: 'Hub-and-spoke Terraform modules for Azure networking.', tech: 'Terraform, Azure' },
      { name: 'iac-guard-mcp', url: 'https://github.com/suhail39ahmed/iac-guard-mcp', desc: 'Terraform/Bicep diff → policy findings. MCP-style ops tool.', tech: 'MCP, IaC, Azure' },
      { name: 'azure-ops-mcp', url: 'https://github.com/suhail39ahmed/azure-ops-mcp', desc: 'Key Vault / ADO ops tools with dry-run + audit.', tech: 'Azure, Python' },
      { name: 'automation', url: 'https://github.com/suhail39ahmed/automation', desc: 'Python Key Vault automation and CI/CD demos.', tech: 'Python, Azure' }
    ],
    data: [
      { name: 'lakeshift', url: 'https://github.com/suhail39ahmed/lakeshift', desc: 'PL/SQL → Snowflake, proven row-by-row. Nemotron on Nebius.', tech: 'Nemotron, Snowflake, Oracle' },
      { name: 'lakehouse-insights-skill', url: 'https://github.com/suhail39ahmed/lakehouse-insights-skill', desc: 'Governed metrics catalog → proposed SQL.', tech: 'Databricks, Unity Catalog' }
    ]
  };
  
  const STACK = {
    'AI & ML': ['Azure AI Foundry', 'Databricks', 'Snowflake Cortex', 'Google Cloud / Gemini', 'RAG', 'Evals'],
    'Cloud': ['Azure', 'AWS', 'Terraform', 'Bicep', 'Kubernetes', 'Docker'],
    'Data': ['Databricks', 'Snowflake', 'Sigma', 'Unity Catalog'],
    'CI/CD': ['GitHub Actions', 'Azure DevOps', 'GitLab CI'],
    'Languages': ['Python', 'TypeScript', 'Bash'],
    'Tools': ['MCP', 'Streamlit', 'Cursor']
  };
  
  const COMMANDS = {
    help: {
      desc: 'Show available commands',
      fn: () => {
        return [
          '<span class="t-cmd">Available commands:</span>',
          '',
          '  <span class="t-key">help</span>      Show this help',
          '  <span class="t-key">whoami</span>    About me',
          '  <span class="t-key">projects</span>  List all projects (or: projects ai, projects cloud, projects data)',
          '  <span class="t-key">stack</span>     Tech stack',
          '  <span class="t-key">contact</span>   Contact information',
          '  <span class="t-key">clear</span>     Clear terminal',
          '',
          '<span class="t-dim">Tip: Use Tab for command completion, Up/Down arrows for history</span>'
        ];
      }
    },
    
    whoami: {
      desc: 'About me',
      fn: () => {
        return [
          '<span class="t-head">Suhail Ahmed</span>',
          '',
          'I design and build AI agents, LLM routers and RAG systems on',
          'cloud and data platforms. Architecture first, then code, then evals.',
          '',
          '<span class="t-label">Focus:</span> AI Engineering · Cloud Platforms · Data Platforms',
          '<span class="t-label">Background:</span> 10+ years Azure, AWS, Terraform, Kubernetes',
          '<span class="t-label">Role:</span> Solutions Architect · Singapore',
          '',
          '<span class="t-label">What I\'m building:</span>',
          '  • AI: Agents, LLM routing, RAG, evals & operational readiness',
          '  • Cloud: Azure/AWS architectures, IaC, Kubernetes, CI/CD',
          '  • Data: Databricks, Snowflake, Sigma — lakehouse to AI',
          '',
          '<span class="t-link">→ Full portfolio: <a href="https://savvysuhail.com" target="_blank" rel="noopener">savvysuhail.com</a></span>',
          '<span class="t-link">→ GitHub: <a href="https://github.com/suhail39ahmed" target="_blank" rel="noopener">github.com/suhail39ahmed</a></span>'
        ];
      }
    },
    
    projects: {
      desc: 'List projects',
      fn: (args) => {
        const category = args[0]?.toLowerCase();
        
        if (category && ['ai', 'cloud', 'data'].includes(category)) {
          const items = PROJECTS[category];
          const title = category.toUpperCase();
          
          const lines = [
            `<span class="t-head">${title} Projects</span>`,
            ''
          ];
          
          items.forEach((proj, i) => {
            lines.push(
              `<span class="t-num">${String(i + 1).padStart(2, '0')}</span> <span class="t-key">${proj.name}</span>`,
              `    ${escapeHtml(proj.desc)}`,
              `    <span class="t-dim">${escapeHtml(proj.tech)}</span>`,
              `    <span class="t-link"><a href="${proj.url}" target="_blank" rel="noopener">${proj.url}</a></span>`,
              ''
            );
          });
          
          return lines;
        }
        
        // Show all projects by category
        const lines = [
          '<span class="t-head">All Projects</span>',
          ''
        ];
        
        let count = 1;
        ['ai', 'cloud', 'data'].forEach(cat => {
          const catName = cat.toUpperCase();
          lines.push(`<span class="t-label">${catName}:</span>`);
          
          PROJECTS[cat].forEach(proj => {
            lines.push(
              `  <span class="t-num">${String(count++).padStart(2, '0')}</span> <span class="t-key">${proj.name}</span>`,
              `      ${escapeHtml(proj.desc)}`,
              `      <span class="t-link"><a href="${proj.url}" target="_blank" rel="noopener">${proj.url}</a></span>`
            );
          });
          
          lines.push('');
        });
        
        lines.push('<span class="t-dim">Usage: projects [ai|cloud|data] to filter by category</span>');
        
        return lines;
      }
    },
    
    stack: {
      desc: 'Tech stack',
      fn: () => {
        const lines = [
          '<span class="t-head">Tech Stack</span>',
          ''
        ];
        
        Object.entries(STACK).forEach(([category, items]) => {
          lines.push(`<span class="t-label">${category}:</span>`);
          lines.push(`  ${items.join(' · ')}`);
          lines.push('');
        });
        
        return lines;
      }
    },
    
    contact: {
      desc: 'Contact information',
      fn: () => {
        return [
          '<span class="t-head">Contact</span>',
          '',
          '<span class="t-label">Email:</span> <a href="mailto:suhail39ahmed@gmail.com">suhail39ahmed@gmail.com</a>',
          '<span class="t-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/suhail-ahmed-sg/" target="_blank" rel="noopener">linkedin.com/in/suhail-ahmed-sg</a>',
          '<span class="t-label">GitHub:</span> <a href="https://github.com/suhail39ahmed" target="_blank" rel="noopener">github.com/suhail39ahmed</a>',
          '<span class="t-label">Website:</span> <a href="https://savvysuhail.com" target="_blank" rel="noopener">savvysuhail.com</a>',
          '',
          'Designing or building something similar? Let\'s swap notes.'
        ];
      }
    },
    
    clear: {
      desc: 'Clear terminal',
      fn: () => null // Special case handled separately
    }
  };
  
  // Escape HTML to prevent XSS
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
  
  // Terminal state
  let history = [];
  let historyIndex = -1;
  
  // Init terminal
  function init() {
    const term = document.getElementById('term-container');
    if (!term) return;
    
    const output = document.getElementById('term-output');
    const input = document.getElementById('term-input');
    const form = document.getElementById('term-form');
    
    if (!output || !input || !form) return;
    
    // Welcome message
    writeOutput(output, [
      '<span class="t-head">Suhail Ahmed — Portfolio Terminal</span>',
      '',
      'Welcome! Type <span class="t-key">help</span> for available commands.',
      ''
    ]);
    
    // Handle form submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cmd = input.value.trim();
      
      if (!cmd) return;
      
      // Echo command
      writeOutput(output, [`<span class="t-prompt">$</span> ${escapeHtml(cmd)}`]);
      
      // Add to history
      history.push(cmd);
      historyIndex = history.length;
      
      // Execute
      executeCommand(output, cmd);
      
      // Clear input
      input.value = '';
      
      // Scroll to bottom
      scrollToBottom(output);
    });
    
    // Handle keyboard navigation
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          input.value = history[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          input.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const partial = input.value.toLowerCase();
        if (partial) {
          const matches = Object.keys(COMMANDS).filter(cmd => cmd.startsWith(partial));
          if (matches.length === 1) {
            input.value = matches[0];
          }
        }
      }
    });
    
    // Focus input on terminal click
    term.addEventListener('click', () => {
      input.focus();
    });
    
    // Auto-focus on load
    input.focus();
  }
  
  function executeCommand(output, cmdStr) {
    const parts = cmdStr.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }
    
    if (COMMANDS[cmd]) {
      const result = COMMANDS[cmd].fn(args);
      if (result) {
        writeOutput(output, result);
      }
    } else {
      writeOutput(output, [
        `<span class="t-error">Command not found: ${escapeHtml(cmd)}</span>`,
        'Type <span class="t-key">help</span> for available commands.'
      ]);
    }
  }
  
  function writeOutput(output, lines) {
    const block = document.createElement('div');
    block.className = 't-block';
    block.innerHTML = lines.join('\n');
    output.appendChild(block);
  }
  
  function scrollToBottom(output) {
    requestAnimationFrame(() => {
      output.parentElement.scrollTop = output.parentElement.scrollHeight;
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
