(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[93],{1102:function(e,t,a){"use strict";a.r(t);var n=a(206),l=a(200),o=a(201),s=a(210),r=a(202),c=a(203),i=a(0),u=a.n(i),b=a(667),d=a(668),f=a(683),p=a(718),m=a(204),h=(a(689),a(50)),v=a(679),g=a.n(v),O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"",otp:"123456",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),h.a.post("/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali"),g()("Success!"," OTP Verify Successful Done!","success"),t.props.history.push("/completeproastro")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return u.a.createElement(m.a,{headerTop:"visible"},u.a.createElement("section",null,u.a.createElement(b.a,null,u.a.createElement(d.a,null,u.a.createElement(f.a,{lg:"2"}),u.a.createElement(f.a,{lg:"8"},u.a.createElement("div",{className:"wal-amt"},u.a.createElement("h1",null,"Verify OTP"),u.a.createElement("hr",null),u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement(d.a,null,u.a.createElement(f.a,{md:"12"},u.a.createElement("label",null,"Enter Your OTP Here"),u.a.createElement("input",{type:"text",placeholder:"Enter OTP",name:"otp",value:this.state.otp,onChange:this.changeHandler})),u.a.createElement(f.a,{md:"12",className:"mt-3"},u.a.createElement(p.a,{className:"btn btn-success"},"Submit")))))),u.a.createElement(f.a,{lg:"2"})))))}}]),a}(u.a.Component);t.default=O},683:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(0),s=a.n(o),r=a(4),c=a.n(r),i=a(78),u=a.n(i),b=a(55),d=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:b.n,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.widths,r=e.tag,c=Object(l.a)(e,d),i=[];o.forEach((function(t,n){var l=e[t];if(delete c[t],l||""===l){var o=!n;if(Object(b.h)(l)){var s,r=o?"-":"-"+t+"-",d=v(o,t,l.size);i.push(Object(b.j)(u()(((s={})[d]=l.size||""===l.size,s["order"+r+l.order]=l.order||0===l.order,s["offset"+r+l.offset]=l.offset||0===l.offset,s)),a))}else{var f=v(o,t,l);i.push(f)}}})),i.length||i.push("col");var f=Object(b.j)(u()(t,i),a);return s.a.createElement(r,Object(n.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=h,t.a=g},689:function(e,t,a){},718:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(208),s=a(20),r=a(0),c=a.n(r),i=a(4),u=a.n(i),b=a(78),d=a.n(b),f=a(55),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,s=e.className,r=e.close,i=e.cssModule,u=e.color,b=e.outline,m=e.size,h=e.tag,v=e.innerRef,g=Object(l.a)(e,p);r&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(b?"-outline":"")+"-"+u,j=Object(f.j)(d()(s,{close:r},r||"btn",r||O,!!m&&"btn-"+m,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);g.href&&"button"===h&&(h="a");var E=r?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:j,ref:v,onClick:this.onClick,"aria-label":a||E}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={color:"secondary",tag:"button"},t.a=h}}]);
//# sourceMappingURL=93.6f0c3079.chunk.js.map