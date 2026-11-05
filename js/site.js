(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add('js');
const D={reducedMotion:RM,canvas:'pending',renderer:'canvas2d',scripts:'site.js'};
// marquee twin
const m=$('.marquee');if(m){const c=m.cloneNode(true);c.classList.add('m2');c.setAttribute('aria-hidden','true');m.after(c)}
// reveals
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -5% 0px'});
$$('section .wrap>.reveal,.pillar,.row,.card,.facts,.prod>div,.term,.certs,details,.about-ava,.rows,.seeall').forEach(el=>{el.classList.add('rv');io.observe(el)});
setTimeout(()=>$$('.rv').forEach(e=>e.classList.add('in')),3500);
// hero word scramble
const hw=$('#hw'),W=['AI AGENTS','CLOUD PLATFORMS','DATA PLATFORMS','LLM ROUTERS & RAG'],CH='01<>/[]{}#=+*_';
if(hw){let wi=0;const scr=(to)=>{const from=hw.textContent,len=Math.max(from.length,to.length),t0=performance.now(),dur=RM?250:700;
  const f=now=>{const p=Math.min(1,(now-t0)/dur);let out='';for(let i=0;i<len;i++){const rv=i/len<p;out+=rv?(to[i]||''):(to[i]===' '?' ':'<span class="sc">'+CH[(Math.random()*CH.length)|0]+'</span>')}
   hw.innerHTML=out.replace(/&(?!amp;)/g,'&amp;');if(p<1)requestAnimationFrame(f);else hw.textContent=to};requestAnimationFrame(f)};
 setInterval(()=>{if(document.hidden)return;wi=(wi+1)%W.length;scr(W[wi])},RM?4200:2800)}
// architecture graph
const cv=$('#graph');
if(cv&&cv.getContext){const x=cv.getContext('2d');D.canvas='ok';
 const N=[['Agents',.60,.24],['LLM Router',.80,.18],['RAG',.93,.34],['MCP tools',.70,.42],['Evals',.88,.56],['Azure',.56,.60],['AWS',.68,.76],['Terraform',.54,.88],['Pipelines',.82,.86],['Databricks',.94,.72],['Snowflake',.76,.64],['Sigma',.95,.92]];
 const E=[[0,1],[1,2],[0,3],[3,4],[1,4],[2,4],[0,5],[5,6],[5,7],[7,8],[6,8],[3,10],[10,9],[9,11],[10,8],[2,9],[6,10]];
 let w,h,dpr,P=[],pts=[],grid,mouse={x:-999,y:-999},run=true,speed=RM?.3:1,mob=false;
 const layout=()=>{dpr=Math.min(devicePixelRatio||1,2);const r=cv.getBoundingClientRect();w=r.width;h=r.height;cv.width=w*dpr;cv.height=h*dpr;mob=w<900;
  pts=N.map(([l,nx,ny])=>mob?[l,w*(.16+(nx-.54)/.41*.62),h*(.11+ny*.3)]:[l,w*(.6+(nx-.54)*.92),h*(.08+ny*.86)]);
  P=E.map(([a,b])=>{const A=pts[a],B=pts[b];const mx=(A[1]+B[1])/2;return[[A[1],A[2]],[mx,A[2]],[mx,B[2]],[B[1],B[2]]]});
  P.forEach(p=>{let L=0;p.seg=[];for(let i=1;i<p.length;i++){const d=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);p.seg.push(d);L+=d}p.len=L});
  grid=document.createElement('canvas');grid.width=cv.width;grid.height=cv.height;const g=grid.getContext('2d');g.scale(dpr,dpr);g.strokeStyle='rgba(11,31,58,.06)';g.lineWidth=1;
  for(let X=0;X<w;X+=32){g.beginPath();g.moveTo(X+.5,0);g.lineTo(X+.5,h);g.stroke()}for(let Y=0;Y<h;Y+=32){g.beginPath();g.moveTo(0,Y+.5);g.lineTo(w,Y+.5);g.stroke()}
  g.fillStyle='rgba(11,31,58,.18)';for(let X=0;X<w;X+=32)for(let Y=0;Y<h;Y+=32)if(((X*7+Y*13)/32)%5===0)g.fillRect(X-1,Y-1,2,2)};
 const at=(p,d)=>{for(let i=0;i<p.seg.length;i++){if(d<=p.seg[i]){const t=d/p.seg[i];return[p[i][0]+(p[i+1][0]-p[i][0])*t,p[i][1]+(p[i+1][1]-p[i][1])*t]}d-=p.seg[i]}return p[p.length-1]};
 const K=Array.from({length:14},(_,i)=>({e:i%E.length,o:Math.random(),v:.08+Math.random()*.1,gold:i%4===0}));
 const rr=(X,Y,W,H,r)=>{x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+W,Y,X+W,Y+H,r);x.arcTo(X+W,Y+H,X,Y+H,r);x.arcTo(X,Y+H,X,Y,r);x.arcTo(X,Y,X+W,Y,r);x.closePath()};
 let last=performance.now(),T=0;
 const draw=now=>{if(!run)return;const dt=Math.min(.05,(now-last)/1000);last=now;T+=dt*speed;
  x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,cv.width,cv.height);x.drawImage(grid,0,0);x.setTransform(dpr,0,0,dpr,0,0);
  const near=pts.map(p=>Math.hypot(p[1]-mouse.x,p[2]-mouse.y)<130);
  // traces
  x.lineWidth=1.2;P.forEach((p,i)=>{const hot=near[E[i][0]]||near[E[i][1]];x.strokeStyle=hot?'rgba(168,134,79,.9)':'rgba(11,31,58,.28)';x.beginPath();x.moveTo(p[0][0],p[0][1]);for(let j=1;j<p.length;j++)x.lineTo(p[j][0],p[j][1]);x.stroke();
   x.fillStyle='rgba(11,31,58,.45)';x.fillRect(p[1][0]-1.5,p[1][1]-1.5,3,3);x.fillRect(p[2][0]-1.5,p[2][1]-1.5,3,3)});
  // packets
  K.forEach(k=>{k.o=(k.o+dt*speed*k.v)%1;const p=P[k.e],q=at(p,k.o*p.len);x.fillStyle=k.gold?'#A8864F':'#0B1F3A';x.shadowColor=k.gold?'rgba(168,134,79,.8)':'rgba(30,79,216,.5)';x.shadowBlur=8;x.fillRect(q[0]-3,q[1]-3,6,6);x.shadowBlur=0;
   const t2=at(p,Math.max(0,k.o*p.len-14));x.strokeStyle=k.gold?'rgba(168,134,79,.5)':'rgba(11,31,58,.35)';x.lineWidth=2;x.beginPath();x.moveTo(t2[0],t2[1]);x.lineTo(q[0],q[1]);x.stroke()});
  // nodes
  x.font='600 11px '+getComputedStyle(document.body).getPropertyValue('--mono');x.textBaseline='middle';
  pts.forEach(([l,X,Y],i)=>{const tw=x.measureText(l).width,W2=tw+30,H2=26,hot=near[i];
   x.fillStyle=hot?'#0B1F3A':'rgba(251,247,241,.95)';x.strokeStyle=hot?'#A8864F':'rgba(11,31,58,.55)';x.lineWidth=hot?1.6:1;if(hot){x.shadowColor='rgba(168,134,79,.6)';x.shadowBlur=16}
   rr(X-W2/2,Y-H2/2,W2,H2,6);x.fill();x.stroke();x.shadowBlur=0;
   const on=Math.sin(T*3+i*1.7)>-.6;x.fillStyle=on?(i%5===2?'#A8864F':'#2e9e5b'):'rgba(46,158,91,.25)';x.beginPath();x.arc(X-W2/2+11,Y,3,0,7);x.fill();
   x.fillStyle=hot?'#F3E9DC':'#0B1F3A';x.fillText(l,X-W2/2+19,Y+.5)});
  // micro labels
  x.fillStyle='rgba(11,31,58,.45)';x.font='10px '+getComputedStyle(document.body).getPropertyValue('--mono');
  x.fillText('// region: sg-1  latency: '+(18+((T*7)|0)%9)+'ms',mob?w*.06:w*.54,mob?h*.08:h*.1);x.fillText('tokens/s '+(1200+((T*137)|0)%300),mob?w*.6:w*.84,mob?h*.08:h*.1);
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
