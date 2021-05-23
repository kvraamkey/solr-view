var we=Object.defineProperty;var $e=(t,e)=>{for(var n in e)we(t,n,{get:e[n],enumerable:!0})};function d(){}function te(t){return t()}function ne(){return Object.create(null)}function S(t){t.forEach(te)}function ye(t){return typeof t=="function"}function w(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ve(t){return Object.keys(t).length===0}function ke(t,...e){if(t==null)return d;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function W(t,e,n){t.$$.on_destroy.push(ke(e,n))}function f(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function x(){return G(" ")}function K(){return G("")}function E(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ce(t){return Array.from(t.childNodes)}var B;function V(t){B=t}function je(){if(!B)throw new Error("Function called outside component initialization");return B}function Q(t){je().$$.on_mount.push(t)}var N=[],oe=[],z=[],se=[],Se=Promise.resolve(),X=!1;function Pe(){X||(X=!0,Se.then(re))}function Y(t){z.push(t)}var Z=!1,ee=new Set;function re(){if(!Z){Z=!0;do{for(let t=0;t<N.length;t+=1){let e=N[t];V(e),qe(e.$$)}for(V(null),N.length=0;oe.length;)oe.pop()();for(let t=0;t<z.length;t+=1){let e=z[t];ee.has(e)||(ee.add(e),e())}z.length=0}while(N.length);for(;se.length;)se.pop()();X=!1,Z=!1,ee.clear()}}function qe(t){if(t.fragment!==null){t.update(),S(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}var F=new Set,q;function D(){q={r:0,c:[],p:q}}function T(){q.r||S(q.c),q=q.p}function y(t,e){t&&t.i&&(F.delete(t),t.i(e))}function k(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),q.c.push(()=>{F.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function H(t){t&&t.c()}function L(t,e,n,o){let{fragment:s,on_mount:a,on_destroy:i,after_update:r}=t.$$;s&&s.m(e,n),o||Y(()=>{let c=a.map(te).filter(ye);i?i.push(...c):S(c),t.$$.on_mount=[]}),r.forEach(Y)}function A(t,e){let n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(t,e){t.$$.dirty[0]===-1&&(N.push(t),Pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(t,e,n,o,s,a,i=[-1]){let r=B;V(t);let c=t.$$={fragment:null,ctx:null,props:a,update:d,not_equal:s,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:e.context||[]),callbacks:ne(),dirty:i,skip_bound:!1},l=!1;if(c.ctx=n?n(t,e.props||{},(p,_,...h)=>{let g=h.length?h[0]:_;return c.ctx&&s(c.ctx[p],c.ctx[p]=g)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](g),l&&Ee(t,p)),_}):[],c.update(),l=!0,S(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){let p=Ce(e.target);c.fragment&&c.fragment.l(p),p.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&y(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),re()}V(r)}var v=class{$destroy(){A(this,1),this.$destroy=d}$on(e,n){let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!ve(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var O=[];function ae(t,e=d){let n,o=[];function s(r){if(w(t,r)&&(t=r,n)){let c=!O.length;for(let l=0;l<o.length;l+=1){let p=o[l];p[1](),O.push(p,t)}if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function a(r){s(r(t))}function i(r,c=d){let l=[r,c];return o.push(l),o.length===1&&(n=e(s)||d),r(t),()=>{let p=o.indexOf(l);p!==-1&&o.splice(p,1),o.length===0&&(n(),n=null)}}return{set:s,update:a,subscribe:i}}var Le=ae({activePage:"Dashboard",isConnected:!1}),M=Le;var J={};$e(J,{Collections:()=>pe,Dashboard:()=>ce});function Ae(t){let e;return{c(){e=m("section"),e.textContent="dashboard"},m(n,o){$(n,e,o)},p:d,i:d,o:d,d(n){n&&b(e)}}}var ie=class extends v{constructor(e){super();C(this,e,null,Ae,w,{})}},le=ie;var ce=le;function Oe(t){let e;return{c(){e=m("section"),e.textContent="COLLECTIONS"},m(n,o){$(n,e,o)},p:d,i:d,o:d,d(n){n&&b(e)}}}var ue=class extends v{constructor(e){super();C(this,e,null,Oe,w,{})}},fe=ue;var pe=fe;var de=t=>new URLSearchParams(window.location.search).get(t),I=t=>t.charAt(0).toUpperCase()+t.slice(1);function Me(t){let e,n,o,s,a,i,r,c,l,p,_,h,g,j;return{c(){e=m("header"),n=m("div"),n.innerHTML=`<img class="w-8" src="./logo.png" alt=""/> 
        <span class="text-xl tracking-widest">Solr-Vue</span>`,o=x(),s=m("div"),a=m("div"),i=m("button"),i.textContent="Dashboard",c=x(),l=m("button"),l.textContent="Collections",_=x(),h=m("span"),h.textContent="Logout",u(n,"class","flex-initial flex items-center space-x-3"),u(i,"data-url",r="dashboard"),u(i,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),u(l,"data-url",p="collections"),u(l,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),u(h,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),u(a,"class","flex space-x-4"),u(s,"class","flex items-center justify-center"),u(e,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(P,U){$(P,e,U),f(e,n),f(e,o),f(e,s),f(s,a),f(a,i),f(a,c),f(a,l),f(a,_),f(a,h),g||(j=[E(i,"click",t[0]),E(l,"click",t[0])],g=!0)},p:d,i:d,o:d,d(P){P&&b(e),g=!1,S(j)}}}function Ne(t){function e(n){let o=n.target.dataset.url;window.history.replaceState(null,null,`?p=${o}`),M.update(s=>(s.activePage=I(o),s))}return[e]}var me=class extends v{constructor(e){super();C(this,e,Ne,Me,w,{})}},_e=me;function he(t){let e,n;return e=new _e({}),{c(){H(e.$$.fragment)},m(o,s){L(e,o,s),n=!0},i(o){n||(y(e.$$.fragment,o),n=!0)},o(o){k(e.$$.fragment,o),n=!1},d(o){A(e,o)}}}function De(t){let e,n,o;var s=J[t[0].activePage];function a(i){return{}}return s&&(e=new s(a(t))),{c(){e&&H(e.$$.fragment),n=K()},m(i,r){e&&L(e,i,r),$(i,n,r),o=!0},p(i,r){if(s!==(s=J[i[0].activePage])){if(e){D();let c=e;k(c.$$.fragment,1,0,()=>{A(c,1)}),T()}s?(e=new s(a(i)),H(e.$$.fragment),y(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}},i(i){o||(e&&y(e.$$.fragment,i),o=!0)},o(i){e&&k(e.$$.fragment,i),o=!1},d(i){i&&b(n),e&&A(e,i)}}}function Te(t){let e,n,o,s,a,i,r,c,l,p,_,h,g,j,P,U;return{c(){e=m("div"),n=m("img"),s=x(),a=m("h1"),a.textContent="Welcome to SolrVue",i=x(),r=m("p"),r.textContent="Apache Solr gui for the browser",c=x(),l=m("div"),p=m("input"),_=x(),h=m("div"),h.innerHTML=`<input type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="username"/> 
                        <input type="password" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="password"/>`,g=x(),j=m("button"),j.textContent="Connect",u(n,"class","w-8"),n.src!==(o="./logo.png")&&u(n,"src",o),u(n,"alt",""),u(a,"class","text-2xl"),u(r,"class","text-xs"),u(p,"type","text"),u(p,"class","w-full h-10 border border-gray-400 rounded px-3"),u(p,"placeholder","url"),u(h,"class","flex space-x-3"),u(j,"class","text-center w-full bg-blue-900 rounded-md text-white py-3"),u(l,"class","space-y-5 mt-5"),u(l,"autocomplete","off"),u(e,"class","bg-white w-1/3 shadow-xl rounded p-5")},m(R,xe){$(R,e,xe),f(e,n),f(e,s),f(e,a),f(e,i),f(e,r),f(e,c),f(e,l),f(l,p),f(l,_),f(l,h),f(l,g),f(l,j),P||(U=E(j,"click",t[1]),P=!0)},p:d,i:d,o:d,d(R){R&&b(e),P=!1,U()}}}function He(t){let e,n,o,s,a,i,r=t[0].isConnected&&he(t),c=[Te,De],l=[];function p(_,h){return _[0].isConnected?1:0}return s=p(t,-1),a=l[s]=c[s](t),{c(){e=m("section"),r&&r.c(),n=x(),o=m("section"),a.c(),u(o,"class","flex-1 p-3 flex items-center justify-center"),u(e,"class","flex flex-col w-full h-full bg-gray-100")},m(_,h){$(_,e,h),r&&r.m(e,null),f(e,n),f(e,o),l[s].m(o,null),i=!0},p(_,[h]){_[0].isConnected?r?h&1&&y(r,1):(r=he(_),r.c(),y(r,1),r.m(e,n)):r&&(D(),k(r,1,1,()=>{r=null}),T());let g=s;s=p(_,h),s===g?l[s].p(_,h):(D(),k(l[g],1,1,()=>{l[g]=null}),T(),a=l[s],a?a.p(_,h):(a=l[s]=c[s](_),a.c()),y(a,1),a.m(o,null))},i(_){i||(y(r),y(a),i=!0)},o(_){k(r),k(a),i=!1},d(_){_&&b(e),r&&r.d(),l[s].d()}}}function Ie(t,e,n){let o;W(t,M,a=>n(0,o=a)),Q(async()=>{let a=JSON.parse(sessionStorage.getItem("sessionStarted"))||!1,i=de("p")||"dashboard";M.update(r=>(r.isConnected=a,r.activePage=I(i),r))});function s(){let a="collections";window.history.replaceState(null,null,`?p=${a}`),sessionStorage.setItem("sessionStarted",!0),M.update(i=>(i.activePage=I(a),i.isConnected=!0,i))}return[o,s]}var ge=class extends v{constructor(e){super();C(this,e,Ie,He,w,{})}},be=ge;var Ue=new be({target:document.getElementById("app")}),Be=Ue;export{Be as default};