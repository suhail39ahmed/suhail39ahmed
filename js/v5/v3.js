(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,MOB=matchMedia('(max-width:820px)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const loader=$('.loader');setTimeout(()=>loader.classList.add('out'),RM?0:1150);setTimeout(()=>loader.remove(),2300);
// split heading words
$$('h2').forEach(h=>{if(h.querySelector('br'))return;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="w"><span>${w}</span></span>`).join(' ');h.classList.add('split')});
// second marquee
const m=$('.marquee');if(m){const c=m.cloneNode(true);c.classList.add('m2');c.setAttribute('aria-hidden','true');c.querySelector('.track').style.animationDirection='reverse';m.after(c)}
if(!RM&&window.gsap&&window.ScrollTrigger)document.documentElement.classList.add('anim');
setTimeout(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')),3500);
if(RM||!window.gsap||!window.ScrollTrigger||!window.Lenis){$$('h2.split').forEach(h=>h.classList.add('in'));return}
gsap.registerPlugin(ScrollTrigger);
// Lenis
const lenis=new Lenis({lerp:.09,smoothWheel:true});
lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(t){e.preventDefault();lenis.scrollTo(t,{offset:-40})}}));
// hero letters
const W=$$('.bigword');W.forEach(w=>{w.innerHTML=[...w.textContent].map(c=>c===' '?'<span class="ch">&nbsp;</span>':`<span class="ch">${c.replace('&','&amp;')}</span>`).join('')});
gsap.set(W,{opacity:1});
const tl=gsap.timeline({scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom bottom',scrub:1}});
W.forEach((w,i)=>{const ch=$$('.ch',w);
 if(i===0){gsap.from(ch,{opacity:0,yPercent:120,rotateX:-95,z:-600,ease:'power3.out',stagger:{each:.035,from:'center'},duration:1.1,delay:1.1});tl.set(ch,{opacity:1},0)}
 else tl.fromTo(ch,{opacity:0,yPercent:120,rotateX:-95,z:-600},{opacity:1,yPercent:0,rotateX:0,z:0,ease:'power3.out',stagger:{each:.035,from:'center'},duration:1},i*2);
   if(i<W.length-1)tl.to(ch,{opacity:0,z:700,rotateX:70,yPercent:-60,scale:1.6,ease:'power2.in',stagger:{each:.025,from:'edges'},duration:1},i*2+1.15)});
tl.to('.hero-copy',{opacity:0,y:-60,duration:1.2},.2).to('.tag',{opacity:0,duration:1},.2);
gsap.to('.prog',{});ScrollTrigger.create({trigger:'.hero',start:'top top',end:'bottom bottom',onUpdate:s=>{window.heroP=s.progress;const k=Math.min(3,Math.floor(s.progress*4));$$('.prog i').forEach((d,j)=>d.classList.toggle('on',j===k))}});
// horizontal featured
const work=$('#work'),grid=$('#work .grid');
if(!MOB){work.classList.add('hz');const bar=document.createElement('div');bar.className='hbar';bar.innerHTML='<i></i>';work.appendChild(bar);
 const dist=()=>Math.max(0,grid.scrollWidth-innerWidth+innerWidth*.06);
 const hz=gsap.to(grid,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:work,start:'top top',end:()=>'+='+dist(),pin:true,refreshPriority:10,scrub:1,invalidateOnRefresh:true,anticipatePin:1,onUpdate:s=>gsap.set('.hbar i',{scaleX:s.progress})}});
 $$('#work .card').forEach(c=>{gsap.set(c,{opacity:1});gsap.fromTo(c,{rotateY:-18,z:-120,transformPerspective:1000},{rotateY:0,z:0,ease:'none',scrollTrigger:{trigger:c,containerAnimation:hz,start:'left right',end:'left 55%',scrub:true}})});
 $$('.filters button').forEach(b=>b.addEventListener('click',()=>requestAnimationFrame(()=>{gsap.set(grid,{x:0});ScrollTrigger.refresh()})));
}else $$('#work .card').forEach(c=>gsap.fromTo(c,{y:80,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:c,start:'top 95%',end:'top 70%',scrub:1}}));
$$('#work .card').forEach(c=>c.classList.add('in'));
// intro motion on load
gsap.from('.hero-copy > *',{y:40,opacity:0,stagger:.1,duration:1,delay:1.2,ease:'power3.out'});

// heading word reveals (scrubbed)
$$('h2.split').forEach(h=>{h.classList.add('in');gsap.fromTo($$('.w>span',h),{y:0,yPercent:110,rotateX:-80,opacity:0},{y:0,yPercent:0,rotateX:0,opacity:1,stagger:.06,ease:'power3.out',duration:1,scrollTrigger:{trigger:h,start:'top 88%',end:'top 55%',scrub:1}})});
// section scrub transitions
$$('section').forEach(s=>{if(s.id==='work')return;gsap.fromTo(s,{scale:.97},{scale:1,ease:'none',scrollTrigger:{trigger:s,start:'top bottom',end:'top 55%',scrub:true}})});
$$('.pillar,.row,.prod>div').forEach(c=>gsap.fromTo(c,{y:90,rotateX:25,opacity:.15,transformPerspective:900},{y:0,rotateX:0,opacity:1,ease:'power2.out',scrollTrigger:{trigger:c,start:'top 95%',end:'top 65%',scrub:1}}));
gsap.to('.marquee .track',{});$$('.marquee').forEach((mq,i)=>gsap.fromTo(mq,{xPercent:i?6:-6},{xPercent:i?-6:6,ease:'none',scrollTrigger:{trigger:mq,start:'top bottom',end:'bottom top',scrub:true}}));
const ap=$('.about-photo');if(ap)gsap.fromTo(ap,{yPercent:15,scale:.92},{yPercent:-10,scale:1,ease:'none',scrollTrigger:{trigger:'#about',start:'top bottom',end:'bottom top',scrub:true}});

// avatar ring: intro reveal -> tucks into nav -> hides while About ring shows
const A=$('.ava'),slot=$('nav .slot');
const heroPos=()=>{const s=MOB?96:132;return{x:innerWidth/2-s/2,y:innerHeight*(MOB?.42:.47)-s/2,s}};
const navPos=()=>{const r=slot.getBoundingClientRect(),s=MOB?40:46;return{x:r.left,y:r.top+r.height/2-s/2,s}};
const BASE=150;gsap.set(A,{width:BASE,height:BASE,transformOrigin:'0 0'});
const place=(p)=>({x:p.x,y:p.y,scale:p.s/BASE});
gsap.set(A,{...place(heroPos()),autoAlpha:0});
gsap.fromTo(A,{autoAlpha:0,clipPath:'circle(0% at 50% 50%)',rotate:-25},{autoAlpha:1,clipPath:'circle(75% at 50% 50%)',rotate:0,duration:1.1,delay:1.25,ease:'expo.out',onComplete:()=>{
 const tuck=gsap.fromTo(A,()=>place(heroPos()),{...place(navPos()),ease:'power2.inOut',immediateRender:false,scrollTrigger:{trigger:'.hero',start:'top top',end:()=>'+='+innerHeight*.9,scrub:.8,invalidateOnRefresh:true}});
 ScrollTrigger.refresh();}});
const aa=$('.about-ava');if(aa){
 gsap.timeline({scrollTrigger:{trigger:'#about',start:'top 85%',end:'top -45%',scrub:1,onToggle:s=>gsap.to(A,{autoAlpha:s.isActive?0:1,scale:(s.isActive?.6:1)*navPos().s/BASE,duration:.4,overwrite:'auto'})}})
  .fromTo(aa,{clipPath:'circle(0% at 50% 50%)',scale:.6,rotate:-40,y:80},{clipPath:'circle(75% at 50% 50%)',scale:1,rotate:0,y:0,duration:1,ease:'power3.out'})
  .to(aa,{y:-30,duration:2.2,ease:'none'})
  .to(aa,{clipPath:'circle(0% at 50% 50%)',scale:.7,rotate:30,duration:1,ease:'power3.in'});}
// cursor + magnetic + tilt
if(FINE){const a=$('.cur'),b=$('.cur2');const ax=gsap.quickTo(a,'x',{duration:.08}),ay=gsap.quickTo(a,'y',{duration:.08}),bx=gsap.quickTo(b,'x',{duration:.4}),by=gsap.quickTo(b,'y',{duration:.4});
 addEventListener('mousemove',e=>{document.body.classList.add('mm');ax(e.clientX);ay(e.clientY);bx(e.clientX);by(e.clientY);mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5});
 $$('a,button,input').forEach(el=>{el.addEventListener('mouseenter',()=>b.classList.add('big'));el.addEventListener('mouseleave',()=>b.classList.remove('big'))});
 $$('.btn,.filters button,nav .logo').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.35,y:(e.clientY-r.top-r.height/2)*.35,duration:.4})});el.addEventListener('mouseleave',()=>gsap.to(el,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'}))});
 $$('.card').forEach(c=>{const img=$('img',c);c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;gsap.to(c,{rotationY:px*12,rotationX:-py*12,transformPerspective:900,duration:.4});gsap.to(img,{x:px*-14,y:py*-10,scale:1.06,duration:.4})});c.addEventListener('mouseleave',()=>{gsap.to(c,{rotationY:0,rotationX:0,duration:.7});gsap.to(img,{x:0,y:0,scale:1,duration:.7})})});
}
const mouse={x:0,y:0};
// WebGL background (lazy)
const lowPower=(()=>{try{const c=document.createElement('canvas');return !(c.getContext('webgl2')||c.getContext('webgl'))}catch(e){return true}})();
if(!lowPower){(window.requestIdleCallback||setTimeout)(()=>import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js').then(T=>{try{
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

 // hero morphing dot field
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
 const S=[nn,cl,db,rt].map(fill),cur=new Float32Array(S[0]),mg=new T.BufferGeometry();mg.setAttribute('position',new T.BufferAttribute(cur,3));
 const col=new Float32Array(M*3),cA=new T.Color('#0B1F3A'),cB=new T.Color('#A8864F'),cC=new T.Color('#2B4A78');for(let i=0;i<M;i++){const c=R()<.12?cB:R()<.5?cC:cA;col.set([c.r,c.g,c.b],i*3)}
 mg.setAttribute('color',new T.BufferAttribute(col,3));
 const mm=new T.PointsMaterial({map:pts.material.map,size:MOB?.08:.07,vertexColors:true,transparent:true,depthWrite:false,opacity:1});
 const morph=new T.Points(mg,mm);sc.add(morph);const sw=MOB?.42:1;morph.scale.setScalar(sw);
 const ray=new T.Vector3();
 window.__morph=(t)=>{const hp=window.heroP||0,f=Math.min(2.999,Math.max(0,hp*4-.5)),i=Math.floor(f),e=f-i,k=e<.55?0:Math.min(1,(e-.55)/.4),ke=k*k*(3-2*k),A=S[i],B=S[Math.min(3,i+1)];
  const mx=mouse.x*7/sw,my=-mouse.y*4.2/sw;
  for(let j=0;j<M*3;j+=3){let x=A[j]+(B[j]-A[j])*ke,y=A[j+1]+(B[j+1]-A[j+1])*ke,z=A[j+2]+(B[j+2]-A[j+2])*ke;
   const w=Math.sin(t*1.6+j*.013)*.06;x+=w;y+=Math.cos(t*1.3+j*.007)*.06;z+=Math.sin(t*.9+j*.011)*.06;
   const dx=x-mx,dy=y-(my-morph.position.y/sw),d2=dx*dx+dy*dy;if(d2<.8){const fo=(.8-d2)*.6;x+=dx*fo;y+=dy*fo}
   cur[j]+=(x-cur[j])*.12;cur[j+1]+=(y-cur[j+1])*.12;cur[j+2]+=(z-cur[j+2])*.12}
  mg.attributes.position.needsUpdate=true;
  morph.rotation.y=Math.sin(t*.45)*.6+mouse.x*.6;morph.rotation.x=Math.sin(t*.4)*.18+mouse.y*.3;morph.scale.setScalar(sw*(1+Math.sin(t*1.3)*.05));
  const vis=Math.max(0,1-Math.max(0,(scrollY-(document.querySelector('.hero').offsetHeight-innerHeight*.9))/(innerHeight*.7)));mm.opacity=vis*Math.min(1,.7+hp*7);morph.visible=vis>0.01;
  morph.position.y=MOB?.1:-.95;morph.position.z=cam.position.z-6;};
 const rs=()=>{r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};rs();addEventListener('resize',rs);
 const clock=new T.Clock();let vis=true;document.addEventListener('visibilitychange',()=>vis=!document.hidden);
 gsap.ticker.add(()=>{if(!vis)return;const t=clock.getElapsedTime(),sy=scrollY/innerHeight;U.t.value=t;U.s.value=sy;U.m.value.lerp(new T.Vector2(mouse.x,mouse.y),.05);
  pts.rotation.y=t*.03+mouse.x*.3;pts.rotation.x=mouse.y*.2;pts.position.y=sy*.4;cam.position.z=6-Math.min(sy,8)*.12;window.__morph(t);r.render(sc,cam)});
 cv.classList.add('on');cv.parentElement.classList.add('gl');}catch(e){console.info('webgl off',e.message)}}).catch(()=>{}),{timeout:1500})}
setInterval(()=>{document.querySelectorAll('.pillar,.row,.prod>div,section,h2 .w>span').forEach(e=>{const r=e.getBoundingClientRect();if(r.top<innerHeight*.8&&r.bottom>0&&+getComputedStyle(e).opacity<.6)gsap.to(e,{opacity:1,y:0,yPercent:0,rotateX:0,duration:.4})})},1500);
ScrollTrigger.sort();ScrollTrigger.refresh();addEventListener('load',()=>ScrollTrigger.refresh());document.fonts&&document.fonts.ready.then(()=>ScrollTrigger.refresh());
})();
