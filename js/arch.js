(()=>{const cv=document.getElementById('arch');if(!cv||!cv.getContext)return;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,x=cv.getContext('2d'),tip=document.getElementById('archtip');
const MONO=getComputedStyle(document.body).getPropertyValue('--mono')||'monospace',DISP='800 13px Jakarta, system-ui, sans-serif';
// lanes: [label, y0, y1, fill]
const LN=[['AZURE CLOUD',.03,.33,'rgba(30,79,216,.05)'],['AI REQUEST FLOW',.37,.62,'rgba(168,134,79,.06)'],['DATABRICKS LAKEHOUSE',.66,.97,'rgba(11,31,58,.05)']];
// nodes: [label, x, y, tooltip, ring]
const N=[
['Key Vault · Identity',.12,.18,'Secrets and managed identity; no keys in code.'],
['Foundry gateway',.32,.12,'Azure AI Foundry gateway: auth, routing and rate limits for every model call.',1],
['LLM Router',.32,.25,'Sits behind the gateway and picks the cheapest model tier that can handle the prompt.'],
['Azure OpenAI models',.56,.18,'Model deployments the gateway routes to.'],
['Monitoring',.82,.18,'Logs, traces and usage for every call through the gateway.'],
['Prompt',.06,.5,'A user or agent request enters the flow.'],
['Semantic cache',.19,.5,'Similar questions reuse a stored answer instead of calling a model.',1],
['Token minimizer',.32,.5,'Trims context before the model call to cut tokens.'],
['Agentic workflow',.52,.5,'An orchestrator plans steps and calls skills, tools and retrieval.'],
['Skills / MCP',.66,.42,'Tools the agent can call through MCP-style interfaces.'],
['RAG retriever',.66,.57,'Fetches top-k relevant chunks to ground the answer.'],
['Guardrails · Evals',.81,.5,'Checks faithfulness, tool success and PII before anything ships.',1],
['Response',.95,.5,'Grounded, checked answer back to the user.'],
['Sources',.06,.8,'Apps, files and operational databases.'],
['Ingest',.18,.8,'Lakeflow / Auto Loader pick up new data incrementally.'],
['Bronze',.29,.8,'Raw data, as landed.'],
['Silver',.39,.8,'Cleaned and conformed tables.'],
['Gold',.5,.8,'Business-ready Delta tables, governed by Unity Catalog.'],
['Embeddings job',.63,.8,'Turns governed Gold content into vectors on a schedule.'],
['Vector Search',.77,.8,'Databricks Vector Search index the RAG retriever queries.',1],
['Snowflake · Sigma',.5,.92,'Analytics consumers of Gold for dashboards and insights.'],
];
const I=Object.fromEntries(N.map((n,i)=>[n[0],i]));
// edges: [a,b,dashed]
const E=[['Prompt','Semantic cache'],['Semantic cache','Token minimizer'],['Token minimizer','LLM Router'],['Key Vault · Identity','Foundry gateway'],['Foundry gateway','LLM Router'],['LLM Router','Azure OpenAI models'],['Azure OpenAI models','Agentic workflow'],['Foundry gateway','Monitoring'],
['Agentic workflow','Skills / MCP'],['Agentic workflow','RAG retriever'],['Agentic workflow','Guardrails · Evals'],['Guardrails · Evals','Response'],['Monitoring','Guardrails · Evals',1],
['Sources','Ingest'],['Ingest','Bronze'],['Bronze','Silver'],['Silver','Gold'],['Gold','Embeddings job'],['Embeddings job','Vector Search'],['Vector Search','RAG retriever'],['Gold','Snowflake · Sigma']].map(([a,b,d])=>[I[a],I[b],d]);
// callouts at intersections: [node, text, dx, dy]
const C=[['Foundry gateway','Gateway secures and routes every call',0,-1],['Semantic cache','Cache + trim cut tokens and cost',0,-1],['Vector Search','Fresh, governed data feeds RAG',0,1],['Guardrails · Evals','Evals gate releases',0,-1]];
let w,h,dpr,pts,P,hover=-1,run=false,T=0,last=0;
const rr=(X,Y,W,H,r)=>{x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+W,Y,X+W,Y+H,r);x.arcTo(X+W,Y+H,X,Y+H,r);x.arcTo(X,Y+H,X,Y,r);x.arcTo(X,Y,X+W,Y,r);x.closePath()};
const layout=()=>{dpr=Math.min(devicePixelRatio||1,2);const r=cv.getBoundingClientRect();w=r.width;h=r.height;cv.width=w*dpr;cv.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0);
 x.font='600 11px '+MONO;pts=N.map(n=>{const tw=x.measureText(n[0]).width;return{X:n[1]*w,Y:n[2]*h,W:tw+28,H:26}});
 P=E.map(([a,b])=>{const A=pts[a],B=pts[b];let p;if(Math.abs(A.Y-B.Y)<4)p=[[A.X,A.Y],[B.X,B.Y]];else if(Math.abs(A.X-B.X)<4)p=[[A.X,A.Y],[B.X,B.Y]];else{const my=(A.Y+B.Y)/2;p=[[A.X,A.Y],[A.X,my],[B.X,my],[B.X,B.Y]]}
  p.seg=[];p.len=0;for(let i=1;i<p.length;i++){const d=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);p.seg.push(d);p.len+=d}return p})};
const at=(p,d)=>{for(let i=0;i<p.seg.length;i++){if(d<=p.seg[i]){const t=p.seg[i]?d/p.seg[i]:0;return[p[i][0]+(p[i+1][0]-p[i][0])*t,p[i][1]+(p[i+1][1]-p[i][1])*t]}d-=p.seg[i]}return p[p.length-1]};
const K=E.map((e,i)=>({e:i,o:Math.random(),v:.12+Math.random()*.12,gold:e[0]>=13})).filter(k=>!E[k.e][2]);
const draw=now=>{if(!run)return;const dt=Math.min(.05,(now-last)/1000||0);last=now;T+=dt*(RM?.3:1);x.clearRect(0,0,w,h);
 // lanes
 LN.forEach(([l,a,b,f])=>{x.fillStyle=f;rr(6,a*h,w-12,(b-a)*h,14);x.fill();x.strokeStyle='rgba(11,31,58,.14)';x.setLineDash([4,5]);x.stroke();x.setLineDash([]);x.fillStyle='rgba(11,31,58,.55)';x.font='700 10px '+MONO;x.fillText(l,18,a*h+16)});
 // gateway zone around gateway+router
 const g=pts[I['Foundry gateway']],rt=pts[I['LLM Router']];x.strokeStyle='rgba(30,79,216,.35)';x.setLineDash([2,3]);rr(g.X-95,g.Y-22,190,rt.Y-g.Y+44,10);x.stroke();x.setLineDash([]);
 const near=i=>i===hover||(hover>=0&&E.some(e=>(e[0]===hover&&e[1]===i)||(e[1]===hover&&e[0]===i)));
 x.lineWidth=1.3;P.forEach((p,i)=>{const hot=near(E[i][0])&&near(E[i][1]);x.setLineDash(E[i][2]?[3,4]:[]);x.strokeStyle=hot?'rgba(168,134,79,.95)':'rgba(11,31,58,.32)';x.beginPath();x.moveTo(p[0][0],p[0][1]);for(let j=1;j<p.length;j++)x.lineTo(p[j][0],p[j][1]);x.stroke()});x.setLineDash([]);
 K.forEach(k=>{k.o=(k.o+dt*(RM?.3:1)*k.v)%1;const p=P[k.e],q=at(p,k.o*p.len);x.fillStyle=k.gold?'#A8864F':'#0B1F3A';x.fillRect(q[0]-3,q[1]-3,6,6)});
 // nodes
 x.textBaseline='middle';pts.forEach((p,i)=>{const n=N[i],hot=i===hover;
  if(n[4]){const pr=1+.12*Math.sin(T*2+i);x.strokeStyle='rgba(168,134,79,.55)';x.lineWidth=2;rr(p.X-p.W/2-6*pr,p.Y-p.H/2-6*pr,p.W+12*pr,p.H+12*pr,10);x.stroke()}
  x.lineWidth=hot?1.6:1;x.fillStyle=hot?'#0B1F3A':n[0]==='Gold'?'#e9d7b0':'#fbf7f1';x.strokeStyle=hot?'#A8864F':'rgba(11,31,58,.55)';rr(p.X-p.W/2,p.Y-p.H/2,p.W,p.H,6);x.fill();x.stroke();
  x.fillStyle=Math.sin(T*3+i*1.7)>-.6?(n[4]?'#A8864F':'#2e9e5b'):'rgba(46,158,91,.25)';x.beginPath();x.arc(p.X-p.W/2+10,p.Y,3,0,7);x.fill();
  x.fillStyle=hot?'#F3E9DC':'#0B1F3A';x.font='600 11px '+MONO;x.fillText(n[0],p.X-p.W/2+18,p.Y+.5)});
 // callouts
 C.forEach(([nm,t,dx,dy])=>{const p=pts[I[nm]];x.font='700 11px '+MONO;const tw=x.measureText(t).width,cx=Math.min(w-tw-20,Math.max(14,p.X-tw/2-8)),cy=p.Y+dy*(p.H/2+24);
  x.fillStyle='#A8864F';rr(cx,cy-10,tw+16,20,10);x.fill();x.fillStyle='#0B1F3A';x.fillText(t,cx+8,cy+.5);x.strokeStyle='rgba(168,134,79,.8)';x.beginPath();x.moveTo(p.X,p.Y+dy*p.H/2);x.lineTo(p.X,cy-dy*10);x.stroke()});
 requestAnimationFrame(draw)};
const start=()=>{if(!run){run=true;last=performance.now();requestAnimationFrame(draw)}};
const show=(i,cx,cy)=>{if(i<0){tip.hidden=true;return}tip.textContent=N[i][0]+' — '+N[i][3];tip.hidden=false;const r=cv.getBoundingClientRect();tip.style.left=Math.min(r.width-260,Math.max(0,cx-130))+'px';tip.style.top=(cy+22)+'px'};
const pick=(e)=>{const r=cv.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;hover=pts.findIndex(p=>Math.abs(mx-p.X)<p.W/2+4&&Math.abs(my-p.Y)<p.H/2+4);cv.style.cursor=hover>=0?'pointer':'default';show(hover,mx,my)};
cv.addEventListener('pointermove',pick);cv.addEventListener('pointerdown',pick);cv.addEventListener('pointerleave',()=>{hover=-1;show(-1)});
layout();addEventListener('resize',layout);document.fonts&&document.fonts.ready.then(layout);
new IntersectionObserver(([e])=>{if(e.isIntersecting&&!document.hidden)start();else run=false}).observe(cv);
document.addEventListener('visibilitychange',()=>{if(document.hidden)run=false});
})();
