(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3326],{8685:(R,E,p)=>{p.d(E,{g:()=>u});const u=(o,t,n,h,c)=>l(o[1],t[1],n[1],h[1],c).map(v=>a(o[0],t[0],n[0],h[0],v)),a=(o,t,n,h,c)=>c*(3*t*Math.pow(c-1,2)+c*(-3*n*c+3*n+h*c))-o*Math.pow(c-1,3),l=(o,t,n,h,c)=>d((h-=c)-3*(n-=c)+3*(t-=c)-(o-=c),3*n-6*t+3*o,3*t-3*o,o).filter(w=>w>=0&&w<=1),d=(o,t,n,h)=>{if(0===o)return((o,t,n)=>{const h=t*t-4*o*n;return h<0?[]:[(-t+Math.sqrt(h))/(2*o),(-t-Math.sqrt(h))/(2*o)]})(t,n,h);const c=(3*(n/=o)-(t/=o)*t)/3,v=(2*t*t*t-9*t*n+27*(h/=o))/27;if(0===c)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-c),-Math.sqrt(-c)];const w=Math.pow(v/2,2)+Math.pow(c/3,3);if(0===w)return[Math.pow(v/2,.5)-t/3];if(w>0)return[Math.pow(-v/2+Math.sqrt(w),1/3)-Math.pow(v/2+Math.sqrt(w),1/3)-t/3];const M=Math.sqrt(Math.pow(-c/3,3)),_=Math.acos(-v/(2*Math.sqrt(Math.pow(-c/3,3)))),T=2*Math.pow(M,1/3);return[T*Math.cos(_/3)-t/3,T*Math.cos((_+2*Math.PI)/3)-t/3,T*Math.cos((_+4*Math.PI)/3)-t/3]}},7683:(R,E,p)=>{p.d(E,{a:()=>l,b:()=>f,c:()=>a,d:()=>o,h:()=>d});const u={getEngine(){var t;const n=window;return n.TapticEngine||(null===(t=n.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const h=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:h})},notification(t){const n=this.getEngine();if(!n)return;const h=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:h})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},a=()=>{u.selection()},l=()=>{u.selectionStart()},f=()=>{u.selectionChanged()},d=()=>{u.selectionEnd()},o=t=>{u.impact(t)}},6465:(R,E,p)=>{p.d(E,{I:()=>d,a:()=>c,b:()=>o,c:()=>M,d:()=>T,f:()=>v,g:()=>h,i:()=>n,p:()=>_,r:()=>P,s:()=>w});var u=p(5861),a=p(3756),l=p(7208);const d="ion-content",o=".ion-content-scroll-host",t=`${d}, ${o}`,n=g=>g&&"ION-CONTENT"===g.tagName,h=function(){var g=(0,u.Z)(function*(m){return n(m)?(yield new Promise(S=>(0,a.c)(m,S)),m.getScrollElement()):m});return function(S){return g.apply(this,arguments)}}(),c=g=>g.querySelector(o)||g.querySelector(t),v=g=>g.closest(t),w=(g,m)=>n(g)?g.scrollToTop(m):Promise.resolve(g.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),M=(g,m,S,N)=>n(g)?g.scrollByPoint(m,S,N):Promise.resolve(g.scrollBy({top:S,left:m,behavior:N>0?"smooth":"auto"})),_=g=>(0,l.a)(g,d),T=g=>{if(n(g)){const S=g.scrollY;return g.scrollY=!1,S}return g.style.setProperty("overflow","hidden"),!0},P=(g,m)=>{n(g)?g.scrollY=m:g.style.removeProperty("overflow")}},7208:(R,E,p)=>{p.d(E,{a:()=>l,b:()=>a,p:()=>u});const u=f=>console.warn(`[Ionic Warning]: ${f}`),a=(f,...d)=>console.error(`[Ionic Error]: ${f}`,...d),l=(f,...d)=>console.error(`<${f.tagName.toLowerCase()}> must be used inside ${d.join(" or ")}.`)},3230:(R,E,p)=>{p.d(E,{a:()=>u,b:()=>v,c:()=>o,d:()=>w,e:()=>S,f:()=>l,g:()=>a,h:()=>g,i:()=>t,j:()=>h,k:()=>M,l:()=>n,m:()=>d,n:()=>f,o:()=>c,p:()=>_,q:()=>T,r:()=>P,s:()=>m});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",S="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(R,E,p)=>{p.d(E,{s:()=>u});const u=n=>{try{if(n instanceof class t{constructor(h){this.value=h}})return n.value;if(!f()||"string"!=typeof n||""===n)return n;const h=document.createDocumentFragment(),c=document.createElement("div");h.appendChild(c),c.innerHTML=n,o.forEach(_=>{const T=h.querySelectorAll(_);for(let P=T.length-1;P>=0;P--){const g=T[P];g.parentNode?g.parentNode.removeChild(g):h.removeChild(g);const m=l(g);for(let S=0;S<m.length;S++)a(m[S])}});const v=l(h);for(let _=0;_<v.length;_++)a(v[_]);const w=document.createElement("div");w.appendChild(h);const M=w.querySelector("div");return null!==M?M.innerHTML:w.innerHTML}catch(h){return console.error(h),""}},a=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let c=n.attributes.length-1;c>=0;c--){const v=n.attributes.item(c),w=v.name;if(!d.includes(w.toLowerCase())){n.removeAttribute(w);continue}const M=v.value;null!=M&&M.toLowerCase().includes("javascript:")&&n.removeAttribute(w)}const h=l(n);for(let c=0;c<h.length;c++)a(h[c])},l=n=>null!=n.children?n.children:n.childNodes,f=()=>{var n;const h=window,c=null===(n=null==h?void 0:h.Ionic)||void 0===n?void 0:n.config;return!c||(c.get?c.get("sanitizerEnabled",!0):!0===c.sanitizerEnabled||void 0===c.sanitizerEnabled)},d=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},3326:(R,E,p)=>{p.r(E),p.d(E,{ion_refresher:()=>B,ion_refresher_content:()=>j});var u=p(5861),a=p(7205),l=p(5729),f=p(8685),d=p(6465),o=p(3756),t=p(7683),n=p(9442),h=p(3230),c=p(8439),v=p(7741);const _=e=>{const s=e.querySelector("ion-spinner"),r=s.shadowRoot.querySelector("circle"),i=e.querySelector(".spinner-arrow-container"),y=e.querySelector(".arrow-container"),k=y?y.querySelector("ion-icon"):null,b=(0,n.c)().duration(1e3).easing("ease-out"),x=(0,n.c)().addElement(i).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),D=(0,n.c)().addElement(r).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),C=(0,n.c)().addElement(s).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(y&&k){const O=(0,n.c)().addElement(y).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),I=(0,n.c)().addElement(k).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);b.addAnimation([O,I])}return b.addAnimation([x,D,C])},A=(e,s,r=200)=>{if(!e)return Promise.resolve();const i=(0,o.t)(e,r);return(0,a.c)(()=>{e.style.setProperty("transition",`${r}ms all ease-out`),void 0===s?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${s}, 0px)`)}),i},L=function(){var e=(0,u.Z)(function*(s,r){const i=s.querySelector("ion-refresher-content");if(!i)return Promise.resolve(!1);yield new Promise(b=>(0,o.c)(i,b));const y=s.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),k=s.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==y&&null!==k&&("ios"===r&&(0,l.a)("mobile")&&void 0!==s.style.webkitOverflowScrolling||"md"===r)});return function(r,i){return e.apply(this,arguments)}}(),B=class{constructor(e){(0,a.r)(this,e),this.ionRefresh=(0,a.e)(this,"ionRefresh",7),this.ionPull=(0,a.e)(this,"ionPull",7),this.ionStart=(0,a.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){var e=this;return(0,u.Z)(function*(){const s=yield L(e.el,(0,l.b)(e));if(s&&!e.nativeRefresher){const r=e.el.closest("ion-content");e.setupNativeRefresher(r)}else s||e.destroyNativeRefresher()})()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}resetNativeRefresher(e,s){var r=this;return(0,u.Z)(function*(){r.state=s,"ios"===(0,l.b)(r)?yield A(e,void 0,300):yield(0,o.t)(r.el.querySelector(".refresher-refreshing-icon"),200),r.didRefresh=!1,r.needsCompletion=!1,r.pointerDown=!1,r.animations.forEach(i=>i.destroy()),r.animations=[],r.progress=0,r.state=1})()}setupiOSNativeRefresher(e,s){var r=this;return(0,u.Z)(function*(){r.elementToTransform=r.scrollEl;const i=e.shadowRoot.querySelectorAll("svg");let y=.16*r.scrollEl.clientHeight;const k=i.length;(0,a.c)(()=>i.forEach(b=>b.style.setProperty("animation","none"))),r.scrollListenerCallback=()=>{!r.pointerDown&&1===r.state||(0,a.f)(()=>{const b=r.scrollEl.scrollTop,x=r.el.clientHeight;if(b>0){if(8===r.state){const I=(0,o.l)(0,b/(.5*x),1);return void(0,a.c)(()=>((e,s)=>{e.style.setProperty("opacity",s.toString())})(s,1-I))}return}r.pointerDown&&(r.didStart||(r.didStart=!0,r.ionStart.emit()),r.pointerDown&&r.ionPull.emit());const D=r.didStart?30:0,C=r.progress=(0,o.l)(0,(Math.abs(b)-D)/y,1);8===r.state||1===C?(r.pointerDown&&((e,s)=>{(0,a.c)(()=>{e.style.setProperty("--refreshing-rotation-duration",s>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")})})(s,r.lastVelocityY),r.didRefresh||(r.beginRefresh(),r.didRefresh=!0,(0,t.d)({style:"light"}),r.pointerDown||A(r.elementToTransform,`${x}px`))):(r.state=2,((e,s,r)=>{(0,a.c)(()=>{e.forEach((y,k)=>{const b=k*(1/s),C=(0,o.l)(0,(r-b)/(1-b),1);y.style.setProperty("opacity",C.toString())})})})(i,k,C))})},r.scrollEl.addEventListener("scroll",r.scrollListenerCallback),r.gesture=(yield Promise.resolve().then(p.bind(p,3139))).createGesture({el:r.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{r.pointerDown=!0,r.didRefresh||A(r.elementToTransform,"0px"),0===y&&(y=.16*r.scrollEl.clientHeight)},onMove:b=>{r.lastVelocityY=b.velocityY},onEnd:()=>{r.pointerDown=!1,r.didStart=!1,r.needsCompletion?(r.resetNativeRefresher(r.elementToTransform,32),r.needsCompletion=!1):r.didRefresh&&(0,a.f)(()=>A(r.elementToTransform,`${r.el.clientHeight}px`))}}),r.disabledChanged()})()}setupMDNativeRefresher(e,s,r){var i=this;return(0,u.Z)(function*(){const y=(0,o.g)(s).querySelector("circle"),k=i.el.querySelector("ion-refresher-content .refresher-pulling-icon"),b=(0,o.g)(r).querySelector("circle");null!==y&&null!==b&&(0,a.c)(()=>{y.style.setProperty("animation","none"),r.style.setProperty("animation-delay","-655ms"),b.style.setProperty("animation-delay","-655ms")}),i.gesture=(yield Promise.resolve().then(p.bind(p,3139))).createGesture({el:i.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==i.state&&32!==i.state&&0===i.scrollEl.scrollTop,onStart:x=>{x.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:x=>{if(x.velocityY<0&&0===i.progress&&!x.data.didStart||x.data.cancelled)x.data.cancelled=!0;else{if(!x.data.didStart){x.data.didStart=!0,i.state=2,(0,a.c)(()=>i.scrollEl.style.setProperty("--overflow","hidden"));const D=(e=>{const s=e.previousElementSibling;return null!==s&&"ION-HEADER"===s.tagName?"translate":"scale"})(e),C=((e,s,r)=>"scale"===e?((e,s)=>{const r=s.clientHeight,i=(0,n.c)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${r}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return _(e).addAnimation([i])})(s,r):((e,s)=>{const r=s.clientHeight,i=(0,n.c)().addElement(e).keyframes([{offset:0,transform:`translateY(-${r}px)`},{offset:1,transform:"translateY(100px)"}]);return _(e).addAnimation([i])})(s,r))(D,k,i.el);return x.data.animation=C,C.progressStart(!1,0),i.ionStart.emit(),void i.animations.push(C)}i.progress=(0,o.l)(0,x.deltaY/180*.5,1),x.data.animation.progressStep(i.progress),i.ionPull.emit()}},onEnd:x=>{if(!x.data.didStart)return;if((0,a.c)(()=>i.scrollEl.style.removeProperty("--overflow")),i.progress<=.4)return i.gesture.enable(!1),void x.data.animation.progressEnd(0,i.progress,500).onFinish(()=>{i.animations.forEach(O=>O.destroy()),i.animations=[],i.gesture.enable(!0),i.state=1});const D=(0,f.g)([0,0],[0,0],[1,1],[1,1],i.progress)[0],C=(e=>(0,n.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(k);i.animations.push(C),(0,a.c)((0,u.Z)(function*(){k.style.setProperty("--ion-pulling-refresher-translate",100*D+"px"),x.data.animation.progressEnd(),yield C.play(),i.beginRefresh(),x.data.animation.destroy()}))}}),i.disabledChanged()})()}setupNativeRefresher(e){var s=this;return(0,u.Z)(function*(){if(s.scrollListenerCallback||!e||s.nativeRefresher||!s.scrollEl)return;s.setCss(0,"",!1,""),s.nativeRefresher=!0;const r=s.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),i=s.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===(0,l.b)(s)?s.setupiOSNativeRefresher(r,i):s.setupMDNativeRefresher(e,r,i)})()}componentDidUpdate(){this.checkNativeRefresher()}connectedCallback(){var e=this;return(0,u.Z)(function*(){if("fixed"!==e.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const s=e.el.closest(d.I);if(!s)return void(0,d.p)(e.el);const r=s.querySelector(d.b);e.scrollEl=yield(0,d.g)(r??s),e.backgroundContentEl=(0,o.g)(s??r).querySelector("#background-content"),(yield L(e.el,(0,l.b)(e)))?e.setupNativeRefresher(s):(e.gesture=(yield Promise.resolve().then(p.bind(p,3139))).createGesture({el:s,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>e.canStart(),onStart:()=>e.onStart(),onMove:i=>e.onMove(i),onEnd:()=>e.onEnd()}),e.disabledChanged())})()}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(){var e=this;return(0,u.Z)(function*(){e.nativeRefresher?(e.needsCompletion=!0,e.pointerDown||(0,o.r)(()=>(0,o.r)(()=>e.resetNativeRefresher(e.elementToTransform,32)))):e.close(32,"120ms")})()}cancel(){var e=this;return(0,u.Z)(function*(){e.nativeRefresher?e.pointerDown||(0,o.r)(()=>(0,o.r)(()=>e.resetNativeRefresher(e.elementToTransform,16))):e.close(16,"")})()}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const s=e.event;if(s.touches&&s.touches.length>1||0!=(56&this.state))return;const r=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,i=e.deltaY*r;if(i<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(s.cancelable&&s.preventDefault(),this.setCss(i,"0ms",!0,""),0===i)return void(this.progress=0);const y=this.pullMin;this.progress=i/y,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),i<y?this.state=2:i>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,s){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,s)}setCss(e,s,r,i){this.nativeRefresher||(this.appliedStyles=e>0,(0,a.c)(()=>{if(this.scrollEl&&this.backgroundContentEl){const y=this.scrollEl.style,k=this.backgroundContentEl.style;y.transform=k.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",y.transitionDuration=k.transitionDuration=s,y.transitionDelay=k.transitionDelay=i,y.overflow=r?"hidden":""}}))}render(){const e=(0,l.b)(this);return(0,a.h)(a.H,{slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return(0,a.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};B.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};const j=class{constructor(e){(0,a.r)(this,e)}componentWillLoad(){if(void 0===this.pullingIcon){const e=(0,l.b)(this),s=void 0!==this.el.style.webkitOverflowScrolling?"lines":h.g;this.pullingIcon=l.c.get("refreshingIcon","ios"===e&&(0,l.a)("mobile")?l.c.get("spinner",s):"circular")}if(void 0===this.refreshingSpinner){const e=(0,l.b)(this);this.refreshingSpinner=l.c.get("refreshingSpinner",l.c.get("spinner","ios"===e?"lines":"circular"))}}render(){const e=this.pullingIcon,s=null!=e&&void 0!==v.S[e],r=(0,l.b)(this);return(0,a.h)(a.H,{class:r},(0,a.h)("div",{class:"refresher-pulling"},this.pullingIcon&&s&&(0,a.h)("div",{class:"refresher-pulling-icon"},(0,a.h)("div",{class:"spinner-arrow-container"},(0,a.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===r&&"circular"===this.pullingIcon&&(0,a.h)("div",{class:"arrow-container"},(0,a.h)("ion-icon",{icon:h.f})))),this.pullingIcon&&!s&&(0,a.h)("div",{class:"refresher-pulling-icon"},(0,a.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,a.h)("div",{class:"refresher-pulling-text",innerHTML:(0,c.s)(this.pullingText)})),(0,a.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,a.h)("div",{class:"refresher-refreshing-icon"},(0,a.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,a.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,c.s)(this.refreshingText)})))}get el(){return(0,a.i)(this)}}},7741:(R,E,p)=>{p.d(E,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(l,f,d)=>{const o=l*f/d-l+"ms",t=2*Math.PI*f/d;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(l,f,d)=>{const o=f/d,t=l*o-l+"ms",n=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,f)=>({r:6,style:{left:9-9*f+"px","animation-delay":-110*f+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,f,d)=>({y1:14,y2:26,style:{transform:`rotate(${360/d*f+(f<d/2?180:-180)}deg)`,"animation-delay":l*f/d-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,f,d)=>({y1:12,y2:20,style:{transform:`rotate(${360/d*f+(f<d/2?180:-180)}deg)`,"animation-delay":l*f/d-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,f,d)=>({y1:17,y2:29,style:{transform:`rotate(${30*f+(f<6?180:-180)}deg)`,"animation-delay":l*f/d-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,f,d)=>({y1:12,y2:20,style:{transform:`rotate(${30*f+(f<6?180:-180)}deg)`,"animation-delay":l*f/d-l+"ms"}})}}}}]);