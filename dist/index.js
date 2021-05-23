var ht=Object.defineProperty;var gt=(t,e)=>{for(var n in e)ht(t,n,{get:e[n],enumerable:!0})};function c(){}function Z(t){return t()}function tt(){return Object.create(null)}function y(t){t.forEach(Z)}function xt(t){return typeof t=="function"}function _(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function bt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return c;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function F(t,e,n){t.$$.on_destroy.push($t(e,n))}function d(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function et(t){return document.createTextNode(t)}function v(){return et(" ")}function P(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yt(t){return Array.from(t.childNodes)}var M;function N(t){M=t}function wt(){if(!M)throw new Error("Function called outside component initialization");return M}function R(t){wt().$$.on_mount.push(t)}var D=[],nt=[],T=[],ot=[],vt=Promise.resolve(),V=!1;function jt(){V||(V=!0,vt.then(st))}function G(t){T.push(t)}var J=!1,K=new Set;function st(){if(!J){J=!0;do{for(let t=0;t<D.length;t+=1){let e=D[t];N(e),Ct(e.$$)}for(N(null),D.length=0;nt.length;)nt.pop()();for(let t=0;t<T.length;t+=1){let e=T[t];K.has(e)||(K.add(e),e())}T.length=0}while(D.length);for(;ot.length;)ot.pop()();V=!1,J=!1,K.clear()}}function Ct(t){if(t.fragment!==null){t.update(),y(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}var U=new Set,j;function Q(){j={r:0,c:[],p:j}}function W(){j.r||y(j.c),j=j.p}function k(t,e){t&&t.i&&(U.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(U.has(t))return;U.add(t),j.c.push(()=>{U.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function A(t){t&&t.c()}function S(t,e,n,o){let{fragment:i,on_mount:r,on_destroy:f,after_update:l}=t.$$;i&&i.m(e,n),o||G(()=>{let a=r.map(Z).filter(xt);f?f.push(...a):y(a),t.$$.on_mount=[]}),l.forEach(G)}function q(t,e){let n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function kt(t,e){t.$$.dirty[0]===-1&&(D.push(t),jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function b(t,e,n,o,i,r,f=[-1]){let l=M;N(t);let a=t.$$={fragment:null,ctx:null,props:r,update:c,not_equal:i,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:tt(),dirty:f,skip_bound:!1},s=!1;if(a.ctx=n?n(t,e.props||{},(u,$,...w)=>{let C=w.length?w[0]:$;return a.ctx&&i(a.ctx[u],a.ctx[u]=C)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](C),s&&kt(t,u)),$}):[],a.update(),s=!0,y(a.before_update),a.fragment=o?o(a.ctx):!1,e.target){if(e.hydrate){let u=yt(e.target);a.fragment&&a.fragment.l(u),u.forEach(h)}else a.fragment&&a.fragment.c();e.intro&&k(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),st()}N(l)}var g=class{$destroy(){q(this,1),this.$destroy=c}$on(e,n){let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var E=[];function rt(t,e=c){let n,o=[];function i(l){if(_(t,l)&&(t=l,n)){let a=!E.length;for(let s=0;s<o.length;s+=1){let u=o[s];u[1](),E.push(u,t)}if(a){for(let s=0;s<E.length;s+=2)E[s][0](E[s+1]);E.length=0}}}function r(l){i(l(t))}function f(l,a=c){let s=[l,a];return o.push(s),o.length===1&&(n=e(i)||c),l(t),()=>{let u=o.indexOf(s);u!==-1&&o.splice(u,1),o.length===0&&(n(),n=null)}}return{set:i,update:r,subscribe:f}}var O=rt("dashboard");var B={};gt(B,{Collections:()=>ut,Dashboard:()=>H});function St(t){let e;return{c(){e=p("section"),e.textContent="dashboard"},m(n,o){x(n,e,o)},p:c,i:c,o:c,d(n){n&&h(e)}}}var at=class extends g{constructor(e){super();b(this,e,null,St,_,{})}},it=at;var H=it;function qt(t){let e;return{c(){e=p("section"),e.textContent="COLLECTIONS"},m(n,o){x(n,e,o)},p:c,i:c,o:c,d(n){n&&h(e)}}}var lt=class extends g{constructor(e){super();b(this,e,null,qt,_,{})}},ct=lt;var ut=ct;var X=t=>new URLSearchParams(window.location.search).get(t),I=t=>t.charAt(0).toUpperCase()+t.slice(1);function Et(t){let e,n,o,i,r,f,l,a,s,u,$,w,C,Y;return{c(){e=p("header"),n=p("div"),n.innerHTML=`<img class="w-8" src="./logo.png" alt=""/> 
        <span class="text-xl tracking-widest">Solr-Vue</span>`,o=v(),i=p("div"),r=p("div"),f=p("button"),f.textContent="Dashboard",a=v(),s=p("button"),s.textContent="Collections",$=v(),w=p("span"),w.textContent="Logout",m(n,"class","flex-initial flex items-center space-x-3"),m(f,"data-url",l="dashboard"),m(f,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),m(s,"data-url",u="collections"),m(s,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),m(w,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),m(r,"class","flex space-x-4"),m(i,"class","flex items-center justify-center"),m(e,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(z,_t){x(z,e,_t),d(e,n),d(e,o),d(e,i),d(i,r),d(r,f),d(r,a),d(r,s),d(r,$),d(r,w),C||(Y=[P(f,"click",t[0]),P(s,"click",t[0])],C=!0)},p:c,i:c,o:c,d(z){z&&h(e),C=!1,y(Y)}}}function Dt(t){function e(n){let o=n.target.dataset.url;window.history.replaceState(null,null,`?p=${o}`),O.update(i=>I(o))}return[e]}var ft=class extends g{constructor(e){super();b(this,e,Dt,Et,_,{})}},pt=ft;function Lt(t){let e,n,o,i,r,f;n=new pt({});var l=t[0]?B[t[0]]:H;function a(s){return{}}return l&&(r=new l(a(t))),{c(){e=p("section"),A(n.$$.fragment),o=v(),i=p("section"),r&&A(r.$$.fragment),m(i,"class","flex-1 p-3"),m(e,"class","flex flex-col w-full h-full bg-gray-100")},m(s,u){x(s,e,u),S(n,e,null),d(e,o),d(e,i),r&&S(r,i,null),f=!0},p(s,[u]){if(l!==(l=s[0]?B[s[0]]:H)){if(r){Q();let $=r;L($.$$.fragment,1,0,()=>{q($,1)}),W()}l?(r=new l(a(s)),A(r.$$.fragment),k(r.$$.fragment,1),S(r,i,null)):r=null}},i(s){f||(k(n.$$.fragment,s),r&&k(r.$$.fragment,s),f=!0)},o(s){L(n.$$.fragment,s),r&&L(r.$$.fragment,s),f=!1},d(s){s&&h(e),q(n),r&&q(r)}}}function At(t,e,n){let o;return F(t,O,i=>n(0,o=i)),R(async()=>{O.update(i=>X("p")?I(X("p")):"Dashboard")}),[o]}var dt=class extends g{constructor(e){super();b(this,e,At,Lt,_,{})}},mt=dt;var Ot=new mt({target:document.getElementById("app")}),Pt=Ot;export{Pt as default};
