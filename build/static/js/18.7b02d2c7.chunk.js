(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[18],{670:function(e,t,a){"use strict";e.exports=a(746)},671:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}a.d(t,"a",(function(){return r}))},673:function(e,t,a){"use strict";a(18);var r=a(0);a(670);a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return l}));var c=["xxl","xl","lg","md","sm","xs"],n=r.createContext({prefixes:{},breakpoints:c,minBreakpoint:"xs"});n.Consumer,n.Provider;function i(e,t){var a=Object(r.useContext)(n).prefixes;return e||a[t]||t}function s(){return Object(r.useContext)(n).breakpoints}function o(){return Object(r.useContext)(n).minBreakpoint}function l(){return"rtl"===Object(r.useContext)(n).dir}},676:function(e,t,a){"use strict";var r=a(18),c=a(671),n=a(78),i=a.n(n),s=/-(.)/g;var o=a(0),l=a(673),d=a(670);a.d(t,"a",(function(){return u}));var b=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,n=void 0===a?f(e):a,s=t.Component,u=t.defaultProps,j=o.forwardRef((function(t,a){var n=t.className,o=t.bsPrefix,f=t.as,u=void 0===f?s||"div":f,j=Object(c.a)(t,b),m=Object(l.c)(o,e);return Object(d.jsx)(u,Object(r.a)({ref:a,className:i()(n,m)},j))}));return j.defaultProps=u,j.displayName=n,j}},746:function(e,t,a){"use strict";a(149);var r=a(0),c=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var n=Symbol.for;c=n("react.element"),t.Fragment=n("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var r,n={},l=null,d=null;for(r in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!o.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:c,type:e,key:l,ref:d,props:n,_owner:i.current}}t.jsx=l,t.jsxs=l},843:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var r=a(0);function c(e,t){var a=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,a++):e}))}function n(e,t){var a=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,a++)}))}function i(e,t){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===t}))}},853:function(e,t,a){"use strict";var r=function(){};e.exports=r},859:function(e,t,a){"use strict";var r=a(18),c=a(671),n=a(78),i=a.n(n),s=a(4),o=a.n(s),l=a(0),d=a(670),b=["as","className","type","tooltip"],f={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},u=l.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,s=e.className,o=e.type,l=void 0===o?"valid":o,f=e.tooltip,u=void 0!==f&&f,j=Object(c.a)(e,b);return Object(d.jsx)(n,Object(r.a)(Object(r.a)({},j),{},{ref:t,className:i()(s,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=f;var j=u,m=l.createContext({}),v=a(673),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=l.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,s=e.className,o=e.type,b=void 0===o?"checkbox":o,f=e.isValid,u=void 0!==f&&f,j=e.isInvalid,p=void 0!==j&&j,x=e.as,y=void 0===x?"input":x,N=Object(c.a)(e,O),h=Object(l.useContext)(m).controlId;return n=Object(v.c)(n,"form-check-input"),Object(d.jsx)(y,Object(r.a)(Object(r.a)({},N),{},{ref:t,type:b,id:a||h,className:i()(s,n,u&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,y=["bsPrefix","className","htmlFor"],N=l.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.htmlFor,o=Object(c.a)(e,y),b=Object(l.useContext)(m).controlId;return a=Object(v.c)(a,"form-check-label"),Object(d.jsx)("label",Object(r.a)(Object(r.a)({},o),{},{ref:t,htmlFor:s||b,className:i()(n,a)}))}));N.displayName="FormCheckLabel";var h=N,P=a(843),w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],I=l.forwardRef((function(e,t){var a=e.id,n=e.bsPrefix,s=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,f=e.reverse,u=void 0!==f&&f,O=e.disabled,p=void 0!==O&&O,y=e.isValid,N=void 0!==y&&y,I=e.isInvalid,k=void 0!==I&&I,C=e.feedbackTooltip,g=void 0!==C&&C,F=e.feedback,R=e.feedbackType,S=e.className,_=e.style,T=e.title,E=void 0===T?"":T,V=e.type,L=void 0===V?"checkbox":V,z=e.label,U=e.children,B=e.as,H=void 0===B?"input":B,A=Object(c.a)(e,w);n=Object(v.c)(n,"form-check"),s=Object(v.c)(s,"form-switch");var D=Object(l.useContext)(m).controlId,G=Object(l.useMemo)((function(){return{controlId:a||D}}),[D,a]),J=!U&&null!=z&&!1!==z||Object(P.b)(U,h),M=Object(d.jsx)(x,Object(r.a)(Object(r.a)({},A),{},{type:"switch"===L?"checkbox":L,ref:t,isValid:N,isInvalid:k,disabled:p,as:H}));return Object(d.jsx)(m.Provider,{value:G,children:Object(d.jsx)("div",{style:_,className:i()(S,J&&n,b&&"".concat(n,"-inline"),u&&"".concat(n,"-reverse"),"switch"===L&&s),children:U||Object(d.jsxs)(d.Fragment,{children:[M,J&&Object(d.jsx)(h,{title:E,children:z}),F&&Object(d.jsx)(j,{type:R,tooltip:g,children:F})]})})})}));I.displayName="FormCheck";var k=Object.assign(I,{Input:x,Label:h}),C=a(206),g=(a(853),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=l.forwardRef((function(e,t){var a,n,s=e.bsPrefix,o=e.type,b=e.size,f=e.htmlSize,u=e.id,j=e.className,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,y=void 0!==x&&x,N=e.plaintext,h=e.readOnly,P=e.as,w=void 0===P?"input":P,I=Object(c.a)(e,g),k=Object(l.useContext)(m).controlId;(s=Object(v.c)(s,"form-control"),N)?a=Object(C.a)({},"".concat(s,"-plaintext"),!0):(n={},Object(C.a)(n,s,!0),Object(C.a)(n,"".concat(s,"-").concat(b),b),a=n);return Object(d.jsx)(w,Object(r.a)(Object(r.a)({},I),{},{type:o,size:f,ref:t,readOnly:h,id:u||k,className:i()(j,a,p&&"is-valid",y&&"is-invalid","color"===o&&"".concat(s,"-color"))}))}));F.displayName="FormControl";var R=Object.assign(F,{Feedback:j}),S=a(676),_=Object(S.a)("form-floating"),T=["controlId","as"],E=l.forwardRef((function(e,t){var a=e.controlId,n=e.as,i=void 0===n?"div":n,s=Object(c.a)(e,T),o=Object(l.useMemo)((function(){return{controlId:a}}),[a]);return Object(d.jsx)(m.Provider,{value:o,children:Object(d.jsx)(i,Object(r.a)(Object(r.a)({},s),{},{ref:t}))})}));E.displayName="FormGroup";var V=E,L=a(24),z=["as","bsPrefix","className"],U=["className"];var B=l.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,n=e.className,s=Object(c.a)(e,z);a=Object(v.c)(a,"col");var o=Object(v.a)(),l=Object(v.b)(),d=[],b=[];return o.forEach((function(e){var t,r,c,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,r=n.offset,c=n.order):t=n;var i=e!==l?"-".concat(e):"";t&&d.push(!0===t?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(t)),null!=c&&b.push("order".concat(i,"-").concat(c)),null!=r&&b.push("offset".concat(i,"-").concat(r))})),[Object(r.a)(Object(r.a)({},s),{},{className:i.a.apply(void 0,[n].concat(d,b))}),{as:t,bsPrefix:a,spans:d}]}(e),n=Object(L.a)(a,2),s=n[0],o=s.className,l=Object(c.a)(s,U),b=n[1],f=b.as,u=void 0===f?"div":f,j=b.bsPrefix,m=b.spans;return Object(d.jsx)(u,Object(r.a)(Object(r.a)({},l),{},{ref:t,className:i()(o,!m.length&&j)}))}));B.displayName="Col";var H=B,A=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],D=l.forwardRef((function(e,t){var a=e.as,n=void 0===a?"label":a,s=e.bsPrefix,o=e.column,b=e.visuallyHidden,f=e.className,u=e.htmlFor,j=Object(c.a)(e,A),O=Object(l.useContext)(m).controlId;s=Object(v.c)(s,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=i()(f,s,b&&"visually-hidden",o&&p);return u=u||O,o?Object(d.jsx)(H,Object(r.a)({ref:t,as:"label",className:x,htmlFor:u},j)):Object(d.jsx)(n,Object(r.a)({ref:t,className:x,htmlFor:u},j))}));D.displayName="FormLabel",D.defaultProps={column:!1,visuallyHidden:!1};var G=D,J=["bsPrefix","className","id"],M=l.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.id,o=Object(c.a)(e,J),b=Object(l.useContext)(m).controlId;return a=Object(v.c)(a,"form-range"),Object(d.jsx)("input",Object(r.a)(Object(r.a)({},o),{},{type:"range",ref:t,className:i()(n,a),id:s||b}))}));M.displayName="FormRange";var $=M,W=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],Y=l.forwardRef((function(e,t){var a=e.bsPrefix,n=e.size,s=e.htmlSize,o=e.className,b=e.isValid,f=void 0!==b&&b,u=e.isInvalid,j=void 0!==u&&u,O=e.id,p=Object(c.a)(e,W),x=Object(l.useContext)(m).controlId;return a=Object(v.c)(a,"form-select"),Object(d.jsx)("select",Object(r.a)(Object(r.a)({},p),{},{size:s,ref:t,className:i()(o,a,n&&"".concat(a,"-").concat(n),f&&"is-valid",j&&"is-invalid"),id:O||x}))}));Y.displayName="FormSelect";var q=Y,K=["bsPrefix","className","as","muted"],Q=l.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.as,o=void 0===s?"small":s,l=e.muted,b=Object(c.a)(e,K);return a=Object(v.c)(a,"form-text"),Object(d.jsx)(o,Object(r.a)(Object(r.a)({},b),{},{ref:t,className:i()(n,a,l&&"text-muted")}))}));Q.displayName="FormText";var X=Q,Z=l.forwardRef((function(e,t){return Object(d.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{ref:t,type:"switch"}))}));Z.displayName="Switch";var ee=Object.assign(Z,{Input:k.Input,Label:k.Label}),te=["bsPrefix","className","children","controlId","label"],ae=l.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,s=e.children,o=e.controlId,l=e.label,b=Object(c.a)(e,te);return a=Object(v.c)(a,"form-floating"),Object(d.jsxs)(V,Object(r.a)(Object(r.a)({ref:t,className:i()(n,a),controlId:o},b),{},{children:[s,Object(d.jsx)("label",{htmlFor:o,children:l})]}))}));ae.displayName="FloatingLabel";var re=ae,ce=["className","validated","as"],ne={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},ie=l.forwardRef((function(e,t){var a=e.className,n=e.validated,s=e.as,o=void 0===s?"form":s,l=Object(c.a)(e,ce);return Object(d.jsx)(o,Object(r.a)(Object(r.a)({},l),{},{ref:t,className:i()(a,n&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=ne;t.a=Object.assign(ie,{Group:V,Control:R,Floating:_,Check:k,Switch:ee,Label:G,Text:X,Range:$,Select:q,FloatingLabel:re})}}]);
//# sourceMappingURL=18.7b02d2c7.chunk.js.map