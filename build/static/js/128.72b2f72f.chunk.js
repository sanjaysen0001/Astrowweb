(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[128],{1081:function(e,t,a){"use strict";a.r(t);var r=a(93),n=a(24),c=a(0),o=a.n(c),i=a(685),l=a.n(i),s=a(742),u=a(207),m=a(44),d=a(2),f=a(205),p=a(204),h=a(677),g=(a(734),a(726),a(118));function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},c=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(P){l=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var c=t&&t.prototype instanceof d?t:d,o=Object.create(c.prototype),i=new S(n||[]);return r(o,"_invoke",{value:w(e,a,i)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var m={};function d(){}function f(){}function p(){}var h={};l(h,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(x([])));b&&b!==t&&a.call(b,c)&&(h=b);var E=p.prototype=d.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var n;r(this,"_invoke",{value:function(r,c){function o(){return new t((function(n,o){!function r(n,c,o,i){var l=u(e[n],e,c);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(m).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,i)}))}i(l.arg)}(r,c,n,o)}))}return n=n?n.then(o,o):o()}})}function w(e,t,a){var r="suspendedStart";return function(n,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw c;return L()}for(a.method=n,a.arg=c;;){var o=a.delegate;if(o){var i=j(o,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function j(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var c=n.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,r(E,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:f,configurable:!0}),f.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(N.prototype),l(N.prototype,o,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,r,n,c){void 0===c&&(c=Promise);var o=new N(s(t,a,r,n),c);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(E),l(E,i,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n],o=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=a.call(c,"catchLoc"),l=a.call(c,"finallyLoc");if(i&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;k(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,i=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),m=e.spaceBottomClass,b=e.colorClass,E=e.titlePriceClass,y=(Object(g.useToasts)().addToast,Object(c.useState)("grid two-column")),N=Object(n.a)(y,2),w=N[0],j=(N[1],Object(c.useState)("")),O=Object(n.a)(j,2),k=O[0],S=(O[1],Object(c.useState)("")),x=Object(n.a)(S,2),L=x[0],P=(x[1],Object(c.useState)("")),C=Object(n.a)(P,2),_=C[0],T=(C[1],Object(c.useState)("")),F=Object(n.a)(T,2),z=F[0],I=(F[1],Object(c.useState)(0)),G=Object(n.a)(I,2),A=G[0],B=G[1],R=Object(c.useState)(1),D=Object(n.a)(R,2),J=D[0],W=D[1],Y=Object(c.useState)([]),H=Object(n.a)(Y,2),V=(H[0],H[1]),q=Object(c.useState)([]),K=Object(n.a)(q,2),M=K[0],Q=K[1],U=t.pathname;Object(c.useEffect)((function(){var e=Object(f.g)(a,k,L),t=Object(f.g)(e,_,z);Q(e=t),V(e.slice(A,A+16))}),[A,a,k,L,_,z]);var X=Object(c.useState)([]),Z=Object(n.a)(X,2),$=Z[0],ee=Z[1];return Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(v().mark((function e(){var t,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://13.235.180.192/api/admin/getproductbytagname/Women");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,ee(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.a.createElement(c.Fragment,null,o.a.createElement(l.a,null,o.a.createElement("title",null,"Flone | Shop Page"),o.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),o.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),o.a.createElement(u.BreadcrumbsItem,{to:""+U},"Shop"),o.a.createElement(p.a,{headerTop:"visible"},o.a.createElement(h.a,null),o.a.createElement("div",{className:"shop-area pt-95 pb-100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"shop-bottom-area mt-35"},o.a.createElement("div",{className:"row ".concat(w||"")},o.a.createElement(c.Fragment,null,$.map((function(e){return o.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(i||""),key:e._id},o.a.createElement("div",{className:"product-wrap-2 ".concat(m||""," ").concat(b||""," ")},o.a.createElement("div",{className:"product-img"},o.a.createElement(d.c,{to:"/product-sticky/"+e._id},o.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:""}),o.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:""})),o.a.createElement("div",{className:"product-action-2"})),o.a.createElement("div",{className:"product-content-2"},o.a.createElement("div",{className:"title-price-wrap-2 ".concat(E||"")},o.a.createElement("h3",null,o.a.createElement(d.c,{to:"/product/"+e._id},e.product_name)),o.a.createElement("div",{className:"price-2"},o.a.createElement(c.Fragment,null,o.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),o.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},o.a.createElement(s.a,{totalRecords:M.length,pageLimit:16,pageNeighbours:2,setOffset:B,currentPage:J,setCurrentPage:W,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},677:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(2),o=a(207);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(o.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.d,finalItem:"span"}))))}},726:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=(a(205),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return n.a.createElement("div",{className:"shop-top-bar mb-35"},n.a.createElement("div",{className:"select-shoing-wrap"},n.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,o=e.productCount,i=e.sortedProductCount;return n.a.createElement(r.Fragment,null,n.a.createElement(c,{getLayout:t,getFilterSortParams:a,productCount:o,sortedProductCount:i}))}},734:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(205),o=function(){return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),n.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",placeholder:"Search here..."}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"})))))},i=function(e){var t=e.categories,a=e.getSortParams,r=e.cb;return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),n.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("category",""),Object(c.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){console.log(e._id),r(e._id),a("category",e),Object(c.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},l=function(e){var t=e.colors,a=e.getSortParams,r=e.getonecolor;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("color",""),Object(c.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){r(e._id),console.log(e._id),a("color",e),Object(c.h)(t)}},n.a.createElement("span",{className:"checkmark"}),n.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},s=function(e){var t=e.sizes,a=e.getSortParams,r=e.getonesize;return n.a.createElement("div",{className:"sidebar-widget mt-40"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("size",""),Object(c.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),r(e._id),a("size",e),Object(c.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},u=function(e){var t=e.tags,a=e.getSortParams,r=e.getonetag;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){r(e),a("tag",e),Object(c.h)(t)}},e))}))):"No tags found"))},m=function(e){var t=e.brands,a=e.getSortParams,r=e.getonebrand;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){r(e._id),a("brands",e),Object(c.h)(t)}},e.name))}))):"No brands found"))},d=a(24),f=a(851),p=a(850);function h(e){return"".concat(e,"\xb0C")}var g=function(e){e.tags,e.getSortParams;var t=e.priceobj,a=n.a.useState([1,90]),r=Object(d.a)(a,2),c=r[0],o=r[1];return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},n.a.createElement(f.a,null,n.a.createElement(p.a,{getAriaLabel:function(){return"Price range"},value:c,scale:function(e){return 25*e},onChange:function(e,a){o(a),t({min:25*a[0],max:25*a[1]})},valueLabelDisplay:"auto",getAriaValueText:h}))))};t.a=function(e){var t=e.products,a=e.getSortParams,r=e.sideSpaceClass,d=e.colors,f=e.sizes,p=e.category,h=e.tags,v=e.brand,b=e.callback,E=e.tagcallback,y=e.colorcallback,N=e.sizecallback,w=e.brandcallback,j=e.pricerange;Object(c.b)(t),Object(c.c)(t),Object(c.f)(t),Object(c.d)(t);return n.a.createElement("div",{className:"sidebar-style ".concat(r||"")},n.a.createElement(o,null),n.a.createElement(g,{tags:h,getSortParams:a,priceobj:function(e){j(e),console.log(e)}}),n.a.createElement(u,{tags:h,getSortParams:a,getonetag:function(e){E(e),console.log(e)}}),n.a.createElement(l,{colors:d,getSortParams:a,getonecolor:function(e){y(e),console.log(e)}}),n.a.createElement(s,{sizes:f,getSortParams:a,getonesize:function(e){N(e),console.log(e)}}),n.a.createElement(m,{brands:v,getSortParams:a,getonebrand:function(e){w(e),console.log(e)}}),n.a.createElement(i,{categories:p,getSortParams:a,cb:function(e){b(e),console.log(e)}}))}}}]);
//# sourceMappingURL=128.72b2f72f.chunk.js.map