(self.webpackChunkhome=self.webpackChunkhome||[]).push([[672],{289:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MemoryRouter:()=>l,Navigate:()=>s,Outlet:()=>f,Route:()=>h,Router:()=>p,Routes:()=>v,createRoutesFromArray:()=>E,createRoutesFromChildren:()=>R,generatePath:()=>I,matchPath:()=>$,matchRoutes:()=>P,resolvePath:()=>O,useBlocker:()=>W,useHref:()=>j,useInRouterContext:()=>d,useLocation:()=>m,useMatch:()=>F,useNavigate:()=>g,useOutlet:()=>C,useParams:()=>H,useResolvedPath:()=>x,useRoutes:()=>A});var r=n(271),a=(n(980),n(131));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(!e)throw Error(t)}var o=(0,a.createContext)({static:!1}),c=(0,a.createContext)({outlet:null,params:{},pathname:"",route:null});function l(e){var t=e.children,n=e.initialEntries;e=e.initialIndex;var u=(0,a.useRef)();null==u.current&&(u.current=(0,r.createMemoryHistory)({initialEntries:n,initialIndex:e}));var i=u.current;e=(n=(0,a.useReducer)((function(e,t){return t}),{action:i.action,location:i.location}))[0];var o=n[1];return(0,a.useLayoutEffect)((function(){return i.listen(o)}),[i]),(0,a.createElement)(p,{children:t,action:e.action,location:e.location,navigator:i})}function s(e){var t=e.to,n=e.replace,r=e.state;d()||i(!1);var u=g();return(0,a.useEffect)((function(){u(t,{replace:n,state:r})})),null}function f(){return C()}function h(e){return void 0===(e=e.element)?(0,a.createElement)(f,null):e}function p(e){var t=e.children;t=void 0===t?null:t;var n=e.action;n=void 0===n?r.Action.Pop:n;var u=e.location,c=e.navigator;return e=void 0!==(e=e.static)&&e,d()&&i(!1),(0,a.createElement)(o.Provider,{children:t,value:{action:n,location:u,navigator:c,static:e}})}function v(e){var t=e.basename;return t=void 0===t?"":t,y(e=R(e.children),t)}function d(){return null!=(0,a.useContext)(o).location}function m(){return d()||i(!1),(0,a.useContext)(o).location}function g(){d()||i(!1);var e=(0,a.useContext)(o).navigator,t=(0,a.useContext)(c).pathname,n=(0,a.useRef)(!1);return(0,a.useEffect)((function(){n.current=!0})),(0,a.useCallback)((function(r,a){void 0===a&&(a={}),n.current&&("number"==typeof r?e.go(r):(r=O(r,t),(a.replace?e.replace:e.push)(r,a.state)))}),[e,t])}function C(){return(0,a.useContext)(c).outlet}function x(e){var t=(0,a.useContext)(c).pathname;return(0,a.useMemo)((function(){return O(e,t)}),[e,t])}function y(e,t){void 0===t&&(t="");var n=(0,a.useContext)(c),r=n.route,i=n.pathname,o=n.params;t=t?S([i,t]):i;var l=m();return(r=(0,a.useMemo)((function(){return P(e,l,t)}),[l,e,t]))?r.reduceRight((function(e,n){var r=n.pathname,i=n.route;return(0,a.createElement)(c.Provider,{children:i.element,value:{outlet:e,params:u({},o,{},n.params),pathname:S([t,r]),route:i}})}),null):null}function E(e){return e.map((function(e){var t={path:e.path||"/",caseSensitive:!0===e.caseSensitive,element:e.element||(0,a.createElement)(f,null)};return e.children&&(t.children=E(e.children)),t}))}function R(e){var t=[];return a.Children.forEach(e,(function(e){if((0,a.isValidElement)(e))if(e.type===a.Fragment)t.push.apply(t,R(e.props.children));else{var n={path:e.props.path||"/",caseSensitive:!0===e.props.caseSensitive,element:e};e.props.children&&(e=R(e.props.children)).length&&(n.children=e),t.push(n)}})),t}function P(e,t,n){if(void 0===n&&(n=""),"string"==typeof t&&(t=(0,r.parsePath)(t)),t=t.pathname||"/",n){if(n=n.replace(/^\/*/,"/").replace(/\/+$/,""),!t.startsWith(n))return null;t=t===n?"/":t.slice(n.length)}!function(e){var t=e.reduce((function(e,t){return e[t=t[0]]=function(e){var t=(e=e.split("/")).length;return e.some(w)&&(t+=-2),e.filter((function(e){return!w(e)})).reduce((function(e,t){return e+(k.test(t)?2:""===t?1:10)}),t)}(t),e}),{});!function(e,t){var n=e.slice(0);e.sort((function(e,r){return t(e,r)||n.indexOf(e)-n.indexOf(r)}))}(e,(function(e,n){var r=e[2];e=t[e[0]];var a=n[2];return e!==(n=t[n[0]])?n-e:function(e,t){return e.length===t.length&&e.slice(0,-1).every((function(e,n){return e===t[n]}))?e[e.length-1]-t[t.length-1]:0}(r,a)}))}(e=b(e));var a=null;for(n=0;null==a&&n<e.length;++n)e:{a=t;for(var i=e[n][1],o="/",c={},l=[],s=0;s<i.length;++s){var f=i[s],h="/"===o?a:a.slice(o.length)||"/";if(!(h=$({path:f.path,caseSensitive:f.caseSensitive,end:s===i.length-1},h))){a=null;break e}o=S([o,h.pathname]),c=u({},c,{},h.params),l.push({route:f,pathname:o,params:c})}a=l}return a}function b(e,t,n,r,a){return void 0===t&&(t=[]),void 0===n&&(n=""),void 0===r&&(r=[]),void 0===a&&(a=[]),e.forEach((function(e,u){var i=S([n,e.path]),o=r.concat(e);u=a.concat(u),e.children&&b(e.children,t,i,o,u),t.push([i,o,u])})),t}var k=/^:\w+$/;function w(e){return"*"===e}function $(e,t){"string"==typeof e&&(e={path:e});var n=e;e=n.path;var r=n.caseSensitive;if(n=function(e,t,n){var r=[],a="^("+e.replace(/^\/*/,"/").replace(/\/?\*?$/,"").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(function(e,t){return r.push(t),"([^\\/]+)"}))+")";return e.endsWith("*")?(e.endsWith("/*")&&(a+="\\/?"),r.push("*"),a+="(.*)"):n&&(a+="\\/?"),n&&(a+="$"),[new RegExp(a,t?void 0:"i"),r]}(e,void 0!==r&&r,void 0===(n=n.end)||n),r=n[1],!(n=t.match(n[0])))return null;t=n[1];var a=n.slice(2);return r=r.reduce((function(e,t,n){n=a[n];try{var r=decodeURIComponent(n.replace(/\+/g," "))}catch(e){r=n}return e[t]=r,e}),{}),{path:e,pathname:t,params:r}}function O(e,t){void 0===t&&(t="/");var n="string"==typeof e?(0,r.parsePath)(e):e;e=n.pathname;var a=n.search;return a=void 0===a?"":a,n=void 0===(n=n.hash)?"":n,{pathname:e?M(e,e.startsWith("/")?"/":t):t,search:a,hash:n}}function S(e){return e.join("/").replace(/\/\/+/g,"/")}function M(e,t){var n=t.replace(/\/+$/,"").replace(/\/\/+/g,"/").split("/");return e.replace(/\/\/+/g,"/").split("/").forEach((function(e){".."===e?1<n.length&&n.pop():"."!==e&&n.push(e)})),1<n.length?S(n):"/"}function I(e,t){return void 0===t&&(t={}),e.replace(/:(\w+)/g,(function(e,n){return null==t[n]&&i(!1),t[n]})).replace(/\/*\*$/,(function(){return null==t["*"]?"":t["*"].replace(/^\/*/,"/")}))}function W(e,t){void 0===t&&(t=!0),d()||i(!1);var n=(0,a.useContext)(o).navigator;(0,a.useEffect)((function(){if(t){var r=n.block((function(t){var n=u({},t,{retry:function(){r(),t.retry()}});e(n)}));return r}}),[n,e,t])}function j(e){d()||i(!1);var t=(0,a.useContext)(o).navigator;return e=x(e),t.createHref(e)}function F(e){return d()||i(!1),$(e,m().pathname)}function H(){return(0,a.useContext)(c).params}function A(e,t){return void 0===t&&(t=""),d()||i(!1),y((0,a.useMemo)((function(){return E(e)}),[e]),t)}}}]);