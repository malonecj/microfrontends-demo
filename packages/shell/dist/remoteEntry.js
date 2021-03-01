var shell;(()=>{"use strict";var e,r,t,n,a,o,i={2142:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof home)return e();t.l("http://localhost:3001/remoteEntry.js",(t=>{if("undefined"!=typeof home)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"home")})).then((()=>home))},4238:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof searchResults)return e();t.l("http://localhost:3002/remoteEntry.js",(t=>{if("undefined"!=typeof searchResults)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"searchResults")})).then((()=>searchResults))},8773:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof viewItemPage)return e();t.l("http://localhost:3003/remoteEntry.js",(t=>{if("undefined"!=typeof viewItemPage)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"viewItemPage")})).then((()=>viewItemPage))}},f={};function s(e){if(f[e])return f[e].exports;var r=f[e]={exports:{}};return i[e](r,r.exports,s),r.exports}s.m=i,s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var a=Object.create(null);s.r(a);var o={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>t[e]));return o.default=()=>t,s.d(a,o),a},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e,r),r)),[])),s.u=e=>e+"."+{65:"8c313610e4e6a9c58f7e",131:"6c5b8ccf3683ad90db81",189:"f7c73f71d5f32eed3763",268:"1e43d8fb5f92b8a42c75",271:"2fbb1e297c528a3267b7",289:"36669ede7f70a833de81",316:"85cd552ff73fb7daf7d5",494:"9fcf2e37e79d111fcc48",502:"29fa7f48e0fd70ff3596",672:"39e9c8028b25a04df15f",707:"95a45cfabfad12620c13",711:"bd68a67009d4f6103b27",784:"dcffe7292f543e509581",818:"202e0803b4d49b398a68",833:"92ec0cecb20fabddd390",870:"82a6c86b5139f147ec20",913:"7823b5e6c9b83524b95c",918:"1d6bfa6d80ae1fb5b41a"}[e]+".js",s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="shell:",s.l=(e,r,a,o)=>{if(t[e])t[e].push(r);else{var i,f;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+a){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+a),i.src=e),t[e]=[r];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(h);var a=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),f&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a={502:[7502],707:[6707],870:[6870]},o={6707:["default","./SearchResultsService",4238],6870:["default","./HomepageService",2142],7502:["default","./ViewItemPage",8773]},s.f.remotes=(e,r)=>{s.o(a,e)&&a[e].forEach((e=>{var t=s.R;t||(t=[]);var n=o[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),i[e]=()=>{throw r},n.p=0},f=(e,t,o,i,f,s)=>{try{var l=e(t,o);if(!l||!l.then)return f(l,i,s);var u=l.then((e=>f(e,i)),a);if(!s)return u;r.push(n.p=u)}catch(e){a(e)}},l=(e,r,a)=>f(r.get,n[1],t,0,u,a),u=r=>{n.p=1,i[e]=e=>{e.exports=r()}};f(s,n[2],0,0,((e,r,t)=>e?f(s.I,n[0],0,e,l,t):a()),1)}}))},(()=>{s.S={};var e={},r={};s.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];s.o(s.S,t)||(s.S[t]={});var o=s.S[t],i="shell",f=(e,r,t,n)=>{var a=o[e]=o[e]||{},f=a[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(a[r]={get:t,from:i,eager:!!n})},l=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=s(e);if(!a)return;var o=e=>e&&e.init&&e.init(s.S[t],n);if(a.then)return u.push(a.then(o,r));var i=o(a);if(i&&i.then)return u.push(i.catch(r))}catch(e){r(e)}},u=[];switch(t){case"default":f("./src/Service","0",(()=>Promise.all([s.e(131),s.e(711)]).then((()=>()=>s(9711))))),f("history","5.0.0",(()=>s.e(913).then((()=>()=>s(2913))))),f("react-dom","16.14.0",(()=>Promise.all([s.e(316),s.e(131)]).then((()=>()=>s(8316))))),f("react-router-dom","6.0.0-beta.0",(()=>Promise.all([s.e(131),s.e(271),s.e(818),s.e(833)]).then((()=>()=>s(2833))))),f("react-router","6.0.0-beta.0",(()=>Promise.all([s.e(131),s.e(271),s.e(672)]).then((()=>()=>s(289))))),f("react","16.14.0",(()=>s.e(784).then((()=>()=>s(2784))))),l(2142),l(4238),l(8773)}return u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),s.p="https://microfrontends-demo.vercel.app/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},t=e=>{if(1===e.length)return"*";if(0 in e){var r="",n=e[0];r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(f=e[o]))[0]?"-":(a>0?".":"")+(a=2,f);return r}var i=[];for(o=1;o<e.length;o++){var f=e[o];i.push(0===f?"not("+s()+")":1===f?"("+s()+" || "+s()+")":2===f?i.pop()+" "+i.pop():t(f))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var a=r[0],o=a<0;o&&(a=-a-1);for(var i=0,f=1,s=!0;;f++,i++){var l,u,d=f<r.length?(typeof r[f])[0]:"";if(i>=t.length||"o"==(u=(typeof(l=t[i]))[0]))return!s||("u"==d?f>a&&!o:""==d!=o);if("u"==u){if(!s||"u"!=d)return!1}else if(s)if(d==u)if(f<=a){if(l!=r[f])return!1}else{if(o?l>r[f]:l<r[f])return!1;l!=r[f]&&(s=!1)}else if("s"!=d&&"n"!=d){if(o||f<=a)return!1;s=!1,f--}else{if(f<=a||u<d!=o)return!1;s=!1}else"s"!=d&&"n"!=d&&(s=!1,f--)}}var c=[],h=c.pop.bind(c);for(i=1;i<r.length;i++){var p=r[i];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},a=(e,a,i,f)=>{var s=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,i);return n(f,s)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+t(n)+")")(i,s,f)),o(e[i][s])},o=e=>(e.loaded=1,e.get()),l=e=>function(r,t,n,a){var o=s.I(r);return o&&o.then?o.then(e.bind(e,r,s.S[r],t,n,a)):e(r,s.S[r],t,n,a)},u=l(((e,t,n,a)=>t&&s.o(t,n)?o(((e,t)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&n[t]})(t,n)):a())),d=l(((e,r,t,n,o)=>r&&s.o(r,t)?a(r,0,t,n):o())),c=l(((e,t,a,i,f)=>{var l=t&&s.o(t,a)&&((e,t,a)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(a,t)||e&&!r(e,t)?e:t),0))&&o[t]})(t,a,i);return l?o(l):f()})),h={},p={8131:()=>d("default","react",[1,16,13,0],(()=>s.e(784).then((()=>()=>s(2784))))),2271:()=>c("default","history",[1,5,0,0],(()=>s.e(913).then((()=>()=>s(2913))))),5818:()=>c("default","react-router",[7,6,0,0,,"beta",0],(()=>s.e(289).then((()=>()=>s(289))))),6065:()=>u("default","./src/Service",(()=>Promise.all([s.e(131),s.e(711)]).then((()=>()=>s(9711))))),9004:()=>d("default","react-dom",[1,16,13,0],(()=>s.e(316).then((()=>()=>s(8316))))),9671:()=>c("default","react-router-dom",[7,6,0,0,,"beta",0],(()=>Promise.all([s.e(271),s.e(818),s.e(189)]).then((()=>()=>s(2833)))))},v={65:[6065],131:[8131],268:[9004,9671],271:[2271],818:[5818]};s.f.consumes=(e,r)=>{s.o(v,e)&&v[e].forEach((e=>{if(s.o(h,e))return r.push(h[e]);var t=r=>{h[e]=0,i[e]=t=>{delete f[e],t.exports=r()}},n=r=>{delete h[e],i[e]=t=>{throw delete f[e],r}};try{var a=p[e]();a.then?r.push(h[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{var e={204:0};s.f.j=(r,t)=>{var n=s.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(131|268|271|502|65|707|818|870)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=s.p+s.u(r),i=new Error;s.l(o,(t=>{if(s.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[o,i,f]=t,l=0,u=[];l<o.length;l++)a=o[l],s.o(e,a)&&e[a]&&u.push(e[a][0]),e[a]=0;for(n in i)s.o(i,n)&&(s.m[n]=i[n]);for(f&&f(s),r&&r(t);u.length;)u.shift()()},t=self.webpackChunkshell=self.webpackChunkshell||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var l,u,d,c,h={};l=h,u={"./Shell":()=>Promise.all([s.e(494),s.e(131),s.e(65),s.e(268),s.e(918)]).then((()=>()=>s(1918))),"./Service":()=>s.e(65).then((()=>()=>s(6065)))},d=(e,r)=>(s.R=r,r=s.o(u,e)?u[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),s.R=void 0,r),c=(e,r)=>{if(s.S){var t=s.S.default,n="default";if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return s.S[n]=e,s.I(n,r)}},s.d(l,{get:()=>d,init:()=>c}),shell=h})();