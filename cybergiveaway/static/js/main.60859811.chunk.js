(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,a,t){},58:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t(1),n=t.n(s),i=t(32),r=t.n(i),l=(t(40),t(15)),o=t.n(l),d=(t.p,t(58),t(65),t(76)),j=Object(d.a)({free_giveaway:{backgroundColor:"green"},paid_giveaway:{backgroundColor:"red"},back_giveaway:{backgroundColor:"black",backgroundRepeat:"no-repeat",backgroundImage:"url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2ad293a6-e2f2-4770-a7e8-fc1bd72985fc/d9utqpg-77832ddd-0ccf-4d97-9b9c-7883c5e1aa27.png)",backgroundPosition:"center",height:"600px",boxShadow:"0px 3px 5px 0px rgba(0,0,0,0.75)"},z_giveaway:{paddingTop:"130px",paddingBottom:"130px",height:"100%","& div":{height:"100%","& img":{width:"100%",height:"100%"}}},container_giveaway:{height:"100%"},back_table:{paddingTop:"20px"},total_info:{borderLeft:"2px solid black","& span":{fontWeight:"bold",fontSize:"24px"},"& li":{backgroundColor:function(e){return e.backgroundColor},listStyle:"none",padding:"20px"},"& ul":{paddingLeft:"0px"}},page_now:{borderRight:"2px solid black",paddingRight:"4px"},short_table:{height:"80px",width:"120px","& img":{width:"100%",height:"100%"}}}),b=t(11);var h=function(){var e=j();return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("span",{className:"navbar-brand ".concat(e.page_now),href:"#",children:"Giveaway"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(c.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(b.b,{to:{pathname:"/",fromDashboard:!1},className:"nav-link active",children:"Giveaway"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(b.b,{to:{pathname:"/history/",fromDashboard:!1},className:"nav-link",children:"History"})}),Object(c.jsxs)("li",{className:"nav-item dropdown",children:[Object(c.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"User"}),Object(c.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"Profile"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"Settings"})}),Object(c.jsx)("li",{children:Object(c.jsx)("hr",{className:"dropdown-divider"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"Exit"})})]})]})]})}),Object(c.jsxs)("form",{className:"d-flex justify-content-end",children:[Object(c.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(c.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})})};var x=function(){return Object(c.jsx)("footer",{className:"bg-dark text-center text-lg-start",children:Object(c.jsxs)("div",{className:"text-center p-3 text-light",children:["\xa9 2020 Copyright:",Object(c.jsx)("a",{className:"text-light",href:"https://mdbootstrap.com/",children:"MDBootstrap.com"})]})})},p=t(34),g=t(18),O=t.n(g);var m=function(){var e=j();return Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table table-striped table-hover",children:[Object(c.jsx)("caption",{children:"More"}),Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsx)("th",{scope:"col",children:"Title"}),Object(c.jsx)("th",{scope:"col",children:"Date"}),Object(c.jsx)("th",{scope:"col",children:"Winner"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:"1"}),Object(c.jsx)("td",{className:e.short_table,children:Object(c.jsx)("img",{src:"https://www.republiclab.com/wp-content/uploads/2019/02/samsung-s10-giveaway.jpg"})}),Object(c.jsx)("td",{children:"FirstGiveAway"}),Object(c.jsx)("td",{children:"25.10.2012 06:30"}),Object(c.jsx)("td",{children:"User"})]})})]})})})})},v=t(19),u=t(20);function w(){return Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{style:{backgroundColor:"black"},children:"Giveaways:"}),Object(c.jsx)("li",{style:{backgroundColor:"green"},children:"Winners:"}),Object(c.jsx)("li",{style:{backgroundColor:"blue"},children:"Items:"}),Object(c.jsx)("li",{style:{backgroundColor:"red"},children:"Participants:"})]})}var f=function(){var e=j(),a=(v.a,u.b,v.a,u.a,Object(s.useState)([])),t=Object(p.a)(a,2),n=(t[0],t[1]);return Object(s.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/giveaway-api/"}).then((function(e){n(e.data)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:e.back_giveaway,children:Object(c.jsx)("div",{className:O()("container",e.container_giveaway),children:Object(c.jsxs)("div",{className:O()("row",e.z_giveaway),children:[Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("div",{className:e.free_giveaway,children:Object(c.jsx)("img",{src:"https://9to5mac.com/wp-content/uploads/sites/6/2020/10/Survivor-Giveaway-Banner-V2.jpg?quality=82&strip=all"})}),Object(c.jsx)("span",{children:"00:00:00"})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("div",{className:e.paid_giveaway,children:Object(c.jsx)("img",{src:"https://www.republiclab.com/wp-content/uploads/2019/02/samsung-s10-giveaway.jpg"})}),Object(c.jsx)("span",{children:"00:00:00"})]})]})})}),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container ".concat(e.back_table),children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-8",children:"Latest 10 Giveaways"}),Object(c.jsx)("div",{className:"col ".concat(e.total_info),children:Object(c.jsx)("span",{children:"Total"})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{className:"col ".concat(e.total_info),children:Object(c.jsx)(w,{})})]})]})})]})};var N=function(){return Object(c.jsx)("div",{children:"aaaaaaa"})},y=t(4);var k=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)(y.c,{children:[Object(c.jsx)(y.a,{path:"/",exact:!0,component:f}),Object(c.jsx)(y.a,{path:"/history/",exact:!0,component:N})]}),Object(c.jsx)(x,{})]})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),_()}},[[66,1,2]]]);
//# sourceMappingURL=main.60859811.chunk.js.map