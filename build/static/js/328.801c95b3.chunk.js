"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[328],{5328:function(n,e,r){r.r(e);var i,t,a,o,l=r(168),d=r(9439),s=r(2791),u=r(4569),c=r.n(u),m=r(7352),p=r(8789),h=r(2506),x=r(2797),f=r(2958),v=r(7689),b=r(8361),g=r(2978),Z=r(9290),j=r(5821),y=r(2651),w=r(1197),P=r(9814),_=r(184);e.default=function(){var n,e=(0,s.useState)(!1),r=(0,d.Z)(e,2),i=r[0],t=r[1],a=(0,s.useState)(null),o=(0,d.Z)(a,2),l=o[0],u=o[1],p=(0,s.useState)(!1),F=(0,d.Z)(p,2),E=F[0],A=F[1],C=(0,v.s0)(),N=(0,g.I0)(),U=(0,g.v9)(Z.S8);return(0,_.jsxs)(z,{children:[(0,_.jsx)(b.Z,{variant:"h1",text:"Update Profile",style:{textAlign:"center"}}),(0,_.jsxs)(k,{children:[(0,_.jsx)(q,{children:(0,_.jsx)("img",{onClick:function(){return t(!0)},src:null===U||void 0===U||null===(n=U.avatar)||void 0===n?void 0:n.url,alt:"profile_picture"})}),i&&(0,_.jsxs)(S,{children:[(0,_.jsx)("label",{htmlFor:"profilePic",children:"Profile Picture"}),(0,_.jsx)("input",{type:"file",name:"profilePic",onChange:function(n){return u(n.target.files)}})]}),(0,_.jsx)("br",{}),(0,_.jsx)(h.J9,{initialValues:{name:(null===U||void 0===U?void 0:U.name)||"",email:(null===U||void 0===U?void 0:U.email)||"",mobile:(null===U||void 0===U?void 0:U.mobile)||"",birthday:(null===U||void 0===U?void 0:U.birthday)||"",gender:(null===U||void 0===U?void 0:U.gender)||""},validationSchema:x.Ry({name:x.Z_().required("Name is required.").min(3,"Name must have at least 3 characters."),email:x.Z_().required("Email is required.").email("Email must be a valid email."),mobile:x.Z_().max(11).required("Phone Number is required."),birthday:x.Z_().required("Date of birth is required."),gender:x.Z_().required("Gender  is required.")}),onSubmit:function(n,e){e.resetForm;A(!0);var r=n.name,i=n.email,t=n.mobile,a=n.birthday,o=n.gender;function d(){var n,e,l,d,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],u={public_id:null!==(n=s[0])&&void 0!==n&&n.public_id?null===(e=s[0])||void 0===e?void 0:e.public_id:U.avatar.public_id,url:null!==(l=s[0])&&void 0!==l&&l.secure_url?null===(d=s[0])||void 0===d?void 0:d.secure_url:U.avatar.url};c().put("/api/v1/profile/update",{name:r,email:i,avatar:u,mobile:t,birthday:a,gender:o}).then((function(n){200===n.status&&n.data.success?(m.Am.success("Profile update Sucessfully."),N((0,j.$8)()),setTimeout((function(){C("/account/myprofile")}),2e3)):m.Am.info(n.data.message)})).catch((function(n){console.log(n.message),m.Am.error(n.message)}))}l?(0,f.Z)(l,"user").then((function(n){d(n)})):d()},enableReinitialize:!0,children:(0,_.jsxs)(h.l0,{children:[(0,_.jsx)(w.Z,{label:"Full Name",type:"text",name:"name",placeholder:"Enter your name"}),(0,_.jsx)(w.Z,{label:"Email",type:"email",name:"email",placeholder:"Enter your email"}),(0,_.jsx)(w.Z,{label:"Phone",type:"tel",name:"mobile",placeholder:"Enter your phone number"}),(0,_.jsx)(w.Z,{label:"Birthday",type:"date",name:"birthday"}),(0,_.jsxs)(P.Z,{label:"Gender",name:"gender",children:[(0,_.jsx)("option",{hidden:!0,children:"Choose"}),(0,_.jsx)("option",{value:"male",children:"Male"}),(0,_.jsx)("option",{value:"female",children:"Female"}),(0,_.jsx)("option",{value:"other",children:"Other"})]}),(0,_.jsx)("br",{}),(0,_.jsx)(y.Z,{text:"Update Profile",type:"submit",disabled:E})]})})]})]})};var z=p.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  max-width: 800px;\n  padding: 2rem;\n  margin-bottom: 3rem;\n\n  @media screen and (max-width: 576px) {\n    padding: 2rem 1rem;\n  }\n"]))),k=p.ZP.div(t||(t=(0,l.Z)(["\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow-1);\n  padding: 5rem;\n  width: 100%;\n\n  @media screen and (max-width: 768px) {\n    box-shadow: var(--shadow-3);\n  }\n  @media screen and (max-width: 576px) {\n    padding: 2rem;\n  }\n"]))),q=p.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  &:hover {\n  }\n\n  img {\n    width: 13rem;\n    height: 13rem;\n    border-radius: 50%;\n    object-fit: cover;\n    cursor: pointer;\n  }\n"]))),S=p.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"])))},9814:function(n,e,r){var i,t=r(168),a=r(1413),o=r(9439),l=r(5987),d=r(2506),s=r(8789),u=r(3242),c=r(184),m=["label"];e.Z=function(n){var e=n.label,r=(0,l.Z)(n,m),i=(0,d.U$)(r),t=(0,o.Z)(i,2),s=t[0],h=t[1];return(0,c.jsxs)(p,{children:[(0,c.jsx)("label",{htmlFor:r.id||r.name,children:e}),(0,c.jsx)("select",(0,a.Z)((0,a.Z)({},s),r)),h.touched&&h.error&&(0,c.jsx)(u.Z,{message:h.error})]})};var p=s.ZP.div(i||(i=(0,t.Z)(["\n  width: 100%;\n  margin-bottom: 2rem;\n  label {\n    color: var(--text-secondary);\n    font-size: 1.3rem;\n  }\n  select {\n    background: #fff;\n    color: var(--text-primary);\n    width: 100%;\n    height: 4rem;\n    padding: 0 1rem;\n    margin-top: 0.5rem;\n    border: none;\n    outline: none;\n    border-radius: 2px;\n    font-size: 1.3rem;\n    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n    &:focus {\n      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n    }\n\n    option {\n      &:checked {\n        color: tomato;\n      }\n    }\n  }\n"])))},1197:function(n,e,r){var i,t=r(168),a=r(1413),o=r(9439),l=r(5987),d=r(2506),s=r(8789),u=r(3242),c=r(184),m=["label"];e.Z=function(n){var e=n.label,r=(0,l.Z)(n,m),i=(0,d.U$)(r),t=(0,o.Z)(i,2),s=t[0],h=t[1];return(0,c.jsxs)(p,{children:[(0,c.jsx)("label",{htmlFor:r.id||r.name,children:e}),(0,c.jsx)("input",(0,a.Z)((0,a.Z)({},s),r)),h.touched&&h.error&&(0,c.jsx)(u.Z,{message:h.error})]})};var p=s.ZP.div(i||(i=(0,t.Z)(["\n  width: 100%;\n  margin-bottom: 2rem;\n\n  label {\n    color: var(--text-secondary);\n    font-size: 1.3rem;\n  }\n  input {\n    background: #fff;\n    color: var(--text-primary);\n    width: 100%;\n    height: 4rem;\n    padding: 0 1rem;\n    margin-top: 0.5rem;\n    border: none;\n    outline: none;\n    font-size: 1.3rem;\n    border-radius: 2px;\n    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n    &:focus {\n      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\n      color: #000;\n    }\n    &::placeholder {\n      font-size: 1.3rem;\n    }\n  }\n"])))},2958:function(n,e,r){var i=r(4165),t=r(5861),a=r(4569),o=r.n(a),l=function(){var n=(0,t.Z)((0,i.Z)().mark((function n(e,r){var t,a,l,d;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(t=[],a=0;a<e.length;a++)t.push(e[a]);return l=t.map((function(n){return new Promise((function(e,r){try{var i=new FileReader;i.readAsDataURL(n),i.onload=function(r){var i=n.name.split(".")[0];e({base64:r.target.result,options:{public_id:i,tags:[i]}})}}catch(t){console.error(t),r(null===t||void 0===t?void 0:t.message)}}))})),n.next=5,Promise.all(l);case 5:return d=n.sent,n.abrupt("return",new Promise((function(n,e){o().post("/api/v1/media/uploadImages",{images:d,folder:r}).then((function(e){n(e.data.urls)})).catch((function(n){e(n)}))})));case 7:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();e.Z=l},2651:function(n,e,r){var i,t=r(168),a=r(1413),o=r(5987),l=(r(2791),r(8789)),d=r(184),s=["text","children"];e.Z=function(n){var e=n.text,r=n.children,i=(0,o.Z)(n,s);return(0,d.jsxs)(u,(0,a.Z)((0,a.Z)({},i),{},{children:[(0,d.jsx)("span",{children:e})," ",r]}))};var u=l.ZP.button(i||(i=(0,t.Z)(["\n  border: none;\n  color: var(--text-primary);\n  background-color: tomato;\n  padding: 1rem 3rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #dd5a43;\n    color: #f1f1f1;\n  }\n  &:disabled {\n    background-color: #dd5a43d3;\n    cursor: not-allowed;\n    color: var(--text-primary);\n  }\n"])))},8361:function(n,e,r){var i,t=r(168),a=(r(2791),r(8789)),o=r(184);e.Z=function(n){var e=n.variant,r=void 0===e?"h1":e,i=n.text,t=n.style;return(0,o.jsxs)(l,{children:["h2"===r&&(0,o.jsx)("h2",{style:t,children:i}),"h3"===r&&(0,o.jsx)("h3",{style:t,children:i}),"h1"===r&&(0,o.jsx)("h1",{style:t,children:i}),"h4"===r&&(0,o.jsx)("h4",{style:t,children:i})]})};var l=a.ZP.div(i||(i=(0,t.Z)(["\n  color: var(--text-primary);\n\n  h1 {\n    font-size: 2.4rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 1.8rem;\n  }\n\n  h4 {\n    font-size: 1.4rem;\n  }\n"])))},3242:function(n,e,r){var i,t=r(168),a=(r(2791),r(8789)),o=r(184);e.Z=function(n){var e=n.message;return(0,o.jsxs)(l,{className:"error",children:[(0,o.jsx)("span",{children:"i"})," ",e]})};var l=a.ZP.div(i||(i=(0,t.Z)(["\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  span {\n    font-style: italic;\n    color: tomato;\n    margin-right: 0.3rem;\n    font-weight: 700;\n    font-size: 1.1rem;\n  }\n"])))},9290:function(n,e,r){r.d(e,{Mb:function(){return i},S8:function(){return t},j:function(){return a}});var i=function(n){return n.user.authenticated},t=function(n){return n.user.userInfo},a=function(n){return n.user.currency}}}]);
//# sourceMappingURL=328.801c95b3.chunk.js.map