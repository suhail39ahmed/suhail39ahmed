(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
// scroll-driven hero words
const hero=document.querySelector('.hero'),W=[...document.querySelectorAll('.bigword')],D=[...document.querySelectorAll('.prog i')];
function upd(){if(RM){W.forEach(w=>w.classList.add('on'));return}const r=hero.getBoundingClientRect(),t=Math.min(.999,Math.max(0,-r.top/(hero.offsetHeight-innerHeight)));const i=Math.floor(t*W.length);D.forEach((d,k)=>d.classList.toggle('on',k===i))}
addEventListener('scroll',upd,{passive:true});upd();
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// terminal
const out=document.getElementById('out'),inp=document.getElementById('cmd');
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const say=(h)=>{out.insertAdjacentHTML('beforeend',h+'\n');out.scrollTop=out.scrollHeight};
const C={
help:()=>`<span class="k">help</span>      this list
<span class="k">whoami</span>    who's behind the keyboard
<span class="k">projects</span>  what I've designed & built
<span class="k">stack</span>     tools I play with
<span class="k">router</span> &lt;prompt&gt;  demo: pick a model tier for a prompt
<span class="k">contact</span>   swap notes
<span class="k">clear</span>     wipe the screen`,
whoami:()=>`Suhail Ahmed · Solutions Architect · Singapore
I design, build and run AI, cloud and data platforms.
10+ years across infrastructure, cloud & data.`,
projects:()=>[...document.querySelectorAll('.card h3')].map((h,i)=>` ${String(i+1).padStart(2,'0')}  ${h.textContent}`).join('\n')+'\n→ scroll up to Featured Engineering for the details',
stack:()=>'[ai]    Azure AI Foundry · MCP · LLM routing · RAG · Evals · Gemini · Cursor\n[cloud] Azure · AWS · Terraform · Bicep · Azure DevOps · GitHub Actions · GitLab · Kubernetes · Prometheus/Grafana\n[data]  Databricks · Snowflake / Cortex · Sigma · Streamlit · Python · SQL',
contact:()=>'email    suhail39ahmed@gmail.com\nlinkedin linkedin.com/in/suhail-ahmed-sg\ngithub   github.com/suhail39ahmed',
sudo:()=>'nice try. a human approves every high-stakes call around here.',
};
function router(p){if(!p)return'usage: router <prompt>';const s=p.toLowerCase(),n=p.split(/\s+/).length;
const R=[[/(architect|design|multi-agent|prove|reason|plan|trade-?off|security)/,'T4 · strongest','deep reasoning / architecture keywords'],
[/(code|debug|stack trace|sql|terraform|refactor|bug|test)/,'T3 · code-capable','code / infra keywords'],
[/(summar|translate|rewrite|extract|classify|pdf)/,'T2 · standard','transform-style task']];
let t='T1 · mini (cheapest)',why='short, simple prompt';for(const[r,tt,w]of R)if(r.test(s)){t=tt;why=w;break}
if(t.startsWith('T1')&&n>60){t='T2 · standard';why='long prompt'}
return `[demo] prompt: "${esc(p)}"\n[demo] rule matched: ${why}\n[demo] route → <span class="k">${t}</span>\n(simulated with simple rules; the real repo uses an LLM classifier + policy validation)`}
function run(raw){const v=raw.trim();say(`<span class="p">$</span> ${esc(v)}`);if(!v)return;const[c,...a]=v.split(/\s+/);
if(c==='clear'){out.innerHTML='';return}if(c==='router'){say(router(a.join(' ')));return}
say(C[c.toLowerCase()]?C[c.toLowerCase()]():`command not found: ${esc(c)} — try <span class="k">help</span>`)}
document.getElementById('tf').addEventListener('submit',e=>{e.preventDefault();run(inp.value);inp.value=''});
document.querySelectorAll('.hints button').forEach(b=>b.addEventListener('click',()=>run(b.textContent)));
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{const f=b.dataset.f;document.querySelectorAll('.filters button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});document.querySelectorAll('.card').forEach(c=>{c.hidden=!(f==='all'||c.dataset.tags.split(' ').includes(f))})}));
say('welcome to savvysuhail.com — type <span class="k">help</span> to start.');})();
