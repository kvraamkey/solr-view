(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return me}));var l,r=Object.defineProperty;function o(){}function s(e){return e()}function c(){return Object.create(null)}function a(e){e.forEach(s)}function i(e){return"function"==typeof e}function u(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function f(e,t,n){e.$$.on_destroy.push(function(e,...t){if(null==e)return o;let n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}(t,n))}function d(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function x(){return m(" ")}function $(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e){l=e}function y(e){(function(){if(!l)throw new Error("Function called outside component initialization");return l})().$$.on_mount.push(e)}var C=[],_=[],k=[],S=[],P=Promise.resolve(),E=!1;function j(e){k.push(e)}var L=!1,N=new Set;function A(){if(!L){L=!0;do{for(let e=0;e<C.length;e+=1){let t=C[e];v(t),O(t.$$)}for(v(null),C.length=0;_.length;)_.pop()();for(let e=0;e<k.length;e+=1){let t=k[e];N.has(t)||(N.add(t),t())}k.length=0}while(C.length);for(;S.length;)S.pop()();E=!1,L=!1,N.clear()}}function O(e){if(null!==e.fragment){e.update(),a(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}var T,M=new Set;function D(){T={r:0,c:[],p:T}}function H(){T.r||a(T.c),T=T.p}function F(e,t){e&&e.i&&(M.delete(e),e.i(t))}function I(e,t,n,l){if(e&&e.o){if(M.has(e))return;M.add(e),T.c.push((()=>{M.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function J(e){e&&e.c()}function B(e,t,n,l){let{fragment:r,on_mount:o,on_destroy:c,after_update:u}=e.$$;r&&r.m(t,n),l||j((()=>{let t=o.map(s).filter(i);c?c.push(...t):a(t),e.$$.on_mount=[]})),u.forEach(j)}function U(e,t){let n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function V(e,t){-1===e.$$.dirty[0]&&(C.push(e),E||(E=!0,P.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,r,s,i,u=[-1]){let f=l;v(e);let d=e.$$={fragment:null,ctx:null,props:i,update:o,not_equal:s,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:t.context||[]),callbacks:c(),dirty:u,skip_bound:!1},p=!1;if(d.ctx=n?n(e,t.props||{},((t,n,...l)=>{let r=l.length?l[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&V(e,t)),n})):[],d.update(),p=!0,a(d.before_update),d.fragment=!!r&&r(d.ctx),t.target){if(t.hydrate){let e=function(e){return Array.from(e.childNodes)}(t.target);d.fragment&&d.fragment.l(e),e.forEach(g)}else d.fragment&&d.fragment.c();t.intro&&F(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),A()}v(f)}var z=class{$destroy(){U(this,1),this.$destroy=o}$on(e,t){let n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}},R=[];var W=function(e,t=o){let n,l=[];function r(t){if(u(e,t)&&(e=t,n)){let t=!R.length;for(let t=0;t<l.length;t+=1){let n=l[t];n[1](),R.push(n,e)}if(t){for(let e=0;e<R.length;e+=2)R[e][0](R[e+1]);R.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(s,c=o){let a=[s,c];return l.push(a),1===l.length&&(n=t(r)||o),s(e),()=>{let e=l.indexOf(a);-1!==e&&l.splice(e,1),0===l.length&&(n(),n=null)}}}}({activePage:"Dashboard",isConnected:!1}),G={};function K(e){let t;return{c(){t=h("section"),t.textContent="dashboard"},m(e,n){p(e,t,n)},p:o,i:o,o:o,d(e){e&&g(t)}}}((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(G,{Collections:()=>se,Dashboard:()=>Q});var Q=class extends z{constructor(e){super(),q(this,e,null,K,u,{})}};function X(e){let t,n;return{c(){t=h("div"),n=m(e[1])},m(e,l){p(e,t,l),d(t,n)},p(e,t){2&t&&w(n,e[1])},d(e){e&&g(t)}}}function Y(e){let t,n,l,r,s,c=(e[0]||"Not Found")+"",a=e[1]&&X(e);return{c(){t=h("div"),n=h("div"),a&&a.c(),l=x(),r=h("div"),s=m(c),b(r,"class","pl-3"),b(n,"class","flex items-center divide-x divide-gray-400 space-x-3 select-none text-gray-500"),b(t,"class","flex h-full w-full items-center justify-center")},m(e,o){p(e,t,o),d(t,n),a&&a.m(n,null),d(n,l),d(n,r),d(r,s)},p(e,[t]){e[1]?a?a.p(e,t):(a=X(e),a.c(),a.m(n,l)):a&&(a.d(1),a=null),1&t&&c!==(c=(e[0]||"Not Found")+"")&&w(s,c)},i:o,o:o,d(e){e&&g(t),a&&a.d()}}}function Z(e,t,n){let{message:l}=t,{stausCode:r}=t;return e.$$set=e=>{"message"in e&&n(0,l=e.message),"stausCode"in e&&n(1,r=e.stausCode)},[l,r]}var ee=class extends z{constructor(e){super(),q(this,e,Z,Y,u,{message:0,stausCode:1})}};function te(e,t,n){let l=e.slice();return l[1]=t[n],l}function ne(e){let t,n;return t=new ee({props:{message:"there is no collection or alias"}}),{c(){J(t.$$.fragment)},m(e,l){B(t,e,l),n=!0},p:o,i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function le(e){let t,n,l,r,s=e[1]+"";return{c(){t=h("div"),n=h("p"),l=m(s),r=x(),b(n,"class","text-gray-600"),b(t,"class","flex cursor-pointer hover:bg-gray-100 space-y-1 py-2 px-3 border-b")},m(e,o){p(e,t,o),d(t,n),d(n,l),d(t,r)},p:o,d(e){e&&g(t)}}}function re(e){let t,n,l,r,o,s,c,a,i,u,f=e[0],m=[];for(let t=0;t<f.length;t+=1)m[t]=le(te(e,f,t));let $=null;return f.length||($=ne()),i=new ee({props:{message:"Please select a collection or alias"}}),{c(){t=x(),n=h("section"),l=h("div"),r=h("div"),r.innerHTML='<h2 class="text-xl ">Collections</h2> \n            <p class="text-sm text-gray-500">Personal details and application.</p>',o=x(),s=h("div");for(let e=0;e<m.length;e+=1)m[e].c();$&&$.c(),c=x(),a=h("div"),J(i.$$.fragment),document.title="Collections",b(r,"class","flex-initial p-4 border-b bg-gray-50"),b(s,"class","flex-1 flex flex-col overflow-auto"),b(l,"class","flex-initial flex flex-col bg-white w-1/6 rounded-lg shadow-xl overflow-hidden"),b(a,"class","flex-1 flex flex-col bg-white rounded-lg shadow-xl"),b(n,"class","flex w-full h-full space-x-3")},m(e,f){p(e,t,f),p(e,n,f),d(n,l),d(l,r),d(l,o),d(l,s);for(let e=0;e<m.length;e+=1)m[e].m(s,null);$&&$.m(s,null),d(n,c),d(n,a),B(i,a,null),u=!0},p(e,[t]){if(1&t){let n;for(f=e[0],n=0;n<f.length;n+=1){let l=te(e,f,n);m[n]?m[n].p(l,t):(m[n]=le(l),m[n].c(),m[n].m(s,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=f.length,!f.length&&$?$.p(e,t):f.length?$&&(D(),I($,1,1,(()=>{$=null})),H()):($=ne(),$.c(),F($,1),$.m(s,null))}},i(e){u||(F(i.$$.fragment,e),u=!0)},o(e){I(i.$$.fragment,e),u=!1},d(e){e&&g(t),e&&g(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(m,e),$&&$.d(),U(i)}}}function oe(e){return y((async()=>{})),[[]]}var se=class extends z{constructor(e){super(),q(this,e,oe,re,u,{})}},ce=e=>e.charAt(0).toUpperCase()+e.slice(1);function ae(e){let t,n,l,r,s,c,i,u,f,m,w,v,y,C,_,k;return{c(){t=h("header"),n=h("div"),n.innerHTML='<img class="w-8" src="./logo.png" alt=""/> \n        <span class="text-xl tracking-widest">Solr-Vue</span>',l=x(),r=h("div"),r.innerHTML='<span class="relative inline-flex"><span class="inline-flex tracking-wider items-center px-3 py-1 font-medium text-green-800">http://127.0.0.1:8080/solr</span> \n            <span class="flex absolute h-3 w-3 -top-0.5 right-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> \n                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></span>',s=x(),c=h("div"),i=h("div"),u=h("button"),u.textContent="Dashboard",m=x(),w=h("button"),w.textContent="Collections",y=x(),C=h("span"),C.textContent="Logout",b(n,"class","flex-initial flex items-center space-x-3"),b(r,"class","flex items-center"),b(u,"data-url",f="dashboard"),b(u,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),b(w,"data-url",v="collections"),b(w,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),b(C,"class","text-blue-600 hover:underline px-3 py-2 cursor-pointer"),b(i,"class","flex space-x-4"),b(c,"class","flex items-center justify-center"),b(t,"class","header flex-initial flex items-center justify-between w-full px-2 bg-white h-12 shadow")},m(o,a){p(o,t,a),d(t,n),d(t,l),d(t,r),d(t,s),d(t,c),d(c,i),d(i,u),d(i,m),d(i,w),d(i,y),d(i,C),_||(k=[$(u,"click",e[0]),$(w,"click",e[0]),$(C,"click",e[1])],_=!0)},p:o,i:o,o:o,d(e){e&&g(t),_=!1,a(k)}}}function ie(e){return[function(e){let t=e.target.dataset.url;window.history.replaceState(null,null,`?p=${t}`),W.update((e=>(e.activePage=ce(t),e)))},function(){window.history.replaceState(null,null,""),sessionStorage.clear(),W.update((e=>(e.activePage=ce("Dashboard"),e.isConnected=!1,e)))}]}var ue=class extends z{constructor(e){super(),q(this,e,ie,ae,u,{})}};function fe(e){let t,n;return t=new ue({}),{c(){J(t.$$.fragment)},m(e,l){B(t,e,l),n=!0},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function de(e){let t,n,l;var r=G[e[0].activePage];return r&&(t=new r({})),{c(){t&&J(t.$$.fragment),n=m("")},m(e,r){t&&B(t,e,r),p(e,n,r),l=!0},p(e,l){if(r!==(r=G[e[0].activePage])){if(t){D();let e=t;I(e.$$.fragment,1,0,(()=>{U(e,1)})),H()}r?(t=new r({}),J(t.$$.fragment),F(t.$$.fragment,1),B(t,n.parentNode,n)):t=null}},i(e){l||(t&&F(t.$$.fragment,e),l=!0)},o(e){t&&I(t.$$.fragment,e),l=!1},d(e){e&&g(n),t&&U(t,e)}}}function pe(e){let t,n,l,r,s,c,a,i,u,f,m,w,v,y,C,_,k;return{c(){t=h("section"),n=h("div"),l=h("img"),s=x(),c=h("h1"),c.textContent="Welcome to SolrVue",a=x(),i=h("p"),i.textContent="Apache Solr gui for the browser",u=x(),f=h("div"),m=h("input"),w=x(),v=h("div"),v.innerHTML='<input type="text" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="username"/> \n                            <input type="password" class="w-full h-10 border border-gray-400 rounded px-3" placeholder="password"/>',y=x(),C=h("button"),C.textContent="Connect",b(l,"class","w-8"),l.src!==(r="./logo.png")&&b(l,"src","./logo.png"),b(l,"alt",""),b(c,"class","text-2xl"),b(i,"class","text-xs"),b(m,"type","text"),b(m,"class","w-full h-10 border border-gray-400 rounded px-3"),b(m,"placeholder","url"),b(v,"class","flex space-x-3"),b(C,"class","text-center w-full bg-blue-900 rounded-md text-white py-3"),b(f,"class","space-y-5 mt-5"),b(f,"autocomplete","off"),b(n,"class","bg-white w-1/3 shadow-xl rounded p-5"),b(t,"class","flex items-center justify-center h-full")},m(r,o){p(r,t,o),d(t,n),d(n,l),d(n,s),d(n,c),d(n,a),d(n,i),d(n,u),d(n,f),d(f,m),d(f,w),d(f,v),d(f,y),d(f,C),_||(k=$(C,"click",e[1]),_=!0)},p:o,i:o,o:o,d(e){e&&g(t),_=!1,k()}}}function ge(e){let t,n,l,r,o,s,c=e[0].isConnected&&fe(),a=[pe,de],i=[];function u(e,t){return e[0].isConnected?1:0}return r=u(e),o=i[r]=a[r](e),{c(){t=h("section"),c&&c.c(),n=x(),l=h("section"),o.c(),b(l,"class","flex-1 flex flex-col p-3 overflow-hidden"),b(t,"class","flex flex-col w-full h-full")},m(e,o){p(e,t,o),c&&c.m(t,null),d(t,n),d(t,l),i[r].m(l,null),s=!0},p(e,[s]){e[0].isConnected?c?1&s&&F(c,1):(c=fe(),c.c(),F(c,1),c.m(t,n)):c&&(D(),I(c,1,1,(()=>{c=null})),H());let f=r;r=u(e),r===f?i[r].p(e,s):(D(),I(i[f],1,1,(()=>{i[f]=null})),H(),o=i[r],o?o.p(e,s):(o=i[r]=a[r](e),o.c()),F(o,1),o.m(l,null))},i(e){s||(F(c),F(o),s=!0)},o(e){I(c),I(o),s=!1},d(e){e&&g(t),c&&c.d(),i[r].d()}}}function he(e,t,n){let l;return f(e,W,(e=>n(0,l=e))),y((async()=>{let e=JSON.parse(sessionStorage.getItem("sessionStarted"))||!1,t=(e=>new URLSearchParams(window.location.search).get(e))("p")||"dashboard";W.update((n=>(n.isConnected=e,n.activePage=ce(t),n)))})),[l,function(){let e="collections";window.history.replaceState(null,null,`?p=${e}`),sessionStorage.setItem("sessionStarted",!0),W.update((t=>(t.activePage=ce(e),t.isConnected=!0,t)))}]}var me=new class extends z{constructor(e){super(),q(this,e,he,ge,u,{})}}({target:document.getElementById("app")})}],[[0,1]]]);