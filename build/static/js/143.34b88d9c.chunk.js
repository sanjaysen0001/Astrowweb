(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[143],{1144:function(e,t,a){"use strict";a.r(t);var n=a(200),l=a(201),o=a(210),r=a(202),i=a(203),s=a(0),c=a.n(s),d=a(2),u=a(667),m=a(668),p=a(683),f=a(718),g=a(204),h=a(672),v=a.n(h),E=a(50),y=a(1214),_=a(1114),b=a(1115),N=a(679),S=a.n(N),w=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleVideocall=function(){console.log(l.state.fullname)},l.handleDeleteList=function(e){E.a.get("admin/dlt_ChatIntek/".concat(e)).then((function(e){l.getuserList()})).catch((function(e){console.log("er",e)}))},l.componentDidMount=function(){l.getuserList();var e=localStorage.getItem("astroId");E.a.get("/admin/getoneAstro/".concat(e)).then((function(e){var t,a,n,o,r,i,s,c,d,u;localStorage.setItem("astroname",null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.fullname),localStorage.setItem("channelName",null===e||void 0===e||null===(n=e.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.channelName),l.setState({fullname:e.data.data.fullname,all_skills:e.data.data.all_skills,language:e.data.data.language,img:e.data.data.img[0],avg_rating:e.data.data.avg_rating,Exp:e.data.data.Exp,callCharge:e.data.data.callCharge,long_bio:e.data.data.long_bio,msg:e.data.data.msg,astroMobile:null===e||void 0===e||null===(r=e.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.mobile,status:null===e||void 0===e||null===(s=e.data)||void 0===s||null===(c=s.data)||void 0===c?void 0:c.status,exp_in_years:e.data.data.exp_in_years,astroId:null===e||void 0===e||null===(d=e.data)||void 0===d||null===(u=d.data)||void 0===u?void 0:u._id,sunday:e.data.data.sunday,monday:e.data.data.monday,friday:e.data.data.friday,tuesday:e.data.data.tuesday,thursday:e.data.data.thursday,saturday:e.data.data.saturday,wednesday:e.data.data.wednesday,mobile:e.data.data.mobile})})).catch((function(e){console.log(e)}))},l.getuserList=function(){var e=JSON.parse(localStorage.getItem("user_id"));E.a.get("/admin/intekListByUser/".concat(e)).then((function(e){!0===e.data.status&&(l.setState({allUserList:e.data.data}),l.setState({allminrechargeList:e.data.data}))})).catch((function(e){console.log(e),console.log(e.response)}))},l.handleCalling=function(e){var t=JSON.parse(localStorage.getItem("user_id")),a=JSON.parse(localStorage.getItem("user_mobile_no")),n={userid:t,astroid:localStorage.getItem("astroId"),From:l.state.mobile,To:a};E.a.post("/user/addCallWallet",n).then((function(t){!0===t.data.status?E.a.post("/user/make_call",n).then((function(t){l.setState({callingId:e}),S()("Call Connecting ","SuccessFully")})).catch((function(e){S()("Alert","Your Number is not whitelisted")})):S()("Alert","Insufficient Balance")})).catch((function(e){console.log("err",e),S()("Error",e)}))},l.handleBalacecheck=function(){var e=JSON.parse(localStorage.getItem("user_id")),t=l.props.match.params.id;if(console.log(e,t),""!==e&&null!==e){var a={userid:e,astroid:t};E.a.post("/user/addCallWallet",a).then((function(e){console.log(e.data),!0===e.data.status?l.props.history.push("/UserRequestFormVideoCall"):S()("Recharge","you don't have enough Balance")})).catch((function(e){console.log(e)}))}else S()("Need to Login first")},l.state={allUserList:[],allminrechargeList:[],data:{},fullname:"",all_skills:"",language:"",long_bio:"",Exp:"",sunday:"",monday:"",friday:"",thursday:"",tuesday:"",wednesday:"",saturday:"",To:"",callCharge:"",Form:"",astrid:"",userid:"",astroMobile:"",Gallary:[],astroId:"",astro:"",avg_rating:[!1],callingId:""},l.state={modal:!1},l.toggle=l.toggle.bind(Object(o.a)(l)),l}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this,t=this.state.allUserList;return c.a.createElement(g.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(u.a,null,c.a.createElement(m.a,null,c.a.createElement(p.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",{style:{color:"#fff"}},"User List "))))))),c.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},c.a.createElement("div",{className:"category-home"},c.a.createElement("section",{className:"pt-0"},c.a.createElement(u.a,null,c.a.createElement(m.a,null,c.a.createElement("div",{className:"my-1"},c.a.createElement(d.c,{to:"/userrequestformCall",className:"btn btn-denger wr"},c.a.createElement("button",{className:"btn btn-denger wr"},"Add New Intake Form"))),(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(t,a){return c.a.createElement(p.a,{md:"4",key:a,className:"mt-1"},c.a.createElement("div",{className:"card "},c.a.createElement("div",{className:"card-body "},c.a.createElement("ul",null,c.a.createElement("li",{className:""},"FirstName:",c.a.createElement("span",null,t.firstname),c.a.createElement("div",{className:"delete",style:{float:"right",cursor:"pointer"},onClick:function(){return e.handleDeleteList(t._id)}},c.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))),c.a.createElement("li",null,"BirthPlace:",c.a.createElement("span",null,t.birthPlace)),c.a.createElement("li",null,"Date Of Time:",c.a.createElement("span",null,t.date_of_time)),c.a.createElement("li",null,"Date Of Birth:",c.a.createElement("span",null,t.dob)),c.a.createElement("li",null,"Gender:",c.a.createElement("span",null,t.gender)),c.a.createElement("li",null,"Mobile:",c.a.createElement("span",null,t.mobile)),c.a.createElement("li",null,"Occupation:",c.a.createElement("span",null,t.occupation)),c.a.createElement("li",null,"Marital Status:",c.a.createElement("span",null,t.marital_status)),t.p_birthPlace?c.a.createElement("li",null,"Partner BirthPlace:",c.a.createElement("span",null,t.p_birthPlace)):null,t.p_date_of_time?c.a.createElement("li",null,"Partner Date Of Time:",c.a.createElement("span",null,t.p_date_of_time)):null,t.p_firstname?c.a.createElement("li",null,"Partner First Name:",c.a.createElement("span",null,t.p_firstname)):null,t.p_lastname?c.a.createElement("li",null,"Partner Last Name:",c.a.createElement("span",null,t.p_lastname)):null,c.a.createElement("div",{style:{float:"right",cursor:"pointer"}},c.a.createElement("button",{className:"btn btn-denger wr",onClick:function(){return e.handleCalling(t._id)}},e.state.callingId===t._id?"Calling Now":"Start Call"))))))})):c.a.createElement("h3",{className:"text-center"},"No Intake Form Available")))))),c.a.createElement(y.a,{size:"md",style:{maxWidth:"600px",width:"100%"},isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},c.a.createElement(_.a,{className:"wr-3",toggle:this.toggle},c.a.createElement("h2",{className:"wr-4"},"Recharge Now")),c.a.createElement(b.a,null,c.a.createElement("div",{className:"Wr-1"},c.a.createElement("h3",null,"Minimum balance of 5 minutes (INR 25.0) is required to start call with RajnishM"),c.a.createElement(d.c,{className:"wr-5"},c.a.createElement(f.a,{color:"secondary",onClick:this.toggle},"Cancel")),c.a.createElement(d.c,{className:"wr-6",to:"/walletmoney"},c.a.createElement(f.a,null,"Recharge"))))))}}]),a}(c.a.Component);t.default=w},672:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},736:function(e,t,a){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function o(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}function r(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,i=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?i="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==i){var s=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=l),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;d.call(this,e,t,n)}}return e}a.r(t),a.d(t,"polyfill",(function(){return r})),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=143.34b88d9c.chunk.js.map