(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";function r(){}n.r(t),n.d(t,"default",(function(){return wt}));var l=e=>e;function a(e){return e()}function s(){return Object.create(null)}function o(e){e.forEach(a)}function i(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t,n){e.$$.on_destroy.push(function(e,...t){if(null==e)return r;let n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}(t,n))}function f(e,t,n,r){if(e){let l=d(e,t,n,r);return e[0](l)}}function d(e,t,n,r){return e[1]&&r?function(e,t){for(let n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function p(e,t,n,r,l,a,s){let o=function(e,t,n,r){if(e[2]&&r){let l=e[2](r(n));if(void 0===t.dirty)return l;if("object"==typeof l){let e=[],n=Math.max(t.dirty.length,l.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|l[r];return e}return t.dirty|l}return t.dirty}(t,r,l,a);if(o){let l=d(t,n,r,s);e.p(l,o)}}function h(e){return e&&i(e.destroy)?e.destroy:r}var m="undefined"!=typeof window,g=m?()=>window.performance.now():()=>Date.now(),$=m?e=>requestAnimationFrame(e):r,x=new Set;function b(e){x.forEach((t=>{t.c(e)||(x.delete(t),t.f())})),0!==x.size&&$(b)}function w(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function C(){return _(" ")}function S(){return _("")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function E(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}var O,A=new Set,M=0;function R(e,t){let n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),l=n.length-r.length;l&&(e.style.animation=r.join(", "),(M-=l)||$((()=>{M||(A.forEach((e=>{let t=e.__svelte_stylesheet,n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),A.clear())})))}function z(e){O=e}function L(){if(!O)throw new Error("Function called outside component initialization");return O}function F(e){L().$$.on_mount.push(e)}function T(e){return L().$$.context.get(e)}var N=[],q=[],D=[],Y=[],I=Promise.resolve(),W=!1;function P(){W||(W=!0,I.then(Z))}function B(e){D.push(e)}var K,V=!1,J=new Set;function Z(){if(!V){V=!0;do{for(let e=0;e<N.length;e+=1){let t=N[e];z(t),G(t.$$)}for(z(null),N.length=0;q.length;)q.pop()();for(let e=0;e<D.length;e+=1){let t=D[e];J.has(t)||(J.add(t),t())}D.length=0}while(N.length);for(;Y.length;)Y.pop()();W=!1,V=!1,J.clear()}}function G(e){if(null!==e.fragment){e.update(),o(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function Q(e,t,n){e.dispatchEvent(function(e,t){let n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}var U,X=new Set;function ee(){U={r:0,c:[],p:U}}function te(){U.r||o(U.c),U=U.p}function ne(e,t){e&&e.i&&(X.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(X.has(e))return;X.add(e),U.c.push((()=>{X.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}var le={duration:0};function ae(e,t,n){let a,s,o=t(e,n),c=!1,u=0;function f(){a&&R(e,a)}function d(){let{delay:t=0,duration:n=300,easing:i=l,tick:d=r,css:p}=o||le;p&&(a=function(e,t,n,r,l,a,s,o=0){let i=16.666/r,c="{\n";for(let e=0;e<=1;e+=i){let r=t+(n-t)*a(e);c+=100*e+`%{${s(r,1-r)}}\n`}let u=c+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${o}`,d=e.ownerDocument;A.add(d);let p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(k("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));let m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${l}ms 1 both`,M+=1,f}(e,0,1,n,t,i,p,u++)),d(0,1);let h=g()+t,m=h+n;s&&s.abort(),c=!0,B((()=>Q(e,!0,"start"))),s=function(e){let t;return 0===x.size&&$(b),{promise:new Promise((n=>{x.add(t={c:e,f:n})})),abort(){x.delete(t)}}}((t=>{if(c){if(t>=m)return d(1,0),Q(e,!0,"end"),f(),c=!1;if(t>=h){let e=i((t-h)/n);d(e,1-e)}}return c}))}let p=!1;return{start(){p||(R(e),i(o)?(o=o(),(K||(K=Promise.resolve()).then((()=>{K=null})),K).then(d)):d())},invalidate(){p=!1},end(){c&&(f(),c=!1)}}}function se(e){e&&e.c()}function oe(e,t,n,r){let{fragment:l,on_mount:s,on_destroy:c,after_update:u}=e.$$;l&&l.m(t,n),r||B((()=>{let t=s.map(a).filter(i);c?c.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(B)}function ie(e,t){let n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t,n,l,a,i,c=[-1]){let u=O;z(e);let f=e.$$={fragment:null,ctx:null,props:i,update:r,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:t.context||[]),callbacks:s(),dirty:c,skip_bound:!1},d=!1;if(f.ctx=n?n(e,t.props||{},((t,n,...r)=>{let l=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=l)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](l),d&&function(e,t){-1===e.$$.dirty[0]&&(N.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],f.update(),d=!0,o(f.before_update),f.fragment=!!l&&l(f.ctx),t.target){if(t.hydrate){let e=function(e){return Array.from(e.childNodes)}(t.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();t.intro&&ne(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),Z()}z(u)}var ue=class{$destroy(){ie(this,1),this.$destroy=r}$on(e,t){let n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}},fe=[];function de(e,t=r){let n,l=[];function a(t){if(c(e,t)&&(e=t,n)){let t=!fe.length;for(let t=0;t<l.length;t+=1){let n=l[t];n[1](),fe.push(n,e)}if(t){for(let e=0;e<fe.length;e+=2)fe[e][0](fe[e+1]);fe.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(s,o=r){let i=[s,o];return l.push(i),1===l.length&&(n=t(a)||r),s(e),()=>{let e=l.indexOf(i);-1!==e&&l.splice(e,1),0===l.length&&(n(),n=null)}}}}var pe=de({activePage:"Dashboard",isConnected:!1});function he(e,t=!1){return(e=e.slice(e.startsWith("/#")?2:0,e.endsWith("/*")?-2:void 0)).startsWith("/")||(e="/"+e),"/"===e&&(e=""),t&&!e.endsWith("/")&&(e+="/"),e}function me(e,t){e=he(e,!0),t=he(t,!0);let n=[],r={},l=!0,a=e.split("/").map((e=>e.startsWith(":")?(n.push(e.slice(1)),"([^\\/]+)"):e)).join("\\/"),s=t.match(new RegExp(`^${a}$`));return s||(l=!1,s=t.match(new RegExp(`^${a}`))),s?(n.forEach(((e,t)=>r[e]=s[t+1])),{exact:l,params:r,part:s[0].slice(0,-1)}):null}function ge(e,t,n){if(""===n)return e;if("/"===n[0])return n;let r=e=>e.split("/").filter((e=>""!==e)),l=r(e);return"/"+(t?r(t):[]).map(((e,t)=>l[t])).join("/")+"/"+n}function $e(e,t,n,r){let l=[t,"data-"+t].reduce(((t,r)=>{let l=e.getAttribute(r);return n&&e.removeAttribute(r),null===l?t:l}),!1);return!r&&""===l||(l||r||!1)}function xe(e){let t=e.split("&").map((e=>e.split("="))).reduce(((e,t)=>{let n=t[0];if(!n)return e;let r=!(t.length>1)||t[t.length-1];return"string"==typeof r&&r.includes(",")&&(r=r.split(",")),void 0===e[n]?e[n]=[r]:e[n].push(r),e}),{});return Object.entries(t).reduce(((e,t)=>(e[t[0]]=t[1].length>1?t[1]:t[1][0],e)),{})}function be(e,t){return e?t+e:""}function we(e){throw new Error("[Tinro] "+e)}var ve,ye,ke,_e={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(e,t,n,r){return e===this.HISTORY?t&&t():e===this.HASH?n&&n():r&&r()},getDefault(){return window&&"srcdoc"!==window.location.pathname?this.HISTORY:this.MEMORY}},Ce=function(){let e,t=_e.getDefault(),n=n=>e&&e(Se(t)),r=e=>{e&&(t=e),window.onhashchange=window.onpopstate=ve=null,t!==_e.OFF&&_e.run(t,(e=>window.onpopstate=n),(e=>window.onhashchange=n))&&n()},l=e=>{let n=Object.assign(Se(t),e);return n.path+be(function(e){return Object.entries(e).map((([e,t])=>t?!0===t?e:`${e}=${Array.isArray(t)?t.join(","):t}`:null)).filter((e=>e)).join("&")}(n.query),"?")+be(n.hash,"#")};return{mode:r,get:e=>Se(t),go(e,r){(function(e,t,n){!n&&(ye=ke);let r=e=>history[(n?"replace":"push")+"State"]({},"",e);_e.run(e,(e=>r(t)),(e=>r(`#${t}`)),(e=>ve=t))})(t,e,r),n()},start(t){e=t,r()},stop(){e=null,r(_e.OFF)},set(e){this.go(l(e),!e.path)},methods(){return function(e){let t=()=>e.get().query,n=t=>e.set({query:t}),r=e=>n(e(t())),l=t=>e.set({hash:t});return{hash:{get:()=>e.get().hash,set:l,clear:()=>l("")},query:{replace:n,clear:()=>n(""),get:e=>e?t()[e]:t(),set(e,t){r((n=>(n[e]=t,n)))},delete(e){r((t=>(t[e]&&delete t[e],t)))}}}}(this)}}}();function Se(e){let t=window.location,n=_e.run(e,(e=>t.pathname+t.search+t.hash),(e=>String(t.hash.slice(1)||"/")),(e=>ve||"/")),r=n.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return ke=n,{url:n,from:ye,path:r[1]||"",query:xe(r[2]||""),hash:r[3]||""}}var He=function(){let{subscribe:e}=de(Ce.get(),(e=>{Ce.start(e);let t=function(e){let t=t=>{let n=t.target.closest("a[href]"),r=n&&$e(n,"target",!1,"_self"),l=n&&$e(n,"tinro-ignore"),a=t.ctrlKey||t.metaKey||t.altKey||t.shiftKey;if("_self"==r&&!l&&!a&&n){let r=n.getAttribute("href").replace(/^\/#/,"");/^\/\/|^[a-zA-Z]+:/.test(r)||(t.preventDefault(),e(r.startsWith("/")?r:n.href.replace(window.location.origin,"")))}};return addEventListener("click",t),()=>removeEventListener("click",t)}(Ce.go);return()=>{Ce.stop(),t()}}));return{subscribe:e,goto:Ce.go,params:je,meta:Re,useHashNavigation:e=>Ce.mode(e?_e.HASH:_e.HISTORY),mode:{hash:()=>Ce.mode(_e.HASH),history:()=>Ce.mode(_e.HISTORY),memory:()=>Ce.mode(_e.MEMORY)},location:Ce.methods()}}();function Ee(e){let t=$e(e,"href"),n=$e(e,"exact",!0),r=$e(e,"active-class",!0,"active");return{destroy:He.subscribe((l=>{let a=me(t,l.path);a&&(a.exact&&n||!n)?e.classList.add(r):e.classList.remove(r)}))}}function je(){return T("tinro").meta.params}var Oe="tinro",Ae=ze({pattern:"",matched:!0});function Me(e){let t=T(Oe)||Ae;(t.exact||t.fallback)&&we(`${e.fallback?"<Route fallback>":`<Route path="${e.path}">`}  can't be inside ${t.fallback?"<Route fallback>":`<Route path="${t.path||"/"}"> with exact path`}`);let n=e.fallback?"fallbacks":"childs",r=de({}),l=ze({fallback:e.fallback,parent:t,update(e){l.exact=!e.path.endsWith("/*"),l.pattern=he(`${l.parent.pattern||""}${e.path}`),l.redirect=e.redirect,l.firstmatch=e.firstmatch,l.breadcrumb=e.breadcrumb,l.match()},register:()=>(l.parent[n].add(l),()=>{l.parent[n].delete(l),l.router.un&&l.router.un()}),show:()=>{e.onShow(),!l.fallback&&l.parent.activeChilds.add(l)},hide:()=>{e.onHide(),!l.fallback&&l.parent.activeChilds.delete(l)},match:async()=>{l.matched=!1;let{path:t,url:n,from:a,query:s}=l.router.location,o=me(l.pattern,t);if(!l.fallback&&o&&l.redirect&&(!l.exact||l.exact&&o.exact)){let e=ge(t,l.parent.pattern,l.redirect);return He.goto(e,!0)}l.meta=o&&{from:a,url:n,query:s,match:o.part,pattern:l.pattern,breadcrumbs:l.parent.meta&&l.parent.meta.breadcrumbs.slice()||[],params:o.params,subscribe:r.subscribe},l.breadcrumb&&l.meta&&l.meta.breadcrumbs.push({name:l.breadcrumb,path:o.part}),r.set(l.meta),!o||l.fallback||!(!l.exact||l.exact&&o.exact)||l.parent.firstmatch&&l.parent.matched?l.hide():(e.onMeta(l.meta),l.parent.matched=!0,l.show()),o&&l.showFallbacks()}});return function(e,t){L().$$.context.set(e,t)}(Oe,l),F((()=>l.register())),l}function Re(){return e=Oe,L().$$.context.has(e)?T(Oe).meta:we("meta() function must be run inside any `<Route>` child component only");var e}function ze(e){let t={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,async showFallbacks(){if(!this.fallback&&(await(P(),I),this.childs.size>0&&0==this.activeChilds.size||0==this.childs.size&&this.fallbacks.size>0)){let e=this;for(;0==e.fallbacks.size;)if(e=e.parent,!e)return;e&&e.fallbacks.forEach((e=>{if(e.redirect){let t=ge("/",e.parent.pattern,e.redirect);He.goto(t,!0)}else e.show()}))}},start(){this.router.un||(this.router.un=He.subscribe((e=>{this.router.location=e,null!==this.pattern&&this.match()})))},match(){this.showFallbacks()}};return Object.assign(t,e),t.start(),t}var Le=e=>({params:2&e,meta:4&e}),Fe=e=>({params:e[1],meta:e[2]});function Te(e){let t,n=e[9].default,r=f(n,e,e[8],Fe);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,l){r&&r.p&&(!t||262&l)&&p(r,n,e,e[8],l,Le,Fe)},i(e){t||(ne(r,e),t=!0)},o(e){re(r,e),t=!1},d(e){r&&r.d(e)}}}function Ne(e){let t,n,r=e[0]&&Te(e);return{c(){r&&r.c(),t=S()},m(e,l){r&&r.m(e,l),v(e,t,l),n=!0},p(e,[n]){e[0]?r?(r.p(e,n),1&n&&ne(r,1)):(r=Te(e),r.c(),ne(r,1),r.m(t.parentNode,t)):r&&(ee(),re(r,1,1,(()=>{r=null})),te())},i(e){n||(ne(r),n=!0)},o(e){re(r),n=!1},d(e){r&&r.d(e),e&&y(t)}}}function qe(e,t,n){let{$$slots:r={},$$scope:l}=t,{path:a="/*"}=t,{fallback:s=!1}=t,{redirect:o=!1}=t,{firstmatch:i=!1}=t,{breadcrumb:c=null}=t,u=!1,f={},d={},p=Me({fallback:s,onShow(){n(0,u=!0)},onHide(){n(0,u=!1)},onMeta(e){n(2,d=e),n(1,f=d.params)}});return e.$$set=e=>{"path"in e&&n(3,a=e.path),"fallback"in e&&n(4,s=e.fallback),"redirect"in e&&n(5,o=e.redirect),"firstmatch"in e&&n(6,i=e.firstmatch),"breadcrumb"in e&&n(7,c=e.breadcrumb),"$$scope"in e&&n(8,l=e.$$scope)},e.$$.update=()=>{232&e.$$.dirty&&p.update({path:a,redirect:o,firstmatch:i,breadcrumb:c})},[u,f,d,a,s,o,i,c,l,r]}var De=class extends ue{constructor(e){super(),ce(this,e,qe,Ne,c,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}},Ye=()=>{let e=JSON.parse(sessionStorage.getItem("sessionStarted"))||!1;e?pe.update((t=>(t.isConnected=e,t))):He.goto("/login")};function Ie(e){let t,n,l,a,s,i,c,u,f,d,p,m,g,$,x,b;return{c(){t=k("header"),n=k("div"),n.innerHTML='<img class="w-8" src="./logo.png" alt=""/> \n        <span class="text-xl tracking-widest">Solr-Vue</span>',l=C(),a=k("div"),a.innerHTML='<span class="relative inline-flex"><span class="inline-flex tracking-wider items-center px-3 py-1 font-medium text-green-600">http://127.0.0.1:8080/solr</span> \n            <span class="flex absolute h-3 w-3 -top-0.5 right-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> \n                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></span>',s=C(),i=k("div"),c=k("div"),u=k("a"),u.textContent="Dashboard",d=C(),p=k("a"),p.textContent="Collections",g=C(),$=k("span"),$.textContent="Logout",E(n,"class","flex-initial flex items-center space-x-3"),E(a,"class","flex items-center"),E(u,"data-exact",""),E(u,"data-active-class","underline"),E(u,"href","/"),E(u,"class","font-medium tracking-wider text-blue-600 hover:underline px-3 py-2 cursor-pointer"),E(p,"data-exact",""),E(p,"data-active-class","underline"),E(p,"href","/collections"),E(p,"class","font-medium tracking-wider text-blue-600 hover:underline px-3 py-2 cursor-pointer"),E($,"class","font-medium tracking-wider text-blue-600 hover:underline px-3 py-2 cursor-pointer"),E(c,"class","flex"),E(i,"class","flex items-center justify-center"),E(t,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(r,o){v(r,t,o),w(t,n),w(t,l),w(t,a),w(t,s),w(t,i),w(i,c),w(c,u),w(c,d),w(c,p),w(c,g),w(c,$),x||(b=[h(f=Ee.call(null,u)),h(m=Ee.call(null,p)),H($,"click",e[0])],x=!0)},p:r,i:r,o:r,d(e){e&&y(t),x=!1,o(b)}}}function We(e){return[function(){sessionStorage.clear(),pe.update((e=>(e.isConnected=!1,e))),He.goto("/login")}]}var Pe=class extends ue{constructor(e){super(),ce(this,e,We,Ie,c,{})}};function Be(e){let t,n;return{c(){t=k("div"),n=_(e[1])},m(e,r){v(e,t,r),w(t,n)},p(e,t){2&t&&j(n,e[1])},d(e){e&&y(t)}}}function Ke(e){let t,n,l,a,s,o=(e[0]||"Not Found")+"",i=e[1]&&Be(e);return{c(){t=k("div"),n=k("div"),i&&i.c(),l=C(),a=k("div"),s=_(o),E(a,"class","pl-3 tracking-wider"),E(n,"class","flex items-center divide-x divide-gray-400 space-x-3 select-none text-gray-400"),E(t,"class","flex h-full w-full items-center justify-center")},m(e,r){v(e,t,r),w(t,n),i&&i.m(n,null),w(n,l),w(n,a),w(a,s)},p(e,[t]){e[1]?i?i.p(e,t):(i=Be(e),i.c(),i.m(n,l)):i&&(i.d(1),i=null),1&t&&o!==(o=(e[0]||"Not Found")+"")&&j(s,o)},i:r,o:r,d(e){e&&y(t),i&&i.d()}}}function Ve(e,t,n){let{message:r}=t,{stausCode:l}=t;return e.$$set=e=>{"message"in e&&n(0,r=e.message),"stausCode"in e&&n(1,l=e.stausCode)},[r,l]}var Je=class extends ue{constructor(e){super(),ce(this,e,Ve,Ke,c,{message:0,stausCode:1})}};function Ze(e){let t,n,l,a,s,o,i,c,u,f,d,p,h,m,g,$,x,b,_;return{c(){t=C(),n=k("section"),l=k("div"),a=k("img"),o=C(),i=k("h1"),i.textContent="Welcome to SolrVue",c=C(),u=k("p"),u.textContent="Apache Solr gui for the browser",f=C(),d=k("div"),p=k("input"),h=C(),m=k("div"),m.innerHTML='<input type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="username"/> \n                <input type="password" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="password"/>',g=C(),$=k("button"),$.textContent="Connect",document.title="Login",E(a,"class","w-8"),a.src!==(s="./logo.png")&&E(a,"src","./logo.png"),E(a,"alt",""),E(i,"class","text-2xl"),E(u,"class","text-xs"),E(p,"type","text"),E(p,"class","w-full h-10 border border-gray-400 rounded px-3"),E(p,"placeholder","url"),E(m,"class","flex space-x-3"),E($,"class","text-center w-full bg-blue-900 rounded-md text-white py-3"),E(d,"class","space-y-5 mt-5"),E(d,"autocomplete","off"),E(l,"class","bg-white w-full shadow-xl rounded p-5"),E(n,"class","flex items-center justify-center h-full mx-auto"),E(n,"style",x={width:500})},m(r,s){v(r,t,s),v(r,n,s),w(n,l),w(l,a),w(l,o),w(l,i),w(l,c),w(l,u),w(l,f),w(l,d),w(d,p),w(d,h),w(d,m),w(d,g),w(d,$),b||(_=H($,"click",e[0]),b=!0)},p:r,i:r,o:r,d(e){e&&y(t),e&&y(n),b=!1,_()}}}function Ge(e){return[function(){sessionStorage.setItem("sessionStarted",!0),pe.update((e=>(e.isConnected=!0,e))),He.goto("/collections")}]}var Qe=class extends ue{constructor(e){super(),ce(this,e,Ge,Ze,c,{})}};function Ue(e){let t,n,l,a;return l=new Je({props:{message:"Coming Soon"}}),{c(){t=C(),n=k("section"),se(l.$$.fragment),document.title="Dashboard",E(n,"class","flex h-full")},m(e,r){v(e,t,r),v(e,n,r),oe(l,n,null),a=!0},p:r,i(e){a||(ne(l.$$.fragment,e),a=!0)},o(e){re(l.$$.fragment,e),a=!1},d(e){e&&y(t),e&&y(n),ie(l)}}}function Xe(e){return F((async()=>{Ye()})),[]}var et=class extends ue{constructor(e){super(),ce(this,e,Xe,Ue,c,{})}};function tt(e,t,n){let r=e.slice();return r[1]=t[n],r}function nt(e){let t,n;return t=new Je({props:{message:"there is no collection or alias"}}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},p:r,i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function rt(e){let t,n,l,a,s=e[1]+"";return{c(){t=k("div"),n=k("p"),l=_(s),a=C(),E(n,"class","text-gray-600"),E(t,"class","flex cursor-pointer hover:bg-gray-100 space-y-1 py-2 px-3 border-b")},m(e,r){v(e,t,r),w(t,n),w(n,l),w(t,a)},p:r,d(e){e&&y(t)}}}function lt(e){let t,n,r,l,a,s,o,i,c,u,f,d,p,h,m=e[0],g=[];for(let t=0;t<m.length;t+=1)g[t]=rt(tt(e,m,t));let $=null;return m.length||($=nt()),p=new Je({props:{message:"Please select a collection or alias"}}),{c(){t=C(),n=k("section"),r=k("div"),l=k("div"),l.innerHTML='<h2 class="text-xl ">Collections</h2> \n            <p class="text-sm text-gray-500">Personal details and application.</p>',a=C(),s=k("div");for(let e=0;e<g.length;e+=1)g[e].c();$&&$.c(),o=C(),i=k("div"),c=k("section"),u=k("header"),u.innerHTML='<h2 class="sc-fzoLsD fYZyZu">Collection Name</h2> \n                <div class="flex items-center justify-center space-x-3"><span class="cursor-pointer inline-flex items-center justify-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" color="#718096" stroke-linejoin="round" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span> \n                    <span class="cursor-pointer inline-flex items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#718096" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.984V2h-.09c-.313 0-.616.062-.909.185a2.33 2.33 0 0 0-.775.53 2.23 2.23 0 0 0-.493.753v.001a3.542 3.542 0 0 0-.198.83v.002a6.08 6.08 0 0 0-.024.863c.012.29.018.58.018.869 0 .203-.04.393-.117.572v.001a1.504 1.504 0 0 1-.765.787 1.376 1.376 0 0 1-.558.115H2v.984h.09c.195 0 .38.04.556.121l.001.001c.178.078.329.184.455.318l.002.002c.13.13.233.285.307.465l.001.002c.078.18.117.368.117.566 0 .29-.006.58-.018.869-.012.296-.004.585.024.87v.001c.033.283.099.558.197.824v.001c.106.273.271.524.494.753.223.23.482.407.775.53.293.123.596.185.91.185H6v-.984h-.09c-.2 0-.387-.038-.563-.115a1.613 1.613 0 0 1-.457-.32 1.659 1.659 0 0 1-.309-.467c-.074-.18-.11-.37-.11-.573 0-.228.003-.453.011-.672.008-.228.008-.45 0-.665a4.639 4.639 0 0 0-.055-.64 2.682 2.682 0 0 0-.168-.609A2.284 2.284 0 0 0 3.522 8a2.284 2.284 0 0 0 .738-.955c.08-.192.135-.393.168-.602.033-.21.051-.423.055-.64.008-.22.008-.442 0-.666-.008-.224-.012-.45-.012-.678a1.47 1.47 0 0 1 .877-1.354 1.33 1.33 0 0 1 .563-.121H6zm4 10.032V14h.09c.313 0 .616-.062.909-.185.293-.123.552-.3.775-.53.223-.23.388-.48.493-.753v-.001c.1-.266.165-.543.198-.83v-.002c.028-.28.036-.567.024-.863-.012-.29-.018-.58-.018-.869 0-.203.04-.393.117-.572v-.001a1.502 1.502 0 0 1 .765-.787 1.38 1.38 0 0 1 .558-.115H14v-.984h-.09c-.196 0-.381-.04-.557-.121l-.001-.001a1.376 1.376 0 0 1-.455-.318l-.002-.002a1.415 1.415 0 0 1-.307-.465v-.002a1.405 1.405 0 0 1-.118-.566c0-.29.006-.58.018-.869a6.174 6.174 0 0 0-.024-.87v-.001a3.537 3.537 0 0 0-.197-.824v-.001a2.23 2.23 0 0 0-.494-.753 2.331 2.331 0 0 0-.775-.53 2.325 2.325 0 0 0-.91-.185H10v.984h.09c.2 0 .387.038.562.115.174.082.326.188.457.32.127.134.23.29.309.467.074.18.11.37.11.573 0 .228-.003.452-.011.672-.008.228-.008.45 0 .665.004.222.022.435.055.64.033.214.089.416.168.609a2.285 2.285 0 0 0 .738.955 2.285 2.285 0 0 0-.738.955 2.689 2.689 0 0 0-.168.602c-.033.21-.051.423-.055.64a9.15 9.15 0 0 0 0 .666c.008.224.012.45.012.678a1.471 1.471 0 0 1-.877 1.354 1.33 1.33 0 0 1-.563.121H10z"></path></svg></span> \n                    <span class="cursor-pointer inline-flex items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#718096" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z" clip-rule="evenodd"></path></svg></span></div>',f=C(),d=k("main"),se(p.$$.fragment),document.title="Collections",E(l,"class","flex-initial p-4 border-b bg-gray-50"),E(s,"class","flex-1 flex flex-col overflow-auto"),E(r,"class","flex-initial flex flex-col bg-white w-1/6 rounded-lg shadow-xl overflow-hidden"),E(u,"class","flex-initial flex items-center justify-between border-b py-2 px-3"),E(d,"class","flex-1"),E(c,"class","flex flex-col w-full h-full border"),E(i,"class","flex-1 flex flex-col bg-white rounded-lg shadow-xl"),E(n,"class","flex w-full h-full space-x-3")},m(e,m){v(e,t,m),v(e,n,m),w(n,r),w(r,l),w(r,a),w(r,s);for(let e=0;e<g.length;e+=1)g[e].m(s,null);$&&$.m(s,null),w(n,o),w(n,i),w(i,c),w(c,u),w(c,f),w(c,d),oe(p,d,null),h=!0},p(e,[t]){if(1&t){let n;for(m=e[0],n=0;n<m.length;n+=1){let r=tt(e,m,n);g[n]?g[n].p(r,t):(g[n]=rt(r),g[n].c(),g[n].m(s,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=m.length,!m.length&&$?$.p(e,t):m.length?$&&(ee(),re($,1,1,(()=>{$=null})),te()):($=nt(),$.c(),ne($,1),$.m(s,null))}},i(e){h||(ne(p.$$.fragment,e),h=!0)},o(e){re(p.$$.fragment,e),h=!1},d(e){e&&y(t),e&&y(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(g,e),$&&$.d(),ie(p)}}}function at(e){return F((async()=>{Ye()})),[[]]}var st=class extends ue{constructor(e){super(),ce(this,e,at,lt,c,{})}};function ot(e,{delay:t=0,duration:n=400,easing:r=l}={}){let a=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*a}}function it(e){let t,n,r,l=e[2].default,a=f(l,e,e[1],null);return{c(){t=k("section"),a&&a.c(),E(t,"class","flex-1 flex flex-col p-3 overflow-hidden")},m(e,n){v(e,t,n),a&&a.m(t,null),r=!0},p(e,t){a&&a.p&&(!r||2&t)&&p(a,l,e,e[1],t,null,null)},i(e){r||(ne(a,e),n||B((()=>{n=ae(t,ot,{duration:150}),n.start()})),r=!0)},o(e){re(a,e),r=!1},d(e){e&&y(t),a&&a.d(e)}}}function ct(e){let t,n,l=e[0].path,a=it(e);return{c(){a.c(),t=S()},m(e,r){a.m(e,r),v(e,t,r),n=!0},p(e,[n]){1&n&&c(l,l=e[0].path)?(ee(),re(a,1,1,r),te(),a=it(e),a.c(),ne(a),a.m(t.parentNode,t)):a.p(e,n)},i(e){n||(ne(a),n=!0)},o(e){re(a),n=!1},d(e){e&&y(t),a.d(e)}}}function ut(e,t,n){let r;u(e,He,(e=>n(0,r=e)));let{$$slots:l={},$$scope:a}=t;return e.$$set=e=>{"$$scope"in e&&n(1,a=e.$$scope)},[r,a,l]}var ft=class extends ue{constructor(e){super(),ce(this,e,ut,ct,c,{})}};function dt(e){let t,n;return t=new Pe({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function pt(e){let t,n;return t=new Qe({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function ht(e){let t,n;return t=new et({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function mt(e){let t,n;return t=new st({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function gt(e){let t,n;return t=new Je({props:{message:"No page found"}}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},p:r,i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function $t(e){let t,n,r,l,a,s,o,i;return t=new De({props:{path:"/login",$$slots:{default:[pt]},$$scope:{ctx:e}}}),r=new De({props:{path:"/",$$slots:{default:[ht]},$$scope:{ctx:e}}}),a=new De({props:{path:"/collections",$$slots:{default:[mt]},$$scope:{ctx:e}}}),o=new De({props:{fallback:!0,$$slots:{default:[gt]},$$scope:{ctx:e}}}),{c(){se(t.$$.fragment),n=C(),se(r.$$.fragment),l=C(),se(a.$$.fragment),s=C(),se(o.$$.fragment)},m(e,c){oe(t,e,c),v(e,n,c),oe(r,e,c),v(e,l,c),oe(a,e,c),v(e,s,c),oe(o,e,c),i=!0},p(e,n){let l={};2&n&&(l.$$scope={dirty:n,ctx:e}),t.$set(l);let s={};2&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s);let i={};2&n&&(i.$$scope={dirty:n,ctx:e}),a.$set(i);let c={};2&n&&(c.$$scope={dirty:n,ctx:e}),o.$set(c)},i(e){i||(ne(t.$$.fragment,e),ne(r.$$.fragment,e),ne(a.$$.fragment,e),ne(o.$$.fragment,e),i=!0)},o(e){re(t.$$.fragment,e),re(r.$$.fragment,e),re(a.$$.fragment,e),re(o.$$.fragment,e),i=!1},d(e){ie(t,e),e&&y(n),ie(r,e),e&&y(l),ie(a,e),e&&y(s),ie(o,e)}}}function xt(e){let t,n,r,l,a=e[0].isConnected&&dt();return r=new ft({props:{$$slots:{default:[$t]},$$scope:{ctx:e}}}),{c(){t=k("section"),a&&a.c(),n=C(),se(r.$$.fragment),E(t,"class","flex flex-col w-full h-full")},m(e,s){v(e,t,s),a&&a.m(t,null),w(t,n),oe(r,t,null),l=!0},p(e,[l]){e[0].isConnected?a?1&l&&ne(a,1):(a=dt(),a.c(),ne(a,1),a.m(t,n)):a&&(ee(),re(a,1,1,(()=>{a=null})),te());let s={};2&l&&(s.$$scope={dirty:l,ctx:e}),r.$set(s)},i(e){l||(ne(a),ne(r.$$.fragment,e),l=!0)},o(e){re(a),re(r.$$.fragment,e),l=!1},d(e){e&&y(t),a&&a.d(),ie(r)}}}function bt(e,t,n){let r;return u(e,pe,(e=>n(0,r=e))),He.mode.hash(),F((async()=>{Ye()})),[r]}var wt=new class extends ue{constructor(e){super(),ce(this,e,bt,xt,c,{})}}({target:document.getElementById("app")})}],[[0,1]]]);