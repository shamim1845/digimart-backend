"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[436],{275:function(n,r,e){e.r(r);var t,i,a,o,s=e(168),d=e(6871),l=e(3504),c=e(4603),m=e(4569),u=e.n(m),p=e(6960),h=(e(5462),e(5705)),x=e(1089),f=e(8361),v=e(2651),g=e(1197),b=e(184);r.default=function(){var n=(0,d.s0)();return(0,b.jsxs)(w,{children:[(0,b.jsxs)(Z,{children:[(0,b.jsx)(f.Z,{text:"Create an account "}),(0,b.jsx)(h.J9,{initialValues:{name:"",email:"",password:"",cPassword:""},validationSchema:x.Ry({name:x.Z_().min(3,"Name must have at least 3 characters.").required("Name is required."),email:x.Z_().email("Email must be a valid email.").required("Email is required."),password:x.Z_().min(8,"Password must have at least 8 characters.").required("Password is required."),cPassword:x.Z_().min(8,"Confirm password must have at least 8 characters.").required("Confirm password is required.").oneOf([x.iH("password"),null],"Password and Confirm Password must match.")}),onSubmit:function(r,e){e.resetForm;var t=r.name,i=r.email,a=r.password;u().post("/api/v1/register",{name:t,email:i,password:a}).then((function(r){201===r.status?(p.Am.success("Registration Sucessfull."),setTimeout((function(){n("/"),window.location.reload()}),2e3)):p.Am.error("Registration failed.")})).catch((function(n){p.Am.error("Registration failed."),console.error(n)}))},children:(0,b.jsxs)(h.l0,{children:[(0,b.jsx)(g.Z,{label:"Name",type:"name",name:"name",placeholder:"Enter Your Name"}),(0,b.jsx)(g.Z,{label:"Email",type:"email",name:"email",placeholder:"Enter Your Email"}),(0,b.jsx)(g.Z,{label:"Password",type:"password",name:"password",placeholder:"Enter your password"}),(0,b.jsx)(g.Z,{label:"Confirm password",type:"password",name:"cPassword",placeholder:"Enter confirm password"}),(0,b.jsx)(v.Z,{type:"submit",text:"Register"})]})}),(0,b.jsx)(y,{children:(0,b.jsxs)("p",{children:["By creating an account, you agree to DIGIMART's",(0,b.jsx)(l.rU,{to:"/conditions",children:" Conditions of Use "}),"and",(0,b.jsx)(l.rU,{to:"/privacy-policy",children:" Privacy Notice."})]})})]}),(0,b.jsx)(j,{children:(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{children:"Already have an account?"}),(0,b.jsx)(l.rU,{to:"/login",children:"Sign-In"})]})})]})};var w=c.ZP.div(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 50rem;\n  margin: 5rem auto;\n  padding: 1rem;\n\n  @media screen and (max-width: 576px) {\n    margin: 2rem auto;\n  }\n"]))),Z=c.ZP.div(i||(i=(0,s.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 3rem;\n  box-shadow: var(--shadow-1);\n  border-radius: 5px;\n\n  form {\n    width: 100%;\n  }\n"]))),y=c.ZP.div(a||(a=(0,s.Z)(["\n  margin: 1rem 0;\n  p {\n    color: var(--text-secondary);\n\n    margin-bottom: 1rem;\n  }\n  a {\n    transition: all 0.3s ease-in-out;\n  }\n  a:hover {\n    color: tomato;\n    text-decoration: underline;\n  }\n"]))),j=c.ZP.div(o||(o=(0,s.Z)(["\n  margin: 3rem;\n  width: 100%;\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n\n    & p {\n      margin: 1rem 0;\n    }\n    & a {\n      text-align: center;\n      border: 1px solid var(--text-primary);\n      width: 100%;\n      border-radius: 3px;\n      padding: 1rem;\n      transition: all 0.3s ease-in-out;\n      &:hover {\n        box-shadow: rgba(0, 0, 0, 0.1) 0px -50px 36px -30px inset;\n        color: tomato;\n      }\n    }\n  }\n"])))},1197:function(n,r,e){var t,i=e(168),a=e(1413),o=e(9439),s=e(5987),d=e(5705),l=e(4603),c=e(3242),m=e(184),u=["label"];r.Z=function(n){var r=n.label,e=(0,s.Z)(n,u),t=(0,d.U$)(e),i=(0,o.Z)(t,2),l=i[0],h=i[1];return(0,m.jsxs)(p,{children:[(0,m.jsx)("label",{htmlFor:e.id||e.name,children:r}),(0,m.jsx)("input",(0,a.Z)((0,a.Z)({},l),e)),h.touched&&h.error&&(0,m.jsx)(c.Z,{message:h.error})]})};var p=l.ZP.div(t||(t=(0,i.Z)(["\n  width: 100%;\n  margin-bottom: 2rem;\n\n  label {\n    color: var(--text-secondary);\n    font-size: 1.3rem;\n  }\n  input {\n    background: #fff;\n    color: var(--text-primary);\n    width: 100%;\n    height: 4rem;\n    padding: 0 1rem;\n    margin-top: 0.5rem;\n    border: none;\n    outline: none;\n    font-size: 1.3rem;\n    border-radius: 2px;\n    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n    &:focus {\n      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\n      color: #000;\n    }\n    &::placeholder {\n      font-size: 1.3rem;\n    }\n  }\n"])))},2651:function(n,r,e){var t,i=e(168),a=e(1413),o=e(5987),s=(e(2791),e(4603)),d=e(184),l=["text","children"];r.Z=function(n){var r=n.text,e=n.children,t=(0,o.Z)(n,l);return(0,d.jsxs)(c,(0,a.Z)((0,a.Z)({},t),{},{children:[(0,d.jsx)("span",{children:r})," ",e]}))};var c=s.ZP.button(t||(t=(0,i.Z)(["\n  border: none;\n  color: var(--text-primary);\n  background-color: tomato;\n  padding: 1rem 3rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #dd5a43;\n    color: #f1f1f1;\n  }\n  &:disabled {\n    background-color: #dd5a43d3;\n    cursor: not-allowed;\n    color: var(--text-primary);\n  }\n"])))},8361:function(n,r,e){var t,i=e(168),a=(e(2791),e(4603)),o=e(184);r.Z=function(n){var r=n.variant,e=void 0===r?"h1":r,t=n.text,i=n.style;return(0,o.jsxs)(s,{children:["h2"===e&&(0,o.jsx)("h2",{style:i,children:t}),"h3"===e&&(0,o.jsx)("h3",{style:i,children:t}),"h1"===e&&(0,o.jsx)("h1",{style:i,children:t}),"h4"===e&&(0,o.jsx)("h4",{style:i,children:t})]})};var s=a.ZP.div(t||(t=(0,i.Z)(["\n  color: var(--text-primary);\n\n  h1 {\n    font-size: 2.4rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 1.8rem;\n  }\n\n  h4 {\n    font-size: 1.4rem;\n  }\n"])))},3242:function(n,r,e){var t,i=e(168),a=(e(2791),e(4603)),o=e(184);r.Z=function(n){var r=n.message;return(0,o.jsxs)(s,{className:"error",children:[(0,o.jsx)("span",{children:"i"})," ",r]})};var s=a.ZP.div(t||(t=(0,i.Z)(["\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  span {\n    font-style: italic;\n    color: tomato;\n    margin-right: 0.3rem;\n    font-weight: 700;\n    font-size: 1.1rem;\n  }\n"])))},7326:function(n,r,e){function t(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.d(r,{Z:function(){return t}})},5987:function(n,r,e){e.d(r,{Z:function(){return i}});var t=e(3366);function i(n,r){if(null==n)return{};var e,i,a=(0,t.Z)(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}},3366:function(n,r,e){function t(n,r){if(null==n)return{};var e,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||(i[e]=n[e]);return i}e.d(r,{Z:function(){return t}})},9611:function(n,r,e){function t(n,r){return t=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},t(n,r)}e.d(r,{Z:function(){return t}})}}]);
//# sourceMappingURL=436.00b7a79e.chunk.js.map