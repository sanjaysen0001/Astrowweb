(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[124],{1213:function(t,e,a){"use strict";a.r(e);var n=a(93),o=a(200),r=a(201),i=a(210),c=a(202),l=a(203),s=a(0),u=a.n(s),d=a(667),h=a(718),m=(a(757),a(204)),v=a(215),f=a.n(v),g=a(2),p=a(50),y=(u.a.Component,function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={userChatList:[],Activeastro:{},index:""},n}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.props.roomChatData.length?this.props.roomChatData.map((function(t,e){return u.a.createElement(u.a.Fragment,null,"user"===t.type?u.a.createElement("div",{className:"message me"},u.a.createElement("div",{className:"message-body"},t.msg)):u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"message-body"},t.msg)))})).reverse():null)}}]),a}(u.a.Component)),b=a(217),E=a(679),S=a.n(E);function C(){C=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,n=Object.defineProperty||function(t,e,a){t[e]=a.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(x){l=function(t,e,a){return t[e]=a}}function s(t,e,a,o){var r=e&&e.prototype instanceof h?e:h,i=Object.create(r.prototype),c=new O(o||[]);return n(i,"_invoke",{value:S(t,a,c)}),i}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(x){return{type:"throw",arg:x}}}t.wrap=s;var d={};function h(){}function m(){}function v(){}var f={};l(f,r,(function(){return this}));var g=Object.getPrototypeOf,p=g&&g(g(j([])));p&&p!==e&&a.call(p,r)&&(f=p);var y=v.prototype=h.prototype=Object.create(f);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var o;n(this,"_invoke",{value:function(n,r){function i(){return new e((function(o,i){!function n(o,r,i,c){var l=u(t[o],t,r);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,r,o,i)}))}return o=o?o.then(i,i):i()}})}function S(t,e,a){var n="suspendedStart";return function(o,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw r;return k()}for(a.method=o,a.arg=r;;){var i=a.delegate;if(i){var c=w(i,a);if(c){if(c===d)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(t,e,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function w(t,e){var a=e.method,n=t.iterator[a];if(void 0===n)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function j(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,n(y,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,a,n,o,r){void 0===r&&(r=Promise);var i=new E(s(e,a,n,o),r);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,r,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return i.type="throw",i.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],i=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=a.call(r,"catchLoc"),l=a.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),N(a),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var o=n.arg;N(a)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:j(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},t}var w=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).formatTime=function(t){var e="0".concat(t%60).slice(-2),a="".concat(Math.floor(t/60)),n="0".concat(a%60).slice(-2),o="0".concat(Math.floor(t/3600)).slice(-2);return"".concat(o," : ").concat(n," : ").concat(e)},r.handlestartinterval=function(){r.apicall.current=setInterval((function(){Object(b.a)()}),5e4)},r.handleStart=function(){r.setState({counterState:!1}),r.countRef.current=setInterval((function(){r.setState({setTimer:r.state.setTimer+1})}),1e3)},r.handlePause=function(){clearInterval(r.countRef.current),clearInterval(r.apicall.current)},r.handlestop=function(){var t=localStorage.getItem("astroId");r.handlePause();var e={userId:JSON.parse(localStorage.getItem("user_id")),astroId:t};p.a.post("/user/changeStatus",e).then((function(t){console.log(t.data),sessionStorage.setItem("typeofcall","Chat"),r.props.history.push("/astrorating")})).catch((function(t){console.log(t.response)}))},r.getChatonedata=function(){setInterval((function(){var t=localStorage.getItem("astroId"),e=JSON.parse(localStorage.getItem("user_id"));p.a.get("/user/getone_chat/".concat(e,"/").concat(t)).then((function(t){var e,a,n;(null===(e=t.data.data)||void 0===e?void 0:e.roomid)&&(r.setState({roomId:null===(a=t.data.data)||void 0===a?void 0:a.roomid}),p.a.get("/user/allchatwithuser/".concat(null===(n=t.data.data)||void 0===n?void 0:n.roomid)).then((function(t){})).catch((function(t){console.log(t)})))}))}),3e3)},r.componentDidMount=function(){var t=localStorage.getItem("astroId"),e=JSON.parse(localStorage.getItem("user_id"));r.getChatonedata(),p.a.get("/user/getone_chat/".concat(e,"/").concat(t)).then((function(t){var e,a,n,o;(console.log(t.data),null===(e=t.data.data)||void 0===e?void 0:e.roomid)&&(r.setState({CurrentRoomid:null===(a=t.data.data)||void 0===a?void 0:a.roomid}),p.a.get("/user/allchatwithuser/".concat(null===(n=t.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.roomid)).then((function(t){r.setState({roomChatData:t.data.data})})).catch((function(t){console.log(t)})))})).catch((function(t){console.log(t)})),p.a.get("/admin/getoneAstro/".concat(t)).then((function(t){var e;r.setState({Activeastro:null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data})})).catch((function(t){console.log(t)}));if(localStorage.getItem("minute")){var a=localStorage.getItem("minute");r.setState({minutes:a,seconds:60*a}),r.startTimer(),r.secondsToTime(60*a)}localStorage.getItem("user_id");p.a.get("/user/getroomid/".concat(e)).then((function(t){!0===t.data.status&&r.setState({data:t.data.data,fullname:t.data.data.fullname,userimg:t.data.data.userimg,time:""})})).catch((function(t){console.log(t)}))},r.getChatRoom=function(t,e){r.setState({Historydata:e});var a=JSON.parse(localStorage.getItem("user_id")),n={astroid:null===t||void 0===t?void 0:t._id,msg:r.state.msg};""!=r.state.CurrentRoomid?p.a.get("/user/allchatwithuser/".concat(r.state.CurrentRoomid)).then((function(t){var e;console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),r.handlelivechat(),!0===t.data.status&&r.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)})):p.a.post("/user/addchat/".concat(a),n).then((function(t){var e,a,n,o,i,c;(console.log("chat",t.data),r.setState({CurrentRoomid:null===t||void 0===t||null===(e=t.data)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.roomid}),console.log("chat",null===t||void 0===t||null===(n=t.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.roomid),!0===t.data.status)&&(r.setState({msg:""}),p.a.get("/user/allchatwithuser/".concat(null===t||void 0===t||null===(i=t.data)||void 0===i||null===(c=i.data)||void 0===c?void 0:c.roomid)).then((function(t){var e;r.handlelivechat(),console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status&&r.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)})))})).catch((function(t){console.log(t)}))},r.handlePreviouschat=function(){console.log("currentroomid",r.state.CurrentRoomid),p.a.get("/user/allchatwithuser/".concat(r.state.CurrentRoomid)).then((function(t){var e;console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status&&r.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)}))},r.handlechat=function(){if(r.state.CurrentRoomid)p.a.get("/user/allchatwithuser/".concat(r.state.CurrentRoomid)).then((function(t){var e;console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status&&r.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)}));else{var t=JSON.parse(localStorage.getItem("user_id"));p.a.get("/user/getroomid/".concat(t)).then((function(t){var e;console.log(t.data.data),r.setState({CurrentRoomid:null===(e=t.data.data)||void 0===e?void 0:e.roomid})})).catch((function(t){console.log(t)}))}},r.handlelivechat=function(){setInterval((function(){r.handlechat()}),2e3)},r.getChatRoomId=function(){var t=Object(n.a)(C().mark((function t(e,a){var n,o,i;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),r.setState({Historydata:!0}),r.setState({sendbutton:null===(n=e.astroid)||void 0===n?void 0:n._id}),r.setState({Index:a}),localStorage.setItem("videoCallAstro_id",null===e||void 0===e||null===(o=e.astroid)||void 0===o?void 0:o._id),r.setState({astroId:null===e||void 0===e||null===(i=e.astroid)||void 0===i?void 0:i._id,CurrentRoomid:null===e||void 0===e?void 0:e.roomid}),r.handlePreviouschat();case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),r.submitHandler=function(){var t=Object(n.a)(C().mark((function t(e){var a,n,o;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),console.log("sumittttt"),a=localStorage.getItem("astroId"),""!==(n=JSON.parse(localStorage.getItem("user_id")))&&null!==n&&(""!==r.state.msg?(o={astroid:a,msg:r.state.msg},console.log("obj",o),p.a.post("/user/addchat/".concat(n),o).then((function(t){var e,a;(r.setState({chatRoomdata:t.data.data}),!0===t.data.status)&&(r.setState({msg:""}),p.a.get("/user/allchatwithuser/".concat(null===(e=t.data)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.roomid)).then((function(t){var e;(r.state.counterState&&r.handleStart(),r.handlestartinterval(),!0===t.data.status)&&(r.setState({roomChatData:null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data}),r.handlelivechat())})).catch((function(t){console.log(t)})))})).catch((function(t){console.log(t)}))):S()("Input filed is blank","Fill it before send"));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.handleChange=function(t){r.setState({msg:t.target.value})},r.countRef=u.a.createRef(),r.apicall=u.a.createRef(),r.callmsg=u.a.createRef(),r.state={Index:"",chatRoomdata:{},Historydata:!1,setTimer:0,counterState:!0,data:{},sendbutton:"",Activeastro:{},CurrentRoomid:"",roomChatData:[],userId:"",astroId:"",msg:"hello",roomId:"",time:{},seconds:900,minutes:15},r.timer=0,r.startTimer=r.startTimer.bind(Object(i.a)(r)),r.countDown=r.countDown.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"secondsToTime",value:function(t){var e=t%3600,a=e%60;return{h:Math.floor(t/3600),m:Math.floor(e/60),s:Math.ceil(a)}}},{key:"startTimer",value:function(){0===this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){var t=0!==this.state.seconds?this.state.seconds-1:alert("out time");this.setState({time:this.secondsToTime(t),seconds:t}),0===t&&clearInterval(this.timer)}},{key:"render",value:function(){var t,e,a,n,o,r,i=this,c=this.state;c.timeout,c.enabled,c.count;return u.a.createElement(m.a,{headerTop:"visible"},u.a.createElement("section",{className:"app-chatbg"},u.a.createElement(d.a,null,u.a.createElement("div",{className:"app rt-chat"},!0===this.state.Historydata?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"messages"},u.a.createElement("div",{className:"chat-header"},u.a.createElement("p",null,u.a.createElement("span",null,u.a.createElement("img",{src:this.state.roomChatData.length>0?null===(t=this.state.roomChatData[0])||void 0===t||null===(e=t.astroid)||void 0===e?void 0:e.img[0]:f.a,className:"app-img",alt:""})),this.state.roomChatData.length>0?null===(a=this.state.roomChatData[0])||void 0===a||null===(n=a.astroid)||void 0===n?void 0:n.fullname:null),u.a.createElement("span",{className:"appchattimer"},u.a.createElement("p",null,this.formatTime(this.state.setTimer)))),u.a.createElement("div",{className:"messages-history"},u.a.createElement(y,{roomChatData:this.state.roomChatData.length>0?this.state.roomChatData:[]})),localStorage.getItem("astroId")===this.state.sendbutton?u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{className:"messages-inputs"},u.a.createElement("input",{type:"text",placeholder:"Send a message",onChange:function(t){i.handleChange(t)},value:this.state.msg}),u.a.createElement("button",{onClick:function(t){i.submitHandler(t,i.state.astroId,i.state.userId)}},u.a.createElement("i",{className:"material-icons"},"send")))):null)):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"messages"},u.a.createElement("div",{className:"chat-header"},u.a.createElement("p",null,u.a.createElement("span",null,u.a.createElement("img",{src:null===(o=this.state.Activeastro)||void 0===o?void 0:o.img,className:"app-img",alt:""})),null===(r=this.state.Activeastro)||void 0===r?void 0:r.fullname),u.a.createElement("span",{className:"appchattimer"},u.a.createElement("p",null,this.formatTime(this.state.setTimer)))),u.a.createElement("div",{className:"messages-history"},u.a.createElement(y,{roomChatData:this.state.roomChatData.length>0?this.state.roomChatData:[]})),u.a.createElement("form",{className:"messages-inputs"},u.a.createElement("input",{type:"text",placeholder:"Send a message",onChange:function(t){i.handleChange(t)},value:this.state.msg}),u.a.createElement("button",{onClick:function(t){i.submitHandler(t,i.state.astroId,i.state.userId)}},u.a.createElement("i",{className:"material-icons"},"send")))))),u.a.createElement("div",{className:"chat-bottom"},u.a.createElement(g.c,{to:"/astrorating"},u.a.createElement(h.a,{onClick:function(){return i.handlestop()},color:"primary"},"Close Chat"))))))}}]),a}(u.a.Component);e.default=w},718:function(t,e,a){"use strict";var n=a(7),o=a(15),r=a(208),i=a(20),c=a(0),l=a.n(c),s=a(4),u=a.n(s),d=a(78),h=a.n(d),m=a(55),v=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(t){function e(e){var a;return(a=t.call(this,e)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(i.a)(e,t);var a=e.prototype;return a.onClick=function(t){if(!this.props.disabled)return this.props.onClick?this.props.onClick(t):void 0;t.preventDefault()},a.render=function(){var t=this.props,e=t.active,a=t["aria-label"],r=t.block,i=t.className,c=t.close,s=t.cssModule,u=t.color,d=t.outline,f=t.size,g=t.tag,p=t.innerRef,y=Object(o.a)(t,v);c&&"undefined"===typeof y.children&&(y.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var b="btn"+(d?"-outline":"")+"-"+u,E=Object(m.j)(h()(i,{close:c},c||"btn",c||b,!!f&&"btn-"+f,!!r&&"btn-block",{active:e,disabled:this.props.disabled}),s);y.href&&"button"===g&&(g="a");var S=c?"Close":null;return l.a.createElement(g,Object(n.a)({type:"button"===g&&y.onClick?"button":void 0},y,{className:E,ref:p,onClick:this.onClick,"aria-label":a||S}))},e}(l.a.Component);g.propTypes=f,g.defaultProps={color:"secondary",tag:"button"},e.a=g},757:function(t,e,a){}}]);
//# sourceMappingURL=124.03f9ca9b.chunk.js.map