function _(){}function tt(t,e){for(let n in e)t[n]=e[n];return t}function he(t){return t()}function ge(){return Object.create(null)}function B(t){t.forEach(he)}function nt(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function rt(t){return Object.keys(t).length===0}function st(t,...e){if(t==null)return _;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function oe(t,e,n){t.$$.on_destroy.push(st(e,n))}function be(t,e,n,r){if(t){let s=_e(t,e,n,r);return t[0](s)}}function _e(t,e,n,r){return t[1]&&r?tt(n.ctx.slice(),t[1](r(e))):n.ctx}function ot(t,e,n,r){if(t[2]&&r){let s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){let l=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function xe(t,e,n,r,s,l,a){let o=ot(e,r,s,l);if(o){let c=_e(e,n,r,a);t.p(c,o)}}function p(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function ae(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function w(){return F(" ")}function we(){return F("")}function U(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}var Z;function G(t){Z=t}function X(){if(!Z)throw new Error("Function called outside component initialization");return Z}function L(t){X().$$.on_mount.push(t)}function $e(t,e){X().$$.context.set(t,e)}function ee(t){return X().$$.context.get(t)}function ke(t){return X().$$.context.has(t)}var V=[],ve=[],te=[],ye=[],je=Promise.resolve(),le=!1;function Se(){le||(le=!0,je.then(Ce))}function Ee(){return Se(),je}function ie(t){te.push(t)}var ce=!1,ue=new Set;function Ce(){if(!ce){ce=!0;do{for(let t=0;t<V.length;t+=1){let e=V[t];G(e),lt(e.$$)}for(G(null),V.length=0;ve.length;)ve.pop()();for(let t=0;t<te.length;t+=1){let e=te[t];ue.has(e)||(ue.add(e),e())}te.length=0}while(V.length);for(;ye.length;)ye.pop()();le=!1,ce=!1,ue.clear()}}function lt(t){if(t.fragment!==null){t.update(),B(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ie)}}var ne=new Set,P;function z(){P={r:0,c:[],p:P}}function N(){P.r||B(P.c),P=P.p}function x(t,e){t&&t.i&&(ne.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(ne.has(t))return;ne.add(t),P.c.push(()=>{ne.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function H(t){t&&t.c()}function S(t,e,n,r){let{fragment:s,on_mount:l,on_destroy:a,after_update:o}=t.$$;s&&s.m(e,n),r||ie(()=>{let c=l.map(he).filter(nt);a?a.push(...c):B(c),t.$$.on_mount=[]}),o.forEach(ie)}function E(t,e){let n=t.$$;n.fragment!==null&&(B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){t.$$.dirty[0]===-1&&(V.push(t),Se(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,r,s,l,a=[-1]){let o=Z;G(t);let c=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:s,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o?o.$$.context:e.context||[]),callbacks:ge(),dirty:a,skip_bound:!1},i=!1;if(c.ctx=n?n(t,e.props||{},(u,b,...h)=>{let g=h.length?h[0]:b;return c.ctx&&s(c.ctx[u],c.ctx[u]=g)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](g),i&&it(t,u)),b}):[],c.update(),i=!0,B(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){let u=at(e.target);c.fragment&&c.fragment.l(u),u.forEach($)}else c.fragment&&c.fragment.c();e.intro&&x(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),Ce()}G(o)}var A=class{$destroy(){E(this,1),this.$destroy=_}$on(e,n){let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var W=[];function D(t,e=_){let n,r=[];function s(o){if(j(t,o)&&(t=o,n)){let c=!W.length;for(let i=0;i<r.length;i+=1){let u=r[i];u[1](),W.push(u,t)}if(c){for(let i=0;i<W.length;i+=2)W[i][0](W[i+1]);W.length=0}}}function l(o){s(o(t))}function a(o,c=_){let i=[o,c];return r.push(i),r.length===1&&(n=e(s)||_),o(t),()=>{let u=r.indexOf(i);u!==-1&&r.splice(u,1),r.length===0&&(n(),n=null)}}return{set:s,update:l,subscribe:a}}var ct=D({activePage:"Dashboard",isConnected:!1}),T=ct;function fe(t,e=!1){return t=t.slice(t.startsWith("/#")?2:0,t.endsWith("/*")?-2:void 0),t.startsWith("/")||(t="/"+t),t==="/"&&(t=""),e&&!t.endsWith("/")&&(t+="/"),t}function ut(t,e){t=fe(t,!0),e=fe(e,!0);let n=[],r={},s=!0,l=t.split("/").map(o=>o.startsWith(":")?(n.push(o.slice(1)),"([^\\/]+)"):o).join("\\/"),a=e.match(new RegExp(`^${l}$`));return a||(s=!1,a=e.match(new RegExp(`^${l}`))),a?(n.forEach((o,c)=>r[o]=a[c+1]),{exact:s,params:r,part:a[0].slice(0,-1)}):null}function Ae(t,e,n){if(n==="")return t;if(n[0]==="/")return n;let r=a=>a.split("/").filter(o=>o!==""),s=r(t),l=e?r(e):[];return"/"+l.map((a,o)=>s[o]).join("/")+"/"+n}function He(t,e,n,r){let s=[e,"data-"+e].reduce((l,a)=>{let o=t.getAttribute(a);return n&&t.removeAttribute(a),o===null?l:o},!1);return!r&&s===""?!0:s||r||!1}function ft(t){let e=t.split("&").map(n=>n.split("=")).reduce((n,r)=>{let s=r[0];if(!s)return n;let l=r.length>1?r[r.length-1]:!0;return typeof l=="string"&&l.includes(",")&&(l=l.split(",")),n[s]===void 0?n[s]=[l]:n[s].push(l),n},{});return Object.entries(e).reduce((n,r)=>(n[r[0]]=r[1].length>1?r[1]:r[1][0],n),{})}function pt(t){return Object.entries(t).map(([e,n])=>n?n===!0?e:`${e}=${Array.isArray(n)?n.join(","):n}`:null).filter(e=>e).join("&")}function qe(t,e){return t?e+t:""}function Me(t){throw new Error("[Tinro] "+t)}var M={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(t,e,n,r){return t===this.HISTORY?e&&e():t===this.HASH?n&&n():r&&r()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},pe,Oe,Re,R=dt();function dt(){let t=M.getDefault(),e,n=a=>window.onhashchange=window.onpopstate=pe=null,r=a=>e&&e(de(t)),s=a=>{a&&(t=a),n(),t!==M.OFF&&M.run(t,o=>window.onpopstate=r,o=>window.onhashchange=r)&&r()},l=a=>{let o=Object.assign(de(t),a);return o.path+qe(pt(o.query),"?")+qe(o.hash,"#")};return{mode:s,get:a=>de(t),go(a,o){mt(t,a,o),r()},start(a){e=a,s()},stop(){e=null,s(M.OFF)},set(a){this.go(l(a),!a.path)},methods(){return ht(this)}}}function mt(t,e,n){!n&&(Oe=Re);let r=s=>history[`${n?"replace":"push"}State`]({},"",s);M.run(t,s=>r(e),s=>r(`#${e}`),s=>pe=e)}function de(t){let e=window.location,n=M.run(t,s=>e.pathname+e.search+e.hash,s=>String(e.hash.slice(1)||"/"),s=>pe||"/"),r=n.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return Re=n,{url:n,from:Oe,path:r[1]||"",query:ft(r[2]||""),hash:r[3]||""}}function ht(t){let e=()=>t.get().query,n=a=>t.set({query:a}),r=a=>n(a(e())),s=()=>t.get().hash,l=a=>t.set({hash:a});return{hash:{get:s,set:l,clear:()=>l("")},query:{replace:n,clear:()=>n(""),get(a){return a?e()[a]:e()},set(a,o){r(c=>(c[a]=o,c))},delete(a){r(o=>(o[a]&&delete o[a],o))}}}}var O=gt();function gt(){let{subscribe:t}=D(R.get(),e=>{R.start(e);let n=_t(R.go);return()=>{R.stop(),n()}});return{subscribe:t,goto:R.go,params:bt,meta:xt,useHashNavigation:e=>R.mode(e?M.HASH:M.HISTORY),mode:{hash:()=>R.mode(M.HASH),history:()=>R.mode(M.HISTORY),memory:()=>R.mode(M.MEMORY)},location:R.methods()}}function _t(t){let e=n=>{let r=n.target.closest("a[href]"),s=r&&He(r,"target",!1,"_self"),l=r&&He(r,"tinro-ignore"),a=n.ctrlKey||n.metaKey||n.altKey||n.shiftKey;if(s=="_self"&&!l&&!a&&r){let o=r.getAttribute("href").replace(/^\/#/,"");/^\/\/|^[a-zA-Z]+:/.test(o)||(n.preventDefault(),t(o.startsWith("/")?o:r.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function bt(){return ee("tinro").meta.params}var re="tinro",wt=Le({pattern:"",matched:!0});function $t(t){let e=ee(re)||wt;(e.exact||e.fallback)&&Me(`${t.fallback?"<Route fallback>":`<Route path="${t.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let n=t.fallback?"fallbacks":"childs",r=D({}),s=Le({fallback:t.fallback,parent:e,update(l){s.exact=!l.path.endsWith("/*"),s.pattern=fe(`${s.parent.pattern||""}${l.path}`),s.redirect=l.redirect,s.firstmatch=l.firstmatch,s.breadcrumb=l.breadcrumb,s.match()},register:()=>(s.parent[n].add(s),()=>{s.parent[n].delete(s),s.router.un&&s.router.un()}),show:()=>{t.onShow(),!s.fallback&&s.parent.activeChilds.add(s)},hide:()=>{t.onHide(),!s.fallback&&s.parent.activeChilds.delete(s)},match:async()=>{s.matched=!1;let{path:l,url:a,from:o,query:c}=s.router.location,i=ut(s.pattern,l);if(!s.fallback&&i&&s.redirect&&(!s.exact||s.exact&&i.exact)){let u=Ae(l,s.parent.pattern,s.redirect);return O.goto(u,!0)}s.meta=i&&{from:o,url:a,query:c,match:i.part,pattern:s.pattern,breadcrumbs:s.parent.meta&&s.parent.meta.breadcrumbs.slice()||[],params:i.params,subscribe:r.subscribe},s.breadcrumb&&s.meta&&s.meta.breadcrumbs.push({name:s.breadcrumb,path:i.part}),r.set(s.meta),i&&!s.fallback&&(!s.exact||s.exact&&i.exact)&&(!s.parent.firstmatch||!s.parent.matched)?(t.onMeta(s.meta),s.parent.matched=!0,s.show()):s.hide(),i&&s.showFallbacks()}});return $e(re,s),L(()=>s.register()),s}function xt(){return ke(re)?ee(re).meta:Me("meta() function must be run inside any `<Route>` child component only")}function Le(t){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,async showFallbacks(){if(!this.fallback&&(await Ee(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let n=this;for(;n.fallbacks.size==0;)if(n=n.parent,!n)return;n&&n.fallbacks.forEach(r=>{if(r.redirect){let s=Ae("/",r.parent.pattern,r.redirect);O.goto(s,!0)}else r.show()})}},start(){this.router.un||(this.router.un=O.subscribe(n=>{this.router.location=n,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,t),e.start(),e}var kt=t=>({params:t&2,meta:t&4}),Fe=t=>({params:t[1],meta:t[2]});function Te(t){let e,n=t[9].default,r=be(n,t,t[8],Fe);return{c(){r&&r.c()},m(s,l){r&&r.m(s,l),e=!0},p(s,l){r&&r.p&&(!e||l&262)&&xe(r,n,s,s[8],l,kt,Fe)},i(s){e||(x(r,s),e=!0)},o(s){k(r,s),e=!1},d(s){r&&r.d(s)}}}function vt(t){let e,n,r=t[0]&&Te(t);return{c(){r&&r.c(),e=we()},m(s,l){r&&r.m(s,l),v(s,e,l),n=!0},p(s,[l]){s[0]?r?(r.p(s,l),l&1&&x(r,1)):(r=Te(s),r.c(),x(r,1),r.m(e.parentNode,e)):r&&(z(),k(r,1,1,()=>{r=null}),N())},i(s){n||(x(r),n=!0)},o(s){k(r),n=!1},d(s){r&&r.d(s),s&&$(e)}}}function yt(t,e,n){let{$$slots:r={},$$scope:s}=e,{path:l="/*"}=e,{fallback:a=!1}=e,{redirect:o=!1}=e,{firstmatch:c=!1}=e,{breadcrumb:i=null}=e,u=!1,b={},h={},g=$t({fallback:a,onShow(){n(0,u=!0)},onHide(){n(0,u=!1)},onMeta(f){n(2,h=f),n(1,b=h.params)}});return t.$$set=f=>{"path"in f&&n(3,l=f.path),"fallback"in f&&n(4,a=f.fallback),"redirect"in f&&n(5,o=f.redirect),"firstmatch"in f&&n(6,c=f.firstmatch),"breadcrumb"in f&&n(7,i=f.breadcrumb),"$$scope"in f&&n(8,s=f.$$scope)},t.$$.update=()=>{t.$$.dirty&232&&g.update({path:l,redirect:o,firstmatch:c,breadcrumb:i})},[u,b,h,l,a,o,c,i,s,r]}var Y=class extends A{constructor(e){super();q(this,e,yt,vt,j,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}};var K=()=>{let t=JSON.parse(sessionStorage.getItem("sessionStarted"))||!1;t?T.update(e=>(e.isConnected=t,e)):O.goto("/login")};function jt(t){let e,n,r,s,l,a,o,c,i,u,b,h,g,f;return{c(){e=m("header"),n=m("div"),n.innerHTML=`<img class="w-8" src="./logo.png" alt=""/> 
        <span class="text-xl tracking-widest">Solr-Vue</span>`,r=w(),s=m("div"),s.innerHTML=`<span class="relative inline-flex"><span class="inline-flex tracking-wider items-center px-3 py-1 font-medium text-green-800">http://127.0.0.1:8080/solr</span> 
            <span class="flex absolute h-3 w-3 -top-0.5 right-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> 
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></span>`,l=w(),a=m("div"),o=m("div"),c=m("a"),c.textContent="Dashboard",i=w(),u=m("a"),u.textContent="Collections",b=w(),h=m("span"),h.textContent="Logout",d(n,"class","flex-initial flex items-center space-x-3"),d(s,"class","flex items-center"),d(c,"href","/"),d(c,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),d(u,"href","/collections"),d(u,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),d(h,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),d(o,"class","flex space-x-4"),d(a,"class","flex items-center justify-center"),d(e,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(C,y){v(C,e,y),p(e,n),p(e,r),p(e,s),p(e,l),p(e,a),p(a,o),p(o,c),p(o,i),p(o,u),p(o,b),p(o,h),g||(f=U(h,"click",t[0]),g=!0)},p:_,i:_,o:_,d(C){C&&$(e),g=!1,f()}}}function Ct(t){function e(){sessionStorage.clear(),T.update(n=>(n.isConnected=!1,n)),O.goto("/")}return[e]}var Pe=class extends A{constructor(e){super();q(this,e,Ct,jt,j,{})}},ze=Pe;function Ne(t){let e,n;return{c(){e=m("div"),n=F(t[1])},m(r,s){v(r,e,s),p(e,n)},p(r,s){s&2&&Q(n,r[1])},d(r){r&&$(e)}}}function St(t){let e,n,r,s,l=(t[0]||"Not Found")+"",a,o=t[1]&&Ne(t);return{c(){e=m("div"),n=m("div"),o&&o.c(),r=w(),s=m("div"),a=F(l),d(s,"class","pl-3"),d(n,"class","flex items-center divide-x divide-gray-400 space-x-3 select-none text-gray-500"),d(e,"class","flex h-full w-full items-center justify-center")},m(c,i){v(c,e,i),p(e,n),o&&o.m(n,null),p(n,r),p(n,s),p(s,a)},p(c,[i]){c[1]?o?o.p(c,i):(o=Ne(c),o.c(),o.m(n,r)):o&&(o.d(1),o=null),i&1&&l!==(l=(c[0]||"Not Found")+"")&&Q(a,l)},i:_,o:_,d(c){c&&$(e),o&&o.d()}}}function Et(t,e,n){let{message:r}=e,{stausCode:s=void 0}=e;return t.$$set=l=>{"message"in l&&n(0,r=l.message),"stausCode"in l&&n(1,s=l.stausCode)},[r,s]}var Ye=class extends A{constructor(e){super();q(this,e,Et,St,j,{message:0,stausCode:1})}},J=Ye;function At(t){let e,n,r,s,l,a,o,c,i,u,b,h,g,f,C,y,I,me;return{c(){e=m("section"),n=m("div"),r=m("img"),l=w(),a=m("h1"),a.textContent="Welcome to SolrVue",o=w(),c=m("p"),c.textContent="Apache Solr gui for the browser",i=w(),u=m("div"),b=m("input"),h=w(),g=m("div"),g.innerHTML=`<input type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="username"/> 
                <input type="password" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="password"/>`,f=w(),C=m("button"),C.textContent="Connect",d(r,"class","w-8"),r.src!==(s="./logo.png")&&d(r,"src",s),d(r,"alt",""),d(a,"class","text-2xl"),d(c,"class","text-xs"),d(b,"type","text"),d(b,"class","w-full h-10 border border-gray-400 rounded px-3"),d(b,"placeholder","url"),d(g,"class","flex space-x-3"),d(C,"class","text-center w-full bg-blue-900 rounded-md text-white py-3"),d(u,"class","space-y-5 mt-5"),d(u,"autocomplete","off"),d(n,"class","bg-white w-full shadow-xl rounded p-5"),d(e,"class","flex items-center justify-center h-full mx-auto"),d(e,"style",y={width:500})},m(se,et){v(se,e,et),p(e,n),p(n,r),p(n,l),p(n,a),p(n,o),p(n,c),p(n,i),p(n,u),p(u,b),p(u,h),p(u,g),p(u,f),p(u,C),I||(me=U(C,"click",t[0]),I=!0)},p:_,i:_,o:_,d(se){se&&$(e),I=!1,me()}}}function Ht(t){function e(){sessionStorage.setItem("sessionStarted",!0),T.update(n=>(n.isConnected=!0,n)),O.goto("/collections")}return[e]}var Ie=class extends A{constructor(e){super();q(this,e,Ht,At,j,{})}},We=Ie;function qt(t){let e;return{c(){e=m("section"),e.textContent="dashboard"},m(n,r){v(n,e,r)},p:_,i:_,o:_,d(n){n&&$(e)}}}function Mt(t){return L(async()=>{K()}),[]}var De=class extends A{constructor(e){super();q(this,e,Mt,qt,j,{})}},Ke=De;function Be(t,e,n){let r=t.slice();return r[1]=e[n],r}function Ue(t){let e,n;return e=new J({props:{message:"there is no collection or alias"}}),{c(){H(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p:_,i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function Ve(t){let e,n,r=t[1]+"",s,l;return{c(){e=m("div"),n=m("p"),s=F(r),l=w(),d(n,"class","text-gray-600"),d(e,"class","flex cursor-pointer hover:bg-gray-100 space-y-1 py-2 px-3 border-b")},m(a,o){v(a,e,o),p(e,n),p(n,s),p(e,l)},p:_,d(a){a&&$(e)}}}function Ot(t){let e,n,r,s,l,a,o,c,i,u,b=t[0],h=[];for(let f=0;f<b.length;f+=1)h[f]=Ve(Be(t,b,f));let g=null;return b.length||(g=Ue(t)),i=new J({props:{message:"Please select a collection or alias"}}),{c(){e=w(),n=m("section"),r=m("div"),s=m("div"),s.innerHTML=`<h2 class="text-xl ">Collections</h2> 
            <p class="text-sm text-gray-500">Personal details and application.</p>`,l=w(),a=m("div");for(let f=0;f<h.length;f+=1)h[f].c();g&&g.c(),o=w(),c=m("div"),H(i.$$.fragment),document.title="Collections",d(s,"class","flex-initial p-4 border-b bg-gray-50"),d(a,"class","flex-1 flex flex-col overflow-auto"),d(r,"class","flex-initial flex flex-col bg-white w-1/6 rounded-lg shadow-xl overflow-hidden"),d(c,"class","flex-1 flex flex-col bg-white rounded-lg shadow-xl"),d(n,"class","flex w-full h-full space-x-3")},m(f,C){v(f,e,C),v(f,n,C),p(n,r),p(r,s),p(r,l),p(r,a);for(let y=0;y<h.length;y+=1)h[y].m(a,null);g&&g.m(a,null),p(n,o),p(n,c),S(i,c,null),u=!0},p(f,[C]){if(C&1){b=f[0];let y;for(y=0;y<b.length;y+=1){let I=Be(f,b,y);h[y]?h[y].p(I,C):(h[y]=Ve(I),h[y].c(),h[y].m(a,null))}for(;y<h.length;y+=1)h[y].d(1);h.length=b.length,!b.length&&g?g.p(f,C):b.length?g&&(z(),k(g,1,1,()=>{g=null}),N()):(g=Ue(f),g.c(),x(g,1),g.m(a,null))}},i(f){u||(x(i.$$.fragment,f),u=!0)},o(f){k(i.$$.fragment,f),u=!1},d(f){f&&$(e),f&&$(n),ae(h,f),g&&g.d(),E(i)}}}function Rt(t){let e=[];return L(async()=>{K()}),[e]}var Je=class extends A{constructor(e){super();q(this,e,Rt,Ot,j,{})}},Qe=Je;function Ze(t){let e,n;return e=new ze({}),{c(){H(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function Lt(t){let e,n;return e=new We({}),{c(){H(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function Ft(t){let e,n;return e=new Ke({}),{c(){H(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function Tt(t){let e,n;return e=new Qe({}),{c(){H(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function Pt(t){let e,n;return e=new J({props:{message:"No page found"}}),{c(){H(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p:_,i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){E(e,r)}}}function zt(t){let e,n,r,s,l,a,o,c;return e=new Y({props:{path:"/login",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),r=new Y({props:{path:"/",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),l=new Y({props:{path:"/collections",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),o=new Y({props:{fallback:!0,$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment),n=w(),H(r.$$.fragment),s=w(),H(l.$$.fragment),a=w(),H(o.$$.fragment)},m(i,u){S(e,i,u),v(i,n,u),S(r,i,u),v(i,s,u),S(l,i,u),v(i,a,u),S(o,i,u),c=!0},p(i,u){let b={};u&2&&(b.$$scope={dirty:u,ctx:i}),e.$set(b);let h={};u&2&&(h.$$scope={dirty:u,ctx:i}),r.$set(h);let g={};u&2&&(g.$$scope={dirty:u,ctx:i}),l.$set(g);let f={};u&2&&(f.$$scope={dirty:u,ctx:i}),o.$set(f)},i(i){c||(x(e.$$.fragment,i),x(r.$$.fragment,i),x(l.$$.fragment,i),x(o.$$.fragment,i),c=!0)},o(i){k(e.$$.fragment,i),k(r.$$.fragment,i),k(l.$$.fragment,i),k(o.$$.fragment,i),c=!1},d(i){E(e,i),i&&$(n),E(r,i),i&&$(s),E(l,i),i&&$(a),E(o,i)}}}function Nt(t){let e,n,r,s,l,a=t[0].isConnected&&Ze(t);return s=new Y({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){e=m("section"),a&&a.c(),n=w(),r=m("section"),H(s.$$.fragment),d(r,"class","flex-1 flex flex-col p-3 overflow-hidden"),d(e,"class","flex flex-col w-full h-full")},m(o,c){v(o,e,c),a&&a.m(e,null),p(e,n),p(e,r),S(s,r,null),l=!0},p(o,[c]){o[0].isConnected?a?c&1&&x(a,1):(a=Ze(o),a.c(),x(a,1),a.m(e,n)):a&&(z(),k(a,1,1,()=>{a=null}),N());let i={};c&2&&(i.$$scope={dirty:c,ctx:o}),s.$set(i)},i(o){l||(x(a),x(s.$$.fragment,o),l=!0)},o(o){k(a),k(s.$$.fragment,o),l=!1},d(o){o&&$(e),a&&a.d(),E(s)}}}function Yt(t,e,n){let r;return oe(t,T,s=>n(0,r=s)),O.mode.hash(),L(async()=>{K()}),[r]}var Ge=class extends A{constructor(e){super();q(this,e,Yt,Nt,j,{})}},Xe=Ge;var It=new Xe({target:document.getElementById("app")}),Wt=It;export{Wt as default};
