(this["webpackJsonpreact-practice-project"]=this["webpackJsonpreact-practice-project"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3MlaG",modal:"Modal_modal__U5vVh",header:"Modal_header__cBnEl",content:"Modal_content__3Ji0U",actions:"Modal_actions__3M8hq"}},,,,,function(e,t,n){e.exports={"output-field-card":"OutputField_output-field-card__1wt7S","output-field-div":"OutputField_output-field-div__3aXe7"}},,function(e,t,n){e.exports={"form-div":"InputForm_form-div__2zkUZ"}},function(e,t,n){e.exports={"form-card":"InputFormFields_form-card__34aTm",empty:"InputFormFields_empty__2GfoI"}},function(e,t,n){e.exports={button:"Button_button__1DNsS"}},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(9),i=n.n(r),o=(n(18),n(19),n(13)),d=n(5),s=n(10),l=n.n(s),u=n(1),j=n(11),b=n.n(j),m=(n(20),n(0)),f=function(e){var t="card "+e.className;return Object(m.jsx)("div",{className:t,children:e.children})},O=n(12),h=n.n(O),p=function(e){return Object(m.jsx)("button",{type:e.type,onClick:e.onClick,className:h.a.button,children:e.children})},x=n(3),_=n.n(x),g=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:_.a.backdrop,onClick:e.cancel}),Object(m.jsxs)(f,{className:_.a.modal,children:[Object(m.jsx)("header",{className:_.a.header,children:Object(m.jsx)("h2",{children:e.title})}),Object(m.jsx)("div",{className:_.a.content,children:Object(m.jsx)("p",{children:e.message})}),Object(m.jsx)("footer",{className:_.a.actions,children:Object(m.jsx)(p,{onClick:e.cancel,children:"Okay"})})]})]})},v=function(e){var t=Object(c.useState)({enteredName:"",enteredAge:""}),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(),o=Object(d.a)(i,2),s=o[0],l=o[1];return Object(m.jsxs)("div",{children:[s&&Object(m.jsx)(g,{message:s.message,title:s.title,cancel:function(){l(null)}}),Object(m.jsx)(f,{className:b.a["form-card"],children:Object(m.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),0!==a.enteredName.trim().length&&0!==a.enteredAge.trim().length)if(a.enteredAge<18)l((function(e){return Object(u.a)(Object(u.a)({},e),{},{title:"Invalid Age",message:"Age should be >= 18"})}));else{var n={name:a.enteredName,age:a.enteredAge,id:Math.random().toString()};e.onSaveData(n),l(null),r((function(e){return Object(u.a)(Object(u.a)({},e),{},{enteredName:"",enteredAge:""})}))}else l((function(e){return Object(u.a)(Object(u.a)({},e),{},{title:"No Data",message:"Enter a username and Age!!"})}))},children:[Object(m.jsx)("label",{children:"Username"}),Object(m.jsx)("input",{onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{enteredName:e.target.value})}))},value:a.enteredName,type:"text"}),Object(m.jsx)("label",{children:"Age (Years)"}),Object(m.jsx)("input",{onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{enteredAge:e.target.value})}))},value:a.enteredAge,type:"text"}),Object(m.jsx)(p,{type:"submit",children:"Add User"})]})})]})},N=n(8),A=n.n(N),k=function(e){return Object(m.jsx)("div",{className:A.a["output-field-div"],children:e.data.map((function(e){return Object(m.jsxs)(f,{className:A.a["output-field-card"],children:[e.name," (",e.age,")"]},e.id)}))})},F=[{id:"d1",name:"John Doe",age:"34"}],S=function(e){var t=Object(c.useState)(F),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(m.jsxs)("div",{className:l.a["form-div"],children:[Object(m.jsx)(v,{onSaveData:function(e){r((function(t){return[e].concat(Object(o.a)(t))}))}}),Object(m.jsx)(k,{data:a})]})};var y=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(S,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),C()}],[[22,1,2]]]);
//# sourceMappingURL=main.5fb89e0a.chunk.js.map