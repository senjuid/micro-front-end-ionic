(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9966,6052],{7423:(I,W,v)=>{v.d(W,{Uw:()=>Q,fo:()=>J,xz:()=>m});var f=v(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var g=(()=>{return(n=g||(g={})).Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",g;var n})();class m extends Error{constructor(e,t){super(e),this.message=e,this.code=t}}const p=n=>{var e,t,r,u,c;const b=n.CapacitorCustomPlatform||null,i=n.Capacitor||{},T=i.Plugins=i.Plugins||{},a=n.CapacitorPlatforms,D=(null===(e=null==a?void 0:a.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==b?b.name:(n=>{var e,t;return(null==n?void 0:n.androidBridge)?"android":(null===(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)||void 0===t?void 0:t.bridge)?"ios":"web"})(n)),j=(null===(t=null==a?void 0:a.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==D()),q=(null===(r=null==a?void 0:a.currentPlatform)||void 0===r?void 0:r.isPluginAvailable)||(o=>{const s=B.get(o);return!(!(null==s?void 0:s.platforms.has(D()))&&!F(o))}),F=(null===(u=null==a?void 0:a.currentPlatform)||void 0===u?void 0:u.getPluginHeader)||(o=>{var s;return null===(s=i.PluginHeaders)||void 0===s?void 0:s.find($=>$.name===o)}),B=new Map,ie=(null===(c=null==a?void 0:a.currentPlatform)||void 0===c?void 0:c.registerPlugin)||((o,s={})=>{const $=B.get(o);if($)return console.warn(`Capacitor plugin "${o}" already registered. Cannot register plugins twice.`),$.proxy;const E=D(),x=F(o);let h;const oe=function(){var l=(0,f.Z)(function*(){return!h&&E in s?h=h="function"==typeof s[E]?yield s[E]():s[E]:null!==b&&!h&&"web"in s&&(h=h="function"==typeof s.web?yield s.web():s.web),h});return function(){return l.apply(this,arguments)}}(),k=l=>{let d;const w=(...L)=>{const _=oe().then(P=>{const C=((l,d)=>{var w,L;if(!x){if(l)return null===(L=l[d])||void 0===L?void 0:L.bind(l);throw new m(`"${o}" plugin is not implemented on ${E}`,g.Unimplemented)}{const _=null==x?void 0:x.methods.find(P=>d===P.name);if(_)return"promise"===_.rtype?P=>i.nativePromise(o,d.toString(),P):(P,C)=>i.nativeCallback(o,d.toString(),P,C);if(l)return null===(w=l[d])||void 0===w?void 0:w.bind(l)}})(P,l);if(C){const H=C(...L);return d=null==H?void 0:H.remove,H}throw new m(`"${o}.${l}()" is not implemented on ${E}`,g.Unimplemented)});return"addListener"===l&&(_.remove=(0,f.Z)(function*(){return d()})),_};return w.toString=()=>`${l.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:l,writable:!1,configurable:!1}),w},K=k("addListener"),z=k("removeListener"),le=(l,d)=>{const w=K({eventName:l},d),L=function(){var P=(0,f.Z)(function*(){const C=yield w;z({eventName:l,callbackId:C},d)});return function(){return P.apply(this,arguments)}}(),_=new Promise(P=>w.then(()=>P({remove:L})));return _.remove=(0,f.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield L()}),_},R=new Proxy({},{get(l,d){switch(d){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?le:K;case"removeListener":return z;default:return k(d)}}});return T[o]=R,B.set(o,{name:o,proxy:R,platforms:new Set([...Object.keys(s),...x?[E]:[]])}),R});return i.convertFileSrc||(i.convertFileSrc=o=>o),i.getPlatform=D,i.handleError=o=>n.console.error(o),i.isNativePlatform=j,i.isPluginAvailable=q,i.pluginMethodNoop=(o,s,$)=>Promise.reject(`${$} does not have an implementation of "${s}".`),i.registerPlugin=ie,i.Exception=m,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},O=(n=>n.Capacitor=p(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),J=O.registerPlugin;class Q{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var r=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const c=this.windowListeners[e];c&&!c.registered&&this.addWindowListener(c);const b=function(){var T=(0,f.Z)(function*(){return r.removeListener(e,t)});return function(){return T.apply(this,arguments)}}(),i=Promise.resolve({remove:b});return Object.defineProperty(i,"remove",{value:(T=(0,f.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield b()}),function(){return T.apply(this,arguments)})}),i;var T}removeAllListeners(){var e=this;return(0,f.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const r=this.listeners[e];r&&r.forEach(u=>u(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new O.Exception(e,g.Unimplemented)}unavailable(e="not available"){return new O.Exception(e,g.Unavailable)}removeListener(e,t){var r=this;return(0,f.Z)(function*(){const u=r.listeners[e];if(!u)return;const c=u.indexOf(t);r.listeners[e].splice(c,1),r.listeners[e].length||r.removeWindowListener(r.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){!e||(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}},6052:(I,W,v)=>{v.r(W),v.d(W,{Storage:()=>A});const A=(0,v(7423).fo)("Storage",{web:()=>v.e(8913).then(v.bind(v,8913)).then(U=>new U.StorageWeb)})},5861:(I,W,v)=>{function f(U,M,Z,G,S,g,m){try{var y=U[g](m),p=y.value}catch(V){return void Z(V)}y.done?M(p):Promise.resolve(p).then(G,S)}function A(U){return function(){var M=this,Z=arguments;return new Promise(function(G,S){var g=U.apply(M,Z);function m(p){f(g,G,S,m,y,"next",p)}function y(p){f(g,G,S,m,y,"throw",p)}m(void 0)})}}v.d(W,{Z:()=>A})}}]);