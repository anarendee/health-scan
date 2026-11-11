var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+A(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+A(s,l);c+=j(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+A(s,l++),c+=j(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ee(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M={current:null},ne={transition:null},re={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:ne,ReactCurrentOwner:C};function ie(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ee,forEach:function(e,t,n){ee(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ee(e,function(){t++}),t},toArray:function(e){return ee(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,e.act=ie,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ne.transition;ne.transition={};try{e()}finally{ne.transition=t}},e.unstable_act=ie,e.useCallback=function(e,t){return M.current.useCallback(e,t)},e.useContext=function(e){return M.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return M.current.useDeferredValue(e)},e.useEffect=function(e,t){return M.current.useEffect(e,t)},e.useId=function(){return M.current.useId()},e.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return M.current.useMemo(e,t)},e.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},e.useRef=function(e){return M.current.useRef(e)},e.useState=function(e){return M.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return M.current.useTransition()},e.version=`18.3.1`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,ee(x);else{var t=n(l);t!==null&&te(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!D());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&te(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function D(){return!(e.unstable_now()-E<T)}function O(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}var k;if(typeof v==`function`)k=function(){v(O)};else if(typeof MessageChannel<`u`){var A=new MessageChannel,j=A.port2;A.port1.onmessage=O,k=function(){j.postMessage(null)}}else k=function(){g(O,0)};function ee(e){C=e,S||(S=!0,k())}function te(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ee(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,te(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee(x))),r},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=p();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e){return l.call(m,e)?!0:l.call(f,e)?!1:u.test(e)?m[e]=!0:(f[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),D=Symbol.for(`react.strict_mode`),O=Symbol.for(`react.profiler`),k=Symbol.for(`react.provider`),A=Symbol.for(`react.context`),j=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),M=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.offscreen`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Object.assign,se;function ce(e){if(se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||``}return`
`+se+e}var le=!1;function ue(e,t){if(!e||le)return``;le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?ce(e):``}function de(e){switch(e.tag){case 5:return ce(e.type);case 16:return ce(`Lazy`);case 13:return ce(`Suspense`);case 19:return ce(`SuspenseList`);case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return``}}function fe(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case A:return(e.displayName||`Context`)+`.Consumer`;case k:return(e._context.displayName||`Context`)+`.Provider`;case j:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case M:return t=e.displayName||null,t===null?fe(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return fe(t);case 8:return t===D?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function me(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ge(e){var t=he(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _e(e){e._valueTracker||=ge(e)}function ve(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=he(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function ye(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function be(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xe(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=me(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Se(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Ce(e,t){Se(e,t);var n=me(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Te(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Te(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function we(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Te(e,t,n){(t!==`number`||ye(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Ee=Array.isArray;function De(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+me(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return oe({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function ke(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Ee(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:me(n)}}function Ae(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function je(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Me(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ne(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Me(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Pe,Fe=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Pe||=document.createElement(`div`),Pe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Pe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ie(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Le).forEach(function(e){Re.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Le[t]=Le[e]})});function ze(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Le.hasOwnProperty(e)&&Le[e]?(``+t).trim():t+`px`}function Be(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=ze(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ve=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(e,t){if(t){if(Ve[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ue(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var We=null;function Ge(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ke=null,qe=null,Je=null;function Ye(e){if(e=Mi(e)){if(typeof Ke!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Pi(t),Ke(e.stateNode,e.type,t))}}function Xe(e){qe?Je?Je.push(e):Je=[e]:qe=e}function Ze(){if(qe){var e=qe,t=Je;if(Je=qe=null,Ye(e),t)for(e=0;e<t.length;e++)Ye(t[e])}}function N(e,t){return e(t)}function Qe(){}var $e=!1;function et(e,t,n){if($e)return e(t,n);$e=!0;try{return N(e,t,n)}finally{$e=!1,(qe!==null||Je!==null)&&(Qe(),Ze())}}function tt(e,t){var n=e.stateNode;if(n===null)return null;var i=Pi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var nt=!1;if(c)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){nt=!0}}),window.addEventListener(`test`,rt,rt),window.removeEventListener(`test`,rt,rt)}catch{nt=!1}function it(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var at=!1,ot=null,st=!1,ct=null,lt={onError:function(e){at=!0,ot=e}};function ut(e,t,n,r,i,a,o,s,c){at=!1,ot=null,it.apply(lt,arguments)}function dt(e,t,n,i,a,o,s,c,l){if(ut.apply(this,arguments),at){if(at){var u=ot;at=!1,ot=null}else throw Error(r(198));st||(st=!0,ct=u)}}function ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mt(e){if(ft(e)!==e)throw Error(r(188))}function ht(e){var t=e.alternate;if(!t){if(t=ft(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return mt(a),e;if(o===i)return mt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function gt(e){return e=ht(e),e===null?null:_t(e)}function _t(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_t(e);if(t!==null)return t;e=e.sibling}return null}var vt=n.unstable_scheduleCallback,yt=n.unstable_cancelCallback,bt=n.unstable_shouldYield,xt=n.unstable_requestPaint,St=n.unstable_now,Ct=n.unstable_getCurrentPriorityLevel,wt=n.unstable_ImmediatePriority,Tt=n.unstable_UserBlockingPriority,Et=n.unstable_NormalPriority,Dt=n.unstable_LowPriority,Ot=n.unstable_IdlePriority,kt=null,At=null;function jt(e){if(At&&typeof At.onCommitFiberRoot==`function`)try{At.onCommitFiberRoot(kt,e,void 0,(e.current.flags&128)==128)}catch{}}var P=Math.clz32?Math.clz32:Pt,Mt=Math.log,Nt=Math.LN2;function Pt(e){return e>>>=0,e===0?32:31-(Mt(e)/Nt|0)|0}var F=64,Ft=4194304;function It(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=It(a))):r=It(s)}else o=n&~i,o===0?a!==0&&(r=It(a)):r=It(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-P(t),i=1<<n,r|=e[n],t&=~i;return r}function Rt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-P(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Bt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Vt(){var e=F;return F<<=1,!(F&4194240)&&(F=64),e}function Ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ut(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-P(t),e[t]=n}function Wt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-P(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Gt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-P(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Kt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qt,Jt,Yt,Xt,Zt,L=!1,Qt=[],$t=null,en=null,tn=null,nn=new Map,rn=new Map,an=[],on=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function R(e,t){switch(e){case`focusin`:case`focusout`:$t=null;break;case`dragenter`:case`dragleave`:en=null;break;case`mouseover`:case`mouseout`:tn=null;break;case`pointerover`:case`pointerout`:nn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:rn.delete(t.pointerId)}}function sn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Mi(t),t!==null&&Jt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cn(e,t,n,r,i){switch(t){case`focusin`:return $t=sn($t,e,t,n,r,i),!0;case`dragenter`:return en=sn(en,e,t,n,r,i),!0;case`mouseover`:return tn=sn(tn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return nn.set(a,sn(nn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,rn.set(a,sn(rn.get(a)||null,e,t,n,r,i)),!0}return!1}function ln(e){var t=ji(e.target);if(t!==null){var n=ft(t);if(n!==null){if(t=n.tag,t===13){if(t=pt(n),t!==null){e.blockedOn=t,Zt(e.priority,function(){Yt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function z(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);We=r,n.target.dispatchEvent(r),We=null}else return t=Mi(n),t!==null&&Jt(t),e.blockedOn=n,!1;t.shift()}return!0}function un(e,t,n){z(e)&&n.delete(t)}function dn(){L=!1,$t!==null&&z($t)&&($t=null),en!==null&&z(en)&&(en=null),tn!==null&&z(tn)&&(tn=null),nn.forEach(un),rn.forEach(un)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,L||(L=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,dn)))}function pn(e){function t(t){return fn(t,e)}if(0<Qt.length){fn(Qt[0],e);for(var n=1;n<Qt.length;n++){var r=Qt[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&fn($t,e),en!==null&&fn(en,e),tn!==null&&fn(tn,e),nn.forEach(t),rn.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)ln(n),n.blockedOn===null&&an.shift()}var B=C.ReactCurrentBatchConfig,mn=!0;function hn(e,t,n,r){var i=I,a=B.transition;B.transition=null;try{I=1,_n(e,t,n,r)}finally{I=i,B.transition=a}}function gn(e,t,n,r){var i=I,a=B.transition;B.transition=null;try{I=4,_n(e,t,n,r)}finally{I=i,B.transition=a}}function _n(e,t,n,r){if(mn){var i=yn(e,t,n,r);if(i===null)ii(e,t,r,vn,n),R(e,r);else if(cn(i,e,t,n,r))r.stopPropagation();else if(R(e,r),t&4&&-1<on.indexOf(e)){for(;i!==null;){var a=Mi(i);if(a!==null&&qt(a),a=yn(e,t,n,r),a===null&&ii(e,t,r,vn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var vn=null;function yn(e,t,n,r){if(vn=null,e=Ge(r),e=ji(e),e!==null){if(t=ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return vn=e,null}function bn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Ct()){case wt:return 1;case Tt:return 4;case Et:case Dt:return 16;case Ot:return 536870912;default:return 16}default:return 16}}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=oe({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=oe({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(oe({},In,{dataTransfer:0})),zn=On(oe({},jn,{relatedTarget:0})),Bn=On(oe({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(oe({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(oe({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},V={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=On(oe({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?V[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=On(oe({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),H=On(oe({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Yn=On(oe({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=On(oe({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=[9,13,27,32],Qn=c&&`CompositionEvent`in window,U=null;c&&`documentMode`in document&&(U=document.documentMode);var $n=c&&`TextEvent`in window&&!U,W=c&&(!Qn||U&&8<U&&11>=U),G=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function K(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,G):null;case`textInput`:return e=t.data,e===G&&er?null:e;default:return null}}function ir(e,t){if(rr)return e===`compositionend`||!Qn&&tr(e,t)?(e=wn(),Cn=Sn=xn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return W&&t.locale!==`ko`?null:t.data;default:return null}}var ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ar[e.type]:t===`textarea`}function sr(e,t,n,r){Xe(r),t=oi(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var cr=null,lr=null;function ur(e){Qr(e,0)}function dr(e){if(ve(Ni(e)))return e}function fr(e,t){if(e===`change`)return t}var pr=!1;if(c){var mr;if(c){var hr=`oninput`in document;if(!hr){var gr=document.createElement(`div`);gr.setAttribute(`oninput`,`return;`),hr=typeof gr.oninput==`function`}mr=hr}else mr=!1;pr=mr&&(!document.documentMode||9<document.documentMode)}function _r(){cr&&(cr.detachEvent(`onpropertychange`,vr),lr=cr=null)}function vr(e){if(e.propertyName===`value`&&dr(lr)){var t=[];sr(t,lr,e,Ge(e)),et(ur,t)}}function yr(e,t,n){e===`focusin`?(_r(),cr=t,lr=n,cr.attachEvent(`onpropertychange`,vr)):e===`focusout`&&_r()}function br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return dr(lr)}function xr(e,t){if(e===`click`)return dr(t)}function Sr(e,t){if(e===`input`||e===`change`)return dr(t)}function Cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var wr=typeof Object.is==`function`?Object.is:Cr;function q(e,t){if(wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function J(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?J(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(){for(var e=window,t=ye();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ye(e.document)}return t}function Y(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Or(e){var t=Dr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&J(n.ownerDocument.documentElement,n)){if(r!==null&&Y(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Er(n,a);var o=Er(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kr=c&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==ye(r)||(r=Ar,`selectionStart`in r&&Y(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&q(Mr,r)||(Mr=r,r=oi(jr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};c&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionend`),Wr=new Map,Gr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function Kr(e,t){Wr.set(e,t),o(t,[e])}for(var qr=0;qr<Gr.length;qr++){var Jr=Gr[qr];Kr(Jr.toLowerCase(),`on`+(Jr[0].toUpperCase()+Jr.slice(1)))}Kr(Br,`onAnimationEnd`),Kr(Vr,`onAnimationIteration`),Kr(Hr,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(Ur,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Yr=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Xr=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(Yr));function Zr(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,dt(r,t,void 0,e),e.currentTarget=null}function Qr(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}}}if(st)throw e=ct,st=!1,ct=null,e}function $r(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+`__bubble`;n.has(r)||(ri(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),ri(n,e,r,t)}var ti=`_reactListening`+Math.random().toString(36).slice(2);function ni(e){if(!e[ti]){e[ti]=!0,i.forEach(function(t){t!==`selectionchange`&&(Xr.has(t)||ei(t,!1,e),ei(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,ei(`selectionchange`,!1,t))}}function ri(e,t,n,r){switch(bn(t)){case 1:var i=hn;break;case 4:i=gn;break;default:i=_n}n=i.bind(null,t,n,e),i=void 0,!nt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function ii(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ji(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}et(function(){var r=a,i=Ge(n),o=[];a:{var s=Wr.get(e);if(s!==void 0){var c=An,l=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:l=`focus`,c=zn;break;case`focusout`:l=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=H;break;case Br:case Vr:case Hr:c=Bn;break;case Ur:c=Yn;break;case`scroll`:c=Mn;break;case`wheel`:c=Xn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=tt(p,f),h!=null&&u.push(ai(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==We&&(l=n.relatedTarget||n.fromElement)&&(ji(l)||l[Oi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?ji(l):null,l!==null&&(d=ft(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Ln,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Jn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ni(c),m=l==null?s:Ni(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,ji(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=si(m))p++;for(m=0,h=f;h;h=si(h))m++;for(;0<p-m;)u=si(u),p--;for(;0<m-p;)f=si(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=si(u),f=si(f)}u=null}else u=null;c!==null&&ci(o,s,c,u,!1),l!==null&&d!==null&&ci(o,d,l,u,!0)}}a:{if(s=r?Ni(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=fr;else if(or(s)){if(pr)g=Sr;else{g=br;var _=yr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=xr);if(g&&=g(e,r)){sr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Te(s,`number`,s.value)}switch(_=r?Ni(r):window,e){case`focusin`:(or(_)||_.contentEditable===`true`)&&(Ar=_,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(o,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(o,n,i)}var v;if(Qn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else rr?tr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(W&&n.locale!==`ko`&&(rr||y!==`onCompositionStart`?y===`onCompositionEnd`&&rr&&(v=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,rr=!0)),_=oi(r,y),0<_.length&&(y=new Hn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=nr(n),v!==null&&(y.data=v)))),(v=$n?K(e,n):ir(e,n))&&(r=oi(r,`onBeforeInput`),0<r.length&&(i=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}Qr(o,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=tt(e,n),a!=null&&r.unshift(ai(e,a,i)),a=tt(e,t),a!=null&&r.push(ai(e,a,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=tt(n,a),c!=null&&o.unshift(ai(n,c,s))):i||(c=tt(n,a),c!=null&&o.push(ai(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function di(e){return(typeof e==`string`?e:``+e).replace(li,`
`).replace(ui,``)}function fi(e,t,n){if(t=di(t),di(e)!==t&&n)throw Error(r(425))}function pi(){}var mi=null,hi=null;function gi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout==`function`?setTimeout:void 0,vi=typeof clearTimeout==`function`?clearTimeout:void 0,yi=typeof Promise==`function`?Promise:void 0,bi=typeof queueMicrotask==`function`?queueMicrotask:yi===void 0?_i:function(e){return yi.resolve(null).then(e).catch(xi)};function xi(e){setTimeout(function(){throw e})}function Si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),pn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);pn(t)}function Ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Ei=`__reactFiber$`+Ti,Di=`__reactProps$`+Ti,Oi=`__reactContainer$`+Ti,ki=`__reactEvents$`+Ti,X=`__reactListeners$`+Ti,Ai=`__reactHandles$`+Ti;function ji(e){var t=e[Ei];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oi]||n[Ei]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wi(e);e!==null;){if(n=e[Ei])return n;e=wi(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[Ei]||e[Oi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Pi(e){return e[Di]||null}var Fi=[],Ii=-1;function Li(e){return{current:e}}function Ri(e){0>Ii||(e.current=Fi[Ii],Fi[Ii]=null,Ii--)}function zi(e,t){Ii++,Fi[Ii]=e.current,e.current=t}var Bi={},Vi=Li(Bi),Hi=Li(!1),Ui=Bi;function Wi(e,t){var n=e.type.contextTypes;if(!n)return Bi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Gi(e){return e=e.childContextTypes,e!=null}function Ki(){Ri(Hi),Ri(Vi)}function qi(e,t,n){if(Vi.current!==Bi)throw Error(r(168));zi(Vi,t),zi(Hi,n)}function Ji(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,pe(e)||`Unknown`,a));return oe({},n,i)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bi,Ui=Vi.current,zi(Vi,e),zi(Hi,Hi.current),!0}function Xi(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=Ji(e,t,Ui),i.__reactInternalMemoizedMergedChildContext=e,Ri(Hi),Ri(Vi),zi(Vi,e)):Ri(Hi),zi(Hi,n)}var Zi=null,Qi=!1,$i=!1;function ea(e){Zi===null?Zi=[e]:Zi.push(e)}function ta(e){Qi=!0,ea(e)}function na(){if(!$i&&Zi!==null){$i=!0;var e=0,t=I;try{var n=Zi;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zi=null,Qi=!1}catch(t){throw Zi!==null&&(Zi=Zi.slice(e+1)),vt(wt,na),t}finally{I=t,$i=!1}}return null}var ra=[],ia=0,aa=null,oa=0,sa=[],ca=0,la=null,ua=1,da=``;function fa(e,t){ra[ia++]=oa,ra[ia++]=aa,aa=e,oa=t}function pa(e,t,n){sa[ca++]=ua,sa[ca++]=da,sa[ca++]=la,la=e;var r=ua;e=da;var i=32-P(r)-1;r&=~(1<<i),n+=1;var a=32-P(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ua=1<<32-P(t)+i|n<<i|r,da=a+e}else ua=1<<a|n<<i|r,da=e}function ma(e){e.return!==null&&(fa(e,1),pa(e,1,0))}function ha(e){for(;e===aa;)aa=ra[--ia],ra[ia]=null,oa=ra[--ia],ra[ia]=null;for(;e===la;)la=sa[--ca],sa[ca]=null,da=sa[--ca],sa[ca]=null,ua=sa[--ca],sa[ca]=null}var ga=null,_a=null,va=!1,ya=null;function ba(e,t){var n=Jl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,ga=e,_a=Ci(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,ga=e,_a=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=la===null?null:{id:ua,overflow:da},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ga=e,_a=null,!0);default:return!1}}function Sa(e){return!!(e.mode&1)&&!(e.flags&128)}function Ca(e){if(va){var t=_a;if(t){var n=t;if(!xa(e,t)){if(Sa(e))throw Error(r(418));t=Ci(n.nextSibling);var i=ga;t&&xa(e,t)?ba(i,n):(e.flags=e.flags&-4097|2,va=!1,ga=e)}}else{if(Sa(e))throw Error(r(418));e.flags=e.flags&-4097|2,va=!1,ga=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ga=e}function Ta(e){if(e!==ga)return!1;if(!va)return wa(e),va=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!gi(e.type,e.memoizedProps)),t&&=_a){if(Sa(e))throw Ea(),Error(r(418));for(;t;)ba(e,t),t=Ci(t.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){_a=Ci(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}_a=null}}else _a=ga?Ci(e.stateNode.nextSibling):null;return!0}function Ea(){for(var e=_a;e;)e=Ci(e.nextSibling)}function Da(){_a=ga=null,va=!1}function Oa(e){ya===null?ya=[e]:ya.push(e)}var ka=C.ReactCurrentBatchConfig;function Aa(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function ja(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ma(e){var t=e._init;return t(e._payload)}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Zl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Ma(i)===t.type)?(r=a(t,n.props),r.ref=Aa(e,t,n),r.return=e,r):(r=Ql(n.type,n.key,n.props,null,e.mode,r),r.ref=Aa(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=nu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=$l(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=tu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Ql(t.type,t.key,t.props,null,e.mode,n),n.ref=Aa(e,null,t),n.return=e,n;case T:return t=nu(t,e.mode,n),t.return=e,t;case ne:var r=t._init;return f(e,r(t._payload),n)}if(Ee(t)||ae(t))return t=$l(t,e.mode,n,null),t.return=e,t;ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case ne:return i=n._init,p(e,t,i(n._payload),r)}if(Ee(n)||ae(n))return i===null?d(e,t,n,r,null):null;ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Ee(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);ja(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),va&&fa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return va&&fa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),va&&fa(r,h),l}function g(a,s,c,l){var u=ae(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),va&&fa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return va&&fa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),va&&fa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ne&&Ma(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Aa(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===E?(r=$l(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Ql(i.type,i.key,i.props,null,e.mode,o),o.ref=Aa(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=nu(i,e.mode,o),r.return=e,e=r}return s(e);case ne:return l=i._init,_(e,r,l(i._payload),o)}if(Ee(i))return h(e,r,i,o);if(ae(i))return g(e,r,i,o);ja(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=tu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Pa=Na(!0),Fa=Na(!1),Ia=Li(null),La=null,Ra=null,za=null;function Ba(){za=Ra=La=null}function Va(e){var t=Ia.current;Ri(Ia),e._currentValue=t}function Ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ua(e,t){La=e,za=Ra=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ns=!0),e.firstContext=null)}function Wa(e){var t=e._currentValue;if(za!==e){if(e={context:e,memoizedValue:t,next:null},Ra===null){if(La===null)throw Error(r(308));Ra=e,La.dependencies={lanes:0,firstContext:e}}else Ra=Ra.next=e}return t}var Ga=null;function Ka(e){Ga===null?Ga=[e]:Ga.push(e)}function qa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ka(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ja(e,r)}function Ja(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ya=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $a(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Hc&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ja(e,n)}return i=r.interleaved,i===null?(t.next=t,Ka(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ja(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gt(e,n)}}function to(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var i=e.updateQueue;Ya=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=oe({},d,f);break a;case 2:Ya=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Xc|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var io={},ao=Li(io),oo=Li(io),so=Li(io);function co(e){if(e===io)throw Error(r(174));return e}function lo(e,t){switch(zi(so,t),zi(oo,e),zi(ao,io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ne(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ne(t,e)}Ri(ao),zi(ao,t)}function uo(){Ri(ao),Ri(oo),Ri(so)}function fo(e){co(so.current);var t=co(ao.current),n=Ne(t,e.type);t!==n&&(zi(oo,e),zi(ao,n))}function po(e){oo.current===e&&(Ri(ao),Ri(oo))}var mo=Li(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=[];function _o(){for(var e=0;e<go.length;e++)go[e]._workInProgressVersionPrimary=null;go.length=0}var vo=C.ReactCurrentDispatcher,yo=C.ReactCurrentBatchConfig,bo=0,xo=null,So=null,Co=null,wo=!1,To=!1,Eo=0,Do=0;function Oo(){throw Error(r(321))}function ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Ao(e,t,n,i,a,o){if(bo=o,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?ps:ms,e=n(i,a),To){o=0;do{if(To=!1,Eo=0,25<=o)throw Error(r(301));o+=1,Co=So=null,t.updateQueue=null,vo.current=hs,e=n(i,a)}while(To)}if(vo.current=fs,t=So!==null&&So.next!==null,bo=0,Co=So=xo=null,wo=!1,t)throw Error(r(300));return e}function jo(){var e=Eo!==0;return Eo=0,e}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Co===null?xo.memoizedState=Co=e:Co=Co.next=e,Co}function No(){if(So===null){var e=xo.alternate;e=e===null?null:e.memoizedState}else e=So.next;var t=Co===null?xo.memoizedState:Co.next;if(t!==null)Co=t,So=e;else{if(e===null)throw Error(r(310));So=e,e={memoizedState:So.memoizedState,baseState:So.baseState,baseQueue:So.baseQueue,queue:So.queue,next:null},Co===null?xo.memoizedState=Co=e:Co=Co.next=e}return Co}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){var t=No(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=So,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((bo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,xo.lanes|=d,Xc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,wr(i,t.memoizedState)||(Ns=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,xo.lanes|=o,Xc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Io(e){var t=No(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);wr(o,t.memoizedState)||(Ns=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Lo(){}function Ro(e,t){var n=xo,i=No(),a=t(),o=!wr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ns=!0),i=i.queue,Xo(Vo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Co!==null&&Co.memoizedState.tag&1){if(n.flags|=2048,Go(9,Bo.bind(null,n,i,a,t),void 0,null),Uc===null)throw Error(r(349));bo&30||zo(n,t,a)}return a}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xo.updateQueue,t===null?(t={lastEffect:null,stores:null},xo.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch{return!0}}function Uo(e){var t=Ja(e,1);t!==null&&gl(t,e,1,-1)}function Wo(e){var t=Mo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t.queue=e,e=e.dispatch=cs.bind(null,xo,e),[t.memoizedState,e]}function Go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xo.updateQueue,t===null?(t={lastEffect:null,stores:null},xo.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ko(){return No().memoizedState}function qo(e,t,n,r){var i=Mo();xo.flags|=e,i.memoizedState=Go(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var i=No();r=r===void 0?null:r;var a=void 0;if(So!==null){var o=So.memoizedState;if(a=o.destroy,r!==null&&ko(r,o.deps)){i.memoizedState=Go(t,n,a,r);return}}xo.flags|=e,i.memoizedState=Go(1|t,n,a,r)}function Yo(e,t){return qo(8390656,8,e,t)}function Xo(e,t){return Jo(2048,8,e,t)}function Zo(e,t){return Jo(4,2,e,t)}function Qo(e,t){return Jo(4,4,e,t)}function $o(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function es(e,t,n){return n=n==null?null:n.concat([e]),Jo(4,4,$o.bind(null,t,e),n)}function ts(){}function ns(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function is(e,t,n){return bo&21?(wr(n,t)||(n=Vt(),xo.lanes|=n,Xc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ns=!0),e.memoizedState=n)}function as(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=yo.transition;yo.transition={};try{e(!1),t()}finally{I=n,yo.transition=r}}function os(){return No().memoizedState}function ss(e,t,n){var r=hl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ls(e))us(t,n);else if(n=qa(e,t,n,r),n!==null){var i=ml();gl(n,e,r,i),ds(n,t,r)}}function cs(e,t,n){var r=hl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ls(e))us(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o)){var c=t.interleaved;c===null?(i.next=i,Ka(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=qa(e,t,i,r),n!==null&&(i=ml(),gl(n,e,r,i),ds(n,t,r))}}function ls(e){var t=e.alternate;return e===xo||t!==null&&t===xo}function us(e,t){To=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ds(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gt(e,n)}}var fs={readContext:Wa,useCallback:Oo,useContext:Oo,useEffect:Oo,useImperativeHandle:Oo,useInsertionEffect:Oo,useLayoutEffect:Oo,useMemo:Oo,useReducer:Oo,useRef:Oo,useState:Oo,useDebugValue:Oo,useDeferredValue:Oo,useTransition:Oo,useMutableSource:Oo,useSyncExternalStore:Oo,useId:Oo,unstable_isNewReconciler:!1},ps={readContext:Wa,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:Wa,useEffect:Yo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),qo(4194308,4,$o.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=Mo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ss.bind(null,xo,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:Wo,useDebugValue:ts,useDeferredValue:function(e){return Mo().memoizedState=e},useTransition:function(){var e=Wo(!1),t=e[0];return e=as.bind(null,e[1]),Mo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=xo,a=Mo();if(va){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Uc===null)throw Error(r(349));bo&30||zo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Yo(Vo.bind(null,i,o,e),[e]),i.flags|=2048,Go(9,Bo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Mo(),t=Uc.identifierPrefix;if(va){var n=da,r=ua;n=(r&~(1<<32-P(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Eo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Do++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ms={readContext:Wa,useCallback:ns,useContext:Wa,useEffect:Xo,useImperativeHandle:es,useInsertionEffect:Zo,useLayoutEffect:Qo,useMemo:rs,useReducer:Fo,useRef:Ko,useState:function(){return Fo(Po)},useDebugValue:ts,useDeferredValue:function(e){return is(No(),So.memoizedState,e)},useTransition:function(){return[Fo(Po)[0],No().memoizedState]},useMutableSource:Lo,useSyncExternalStore:Ro,useId:os,unstable_isNewReconciler:!1},hs={readContext:Wa,useCallback:ns,useContext:Wa,useEffect:Xo,useImperativeHandle:es,useInsertionEffect:Zo,useLayoutEffect:Qo,useMemo:rs,useReducer:Io,useRef:Ko,useState:function(){return Io(Po)},useDebugValue:ts,useDeferredValue:function(e){var t=No();return So===null?t.memoizedState=e:is(t,So.memoizedState,e)},useTransition:function(){return[Io(Po)[0],No().memoizedState]},useMutableSource:Lo,useSyncExternalStore:Ro,useId:os,unstable_isNewReconciler:!1};function gs(e,t){if(e&&e.defaultProps){for(var n in t=oe({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vs={isMounted:function(e){return(e=e._reactInternals)?ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=Qa(r,i);a.payload=t,n!=null&&(a.callback=n),t=$a(e,a,i),t!==null&&(gl(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=Qa(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=$a(e,a,i),t!==null&&(gl(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ml(),r=hl(e),i=Qa(n,r);i.tag=2,t!=null&&(i.callback=t),t=$a(e,i,r),t!==null&&(gl(t,e,r,n),eo(t,e,r))}};function ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!q(n,r)||!q(i,a):!0}function bs(e,t,n){var r=!1,i=Bi,a=t.contextType;return typeof a==`object`&&a?a=Wa(a):(i=Gi(t)?Ui:Vi.current,r=t.contextTypes,a=(r=r!=null)?Wi(e,i):Bi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function Ss(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xa(e);var a=t.contextType;typeof a==`object`&&a?i.context=Wa(a):(a=Gi(t)?Ui:Vi.current,i.context=Wi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(_s(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&vs.enqueueReplaceState(i,i.state,null),no(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Cs(e,t){try{var n=``,r=t;do n+=de(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function ws(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Es=typeof WeakMap==`function`?WeakMap:Map;function Ds(e,t,n){n=Qa(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),Ts(e,t)},n}function Os(e,t,n){n=Qa(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ts(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ts(e,t),typeof r!=`function`&&(ol===null?ol=new Set([this]):ol.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function ks(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Es;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vl.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function js(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qa(-1,1),t.tag=2,$a(n,t,1))),n.lanes|=1),e)}var Ms=C.ReactCurrentOwner,Ns=!1;function Ps(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function Fs(e,t,n,r,i){n=n.render;var a=t.ref;return Ua(t,i),r=Ao(e,t,n,r,a,i),n=jo(),e!==null&&!Ns?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(va&&n&&ma(t),t.flags|=1,Ps(e,t,r,i),t.child)}function Is(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Yl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ls(e,t,a,r,i)):(e=Ql(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?q:n,n(o,r)&&e.ref===t.ref)return tc(e,t,i)}return t.flags|=1,e=Zl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(q(a,r)&&e.ref===t.ref){if(Ns=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ns=!0);else return t.lanes=e.lanes,tc(e,t,i)}}return Bs(e,t,n,r,i)}function Rs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zi(qc,Kc),Kc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zi(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,zi(qc,Kc),Kc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),zi(qc,Kc),Kc|=r;return Ps(e,t,i,n),t.child}function zs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,n,r,i){var a=Gi(n)?Ui:Vi.current;return a=Wi(t,a),Ua(t,i),n=Ao(e,t,n,r,a,i),r=jo(),e!==null&&!Ns?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(va&&r&&ma(t),t.flags|=1,Ps(e,t,n,i),t.child)}function Vs(e,t,n,r,i){if(Gi(n)){var a=!0;Yi(t)}else a=!1;if(Ua(t,i),t.stateNode===null)ec(e,t),bs(t,n,r),Ss(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Wa(l):(l=Gi(n)?Ui:Vi.current,l=Wi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&xs(t,o,r,l),Ya=!1;var f=t.memoizedState;o.state=f,no(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Hi.current||Ya?(typeof u==`function`&&(_s(t,n,u,r),c=t.memoizedState),(s=Ya||ys(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Za(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:gs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Wa(c):(c=Gi(n)?Ui:Vi.current,c=Wi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&xs(t,o,r,c),Ya=!1,f=t.memoizedState,o.state=f,no(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Hi.current||Ya?(typeof p==`function`&&(_s(t,n,p,r),m=t.memoizedState),(l=Ya||ys(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,a,i)}function Hs(e,t,n,r,i,a){zs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&Xi(t,n,!1),tc(e,t,a);r=t.stateNode,Ms.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Pa(t,e.child,null,a),t.child=Pa(t,null,s,a)):Ps(e,t,s,a),t.memoizedState=r.state,i&&Xi(t,n,!0),t.child}function Us(e){var t=e.stateNode;t.pendingContext?qi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qi(e,t.context,!1),lo(e,t.containerInfo)}function Ws(e,t,n,r,i){return Da(),Oa(i),t.flags|=256,Ps(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function qs(e,t,n){var r=t.pendingProps,i=mo.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),zi(mo,i&1),e===null)return Ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=eu(o,r,0,null),e=$l(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ks(n),t.memoizedState=Gs,e):Js(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Xs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=$l(a,o,n,null),a.flags|=2):a=Zl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ks(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Gs,r}return a=e.child,e=a.sibling,r=Zl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=eu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,r){return r!==null&&Oa(r),Pa(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=ws(Error(r(422))),Ys(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=eu({mode:`visible`,children:i.children},a,0,null),o=$l(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Pa(t,e.child,null,s),t.child.memoizedState=Ks(s),t.memoizedState=Gs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Ys(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=ws(o,i,void 0),Ys(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ns||c){if(i=Uc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ja(e,a),gl(i,e,a,-1))}return Al(),i=ws(Error(r(421))),Ys(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Ul.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,_a=Ci(a.nextSibling),ga=t,va=!0,ya=null,e!==null&&(sa[ca++]=ua,sa[ca++]=da,sa[ca++]=la,ua=e.id,da=e.overflow,la=t),t=Js(t,i.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ha(e.return,t,n)}function Qs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function $s(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ps(e,t,r.children,n),r=mo.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(zi(mo,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qs(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qs(t,!0,n,null,a);break;case`together`:Qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ec(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Zl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nc(e,t,n){switch(t.tag){case 3:Us(t),Da();break;case 5:fo(t);break;case 1:Gi(t.type)&&Yi(t);break;case 4:lo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;zi(Ia,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(zi(mo,mo.current&1),e=tc(e,t,n),e===null?null:e.sibling):qs(e,t,n):(zi(mo,mo.current&1),t.flags|=128,null);zi(mo,mo.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $s(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),zi(mo,mo.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n)}return tc(e,t,n)}var rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ic=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,co(ao.current);var o=null;switch(n){case`input`:i=be(e,i),r=be(e,r),o=[];break;case`select`:i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case`textarea`:i=Oe(e,i),r=Oe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=pi)}He(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&$r(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function oc(e,t){if(!va)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cc(e,t,n){var i=t.pendingProps;switch(ha(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sc(t),null;case 1:return Gi(t.type)&&Ki(),sc(t),null;case 3:return i=t.stateNode,uo(),Ri(Hi),Ri(Vi),_o(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ya!==null&&(bl(ya),ya=null))),sc(t),null;case 5:po(t);var o=co(so.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return sc(t),null}if(e=co(ao.current),Ta(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ei]=t,i[Di]=s,e=!!(t.mode&1),n){case`dialog`:$r(`cancel`,i),$r(`close`,i);break;case`iframe`:case`object`:case`embed`:$r(`load`,i);break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],i);break;case`source`:$r(`error`,i);break;case`img`:case`image`:case`link`:$r(`error`,i),$r(`load`,i);break;case`details`:$r(`toggle`,i);break;case`input`:xe(i,s),$r(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},$r(`invalid`,i);break;case`textarea`:ke(i,s),$r(`invalid`,i)}for(var c in He(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&$r(`scroll`,i)}switch(n){case`input`:_e(i),we(i,s,!0);break;case`textarea`:_e(i),je(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=pi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Me(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ei]=t,e[Di]=i,rc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ue(n,i),n){case`dialog`:$r(`cancel`,e),$r(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:$r(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],e);o=i;break;case`source`:$r(`error`,e),o=i;break;case`img`:case`image`:case`link`:$r(`error`,e),$r(`load`,e),o=i;break;case`details`:$r(`toggle`,e),o=i;break;case`input`:xe(e,i),o=be(e,i),$r(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=oe({},i,{value:void 0}),$r(`invalid`,e);break;case`textarea`:ke(e,i),o=Oe(e,i),$r(`invalid`,e);break;default:o=i}for(s in He(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Be(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Fe(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ie(e,u):typeof u==`number`&&Ie(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&$r(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:_e(e),we(e,i,!1);break;case`textarea`:_e(e),je(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+me(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&De(e,!!i.multiple,i.defaultValue,!0):De(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=pi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return sc(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=co(so.current),co(ao.current),Ta(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ei]=t,(s=i.nodeValue!==n)&&(e=ga,e!==null))switch(e.tag){case 3:fi(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&fi(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=t,t.stateNode=i}return sc(t),null;case 13:if(Ri(mo),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(va&&_a!==null&&t.mode&1&&!(t.flags&128))Ea(),Da(),t.flags|=98560,s=!1;else if(s=Ta(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ei]=t}else Da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;sc(t),s=!1}else ya!==null&&(bl(ya),ya=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||mo.current&1?Jc===0&&(Jc=3):Al())),t.updateQueue!==null&&(t.flags|=4),sc(t),null);case 4:return uo(),e===null&&ni(t.stateNode.containerInfo),sc(t),null;case 10:return Va(t.type._context),sc(t),null;case 17:return Gi(t.type)&&Ki(),sc(t),null;case 19:if(Ri(mo),s=t.memoizedState,s===null)return sc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)oc(s,!1);else{if(Jc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=ho(e),c!==null){for(t.flags|=128,oc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zi(mo,mo.current&1|2),t.child}e=e.sibling}s.tail!==null&&St()>nl&&(t.flags|=128,i=!0,oc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=ho(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!va)return sc(t),null}else 2*St()-s.renderingStartTime>nl&&n!==1073741824&&(t.flags|=128,i=!0,oc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(sc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=St(),t.sibling=null,n=mo.current,zi(mo,i?n&1|2:n&1),t);case 22:case 23:return El(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&1073741824&&(sc(t),t.subtreeFlags&6&&(t.flags|=8192)):sc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function lc(e,t){switch(ha(t),t.tag){case 1:return Gi(t.type)&&Ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return uo(),Ri(Hi),Ri(Vi),_o(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return po(t),null;case 13:if(Ri(mo),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ri(mo),null;case 4:return uo(),null;case 10:return Va(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var uc=!1,dc=!1,fc=typeof WeakSet==`function`?WeakSet:Set,Z=null;function pc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Bl(e,t,n)}else n.current=null}}function mc(e,t,n){try{n()}catch(n){Bl(e,t,n)}}var hc=!1;function gc(e,t){if(mi=mn,e=Dr(),Y(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},mn=!1,Z=t;Z!==null;)if(t=Z,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:gs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Bl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return h=hc,hc=!1,h}function _c(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&mc(t,n,a)}i=i.next}while(i!==r)}}function vc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function bc(e){var t=e.alternate;t!==null&&(e.alternate=null,bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ei],delete t[Di],delete t[ki],delete t[X],delete t[Ai])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}var Tc=null,Ec=!1;function Dc(e,t,n){for(n=n.child;n!==null;)Oc(e,t,n),n=n.sibling}function Oc(e,t,n){if(At&&typeof At.onCommitFiberUnmount==`function`)try{At.onCommitFiberUnmount(kt,n)}catch{}switch(n.tag){case 5:dc||pc(n,t);case 6:var r=Tc,i=Ec;Tc=null,Dc(e,t,n),Tc=r,Ec=i,Tc!==null&&(Ec?(e=Tc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tc.removeChild(n.stateNode));break;case 18:Tc!==null&&(Ec?(e=Tc,n=n.stateNode,e.nodeType===8?Si(e.parentNode,n):e.nodeType===1&&Si(e,n),pn(e)):Si(Tc,n.stateNode));break;case 4:r=Tc,i=Ec,Tc=n.stateNode.containerInfo,Ec=!0,Dc(e,t,n),Tc=r,Ec=i;break;case 0:case 11:case 14:case 15:if(!dc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&mc(n,t,o),i=i.next}while(i!==r)}Dc(e,t,n);break;case 1:if(!dc&&(pc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Bl(n,t,e)}Dc(e,t,n);break;case 21:Dc(e,t,n);break;case 22:n.mode&1?(dc=(r=dc)||n.memoizedState!==null,Dc(e,t,n),dc=r):Dc(e,t,n);break;default:Dc(e,t,n)}}function kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fc),t.forEach(function(t){var r=Wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Ac(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Tc=c.stateNode,Ec=!1;break a;case 3:Tc=c.stateNode.containerInfo,Ec=!0;break a;case 4:Tc=c.stateNode.containerInfo,Ec=!0;break a}c=c.return}if(Tc===null)throw Error(r(160));Oc(o,s,a),Tc=null,Ec=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Bl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jc(t,e),t=t.sibling}function jc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ac(t,e),Mc(e),i&4){try{_c(3,e,e.return),vc(3,e)}catch(t){Bl(e,e.return,t)}try{_c(5,e,e.return)}catch(t){Bl(e,e.return,t)}}break;case 1:Ac(t,e),Mc(e),i&512&&n!==null&&pc(n,n.return);break;case 5:if(Ac(t,e),Mc(e),i&512&&n!==null&&pc(n,n.return),e.flags&32){var a=e.stateNode;try{Ie(a,``)}catch(t){Bl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Se(a,o),Ue(c,s);var u=Ue(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Be(a,f):d===`dangerouslySetInnerHTML`?Fe(a,f):d===`children`?Ie(a,f):S(a,d,f,u)}switch(c){case`input`:Ce(a,o);break;case`textarea`:Ae(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?De(a,!!o.multiple,o.multiple?[]:``,!1):De(a,!!o.multiple,o.defaultValue,!0)):De(a,!!o.multiple,m,!1)}a[Di]=o}catch(t){Bl(e,e.return,t)}}break;case 6:if(Ac(t,e),Mc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Bl(e,e.return,t)}}break;case 3:if(Ac(t,e),Mc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pn(t.containerInfo)}catch(t){Bl(e,e.return,t)}break;case 4:Ac(t,e),Mc(e);break;case 13:Ac(t,e),Mc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(tl=St())),i&4&&kc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(dc=(u=dc)||d,Ac(t,e),dc=u):Ac(t,e),Mc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Z=e,d=e.child;d!==null;){for(f=Z=d;Z!==null;){switch(p=Z,m=p.child,p.tag){case 0:case 11:case 14:case 15:_c(4,p,p.return);break;case 1:pc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Bl(i,n,e)}}break;case 5:pc(p,p.return);break;case 22:if(p.memoizedState!==null){Ic(f);continue}}m===null?Ic(f):(m.return=p,Z=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=ze(`display`,s))}catch(t){Bl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Bl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ac(t,e),Mc(e),i&4&&kc(e);break;case 21:break;default:Ac(t,e),Mc(e)}}function Mc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(xc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ie(a,``),i.flags&=-33),wc(e,Sc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Cc(e,Sc(e),o);break;default:throw Error(r(161))}}catch(t){Bl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nc(e,t,n){Z=e,Pc(e,t,n)}function Pc(e,t,n){for(var r=!!(e.mode&1);Z!==null;){var i=Z,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||dc;s=uc;var l=dc;if(uc=o,(dc=c)&&!l)for(Z=i;Z!==null;)o=Z,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Lc(i):(c.return=o,Z=c);for(;a!==null;)Z=a,Pc(a,t,n),a=a.sibling;Z=i,uc=s,dc=l}Fc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Z=a):Fc(e,t,n)}}function Fc(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dc||vc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!dc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:gs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&ro(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ro(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&pn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}dc||t.flags&512&&yc(t)}catch(e){Bl(t,t.return,e)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Ic(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Lc(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vc(4,t)}catch(e){Bl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Bl(t,i,e)}}var a=t.return;try{yc(t)}catch(e){Bl(t,a,e)}break;case 5:var o=t.return;try{yc(t)}catch(e){Bl(t,o,e)}}}catch(e){Bl(t,t.return,e)}if(t===e){Z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Z=s;break}Z=t.return}}var Rc=Math.ceil,zc=C.ReactCurrentDispatcher,Bc=C.ReactCurrentOwner,Vc=C.ReactCurrentBatchConfig,Hc=0,Uc=null,Wc=null,Gc=0,Kc=0,qc=Li(0),Jc=0,Yc=null,Xc=0,Zc=0,Qc=0,$c=null,el=null,tl=0,nl=1/0,rl=null,il=!1,al=null,ol=null,sl=!1,cl=null,ll=0,ul=0,dl=null,fl=-1,pl=0;function ml(){return Hc&6?St():fl===-1?fl=St():fl}function hl(e){return e.mode&1?Hc&2&&Gc!==0?Gc&-Gc:ka.transition===null?(e=I,e===0&&(e=window.event,e=e===void 0?16:bn(e.type)),e):(pl===0&&(pl=Vt()),pl):1}function gl(e,t,n,i){if(50<ul)throw ul=0,dl=null,Error(r(185));Ut(e,n,i),Hc&2&&e===Uc||(e===Uc&&(!(Hc&2)&&(Zc|=n),Jc===4&&Sl(e,Gc)),_l(e,i),n===1&&Hc===0&&!(t.mode&1)&&(nl=St()+500,Qi&&na()))}function _l(e,t){var n=e.callbackNode;zt(e,t);var r=Lt(e,e===Uc?Gc:0);if(r===0)n!==null&&yt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yt(n),t===1)e.tag===0?ta(Cl.bind(null,e)):ea(Cl.bind(null,e)),bi(function(){!(Hc&6)&&na()}),n=null;else{switch(Kt(r)){case 1:n=wt;break;case 4:n=Tt;break;case 16:n=Et;break;case 536870912:n=Ot;break;default:n=Et}n=Kl(n,vl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vl(e,t){if(fl=-1,pl=0,Hc&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Lt(e,e===Uc?Gc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=jl(e,i);else{t=i;var a=Hc;Hc|=2;var o=kl();(Uc!==e||Gc!==t)&&(rl=null,nl=St()+500,Dl(e,t));do try{Nl();break}catch(t){Ol(e,t)}while(1);Ba(),zc.current=o,Hc=a,Wc===null?(Uc=null,Gc=0,t=Jc):t=0}if(t!==0){if(t===2&&(a=Bt(e),a!==0&&(i=a,t=yl(e,a))),t===1)throw n=Yc,Dl(e,0),Sl(e,i),_l(e,St()),n;if(t===6)Sl(e,i);else{if(a=e.current.alternate,!(i&30)&&!xl(a)&&(t=jl(e,i),t===2&&(o=Bt(e),o!==0&&(i=o,t=yl(e,o))),t===1))throw n=Yc,Dl(e,0),Sl(e,i),_l(e,St()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,el,rl);break;case 3:if(Sl(e,i),(i&130023424)===i&&(t=tl+500-St(),10<t)){if(Lt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){ml(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_i(Il.bind(null,e,el,rl),t);break}Il(e,el,rl);break;case 4:if(Sl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-P(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rc(i/1960))-i,10<i){e.timeoutHandle=_i(Il.bind(null,e,el,rl),i);break}Il(e,el,rl);break;case 5:Il(e,el,rl);break;default:throw Error(r(329))}}}return _l(e,St()),e.callbackNode===n?vl.bind(null,e):null}function yl(e,t){var n=$c;return e.current.memoizedState.isDehydrated&&(Dl(e,t).flags|=256),e=jl(e,t),e!==2&&(t=el,el=n,t!==null&&bl(t)),e}function bl(e){el===null?el=e:el.push.apply(el,e)}function xl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t){for(t&=~Qc,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-P(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if(Hc&6)throw Error(r(327));Rl();var t=Lt(e,0);if(!(t&1))return _l(e,St()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Bt(e);i!==0&&(t=i,n=yl(e,i))}if(n===1)throw n=Yc,Dl(e,0),Sl(e,t),_l(e,St()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,el,rl),_l(e,St()),null}function wl(e,t){var n=Hc;Hc|=1;try{return e(t)}finally{Hc=n,Hc===0&&(nl=St()+500,Qi&&na())}}function Tl(e){cl!==null&&cl.tag===0&&!(Hc&6)&&Rl();var t=Hc;Hc|=1;var n=Vc.transition,r=I;try{if(Vc.transition=null,I=1,e)return e()}finally{I=r,Vc.transition=n,Hc=t,!(Hc&6)&&na()}}function El(){Kc=qc.current,Ri(qc)}function Dl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vi(n)),Wc!==null)for(n=Wc.return;n!==null;){var r=n;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:uo(),Ri(Hi),Ri(Vi),_o();break;case 5:po(r);break;case 4:uo();break;case 13:Ri(mo);break;case 19:Ri(mo);break;case 10:Va(r.type._context);break;case 22:case 23:El()}n=n.return}if(Uc=e,Wc=e=Zl(e.current,null),Gc=Kc=t,Jc=0,Yc=null,Qc=Zc=Xc=0,el=$c=null,Ga!==null){for(t=0;t<Ga.length;t++)if(n=Ga[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ga=null}return e}function Ol(e,t){do{var n=Wc;try{if(Ba(),vo.current=fs,wo){for(var i=xo.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}wo=!1}if(bo=0,Co=So=xo=null,To=!1,Eo=0,Bc.current=null,n===null||n.return===null){Jc=1,Yc=t,Wc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Gc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=As(s);if(m!==null){m.flags&=-257,js(m,s,c,o,t),m.mode&1&&ks(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){ks(o,u,t),Al();break a}l=Error(r(426))}else if(va&&c.mode&1){var _=As(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),js(_,s,c,o,t),Oa(Cs(l,c));break a}}o=l=Cs(l,c),Jc!==4&&(Jc=2),$c===null?$c=[o]:$c.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ds(o,l,t);to(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ol===null||!ol.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Os(o,c,t);to(o,x);break a}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,Wc===n&&n!==null&&(Wc=n=n.return);continue}break}while(1)}function kl(){var e=zc.current;return zc.current=fs,e===null?fs:e}function Al(){(Jc===0||Jc===3||Jc===2)&&(Jc=4),Uc===null||!(Xc&268435455)&&!(Zc&268435455)||Sl(Uc,Gc)}function jl(e,t){var n=Hc;Hc|=2;var i=kl();(Uc!==e||Gc!==t)&&(rl=null,Dl(e,t));do try{Ml();break}catch(t){Ol(e,t)}while(1);if(Ba(),Hc=n,zc.current=i,Wc!==null)throw Error(r(261));return Uc=null,Gc=0,Jc}function Ml(){for(;Wc!==null;)Pl(Wc)}function Nl(){for(;Wc!==null&&!bt();)Pl(Wc)}function Pl(e){var t=Gl(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Fl(e):Wc=t,Bc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lc(n,t),n!==null){n.flags&=32767,Wc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Jc=6,Wc=null;return}}else if(n=cc(n,t,Kc),n!==null){Wc=n;return}if(t=t.sibling,t!==null){Wc=t;return}Wc=t=e}while(t!==null);Jc===0&&(Jc=5)}function Il(e,t,n){var r=I,i=Vc.transition;try{Vc.transition=null,I=1,Ll(e,t,n,r)}finally{Vc.transition=i,I=r}return null}function Ll(e,t,n,i){do Rl();while(cl!==null);if(Hc&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wt(e,o),e===Uc&&(Wc=Uc=null,Gc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Kl(Et,function(){return Rl(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Vc.transition,Vc.transition=null;var s=I;I=1;var c=Hc;Hc|=4,Bc.current=null,gc(e,n),jc(n,e),Or(hi),mn=!!mi,hi=mi=null,e.current=n,Nc(n,e,a),xt(),Hc=c,I=s,Vc.transition=o}else e.current=n;if(sl&&(sl=!1,cl=e,ll=a),o=e.pendingLanes,o===0&&(ol=null),jt(n.stateNode,i),_l(e,St()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(il)throw il=!1,e=al,al=null,e;return ll&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===dl?ul++:(ul=0,dl=e):ul=0,na(),null}function Rl(){if(cl!==null){var e=Kt(ll),t=Vc.transition,n=I;try{if(Vc.transition=null,I=16>e?16:e,cl===null)var i=!1;else{if(e=cl,cl=null,ll=0,Hc&6)throw Error(r(331));var a=Hc;for(Hc|=4,Z=e.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Z=u;Z!==null;){var d=Z;switch(d.tag){case 0:case 11:case 15:_c(8,d,o)}var f=d.child;if(f!==null)f.return=d,Z=f;else for(;Z!==null;){d=Z;var p=d.sibling,m=d.return;if(bc(d),d===u){Z=null;break}if(p!==null){p.return=m,Z=p;break}Z=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else b:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_c(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Z=v;break b}Z=o.return}}var y=e.current;for(Z=y;Z!==null;){s=Z;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Z=b;else b:for(s=y;Z!==null;){if(c=Z,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:vc(9,c)}}catch(e){Bl(c,c.return,e)}if(c===s){Z=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Z=x;break b}Z=c.return}}if(Hc=a,na(),At&&typeof At.onPostCommitFiberRoot==`function`)try{At.onPostCommitFiberRoot(kt,e)}catch{}i=!0}return i}finally{I=n,Vc.transition=t}}return!1}function zl(e,t,n){t=Cs(n,t),t=Ds(e,t,1),e=$a(e,t,1),t=ml(),e!==null&&(Ut(e,1,t),_l(e,t))}function Bl(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ol===null||!ol.has(r))){e=Cs(n,e),e=Os(t,e,1),t=$a(t,e,1),e=ml(),t!==null&&(Ut(t,1,e),_l(t,e));break}}t=t.return}}function Vl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ml(),e.pingedLanes|=e.suspendedLanes&n,Uc===e&&(Gc&n)===n&&(Jc===4||Jc===3&&(Gc&130023424)===Gc&&500>St()-tl?Dl(e,0):Qc|=n),_l(e,t)}function Hl(e,t){t===0&&(e.mode&1?(t=Ft,Ft<<=1,!(Ft&130023424)&&(Ft=4194304)):t=1);var n=ml();e=Ja(e,t),e!==null&&(Ut(e,t,n),_l(e,n))}function Ul(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hl(e,n)}function Wl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Hl(e,n)}var Gl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Hi.current)Ns=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ns=!1,nc(e,t,n);Ns=!!(e.flags&131072)}}else Ns=!1,va&&t.flags&1048576&&pa(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ec(e,t),e=t.pendingProps;var a=Wi(t,Vi.current);Ua(t,n),a=Ao(null,t,i,e,a,n);var o=jo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Gi(i)?(o=!0,Yi(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Xa(t),a.updater=vs,t.stateNode=a,a._reactInternals=t,Ss(t,i,e,n),t=Hs(null,t,i,!0,o,n)):(t.tag=0,va&&o&&ma(t),Ps(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ec(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Xl(i),e=gs(i,e),a){case 0:t=Bs(null,t,i,e,n);break a;case 1:t=Vs(null,t,i,e,n);break a;case 11:t=Fs(null,t,i,e,n);break a;case 14:t=Is(null,t,i,gs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),Bs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),Vs(e,t,i,a,n);case 3:a:{if(Us(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Za(e,t),no(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Cs(Error(r(423)),t),t=Ws(e,t,i,n,a);break a}if(i!==a){a=Cs(Error(r(424)),t),t=Ws(e,t,i,n,a);break a}for(_a=Ci(t.stateNode.containerInfo.firstChild),ga=t,va=!0,ya=null,n=Fa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Da(),i===a){t=tc(e,t,n);break a}Ps(e,t,i,n)}t=t.child}return t;case 5:return fo(t),e===null&&Ca(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,gi(i,a)?s=null:o!==null&&gi(i,o)&&(t.flags|=32),zs(e,t),Ps(e,t,s,n),t.child;case 6:return e===null&&Ca(t),null;case 13:return qs(e,t,n);case 4:return lo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Pa(t,null,i,n):Ps(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),Fs(e,t,i,a,n);case 7:return Ps(e,t,t.pendingProps,n),t.child;case 8:return Ps(e,t,t.pendingProps.children,n),t.child;case 12:return Ps(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,zi(Ia,i._currentValue),i._currentValue=s,o!==null){if(wr(o.value,s)){if(o.children===a.children&&!Hi.current){t=tc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Qa(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ha(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ha(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Ps(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ua(t,n),a=Wa(a),i=i(a),t.flags|=1,Ps(e,t,i,n),t.child;case 14:return i=t.type,a=gs(i,t.pendingProps),a=gs(i.type,a),Is(e,t,i,a,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:gs(i,a),ec(e,t),t.tag=1,Gi(i)?(e=!0,Yi(t)):e=!1,Ua(t,n),bs(t,i,a),Ss(t,i,a,n),Hs(null,t,i,!0,e,n);case 19:return $s(e,t,n);case 22:return Rs(e,t,n)}throw Error(r(156,t.tag))};function Kl(e,t){return vt(e,t)}function ql(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jl(e,t,n,r){return new ql(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xl(e){if(typeof e==`function`)return+!!Yl(e);if(e!=null){if(e=e.$$typeof,e===j)return 11;if(e===M)return 14}return 2}function Zl(e,t){var n=e.alternate;return n===null?(n=Jl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Yl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return $l(n.children,a,o,t);case D:s=8,a|=8;break;case O:return e=Jl(12,n,t,a|2),e.elementType=O,e.lanes=o,e;case ee:return e=Jl(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=Jl(19,n,t,a),e.elementType=te,e.lanes=o,e;case re:return eu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case k:s=10;break a;case A:s=9;break a;case j:s=11;break a;case M:s=14;break a;case ne:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Jl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function $l(e,t,n,r){return e=Jl(7,e,r,t),e.lanes=n,e}function eu(e,t,n,r){return e=Jl(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function tu(e,t,n){return e=Jl(6,e,null,t),e.lanes=n,e}function nu(e,t,n){return t=Jl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ru(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iu(e,t,n,r,i,a,o,s,c){return e=new ru(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Jl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(a),e}function au(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return Bi;e=e._reactInternals;a:{if(ft(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Gi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Gi(n))return Ji(e,n,t)}return t}function su(e,t,n,r,i,a,o,s,c){return e=iu(n,r,!0,e,i,a,o,s,c),e.context=ou(null),n=e.current,r=ml(),i=hl(n),a=Qa(r,i),a.callback=t??null,$a(n,a,i),e.current.lanes=i,Ut(e,i,r),_l(e,r),e}function cu(e,t,n,r){var i=t.current,a=ml(),o=hl(i);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=Qa(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$a(i,t,o),e!==null&&(gl(e,i,o,a),eo(e,i,o)),o}function lu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function fu(){return null}var pu=typeof reportError==`function`?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}hu.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));cu(e,t,null,null)},hu.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tl(function(){cu(null,e,null,null)}),t[Oi]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&ln(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function vu(){}function yu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=lu(o);a.call(e)}}var o=su(t,r,e,0,null,!1,!1,``,vu);return e._reactRootContainer=o,e[Oi]=o.current,ni(e.nodeType===8?e.parentNode:e),Tl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=lu(c);s.call(e)}}var c=iu(e,0,!1,null,null,!1,!1,``,vu);return e._reactRootContainer=c,e[Oi]=c.current,ni(e.nodeType===8?e.parentNode:e),Tl(function(){cu(t,c,n,r)}),c}function bu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=lu(o);s.call(e)}}cu(t,o,e,i)}else o=yu(n,t,e,i,r);return lu(o)}qt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=It(t.pendingLanes);n!==0&&(Gt(t,n|1),_l(t,St()),!(Hc&6)&&(nl=St()+500,na()))}break;case 13:Tl(function(){var t=Ja(e,1);t!==null&&gl(t,e,1,ml())}),du(e,1)}},Jt=function(e){if(e.tag===13){var t=Ja(e,134217728);t!==null&&gl(t,e,134217728,ml()),du(e,134217728)}},Yt=function(e){if(e.tag===13){var t=hl(e),n=Ja(e,t);n!==null&&gl(n,e,t,ml()),du(e,t)}},Xt=function(){return I},Zt=function(e,t){var n=I;try{return I=e,t()}finally{I=n}},Ke=function(e,t,n){switch(t){case`input`:if(Ce(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Pi(i);if(!a)throw Error(r(90));ve(i),Ce(i,a)}}}break;case`textarea`:Ae(e,n);break;case`select`:t=n.value,t!=null&&De(e,!!n.multiple,t,!1)}},N=wl,Qe=Tl;var xu={usingClientEntryPoint:!1,Events:[Mi,Ni,Pi,Xe,Ze,wl]},Su={findFiberByHostInstance:ji,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Cu={bundleType:Su.bundleType,version:Su.version,rendererPackageName:Su.rendererPackageName,rendererConfig:Su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gt(e),e===null?null:e.stateNode},findFiberByHostInstance:Su.findFiberByHostInstance||fu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{kt=wu.inject(Cu),At=wu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(r(200));return au(e,t,null,n)},e.createRoot=function(e,t){if(!gu(e))throw Error(r(299));var n=!1,i=``,a=pu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=iu(e,1,!1,null,null,n,!1,i,a),e[Oi]=t.current,ni(e.nodeType===8?e.parentNode:e),new mu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=gt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Tl(e)},e.hydrate=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=pu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=su(t,null,e,1,n??null,a,!1,o,s),e[Oi]=t.current,ni(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new hu(t)},e.render=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!_u(e))throw Error(r(40));return e._reactRootContainer?(Tl(function(){bu(null,null,e,!1,function(){e._reactRootContainer=null,e[Oi]=null})}),!0):!1},e.unstable_batchedUpdates=wl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!_u(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return bu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=h();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),_=c(d(),1),v=g(),y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyNames,S=Object.prototype.hasOwnProperty,C=(e=>typeof l<`u`?l:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof l<`u`?l:e)[t]}):e)(function(e){if(typeof l<`u`)return l.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),w=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},T=(e,t)=>{for(var n in t)y(e,n,{get:t[n],enumerable:!0})},E=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of x(t))!S.call(e,i)&&i!==n&&y(e,i,{get:()=>t[i],enumerable:!(r=b(t,i))||r.enumerable});return e},D=e=>E(y({},`__esModule`,{value:!0}),e),O,k,A,j,ee,te,M,ne=w(()=>{O=new Map,k=[],A=new WeakMap,j=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=O.get(e);if(r===void 0)O.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=k.indexOf(e);t!==-1&&k.splice(t,1);for(let t=0;t<k.length;t++)if(O.get(k[t]).priority<=n){k.splice(t,0,e);return}k.push(e)}}else throw TypeError(`not a valid backend`)},ee=async e=>{let t=O.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{if(!n){let n=t.backend,r=A.get(n);t.initPromise=r?r.then(async()=>n.init(e),async()=>n.init(e)):n.init(e),A.set(n,t.initPromise)}return await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},te=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?k:n,i,a=[],o=new Set;for(let e of r){let t=await ee(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]},M=async()=>{let e=[];for(let t of k){if(typeof O.get(t).backend.createLoraAdapterHandler!=`function`)continue;let n=await ee(t);if(typeof n!=`string`)return n;e.push({name:t,err:n})}let t=e.length===0?``:` ERR: ${e.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`;throw Error(`no available backend supports LoRA adapters.${t}`)}}),re=w(()=>{ne()}),ie,ae=w(()=>{ie=`1.31.1`}),oe,se,ce=w(()=>{ae(),oe=`warning`,se={wasm:{},webgl:{},webgpu:{},versions:{common:ie},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);oe=e}},get logLevel(){return oe}},Object.defineProperty(se,"logLevel",{enumerable:!0})}),le,ue=w(()=>{ce(),le=se}),de,fe,pe,me,he,ge,_e=w(()=>{ce(),de=(e,t)=>{(typeof se.trace>`u`?!se.wasm.trace:!se.trace)||console.timeStamp(`${e}::ORT::${t}`)},fe=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),de(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},pe=e=>{(typeof se.trace>`u`?!se.wasm.trace:!se.trace)||fe(`BEGIN`,e)},me=e=>{(typeof se.trace>`u`?!se.wasm.trace:!se.trace)||fe(`END`,e)},he=e=>{(typeof se.trace>`u`?!se.wasm.trace:!se.trace)||console.time(`ORT::${e}`)},ge=e=>{(typeof se.trace>`u`?!se.wasm.trace:!se.trace)||console.timeEnd(`ORT::${e}`)}}),ve,ye=w(()=>{ne(),_e(),ve=class e{constructor(e,t){this.backend=e,this.handler=t}static async create(t){if(pe(),typeof t!=`string`&&!(t instanceof Uint8Array))throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let n=await M(),r=await n.createLoraAdapterHandler(t);return me(),new e(n,r)}async release(){return this.handler.dispose()}}}),be,xe,Se=w(()=>{be=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}throw Error(`Can not access image data`)},xe=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),Ce,we,Te,Ee,De,Oe,ke=w(()=>{ze(),Ce=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new Re(`float32`,u,[1,4,n,r]):new Re(`float32`,u,[1,3,n,r])},we=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,Ce(o,s)}throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(Ce(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return Ce(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},Te=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new Re({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},Ee=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Re({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},De=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Re({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},Oe=(e,t,n)=>new Re({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),Ae,je,Me,Ne,Pe=w(()=>{Ae=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),je=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),Me=!1,Ne=()=>{if(!Me){Me=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(Ae.set(`int64`,BigInt64Array),je.set(BigInt64Array,`int64`)),t&&(Ae.set(`uint64`,BigUint64Array),je.set(BigUint64Array,`uint64`)),r?(Ae.set(`float16`,n),je.set(n,`float16`)):Ae.set(`float16`,Uint16Array)}}}),Fe,Ie,Le=w(()=>{ze(),Fe=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ie=(e,t)=>{switch(e.location){case`cpu`:return new Re(e.type,e.data,t);case`cpu-pinned`:return new Re({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new Re({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new Re({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new Re({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Re,ze=w(()=>{Se(),ke(),Pe(),Le(),Re=class{constructor(e,t,n){Ne();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=Ae.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`){if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=Ae.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray){if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`)}else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=je.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=Fe(i);if(this.cpuData&&a!==this.cpuData.length&&(r!==`uint4`&&r!==`int4`||Math.ceil(a/2)!==this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return we(e,t)}static fromTexture(e,t){return Te(e,t)}static fromGpuBuffer(e,t){return Ee(e,t)}static fromMLTensor(e,t){return De(e,t)}static fromPinnedBuffer(e,t,n){return Oe(e,t,n)}toDataURL(e){return be(this,e)}toImageData(e){return xe(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return Ie(this,e)}}}),Be,Ve=w(()=>{ze(),Be=Re}),He,Ue=w(()=>{ne(),ye(),Ve(),_e(),He=class e{constructor(e,t){this.handler=e,this.backend=t}async run(e,t,n){pe(),he(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof Be||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof Be)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof Be)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o;if(i.activeLoraAdapters!==void 0){if(!Array.isArray(i.activeLoraAdapters))throw TypeError(`'activeLoraAdapters' must be an array.`);o=i.activeLoraAdapters.map(e=>{if(!(e instanceof ve))throw TypeError(`'activeLoraAdapters' must be an array of LoraAdapter objects.`);if(e.backend!==this.backend)throw Error(`LoRA adapter was created by a different backend than the session.`);return e.handler})}let s=await this.handler.run(e,r,i,o),c={};for(let e in s)if(Object.hasOwnProperty.call(s,e)){let t=s[e];c[e]=t instanceof Be?t:new Be(t.type,t.data,t.dims)}return ge(`InferenceSession.run`),me(),c}async release(){return this.handler.dispose()}static async create(t,n,r,i){pe(),he(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await te(o),l=await s.createInferenceSessionHandler(a,c);return ge(`InferenceSession.create`),me(),new e(l,s)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),We,Ge=w(()=>{Ue(),We=He}),Ke,qe=w(()=>{ye(),Ke=ve}),Je=w(()=>{}),Ye=w(()=>{}),Xe=w(()=>{}),Ze=w(()=>{});T({},{InferenceSession:()=>We,LoraAdapter:()=>Ke,TRACE:()=>de,TRACE_EVENT_BEGIN:()=>he,TRACE_EVENT_END:()=>ge,TRACE_FUNC_BEGIN:()=>pe,TRACE_FUNC_END:()=>me,Tensor:()=>Be,env:()=>le,registerBackend:()=>j});var N=w(()=>{re(),ue(),Ge(),qe(),Ve(),Je(),Ye(),_e(),Xe(),Ze()}),Qe=w(()=>{}),$e={};T($e,{default:()=>nt});var et,tt,nt,rt=w(()=>{Ld(),Mt(),Ct(),et=`ort-wasm-proxy-worker`,tt=globalThis.self?.name===et,tt&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:jt(n.wasm).then(()=>{bd(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;xd(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=Td(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;Ed(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:Dd(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;Pd(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},Id([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:Fd(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),nt=tt?null:e=>new Worker(e??ft,{type:`module`,name:et})}),it={};T(it,{default:()=>ot});async function at(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.jd||=new Map).set(e,n)},t.unmountExternalData=()=>{delete t.jd,delete t.ke,delete t.je,delete t.le},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=e=>async(...n)=>{try{if(t.hd)throw Error(`Session already started`);let r=t.hd={Vd:n[0],errors:[]},i=await e(...n);if(t.hd!==r)throw Error(`Session mismatch`);t.pd?.flush();let a=r.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{t.hd=null}};t.jsepInit=(e,n)=>{if(e===`webgpu`){[t.pd,t.Ld,t.Pd,t.rd,t.Od,t.ic,t.Qd,t.Sd,t.Md,t.Nd,t.Rd]=n;let e=t.pd;t.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),t.jsepGetBuffer=t=>e.getBuffer(t),t.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),t.jsepOnCreateSession=t=>{e.onCreateSession(t)},t.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},t.jsepOnRunStart=t=>e.onRunStart(t),t.Td=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){let e=n[0];[t.ce,t.Cd,t.webnnEnsureTensor,t.Dd,t.webnnDownloadTensor,t.be,t.webnnEnableTraceEvent]=n.slice(1),t.webnnReleaseTensorId=t.Cd,t.webnnUploadTensor=t.Dd,t.webnnRegisterMLContext=t.be,t.webnnOnRunStart=t=>e.onRunStart(t),t.webnnOnRunEnd=e.onRunEnd.bind(e),t.webnnOnReleaseSession=t=>{e.onReleaseSession(t)},t.webnnCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),t.webnnRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),t.webnnCreateMLContext=t=>e.createMLContext(t),t.webnnRegisterGraphInput=e.registerGraphInput.bind(e),t.webnnIsGraphInput=e.isGraphInput.bind(e),t.webnnRegisterGraphOutput=e.registerGraphOutput.bind(e),t.webnnIsGraphOutput=e.isGraphOutput.bind(e),t.webnnCreateTemporaryTensor=e.createTemporaryTensor.bind(e),t.webnnIsGraphInputOutputTypeSupported=e.isGraphInputOutputTypeSupported.bind(e)}};let o=()=>{let e=e=>(...t)=>{let n=tn;return t=e(...t),tn==n?t:new Promise((e,t)=>{cn={resolve:e,reject:t}})};(n=>{for(let r of n)t[r]=e(t[r])})(`_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput`.split(` `)),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o?.()};var s,c,l=(e,t)=>{throw t},u=import.meta.url,d=``;if(n||r){try{d=new URL(`.`,u).href}catch{}r&&(c=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),s=async e=>{if(C(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var f,p,m,h,g,_,v=console.log.bind(console),y=console.error.bind(console),b=v,x=y,S=!1,C=e=>e.startsWith(`file://`);function w(){ke.buffer!=E.buffer&&ae()}if(i){let e=function(n){try{var r=n.data,i=r.bd;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),_=()=>{postMessage({bd:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.Hd)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({bd:`callHandler`,Fd:e,args:t})},e==`print`&&(b=t[e]),e==`printErr`&&(x=t[e]));ke=r.Zd,ae(),p=r.$d,le(),ua()}else if(i===`run`){(function(e){var t=(w(),j)[e+52>>>2>>>0];e=(w(),j)[e+56>>>2>>>0],Er(t,t-e),J(t)})(r.ad),vr(r.ad,0,0,1,0,0),Ee(),I(r.ad),T||=(mr(),!0);try{Ae(r.Xd,r.nd)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?T&&Kt():i&&(x(`worker: received unknown command ${i}`),x(r)))}catch(e){throw yr(),e}};var T=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var E,D,O,k,A,j,ee,te,M,ne,re,ie=!1;function ae(){var e=ke.buffer;t.HEAP8=E=new Int8Array(e),O=new Int16Array(e),t.HEAPU8=D=new Uint8Array(e),k=new Uint16Array(e),t.HEAP32=A=new Int32Array(e),t.HEAPU32=j=new Uint32Array(e),ee=new Float32Array(e),te=new Float64Array(e),M=new BigInt64Array(e),ne=new BigUint64Array(e)}function oe(){ie=!0,i?_():xi.vb()}function se(e){throw x(e=`Aborted(`+e+`)`),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),g?.(e),e}function ce(){return{a:{na:Ti,jb:wi,g:Ne,G:Fe,f:Be,o:Ve,h:He,$:Ue,b:We,S:Ge,Ja:qe,n:Je,aa:Qe,_a:$e,Fa:et,Ha:tt,$a:nt,Ya:rt,Ra:it,Xa:at,la:ot,Ga:st,Da:ct,Za:lt,Ea:ut,eb:dt,ga:yt,ya:bt,wa:Ot,fa:At,N:jt,I:P,xa:Pt,_:Vt,za:Ht,Ua:Ut,Ba:qt,Ka:Yt,ua:Xt,ha:Zt,Ta:I,bb:L,Q:un,r:gn,c:Ct,kb:_n,y:vn,M:yn,D:bn,m:xn,s:Sn,lb:Cn,J:wn,R:Tn,j:En,u:Dn,q:On,k:kn,Oa:An,Pa:Pn,Qa:Fn,Ma:In,Na:Ln,va:Bn,gb:Vn,db:V,v:Kn,ba:qn,ia:Jn,cb:Hn,V:H,ab:Yn,Ca:Xn,F:zn,U:Zn,ma:G,Aa:er,ib:W,hb:tr,Va:ir,Wa:ar,Ia:be,T:or,La:sr,ka:cr,Sa:lr,ja:dr,nb:ca,oa:ra,ob:sa,pa:na,H:Gi,e:ki,t:Di,w:Ei,B:zi,pb:$i,Z:Qi,x:Mi,qa:ea,X:ia,ca:Zi,qb:Xi,ea:Ai,O:Bi,sb:qi,ra:Yi,tb:Ki,L:Ui,Y:ta,d:Oi,A:ji,l:X,mb:la,p:Pi,z:Fi,C:Ni,E:Ii,K:Vi,sa:Wi,P:aa,da:Hi,W:oa,ub:Ri,ta:Li,rb:Ji,i:fr,a:ke,fb:ve}}}async function le(){function e(e,n){var r=xi=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=$t(n),e[t]=r):e[t]=n;return xi=e,xi=(function(){var e=xi,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).wb=t(e.wb),e.ec=n(e.ec),e.gc=t(e.gc),e.uc=t(e.uc),e.vc=n(e.vc),e.zc=t(e.zc),e})(),Ce.push(xi.hc),pr=(e=xi).wb,mr=e.xb,t._OrtInit=e.yb,t._OrtGetLastError=e.zb,t._OrtCreateSessionOptions=e.Ab,t._OrtAppendExecutionProvider=e.Bb,t._OrtGetEpDevices=e.Cb,t._OrtEpDevice_EpName=e.Db,t._OrtAppendExecutionProviderV2=e.Eb,t._OrtAddFreeDimensionOverride=e.Fb,t._OrtAddSessionConfigEntry=e.Gb,t._OrtReleaseSessionOptions=e.Hb,t._OrtCreateSession=e.Ib,t._OrtReleaseSession=e.Jb,t._OrtGetInputOutputCount=e.Kb,t._OrtGetInputOutputMetadata=e.Lb,t._OrtFree=e.Mb,t._OrtCreateTensor=e.Nb,t._OrtGetTensorData=e.Ob,t._OrtReleaseTensor=e.Pb,t._OrtCreateLoraAdapter=e.Qb,t._OrtReleaseLoraAdapter=e.Rb,t._OrtCreateRunOptions=e.Sb,t._OrtAddRunConfigEntry=e.Tb,t._OrtRunOptionsAddActiveLoraAdapter=e.Ub,t._OrtReleaseRunOptions=e.Vb,t._OrtCreateBinding=e.Wb,t._OrtBindInput=e.Xb,t._OrtBindOutput=e.Yb,t._OrtClearBoundOutputs=e.Zb,t._OrtReleaseBinding=e._b,t._OrtRunWithBinding=e.$b,t._OrtRun=e.ac,t._OrtEndProfiling=e.bc,t._JsepOutput=e.cc,t._JsepGetNodeName=e.dc,hr=e.ec,gr=t._free=e.fc,_r=t._malloc=e.gc,vr=e.jc,yr=e.kc,br=e.lc,xr=e.mc,Sr=e.nc,Cr=e.oc,wr=e.pc,q=e.qc,Tr=e.rc,Er=e.sc,J=e.tc,Dr=e.uc,Y=e.vc,Or=e.wc,kr=e.xc,Ar=e.yc,jr=e.zc,Mr=e.Ac,Nr=e.Bc,Pr=e.Cc,Fr=e.Dc,Ir=e.Ec,Lr=e.Fc,Rr=e.Gc,zr=e.Hc,Br=e.Ic,Vr=e.Jc,Hr=e.Kc,Ur=e.Lc,Wr=e.Mc,Gr=e.Nc,Kr=e.Oc,qr=e.Pc,Jr=e.Qc,Yr=e.Rc,Xr=e.Sc,Zr=e.Tc,Qr=e.Uc,$r=e.Vc,ei=e.Wc,ti=e.Xc,ni=e.Yc,ri=e._c,ii=e.$c,ai=e.kd,oi=e.ld,si=e.qd,ci=e.vd,li=e.wd,ui=e.xd,di=e.yd,fi=e.zd,pi=e.Ad,mi=e.Bd,hi=e.Gd,gi=e.Jd,_i=e.fe,vi=e.ge,yi=e.he,bi=e.ie,p=n,xi}var n,r=ce();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(p,ce()),p):(re??=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,d):d+`ort-wasm-simd-threaded.jsep.wasm`:new URL(new URL(`ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm`,import.meta.url).href,``+import.meta.url).href,n=await(async function(e){var t=re;if(!f&&!C(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){x(`wasm streaming compile failed: ${e}`),x(`falling back to ArrayBuffer instantiation`)}return(async function(e,t){try{var n=await(async function(e){if(!f)try{var t=await s(e);return new Uint8Array(t)}catch{}if(e==re&&f)e=new Uint8Array(f);else{if(!c)throw`both async and sync fetching of the wasm failed`;e=c(e)}return e})(e);return await WebAssembly.instantiate(n,t)}catch(e){x(`failed to asynchronously prepare wasm: ${e}`),se(e)}})(t,e)})(r),e(n.instance,n.module))}class ue{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var de=e=>{e.terminate(),e.onmessage=()=>{}},fe=[],pe=0,me=null,he=e=>{xe.length==0&&(Oe(),De(xe[0]));var t=xe.pop();if(!t)return 6;Se.push(t),we[e.ad]=t,t.ad=e.ad;var n={bd:`run`,Xd:e.Wd,nd:e.nd,ad:e.ad};return t.postMessage(n,e.ud),0},ge=0,_e=(e,t,...n)=>{var r,i=16*n.length,a=Y(),o=Dr(i),s=o>>>3;for(r of n)typeof r==`bigint`?((w(),M)[s++>>>0]=1n,(w(),M)[s++>>>0]=r):((w(),M)[s++>>>0]=0n,(w(),te)[s++>>>0]=r);return e=br(e,0,i,o,t),J(a),e};function ve(e){if(i)return _e(0,1,e);if(m=e,!(0<ge)){for(var t of Se)de(t);for(t of xe)de(t);xe=[],Se=[],we={},S=!0}l(0,new ue(e))}function ye(e){if(i)return _e(1,0,e);be(e)}var be=e=>{if(m=e,i)throw ye(e),`unwind`;ve(e)},xe=[],Se=[],Ce=[],we={},Te=e=>{var t=e.ad;delete we[t],xe.push(e),Se.splice(Se.indexOf(e),1),e.ad=0,xr(t)};function Ee(){Ce.forEach(e=>e())}var De=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.bd,i.md&&i.md!=hr()){var a=we[i.md];a?a.postMessage(i,i.ud):x(`Internal error! Worker sent a message "${r}" to target pthread ${i.md}, but that thread no longer exists!`)}else r===`checkMailbox`?Kt():r===`spawnThread`?he(i):r===`cleanupThread`?Wt(()=>{Te(we[i.Yd])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.Fd](...i.args):r&&x(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw x(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({bd:`load`,Hd:i,Zd:ke,$d:p})});function Oe(){var e=new Worker((()=>{let e=URL;return import.meta.url>`file:`&&import.meta.url<`file;`?new e(`ort.bundle.min.mjs`,import.meta.url):new URL(import.meta.url)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});xe.push(e)}var ke,Ae=(e,t)=>{ge=0,e=Nr(e,t),0<ge?m=e:Sr(e)},je=[],Me=0;function Ne(e){var t=new Re(e>>>=0);return(w(),E)[t.cd+12>>>0]==0&&(Ie(t,!0),Me--),Le(t,!1),je.push(t),jr(e)}var Pe=0,Fe=()=>{q(0,0);var e=je.pop();Or(e.od),Pe=0};function Ie(e,t){t=+!!t,(w(),E)[e.cd+12>>>0]=t}function Le(e,t){t=+!!t,(w(),E)[e.cd+13>>>0]=t}class Re{constructor(e){this.od=e,this.cd=e-24}}var ze=e=>{var t=Pe;if(!t)return Tr(0),0;var n=new Re(t);(w(),j)[n.cd+16>>>2>>>0]=t;var r=(w(),j)[n.cd+4>>>2>>>0];if(!r)return Tr(0),t;for(var i of e){if(i===0||i===r)break;if(Ar(i,r,n.cd+16))return Tr(i),t}return Tr(r),t};function Be(){return ze([])}function Ve(e){return ze([e>>>0])}function He(e,t,n,r){return ze([e>>>0,t>>>0,n>>>0,r>>>0])}var Ue=()=>{var e=je.pop();e||se(`no exception to throw`);var t=e.od;throw(w(),E)[e.cd+13>>>0]==0&&(je.push(e),Le(e,!0),Ie(e,!1),Me++),kr(t),Pe=t};function We(e,t,n){var r=new Re(e>>>=0);throw t>>>=0,n>>>=0,(w(),j)[r.cd+16>>>2>>>0]=0,(w(),j)[r.cd+4>>>2>>>0]=t,(w(),j)[r.cd+8>>>2>>>0]=n,kr(e),Me++,Pe=e}var Ge=()=>Me;function Ke(e,t,n,r){return i?_e(2,1,e,t,n,r):qe(e,t,n,r)}function qe(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?Ke(e,t,n,r):(e={Wd:n,ad:e,nd:r,ud:a},i?(e.bd=`spawnThread`,postMessage(e,a),0):he(e))}function Je(e){throw Pe||=e>>>0,Pe}var Ye=globalThis.TextDecoder&&new TextDecoder,Xe=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},Ze=(e,t=0,n,r)=>{if(16<(n=Xe(e,t>>>=0,n,r))-t&&e.buffer&&Ye)return Ye.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},N=(e,t,n)=>(e>>>=0)?Ze((w(),D),e,t,n):``;function Qe(e,t,n){return i?_e(3,1,e,t,n):0}function $e(e,t){if(i)return _e(4,1,e,t)}function et(e,t){if(i)return _e(5,1,e,t)}function tt(e,t,n){if(i)return _e(6,1,e,t,n)}function nt(e,t,n){return i?_e(7,1,e,t,n):0}function rt(e,t){if(i)return _e(8,1,e,t)}function it(e,t,n){if(i)return _e(9,1,e,t,n)}function at(e,t,n,r){if(i)return _e(10,1,e,t,n,r)}function ot(e,t,n,r){if(i)return _e(11,1,e,t,n,r)}function st(e,t,n,r){if(i)return _e(12,1,e,t,n,r)}function ct(e){if(i)return _e(13,1,e)}function lt(e,t){if(i)return _e(14,1,e,t)}function ut(e,t,n){if(i)return _e(15,1,e,t,n)}var dt=()=>se(``),ft=e=>{e>>>=0;for(var t=``;;){var n=(w(),D)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},pt={},mt={},ht={},gt=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function _t(e,t,n={}){return(function(e,t,n={}){var r=t.name;if(!e)throw new gt(`type "${r}" must have a positive integer typeid pointer`);if(mt.hasOwnProperty(e)){if(n.Id)return;throw new gt(`Cannot register type '${r}' twice`)}mt[e]=t,delete ht[e],pt.hasOwnProperty(e)&&(t=pt[e],delete pt[e],t.forEach(e=>e()))})(e,t,n)}var vt=(e,t,n)=>{switch(t){case 1:return n?e=>(w(),E)[e>>>0]:e=>(w(),D)[e>>>0];case 2:return n?e=>(w(),O)[e>>>1>>>0]:e=>(w(),k)[e>>>1>>>0];case 4:return n?e=>(w(),A)[e>>>2>>>0]:e=>(w(),j)[e>>>2>>>0];case 8:return n?e=>(w(),M)[e>>>3>>>0]:e=>(w(),ne)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function yt(e,t,n,r,i){e>>>=0,n>>>=0,t=ft(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}_t(e,{name:t,Zc:a,ed:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),dd:vt(t,n,!r),gd:null})}function bt(e,t,n,r){_t(e>>>=0,{name:t=ft(t>>>0),Zc:function(e){return!!e},ed:function(e,t){return t?n:r},dd:function(e){return this.Zc((w(),D)[e>>>0])},gd:null})}var xt=[],St=[0,1,,1,null,1,!0,1,!1,1];function Ct(e){9<(e>>>=0)&&--St[e+1]===0&&(St[e]=void 0,xt.push(e))}var wt=e=>{if(!e)throw new gt(`Cannot use deleted val. handle = ${e}`);return St[e]},Tt=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=xt.pop()||St.length;return St[t]=e,St[t+1]=1,t}};function Et(e){return this.Zc((w(),j)[e>>>2>>>0])}var Dt={name:`emscripten::val`,Zc:e=>{var t=wt(e);return Ct(e),t},ed:(e,t)=>Tt(t),dd:Et,gd:null};function Ot(e){return _t(e>>>0,Dt)}var kt=(e,t)=>{switch(t){case 4:return function(e){return this.Zc((w(),ee)[e>>>2>>>0])};case 8:return function(e){return this.Zc((w(),te)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function At(e,t,n){n>>>=0,_t(e>>>=0,{name:t=ft(t>>>0),Zc:e=>e,ed:(e,t)=>t,dd:kt(t,n),gd:null})}function jt(e,t,n,r,i){e>>>=0,n>>>=0,t=ft(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}_t(e,{name:t,Zc:a,ed:(e,t)=>t,dd:vt(t,n,r!==0),gd:null})}function P(e,t,n){function r(e){var t=(w(),j)[e>>>2>>>0];return e=(w(),j)[e+4>>>2>>>0],new i((w(),E).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];_t(e>>>=0,{name:n=ft(n>>>0),Zc:r,dd:r},{Id:!0})}var Mt=(e,t,n)=>{var r=(w(),D);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},Nt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function Pt(e,t){_t(e>>>=0,{name:t=ft(t>>>0),Zc(e){var t=(w(),j)[e>>>2>>>0];return t=N(e+4,t,!0),gr(e),t},ed(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new gt(`Cannot pass non-string to std::string`);var r=n?Nt(t):t.length,i=_r(4+r+1),a=i+4;return(w(),j)[i>>>2>>>0]=r,n?Mt(t,a,r+1):(w(),D).set(t,a>>>0),e!==null&&e.push(gr,i),i},dd:Et,gd(e){gr(e)}})}var F=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,Ft=(e,t,n)=>{if(e>>>=1,16<(t=Xe((w(),k),e,t/2,n))-e&&F)return F.decode((w(),k).slice(e,t));for(n=``;e<t;++e){var r=(w(),k)[e>>>0];n+=String.fromCharCode(r)}return n},It=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(w(),O)[t>>>1>>>0]=a,t+=2}return(w(),O)[t>>>1>>>0]=0,t-r},Lt=e=>2*e.length,Rt=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(w(),j)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},zt=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(w(),A)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(w(),A)[t>>>2>>>0]=0,t-r},Bt=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Vt(e,t,n){if(e>>>=0,t>>>=0,n=ft(n>>>=0),t===2)var r=Ft,i=It,a=Lt;else r=Rt,i=zt,a=Bt;_t(e,{name:n,Zc:e=>{var n=(w(),j)[e>>>2>>>0];return n=r(e+4,n*t,!0),gr(e),n},ed:(e,r)=>{if(typeof r!=`string`)throw new gt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=_r(4+o+t);return(w(),j)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(gr,s),s},dd:Et,gd(e){gr(e)}})}function Ht(e,t){_t(e>>>=0,{Kd:!0,name:t=ft(t>>>0),Zc:()=>{},ed:()=>{}})}function Ut(e){vr(e>>>0,!r,1,!n,131072,!1),Ee()}var Wt=e=>{if(!S)try{if(e(),!(0<ge))try{i?hr()&&Sr(m):be(m)}catch(e){e instanceof ue||e==`unwind`||l(0,e)}}catch(e){e instanceof ue||e==`unwind`||l(0,e)}},Gt=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function I(e){e>>>=0,Gt||(Atomics.waitAsync((w(),A),e>>>2,e).value.then(Kt),e+=128,Atomics.store((w(),A),e>>>2,1))}var Kt=()=>Wt(()=>{var e=hr();e&&(I(e),wr())});function qt(e,t){(e>>>=0)==t>>>0?setTimeout(Kt):i?postMessage({md:e,bd:`checkMailbox`}):(e=we[e])&&e.postMessage({bd:`checkMailbox`})}var Jt=[];function Yt(e,t,n,r,i){for(t>>>=0,i>>>=0,Jt.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(w(),M)[n++>>>0]?(w(),M)[n++>>>0]:(w(),te)[n++>>>0];Jt.push(a)}return(t?Ci[t]:Si[e])(...Jt)}var Xt=()=>{ge=0};function Zt(e){e>>>=0,i?postMessage({bd:`cleanupThread`,Yd:e}):Te(we[e])}function L(e){}var Qt=e=>{try{e()}catch(e){se(e)}};function $t(e){var t=(...t)=>{rn.push(e);try{return e(...t)}finally{S||(rn.pop(),tn&&en===1&&rn.length===0&&(en=0,ge+=1,Qt(vi),typeof Fibers<`u`&&Fibers.ne()))}};return R.set(e,t),t}var en=0,tn=null,nn=0,rn=[],an=new Map,on=new Map,R=new Map,sn=0,cn=null,ln=[],z=e=>(function(e){if(!S){if(en===0){var t=!1,n=!1;e((e=0)=>{if(!S&&(nn=e,t=!0,n)){en=2,Qt(()=>yi(tn)),typeof MainLoop<`u`&&MainLoop.Ed&&MainLoop.resume(),e=!1;try{var r=(function(){var e=(w(),A)[tn+8>>>2>>>0];return e=on.get(e),e=R.get(e),--ge,e()})()}catch(t){r=t,e=!0}var i=!1;if(!tn){var a=cn;a&&(cn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(en=1,tn=(function(){var e=_r(65548),t=e+12;if((w(),j)[e>>>2>>>0]=t,(w(),j)[e+4>>>2>>>0]=t+65536,t=rn[0],!an.has(t)){var n=sn++;an.set(t,n),on.set(n,t)}return t=an.get(t),(w(),A)[e+8>>>2>>>0]=t,e})(),typeof MainLoop<`u`&&MainLoop.Ed&&MainLoop.pause(),Qt(()=>_i(tn)))}else en===2?(en=0,Qt(bi),gr(tn),tn=null,ln.forEach(Wt)):se(`invalid state: ${en}`);return nn}})(t=>{e().then(t)});function un(e){return e>>>=0,z(async()=>Tt(await wt(e)))}var dn=[],fn=e=>{var t=dn.length;return dn.push(e),t},pn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(w(),j)[t+4*r>>>2>>>0],o=mt[a];if(o===void 0)throw e=`parameter ${r}`,a=pr(a),t=ft(a),gr(a),new gt(`${e} has unknown type ${t}`);n[i]=o}return n},B=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((w(),j)[t>>>2>>>0]=Tt(r)),e},mn={},hn=e=>{var t=mn[e];return t===void 0?ft(e):t};function gn(e,t,n){var[r,...i]=pn(e,t>>>0);t=r.ed.bind(r);var a=i.map(e=>e.dd.bind(e));e--;var o={toValue:wt};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=hn,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.Kd||(o.toReturnWire=t,o.emval_returnValue=B,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,fn(Object.defineProperty(n,"name",{value:s}))}function _n(e,t){return t>>>=0,(e=wt(e>>>0))==wt(t)}function vn(e){return(e>>>=0)?(e=hn(e),Tt(globalThis[e])):Tt(globalThis)}function yn(e){return e=hn(e>>>0),Tt(t[e])}function bn(e,t){return t>>>=0,e=wt(e>>>0),t=wt(t),Tt(e[t])}function xn(e){9<(e>>>=0)&&(St[e+1]+=1)}function Sn(e,t,n,r,i){return dn[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function Cn(e,t,n,r,i){return Sn(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function wn(){return Tt([])}function Tn(e){e=wt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Tt(t)}function En(e){return Tt(hn(e>>>0))}function Dn(){return Tt({})}function On(e){for(var t=wt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}Ct(e)}function kn(e,t,n){t>>>=0,n>>>=0,e=wt(e>>>0),t=wt(t),n=wt(n),e[t]=n}function An(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),A)[t>>>2>>>0]=e.getUTCSeconds(),(w(),A)[t+4>>>2>>>0]=e.getUTCMinutes(),(w(),A)[t+8>>>2>>>0]=e.getUTCHours(),(w(),A)[t+12>>>2>>>0]=e.getUTCDate(),(w(),A)[t+16>>>2>>>0]=e.getUTCMonth(),(w(),A)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),A)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),A)[t+28>>>2>>>0]=e}var jn=e=>e%4==0&&(e%100!=0||e%400==0),Mn=[0,31,60,91,121,152,182,213,244,274,305,335],Nn=[0,31,59,90,120,151,181,212,243,273,304,334];function Pn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),A)[t>>>2>>>0]=e.getSeconds(),(w(),A)[t+4>>>2>>>0]=e.getMinutes(),(w(),A)[t+8>>>2>>>0]=e.getHours(),(w(),A)[t+12>>>2>>>0]=e.getDate(),(w(),A)[t+16>>>2>>>0]=e.getMonth(),(w(),A)[t+20>>>2>>>0]=e.getFullYear()-1900,(w(),A)[t+24>>>2>>>0]=e.getDay();var n=(jn(e.getFullYear())?Mn:Nn)[e.getMonth()]+e.getDate()-1|0;(w(),A)[t+28>>>2>>>0]=n,(w(),A)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(w(),A)[t+32>>>2>>>0]=e}function Fn(e){e>>>=0;var t=new Date((w(),A)[e+20>>>2>>>0]+1900,(w(),A)[e+16>>>2>>>0],(w(),A)[e+12>>>2>>>0],(w(),A)[e+8>>>2>>>0],(w(),A)[e+4>>>2>>>0],(w(),A)[e>>>2>>>0],0),n=(w(),A)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(w(),A)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(w(),A)[e+24>>>2>>>0]=t.getDay(),n=(jn(t.getFullYear())?Mn:Nn)[t.getMonth()]+t.getDate()-1|0,(w(),A)[e+28>>>2>>>0]=n,(w(),A)[e>>>2>>>0]=t.getSeconds(),(w(),A)[e+4>>>2>>>0]=t.getMinutes(),(w(),A)[e+8>>>2>>>0]=t.getHours(),(w(),A)[e+12>>>2>>>0]=t.getDate(),(w(),A)[e+16>>>2>>>0]=t.getMonth(),(w(),A)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function In(e,t,n,r,a,o,s){return i?_e(16,1,e,t,n,r,a,o,s):-52}function Ln(e,t,n,r,a,o){if(i)return _e(17,1,e,t,n,r,a,o)}var Rn={},zn=()=>performance.timeOrigin+performance.now();function Bn(e,t){return i?_e(18,1,e,t):(Rn[e]&&(clearTimeout(Rn[e].id),delete Rn[e]),t&&(Rn[e]={id:setTimeout(()=>{delete Rn[e],Wt(()=>Cr(e,performance.timeOrigin+performance.now()))},t),me:t}),0)}function Vn(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(w(),j)[e>>>2>>>0]=60*o,(w(),A)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(Mt(e,n,17),Mt(t,r,17)):(Mt(e,r,17),Mt(t,n,17))}var Hn=()=>Date.now(),Un=1;function V(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!Un)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),M)[n>>>3>>>0]=BigInt(e),0}var Wn=[],Gn=(e,t)=>{Wn.length=0;for(var n;n=(w(),D)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,Wn.push(n==112?(w(),j)[t>>>2>>>0]:n==106?(w(),M)[t>>>3>>>0]:n==105?(w(),A)[t>>>2>>>0]:(w(),te)[t>>>3>>>0]),t+=r?8:4}return Wn};function Kn(e,t,n){return e>>>=0,t=Gn(t>>>0,n>>>0),Ci[e](...t)}function qn(e,t,n){return e>>>=0,t=Gn(t>>>0,n>>>0),Ci[e](...t)}var Jn=()=>{};function H(e,t){return x(N(e>>>0,t>>>0))}var Yn=()=>{throw ge+=1,`unwind`};function Xn(){return 4294901760}var Zn=()=>navigator.hardwareConcurrency,Qn={},U=e=>{var t;return(t=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+t[1]:(t=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|t[1]:0},$n=e=>{for(var t of e)(e=U(t))&&(Qn[e]=t)};function W(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),$n(e),Qn.sd=U(e[3]),Qn.Ud=e,Qn.sd}function G(e){if(!(e=Qn[e>>>0]))return 0;var t;if(t=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=t[1];else if(t=/^\s+at (.*) \(.*\)$/.exec(e))e=t[1];else{if(!(t=/^(.+?)@/.exec(e)))return 0;e=t[1]}gr(G.td??0),t=Nt(e)+1;var n=_r(t);return n&&Mt(e,n,t),G.td=n,G.td}function er(e){e>>>=0;var t=(w(),D).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-ke.buffer.byteLength+65535)/65536|0;try{ke.grow(r),ae();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}function tr(e,t,n){if(e>>>=0,t>>>=0,Qn.sd==e)var r=Qn.Ud;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),$n(r);for(var i=3;r[i]&&U(r[i])!=e;)++i;for(e=0;e<n&&r[e+i];++e)(w(),A)[t+4*e>>>2>>>0]=U(r[e+i]);return e}var nr,rr={},K=()=>{if(!nr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in rr)rr[e]===void 0?delete t[e]:t[e]=rr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);nr=n}return nr};function ir(e,t){if(i)return _e(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of K()){var o=t+r;(w(),j)[e+a>>>2>>>0]=o,r+=Mt(n,o,1/0)+1,a+=4}return 0}function ar(e,t){if(i)return _e(20,1,e,t);e>>>=0,t>>>=0;var n=K();for(var r of((w(),j)[e>>>2>>>0]=n.length,e=0,n))e+=Nt(r)+1;return(w(),j)[t>>>2>>>0]=e,0}function or(e){return i?_e(21,1,e):52}function sr(e,t,n,r,a){return i?_e(22,1,e,t,n,r,a):52}function cr(e,t,n,r){return i?_e(23,1,e,t,n,r):52}function lr(e,t,n,r){return i?_e(24,1,e,t,n,r):70}var ur=[null,[],[]];function dr(e,t,n,r){if(i)return _e(25,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(w(),j)[t>>>2>>>0],c=(w(),j)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(w(),D)[s+l>>>0],f=ur[u];d===0||d===10?((u===1?b:x)(Ze(f)),f.length=0):f.push(d)}a+=c}return(w(),j)[r>>>2>>>0]=a,0}function fr(e){return e>>>0}i||(function(){for(var e=t.numThreads-1;e--;)Oe();fe.push(async()=>{var e=(async function(){if(!i)return Promise.all(xe.map(De))})();pe++,await e,--pe==0&&me&&(e=me,me=null,e())})})(),i||(ke=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ae()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>Y(),t.stackRestore=e=>J(e),t.stackAlloc=e=>Dr(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(w(),E)[e>>>0]=t;break;case`i16`:(w(),O)[e>>>1>>>0]=t;break;case`i32`:(w(),A)[e>>>2>>>0]=t;break;case`i64`:(w(),M)[e>>>3>>>0]=BigInt(t);break;case`float`:(w(),ee)[e>>>2>>>0]=t;break;case`double`:(w(),te)[e>>>3>>>0]=t;break;case`*`:(w(),j)[e>>>2>>>0]=t;break;default:se(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(w(),E)[e>>>0];case`i16`:return(w(),O)[e>>>1>>>0];case`i32`:return(w(),A)[e>>>2>>>0];case`i64`:return(w(),M)[e>>>3>>>0];case`float`:return(w(),ee)[e>>>2>>>0];case`double`:return(w(),te)[e>>>3>>>0];case`*`:return(w(),j)[e>>>2>>>0];default:se(`invalid type for getValue: ${t}`)}},t.UTF8ToString=N,t.stringToUTF8=Mt,t.lengthBytesUTF8=Nt;var pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,q,Tr,Er,J,Dr,Y,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si=[ve,ye,Ke,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,In,Ln,Bn,ir,ar,or,sr,cr,lr,dr],Ci={1124124:(e,n,r,i,a)=>{if(t===void 0||!t.jd)return 1;if((e=N(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.jd.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(w(),D).set(o,i>>>0);break;case 1:t.ae?t.ae(i,o):t.Td(i,o);break;default:return 4}return 0}catch{return 4}},1124948:()=>typeof navigator<`u`&&navigator.de?1:0,1125020:(e,n,r)=>{t.Dd(e,(w(),D).subarray(n>>>0,n+r>>>0))},1125084:()=>t.ce(),1125126:e=>{t.Cd(e)},1125163:()=>{t.Md()},1125194:()=>{t.Nd()},1125223:()=>{t.Rd()},1125248:e=>t.Ld(e),1125281:e=>t.Pd(e),1125313:(e,n,r)=>{t.rd(Number(e),Number(n),Number(r),!0)},1125376:(e,n,r)=>{t.rd(Number(e),Number(n),Number(r))},1125433:()=>typeof wasmOffsetConverter<`u`,1125490:e=>{t.ic(`Abs`,e,void 0)},1125541:e=>{t.ic(`Neg`,e,void 0)},1125592:e=>{t.ic(`Floor`,e,void 0)},1125645:e=>{t.ic(`Ceil`,e,void 0)},1125697:e=>{t.ic(`Reciprocal`,e,void 0)},1125755:e=>{t.ic(`Sqrt`,e,void 0)},1125807:e=>{t.ic(`Exp`,e,void 0)},1125858:e=>{t.ic(`Erf`,e,void 0)},1125909:e=>{t.ic(`Sigmoid`,e,void 0)},1125964:(e,n,r)=>{t.ic(`HardSigmoid`,e,{alpha:n,beta:r})},1126043:e=>{t.ic(`HardSwish`,e,void 0)},1126100:e=>{t.ic(`Log`,e,void 0)},1126151:e=>{t.ic(`Sin`,e,void 0)},1126202:e=>{t.ic(`Cos`,e,void 0)},1126253:e=>{t.ic(`Tan`,e,void 0)},1126304:e=>{t.ic(`Asin`,e,void 0)},1126356:e=>{t.ic(`Acos`,e,void 0)},1126408:e=>{t.ic(`Atan`,e,void 0)},1126460:e=>{t.ic(`Sinh`,e,void 0)},1126512:e=>{t.ic(`Cosh`,e,void 0)},1126564:e=>{t.ic(`Asinh`,e,void 0)},1126617:e=>{t.ic(`Acosh`,e,void 0)},1126670:e=>{t.ic(`Atanh`,e,void 0)},1126723:e=>{t.ic(`Tanh`,e,void 0)},1126775:e=>{t.ic(`Not`,e,void 0)},1126826:(e,n,r)=>{t.ic(`Clip`,e,{min:n,max:r})},1126895:e=>{t.ic(`Clip`,e,void 0)},1126947:(e,n)=>{t.ic(`Elu`,e,{alpha:n})},1127005:e=>{t.ic(`Gelu`,e,void 0)},1127057:e=>{t.ic(`Relu`,e,void 0)},1127109:(e,n)=>{t.ic(`LeakyRelu`,e,{alpha:n})},1127173:(e,n)=>{t.ic(`ThresholdedRelu`,e,{alpha:n})},1127243:(e,n)=>{t.ic(`Cast`,e,{to:n})},1127301:e=>{t.ic(`Add`,e,void 0)},1127352:e=>{t.ic(`Sub`,e,void 0)},1127403:e=>{t.ic(`Mul`,e,void 0)},1127454:e=>{t.ic(`Div`,e,void 0)},1127505:e=>{t.ic(`Pow`,e,void 0)},1127556:e=>{t.ic(`Equal`,e,void 0)},1127609:e=>{t.ic(`Greater`,e,void 0)},1127664:e=>{t.ic(`GreaterOrEqual`,e,void 0)},1127726:e=>{t.ic(`Less`,e,void 0)},1127778:e=>{t.ic(`LessOrEqual`,e,void 0)},1127837:(e,n,r,i,a)=>{t.ic(`ReduceMean`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1128012:(e,n,r,i,a)=>{t.ic(`ReduceMax`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1128186:(e,n,r,i,a)=>{t.ic(`ReduceMin`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1128360:(e,n,r,i,a)=>{t.ic(`ReduceProd`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1128535:(e,n,r,i,a)=>{t.ic(`ReduceSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1128709:(e,n,r,i,a)=>{t.ic(`ReduceL1`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1128882:(e,n,r,i,a)=>{t.ic(`ReduceL2`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1129055:(e,n,r,i,a)=>{t.ic(`ReduceLogSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1129232:(e,n,r,i,a)=>{t.ic(`ReduceSumSquare`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1129412:(e,n,r,i,a)=>{t.ic(`ReduceLogSumExp`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1129592:e=>{t.ic(`Where`,e,void 0)},1129645:(e,n,r)=>{t.ic(`Transpose`,e,{perm:n?Array.from((w(),A).subarray(Number(n)>>>0,Number(r)>>>0)):[]})},1129769:(e,n,r,i)=>{t.ic(`DepthToSpace`,e,{blocksize:n,mode:N(r),format:i?`NHWC`:`NCHW`})},1129902:(e,n,r,i)=>{t.ic(`DepthToSpace`,e,{blocksize:n,mode:N(r),format:i?`NHWC`:`NCHW`})},1130035:(e,n,r,i)=>{t.ic(`DFT`,e,{axis:n,inverse:r,onesided:i})},1130127:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.ic(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),E)[u>>>0],outputPadding:d?Array.from((w(),A).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),A).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:N(h)})},1130560:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ic(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),A).subarray(Number(r)>>>0,(Number(r)>>>0)+2>>>0)),group:i,kernelShape:Array.from((w(),A).subarray(Number(a)>>>0,(Number(a)>>>0)+2>>>0)),pads:Array.from((w(),A).subarray(Number(o)>>>0,(Number(o)>>>0)+4>>>0)),strides:Array.from((w(),A).subarray(Number(s)>>>0,(Number(s)>>>0)+2>>>0)),wIsConst:()=>!!(w(),E)[l>>>0],outputPadding:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:N(m)})},1131221:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.ic(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),E)[u>>>0],outputPadding:d?Array.from((w(),A).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),A).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:N(h)})},1131654:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ic(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),A).subarray(Number(r)>>>0,(Number(r)>>>0)+2>>>0)),group:i,kernelShape:Array.from((w(),A).subarray(Number(a)>>>0,(Number(a)>>>0)+2>>>0)),pads:Array.from((w(),A).subarray(Number(o)>>>0,(Number(o)>>>0)+4>>>0)),strides:Array.from((w(),A).subarray(Number(s)>>>0,(Number(s)>>>0)+2>>>0)),wIsConst:()=>!!(w(),E)[l>>>0],outputPadding:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:N(m)})},1132315:(e,n)=>{t.ic(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},1132406:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ic(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1132885:(e,n)=>{t.ic(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},1132976:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ic(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1133455:(e,n)=>{t.ic(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},1133542:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ic(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1134017:(e,n)=>{t.ic(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},1134104:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ic(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1134579:(e,n,r,i,a)=>{t.ic(`Gemm`,e,{alpha:n,beta:r,transA:i,transB:a})},1134683:e=>{t.ic(`MatMul`,e,void 0)},1134737:(e,n,r,i)=>{t.ic(`ArgMax`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},1134845:(e,n,r,i)=>{t.ic(`ArgMin`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},1134953:(e,n)=>{t.ic(`Softmax`,e,{axis:n})},1135016:(e,n)=>{t.ic(`Concat`,e,{axis:n})},1135076:(e,n,r,i,a)=>{t.ic(`Split`,e,{axis:n,numOutputs:r,splitSizes:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1135232:e=>{t.ic(`Expand`,e,void 0)},1135286:(e,n)=>{t.ic(`Gather`,e,{axis:Number(n)})},1135357:(e,n)=>{t.ic(`GatherElements`,e,{axis:Number(n)})},1135436:(e,n)=>{t.ic(`GatherND`,e,{batch_dims:Number(n)})},1135515:(e,n,r,i,a,o,s,c,l,u,d)=>{t.ic(`Resize`,e,{antialias:n,axes:r?Array.from((w(),A).subarray(Number(r)>>>0,Number(i)>>>0)):[],coordinateTransformMode:N(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:N(l),mode:N(u),nearestMode:N(d)})},1135877:(e,n,r,i,a,o,s)=>{t.ic(`Slice`,e,{starts:n?Array.from((w(),A).subarray(Number(n)>>>0,Number(r)>>>0)):[],ends:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1136141:e=>{t.ic(`Tile`,e,void 0)},1136193:(e,n,r)=>{t.ic(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},1136307:(e,n,r)=>{t.ic(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},1136421:e=>{t.ic(`Range`,e,void 0)},1136474:(e,n)=>{t.ic(`Einsum`,e,{equation:N(n)})},1136555:(e,n,r,i,a)=>{t.ic(`Pad`,e,{mode:n,value:r,pads:i?Array.from((w(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1136698:(e,n,r,i,a,o)=>{t.ic(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1136867:(e,n,r,i,a,o)=>{t.ic(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1137036:(e,n,r)=>{t.ic(`CumSum`,e,{exclusive:Number(n),reverse:Number(r)})},1137133:(e,n,r)=>{t.ic(`DequantizeLinear`,e,{axis:n,blockSize:r})},1137223:(e,n,r,i,a)=>{t.ic(`GridSample`,e,{align_corners:n,mode:N(r),padding_mode:N(i),format:a?`NHWC`:`NCHW`})},1137393:(e,n,r,i,a)=>{t.ic(`GridSample`,e,{align_corners:n,mode:N(r),padding_mode:N(i),format:a?`NHWC`:`NCHW`})},1137563:(e,n)=>{t.ic(`ScatterND`,e,{reduction:N(n)})},1137648:(e,n,r,i,a,o,s,c,l)=>{t.ic(`Attention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from((w(),A).subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1137920:e=>{t.ic(`BiasAdd`,e,void 0)},1137975:e=>{t.ic(`BiasSplitGelu`,e,void 0)},1138036:e=>{t.ic(`FastGelu`,e,void 0)},1138092:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{t.ic(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:n,dilations:r?Array.from((w(),A).subarray(Number(r)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from((w(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from((w(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from((w(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!(w(),E)[Number(p)>>>0],activation:N(m),activation_params:h?Array.from((w(),ee).subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1138676:e=>{t.ic(`Gelu`,e,void 0)},1138728:(e,n,r,i,a,o,s,c,l)=>{t.ic(`GroupQueryAttention`,e,{numHeads:n,kvNumHeads:r,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1138945:(e,n,r,i)=>{t.ic(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},1139056:(e,n,r,i)=>{t.ic(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},1139167:(e,n,r,i,a,o)=>{t.ic(`MatMulNBits`,e,{k:n,n:r,accuracyLevel:i,bits:a,blockSize:o})},1139294:(e,n,r,i,a,o)=>{t.ic(`MultiHeadAttention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o})},1139453:(e,n)=>{t.ic(`QuickGelu`,e,{alpha:n})},1139517:(e,n,r,i,a)=>{t.ic(`RotaryEmbedding`,e,{interleaved:!!n,numHeads:r,rotaryEmbeddingDim:i,scale:a})},1139656:(e,n,r)=>{t.ic(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},1139758:(e,n,r)=>{t.ic(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},1139860:(e,n,r,i)=>{t.ic(`GatherBlockQuantized`,e,{gatherAxis:n,quantizeAxis:r,blockSize:i})},1139981:e=>{t.Qd(e)},1140015:(e,n)=>t.Sd(Number(e),Number(n),t.hd.Vd,t.hd.errors)};function wi(e,n,r){return z(async()=>{await t.Od(Number(e),Number(n),Number(r))})}function Ti(){return typeof wasmOffsetConverter<`u`}function Ei(e,t,n,r){var i=Y();try{return Hr(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function Di(e,t,n){var r=Y();try{return Br(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Oi(e){var t=Y();try{Rr(e)}catch(e){if(J(t),e!==e+0)throw e;q(1,0)}}function ki(e,t){var n=Y();try{return Nr(e,t)}catch(e){if(J(n),e!==e+0)throw e;q(1,0)}}function X(e,t,n){var r=Y();try{Mr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Ai(e,t,n,r){var i=Y();try{return qr(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function ji(e,t){var n=Y();try{Ur(e,t)}catch(e){if(J(n),e!==e+0)throw e;q(1,0)}}function Mi(e,t,n,r,i,a,o){var s=Y();try{return Vr(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Ni(e,t,n,r,i,a){var o=Y();try{Pr(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Pi(e,t,n,r){var i=Y();try{Ir(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function Fi(e,t,n,r,i){var a=Y();try{zr(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Ii(e,t,n,r,i,a,o){var s=Y();try{Gr(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Li(e,t,n,r,i,a,o){var s=Y();try{Kr(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Ri(e,t,n,r,i,a,o,s){var c=Y();try{Zr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function zi(e,t,n,r,i){var a=Y();try{return Wr(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Bi(e,t,n){var r=Y();try{return Lr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Vi(e,t,n,r,i,a,o,s){var c=Y();try{Qr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function Hi(e,t,n,r,i,a,o,s,c,l,u,d){var f=Y();try{Jr(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(J(f),e!==e+0)throw e;q(1,0)}}function Ui(e,t,n){var r=Y();try{return $r(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;return q(1,0),0n}}function Wi(e,t,n,r,i,a,o,s,c){var l=Y();try{Fr(e,t,n,r,i,a,o,s,c)}catch(e){if(J(l),e!==e+0)throw e;q(1,0)}}function Gi(e){var t=Y();try{return ei(e)}catch(e){if(J(t),e!==e+0)throw e;q(1,0)}}function Ki(e,t){var n=Y();try{return hi(e,t)}catch(e){if(J(n),e!==e+0)throw e;return q(1,0),0n}}function qi(e,t,n,r){var i=Y();try{return ti(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function Ji(e,t,n,r,i,a,o){var s=Y();try{gi(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Yi(e){var t=Y();try{return ni(e)}catch(e){if(J(t),e!==e+0)throw e;return q(1,0),0n}}function Xi(e,t,n,r,i){var a=Y();try{return ci(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Zi(e,t,n,r,i,a){var o=Y();try{return li(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Qi(e,t,n,r,i,a){var o=Y();try{return Yr(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function $i(e,t,n,r,i,a){var o=Y();try{return ui(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function ea(e,t,n,r,i,a,o,s){var c=Y();try{return Xr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function ta(e,t,n,r,i){var a=Y();try{return di(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;return q(1,0),0n}}function na(e,t,n,r){var i=Y();try{return fi(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function ra(e,t,n,r){var i=Y();try{return pi(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function ia(e,t,n,r,i,a,o,s,c,l,u,d){var f=Y();try{return mi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(J(f),e!==e+0)throw e;q(1,0)}}function aa(e,t,n,r,i,a,o,s,c,l,u){var d=Y();try{oi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(J(d),e!==e+0)throw e;q(1,0)}}function oa(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Y();try{si(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(J(g),e!==e+0)throw e;q(1,0)}}function sa(e,t,n){var r=Y();try{return ri(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function ca(e,t,n){var r=Y();try{return ii(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function la(e,t,n,r){var i=Y();try{ai(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function ua(){if(0<pe)me=ua;else if(i)h?.(t),oe();else{for(var e=fe;0<e.length;)e.shift()(t);0<pe?me=ua:(t.calledRun=!0,S||(oe(),h?.(t)))}}return i||(xi=await le(),ua()),t.PTR_SIZE=4,ie?t:new Promise((e,t)=>{h=e,g=t})}var ot,st,ct=w(()=>{ot=at,st=globalThis.self?.name?.startsWith(`em-pthread`),st&&at()}),lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct=w(()=>{Qe(),lt=typeof location>`u`?void 0:location.origin,ut=import.meta.url>`file:`&&import.meta.url<`file;`,dt=()=>ut?new URL(new URL(`ort.bundle.min.mjs`,import.meta.url).href,lt).href:import.meta.url,ft=dt(),pt=()=>{if(ft&&!ft.startsWith(`blob:`))return ft.substring(0,ft.lastIndexOf(`/`)+1)},mt=(e,t)=>{try{let n=t??ft;return(n?new URL(e,n):new URL(e)).origin===lt}catch{return!1}},ht=(e,t)=>{let n=t??ft;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},gt=(e,t)=>`${t??`./`}${e}`,_t=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},vt=async e=>(await import(e)).default,yt=(rt(),D($e)).default,bt=async()=>{if(!ft)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(mt(ft))return[void 0,yt()];let e=await _t(ft);return[e,yt(e)]},xt=(ct(),D(it)).default,St=async(e,t,n,r)=>{let i=xt&&!(e||t);if(i){if(ft)i=mt(ft)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`)}if(i)return[void 0,xt];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??ht(r,t),a=n&&i&&!mt(i,t),o=a?await _t(i):i??gt(r,t);return[a?o:void 0,await vt(o)]}}}),wt,Tt,Et,Dt,Ot,kt,At,jt,P,Mt=w(()=>{Ct(),Tt=!1,Et=!1,Dt=!1,Ot=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},kt=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},At=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},jt=async e=>{if(Tt)return Promise.resolve();if(Et)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(Dt)throw Error(`previous call to 'initializeWebAssembly()' failed.`);Et=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!At())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!kt())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=Ot();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await St(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=pt();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{Et=!1,Tt=!0,wt=t,e(),d&&URL.revokeObjectURL(d)},e=>{Et=!1,Dt=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},P=()=>{if(Tt&&wt)return wt;throw Error(`WebAssembly is not initialized yet.`)}}),Nt,Pt,F,Ft=w(()=>{Mt(),Nt=(e,t)=>{let n=P(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Pt=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)Pt(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},F=e=>{let t=P(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),It,Lt=w(()=>{Mt(),Ft(),It=(e,t)=>{let n=P(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let o=0;e?.tag!==void 0&&(o=Nt(e.tag,i)),r=n._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,o),r===0&&F(`Can't create run options.`),e?.extra!==void 0&&Pt(e.extra,``,new WeakSet,(e,t)=>{let a=Nt(e,i),o=Nt(t,i);n._OrtAddRunConfigEntry(r,a,o)!==0&&F(`Can't set a run config entry: ${e} - ${t}.`)});for(let e of t)n._OrtRunOptionsAddActiveLoraAdapter(r,e)!==0&&F(`Can't add an active LoRA adapter.`);return[r,i]}catch(e){throw r!==0&&n._OrtReleaseRunOptions(r),i.forEach(e=>n._free(e)),e}}}),Rt,zt,Bt,Vt,Ht,Ut,Wt=w(()=>{Mt(),Ft(),Rt=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},zt=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Bt=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},Vt=(e,t,n,r)=>{let i=Nt(t,r),a=Nt(n,r);P()._OrtAddSessionConfigEntry(e,i,a)!==0&&F(`Can't set a session config entry: ${t} - ${n}.`)},Ht=async(e,t,n)=>{let r=t.executionProviders;for(let t of r){let r=typeof t==`string`?t:t.name,i=[];switch(r){case`webnn`:if(r=`WEBNN`,Vt(e,`session.disable_quant_qdq`,`1`,n),Vt(e,`session.disable_qdq_constant_folding`,`1`,n),typeof t!=`string`){let r=t?.deviceType;r&&Vt(e,`deviceType`,r,n)}break;case`webgpu`:if(r=`JS`,typeof t!=`string`){let r=t;if(r?.preferredLayout){if(r.preferredLayout!==`NCHW`&&r.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);Vt(e,`preferredLayout`,r.preferredLayout,n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let a=i.length,o=0,s=0;if(a>0){o=P()._malloc(a*P().PTR_SIZE),n.push(o),s=P()._malloc(a*P().PTR_SIZE),n.push(s);for(let e=0;e<a;e++)P().setValue(o+e*P().PTR_SIZE,i[e][0],`*`),P().setValue(s+e*P().PTR_SIZE,i[e][1],`*`)}let c;{let t=Nt(r,n);c=await P()._OrtAppendExecutionProvider(e,t,o,s,a)}c!==0&&F(`Can't append execution provider: ${r}.`)}},Ut=async e=>{let t=P(),n=0,r=[],i=e||{};Bt(i);try{let e=Rt(i.graphOptimizationLevel??`all`),a=zt(i.executionMode??`sequential`),o=typeof i.logId==`string`?Nt(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?Nt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&F(`Can't create session options.`),i.executionProviders&&await Ht(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Vt(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=Nt(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&F(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&Pt(i.extra,``,new WeakSet,(e,t)=>{Vt(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&F(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),Gt,I,Kt,qt,Jt,Yt,Xt,Zt,L=w(()=>{Gt=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},I=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Kt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},qt=e=>{switch(e){case`float16`:return typeof Float16Array<`u`?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Jt=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Yt=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Xt=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Zt=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Qt,$t=w(()=>{Qe(),Qt=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),en,tn,nn,rn,an,on,R,sn=w(()=>{L(),en=[`V`,`I`,`W`,`E`,`F`],tn=(e,t)=>{console.log(`[${en[e]},${new Date().toISOString()}]${t}`)},an=(e,t)=>{nn=e,rn=t},on=(e,t)=>{let n=Jt(e);n>=Jt(nn)&&tn(n,typeof t==`function`?t():t)},R=(...e)=>{rn&&on(...e)}}),cn,ln,z,un,dn,fn,pn,B=w(()=>{cn=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},ln=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=cn.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},z=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},un=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s,c=0){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let l=[n[0],n[1]];return e.computeShapeHelper(t,n,l,r,i,a,o,s,c),l}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c,l=0){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c,l))}static computeOutputSize(e,t,n,r,i){let a=Math.floor(e/t)+1;return i===1&&(a=Math.ceil(e/t)+1,(a-1)*t>=n+r&&--a),a}static adjustPadAndReturnShape(t,n,r,i,a,o,s,c,l=0){let u=r*(i-1)+1;if(c&&c!==`NOTSET`)switch(c){case`VALID`:return a[o]=0,a[s]=0,e.computeOutputSize(t-u,n,t,0,l);case`SAME_LOWER`:case`SAME_UPPER`:if(r!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let r=(Math.floor((t+n-1)/n)-1)*n+i-t;return a[o]=Math.floor(c===`SAME_LOWER`?(r+1)/2:r/2),a[s]=r-a[o],e.computeOutputSize(t+a[o]+a[s]-u,n,t,a[o],l)}default:throw Error(`Unsupported AutoPad type`)}else return e.computeOutputSize(t+a[o]+a[s]-u,n,t,a[o],l)}},dn=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!ln.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},fn=-34028234663852886e22,pn=34028234663852886e22}),mn,hn=w(()=>{L(),mn=(e,t)=>new(qt(t))(e)}),gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn=w(()=>{L(),sn(),gn=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),_n=(e,t)=>{if(t===`int32`)return e;let n=gn.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(qt(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},vn=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},yn=1,bn=()=>yn++,xn=new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),Sn=(e,t)=>{let n=gn.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},Cn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Sn(this.dataType,this.tensorShape)}destroy(){R(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=vn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}return new Uint8Array(n).buffer}return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},wn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=xn.get(t),!o||!a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);R(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Sn(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType){if(this.wrapper.fallbackType===`int32`)t=_n(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`)}if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}R(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?vn(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},Tn=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=bn();return this.tensorTrackersById.set(e,new wn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){R(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){R(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=bn(),o=new Cn({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new wn(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){R(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}R(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Cn({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},En=(...e)=>new Tn(...e)}),On,kn,An,jn=w(()=>{L(),Mt(),hn(),Dn(),sn(),On=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),kn=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},An=class{constructor(e){this.tensorManager=En(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,an(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){R(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){R(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)R(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>kn(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){R(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=On.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){R(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=On.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!P().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);R(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return mn(n,t)}}registerMLTensor(e,t,n,r){let i=On.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return R(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=On.get(Gt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),Mn=w(()=>{}),Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn=w(()=>{sn(),Mn(),Nn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Pn=[],Fn=e=>Math.ceil(Number(e)/16)*16,In=e=>{for(let t=0;t<Pn.length;t++){let n=Pn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ln=1,Rn=()=>Ln++,zn=async(e,t,n,r)=>{let i=Fn(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Bn=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Nn)Pn.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Fn(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);if(a===i&&r%4==0)this.backend.device.queue.writeBuffer(o.gpuData.buffer,0,n,r,i);else{let e=new Uint8Array(a);e.set(t),this.backend.device.queue.writeBuffer(o.gpuData.buffer,0,e,0,a)}R(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=Fn(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return R(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Rn();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),R(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),R(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=In(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Rn(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),R(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return R(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await zn(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0){if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Nn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(R(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Vn=(...e)=>new Bn(...e)}),Un,V,Wn=w(()=>{Un=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},V=e=>new Un(e)}),Gn,Kn,qn,Jn,H,Yn,Xn,Zn,Qn,U,$n,W,G,er,tr,nr,rr,K=w(()=>{L(),B(),Gn=64,Kn=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},qn=(e,t=1)=>{let n=Kn(e,t);return typeof n==`string`?n:n[0]},Jn=(e,t=1)=>{let n=Kn(e,t);return typeof n==`string`?n:n[1]},H=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:z.computeStrides(e)})}),t},Yn=e=>e%4==0?4:e%2==0?2:1,Xn=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Zn=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Qn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,U=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,$n=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Kn(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${U(g,e,o)};
    let rest${e} = current % ${U(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${U(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),C=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,w=(e,t)=>o<2?`${e}`:`${U(e,t,o)}`,T=(e,t,n)=>o<2?`${e}=${n};`:`${U(e,t,o)}=${n};`,E={},D=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in E)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${w(g,e)} * (${t} % ${w(h,e)})`)}return E[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},O=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),k=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),A=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${k(`i2o_${e}(indices)`)};
  }`,j=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn get_${e}(${t}) -> ${u} {
    return get_${e}ByIndices(${C(n)});
  }`})(),ee=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?k(`0u`):o===1?k(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},te=t=>o<2?k(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),M=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${O(`i2o_${e}(indices)`,`value`)}
  }`,ne=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn set_${e}(${t}, value: ${u}) {
    set_${e}ByIndices(${C(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(E).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(ne),t=!0),p.setByIndices&&(e.push(M),t=!0),p.get&&(e.push(j),t=!0),p.getByIndices&&(e.push(A),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${z.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:D,indices:C,indicesGet:w,indicesSet:T,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?O(`0u`,n):o===1?O(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:O,setByIndices:(t,n)=>o<2?O(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ee,getByOffset:k,getByIndices:te,usage:r,name:e,strides:g,shape:h,rank:o}},W=(e,t,n,r=1)=>$n(e,t,n,`input`,r),G=(e,t,n,r=1)=>$n(e,t,n,`output`,r),er=(e,t,n)=>$n(e,t,n,`atomicOutput`,1),tr=(e,t,n,r=1)=>$n(e,t,n,`internal`,r),nr=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=Gn){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},rr=(e,t)=>new nr(e,t)}),ir,ar,or,sr,cr,lr,ur,dr,fr,pr=w(()=>{L(),B(),Wn(),K(),ir=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ar=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,or=(e,t)=>z.sortBasedOnPerm(e,ar(e.length,t)),sr=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},cr=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},lr=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ur=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ar(r,t),a=or(e.dims,i),o=e.dims,s=a,c=r<2||lr(i,e.dims),l;if(c)return l=e=>{let t=W(`input`,n,o,4),r=G(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=cr(e.dims,i),f=z.areEqual(d,[2,3,1]),p=z.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=W(`a`,n,o.length),r=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...H(o,s)]}},getShaderSource:l}):(l=e=>{let t=W(`a`,n,o.length),a=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${sr(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...H(o,s)]}},getShaderSource:l})},dr=(e,t)=>{ir(e.inputs,t.perm),e.compute(ur(e.inputs[0],t.perm))},fr=e=>V({perm:e.perm})}),mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,q,Tr,Er,J,Dr,Y,Or,kr,Ar,jr,Mr=w(()=>{L(),B(),K(),ai(),pr(),mr={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},hr={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},gr={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},_r={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},vr=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},yr=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},br=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},xr=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Sr=(e,t)=>{let n=[];if(!xr(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},Cr=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=z.size(a),l=z.size(o),u=W(`_A`,n[0].dataType,s),d=G(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${gr[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${mr[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${hr[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${_r[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},wr=(e,t,n,r)=>{let i=e.inputs.length===1?n:Ir(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=z.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=Sr(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(ur(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=vr(s.length,c.dims.length));let[u,d]=yr(c.dims,s),f=u;i.keepDims&&(f=br(u,o)),e.compute(Cr(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},q=(e,t)=>{wr(e,`ReduceMeanShared`,t,`mean`)},Tr=(e,t)=>{wr(e,`ReduceL1Shared`,t,`l1`)},Er=(e,t)=>{wr(e,`ReduceL2Shared`,t,`l2`)},J=(e,t)=>{wr(e,`ReduceLogSumExpShared`,t,`logSumExp`)},Dr=(e,t)=>{wr(e,`ReduceMaxShared`,t,`max`)},Y=(e,t)=>{wr(e,`ReduceMinShared`,t,`min`)},Or=(e,t)=>{wr(e,`ReduceProdShared`,t,`prod`)},kr=(e,t)=>{wr(e,`ReduceSumShared`,t,`sum`)},Ar=(e,t)=>{wr(e,`ReduceSumSquareShared`,t,`sumSquare`)},jr=(e,t)=>{wr(e,`ReduceLogSumShared`,t,`logSum`)}}),Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai=w(()=>{L(),B(),Wn(),K(),Mr(),Nr=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},Pr=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],Fr=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=z.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=z.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=W(`_A`,n[0].dataType,u),s=G(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...H(l,c)]})}},Ir=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),V({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Lr=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Ir(i,n);e.compute(Fr(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Pr:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Rr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},zr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},Br=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},Vr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},Hr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},Ur=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},Wr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Gr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},Kr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},qr=(e,t)=>{Nr(e.inputs),Lr(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},Jr=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Yr=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ur(e,t):q(e,t)},Xr=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zr(e,t):Tr(e,t)},Zr=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Br(e,t):Er(e,t)},Qr=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vr(e,t):J(e,t)},$r=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hr(e,t):Dr(e,t)},ei=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wr(e,t):Y(e,t)},ti=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gr(e,t):Or(e,t)},ni=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Kr(e,t):kr(e,t)},ri=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qr(e,t):Ar(e,t)},ii=(e,t)=>{Jr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rr(e,t):jr(e,t)}}),oi,si,ci,li,ui=w(()=>{L(),Wn(),ai(),oi=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},si=(e,t)=>{oi(e.inputs),e.compute(Fr(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},ci=(e,t)=>{oi(e.inputs),e.compute(Fr(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},li=e=>V(e)}),di,fi,pi,mi,hi,gi,_i,vi,yi=w(()=>{L(),B(),Mn(),K(),di=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},fi=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,pi=(e,t,n,r,i,a,o,s)=>{let c=Yn(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=qn(e.dataType,c),m=Jn(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=G(`x`,e.dataType,e.dims,c),r=[n],i=o?W(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=Jn(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${fi(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},mi=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=Yn(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&z.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=W(`q`,t.dataType,t.dims,g),o=[a,W(`key`,n.dataType,n.dims,g)];if(b){let e=W(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(W(`attention_bias`,i.dataType,i.dims));let l=s?W(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?W(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=G(`output`,t.dataType,u),_=[h];d&&_.push(G(`present_key`,t.dataType,p,g));let v=Jn(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${fi(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},hi=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&z.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=W(`probs`,t.dataType,t.dims),a=[i,W(`v`,n.dataType,n.dims)];_&&a.push(W(`past_value`,r.dataType,r.dims));let c=o?W(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[G(`output`,t.dataType,m)];return d&&f.push(G(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${fi(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},gi=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?o:void 0,m=f>1?s:void 0,h=f>1?l.pastSequenceLength:0,g=h+l.kvSequenceLength,_=c&&z.size(c.dims)>0?c:void 0,v=[t,n];p&&z.size(p.dims)>0&&v.push(p),_&&v.push(_),u&&v.push(u),d&&v.push(d);let y=e.compute(mi(f,t,n,p,_,l,h,u,d),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(pi(y,l.batchSize,l.numHeads,h,l.sequenceLength,g,u,d),{inputs:u&&d?[y,u,d]:[y],outputs:[]});let b=[y,r];m&&z.size(m.dims)>0&&b.push(m),u&&b.push(u),d&&b.push(d),e.compute(hi(f,y,r,m,l,h,u,d),{inputs:b,outputs:f>1?[0,2]:[0]})},_i=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=G(`output_q`,s[0].dataType,n),r=G(`output_k`,s[0].dataType,n),i=G(`output_v`,s[0].dataType,n),a=W(`input`,s[0].dataType,s[0].dims),o=W(`weight`,s[1].dataType,s[1].dims),c=W(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},vi=(e,t)=>{let n=di(e.inputs,t),[r,i,a]=_i(e,n);return gi(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),bi,xi,Si,Ci,wi=w(()=>{N(),L(),B(),Wn(),K(),bi=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},xi=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Yn(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=z.size(a)/o,l=r,u=l?a.length:a,d=W(`x`,e[0].dataType,e[0].dims,o),f=W(`scale`,e[1].dataType,e[1].dims,s),p=W(`bias`,e[2].dataType,e[2].dims,s),m=W(`inputMean`,e[3].dataType,e[3].dims,s),h=W(`inputVar`,e[4].dataType,e[4].dims,s),g=G(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...H(a)]:[{type:12,data:c}]})}},Si=e=>V(e),Ci=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Si({...t,outputCount:r});if(le.webgpu.validateInputContent&&bi(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(xi(n,i))}}),Ti,Ei,Di,Oi=w(()=>{B(),K(),Ti=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},Ei=e=>{let t=e[0].dims,n=e[0].dims[2],r=z.size(t)/4,i=e[0].dataType,a=W(`input`,i,t,4),o=W(`bias`,i,[n],4),s=W(`residual`,i,t,4),c=G(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},Di=e=>{Ti(e.inputs),e.compute(Ei(e.inputs))}}),ki,X,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba=w(()=>{L(),B(),Wn(),K(),ki=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=W(`inputData`,n,[s],4),u=G(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},X=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>ki(t,z.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(z.size(t[0].dims)/64/4)},programUniforms:c})}},Ai=e=>{e.compute(X(e.inputs[0],`Abs`,`abs`))},ji=e=>{e.compute(X(e.inputs[0],`Acos`,`acos`))},Mi=e=>{e.compute(X(e.inputs[0],`Acosh`,`acosh`))},Ni=e=>{e.compute(X(e.inputs[0],`Asin`,`asin`))},Pi=e=>{e.compute(X(e.inputs[0],`Asinh`,`asinh`))},Fi=e=>{e.compute(X(e.inputs[0],`Atan`,`atan`))},Ii=e=>{e.compute(X(e.inputs[0],`Atanh`,`atanh`))},Li=e=>V(e),Ri=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(X(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},zi=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return V({min:t,max:n})},Bi=(e,t)=>{let n=t||zi(e.inputs),r=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},Vi=e=>{e.compute(X(e.inputs[0],`Ceil`,`ceil`))},Hi=e=>{e.compute(X(e.inputs[0],`Cos`,`cos`))},Ui=e=>{e.compute(X(e.inputs[0],`Cosh`,`cosh`))},Wi=e=>V(e),Gi=(e,t)=>{let n=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ki=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,qi=e=>{let t=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Ki(t)))},Ji=e=>{e.compute(X(e.inputs[0],`Exp`,`exp`))},Yi=e=>{e.compute(X(e.inputs[0],`Floor`,`floor`))},Xi=e=>{let t=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Ki(t)))},Zi=(e,t)=>{let n=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Qi=e=>{e.compute(X(e.inputs[0],`Not`,e=>`!${e}`))},$i=e=>{e.compute(X(e.inputs[0],`Neg`,e=>`-${e}`))},ea=e=>{e.compute(X(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},ta=e=>{let t=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},na=e=>{e.compute(X(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},ra=e=>V(e),ia=(e,t)=>{let n=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},aa=e=>{let t=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`HardSwish`,e=>`${e} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${e} + vec4<${t}>(0.5)))`))},oa=e=>{e.compute(X(e.inputs[0],`Sin`,`sin`))},sa=e=>{e.compute(X(e.inputs[0],`Sinh`,`sinh`))},ca=e=>{e.compute(X(e.inputs[0],`Sqrt`,`sqrt`))},la=e=>{e.compute(X(e.inputs[0],`Tan`,`tan`))},ua=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,da=e=>{e.compute(X(e.inputs[0],`Tanh`,ua))},fa=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ua(`v`)};
}
`,pa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,ma=e=>{let t=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`FastGelu`,pa,fa(t),void 0,e.inputs[0].dataType))},ha=(e,t)=>{let n=Jn(e.inputs[0].dataType);return e.compute(X(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},ga=e=>{e.compute(X(e.inputs[0],`Log`,`log`))},_a=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,va=e=>`quick_gelu_impl(${e})`,ya=(e,t)=>{let n=Jn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`QuickGelu`,va,_a(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),xa,Sa,Ca,wa=w(()=>{B(),K(),ba(),xa=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},Sa=e=>{let t=e[0].dims.slice();t[2]/=2;let n=W(`input`,e[0].dataType,e[0].dims,4),r=W(`bias`,e[0].dataType,[e[0].dims[2]],4),i=G(`output`,e[0].dataType,t,4),a=z.size(t)/4,o=qn(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Ki(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},Ca=e=>{xa(e.inputs),e.compute(Sa(e.inputs))}}),Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra=w(()=>{L(),B(),K(),Ta=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=G(`outputData`,u,r.length,4),h=W(`aData`,c,t.length,4),g=W(`bData`,l,n.length,4),_;if(i){if(a){let e=z.size(t)===1,r=z.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)))}else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},Ea=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),c=r.dims.map(Number),l=!z.areEqual(s,c),u=s,d=z.size(s),f=!1,p=!1,m=[l];if(l){let e=ln.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=z.size(u);let t=z.size(s)===1,n=z.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>Ta(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(u)/4)},...H(s,c,u)]})}},Da=(e,t,n,r,i,a)=>{e.compute(Ea(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},Oa=e=>{Da(e,`Add`,(e,t)=>`${e}+${t}`)},ka=e=>{Da(e,`Div`,(e,t)=>`${e}/${t}`)},Aa=e=>{Da(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},ja=e=>{Da(e,`Mul`,(e,t)=>`${e}*${t}`)},Ma=e=>{let t=W(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;Da(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Na=e=>{Da(e,`Sub`,(e,t)=>`${e}-${t}`)},Pa=e=>{Da(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},Fa=e=>{Da(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},Ia=e=>{Da(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},La=e=>{Da(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),za,Ba,Va,Ha,Ua=w(()=>{L(),B(),Wn(),K(),za=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},Ba=(e,t,n,r,i=0)=>{let a=e.reduce((e,t)=>e+z.size(t.dims),0),o=Array(e.length),s=Array(e.length),c=Array(e.length),l=0,u=i,d=[],f=[],p=[{type:12,data:a}];for(let n=0;n<e.length;++n)o[n]=l,s[n]=u,l+=z.size(e[n].dims),u+=e[n].dims[t],f.push(e[n].dims.length),c[n]=W(`input${n}`,r,f[n]),d.push(`rank`),p.push({type:12,data:o[n]}),p.push({type:12,data:s[n]});for(let t=0;t<e.length;++t)p.push(...H(e[t].dims));p.push(...H(n));let m=G(`output`,r,n.length),h=c.map((n,r)=>{let i=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${r}`};
        var outputIndices = ${n.offsetToIndices(`inputOffset`)};
        ${m.indicesGet(`outputIndices`,t)} += uniforms.outputAxisOffset${r};
        ${m.setByIndices(`outputIndices`,n.getByOffset(`inputOffset`))}`;return e.length===1?i:r===0?`if (inputIndex == 0u) {${i}}`:r===e.length-1?`else {${i}}`:`else if (inputIndex == ${r}u) {${i}}`}).join(`
`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`inputOffset${n}`,`u32`),t.registerUniform(`outputAxisOffset${n}`,`u32`);return t.declareVariables(...c,m)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${c.slice(1).map((e,t)=>`if (global_idx < uniforms.inputOffset${t+1}) {
      return ${t}u;
    }`).join(`
`)}
    return ${e.length-1}u;
  }

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    let inputIndex = calculateInputIndex(global_idx);
    ${h}
  }`}},Va=(e,t)=>{let n=e.inputs,r=n[0].dims,i=z.normalizeAxis(t.axis,r.length);za(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>z.size(e.dims)>0);if(o.length===0){e.output(0,a);return}let s=e.deviceLimits.maxStorageBuffersPerShaderStage-1,c=0;for(let t=0;t<o.length;t+=s){let r=o.slice(t,t+s);e.compute(Ba(r,i,a,n[0].dataType,c),{inputs:r,outputs:[0]}),c+=r.reduce((e,t)=>e+t.dims[i],0)}},Ha=e=>V({axis:e.axis})}),Wa,Ga,Ka,qa,Ja=w(()=>{L(),B(),Wa=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},Ga=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},Ka=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},qa=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}if(t===`Clip`){let[n,r]=e?.activation_params||[fn,pn];return{activation:t,clipMax:r,clipMin:n}}if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ya,Xa,Za=w(()=>{Ya=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},Xa=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Qa,$a=w(()=>{Qa=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),eo,to,no=w(()=>{L(),B(),K(),Ja(),eo=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${U(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,U(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},to=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=Yn(l),f=Yn(u),p=Yn(c),m=z.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[z.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return Ga(t,v),v.push(...H(g,o,s)),h&&v.push(...H(e[2].dims)),v.push(...H(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=tr(`batch_dims`,e[0].dataType,g.length),c=W(`a`,e[0].dataType,o.length,f),l=W(`b`,e[1].dataType,s.length,d),u=G(`output`,e[0].dataType,_.length,d),m=qn(u.type.tensor),v=Wa(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(W(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];Ka(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${eo(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${eo(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),ro,io,ao,oo,so,co,lo,uo,fo=w(()=>{L(),B(),K(),Ja(),no(),Za(),ro=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,io=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,ao=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if((!i||f!==4||e[1]!==4)&&(i||f!==3&&f!==4)||u%t[0]!==0||a%t[1]!==0||e[0]!==4)throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ro(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${io(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},oo=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,so=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,co=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(f%t[1]!==0||d%t[0]!==0||a%t[1]!==0)throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${oo(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${oo(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${so(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},lo=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=qn(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ya(e,l)} {
      var value = ${Ya(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${eo(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ya(e,l)} {
      var value = ${Ya(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${eo(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ya(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${Ya(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},uo=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=z.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],C=S.length,w=[d,f,m/y],T=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];Ga(t,T),T.push(...H(u,b,S));let E=[`rank`,`rank`],D=e.length>2;return D&&(T.push(...H(e[2].dims)),E.push(`rank`)),T.push(...H(w)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:T}),getShaderSource:n=>{let r=u.length,a=tr(`batchDims`,e[0].dataType,r,1),o=qn(e[0].dataType),s=W(`a`,e[0].dataType,x,y),c=W(`b`,e[1].dataType,C,y),l=G(`result`,e[0].dataType,w.length,y),d=[s,c];if(D){let t=i?y:1;d.push(W(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];Ka(t,f);let p=qn(l.type.tensor),m=Wa(t,l.type.value,p),v=lo(y,D,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?ao(g,_,o,a):co(g,_,o,a)}
                   `}}}}),po,mo,ho=w(()=>{L(),sn(),K(),Ja(),Za(),$a(),fo(),po=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Ya(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Ya(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Ya(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Ya(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Ya(s,l)}(0.0);`,x=Ya(c,l),S=Ya(e?o:s,l),C=Ya(e?s:o,l),w=Wa(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${Xa(i)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},mo=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];R(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],C=v[0]*y[0],w=Math.max(v[0]*x,v[1]),T=r%S===0,E=i%C===0,D=a%w===0,O=h?[x,4,4]:[1,1,1],k=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ga(t,k),k.push(...H(e[0].dims,e[1].dims));let A=[`rank`,`rank`];return o&&(k.push(...H(e[2].dims)),A.push(`rank`)),k.push(...H(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${T};${E};${D};${S};${C};${w}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:k}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];Ka(t,i);let a=h?4:1,c=qn(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[W(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),W(`w`,e[1].dataType,e[1].dims.length,a)],f=G(`result`,e[0].dataType,n.length,a);if(o){let t=W(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Qa(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${po(l,T,E,D,o,t,O[0],O[1],O[2],c)}
        ${h?ao(y,v,c,void 0,!l,w):co(y,v,c,void 0,!l,w,!1,void 0,s)}`}}}}),go,_o,vo,yo,bo,xo,So,Co,wo=w(()=>{L(),sn(),B(),K(),Ja(),Za(),go=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},_o=e=>typeof e==`number`?[e,e,e]:e,vo=(e,t)=>t<=1?e:e+(e-1)*(t-1),yo=(e,t,n,r=1)=>{let i=vo(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},bo=(e,t,n,r,i)=>{i??=yo(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},xo=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=bo([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=bo([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},So=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=_o(n),[y,b,x]=_o(r),S=vo(p,y),C=vo(m,b),w=vo(h,x),{padInfo:T,outDepth:E,outHeight:D,outWidth:O}=xo(i,c,l,u,g,_,v,S,C,w),k=a?f*d:f,A=[0,0,0,0,0];return o===`channelsFirst`?A=[s,k,E,D,O]:o===`channelsLast`&&(A=[s,E,D,O,k]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:E,outHeight:D,outWidth:O,outChannels:k,padInfo:T,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:A,filterShape:t}},Co=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(go(c.x.map(e=>n[e]))/s[0]),1,1];R(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:z.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ga(t,u),u.push(...H(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...H(e[2].dims)),d.push(`rank`)),u.push(...H(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];Ka(t,s);let c=qn(e[0].dataType),l=W(`x`,e[0].dataType,e[0].dims.length,1),u=W(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=G(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=W(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?U(`coords`,4,5):U(`coords`,1,5)}];
        }`}let h=Ya(1,c),g=Wa(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${c} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${c} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${U(`coords`,0,l.rank)};
              let d2 = ${o?U(`coords`,l.rank-1,l.rank):U(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?U(`coords`,1,l.rank):U(`coords`,2,l.rank)},
              ${o?U(`coords`,2,l.rank):U(`coords`,3,l.rank)},
              ${o?U(`coords`,3,l.rank):U(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?U(`uniforms.x_shape`,1,l.rank):U(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?U(`uniforms.x_shape`,2,l.rank):U(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?U(`uniforms.x_shape`,3,l.rank):U(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?U(`uniforms.x_shape`,4,l.rank):U(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${c}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<${c}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${c}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${c}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<${c}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${c}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${c}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<${c}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${c}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${c}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = ${c}(value);
          }`}}}}),To,Eo,Do=w(()=>{L(),B(),K(),Ja(),To=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?Yn(l):1,f=z.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];Ga(t,p),p.push(...H(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...H([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=G(`output`,e[0].dataType,n.length,d),u=qn(l.type.tensor),f=Wa(t,l.type.value,u),p=W(`x`,e[0].dataType,o.length),m=W(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];Ka(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},Eo=(e,t,n,r)=>{let i=e.length>2,a=Yn(n[3]),o=Yn(n[2]),s=z.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ga(t,d),d.push(...H(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=G(`output`,e[0].dataType,u.length,a),s=qn(r.type.tensor),d=Wa(t,r.type.value,s),p=W(`x`,e[0].dataType,c.length,a),m=W(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return Ka(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo=w(()=>{B(),ho(),wo(),fo(),Do(),Ja(),no(),pr(),Oo=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},ko=[2,3,1,0],Ao=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},jo=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();un.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Mo=e=>{let t=qa(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},No=(e,t,n,r)=>{let i=n.format===`NHWC`,a=Oo(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(ur(t[1],ko),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Eo(o,n,a,r),{inputs:o}):e.compute(To(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(ur(t[1],ko),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(to(v,n,a,_,i,r),{inputs:v}):e.compute(uo(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(ur(t[1],ko),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(mo(_,n,a,v,y,b,o,!0,r),{inputs:_})},Po=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=jo({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);No(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Fo=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=jo(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=So(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(Co(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},Io=(e,t)=>{if(Ao(e.inputs,t),e.inputs[0].dims.length===3)Po(e,t);else if(e.inputs[0].dims.length===5)Fo(e,e.inputs,t);else{let n=jo(t,e.inputs);No(e,e.inputs,n)}}}),Ro,zo=w(()=>{L(),sn(),B(),K(),Ro=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?Yn(c):1,d=a&&l===1&&c>=4,f=d?Math.floor(c/4)*4:Math.floor(c/u)*u,p=c-f,m=a?Yn(l):1,h=a?l===1?u:m:1,g=z.size(i)/m,_=[Math.ceil(g/64),1,1];R(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let v=[`rank`,`rank`],y=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],x=[t.dilations[0],t.dilations[1]],S=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x},{type:12,data:S},{type:6,data:C},{type:12,data:f},{type:12,data:c},{type:12,data:l},...H(e[0].dims,e[1].dims)];return r&&(w.push(...H(e[2].dims)),v.push(`rank`)),w.push(...H(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${h}${m}${d}${p}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:y.length},{name:`filter_dims`,type:`u32`,length:b.length},{name:`dilations`,type:`u32`,length:b.length},{name:`effective_filter_dims`,type:`u32`,length:S.length},{name:`pads`,type:`i32`,length:C.length},{name:`input_channels_per_group_int`,type:`u32`},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=qn(e[0].dataType),s=a?1:2,c=a?2:3,l=a?3:1,f=W(`W`,e[1].dataType,e[1].dims.length,h),g=W(`Dy`,e[0].dataType,e[0].dims.length,u),_=[g,f];r&&_.push(W(`bias`,e[2].dataType,[i[l]].length,m));let v=G(`result`,e[0].dataType,i.length,m),x=`
            let outputIndices = ${v.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${v.indicesGet(`outputIndices`,0)};
            let d1 = ${v.indicesGet(`outputIndices`,l)};
            let r = ${v.indicesGet(`outputIndices`,s)};
            let c = ${v.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${v.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u};
                var w_offset = ${f.indicesToOffset(`${f.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${h};
                  `:``}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:u}) {
                  ${(()=>{let e=``;if(d)u===4?e+=`
        let xValue = ${g.getByOffset(`x_offset`)};
        let wValue = ${f.getByOffset(`w_offset`)};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:u===2?e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}));
          x_offset += 2u;
          w_offset += 2u;`:u===1&&(e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}, ${g.getByOffset(`x_offset + 2u`)}, ${g.getByOffset(`x_offset + 3u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}, ${f.getByOffset(`w_offset + 2u`)}, ${f.getByOffset(`w_offset + 3u`)}));
          x_offset += 4u;
          w_offset += 4u;`);else if(e+=`
                  let xValue = ${a?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):g.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
        `,u===1)e+=`
          let w_offset = ${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${f.getByOffset(`w_offset / ${h}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${f.getByOffset(`${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${d?4:u};
                }
                ${(()=>{if(p===0)return``;if(!d)throw Error(`packInputAs4 ${d} is not true.`);let e=``;if(u===1){e+=`dotProd = dotProd`;for(let t=0;t<p;t++)e+=`
            + ${g.getByOffset(`x_offset + ${t}`)} * ${f.getByOffset(`w_offset + ${t}`)}`;e+=`;`}else if(u===2){if(p!==2)throw Error(`Invalid inputChannelsRemainder ${p}.`);e+=`
          let xValue = ${g.getByOffset(`x_offset`)};
          let wValue = ${f.getByOffset(`w_offset`)};
          dotProd = dotProd + dot(xValue, wValue);`}return e})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:``};
            ${v.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(..._,v)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${x}}`}}}}),Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo=w(()=>{zo(),Ja(),pr(),Bo=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Vo=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},Ho=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=Bo(s,o[i],a[i],t[f],n[i],p);Vo(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},Uo=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}Ho(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},Wo=e=>{let t=qa(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Go=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},Ko=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ur(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Ro(a,n,r),{inputs:a})},qo=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=Uo({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);Ko(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Jo=(e,t)=>{if(Go(e.inputs,t),e.inputs[0].dims.length===3)qo(e,t);else{let n=Uo(t,e.inputs);Ko(e,e.inputs,n)}}}),Xo,Zo,Qo,$o=w(()=>{L(),B(),Wn(),K(),Xo=(e,t,n,r)=>{let i=z.size(t),a=t.length,o=W(`input`,e,a),s=G(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=z.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...H(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=U(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Zo=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Xo(r,n,i,t),{inputs:[0]})},Qo=e=>{let t=e.exclusive===1,n=e.reverse===1;return V({exclusive:t,reverse:n})}}),es,ts,ns,rs,is,as=w(()=>{L(),B(),Wn(),K(),es=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},ts=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},ns=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=W(`a`,p,f),h=G(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=z.size(t),u=d.dims,f=z.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...H(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${ts(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},rs=(e,t)=>{es(e.inputs),e.compute(ns(e.inputs[0],t))},is=e=>V({blocksize:e.blocksize,mode:e.mode,format:e.format})}),os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs=w(()=>{L(),B(),Wn(),K(),os=256,ss=512,cs=2*Math.PI,ls=e=>{let t=[],n=e;for(let e of[4,2,3,5])for(;n%e===0;)t.push(e),n/=e;return n===1?t:void 0},us=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},ds=(e,t,n,r,i)=>{let a=n/e,o=ss-r,s=e=>`smem[${o}u + base + ${e*t}u]`,c=`  for (var t = local_idx; t < ${a}u; t += ${os}u) {
`;c+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,c+=`    var leg: array<vec2<f32>, 5>;
`;for(let n=0;n<e;n++){let o=`${r}u + t + ${n*a}u`;if(n===0)c+=`    leg[0] = smem[${o}];
`;else{let r=i*cs*n/(e*t);c+=`    { let a = ${us(r)} * angleUnit; leg[${n}] = cmul(smem[${o}], vec2<f32>(cos(a), sin(a))); }
`}}if(c+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)c+=`    ${s(0)} = leg[0] + leg[1];
    ${s(1)} = leg[0] - leg[1];
`;else if(e===4){let e=i<0?`vec2<f32>(oddDiff.y, -oddDiff.x)`:`vec2<f32>(-oddDiff.y, oddDiff.x)`;c+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,c+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,c+=`    let oddRot = ${e};
`,c+=`    ${s(0)} = evenSum + oddSum;
    ${s(1)} = evenDiff + oddRot;
`,c+=`    ${s(2)} = evenSum - oddSum;
    ${s(3)} = evenDiff - oddRot;
`}else for(let t=0;t<e;t++){let n=[`leg[0]`];for(let r=1;r<e;r++){let a=i*cs*(r*t)/e,o=us(Math.cos(a)),s=us(Math.sin(a));n.push(`vec2<f32>(leg[${r}].x*${o} - leg[${r}].y*${s}, leg[${r}].x*${s} + leg[${r}].y*${o})`)}c+=`    ${s(t)} = ${n.join(` + `)};
`}return`${c}  }
  workgroupBarrier();
`},fs=(e,t,n)=>{let r=``,i=1,a=0;for(let o of e)r+=ds(o,i,t,a,n),i*=o,a=ss-a;return{code:r,resultOffset:a}},ps=(e,t,n,r,i)=>{let a=e.dims,o=a.length,s=a[o-1],c=a[t],l=n&&r?(c-1)*2:c;i!==void 0&&(l=i);let u=n&&r?1:2,d=r&&!n?Math.floor(l/2)+1:l,f=a.slice();f[t]=d,f[o-1]=u;let p=1;for(let e=t+1;e<o-1;e++)p*=a[e];let m=z.size(a)/s/c;return{dataType:e.dataType,outputDims:f,length:l,signalLength:c,inner:p,batch:m,inputComponents:s,outputComponents:u,outputLength:d,inverse:n,onesided:r}},ms=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(`;`),hs=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],gs=(e,t,n)=>e.registerUniform(`batch`,`u32`).registerUniform(`signalLength`,`u32`).registerUniform(`inner`,`u32`).registerUniform(`outputLength`,`u32`).declareVariables(t,n),_s=e=>{let{dataType:t,length:n,inputComponents:r,outputComponents:i,inverse:a,onesided:o}=e,s=Jn(t),c=a?1:-1,l=a?1/n:1,u=ls(n);return{name:`DFT`,shaderCache:{hint:ms(e,`fft`),inputDependencies:[`type`]},getShaderSource:e=>{let d=W(`x`,t,[1]),f=G(`y`,t,[1]),p=e=>{let t=`inBase + (${e}) * uniforms.inner * ${r}u`;return`vec2<f32>(${`f32(${d.getByOffset(t)})`}, ${r===2?`f32(${d.getByOffset(`${t} + 1u`)})`:`0.0`})`},m;if(a&&o){let e=Math.floor(n/2)+1,t=n%2==0?`select(provided, provided - 1u, provided == ${e}u)`:`provided`;m=`
    let provided = min(uniforms.signalLength, ${e}u);
    for (var i = local_idx; i < ${n}u; i += ${os}u) {
      if (i < provided) { smem[i] = ${p(`i`)}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${t}; k += ${os}u) {
      let h = smem[k];
      smem[${n}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else m=`
    let loadCount = min(uniforms.signalLength, ${n}u);
    for (var i = local_idx; i < ${n}u; i += ${os}u) {
      if (i < loadCount) { smem[i] = ${p(`i`)}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:h,resultOffset:g}=fs(u,n,c),_=l===1?`smem[${g}u + i]`:`smem[${g}u + i] * ${us(l)}`,v=i===2?f.setByOffset(`off + 1u`,`${s}(v.y)`):``;return`
  ${gs(e,d,f)}
  var<workgroup> smem: array<vec2<f32>, ${2*ss}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${e.mainStart(os)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    ${m}
${h}    for (var i = local_idx; i < uniforms.outputLength; i += ${os}u) {
      let v = ${_};
      let off = outBase + i * uniforms.inner * ${i}u;
      ${f.setByOffset(`off`,`${s}(v.x)`)}
      ${v}
    }
  }`},getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:hs(e),dispatchGroup:{x:e.batch}})}},vs=e=>{let{dataType:t,length:n,inputComponents:r,outputComponents:i,inverse:a,onesided:o}=e,s=Jn(t),c=a?1:-1,l=a?1/n:1;return{name:`DFT`,shaderCache:{hint:ms(e,`direct`),inputDependencies:[`type`]},getShaderSource:e=>{let u=W(`x`,t,[1]),d=G(`y`,t,[1]),f=e=>{let t=`inBase + (${e}) * uniforms.inner * ${r}u`;return`vec2<f32>(${`f32(${u.getByOffset(t)})`}, ${r===2?`f32(${u.getByOffset(`${t} + 1u`)})`:`0.0`})`},p=a&&o?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(n/2)+1}u);
    if (k < provided) { return ${f(`k`)}; }
    let m = ${n}u - k;
    if (m < provided) {
      let h = ${f(`m`)};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${f(`n`)}; }
    return vec2<f32>(0.0, 0.0);
  }`,m=`
      let angle = ${us(c*cs)} * f32(knMod) / ${us(n)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${n}u) { knMod -= ${n}u; }`,h=i===2?d.setByOffset(`off + 1u`,`${s}(v.y)`):``,g=l===1?`acc`:`acc * ${us(l)}`;return`
  ${gs(e,u,d)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${p}
  ${e.mainStart(os)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${os}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${n}u; n++) {${m}
      }
      let v = ${g};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${d.setByOffset(`off`,`${s}(v.x)`)}
      ${h}
    }
  }`},getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:hs(e),dispatchGroup:{x:e.batch}})}},ys=e=>{if(!e||e.dataType===0)return;if(z.size(e.dims)!==1)throw Error(`DFT optional scalar inputs must have exactly 1 element.`);if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw Error(`DFT optional scalar inputs are out of JavaScript safe integer range.`);return t},bs=e=>{if(!e||e.length<1)throw Error(`DFT requires at least 1 input.`);let t=e[0].dims;if(t.length<2)throw Error(`DFT input must have at least 2 dimensions.`);let n=t[t.length-1];if(n!==1&&n!==2)throw Error(`DFT input's innermost dimension must be 1 (real) or 2 (complex).`)},xs=(e,t)=>{bs(e.inputs);let n=e.inputs[0],r=n.dims.length,i=t.inverse!==0,a=t.onesided!==0,o=ys(e.inputs[1]);if(o!==void 0&&o<=0)throw Error(`dft_length must be greater than zero.`);let s=z.normalizeAxis(ys(e.inputs[2])??t.axis,r);if(s===r-1)throw Error(`DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.`);if(i&&a&&n.dims[r-1]!==2)throw Error(`Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).`);let c=ps(n,s,i,a,o);if(c.length<=0)throw Error(`Invalid DFT length: ${c.length}`);let l=c.length<=ss&&ls(c.length)!==void 0?_s(c):vs(c);e.compute(l,{inputs:[0]})},Ss=e=>V({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs=w(()=>{L(),B(),Wn(),K(),ws=`[a-zA-Z]|\\.\\.\\.`,Ts=`(`+ws+`)+`,Es=`^`+Ts+`$`,Ds=`(`+Ts+`,)*`+Ts,Os=`^`+Ds+`$`,ks=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},As=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(Os)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(Es)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Ts)))throw Error(`Invalid RHS`);r.match(RegExp(ws,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Es))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(ws,`g`)),l=new ks(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},js=e=>e+`_max`,Ms=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>W(`input${n}`,t,e)),a=z.size(r),o=G(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...H(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...H(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${js(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${js(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Ns=(e,t)=>{let n=new As(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Ms(i,e.inputs[0].dataType,n,r))},Ps=e=>{let t=e.equation.replace(/\s+/g,``);return V({equation:t})}}),Is,Ls,Rs,zs,Bs,Vs=w(()=>{L(),B(),K(),Is=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},Ls=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Rs=(e,t)=>e.length>t.length?Ls(e,t):Ls(t,e),zs=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Rs(t,n),i=e[0].dataType,a=i===9||z.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(z.size(r)/s),l=e=>{let n=W(`input`,i,t.length,o),a=G(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...H(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},Bs=e=>{Is(e.inputs),e.compute(zs(e.inputs),{inputs:[0]})}}),Hs,Us,Ws=w(()=>{L(),B(),K(),ba(),Hs=e=>{let t=e[0].dataType,n=z.size(e[0].dims),r=z.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=W(`x`,t,[1],4),r=W(`bias`,t,[1],4),a=G(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${fa(Jn(t))}

    ${e.mainStart(Gn)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,pa(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Gn/4)}})}},Us=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?ma(e):e.compute(Hs(e.inputs))}}),Gs,Ks,qs,Js,Ys=w(()=>{L(),B(),Wn(),K(),Gs=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},Ks=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=z.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(z.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...H(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=W(`data`,e[0].dataType,e[0].dims.length,c),s=W(`inputIndices`,e[1].dataType,e[1].dims.length),l=G(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},qs=e=>V({axis:e.axis}),Js=(e,t)=>{let n=e.inputs;Gs(n),e.compute(Ks(e.inputs,t))}}),Xs,Zs,Qs,$s=w(()=>{L(),B(),K(),Xs=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...H(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[W(`indices_data`,t.dataType,t.dims.length),G(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},Zs=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=z.sizeToDimension(a,a.length-1),c=z.sizeFromDimension(r,t.batchDims+o),l=z.sizeToDimension(r,t.batchDims),u=z.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=Xs(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=z.size(g),v=[{type:12,data:_},{type:12,data:c},...H(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=W(`data`,n[0].dataType,n[0].dims.length),r=W(`slice_offsets`,12,m.dims.length),i=G(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},Qs=e=>({batchDims:e.batch_dims,cacheKey:``})}),ec,tc,nc,rc,ic=w(()=>{L(),B(),Wn(),K(),ec=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},tc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=z.normalizeAxis(t.gatherAxis,i),o=z.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=z.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...H(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=W(`data`,e[0].dataType,e[0].dims.length),o=W(`inputIndices`,e[1].dataType,e[1].dims.length),c=W(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?W(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=G(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${Jn(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},nc=(e,t)=>{let n=e.inputs;ec(n,t),e.compute(tc(e.inputs,t))},rc=e=>V({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ac,oc,sc,cc,lc=w(()=>{L(),B(),Wn(),K(),ac=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},oc=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=z.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=z.size(l),d=W(`input`,r,i),f=W(`indicesInput`,o,a.length),p=G(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...H(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},sc=e=>V({axis:e.axis}),cc=(e,t)=>{let n=e.inputs;ac(n),e.compute(oc(e.inputs,t))}}),uc,dc,fc,Z,pc=w(()=>{L(),B(),K(),uc=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},dc=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=dn.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);z.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...H(e[2].dims)),d.push(`rank`)),u.push(...H(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=W(`a`,e[0].dataType,e[0].dims),i=W(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=W(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=G(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},fc=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),Z=(e,t)=>{uc(e.inputs),e.compute(dc(e.inputs,t))}}),mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc=w(()=>{L(),B(),Wn(),K(),[mc,hc,gc,_c]=[0,1,2,3],vc=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},yc=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,bc=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,xc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Sc=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,Cc=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${mc}] = batch;
     indices[${hc}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${gc}] = u32(r);
            indices[${_c}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case`border`:return`
          indices[${gc}] = u32(clamp(r, 0, H - 1));
          indices[${_c}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${gc}] = gs_reflect(r, border[1], border[3]);
          indices[${_c}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,wc=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${mc}], indices[${hc}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${mc}], indices[${hc}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${mc}], indices[${hc}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${mc}], indices[${hc}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${mc}], indices[${hc}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${mc}], indices[${hc}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,Tc=(e,t)=>{let n=W(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=W(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[mc,hc,gc,_c]=[0,3,1,2]);let o=G(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:z.size(a)},...H(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${yc}
  ${bc(s)}
  ${xc(t)}
  ${Sc(t)}
  ${Cc(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${gc}]);
      let W_in = i32(uniforms.x_shape[${_c}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${mc}], indices[${gc}], indices[${_c}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${wc(o,s,t)}
  }`}},Ec=(e,t)=>{vc(e.inputs),e.compute(Tc(e.inputs,t))},Dc=e=>V({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),kc,Ac,jc,Mc,Nc,Pc,Fc,Ic=w(()=>{L(),B(),Wn(),Mn(),yi(),K(),pr(),kc=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ac=(e,t)=>{let n=e[0],r=kc(e,1),i=kc(e,2),a=kc(e,3),o=kc(e,4),s=kc(e,5),c=kc(e,6),l=kc(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&z.size(c.dims)&&z.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&z.size(c.dims)||l&&z.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&z.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&z.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&z.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&z.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&z.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&z.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},jc=e=>V({...e}),Mc=V({perm:[0,2,1,3]}),Nc=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=z.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=G(`qkv_with_bias`,t.dataType,s),i=W(`qkv`,t.dataType,s),a=W(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},Pc=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&z.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=Nc(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(ur(c,Mc.perm),{inputs:[c],outputs:[-1]})[0]}return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(ur(c,Mc.perm),{inputs:[c],outputs:[-1]})[0]},Fc=(e,t)=>{let n=Ac(e.inputs,t),r=e.inputs[0],i=kc(e.inputs,1),a=kc(e.inputs,2),o=kc(e.inputs,3),s=kc(e.inputs,4),c=kc(e.inputs,5),l=kc(e.inputs,6),u=kc(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=Pc(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return gi(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=Pc(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=Pc(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);gi(e,f,p,m,s,void 0,l,u,c,n)}}),Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc=w(()=>{L(),B(),Wn(),K(),Lc=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},Rc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),V({numOutputs:r,axis:t.axis,splitSizes:n})},zc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${U(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Bc=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Vc=(e,t)=>{let n=e[0].dims,r=z.size(n),i=e[0].dataType,a=z.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=W(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=G(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...H(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${zc(c.length)}
  ${Bc(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${U(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Hc=(e,t)=>{Lc(e.inputs);let n=e.inputs.length===1?t:Rc(e.inputs,t);e.compute(Vc(e.inputs,n),{inputs:[0]})},Uc=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes length must be equal`);return V({axis:t,numOutputs:r,splitSizes:n})}}),Gc,Kc,qc,Jc=w(()=>{L(),B(),Wn(),K(),Gc=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!z.areEqual(r.dims,[])&&!z.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!z.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=z.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`);if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Kc=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=z.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=z.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...H(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:V({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=W(`input`,e[0].dataType,e[0].dims.length),i=W(`position_ids`,e[1].dataType,e[1].dims.length),a=W(`cos_cache`,e[2].dataType,e[2].dims.length),o=W(`sin_cache`,e[3].dataType,e[3].dims.length),s=G(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(Gn)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,G(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(f)/Gn)},programUniforms:m})}},qc=(e,t)=>{Gc(e.inputs,t),e.compute(Kc(e.inputs,t))}}),Yc,Xc,Zc,Qc,$c,el=w(()=>{Wn(),L(),yi(),Ic(),Wc(),pr(),Jc(),K(),Yc=(e,t)=>{if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw Error(`cos_cast and sin_cache are expected if do_rotary attribute is non-zero`);if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y){if(y.dims.length===0)throw Error(`seqlens_k must be at least 1D, got scalar.`);let e=y.dims.reduce((e,t)=>e*t,1);if(e!==s)throw Error(`seqlens_k must have batch_size (${s}) elements, got ${e}.`);for(let e=0;e<y.dims.length;e++)if(y.dims[e]!==1&&y.dims[e]!==s)throw Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${s}), got dims[${e}] = ${y.dims[e]}.`)}return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},Xc=V({perm:[0,2,1,3]}),Zc=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ur(r,Xc.perm),{inputs:[r],outputs:[-1]})[0]),r},Qc=(e,t,n,r)=>{let i=[`type`,`type`],a=[e*t],o=e*t,s=[{type:12,data:o},{type:12,data:t},{type:12,data:e}];return{name:`GeneratePositionIds`,shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s}),getShaderSource:e=>{let t=W(`seq_lens`,n.dataType,n.dims),i=W(`total_seq_lens`,r.dataType,r.dims),o=G(`pos_ids`,7,a);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`batch_size`,type:`u32`}]).declareVariables(t,i,o)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let total_sequence_length = u32(${i.getByOffset(`0`)});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${t.getByOffset(`batch_idx`)};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (global_idx < uniforms.batch_size) {
      ${o.setByOffset(`global_idx`,`seqlen`)}
    };
  }
  `}}},$c=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw Error(`GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.`);let n=Yc(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=V({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(Vc([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h,g;if(t.doRotary){let r=e.compute(Qc(n.batchSize,n.sequenceLength,c,l),{inputs:[c,l],outputs:[-1]})[0],i=e.inputs[7],a=e.inputs[8],o=V({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),s=[f,r,i,a],u=[-1];h=e.compute(Kc(s,o),{inputs:s,outputs:u})[0],s.splice(0,1,p);let d=V({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});g=e.compute(Kc(s,d),{inputs:s,outputs:u})[0]}let _=Pc(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?h:f,void 0,0),v=Zc(e,t.doRotary?g:p,n),y=Zc(e,m,n);gi(e,_,v,y,void 0,void 0,o,s,void 0,n,c,l)}}),tl,nl,rl,il,al=w(()=>{L(),B(),pr(),K(),tl=(e,t,n,r,i,a,o,s)=>{let c=Yn(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...H(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=W(`x`,t.dataType,3,c),a=[i,W(`scale`,n.dataType,n.dims),W(`bias`,r.dataType,r.dims),G(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Qn(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${Qn(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},nl=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=z.sizeFromDimension(r,2),c=Yn(s),l=z.size(i)/c,u=tl(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...H(d,f,d)]}),getShaderSource:e=>{let n=W(`x`,t[0].dataType,d.length,c),r=W(`scale_shift`,1,f.length,2),i=G(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},rl=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=z.sizeFromDimension(r,1)/o,c=Yn(o),l=z.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(ur(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=tl(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=qn(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=W(`input`,t[0].dataType,t[0].dims,c),s=G(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},il=(e,t)=>{t.format===`NHWC`?rl(e,e.inputs,t):nl(e,e.inputs,t)}}),ol,sl,cl,ll=w(()=>{L(),B(),K(),ol=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},sl=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=z.normalizeAxis(t.axis,i.length),l=z.sizeToDimension(i,c),u=z.sizeFromDimension(i,c),d=z.size(a.dims),f=o?z.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=Yn(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=qn(e[0].dataType),i=[W(`x`,e[0].dataType,e[0].dims,m),W(`scale`,a.dataType,a.dims,m)];return o&&i.push(W(`bias`,o.dataType,o.dims,m)),i.push(G(`output`,e[0].dataType,s,m)),_&&i.push(G(`mean_data_output`,1,p)),v&&i.push(G(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Xn(`f32`,m)};
    var mean_square_vector = ${Xn(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Zn(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Qn(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Qn(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Zn(n,m,`x[j + offset]`)};
      let f32scale = ${Zn(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${Zn(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},cl=(e,t)=>{ol(e.inputs),e.compute(sl(e.inputs,t,e.outputCount))}}),ul,dl,fl=w(()=>{B(),no(),fo(),ul=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},dl=e=>{ul(e.inputs);let t=ln.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(to(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=z.size(e.inputs[0].dims.slice(0,-2)),o=z.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(uo(c,{activation:``},t,s),{inputs:c})}else e.compute(uo(e.inputs,{activation:``},t))}}}),pl,ml,hl,gl,_l,vl=w(()=>{L(),B(),Wn(),K(),pl=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!z.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(z.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(z.size(n)!==r)throw Error(`zeroPoints input size error.`)}},ml=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=z.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Yn(t.k),f=Yn(l),p=Yn(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=z.size(m)/p/h,_=[],v=[c,i,a/d],y=z.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...H(v)),_.push(...H(y)),_.push(...H(e[2].dims)),e.length===4&&_.push(...H(z.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...H(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,y.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=G(`output`,e[0].dataType,u,p),g=qn(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=Math.floor(32/t.bits),S=Math.floor(x/8),C=()=>{let e=``;for(let n=0;n<S;n++){let r=n*t.bits*4,a=r+t.bits;e+=`
          // reuse a data (pass ${n})
            var input_offset${n>0?n:``} = ${n===0?i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`):`input_offset`};
            var a_data${n>0?n:``}: ${_};
            for (var j${n>0?n:``}: u32 = 0; j${n>0?n:``} < ${8/d}; j${n>0?n:``}++) {
              a_data${n>0?n:``}[j${n>0?n:``}] = ${i.getByOffset(`input_offset${n>0?n:``}`)};
              input_offset${n>0?n:``}++;
            }
          `;for(let i=0;i<p*h;i++)e+=`
            b_value = ${f===1?`b${i}_data`:`b${i}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${n*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${r}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${a}u) & b_mask);`}
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,t)=>`(b_quantized_values[${t}] - ${c?`zero_point${i}`:`zero_point`}) * scale${i}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${i}`:`zero_point`}`).join(`,`)})) * scale${i};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(i/p)}]${p>1?`[${i%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data${n>0?n:``}[${t}] * b_dequantized_values[${t}]`:`dot(a_data${n>0?n:``}[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `}return e},w=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${g}(${(2**(t.bits-1)).toFixed(1)});`}
            `;for(let n=0;n<p*h;n++)e+=`
            let scale${n} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${n} = ${g}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:``}
            col_index += 1;`;return e},T=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?`0x03030303u`:`0x0F0F0F0Fu`};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${w()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${T()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${C()}
                word_offset += ${x/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},hl=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=z.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Yn(t.k),f=Yn(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=Math.floor(32/t.bits),_=h*f*g,v=_/d,y=_/t.blockSize,b=z.size(p)/m,x=[],S=[c,i,a/d],C=z.convertShape(e[1].dims).slice();C.splice(-1,1,l/f),x.push(...H(S)),x.push(...H(C)),x.push(...H(e[2].dims)),e.length===4&&x.push(...H(z.convertShape(e[3].dims)));let w=[c,i,o];return x.push(...H(w)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:n=>{let r=S.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,C.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=w.length,u=G(`output`,e[0].dataType,l),p=qn(e[0].dataType),_=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${y} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${y} + local_id.x;
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${p}(${(2**(t.bits-1)).toFixed(1)});`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              ${(()=>{let e=Math.floor(g/8),n=``;for(let r=0;r<e;r++){let e=r*t.bits*4,i=e+t.bits;n+=`
              ${_()}
              {${t.bits===2?`
                let half_word = b_value >> ${r*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${i}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
                let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              }
              word_offset += ${8/d};`}return n})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},gl=(e,t)=>{pl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(hl(e.inputs,t)):e.compute(ml(e.inputs,t))},_l=e=>V(e)}),yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol=w(()=>{L(),B(),K(),yl=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},bl=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${U(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},xl=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${U(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Sl=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k = i32(${U(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Cl=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${U(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${U(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},wl=(e,t,n)=>{switch(n.mode){case 0:return bl(e,t,n.pads.length);case 1:return xl(e,t,n.pads.length);case 2:return Sl(e,t,n.pads.length);case 3:return Cl(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},Tl=(e,t)=>{let n=z.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:z.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...H(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=G(`output`,e[0].dataType,n.length),s=W(`x`,e[0].dataType,r.length),c=s.type.value,l=wl(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},El=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}return t},Dl=(e,t)=>{yl(e.inputs);let n=El(e.inputs,t);e.compute(Tl(e.inputs,n),{inputs:[0]})}}),kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl=w(()=>{N(),L(),B(),K(),kl=e=>{if(le.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},Al=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();un.adjustPoolAttributes(n,i,o,s,c,l);let u=un.computePoolOutputShape(n,i,s,c,o,l,t.autoPad,t.ceilMode),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},jl=(e,t)=>{let n=t.format===`NHWC`,r=z.size(e),i=z.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=z.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Ml=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=G(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${U(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${U(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${U(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${U(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Nl=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Pl=e=>`${Nl(e)};${e.countIncludePad}`,Fl=e=>`${Nl(e)};${e.storageOrder};${e.dilations}`,Il=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ll=(e,t,n,r)=>{let[i,a]=Al(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=jl(a,i);return l.push(...H(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(a)/64)},programUniforms:l}),getShaderSource:e=>Ml(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},Rl=e=>{let t=e.count_include_pad!==0,n=Il(e);if(n.ceilMode!==0)throw Error(`ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Pl(r)}},zl=(e,t)=>{kl(e.inputs),e.compute(Ll(`AveragePool`,e.inputs[0],!1,t))},Bl={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Vl=e=>{let t=e.format;return{format:t,...Bl,cacheKey:t}},Hl=(e,t)=>{kl(e.inputs),e.compute(Ll(`GlobalAveragePool`,e.inputs[0],!0,t))},Ul=(e,t,n,r)=>{let[i,a]=Al(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=jl(a,i);return c.push(...H(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(a)/64)},programUniforms:c}),getShaderSource:e=>Ml(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},Wl=(e,t)=>{kl(e.inputs),e.compute(Ul(`MaxPool`,e.inputs[0],!1,t))},Gl=e=>{let t=e.storage_order,n=e.dilations,r=Il(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:Fl(i)}},Kl=e=>{let t=e.format;return{format:t,...Bl,cacheKey:t}},ql=(e,t)=>{kl(e.inputs),e.compute(Ul(`GlobalMaxPool`,e.inputs[0],!0,t))}}),Yl,Xl,Zl,Ql,$l=w(()=>{L(),B(),Wn(),K(),Yl=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},Xl=(e,t)=>{let n=z.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=z.size(a),c=r===3||r===2,l=c?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(z.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=Yn(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=W(`input`,c?12:r,l.length,v),b=W(`scale`,o,u.length),x=d?W(`zero_point`,c?12:r,f.length):void 0,S=G(`output`,o,a.length,_),C=[y,b];x&&C.push(x);let w=[l,u];d&&w.push(f);let T=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...H(...w,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...C,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:T})}},Zl=(e,t)=>{Yl(e.inputs,t),e.compute(Xl(e.inputs,t))},Ql=e=>V({axis:e.axis,blockSize:e.blockSize})}),eu,tu,nu,ru=w(()=>{N(),L(),K(),eu=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},tu=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...H(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=G(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},nu=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),le.webgpu.validateInputContent&&eu(t,n,r),e.compute(tu(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),iu,au,ou,su,cu=w(()=>{L(),B(),Wn(),K(),iu=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},au=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(z.sizeToDimension(r,r.length-1)/1),o=r[r.length-1],s=z.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...H(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let r=W(`indices`,e[1].dataType,e[1].dims.length),a=W(`updates`,e[2].dataType,e[2].dims.length,1),o=t.reduction!==`none`&&t.reduction!==``?er(`output`,e[0].dataType,i.length):G(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(r,a,o)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${iu(t.reduction,`output[data_offset + i]`,`value`,o.type.value)}
  }

      }`}}},ou=e=>V({reduction:e.reduction}),su=(e,t)=>{e.compute(au(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku=w(()=>{L(),B(),Wn(),K(),lu=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},uu=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},du=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);lu(r,t),t.axes.length>0&&uu(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},fu=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,pu=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${fu(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${fu(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,mu=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,hu=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},gu=(e,t,n,r)=>{let i=[];if(n.length>0){if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e))}else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},_u=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},vu=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${U(`uniforms.scales`,`i`,r)};
        var roi_low = ${U(`uniforms.roi`,`i`,i)};
        var roi_hi = ${U(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,yu=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${U(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${U(`uniforms.roi`,`i`,a)};
          var roi_hi = ${U(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,bu=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${U(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,xu=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,Su=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${xu(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Cu=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},wu=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${xu(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Tu=(e,t,n,r,i,a)=>{let o=e.dims,s=hu(a,t.axes,o.length),c=gu(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=_u(o,l,t)));let u=G(`output`,e.dataType,c.length),d=W(`input`,e.dataType,o.length),f=z.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${pu(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${bu(d,o)};
              ${mu(t.nearestMode,n,g)};
              ${yu(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${vu(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Su(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${wu(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${Cu(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...H(o,c)]})}},Eu=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Du=(e,t)=>{let n=[],r=[],i=[],a=Eu(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);du(e.inputs,t,a,n,r,i),e.compute(Tu(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Ou=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return V({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),Au,ju,Mu,Nu=w(()=>{L(),B(),K(),Au=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},ju=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=z.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=Yn(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[W(`x`,e[0].dataType,e[0].dims,g),W(`skip`,e[1].dataType,e[1].dims,g),W(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(W(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(W(`bias`,e[4].dataType,e[4].dims,g)),r.push(G(`output`,e[0].dataType,s,g)),p&&r.push(G(`mean_output`,1,u)),m&&r.push(G(`inv_std_output`,1,u)),h&&r.push(G(`input_skip_bias_sum`,e[0].dataType,s,g));let a=qn(e[0].dataType),o=qn(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${Zn(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Qn(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Qn(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Mu=(e,t)=>{Au(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(ju(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu=w(()=>{L(),B(),Wn(),K(),Pu=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},Fu=(e,t)=>{let n=[];if(e.length>t){if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`)}return n},Iu=(e,t)=>{if(e.length>1){let t=Fu(e,1),n=Fu(e,2),r=Fu(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),V({starts:t,ends:n,axes:r})}return t},Lu=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Ru=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${U(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${U(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${U(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,zu=(e,t)=>{let n=e[0].dims,r=z.size(n),i=t.axes.length>0?z.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Fu(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>Lu(e,t,n,i,a)),s=t.ends.map((e,t)=>Lu(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t],c=i+r*a[t];o[t]=c,s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=G(`output`,e[0].dataType,l.length),f=W(`input`,e[0].dataType,e[0].dims.length),p=z.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...H(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${Ru(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Bu=(e,t)=>{Pu(e.inputs,t);let n=Iu(e.inputs,t);e.compute(zu(e.inputs,n),{inputs:[0]})},Vu=e=>{let t=e.starts,n=e.ends,r=e.axes;return V({starts:t,ends:n,axes:r})}}),Uu,Wu,Gu,Ku,qu=w(()=>{L(),B(),Wn(),pr(),K(),Uu=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},Wu=(e,t)=>{let n=e.inputs[0],r=n.dims,i=z.size(r),a=r.length,o=z.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(ur(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=Yn(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=W(`x`,c.dataType,c.dims,p),v=G(`result`,c.dataType,c.dims,p),y=_.type.value,b=qn(c.dataType)===`f32`?`var threadMax = ${y}(-3.4028234663852886e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${Qn(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${y}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(ur(x,l),{inputs:[x]})},Gu=(e,t)=>{Uu(e.inputs),Wu(e,t)},Ku=e=>V({axis:e.axis})}),Ju,Yu,Xu,Zu,Qu,$u=w(()=>{L(),B(),K(),Ju=e=>Array.from(e.getBigInt64Array(),Number),Yu=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(Ju(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Xu=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Zu=(e,t)=>{let n=e[0].dims,r=t??Ju(e[1]),i=Xu(n,r),a=z.size(i),o=e[0].dataType,s=W(`input`,o,n.length),c=G(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...H(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},Qu=e=>{Yu(e.inputs),e.compute(Zu(e.inputs),{inputs:[0]})}}),ed,td,nd,rd=w(()=>{L(),B(),K(),ed=(e,t,n,r,i)=>{let a=G(`output_data`,i,n.length,4),o=W(`a_data`,t[1].dataType,t[1].dims.length,4),s=W(`b_data`,t[2].dataType,t[2].dims.length,4),c=W(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},td=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(z.areEqual(t,n)&&z.areEqual(n,r)),o=t,s=z.size(t);if(a){let e=ln.calcShape(ln.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=z.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>ed(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...H(r,t,n,o)]})}},nd=e=>{e.compute(td(e.inputs))}}),id,ad=w(()=>{ui(),yi(),wi(),Oi(),wa(),Ra(),Ua(),Lo(),Yo(),$o(),as(),Cs(),Fs(),Vs(),Ws(),Ys(),$s(),ic(),lc(),pc(),Oc(),el(),al(),ll(),fl(),vl(),Ic(),Ol(),Jl(),$l(),ru(),cu(),ai(),ku(),Jc(),Nu(),Hu(),qu(),Wc(),$u(),pr(),ba(),rd(),id=new Map([[`Abs`,[Ai]],[`Acos`,[ji]],[`Acosh`,[Mi]],[`Add`,[Oa]],[`ArgMax`,[ci,li]],[`ArgMin`,[si,li]],[`Asin`,[Ni]],[`Asinh`,[Pi]],[`Atan`,[Fi]],[`Atanh`,[Ii]],[`Attention`,[vi]],[`AveragePool`,[zl,Rl]],[`BatchNormalization`,[Ci]],[`BiasAdd`,[Di]],[`BiasSplitGelu`,[Ca]],[`Cast`,[Ri,Li]],[`Ceil`,[Vi]],[`Clip`,[Bi]],[`Concat`,[Va,Ha]],[`Conv`,[Io,Mo]],[`ConvTranspose`,[Jo,Wo]],[`Cos`,[Hi]],[`Cosh`,[Ui]],[`CumSum`,[Zo,Qo]],[`DepthToSpace`,[rs,is]],[`DequantizeLinear`,[Zl,Ql]],[`DFT`,[xs,Ss]],[`Div`,[ka]],[`Einsum`,[Ns,Ps]],[`Elu`,[Gi,Wi]],[`Equal`,[Aa]],[`Erf`,[qi]],[`Exp`,[Ji]],[`Expand`,[Bs]],[`FastGelu`,[Us]],[`Floor`,[Yi]],[`FusedConv`,[Io,Mo]],[`Gather`,[Js,qs]],[`GatherElements`,[cc,sc]],[`GatherBlockQuantized`,[nc,rc]],[`GatherND`,[Zs,Qs]],[`Gelu`,[Xi]],[`Gemm`,[Z,fc]],[`GlobalAveragePool`,[Hl,Vl]],[`GlobalMaxPool`,[ql,Kl]],[`Greater`,[Pa]],[`GreaterOrEqual`,[Ia]],[`GridSample`,[Ec,Dc]],[`GroupQueryAttention`,[$c]],[`HardSigmoid`,[ia,ra]],[`HardSwish`,[aa]],[`InstanceNormalization`,[il]],[`LayerNormalization`,[cl]],[`LeakyRelu`,[Zi,Wi]],[`Less`,[Fa]],[`LessOrEqual`,[La]],[`Log`,[ga]],[`MatMul`,[dl]],[`MatMulNBits`,[gl,_l]],[`MaxPool`,[Wl,Gl]],[`Mul`,[ja]],[`MultiHeadAttention`,[Fc,jc]],[`Neg`,[$i]],[`Not`,[Qi]],[`Pad`,[Dl]],[`Pow`,[Ma]],[`QuickGelu`,[ya,Wi]],[`Range`,[nu]],[`Reciprocal`,[ea]],[`ReduceMin`,[ei]],[`ReduceMean`,[Yr]],[`ReduceMax`,[$r]],[`ReduceSum`,[ni]],[`ReduceProd`,[ti]],[`ReduceL1`,[Xr]],[`ReduceL2`,[Zr]],[`ReduceLogSum`,[ii]],[`ReduceLogSumExp`,[Qr]],[`ReduceSumSquare`,[ri]],[`Relu`,[ta]],[`Resize`,[Du,Ou]],[`RotaryEmbedding`,[qc]],[`ScatterND`,[su,ou]],[`Sigmoid`,[na]],[`Sin`,[oa]],[`Sinh`,[sa]],[`Slice`,[Bu,Vu]],[`SkipLayerNormalization`,[Mu]],[`Split`,[Hc,Uc]],[`Sqrt`,[ca]],[`Softmax`,[Gu,Ku]],[`Sub`,[Na]],[`Tan`,[la]],[`Tanh`,[da]],[`ThresholdedRelu`,[ha,Wi]],[`Tile`,[Qu]],[`Transpose`,[dr,fr]],[`Where`,[nd]]])}),od,sd=w(()=>{N(),sn(),K(),od=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){pe(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),me(e.programInfo.name)}dispose(){}build(e,t){pe(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=rr(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});R(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return me(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}return[o,o,1]}}}),cd={};T(cd,{WebGpuBackend:()=>fd});var ld,ud,dd,fd,pd=w(()=>{N(),L(),sn(),hn(),Hn(),ad(),sd(),ld=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},ud=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${ld(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},dd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},fd=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo==`function`?await a.requestAdapterInfo():void 0);this.adapterInfo=new dd(o),this.gpuDataManager=Vn(this),this.programManager=new od(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,an(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;pe(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:I(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:I(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${I(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${I(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}start time: ${p} ns, execution time: ${m-p} ns`)}de(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),me()}run(e,t,n,r,i,a){pe(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return me(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${I(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=ud(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),R(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(R(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),me(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=id.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),R(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await zn(this,e,t);return mn(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){R(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){R(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){R(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),md={};T(md,{init:()=>_d});var hd,gd,_d,vd=w(()=>{L(),sn(),B(),jn(),hd=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(z.size(t)!==z.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},gd=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceLimits=t.device.limits;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new hd(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new hd(this.module,t,this.output(e,n),n),(e,t)=>{let n=Kt(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new hd(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},_d=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=(pd(),D(cd)).WebGpuBackend,a=new e;await a.initialize(n,r),i(`webgpu`,[a,e=>a.alloc(Number(e)),e=>a.free(e),(e,n,r,i=!1)=>{if(i)R(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(e)}, dst=${Number(n)}, size=${Number(r)}`),a.memcpy(Number(e),Number(n));else{R(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(e)}, gpuDataId=${Number(n)}, size=${Number(r)}`);let i=t.HEAPU8.subarray(Number(e>>>0),Number(e>>>0)+Number(r));a.upload(Number(n),i)}},async(e,n,r)=>{R(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${e}, dataOffset=${n}, size=${r}`),await a.download(Number(e),()=>t.HEAPU8.subarray(Number(n)>>>0,Number(n+r)>>>0))},(e,n,r)=>a.createKernel(e,Number(n),r,t.UTF8ToString(t._JsepGetNodeName(Number(n)))),e=>a.releaseKernel(e),(e,n,r,i)=>{R(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${e}, contextDataOffset=${n}`);let o=new gd(t,a,Number(n));return a.computeKernel(Number(e),o,i)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let e=new An(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n),(t,n)=>e.registerMLContext(t,n),!!n.trace])}}}),yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld=w(()=>{N(),Lt(),Wt(),L(),Mt(),Ft(),$t(),yd=(e,t)=>{P()._OrtInit(e,t)!==0&&F(`Can't initialize onnxruntime.`)},bd=async e=>{yd(e.wasm.numThreads,Jt(e.logLevel))},xd=async(e,t)=>{P().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);{let r=(vd(),D(md)).init;t===`webgpu`&&await r(`webgpu`,P(),e,n),t===`webnn`&&await r(`webnn`,P(),e)}},Sd=new Map,Cd=e=>{let t=P(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&F(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},wd=(e,t)=>{let n=P(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&F(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Td=e=>{let t=P(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Ed=async(e,t)=>{let n,r,i=P();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Td(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await Ut(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path,r=typeof n==`string`?n:n.data;e.push(Qt(r).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;i.currentContext=n||(r?await i.webnnCreateMLContext(r):await i.webnnCreateMLContext({deviceType:a,powerPreference:o}))}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&F(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=Cd(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=wd(a,t);e===0&&F(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:I(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=wd(a,n+e);r===0&&F(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:I(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&F(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>Zt(e))}),Sd.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&F(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&F(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&F(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},Dd=e=>{let t=P(),n=Sd.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&F(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&F(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&F(`Can't release session.`),Sd.delete(e)},Od=new Map,kd=1,Ad=new Map,jd=e=>{let t=P(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${e.byteLength}.`);try{t.HEAPU8.set(e,n);let r=t._OrtCreateLoraAdapter(n,e.byteLength);r===0&&F(`Can't create a LoRA adapter.`);let i=kd++;return Od.set(i,r),i}finally{t._free(n)}},Md=e=>{let t=P(),n=Od.get(e);if(n===void 0)throw Error(`cannot release LoRA adapter. invalid adapter id: ${e}`);if(Ad.has(e))throw Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${e}`);t._OrtReleaseLoraAdapter(n)!==0&&F(`Can't release LoRA adapter.`),Od.delete(e)},Nd=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=P(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=Kt(Gt(l),u);{let e=s.jsepRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(r,a,t,m)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=Kt(Gt(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,Gt(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,Nt(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=Gt(l);m=Kt(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(Gt(l),p,m,g,u.length,Zt(f));e===0&&F(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},Pd=async(e,t,n,r,i,a,o=[])=>{let s=P(),c=s.PTR_SIZE,l=Sd.get(e);if(!l)throw Error(`cannot run inference. invalid session id: ${e}`);let u=l[0],d=l[1],f=l[2],p=l[3],m=l[4],h=l[5],g=[];if(o.length>0){if(p)throw Error(`LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.`);for(let e of o){let t=Od.get(e);if(t===void 0)throw Error(`cannot run inference. invalid LoRA adapter id: ${e}`);g.push(t)}}let _=t.length,v=r.length,y=0,b=[],x=[],S=[],C=[],w=[],T=s.stackSave(),E=s.stackAlloc(_*c),D=s.stackAlloc(_*c),O=s.stackAlloc(v*c),k=s.stackAlloc(v*c);try{for(let e of o)Ad.set(e,(Ad.get(e)??0)+1);[y,b]=It(a,g),he(`wasm prepareInputOutputTensor`);for(let r=0;r<_;r++)await Nd(n[r],x,C,e,d[t[r]],t[r],m);for(let t=0;t<v;t++)await Nd(i[t],S,C,e,f[r[t]],_+r[t],m);ge(`wasm prepareInputOutputTensor`);for(let e=0;e<_;e++)s.setValue(E+e*c,x[e],`*`),s.setValue(D+e*c,d[t[e]],`*`);for(let e=0;e<v;e++)s.setValue(O+e*c,S[e],`*`),s.setValue(k+e*c,f[r[e]],`*`);if(p&&!h){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:o}=p;if(d.length!==_)throw Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${d.length}).`);he(`wasm bindInputsOutputs`);for(let r=0;r<_;r++){let i=t[r];await s._OrtBindInput(n,d[i],x[r])!==0&&F(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<v;t++){let c=r[t];i[t]?.[3]?(w.push(S[t]),s._OrtBindOutput(n,f[c],S[t],0)!==0&&F(`Can't bind pre-allocated output[${t}] for session=${e}.`)):s._OrtBindOutput(n,f[c],0,o[c])!==0&&F(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}ge(`wasm bindInputsOutputs`),Sd.set(e,[u,d,f,p,m,!0])}s.jsepOnRunStart?.(u),s.webnnOnRunStart?.(u);let l;l=p?await s._OrtRunWithBinding(u,p.handle,v,O,y):await s._OrtRun(u,D,E,_,k,v,O,y),l!==0&&F(`failed to call OrtRun().`);let T=[],A=[];he(`wasm ProcessOutputTensor`);for(let t=0;t<v;t++){let n=Number(s.getValue(O+t*c,`*`));if(n===S[t]||w.includes(S[t])){T.push(i[t]),n!==S[t]&&s._OrtReleaseTensor(n)!==0&&F(`Can't release tensor.`);continue}let a=s.stackSave(),o=s.stackAlloc(4*c),l=!1,u,d=0;try{s._OrtGetTensorData(n,o,o+c,o+2*c,o+3*c)!==0&&F(`Can't access output tensor data on index ${t}.`);let i=c===4?`i32`:`i64`,a=Number(s.getValue(o,i));d=s.getValue(o+c,`*`);let f=s.getValue(o+c*2,`*`),m=Number(s.getValue(o+c*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(s.getValue(f+e*c,i)));s._OrtFree(f)!==0&&F(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=I(a);let _=p?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=s.getValue(d+t*c,`*`),r=s.getValue(d+(t+1)*c,`*`),i=t===g-1?void 0:r-n;e.push(s.UTF8ToString(n,i))}T.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=s.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(d),r=Kt(a,g);if(r===void 0||!Yt(u))throw Error(`Unsupported data type: ${u}`);l=!0,T.push([u,h,{gpuBuffer:t,download:s.jsepCreateDownloader(t,r,u),dispose:()=>{s._OrtReleaseTensor(n)!==0&&F(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=s.webnnEnsureTensor,r=s.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Kt(a,g)===void 0||!Xt(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,T.push([u,h,{mlTensor:i,download:s.webnnCreateMLTensorDownloader(d,u),dispose:()=>{s.webnnReleaseTensorId(d),s._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=s.webnnCreateMLTensorDownloader(d,u)(),t=T.length;l=!0,A.push((async()=>{let r=[t,await e];return s.webnnReleaseTensorId(d),s._OrtReleaseTensor(n),r})()),T.push([u,h,[],`cpu`])}else{let e=new(qt(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(s.HEAPU8.subarray(d,d+e.byteLength)),T.push([u,h,e,`cpu`])}}finally{s.stackRestore(a),u===`string`&&d&&s._free(d),l||s._OrtReleaseTensor(n)}}p&&!m&&(s._OrtClearBoundOutputs(p.handle)!==0&&F(`Can't clear bound outputs.`),Sd.set(e,[u,d,f,p,m,!1]));for(let[e,t]of await Promise.all(A))T[e][2]=t;return ge(`wasm ProcessOutputTensor`),T}finally{s.webnnOnRunEnd?.(u),s.stackRestore(T),x.forEach(e=>s._OrtReleaseTensor(e)),S.forEach(e=>s._OrtReleaseTensor(e)),C.forEach(e=>s._free(e)),y!==0&&s._OrtReleaseRunOptions(y),b.forEach(e=>s._free(e));for(let e of o){let t=Ad.get(e)-1;t===0?Ad.delete(e):Ad.set(e,t)}}},Fd=e=>{let t=P(),n=Sd.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&F(`Can't get an profile file name.`),t._OrtFree(i)},Id=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af=w(()=>{N(),Ld(),Mt(),Ct(),$t(),Rd=()=>!!le.wasm.proxy&&typeof document<`u`,Bd=!1,Vd=!1,Hd=!1,Gd=new Map,Kd=(e,t)=>{let n=Gd.get(e);n?n.push(t):Gd.set(e,[t])},qd=()=>{if(Bd||!Vd||Hd||!zd)throw Error(`worker not ready`)},Jd=e=>{switch(e.data.type){case`init-wasm`:Bd=!1,e.data.err?(Hd=!0,Wd[1](e.data.err)):(Vd=!0,Wd[0]()),Ud&&=(URL.revokeObjectURL(Ud),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=Gd.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Yd=async()=>{if(!Vd){if(Bd)throw Error(`multiple calls to 'initWasm()' detected.`);if(Hd)throw Error(`previous call to 'initWasm()' failed.`);if(Bd=!0,Rd())return new Promise((e,t)=>{zd?.terminate(),bt().then(([n,r])=>{try{zd=r,zd.onerror=e=>t(e),zd.onmessage=Jd,Wd=[e,t];let i={type:`init-wasm`,in:le};!i.in.wasm.wasmPaths&&(n||ut)&&(i.in.wasm.wasmPaths={wasm:new URL(new URL(`ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm`,import.meta.url).href,``+import.meta.url).href}),zd.postMessage(i),Ud=n}catch(e){t(e)}},t)});try{await jt(le.wasm),await bd(le),Vd=!0}catch(e){throw Hd=!0,e}finally{Bd=!1}}},Xd=async e=>{if(Rd())return qd(),new Promise((t,n)=>{Kd(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:le}};zd.postMessage(r)});await xd(le,e)},Zd=async e=>Rd()?(qd(),new Promise((t,n)=>{Kd(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};zd.postMessage(r,[e.buffer])})):Td(e),Qd=async(e,t)=>{if(Rd()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return qd(),new Promise((n,r)=>{Kd(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),zd.postMessage(i,a)})}return Ed(e,t)},$d=async e=>{if(Rd())return qd(),new Promise((t,n)=>{Kd(`release`,[t,n]);let r={type:`release`,in:e};zd.postMessage(r)});Dd(e)},ef=async e=>{if(Rd())throw Error(`LoRA adapter is not supported for proxy.`);let t=typeof e==`string`?await Qt(e):e;return jd(t)},tf=async e=>{if(Rd())throw Error(`LoRA adapter is not supported for proxy.`);Md(e)},nf=async(e,t,n,r,i,a,o)=>{if(Rd()){if(o.length>0)throw Error(`LoRA adapter is not supported for proxy.`);if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return qd(),new Promise((i,o)=>{Kd(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};zd.postMessage(c,Id(s))})}return Pd(e,t,n,r,i,a,o)},rf=async e=>{if(Rd())return qd(),new Promise((t,n)=>{Kd(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};zd.postMessage(r)});Fd(e)}}),of,sf=w(()=>{N(),af(),of=class{async loadAdapter(e){pe(),this.adapterId=await ef(e),me()}async dispose(){return tf(this.adapterId)}}}),cf,lf,uf,df=w(()=>{N(),sf(),af(),L(),Qe(),$t(),cf=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},lf=e=>{switch(e[3]){case`cpu`:return new Be(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Yt(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Be.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Xt(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Be.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},uf=class{async fetchModelAndCopyToWasmMemory(e){return Zd(await Qt(e))}async loadModel(e,t){pe();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Qd(n,t),me()}async dispose(){return $d(this.sessionId)}async run(e,t,n,r=[]){pe();let i=r.map(e=>{if(!(e instanceof of))throw Error(`LoRA adapter was not created by the WebAssembly backend.`);return e.adapterId}),a=[],o=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],r=this.inputNames.indexOf(t);if(r===-1)throw Error(`invalid input '${t}'`);a.push(n),o.push(r)});let s=[],c=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);s.push(n),c.push(r)});let l=a.map((e,t)=>cf(e,()=>`input "${this.inputNames[o[t]]}"`)),u=s.map((e,t)=>e?cf(e,()=>`output "${this.outputNames[c[t]]}"`):null),d=await nf(this.sessionId,o,l,c,u,n,i),f={};for(let e=0;e<d.length;e++)f[this.outputNames[c[e]]]=s[e]??lf(d[e]);return me(),f}startProfiling(){}endProfiling(){rf(this.sessionId)}}}),ff,pf=w(()=>{ff=e=>{if(e?.epContextDataRead)throw Error(`session option "epContextDataRead" is not supported by ONNX Runtime Web`)}}),mf={};T(mf,{OnnxruntimeWebAssemblyBackend:()=>gf,initializeFlags:()=>hf,wasmBackend:()=>_f});var hf,gf,_f,vf=w(()=>{N(),sf(),af(),df(),pf(),hf=()=>{(typeof le.wasm.initTimeout!=`number`||le.wasm.initTimeout<0)&&(le.wasm.initTimeout=0);let e=le.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),le.wasm.simd=!1),typeof le.wasm.proxy!=`boolean`&&(le.wasm.proxy=!1),typeof le.wasm.trace!=`boolean`&&(le.wasm.trace=!1),typeof le.wasm.numThreads!=`number`||!Number.isInteger(le.wasm.numThreads)||le.wasm.numThreads<=0){if(typeof self<`u`&&!self.crossOriginIsolated)le.wasm.numThreads=1;else{let e=typeof navigator>`u`?C(`node:os`).cpus().length:navigator.hardwareConcurrency;le.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}}},gf=class{async init(e){hf(),await Yd(),await Xd(e)}async createInferenceSessionHandler(e,t){ff(t);let n=new uf;return await n.loadModel(e,t),n}async createLoraAdapterHandler(e){let t=new of;return await t.loadAdapter(e),t}},_f=new gf});N(),N(),N();var yf=`1.31.1`;{let e=(vf(),D(mf)).wasmBackend;j(`webgpu`,e,5),j(`webnn`,e,5),j(`cpu`,e,10),j(`wasm`,e,10)}Object.defineProperty(le.versions,"web",{value:yf,enumerable:!0});var bf=o((e=>{var t=d(),n=Symbol.for(`react.element`),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,o){var s,c={},l=null,u=null;for(s in o!==void 0&&(l=``+o),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)r.call(t,s)&&!a.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:i.current}}e.jsx=o,e.jsxs=o})),Q=o(((e,t)=>{t.exports=bf()}))();le.wasm.wasmPaths=`https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/`,le.wasm.numThreads=1,le.wasm.proxy=!1;var xf={0:{code:`akiec`,name:`Actinic Keratosis`,category:`Pre-Cancerous`,riskLevel:`Moderate Risk`,color:`#d97706`,action:`Schedule dermatological consultation. Monitor for changes in texture or rapid growth.`,description:`Sun-induced scaly lesion with potential for malignant transformation into Squamous Cell Carcinoma.`,treatment:`Standard care includes cryotherapy (freezing), topical Fluorouracil, or photodynamic therapy.`,link:`https://www.mayoclinic.org/diseases-conditions/actinic-keratosis/symptoms-causes/syc-20354969`},1:{code:`bcc`,name:`Basal Cell Carcinoma`,category:`Malignant Cancer`,riskLevel:`High Risk`,color:`#dc2626`,action:`Prompt biopsy recommended. Consult a dermatologic surgeon for evaluation.`,description:`Most common skin malignancy originating in basal cells. Slow-growing but locally destructive if ignored.`,treatment:`Standard care includes surgical excision, Mohs micrographic surgery, or topical immunotherapies.`,link:`https://www.mayoclinic.org/diseases-conditions/basal-cell-carcinoma/symptoms-causes/syc-20354144`},2:{code:`bkl`,name:`Benign Keratosis`,category:`Non-Cancerous`,riskLevel:`Low Risk`,color:`#16a34a`,action:`No immediate medical intervention required. Routine annual monitoring.`,description:`Harmless epidermal lesion such as seborrheic keratosis or solar lentigo.`,treatment:`Usually left untreated unless cosmetically undesirable or irritated. Removal via cryotherapy or curettage.`,link:`https://www.mayoclinic.org/diseases-conditions/seborrheic-keratosis/symptoms-causes/syc-20353878`},3:{code:`df`,name:`Dermatofibroma`,category:`Non-Cancerous`,riskLevel:`Low Risk`,color:`#16a34a`,action:`Benign dermal papule. No treatment necessary unless symptomatic.`,description:`Common benign fibrous nodule typically found on lower limbs following minor micro-trauma.`,treatment:`Benign nodule. Excisional removal under local anesthesia if painful or itchy.`,link:`https://dermnetnz.org/topics/dermatofibroma`},4:{code:`mel`,name:`Melanoma`,category:`Malignant Cancer`,riskLevel:`CRITICAL RISK`,color:`#991b1b`,action:`URGENT: Immediate professional dermoscopy and excisional biopsy required.`,description:`Aggressive cutaneous malignancy arising from pigment-producing melanocytes. Early excision is critical.`,treatment:`Urgent surgical excision, lymph node evaluation, and targeted immunotherapy depending on clinical stage.`,link:`https://www.mayoclinic.org/diseases-conditions/melanoma/symptoms-causes/syc-20374884`},5:{code:`nv`,name:`Melanocytic Nevus`,category:`Benign Mole`,riskLevel:`Normal`,color:`#2563eb`,action:`Normal pigmented nevus. Perform monthly self-examination using ABCDE criteria.`,description:`Common benign proliferation of cutaneous melanocytes.`,treatment:`Routine observation using monthly ABCDE self-checks. No intervention needed unless evolving.`,link:`https://www.mayoclinic.org/diseases-conditions/moles/symptoms-causes/syc-20375200`},6:{code:`vasc`,name:`Vascular Lesion`,category:`Benign Growth`,riskLevel:`Low Risk`,color:`#7c3aed`,action:`Benign vascular malformation. Clinical evaluation if bleeding or rapidly changing.`,description:`Cutaneous vascular anomaly such as cherry angioma or pyogenic granuloma.`,treatment:`Electrocautery, laser therapy, or simple excision if bleeding occurs.`,link:`https://dermnetnz.org/topics/vascular-lesions`}};function Sf(){let e=(0,_.useRef)(null),t=(0,_.useRef)(null),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(`Initializing ONNX WebAssembly...`),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)(`scanner`),[y,b]=(0,_.useState)(`camera`),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(1),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!1),[k,A]=(0,_.useState)(null);(0,_.useEffect)(()=>{async function e(){try{l(`Loading MobileNetV3 WASM weights...`);let e=await We.create(`./model/skin_model.onnx`);r(e),a(!1),d(null),l(`v2.0 Engine Active • Mobile WASM Ready`)}catch(e){console.error(`ONNX Model Initialization Error:`,e),d(`Model failed to load: ${e.message}. Verify public/model/skin_model.onnx exists.`),l(`Initialization Failed`),a(!1)}let e=localStorage.getItem(`healthscan_clinical_history`);if(e)try{h(JSON.parse(e))}catch{}}e(),j()},[]);let j=async()=>{try{let t=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,width:{ideal:1280},height:{ideal:720}}});e.current&&(e.current.srcObject=t);let n=t.getVideoTracks()[0];n&&n.getCapabilities&&n.getCapabilities().torch&&E(!0)}catch(e){console.error(`Camera Hardware Error:`,e),l(`Camera Unavailable (Upload Mode Active)`),b(`file`)}},ee=async()=>{if(!e.current||!e.current.srcObject)return;let t=e.current.srcObject.getVideoTracks()[0];if(t)try{let e=!D;await t.applyConstraints({advanced:[{torch:e}]}),O(e)}catch{alert(`Flashlight control not supported on this device/browser.`)}},te=e=>{e!==y&&(b(e),p(null),A(null),d(null))},M=async e=>{if(!n)throw Error(`ONNX AI Model session is not ready.`);let t=performance.now(),r=e.getContext(`2d`).getImageData(0,0,224,224).data,i=n.inputNames[0],a=n.inputMetadata?n.inputMetadata[i]:null,o=[1,224,224,3];a&&a.dimensions&&a.dimensions.length===4&&(o=a.dimensions.map((e,t)=>typeof e==`number`&&e>0?e:t===1&&a.dimensions[3]===3?224:t===3?3:224),o[0]=1);let s=o[1]===3,c=new Float32Array(150528),l=[.485,.456,.406],u=[.229,.224,.225];for(let e=0;e<50176;e++){let t=(r[e*4]/255-l[0])/u[0],n=(r[e*4+1]/255-l[1])/u[1],i=(r[e*4+2]/255-l[2])/u[2];s?(c[e]=t,c[50176+e]=n,c[100352+e]=i):(c[e*3]=t,c[e*3+1]=n,c[e*3+2]=i)}let d=new Be(`float32`,c,o),f={[i]:d},g=performance.now(),_=await n.run(f),v=performance.now(),b=Array.from(_[n.outputNames[0]].data),x=b.reduce((e,t)=>e+t,0),S;if(Math.abs(x-1)<.08&&b.every(e=>e>=-.01))S=b.map(e=>Math.max(0,e));else{let e=Math.max(...b),t=b.map(t=>Math.exp(t-e)),n=t.reduce((e,t)=>e+t,0);S=t.map(e=>e/n)}let w=Object.keys(xf).map(e=>{let t=parseInt(e,10),n=xf[t],r=S[t];return{id:t,code:n.code,name:n.name,category:n.category,riskLevel:n.riskLevel,color:n.color,probabilityPercentage:(r*100).toFixed(1),rawProbability:r}}).sort((e,t)=>t.rawProbability-e.rawProbability),T=w[0],E=w[1],D=T.rawProbability-E.rawProbability,O=(performance.now()-t).toFixed(1),k=(v-g).toFixed(1),j=xf[T.id],ee=e.toDataURL(`image/png`),te=T.rawProbability<.45||D<.1,M={id:Date.now(),timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),date:new Date().toLocaleDateString(),label:j.name,category:j.category,riskLevel:j.riskLevel,color:j.color,action:j.action,description:j.description,treatment:j.treatment,link:j.link,confidence:T.probabilityPercentage,differentialDiagnosis:w,isOOD:te,zoomScale:y===`camera`?`${C}x`:`1.0x`,imageSnapshot:ee,nnLatency:k,totalLatency:O};p(M),A({nnLatency:k,totalLatency:O,isOOD:te});let ne=[M,...m].slice(0,15);h(ne),localStorage.setItem(`healthscan_clinical_history`,JSON.stringify(ne))},ne=async()=>{if(e.current){s(!0),d(null),p(null);try{let t=e.current,n=document.createElement(`canvas`);n.width=224,n.height=224;let r=n.getContext(`2d`),i=t.videoWidth||1280,a=t.videoHeight||720,o=i/C,s=a/C,c=(i-o)/2,l=(a-s)/2;r.drawImage(t,c,l,o,s,0,0,224,224),await M(n)}catch(e){console.error(e),d(`Camera inference failed: ${e.message}`)}finally{s(!1)}}},re=e=>{let t=e.target.files&&e.target.files[0];if(!t)return;if(!n){d(`AI Model is initializing. Please wait a moment and re-select your file.`);return}p(null),s(!0),d(null);let r=new FileReader;r.onload=e=>{let t=new Image;t.onload=async()=>{S(e.target.result);let n=document.createElement(`canvas`);n.width=224,n.height=224,n.getContext(`2d`).drawImage(t,0,0,224,224);try{await M(n)}catch(e){console.error(e),d(`File inference failed: ${e.message}`)}finally{s(!1)}},t.onerror=()=>{d(`Invalid image format. Please upload a valid PNG, JPG, or WEBP file.`),s(!1)},t.src=e.target.result},r.readAsDataURL(t),e.target.value=null},ie=()=>{if(!f)return;let e=window.open(``,`_blank`),t=f.differentialDiagnosis.map((e,t)=>`
      <tr>
        <td style="padding: 6px; border-bottom: 1px solid #e2e8f0;">${t+1}. <strong>${e.name}</strong> (${e.code})</td>
        <td style="padding: 6px; border-bottom: 1px solid #e2e8f0; color: ${e.color}; font-weight: bold;">${e.riskLevel}</td>
        <td style="padding: 6px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: bold;">${e.probabilityPercentage}%</td>
      </tr>
    `).join(``),n=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>HealthScan v2.0 CDSS Report - ${f.label}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #0f172a; max-width: 800px; margin: 0 auto; }
          .header { border-bottom: 3px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
          .title { font-size: 20px; font-weight: bold; color: #1e3a8a; margin: 0; }
          .subtitle { font-size: 11px; color: #64748b; margin-top: 4px; }
          .section { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 16px; }
          .grid { display: flex; gap: 20px; align-items: center; }
          .snapshot { width: 140px; height: 140px; border-radius: 8px; object-fit: cover; border: 1px solid #cbd5e1; }
          .badge { display: inline-block; padding: 4px 10px; color: white; background: ${f.color}; font-weight: bold; border-radius: 4px; font-size: 12px; }
          .field-label { font-weight: bold; color: #334155; font-size: 13px; }
          .field-value { font-size: 13px; color: #475569; margin-top: 2px; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 8px; }
          th { text-align: left; padding: 6px; background: #e2e8f0; color: #334155; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 10px; color: #94a3b8; margin-top: 30px; text-align: center; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">EdgeAI HealthScan v2.0 Consultation Summary</div>
            <div class="subtitle">Multi-Class Differential Diagnosis & WASM Telemetry Report</div>
          </div>
          <div><span class="badge">${f.riskLevel}</span></div>
        </div>

        <div class="section">
          <div class="grid">
            ${f.imageSnapshot?`<img src="${f.imageSnapshot}" class="snapshot" />`:``}
            <div>
              <div class="field-label">Primary Differential Classification:</div>
              <h2 style="margin: 4px 0; color: #0f172a;">${f.label} (${f.category})</h2>
              <div class="field-value"><strong>Softmax Probability:</strong> ${f.confidence}%</div>
              <div class="field-value"><strong>Digital Zoom Level:</strong> ${f.zoomScale}</div>
              <div class="field-value"><strong>Scan Timestamp:</strong> ${f.date} at ${f.timestamp}</div>
              <div class="field-value"><strong>WASM Inference Speed:</strong> ${f.nnLatency} ms (Total Pipeline: ${f.totalLatency} ms)</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="field-label">Full 7-Class Differential Diagnosis Spectrum:</div>
          <table>
            <thead>
              <tr>
                <th>Condition Name</th>
                <th>Clinical Risk Level</th>
                <th style="text-align: right;">Probability</th>
              </tr>
            </thead>
            <tbody>
              ${t}
            </tbody>
          </table>
        </div>

        <div class="section" style="border-left: 4px solid ${f.color};">
          <div class="field-label" style="color: ${f.color};">Recommended Clinical Action Pathway:</div>
          <div class="field-value">${f.action}</div>
        </div>

        <div class="section">
          <div class="field-label">Standard Medical Management:</div>
          <div class="field-value">${f.treatment}</div>
        </div>

        <div class="footer">
          Institutional Protocol Notice: On-device screening evaluation output generated via MobileNetV3 WASM (v2.0 System). Scoped strictly to HAM10000 benchmark dataset. Not a substitute for histopathological biopsy. | Network Transferred: 0 KB
        </div>
        <script>
          window.onload = function() { window.print(); }
        <\/script>
      </body>
      </html>
    `;e.document.write(n),e.document.close()},ae=()=>{h([]),localStorage.removeItem(`healthscan_clinical_history`)};return(0,Q.jsxs)(`div`,{style:$.container,children:[(0,Q.jsxs)(`header`,{style:$.header,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`h1`,{style:$.title,children:[`EdgeAI HealthScan `,(0,Q.jsx)(`span`,{style:$.v2Tag,children:`v2.0`})]}),(0,Q.jsx)(`p`,{style:$.subtitle,children:`On-Device CDSS with OOD Anomaly Safeguards`})]}),(0,Q.jsx)(`span`,{style:$.badge,children:i?`Initializing...`:`v2.0 WASM Active`})]}),(0,Q.jsxs)(`nav`,{style:$.navTabs,children:[(0,Q.jsx)(`button`,{onClick:()=>v(`scanner`),style:{...$.tabBtn,borderBottom:g===`scanner`?`3px solid #2563eb`:`none`,color:g===`scanner`?`#2563eb`:`#6b7280`},children:`📷 AI Scanner`}),(0,Q.jsxs)(`button`,{onClick:()=>v(`history`),style:{...$.tabBtn,borderBottom:g===`history`?`3px solid #2563eb`:`none`,color:g===`history`?`#2563eb`:`#6b7280`},children:[`📋 Scan Logs (`,m.length,`)`]}),(0,Q.jsx)(`button`,{onClick:()=>v(`guide`),style:{...$.tabBtn,borderBottom:g===`guide`?`3px solid #2563eb`:`none`,color:g===`guide`?`#2563eb`:`#6b7280`},children:`🩺 ABCDE Guide`})]}),(0,Q.jsxs)(`div`,{style:$.disclaimer,children:[(0,Q.jsx)(`strong`,{children:`🛡️ Institutional Research Protocol:`}),` On-device decision support system scoped to the 7-class HAM10000 dermatoscopic benchmark. Zero cloud processing. For research evaluation only.`]}),u&&(0,Q.jsxs)(`div`,{style:$.errorBox,children:[(0,Q.jsx)(`strong`,{children:`⚠️ Execution Error:`}),` `,u]}),(0,Q.jsxs)(`main`,{style:{...$.grid,display:g===`scanner`?`flex`:`none`},children:[(0,Q.jsxs)(`div`,{style:$.modeToggleRow,children:[(0,Q.jsx)(`button`,{onClick:()=>te(`camera`),style:{...$.modeBtn,backgroundColor:y===`camera`?`#2563eb`:`#e2e8f0`,color:y===`camera`?`#fff`:`#475569`},children:`📷 Live Camera Feed`}),(0,Q.jsx)(`button`,{onClick:()=>te(`file`),style:{...$.modeBtn,backgroundColor:y===`file`?`#2563eb`:`#e2e8f0`,color:y===`file`?`#fff`:`#475569`},children:`📁 Upload Image File`})]}),(0,Q.jsxs)(`section`,{style:$.card,children:[(0,Q.jsx)(`div`,{style:{display:y===`camera`?`block`:`none`},children:(0,Q.jsxs)(`div`,{style:$.videoWrapper,children:[(0,Q.jsx)(`video`,{ref:e,autoPlay:!0,playsInline:!0,muted:!0,style:{...$.video,transform:`scale(${C})`,transformOrigin:`center center`,transition:`transform 0.15s ease`}}),(0,Q.jsx)(`div`,{style:$.reticle,children:(0,Q.jsx)(`div`,{style:$.reticleCrosshair})}),T&&(0,Q.jsx)(`button`,{onClick:ee,style:{...$.torchButton,backgroundColor:D?`#eab308`:`rgba(0,0,0,0.65)`},children:D?`🔦 Torch Active`:`💡 Enable Torch`})]})}),(0,Q.jsxs)(`div`,{style:{display:y===`file`?`block`:`none`},children:[(0,Q.jsxs)(`div`,{style:$.uploadDropzone,onClick:()=>t.current&&t.current.click(),children:[x?(0,Q.jsxs)(`div`,{style:$.uploadPreviewContainer,children:[(0,Q.jsx)(`img`,{src:x,alt:`Uploaded sample`,style:$.previewImg}),(0,Q.jsx)(`span`,{style:$.reUploadTag,children:`🔄 Click to Select / Replace Image`})]}):(0,Q.jsxs)(`div`,{style:$.uploadPlaceholder,children:[(0,Q.jsx)(`span`,{style:{fontSize:`2rem`},children:`📁`}),(0,Q.jsx)(`strong`,{children:`Click or Drag Image File Here`}),(0,Q.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#64748b`},children:`Supports PNG, JPG, JPEG, WEBP`})]}),(0,Q.jsx)(`input`,{ref:t,type:`file`,accept:`image/*`,style:{display:`none`},onChange:re})]}),(0,Q.jsxs)(`div`,{style:$.hamGuideNotice,children:[`💡 `,(0,Q.jsx)(`strong`,{children:`HAM10000 Dataset Scope:`}),` Upload close-up, magnified dermatoscopic images of skin lesions. Scars, open cuts, or wide photos trigger the Out-of-Distribution (OOD) safeguard.`]})]}),y===`camera`&&(0,Q.jsxs)(`div`,{style:$.zoomControlBox,children:[(0,Q.jsxs)(`label`,{style:$.zoomLabel,children:[`🔍 Live Target Zoom: `,(0,Q.jsxs)(`strong`,{children:[C.toFixed(1),`x`]})]}),(0,Q.jsx)(`input`,{type:`range`,min:`1.0`,max:`3.0`,step:`0.1`,value:C,onChange:e=>w(parseFloat(e.target.value)),style:$.zoomSlider})]}),(0,Q.jsxs)(`div`,{style:$.statusRow,children:[(0,Q.jsx)(`span`,{style:{...$.statusDot,backgroundColor:n?`#22c55e`:`#f59e0b`}}),(0,Q.jsx)(`span`,{style:$.statusText,children:o?`⌛ Executing WASM Neural Network...`:c})]}),y===`camera`&&(0,Q.jsx)(`button`,{onClick:ne,disabled:i||o,style:{...$.scanButton,opacity:i||o?.6:1},children:o?`⌛ Running WASM Inference...`:`⚡ Execute Edge Inference`})]}),k&&(0,Q.jsxs)(`div`,{style:$.telemetryBar,children:[(0,Q.jsxs)(`div`,{children:[`⚡ `,(0,Q.jsx)(`strong`,{children:`Inference:`}),` `,k.nnLatency,` ms`]}),(0,Q.jsxs)(`div`,{children:[`⏱️ `,(0,Q.jsx)(`strong`,{children:`Pipeline:`}),` `,k.totalLatency,` ms`]}),(0,Q.jsxs)(`div`,{children:[`🛡️ `,(0,Q.jsx)(`strong`,{children:`OOD Shield:`}),` `,k.isOOD?`⚠️ Triggered`:`✅ Clear`]})]}),f&&(0,Q.jsxs)(`section`,{style:$.card,children:[f.isOOD&&(0,Q.jsxs)(`div`,{style:$.oodBanner,children:[(0,Q.jsx)(`strong`,{children:`⚠️ Out-of-Distribution / High Uncertainty Alert:`}),(0,Q.jsxs)(`p`,{style:{margin:`4px 0 0 0`,fontSize:`0.8rem`,lineHeight:`1.4`},children:[`Diagnostic confidence is below the 45% threshold (`,f.confidence,`% certainty). The target image does not match the HAM10000 benchmark dataset parameters.`]})]}),(0,Q.jsxs)(`div`,{style:$.resultHeader,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{style:$.categoryTag,children:f.category}),(0,Q.jsx)(`h2`,{style:$.resultName,children:f.label})]}),(0,Q.jsx)(`span`,{style:{...$.riskBadge,backgroundColor:f.color},children:f.riskLevel})]}),(0,Q.jsxs)(`div`,{style:$.infoSection,children:[(0,Q.jsx)(`strong`,{style:$.infoTitle,children:`📖 Condition Profile:`}),(0,Q.jsx)(`p`,{style:$.descriptionText,children:f.description})]}),(0,Q.jsxs)(`div`,{style:$.meterContainer,children:[(0,Q.jsxs)(`div`,{style:$.meterHeader,children:[(0,Q.jsx)(`span`,{children:`Primary Probability`}),(0,Q.jsxs)(`strong`,{children:[f.confidence,`%`]})]}),(0,Q.jsx)(`div`,{style:$.progressBarBackground,children:(0,Q.jsx)(`div`,{style:{...$.progressBarFill,width:`${f.confidence}%`,backgroundColor:f.color}})})]}),(0,Q.jsxs)(`div`,{style:$.differentialBox,children:[(0,Q.jsx)(`strong`,{style:$.infoTitle,children:`📊 Full 7-Class Differential Diagnosis Breakdown:`}),(0,Q.jsx)(`div`,{style:$.differentialList,children:f.differentialDiagnosis.map(e=>(0,Q.jsxs)(`div`,{style:$.diffRow,children:[(0,Q.jsxs)(`div`,{style:$.diffLabelGroup,children:[(0,Q.jsx)(`span`,{style:{fontWeight:`700`,color:e.color},children:e.name}),(0,Q.jsxs)(`span`,{style:$.diffCode,children:[`(`,e.code,`)`]})]}),(0,Q.jsxs)(`div`,{style:$.diffBarGroup,children:[(0,Q.jsx)(`div`,{style:$.diffBarBg,children:(0,Q.jsx)(`div`,{style:{...$.diffBarFill,width:`${e.probabilityPercentage}%`,backgroundColor:e.color}})}),(0,Q.jsxs)(`span`,{style:$.diffVal,children:[e.probabilityPercentage,`%`]})]})]},e.id))})]}),f.isOOD?(0,Q.jsxs)(`div`,{style:{...$.actionBox,borderColor:`#ea580c`,backgroundColor:`#fff7ed`},children:[(0,Q.jsx)(`strong`,{style:{color:`#c2410c`},children:`🩺 Recommended Next Steps:`}),(0,Q.jsx)(`p`,{style:{...$.actionText,color:`#9a3412`},children:`Consult a qualified dermatologist or general practitioner for a direct physical clinical examination. Machine learning triage models cannot produce valid diagnostic classifications for out-of-domain cutaneous manifestations.`})]}):(0,Q.jsxs)(`div`,{style:{...$.actionBox,borderColor:f.color},children:[(0,Q.jsx)(`strong`,{style:{color:f.color},children:`🩺 Recommended Next Steps:`}),(0,Q.jsx)(`p`,{style:$.actionText,children:f.action})]}),(0,Q.jsxs)(`div`,{style:$.treatmentBox,children:[(0,Q.jsx)(`strong`,{children:`💊 Standard Medical Management:`}),(0,Q.jsx)(`p`,{style:$.treatmentText,children:f.treatment})]}),(0,Q.jsx)(`div`,{style:$.linkContainer,children:(0,Q.jsx)(`a`,{href:f.link,target:`_blank`,rel:`noopener noreferrer`,style:$.referenceLink,children:`🔗 Read Clinical Medical Reference (Mayo Clinic / DermNet) →`})}),(0,Q.jsx)(`button`,{onClick:ie,style:$.pdfButton,children:`📄 Export v2.0 Differential Consultation PDF`}),(0,Q.jsxs)(`div`,{style:$.metaFooter,children:[(0,Q.jsx)(`span`,{children:`HAM10000 Benchmark Class`}),(0,Q.jsxs)(`span`,{children:[`Zoom: `,f.zoomScale,` • `,f.timestamp]})]})]})]}),g===`history`&&(0,Q.jsxs)(`section`,{style:$.card,children:[(0,Q.jsxs)(`div`,{style:$.historyHeader,children:[(0,Q.jsx)(`h2`,{style:$.cardTitle,children:`Local Telemetry & Audit Logs`}),m.length>0&&(0,Q.jsx)(`button`,{onClick:ae,style:$.clearBtn,children:`Purge Logs`})]}),m.length===0?(0,Q.jsx)(`p`,{style:$.emptyText,children:`No local scan sessions recorded in browser storage.`}):(0,Q.jsx)(`ul`,{style:$.historyList,children:m.map(e=>(0,Q.jsxs)(`li`,{style:$.historyItem,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{style:{color:e.color},children:e.label}),(0,Q.jsxs)(`div`,{style:$.historySub,children:[e.date,` • `,e.timestamp,` • `,e.isOOD?`⚠️ OOD Flagged`:`Normal`]})]}),(0,Q.jsxs)(`div`,{style:$.historyRight,children:[(0,Q.jsx)(`span`,{style:{...$.riskTagSmall,backgroundColor:e.color},children:e.riskLevel}),(0,Q.jsxs)(`strong`,{children:[e.confidence,`%`]})]})]},e.id))})]}),g===`guide`&&(0,Q.jsxs)(`section`,{style:$.card,children:[(0,Q.jsx)(`h2`,{style:$.cardTitle,children:`Dermatological Screening Framework`}),(0,Q.jsx)(`p`,{style:$.descriptionText,children:`Standard clinical ABCDE criteria used alongside machine learning vision models for cutaneous lesion assessment:`}),(0,Q.jsxs)(`div`,{style:$.guideGrid,children:[(0,Q.jsxs)(`div`,{style:$.guideItem,children:[(0,Q.jsx)(`span`,{style:$.guideLetter,children:`A`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`Asymmetry:`}),` One half of the lesion does not match the visual appearance of the other half.`]})]}),(0,Q.jsxs)(`div`,{style:$.guideItem,children:[(0,Q.jsx)(`span`,{style:$.guideLetter,children:`B`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`Border:`}),` Edges are irregular, ragged, notched, or blurred.`]})]}),(0,Q.jsxs)(`div`,{style:$.guideItem,children:[(0,Q.jsx)(`span`,{style:$.guideLetter,children:`C`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`Color:`}),` Pigmentation is non-uniform with shades of brown, black, pink, or red.`]})]}),(0,Q.jsxs)(`div`,{style:$.guideItem,children:[(0,Q.jsx)(`span`,{style:$.guideLetter,children:`D`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`Diameter:`}),` Lesion size greater than 6mm (approx. pencil eraser size).`]})]}),(0,Q.jsxs)(`div`,{style:$.guideItem,children:[(0,Q.jsx)(`span`,{style:$.guideLetter,children:`E`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{children:`Evolving:`}),` Lesion changes in size, shape, color, or elevation over time.`]})]})]})]}),(0,Q.jsx)(`canvas`,{style:{display:`none`}})]})}var $={container:{maxWidth:`540px`,margin:`0 auto`,padding:`16px`,fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,color:`#0f172a`,backgroundColor:`#f8fafc`,minHeight:`100vh`},header:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`12px`},title:{fontSize:`1.25rem`,fontWeight:`800`,margin:0,color:`#0f172a`,letterSpacing:`-0.02em`},v2Tag:{fontSize:`0.75rem`,backgroundColor:`#2563eb`,color:`#fff`,padding:`2px 6px`,borderRadius:`4px`,verticalAlign:`middle`},subtitle:{fontSize:`0.75rem`,color:`#64748b`,margin:`2px 0 0 0`},badge:{fontSize:`0.7rem`,fontWeight:`700`,padding:`4px 10px`,borderRadius:`12px`,backgroundColor:`#e0e7ff`,color:`#3730a3`},navTabs:{display:`flex`,borderBottom:`1px solid #e2e8f0`,marginBottom:`14px`,gap:`8px`},tabBtn:{background:`none`,border:`none`,padding:`8px 12px`,fontWeight:`600`,fontSize:`0.85rem`,cursor:`pointer`},disclaimer:{backgroundColor:`#fef3c7`,borderLeft:`4px solid #f59e0b`,padding:`10px 12px`,borderRadius:`6px`,fontSize:`0.75rem`,color:`#78350f`,marginBottom:`14px`,lineHeight:`1.4`},errorBox:{backgroundColor:`#fee2e2`,borderLeft:`4px solid #ef4444`,padding:`10px 12px`,borderRadius:`6px`,fontSize:`0.78rem`,color:`#991b1b`,marginBottom:`14px`,lineHeight:`1.4`},oodBanner:{backgroundColor:`#fff7ed`,borderLeft:`4px solid #ea580c`,color:`#9a3412`,padding:`10px 12px`,borderRadius:`6px`,fontSize:`0.8rem`,marginBottom:`14px`,lineHeight:`1.4`},modeToggleRow:{display:`flex`,gap:`8px`,marginBottom:`8px`},modeBtn:{flex:1,padding:`8px`,borderRadius:`6px`,border:`none`,fontWeight:`700`,fontSize:`0.8rem`,cursor:`pointer`},grid:{flexDirection:`column`,gap:`14px`},card:{backgroundColor:`#ffffff`,borderRadius:`12px`,padding:`16px`,boxShadow:`0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)`,border:`1px solid #e2e8f0`},videoWrapper:{position:`relative`,width:`100%`,height:`270px`,borderRadius:`10px`,overflow:`hidden`,backgroundColor:`#0f172a`},video:{width:`100%`,height:`100%`,objectFit:`cover`},reticle:{position:`absolute`,top:`50%`,left:`50%`,width:`150px`,height:`150px`,transform:`translate(-50%, -50%)`,border:`2px dashed rgba(255, 255, 255, 0.85)`,borderRadius:`14px`,pointerEvents:`none`},reticleCrosshair:{position:`absolute`,top:`50%`,left:`50%`,width:`10px`,height:`10px`,transform:`translate(-50%, -50%)`,borderRadius:`50%`,backgroundColor:`rgba(59, 130, 246, 0.8)`},torchButton:{position:`absolute`,top:`10px`,right:`10px`,border:`none`,color:`#fff`,fontSize:`0.75rem`,fontWeight:`700`,padding:`6px 12px`,borderRadius:`20px`,cursor:`pointer`,boxShadow:`0 2px 4px rgba(0,0,0,0.4)`},uploadDropzone:{border:`2px dashed #cbd5e1`,borderRadius:`10px`,padding:`16px`,textAlign:`center`,cursor:`pointer`,backgroundColor:`#f8fafc`,minHeight:`180px`,display:`flex`,alignItems:`center`,justifyContent:`center`},uploadPlaceholder:{display:`flex`,flexDirection:`column`,gap:`6px`,alignItems:`center`},uploadPreviewContainer:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,width:`100%`},previewImg:{maxHeight:`170px`,maxWidth:`100%`,borderRadius:`8px`,objectFit:`contain`},reUploadTag:{fontSize:`0.75rem`,fontWeight:`700`,color:`#2563eb`,backgroundColor:`#eff6ff`,padding:`4px 10px`,borderRadius:`12px`,border:`1px solid #bfdbfe`},hamGuideNotice:{fontSize:`0.72rem`,color:`#475569`,backgroundColor:`#f1f5f9`,padding:`6px 10px`,borderRadius:`6px`,marginTop:`8px`},zoomControlBox:{marginTop:`10px`,display:`flex`,flexDirection:`column`,gap:`4px`},zoomLabel:{fontSize:`0.78rem`,color:`#475569`},zoomSlider:{width:`100%`,cursor:`pointer`},statusRow:{display:`flex`,alignItems:`center`,gap:`6px`,margin:`10px 0`,justifyContent:`center`},statusDot:{width:`6px`,height:`6px`,borderRadius:`50%`},statusText:{fontSize:`0.8rem`,color:`#64748b`,fontWeight:`500`},scanButton:{width:`100%`,padding:`13px`,borderRadius:`8px`,border:`none`,backgroundColor:`#2563eb`,color:`#fff`,fontSize:`0.95rem`,fontWeight:`700`,cursor:`pointer`,boxShadow:`0 2px 4px rgba(37,99,235,0.2)`},telemetryBar:{display:`flex`,justifyContent:`space-between`,backgroundColor:`#0f172a`,color:`#f8fafc`,padding:`10px 14px`,borderRadius:`8px`,fontSize:`0.72rem`,fontFamily:`monospace`},resultHeader:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:`10px`},categoryTag:{fontSize:`0.7rem`,fontWeight:`700`,textTransform:`uppercase`,color:`#64748b`,letterSpacing:`0.05em`},resultName:{fontSize:`1.15rem`,fontWeight:`800`,margin:`2px 0 0 0`,color:`#0f172a`},riskBadge:{color:`#fff`,fontSize:`0.7rem`,fontWeight:`800`,padding:`4px 10px`,borderRadius:`6px`,textTransform:`uppercase`,letterSpacing:`0.05em`},infoSection:{marginBottom:`12px`},infoTitle:{fontSize:`0.8rem`,color:`#1e293b`},descriptionText:{fontSize:`0.82rem`,color:`#475569`,lineHeight:`1.4`,margin:`4px 0 0 0`},meterContainer:{marginBottom:`14px`},meterHeader:{display:`flex`,justifyContent:`space-between`,fontSize:`0.82rem`,marginBottom:`4px`,color:`#334155`},progressBarBackground:{width:`100%`,height:`10px`,backgroundColor:`#e2e8f0`,borderRadius:`5px`,overflow:`hidden`},progressBarFill:{height:`100%`,transition:`width 0.4s ease`},differentialBox:{backgroundColor:`#f8fafc`,padding:`12px`,borderRadius:`8px`,border:`1px solid #e2e8f0`,marginBottom:`14px`},differentialList:{display:`flex`,flexDirection:`column`,gap:`6px`,marginTop:`8px`},diffRow:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,fontSize:`0.75rem`},diffLabelGroup:{display:`flex`,gap:`4px`,alignItems:`center`},diffCode:{color:`#94a3b8`,fontSize:`0.7rem`},diffBarGroup:{display:`flex`,alignItems:`center`,gap:`8px`,width:`50%`},diffBarBg:{flex:1,height:`6px`,backgroundColor:`#e2e8f0`,borderRadius:`3px`,overflow:`hidden`},diffBarFill:{height:`100%`,transition:`width 0.3s ease`},diffVal:{width:`40px`,textAlign:`right`,fontWeight:`700`,color:`#334155`},actionBox:{backgroundColor:`#f8fafc`,borderLeft:`4px solid`,padding:`10px 12px`,borderRadius:`6px`,marginBottom:`10px`},actionText:{fontSize:`0.8rem`,color:`#1e293b`,margin:`4px 0 0 0`,lineHeight:`1.4`},treatmentBox:{backgroundColor:`#f1f5f9`,padding:`10px 12px`,borderRadius:`6px`,marginBottom:`12px`,fontSize:`0.8rem`,color:`#334155`},treatmentText:{margin:`4px 0 0 0`,lineHeight:`1.4`,color:`#475569`},linkContainer:{marginBottom:`12px`},referenceLink:{color:`#2563eb`,fontSize:`0.78rem`,fontWeight:`600`,textDecoration:`none`},pdfButton:{width:`100%`,padding:`10px`,borderRadius:`6px`,border:`1px solid #2563eb`,backgroundColor:`#eff6ff`,color:`#2563eb`,fontWeight:`700`,fontSize:`0.82rem`,cursor:`pointer`,marginBottom:`12px`},metaFooter:{display:`flex`,justifyContent:`space-between`,fontSize:`0.7rem`,color:`#94a3b8`,borderTop:`1px solid #f1f5f9`,paddingTop:`8px`,marginTop:`8px`},cardTitle:{fontSize:`1rem`,fontWeight:`700`,margin:`0 0 12px 0`,color:`#0f172a`},historyHeader:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`8px`},clearBtn:{backgroundColor:`transparent`,border:`none`,color:`#ef4444`,fontSize:`0.78rem`,cursor:`pointer`,fontWeight:`700`},emptyText:{fontSize:`0.82rem`,color:`#94a3b8`,margin:0},historyList:{listStyle:`none`,padding:0,margin:0,display:`flex`,flexDirection:`column`,gap:`8px`},historyItem:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`10px 0`,borderBottom:`1px solid #f1f5f9`},historySub:{fontSize:`0.72rem`,color:`#94a3b8`,marginTop:`2px`},historyRight:{display:`flex`,flexDirection:`column`,alignItems:`flex-end`,gap:`4px`,fontSize:`0.85rem`},riskTagSmall:{color:`#fff`,fontSize:`0.65rem`,fontWeight:`700`,padding:`2px 6px`,borderRadius:`4px`},guideGrid:{display:`flex`,flexDirection:`column`,gap:`10px`},guideItem:{display:`flex`,gap:`12px`,alignItems:`flex-start`,fontSize:`0.82rem`,color:`#334155`,lineHeight:`1.4`},guideLetter:{backgroundColor:`#2563eb`,color:`#fff`,fontWeight:`800`,width:`24px`,height:`24px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.85rem`,flexShrink:0}};(0,v.createRoot)(document.getElementById(`root`)).render((0,Q.jsx)(_.StrictMode,{children:(0,Q.jsx)(Sf,{})}));