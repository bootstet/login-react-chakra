(this["webpackJsonplogin-react-chakra"]=this["webpackJsonplogin-react-chakra"]||[]).push([[0],{147:function(e,a,n){e.exports=n(176)},176:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(93),o=n.n(r),c=n(107),m=n(91),u=n(190),s=n(189),i=n(35),d=n(192),h=n(182),E=n(37),p=n(183),g=n(184),b=n(194),v=n(185),w=n(195),f=n(188),C=n(193),y=n(33),S=n(56),x=n(50),_=n.n(x);function j(){var e=Object(S.a)({initialValues:{username:"zhangsan",password:"123"},onSubmit:function(e){console.log("values",e);var a={user:{email:e.username,password:e.password}};_()({url:"https://conduit.productionready.io/api/users/login",method:"post",data:a,headers:{"content-type":"application/json"}}).then((function(e){console.log(e),alert("\u767b\u9646\u6210\u529f")})).catch((function(e){console.error(e),alert("\u7528\u6237\u540d\u6216\u8005\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165")}))}});return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement(h.a,{spacing:"2"},l.a.createElement(E.a,{isInvalid:!0},l.a.createElement(p.a,null,l.a.createElement(g.a,{children:l.a.createElement(y.b,null)}),l.a.createElement(b.a,{placeholder:"\u624b\u673a\u53f7\u6216\u90ae\u7bb1",name:"username",value:e.values.username,onChange:e.handleChange})),l.a.createElement(E.b,null,"\u7528\u6237\u540d\u662f\u586b\u9879")),l.a.createElement(p.a,null,l.a.createElement(g.a,{children:l.a.createElement(y.a,null)}),l.a.createElement(b.a,{type:"password",placeholder:"\u5bc6\u7801",name:"password",value:e.values.password,onChange:e.handleChange})),l.a.createElement(v.a,null,l.a.createElement(w.a,{id:"deal",mr:"3"}),l.a.createElement(f.a,{htmlFor:"deal"},"\u8bb0\u4f4f\u6211")),l.a.createElement(C.a,{type:"submit",_hover:{bgColor:"tomato"},w:"100%",colorScheme:"teal"},"\u767b\u5f55")))}function k(){var e=Object(S.a)({initialValues:{username:"",email:"",password:""},onSubmit:function(e){console.log("values",e);var a={username:e.username,email:e.email,password:e.password};_()({method:"post",url:"https://conduit.productionready.io/api/users",data:{user:a},headers:{"content-type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}});return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement(h.a,{spacing:"2"},l.a.createElement(E.a,{isInvalid:!0},l.a.createElement(p.a,null,l.a.createElement(g.a,{children:l.a.createElement(y.b,null)}),l.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",name:"username",value:e.values.username,onChange:e.handleChange})),l.a.createElement(E.b,null,"\u7528\u6237\u540d\u662f\u586b\u9879")),l.a.createElement(p.a,null,l.a.createElement(g.a,{children:l.a.createElement(y.a,null)}),l.a.createElement(b.a,{placeholder:"\u90ae\u7bb1",name:"email",value:e.values.email,onChange:e.handleChange})),l.a.createElement(p.a,null,l.a.createElement(g.a,{children:l.a.createElement(y.a,null)}),l.a.createElement(b.a,{type:"password",placeholder:"\u8bbe\u7f6e\u5bc6\u7801",name:"password",value:e.values.password,onChange:e.handleChange})),l.a.createElement(C.a,{type:"submit",_hover:{bgColor:"tomato"},w:"100%",colorScheme:"teal"},"\u6ce8\u518c")))}function I(){var e=Object(i.useColorModeValue)("gray.200","gray.700");return l.a.createElement(s.a,{bgColor:e,p:3,w:"100%",boxShadow:"lg",borderRadius:"lg"},l.a.createElement(d.e,{isFitted:!0},l.a.createElement(d.b,null,l.a.createElement(d.a,{_focus:{boxShadow:"none"},_selected:{color:"#e6af5a"}},"\u767b\u5f55"),l.a.createElement(d.a,{_focus:{boxShadow:"none"},_selected:{color:"#e6af5a"}},"\u6ce8\u518c")),l.a.createElement(d.d,null,l.a.createElement(d.c,null,l.a.createElement(j,null)),l.a.createElement(d.c,null,l.a.createElement(k,null)))))}var O=function(){return l.a.createElement(s.a,{w:.5,mx:"auto",mt:"100px"},l.a.createElement(I,null))},V=n(103);o.a.render(l.a.createElement(c.a,null,l.a.createElement(m.a,{theme:V.default},l.a.createElement(u.a,null),l.a.createElement(O,null))),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.d4b4d85e.chunk.js.map