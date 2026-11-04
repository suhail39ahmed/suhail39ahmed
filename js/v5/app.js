(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,MOB=matchMedia('(max-width:820px)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const HERO=$('.hero'),G0=!!(window.gsap&&window.ScrollTrigger),LEN=!!window.Lenis;
const D={reducedMotion:RM,gsap:G0,lenis:LEN,webgl:'pending',renderer:'none'};
const loader=$('.loader');if(loader){setTimeout(()=>loader.classList.add('out'),RM?200:1100);setTimeout(()=>loader.remove(),2300)}
$$('h2').forEach(h=>{if(h.querySelector('br'))return;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="w"><span>${w}</span></span>`).join(' ');h.classList.add('split')});
const m=$('.marquee');if(m){const c=m.cloneNode(true);c.classList.add('m2');c.setAttribute('aria-hidden','true');c.querySelector('.track').style.animationDirection='reverse';m.after(c)}
// CSS-driven reveals (work without GSAP)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.reveal,h2.split,.pillar,.row,.card').forEach(el=>{el.classList.add('rv');io.observe(el)});
document.documentElement.classList.add('rvon');
setTimeout(()=>$$('.rv').forEach(e=>e.classList.add('in')),4000);
const mouse={x:0,y:0};addEventListener('pointermove',e=>{mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5},{passive:true});
window.heroP=0;
if(G0){gsap.registerPlugin(ScrollTrigger);
 let lenis=null;if(LEN&&!RM){lenis=new Lenis({lerp:.1,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);
  $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(t){e.preventDefault();lenis.scrollTo(t,{offset:-40})}}))}
 const W=$$('.bigword');
 if(HERO&&!RM&&W.length){document.documentElement.classList.add('scrubhero');
  W.forEach(w=>{w.innerHTML=[...w.textContent].map(c=>c===' '?'<span class="ch">&nbsp;</span>':`<span class="ch">${c.replace('&','&amp;')}</span>`).join('')});gsap.set(W,{opacity:1});
  const tl=gsap.timeline({scrollTrigger:{trigger:HERO,start:'top top',end:'bottom bottom',scrub:1}});
  W.forEach((w,i)=>{const ch=$$('.ch',w);
   if(i===0){gsap.from(ch,{opacity:0,yPercent:120,rotateX:-95,z:-600,ease:'power3.out',stagger:{each:.035,from:'center'},duration:1.1,delay:1});tl.set(ch,{opacity:1},0)}
   else tl.fromTo(ch,{opacity:0,yPercent:120,rotateX:-95,z:-600},{opacity:1,yPercent:0,rotateX:0,z:0,ease:'power3.out',stagger:{each:.035,from:'center'},duration:1},i*2);
   if(i<W.length-1)tl.to(ch,{opacity:0,z:700,rotateX:70,yPercent:-60,scale:1.6,ease:'power2.in',stagger:{each:.025,from:'edges'},duration:1},i*2+1.15)});
  tl.to('.hero-copy',{opacity:0,y:-60,duration:1.2},.2).to('.tag',{opacity:0,duration:1},.2);
  ScrollTrigger.create({trigger:HERO,start:'top top',end:'bottom bottom',onUpdate:s=>{window.heroP=s.progress;const k=Math.min(3,Math.floor(s.progress*4));$$('.prog i').forEach((d,j)=>d.classList.toggle('on',j===k))}});
  gsap.from('.hero-copy > *',{y:40,opacity:0,stagger:.1,duration:1,delay:1.1,ease:'power3.out'});
 }
 // parallax + marquee drift (gentle in RM)
 const k=RM?.35:1;
 $$('.marquee').forEach((mq,i)=>gsap.fromTo(mq,{xPercent:(i?6:-6)*k},{xPercent:(i?-6:6)*k,ease:'none',scrollTrigger:{trigger:mq,start:'top bottom',end:'bottom top',scrub:true}}));
 $$('section .wrap > .reveal:first-child').forEach(h=>gsap.fromTo(h,{y:40*k},{y:-20*k,ease:'none',scrollTrigger:{trigger:h,start:'top bottom',end:'bottom top',scrub:true}}));
 // avatar ring
 const A=$('.ava'),slot=$('nav .slot'),BASE=150;
 if(A&&slot){const navPos=()=>{const r=slot.getBoundingClientRect(),s=MOB?40:46;return{x:r.left,y:r.top+r.height/2-s/2,s}};
  const heroPos=()=>{const s=MOB?96:132;return{x:innerWidth/2-s/2,y:innerHeight*(MOB?.42:.47)-s/2,s}};
  const place=p=>({x:p.x,y:p.y,scale:p.s/BASE});gsap.set(A,{width:BASE,height:BASE,transformOrigin:'0 0'});
  if(HERO&&!RM){gsap.set(A,{...place(heroPos()),autoAlpha:0});
   gsap.fromTo(A,{autoAlpha:0,clipPath:'circle(0% at 50% 50%)',rotate:-25},{autoAlpha:1,clipPath:'circle(75% at 50% 50%)',rotate:0,duration:1.1,delay:1.2,ease:'expo.out',onComplete:()=>{
    gsap.fromTo(A,()=>place(heroPos()),{...place(navPos()),ease:'power2.inOut',immediateRender:false,scrollTrigger:{trigger:HERO,start:'top top',end:()=>'+='+innerHeight*.9,scrub:.8,invalidateOnRefresh:true}});ScrollTrigger.refresh()}});
  }else{gsap.set(A,{...place(navPos())});gsap.from(A,{autoAlpha:0,scale:.1,duration:.8,delay:.3,ease:'back.out(2)'});addEventListener('resize',()=>gsap.set(A,place(navPos())))}
  const aa=$('.about-ava');if(aa&&HERO)gsap.timeline({scrollTrigger:{trigger:'#about',start:'top 85%',end:'top -45%',scrub:1,onToggle:s=>gsap.to(A,{autoAlpha:s.isActive?0:1,duration:.4,overwrite:'auto'})}})
   .fromTo(aa,{clipPath:'circle(0% at 50% 50%)',scale:.6,rotate:-40,y:80},{clipPath:'circle(75% at 50% 50%)',scale:1,rotate:0,y:0,duration:1,ease:'power3.out'}).to(aa,{y:-30,duration:2.2,ease:'none'}).to(aa,{clipPath:'circle(0% at 50% 50%)',scale:.7,rotate:30,duration:1,ease:'power3.in'});
 }
if(FINE){const a=$('.cur'),b=$('.cur2');const ax=gsap.quickTo(a,'x',{duration:.08}),ay=gsap.quickTo(a,'y',{duration:.08}),bx=gsap.quickTo(b,'x',{duration:.4}),by=gsap.quickTo(b,'y',{duration:.4});
 addEventListener('mousemove',e=>{document.body.classList.add('mm');ax(e.clientX);ay(e.clientY);bx(e.clientX);by(e.clientY);mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5});
 $$('a,button,input').forEach(el=>{el.addEventListener('mouseenter',()=>b.classList.add('big'));el.addEventListener('mouseleave',()=>b.classList.remove('big'))});
 $$('.btn,.filters button,nav .logo').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.35,y:(e.clientY-r.top-r.height/2)*.35,duration:.4})});el.addEventListener('mouseleave',()=>gsap.to(el,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'}))});
 $$('.card').forEach(c=>{const img=$('img',c);c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;gsap.to(c,{rotationY:px*12,rotationX:-py*12,transformPerspective:900,duration:.4});gsap.to(img,{x:px*-14,y:py*-10,scale:1.06,duration:.4})});c.addEventListener('mouseleave',()=>{gsap.to(c,{rotationY:0,rotationX:0,duration:.7});gsap.to(img,{x:0,y:0,scale:1,duration:.7})})});
}
 ScrollTrigger.sort();ScrollTrigger.refresh();addEventListener('load',()=>ScrollTrigger.refresh());document.fonts&&document.fonts.ready.then(()=>ScrollTrigger.refresh());
}else{document.documentElement.classList.add('nogsap')}
// ---------- dot field: shapes ----------
 const M=MOB?1400:3200,R=()=>Math.random(),G=()=>(R()+R()+R()-1.5)*.05;
 const fill=(arr)=>{const out=new Float32Array(M*3);for(let i=0;i<M;i++){const p=arr[i%arr.length];out[i*3]=p[0]+G();out[i*3+1]=p[1]+G();out[i*3+2]=p[2]+G()}return out};
 const seg=(a,b,n,o)=>{for(let i=0;i<n;i++){const t=R();o.push([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t])}};
 const ball=(c,r,n,o)=>{for(let i=0;i<n;i++){const u=R()*2-1,th=R()*6.283,q=Math.sqrt(1-u*u);o.push([c[0]+r*q*Math.cos(th),c[1]+r*u,c[2]+r*q*Math.sin(th)])}};
 // 1 neural network
 const nn=[],L=[4,6,6,3],nodes=L.map((n,li)=>Array.from({length:n},(_,k)=>[(li-1.5)*1.6,(k-(n-1)/2)*.75,0]));
 nodes.flat().forEach(c=>ball(c,.13,40,nn));for(let li=0;li<3;li++)nodes[li].forEach(a=>nodes[li+1].forEach(b=>seg(a,b,22,nn)));
 // 2 cloud
 const cl=[],puffs=[[0,.35,0,1.05],[-1.1,-.05,0,.8],[1.15,-.05,0,.85],[-.5,-.3,.2,.75],[.55,-.3,-.1,.8],[-1.9,-.35,0,.5],[1.95,-.35,0,.5]];
 while(cl.length<2600){const p=puffs[Math.floor(R()*puffs.length)],o=[];ball(p,p[3],1,o);const q=o[0];if(q[1]<-.75)continue;if(!puffs.some(z=>z!==p&&Math.hypot(q[0]-z[0],q[1]-z[1],q[2]-z[2])<z[3]*.98))cl.push(q)}
 for(let i=0;i<500;i++)cl.push([(R()-.5)*4.6,-.78,(R()-.5)*1.2]);
 // 3 database stack
 const db=[];[-1.05,0,1.05].forEach(y=>{for(let i=0;i<900;i++){const a=R()*6.283,rim=R();const yy=rim<.42?y+.38:rim<.78?y-.38:y+(R()-.5)*.84;db.push([1.5*Math.cos(a),yy,.55*Math.sin(a)])}});
 // 4 router graph
 const rt=[],root=[0,1.5,0];ball(root,.22,120,rt);const kids=[-1.8,0,1.8].map(x=>[x,.2,0]);
 kids.forEach((k,ki)=>{seg(root,k,140,rt);ball(k,.16,70,rt);[-.6,0,.6].forEach(dx=>{const g=[k[0]+dx,-1.2,0];seg(k,g,60,rt);ball(g,.09,30,rt)})});
 const S=[nn,cl,db,rt].map(fill),cur=new Float32Array(S[0]);
 const cols=[];for(let i=0;i<M;i++){const r=R();cols.push(r<.12?'#A8864F':r<.55?'#2B4A78':'#0B1F3A')}
 const t0=performance.now();
 // shape progress: scroll-driven on the scrubbed hero, otherwise auto-cycles so it always moves
 const shapeF=t=>{if(document.documentElement.classList.contains('scrubhero'))return Math.min(2.999,Math.max(0,heroP*4-.5));const c=(t/4.5)%4;return c>3?(3-(c-3)*3):c};
 const step=(t,sw,oy)=>{const f=shapeF(t),i=Math.min(3,Math.floor(f)),e=f-i,kk=e<.55?0:Math.min(1,(e-.55)/.4),ke=kk*kk*(3-2*kk),A=S[i],B=S[Math.min(3,i+1)];
  const mx=mouse.x*7/sw,my=-mouse.y*4.2/sw;
  for(let j=0;j<M*3;j+=3){let x=A[j]+(B[j]-A[j])*ke,y=A[j+1]+(B[j+1]-A[j+1])*ke,z=A[j+2]+(B[j+2]-A[j+2])*ke;
   x+=Math.sin(t*1.6+j*.013)*.06;y+=Math.cos(t*1.3+j*.007)*.06;z+=Math.sin(t*.9+j*.011)*.06;
   const dx=x-mx,dy=y-(my-oy/sw),d2=dx*dx+dy*dy;if(d2<.8){const fo=(.8-d2)*.6;x+=dx*fo;y+=dy*fo}
   cur[j]+=(x-cur[j])*.12;cur[j+1]+=(y-cur[j+1])*.12;cur[j+2]+=(z-cur[j+2])*.12}};
 const heroVis=()=>{if(!HERO)return 0;const end=HERO.offsetHeight-innerHeight*.9;return Math.max(0,1-Math.max(0,(scrollY-end)/(innerHeight*.7)))};
 const badge=()=>{if(!/[?&]debug=1/.test(location.search))return;let b=$('#dbg');if(!b){b=document.createElement('div');b.id='dbg';document.body.appendChild(b)}b.textContent=Object.entries(D).map(([k,v])=>k+': '+v).join(' · ')};
 // ---------- 2D canvas fallback ----------
 const run2D=(why)=>{D.webgl=why;D.renderer='canvas2d';badge();const cv=$('#px');if(!cv)return;const x=cv.getContext('2d');const dpr=Math.min(devicePixelRatio,1.5);
  const rs=()=>{cv.width=innerWidth*dpr;cv.height=innerHeight*dpr};rs();addEventListener('resize',rs);cv.style.display='block';
  const bg=Array.from({length:MOB?60:140},()=>[Math.random(),Math.random(),Math.random()*1.5+.5]);
  const loop=()=>{const t=(performance.now()-t0)/1000;x.setTransform(dpr,0,0,dpr,0,0);x.clearRect(0,0,innerWidth,innerHeight);
   x.fillStyle='rgba(11,31,58,.25)';bg.forEach(p=>{const yy=((p[1]*innerHeight-scrollY*.1*p[2]-t*6*p[2])%innerHeight+innerHeight)%innerHeight;x.fillRect(p[0]*innerWidth,yy,p[2],p[2])});
   const v=heroVis();if(v>.01){const sw=MOB?.42:1;step(t,sw,MOB?.1:-.95);const ry=Math.sin(t*.45)*.6+mouse.x*.6,cy=Math.cos(ry),sy=Math.sin(ry),sc=(MOB?innerWidth/7:innerHeight/5.4)*sw*(1+Math.sin(t*1.3)*.05),ox=innerWidth/2,oy=innerHeight*(MOB?.5:.6);
    x.globalAlpha=v;for(let i=0,j=0;i<M;i++,j+=3){const X=cur[j]*cy+cur[j+2]*sy,Z=-cur[j]*sy+cur[j+2]*cy,p=4/(4+Z*.35);x.fillStyle=cols[i];const s=(MOB?1.6:2)*p;x.fillRect(ox+X*sc*p,oy-cur[j+1]*sc*p,s,s)}x.globalAlpha=1}
   requestAnimationFrame(loop)};loop()};
 // ---------- WebGL ----------
 const hasGL=(()=>{try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'))}catch(e){return false}})();
 if(!hasGL)run2D('unavailable');
 else{import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js').then(T=>{try{
 const cv=$('#gl'),r=new T.WebGLRenderer({canvas:cv,antialias:false,alpha:true,powerPreference:'low-power'});r.setPixelRatio(Math.min(devicePixelRatio,MOB?1:1.5));
 const sc=new T.Scene(),cam=new T.PerspectiveCamera(60,1,.1,100);cam.position.z=6;
 const U={t:{value:0},s:{value:0},m:{value:new T.Vector2()}};
 const plane=new T.Mesh(new T.PlaneGeometry(2,2),new T.ShaderMaterial({uniforms:U,depthWrite:false,vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:`precision mediump float;varying vec2 v;uniform float t,s;uniform vec2 m;
  float n(vec2 p){return sin(p.x)*sin(p.y);}
  void main(){vec2 p=v*3.;float f=0.;for(int i=0;i<4;i++){p+=vec2(sin(p.y*1.3+t*.25+s*.6),cos(p.x*1.1-t*.2))*.5+m*.4;f+=n(p*1.2)*.5;}
  vec3 navy=vec3(.953,.914,.863),mid=vec3(.925,.875,.80),roy=vec3(.87,.86,.86);
  vec3 c=mix(navy,mid,smoothstep(-.5,.6,f));c=mix(c,roy,smoothstep(.35,1.1,f)*(.35+.3*v.y));c+=vec3(.02,.02,.015)*pow(1.-distance(v,vec2(.7+m.x*.2,.85-m.y*.2)),3.);
  gl_FragColor=vec4(c,1.);}`}));
 plane.frustumCulled=false;plane.renderOrder=-1;sc.add(plane);
 const N=MOB?600:2200,g=new T.BufferGeometry(),pos=new Float32Array(N*3);for(let i=0;i<N*3;i++)pos[i]=(Math.random()-.5)*[16,10,8][i%3];
 g.setAttribute('position',new T.BufferAttribute(pos,3));
 const pts=new T.Points(g,new T.PointsMaterial({map:(()=>{const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d'),g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'#fff');g.addColorStop(.25,'rgba(190,210,255,.8)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,64,64);return new T.CanvasTexture(c)})(),color:0x0B1F3A,size:.05,transparent:true,opacity:.28,depthWrite:false}));sc.add(pts);

 const mg=new T.BufferGeometry();mg.setAttribute('position',new T.BufferAttribute(cur,3));
 const col=new Float32Array(M*3);cols.forEach((c,i)=>{const cc=new T.Color(c);col.set([cc.r,cc.g,cc.b],i*3)});mg.setAttribute('color',new T.BufferAttribute(col,3));
 const mm=new T.PointsMaterial({map:pts.material.map,size:MOB?.08:.07,vertexColors:true,transparent:true,depthWrite:false,opacity:1});
 const morph=new T.Points(mg,mm);sc.add(morph);const sw=MOB?.42:1;
 const rs=()=>{r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};rs();addEventListener('resize',rs);
 let vis=true;document.addEventListener('visibilitychange',()=>vis=!document.hidden);
 const frame=()=>{requestAnimationFrame(frame);if(!vis)return;const t=(performance.now()-t0)/1000,sy=scrollY/innerHeight;U.t.value=t;U.s.value=sy;U.m.value.lerp(new T.Vector2(mouse.x,mouse.y),.05);
  pts.rotation.y=t*.03+mouse.x*.3;pts.rotation.x=mouse.y*.2;pts.position.y=sy*.4;cam.position.z=6-Math.min(sy,8)*.12;
  const v=heroVis();morph.visible=v>.01;if(morph.visible){step(t,sw,MOB?.1:-.95);mg.attributes.position.needsUpdate=true;mm.opacity=v;
   morph.rotation.y=Math.sin(t*.45)*.6+mouse.x*.6;morph.rotation.x=Math.sin(t*.4)*.18+mouse.y*.3;morph.scale.setScalar(sw*(1+Math.sin(t*1.3)*.05));morph.position.y=MOB?.1:-.95;morph.position.z=cam.position.z-6}
  r.render(sc,cam)};frame();
 cv.classList.add('on');cv.parentElement.classList.add('gl');
  D.webgl='ok';D.renderer='three';badge();}catch(e){run2D('error: '+e.message)}}).catch(e=>run2D('three load failed'))}
 badge();
})();
