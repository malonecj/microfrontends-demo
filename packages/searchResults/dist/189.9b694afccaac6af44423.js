(self.webpackChunksearchResults=self.webpackChunksearchResults||[]).push([[189,833],{8262:(e,t,r)=>{"use strict";var a=r(3586);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,o,u){if(u!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r,r}},3980:(e,t,r)=>{e.exports=r(8262)()},3586:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2833:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MemoryRouter:()=>a.MemoryRouter,Navigate:()=>a.Navigate,Outlet:()=>a.Outlet,Route:()=>a.Route,Router:()=>a.Router,Routes:()=>a.Routes,createRoutesFromArray:()=>a.createRoutesFromArray,createRoutesFromChildren:()=>a.createRoutesFromChildren,generatePath:()=>a.generatePath,matchPath:()=>a.matchPath,matchRoutes:()=>a.matchRoutes,resolvePath:()=>a.resolvePath,useBlocker:()=>a.useBlocker,useHref:()=>a.useHref,useInRouterContext:()=>a.useInRouterContext,useLocation:()=>a.useLocation,useMatch:()=>a.useMatch,useNavigate:()=>a.useNavigate,useOutlet:()=>a.useOutlet,useParams:()=>a.useParams,useResolvedPath:()=>a.useResolvedPath,useRoutes:()=>a.useRoutes,BrowserRouter:()=>i,HashRouter:()=>l,Link:()=>f,NavLink:()=>v,Prompt:()=>h,createSearchParams:()=>p,usePrompt:()=>y,useSearchParams:()=>m});var a=r(5818),n=r(2271),o=(r(3980),r(8131));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a={},n=Object.keys(e);for(r=0;r<n.length;r++){var o=n[r];0<=t.indexOf(o)||(a[o]=e[o])}return a}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}function i(e){var t=e.children;e=e.window;var r=(0,o.useRef)();null==r.current&&(r.current=(0,n.createBrowserHistory)({window:e}));var u=r.current;r=(e=(0,o.useReducer)((function(e,t){return t}),{action:u.action,location:u.location}))[0];var c=e[1];return(0,o.useLayoutEffect)((function(){return u.listen(c)}),[u]),(0,o.createElement)(a.Router,{children:t,action:r.action,location:r.location,navigator:u})}function l(e){var t=e.children;e=e.window;var r=(0,o.useRef)();null==r.current&&(r.current=(0,n.createHashHistory)({window:e}));var u=r.current;r=(e=(0,o.useReducer)((function(e,t){return t}),{action:u.action,location:u.location}))[0];var c=e[1];return(0,o.useLayoutEffect)((function(){return u.listen(c)}),[u]),(0,o.createElement)(a.Router,{children:t,action:r.action,location:r.location,navigator:u})}var f=(0,o.forwardRef)((function(e,t){var r=e.onClick,u=e.replace,s=void 0!==u&&u,i=e.state,l=e.target,f=e.to;e=c(e,["onClick","replace","state","target","to"]),u=(0,a.useHref)(f);var v=(0,a.useNavigate)(),h=(0,a.useLocation)(),y=(0,a.useResolvedPath)(f);return(0,o.createElement)("a",Object.assign({},e,{href:u,onClick:function(e){r&&r(e),e.defaultPrevented||0!==e.button||l&&"_self"!==l||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),e=!!s||(0,n.createPath)(h)===(0,n.createPath)(y),v(f,{replace:e,state:i}))},ref:t,target:l}))})),v=(0,o.forwardRef)((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,s=void 0===(r=e.activeClassName)?"active":r;r=e.activeStyle;var i=e.caseSensitive,l=void 0!==i&&i,v=void 0===(i=e.className)?"":i,h=void 0!==(i=e.end)&&i,y=e.style;i=e.to,e=c(e,"aria-current activeClassName activeStyle caseSensitive className end style to".split(" "));var p=(0,a.useLocation)(),m=(0,a.useResolvedPath)(i);return p=p.pathname,m=m.pathname,l||(p=p.toLowerCase(),m=m.toLowerCase()),n=(l=h?p===m:p.startsWith(m))?n:void 0,s=[v,l?s:null].filter(Boolean).join(" "),r=u({},y,{},l?r:null),(0,o.createElement)(f,Object.assign({},e,{"aria-current":n,className:s,ref:t,style:r,to:i}))}));function h(e){return y(e.message,e.when),null}function y(e,t){void 0===t&&(t=!0);var r=(0,o.useCallback)((function(t){window.confirm(e)&&t.retry()}),[e]);(0,a.useBlocker)(r,t)}function p(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((function(t,r){var a=e[r];return t.concat(Array.isArray(a)?a.map((function(e){return[r,e]})):[[r,a]])}),[]))}function m(e){var t=(0,o.useRef)(p(e)),r=(0,a.useLocation)();e=(0,o.useMemo)((function(){function e(){var e=a.value;n.has(e)||t.current.getAll(e).forEach((function(t){n.append(e,t)}))}for(var a,n=p(r.search),o=function(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}(t.current.keys());!(a=o()).done;)e();return n}),[r.search]);var n=(0,a.useNavigate)();return[e,(0,o.useCallback)((function(e,t){n("?"+p(e),t)}),[n])]}}}]);