(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add('js');
const D={reducedMotion:RM,canvas:'pending',renderer:'canvas2d',scripts:'site.js'};
// marquee twin
const m=$('.marquee');if(m){const c=m.cloneNode(true);c.classList.add('m2');c.setAttribute('aria-hidden','true');m.after(c)}
// reveals
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -5% 0px'});
$$('section .wrap>.reveal,.pillar,.row,.card,.facts,.prod>div,.term,.certs,details,.about-ava,.rows,.seeall,.helps>div,.lane,.arch-wrap').forEach(el=>{el.classList.add('rv');io.observe(el)});
// Fallback to show all reveals after delay, but also show immediately for prefers-reduced-motion or no-js
if(RM||!window.IntersectionObserver){$$('.rv').forEach(e=>e.classList.add('in'))}
setTimeout(()=>$$('.rv').forEach(e=>e.classList.add('in')),3500);
// hero word scramble
const hw=$('#hw'),W=['AI AGENTS','CLOUD PLATFORMS','DATA PLATFORMS','LLM ROUTERS & RAG'],CH='01<>/[]{}#=+*_';
if(hw){let wi=0;const scr=(to)=>{const from=hw.textContent,len=Math.max(from.length,to.length),t0=performance.now(),dur=RM?250:700;
  const f=now=>{const p=Math.min(1,(now-t0)/dur);let out='';for(let i=0;i<len;i++){const rv=i/len<p;out+=rv?(to[i]||''):(to[i]===' '?' ':'<span class="sc">'+CH[(Math.random()*CH.length)|0]+'</span>')}
   hw.innerHTML=out.replace(/&(?!amp;)/g,'&amp;');if(p<1)requestAnimationFrame(f);else hw.textContent=to};requestAnimationFrame(f)};
 setInterval(()=>{if(document.hidden)return;wi=(wi+1)%W.length;scr(W[wi])},RM?4200:2800)}
// architecture graph
const cv=$('#graph');
if(cv&&cv.getContext){const x=cv.getContext('2d');D.canvas='ok';const MONO=getComputedStyle(document.body).getPropertyValue('--mono')||'monospace';
 const N=[['Prompt',.57,.14],['Semantic cache',.75,.14],['Token minimizer',.93,.14],['LLM Router',.93,.36],['Agentic workflow',.75,.36],['Skills / MCP',.57,.36],['RAG retriever',.75,.58],['Vector DB',.93,.58],['Guardrails · Evals',.57,.58],['Response',.57,.76],['Azure',.56,.93],['AWS',.69,.93],['Databricks',.82,.93],['Snowflake',.95,.93]];
 const E=[[0,1,''],[1,2,'miss'],[2,3,'trim'],[3,4,''],[4,5,'skills'],[4,6,'top-k'],[6,7,''],[4,8,''],[8,9,''],[1,9,'hit'],[10,3,'',1],[11,4,'',1],[12,7,'',1],[13,7,'',1]];
 const FLOW=[0,1,2,3,4,5,6,7,8,9];
 let w,h,dpr,P=[],pts=[],grid,mouse={x:-999,y:-999},run=true,speed=RM?.3:1,mob=false;
 const layout=()=>{dpr=Math.min(devicePixelRatio||1,2);const r=cv.getBoundingClientRect();w=r.width;h=r.height;cv.width=w*dpr;cv.height=h*dpr;mob=w<900;
  const MP=[[.25,0],[.72,0],[.72,1],[.28,1],[.28,2],[.74,2],[.26,3],[.74,3],[.26,4],[.74,4]];pts=N.map(([l,nx,ny],i)=>mob?(i<10?[l,w*MP[i][0],h*.13+MP[i][1]*44]:[l,-999,-999]):[l,w*(.58+(nx-.54)*.82),Math.max(96,h*.04)+ny*h*.84]);
  P=E.map(([a,b])=>{if(mob&&(a>=10||b>=10))return[[-9,-9],[-9,-9],[-9,-9],[-9,-9]];const A=pts[a],B=pts[b];const mx=(A[1]+B[1])/2;return[[A[1],A[2]],[mx,A[2]],[mx,B[2]],[B[1],B[2]]]});
  P.forEach(p=>{let L=0;p.seg=[];for(let i=1;i<p.length;i++){const d=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);p.seg.push(d);L+=d}p.len=L});
  grid=document.createElement('canvas');grid.width=cv.width;grid.height=cv.height;const g=grid.getContext('2d');g.scale(dpr,dpr);g.strokeStyle='rgba(11,31,58,.06)';g.lineWidth=1;
  for(let X=0;X<w;X+=32){g.beginPath();g.moveTo(X+.5,0);g.lineTo(X+.5,h);g.stroke()}for(let Y=0;Y<h;Y+=32){g.beginPath();g.moveTo(0,Y+.5);g.lineTo(w,Y+.5);g.stroke()}
  g.fillStyle='rgba(11,31,58,.18)';for(let X=0;X<w;X+=32)for(let Y=0;Y<h;Y+=32)if(((X*7+Y*13)/32)%5===0)g.fillRect(X-1,Y-1,2,2)};
 const at=(p,d)=>{for(let i=0;i<p.seg.length;i++){if(d<=p.seg[i]){const t=d/p.seg[i];return[p[i][0]+(p[i+1][0]-p[i][0])*t,p[i][1]+(p[i+1][1]-p[i][1])*t]}d-=p.seg[i]}return p[p.length-1]};
 const MAIN=E.map((e,i)=>e[3]?-1:i).filter(i=>i>=0);const K=Array.from({length:14},(_,i)=>({e:MAIN[i%MAIN.length],o:Math.random(),v:.08+Math.random()*.1,gold:i%4===0}));
 const rr=(X,Y,W,H,r)=>{x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+W,Y,X+W,Y+H,r);x.arcTo(X+W,Y+H,X,Y+H,r);x.arcTo(X,Y+H,X,Y,r);x.arcTo(X,Y,X+W,Y,r);x.closePath()};
 let last=performance.now(),T=0;
 const draw=now=>{if(!run)return;const dt=Math.min(.05,(now-last)/1000);last=now;T+=dt*speed;
  x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,cv.width,cv.height);x.drawImage(grid,0,0);x.setTransform(dpr,0,0,dpr,0,0);
  const near=pts.map(p=>Math.hypot(p[1]-mouse.x,p[2]-mouse.y)<130);
  // traces
  x.lineWidth=1.2;P.forEach((p,i)=>{const hot=near[E[i][0]]||near[E[i][1]];x.setLineDash(E[i][3]?[3,4]:[]);x.strokeStyle=hot?'rgba(168,134,79,.9)':E[i][3]?'rgba(11,31,58,.2)':'rgba(11,31,58,.32)';x.beginPath();x.moveTo(p[0][0],p[0][1]);for(let j=1;j<p.length;j++)x.lineTo(p[j][0],p[j][1]);x.stroke();x.setLineDash([]);
   if(E[i][2]&&!mob){const q=at(p,p.len*.5);x.font='10px '+MONO;const lw=x.measureText(E[i][2]).width;x.fillStyle='rgba(243,233,220,.95)';x.fillRect(q[0]-lw/2-4,q[1]-8,lw+8,15);x.fillStyle=E[i][2]==='hit'?'#A8864F':'rgba(11,31,58,.7)';x.fillText(E[i][2],q[0]-lw/2,q[1])}
   x.fillStyle='rgba(11,31,58,.45)';x.fillRect(p[1][0]-1.5,p[1][1]-1.5,3,3);x.fillRect(p[2][0]-1.5,p[2][1]-1.5,3,3)});
  // packets
  K.forEach(k=>{k.o=(k.o+dt*speed*k.v)%1;const p=P[k.e],q=at(p,k.o*p.len);x.fillStyle=k.gold?'#A8864F':'#0B1F3A';x.shadowColor=k.gold?'rgba(168,134,79,.8)':'rgba(30,79,216,.5)';x.shadowBlur=8;x.fillRect(q[0]-3,q[1]-3,6,6);x.shadowBlur=0;
   const t2=at(p,Math.max(0,k.o*p.len-14));x.strokeStyle=k.gold?'rgba(168,134,79,.5)':'rgba(11,31,58,.35)';x.lineWidth=2;x.beginPath();x.moveTo(t2[0],t2[1]);x.lineTo(q[0],q[1]);x.stroke()});
  // nodes
  x.font='600 11px '+getComputedStyle(document.body).getPropertyValue('--mono');x.textBaseline='middle';
  pts.forEach(([l,X,Y],i)=>{if(X<-900)return;const tw=x.measureText(l).width,W2=tw+30,H2=26,hot=near[i];
   const plat=i>=10;x.fillStyle=hot?'#0B1F3A':plat?'rgba(230,213,188,.95)':'rgba(251,247,241,.97)';x.strokeStyle=hot?'#A8864F':'rgba(11,31,58,.55)';x.lineWidth=hot?1.6:1;if(hot){x.shadowColor='rgba(168,134,79,.6)';x.shadowBlur=16}
   rr(X-W2/2,Y-H2/2,W2,H2,6);x.fill();x.stroke();x.shadowBlur=0;
   const on=Math.sin(T*3+i*1.7)>-.6;x.fillStyle=on?(i%5===2?'#A8864F':'#2e9e5b'):'rgba(46,158,91,.25)';x.beginPath();x.arc(X-W2/2+11,Y,3,0,7);x.fill();
   x.fillStyle=hot?'#F3E9DC':'#0B1F3A';x.fillText(l,X-W2/2+19,Y+.5)});
  // decorative readouts (simulated, not real metrics)
  x.fillStyle='rgba(11,31,58,.5)';x.font='10px '+MONO;const ty=mob?Math.max(84,h*.085):Math.max(80,h*.07),c=((T/2.2)|0)%2;
  x.fillText('// sim · request flow demo',mob?w*.06:w*.54,ty);x.fillText('cache: '+(c?'hit ':'miss')+'  ctx: trimmed',mob?w*.52:w*.78,ty);
  if(!mob)x.fillText('// platforms',w*.52,Math.max(96,h*.04)+.93*h*.84-22);
  requestAnimationFrame(draw)};
 layout();addEventListener('resize',()=>{layout()});
 cv.parentElement.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top},{passive:true});
 cv.parentElement.addEventListener('pointerleave',()=>{mouse.x=mouse.y=-999});
 const start=()=>{if(!run){run=true;last=performance.now();requestAnimationFrame(draw)}};
 new IntersectionObserver(([e])=>{if(e.isIntersecting&&!document.hidden)start();else run=false}).observe(cv);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)run=false;else start()});
 requestAnimationFrame(draw);
}
if(/[?&]debug=1/.test(location.search)){const b=document.createElement('div');b.id='dbg';b.textContent=Object.entries(D).map(([k,v])=>k+': '+v).join(' · ');document.body.appendChild(b)}
})();
