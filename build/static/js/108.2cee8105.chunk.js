(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[108,157],{1172:function(e,a,t){"use strict";t.r(a);var n=t(200),l=t(201),c=t(202),r=t(203),o=t(0),s=t.n(o),i=t(2),m=t(667),u=t(668),d=t(683),p=t(204),f=t(832),E=t(50),g=t(214),v=t.n(g),h=t(672),b=t.n(h),x=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).state={procategory:[],rowData:[]},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/admin/get_adminevent").then((function(a){e.setState({rowData:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.rowData;return s.a.createElement(p.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(b.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Astromall Shop"),s.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),s.a.createElement("section",{className:"ptb-0"},s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"12"},s.a.createElement("div",{className:"pt-10 pb-50"},s.a.createElement(f.default,null),s.a.createElement(u.a,null,e.length?null===e||void 0===e?void 0:e.map((function(e){return s.a.createElement(d.a,{md:"3",key:e._id},s.a.createElement("div",{className:"po-box"},s.a.createElement(i.c,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"po-1 text-center"},s.a.createElement("img",{src:e.poojaimg,alt:"",width:"80",height:"80"}))),s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"po-1 text-center"},s.a.createElement("div",{className:""},s.a.createElement("h3",null,"Price",s.a.createElement("span",{style:{paddingLeft:"7px"}},"\u20b9",e.pooja_price))),s.a.createElement("h5",null,"Duration",s.a.createElement("span",{style:{paddingLeft:"7px"}},null===e||void 0===e?void 0:e.duration)),s.a.createElement("p",null,v()(e.desc.slice(0,50))),s.a.createElement(i.c,{to:"/poojadetail/"+e._id,className:"pto-l text-center btn btn-primary"},"Book Now")))))))})):s.a.createElement("span",null,"No Data Found lorem")))),s.a.createElement(d.a,{lg:"6"})))))}}]),t}(s.a.Component);a.default=x},672:function(e,a,t){e.exports=t.p+"static/media/astrologin-bg.f858568c.jpg"},683:function(e,a,t){"use strict";var n=t(7),l=t(15),c=t(0),r=t.n(c),o=t(4),s=t.n(o),i=t(78),m=t.n(i),u=t(55),d=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),E={tag:u.n,xs:f,sm:f,md:f,lg:f,xl:f,className:s.a.string,cssModule:s.a.object,widths:s.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,c=e.widths,o=e.tag,s=Object(l.a)(e,d),i=[];c.forEach((function(a,n){var l=e[a];if(delete s[a],l||""===l){var c=!n;if(Object(u.h)(l)){var r,o=c?"-":"-"+a+"-",d=v(c,a,l.size);i.push(Object(u.j)(m()(((r={})[d]=l.size||""===l.size,r["order"+o+l.order]=l.order||0===l.order,r["offset"+o+l.offset]=l.offset||0===l.offset,r)),t))}else{var p=v(c,a,l);i.push(p)}}})),i.length||i.push("col");var p=Object(u.j)(m()(a,i),t);return r.a.createElement(o,Object(n.a)({},s,{className:p}))};h.propTypes=E,h.defaultProps=g,a.a=h},743:function(e,a,t){"use strict";a.a=function(e){var a=Object.create(null);return function(t){return void 0===a[t]&&(a[t]=e(t)),a[t]}}},832:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(761);a.default=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"st-search"},l.a.createElement(c.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,a){console.log(e,a)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){},autoFocus:!0,formatResult:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}}}]);
//# sourceMappingURL=108.2cee8105.chunk.js.map