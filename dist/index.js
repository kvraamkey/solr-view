function _(){}function Te(e,t){for(let n in t)e[n]=t[n];return e}function ie(e){return e()}function ce(){return Object.create(null)}function Y(e){e.forEach(ie)}function Fe(e){return typeof e=="function"}function w(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function De(e){return Object.keys(e).length===0}function Ye(e,...t){if(e==null)return _;let n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ee(e,t,n){e.$$.on_destroy.push(Ye(t,n))}function fe(e,t,n,r){if(e){let s=ue(e,t,n,r);return e[0](s)}}function ue(e,t,n,r){return e[1]&&r?Te(n.ctx.slice(),e[1](r(t))):n.ctx}function Ne(e,t,n,r){if(e[2]&&r){let s=e[2](r(n));if(t.dirty===void 0)return s;if(typeof s=="object"){let l=[],a=Math.max(t.dirty.length,s.length);for(let o=0;o<a;o+=1)l[o]=t.dirty[o]|s[o];return l}return t.dirty|s}return t.dirty}function de(e,t,n,r,s,l,a){let o=Ne(t,r,s,l);if(o){let i=ue(t,n,r,a);e.p(i,o)}}function f(e,t){e.appendChild(t)}function x(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function v(){return H(" ")}function pe(){return H("")}function B(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ie(e){return Array.from(e.childNodes)}var K;function U(e){K=e}function V(){if(!K)throw new Error("Function called outside component initialization");return K}function R(e){V().$$.on_mount.push(e)}function me(e,t){V().$$.context.set(e,t)}function Z(e){return V().$$.context.get(e)}function he(e){return V().$$.context.has(e)}var N=[],ge=[],J=[],_e=[],xe=Promise.resolve(),te=!1;function we(){te||(te=!0,xe.then(be))}function ve(){return we(),xe}function ne(e){J.push(e)}var re=!1,se=new Set;function be(){if(!re){re=!0;do{for(let e=0;e<N.length;e+=1){let t=N[e];U(t),We(t.$$)}for(U(null),N.length=0;ge.length;)ge.pop()();for(let e=0;e<J.length;e+=1){let t=J[e];se.has(t)||(se.add(t),t())}J.length=0}while(N.length);for(;_e.length;)_e.pop()();te=!1,re=!1,se.clear()}}function We(e){if(e.fragment!==null){e.update(),Y(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}var Q=new Set,O;function L(){O={r:0,c:[],p:O}}function P(){O.r||Y(O.c),O=O.p}function g(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function b(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),O.c.push(()=>{Q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function q(e){e&&e.c()}function M(e,t,n,r){let{fragment:s,on_mount:l,on_destroy:a,after_update:o}=e.$$;s&&s.m(t,n),r||ne(()=>{let i=l.map(ie).filter(Fe);a?a.push(...i):Y(i),e.$$.on_mount=[]}),o.forEach(ne)}function A(e,t){let n=e.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(e,t){e.$$.dirty[0]===-1&&(N.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $(e,t,n,r,s,l,a=[-1]){let o=K;U(e);let i=e.$$={fragment:null,ctx:null,props:l,update:_,not_equal:s,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o?o.$$.context:t.context||[]),callbacks:ce(),dirty:a,skip_bound:!1},c=!1;if(i.ctx=n?n(e,t.props||{},(u,C,...y)=>{let E=y.length?y[0]:C;return i.ctx&&s(i.ctx[u],i.ctx[u]=E)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](E),c&&Be(e,u)),C}):[],i.update(),c=!0,Y(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){let u=Ie(t.target);i.fragment&&i.fragment.l(u),u.forEach(m)}else i.fragment&&i.fragment.c();t.intro&&g(e.$$.fragment),M(e,t.target,t.anchor,t.customElement),be()}U(o)}var k=class{$destroy(){A(this,1),this.$destroy=_}$on(t,n){let r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!De(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var T=[];function F(e,t=_){let n,r=[];function s(o){if(w(e,o)&&(e=o,n)){let i=!T.length;for(let c=0;c<r.length;c+=1){let u=r[c];u[1](),T.push(u,e)}if(i){for(let c=0;c<T.length;c+=2)T[c][0](T[c+1]);T.length=0}}}function l(o){s(o(e))}function a(o,i=_){let c=[o,i];return r.push(c),r.length===1&&(n=t(s)||_),o(e),()=>{let u=r.indexOf(c);u!==-1&&r.splice(u,1),r.length===0&&(n(),n=null)}}return{set:s,update:l,subscribe:a}}function oe(e,t=!1){return e=e.slice(e.startsWith("/#")?2:0,e.endsWith("/*")?-2:void 0),e.startsWith("/")||(e="/"+e),e==="/"&&(e=""),t&&!e.endsWith("/")&&(e+="/"),e}function Ve(e,t){e=oe(e,!0),t=oe(t,!0);let n=[],r={},s=!0,l=e.split("/").map(o=>o.startsWith(":")?(n.push(o.slice(1)),"([^\\/]+)"):o).join("\\/"),a=t.match(new RegExp(`^${l}$`));return a||(s=!1,a=t.match(new RegExp(`^${l}`))),a?(n.forEach((o,i)=>r[o]=a[i+1]),{exact:s,params:r,part:a[0].slice(0,-1)}):null}function ye(e,t,n){if(n==="")return e;if(n[0]==="/")return n;let r=a=>a.split("/").filter(o=>o!==""),s=r(e),l=t?r(t):[];return"/"+l.map((a,o)=>s[o]).join("/")+"/"+n}function ke(e,t,n,r){let s=[t,"data-"+t].reduce((l,a)=>{let o=e.getAttribute(a);return n&&e.removeAttribute(a),o===null?l:o},!1);return!r&&s===""?!0:s||r||!1}function Ze(e){let t=e.split("&").map(n=>n.split("=")).reduce((n,r)=>{let s=r[0];if(!s)return n;let l=r.length>1?r[r.length-1]:!0;return typeof l=="string"&&l.includes(",")&&(l=l.split(",")),n[s]===void 0?n[s]=[l]:n[s].push(l),n},{});return Object.entries(t).reduce((n,r)=>(n[r[0]]=r[1].length>1?r[1]:r[1][0],n),{})}function Je(e){return Object.entries(e).map(([t,n])=>n?n===!0?t:`${t}=${Array.isArray(n)?n.join(","):n}`:null).filter(t=>t).join("&")}function Ce(e,t){return e?t+e:""}function $e(e){throw new Error("[Tinro] "+e)}var j={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(e,t,n,r){return e===this.HISTORY?t&&t():e===this.HASH?n&&n():r&&r()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},ae,je,Se,S=Qe();function Qe(){let e=j.getDefault(),t,n=a=>window.onhashchange=window.onpopstate=ae=null,r=a=>t&&t(le(e)),s=a=>{a&&(e=a),n(),e!==j.OFF&&j.run(e,o=>window.onpopstate=r,o=>window.onhashchange=r)&&r()},l=a=>{let o=Object.assign(le(e),a);return o.path+Ce(Je(o.query),"?")+Ce(o.hash,"#")};return{mode:s,get:a=>le(e),go(a,o){Ge(e,a,o),r()},start(a){t=a,s()},stop(){t=null,s(j.OFF)},set(a){this.go(l(a),!a.path)},methods(){return Xe(this)}}}function Ge(e,t,n){!n&&(je=Se);let r=s=>history[`${n?"replace":"push"}State`]({},"",s);j.run(e,s=>r(t),s=>r(`#${t}`),s=>ae=t)}function le(e){let t=window.location,n=j.run(e,s=>t.pathname+t.search+t.hash,s=>String(t.hash.slice(1)||"/"),s=>ae||"/"),r=n.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return Se=n,{url:n,from:je,path:r[1]||"",query:Ze(r[2]||""),hash:r[3]||""}}function Xe(e){let t=()=>e.get().query,n=a=>e.set({query:a}),r=a=>n(a(t())),s=()=>e.get().hash,l=a=>e.set({hash:a});return{hash:{get:s,set:l,clear:()=>l("")},query:{replace:n,clear:()=>n(""),get(a){return a?t()[a]:t()},set(a,o){r(i=>(i[a]=o,i))},delete(a){r(o=>(o[a]&&delete o[a],o))}}}}var I=et();function et(){let{subscribe:e}=F(S.get(),t=>{S.start(t);let n=tt(S.go);return()=>{S.stop(),n()}});return{subscribe:e,goto:S.go,params:nt,meta:rt,useHashNavigation:t=>S.mode(t?j.HASH:j.HISTORY),mode:{hash:()=>S.mode(j.HASH),history:()=>S.mode(j.HISTORY),memory:()=>S.mode(j.MEMORY)},location:S.methods()}}function tt(e){let t=n=>{let r=n.target.closest("a[href]"),s=r&&ke(r,"target",!1,"_self"),l=r&&ke(r,"tinro-ignore"),a=n.ctrlKey||n.metaKey||n.altKey||n.shiftKey;if(s=="_self"&&!l&&!a&&r){let o=r.getAttribute("href").replace(/^\/#/,"");/^\/\/|^[a-zA-Z]+:/.test(o)||(n.preventDefault(),e(o.startsWith("/")?o:r.href.replace(window.location.origin,"")))}};return addEventListener("click",t),()=>removeEventListener("click",t)}function nt(){return Z("tinro").meta.params}var G="tinro",st=He({pattern:"",matched:!0});function ot(e){let t=Z(G)||st;(t.exact||t.fallback)&&$e(`${e.fallback?"<Route fallback>":`<Route path="${e.path}">`}  can't be inside ${t.fallback?"<Route fallback>":`<Route path="${t.path||"/"}"> with exact path`}`);let n=e.fallback?"fallbacks":"childs",r=F({}),s=He({fallback:e.fallback,parent:t,update(l){s.exact=!l.path.endsWith("/*"),s.pattern=oe(`${s.parent.pattern||""}${l.path}`),s.redirect=l.redirect,s.firstmatch=l.firstmatch,s.breadcrumb=l.breadcrumb,s.match()},register:()=>(s.parent[n].add(s),()=>{s.parent[n].delete(s),s.router.un&&s.router.un()}),show:()=>{e.onShow(),!s.fallback&&s.parent.activeChilds.add(s)},hide:()=>{e.onHide(),!s.fallback&&s.parent.activeChilds.delete(s)},match:async()=>{s.matched=!1;let{path:l,url:a,from:o,query:i}=s.router.location,c=Ve(s.pattern,l);if(!s.fallback&&c&&s.redirect&&(!s.exact||s.exact&&c.exact)){let u=ye(l,s.parent.pattern,s.redirect);return I.goto(u,!0)}s.meta=c&&{from:o,url:a,query:i,match:c.part,pattern:s.pattern,breadcrumbs:s.parent.meta&&s.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:r.subscribe},s.breadcrumb&&s.meta&&s.meta.breadcrumbs.push({name:s.breadcrumb,path:c.part}),r.set(s.meta),c&&!s.fallback&&(!s.exact||s.exact&&c.exact)&&(!s.parent.firstmatch||!s.parent.matched)?(e.onMeta(s.meta),s.parent.matched=!0,s.show()):s.hide(),c&&s.showFallbacks()}});return me(G,s),R(()=>s.register()),s}function rt(){return he(G)?Z(G).meta:$e("meta() function must be run inside any `<Route>` child component only")}function He(e){let t={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,async showFallbacks(){if(!this.fallback&&(await ve(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let n=this;for(;n.fallbacks.size==0;)if(n=n.parent,!n)return;n&&n.fallbacks.forEach(r=>{if(r.redirect){let s=ye("/",r.parent.pattern,r.redirect);I.goto(s,!0)}else r.show()})}},start(){this.router.un||(this.router.un=I.subscribe(n=>{this.router.location=n,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(t,e),t.start(),t}var at=e=>({params:e&2,meta:e&4}),Me=e=>({params:e[1],meta:e[2]});function Ae(e){let t,n=e[9].default,r=fe(n,e,e[8],Me);return{c(){r&&r.c()},m(s,l){r&&r.m(s,l),t=!0},p(s,l){r&&r.p&&(!t||l&262)&&de(r,n,s,s[8],l,at,Me)},i(s){t||(g(r,s),t=!0)},o(s){b(r,s),t=!1},d(s){r&&r.d(s)}}}function lt(e){let t,n,r=e[0]&&Ae(e);return{c(){r&&r.c(),t=pe()},m(s,l){r&&r.m(s,l),x(s,t,l),n=!0},p(s,[l]){s[0]?r?(r.p(s,l),l&1&&g(r,1)):(r=Ae(s),r.c(),g(r,1),r.m(t.parentNode,t)):r&&(L(),b(r,1,1,()=>{r=null}),P())},i(s){n||(g(r),n=!0)},o(s){b(r),n=!1},d(s){r&&r.d(s),s&&m(t)}}}function it(e,t,n){let{$$slots:r={},$$scope:s}=t,{path:l="/*"}=t,{fallback:a=!1}=t,{redirect:o=!1}=t,{firstmatch:i=!1}=t,{breadcrumb:c=null}=t,u=!1,C={},y={},E=ot({fallback:a,onShow(){n(0,u=!0)},onHide(){n(0,u=!1)},onMeta(p){n(2,y=p),n(1,C=y.params)}});return e.$$set=p=>{"path"in p&&n(3,l=p.path),"fallback"in p&&n(4,a=p.fallback),"redirect"in p&&n(5,o=p.redirect),"firstmatch"in p&&n(6,i=p.firstmatch),"breadcrumb"in p&&n(7,c=p.breadcrumb),"$$scope"in p&&n(8,s=p.$$scope)},e.$$.update=()=>{e.$$.dirty&232&&E.update({path:l,redirect:o,firstmatch:i,breadcrumb:c})},[u,C,y,l,a,o,i,c,s,r]}var D=class extends k{constructor(t){super();$(this,t,it,lt,w,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}};var ct=F({activePage:"Dashboard",isConnected:!1}),z=ct;var Ee=e=>new URLSearchParams(window.location.search).get(e),W=e=>e.charAt(0).toUpperCase()+e.slice(1);function ut(e){let t,n,r,s,l,a,o,i,c,u,C,y,E,p;return{c(){t=h("header"),n=h("div"),n.innerHTML=`<img class="w-8" src="./logo.png" alt=""/> 
        <span class="text-xl tracking-widest">Solr-Vue</span>`,r=v(),s=h("div"),s.innerHTML=`<span class="relative inline-flex"><span class="inline-flex tracking-wider items-center px-3 py-1 font-medium text-green-800">http://127.0.0.1:8080/solr</span> 
            <span class="flex absolute h-3 w-3 -top-0.5 right-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> 
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></span>`,l=v(),a=h("div"),o=h("div"),i=h("a"),i.textContent="Dashboard",c=v(),u=h("a"),u.textContent="Collections",C=v(),y=h("span"),y.textContent="Logout",d(n,"class","flex-initial flex items-center space-x-3"),d(s,"class","flex items-center"),d(i,"href","./"),d(i,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),d(u,"href","./collections"),d(u,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),d(y,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),d(o,"class","flex space-x-4"),d(a,"class","flex items-center justify-center"),d(t,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(X,Pe){x(X,t,Pe),f(t,n),f(t,r),f(t,s),f(t,l),f(t,a),f(a,o),f(o,i),f(o,c),f(o,u),f(o,C),f(o,y),E||(p=B(y,"click",e[0]),E=!0)},p:_,i:_,o:_,d(X){X&&m(t),E=!1,p()}}}function ft(e){function t(r){let s=r.target.dataset.url;window.history.replaceState(null,null,`?p=${s}`),z.update(l=>(l.activePage=W(s),l))}function n(){window.history.replaceState(null,null,""),sessionStorage.clear(),z.update(r=>(r.activePage=W("Dashboard"),r.isConnected=!1,r))}return[n]}var qe=class extends k{constructor(t){super();$(this,t,ft,ut,w,{})}},Oe=qe;function ze(e){let t,n;return t=new Oe({}),{c(){q(t.$$.fragment)},m(r,s){M(t,r,s),n=!0},i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){A(t,r)}}}function dt(e){let t;return{c(){t=H("Root page")},m(n,r){x(n,t,r)},d(n){n&&m(t)}}}function pt(e){let t;return{c(){t=H("Page")},m(n,r){x(n,t,r)},d(n){n&&m(t)}}}function mt(e){let t;return{c(){t=H("No page found")},m(n,r){x(n,t,r)},d(n){n&&m(t)}}}function ht(e){let t,n,r,s,l,a;return t=new D({props:{path:"/",$$slots:{default:[dt]},$$scope:{ctx:e}}}),r=new D({props:{path:"/collections",$$slots:{default:[pt]},$$scope:{ctx:e}}}),l=new D({props:{fallback:!0,$$slots:{default:[mt]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment),n=v(),q(r.$$.fragment),s=v(),q(l.$$.fragment)},m(o,i){M(t,o,i),x(o,n,i),M(r,o,i),x(o,s,i),M(l,o,i),a=!0},p(o,i){let c={};i&2&&(c.$$scope={dirty:i,ctx:o}),t.$set(c);let u={};i&2&&(u.$$scope={dirty:i,ctx:o}),r.$set(u);let C={};i&2&&(C.$$scope={dirty:i,ctx:o}),l.$set(C)},i(o){a||(g(t.$$.fragment,o),g(r.$$.fragment,o),g(l.$$.fragment,o),a=!0)},o(o){b(t.$$.fragment,o),b(r.$$.fragment,o),b(l.$$.fragment,o),a=!1},d(o){A(t,o),o&&m(n),A(r,o),o&&m(s),A(l,o)}}}function gt(e){let t,n,r,s,l,a=e[0].isConnected&&ze(e);return s=new D({props:{$$slots:{default:[ht]},$$scope:{ctx:e}}}),{c(){t=h("section"),a&&a.c(),n=v(),r=h("section"),q(s.$$.fragment),d(r,"class","flex-1 flex flex-col p-3 overflow-hidden"),d(t,"class","flex flex-col w-full h-full")},m(o,i){x(o,t,i),a&&a.m(t,null),f(t,n),f(t,r),M(s,r,null),l=!0},p(o,[i]){o[0].isConnected?a?i&1&&g(a,1):(a=ze(o),a.c(),g(a,1),a.m(t,n)):a&&(L(),b(a,1,1,()=>{a=null}),P());let c={};i&2&&(c.$$scope={dirty:i,ctx:o}),s.$set(c)},i(o){l||(g(a),g(s.$$.fragment,o),l=!0)},o(o){b(a),b(s.$$.fragment,o),l=!1},d(o){o&&m(t),a&&a.d(),A(s)}}}function _t(e,t,n){let r;return ee(e,z,s=>n(0,r=s)),I.mode.hash(),R(async()=>{let s=JSON.parse(sessionStorage.getItem("sessionStarted"))||!1,l=Ee("p")||"dashboard";z.update(a=>(a.isConnected=s,a.activePage=W(l),a))}),[r]}var Re=class extends k{constructor(t){super();$(this,t,_t,gt,w,{})}},Le=Re;var xt=new Le({target:document.getElementById("app")}),bt=xt;export{bt as default};
