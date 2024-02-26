(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[78],{1083:function(e,t,r){"use strict";r.r(t);var n=r(24),o=r(0),a=r.n(o),u=r(685),c=r.n(u),i=r(742),l=r(207),f=r(44),p=r(205),s=r(204),d=r(677),y=r(726),m=r(741);t.default=Object(f.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,r=e.products,u=Object(o.useState)("grid three-column"),f=Object(n.a)(u,2),b=f[0],h=f[1],v=Object(o.useState)(""),g=Object(n.a)(v,2),O=g[0],j=g[1],P=Object(o.useState)(""),E=Object(n.a)(P,2),_=E[0],C=E[1],w=Object(o.useState)(0),S=Object(n.a)(w,2),x=S[0],T=S[1],M=Object(o.useState)(1),k=Object(n.a)(M,2),A=k[0],D=k[1],N=Object(o.useState)([]),L=Object(n.a)(N,2),F=L[0],q=L[1],R=Object(o.useState)([]),H=Object(n.a)(R,2),I=H[0],B=H[1],J=t.pathname;return Object(o.useEffect)((function(){var e=Object(p.g)(r,"",""),t=Object(p.g)(e,O,_);B(e=t),q(e.slice(x,x+15))}),[x,r,"","",O,_]),a.a.createElement(o.Fragment,null,a.a.createElement(c.a,null,a.a.createElement("title",null,"Flone | Shop Page"),a.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),a.a.createElement(l.BreadcrumbsItem,{to:"/"},"Home"),a.a.createElement(l.BreadcrumbsItem,{to:""+J},"Shop"),a.a.createElement(s.a,{headerTop:"visible"},a.a.createElement(d.a,null),a.a.createElement("div",{className:"shop-area pt-95 pb-100"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement(y.a,{getLayout:function(e){h(e)},getFilterSortParams:function(e,t){j(e),C(t)},productCount:r.length,sortedProductCount:F.length}),a.a.createElement(m.a,{layout:b,products:F}),a.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},a.a.createElement(i.a,{totalRecords:I.length,pageLimit:15,pageNeighbours:2,setOffset:T,currentPage:A,setCurrentPage:D,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},685:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=u(r(701)),o=u(r(686)),a=u(r(703));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c},686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=c(r(4)),a=c(r(34)),u=r(702);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,m,b,h=function(e){function t(){return l(this,t),p(this,s(t).apply(this,arguments))}var r,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);a.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),o=document.head,a=o.innerHTML;(n=(n=n.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,u.getDuplicateTitle)();r&&(0,u.removeChild)(o,r)}else if("meta"===t){var n=(0,u.getDuplicateMeta)(e);n&&(0,u.removeChild)(o,n)}else if("link"===t&&"canonical"===e.rel){var a=(0,u.getDuplicateCanonical)(e);a&&(0,u.removeChild)(o,a)}})),(0,u.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(r.prototype,o),c&&f(r,c),t}(n.Component);y=h,m="contextTypes",b={extract:o.default.func},m in y?Object.defineProperty(y,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):y[m]=b;var v=h;t.default=v,e.exports=t.default},701:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(0),a=(n=r(4))&&n.__esModule?n:{default:n};function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&i(r.prototype,n),a&&i(r,a),t}(o.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(s,"childContextTypes",{extract:a.default.func});var d=s;t.default=d,e.exports=t.default},702:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],u=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?r=e:"meta"===o?n.push(e):u.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var u=e[n],c=u.props.id;(c?!t.id[c]:0===o.filter((function(e){var r=u.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(u),a.forEach((function(e){var r=u.props[e];r&&(t[e][r]=u)})))},u=e.length-1;u>=0;u--)n(u);return r}(n)),[r],u)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var o,a=e.getAttribute(n);return a?r.concat((o=t.querySelectorAll("[".concat(n,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],o=n.concat(["itemProp"]),a=o.concat(["id"])},703:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=u(r(4)),a=u(r(686));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,y,m,b=function(e){function t(){return i(this,t),f(this,p(t).apply(this,arguments))}var r,o,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return n.default.createElement(a.default,null,n.default.createElement("title",null,this.props.title))}}])&&l(r.prototype,o),u&&l(r,u),t}(n.Component);d=b,y="propTypes",m={title:o.default.string},y in d?Object.defineProperty(d,y,{value:m,enumerable:!0,configurable:!0,writable:!0}):d[y]=m;var h=b;t.default=h,e.exports=t.default},726:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=(r(205),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,r=e.sortedProductCount;return o.a.createElement("div",{className:"shop-top-bar mb-35"},o.a.createElement("div",{className:"select-shoing-wrap"},o.a.createElement("p",null,"Showing ",r," of ",t," result")))});t.a=function(e){var t=e.getLayout,r=e.getFilterSortParams,u=e.productCount,c=e.sortedProductCount;return o.a.createElement(n.Fragment,null,o.a.createElement(a,{getLayout:t,getFilterSortParams:r,productCount:u,sortedProductCount:c}))}}}]);
//# sourceMappingURL=78.47195ecf.chunk.js.map