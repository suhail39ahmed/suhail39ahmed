import re,os
# Builds index.html, projects/, hackathons/, about/ from tools/src-index.html.  Run: python3 tools/build_site.py
R=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..')+'/';src=open(R+'tools/src-index.html').read()
# ---- v7 lean head/body ----
src=re.sub(r'<link rel="stylesheet" href="css/v5/[^"]+">\n?','',src)
src=re.sub(r'<link rel="preconnect"[^>]*>\n?|<link rel="stylesheet" href="https://fonts[^>]*>\n?','',src)
src=src.replace('<link rel="icon" type="image/png" href="images/avatar.png">','<link rel="icon" type="image/png" href="images/favicon.png"><link rel="preload" href="/fonts/jakarta-800.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/grotesk-400.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="css/site.css">')
src=re.sub(r'<script src="https://cdn[^>]*></script>','',src)
src=src.replace('<script src="js/v5/main.js" defer></script>','<script src="js/main.js" defer></script>').replace('<script src="js/v5/v3.js" defer></script>','<script src="js/site.js" defer></script>')
src=re.sub(r'<div class="loader".*?</div><i class="lbar"></i></div>','',src,flags=re.S)
src=re.sub(r'<div class="grain"[^>]*></div>|<div class="cur2?"[^>]*></div>','',src)
src=re.sub(r'<div class="bg" aria-hidden="true">.*?</canvas></div>','',src,flags=re.S)
src=src.replace('<header class="hero" id="top"><div class="stick">','<header class="hero" id="top"><canvas id="graph" aria-hidden="true"></canvas><div class="stick">')
src=re.sub(r'(<div class="bigword[^"]*" aria-hidden="true">.*?</div>)+','<div class="hw" role="text" aria-label="AI agents, cloud platforms, data platforms, LLM routers and RAG"><span id="hw" aria-hidden="true">AI AGENTS</span><i class="caret" aria-hidden="true"></i></div>',src,count=1,flags=re.S)
src=re.sub(r'<div class="bigword[^"]*" aria-hidden="true">.*?</div>','',src)
src=re.sub(r'<div class="prog".*?</div>','',src,flags=re.S)
src=re.sub(r'src="images/projects/((?!ember-fire-commander)[^".]+)\.jpg"',r'src="images/projects/\1.webp" decoding="async"',src)
def sec(pat):
  m=re.search(pat,src,re.S);assert m,pat;return m.group(0)
# absolute asset paths
def absify(h):
  h=re.sub(r'(href|src)="(css/|js/|images/|files/|fonts/|fraud-policy-copilot/)',r'\1="/\2',h);return h
NAV='<nav aria-label="Main"><span class="logo slot" aria-hidden="true"></span><a class="brand-name" href="/">Suhail Ahmed</a><ul><li><a href="/projects/">Projects</a></li><li><a href="/#what">What I do</a></li><li><a href="/#terminal">Terminal</a></li><li><a href="/hackathons/">Hackathons</a></li><li><a href="/#writing">Writing</a></li><li><a href="/about/">About</a></li><li><a href="/#contact">Contact</a></li></ul><a class="btn ghost" href="/files/Suhail_Resume_v1.8.pdf" style="padding:7px 16px;font-size:.85rem">Resume</a></nav>'
src=re.sub(r'<nav aria-label="Main">.*?</nav>',NAV,src,flags=re.S)
ava=re.search(r'<a class="ava".*?</a>\n?',src,re.S).group(0);src=src.replace(ava,'');ava=ava.replace('href="#top"','href="/"')
src=src.replace('<nav aria-label="Main">','<nav aria-label="Main">'+ava.strip().replace('images/avatar.webp','images/avatar-160.webp'),1)
src=src.replace('<a class="ava" href="#top"','<a class="ava" href="/"')
work=sec(r'<section id="work".*?</section>');hack=sec(r'<section id="hackathons">.*?</section>')
about=sec(r'<section class="dark" id="about">.*?</section>');certs=sec(r'<section style="padding-bottom:40px">.*?</section>')
cards=re.findall(r'<a class="card reveal".*?</a>(?=<a class="card|</div>)',work,re.S);assert len(cards)==10,len(cards)
byid={re.search(r'id="([^"]+)"',c).group(1):c for c in cards}
recent=['ember-fire-commander','lakeshift','agentic-procurement','fraud-policy-copilot']
gstart=work.index('<div class="grid">')+len('<div class="grid">');gend=work.index(cards[-1])+len(cards[-1])
filt=re.search(r'<div class="filters.*?</div>',work,re.S).group(0)
see='<p class="seeall"><a class="btn" href="/projects/">See all projects →</a> <a class="btn ghost" href="https://github.com/suhail39ahmed" target="_blank" rel="noopener">GitHub profile</a></p>'
home_work=(work[:gstart]+''.join(byid[i] for i in recent)+work[gend:]).replace(filt,'').replace('<div class="grid">','<div class="grid grid4">')
home_work=re.sub(r'<p style="margin-top:28px">More on .*?</p>',see,home_work)
home_work=home_work.replace("Things I’ve designed and built.","Recent builds.")
rows=re.findall(r'<div class="row reveal">.*?</div></div>',hack,re.S);assert len(rows)==5
home_hack=hack.replace(''.join(rows[3:]),'')+''
home_hack=home_hack.replace('</div></div></section>','</div><p class="seeall"><a class="btn" href="/hackathons/">See all hackathons →</a></p></div></section>',1) if False else re.sub(r'(</div></div></section>)$',r'</div><p class="seeall"><a class="btn" href="/hackathons/">See all hackathons →</a></p></div></section>',home_hack)
det=re.search(r'<details.*?</details>',certs,re.S).group(0)
home_certs=certs.replace(det,'<p class="seeall"><a class="btn" href="/about/#career">Full career path →</a></p>')
ARCH='''<section id="architecture" class="arch-sec"><div class="wrap"><div class="reveal"><span class="eyebrow">02 / How it fits together</span><h2>Cloud, data and AI on one path.</h2><p class="lead">How a request moves through an Azure gateway, an AI flow and a Databricks lakehouse. Hover or tap a box for what it does.</p></div>
<div class="arch-wrap"><canvas id="arch" role="img" aria-label="Architecture diagram: Azure cloud lane with Foundry gateway and LLM router, AI request flow lane with semantic cache, token minimizer, agentic workflow, skills, RAG and evals, and Databricks lakehouse lane from sources through bronze, silver and gold to embeddings and vector search feeding RAG."></canvas><div id="archtip" class="archtip" hidden></div></div>
<div class="lanes" aria-hidden="false">
<div class="lane az"><b>Azure cloud</b><span>Key Vault · Identity</span><span class="ring">Foundry gateway</span><span>LLM Router</span><span>Azure OpenAI models</span><span>Monitoring</span></div>
<div class="lane ai"><b>AI request flow</b><span>Prompt</span><span class="ring">Semantic cache</span><span>Token minimizer</span><span>Agentic workflow</span><span>Skills / MCP</span><span>RAG retriever</span><span class="ring">Guardrails · Evals</span><span>Response</span></div>
<div class="lane db"><b>Databricks lakehouse</b><span>Sources</span><span>Ingest (Lakeflow / Auto Loader)</span><span>Bronze</span><span>Silver</span><span>Gold · Delta · Unity Catalog</span><span>Embeddings job</span><span class="ring">Vector Search</span><span>Snowflake · Sigma (analytics)</span></div></div>
<div class="helps"><div><i></i><b>Gateway secures and routes every call</b><p>Auth, routing and rate limits sit in one place, with secrets in Key Vault and every call monitored.</p></div><div><i></i><b>Cache + trim cut tokens and cost</b><p>Repeat questions come from the semantic cache; the token minimizer trims context before the model.</p></div><div><i></i><b>Fresh, governed data feeds RAG</b><p>Lakeflow ingests into Bronze, Silver and Gold under Unity Catalog; embeddings land in Vector Search for retrieval.</p></div><div><i></i><b>Evals gate releases</b><p>Faithfulness, tool success and PII checks run before a change ships.</p></div></div>
<p class="note">The Foundry gateway and the Databricks / Snowflake agents run in production at my day job; the router, cache and RAG pieces are my open-source labs.</p></div></section>'''
home=src.replace(work,home_work+ARCH).replace(hack,home_hack).replace(certs,home_certs).replace('<script src="js/site.js" defer></script>','<script src="js/site.js" defer></script><script src="js/arch.js" defer></script>')
open(R+'index.html','w').write(absify(home))
# subpages
head=src[:src.index('<header class="hero"')]
tail=src[src.index('<section id="contact"'):]
def page(path,title,body,desc):
  h=head.replace('<link rel="canonical" href="https://savvysuhail.com/">',f'<link rel="canonical" href="https://savvysuhail.com/{path}/">')
  h=re.sub(r'<title>.*?</title>',f'<title>{title} — Suhail Ahmed</title>',h)
  h=re.sub(r'<meta property="og:url" content="[^"]*">',f'<meta property="og:url" content="https://savvysuhail.com/{path}/">',h)
  h=re.sub(r'<meta property="og:title" content="[^"]*">',f'<meta property="og:title" content="{title} — Suhail Ahmed">',h)
  h=re.sub(r'<script type="application/ld\+json">.*?</script>','',h,flags=re.S)
  h=h.replace('<body>','<body class="sub">')
  os.makedirs(R+path,exist_ok=True)
  open(R+path+'/index.html','w').write(absify(h+'<main class="subpage">'+body+'</main>\n'+tail))
pw=work.replace('id="work" style="padding-top:20px"','id="work" class="allwork"').replace('01 / Featured Engineering','Projects').replace('<p style="margin-top:28px">','<p class="seeall">')
page('projects','Projects',pw,'')
page('hackathons','Hackathons',hack.replace('03 / Hackathons','Hackathons'),'')
page('about','About',about.replace('05 / About','About')+certs.replace('06 / Certifications & career','Certifications & career').replace('<details class="reveal">','<details class="reveal" id="career" open>'),'')
print('ok')
