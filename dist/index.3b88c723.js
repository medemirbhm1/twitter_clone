function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire40b9;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire40b9=o),o.register("eN4lT",(function(t,n){var r,i,a;e(t.exports,"Fragment",(()=>r),(e=>r=e)),e(t.exports,"jsx",(()=>i),(e=>i=e)),e(t.exports,"jsxs",(()=>a),(e=>a=e)),o("7nROE");var s=o("8T3gX"),l=60103;if(r=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;l=c("react.element"),r=c("react.fragment")}var u=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d=Object.prototype.hasOwnProperty,h={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},o=null,a=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(a=t.ref),t)d.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:o,ref:a,props:i,_owner:u.current}}i=f,a=f})),o.register("7nROE",(function(e,t){var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var a,s,l=o(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))r.call(a,u)&&(l[u]=a[u]);if(n){s=n(a);for(var d=0;d<s.length;d++)i.call(a,s[d])&&(l[s[d]]=a[s[d]])}}return l}})),o.register("8T3gX",(function(e,t){e.exports=o("6VuwR")})),o.register("6VuwR",(function(t,n){var r,i,a,s,l,c,u,d,h,f,p,m,g,v,y,_,b,w,k,C,E,S,x,T,I,P,N,O;e(t.exports,"Fragment",(()=>r),(e=>r=e)),e(t.exports,"StrictMode",(()=>i),(e=>i=e)),e(t.exports,"Profiler",(()=>a),(e=>a=e)),e(t.exports,"Suspense",(()=>s),(e=>s=e)),e(t.exports,"Children",(()=>l),(e=>l=e)),e(t.exports,"Component",(()=>c),(e=>c=e)),e(t.exports,"PureComponent",(()=>u),(e=>u=e)),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>d),(e=>d=e)),e(t.exports,"cloneElement",(()=>h),(e=>h=e)),e(t.exports,"createContext",(()=>f),(e=>f=e)),e(t.exports,"createElement",(()=>p),(e=>p=e)),e(t.exports,"createFactory",(()=>m),(e=>m=e)),e(t.exports,"createRef",(()=>g),(e=>g=e)),e(t.exports,"forwardRef",(()=>v),(e=>v=e)),e(t.exports,"isValidElement",(()=>y),(e=>y=e)),e(t.exports,"lazy",(()=>_),(e=>_=e)),e(t.exports,"memo",(()=>b),(e=>b=e)),e(t.exports,"useCallback",(()=>w),(e=>w=e)),e(t.exports,"useContext",(()=>k),(e=>k=e)),e(t.exports,"useDebugValue",(()=>C),(e=>C=e)),e(t.exports,"useEffect",(()=>E),(e=>E=e)),e(t.exports,"useImperativeHandle",(()=>S),(e=>S=e)),e(t.exports,"useLayoutEffect",(()=>x),(e=>x=e)),e(t.exports,"useMemo",(()=>T),(e=>T=e)),e(t.exports,"useReducer",(()=>I),(e=>I=e)),e(t.exports,"useRef",(()=>P),(e=>P=e)),e(t.exports,"useState",(()=>N),(e=>N=e)),e(t.exports,"version",(()=>O),(e=>O=e));var R=o("7nROE"),A=60103,L=60106;r=60107,i=60108,a=60114;var M=60109,j=60110,D=60112;s=60113;var F=60115,U=60116;if("function"==typeof Symbol&&Symbol.for){var z=Symbol.for;A=z("react.element"),L=z("react.portal"),r=z("react.fragment"),i=z("react.strict_mode"),a=z("react.profiler"),M=z("react.provider"),j=z("react.context"),D=z("react.forward_ref"),s=z("react.suspense"),F=z("react.memo"),U=z("react.lazy")}var q="function"==typeof Symbol&&Symbol.iterator;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function $(e,t,n){this.props=e,this.context=t,this.refs=B,this.updater=n||W}function H(){}function K(e,t,n){this.props=e,this.context=t,this.refs=B,this.updater=n||W}$.prototype.isReactComponent={},$.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(V(85));this.updater.enqueueSetState(this,e,t,"setState")},$.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},H.prototype=$.prototype;var Y=K.prototype=new H;Y.constructor=K,R(Y,$.prototype),Y.isPureReactComponent=!0;var G={current:null},Q=Object.prototype.hasOwnProperty,X={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,n){var r,i={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)Q.call(t,r)&&!X.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:A,type:e,key:o,ref:a,props:i,_owner:G.current}}function Z(e){return"object"==typeof e&&null!==e&&e.$$typeof===A}var ee=/\/+/g;function te(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function ne(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a,s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case A:case L:s=!0}}if(s)return i=i(s=e),e=""===r?"."+te(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(ee,"$&/")+"/"),ne(i,t,n,"",(function(e){return e}))):null!=i&&(Z(i)&&(i=function(e,t){return{$$typeof:A,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ee,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+te(o=e[l],l);s+=ne(o,t,n,c,i)}else if("function"==typeof(c=null===(a=e)||"object"!=typeof a?null:"function"==typeof(a=q&&a[q]||a["@@iterator"])?a:null))for(e=c.call(e),l=0;!(o=e.next()).done;)s+=ne(o=o.value,t,n,c=r+te(o,l++),i);else if("object"===o)throw t=""+e,Error(V(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function re(e,t,n){if(null==e)return e;var r=[],i=0;return ne(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function ie(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var oe={current:null};function ae(){var e=oe.current;if(null===e)throw Error(V(321));return e}l={map:re,forEach:function(e,t,n){re(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return re(e,(function(){t++})),t},toArray:function(e){return re(e,(function(e){return e}))||[]},only:function(e){if(!Z(e))throw Error(V(143));return e}},c=$,u=K,d={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:R},h=function(e,t,n){if(null==e)throw Error(V(267,e));var r=R({},e.props),i=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=G.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Q.call(t,l)&&!X.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:A,type:e.type,key:i,ref:o,props:r,_owner:a}},f=function(e,t){return void 0===t&&(t=null),(e={$$typeof:j,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:M,_context:e},e.Consumer=e},p=J,m=function(e){var t=J.bind(null,e);return t.type=e,t},g=function(){return{current:null}},v=function(e){return{$$typeof:D,render:e}},y=Z,_=function(e){return{$$typeof:U,_payload:{_status:-1,_result:e},_init:ie}},b=function(e,t){return{$$typeof:F,type:e,compare:void 0===t?null:t}},w=function(e,t){return ae().useCallback(e,t)},k=function(e,t){return ae().useContext(e,t)},C=function(){},E=function(e,t){return ae().useEffect(e,t)},S=function(e,t,n){return ae().useImperativeHandle(e,t,n)},x=function(e,t){return ae().useLayoutEffect(e,t)},T=function(e,t){return ae().useMemo(e,t)},I=function(e,t,n){return ae().useReducer(e,t,n)},P=function(e){return ae().useRef(e)},N=function(e){return ae().useState(e)},O="17.0.2"})),o.register("WeH8M",(function(t,n){var r,i,a,s,l,c,u,d,h,f,p;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>r),(e=>r=e)),e(t.exports,"createPortal",(()=>i),(e=>i=e)),e(t.exports,"findDOMNode",(()=>a),(e=>a=e)),e(t.exports,"flushSync",(()=>s),(e=>s=e)),e(t.exports,"hydrate",(()=>l),(e=>l=e)),e(t.exports,"render",(()=>c),(e=>c=e)),e(t.exports,"unmountComponentAtNode",(()=>u),(e=>u=e)),e(t.exports,"unstable_batchedUpdates",(()=>d),(e=>d=e)),e(t.exports,"unstable_createPortal",(()=>h),(e=>h=e)),e(t.exports,"unstable_renderSubtreeIntoContainer",(()=>f),(e=>f=e)),e(t.exports,"version",(()=>p),(e=>p=e));var m=o("8T3gX"),g=o("7nROE"),v=o("74qJ9");function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!m)throw Error(y(227));var _=new Set,b={};function w(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(b[e]=t,e=0;e<t.length;e++)_.add(t[e])}var C=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S=Object.prototype.hasOwnProperty,x={},T={};function I(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){P[e]=new I(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];P[t]=new I(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){P[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){P[e]=new I(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){P[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){P[e]=new I(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){P[e]=new I(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){P[e]=new I(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){P[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)}));var N=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}function R(e,t,n,r){var i=P.hasOwnProperty(t)?P[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!S.call(T,e)||!S.call(x,e)&&(E.test(e)?T[e]=!0:(x[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(N,O);P[t]=new I(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(N,O);P[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(N,O);P[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){P[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)})),P.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){P[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)}));var A=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=60103,M=60106,j=60107,D=60108,F=60114,U=60109,z=60110,q=60112,V=60113,W=60120,B=60115,$=60116,H=60121,K=60128,Y=60129,G=60130,Q=60131;if("function"==typeof Symbol&&Symbol.for){var X=Symbol.for;L=X("react.element"),M=X("react.portal"),j=X("react.fragment"),D=X("react.strict_mode"),F=X("react.profiler"),U=X("react.provider"),z=X("react.context"),q=X("react.forward_ref"),V=X("react.suspense"),W=X("react.suspense_list"),B=X("react.memo"),$=X("react.lazy"),H=X("react.block"),X("react.scope"),K=X("react.opaque.id"),Y=X("react.debug_trace_mode"),G=X("react.offscreen"),Q=X("react.legacy_hidden")}var J,Z="function"==typeof Symbol&&Symbol.iterator;function ee(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Z&&e[Z]||e["@@iterator"])?e:null}function te(e){if(void 0===J)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);J=t&&t[1]||""}return"\n"+J+e}var ne=!1;function re(e,t){if(!e||ne)return"";ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&"string"==typeof e.stack){for(var i=e.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s])return"\n"+i[a].replace(" at new "," at ")}while(1<=a&&0<=s);break}}}finally{ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?te(e):""}function ie(e){switch(e.tag){case 5:return te(e.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1);case 11:return e=re(e.type.render,!1);case 22:return e=re(e.type._render,!1);case 1:return e=re(e.type,!0);default:return""}}function oe(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case j:return"Fragment";case M:return"Portal";case F:return"Profiler";case D:return"StrictMode";case V:return"Suspense";case W:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case q:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case B:return oe(e.type);case H:return oe(e._render);case $:t=e._payload,e=e._init;try{return oe(e(t))}catch(e){}}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function se(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function le(e){e._valueTracker||(e._valueTracker=function(e){var t=se(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ce(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ue(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function de(e,t){var n=t.checked;return g({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function he(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ae(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function fe(e,t){null!=(t=t.checked)&&R(e,"checked",t,!1)}function pe(e,t){fe(e,t);var n=ae(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ge(e,t.type,n):t.hasOwnProperty("defaultValue")&&ge(e,t.type,ae(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function me(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ge(e,t,n){"number"===t&&ue(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function ve(e,t){return e=g({children:void 0},t),(t=function(e){var t="";return m.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function ye(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function _e(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(y(91));return g({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function be(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(y(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(y(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function we(e,t){var n=ae(t.value),r=ae(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ke(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Ce="http://www.w3.org/1999/xhtml",Ee="http://www.w3.org/2000/svg";function Se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Te,Ie,Pe=(Ie=function(e,t){if(e.namespaceURI!==Ee||"innerHTML"in e)e.innerHTML=t;else{for((Te=Te||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Te.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Ie(e,t)}))}:Ie);function Ne(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Oe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];function Ae(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Oe.hasOwnProperty(e)&&Oe[e]?(""+t).trim():t+"px"}function Le(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ae(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Oe).forEach((function(e){Re.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oe[t]=Oe[e]}))}));var Me=g({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(e,t){if(t){if(Me[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(y(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(y(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(y(62))}}function De(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Fe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ue=null,ze=null,qe=null;function Ve(e){if(e=hi(e)){if("function"!=typeof Ue)throw Error(y(280));var t=e.stateNode;t&&(t=pi(t),Ue(e.stateNode,e.type,t))}}function We(e){ze?qe?qe.push(e):qe=[e]:ze=e}function Be(){if(ze){var e=ze,t=qe;if(qe=ze=null,Ve(e),t)for(e=0;e<t.length;e++)Ve(t[e])}}function $e(e,t){return e(t)}function He(e,t,n,r,i){return e(t,n,r,i)}function Ke(){}var Ye=$e,Ge=!1,Qe=!1;function Xe(){null===ze&&null===qe||(Ke(),Be())}function Je(e,t){var n=e.stateNode;if(null===n)return null;var r=pi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(y(231,t,typeof n));return n}var Ze=!1;if(C)try{var et={};Object.defineProperty(et,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",et,et),window.removeEventListener("test",et,et)}catch(Ie){Ze=!1}function tt(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var nt=!1,rt=null,it=!1,ot=null,at={onError:function(e){nt=!0,rt=e}};function st(e,t,n,r,i,o,a,s,l){nt=!1,rt=null,tt.apply(at,arguments)}function lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function ct(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function ut(e){if(lt(e)!==e)throw Error(y(188))}function dt(e){if(e=function(e){var t=e.alternate;if(!t){if(null===(t=lt(e)))throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ut(i),e;if(o===r)return ut(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(3!==n.tag)throw Error(y(188));return n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ht(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var ft,pt,mt,gt,vt=!1,yt=[],_t=null,bt=null,wt=null,kt=new Map,Ct=new Map,Et=[],St="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function Tt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":kt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(t.pointerId)}}function It(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e=xt(t,n,r,i,o),null!==t&&(null!==(t=hi(t))&&pt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Pt(e){var t=di(e.target);if(null!==t){var n=lt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=ct(n)))return e.blockedOn=t,void gt(e.lanePriority,(function(){v.unstable_runWithPriority(e.priority,(function(){mt(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Nt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=hn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=hi(n))&&pt(t),e.blockedOn=n,!1;t.shift()}return!0}function Ot(e,t,n){Nt(e)&&n.delete(t)}function Rt(){for(vt=!1;0<yt.length;){var e=yt[0];if(null!==e.blockedOn){null!==(e=hi(e.blockedOn))&&ft(e);break}for(var t=e.targetContainers;0<t.length;){var n=hn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&yt.shift()}null!==_t&&Nt(_t)&&(_t=null),null!==bt&&Nt(bt)&&(bt=null),null!==wt&&Nt(wt)&&(wt=null),kt.forEach(Ot),Ct.forEach(Ot)}function At(e,t){e.blockedOn===t&&(e.blockedOn=null,vt||(vt=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Rt)))}function Lt(e){function t(t){return At(t,e)}if(0<yt.length){At(yt[0],e);for(var n=1;n<yt.length;n++){var r=yt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&At(_t,e),null!==bt&&At(bt,e),null!==wt&&At(wt,e),kt.forEach(t),Ct.forEach(t),n=0;n<Et.length;n++)(r=Et[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&null===(n=Et[0]).blockedOn;)Pt(n),null===n.blockedOn&&Et.shift()}function Mt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jt={animationend:Mt("Animation","AnimationEnd"),animationiteration:Mt("Animation","AnimationIteration"),animationstart:Mt("Animation","AnimationStart"),transitionend:Mt("Transition","TransitionEnd")},Dt={},Ft={};function Ut(e){if(Dt[e])return Dt[e];if(!jt[e])return e;var t,n=jt[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ft)return Dt[e]=n[t];return e}C&&(Ft=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);var zt=Ut("animationend"),qt=Ut("animationiteration"),Vt=Ut("animationstart"),Wt=Ut("transitionend"),Bt=new Map,$t=new Map,Ht=["abort","abort",zt,"animationEnd",qt,"animationIteration",Vt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Wt,"transitionEnd","waiting","waiting"];function Kt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),$t.set(r,t),Bt.set(r,i),w(i,[r])}}(0,v.unstable_now)();var Yt=8;function Gt(e){if(0!=(1&e))return Yt=15,1;if(0!=(2&e))return Yt=14,2;if(0!=(4&e))return Yt=13,4;var t=24&e;return 0!==t?(Yt=12,t):0!=(32&e)?(Yt=11,32):0!==(t=192&e)?(Yt=10,t):0!=(256&e)?(Yt=9,256):0!==(t=3584&e)?(Yt=8,t):0!=(4096&e)?(Yt=7,4096):0!==(t=4186112&e)?(Yt=6,t):0!==(t=62914560&e)?(Yt=5,t):67108864&e?(Yt=4,67108864):0!=(134217728&e)?(Yt=3,134217728):0!==(t=805306368&e)?(Yt=2,t):0!=(1073741824&e)?(Yt=1,1073741824):(Yt=8,e)}function Qt(e,t){var n=e.pendingLanes;if(0===n)return Yt=0;var r=0,i=0,o=e.expiredLanes,a=e.suspendedLanes,s=e.pingedLanes;if(0!==o)r=o,i=Yt=15;else if(0!==(o=134217727&n)){var l=o&~a;0!==l?(r=Gt(l),i=Yt):0!==(s&=o)&&(r=Gt(s),i=Yt)}else 0!==(o=n&~a)?(r=Gt(o),i=Yt):0!==s&&(r=Gt(s),i=Yt);if(0===r)return 0;if(r=n&((0>(r=31-nn(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0==(t&a)){if(Gt(t),i<=Yt)return t;Yt=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-nn(t)),r|=e[n],t&=~i;return r}function Xt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Jt(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Zt(24&~t))?Jt(10,t):e;case 10:return 0===(e=Zt(192&~t))?Jt(8,t):e;case 8:return 0===(e=Zt(3584&~t))&&(0===(e=Zt(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Zt(805306368&~t))&&(t=268435456),t}throw Error(y(358,e))}function Zt(e){return e&-e}function en(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tn(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-nn(t)]=n}var nn=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(rn(e)/on|0)|0},rn=Math.log,on=Math.LN2;var an=v.unstable_UserBlockingPriority,sn=v.unstable_runWithPriority,ln=!0;function cn(e,t,n,r){Ge||Ke();var i=dn,o=Ge;Ge=!0;try{He(i,e,t,n,r)}finally{(Ge=o)||Xe()}}function un(e,t,n,r){sn(an,dn.bind(null,e,t,n,r))}function dn(e,t,n,r){var i;if(ln)if((i=0==(4&t))&&0<yt.length&&-1<St.indexOf(e))e=xt(null,e,t,n,r),yt.push(e);else{var o=hn(e,t,n,r);if(null===o)i&&Tt(e,r);else{if(i){if(-1<St.indexOf(e))return e=xt(o,e,t,n,r),void yt.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return _t=It(_t,e,t,n,r,i),!0;case"dragenter":return bt=It(bt,e,t,n,r,i),!0;case"mouseover":return wt=It(wt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return kt.set(o,It(kt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ct.set(o,It(Ct.get(o)||null,e,t,n,r,i)),!0}return!1}(o,e,t,n,r))return;Tt(e,r)}Br(e,t,r,null,n)}}}function hn(e,t,n,r){var i=Fe(r);if(null!==(i=di(i))){var o=lt(i);if(null===o)i=null;else{var a=o.tag;if(13===a){if(null!==(i=ct(o)))return i;i=null}else if(3===a){if(o.stateNode.hydrate)return 3===o.tag?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return Br(e,t,r,i,n),null}var fn=null,pn=null,mn=null;function gn(){if(mn)return mn;var e,t,n=pn,r=n.length,i="value"in fn?fn.value:fn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return mn=i.slice(e,1<t?1-t:void 0)}function vn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function yn(){return!0}function _n(){return!1}function bn(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?yn:_n,this.isPropagationStopped=_n,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var wn,kn,Cn,En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(En),xn=g({},En,{view:0,detail:0}),Tn=bn(xn),In=g({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&"mousemove"===e.type?(wn=e.screenX-Cn.screenX,kn=e.screenY-Cn.screenY):kn=wn=0,Cn=e),wn)},movementY:function(e){return"movementY"in e?e.movementY:kn}}),Pn=bn(In),Nn=bn(g({},In,{dataTransfer:0})),On=bn(g({},xn,{relatedTarget:0})),Rn=bn(g({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),An=bn(g({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),Ln=bn(g({},En,{data:0})),Mn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Dn[e])&&!!t[e]}function Un(){return Fn}var zn=bn(g({},xn,{key:function(e){if(e.key){var t=Mn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=vn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?jn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return"keypress"===e.type?vn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?vn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),qn=bn(g({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=bn(g({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),Wn=bn(g({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=bn(g({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=[9,13,27,32],Hn=C&&"CompositionEvent"in window,Kn=null;C&&"documentMode"in document&&(Kn=document.documentMode);var Yn=C&&"TextEvent"in window&&!Kn,Gn=C&&(!Hn||Kn&&8<Kn&&11>=Kn),Qn=String.fromCharCode(32),Xn=!1;function Jn(e,t){switch(e){case"keyup":return-1!==$n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var er=!1;var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!tr[e.type]:"textarea"===t}function rr(e,t,n,r){We(r),0<(t=Hr(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,or=null;function ar(e){Fr(e,0)}function sr(e){if(ce(fi(e)))return e}function lr(e,t){if("change"===e)return t}var cr=!1;if(C){var ur;if(C){var dr="oninput"in document;if(!dr){var hr=document.createElement("div");hr.setAttribute("oninput","return;"),dr="function"==typeof hr.oninput}ur=dr}else ur=!1;cr=ur&&(!document.documentMode||9<document.documentMode)}function fr(){ir&&(ir.detachEvent("onpropertychange",pr),or=ir=null)}function pr(e){if("value"===e.propertyName&&sr(or)){var t=[];if(rr(t,or,e,Fe(e)),e=ar,Ge)e(t);else{Ge=!0;try{$e(e,t)}finally{Ge=!1,Xe()}}}}function mr(e,t,n){"focusin"===e?(fr(),or=n,(ir=t).attachEvent("onpropertychange",pr)):"focusout"===e&&fr()}function gr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return sr(or)}function vr(e,t){if("click"===e)return sr(t)}function yr(e,t){if("input"===e||"change"===e)return sr(t)}var _r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},br=Object.prototype.hasOwnProperty;function wr(e,t){if(_r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!br.call(t,n[r])||!_r(e[n[r]],t[n[r]]))return!1;return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cr(e,t){var n,r=kr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kr(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Sr(){for(var e=window,t=ue();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ue((e=t.contentWindow).document)}return t}function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Tr=C&&"documentMode"in document&&11>=document.documentMode,Ir=null,Pr=null,Nr=null,Or=!1;function Rr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Or||null==Ir||Ir!==ue(r)||("selectionStart"in(r=Ir)&&xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Nr&&wr(Nr,r)||(Nr=r,0<(r=Hr(Pr,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}Kt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Kt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Kt(Ht,2);for(var Ar="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Lr=0;Lr<Ar.length;Lr++)$t.set(Ar[Lr],0);k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,a,s,l){if(st.apply(this,arguments),nt){if(!nt)throw Error(y(198));var c=rt;nt=!1,rt=null,it||(it=!0,ot=c)}}(r,t,void 0,e),e.currentTarget=null}function Fr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,s,c),o=l}}}if(it)throw e=ot,it=!1,ot=null,e}function Ur(e,t){var n=mi(t),r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}var zr="_reactListening"+Math.random().toString(36).slice(2);function qr(e){e[zr]||(e[zr]=!0,_.forEach((function(t){jr.has(t)||Vr(t,!1,e,null),Vr(t,!0,e,null)})))}function Vr(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,o=n;if("selectionchange"===e&&9!==n.nodeType&&(o=n.ownerDocument),null!==r&&!t&&jr.has(e)){if("scroll"!==e)return;i|=2,o=r}var a=mi(o),s=e+"__"+(t?"capture":"bubble");a.has(s)||(t&&(i|=4),Wr(o,e,i,t),a.add(s))}function Wr(e,t,n,r){var i=$t.get(t);switch(void 0===i?2:i){case 0:i=cn;break;case 1:i=un;break;default:i=dn}n=i.bind(null,t,n,e),i=void 0,!Ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Br(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=di(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}!function(e,t,n){if(Qe)return e(t,n);Qe=!0;try{Ye(e,t,n)}finally{Qe=!1,Xe()}}((function(){var r=o,i=Fe(n),a=[];e:{var s=Bt.get(e);if(void 0!==s){var l=Sn,c=e;switch(e){case"keypress":if(0===vn(n))break e;case"keydown":case"keyup":l=zn;break;case"focusin":c="focus",l=On;break;case"focusout":c="blur",l=On;break;case"beforeblur":case"afterblur":l=On;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Nn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Vn;break;case zt:case qt:case Vt:l=Rn;break;case Wt:l=Wn;break;case"scroll":l=Tn;break;case"wheel":l=Bn;break;case"copy":case"cut":case"paste":l=An;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=qn}var u=0!=(4&t),d=!u&&"scroll"===e,h=u?null!==s?s+"Capture":null:s;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=Je(p,h))&&u.push($r(p,m,f)))),d)break;p=p.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||0!=(16&t)||!(c=n.relatedTarget||n.fromElement)||!di(c)&&!c[ci])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?di(c):null)&&(c!==(d=lt(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=Pn,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=qn,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?s:fi(l),f=null==c?s:fi(c),(s=new u(m,p+"leave",l,n,i)).target=d,s.relatedTarget=f,m=null,di(i)===r&&((u=new u(h,p+"enter",c,n,i)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(h=c,p=0,f=u=l;f;f=Kr(f))p++;for(f=0,m=h;m;m=Kr(m))f++;for(;0<p-f;)u=Kr(u),p--;for(;0<f-p;)h=Kr(h),f--;for(;p--;){if(u===h||null!==h&&u===h.alternate)break e;u=Kr(u),h=Kr(h)}u=null}else u=null;null!==l&&Yr(a,s,l,u,!1),null!==c&&null!==d&&Yr(a,d,c,u,!0)}if("select"===(l=(s=r?fi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=lr;else if(nr(s))if(cr)g=yr;else{g=gr;var v=mr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=vr);switch(g&&(g=g(e,r))?rr(a,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ge(s,"number",s.value)),v=r?fi(r):window,e){case"focusin":(nr(v)||"true"===v.contentEditable)&&(Ir=v,Pr=r,Nr=null);break;case"focusout":Nr=Pr=Ir=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Rr(a,n,i);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":Rr(a,n,i)}var y;if(Hn)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else er?Jn(e,n)&&(_="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(_="onCompositionStart");_&&(Gn&&"ko"!==n.locale&&(er||"onCompositionStart"!==_?"onCompositionEnd"===_&&er&&(y=gn()):(pn="value"in(fn=i)?fn.value:fn.textContent,er=!0)),0<(v=Hr(r,_)).length&&(_=new Ln(_,e,null,n,i),a.push({event:_,listeners:v}),y?_.data=y:null!==(y=Zn(n))&&(_.data=y))),(y=Yn?function(e,t){switch(e){case"compositionend":return Zn(t);case"keypress":return 32!==t.which?null:(Xn=!0,Qn);case"textInput":return(e=t.data)===Qn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(er)return"compositionend"===e||!Hn&&Jn(e,t)?(e=gn(),mn=pn=fn=null,er=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Hr(r,"onBeforeInput")).length&&(i=new Ln("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Fr(a,t)}))}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Je(e,n))&&r.unshift($r(e,o,i)),null!=(o=Je(e,t))&&r.push($r(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Je(n,o))&&a.unshift($r(n,l,s)):i||null!=(l=Je(n,o))&&a.push($r(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}function Gr(){}var Qr=null,Xr=null;function Jr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Zr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ei="function"==typeof setTimeout?setTimeout:void 0,ti="function"==typeof clearTimeout?clearTimeout:void 0;function ni(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function ri(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function ii(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var oi=0;var ai=Math.random().toString(36).slice(2),si="__reactFiber$"+ai,li="__reactProps$"+ai,ci="__reactContainer$"+ai,ui="__reactEvents$"+ai;function di(e){var t=e[si];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ci]||n[si]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ii(e);null!==e;){if(n=e[si])return n;e=ii(e)}return t}n=(e=n).parentNode}return null}function hi(e){return!(e=e[si]||e[ci])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function fi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(y(33))}function pi(e){return e[li]||null}function mi(e){var t=e[ui];return void 0===t&&(t=e[ui]=new Set),t}var gi=[],vi=-1;function yi(e){return{current:e}}function _i(e){0>vi||(e.current=gi[vi],gi[vi]=null,vi--)}function bi(e,t){vi++,gi[vi]=e.current,e.current=t}var wi={},ki=yi(wi),Ci=yi(!1),Ei=wi;function Si(e,t){var n=e.type.contextTypes;if(!n)return wi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function xi(e){return null!=(e=e.childContextTypes)}function Ti(){_i(Ci),_i(ki)}function Ii(e,t,n){if(ki.current!==wi)throw Error(y(168));bi(ki,t),bi(Ci,n)}function Pi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in e))throw Error(y(108,oe(t)||"Unknown",i));return g({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wi,Ei=ki.current,bi(ki,e),bi(Ci,Ci.current),!0}function Oi(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Pi(e,t,Ei),r.__reactInternalMemoizedMergedChildContext=e,_i(Ci),_i(ki),bi(ki,e)):_i(Ci),bi(Ci,n)}var Ri=null,Ai=null,Li=v.unstable_runWithPriority,Mi=v.unstable_scheduleCallback,ji=v.unstable_cancelCallback,Di=v.unstable_shouldYield,Fi=v.unstable_requestPaint,Ui=v.unstable_now,zi=v.unstable_getCurrentPriorityLevel,qi=v.unstable_ImmediatePriority,Vi=v.unstable_UserBlockingPriority,Wi=v.unstable_NormalPriority,Bi=v.unstable_LowPriority,$i=v.unstable_IdlePriority,Hi={},Ki=void 0!==Fi?Fi:function(){},Yi=null,Gi=null,Qi=!1,Xi=Ui(),Ji=1e4>Xi?Ui:function(){return Ui()-Xi};function Zi(){switch(zi()){case qi:return 99;case Vi:return 98;case Wi:return 97;case Bi:return 96;case $i:return 95;default:throw Error(y(332))}}function eo(e){switch(e){case 99:return qi;case 98:return Vi;case 97:return Wi;case 96:return Bi;case 95:return $i;default:throw Error(y(332))}}function to(e,t){return e=eo(e),Li(e,t)}function no(e,t,n){return e=eo(e),Mi(e,t,n)}function ro(){if(null!==Gi){var e=Gi;Gi=null,ji(e)}io()}function io(){if(!Qi&&null!==Yi){Qi=!0;var e=0;try{var t=Yi;to(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Yi=null}catch(t){throw null!==Yi&&(Yi=Yi.slice(e+1)),Mi(qi,ro),t}finally{Qi=!1}}}var oo=A.ReactCurrentBatchConfig;function ao(e,t){if(e&&e.defaultProps){for(var n in t=g({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var so=yi(null),lo=null,co=null,uo=null;function ho(){uo=co=lo=null}function fo(e){var t=so.current;_i(so),e.type._context._currentValue=t}function po(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function mo(e,t){lo=e,uo=co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Ha=!0),e.firstContext=null)}function go(e,t){if(uo!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(uo=e,t=1073741823),t={context:e,observedBits:t,next:null},null===co){if(null===lo)throw Error(y(308));co=t,lo.dependencies={lanes:0,firstContext:t,responders:null}}else co=co.next=t;return e._currentValue}var vo=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function _o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wo(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ko(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var i=e.updateQueue;vo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;if(null!==u){var d=(u=u.updateQueue).lastBaseUpdate;d!==a&&(null===d?u.firstBaseUpdate=c:d.next=c,u.lastBaseUpdate=l)}}if(null!==o){for(d=i.baseState,a=0,u=c=l=null;;){s=o.lane;var h=o.eventTime;if((r&s)===s){null!==u&&(u=u.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var f=e,p=o;switch(s=t,h=n,p.tag){case 1:if("function"==typeof(f=p.payload)){d=f.call(h,d,s);break e}d=f;break e;case 3:f.flags=-4097&f.flags|64;case 0:if(null==(s="function"==typeof(f=p.payload)?f.call(h,d,s):f))break e;d=g({},d,s);break e;case 2:vo=!0}}null!==o.callback&&(e.flags|=32,null===(s=i.effects)?i.effects=[o]:s.push(o))}else h={eventTime:h,lane:s,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=s;if(null===(o=o.next)){if(null===(s=i.shared.pending))break;o=s.next,s.next=null,i.lastBaseUpdate=s,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,Qs|=a,e.lanes=a,e.memoizedState=d}}function Eo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(y(191,i));i.call(r)}}}var So=(new m.Component).refs;function xo(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:g({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return!!(e=e._reactInternals)&&lt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=wl(),i=kl(e),o=bo(r,i);o.payload=t,null!=n&&(o.callback=n),wo(e,o),Cl(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=wl(),i=kl(e),o=bo(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),wo(e,o),Cl(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wl(),r=kl(e),i=bo(n,r);i.tag=2,null!=t&&(i.callback=t),wo(e,i),Cl(e,r,n)}};function Io(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!wr(n,r)||!wr(i,o))}function Po(e,t,n){var r=!1,i=wi,o=t.contextType;return"object"==typeof o&&null!==o?o=go(o):(i=xi(t)?Ei:ki.current,o=(r=null!=(r=t.contextTypes))?Si(e,i):wi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function No(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function Oo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=So,yo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=go(o):(o=xi(t)?Ei:ki.current,i.context=Si(e,o)),Co(e,n,i,r),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(xo(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),Co(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4)}var Ro=Array.isArray;function Ao(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===So&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Lo(e,t){if("textarea"!==e.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Mo(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=tc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function a(t){return e&&null===t.alternate&&(t.flags=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=oc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=Ao(e,t,n),r.return=e,r):((r=nc(n.type,n.key,n.props,null,e.mode,r)).ref=Ao(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=ac(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,o){return null===t||7!==t.tag?((t=rc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=oc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case L:return(n=nc(t.type,t.key,t.props,null,e.mode,n)).ref=Ao(e,null,t),n.return=e,n;case M:return(t=ac(t,e.mode,n)).return=e,t}if(Ro(t)||ee(t))return(t=rc(t,e.mode,n,null)).return=e,t;Lo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case L:return n.key===i?n.type===j?u(e,t,n.props.children,r,i):l(e,t,n,r):null;case M:return n.key===i?c(e,t,n,r):null}if(Ro(n)||ee(n))return null!==i?null:u(e,t,n,r,null);Lo(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case L:return e=e.get(null===r.key?n:r.key)||null,r.type===j?u(t,e,r.props.children,i,r.key):l(t,e,r,i);case M:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(Ro(r)||ee(r))return u(t,e=e.get(n)||null,r,i,null);Lo(t,r)}return null}return function(s,l,c,u){var p="object"==typeof c&&null!==c&&c.type===j&&null===c.key;p&&(c=c.props.children);var m="object"==typeof c&&null!==c;if(m)switch(c.$$typeof){case L:e:{for(m=c.key,p=l;null!==p;){if(p.key===m){if(7===p.tag){if(c.type===j){n(s,p.sibling),(l=i(p,c.props.children)).return=s,s=l;break e}}else if(p.elementType===c.type){n(s,p.sibling),(l=i(p,c.props)).ref=Ao(s,p,c),l.return=s,s=l;break e}n(s,p);break}t(s,p),p=p.sibling}c.type===j?((l=rc(c.props.children,s.mode,u,c.key)).return=s,s=l):((u=nc(c.type,c.key,c.props,null,s.mode,u)).ref=Ao(s,l,c),u.return=s,s=u)}return a(s);case M:e:{for(p=c.key;null!==l;){if(l.key===p){if(4===l.tag&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){n(s,l.sibling),(l=i(l,c.children||[])).return=s,s=l;break e}n(s,l);break}t(s,l),l=l.sibling}(l=ac(c,s.mode,u)).return=s,s=l}return a(s)}if("string"==typeof c||"number"==typeof c)return c=""+c,null!==l&&6===l.tag?(n(s,l.sibling),(l=i(l,c)).return=s,s=l):(n(s,l),(l=oc(c,s.mode,u)).return=s,s=l),a(s);if(Ro(c))return function(i,a,s,l){for(var c=null,u=null,p=a,m=a=0,g=null;null!==p&&m<s.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=h(i,p,s[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),a=o(v,a,m),null===u?c=v:u.sibling=v,u=v,p=g}if(m===s.length)return n(i,p),c;if(null===p){for(;m<s.length;m++)null!==(p=d(i,s[m],l))&&(a=o(p,a,m),null===u?c=p:u.sibling=p,u=p);return c}for(p=r(i,p);m<s.length;m++)null!==(g=f(p,i,m,s[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=o(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&p.forEach((function(e){return t(i,e)})),c}(s,l,c,u);if(ee(c))return function(i,a,s,l){var c=ee(s);if("function"!=typeof c)throw Error(y(150));if(null==(s=c.call(s)))throw Error(y(151));for(var u=c=null,p=a,m=a=0,g=null,v=s.next();null!==p&&!v.done;m++,v=s.next()){p.index>m?(g=p,p=null):g=p.sibling;var _=h(i,p,v.value,l);if(null===_){null===p&&(p=g);break}e&&p&&null===_.alternate&&t(i,p),a=o(_,a,m),null===u?c=_:u.sibling=_,u=_,p=g}if(v.done)return n(i,p),c;if(null===p){for(;!v.done;m++,v=s.next())null!==(v=d(i,v.value,l))&&(a=o(v,a,m),null===u?c=v:u.sibling=v,u=v);return c}for(p=r(i,p);!v.done;m++,v=s.next())null!==(v=f(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),a=o(v,a,m),null===u?c=v:u.sibling=v,u=v);return e&&p.forEach((function(e){return t(i,e)})),c}(s,l,c,u);if(m&&Lo(s,c),void 0===c&&!p)switch(s.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,oe(s.type)||"Component"))}return n(s,l)}}var jo=Mo(!0),Do=Mo(!1),Fo={},Uo=yi(Fo),zo=yi(Fo),qo=yi(Fo);function Vo(e){if(e===Fo)throw Error(y(174));return e}function Wo(e,t){switch(bi(qo,t),bi(zo,e),bi(Uo,Fo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xe(null,"");break;default:t=xe(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}_i(Uo),bi(Uo,t)}function Bo(){_i(Uo),_i(zo),_i(qo)}function $o(e){Vo(qo.current);var t=Vo(Uo.current),n=xe(t,e.type);t!==n&&(bi(zo,e),bi(Uo,n))}function Ho(e){zo.current===e&&(_i(Uo),_i(zo))}var Ko=yi(0);function Yo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=null,Qo=null,Xo=!1;function Jo(e,t){var n=Zl(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Zo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function ea(e){if(Xo){var t=Qo;if(t){var n=t;if(!Zo(e,t)){if(!(t=ri(n.nextSibling))||!Zo(e,t))return e.flags=-1025&e.flags|2,Xo=!1,void(Go=e);Jo(Go,n)}Go=e,Qo=ri(t.firstChild)}else e.flags=-1025&e.flags|2,Xo=!1,Go=e}}function ta(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Go=e}function na(e){if(e!==Go)return!1;if(!Xo)return ta(e),Xo=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Zr(t,e.memoizedProps))for(t=Qo;t;)Jo(e,t),t=ri(t.nextSibling);if(ta(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Qo=ri(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Qo=null}}else Qo=Go?ri(e.stateNode.nextSibling):null;return!0}function ra(){Qo=Go=null,Xo=!1}var ia=[];function oa(){for(var e=0;e<ia.length;e++)ia[e]._workInProgressVersionPrimary=null;ia.length=0}var aa=A.ReactCurrentDispatcher,sa=A.ReactCurrentBatchConfig,la=0,ca=null,ua=null,da=null,ha=!1,fa=!1;function pa(){throw Error(y(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_r(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,o){if(la=o,ca=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,aa.current=null===e||null===e.memoizedState?Va:Wa,e=n(r,i),fa){o=0;do{if(fa=!1,!(25>o))throw Error(y(301));o+=1,da=ua=null,t.updateQueue=null,aa.current=Ba,e=n(r,i)}while(fa)}if(aa.current=qa,t=null!==ua&&null!==ua.next,la=0,da=ua=ca=null,ha=!1,t)throw Error(y(300));return e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===da?ca.memoizedState=da=e:da=da.next=e,da}function ya(){if(null===ua){var e=ca.alternate;e=null!==e?e.memoizedState:null}else e=ua.next;var t=null===da?ca.memoizedState:da.next;if(null!==t)da=t,ua=e;else{if(null===e)throw Error(y(310));e={memoizedState:(ua=e).memoizedState,baseState:ua.baseState,baseQueue:ua.baseQueue,queue:ua.queue,next:null},null===da?ca.memoizedState=da=e:da=da.next=e}return da}function _a(e,t){return"function"==typeof t?t(e):t}function ba(e){var t=ya(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=ua,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var s=a=o=null,l=i;do{var c=l.lane;if((la&c)===c)null!==s&&(s=s.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var u={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};null===s?(a=s=u,o=r):s=s.next=u,ca.lanes|=c,Qs|=c}l=l.next}while(null!==l&&l!==i);null===s?o=r:s.next=a,_r(r,t.memoizedState)||(Ha=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function wa(e){var t=ya(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{o=e(o,a.action),a=a.next}while(a!==i);_r(o,t.memoizedState)||(Ha=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ka(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(null!==i?e=i===r:(e=e.mutableReadLanes,(e=(la&e)===e)&&(t._workInProgressVersionPrimary=r,ia.push(t))),e)return n(t._source);throw ia.push(t),Error(y(350))}function Ca(e,t,n,r){var i=Vs;if(null===i)throw Error(y(349));var o=t._getVersion,a=o(t._source),s=aa.current,l=s.useState((function(){return ka(i,t,n)})),c=l[1],u=l[0];l=da;var d=e.memoizedState,h=d.refs,f=h.getSnapshot,p=d.source;d=d.subscribe;var m=ca;return e.memoizedState={refs:h,source:t,subscribe:r},s.useEffect((function(){h.getSnapshot=n,h.setSnapshot=c;var e=o(t._source);if(!_r(a,e)){e=n(t._source),_r(u,e)||(c(e),e=kl(m),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e;for(var r=i.entanglements,s=e;0<s;){var l=31-nn(s),d=1<<l;r[l]|=e,s&=~d}}}),[n,t,r]),s.useEffect((function(){return r(t._source,(function(){var e=h.getSnapshot,n=h.setSnapshot;try{n(e(t._source));var r=kl(m);i.mutableReadLanes|=r&i.pendingLanes}catch(e){n((function(){throw e}))}}))}),[t,r]),_r(f,n)&&_r(p,t)&&_r(d,r)||((e={pending:null,dispatch:null,lastRenderedReducer:_a,lastRenderedState:u}).dispatch=c=za.bind(null,ca,e),l.queue=e,l.baseQueue=null,u=ka(i,t,n),l.memoizedState=l.baseState=u),u}function Ea(e,t,n){return Ca(ya(),e,t,n)}function Sa(e){var t=va();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e}).dispatch=za.bind(null,ca,e),[t.memoizedState,e]}function xa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ca.updateQueue)?(t={lastEffect:null},ca.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ta(e){return e={current:e},va().memoizedState=e}function Ia(){return ya().memoizedState}function Pa(e,t,n,r){var i=va();ca.flags|=e,i.memoizedState=xa(1|t,n,void 0,void 0===r?null:r)}function Na(e,t,n,r){var i=ya();r=void 0===r?null:r;var o=void 0;if(null!==ua){var a=ua.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void xa(t,n,o,r)}ca.flags|=e,i.memoizedState=xa(1|t,n,o,r)}function Oa(e,t){return Pa(516,4,e,t)}function Ra(e,t){return Na(516,4,e,t)}function Aa(e,t){return Na(4,2,e,t)}function La(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ma(e,t,n){return n=null!=n?n.concat([e]):null,Na(4,2,La.bind(null,t,e),n)}function ja(){}function Da(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fa(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ua(e,t){var n=Zi();to(98>n?98:n,(function(){e(!0)})),to(97<n?97:n,(function(){var n=sa.transition;sa.transition=1;try{e(!1),t()}finally{sa.transition=n}}))}function za(e,t,n){var r=wl(),i=kl(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},a=t.pending;if(null===a?o.next=o:(o.next=a.next,a.next=o),t.pending=o,a=e.alternate,e===ca||null!==a&&a===ca)fa=ha=!0;else{if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var s=t.lastRenderedState,l=a(s,n);if(o.eagerReducer=a,o.eagerState=l,_r(l,s))return}catch(e){}Cl(e,i,r)}}var qa={readContext:go,useCallback:pa,useContext:pa,useEffect:pa,useImperativeHandle:pa,useLayoutEffect:pa,useMemo:pa,useReducer:pa,useRef:pa,useState:pa,useDebugValue:pa,useDeferredValue:pa,useTransition:pa,useMutableSource:pa,useOpaqueIdentifier:pa,unstable_isNewReconciler:!1},Va={readContext:go,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:go,useEffect:Oa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Pa(4,2,La.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=za.bind(null,ca,e),[r.memoizedState,e]},useRef:Ta,useState:Sa,useDebugValue:ja,useDeferredValue:function(e){var t=Sa(e),n=t[0],r=t[1];return Oa((function(){var t=sa.transition;sa.transition=1;try{r(e)}finally{sa.transition=t}}),[e]),n},useTransition:function(){var e=Sa(!1),t=e[0];return Ta(e=Ua.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=va();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Ca(r,e,t,n)},useOpaqueIdentifier:function(){if(Xo){var e=!1,t={$$typeof:K,toString:r=function(){throw e||(e=!0,n("r:"+(oi++).toString(36))),Error(y(355))},valueOf:r},n=Sa(t)[1];return 0==(2&ca.mode)&&(ca.flags|=516,xa(5,(function(){n("r:"+(oi++).toString(36))}),void 0,null)),t}var r;return Sa(t="r:"+(oi++).toString(36)),t},unstable_isNewReconciler:!1},Wa={readContext:go,useCallback:Da,useContext:go,useEffect:Ra,useImperativeHandle:Ma,useLayoutEffect:Aa,useMemo:Fa,useReducer:ba,useRef:Ia,useState:function(){return ba(_a)},useDebugValue:ja,useDeferredValue:function(e){var t=ba(_a),n=t[0],r=t[1];return Ra((function(){var t=sa.transition;sa.transition=1;try{r(e)}finally{sa.transition=t}}),[e]),n},useTransition:function(){var e=ba(_a)[0];return[Ia().current,e]},useMutableSource:Ea,useOpaqueIdentifier:function(){return ba(_a)[0]},unstable_isNewReconciler:!1},Ba={readContext:go,useCallback:Da,useContext:go,useEffect:Ra,useImperativeHandle:Ma,useLayoutEffect:Aa,useMemo:Fa,useReducer:wa,useRef:Ia,useState:function(){return wa(_a)},useDebugValue:ja,useDeferredValue:function(e){var t=wa(_a),n=t[0],r=t[1];return Ra((function(){var t=sa.transition;sa.transition=1;try{r(e)}finally{sa.transition=t}}),[e]),n},useTransition:function(){var e=wa(_a)[0];return[Ia().current,e]},useMutableSource:Ea,useOpaqueIdentifier:function(){return wa(_a)[0]},unstable_isNewReconciler:!1},$a=A.ReactCurrentOwner,Ha=!1;function Ka(e,t,n,r){t.child=null===e?Do(t,null,n,r):jo(t,e.child,n,r)}function Ya(e,t,n,r,i){n=n.render;var o=t.ref;return mo(t,i),r=ga(e,t,n,r,o,i),null===e||Ha?(t.flags|=1,Ka(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ps(e,t,i))}function Ga(e,t,n,r,i,o){if(null===e){var a=n.type;return"function"!=typeof a||ec(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=nc(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Qa(e,t,a,r,i,o))}return a=e.child,0==(i&o)&&(i=a.memoizedProps,(n=null!==(n=n.compare)?n:wr)(i,r)&&e.ref===t.ref)?ps(e,t,o):(t.flags|=1,(e=tc(a,r)).ref=t.ref,e.return=t,t.child=e)}function Qa(e,t,n,r,i,o){if(null!==e&&wr(e.memoizedProps,r)&&e.ref===t.ref){if(Ha=!1,0==(o&i))return t.lanes=e.lanes,ps(e,t,o);0!=(16384&e.flags)&&(Ha=!0)}return Za(e,t,n,r,o)}function Xa(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0==(4&t.mode))t.memoizedState={baseLanes:0},Ol(t,n);else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Ol(t,e),null;t.memoizedState={baseLanes:0},Ol(t,null!==o?o.baseLanes:n)}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ol(t,r);return Ka(e,t,i,n),t.child}function Ja(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function Za(e,t,n,r,i){var o=xi(n)?Ei:ki.current;return o=Si(t,o),mo(t,i),n=ga(e,t,n,r,o,i),null===e||Ha?(t.flags|=1,Ka(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ps(e,t,i))}function es(e,t,n,r,i){if(xi(n)){var o=!0;Ni(t)}else o=!1;if(mo(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),Po(t,n,r),Oo(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"==typeof c&&null!==c?c=go(c):c=Si(t,c=xi(n)?Ei:ki.current);var u=n.getDerivedStateFromProps,d="function"==typeof u||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==c)&&No(t,a,r,c),vo=!1;var h=t.memoizedState;a.state=h,Co(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Ci.current||vo?("function"==typeof u&&(xo(t,n,u,r),l=t.memoizedState),(s=vo||Io(t,n,s,r,h,l,c))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4)):("function"==typeof a.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4),r=!1)}else{a=t.stateNode,_o(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ao(t.type,s),a.props=c,d=t.pendingProps,h=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=go(l):l=Si(t,l=xi(n)?Ei:ki.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||h!==l)&&No(t,a,r,l),vo=!1,h=t.memoizedState,a.state=h,Co(t,r,a,i);var p=t.memoizedState;s!==d||h!==p||Ci.current||vo?("function"==typeof f&&(xo(t,n,f,r),p=t.memoizedState),(c=vo||Io(t,n,c,r,h,p,l))?(u||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=c):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return ts(e,t,n,r,o,i)}function ts(e,t,n,r,i,o){Ja(e,t);var a=0!=(64&t.flags);if(!r&&!a)return i&&Oi(t,n,!1),ps(e,t,o);r=t.stateNode,$a.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=jo(t,e.child,null,o),t.child=jo(t,null,s,o)):Ka(e,t,s,o),t.memoizedState=r.state,i&&Oi(t,n,!0),t.child}function ns(e){var t=e.stateNode;t.pendingContext?Ii(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ii(0,t.context,!1),Wo(e,t.containerInfo)}var rs,is,os,as={dehydrated:null,retryLane:0};function ss(e,t,n){var r,i=t.pendingProps,o=Ko.current,a=!1;return(r=0!=(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(a=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(o|=1),bi(Ko,1&o),null===e?(void 0!==i.fallback&&ea(t),e=i.children,o=i.fallback,a?(e=ls(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=as,e):"number"==typeof i.unstable_expectedLoadTime?(e=ls(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=as,t.lanes=33554432,e):((n=ic({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,a?(i=us(e,t,i.children,i.fallback,n),a=t.child,o=e.child.memoizedState,a.memoizedState=null===o?{baseLanes:n}:{baseLanes:o.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=as,i):(n=cs(e,t,i.children,n),t.memoizedState=null,n))}function ls(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},0==(2&i)&&null!==o?(o.childLanes=0,o.pendingProps=t):o=ic(t,i,0,null),n=rc(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function cs(e,t,n,r){var i=e.child;return e=i.sibling,n=tc(i,{mode:"visible",children:n}),0==(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function us(e,t,n,r,i){var o=t.mode,a=e.child;e=a.sibling;var s={mode:"hidden",children:n};return 0==(2&o)&&t.child!==a?((n=t.child).childLanes=0,n.pendingProps=s,null!==(a=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=a,a.nextEffect=null):t.firstEffect=t.lastEffect=null):n=tc(a,s),null!==e?r=tc(e,r):(r=rc(r,o,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function ds(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),po(e.return,t)}function hs(e,t,n,r,i,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i,a.lastEffect=o)}function fs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ka(e,t,r.children,n),0!=(2&(r=Ko.current)))r=1&r|2,t.flags|=64;else{if(null!==e&&0!=(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ds(e,n);else if(19===e.tag)ds(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(bi(Ko,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Yo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hs(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Yo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hs(t,!0,n,null,o,t.lastEffect);break;case"together":hs(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function ps(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Qs|=t.lanes,0!=(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(y(153));if(null!==t.child){for(n=tc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=tc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function ms(e,t){if(!Xo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gs(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:case 17:return xi(t.type)&&Ti(),null;case 3:return Bo(),_i(Ci),_i(ki),oa(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(na(t)?t.flags|=4:r.hydrate||(t.flags|=256)),null;case 5:Ho(t);var i=Vo(qo.current);if(n=t.type,null!==e&&null!=t.stateNode)is(e,t,n,r),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(y(166));return null}if(e=Vo(Uo.current),na(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[si]=t,r[li]=o,n){case"dialog":Ur("cancel",r),Ur("close",r);break;case"iframe":case"object":case"embed":Ur("load",r);break;case"video":case"audio":for(e=0;e<Mr.length;e++)Ur(Mr[e],r);break;case"source":Ur("error",r);break;case"img":case"image":case"link":Ur("error",r),Ur("load",r);break;case"details":Ur("toggle",r);break;case"input":he(r,o),Ur("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ur("invalid",r);break;case"textarea":be(r,o),Ur("invalid",r)}for(var a in je(n,o),e=null,o)o.hasOwnProperty(a)&&(i=o[a],"children"===a?"string"==typeof i?r.textContent!==i&&(e=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(e=["children",""+i]):b.hasOwnProperty(a)&&null!=i&&"onScroll"===a&&Ur("scroll",r));switch(n){case"input":le(r),me(r,o,!0);break;case"textarea":le(r),ke(r);break;case"select":case"option":break;default:"function"==typeof o.onClick&&(r.onclick=Gr)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(a=9===i.nodeType?i:i.ownerDocument,e===Ce&&(e=Se(n)),e===Ce?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[si]=t,e[li]=r,rs(e,t),t.stateNode=e,a=De(n,r),n){case"dialog":Ur("cancel",e),Ur("close",e),i=r;break;case"iframe":case"object":case"embed":Ur("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)Ur(Mr[i],e);i=r;break;case"source":Ur("error",e),i=r;break;case"img":case"image":case"link":Ur("error",e),Ur("load",e),i=r;break;case"details":Ur("toggle",e),i=r;break;case"input":he(e,r),i=de(e,r),Ur("invalid",e);break;case"option":i=ve(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=g({},r,{value:void 0}),Ur("invalid",e);break;case"textarea":be(e,r),i=_e(e,r),Ur("invalid",e);break;default:i=r}je(n,i);var s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];"style"===o?Le(e,l):"dangerouslySetInnerHTML"===o?null!=(l=l?l.__html:void 0)&&Pe(e,l):"children"===o?"string"==typeof l?("textarea"!==n||""!==l)&&Ne(e,l):"number"==typeof l&&Ne(e,""+l):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(b.hasOwnProperty(o)?null!=l&&"onScroll"===o&&Ur("scroll",e):null!=l&&R(e,o,l,a))}switch(n){case"input":le(e),me(e,r,!1);break;case"textarea":le(e),ke(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ye(e,!!r.multiple,o,!1):null!=r.defaultValue&&ye(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Gr)}Jr(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)os(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(y(166));n=Vo(qo.current),Vo(Uo.current),na(t)?(r=t.stateNode,n=t.memoizedProps,r[si]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[si]=t,t.stateNode=r)}return null;case 13:return _i(Ko),r=t.memoizedState,0!=(64&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&na(t):n=null!==e.memoizedState,r&&!n&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&Ko.current)?0===Ks&&(Ks=3):(0!==Ks&&3!==Ks||(Ks=4),null===Vs||0==(134217727&Qs)&&0==(134217727&Xs)||Tl(Vs,Bs))),(r||n)&&(t.flags|=4),null);case 4:return Bo(),null===e&&qr(t.stateNode.containerInfo),null;case 10:return fo(t),null;case 19:if(_i(Ko),null===(r=t.memoizedState))return null;if(o=0!=(64&t.flags),null===(a=r.rendering))if(o)ms(r,!1);else{if(0!==Ks||null!==e&&0!=(64&e.flags))for(e=t.child;null!==e;){if(null!==(a=Yo(e))){for(t.flags|=64,ms(r,!1),null!==(o=a.updateQueue)&&(t.updateQueue=o,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(a=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return bi(Ko,1&Ko.current|2),t.child}e=e.sibling}null!==r.tail&&Ji()>tl&&(t.flags|=64,o=!0,ms(r,!1),t.lanes=33554432)}else{if(!o)if(null!==(e=Yo(a))){if(t.flags|=64,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ms(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate&&!Xo)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Ji()-r.renderingStartTime>tl&&1073741824!==n&&(t.flags|=64,o=!0,ms(r,!1),t.lanes=33554432);r.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=r.last)?n.sibling=a:t.child=a,r.last=a)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Ji(),n.sibling=null,t=Ko.current,bi(Ko,o?1&t|2:1&t),n):null;case 23:case 24:return Rl(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(y(156,t.tag))}function vs(e){switch(e.tag){case 1:xi(e.type)&&Ti();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(Bo(),_i(Ci),_i(ki),oa(),0!=(64&(t=e.flags)))throw Error(y(285));return e.flags=-4097&t|64,e;case 5:return Ho(e),null;case 13:return _i(Ko),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return _i(Ko),null;case 4:return Bo(),null;case 10:return fo(e),null;case 23:case 24:return Rl(),null;default:return null}}function ys(e,t){try{var n="",r=t;do{n+=ie(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i}}function _s(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}rs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},is=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vo(Uo.current);var o,a=null;switch(n){case"input":i=de(e,i),r=de(e,r),a=[];break;case"option":i=ve(e,i),r=ve(e,r),a=[];break;case"select":i=g({},i,{value:void 0}),r=g({},r,{value:void 0}),a=[];break;case"textarea":i=_e(e,i),r=_e(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Gr)}for(c in je(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(b.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(s=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(null!=l||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(a=a||[]).push(c,l)):"children"===c?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(b.hasOwnProperty(c)?(null!=l&&"onScroll"===c&&Ur("scroll",e),a||s===l||(a=[])):"object"==typeof l&&null!==l&&l.$$typeof===K?l.toString():(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},os=function(e,t,n,r){n!==r&&(t.flags|=4)};var bs="function"==typeof WeakMap?WeakMap:Map;function ws(e,t,n){(n=bo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,al=r),_s(0,t)},n}function ks(e,t,n){(n=bo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return _s(0,t),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===sl?sl=new Set([this]):sl.add(this),_s(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var Cs="function"==typeof WeakSet?WeakSet:Set;function Es(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Gl(e,t)}else t.current=null}function Ss(e,t){switch(t.tag){case 0:case 11:case 15:case 22:case 5:case 6:case 4:case 17:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:ao(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&ni(t.stateNode.containerInfo))}throw Error(y(163))}function xs(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3==(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var i=e;r=i.next,0!=(4&(i=i.tag))&&0!=(1&i)&&(Hl(n,e),$l(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ao(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&Eo(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:case 1:e=n.child.stateNode}Eo(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&Jr(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:case 19:case 17:case 20:case 21:case 23:case 24:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Lt(n)))))}throw Error(y(163))}function Ts(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=null!=i&&i.hasOwnProperty("display")?i.display:null,r.style.display=Ae("display",i)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Is(e,t){if(Ai&&"function"==typeof Ai.onCommitFiberUnmount)try{Ai.onCommitFiberUnmount(Ri,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,void 0!==i)if(0!=(4&r))Hl(t,n);else{r=t;try{i()}catch(e){Gl(r,e)}}n=n.next}while(n!==e)}break;case 1:if(Es(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Gl(t,e)}break;case 5:Es(t);break;case 4:Ls(e,t)}}function Ps(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Ns(e){return 5===e.tag||3===e.tag||4===e.tag}function Os(e){e:{for(var t=e.return;null!==t;){if(Ns(t))break e;t=t.return}throw Error(y(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(y(161))}16&n.flags&&(Ne(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||Ns(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?Rs(e,n,t):As(e,n,t)}function Rs(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Gr));else if(4!==r&&null!==(e=e.child))for(Rs(e,t,n),e=e.sibling;null!==e;)Rs(e,t,n),e=e.sibling}function As(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(As(e,t,n),e=e.sibling;null!==e;)As(e,t,n),e=e.sibling}function Ls(e,t){for(var n,r,i=t,o=!1;;){if(!o){o=i.return;e:for(;;){if(null===o)throw Error(y(160));switch(n=o.stateNode,o.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}o=o.return}o=!0}if(5===i.tag||6===i.tag){e:for(var a=e,s=i,l=s;;)if(Is(a,l),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===s)break e;for(;null===l.sibling;){if(null===l.return||l.return===s)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}r?(a=n,s=i.stateNode,8===a.nodeType?a.parentNode.removeChild(s):a.removeChild(s)):n.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){n=i.stateNode.containerInfo,r=!0,i.child.return=i,i=i.child;continue}}else if(Is(e,i),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(o=!1)}i.sibling.return=i.return,i=i.sibling}}function Ms(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{3==(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:case 12:case 17:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var i=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[li]=r,"input"===e&&"radio"===r.type&&null!=r.name&&fe(n,r),De(e,i),t=De(e,r),i=0;i<o.length;i+=2){var a=o[i],s=o[i+1];"style"===a?Le(n,s):"dangerouslySetInnerHTML"===a?Pe(n,s):"children"===a?Ne(n,s):R(n,a,s,t)}switch(e){case"input":pe(n,r);break;case"textarea":we(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?ye(n,!!r.multiple,o,!1):e!==!!r.multiple&&(null!=r.defaultValue?ye(n,!!r.multiple,r.defaultValue,!0):ye(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(y(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,Lt(n.containerInfo)));case 13:return null!==t.memoizedState&&(el=Ji(),Ts(t.child,!0)),void js(t);case 19:return void js(t);case 23:case 24:return void Ts(t,null!==t.memoizedState)}throw Error(y(163))}function js(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Cs),t.forEach((function(t){var r=Xl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Ds(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Fs=Math.ceil,Us=A.ReactCurrentDispatcher,zs=A.ReactCurrentOwner,qs=0,Vs=null,Ws=null,Bs=0,$s=0,Hs=yi(0),Ks=0,Ys=null,Gs=0,Qs=0,Xs=0,Js=0,Zs=null,el=0,tl=1/0;function nl(){tl=Ji()+500}var rl,il=null,ol=!1,al=null,sl=null,ll=!1,cl=null,ul=90,dl=[],hl=[],fl=null,pl=0,ml=null,gl=-1,vl=0,yl=0,_l=null,bl=!1;function wl(){return 0!=(48&qs)?Ji():-1!==gl?gl:gl=Ji()}function kl(e){if(0==(2&(e=e.mode)))return 1;if(0==(4&e))return 99===Zi()?1:2;if(0===vl&&(vl=Gs),0!==oo.transition){0!==yl&&(yl=null!==Zs?Zs.pendingLanes:0),e=vl;var t=4186112&~yl;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Zi(),0!=(4&qs)&&98===e?e=Jt(12,vl):e=Jt(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),vl),e}function Cl(e,t,n){if(50<pl)throw pl=0,ml=null,Error(y(185));if(null===(e=El(e,t)))return null;tn(e,t,n),e===Vs&&(Xs|=t,4===Ks&&Tl(e,Bs));var r=Zi();1===t?0!=(8&qs)&&0==(48&qs)?Il(e):(Sl(e,n),0===qs&&(nl(),ro())):(0==(4&qs)||98!==r&&99!==r||(null===fl?fl=new Set([e]):fl.add(e)),Sl(e,n)),Zs=e}function El(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function Sl(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-nn(a),l=1<<s,c=o[s];if(-1===c){if(0==(l&r)||0!=(l&i)){c=t,Gt(l);var u=Yt;o[s]=10<=u?c+250:6<=u?c+5e3:-1}}else c<=t&&(e.expiredLanes|=l);a&=~l}if(r=Qt(e,e===Vs?Bs:0),t=Yt,0===r)null!==n&&(n!==Hi&&ji(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==Hi&&ji(n)}15===t?(n=Il.bind(null,e),null===Yi?(Yi=[n],Gi=Mi(qi,io)):Yi.push(n),n=Hi):14===t?n=no(99,Il.bind(null,e)):n=no(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,e))}}(t),xl.bind(null,e)),e.callbackPriority=t,e.callbackNode=n}}function xl(e){if(gl=-1,yl=vl=0,0!=(48&qs))throw Error(y(327));var t=e.callbackNode;if(Bl()&&e.callbackNode!==t)return null;var n=Qt(e,e===Vs?Bs:0);if(0===n)return null;var r=n,i=qs;qs|=16;var o=Ml();for(Vs===e&&Bs===r||(nl(),Al(e,r));;)try{Fl();break}catch(t){Ll(e,t)}if(ho(),Us.current=o,qs=i,null!==Ws?r=0:(Vs=null,Bs=0,r=Ks),0!=(Gs&Xs))Al(e,0);else if(0!==r){if(2===r&&(qs|=64,e.hydrate&&(e.hydrate=!1,ni(e.containerInfo)),0!==(n=Xt(e))&&(r=jl(e,n))),1===r)throw t=Ys,Al(e,0),Tl(e,n),Sl(e,Ji()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(y(345));case 2:case 5:ql(e);break;case 3:if(Tl(e,n),(62914560&n)===n&&10<(r=el+500-Ji())){if(0!==Qt(e,0))break;if(((i=e.suspendedLanes)&n)!==n){wl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ei(ql.bind(null,e),r);break}ql(e);break;case 4:if(Tl(e,n),(4186112&n)===n)break;for(r=e.eventTimes,i=-1;0<n;){var a=31-nn(n);o=1<<a,(a=r[a])>i&&(i=a),n&=~o}if(n=i,10<(n=(120>(n=Ji()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Fs(n/1960))-n)){e.timeoutHandle=ei(ql.bind(null,e),n);break}ql(e);break;default:throw Error(y(329))}}return Sl(e,Ji()),e.callbackNode===t?xl.bind(null,e):null}function Tl(e,t){for(t&=~Js,t&=~Xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nn(t),r=1<<n;e[n]=-1,t&=~r}}function Il(e){if(0!=(48&qs))throw Error(y(327));if(Bl(),e===Vs&&0!=(e.expiredLanes&Bs)){var t=Bs,n=jl(e,t);0!=(Gs&Xs)&&(n=jl(e,t=Qt(e,t)))}else n=jl(e,t=Qt(e,0));if(0!==e.tag&&2===n&&(qs|=64,e.hydrate&&(e.hydrate=!1,ni(e.containerInfo)),0!==(t=Xt(e))&&(n=jl(e,t))),1===n)throw n=Ys,Al(e,0),Tl(e,t),Sl(e,Ji()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,ql(e),Sl(e,Ji()),null}function Pl(e,t){var n=qs;qs|=1;try{return e(t)}finally{0===(qs=n)&&(nl(),ro())}}function Nl(e,t){var n=qs;qs&=-2,qs|=8;try{return e(t)}finally{0===(qs=n)&&(nl(),ro())}}function Ol(e,t){bi(Hs,$s),$s|=t,Gs|=t}function Rl(){$s=Hs.current,_i(Hs)}function Al(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ti(n)),null!==Ws)for(n=Ws.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ti();break;case 3:Bo(),_i(Ci),_i(ki),oa();break;case 5:Ho(r);break;case 4:Bo();break;case 13:case 19:_i(Ko);break;case 10:fo(r);break;case 23:case 24:Rl()}n=n.return}Vs=e,Ws=tc(e.current,null),Bs=$s=Gs=t,Ks=0,Ys=null,Js=Xs=Qs=0}function Ll(e,t){for(;;){var n=Ws;try{if(ho(),aa.current=qa,ha){for(var r=ca.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ha=!1}if(la=0,da=ua=ca=null,fa=!1,zs.current=null,null===n||null===n.return){Ks=1,Ys=t,Ws=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Bs,s.flags|=2048,s.firstEffect=s.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l;if(0==(2&s.mode)){var u=s.alternate;u?(s.updateQueue=u.updateQueue,s.memoizedState=u.memoizedState,s.lanes=u.lanes):(s.updateQueue=null,s.memoizedState=null)}var d=0!=(1&Ko.current),h=a;do{var f;if(f=13===h.tag){var p=h.memoizedState;if(null!==p)f=null!==p.dehydrated;else{var m=h.memoizedProps;f=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!d)}}if(f){var g=h.updateQueue;if(null===g){var v=new Set;v.add(c),h.updateQueue=v}else g.add(c);if(0==(2&h.mode)){if(h.flags|=64,s.flags|=16384,s.flags&=-2981,1===s.tag)if(null===s.alternate)s.tag=17;else{var y=bo(-1,1);y.tag=2,wo(s,y)}s.lanes|=1;break e}l=void 0,s=t;var _=o.pingCache;if(null===_?(_=o.pingCache=new bs,l=new Set,_.set(c,l)):void 0===(l=_.get(c))&&(l=new Set,_.set(c,l)),!l.has(s)){l.add(s);var b=Ql.bind(null,o,c,s);c.then(b,b)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(null!==h);l=Error((oe(s.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==Ks&&(Ks=2),l=ys(l,s),h=a;do{switch(h.tag){case 3:o=l,h.flags|=4096,t&=-t,h.lanes|=t,ko(h,ws(0,o,t));break e;case 1:o=l;var w=h.type,k=h.stateNode;if(0==(64&h.flags)&&("function"==typeof w.getDerivedStateFromError||null!==k&&"function"==typeof k.componentDidCatch&&(null===sl||!sl.has(k)))){h.flags|=4096,t&=-t,h.lanes|=t,ko(h,ks(h,o,t));break e}}h=h.return}while(null!==h)}zl(n)}catch(e){t=e,Ws===n&&null!==n&&(Ws=n=n.return);continue}break}}function Ml(){var e=Us.current;return Us.current=qa,null===e?qa:e}function jl(e,t){var n=qs;qs|=16;var r=Ml();for(Vs===e&&Bs===t||Al(e,t);;)try{Dl();break}catch(t){Ll(e,t)}if(ho(),qs=n,Us.current=r,null!==Ws)throw Error(y(261));return Vs=null,Bs=0,Ks}function Dl(){for(;null!==Ws;)Ul(Ws)}function Fl(){for(;null!==Ws&&!Di();)Ul(Ws)}function Ul(e){var t=rl(e.alternate,e,$s);e.memoizedProps=e.pendingProps,null===t?zl(e):Ws=t,zs.current=null}function zl(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(2048&t.flags)){if(null!==(n=gs(n,t,$s)))return void(Ws=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||0!=(1073741824&$s)||0==(4&n.mode)){for(var r=0,i=n.child;null!==i;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}null!==e&&0==(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(n=vs(t)))return n.flags&=2047,void(Ws=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Ws=t);Ws=t=e}while(null!==t);0===Ks&&(Ks=5)}function ql(e){var t=Zi();return to(99,Vl.bind(null,e,t)),null}function Vl(e,t){do{Bl()}while(null!==cl);if(0!=(48&qs))throw Error(y(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var a=e.eventTimes,s=e.expirationTimes;0<o;){var l=31-nn(o),c=1<<l;i[l]=0,a[l]=-1,s[l]=-1,o&=~c}if(null!==fl&&0==(24&r)&&fl.has(e)&&fl.delete(e),e===Vs&&(Ws=Vs=null,Bs=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(i=qs,qs|=32,zs.current=null,Qr=ln,xr(a=Sr())){if("selectionStart"in a)s={start:a.selectionStart,end:a.selectionEnd};else e:if(s=(s=a.ownerDocument)&&s.defaultView||window,(c=s.getSelection&&s.getSelection())&&0!==c.rangeCount){s=c.anchorNode,o=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{s.nodeType,l.nodeType}catch(e){s=null;break e}var u=0,d=-1,h=-1,f=0,p=0,m=a,g=null;t:for(;;){for(var v;m!==s||0!==o&&3!==m.nodeType||(d=u+o),m!==l||0!==c&&3!==m.nodeType||(h=u+c),3===m.nodeType&&(u+=m.nodeValue.length),null!==(v=m.firstChild);)g=m,m=v;for(;;){if(m===a)break t;if(g===s&&++f===o&&(d=u),g===l&&++p===c&&(h=u),null!==(v=m.nextSibling))break;g=(m=g).parentNode}m=v}s=-1===d||-1===h?null:{start:d,end:h}}else s=null;s=s||{start:0,end:0}}else s=null;Xr={focusedElem:a,selectionRange:s},ln=!1,_l=null,bl=!1,il=r;do{try{Wl()}catch(e){if(null===il)throw Error(y(330));Gl(il,e),il=il.nextEffect}}while(null!==il);_l=null,il=r;do{try{for(a=e;null!==il;){var _=il.flags;if(16&_&&Ne(il.stateNode,""),128&_){var b=il.alternate;if(null!==b){var w=b.ref;null!==w&&("function"==typeof w?w(null):w.current=null)}}switch(1038&_){case 2:Os(il),il.flags&=-3;break;case 6:Os(il),il.flags&=-3,Ms(il.alternate,il);break;case 1024:il.flags&=-1025;break;case 1028:il.flags&=-1025,Ms(il.alternate,il);break;case 4:Ms(il.alternate,il);break;case 8:Ls(a,s=il);var k=s.alternate;Ps(s),null!==k&&Ps(k)}il=il.nextEffect}}catch(e){if(null===il)throw Error(y(330));Gl(il,e),il=il.nextEffect}}while(null!==il);if(w=Xr,b=Sr(),_=w.focusedElem,a=w.selectionRange,b!==_&&_&&_.ownerDocument&&Er(_.ownerDocument.documentElement,_)){null!==a&&xr(_)&&(b=a.start,void 0===(w=a.end)&&(w=b),"selectionStart"in _?(_.selectionStart=b,_.selectionEnd=Math.min(w,_.value.length)):(w=(b=_.ownerDocument||document)&&b.defaultView||window).getSelection&&(w=w.getSelection(),s=_.textContent.length,k=Math.min(a.start,s),a=void 0===a.end?k:Math.min(a.end,s),!w.extend&&k>a&&(s=a,a=k,k=s),s=Cr(_,k),o=Cr(_,a),s&&o&&(1!==w.rangeCount||w.anchorNode!==s.node||w.anchorOffset!==s.offset||w.focusNode!==o.node||w.focusOffset!==o.offset)&&((b=b.createRange()).setStart(s.node,s.offset),w.removeAllRanges(),k>a?(w.addRange(b),w.extend(o.node,o.offset)):(b.setEnd(o.node,o.offset),w.addRange(b))))),b=[];for(w=_;w=w.parentNode;)1===w.nodeType&&b.push({element:w,left:w.scrollLeft,top:w.scrollTop});for("function"==typeof _.focus&&_.focus(),_=0;_<b.length;_++)(w=b[_]).element.scrollLeft=w.left,w.element.scrollTop=w.top}ln=!!Qr,Xr=Qr=null,e.current=n,il=r;do{try{for(_=e;null!==il;){var C=il.flags;if(36&C&&xs(_,il.alternate,il),128&C){b=void 0;var E=il.ref;if(null!==E){var S=il.stateNode;il.tag,b=S,"function"==typeof E?E(b):E.current=b}}il=il.nextEffect}}catch(e){if(null===il)throw Error(y(330));Gl(il,e),il=il.nextEffect}}while(null!==il);il=null,Ki(),qs=i}else e.current=n;if(ll)ll=!1,cl=e,ul=t;else for(il=r;null!==il;)t=il.nextEffect,il.nextEffect=null,8&il.flags&&((C=il).sibling=null,C.stateNode=null),il=t;if(0===(r=e.pendingLanes)&&(sl=null),1===r?e===ml?pl++:(pl=0,ml=e):pl=0,n=n.stateNode,Ai&&"function"==typeof Ai.onCommitFiberRoot)try{Ai.onCommitFiberRoot(Ri,n,void 0,64==(64&n.current.flags))}catch(e){}if(Sl(e,Ji()),ol)throw ol=!1,e=al,al=null,e;return 0!=(8&qs)||ro(),null}function Wl(){for(;null!==il;){var e=il.alternate;bl||null===_l||(0!=(8&il.flags)?ht(il,_l)&&(bl=!0):13===il.tag&&Ds(e,il)&&ht(il,_l)&&(bl=!0));var t=il.flags;0!=(256&t)&&Ss(e,il),0==(512&t)||ll||(ll=!0,no(97,(function(){return Bl(),null}))),il=il.nextEffect}}function Bl(){if(90!==ul){var e=97<ul?97:ul;return ul=90,to(e,Kl)}return!1}function $l(e,t){dl.push(t,e),ll||(ll=!0,no(97,(function(){return Bl(),null})))}function Hl(e,t){hl.push(t,e),ll||(ll=!0,no(97,(function(){return Bl(),null})))}function Kl(){if(null===cl)return!1;var e=cl;if(cl=null,0!=(48&qs))throw Error(y(331));var t=qs;qs|=32;var n=hl;hl=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],a=i.destroy;if(i.destroy=void 0,"function"==typeof a)try{a()}catch(e){if(null===o)throw Error(y(330));Gl(o,e)}}for(n=dl,dl=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var s=i.create;i.destroy=s()}catch(e){if(null===o)throw Error(y(330));Gl(o,e)}}for(s=e.current.firstEffect;null!==s;)e=s.nextEffect,s.nextEffect=null,8&s.flags&&(s.sibling=null,s.stateNode=null),s=e;return qs=t,ro(),!0}function Yl(e,t,n){wo(e,t=ws(0,t=ys(n,t),1)),t=wl(),null!==(e=El(e,1))&&(tn(e,1,t),Sl(e,t))}function Gl(e,t){if(3===e.tag)Yl(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){Yl(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sl||!sl.has(r))){var i=ks(n,e=ys(t,e),1);if(wo(n,i),i=wl(),null!==(n=El(n,1)))tn(n,1,i),Sl(n,i);else if("function"==typeof r.componentDidCatch&&(null===sl||!sl.has(r)))try{r.componentDidCatch(t,e)}catch(e){}break}}n=n.return}}function Ql(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=wl(),e.pingedLanes|=e.suspendedLanes&n,Vs===e&&(Bs&n)===n&&(4===Ks||3===Ks&&(62914560&Bs)===Bs&&500>Ji()-el?Al(e,0):Js|=n),Sl(e,t)}function Xl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(0==(2&(t=e.mode))?t=1:0==(4&t)?t=99===Zi()?1:2:(0===vl&&(vl=Gs),0===(t=Zt(62914560&~vl))&&(t=4194304))),n=wl(),null!==(e=El(e,t))&&(tn(e,t,n),Sl(e,n))}function Jl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Zl(e,t,n,r){return new Jl(e,t,n,r)}function ec(e){return!(!(e=e.prototype)||!e.isReactComponent)}function tc(e,t){var n=e.alternate;return null===n?((n=Zl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nc(e,t,n,r,i,o){var a=2;if(r=e,"function"==typeof e)ec(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case j:return rc(n.children,i,o,t);case Y:a=8,i|=16;break;case D:a=8,i|=1;break;case F:return(e=Zl(12,n,t,8|i)).elementType=F,e.type=F,e.lanes=o,e;case V:return(e=Zl(13,n,t,i)).type=V,e.elementType=V,e.lanes=o,e;case W:return(e=Zl(19,n,t,i)).elementType=W,e.lanes=o,e;case G:return ic(n,i,o,t);case Q:return(e=Zl(24,n,t,i)).elementType=Q,e.lanes=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case U:a=10;break e;case z:a=9;break e;case q:a=11;break e;case B:a=14;break e;case $:a=16,r=null;break e;case H:a=22;break e}throw Error(y(130,null==e?e:typeof e,""))}return(t=Zl(a,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function rc(e,t,n,r){return(e=Zl(7,e,r,t)).lanes=n,e}function ic(e,t,n,r){return(e=Zl(23,e,r,t)).elementType=G,e.lanes=n,e}function oc(e,t,n){return(e=Zl(6,e,null,t)).lanes=n,e}function ac(e,t,n){return(t=Zl(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sc(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=en(0),this.expirationTimes=en(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=en(0),this.mutableSourceEagerHydrationData=null}function lc(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:M,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function cc(e,t,n,r){var i=t.current,o=wl(),a=kl(i);e:if(n){t:{if(lt(n=n._reactInternals)!==n||1!==n.tag)throw Error(y(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break t;case 1:if(xi(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break t}}s=s.return}while(null!==s);throw Error(y(171))}if(1===n.tag){var l=n.type;if(xi(l)){n=Pi(n,l,s);break e}}n=s}else n=wi;return null===t.context?t.context=n:t.pendingContext=n,(t=bo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),wo(i,t),Cl(i,a,o),a}function uc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function dc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function hc(e,t){dc(e,t),(e=e.alternate)&&dc(e,t)}function fc(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new sc(e,t,null!=n&&!0===n.hydrate),t=Zl(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,yo(t),e[ci]=n.current,qr(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var i=(t=r[e])._getVersion;i=i(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}function pc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function mc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o._internalRoot;if("function"==typeof i){var s=i;i=function(){var e=uc(a);s.call(e)}}cc(t,a,e,i)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new fc(e,0,t?{hydrate:!0}:void 0)}(n,r),a=o._internalRoot,"function"==typeof i){var l=i;i=function(){var e=uc(a);l.call(e)}}Nl((function(){cc(t,a,e,i)}))}return uc(a)}function gc(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!pc(t))throw Error(y(200));return lc(e,t,null,n)}rl=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||Ci.current)Ha=!0;else{if(0==(n&r)){switch(Ha=!1,t.tag){case 3:ns(t),ra();break;case 5:$o(t);break;case 1:xi(t.type)&&Ni(t);break;case 4:Wo(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;bi(so,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!=(n&t.child.childLanes)?ss(e,t,n):(bi(Ko,1&Ko.current),null!==(t=ps(e,t,n))?t.sibling:null);bi(Ko,1&Ko.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(64&e.flags)){if(r)return fs(e,t,n);t.flags|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),bi(Ko,Ko.current),r)break;return null;case 23:case 24:return t.lanes=0,Xa(e,t,n)}return ps(e,t,n)}Ha=0!=(16384&e.flags)}else Ha=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Si(t,ki.current),mo(t,n),i=ga(null,t,r,e,i,n),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,xi(r)){var o=!0;Ni(t)}else o=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,yo(t);var a=r.getDerivedStateFromProps;"function"==typeof a&&xo(t,r,a,e),i.updater=To,t.stateNode=i,i._reactInternals=t,Oo(t,r,e,n),t=ts(null,t,r,!0,o,n)}else t.tag=0,Ka(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=(o=i._init)(i._payload),t.type=i,o=t.tag=function(e){if("function"==typeof e)return ec(e)?1:0;if(null!=e){if((e=e.$$typeof)===q)return 11;if(e===B)return 14}return 2}(i),e=ao(i,e),o){case 0:t=Za(null,t,i,e,n);break e;case 1:t=es(null,t,i,e,n);break e;case 11:t=Ya(null,t,i,e,n);break e;case 14:t=Ga(null,t,i,ao(i.type,e),r,n);break e}throw Error(y(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Za(e,t,r,i=t.elementType===r?i:ao(r,i),n);case 1:return r=t.type,i=t.pendingProps,es(e,t,r,i=t.elementType===r?i:ao(r,i),n);case 3:if(ns(t),r=t.updateQueue,null===e||null===r)throw Error(y(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,_o(e,t),Co(t,r,null,n),(r=t.memoizedState.element)===i)ra(),t=ps(e,t,n);else{if((o=(i=t.stateNode).hydrate)&&(Qo=ri(t.stateNode.containerInfo.firstChild),Go=t,o=Xo=!0),o){if(null!=(e=i.mutableSourceEagerHydrationData))for(i=0;i<e.length;i+=2)(o=e[i])._workInProgressVersionPrimary=e[i+1],ia.push(o);for(n=Do(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else Ka(e,t,r,n),ra();t=t.child}return t;case 5:return $o(t),null===e&&ea(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,Zr(r,i)?a=null:null!==o&&Zr(r,o)&&(t.flags|=16),Ja(e,t),Ka(e,t,a,n),t.child;case 6:return null===e&&ea(t),null;case 13:return ss(e,t,n);case 4:return Wo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=jo(t,null,r,n):Ka(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Ya(e,t,r,i=t.elementType===r?i:ao(r,i),n);case 7:return Ka(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ka(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value;var s=t.type._context;if(bi(so,s._currentValue),s._currentValue=o,null!==a)if(s=a.value,0===(o=_r(s,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(s,o):1073741823))){if(a.children===i.children&&!Ci.current){t=ps(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var l=s.dependencies;if(null!==l){a=s.child;for(var c=l.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&o)){1===s.tag&&((c=bo(-1,n&-n)).tag=2,wo(s,c)),s.lanes|=n,null!==(c=s.alternate)&&(c.lanes|=n),po(s.return,n),l.lanes|=n;break}c=c.next}}else a=10===s.tag&&s.type===t.type?null:s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}Ka(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(o=t.pendingProps).children,mo(t,n),r=r(i=go(i,o.unstable_observedBits)),t.flags|=1,Ka(e,t,r,n),t.child;case 14:return o=ao(i=t.type,t.pendingProps),Ga(e,t,i,o=ao(i.type,o),r,n);case 15:return Qa(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ao(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,xi(r)?(e=!0,Ni(t)):e=!1,mo(t,n),Po(t,r,i),Oo(t,r,i,n),ts(null,t,r,!0,e,n);case 19:return fs(e,t,n);case 23:case 24:return Xa(e,t,n)}throw Error(y(156,t.tag))},fc.prototype.render=function(e){cc(e,this._internalRoot,null,null)},fc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;cc(null,e,null,(function(){t[ci]=null}))},ft=function(e){13===e.tag&&(Cl(e,4,wl()),hc(e,4))},pt=function(e){13===e.tag&&(Cl(e,67108864,wl()),hc(e,67108864))},mt=function(e){if(13===e.tag){var t=wl(),n=kl(e);Cl(e,n,t),hc(e,n)}},gt=function(e,t){return t()},Ue=function(e,t,n){switch(t){case"input":if(pe(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pi(r);if(!i)throw Error(y(90));ce(r),pe(r,i)}}}break;case"textarea":we(e,n);break;case"select":null!=(t=n.value)&&ye(e,!!n.multiple,t,!1)}},$e=Pl,He=function(e,t,n,r,i){var o=qs;qs|=4;try{return to(98,e.bind(null,t,n,r,i))}finally{0===(qs=o)&&(nl(),ro())}},Ke=function(){0==(49&qs)&&(function(){if(null!==fl){var e=fl;fl=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,Sl(e,Ji())}))}ro()}(),Bl())},Ye=function(e,t){var n=qs;qs|=2;try{return e(t)}finally{0===(qs=n)&&(nl(),ro())}};var vc={Events:[hi,fi,pi,We,Be,Bl,{current:!1}]},yc={findFiberByHostInstance:di,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},_c={bundleType:yc.bundleType,version:yc.version,rendererPackageName:yc.rendererPackageName,rendererConfig:yc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=dt(e))?null:e.stateNode},findFiberByHostInstance:yc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Ri=bc.inject(_c),Ai=bc}catch(Ie){}}r=vc,i=gc,a=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(y(188));throw Error(y(268,Object.keys(e)))}return e=null===(e=dt(t))?null:e.stateNode},s=function(e,t){var n=qs;if(0!=(48&n))return e(t);qs|=1;try{if(e)return to(99,e.bind(null,t))}finally{qs=n,ro()}},l=function(e,t,n){if(!pc(t))throw Error(y(200));return mc(null,e,t,!0,n)},c=function(e,t,n){if(!pc(t))throw Error(y(200));return mc(null,e,t,!1,n)},u=function(e){if(!pc(e))throw Error(y(40));return!!e._reactRootContainer&&(Nl((function(){mc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ci]=null}))})),!0)},d=Pl,h=function(e,t){return gc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},f=function(e,t,n,r){if(!pc(n))throw Error(y(200));if(null==e||void 0===e._reactInternals)throw Error(y(38));return mc(e,t,n,!1,r)},p="17.0.2"})),o.register("74qJ9",(function(e,t){e.exports=o("euVoi")})),o.register("euVoi",(function(t,n){var r,i,o,a,s,l,c,u,d,h,f,p,m,g,v,y,_,b,w,k,C,E,S;if(e(t.exports,"unstable_now",(()=>r),(e=>r=e)),e(t.exports,"unstable_shouldYield",(()=>i),(e=>i=e)),e(t.exports,"unstable_forceFrameRate",(()=>o),(e=>o=e)),e(t.exports,"unstable_IdlePriority",(()=>a),(e=>a=e)),e(t.exports,"unstable_ImmediatePriority",(()=>s),(e=>s=e)),e(t.exports,"unstable_LowPriority",(()=>l),(e=>l=e)),e(t.exports,"unstable_NormalPriority",(()=>c),(e=>c=e)),e(t.exports,"unstable_Profiling",(()=>u),(e=>u=e)),e(t.exports,"unstable_UserBlockingPriority",(()=>d),(e=>d=e)),e(t.exports,"unstable_cancelCallback",(()=>h),(e=>h=e)),e(t.exports,"unstable_continueExecution",(()=>f),(e=>f=e)),e(t.exports,"unstable_getCurrentPriorityLevel",(()=>p),(e=>p=e)),e(t.exports,"unstable_getFirstCallbackNode",(()=>m),(e=>m=e)),e(t.exports,"unstable_next",(()=>g),(e=>g=e)),e(t.exports,"unstable_pauseExecution",(()=>v),(e=>v=e)),e(t.exports,"unstable_requestPaint",(()=>y),(e=>y=e)),e(t.exports,"unstable_runWithPriority",(()=>_),(e=>_=e)),e(t.exports,"unstable_scheduleCallback",(()=>b),(e=>b=e)),e(t.exports,"unstable_wrapCallback",(()=>w),(e=>w=e)),"object"==typeof performance&&"function"==typeof performance.now){var x=performance;r=function(){return x.now()}}else{var T=Date,I=T.now();r=function(){return T.now()-I}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var P=null,N=null,O=function(){if(null!==P)try{var e=r();P(!0,e),P=null}catch(e){throw setTimeout(O,0),e}};k=function(e){null!==P?setTimeout(k,0,e):(P=e,setTimeout(O,0))},C=function(e,t){N=setTimeout(e,t)},E=function(){clearTimeout(N)},i=function(){return!1},S=o=function(){}}else{var R=window.setTimeout,A=window.clearTimeout;if("undefined"!=typeof console){var L=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof L&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var M=!1,j=null,D=-1,F=5,U=0;i=function(){return r()>=U},S=function(){},o=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<e?Math.floor(1e3/e):5};var z=new MessageChannel,q=z.port2;z.port1.onmessage=function(){if(null!==j){var e=r();U=e+F;try{j(!0,e)?q.postMessage(null):(M=!1,j=null)}catch(e){throw q.postMessage(null),e}}else M=!1},k=function(e){j=e,M||(M=!0,q.postMessage(null))},C=function(e,t){D=R((function(){e(r())}),t)},E=function(){A(D),D=-1}}function V(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<$(i,t)))break e;e[r]=t,e[n]=i,n=r}}function W(e){return void 0===(e=e[0])?null:e}function B(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,a=e[o],s=o+1,l=e[s];if(void 0!==a&&0>$(a,n))void 0!==l&&0>$(l,a)?(e[r]=l,e[s]=n,r=s):(e[r]=a,e[o]=n,r=o);else{if(!(void 0!==l&&0>$(l,n)))break e;e[r]=l,e[s]=n,r=s}}}return t}return null}function $(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var H=[],K=[],Y=1,G=null,Q=3,X=!1,J=!1,Z=!1;function ee(e){for(var t=W(K);null!==t;){if(null===t.callback)B(K);else{if(!(t.startTime<=e))break;B(K),t.sortIndex=t.expirationTime,V(H,t)}t=W(K)}}function te(e){if(Z=!1,ee(e),!J)if(null!==W(H))J=!0,k(ne);else{var t=W(K);null!==t&&C(te,t.startTime-e)}}function ne(e,t){J=!1,Z&&(Z=!1,E()),X=!0;var n=Q;try{for(ee(t),G=W(H);null!==G&&(!(G.expirationTime>t)||e&&!i());){var o=G.callback;if("function"==typeof o){G.callback=null,Q=G.priorityLevel;var a=o(G.expirationTime<=t);t=r(),"function"==typeof a?G.callback=a:G===W(H)&&B(H),ee(t)}else B(H);G=W(H)}if(null!==G)var s=!0;else{var l=W(K);null!==l&&C(te,l.startTime-t),s=!1}return s}finally{G=null,Q=n,X=!1}}a=5,s=1,l=4,c=3,u=null,d=2,h=function(e){e.callback=null},f=function(){J||X||(J=!0,k(ne))},p=function(){return Q},m=function(){return W(H)},g=function(e){switch(Q){case 1:case 2:case 3:var t=3;break;default:t=Q}var n=Q;Q=t;try{return e()}finally{Q=n}},v=function(){},y=S,_=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Q;Q=e;try{return t()}finally{Q=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:Y++,callback:t,priorityLevel:e,startTime:n,expirationTime:o=n+o,sortIndex:-1},n>i?(e.sortIndex=n,V(K,e),null===W(H)&&e===W(K)&&(Z?E():Z=!0,C(te,n-i))):(e.sortIndex=o,V(H,e),J||X||(J=!0,k(ne))),e},w=function(e){var t=Q;return function(){var n=Q;Q=t;try{return e.apply(this,arguments)}finally{Q=n}}}})),o.register("7in6f",(function(e,t){var n=o("7bPDF");function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}})),o.register("7bPDF",(function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"})),o.register("eYlEu",(function(t,n){e(t.exports,"default",(()=>c),(e=>c=e));var r=o("1CjO7"),i=o("8pjhF"),a=n&&!n.nodeType&&n,s=a&&t&&!t.nodeType&&t,l=s&&s.exports===a?r.default.Buffer:void 0,c=(l?l.isBuffer:void 0)||i.default})),o.register("1CjO7",(function(t,n){e(t.exports,"default",(()=>a));var r=o("lpbkP"),i="object"==typeof self&&self&&self.Object===Object&&self,a=r.default||i||Function("return this")()})),o.register("lpbkP",(function(n,r){e(n.exports,"default",(()=>i));var i="object"==typeof t&&t&&t.Object===Object&&t})),o.register("8pjhF",(function(t,n){e(t.exports,"default",(()=>r));var r=function(){return!1}})),o.register("8gAK4",(function(t,n){e(t.exports,"default",(()=>l),(e=>l=e));var r=o("lpbkP"),i=n&&!n.nodeType&&n,a=i&&t&&!t.nodeType&&t,s=a&&a.exports===i&&r.default.process,l=function(){try{var e=a&&a.require&&a.require("util").types;return e||s&&s.binding&&s.binding("util")}catch(e){}}()})),o.register("6OXlT",(function(t,n){e(t.exports,"default",(()=>c),(e=>c=e));var r=o("1CjO7"),i=n&&!n.nodeType&&n,a=i&&t&&!t.nodeType&&t,s=a&&a.exports===i?r.default.Buffer:void 0,l=s?s.allocUnsafe:void 0;var c=function(e,t){if(t)return e.slice();var n=e.length,r=l?l(n):new e.constructor(n);return e.copy(r),r}})),o.register("laXNe",(function(t,n){var r,i,o,a,s,l,c,u,d,h,f,p,m,g,v,y,_,b,w,k,C,E,S,x,T,I,P,N;e(t.exports,"AsyncMode",(()=>r),(e=>r=e)),e(t.exports,"ConcurrentMode",(()=>i),(e=>i=e)),e(t.exports,"ContextConsumer",(()=>o),(e=>o=e)),e(t.exports,"ContextProvider",(()=>a),(e=>a=e)),e(t.exports,"Element",(()=>s),(e=>s=e)),e(t.exports,"ForwardRef",(()=>l),(e=>l=e)),e(t.exports,"Fragment",(()=>c),(e=>c=e)),e(t.exports,"Lazy",(()=>u),(e=>u=e)),e(t.exports,"Memo",(()=>d),(e=>d=e)),e(t.exports,"Portal",(()=>h),(e=>h=e)),e(t.exports,"Profiler",(()=>f),(e=>f=e)),e(t.exports,"StrictMode",(()=>p),(e=>p=e)),e(t.exports,"Suspense",(()=>m),(e=>m=e)),e(t.exports,"isAsyncMode",(()=>g),(e=>g=e)),e(t.exports,"isConcurrentMode",(()=>v),(e=>v=e)),e(t.exports,"isContextConsumer",(()=>y),(e=>y=e)),e(t.exports,"isContextProvider",(()=>_),(e=>_=e)),e(t.exports,"isElement",(()=>b),(e=>b=e)),e(t.exports,"isForwardRef",(()=>w),(e=>w=e)),e(t.exports,"isFragment",(()=>k),(e=>k=e)),e(t.exports,"isLazy",(()=>C),(e=>C=e)),e(t.exports,"isMemo",(()=>E),(e=>E=e)),e(t.exports,"isPortal",(()=>S),(e=>S=e)),e(t.exports,"isProfiler",(()=>x),(e=>x=e)),e(t.exports,"isStrictMode",(()=>T),(e=>T=e)),e(t.exports,"isSuspense",(()=>I),(e=>I=e)),e(t.exports,"isValidElementType",(()=>P),(e=>P=e)),e(t.exports,"typeOf",(()=>N),(e=>N=e));var O="function"==typeof Symbol&&Symbol.for,R=O?Symbol.for("react.element"):60103,A=O?Symbol.for("react.portal"):60106,L=O?Symbol.for("react.fragment"):60107,M=O?Symbol.for("react.strict_mode"):60108,j=O?Symbol.for("react.profiler"):60114,D=O?Symbol.for("react.provider"):60109,F=O?Symbol.for("react.context"):60110,U=O?Symbol.for("react.async_mode"):60111,z=O?Symbol.for("react.concurrent_mode"):60111,q=O?Symbol.for("react.forward_ref"):60112,V=O?Symbol.for("react.suspense"):60113,W=O?Symbol.for("react.suspense_list"):60120,B=O?Symbol.for("react.memo"):60115,$=O?Symbol.for("react.lazy"):60116,H=O?Symbol.for("react.block"):60121,K=O?Symbol.for("react.fundamental"):60117,Y=O?Symbol.for("react.responder"):60118,G=O?Symbol.for("react.scope"):60119;function Q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case R:switch(e=e.type){case U:case z:case L:case j:case M:case V:return e;default:switch(e=e&&e.$$typeof){case F:case q:case $:case B:case D:return e;default:return t}}case A:return t}}}function X(e){return Q(e)===z}r=U,i=z,o=F,a=D,s=R,l=q,c=L,u=$,d=B,h=A,f=j,p=M,m=V,g=function(e){return X(e)||Q(e)===U},v=X,y=function(e){return Q(e)===F},_=function(e){return Q(e)===D},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===R},w=function(e){return Q(e)===q},k=function(e){return Q(e)===L},C=function(e){return Q(e)===$},E=function(e){return Q(e)===B},S=function(e){return Q(e)===A},x=function(e){return Q(e)===j},T=function(e){return Q(e)===M},I=function(e){return Q(e)===V},P=function(e){return"string"==typeof e||"function"==typeof e||e===L||e===z||e===j||e===M||e===V||e===W||"object"==typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===B||e.$$typeof===D||e.$$typeof===F||e.$$typeof===q||e.$$typeof===K||e.$$typeof===Y||e.$$typeof===G||e.$$typeof===H)},N=Q}));var a;a=o("eN4lT");var s,l=o("8T3gX");!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),s=o("WeH8M");l=o("8T3gX");
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(){},_={},b={},w=null,k={mark:y,measure:y};try{"undefined"!=typeof window&&(_=window),"undefined"!=typeof document&&(b=document),"undefined"!=typeof MutationObserver&&(w=MutationObserver),"undefined"!=typeof performance&&(k=performance)}catch(e){}var C=(_.navigator||{}).userAgent,E=void 0===C?"":C,S=_,x=b,T=w,I=k,P=(S.document,!!x.documentElement&&!!x.head&&"function"==typeof x.addEventListener&&"function"==typeof x.createElement),N=~E.indexOf("MSIE")||~E.indexOf("Trident/"),O=["HTML","HEAD","STYLE","SCRIPT"],R=function(){try{return!0}catch(e){return!1}}(),A={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},L={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},M={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},j={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},D=/fa[srltdbk\-\ ]/,F=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,U={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},z=[1,2,3,4,5,6,7,8,9,10],q=z.concat([11,12,13,14,15,16,17,18,19,20]),V=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W="duotone-group",B="swap-opacity",$="primary",H="secondary",K=[].concat(m(Object.keys(L)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W,B,$,H]).concat(z.map((function(e){return"".concat(e,"x")}))).concat(q.map((function(e){return"w-".concat(e)}))),Y=S.FontAwesomeConfig||{};if(x&&"function"==typeof x.querySelector){[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=p(e,2),n=t[0],r=t[1],i=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n));null!=i&&(Y[r]=i)}))}var G=u(u({},{familyPrefix:"fa",styleDefault:"solid",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0}),Y);G.autoReplaceSvg||(G.observeMutations=!1);var Q={};Object.keys(G).forEach((function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(t){G[e]=t,X.forEach((function(e){return e(Q)}))},get:function(){return G[e]}})})),S.FontAwesomeConfig=Q;var X=[];var J={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Z(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function ee(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function te(e){return e.classList?ee(e.classList):(e.getAttribute("class")||"").split(" ").filter((function(e){return e}))}function ne(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function re(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")}),"")}function ie(e){return e.size!==J.size||e.x!==J.x||e.y!==J.y||e.rotate!==J.rotate||e.flipX||e.flipY}function oe(){var e="fa",t="svg-inline--fa",n=Q.familyPrefix,r=Q.replacementClass,i=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var ae=!1;function se(){Q.autoAddCss&&!ae&&(!function(e){if(e&&P){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=x.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}x.head.insertBefore(t,r)}}(oe()),ae=!0)}var le={mixout:function(){return{dom:{css:oe,insertCss:se}}},hooks:function(){return{beforeDOMElementCreation:function(){se()},beforeI2svg:function(){se()}}}},ce=S||{};ce.___FONT_AWESOME___||(ce.___FONT_AWESOME___={}),ce.___FONT_AWESOME___.styles||(ce.___FONT_AWESOME___.styles={}),ce.___FONT_AWESOME___.hooks||(ce.___FONT_AWESOME___.hooks={}),ce.___FONT_AWESOME___.shims||(ce.___FONT_AWESOME___.shims=[]);var ue=ce.___FONT_AWESOME___,de=[],he=!1;function fe(e){P&&(he?setTimeout(e,0):de.push(e))}function pe(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,o=void 0===i?[]:i;return"string"==typeof e?ne(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(ne(e[n]),'" ')}),"").trim()}(r),">").concat(o.map(pe).join(""),"</").concat(t,">")}function me(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}P&&((he=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState))||x.addEventListener("DOMContentLoaded",(function e(){x.removeEventListener("DOMContentLoaded",e),he=1,de.map((function(e){return e()}))})));var ge=function(e,t,n,r){var i,o,a,s=Object.keys(e),l=s.length,c=void 0!==r?function(e,t){return function(n,r,i,o){return e.call(t,n,r,i,o)}}(t,r):t;for(void 0===n?(i=1,a=e[s[0]]):(i=0,a=n);i<l;i++)a=c(a,e[o=s[i]],o,e);return a};function ve(e){var t=function(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&i)<<10)+(1023&o)+65536):(t.push(i),n--)}else t.push(i)}return t}(e);return 1===t.length?t[0].toString(16):null}function ye(e){return Object.keys(e).reduce((function(t,n){var r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function _e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,o=ye(t);"function"!=typeof ue.hooks.addPack||i?ue.styles[e]=u(u({},ue.styles[e]||{}),o):ue.hooks.addPack(e,ye(t)),"fas"===e&&_e("fa",t)}var be=ue.styles,we=ue.shims,ke=Object.values(M),Ce=null,Ee={},Se={},xe={},Te={},Ie={},Pe=Object.keys(A);function Ne(e,t){var n,r=t.split("-"),i=r[0],o=r.slice(1).join("-");return i!==e||""===o||(n=o,~K.indexOf(n))?null:o}var Oe,Re=function(){var e=function(e){return ge(be,(function(t,n,r){return t[r]=ge(n,e,{}),t}),{})};Ee=e((function(e,t,n){(t[3]&&(e[t[3]]=n),t[2])&&t[2].filter((function(e){return"number"==typeof e})).forEach((function(t){e[t.toString(16)]=n}));return e})),Se=e((function(e,t,n){(e[n]=n,t[2])&&t[2].filter((function(e){return"string"==typeof e})).forEach((function(t){e[t]=n}));return e})),Ie=e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in be||Q.autoFetchSvg,n=ge(we,(function(e,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||t||(i="fas"),"string"==typeof r&&(e.names[r]={prefix:i,iconName:o}),"number"==typeof r&&(e.unicodes[r.toString(16)]={prefix:i,iconName:o}),e}),{names:{},unicodes:{}});xe=n.names,Te=n.unicodes,Ce=De(Q.styleDefault)};function Ae(e,t){return(Ee[e]||{})[t]}function Le(e,t){return(Ie[e]||{})[t]}function Me(e){return xe[e]||{prefix:null,iconName:null}}function je(){return Ce}Oe=function(e){Ce=De(e.styleDefault)},X.push(Oe),Re();function De(e){var t=L[e]||L[A[e]],n=e in ue.styles?e:null;return t||n||null}function Fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipLookups,r=void 0!==n&&n,i=null,o=e.reduce((function(e,t){var n=Ne(Q.familyPrefix,t);if(be[t]?(t=ke.includes(t)?j[t]:t,i=t,e.prefix=t):Pe.indexOf(t)>-1?(i=t,e.prefix=De(t)):n?e.iconName=n:t!==Q.replacementClass&&e.rest.push(t),!r&&e.prefix&&e.iconName){var o="fa"===i?Me(e.iconName):{},a=Le(e.prefix,e.iconName);o.prefix&&(i=null),e.iconName=o.iconName||a||e.iconName,e.prefix=o.prefix||e.prefix,"far"!==e.prefix||be.far||!be.fas||Q.autoFetchSvg||(e.prefix="fas")}return e}),{prefix:null,iconName:null,rest:[]});return"fa"!==o.prefix&&"fa"!==i||(o.prefix=je()||"fas"),o}var Ue=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t,n,r;return t=e,n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(t){e.definitions[t]=u(u({},e.definitions[t]||{}),i[t]),_e(t,i[t]);var n=M[t];n&&_e(n,i[t]),Re()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,o=r.iconName,a=r.icon,s=a[2];e[i]||(e[i]={}),s.length>0&&s.forEach((function(t){"string"==typeof t&&(e[i][t]=a)})),e[i][o]=a})),e}}],n&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ze=[],qe={},Ve={},We=Object.keys(Ve);function Be(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=qe[e]||[];return o.forEach((function(e){t=e.apply(null,[t].concat(r))})),t}function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=qe[e]||[];i.forEach((function(e){e.apply(null,n)}))}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ve[e]?Ve[e].apply(null,t):void 0}function Ke(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,n=e.prefix||je();if(t)return t=Le(n,t)||t,me(Ye.definitions,n,t)||me(ue.styles,n,t)}var Ye=new Ue,Ge={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return P?($e("beforeI2svg",e),He("pseudoElements2svg",e),He("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot;!1===Q.autoReplaceSvg&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,fe((function(){Xe({autoReplaceSvgRoot:t}),$e("watch",e)}))}},Qe={noAuto:function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,$e("noAuto")},config:Q,dom:Ge,parse:{icon:function(e){if(null===e)return null;if("object"===d(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Le(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=De(e[0]);return{prefix:n,iconName:Le(n,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(Q.familyPrefix,"-"))>-1||e.match(D))){var r=Fe(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||je(),iconName:Le(r.prefix,r.iconName)||r.iconName}}if("string"==typeof e){var i=je();return{prefix:i,iconName:Le(i,e)||e}}}},library:Ye,findIconDefinition:Ke,toHtml:pe},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot,n=void 0===t?x:t;(Object.keys(ue.styles).length>0||Q.autoFetchSvg)&&P&&Q.autoReplaceSvg&&Qe.dom.i2svg({node:n})};function Je(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return pe(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(P){var t=x.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ze(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,h=e.extra,f=e.watchable,p=void 0!==f&&f,m=r.found?r:n,g=m.width,v=m.height,y="fak"===i,_=[Q.replacementClass,o?"".concat(Q.familyPrefix,"-").concat(o):""].filter((function(e){return-1===h.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(h.classes).join(" "),b={children:[],attributes:u(u({},h.attributes),{},{"data-prefix":i,"data-icon":o,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},w=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/v*1,"em")}:{};p&&(b.attributes["data-fa-i2svg"]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(d||Z())},children:[l]}),delete b.attributes.title);var k=u(u({},b),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:a,symbol:s,styles:u(u({},w),h.styles)}),C=r.found&&n.found?He("generateAbstractMask",k)||{children:[],attributes:{}}:He("generateAbstractIcon",k)||{children:[],attributes:{}},E=C.children,S=C.attributes;return k.children=E,k.attributes=S,s?function(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=!0===o?"".concat(t,"-").concat(Q.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},i),{},{id:a}),children:r}]}]}(k):function(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(ie(a)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=re(u(u({},o),{},{"transform-origin":"".concat(s.x+a.x/16,"em ").concat(s.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(k)}function et(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=void 0!==s&&s,c=u(u(u({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(c["data-fa-i2svg"]="");var d=u({},a.styles);ie(i)&&(d.transform=function(e){var t=e.transform,n=e.width,r=void 0===n?16:n,i=e.height,o=void 0===i?16:i,a=e.startCentered,s=void 0!==a&&a,l="";return l+=s&&N?"translate(".concat(t.x/16-r/2,"em, ").concat(t.y/16-o/2,"em) "):s?"translate(calc(-50% + ".concat(t.x/16,"em), calc(-50% + ").concat(t.y/16,"em)) "):"translate(".concat(t.x/16,"em, ").concat(t.y/16,"em) "),l+="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l+"rotate(".concat(t.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var h=re(d);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function tt(e){var t=e.content,n=e.title,r=e.extra,i=u(u(u({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=re(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var nt=ue.styles;function rt(e){var t=e[0],n=e[1],r=p(e.slice(4),1)[0];return{found:!0,width:t,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(Q.familyPrefix,"-").concat(W)},children:[{tag:"path",attributes:{class:"".concat(Q.familyPrefix,"-").concat(H),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Q.familyPrefix,"-").concat($),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}var it={found:!1,width:512,height:512};function ot(e,t){var n=t;return"fa"===t&&null!==Q.styleDefault&&(t=je()),new Promise((function(r,i){He("missingIconAbstract");if("fa"===n){var o=Me(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&nt[t]&&nt[t][e])return r(rt(nt[t][e]));!function(e,t){R||Q.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r(u(u({},it),{},{icon:Q.showMissingIcons&&e&&He("missingIconAbstract")||{}}))}))}var at=function(){},st=Q.measurePerformance&&I&&I.mark&&I.measure?I:{mark:at,measure:at},lt=function(e){st.mark("".concat('FA "6.1.1"'," ").concat(e," ends")),st.measure("".concat('FA "6.1.1"'," ").concat(e),"".concat('FA "6.1.1"'," ").concat(e," begins"),"".concat('FA "6.1.1"'," ").concat(e," ends"))},ct=function(e){return st.mark("".concat('FA "6.1.1"'," ").concat(e," begins")),function(){return lt(e)}},ut=function(){};function dt(e){return"string"==typeof(e.getAttribute?e.getAttribute("data-fa-i2svg"):null)}function ht(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function ft(e){return x.createElement(e)}function pt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ceFn,r=void 0===n?"svg"===e.tag?ht:ft:n;if("string"==typeof e)return x.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach((function(t){i.setAttribute(t,e.attributes[t])}));var o=e.children||[];return o.forEach((function(e){i.appendChild(pt(e,{ceFn:r}))})),i}var mt={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach((function(e){t.parentNode.insertBefore(pt(e),t)})),null===t.getAttribute("data-fa-i2svg")&&Q.keepOriginalSource){var n=x.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~te(t).indexOf(Q.replacementClass))return mt.replace(e);var r=new RegExp("".concat(Q.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(e,t){return t===Q.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=n.map((function(e){return pe(e)})).join("\n");t.setAttribute("data-fa-i2svg",""),t.innerHTML=o}};function gt(e){e()}function vt(e,t){var n="function"==typeof t?t:ut;if(0===e.length)n();else{var r=gt;"async"===Q.mutateApproach&&(r=S.requestAnimationFrame||gt),r((function(){var t=!0===Q.autoReplaceSvg?mt.replace:mt[Q.autoReplaceSvg]||mt.replace,r=ct("mutate");e.map(t),r(),n()}))}}var yt=!1;function _t(){yt=!0}function bt(){yt=!1}var wt=null;function kt(e){if(T&&Q.observeMutations){var t=e.treeCallback,n=void 0===t?ut:t,r=e.nodeCallback,i=void 0===r?ut:r,o=e.pseudoElementsCallback,a=void 0===o?ut:o,s=e.observeMutationsRoot,l=void 0===s?x:s;wt=new T((function(e){if(!yt){var t=je();ee(e).forEach((function(e){if("childList"===e.type&&e.addedNodes.length>0&&!dt(e.addedNodes[0])&&(Q.searchPseudoElements&&a(e.target),n(e.target)),"attributes"===e.type&&e.target.parentNode&&Q.searchPseudoElements&&a(e.target.parentNode),"attributes"===e.type&&dt(e.target)&&~V.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute("data-prefix"):null,n=e.getAttribute?e.getAttribute("data-icon"):null;return t&&n}(e.target)){var r=Fe(te(e.target)),o=r.prefix,s=r.iconName;e.target.setAttribute("data-prefix",o||t),s&&e.target.setAttribute("data-icon",s)}else(l=e.target)&&l.classList&&l.classList.contains&&l.classList.contains(Q.replacementClass)&&i(e.target);var l}))}})),P&&wt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ct(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((function(e,t){var n=t.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(":").trim()),e}),{})),n}function Et(e){var t,n,r=e.getAttribute("data-prefix"),i=e.getAttribute("data-icon"),o=void 0!==e.innerText?e.innerText.trim():"",a=Fe(te(e));return a.prefix||(a.prefix=je()),r&&i&&(a.prefix=r,a.iconName=i),a.iconName&&a.prefix||a.prefix&&o.length>0&&(a.iconName=(t=a.prefix,n=e.innerText,(Se[t]||{})[n]||Ae(a.prefix,ve(e.innerText)))),a}function St(e){var t=ee(e.attributes).reduce((function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e}),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(n?t["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(r||Z()):(t["aria-hidden"]="true",t.focusable="false")),t}function xt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=Et(e),r=n.iconName,i=n.prefix,o=n.rest,a=St(e),s=Be("parseNodeAttributes",{},e),l=t.styleParser?Ct(e):[];return u({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:J,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var Tt=ue.styles;function It(e){var t="nest"===Q.autoReplaceSvg?xt(e,{styleParser:!1}):xt(e);return~t.extra.classes.indexOf("fa-layers-text")?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}function Pt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!P)return Promise.resolve();var n=x.documentElement.classList,r=function(e){return n.add("".concat("fontawesome-i2svg","-").concat(e))},i=function(e){return n.remove("".concat("fontawesome-i2svg","-").concat(e))},o=Q.autoFetchSvg?Object.keys(A):Object.keys(Tt),a=[".".concat("fa-layers-text",":not([").concat("data-fa-i2svg","])")].concat(o.map((function(e){return".".concat(e,":not([").concat("data-fa-i2svg","])")}))).join(", ");if(0===a.length)return Promise.resolve();var s=[];try{s=ee(e.querySelectorAll(a))}catch(e){}if(!(s.length>0))return Promise.resolve();r("pending"),i("complete");var l=ct("onTree"),c=s.reduce((function(e,t){try{var n=It(t);n&&e.push(n)}catch(e){R||"MissingIcon"===e.name&&console.error(e)}return e}),[]);return new Promise((function(e,n){Promise.all(c).then((function(n){vt(n,(function(){r("active"),r("complete"),i("pending"),"function"==typeof t&&t(),l(),e()}))})).catch((function(e){l(),n(e)}))}))}function Nt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;It(e).then((function(e){e&&vt([e],t)}))}var Ot=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?J:n,i=t.symbol,o=void 0!==i&&i,a=t.mask,s=void 0===a?null:a,l=t.maskId,c=void 0===l?null:l,d=t.title,h=void 0===d?null:d,f=t.titleId,p=void 0===f?null:f,m=t.classes,g=void 0===m?[]:m,v=t.attributes,y=void 0===v?{}:v,_=t.styles,b=void 0===_?{}:_;if(e){var w=e.prefix,k=e.iconName,C=e.icon;return Je(u({type:"icon"},e),(function(){return $e("beforeDOMElementCreation",{iconDefinition:e,params:t}),Q.autoA11y&&(h?y["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(p||Z()):(y["aria-hidden"]="true",y.focusable="false")),Ze({icons:{main:rt(C),mask:s?rt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:k,transform:u(u({},J),r),symbol:o,title:h,maskId:c,titleId:p,extra:{attributes:y,styles:b,classes:g}})}))}},Rt={mixout:function(){return{icon:(e=Ot,function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(t||{}).icon?t:Ke(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ke(i||{})),e(r,u(u({},n),{},{mask:i}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Pt,e.nodeCallback=Nt,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=void 0===t?x:t,r=e.callback;return Pt(n,void 0===r?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.title,i=t.titleId,o=t.prefix,a=t.transform,s=t.symbol,l=t.mask,c=t.maskId,u=t.extra;return new Promise((function(t,d){Promise.all([ot(n,o),l.iconName?ot(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(l){var d=p(l,2),h=d[0],f=d[1];t([e,Ze({icons:{main:h,mask:f},prefix:o,iconName:n,transform:a,symbol:s,maskId:c,title:r,titleId:i,extra:u,watchable:!0})])})).catch(d)}))},e.generateAbstractIcon=function(e){var t,n=e.children,r=e.attributes,i=e.main,o=e.transform,a=re(e.styles);return a.length>0&&(r.style=a),ie(o)&&(t=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(t||i.icon),{children:n,attributes:r}}}},At={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes,r=void 0===n?[]:n;return Je({type:"layer"},(function(){$e("beforeDOMElementCreation",{assembler:e,params:t});var n=[];return e((function(e){Array.isArray(e)?e.map((function(e){n=n.concat(e.abstract)})):n=n.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(Q.familyPrefix,"-layers")].concat(m(r)).join(" ")},children:n}]}))}}}},Lt={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.title,r=void 0===n?null:n,i=t.classes,o=void 0===i?[]:i,a=t.attributes,s=void 0===a?{}:a,l=t.styles,c=void 0===l?{}:l;return Je({type:"counter",content:e},(function(){return $e("beforeDOMElementCreation",{content:e,params:t}),tt({content:e.toString(),title:r,extra:{attributes:s,styles:c,classes:["".concat(Q.familyPrefix,"-layers-counter")].concat(m(o))}})}))}}}},Mt={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?J:n,i=t.title,o=void 0===i?null:i,a=t.classes,s=void 0===a?[]:a,l=t.attributes,c=void 0===l?{}:l,d=t.styles,h=void 0===d?{}:d;return Je({type:"text",content:e},(function(){return $e("beforeDOMElementCreation",{content:e,params:t}),et({content:e,transform:u(u({},J),r),title:o,extra:{attributes:c,styles:h,classes:["".concat(Q.familyPrefix,"-layers-text")].concat(m(s))}})}))}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.title,r=t.transform,i=t.extra,o=null,a=null;if(N){var s=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/s,a=l.height/s}return Q.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,et({content:e.innerHTML,width:o,height:a,transform:r,title:n,extra:i,watchable:!0})])}}},jt=new RegExp('"',"ug"),Dt=[1105920,1112319];function Ft(e,t){var n="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise((function(r,i){if(null!==e.getAttribute(n))return r();var o,a,s,l=ee(e.children).filter((function(e){return e.getAttribute("data-fa-pseudo-element")===t}))[0],c=S.getComputedStyle(e,t),d=c.getPropertyValue("font-family").match(F),h=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(l&&!d)return e.removeChild(l),r();if(d&&"none"!==f&&""!==f){var p=c.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(d[2])?L[d[2].toLowerCase()]:U[h],g=function(e){var t,n,r,i,o,a=e.replace(jt,""),s=(n=0,i=(t=a).length,(o=t.charCodeAt(n))>=55296&&o<=56319&&i>n+1&&(r=t.charCodeAt(n+1))>=56320&&r<=57343?1024*(o-55296)+r-56320+65536:o),l=s>=Dt[0]&&s<=Dt[1],c=2===a.length&&a[0]===a[1];return{value:ve(c?a[0]:a),isSecondary:l||c}}(p),v=g.value,y=g.isSecondary,_=d[0].startsWith("FontAwesome"),b=Ae(m,v),w=b;if(_){var k=(a=Te[o=v],s=Ae("fas",o),a||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null});k.iconName&&k.prefix&&(b=k.iconName,m=k.prefix)}if(!b||y||l&&l.getAttribute("data-prefix")===m&&l.getAttribute("data-icon")===w)r();else{e.setAttribute(n,w),l&&e.removeChild(l);var C={iconName:null,title:null,titleId:null,prefix:null,transform:J,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},E=C.extra;E.attributes["data-fa-pseudo-element"]=t,ot(b,m).then((function(i){var o=Ze(u(u({},C),{},{icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:w,extra:E,watchable:!0})),a=x.createElement("svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=o.map((function(e){return pe(e)})).join("\n"),e.removeAttribute(n),r()})).catch(i)}}else r()}))}function Ut(e){return Promise.all([Ft(e,"::before"),Ft(e,"::after")])}function zt(e){return!(e.parentNode===document.head||~O.indexOf(e.tagName.toUpperCase())||e.getAttribute("data-fa-pseudo-element")||e.parentNode&&"svg"===e.parentNode.tagName)}function qt(e){if(P)return new Promise((function(t,n){var r=ee(e.querySelectorAll("*")).filter(zt).map(Ut),i=ct("searchPseudoElements");_t(),Promise.all(r).then((function(){i(),bt(),t()})).catch((function(){i(),bt(),n()}))}))}var Vt=!1,Wt=function(e){return e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Bt={x:0,y:0,width:"100%",height:"100%"};function $t(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Ht;Ht={mixoutsTo:Qe}.mixoutsTo,ze=[le,Rt,At,Lt,Mt,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=qt,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=void 0===t?x:t;Q.searchPseudoElements&&qt(n)}}},{mixout:function(){return{dom:{unwatch:function(){_t(),Vt=!0}}}},hooks:function(){return{bootstrap:function(){kt(Be("mutationObserverCallbacks",{}))},noAuto:function(){wt&&wt.disconnect()},watch:function(e){var t=e.observeMutationsRoot;Vt?bt():kt(Be("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},{mixout:function(){return{parse:{transform:function(e){return Wt(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=Wt(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={outer:o,inner:{transform:"".concat(a," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(i/2*-1," -256)")}};return{tag:"g",attributes:u({},c.outer),children:[{tag:"g",attributes:u({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:u(u({},t.icon.attributes),c.path)}]}]}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),r=n?Fe(n.split(" ").map((function(e){return e.trim()}))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=je()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,n=e.children,r=e.attributes,i=e.main,o=e.mask,a=e.maskId,s=e.transform,l=i.width,c=i.icon,d=o.width,h=o.icon,f=function(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(o," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:s,containerWidth:d,iconWidth:l}),p={tag:"rect",attributes:u(u({},Bt),{},{fill:"white"})},m=c.children?{children:c.children.map($t)}:{},g={tag:"g",attributes:u({},f.inner),children:[$t(u({tag:c.tag,attributes:u(u({},c.attributes),f.path)},m))]},v={tag:"g",attributes:u({},f.outer),children:[g]},y="mask-".concat(a||Z()),_="clip-".concat(a||Z()),b={tag:"mask",attributes:u(u({},Bt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:(t=h,"g"===t.tag?t.children:[t])},b]};return n.push(w,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(y,")")},Bt)}),{children:n,attributes:r}}}},{provides:function(e){var t=!1;S.matchMedia&&(t=S.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}}}}],qe={},Object.keys(Ve).forEach((function(e){-1===We.indexOf(e)&&delete Ve[e]})),ze.forEach((function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((function(e){"function"==typeof t[e]&&(Ht[e]=t[e]),"object"===d(t[e])&&Object.keys(t[e]).forEach((function(n){Ht[e]||(Ht[e]={}),Ht[e][n]=t[e][n]}))})),e.hooks){var n=e.hooks();Object.keys(n).forEach((function(e){qe[e]||(qe[e]=[]),qe[e].push(n[e])}))}e.provides&&e.provides(Ve)}));var Kt,Yt=Qe.parse,Gt=Qe.icon;Kt=o("7in6f")();l=o("8T3gX");function Qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qt(Object(n),!0).forEach((function(t){Zt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Jt(e){return Jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jt(e)}function Zt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function en(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function tn(e){return function(e){if(Array.isArray(e))return nn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return nn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rn(e){return function(e){return(e-=0)==e}(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1)}var on=["style"];function an(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),i=rn(t.slice(0,r)),o=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[i]=o,e}),{})}var sn=!1;try{sn=!0}catch(e){}function ln(e){return e&&"object"===Jt(e)&&e.prefix&&e.iconName&&e.icon?e:Yt.icon?Yt.icon(e):null===e?null:e&&"object"===Jt(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function cn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Zt({},e,t):{}}var un=n(l).forwardRef((function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,c=ln(n),u=cn("classes",[].concat(tn(function(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,h=e.fixedWidth,f=e.inverse,p=e.border,m=e.listItem,g=e.flip,v=e.size,y=e.rotation,_=e.pull,b=(Zt(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":h,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(v),null!=v),Zt(t,"fa-rotate-".concat(y),null!=y&&0!==y),Zt(t,"fa-pull-".concat(_),null!=_),Zt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(e)),tn(o.split(" ")))),d=cn("transform","string"==typeof e.transform?Yt.transform(e.transform):e.transform),h=cn("mask",ln(r)),f=Gt(c,Xt(Xt(Xt(Xt({},u),d),h),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!f)return function(){var e;!sn&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var p=f.abstract,m={ref:t};return Object.keys(e).forEach((function(t){un.defaultProps.hasOwnProperty(t)||(m[t]=e[t])})),fn(p[0],m)}));un.displayName="FontAwesomeIcon",un.propTypes={beat:n(Kt).bool,border:n(Kt).bool,beatFade:n(Kt).bool,bounce:n(Kt).bool,className:n(Kt).string,fade:n(Kt).bool,flash:n(Kt).bool,mask:n(Kt).oneOfType([n(Kt).object,n(Kt).array,n(Kt).string]),maskId:n(Kt).string,fixedWidth:n(Kt).bool,inverse:n(Kt).bool,flip:n(Kt).oneOf([!0,!1,"horizontal","vertical","both"]),icon:n(Kt).oneOfType([n(Kt).object,n(Kt).array,n(Kt).string]),listItem:n(Kt).bool,pull:n(Kt).oneOf(["right","left"]),pulse:n(Kt).bool,rotation:n(Kt).oneOf([0,90,180,270]),shake:n(Kt).bool,size:n(Kt).oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n(Kt).bool,spinPulse:n(Kt).bool,spinReverse:n(Kt).bool,symbol:n(Kt).oneOfType([n(Kt).bool,n(Kt).string]),title:n(Kt).string,titleId:n(Kt).string,transform:n(Kt).oneOfType([n(Kt).string,n(Kt).object]),swapOpacity:n(Kt).bool},un.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var dn,hn,fn=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=an(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[rn(t)]=r}return e}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,l=en(r,on);return o.attrs.style=Xt(Xt({},o.attrs.style),s),t.apply(void 0,[n.tag,Xt(Xt({},o.attrs),l)].concat(tn(i)))}.bind(null,n(l).createElement);l=o("8T3gX");function pn(){return pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pn.apply(this,arguments)}(hn=dn||(dn={})).Pop="POP",hn.Push="PUSH",hn.Replace="REPLACE";function mn(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function i(){var e=n.location,t=e.pathname,i=e.search,o=e.hash,a=r.state||{};return[a.idx,{pathname:t,search:i,hash:o,state:a.usr||null,key:a.key||"default"}]}var o=null;n.addEventListener("popstate",(function(){if(o)d.call(o),o=null;else{var e=dn.Pop,t=i(),n=t[0],r=t[1];if(d.length){if(null!=n){var a=l-n;a&&(o={action:e,location:r,retry:function(){v(-1*a)}},v(a))}}else g(e)}}));var a=dn.Pop,s=i(),l=s[0],c=s[1],u=vn(),d=vn();function h(e){return"string"==typeof e?e:_n(e)}function f(e,t){return void 0===t&&(t=null),pn({pathname:c.pathname,hash:"",search:""},"string"==typeof e?bn(e):e,{state:t,key:yn()})}function p(e,t){return[{usr:e.state,key:e.key,idx:t},h(e)]}function m(e,t,n){return!d.length||(d.call({action:e,location:t,retry:n}),!1)}function g(e){a=e;var t=i();l=t[0],c=t[1],u.call({action:a,location:c})}function v(e){r.go(e)}null==l&&(l=0,r.replaceState(pn({},r.state,{idx:l}),""));var y={get action(){return a},get location(){return c},createHref:h,push:function e(t,i){var o=dn.Push,a=f(t,i);if(m(o,a,(function(){e(t,i)}))){var s=p(a,l+1),c=s[0],u=s[1];try{r.pushState(c,"",u)}catch(e){n.location.assign(u)}g(o)}},replace:function e(t,n){var i=dn.Replace,o=f(t,n);if(m(i,o,(function(){e(t,n)}))){var a=p(o,l),s=a[0],c=a[1];r.replaceState(s,"",c),g(i)}},go:v,back:function(){v(-1)},forward:function(){v(1)},listen:function(e){return u.push(e)},block:function(e){var t=d.push(e);return 1===d.length&&n.addEventListener("beforeunload",gn),function(){t(),d.length||n.removeEventListener("beforeunload",gn)}}};return y}function gn(e){e.preventDefault(),e.returnValue=""}function vn(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function yn(){return Math.random().toString(36).substr(2,8)}function _n(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,i=void 0===r?"":r,o=e.hash,a=void 0===o?"":o;return i&&"?"!==i&&(n+="?"===i.charAt(0)?i:"?"+i),a&&"#"!==a&&(n+="#"===a.charAt(0)?a:"#"+a),n}function bn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const wn=(0,(l=o("8T3gX")).createContext)(null),kn=(0,l.createContext)(null),Cn=(0,l.createContext)({outlet:null,matches:[]});function En(e,t){if(!e)throw new Error(t)}function Sn(e,t,n){void 0===n&&(n="/");let r=An(("string"==typeof t?bn(t):t).pathname||"/",n);if(null==r)return null;let i=xn(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let e=0;null==o&&e<i.length;++e)o=Nn(i[e],r);return o}function xn(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,i)=>{let o={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(!o.relativePath.startsWith(r)&&En(!1),o.relativePath=o.relativePath.slice(r.length));let a=Ln([r,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(!0===e.index&&En(!1),xn(e.children,t,s,a)),(null!=e.path||e.index)&&t.push({path:a,score:Pn(a,e.index),routesMeta:s})})),t}const Tn=/^:\w+$/,In=e=>"*"===e;function Pn(e,t){let n=e.split("/"),r=n.length;return n.some(In)&&(r+=-2),t&&(r+=2),n.filter((e=>!In(e))).reduce(((e,t)=>e+(Tn.test(t)?3:""===t?1:10)),r)}function Nn(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let e=0;e<n.length;++e){let a=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",c=On({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},l);if(!c)return null;Object.assign(r,c.params);let u=a.route;o.push({params:r,pathname:Ln([i,c.pathname]),pathnameBase:Mn(Ln([i,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(i=Ln([i,c.pathnameBase]))}return o}function On(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(i,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(s[n]||""),e}),{}),pathname:o,pathnameBase:a,pattern:e}}function Rn(e,t,n){let r,i="string"==typeof e?bn(e):e,o=""===e||""===i.pathname?"/":i.pathname;if(null==o)r=n;else{let e=t.length-1;if(o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}r=e>=0?t[e]:"/"}let a=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?bn(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:jn(r),hash:Dn(i)}}(i,r);return o&&"/"!==o&&o.endsWith("/")&&!a.pathname.endsWith("/")&&(a.pathname+="/"),a}function An(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),Mn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jn=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Dn=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function Fn(e){!Un()&&En(!1);let{basename:t,navigator:n}=(0,l.useContext)(wn),{hash:r,pathname:i,search:o}=Wn(e),a=i;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?bn(e).pathname:e.pathname}(e),r=null!=n&&n.endsWith("/");a="/"===i?t+(r?"/":""):Ln([t,i])}return n.createHref({pathname:a,search:o,hash:r})}function Un(){return null!=(0,l.useContext)(kn)}function zn(){return!Un()&&En(!1),(0,l.useContext)(kn).location}function qn(){!Un()&&En(!1);let{basename:e,navigator:t}=(0,l.useContext)(wn),{matches:n}=(0,l.useContext)(Cn),{pathname:r}=zn(),i=JSON.stringify(n.map((e=>e.pathnameBase))),o=(0,l.useRef)(!1);return(0,l.useEffect)((()=>{o.current=!0})),(0,l.useCallback)((function(n,a){if(void 0===a&&(a={}),!o.current)return;if("number"==typeof n)return void t.go(n);let s=Rn(n,JSON.parse(i),r);"/"!==e&&(s.pathname=Ln([e,s.pathname])),(a.replace?t.replace:t.push)(s,a.state)}),[e,t,i,r])}function Vn(){let{matches:e}=(0,l.useContext)(Cn),t=e[e.length-1];return t?t.params:{}}function Wn(e){let{matches:t}=(0,l.useContext)(Cn),{pathname:n}=zn(),r=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,l.useMemo)((()=>Rn(e,JSON.parse(r),n)),[e,r,n])}function Bn(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,r,i)=>(0,l.createElement)(Cn.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}})),null)}function $n(e){En(!1)}function Hn(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:o,static:a=!1}=e;Un()&&En(!1);let s=Mn(t),c=(0,l.useMemo)((()=>({basename:s,navigator:o,static:a})),[s,o,a]);"string"==typeof r&&(r=bn(r));let{pathname:u="/",search:d="",hash:h="",state:f=null,key:p="default"}=r,m=(0,l.useMemo)((()=>{let e=An(u,s);return null==e?null:{pathname:e,search:d,hash:h,state:f,key:p}}),[s,u,d,h,f,p]);return null==m?null:(0,l.createElement)(wn.Provider,{value:c},(0,l.createElement)(kn.Provider,{children:n,value:{location:m,navigationType:i}}))}function Kn(e){let{children:t,location:n}=e;return function(e,t){!Un()&&En(!1);let n,{matches:r}=(0,l.useContext)(Cn),i=r[r.length-1],o=i?i.params:{},a=(i&&i.pathname,i?i.pathnameBase:"/"),s=(i&&i.route,zn());if(t){var c;let e="string"==typeof t?bn(t):t;"/"!==a&&!(null==(c=e.pathname)?void 0:c.startsWith(a))&&En(!1),n=e}else n=s;let u=n.pathname||"/",d=Sn(e,{pathname:"/"===a?u:u.slice(a.length)||"/"});return Bn(d&&d.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ln([a,e.pathname]),pathnameBase:"/"===e.pathnameBase?a:Ln([a,e.pathnameBase])}))),r)}(Yn(t),n)}function Yn(e){let t=[];return l.Children.forEach(e,(e=>{if(!(0,l.isValidElement)(e))return;if(e.type===l.Fragment)return void t.push.apply(t,Yn(e.props.children));e.type!==$n&&En(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=Yn(e.props.children)),t.push(n)})),t}function Gn(){return Gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gn.apply(this,arguments)}function Qn(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const Xn=["onClick","reloadDocument","replace","state","target","to"];function Jn(e){let{basename:t,children:n,window:r}=e,i=(0,l.useRef)();null==i.current&&(i.current=mn({window:r}));let o=i.current,[a,s]=(0,l.useState)({action:o.action,location:o.location});return(0,l.useLayoutEffect)((()=>o.listen(s)),[o]),(0,l.createElement)(Hn,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Zn=(0,l.forwardRef)((function(e,t){let{onClick:n,reloadDocument:r,replace:i=!1,state:o,target:a,to:s}=e,c=Qn(e,Xn),u=Fn(s),d=function(e,t){let{target:n,replace:r,state:i}=void 0===t?{}:t,o=qn(),a=zn(),s=Wn(e);return(0,l.useCallback)((t=>{if(!(0!==t.button||n&&"_self"!==n||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let n=!!r||_n(a)===_n(s);o(e,{replace:n,state:i})}}),[a,o,s,r,i,n,e])}(s,{replace:i,state:o,target:a});return(0,l.createElement)("a",Gn({},c,{href:u,onClick:function(e){n&&n(e),e.defaultPrevented||r||d(e)},ref:t,target:a}))}));
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var er={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},tr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]},nr={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"]},rr={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z"]},ir={prefix:"fas",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"]},or={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"]},ar={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},sr={prefix:"fas",iconName:"earth-africa",icon:[512,512,[127757,"globe-africa"],"f57c","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM177.8 63.19L187.8 80.62C190.5 85.46 192 90.93 192 96.5V137.9C192 141.8 193.6 145.6 196.3 148.3C202.6 154.6 212.8 153.1 218.3 147.1L231.9 130.1C236.6 124.2 244.8 122.4 251.6 125.8L266.8 133.4C270.2 135.1 273.1 136 277.8 136C284.3 136 290.6 133.4 295.2 128.8L299.1 124.9C302 121.1 306.5 121.2 310.1 123.1L339.4 137.7C347.1 141.6 352 149.5 352 158.1C352 168.6 344.9 177.8 334.7 180.3L299.3 189.2C291.9 191 284.2 190.7 276.1 188.3L244.1 177.7C241.7 176.6 238.2 176 234.8 176C227.8 176 220.1 178.3 215.4 182.5L176 212C165.9 219.6 160 231.4 160 244V272C160 298.5 181.5 320 208 320H240C248.8 320 256 327.2 256 336V384C256 401.7 270.3 416 288 416C298.1 416 307.6 411.3 313.6 403.2L339.2 369.1C347.5 357.1 352 344.5 352 330.7V318.6C352 314.7 354.6 311.3 358.4 310.4L363.7 309.1C375.6 306.1 384 295.4 384 283.1C384 275.1 381.2 269.2 376.2 264.2L342.7 230.7C338.1 226.1 338.1 221 342.7 217.3C348.4 211.6 356.8 209.6 364.5 212.2L378.6 216.9C390.9 220.1 404.3 215.4 410.1 203.8C413.6 196.8 421.3 193.1 428.1 194.6L456.4 200.1C431.1 112.4 351.5 48 256 48C228.3 48 201.1 53.4 177.8 63.19L177.8 63.19z"]},lr={prefix:"fas",iconName:"futbol",icon:[512,512,[9917,"futbol-ball","soccer-ball"],"f1e3","M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM416.6 360.9l-85.4-1.297l-25.15 81.59C290.1 445.5 273.4 448 256 448s-34.09-2.523-50.09-6.859L180.8 359.6l-85.4 1.297c-18.12-27.66-29.15-60.27-30.88-95.31L134.3 216.4L106.6 135.6c21.16-26.21 49.09-46.61 81.06-58.84L256 128l68.29-51.22c31.98 12.23 59.9 32.64 81.06 58.84L377.7 216.4l69.78 49.1C445.8 300.6 434.8 333.2 416.6 360.9z"]},cr={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},ur={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"]},dr={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"]},hr={prefix:"fas",iconName:"user",icon:[448,512,[62144,128100],"f007","M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"]},fr={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pr=!1,mr=!1,gr="${JSCORE_VERSION}",vr=function(e,t){if(!e)throw yr(t)},yr=function(e){return new Error("Firebase Database ("+gr+") INTERNAL ASSERT FAILED: "+e)},_r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=i>>2,u=(3&i)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,o||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==s)throw Error();const l=i<<2|o>>4;if(r.push(l),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},wr=function(e){const t=_r(e);return br.encodeByteArray(t,!0)},kr=function(e){return wr(e).replace(/\./g,"")},Cr=function(e){try{return br.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Er(e){return Sr(void 0,e)}function Sr(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Sr(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ir(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tr())}function Pr(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Nr(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Or(){const e=Tr();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Rr(){return!0===pr||!0===mr}class Ar extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(Mr,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ar(r,a,n)}}const Mr=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){return JSON.parse(e)}function Dr(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=jr(Cr(o[0])||""),n=jr(Cr(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Ur=function(e){const t=Fr(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},zr=function(e){const t=Fr(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Vr(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Wr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Br(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function $r(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Hr(n)&&Hr(o)){if(!$r(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Hr(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Yr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Gr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],a=this.chain_[1],s=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^a&(s^l),i=1518500249):(r=a^s^l,i=1859775393):e<60?(r=a&s|l&(a|s),i=2400959708):(r=a^s^l,i=3395469782);const t=(o<<5|o>>>27)+r+c+i+n[e]&4294967295;c=l,l=s,s=4294967295&(a<<30|a>>>2),a=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function Xr(e,t){const n=new Jr(e,t);return n.subscribe.bind(n)}class Jr{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Zr),void 0===r.error&&(r.error=Zr),void 0===r.complete&&(r.complete=Zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Zr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ti=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,vr(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ni=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ri(e){return e&&e._delegate?e._delegate:e}class ii{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new xr;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ai{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=[];var li,ci;(ci=li||(li={}))[ci.DEBUG=0]="DEBUG",ci[ci.VERBOSE=1]="VERBOSE",ci[ci.INFO=2]="INFO",ci[ci.WARN=3]="WARN",ci[ci.ERROR=4]="ERROR",ci[ci.SILENT=5]="SILENT";const ui={debug:li.DEBUG,verbose:li.VERBOSE,info:li.INFO,warn:li.WARN,error:li.ERROR,silent:li.SILENT},di=li.INFO,hi={[li.DEBUG]:"log",[li.VERBOSE]:"log",[li.INFO]:"info",[li.WARN]:"warn",[li.ERROR]:"error"},fi=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=hi[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class pi{constructor(e){this.name=e,this._logLevel=di,this._logHandler=fi,this._userLogHandler=null,si.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in li))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ui[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,li.DEBUG,...e),this._logHandler(this,li.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,li.VERBOSE,...e),this._logHandler(this,li.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,li.INFO,...e),this._logHandler(this,li.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,li.WARN,...e),this._logHandler(this,li.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,li.ERROR,...e),this._logHandler(this,li.ERROR,...e)}}let mi,gi;const vi=new WeakMap,yi=new WeakMap,_i=new WeakMap,bi=new WeakMap,wi=new WeakMap;let ki={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return yi.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_i.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ci(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(gi||(gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(xi(this),t),Si(vi.get(this))}:function(...t){return Si(e.apply(xi(this),t))}:function(t,...n){const r=e.call(xi(this),t,...n);return _i.set(r,t.sort?t.sort():[t]),Si(r)}}function Ei(e){return"function"==typeof e?Ci(e):(e instanceof IDBTransaction&&function(e){if(yi.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));yi.set(e,t)}(e),t=e,(mi||(mi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ki):e);var t}function Si(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Si(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&vi.set(t,e)})).catch((()=>{})),wi.set(t,e),t}(e);if(bi.has(e))return bi.get(e);const t=Ei(e);return t!==e&&(bi.set(e,t),wi.set(t,e)),t}const xi=e=>wi.get(e);function Ti(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=Si(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(Si(a.result),e.oldVersion,e.newVersion,Si(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}const Ii=["get","getKey","getAll","getAllKeys","count"],Pi=["put","add","delete","clear"],Ni=new Map;function Oi(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ni.get(t))return Ni.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Pi.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ii.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return Ni.set(t,o),o}ki=(e=>({...e,get:(t,n,r)=>Oi(t,n)||e.get(t,n,r),has:(t,n)=>!!Oi(t,n)||e.has(t,n)}))(ki);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ai=new pi("@firebase/app"),Li={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Mi=new Map,ji=new Map;function Di(e,t){try{e.container.addComponent(t)}catch(n){Ai.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fi(e){const t=e.name;if(ji.has(t))return Ai.debug(`There were multiple attempts to register component ${t}.`),!1;ji.set(t,e);for(const t of Mi.values())Di(t,e);return!0}function Ui(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zi=new Lr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ii("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zi.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e="[DEFAULT]"){const t=Mi.get(e);if(!t)throw zi.create("no-app",{appName:e});return t}function Wi(e,t,n){var r;let i=null!==(r=Li[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ai.warn(e.join(" "))}Fi(new ii(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Bi=null;function $i(){return Bi||(Bi=Ti("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw zi.create("storage-open",{originalErrorMessage:e.message})}))),Bi}async function Hi(e,t){var n;try{const n=(await $i()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Ki(e)),n.done}catch(e){throw zi.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function Ki(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qi(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Gi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Gi(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Xi(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=kr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gi(){return(new Date).toISOString().substring(0,10)}class Qi{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await $i()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ki(e))}catch(e){throw zi.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Hi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Hi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Xi(e){return kr(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ji;Ji="",Fi(new ii("platform-logger",(e=>new Ri(e)),"PRIVATE")),Fi(new ii("heartbeat",(e=>new Yi(e)),"PRIVATE")),Wi("@firebase/app","0.7.28",Ji),Wi("@firebase/app","0.7.28","esm2017"),Wi("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wi("firebase","9.9.0","app");function Zi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function eo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const to=eo,no=new Lr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ro=new pi("@firebase/auth");function io(e,...t){ro.logLevel<=li.ERROR&&ro.error(`Auth (9.9.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e,...t){throw co(e,...t)}function ao(e,...t){return co(e,...t)}function so(e,t,n){const r=Object.assign(Object.assign({},to()),{[t]:n});return new Lr("auth","Firebase",r).create(t,{appName:e.name})}function lo(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&oo(e,"argument-error"),so(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function co(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return no.create(e,...t)}function uo(e,t,...n){if(!e)throw co(t,...n)}function ho(e){const t="INTERNAL ASSERTION FAILED: "+e;throw io(t),new Error(t)}function fo(e,t){e||ho(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map;function mo(e){fo(e instanceof Function,"Expected a class definition");let t=po.get(e);return t?(fo(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,po.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function go(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function vo(){return"http:"===yo()||"https:"===yo()}function yo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(vo()||Pr()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(e,t){this.shortDelay=e,this.longDelay=t,fo(t>e,"Short delay should be less than long delay!"),this.isMobile=Ir()||Nr()}get(){return _o()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e,t){fo(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ho("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ho("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ho("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Eo=new bo(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function xo(e,t,n,r,i={}){return To(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=Kr(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),ko.fetch()(Po(e,e.config.apiHost,n,a),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))}))}async function To(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Co),t);try{const t=new No(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oo(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Oo(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Oo(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw Oo(e,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw so(e,s,a);oo(e,s)}}catch(t){if(t instanceof Ar)throw t;oo(e,"network-request-failed")}}async function Io(e,t,n,r,i={}){const o=await xo(e,t,n,r,i);return"mfaPendingCredential"in o&&oo(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Po(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?wo(e.config,i):`${e.config.apiScheme}://${i}`}class No{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ao(this.auth,"network-request-failed"))),Eo.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ao(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ro(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e){return 1e3*Number(e)}function Lo(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return io("JWT malformed, contained fewer than 3 sections"),null;try{const e=Cr(r);return e?JSON.parse(e):(io("Failed to decode base64 JWT payload"),null)}catch(e){return io("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mo(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ar&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class jo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Mo(e,async function(e,t){return xo(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));uo(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Zi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const s=(l=e.providerData,c=a,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==s?void 0:s.length)),h=!!u&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Do(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){uo(e.idToken,"internal-error"),uo(void 0!==e.idToken,"internal-error"),uo(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Lo(e);return uo(t,"internal-error"),uo(void 0!==t.exp,"internal-error"),uo(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return uo(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await To(e,{},(async()=>{const n=Kr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Po(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ko.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Uo;return n&&(uo("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(uo("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(uo("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return ho("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e,t){uo("string"==typeof e||void 0===e,"internal-error",{appName:t})}class qo{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Do(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return uo(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ri(e),r=await n.getIdToken(t),i=Lo(r);uo(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ro(Ao(i.auth_time)),issuedAtTime:Ro(Ao(i.iat)),expirationTime:Ro(Ao(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ri(e);await Fo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(uo(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){uo(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Fo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mo(this,async function(e,t){return xo(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:k}=t;uo(y&&k,e,"internal-error");const C=Uo.fromJSON(this.name,k);uo("string"==typeof y,e,"internal-error"),zo(u,e.name),zo(d,e.name),uo("boolean"==typeof _,e,"internal-error"),uo("boolean"==typeof b,e,"internal-error"),zo(h,e.name),zo(f,e.name),zo(p,e.name),zo(m,e.name),zo(g,e.name),zo(v,e.name);const E=new qo({uid:y,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:C,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Uo;r.updateFromServerResponse(t);const i=new qo({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Fo(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vo.type="NONE";const Wo=Vo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e,t,n){return`firebase:${e}:${t}:${n}`}class $o{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Bo("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new $o(mo(Wo),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||mo(Wo);const o=Bo(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const r=qo._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new $o(i,e,n)):new $o(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Qo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ko(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Jo(t))return"Blackberry";if(Zo(t))return"Webos";if(Yo(t))return"Safari";if((t.includes("chrome/")||Go(t))&&!t.includes("edge/"))return"Chrome";if(Xo(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ko(e=Tr()){return/firefox\//i.test(e)}function Yo(e=Tr()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Go(e=Tr()){return/crios\//i.test(e)}function Qo(e=Tr()){return/iemobile/i.test(e)}function Xo(e=Tr()){return/android/i.test(e)}function Jo(e=Tr()){return/blackberry/i.test(e)}function Zo(e=Tr()){return/webos/i.test(e)}function ea(e=Tr()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ta(){return Or()&&10===document.documentMode}function na(e=Tr()){return ea(e)||Xo(e)||Zo(e)||Jo(e)||/windows phone/i.test(e)||Qo(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(e,t=[]){let n;switch(e){case"Browser":n=Ho(Tr());break;case"Worker":n=`${Ho(Tr())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sa(this),this.idTokenSubscription=new sa(this),this.beforeStateQueue=new ia(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=no,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mo(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await $o.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return uo(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Fo(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ri(e):null;return t&&uo(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&uo(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(mo(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mo(e)||this._popupRedirectResolver;uo(t,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[mo(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return uo(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return uo(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ra(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function aa(e){return ri(e)}class sa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xr((e=>this.observer=e))}get next(){return uo(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ho("not implemented")}_getIdTokenResponse(e){return ho("not implemented")}_linkToIdToken(e,t){return ho("not implemented")}_getReauthenticationResolver(e){return ho("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(e,t){return xo(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua extends la{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ua(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ua(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Io(e,"POST","/v1/accounts:signInWithPassword",So(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Io(e,"POST","/v1/accounts:signInWithEmailLink",So(e,t))}(e,{email:this._email,oobCode:this._password});default:oo(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ca(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Io(e,"POST","/v1/accounts:signInWithEmailLink",So(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:oo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(e,t){return Io(e,"POST","/v1/accounts:signInWithIdp",So(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends la{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ha(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):oo("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Zi(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ha(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return da(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,da(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,da(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Kr(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa extends la{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pa({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pa({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Io(e,"POST","/v1/accounts:signInWithPhoneNumber",So(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Io(e,"POST","/v1/accounts:signInWithPhoneNumber",So(e,t));if(n.temporaryProof)throw Oo(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Io(e,"POST","/v1/accounts:signInWithPhoneNumber",So(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),fa)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new pa({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){var t,n,r,i,o,a;const s=Yr(Gr(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,c=null!==(n=s.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);uo(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Yr(Gr(e)).link,n=t?Yr(Gr(t)).deep_link_id:null,r=Yr(Gr(e)).deep_link_id;return(r?Yr(Gr(r)).link:null)||r||n||t||e}(e);try{return new ma(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga{constructor(){this.providerId=ga.PROVIDER_ID}static credential(e,t){return ua._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ma.parseLink(t);return uo(n,"argument-error"),ua._fromEmailAndCode(e,n.code,n.tenantId)}}ga.PROVIDER_ID="password",ga.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ga.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a extends ya{constructor(){super("facebook.com")}static credential(e){return ha._fromParams({providerId:_a.PROVIDER_ID,signInMethod:_a.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _a.credentialFromTaggedObject(e)}static credentialFromError(e){return _a.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _a.credential(e.oauthAccessToken)}catch(e){return null}}}_a.FACEBOOK_SIGN_IN_METHOD="facebook.com",_a.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ha._fromParams({providerId:ba.PROVIDER_ID,signInMethod:ba.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ba.credentialFromTaggedObject(e)}static credentialFromError(e){return ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ba.credential(t,n)}catch(e){return null}}}ba.GOOGLE_SIGN_IN_METHOD="google.com",ba.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa extends ya{constructor(){super("github.com")}static credential(e){return ha._fromParams({providerId:wa.PROVIDER_ID,signInMethod:wa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wa.credentialFromTaggedObject(e)}static credentialFromError(e){return wa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wa.credential(e.oauthAccessToken)}catch(e){return null}}}wa.GITHUB_SIGN_IN_METHOD="github.com",wa.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka extends ya{constructor(){super("twitter.com")}static credential(e,t){return ha._fromParams({providerId:ka.PROVIDER_ID,signInMethod:ka.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ka.credentialFromTaggedObject(e)}static credentialFromError(e){return ka.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ka.credential(t,n)}catch(e){return null}}}ka.TWITTER_SIGN_IN_METHOD="twitter.com",ka.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ca{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await qo._fromIdTokenResponse(e,n,r),o=Ea(n);return new Ca({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ea(n);return new Ca({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ea(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa extends Ar{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Sa(e,t,n,r)}}function xa(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Sa._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(e,t,n=!1){const r=await Mo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ca._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ia(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await Mo(e,xa(i,o,t,e),n);uo(r.idToken,i,"internal-error");const a=Lo(r.idToken);uo(a,i,"internal-error");const{sub:s}=a;return uo(e.uid===s,i,"user-mismatch"),Ca._forOperation(e,o,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&oo(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(e,t,n=!1){const r="signIn",i=await xa(e,r,t),o=await Ca._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends Na{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Tr();return Yo(e)||ea(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=na(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ta()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oa.type="LOCAL";const Ra=Oa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Na{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Aa.type="SESSION";const La=Aa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ma(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async e=>e(t.origin,i))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ja(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ma.receivers=[];class Da{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const l=ja("",20);r.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ua(){return void 0!==Fa().WorkerGlobalScope&&"function"==typeof Fa().importScripts}class za{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function qa(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Va(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new za(e).toPromise()}(),t(await Va()))}))}))}async function Wa(e,t,n){const r=qa(e,!0).put({fbase_key:t,value:n});return new za(r).toPromise()}function Ba(e,t){const n=qa(e,!0).delete(t);return new za(n).toPromise()}class $a{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Va()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ua()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(Ua()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Da(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await Wa(e,"__sak","1"),await Ba(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Wa(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=qa(e,!1).get(t),r=await new za(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ba(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=qa(e,!1).getAll();return new za(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$a.type="LOCAL";const Ha=$a;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ao("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function Ya(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ya("rcb"),new bo(3e4,6e4);async function Ga(e,t,n){var r;const i=await n.verify();try{let o;if(uo("string"==typeof i,e,"argument-error"),uo("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){uo("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return xo(e,"POST","/v2/accounts/mfaEnrollment:start",So(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{uo("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;uo(n,e,"missing-multi-factor-info");const a=await function(e,t){return xo(e,"POST","/v2/accounts/mfaSignIn:start",So(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return xo(e,"POST","/v1/accounts:sendVerificationCode",So(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e){this.providerId=Qa.PROVIDER_ID,this.auth=aa(e)}verifyPhoneNumber(e,t){return Ga(this.auth,e,ri(t))}static credential(e,t){return pa._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qa.credentialFromTaggedObject(t)}static credentialFromError(e){return Qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pa._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xa(e,t){return t?mo(t):(uo(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qa.PROVIDER_ID="phone",Qa.PHONE_SIGN_IN_METHOD="phone";class Ja extends la{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return da(e,this._buildIdpRequest())}_linkToIdToken(e,t){return da(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return da(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Za(e){return Pa(e.auth,new Ja(e),e.bypassAuthState)}function es(e){const{auth:t,user:n}=e;return uo(n,t,"internal-error"),Ia(n,new Ja(e),e.bypassAuthState)}async function ts(e){const{auth:t,user:n}=e;return uo(n,t,"internal-error"),Ta(n,new Ja(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Za;case"linkViaPopup":case"linkViaRedirect":return ts;case"reauthViaPopup":case"reauthViaRedirect":return es;default:oo(this.auth,"internal-error")}}resolve(e){fo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new bo(2e3,1e4);async function is(e,t,n){const r=aa(e);lo(e,t,va);const i=Xa(r,n);return new os(r,"signInViaPopup",t,i).executeNotNull()}class os extends ns{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return uo(e,this.auth,"internal-error"),e}async onExecution(){fo(1===this.filter.length,"Popup operations only handle one event");const e=ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ao(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ao(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ao(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,rs.get())};e()}}os.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const as=new Map;class ss extends ns{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=as.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=us(t),r=cs(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}as.set(this.auth._key(),e)}return this.bypassAuthState||as.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ls(e,t){as.set(e._key(),t)}function cs(e){return mo(e._redirectPersistence)}function us(e){return Bo("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(e,t,n=!1){const r=aa(e),i=Xa(r,t),o=new ss(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class hs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ps(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ao(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(fs(e))}saveEventToCache(e){this.cachedEventUids.add(fs(e)),this.lastProcessedEventTime=Date.now()}}function fs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ps({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ms=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gs=/^https?/;async function vs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return xo(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ys(e))return}catch(e){}oo(e,"unauthorized-domain")}function ys(e){const t=go(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!gs.test(n))return!1;if(ms.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new bo(3e4,6e4);function bs(){const e=Fa().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ws=null;function ks(e){return ws=ws||function(e){return new Promise(((t,n)=>{var r,i,o;function a(){bs(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bs(),n(ao(e,"network-request-failed"))},timeout:_s.get()})}if(null===(i=null===(r=Fa().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Fa().gapi)||void 0===o?void 0:o.load)){const t=Ya("iframefcb");return Fa()[t]=()=>{gapi.load?a():n(ao(e,"network-request-failed"))},Ka(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw ws=null,e}))}(e),ws}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new bo(5e3,15e3),Es={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ss=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xs(e){const t=e.config;uo(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wo(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.9.0"},i=Ss.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Kr(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ts={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Is{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ps(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Ts),{width:r.toString(),height:i.toString(),top:o,left:a}),c=Tr().toLowerCase();n&&(s=Go(c)?"_blank":n),Ko(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Tr()){var t;return ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new Is(null);const d=window.open(t||"",s,u);uo(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Is(d)}function Ns(e,t,n,r,i,o){uo(e.config.authDomain,e,"auth-domain-config-required"),uo(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.9.0",eventId:i};if(t instanceof va){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Wr(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof ya){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];return`${function({config:e}){return e.emulator?wo(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Kr(s).slice(1)}`}const Os=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=La,this._completeRedirectFn=ds,this._overrideRedirectResult=ls}async _openPopup(e,t,n,r){var i;fo(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ps(e,Ns(e,t,n,go(),r),ja())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Ns(e,t,n,go(),r),Fa().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(fo(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ks(e),n=Fa().gapi;return uo(n,e,"internal-error"),t.open({where:document.body,url:xs(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Es,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ao(e,"network-request-failed"),o=Fa().setTimeout((()=>{r(i)}),Cs.get());function a(){Fa().clearTimeout(o),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}(e),n=new hs(e);return t.register("authEvent",(t=>{uo(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),oo(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return na()||Yo()||ea()}};var Rs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){uo(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs="Browser",Fi(new ii("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{uo(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),uo(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:Rs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ra(Rs)},a=new oa(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mo);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Fi(new ii("auth-internal",(e=>{const t=aa(e.getProvider("auth").getImmediate());return new As(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Wi("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Rs)),Wi("@firebase/auth","0.20.5","esm2017");var Ls,Ms,js,Ds=Ls={};function Fs(){throw new Error("setTimeout has not been defined")}function Us(){throw new Error("clearTimeout has not been defined")}function zs(e){if(Ms===setTimeout)return setTimeout(e,0);if((Ms===Fs||!Ms)&&setTimeout)return Ms=setTimeout,setTimeout(e,0);try{return Ms(e,0)}catch(t){try{return Ms.call(null,e,0)}catch(t){return Ms.call(this,e,0)}}}!function(){try{Ms="function"==typeof setTimeout?setTimeout:Fs}catch(e){Ms=Fs}try{js="function"==typeof clearTimeout?clearTimeout:Us}catch(e){js=Us}}();var qs,Vs=[],Ws=!1,Bs=-1;function $s(){Ws&&qs&&(Ws=!1,qs.length?Vs=qs.concat(Vs):Bs=-1,Vs.length&&Hs())}function Hs(){if(!Ws){var e=zs($s);Ws=!0;for(var t=Vs.length;t;){for(qs=Vs,Vs=[];++Bs<t;)qs&&qs[Bs].run();Bs=-1,t=Vs.length}qs=null,Ws=!1,function(e){if(js===clearTimeout)return clearTimeout(e);if((js===Us||!js)&&clearTimeout)return js=clearTimeout,clearTimeout(e);try{js(e)}catch(t){try{return js.call(null,e)}catch(t){return js.call(this,e)}}}(e)}}function Ks(e,t){this.fun=e,this.array=t}function Ys(){}Ds.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Vs.push(new Ks(e,t)),1!==Vs.length||Ws||zs(Hs)},Ks.prototype.run=function(){this.fun.apply(null,this.array)},Ds.title="browser",Ds.browser=!0,Ds.env={},Ds.argv=[],Ds.version="",Ds.versions={},Ds.on=Ys,Ds.addListener=Ys,Ds.once=Ys,Ds.off=Ys,Ds.removeListener=Ys,Ds.removeAllListeners=Ys,Ds.emit=Ys,Ds.prependListener=Ys,Ds.prependOnceListener=Ys,Ds.listeners=function(e){return[]},Ds.binding=function(e){throw new Error("process.binding is not supported")},Ds.cwd=function(){return"/"},Ds.chdir=function(e){throw new Error("process.chdir is not supported")},Ds.umask=function(){return 0};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Dr(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:jr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return qr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Qs(t)}}catch(e){}return new Xs},Zs=Js("localStorage"),el=Js("sessionStorage"),tl=new pi("@firebase/database"),nl=function(){let e=1;return function(){return e++}}(),rl=function(e){const t=ti(e),n=new Qr;n.update(t);const r=n.digest();return br.encodeByteArray(r)},il=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=il.apply(null,r):t+="object"==typeof r?Dr(r):r,t+=" "}return t};let ol=null,al=!0;const sl=function(e,t){vr(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(tl.logLevel=li.VERBOSE,ol=tl.log.bind(tl),t&&el.set("logging_enabled",!0)):"function"==typeof e?ol=e:(ol=null,el.remove("logging_enabled"))},ll=function(...e){if(!0===al&&(al=!1,null===ol&&!0===el.get("logging_enabled")&&sl(!0)),ol){const t=il.apply(null,e);ol(t)}},cl=function(e){return function(...t){ll(e,...t)}},ul=function(...e){const t="FIREBASE INTERNAL ERROR: "+il(...e);tl.error(t)},dl=function(...e){const t=`FIREBASE FATAL ERROR: ${il(...e)}`;throw tl.error(t),new Error(t)},hl=function(...e){const t="FIREBASE WARNING: "+il(...e);tl.warn(t)},fl=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},pl=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=kl(e),r=kl(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},ml=function(e,t){return e===t?0:e<t?-1:1},gl=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Dr(t))},vl=function(e){if("object"!=typeof e||null===e)return Dr(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Dr(t[r]),n+=":",n+=vl(e[t[r]]);return n+="}",n},yl=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function _l(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const bl=function(e){vr(!fl(e),"Invalid JSON number");const t=1023;let n,r,i,o,a;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=o+t,i=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const s=[];for(a=52;a;a-=1)s.push(i%2?1:0),i=Math.floor(i/2);for(a=11;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);s.push(n?1:0),s.reverse();const l=s.join("");let c="";for(a=0;a<64;a+=8){let e=parseInt(l.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const wl=new RegExp("^-?(0*)\\d{1,10}$"),kl=function(e){if(wl.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Cl=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw hl("Exception was thrown by user callback.",t),e}),Math.floor(0))}},El=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){hl(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(ll("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',hl(e)}}class Tl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tl.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Il=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(e,t,n,r,i=!1,o="",a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zs.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Nl(e,t,n){let r;if(vr("string"==typeof t,"typeof type must == string"),vr("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return _l(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.counters_={}}incrementCounter(e,t=1){qr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Er(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl={},Al={};function Ll(e){const t=e.toString();return Rl[t]||(Rl[t]=new Ol),Rl[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Cl((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t,n,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cl(e),this.stats_=Ll(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Nl(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ml(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Rr()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dl(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Il.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jl.forceAllow_=!0}static forceDisallow(){jl.forceDisallow_=!0}static isAvailable(){return!Rr()&&(!!jl.forceAllow_||!(jl.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Dr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=wr(t),r=yl(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Rr())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Dr(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Dl{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Rr())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=nl(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Dl.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){ll("frame writing exception"),e.stack&&ll(e.stack),ll(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||ll("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){Rr()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ll("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl=null;"undefined"!=typeof MozWebSocket?Fl=MozWebSocket:"undefined"!=typeof WebSocket&&(Fl=WebSocket);class Ul{constructor(e,t,n,r,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cl(this.connId),this.stats_=Ll(t),this.connURL=Ul.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={v:"5"};return!Rr()&&"undefined"!=typeof location&&location.hostname&&Il.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),Nl(e,"websocket",o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zs.set("previous_websocket_failure",!0);try{let e;if(Rr()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Gs}/${Ls.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new Fl(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ul.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Fl&&!Ul.forceDisallow_}static previouslyFailed(){return Zs.isInMemoryStorage||!0===Zs.get("previous_websocket_failure")}markConnectionHealthy(){Zs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=jr(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(vr(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Dr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=yl(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ul.responsesRequiredToBeHealthy=2,Ul.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[jl,Ul]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ul&&Ul.isAvailable();let n=t&&!Ul.previouslyFailed();if(e.webSocketOnly&&(t||hl("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ul];else{const e=this.transports_=[];for(const t of zl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);zl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zl.globalTransportInitialized_=!1;class ql{constructor(e,t,n,r,i,o,a,s,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=s,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cl("c:"+this.id+":"),this.transportManager_=new zl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=El((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=gl("t",e),n=gl("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=gl("t",e),n=gl("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=gl("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ul("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ul("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&hl("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),El((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):El((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.allowedEvents_=e,this.listeners_={},vr(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){vr(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Wl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ir()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Bl}getInitialEvent(e){return vr("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Hl(){return new $l("")}function Kl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Yl(e){return e.pieces_.length-e.pieceNum_}function Gl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new $l(e.pieces_,t)}function Ql(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Xl(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Jl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $l(t,0)}function Zl(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof $l)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new $l(n,0)}function ec(e){return e.pieceNum_>=e.pieces_.length}function tc(e,t){const n=Kl(e),r=Kl(t);if(null===n)return t;if(n===r)return tc(Gl(e),Gl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function nc(e,t){if(Yl(e)!==Yl(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function rc(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Yl(e)>Yl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ic{constructor(e,t){this.errorPrefix_=t,this.parts_=Xl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ni(this.parts_[e]);oc(this)}}function oc(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ac(e))}function ac(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends Wl{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new sc}getInitialEvent(e){return vr("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends Vl{constructor(e,t,n,r,i,o,a,s){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=s,this.id=lc.nextPersistentConnectionId_++,this.log_=cl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,s&&!Rr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sc.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Dr(i)),vr(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new xr,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),vr(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),vr(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const o=i.d,a=i.s;lc.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==a&&this.removeListen_(n,r),e.onComplete&&e.onComplete(a,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&qr(e,"w")){const n=Vr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();hl(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||zr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ur(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),vr(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Dr(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ul("Unrecognized action received from server: "+Dr(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){vr(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+lc.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const s=function(){a?a.close():(o=!0,n())},l=function(e){vr(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:s,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ll("getToken() completed but was canceled"):(ll("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new ql(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{hl(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&hl(e),s())}}}interrupt(e){ll("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ll("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wr(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>vl(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new $l(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){ll("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ll("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Rr()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Gs.replace(/\./g,"-")]=1,Ir()?e["framework.cordova"]=1:Nr()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bl.getInstance().currentlyOnline();return Wr(this.interruptReasons_)&&e}}lc.nextPersistentConnectionId_=0,lc.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cc{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new cc(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new cc("[MIN_NAME]",e),r=new cc("[MIN_NAME]",t);return 0!==this.compare(n,r)}minPost(){return cc.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;class hc extends uc{static get __EMPTY_NODE(){return dc}static set __EMPTY_NODE(e){dc=e}compare(e,t){return pl(e.name,t.name)}isDefinedOn(e){throw yr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return cc.MIN}maxPost(){return new cc("[MAX_NAME]",dc)}makePost(e,t){return vr("string"==typeof e,"KeyIndex indexValue must always be a string."),new cc(e,dc)}toString(){return".key"}}const fc=new hc;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class mc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:mc.RED,this.left=null!=r?r:gc.EMPTY_NODE,this.right=null!=i?i:gc.EMPTY_NODE}copy(e,t,n,r,i){return new mc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return gc.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return gc.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}mc.RED=!0,mc.BLACK=!1;class gc{constructor(e,t=gc.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new gc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,mc.BLACK,null,null))}remove(e){return new gc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mc.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new pc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new pc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new pc(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vc(e,t){return pl(e.name,t.name)}function yc(e,t){return pl(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;gc.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new mc(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const bc=function(e){return"number"==typeof e?"number:"+bl(e):"string:"+e},wc=function(e){if(e.isLeafNode()){const t=e.val();vr("string"==typeof t||"number"==typeof t||"object"==typeof t&&qr(t,".sv"),"Priority must be a string or number.")}else vr(e===_c||e.isEmpty(),"priority of unexpected type.");vr(e===_c||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let kc,Cc,Ec;class Sc{constructor(e,t=Sc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,vr(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),wc(this.priorityNode_)}static set __childrenNodeConstructor(e){kc=e}static get __childrenNodeConstructor(){return kc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Sc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Sc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ec(e)?this:".priority"===Kl(e)?this.priorityNode_:Sc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Sc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Kl(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(vr(".priority"!==n||1===Yl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Sc.__childrenNodeConstructor.EMPTY_NODE.updateChild(Gl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?bl(this.value_):this.value_,this.lazyHash_=rl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Sc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Sc.__childrenNodeConstructor?-1:(vr(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Sc.VALUE_TYPE_ORDER.indexOf(t),i=Sc.VALUE_TYPE_ORDER.indexOf(n);return vr(r>=0,"Unknown leaf type: "+t),vr(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Sc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const xc=new class extends uc{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?pl(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return cc.MIN}maxPost(){return new cc("[MAX_NAME]",new Sc("[PRIORITY-POST]",Ec))}makePost(e,t){const n=Cc(e);return new cc(t,new Sc("[PRIORITY-POST]",n))}toString(){return".priority"}},Tc=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Tc,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pc=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let a,s;if(0===o)return null;if(1===o)return a=e[t],s=n?n(a):a,new mc(s,a.node,mc.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=i(t,l),u=i(l+1,r);return a=e[l],s=n?n(a):a,new mc(s,a.node,mc.BLACK,c,u)}},o=function(t){let r=null,o=null,a=e.length;const s=function(t,r){const o=a-t,s=a;a-=t;const c=i(o+1,s),u=e[o],d=n?n(u):u;l(new mc(d,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?s(r,mc.BLACK):(s(r,mc.BLACK),s(r,mc.RED))}return o}(new Ic(e.length));return new gc(r||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;const Oc={};class Rc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return vr(Oc&&xc,"ChildrenNode.ts has not been loaded"),Nc=Nc||new Rc({".priority":Oc},{".priority":xc}),Nc}get(e){const t=Vr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof gc?t:null}hasIndex(e){return qr(this.indexSet_,e.toString())}addIndex(e,t){vr(e!==fc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(cc.Wrap);let o,a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?Pc(n,e.getCompare()):Oc;const s=e.toString(),l=Object.assign({},this.indexSet_);l[s]=e;const c=Object.assign({},this.indexes_);return c[s]=o,new Rc(c,l)}addToIndexes(e,t){const n=Br(this.indexes_,((n,r)=>{const i=Vr(this.indexSet_,r);if(vr(i,"Missing index implementation for "+r),n===Oc){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(cc.Wrap);let o=r.getNext();for(;o;)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),Pc(n,i.getCompare())}return Oc}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new cc(e.name,r))),i.insert(e,e.node)}}));return new Rc(n,this.indexSet_)}removeFromIndexes(e,t){const n=Br(this.indexes_,(n=>{if(n===Oc)return n;{const r=t.get(e.name);return r?n.remove(new cc(e.name,r)):n}}));return new Rc(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;class Lc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&wc(this.priorityNode_),this.children_.isEmpty()&&vr(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ac||(Ac=new Lc(new gc(yc),null,Rc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ac}updatePriority(e){return this.children_.isEmpty()?this:new Lc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ac:t}}getChild(e){const t=Kl(e);return null===t?this:this.getImmediateChild(t).getChild(Gl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(vr(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new cc(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?Ac:this.priorityNode_;return new Lc(r,o,i)}}updateChild(e,t){const n=Kl(e);if(null===n)return t;{vr(".priority"!==Kl(e)||1===Yl(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Gl(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(xc,((o,a)=>{t[o]=a.val(e),n++,i&&Lc.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+bc(this.getPriority().val())+":"),this.forEachChild(xc,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":rl(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new cc(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new cc(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new cc(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,cc.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,cc.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mc?-1:0}withIndex(e){if(e===fc||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Lc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fc||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(xc),n=t.getIterator(xc);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===fc?null:this.indexMap_.get(e.toString())}}Lc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Mc=new class extends Lc{constructor(){super(new gc(yc),Lc.EMPTY_NODE,Rc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Lc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(cc,{MIN:{value:new cc("[MIN_NAME]",Lc.EMPTY_NODE)},MAX:{value:new cc("[MAX_NAME]",Mc)}}),hc.__EMPTY_NODE=Lc.EMPTY_NODE,Sc.__childrenNodeConstructor=Lc,_c=Mc,function(e){Ec=e}(Mc);function jc(e,t=null){if(null===e)return Lc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),vr(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Sc(e,jc(t))}if(e instanceof Array){let n=Lc.EMPTY_NODE;return _l(e,((t,r)=>{if(qr(e,t)&&"."!==t.substring(0,1)){const e=jc(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(jc(t))}{const n=[];let r=!1;if(_l(e,((e,t)=>{if("."!==e.substring(0,1)){const i=jc(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new cc(e,i)))}})),0===n.length)return Lc.EMPTY_NODE;const i=Pc(n,vc,(e=>e.name),yc);if(r){const e=Pc(n,xc.getCompare());return new Lc(i,jc(t),new Rc({".priority":e},{".priority":xc}))}return new Lc(i,jc(t),Rc.Default)}}!function(e){Cc=e}(jc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc extends uc{constructor(e){super(),this.indexPath_=e,vr(!ec(e)&&".priority"!==Kl(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?pl(e.name,t.name):i}makePost(e,t){const n=jc(e),r=Lc.EMPTY_NODE.updateChild(this.indexPath_,n);return new cc(t,r)}maxPost(){const e=Lc.EMPTY_NODE.updateChild(this.indexPath_,Mc);return new cc("[MAX_NAME]",e)}toString(){return Xl(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new class extends uc{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?pl(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return cc.MIN}maxPost(){return cc.MAX}makePost(e,t){const n=jc(e);return new cc(t,n)}toString(){return".value"}},Uc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zc=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=Uc.charAt(n%64),n=Math.floor(n/64);vr(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Uc.charAt(t[i]);return vr(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qc(e){return{type:"value",snapshotNode:e}}function Vc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Wc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Bc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){vr(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Wc(t,a)):vr(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Vc(t,n)):o.trackChildChange(Bc(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(xc,((e,r)=>{t.hasChild(e)||n.trackChildChange(Wc(e,r))})),t.isLeafNode()||t.forEachChild(xc,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Bc(t,r,i))}else n.trackChildChange(Vc(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Lc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.indexedFilter_=new $c(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hc.getStartPost_(e),this.endPost_=Hc.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new cc(t,n))||(n=Lc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Lc.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Lc.EMPTY_NODE);const i=this;return t.forEachChild(xc,((e,t)=>{i.matches(new cc(e,t))||(r=r.updateImmediateChild(e,Lc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.rangedFilter_=new Hc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new cc(t,n))||(n=Lc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Lc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Lc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(Lc.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let a=0,s=!1;for(;o.hasNext();){const t=o.getNext();!s&&i(e,t)<=0&&(s=!0);s&&a<this.limit_&&i(t,n)<=0?a++:r=r.updateImmediateChild(t.name,Lc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;vr(a.numChildren()===this.limit_,"");const s=new cc(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(s);if(a.hasChild(t)){const e=a.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||a.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const d=null==u?1:o(u,s);if(c&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(Bc(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Wc(t,e));const n=a.updateImmediateChild(t,Lc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Vc(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&o(l,s)>=0?(null!=i&&(i.trackChildChange(Wc(l.name,l.node)),i.trackChildChange(Vc(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,Lc.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xc}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return vr(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return vr(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return vr(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return vr(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return vr(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xc}copy(){const e=new Yc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gc(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Qc(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Xc(e,t){const n=e.copy();return n.index_=t,n}function Jc(e){const t={};if(e.isDefault())return t;let n;return e.index_===xc?n="$priority":e.index_===Fc?n="$value":e.index_===fc?n="$key":(vr(e.index_ instanceof Dc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Dr(n),e.startSet_&&(t.startAt=Dr(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Dr(e.indexStartName_))),e.endSet_&&(t.endAt=Dr(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Dr(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Zc(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==xc&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Vl{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=cl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(vr(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=eu.getListenId_(e,n),a={};this.listens_[o]=a;const s=Jc(e._queryParams);this.restRequest_(i+".json",s,((e,t)=>{let s=t;if(404===e&&(s=null,e=null),null===e&&this.onDataUpdate_(i,s,!1,n),Vr(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=eu.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Jc(e._queryParams),n=e._path.toString(),r=new xr;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Kr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=jr(a.responseText)}catch(e){hl("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&hl("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.rootNode_=Lc.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){return{value:null,children:new Map}}function ru(e,t,n){if(ec(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Kl(t);e.children.has(r)||e.children.set(r,nu());ru(e.children.get(r),t=Gl(t),n)}}function iu(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{iu(r,new $l(t.toString()+"/"+e),n)}))}class ou{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_l(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ou(e);const n=1e4+2e4*Math.random();El(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;_l(e,((e,r)=>{r>0&&qr(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),El(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var su,lu;function cu(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(lu=su||(su={}))[lu.OVERWRITE=0]="OVERWRITE",lu[lu.MERGE=1]="MERGE",lu[lu.ACK_USER_WRITE=2]="ACK_USER_WRITE",lu[lu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class uu{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=su.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ec(this.path)){if(null!=this.affectedTree.value)return vr(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $l(e));return new uu(Hl(),t,this.revert)}}return vr(Kl(this.path)===e,"operationForChild called for unrelated child."),new uu(Gl(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.source=e,this.path=t,this.type=su.LISTEN_COMPLETE}operationForChild(e){return ec(this.path)?new du(this.source,Hl()):new du(this.source,Gl(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=su.OVERWRITE}operationForChild(e){return ec(this.path)?new hu(this.source,Hl(),this.snap.getImmediateChild(e)):new hu(this.source,Gl(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=su.MERGE}operationForChild(e){if(ec(this.path)){const t=this.children.subtree(new $l(e));return t.isEmpty()?null:t.value?new hu(this.source,Hl(),t.value):new fu(this.source,Hl(),t)}return vr(Kl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fu(this.source,Gl(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ec(e))return this.isFullyInitialized()&&!this.filtered_;const t=Kl(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gu(e,t,n,r,i,o){const a=r.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw yr("Should only compare child_ events.");const r=new cc(t.childName,t.snapshotNode),i=new cc(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function vu(e,t){return{eventCache:e,serverCache:t}}function yu(e,t,n,r){return vu(new pu(t,n,r),e.serverCache)}function _u(e,t,n,r){return vu(e.eventCache,new pu(t,n,r))}function bu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function wu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku;class Cu{constructor(e,t=(()=>(ku||(ku=new gc(ml)),ku))()){this.value=e,this.children=t}static fromObject(e){let t=new Cu(null);return _l(e,((e,n)=>{t=t.set(new $l(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Hl(),value:this.value};if(ec(e))return null;{const n=Kl(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Gl(e),t);if(null!=i){return{path:Zl(new $l(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ec(e))return this;{const t=Kl(e),n=this.children.get(t);return null!==n?n.subtree(Gl(e)):new Cu(null)}}set(e,t){if(ec(e))return new Cu(t,this.children);{const n=Kl(e),r=(this.children.get(n)||new Cu(null)).set(Gl(e),t),i=this.children.insert(n,r);return new Cu(this.value,i)}}remove(e){if(ec(e))return this.children.isEmpty()?new Cu(null):new Cu(null,this.children);{const t=Kl(e),n=this.children.get(t);if(n){const r=n.remove(Gl(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Cu(null):new Cu(this.value,i)}return this}}get(e){if(ec(e))return this.value;{const t=Kl(e),n=this.children.get(t);return n?n.get(Gl(e)):null}}setTree(e,t){if(ec(e))return t;{const n=Kl(e),r=(this.children.get(n)||new Cu(null)).setTree(Gl(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Cu(this.value,i)}}fold(e){return this.fold_(Hl(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Zl(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Hl(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(ec(e))return null;{const r=Kl(e),i=this.children.get(r);return i?i.findOnPath_(Gl(e),Zl(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Hl(),t)}foreachOnPath_(e,t,n){if(ec(e))return this;{this.value&&n(t,this.value);const r=Kl(e),i=this.children.get(r);return i?i.foreachOnPath_(Gl(e),Zl(t,r),n):new Cu(null)}}foreach(e){this.foreach_(Hl(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Zl(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.writeTree_=e}static empty(){return new Eu(new Cu(null))}}function Su(e,t,n){if(ec(t))return new Eu(new Cu(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const a=tc(i,t);return o=o.updateChild(a,n),new Eu(e.writeTree_.set(i,o))}{const r=new Cu(n),i=e.writeTree_.setTree(t,r);return new Eu(i)}}}function xu(e,t,n){let r=e;return _l(n,((e,n)=>{r=Su(r,Zl(t,e),n)})),r}function Tu(e,t){if(ec(t))return Eu.empty();{const n=e.writeTree_.setTree(t,new Cu(null));return new Eu(n)}}function Iu(e,t){return null!=Pu(e,t)}function Pu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(tc(n.path,t)):null}function Nu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(xc,((e,n)=>{t.push(new cc(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new cc(e,n.value))})),t}function Ou(e,t){if(ec(t))return e;{const n=Pu(e,t);return new Eu(null!=n?new Cu(n):e.writeTree_.subtree(t))}}function Ru(e){return e.writeTree_.isEmpty()}function Au(e,t){return Lu(Hl(),e.writeTree_,t)}function Lu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(vr(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Lu(Zl(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Zl(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(e,t){return Yu(t,e)}function ju(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));vr(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;for(;i&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&Du(t,r.path)?i=!1:rc(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=Uu(e.allWrites,Fu,Hl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Tu(e.visibleWrites,r.path);else{_l(r.children,(t=>{e.visibleWrites=Tu(e.visibleWrites,Zl(r.path,t))}))}return!0}return!1}function Du(e,t){if(e.snap)return rc(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&rc(Zl(e.path,n),t))return!0;return!1}function Fu(e){return e.visible}function Uu(e,t,n){let r=Eu.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)rc(n,e)?(t=tc(n,e),r=Su(r,t,o.snap)):rc(e,n)&&(t=tc(e,n),r=Su(r,Hl(),o.snap.getChild(t)));else{if(!o.children)throw yr("WriteRecord should have .snap or .children");if(rc(n,e))t=tc(n,e),r=xu(r,t,o.children);else if(rc(e,n))if(t=tc(e,n),ec(t))r=xu(r,Hl(),o.children);else{const e=Vr(o.children,Kl(t));if(e){const n=e.getChild(Gl(t));r=Su(r,Hl(),n)}}}}}return r}function zu(e,t,n,r,i){if(r||i){const o=Ou(e.visibleWrites,t);if(!i&&Ru(o))return n;if(i||null!=n||Iu(o,Hl())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(rc(e.path,t)||rc(t,e.path))};return Au(Uu(e.allWrites,o,t),n||Lc.EMPTY_NODE)}return null}{const r=Pu(e.visibleWrites,t);if(null!=r)return r;{const r=Ou(e.visibleWrites,t);if(Ru(r))return n;if(null!=n||Iu(r,Hl())){return Au(r,n||Lc.EMPTY_NODE)}return null}}}function qu(e,t,n,r){return zu(e.writeTree,e.treePath,t,n,r)}function Vu(e,t){return function(e,t,n){let r=Lc.EMPTY_NODE;const i=Pu(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(xc,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Ou(e.visibleWrites,t);return n.forEachChild(xc,((e,t)=>{const n=Au(Ou(i,new $l(e)),t);r=r.updateImmediateChild(e,n)})),Nu(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Nu(Ou(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Wu(e,t,n,r){return function(e,t,n,r,i){vr(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=Zl(t,n);if(Iu(e.visibleWrites,o))return null;{const t=Ou(e.visibleWrites,o);return Ru(t)?i.getChild(n):Au(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Bu(e,t){return function(e,t){return Pu(e.visibleWrites,t)}(e.writeTree,Zl(e.treePath,t))}function $u(e,t,n,r,i,o){return function(e,t,n,r,i,o,a){let s;const l=Ou(e.visibleWrites,t),c=Pu(l,Hl());if(null!=c)s=c;else{if(null==n)return[];s=Au(l,n)}if(s=s.withIndex(a),s.isEmpty()||s.isLeafNode())return[];{const e=[],t=a.getCompare(),n=o?s.getReverseIteratorFrom(r,a):s.getIteratorFrom(r,a);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,o)}function Hu(e,t,n){return function(e,t,n,r){const i=Zl(t,n),o=Pu(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n))return Au(Ou(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ku(e,t){return Yu(Zl(e.treePath,t),e.writeTree)}function Yu(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;vr("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),vr(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Bc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Wc(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Vc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw yr("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Bc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Xu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new pu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hu(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:wu(this.viewCache_),i=$u(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e,t,n,r,i){const o=new Gu;let a,s;if(n.type===su.OVERWRITE){const l=n;l.source.fromUser?a=td(e,t,l.path,l.snap,r,i,o):(vr(l.source.fromServer,"Unknown source."),s=l.source.tagged||t.serverCache.isFiltered()&&!ec(l.path),a=ed(e,t,l.path,l.snap,r,i,s,o))}else if(n.type===su.MERGE){const l=n;l.source.fromUser?a=function(e,t,n,r,i,o,a){let s=t;return r.foreach(((r,l)=>{const c=Zl(n,r);nd(t,Kl(c))&&(s=td(e,s,c,l,i,o,a))})),r.foreach(((r,l)=>{const c=Zl(n,r);nd(t,Kl(c))||(s=td(e,s,c,l,i,o,a))})),s}(e,t,l.path,l.children,r,i,o):(vr(l.source.fromServer,"Unknown source."),s=l.source.tagged||t.serverCache.isFiltered(),a=id(e,t,l.path,l.children,r,i,s,o))}else if(n.type===su.ACK_USER_WRITE){const s=n;a=s.revert?function(e,t,n,r,i,o){let a;if(null!=Bu(r,n))return t;{const s=new Xu(r,t,i),l=t.eventCache.getNode();let c;if(ec(n)||".priority"===Kl(n)){let n;if(t.serverCache.isFullyInitialized())n=qu(r,wu(t));else{const e=t.serverCache.getNode();vr(e instanceof Lc,"serverChildren would be complete if leaf node"),n=Vu(r,e)}c=e.filter.updateFullNode(l,n,o)}else{const i=Kl(n);let u=Hu(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Gl(n),s,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Lc.EMPTY_NODE,Gl(n),s,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=qu(r,wu(t)),a.isLeafNode()&&(c=e.filter.updateFullNode(c,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Bu(r,Hl()),yu(t,c,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,s.path,r,i,o):function(e,t,n,r,i,o,a){if(null!=Bu(i,n))return t;const s=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(ec(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ed(e,t,n,l.getNode().getChild(n),i,o,s,a);if(ec(n)){let r=new Cu(null);return l.getNode().forEachChild(fc,((e,t)=>{r=r.set(new $l(e),t)})),id(e,t,n,r,i,o,s,a)}return t}{let c=new Cu(null);return r.foreach(((e,t)=>{const r=Zl(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),id(e,t,n,c,i,o,s,a)}}(e,t,s.path,s.affectedTree,r,i,o)}else{if(n.type!==su.LISTEN_COMPLETE)throw yr("Unknown operation type: "+n.type);a=function(e,t,n,r,i){const o=t.serverCache,a=_u(t,o.getNode(),o.isFullyInitialized()||ec(n),o.isFiltered());return Zu(e,a,n,r,Qu,i)}(e,t,n.path,r,o)}const l=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=bu(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(qc(bu(t)))}}(t,a,l),{viewCache:a,changes:l}}function Zu(e,t,n,r,i,o){const a=t.eventCache;if(null!=Bu(r,n))return t;{let s,l;if(ec(n))if(vr(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=wu(t),i=Vu(r,n instanceof Lc?n:Lc.EMPTY_NODE);s=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=qu(r,wu(t));s=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=Kl(n);if(".priority"===c){vr(1===Yl(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const o=Wu(r,n,i,l);s=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const u=Gl(n);let d;if(a.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Wu(r,n,a.getNode(),l);d=null!=e?a.getNode().getImmediateChild(c).updateChild(u,e):a.getNode().getImmediateChild(c)}else d=Hu(r,c,t.serverCache);s=null!=d?e.filter.updateChild(a.getNode(),c,d,u,i,o):a.getNode()}}return yu(t,s,a.isFullyInitialized()||ec(n),e.filter.filtersNodes())}}function ed(e,t,n,r,i,o,a,s){const l=t.serverCache;let c;const u=a?e.filter:e.filter.getIndexedFilter();if(ec(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Kl(n);if(!l.isCompleteForPath(n)&&Yl(n)>1)return t;const i=Gl(n),o=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,i,Qu,null)}const d=_u(t,c,l.isFullyInitialized()||ec(n),u.filtersNodes());return Zu(e,d,n,i,new Xu(i,d,o),s)}function td(e,t,n,r,i,o,a){const s=t.eventCache;let l,c;const u=new Xu(i,t,o);if(ec(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,a),l=yu(t,c,!0,e.filter.filtersNodes());else{const i=Kl(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=yu(t,c,s.isFullyInitialized(),s.isFiltered());else{const o=Gl(n),c=s.getNode().getImmediateChild(i);let d;if(ec(o))d=r;else{const e=u.getCompleteChild(i);d=null!=e?".priority"===Ql(o)&&e.getChild(Jl(o)).isEmpty()?e:e.updateChild(o,r):Lc.EMPTY_NODE}if(c.equals(d))l=t;else{l=yu(t,e.filter.updateChild(s.getNode(),i,d,o,u,a),s.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function nd(e,t){return e.eventCache.isCompleteForChild(t)}function rd(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function id(e,t,n,r,i,o,a,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ec(n)?r:new Cu(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=rd(0,t.serverCache.getNode().getImmediateChild(n),r);c=ed(e,c,new $l(n),l,i,o,a,s)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=rd(0,t.serverCache.getNode().getImmediateChild(n),r);c=ed(e,c,new $l(n),l,i,o,a,s)}})),c}class od{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new $c(n.getIndex()),i=(o=n).loadsAllData()?new $c(o.getIndex()):o.hasLimit()?new Kc(o):new Hc(o);var o;this.processor_=function(e){return{filter:e}}(i);const a=t.serverCache,s=t.eventCache,l=r.updateFullNode(Lc.EMPTY_NODE,a.getNode(),null),c=i.updateFullNode(Lc.EMPTY_NODE,s.getNode(),null),u=new pu(l,a.isFullyInitialized(),r.filtersNodes()),d=new pu(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=vu(d,u),this.eventGenerator_=new mu(this.query_)}get query(){return this.query_}}function ad(e,t){const n=wu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ec(t)&&!n.getImmediateChild(Kl(t)).isEmpty())?n.getChild(t):null}function sd(e){return 0===e.eventRegistrations_.length}function ld(e,t,n){const r=[];if(n){vr(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function cd(e,t,n,r){t.type===su.MERGE&&null!==t.source.queryId&&(vr(wu(e.viewCache_),"We should always have a full cache before handling merges"),vr(bu(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=Ju(e.processor_,i,t,n,r);var a,s;return a=e.processor_,s=o.viewCache,vr(s.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),vr(s.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),vr(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,ud(e,o.changes,o.viewCache.eventCache.getNode(),null)}function ud(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],o=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),gu(e,i,"child_removed",t,r,n),gu(e,i,"child_added",t,r,n),gu(e,i,"child_moved",o,r,n),gu(e,i,"child_changed",t,r,n),gu(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd,hd;class fd{constructor(){this.views=new Map}}function pd(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return vr(null!=o,"SyncTree gave us an op for an invalid query."),cd(o,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(cd(o,t,n,r));return i}}function md(e,t,n,r,i){const o=t._queryIdentifier,a=e.views.get(o);if(!a){let e=qu(n,i?r:null),o=!1;e?o=!0:r instanceof Lc?(e=Vu(n,r),o=!1):(e=Lc.EMPTY_NODE,o=!1);const a=vu(new pu(e,o,!1),new pu(r,i,!1));return new od(t,a)}return a}function gd(e,t,n,r,i,o){const a=md(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),function(e,t){e.eventRegistrations_.push(t)}(a,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(xc,((e,t)=>{r.push(Vc(e,t))}));return n.isFullyInitialized()&&r.push(qc(n.getNode())),ud(e,r,n.getNode(),t)}(a,n)}function vd(e,t,n,r){const i=t._queryIdentifier,o=[];let a=[];const s=kd(e);if("default"===i)for(const[t,i]of e.views.entries())a=a.concat(ld(i,n,r)),sd(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||o.push(i.query));else{const t=e.views.get(i);t&&(a=a.concat(ld(t,n,r)),sd(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return s&&!kd(e)&&o.push(new(vr(dd,"Reference.ts has not been loaded"),dd)(t._repo,t._path)),{removed:o,events:a}}function yd(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function _d(e,t){let n=null;for(const r of e.views.values())n=n||ad(r,t);return n}function bd(e,t){if(t._queryParams.loadsAllData())return Cd(e);{const n=t._queryIdentifier;return e.views.get(n)}}function wd(e,t){return null!=bd(e,t)}function kd(e){return null!=Cd(e)}function Cd(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ed=1;class Sd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Cu(null),this.pendingWriteTree_={visibleWrites:Eu.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xd(e,t,n,r,i){return function(e,t,n,r,i){vr(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Su(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Md(e,new hu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Td(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(ju(e.pendingWriteTree_,t)){let t=new Cu(null);return null!=r.snap?t=t.set(Hl(),!0):_l(r.children,(e=>{t=t.set(new $l(e),!0)})),Md(e,new uu(r.path,t,n))}return[]}function Id(e,t,n){return Md(e,new hu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Pd(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let a=[];if(o&&("default"===t._queryIdentifier||wd(o,t))){const s=vd(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=s.removed;a=s.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>kd(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&kd(t)){return[Cd(t)]}{let e=[];return t&&(e=yd(t)),_l(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=Fd(e,r);e.listenProvider_.startListening(Bd(i),Ud(e,i),o.hashFn,o.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(Bd(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(zd(t));e.listenProvider_.stopListening(Bd(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=zd(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function Nd(e,t,n,r){const i=qd(e,r);if(null!=i){const r=Vd(i),o=r.path,a=r.queryId,s=tc(o,t);return Wd(e,o,new hu(cu(a),s,n))}return[]}function Od(e,t){const n=e._path;let r=null,i=!1;t.syncPointTree_.foreachOnPath(n,((e,t)=>{const o=tc(e,n);r=r||_d(t,o),i=i||kd(t)}));let o,a=t.syncPointTree_.get(n);if(a?(i=i||kd(a),r=r||_d(a,Hl())):(a=new fd,t.syncPointTree_=t.syncPointTree_.set(n,a)),null!=r)o=!0;else{o=!1,r=Lc.EMPTY_NODE;t.syncPointTree_.subtree(n).foreachChild(((e,t)=>{const n=_d(t,Hl());n&&(r=r.updateImmediateChild(e,n))}))}const s=wd(a,e);if(!s&&!e._queryParams.loadsAllData()){const n=zd(e);vr(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Ed++;t.queryToTagMap.set(n,r),t.tagToQueryMap.set(r,n)}return{syncPoint:a,writesCache:Mu(t.pendingWriteTree_,n),serverCache:r,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:s}}function Rd(e,t,n){const{syncPoint:r,serverCache:i,writesCache:o,serverCacheComplete:a,viewAlreadyExists:s,foundAncestorDefaultView:l}=Od(t,e);let c=gd(r,t,n,o,i,a);if(!s&&!l){const n=bd(r,t);c=c.concat(function(e,t,n){const r=t._path,i=Ud(e,t),o=Fd(e,n),a=e.listenProvider_.startListening(Bd(t),i,o.hashFn,o.onComplete),s=e.syncPointTree_.subtree(r);if(i)vr(!kd(s.value),"If we're adding a query, it shouldn't be shadowed");else{const t=s.fold(((e,t,n)=>{if(!ec(e)&&t&&kd(t))return[Cd(t).query];{let e=[];return t&&(e=e.concat(yd(t).map((e=>e.query)))),_l(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Bd(r),Ud(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return c}function Ad(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=_d(n,tc(e,t));if(r)return r}));return zu(r,t,i,n,!0)}function Ld(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=tc(e,n);r=r||_d(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||_d(i,Hl()):(i=new fd,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,a=o?new pu(r,!0,!1):null;return function(e){return bu(e.viewCache_)}(md(i,t,Mu(e.pendingWriteTree_,t._path),o?a.getNode():Lc.EMPTY_NODE,o))}function Md(e,t){return jd(t,e.syncPointTree_,null,Mu(e.pendingWriteTree_,Hl()))}function jd(e,t,n,r){if(ec(e.path))return Dd(e,t,n,r);{const i=t.get(Hl());null==n&&null!=i&&(n=_d(i,Hl()));let o=[];const a=Kl(e.path),s=e.operationForChild(a),l=t.children.get(a);if(l&&s){const e=n?n.getImmediateChild(a):null,t=Ku(r,a);o=o.concat(jd(s,l,e,t))}return i&&(o=o.concat(pd(i,e,r,n))),o}}function Dd(e,t,n,r){const i=t.get(Hl());null==n&&null!=i&&(n=_d(i,Hl()));let o=[];return t.children.inorderTraversal(((t,i)=>{const a=n?n.getImmediateChild(t):null,s=Ku(r,t),l=e.operationForChild(t);l&&(o=o.concat(Dd(l,i,a,s)))})),i&&(o=o.concat(pd(i,e,r,n))),o}function Fd(e,t){const n=t.query,r=Ud(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Lc.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=qd(e,n);if(r){const n=Vd(r),i=n.path,o=n.queryId,a=tc(i,t);return Wd(e,i,new du(cu(o),a))}return[]}(e,n._path,r):function(e,t){return Md(e,new du({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Pd(e,n,null,r)}}}}function Ud(e,t){const n=zd(t);return e.queryToTagMap.get(n)}function zd(e){return e._path.toString()+"$"+e._queryIdentifier}function qd(e,t){return e.tagToQueryMap.get(t)}function Vd(e){const t=e.indexOf("$");return vr(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $l(e.substr(0,t))}}function Wd(e,t,n){const r=e.syncPointTree_.get(t);vr(r,"Missing sync point for query tag that we're tracking");return pd(r,n,Mu(e.pendingWriteTree_,t),null)}function Bd(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(vr(hd,"Reference.ts has not been loaded"),hd)(e._repo,e._path):e}class $d{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $d(t)}node(){return this.node_}}class Hd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Zl(this.path_,e);return new Hd(this.syncTree_,t)}node(){return Ad(this.syncTree_,this.path_)}}const Kd=function(e,t,n){return e&&"object"==typeof e?(vr(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Yd(e[".sv"],t,n):"object"==typeof e[".sv"]?Gd(e[".sv"],t):void vr(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Yd=function(e,t,n){if("timestamp"===e)return n.timestamp;vr(!1,"Unexpected server value: "+e)},Gd=function(e,t,n){e.hasOwnProperty("increment")||vr(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&vr(!1,"Unexpected increment value: "+r);const i=t.node();if(vr(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return"number"!=typeof o?r:o+r},Qd=function(e,t,n,r){return Jd(t,new Hd(n,e),r)},Xd=function(e,t,n){return Jd(e,new $d(t),n)};function Jd(e,t,n){const r=e.getPriority().val(),i=Kd(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Kd(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new Sc(o,jc(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new Sc(i))),r.forEachChild(xc,((e,r)=>{const i=Jd(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function eh(e,t){let n=t instanceof $l?t:new $l(t),r=e,i=Kl(n);for(;null!==i;){const e=Vr(r.node.children,i)||{children:{},childCount:0};r=new Zd(i,r,e),n=Gl(n),i=Kl(n)}return r}function th(e){return e.node.value}function nh(e,t){e.node.value=t,sh(e)}function rh(e){return e.node.childCount>0}function ih(e,t){_l(e.node.children,((n,r)=>{t(new Zd(n,e,r))}))}function oh(e,t,n,r){n&&!r&&t(e),ih(e,(e=>{oh(e,t,!0,r)})),n&&r&&t(e)}function ah(e){return new $l(null===e.parent?e.name:ah(e.parent)+"/"+e.name)}function sh(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===th(e)&&!rh(e)}(n),i=qr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,sh(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,sh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const lh=/[\[\].#$\/\u0000-\u001F\u007F]/,ch=/[\[\].#$\u0000-\u001F\u007F]/,uh=function(e){return"string"==typeof e&&0!==e.length&&!lh.test(e)},dh=function(e){return"string"==typeof e&&0!==e.length&&!ch.test(e)},hh=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!fl(e)||e&&"object"==typeof e&&qr(e,".sv")},fh=function(e,t,n,r){r&&void 0===t||ph(ei(e,"value"),t,n)},ph=function(e,t,n){const r=n instanceof $l?new ic(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ac(r));if("function"==typeof t)throw new Error(e+"contains a function "+ac(r)+" with contents = "+t.toString());if(fl(t))throw new Error(e+"contains "+t.toString()+" "+ac(r));if("string"==typeof t&&t.length>10485760/3&&ni(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+ac(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(_l(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!uh(t)))throw new Error(e+" contains an invalid key ("+t+") "+ac(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,s;s=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(s),a.byteLength_+=ni(s),oc(a),ph(e,o,r),function(e){const t=e.parts_.pop();e.byteLength_-=ni(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+ac(r)+" in addition to actual children.")}},mh=function(e,t,n,r){if(!(r&&void 0===n||uh(n)))throw new Error(ei(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},gh=function(e,t,n,r){if(!(r&&void 0===n||dh(n)))throw new Error(ei(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},vh=function(e,t){if(".info"===Kl(t))throw new Error(e+" failed = Can't modify data under /.info/")},yh=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!uh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),dh(e)}(n))throw new Error(ei(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bh(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||nc(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function wh(e,t,n){bh(e,n),Ch(e,(e=>nc(e,t)))}function kh(e,t,n){bh(e,n),Ch(e,(e=>rc(e,t)||rc(t,e)))}function Ch(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Eh(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Eh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();ol&&ll("event: "+n.toString()),Cl(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _h,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nu(),this.transactionQueueTree_=new Zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xh(e,t,n){if(e.stats_=Ll(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new eu(e.repoInfo_,((t,n,r,i)=>{Ph(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Nh(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Dr(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new lc(e.repoInfo_,t,((t,n,r,i)=>{Ph(e,t,n,r,i)}),(t=>{Nh(e,t)}),(t=>{!function(e,t){_l(t,((t,n)=>{Oh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Al[n]||(Al[n]=t()),Al[n]}(e.repoInfo_,(()=>new au(e.stats_,e.server_))),e.infoData_=new tu,e.infoSyncTree_=new Sd({startListening:(t,n,r,i)=>{let o=[];const a=e.infoData_.getNode(t._path);return a.isEmpty()||(o=Id(e.infoSyncTree_,t._path,a),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),Oh(e,"connected",!1),e.serverSyncTree_=new Sd({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);kh(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Th(e){const t=e.infoData_.getNode(new $l(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ih(e){return(t=(t={timestamp:Th(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Ph(e,t,n,r,i){e.dataUpdateCount++;const o=new $l(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Br(n,(e=>jc(e)));a=function(e,t,n,r){const i=qd(e,r);if(i){const r=Vd(i),o=r.path,a=r.queryId,s=tc(o,t),l=Cu.fromObject(n);return Wd(e,o,new fu(cu(a),s,l))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=jc(n);a=Nd(e.serverSyncTree_,o,t,i)}else if(r){const t=Br(n,(e=>jc(e)));a=function(e,t,n){const r=Cu.fromObject(n);return Md(e,new fu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=jc(n);a=Id(e.serverSyncTree_,o,t)}let s=o;a.length>0&&(s=qh(e,o)),kh(e.eventQueue_,s,a)}function Nh(e,t){Oh(e,"connected",t),!1===t&&function(e){Dh(e,"onDisconnectEvents");const t=Ih(e),n=nu();iu(e.onDisconnect_,Hl(),((r,i)=>{const o=Qd(r,i,e.serverSyncTree_,t);ru(n,r,o)}));let r=[];iu(n,Hl(),((t,n)=>{r=r.concat(Id(e.serverSyncTree_,t,n));const i=Hh(e,t);qh(e,i)})),e.onDisconnect_=nu(),kh(e.eventQueue_,Hl(),r)}(e)}function Oh(e,t,n){const r=new $l("/.info/"+t),i=jc(n);e.infoData_.updateSnapshot(r,i);const o=Id(e.infoSyncTree_,r,i);kh(e.eventQueue_,r,o)}function Rh(e){return e.nextWriteId_++}function Ah(e,t){const n=Ld(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const r=jc(n).withIndex(t._queryParams.getIndex());if(t._queryParams.loadsAllData())Id(e.serverSyncTree_,t._path,r);else{const n=function(e,t){const{syncPoint:n,serverCache:r,writesCache:i,serverCacheComplete:o}=Od(t,e),a=md(n,t,i,r,o);return n.views.has(t._queryIdentifier)||n.views.set(t._queryIdentifier,a),t._queryParams.loadsAllData()?null:Ud(e,t)}(e.serverSyncTree_,t);Nd(e.serverSyncTree_,t._path,r,n)}return Pd(e.serverSyncTree_,t,null).length>0&&Dh(e,"unexpected cancel events in repoGetValue"),r}),(n=>(Dh(e,"get for query "+Dr(t)+" failed: "+n),Promise.reject(new Error(n)))))}function Lh(e,t,n,r,i){Dh(e,"set",{path:t.toString(),value:n,priority:r});const o=Ih(e),a=jc(n,r),s=Ad(e.serverSyncTree_,t),l=Xd(a,s,o),c=Rh(e),u=xd(e.serverSyncTree_,t,l,c,!0);bh(e.eventQueue_,u),e.server_.put(t.toString(),a.val(!0),((n,r)=>{const o="ok"===n;o||hl("set at "+t+" failed: "+n);const a=Td(e.serverSyncTree_,c,!o);kh(e.eventQueue_,t,a),Fh(e,i,n,r)}));const d=Hh(e,t);qh(e,d),kh(e.eventQueue_,d,[])}function Mh(e,t,n){let r;r=".info"===Kl(t._path)?Pd(e.infoSyncTree_,t,n):Pd(e.serverSyncTree_,t,n),wh(e.eventQueue_,t._path,r)}function jh(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Dh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ll(n,...t)}function Fh(e,t,n,r){t&&Cl((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function Uh(e,t,n){return Ad(e.serverSyncTree_,t,n)||Lc.EMPTY_NODE}function zh(e,t=e.transactionQueueTree_){if(t||$h(e,t),th(t)){const n=Wh(e,t);vr(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Uh(e,t,r);let o=i;const a=i.hash();for(let e=0;e<n.length;e++){const r=n[e];vr(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=tc(t,r.path);o=o.updateChild(i,r.currentOutputSnapshotRaw)}const s=o.val(!0),l=t;e.server_.put(l.toString(),s,(r=>{Dh(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Td(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();$h(e,eh(e.transactionQueueTree_,t)),zh(e,e.transactionQueueTree_),kh(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Cl(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{hl("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}qh(e,t)}}),a)}(e,ah(t),n)}else rh(t)&&ih(t,(t=>{zh(e,t)}))}function qh(e,t){const n=Vh(e,t),r=ah(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=tc(n,l.path);let u,d=!1;if(vr(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,i=i.concat(Td(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,u="maxretry",i=i.concat(Td(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Uh(e,l.path,o);l.currentInputSnapshot=n;const r=t[s].update(n.val());if(void 0!==r){ph("transaction failed: Data returned ",r,l.path);let t=jc(r);"object"==typeof r&&null!=r&&qr(r,".priority")||(t=t.updatePriority(n.getPriority()));const a=l.currentWriteId,s=Ih(e),c=Xd(t,n,s);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Rh(e),o.splice(o.indexOf(a),1),i=i.concat(xd(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(Td(e.serverSyncTree_,a,!0))}else d=!0,u="nodata",i=i.concat(Td(e.serverSyncTree_,l.currentWriteId,!0))}kh(e.eventQueue_,n,i),i=[],d&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===u?r.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):r.push((()=>t[s].onComplete(new Error(u),!1,null)))))}var a;$h(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Cl(r[e]);zh(e,e.transactionQueueTree_)}(e,Wh(e,n),r),r}function Vh(e,t){let n,r=e.transactionQueueTree_;for(n=Kl(t);null!==n&&void 0===th(r);)r=eh(r,n),n=Kl(t=Gl(t));return r}function Wh(e,t){const n=[];return Bh(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Bh(e,t,n){const r=th(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);ih(t,(t=>{Bh(e,t,n)}))}function $h(e,t){const n=th(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,nh(t,n.length>0?n:void 0)}ih(t,(t=>{$h(e,t)}))}function Hh(e,t){const n=ah(Vh(e,t)),r=eh(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Kh(e,t)})),Kh(e,r),oh(r,(t=>{Kh(e,t)})),n}function Kh(e,t){const n=th(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(vr(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(vr(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Td(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?nh(t,void 0):n.length=o+1,kh(e.eventQueue_,ah(t),i);for(let e=0;e<r.length;e++)Cl(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=function(e,t){const n=Gh(e),r=n.namespace;"firebase.com"===n.domain&&dl(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||dl("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&hl("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Pl(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new $l(n.pathString)}},Gh=function(e){let t="",n="",r="",i="",o="",a=!0,s="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):hl(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(a="https"===s||"wss"===s,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in h&&(o=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:a,scheme:s,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qh{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Dr(this.snapshot.exportVal())}}class Xh{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return vr(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zh{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return ec(this._path)?null:Ql(this._path)}get ref(){return new rf(this._repo,this._path)}get _queryIdentifier(){const e=Zc(this._queryParams),t=vl(e);return"{}"===t?"default":t}get _queryObject(){return Zc(this._queryParams)}isEqual(e){if(!((e=ri(e))instanceof Zh))return!1;const t=this._repo===e._repo,n=nc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function ef(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function tf(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===fc){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if("[MIN_NAME]"!==e.getIndexStartName())throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if("[MAX_NAME]"!==e.getIndexEndName())throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===xc){if(null!=t&&!hh(t)||null!=n&&!hh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(vr(e.getIndex()instanceof Dc||e.getIndex()===Fc,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function nf(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class rf extends Zh{constructor(e,t){super(e,t,new Yc,!1)}get parent(){const e=Jl(this._path);return null===e?null:new rf(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class of{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new $l(e),n=sf(this.ref,e);return new of(this._node.getChild(t),n,xc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new of(n,sf(this.ref,t),xc))))}hasChild(e){const t=new $l(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function af(e,t){return(e=ri(e))._checkNotDeleted("ref"),void 0!==t?sf(e._root,t):e._root}function sf(e,t){var n,r,i,o;return null===Kl((e=ri(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),gh(n,r,i,o)):gh("child","path",t,!1),new rf(e._repo,Zl(e._path,t))}function lf(e,t){e=ri(e),vh("push",e._path),fh("push",t,e._path,!0);const n=Th(e._repo),r=zc(n),i=sf(e,r),o=sf(e,r);let a;return a=null!=t?uf(o,t).then((()=>o)):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function cf(e){return vh("remove",e._path),uf(e,null)}function uf(e,t){e=ri(e),vh("set",e._path),fh("set",t,e._path,!1);const n=new xr;return Lh(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function df(e){return Ah((e=ri(e))._repo,e).then((t=>new of(t,new rf(e._repo,e._path),e._queryParams.getIndex())))}class hf{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Qh("value",this,new of(e.snapshotNode,new rf(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Xh(this,e,t):null}matches(e){return e instanceof hf&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ff{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Xh(this,e,t):null}createEvent(e,t){vr(null!=e.childName,"Child events should have a childName.");const n=sf(new rf(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Qh(e.type,this,new of(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ff&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function pf(e,t,n,r,i){let o;if("object"==typeof r&&(o=void 0,i=r),"function"==typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Mh(e._repo,e,s),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const a=new Jh(n,o||void 0),s="value"===t?new hf(a):new ff(t,a);return function(e,t,n){let r;r=".info"===Kl(t._path)?Rd(e.infoSyncTree_,t,n):Rd(e.serverSyncTree_,t,n),wh(e.eventQueue_,t._path,r)}(e._repo,e,s),()=>Mh(e._repo,e,s)}class mf{}class gf extends mf{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){fh("endAt",this._value,e._path,!0);const t=Qc(e._queryParams,this._value,this._key);if(nf(t),tf(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Zh(e._repo,e._path,t,e._orderByCalled)}}class vf extends mf{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){fh("startAt",this._value,e._path,!0);const t=Gc(e._queryParams,this._value,this._key);if(nf(t),tf(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Zh(e._repo,e._path,t,e._orderByCalled)}}class yf extends mf{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Zh(e._repo,e._path,function(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}function _f(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new yf(e)}class bf extends mf{constructor(e){super(),this._path=e}_apply(e){ef(e,"orderByChild");const t=new $l(this._path);if(ec(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Dc(t),r=Xc(e._queryParams,n);return tf(r),new Zh(e._repo,e._path,r,!0)}}function wf(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return gh("orderByChild","path",e,!1),new bf(e)}class kf extends mf{_apply(e){ef(e,"orderByKey");const t=Xc(e._queryParams,fc);return tf(t),new Zh(e._repo,e._path,t,!0)}}class Cf extends mf{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(fh("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new gf(this._value,this._key)._apply(new vf(this._value,this._key)._apply(e))}}function Ef(e,t){return mh("equalTo","key",t,!0),new Cf(e,t)}function Sf(e,...t){let n=ri(e);for(const e of t)n=e._apply(n);return n}!function(e){vr(!dd,"__referenceConstructor has already been defined"),dd=e}(rf),function(e){vr(!hd,"__referenceConstructor has already been defined"),hd=e}(rf);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xf={};let Tf=!1;function If(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||dl("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ll("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,s,l=Yh(o,i),c=l.repoInfo;void 0!==Ls&&Ls.env&&(s=Ls.env.FIREBASE_DATABASE_EMULATOR_HOST),s?(a=!0,o=`http://${s}?ns=${c.namespace}`,l=Yh(o,i),c=l.repoInfo):a=!l.repoInfo.secure;const u=i&&a?new Tl(Tl.OWNER):new xl(e.name,e.options,t);yh("Invalid Firebase Database URL",l),ec(l.path)||dl("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=xf[t.name];i||(i={},xf[t.name]=i);let o=i[e.toURLString()];o&&dl("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Sh(e,Tf,n,r),i[e.toURLString()]=o,o}(c,e,u,new Sl(e.name,n));return new Pf(d,e)}class Pf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rf(this._repo,Hl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=xf[t];n&&n[e.key]===e||dl(`Database ${t}(${e.repoInfo_}) has already been deleted.`),jh(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&dl("Cannot call "+e+" on a deleted database.")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Of(e,t,n){var r;if(e=ri(e),vh("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null==n?void 0:n.applyLocally)||void 0===r||r,o=new xr,a=function(e,t,n,r){return pf(e,"value",t,n,r)}(e,(()=>{}));return function(e,t,n,r,i,o){Dh(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:nl(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},s=Uh(e,t,void 0);a.currentInputSnapshot=s;const l=a.update(s.val());if(void 0===l)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{ph("transaction failed: Data returned ",l,a.path),a.status=0;const n=eh(e.transactionQueueTree_,t),r=th(n)||[];let i;r.push(a),nh(n,r),"object"==typeof l&&null!==l&&qr(l,".priority")?(i=Vr(l,".priority"),vr(hh(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):i=(Ad(e.serverSyncTree_,t)||Lc.EMPTY_NODE).getPriority().val();const o=Ih(e),c=jc(l,i),u=Xd(c,s,o);a.currentOutputSnapshotRaw=c,a.currentOutputSnapshotResolved=u,a.currentWriteId=Rh(e);const d=xd(e.serverSyncTree_,t,u,a.currentWriteId,a.applyLocally);kh(e.eventQueue_,t,d),zh(e,e.transactionQueueTree_)}}(e._repo,e._path,t,((t,n,r)=>{let i=null;t?o.reject(t):(i=new of(r,new rf(e._repo,e._path),xc),o.resolve(new Nf(n,i)))}),a,i),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lc.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},lc.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Gs="9.9.0",Fi(new ii("database",((e,{instanceIdentifier:t})=>If(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Wi("@firebase/database","0.13.3",e),Wi("@firebase/database","0.13.3","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rf extends Ar{constructor(e,t){super(Af(e),`Firebase Storage: ${t} (${Af(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rf.prototype)}_codeEquals(e){return Af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Af(e){return"storage/"+e}function Lf(){return new Rf("unknown","An unknown error occurred, please check the error payload for server response.")}function Mf(){return new Rf("canceled","User canceled the upload/download.")}function jf(){return new Rf("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Df(e){return new Rf("invalid-argument",e)}function Ff(){return new Rf("app-deleted","The Firebase app was deleted.")}function Uf(e,t){return new Rf("invalid-format","String does not match format '"+e+"': "+t)}function zf(e){throw new Rf("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=qf.makeFromUrl(e,t)}catch(t){return new qf(e,"")}if(""===n.path)return n;throw new Rf("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const a=t.replace(/[.]/g,"\\."),s=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<s.length;t++){const r=s[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new qf(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new Rf("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class Vf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e){return"string"==typeof e||e instanceof String}function Bf(e){return $f()&&e instanceof Blob}function $f(){return"undefined"!=typeof Blob}function Hf(e,t,n,r){if(r<t)throw Df(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Df(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Yf(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gf,Qf;(Qf=Gf||(Gf={}))[Qf.NO_ERROR=0]="NO_ERROR",Qf[Qf.NETWORK_ERROR=1]="NETWORK_ERROR",Qf[Qf.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xf{constructor(e,t,n,r,i,o,a,s,l,c,u){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=s,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){const e=Lf();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?Ff():Mf())}else{r(new Rf("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new Jf(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,o=null,a=!1,s=0;function l(){return 2===s}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function d(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function h(){o&&clearTimeout(o)}function f(e,...t){if(c)return void h();if(e)return h(),void u.call(null,e,...t);if(l()||a)return h(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===s?(s=2,n=0):n=1e3*(r+Math.random()),d(n)}let p=!1;function m(e){p||(p=!0,h(),c||(null!==i?(e||(s=2),clearTimeout(i),d(0)):e||(s=1)))}return d(0),o=setTimeout((()=>{a=!0,m(!0)}),n),m}(((e,t)=>{if(t)return void e(!1,new Jf(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Gf.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===Gf.ABORT;return void e(!1,new Jf(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new Jf(o,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class Jf{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zf(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ep(...e){const t=Zf();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if($f())return new Blob(e);throw new Rf("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tp="raw",np="base64",rp="base64url",ip="data_url";class op{constructor(e,t){this.data=e,this.contentType=t||null}}function ap(e,t){switch(e){case tp:return new op(sp(t));case np:case rp:return new op(lp(e,t));case ip:return new op(function(e){const t=new cp(e);return t.base64?lp(np,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw Uf(ip,"Malformed data URL.")}return sp(t)}(t.rest)}(t),new cp(t).contentType)}throw Lf()}function sp(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function lp(e,t){switch(e){case np:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw Uf(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case rp:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw Uf(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw Uf(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class cp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Uf(ip,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,i;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(i=";base64",!!((r=n).length>=i.length)&&r.substring(r.length-i.length)===i),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class up{constructor(e,t){let n=0,r="";Bf(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Bf(this.data_)){const o=this.data_,a=(r=e,i=t,(n=o).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===a?null:new up(a)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new up(n,!0)}var n,r,i;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if($f()){const t=e.map((e=>e instanceof up?e.data_:e));return new up(ep.apply(null,t))}{const t=e.map((e=>Wf(e)?ap(tp,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new up(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(e,t){return t}class pp{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||fp}}let mp=null;function gp(){if(mp)return mp;const e=[];e.push(new pp("bucket")),e.push(new pp("generation")),e.push(new pp("metageneration")),e.push(new pp("name","fullPath",!0));const t=new pp("name");t.xform=function(e,t){return function(e){return!Wf(e)||e.length<2?e:hp(e)}(t)},e.push(t);const n=new pp("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new pp("timeCreated")),e.push(new pp("updated")),e.push(new pp("md5Hash",null,!0)),e.push(new pp("cacheControl",null,!0)),e.push(new pp("contentDisposition",null,!0)),e.push(new pp("contentEncoding",null,!0)),e.push(new pp("contentLanguage",null,!0)),e.push(new pp("contentType",null,!0)),e.push(new pp("metadata","customMetadata",!0)),mp=e,mp}function vp(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new qf(n,r);return t._makeStorageReference(i)}})}(r,e),r}function yp(e,t,n){const r=dp(t);if(null===r)return null;return vp(e,r,n)}function _p(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e){if(!e)throw Lf()}function kp(e,t){return function(n,r){const i=yp(e,r,t);return wp(null!==i),i}}function Cp(e,t){return function(n,r){const i=yp(e,r,t);return wp(null!==i),function(e,t,n,r){const i=dp(t);if(null===i)return null;if(!Wf(i.downloadTokens))return null;const o=i.downloadTokens;if(0===o.length)return null;const a=encodeURIComponent;return o.split(",").map((t=>{const i=e.bucket,o=e.fullPath;return Kf("/b/"+a(i)+"/o/"+a(o),n,r)+Yf({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function Ep(e){return function(t,n){let r;var i,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new Rf("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new Rf("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new Rf("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new Rf("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function Sp(e){const t=Ep(e);return function(n,r){let i=t(n,r);var o;return 404===n.getStatus()&&(o=e.path,i=new Rf("object-not-found","Object '"+o+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function xp(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function Tp(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};const s=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;const l=xp(t,r,i),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+_p(l,n)+"\r\n--"+s+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+s+"--",d=up.getBlob(c,r,u);if(null===d)throw jf();const h={name:l.fullPath},f=Kf(o,e.host,e._protocol),p=e.maxUploadRetryTime,m=new bp(f,"POST",kp(e,n),p);return m.urlParams=h,m.headers=a,m.body=d.uploadData(),m.errorHandler=Ep(t),m}class Ip{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gf.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Gf.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Gf.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw zf("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zf("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zf("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw zf("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zf("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Pp extends Ip{initXhr(){this.xhr_.responseType="text"}}function Np(){return new Pp}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Op{constructor(e,t){this._service=e,this._location=t instanceof qf?t:qf.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Op(e,t)}get root(){const e=new qf(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hp(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new qf(this._location.bucket,e);return new Op(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new Rf("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function Rp(e,t,n){e._throwIfRoot("uploadBytes");const r=Tp(e.storage,e._location,gp(),new up(t,!0),n);return e.storage.makeRequestWithTokens(r,Np).then((t=>({metadata:t,ref:e})))}function Ap(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Kf(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,o=new bp(r,"GET",Cp(e,n),i);return o.errorHandler=Sp(t),o}(e.storage,e._location,gp());return e.storage.makeRequestWithTokens(t,Np).then((e=>{if(null===e)throw new Rf("no-download-url","The given file does not have any download URLs.");return e}))}function Lp(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=Kf(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new bp(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=Sp(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Np)}function Mp(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new qf(e._location.bucket,n);return new Op(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(e,t){if(e instanceof Up){const n=e;if(null==n._bucket)throw new Rf("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new Op(n,n._bucket);return null!=t?jp(r,t):r}return void 0!==t?Mp(e,t):e}function Dp(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Up)return new Op(e,t);throw Df("To use ref(service, url), the first argument must be a Storage instance.")}return jp(e,t)}function Fp(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:qf.makeFromBucketSpec(n,e)}class Up{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?qf.makeFromBucketSpec(r,this._host):Fp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=qf.makeFromBucketSpec(this._url,e):this._bucket=Fp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Op(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new Vf(Ff());{const i=function(e,t,n,r,i,o){const a=Yf(e.urlParams),s=e.url+a,l=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,r),new Xf(s,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}function zp(e,t){return Dp(e=ri(e),t)}function qp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Up(n,r,i,t,"9.9.0")}Fi(new ii("storage",qp,"PUBLIC").setMultipleInstances(!0)),Wi("@firebase/storage","0.9.9",""),Wi("@firebase/storage","0.9.9","esm2017");const Vp=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw zi.create("bad-app-name",{appName:String(r)});const i=Mi.get(r);if(i){if($r(e,i.options)&&$r(n,i.config))return i;throw zi.create("duplicate-app",{appName:r})}const o=new ai(r);for(const e of ji.values())o.addComponent(e);const a=new qi(e,n,o);return Mi.set(r,a),a}({apiKey:"AIzaSyAolQez4ftrkM_IVGktqVJS0x6jGg9WARs",authDomain:"tiktok-clone-39b1a.firebaseapp.com",databaseURL:"https://tiktok-clone-39b1a-default-rtdb.firebaseio.com",projectId:"tiktok-clone-39b1a",storageBucket:"tiktok-clone-39b1a.appspot.com",messagingSenderId:"1083767671000",appId:"1:1083767671000:web:4d8e70f8e745689821efad"}),Wp=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=Vi()){const t=Ui(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Ui(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if($r(n.getOptions(),null!=t?t:{}))return e;oo(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Os,persistence:[Ha,Ra,La]})}(Vp),Bp=new function(e=Vi(),t){return Ui(e,"database").getImmediate({identifier:t})}(Vp),$p=new ba,Hp=new function(e=Vi(),t){return Ui(e=ri(e),"storage").getImmediate({identifier:t})}(Vp);var Kp=(0,(l=o("8T3gX")).createContext)([{},()=>{}]);const Yp=()=>{is(Wp,$p).then((e=>{const t=af(Bp),{uid:n,email:r,displayName:i,photoURL:o}=e.user;df(sf(t,"users/"+n)).then((e=>{e.exists()||uf(af(Bp,"users/"+n),{name:i,email:r,imgUrl:o,saveCount:0,followerCount:0,followingCount:0})}))})).catch((e=>{console.log(e)}))};var Gp,Qp=({setTopic:e,sidebarActive:t,setSidebarActive:n})=>{const[r]=(0,l.useContext)(Kp),i=qn();return(0,a.jsxs)("div",{className:`sidebar ${t?"active":null}`,children:[(0,a.jsxs)("div",{className:"top",children:[(0,a.jsx)(Zn,{to:"/",onClick:()=>window.location.reload(),children:(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)(un,{icon:tr})})}),(0,a.jsxs)("ul",{className:"links",children:[(0,a.jsx)("li",{children:(0,a.jsxs)(Zn,{to:"/",onClick:()=>{e(""),n(!1)},children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:sr})}),(0,a.jsx)("span",{children:"All"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(Zn,{to:"/",onClick:()=>{e("coding"),n(!1)},children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:or})}),(0,a.jsx)("span",{children:"Coding"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(Zn,{to:"/",onClick:()=>{e("football"),n(!1)},children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:lr})}),(0,a.jsx)("span",{children:"Football"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(Zn,{to:"/",onClick:()=>{e("music"),n(!1)},children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:ur})}),(0,a.jsx)("span",{children:"Music"})]})}),r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsxs)(Zn,{to:"/saved",onClick:()=>n(!1),children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:ir})}),(0,a.jsx)("span",{children:"Saved"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(Zn,{to:`/profile/${r?.uid}`,onClick:()=>n(!1),children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:hr})}),(0,a.jsx)("span",{children:"Profile"})]})})," "]}):null]})]}),(0,a.jsx)("div",{className:"bottom",children:r?(0,a.jsxs)("button",{className:"btn",onClick:()=>{Wp.signOut(),i("/"),n(!1)},children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:nr})}),(0,a.jsx)("span",{children:"Logout"})]}):(0,a.jsxs)("button",{className:"btn",onClick:Yp,children:[(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:er})}),(0,a.jsx)("span",{children:"Login"})]})})]})},Xp=(l=o("8T3gX"),{prefix:"far",iconName:"bookmark",icon:[384,512,[61591,128278],"f02e","M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"]}),Jp={prefix:"far",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"]},Zp={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]},em={prefix:"far",iconName:"image",icon:[512,512,[],"f03e","M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"]},tm=(l=o("8T3gX"),Array.isArray),nm=Object.keys,rm=Object.prototype.hasOwnProperty,im="undefined"!=typeof Element;function om(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var n,r,i,o=tm(e),a=tm(t);if(o&&a){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!om(e[n],t[n]))return!1;return!0}if(o!=a)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return e.toString()==t.toString();var d=nm(e);if((r=d.length)!==nm(t).length)return!1;for(n=r;0!=n--;)if(!rm.call(t,d[n]))return!1;if(im&&e instanceof Element&&t instanceof Element)return e===t;for(n=r;0!=n--;)if(!("_owner"===(i=d[n])&&e.$$typeof||om(e[i],t[i])))return!1;return!0}return e!=e&&t!=t}Gp=function(e,t){try{return om(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}};var am=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===sm}(e)}(e)};var sm="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function lm(e,t){return!1!==t.clone&&t.isMergeableObject(e)?um(function(e){return Array.isArray(e)?[]:{}}(e),e,t):e}function cm(e,t,n){return e.concat(t).map((function(e){return lm(e,n)}))}function um(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||cm,n.isMergeableObject=n.isMergeableObject||am;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):function(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=lm(e[t],n)})),Object.keys(t).forEach((function(i){n.isMergeableObject(t[i])&&e[i]?r[i]=um(e[i],t[i],n):r[i]=lm(t[i],n)})),r}(e,t,n):lm(t,n)}um.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return um(e,n,t)}),{})};var dm=um,hm=(sg=o("1CjO7")).default.Symbol,fm=Object.prototype,pm=fm.hasOwnProperty,mm=fm.toString,gm=hm?hm.toStringTag:void 0;var vm=function(e){var t=pm.call(e,gm),n=e[gm];try{e[gm]=void 0;var r=!0}catch(e){}var i=mm.call(e);return r&&(t?e[gm]=n:delete e[gm]),i},ym=Object.prototype.toString;var _m=function(e){return ym.call(e)},bm=hm?hm.toStringTag:void 0;var wm=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":bm&&bm in Object(e)?vm(e):_m(e)};var km=function(e,t){return function(n){return e(t(n))}},Cm=km(Object.getPrototypeOf,Object);var Em=function(e){return null!=e&&"object"==typeof e},Sm=Function.prototype,xm=Object.prototype,Tm=Sm.toString,Im=xm.hasOwnProperty,Pm=Tm.call(Object);var Nm=function(e){if(!Em(e)||"[object Object]"!=wm(e))return!1;var t=Cm(e);if(null===t)return!0;var n=Im.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Tm.call(n)==Pm};var Om=function(){this.__data__=[],this.size=0};var Rm=function(e,t){return e===t||e!=e&&t!=t};var Am=function(e,t){for(var n=e.length;n--;)if(Rm(e[n][0],t))return n;return-1},Lm=Array.prototype.splice;var Mm=function(e){var t=this.__data__,n=Am(t,e);return!(n<0)&&(n==t.length-1?t.pop():Lm.call(t,n,1),--this.size,!0)};var jm=function(e){var t=this.__data__,n=Am(t,e);return n<0?void 0:t[n][1]};var Dm=function(e){return Am(this.__data__,e)>-1};var Fm=function(e,t){var n=this.__data__,r=Am(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Um(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Um.prototype.clear=Om,Um.prototype.delete=Mm,Um.prototype.get=jm,Um.prototype.has=Dm,Um.prototype.set=Fm;var zm=Um;var qm=function(){this.__data__=new zm,this.size=0};var Vm=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var Wm=function(e){return this.__data__.get(e)};var Bm=function(e){return this.__data__.has(e)};var $m=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var Hm,Km=function(e){if(!$m(e))return!1;var t=wm(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ym=(sg=o("1CjO7")).default["__core-js_shared__"],Gm=(Hm=/[^.]+$/.exec(Ym&&Ym.keys&&Ym.keys.IE_PROTO||""))?"Symbol(src)_1."+Hm:"";var Qm=Function.prototype.toString;var Xm=function(e){if(null!=e){try{return Qm.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Jm=/^\[object .+?Constructor\]$/,Zm=Function.prototype,eg=Object.prototype,tg=Zm.toString,ng=eg.hasOwnProperty,rg=RegExp("^"+tg.call(ng).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ig=function(e){return!(!$m(e)||(t=e,Gm&&Gm in t))&&(Km(e)?rg:Jm).test(Xm(e));var t};var og=function(e,t){return null==e?void 0:e[t]};var ag=function(e,t){var n=og(e,t);return ig(n)?n:void 0},sg=o("1CjO7"),lg=ag(sg.default,"Map"),cg=ag(Object,"create");var ug=function(){this.__data__=cg?cg(null):{},this.size=0};var dg=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},hg=Object.prototype.hasOwnProperty;var fg=function(e){var t=this.__data__;if(cg){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return hg.call(t,e)?t[e]:void 0},pg=Object.prototype.hasOwnProperty;var mg=function(e){var t=this.__data__;return cg?void 0!==t[e]:pg.call(t,e)};var gg=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=cg&&void 0===t?"__lodash_hash_undefined__":t,this};function vg(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vg.prototype.clear=ug,vg.prototype.delete=dg,vg.prototype.get=fg,vg.prototype.has=mg,vg.prototype.set=gg;var yg=vg;var _g=function(){this.size=0,this.__data__={hash:new yg,map:new(lg||zm),string:new yg}};var bg=function(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map};var wg=function(e){var t=bg(this,e).delete(e);return this.size-=t?1:0,t};var kg=function(e){return bg(this,e).get(e)};var Cg=function(e){return bg(this,e).has(e)};var Eg=function(e,t){var n=bg(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Sg(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Sg.prototype.clear=_g,Sg.prototype.delete=wg,Sg.prototype.get=kg,Sg.prototype.has=Cg,Sg.prototype.set=Eg;var xg=Sg;var Tg=function(e,t){var n=this.__data__;if(n instanceof zm){var r=n.__data__;if(!lg||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new xg(r)}return n.set(e,t),this.size=n.size,this};function Ig(e){var t=this.__data__=new zm(e);this.size=t.size}Ig.prototype.clear=qm,Ig.prototype.delete=Vm,Ig.prototype.get=Wm,Ig.prototype.has=Bm,Ig.prototype.set=Tg;var Pg=Ig;var Ng=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},Og=function(){try{var e=ag(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Rg=Og;var Ag=function(e,t,n){"__proto__"==t&&Rg?Rg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},Lg=Object.prototype.hasOwnProperty;var Mg=function(e,t,n){var r=e[t];Lg.call(e,t)&&Rm(r,n)&&(void 0!==n||t in e)||Ag(e,t,n)};var jg=function(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;void 0===l&&(l=e[s]),i?Ag(n,s,l):Mg(n,s,l)}return n};var Dg=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Fg=function(e){return Em(e)&&"[object Arguments]"==wm(e)},Ug=Object.prototype,zg=Ug.hasOwnProperty,qg=Ug.propertyIsEnumerable,Vg=Fg(function(){return arguments}())?Fg:function(e){return Em(e)&&zg.call(e,"callee")&&!qg.call(e,"callee")},Wg=Array.isArray,Bg=o("eYlEu"),$g=/^(?:0|[1-9]\d*)$/;var Hg=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&$g.test(e))&&e>-1&&e%1==0&&e<t};var Kg=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Yg={};Yg["[object Float32Array]"]=Yg["[object Float64Array]"]=Yg["[object Int8Array]"]=Yg["[object Int16Array]"]=Yg["[object Int32Array]"]=Yg["[object Uint8Array]"]=Yg["[object Uint8ClampedArray]"]=Yg["[object Uint16Array]"]=Yg["[object Uint32Array]"]=!0,Yg["[object Arguments]"]=Yg["[object Array]"]=Yg["[object ArrayBuffer]"]=Yg["[object Boolean]"]=Yg["[object DataView]"]=Yg["[object Date]"]=Yg["[object Error]"]=Yg["[object Function]"]=Yg["[object Map]"]=Yg["[object Number]"]=Yg["[object Object]"]=Yg["[object RegExp]"]=Yg["[object Set]"]=Yg["[object String]"]=Yg["[object WeakMap]"]=!1;var Gg=function(e){return Em(e)&&Kg(e.length)&&!!Yg[wm(e)]};var Qg=function(e){return function(t){return e(t)}},Xg=(ry=o("8gAK4")).default&&ry.default.isTypedArray,Jg=Xg?Qg(Xg):Gg,Zg=Object.prototype.hasOwnProperty;var ev=function(e,t){var n=Wg(e),r=!n&&Vg(e),i=!n&&!r&&(0,Bg.default)(e),o=!n&&!r&&!i&&Jg(e),a=n||r||i||o,s=a?Dg(e.length,String):[],l=s.length;for(var c in e)!t&&!Zg.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Hg(c,l))||s.push(c);return s},tv=Object.prototype;var nv=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||tv)},rv=km(Object.keys,Object),iv=Object.prototype.hasOwnProperty;var ov=function(e){if(!nv(e))return rv(e);var t=[];for(var n in Object(e))iv.call(e,n)&&"constructor"!=n&&t.push(n);return t};var av=function(e){return null!=e&&Kg(e.length)&&!Km(e)};var sv=function(e){return av(e)?ev(e):ov(e)};var lv=function(e,t){return e&&jg(t,sv(t),e)};var cv=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},uv=Object.prototype.hasOwnProperty;var dv=function(e){if(!$m(e))return cv(e);var t=nv(e),n=[];for(var r in e)("constructor"!=r||!t&&uv.call(e,r))&&n.push(r);return n};var hv=function(e){return av(e)?ev(e,!0):dv(e)};var fv=function(e,t){return e&&jg(t,hv(t),e)},pv=o("6OXlT");var mv=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t};var gv=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o};var vv=function(){return[]},yv=Object.prototype.propertyIsEnumerable,_v=Object.getOwnPropertySymbols,bv=_v?function(e){return null==e?[]:(e=Object(e),gv(_v(e),(function(t){return yv.call(e,t)})))}:vv;var wv=function(e,t){return jg(e,bv(e),t)};var kv=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Cv=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)kv(t,bv(e)),e=Cm(e);return t}:vv,Ev=Cv;var Sv=function(e,t){return jg(e,Ev(e),t)};var xv=function(e,t,n){var r=t(e);return Wg(e)?r:kv(r,n(e))};var Tv=function(e){return xv(e,sv,bv)};var Iv=function(e){return xv(e,hv,Ev)},Pv=(sg=o("1CjO7"),ag(sg.default,"DataView")),Nv=(sg=o("1CjO7"),ag(sg.default,"Promise")),Ov=(sg=o("1CjO7"),ag(sg.default,"Set")),Rv=(sg=o("1CjO7"),ag(sg.default,"WeakMap")),Av=Xm(Pv),Lv=Xm(lg),Mv=Xm(Nv),jv=Xm(Ov),Dv=Xm(Rv),Fv=wm;(Pv&&"[object DataView]"!=Fv(new Pv(new ArrayBuffer(1)))||lg&&"[object Map]"!=Fv(new lg)||Nv&&"[object Promise]"!=Fv(Nv.resolve())||Ov&&"[object Set]"!=Fv(new Ov)||Rv&&"[object WeakMap]"!=Fv(new Rv))&&(Fv=function(e){var t=wm(e),n="[object Object]"==t?e.constructor:void 0,r=n?Xm(n):"";if(r)switch(r){case Av:return"[object DataView]";case Lv:return"[object Map]";case Mv:return"[object Promise]";case jv:return"[object Set]";case Dv:return"[object WeakMap]"}return t});var Uv=Fv,zv=Object.prototype.hasOwnProperty;var qv=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&zv.call(e,"index")&&(n.index=e.index,n.input=e.input),n},Vv=(sg=o("1CjO7")).default.Uint8Array;var Wv=function(e){var t=new e.constructor(e.byteLength);return new Vv(t).set(new Vv(e)),t};var Bv=function(e,t){var n=t?Wv(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},$v=/\w*$/;var Hv=hm?hm.prototype:void 0,Kv=Hv?Hv.valueOf:void 0;var Yv=function(e,t){var n=t?Wv(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)};var Gv=function(e,t,n){var r,i,o,a=e.constructor;switch(t){case"[object ArrayBuffer]":return Wv(e);case"[object Boolean]":case"[object Date]":return new a(+e);case"[object DataView]":return Bv(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Yv(e,n);case"[object Map]":case"[object Set]":return new a;case"[object Number]":case"[object String]":return new a(e);case"[object RegExp]":return(o=new(i=e).constructor(i.source,$v.exec(i))).lastIndex=i.lastIndex,o;case"[object Symbol]":return r=e,Kv?Object(Kv.call(r)):{}}},Qv=Object.create,Xv=function(){function e(){}return function(t){if(!$m(t))return{};if(Qv)return Qv(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),Jv=Xv;var Zv=function(e){return"function"!=typeof e.constructor||nv(e)?{}:Jv(Cm(e))};Bg=o("eYlEu");var ey=function(e){return Em(e)&&"[object Map]"==Uv(e)},ty=(ry=o("8gAK4")).default&&ry.default.isMap,ny=ty?Qg(ty):ey;var ry,iy=function(e){return Em(e)&&"[object Set]"==Uv(e)},oy=(ry=o("8gAK4")).default&&ry.default.isSet,ay=oy?Qg(oy):iy,sy={};sy["[object Arguments]"]=sy["[object Array]"]=sy["[object ArrayBuffer]"]=sy["[object DataView]"]=sy["[object Boolean]"]=sy["[object Date]"]=sy["[object Float32Array]"]=sy["[object Float64Array]"]=sy["[object Int8Array]"]=sy["[object Int16Array]"]=sy["[object Int32Array]"]=sy["[object Map]"]=sy["[object Number]"]=sy["[object Object]"]=sy["[object RegExp]"]=sy["[object Set]"]=sy["[object String]"]=sy["[object Symbol]"]=sy["[object Uint8Array]"]=sy["[object Uint8ClampedArray]"]=sy["[object Uint16Array]"]=sy["[object Uint32Array]"]=!0,sy["[object Error]"]=sy["[object Function]"]=sy["[object WeakMap]"]=!1;var ly=function e(t,n,r,i,o,a){var s,l=1&n,c=2&n,u=4&n;if(r&&(s=o?r(t,i,o,a):r(t)),void 0!==s)return s;if(!$m(t))return t;var d=Wg(t);if(d){if(s=qv(t),!l)return mv(t,s)}else{var h=Uv(t),f="[object Function]"==h||"[object GeneratorFunction]"==h;if((0,Bg.default)(t))return(0,pv.default)(t,l);if("[object Object]"==h||"[object Arguments]"==h||f&&!o){if(s=c||f?{}:Zv(t),!l)return c?Sv(t,fv(s,t)):wv(t,lv(s,t))}else{if(!sy[h])return o?t:{};s=Gv(t,h,l)}}a||(a=new Pg);var p=a.get(t);if(p)return p;a.set(t,s),ay(t)?t.forEach((function(i){s.add(e(i,n,r,i,t,a))})):ny(t)&&t.forEach((function(i,o){s.set(o,e(i,n,r,o,t,a))}));var m=d?void 0:(u?c?Iv:Tv:c?hv:sv)(t);return Ng(m||t,(function(i,o){m&&(i=t[o=i]),Mg(s,o,e(i,n,r,o,t,a))})),s};var cy=function(e){return ly(e,4)};var uy=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i};var dy=function(e){return"symbol"==typeof e||Em(e)&&"[object Symbol]"==wm(e)};function hy(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(hy.Cache||xg),n}hy.Cache=xg;var fy,py,my,gy=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vy=/\\(\\)?/g,yy=(fy=function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(gy,(function(e,n,r,i){t.push(r?i.replace(vy,"$1"):n||e)})),t},py=hy(fy,(function(e){return 500===my.size&&my.clear(),e})),my=py.cache,py),_y=yy;var by=function(e){if("string"==typeof e||dy(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},wy=hm?hm.prototype:void 0,ky=wy?wy.toString:void 0;var Cy=function e(t){if("string"==typeof t)return t;if(Wg(t))return uy(t,e)+"";if(dy(t))return ky?ky.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n};var Ey=function(e){return null==e?"":Cy(e)};var Sy=function(e){return Wg(e)?uy(e,by):dy(e)?[e]:mv(_y(Ey(e)))};var xy,Ty={};Ty=o("laXNe");var Iy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Py={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ny={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oy={};function Ry(e){return Ty.isMemo(e)?Ny:Oy[e.$$typeof]||Iy}Oy[Ty.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oy[Ty.Memo]=Ny;var Ay=Object.defineProperty,Ly=Object.getOwnPropertyNames,My=Object.getOwnPropertySymbols,jy=Object.getOwnPropertyDescriptor,Dy=Object.getPrototypeOf,Fy=Object.prototype;xy=function e(t,n,r){if("string"!=typeof n){if(Fy){var i=Dy(n);i&&i!==Fy&&e(t,i,r)}var o=Ly(n);My&&(o=o.concat(My(n)));for(var a=Ry(t),s=Ry(n),l=0;l<o.length;++l){var c=o[l];if(!(Py[c]||r&&r[c]||s&&s[c]||a&&a[c])){var u=jy(n,c);try{Ay(t,c,u)}catch(e){}}}}return t};var Uy=function(e){return ly(e,5)};function zy(){return zy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zy.apply(this,arguments)}function qy(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Vy(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function Wy(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var By=function(e){return Array.isArray(e)&&0===e.length},$y=function(e){return"function"==typeof e},Hy=function(e){return null!==e&&"object"==typeof e},Ky=function(e){return String(Math.floor(Number(e)))===e},Yy=function(e){return"[object String]"===Object.prototype.toString.call(e)},Gy=function(e){return 0===l.Children.count(e)},Qy=function(e){return Hy(e)&&$y(e.then)};function Xy(e,t,n,r){void 0===r&&(r=0);for(var i=Sy(t);e&&r<i.length;)e=e[i[r++]];return void 0===e?n:e}function Jy(e,t,n){for(var r=cy(e),i=r,o=0,a=Sy(t);o<a.length-1;o++){var s=a[o],l=Xy(e,a.slice(0,o+1));if(l&&(Hy(l)||Array.isArray(l)))i=i[s]=cy(l);else{var c=a[o+1];i=i[s]=Ky(c)&&Number(c)>=0?[]:{}}}return(0===o?e:i)[a[o]]===n?e:(void 0===n?delete i[a[o]]:i[a[o]]=n,0===o&&void 0===n&&delete r[a[o]],r)}function Zy(e,t,n,r){void 0===n&&(n=new WeakMap),void 0===r&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];Hy(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},Zy(s,t,n,r[a])):r[a]=t}return r}var e_=(0,l.createContext)(void 0);e_.displayName="FormikContext";var t_=e_.Provider,n_=e_.Consumer;function r_(){var e=(0,l.useContext)(e_);return e}function i_(e,t){switch(t.type){case"SET_VALUES":return zy({},e,{values:t.payload});case"SET_TOUCHED":return zy({},e,{touched:t.payload});case"SET_ERRORS":return n(Gp)(e.errors,t.payload)?e:zy({},e,{errors:t.payload});case"SET_STATUS":return zy({},e,{status:t.payload});case"SET_ISSUBMITTING":return zy({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return zy({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return zy({},e,{values:Jy(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return zy({},e,{touched:Jy(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return zy({},e,{errors:Jy(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return zy({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return zy({},e,{touched:Zy(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return zy({},e,{isSubmitting:!1});default:return e}}var o_={},a_={};function s_(e){var t=e.validateOnChange,r=void 0===t||t,i=e.validateOnBlur,o=void 0===i||i,a=e.validateOnMount,s=void 0!==a&&a,c=e.isInitialValid,u=e.enableReinitialize,d=void 0!==u&&u,h=e.onSubmit,f=Vy(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=zy({validateOnChange:r,validateOnBlur:o,validateOnMount:s,onSubmit:h},f),m=(0,l.useRef)(p.initialValues),g=(0,l.useRef)(p.initialErrors||o_),v=(0,l.useRef)(p.initialTouched||a_),y=(0,l.useRef)(p.initialStatus),_=(0,l.useRef)(!1),b=(0,l.useRef)({});(0,l.useEffect)((function(){return _.current=!0,function(){_.current=!1}}),[]);var w=(0,l.useReducer)(i_,{values:p.initialValues,errors:p.initialErrors||o_,touched:p.initialTouched||a_,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),k=w[0],C=w[1],E=(0,l.useCallback)((function(e,t){return new Promise((function(n,r){var i=p.validate(e,t);null==i?n(o_):Qy(i)?i.then((function(e){n(e||o_)}),(function(e){r(e)})):n(i)}))}),[p.validate]),S=(0,l.useCallback)((function(e,t){var n=p.validationSchema,r=$y(n)?n(t):n,i=t&&r.validateAt?r.validateAt(t,e):function(e,t,n,r){void 0===n&&(n=!1);void 0===r&&(r={});var i=c_(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r})}(e,r);return new Promise((function(e,t){i.then((function(){e(o_)}),(function(n){"ValidationError"===n.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return Jy(t,e.path,e.message);var n=e.inner,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var a=o;Xy(t,a.path)||(t=Jy(t,a.path,a.message))}}return t}(n)):t(n)}))}))}),[p.validationSchema]),x=(0,l.useCallback)((function(e,t){return new Promise((function(n){return n(b.current[e].validate(t))}))}),[]),T=(0,l.useCallback)((function(e){var t=Object.keys(b.current).filter((function(e){return $y(b.current[e].validate)})),n=t.length>0?t.map((function(t){return x(t,Xy(e,t))})):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(n).then((function(e){return e.reduce((function(e,n,r){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===n||n&&(e=Jy(e,t[r],n)),e}),{})}))}),[x]),I=(0,l.useCallback)((function(e){return Promise.all([T(e),p.validationSchema?S(e):{},p.validate?E(e):{}]).then((function(e){var t=e[0],n=e[1],r=e[2];return dm.all([t,n,r],{arrayMerge:u_})}))}),[p.validate,p.validationSchema,T,E,S]),P=h_((function(e){return void 0===e&&(e=k.values),C({type:"SET_ISVALIDATING",payload:!0}),I(e).then((function(e){return _.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:e})),e}))}));(0,l.useEffect)((function(){s&&!0===_.current&&n(Gp)(m.current,p.initialValues)&&P(m.current)}),[s,P]);var N=(0,l.useCallback)((function(e){var t=e&&e.values?e.values:m.current,n=e&&e.errors?e.errors:g.current?g.current:p.initialErrors||{},r=e&&e.touched?e.touched:v.current?v.current:p.initialTouched||{},i=e&&e.status?e.status:y.current?y.current:p.initialStatus;m.current=t,g.current=n,v.current=r,y.current=i;var o=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:i,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"==typeof e.submitCount?e.submitCount:0}})};if(p.onReset){var a=p.onReset(k.values,G);Qy(a)?a.then(o):o()}else o()}),[p.initialErrors,p.initialStatus,p.initialTouched]);(0,l.useEffect)((function(){!0!==_.current||n(Gp)(m.current,p.initialValues)||(d&&(m.current=p.initialValues,N()),s&&P(m.current))}),[d,p.initialValues,N,s,P]),(0,l.useEffect)((function(){d&&!0===_.current&&!n(Gp)(g.current,p.initialErrors)&&(g.current=p.initialErrors||o_,C({type:"SET_ERRORS",payload:p.initialErrors||o_}))}),[d,p.initialErrors]),(0,l.useEffect)((function(){d&&!0===_.current&&!n(Gp)(v.current,p.initialTouched)&&(v.current=p.initialTouched||a_,C({type:"SET_TOUCHED",payload:p.initialTouched||a_}))}),[d,p.initialTouched]),(0,l.useEffect)((function(){d&&!0===_.current&&!n(Gp)(y.current,p.initialStatus)&&(y.current=p.initialStatus,C({type:"SET_STATUS",payload:p.initialStatus}))}),[d,p.initialStatus,p.initialTouched]);var O=h_((function(e){if(b.current[e]&&$y(b.current[e].validate)){var t=Xy(k.values,e),n=b.current[e].validate(t);return Qy(n)?(C({type:"SET_ISVALIDATING",payload:!0}),n.then((function(e){return e})).then((function(t){C({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),C({type:"SET_ISVALIDATING",payload:!1})}))):(C({type:"SET_FIELD_ERROR",payload:{field:e,value:n}}),Promise.resolve(n))}return p.validationSchema?(C({type:"SET_ISVALIDATING",payload:!0}),S(k.values,e).then((function(e){return e})).then((function(t){C({type:"SET_FIELD_ERROR",payload:{field:e,value:t[e]}}),C({type:"SET_ISVALIDATING",payload:!1})}))):Promise.resolve()})),R=(0,l.useCallback)((function(e,t){var n=t.validate;b.current[e]={validate:n}}),[]),A=(0,l.useCallback)((function(e){delete b.current[e]}),[]),L=h_((function(e,t){return C({type:"SET_TOUCHED",payload:e}),(void 0===t?o:t)?P(k.values):Promise.resolve()})),M=(0,l.useCallback)((function(e){C({type:"SET_ERRORS",payload:e})}),[]),j=h_((function(e,t){var n=$y(e)?e(k.values):e;return C({type:"SET_VALUES",payload:n}),(void 0===t?r:t)?P(n):Promise.resolve()})),D=(0,l.useCallback)((function(e,t){C({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})}),[]),F=h_((function(e,t,n){return C({type:"SET_FIELD_VALUE",payload:{field:e,value:t}}),(void 0===n?r:n)?P(Jy(k.values,e,t)):Promise.resolve()})),U=(0,l.useCallback)((function(e,t){var n,r=t,i=e;if(!Yy(e)){e.persist&&e.persist();var o=e.target?e.target:e.currentTarget,a=o.type,s=o.name,l=o.id,c=o.value,u=o.checked,d=(o.outerHTML,o.options),h=o.multiple;r=t||(s||l),i=/number|range/.test(a)?(n=parseFloat(c),isNaN(n)?"":n):/checkbox/.test(a)?function(e,t,n){if("boolean"==typeof e)return Boolean(t);var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,i=(o=e.indexOf(n))>=0;else if(!n||"true"==n||"false"==n)return Boolean(t);return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}(Xy(k.values,r),u,c):d&&h?function(e){return Array.from(e).filter((function(e){return e.selected})).map((function(e){return e.value}))}(d):c}r&&F(r,i)}),[F,k.values]),z=h_((function(e){if(Yy(e))return function(t){return U(t,e)};U(e)})),q=h_((function(e,t,n){return void 0===t&&(t=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===n?o:n)?P(k.values):Promise.resolve()})),V=(0,l.useCallback)((function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,i=n.id;n.outerHTML;q(t||(r||i),!0)}),[q]),W=h_((function(e){if(Yy(e))return function(t){return V(t,e)};V(e)})),B=(0,l.useCallback)((function(e){$y(e)?C({type:"SET_FORMIK_STATE",payload:e}):C({type:"SET_FORMIK_STATE",payload:function(){return e}})}),[]),$=(0,l.useCallback)((function(e){C({type:"SET_STATUS",payload:e})}),[]),H=(0,l.useCallback)((function(e){C({type:"SET_ISSUBMITTING",payload:e})}),[]),K=h_((function(){return C({type:"SUBMIT_ATTEMPT"}),P().then((function(e){var t=e instanceof Error;if(!t&&0===Object.keys(e).length){var n;try{if(void 0===(n=Q()))return}catch(e){throw e}return Promise.resolve(n).then((function(e){return _.current&&C({type:"SUBMIT_SUCCESS"}),e})).catch((function(e){if(_.current)throw C({type:"SUBMIT_FAILURE"}),e}))}if(_.current&&(C({type:"SUBMIT_FAILURE"}),t))throw e}))})),Y=h_((function(e){e&&e.preventDefault&&$y(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&$y(e.stopPropagation)&&e.stopPropagation(),K().catch((function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)}))})),G={resetForm:N,validateForm:P,validateField:O,setErrors:M,setFieldError:D,setFieldTouched:q,setFieldValue:F,setStatus:$,setSubmitting:H,setTouched:L,setValues:j,setFormikState:B,submitForm:K},Q=h_((function(){return h(k.values,G)})),X=h_((function(e){e&&e.preventDefault&&$y(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&$y(e.stopPropagation)&&e.stopPropagation(),N()})),J=(0,l.useCallback)((function(e){return{value:Xy(k.values,e),error:Xy(k.errors,e),touched:!!Xy(k.touched,e),initialValue:Xy(m.current,e),initialTouched:!!Xy(v.current,e),initialError:Xy(g.current,e)}}),[k.errors,k.touched,k.values]),Z=(0,l.useCallback)((function(e){return{setValue:function(t,n){return F(e,t,n)},setTouched:function(t,n){return q(e,t,n)},setError:function(t){return D(e,t)}}}),[F,q,D]),ee=(0,l.useCallback)((function(e){var t=Hy(e),n=t?e.name:e,r=Xy(k.values,n),i={name:n,value:r,onChange:z,onBlur:W};if(t){var o=e.type,a=e.value,s=e.as,l=e.multiple;"checkbox"===o?void 0===a?i.checked=!!r:(i.checked=!(!Array.isArray(r)||!~r.indexOf(a)),i.value=a):"radio"===o?(i.checked=r===a,i.value=a):"select"===s&&l&&(i.value=i.value||[],i.multiple=!0)}return i}),[W,z,k.values]),te=(0,l.useMemo)((function(){return!n(Gp)(m.current,k.values)}),[m.current,k.values]),ne=(0,l.useMemo)((function(){return void 0!==c?te?k.errors&&0===Object.keys(k.errors).length:!1!==c&&$y(c)?c(p):c:k.errors&&0===Object.keys(k.errors).length}),[c,te,k.errors,p]);return zy({},k,{initialValues:m.current,initialErrors:g.current,initialTouched:v.current,initialStatus:y.current,handleBlur:W,handleChange:z,handleReset:X,handleSubmit:Y,resetForm:N,setErrors:M,setFormikState:B,setFieldTouched:q,setFieldValue:F,setFieldError:D,setStatus:$,setSubmitting:H,setTouched:L,setValues:j,submitForm:K,validateForm:P,validateField:O,isValid:ne,dirty:te,unregisterField:A,registerField:R,getFieldProps:ee,getFieldMeta:J,getFieldHelpers:Z,validateOnBlur:o,validateOnChange:r,validateOnMount:s})}function l_(e){var t=s_(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return(0,l.useImperativeHandle)(o,(function(){return t})),(0,l.createElement)(t_,{value:t},n?(0,l.createElement)(n,t):i?i(t):r?$y(r)?r(t):Gy(r)?null:l.Children.only(r):null)}function c_(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);!0===Array.isArray(e[r])?t[r]=e[r].map((function(e){return!0===Array.isArray(e)||Nm(e)?c_(e):""!==e?e:void 0})):Nm(e[r])?t[r]=c_(e[r]):t[r]=""!==e[r]?e[r]:void 0}return t}function u_(e,t,n){var r=e.slice();return t.forEach((function(t,i){if(void 0===r[i]){var o=!1!==n.clone&&n.isMergeableObject(t);r[i]=o?dm(Array.isArray(t)?[]:{},t,n):t}else n.isMergeableObject(t)?r[i]=dm(e[i],t,n):-1===e.indexOf(t)&&r.push(t)})),r}var d_="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?l.useLayoutEffect:l.useEffect;function h_(e){var t=(0,l.useRef)(e);return d_((function(){t.current=e})),(0,l.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}function f_(e){var t=r_(),n=t.getFieldProps,r=t.getFieldMeta,i=t.getFieldHelpers,o=t.registerField,a=t.unregisterField,s=Hy(e)?e:{name:e},c=s.name,u=s.validate;return(0,l.useEffect)((function(){return c&&o(c,{validate:u}),function(){c&&a(c)}}),[o,a,c,u]),[n(s),r(c),i(c)]}function p_(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,a=e.component,s=Vy(e,["validate","name","render","children","as","component"]),c=Vy(r_(),["validate","validationSchema"]),u=c.registerField,d=c.unregisterField;(0,l.useEffect)((function(){return u(n,{validate:t}),function(){d(n)}}),[u,d,n,t]);var h=c.getFieldProps(zy({name:n},s)),f=c.getFieldMeta(n),p={field:h,form:c};if(r)return r(zy({},p,{meta:f}));if($y(i))return i(zy({},p,{meta:f}));if(a){if("string"==typeof a){var m=s.innerRef,g=Vy(s,["innerRef"]);return(0,l.createElement)(a,zy({ref:m},h,g),i)}return(0,l.createElement)(a,zy({field:h,form:c},s),i)}var v=o||"input";if("string"==typeof v){var y=s.innerRef,_=Vy(s,["innerRef"]);return(0,l.createElement)(v,zy({ref:y},h,_),i)}return(0,l.createElement)(v,zy({},h,s),i)}var m_=(0,l.forwardRef)((function(e,t){var n=e.action,r=Vy(e,["action"]),i=null!=n?n:"#",o=r_(),a=o.handleReset,s=o.handleSubmit;return(0,l.createElement)("form",Object.assign({onSubmit:s,ref:t,onReset:a,action:i},r))}));function g_(e){var t=function(t){return(0,l.createElement)(n_,null,(function(n){return(0,l.createElement)(e,Object.assign({},t,{formik:n}))}))},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",n(xy)(t,e)}m_.displayName="Form";var v_=function(e,t,n){var r=y_(e);return r.splice(t,0,n),r},y_=function(e){if(e){if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map((function(e){return parseInt(e)})).reduce((function(e,t){return t>e?t:e}),0);return Array.from(zy({},e,{length:t+1}))}return[]},__=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateArrayField=function(e,t,r){var i=n.props,o=i.name;(0,i.formik.setFormikState)((function(n){var i="function"==typeof r?r:e,a="function"==typeof t?t:e,s=Jy(n.values,o,e(Xy(n.values,o))),l=r?i(Xy(n.errors,o)):void 0,c=t?a(Xy(n.touched,o)):void 0;return By(l)&&(l=void 0),By(c)&&(c=void 0),zy({},n,{values:s,errors:r?Jy(n.errors,o,l):n.errors,touched:t?Jy(n.touched,o,c):n.touched})}))},n.push=function(e){return n.updateArrayField((function(t){return[].concat(y_(t),[Uy(e)])}),!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField((function(n){return function(e,t,n){var r=y_(e),i=r[t];return r[t]=r[n],r[n]=i,r}(n,e,t)}),!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField((function(n){return function(e,t,n){var r=y_(e),i=r[t];return r.splice(t,1),r.splice(n,0,i),r}(n,e,t)}),!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField((function(n){return v_(n,e,t)}),(function(t){return v_(t,e,null)}),(function(t){return v_(t,e,null)}))},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField((function(n){return function(e,t,n){var r=y_(e);return r[t]=n,r}(n,e,t)}),!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField((function(n){var r=n?[e].concat(n):[e];return t<0&&(t=r.length),r}),(function(e){var n=e?[null].concat(e):[null];return t<0&&(t=n.length),n}),(function(e){var n=e?[null].concat(e):[null];return t<0&&(t=n.length),n})),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(Wy(n)),n.pop=n.pop.bind(Wy(n)),n}qy(t,e);var r=t.prototype;return r.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!n(Gp)(Xy(e.formik.values,e.name),Xy(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(e){var t;return this.updateArrayField((function(n){var r=n?y_(n):[];return t||(t=r[e]),$y(r.splice)&&r.splice(e,1),r}),!0,!0),t},r.pop=function(){var e;return this.updateArrayField((function(t){var n=t;return e||(e=n&&n.pop&&n.pop()),n}),!0,!0),e},r.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,n=t.component,r=t.render,i=t.children,o=t.name,a=zy({},e,{form:Vy(t.formik,["validate","validationSchema"]),name:o});return n?(0,l.createElement)(n,a):r?r(a):i?"function"==typeof i?i(a):Gy(i)?null:l.Children.only(i):null},t}(l.Component);__.defaultProps={validateOnChange:!0};l.Component,l.Component;const b_=({...e})=>{const[t]=f_(e);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("textarea",{className:"text-area",...t,...e})})};l=o("8T3gX");var w_=(0,(l=o("8T3gX")).createContext)([!1,()=>{}]);var k_=({user:e})=>{const[t,n]=(0,l.useState)(),[r,i]=(0,l.useState)(),o=(0,l.useContext)(w_);function s(e){let t;return e||(t="Nice try ! Please type something."),t}return(0,a.jsx)("div",{className:"addPost",children:(0,a.jsx)(l_,{initialValues:{text:"",imgPath:"",topic:""},onSubmit:function(t,a){const s=lf(af(Bp,"posts"));let l=!1;if(r){const e=new zp(Hp,`/postImgs/${s.key}`);l=!0,o(!0),(c=e,u=r,Rp(c=ri(c),u,d)).then((()=>{i(null),o(!1)})).catch((e=>console.log(e)))}var c,u,d;uf(s,{text:t.text,topic:t.topic,hasImg:l,postedBy:e.uid,postedAt:(new Date).valueOf(),likeCount:0}),n(""),a.resetForm()},children:({errors:r})=>(0,a.jsxs)(m_,{children:[(0,a.jsx)("img",{src:e.imgUrl,referrerPolicy:"no-referrer",alt:"userImg"}),(0,a.jsxs)("div",{className:"inputs",children:[(0,a.jsx)(b_,{label:"First Name",name:"text",validate:s,placeholder:r.text?"Nice try please type in something":"Whats's happening ?"}),t?(0,a.jsxs)("div",{className:"image",children:[(0,a.jsx)("button",{className:"remove",onClick:()=>{n(""),i(null)},children:(0,a.jsx)(un,{icon:fr})}),(0,a.jsx)("img",{src:t,alt:""})]}):null,(0,a.jsxs)("div",{className:"inprow",children:[(0,a.jsx)("label",{htmlFor:"upload-image",children:(0,a.jsx)(un,{icon:em})}),(0,a.jsx)(p_,{id:"upload-image",name:"imgPath",type:"file",accept:"image/png, image/jpeg, image/jpg ",onChange:e=>{let t=null,r=e.target.files[0];null!=window.createObjcectURL?t=window.createOjcectURL(r):null!=window.URL?t=window.URL.createObjectURL(r):null!=window.webkitURL&&(t=window.webkitURL.createObjectURL(r)),n(t),i(r)}}),(0,a.jsxs)("div",{role:"group",className:"radioCont",children:[(0,a.jsxs)("label",{htmlFor:"coding",children:[(0,a.jsx)(p_,{id:"coding",type:"radio",name:"topic",value:"coding"}),(0,a.jsx)("span",{children:"coding"})]}),(0,a.jsxs)("label",{htmlFor:"football",children:[(0,a.jsx)(p_,{id:"football",type:"radio",name:"topic",value:"football"}),(0,a.jsx)("span",{children:"football"})]}),(0,a.jsxs)("label",{htmlFor:"music",children:[(0,a.jsx)(p_,{id:"music",type:"radio",name:"topic",value:"music"}),(0,a.jsx)("span",{children:"music"})]}),(0,a.jsxs)("label",{htmlFor:"other",children:[(0,a.jsx)(p_,{id:"other",type:"radio",name:"topic",value:""}),(0,a.jsx)("span",{children:"other"})]})]}),(0,a.jsx)("button",{className:"btn",type:"submit",children:"Tweet"})]})]})]})})})};l=o("8T3gX"),l=o("8T3gX");var C_=({comment:e,calcTimePassed:t,id:n,postId:r})=>{const[i,o]=(0,l.useState)(""),[s,c]=(0,l.useState)(null),[u]=(0,l.useContext)(Kp);return(0,l.useEffect)((()=>{df(sf(af(Bp),"users/"+e.by)).then((e=>{c(e.val())})),o(t(+e.commentedAt))}),[]),s?(0,a.jsxs)("div",{className:"comment",children:[(0,a.jsx)(Zn,{to:`/profile/${e.by}`,children:(0,a.jsx)("img",{src:s.imgUrl,referrerPolicy:"no-referrer",alt:""})}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)(Zn,{to:`/profile/${e.by}`,children:s.name}),(0,a.jsx)("span",{className:"time",children:i}),(0,a.jsx)("p",{children:e.text})]}),u.uid===e.by?(0,a.jsx)("button",{className:"delete",onClick:function(){cf(af(Bp,"comments/"+r+"/"+n)),c(null)},children:(0,a.jsx)(un,{icon:rr})}):null]}):null};var E_=({id:e,text:t,hasImg:n,postedBy:r,postedAt:i,likes:o,likeCount:s,inFeed:c})=>{const[u,d]=(0,l.useState)(null),[h,f]=(0,l.useState)(""),[p,m]=(0,l.useState)(""),[g,v]=(0,l.useState)(s),[y,_]=(0,l.useState)(!1),[b,w]=(0,l.useState)(!1),[k,C]=(0,l.useState)(!1),[E,S]=(0,l.useState)(null),[x]=(0,l.useContext)(Kp);function T(e){return e=(e=(new Date).valueOf()-e)>290304e5?`${Math.floor(e/290304e5)} yea`:e>24192e5?`${Math.floor(e/24192e5)} mo`:e>6048e5?`${Math.floor(e/6048e5)} w`:e>864e5?`${Math.floor(e/864e5)} d`:e>36e5?`${Math.floor(e/36e5)} h`:e>6e4?`${Math.floor(e/6e4)} min`:e>1e3?`${Math.floor(e/1e3)} s`:"just now"}function I(e){let t;return e||(t="Nice try ! Please type something."),t}return(0,l.useEffect)((()=>{if(df(sf(af(Bp),`users/${r}`)).then((e=>{d(e.val())})),f(T(i)),n){const n=zp(Hp,"postImgs/"+e);(t=n,Ap(t=ri(t))).then((e=>m(e))).catch((e=>console.log(e)))}var t;if(s>0&&x?o[x.uid]&&_(!0):_(!1),x?.saveCount>0?x.saves[e]&&w(!0):w(!1),c){df(Sf(af(Bp,"comments/"+e),new kf,_f(3))).then((e=>{S(e.val())}))}else df(af(Bp,`comments/${e}`)).then((e=>{S(e.val())})),C(!0)}),[]),u?(0,a.jsxs)("div",{className:"post",children:[(0,a.jsx)(Zn,{to:`/profile/${r}`,children:(0,a.jsx)("img",{src:u.imgUrl,referrerPolicy:"no-referrer",alt:""})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"up",children:[(0,a.jsx)(Zn,{to:`/profile/${r}`,children:u.name}),(0,a.jsxs)("span",{children:[u.email," . ",h]}),r===x?.uid?(0,a.jsx)("button",{onClick:function(){cf(af(Bp,"posts/"+e)),cf(af(Bp,"comments/"+e)),n&&Lp(ri(zp(Hp,"postImgs/"+e))),d(null)},children:(0,a.jsx)(un,{icon:dr})}):null]}),(0,a.jsx)("p",{children:t}),n?(0,a.jsx)("div",{className:"image",style:{backgroundImage:`url(${p})`}}):null,(0,a.jsxs)("div",{className:"react",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:function(){if(x){const t=af(Bp,"/posts/"+e);v(y?e=>e-1:e=>e+1),_((e=>!e)),Of(t,(e=>(e&&(e.likes&&e.likes[x?.uid]?(e.likeCount--,e.likes[x.uid]=null):(e.likeCount++,e.likes||(e.likes={}),e.likes[x.uid]=!0)),e)))}},children:y?(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:cr})}):(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:Zp})})}),(0,a.jsx)("span",{className:"number",children:g})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>x?C((e=>!e)):null,children:k?(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:ar})}):(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:Jp})})})}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:function(){if(x){const t=af(Bp,"/users/"+x.uid);w((e=>!e)),Of(t,(t=>(t&&(t.saves&&t.saves[e]?(t.saveCount--,t.saves[e]=null):(t.saveCount++,t.saves||(t.saves={}),t.saves[e]=!0)),t)))}},children:b?(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:ir})}):(0,a.jsx)("span",{children:(0,a.jsx)(un,{icon:Xp})})})})]}),k&&x?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l_,{initialValues:{comment:""},onSubmit:async(t,n)=>{const r=lf(af(Bp,"comments/"+e));S((e=>({...e,newCommentRef:{text:t.comment,by:x.uid,commentedAt:(new Date).valueOf()}}))),uf(r,{text:t.comment,by:x.uid,commentedAt:(new Date).valueOf()}),n.resetForm()},children:({errors:e})=>(0,a.jsxs)(m_,{className:`form ${e.comment?"error":null}`,children:[(0,a.jsx)(p_,{name:"comment",placeholder:e.comment||"say something",validate:I}),(0,a.jsx)("button",{type:"submit",children:"Submit"})]})}),(0,a.jsxs)("div",{className:"comments",children:[E?Object.entries(E).map((([t,n])=>(0,a.jsx)(C_,{id:t,postId:e,comment:n,calcTimePassed:T},t))):null,c?(0,a.jsx)(Zn,{to:`/post/${e}`,children:"view more comments"}):""]})]}):null]})]}):null};var S_=({topic:e})=>{const[t]=(0,l.useContext)(Kp),[n,r]=(0,l.useState)([]);return(0,l.useEffect)((()=>{let t;t=e?Sf(af(Bp,"posts"),wf("topic"),Ef(e)):Sf(af(Bp,"posts")),r([]),df(t).then((e=>{e.forEach((e=>{r((t=>[...t,{key:e.key,...e.val()}]))}))}))}),[e]),(0,a.jsxs)("div",{className:"feed sec",children:[t&&(0,a.jsx)(k_,{user:t}),(0,a.jsx)("div",{className:"posts",children:n.reverse().map((({key:e,text:t,hasImg:n,postedBy:r,postedAt:i,likes:o,likeCount:s})=>(0,a.jsx)(E_,{id:e,text:t,hasImg:n,postedBy:r,postedAt:i,likeCount:s,likes:o,inFeed:!0},e)))})]})};l=o("8T3gX");var x_=()=>{const[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(null),[i,o]=(0,l.useState)(!1),[s]=(0,l.useContext)(Kp),{id:c}=Vn();return(0,l.useEffect)((()=>{c===s?.uid?t(s):df(af(Bp,`users/${c}`)).then((e=>{e.val().followerCount&&o(Object.keys(e.val().followers).includes(s?.uid)),t(e.val())}));df(Sf(af(Bp,"posts"),wf("postedBy"),Ef(c))).then((e=>{r(e.val())}))}),[c]),(0,a.jsx)("div",{className:"profile sec",children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"head",children:[(0,a.jsx)("img",{src:e.imgUrl,referrerPolicy:"no-referrer",alt:""}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsxs)("ul",{className:"stats",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Follwers"}),(0,a.jsx)("span",{children:e.followerCount})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Following"}),(0,a.jsx)("span",{children:e.followingCount})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Posts"}),(0,a.jsx)("span",{children:n?Object.keys(n).length:0})]})]}),s&&c!==s.uid?(0,a.jsx)("button",{className:"Follow",onClick:function(){if(e){const e=af(Bp,"/users/"+c),t=af(Bp,"/users/"+s.uid);o((e=>!e)),Of(e,(e=>(e&&(e.followers&&e.followers[s.uid]?(e.followerCount--,e.followers[s.uid]=null):(e.followerCount++,e.followers||(e.followers={}),e.followers[s.uid]=!0)),e))),Of(t,(e=>(e&&(e.followings&&e.followings[c]?(e.followingCount--,e.followings[c]=null):(e.followingCount++,e.followings||(e.followings={}),e.followings[c]=!0)),e)))}},children:i?"Unfollow":"Follow"}):null]})]}),n?(0,a.jsx)("div",{className:"posts",children:Object.entries(n).map((([e,t])=>(0,a.jsx)(E_,{id:e,text:t.text,hasImg:t.hasImg,postedBy:t.postedBy,postedAt:t.postedAt,likeCount:t.likeCount,likes:t.likes,inFeed:!0},e)))}):(0,a.jsx)("div",{className:"nothing",children:"Nothing Posted"})]}):null})};var T_=function(){return(0,a.jsx)("div",{className:"loader",children:(0,a.jsxs)("div",{className:"lds-ripple",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]})})};l=o("8T3gX");var I_=({setSidebarActive:e})=>{const{pathname:t}=zn(),[n,r]=(0,l.useState)("");return(0,l.useEffect)((()=>{r(t.split("/")[1])}),[t]),(0,a.jsxs)("div",{className:"nav",children:[(0,a.jsx)("h3",{children:n||"feed"}),(0,a.jsxs)("button",{className:"hamburger",onClick:()=>e((e=>!e)),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})]})};l=o("8T3gX");var P_=()=>{const e=Vn(),[t,n]=(0,l.useState)(null);return(0,l.useEffect)((()=>{df(af(Bp,`posts/${e.id}`)).then((e=>{n(e.val())}))}),[]),t?(0,a.jsx)("div",{className:"sec",children:(0,a.jsx)(E_,{id:e.id,text:t.text,hasImg:t.hasImg,postedBy:t.postedBy,postedAt:t.postedAt,likeCount:t.likeCount,likes:t.likes,inFeed:!1})}):null};l=o("8T3gX");var N_=()=>{const[e]=(0,l.useContext)(Kp),[t,n]=(0,l.useState)([]);return(0,l.useEffect)((()=>{e&&e.saves&&Object.keys(e.saves).forEach((e=>{df(af(Bp,`/posts/${e}`)).then((e=>{n((t=>[...t,{...e.val(),key:e.key}]))}))}))}),[e]),(0,a.jsx)("div",{className:"saved sec",children:t.length?t.map((({key:e,text:t,hasImg:n,postedBy:r,postedAt:i,likes:o,likeCount:s})=>(0,a.jsx)(E_,{id:e,text:t,hasImg:n,postedBy:r,postedAt:i,likeCount:s,likes:o,inFeed:!0},e))):(0,a.jsx)("div",{className:"nothing",children:"Nothing Found !"})})};l=o("8T3gX");var O_=({imgUrl:e,name:t,email:n,id:r})=>(0,a.jsxs)(Zn,{to:`/profile/${r}`,className:"user",children:[(0,a.jsx)("img",{src:e,referrerPolicy:"no-referrer",alt:""}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("div",{className:"name",children:t}),(0,a.jsx)("div",{className:"email",children:n})]})]});var R_=function(){const[e,t]=(0,l.useState)(null);return(0,l.useEffect)((()=>{df(Sf(af(Bp,"users"),wf("createdAt"),_f(5))).then((e=>{t(e.val())}))}),[]),(0,a.jsxs)("div",{className:"recentAcc",children:[(0,a.jsx)("h2",{children:"Recent accounts"}),e?Object.entries(e).map((([e,t])=>(0,a.jsx)(O_,{id:e,name:t.name,imgUrl:t.imgUrl,email:t.email},e))):null]})};const A_=()=>{const e=(0,l.useState)(null),t=e[1],[r,i]=(0,l.useState)(""),[o,s]=(0,l.useState)(!1),[c,u]=(0,l.useState)(!1);return(0,l.useEffect)((()=>Wp.onAuthStateChanged((e=>{e?(s(!0),df(sf(af(Bp),`users/${e.uid}`)).then((e=>{e.exists()&&t({...e.val(),uid:e.key}),s(!1)}))):t(null)}))),[]),(0,a.jsx)("div",{className:"app",children:(0,a.jsx)(n(l).StrictMode,{children:o?(0,a.jsx)(T_,{}):(0,a.jsx)(Kp.Provider,{value:e,children:(0,a.jsx)(w_.Provider,{value:s,children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)(Jn,{children:[(0,a.jsx)(I_,{setSidebarActive:u}),(0,a.jsx)(Qp,{setTopic:i,sidebarActive:c,setSidebarActive:u}),(0,a.jsxs)(Kn,{children:[(0,a.jsx)($n,{path:"/",element:(0,a.jsx)(S_,{topic:r})}),(0,a.jsx)($n,{path:"/post/:id",element:(0,a.jsx)(P_,{})}),(0,a.jsx)($n,{path:"/profile/:id",element:(0,a.jsx)(x_,{})}),(0,a.jsx)($n,{path:"/saved",element:(0,a.jsx)(N_,{})})]}),(0,a.jsx)(R_,{})]})})})})})})};n(s).render((0,a.jsx)(A_,{}),document.getElementById("root"));
//# sourceMappingURL=index.3b88c723.js.map
