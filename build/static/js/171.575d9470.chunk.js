"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[171],{171:function(n,r,e){e.r(r);var s,o,i,a,t,d,c,l=e(168),p=e(5861),m=e(7757),u=e.n(m),h=e(6871),f=e(4603),w=e(4569),x=e.n(w),g=e(6960),v=e(5705),P=e(8571),b=e(184);r.default=function(){var n=(0,h.s0)(),r=(0,h.UO)(),e=(0,v.TA)({initialValues:{password:"",confirmPassword:""},validationSchema:P.Ry({password:P.Z_().min(8,"Password must have at least 8 characters.").required("Password is required."),confirmPassword:P.Z_().when("password",(function(n,r){return n?r.required("Confirm password is required.").oneOf([P.iH("password","must match")]):r}))}),onSubmit:function(){var e=(0,p.Z)(u().mark((function e(s,o){var i,a,t,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.resetForm,a=s.password,t=s.confirmPassword,e.next=4,x().put("/api/v1/password/reset/".concat(r.token),{password:a,confirmPassword:t});case 4:d=e.sent,console.log(d),200===d.status?((0,g.Am)("Password Update successfull."),localStorage.setItem("digimartToken",JSON.stringify(d.data.token)),setTimeout((function(){n("/")}),3e3)):(0,g.Am)("Invalid Password Reset Details"),i({values:""});case 8:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.Ix,{}),(0,b.jsx)(j,{children:(0,b.jsx)(y,{children:(0,b.jsxs)(Z,{children:[(0,b.jsx)(k,{children:" Reset Password "}),(0,b.jsxs)(C,{onSubmit:e.handleSubmit,children:[(0,b.jsxs)(S,{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"password",children:"New Password"}),(0,b.jsx)("input",{type:"password",name:"password",onChange:e.handleChange,value:e.values.password}),e.touched.password&&e.errors.password&&(0,b.jsxs)("p",{children:[(0,b.jsx)("span",{children:"i"})," ",e.errors.password," "]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),(0,b.jsx)("input",{type:"password",name:"confirmPassword",onChange:e.handleChange,value:e.values.confirmPassword}),e.touched.confirmPassword&&e.errors.confirmPassword&&(0,b.jsxs)("p",{children:[(0,b.jsx)("span",{children:"i"})," ",e.errors.confirmPassword," "]})]})]}),(0,b.jsx)(z,{children:(0,b.jsx)("input",{type:"submit",value:"Submit"})})]})]})})})]})};var j=f.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80vh;\n"]))),y=f.ZP.div(o||(o=(0,l.Z)(["\n  width: 100%;\n  max-width: 35rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]))),Z=f.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 5px;\n"]))),k=f.ZP.h2(a||(a=(0,l.Z)(["\n  font-size: 2.5rem;\n  font-weight: 600;\n"]))),C=f.ZP.form(t||(t=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),S=f.ZP.div(d||(d=(0,l.Z)(["\n  div {\n    margin: 1rem 0;\n    & label {\n      font-size: 1.3rem;\n      color: var(--text-secondary);\n    }\n    & input {\n      width: 100%;\n      height: 3rem;\n      &:focus {\n        border: none;\n        outline: none;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n      }\n    }\n    p {\n      font-size: 1.1rem;\n      span {\n        font-style: italic;\n        color: tomato;\n        margin: 1.3rem 0.4rem 0 0;\n        font-weight: 700;\n        font-size: 1.3rem;\n      }\n    }\n  }\n"]))),z=f.ZP.div(c||(c=(0,l.Z)(["\n  & input {\n    font-size: 1.3rem;\n    border: none;\n    background-color: var(--bg-primary);\n    padding: 1rem 2rem;\n    border-radius: 5px;\n    margin-bottom: 1rem;\n    cursor: pointer;\n    transition: all 0.5s;\n    &:hover {\n      color: #fff;\n      background-color: #ff6347f6;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=171.575d9470.chunk.js.map