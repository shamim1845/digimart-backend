"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[634],{6776:function(n,e,i){var r,t=i(168),a=i(9439),o=i(2791),l=i(4603),s=i(8361),d=i(2651),c=i(184),u=void 0;e.Z=function(n){var e=n.setKeyWord,i=n.modalController,r=n.label,t=(0,o.useState)(""),l=(0,a.Z)(t,2),h=l[0],v=l[1],g=(0,o.useState)(!1),x=(0,a.Z)(g,2),f=x[0],p=x[1],j=function(n,e){var i;return function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];i&&clearTimeout(i),i=setTimeout((function(){n.apply(u,t)}),e)}}((function(n){e(n)}),500),Z=(0,o.useCallback)((function(n){return j(n)}),[]);return(0,c.jsxs)(m,{children:[(0,c.jsx)(s.Z,{variant:"h4",text:r,style:{width:"auto"}}),(0,c.jsxs)("form",{onSubmit:function(n){return n.preventDefault()},children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(f?"18":"16"),height:"".concat(f?"18":"16"),fill:"".concat(f?"#000000b2":"#666"),className:"bi bi-search",viewBox:"0 0 16 16",style:{transition:"all 0.1s ease-in-out"},children:(0,c.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),(0,c.jsx)("input",{onChange:function(n){v(n.target.value),Z(n.target.value)},onFocus:function(){return p(!0)},onBlur:function(){return p(!1)},value:h,type:"text",placeholder:"Search ".concat(null===r||void 0===r?void 0:r.toLowerCase(),"..."),required:!0}),h&&(0,c.jsx)("div",{className:"search_clear",onClick:function(){e(""),v("")},children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,c.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})})]}),(0,c.jsx)(d.Z,{type:"button",onClick:i,text:"Create"})]})};var m=l.ZP.div(r||(r=(0,t.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n  background-color: #fff;\n  padding: 2rem 1.6rem;\n  display: flex;\n  gap: 3rem;\n  align-items: center;\n  box-shadow: var(--shadow-2);\n\n  form {\n    flex: 1;\n    width: 100% !important;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 1rem;\n    box-shadow: var(--shadow-3);\n    border-radius: 0.5rem;\n\n    input {\n      flex: 1;\n      width: 100%;\n      height: 100%;\n      width: 6rem;\n      border: none;\n      padding-left: 1rem;\n      border-radius: 0.5rem 0 0 0.5rem;\n      font-size: 1.4rem;\n      &::placeholder {\n        font-size: 1.3rem;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n    .search_clear {\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0 1rem;\n      cursor: pointer;\n      &:hover {\n        svg {\n          color: red;\n        }\n      }\n    }\n  }\n"])))},8634:function(n,e,i){i.r(e),i.d(e,{default:function(){return U}});var r,t,a,o,l,s,d,c=i(168),u=i(9439),m=i(2791),h=i(4603),v=i(6776),g=i(3222),x=i(1413),f=i(3433),p=i(703),j=i(9281),Z=i(9836),b=i(6890),y=i(5855),w=i(3994),C=i(3382),S=i(9841),z=i(1539),k=i(6960),P=i(5705),L=i(1089),N=i(1197),_=i(7528),E=i(8361),A=i(2651),M=i(184),V=function(n){var e,i=n.onClose,r=n.categoryForEdit;console.log(r);var t=(0,m.useState)([]),a=(0,u.Z)(t,2),o=a[0],l=a[1],s=(0,m.useState)(!1),d=(0,u.Z)(s,2),c=d[0],h=d[1],v=(0,z.pi)(),g=(0,u.Z)(v,2),x=g[0],f=g[1],p=f.data,j=f.isError,Z=f.error,b=f.isLoading,y=f.isSuccess;return(0,m.useEffect)((function(){j&&k.Am.error(null===Z||void 0===Z?void 0:Z.message),y&&(i(),k.Am.success(null===p||void 0===p?void 0:p.message))}),[j,y,null===p||void 0===p?void 0:p.message,null===Z||void 0===Z?void 0:Z.message,i]),(0,M.jsxs)(W,{children:[(0,M.jsx)(E.Z,{variant:"h2",text:"Edit Category"}),(0,M.jsx)(q,{children:(0,M.jsx)(P.J9,{initialValues:{name:null===r||void 0===r?void 0:r.name},validationSchema:L.Ry({name:L.Z_().required("Category name is required.").min(2,"Category name must have at least 2 characters.")}),onSubmit:function(n,e){e.setSubmitting;var i,t={name:n.name,parent:null!==o&&void 0!==o&&o.length?null===(i=o[(null===o||void 0===o?void 0:o.length)-1])||void 0===i?void 0:i.category_id:null};x({id:null===r||void 0===r?void 0:r._id,category:t})},children:(0,M.jsxs)(P.l0,{children:[(0,M.jsx)(N.Z,{label:"Name",name:"name",type:"text",placeholder:"Enter your category name"}),(0,M.jsx)(B,{children:c?(0,M.jsx)(_.Z,{label:"Parent Category (optional)",categories:o,setCategories:l}):(0,M.jsxs)(F,{children:[(0,M.jsx)("label",{children:"Parent Category (optional)"}),(0,M.jsxs)("div",{className:"content",children:[(0,M.jsx)("span",{className:"category",children:null===r||void 0===r||null===(e=r.ancestors[0])||void 0===e?void 0:e.name}),(0,M.jsx)("span",{onClick:function(){return h(!0)},className:"change_category",children:null!==r&&void 0!==r&&r.parent?"change":"add"})]})]})}),(0,M.jsx)("br",{}),(0,M.jsx)(A.Z,{type:"submit",disabled:b,text:"Update"})]})})})]})},W=h.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),q=h.ZP.div(t||(t=(0,c.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n\n  form {\n    width: 100%;\n    min-width: 30rem;\n  }\n"]))),B=h.ZP.div(a||(a=(0,c.Z)([""]))),F=h.ZP.div(o||(o=(0,c.Z)(["\n  .content {\n    background: #fff;\n    min-height: 3.5rem;\n    display: flex;\n    gap: 0.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0.8rem 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 1.5rem;\n\n    .category {\n      text-transform: capitalize;\n      font-size: 1.3rem;\n    }\n    .change_category {\n      font-size: 1rem;\n      color: teal;\n      cursor: pointer;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n"]))),H=i(7749),J=i(9993),O=i(2962),R=[{id:1,label:"ID",minWidth:250},{id:2,label:"Name",minWidth:150},{id:3,label:"Slug",minWidth:150},{id:4,label:"Ancestors",minWidth:150},{id:5,label:"Actions",minWidth:150,align:"right"}],T=function(n){var e,i=n.keyword,r=(0,m.useState)({page:0,limit:10}),t=(0,u.Z)(r,2),a=t[0],o=t[1],l=(0,m.useState)([]),s=(0,u.Z)(l,2),d=s[0],c=s[1],h=(0,m.useState)(!1),v=(0,u.Z)(h,2),P=v[0],L=v[1],N=(0,m.useState)(null),_=(0,u.Z)(N,2),E=_[0],A=_[1],W=(0,z.R5)(),q=W.isSuccess,B=W.data,F=W.isLoading,T=W.isError,D=W.error;(0,m.useEffect)((function(){if(i&&o({page:0,limit:10}),B){var n=(0,f.Z)(null===B||void 0===B?void 0:B.categories),e=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())}));c(e)}}),[i,B]);var I=(0,z.l8)(),K=(0,u.Z)(I,2),U=K[0],Q=K[1],X=Q.isLoading,$=Q.isError,G=Q.error,Y=Q.isSuccess,nn=Q.data;(0,m.useEffect)((function(){$&&k.Am.error((null===G||void 0===G?void 0:G.message)||"Category not deleted."),Y&&k.Am.success(null===nn||void 0===nn?void 0:nn.message)}),[null===nn||void 0===nn?void 0:nn.message,null===G||void 0===G?void 0:G.message,$,Y]);return(0,M.jsxs)("div",{children:[F&&(0,M.jsx)(H.Z,{}),T&&(0,M.jsx)(M.Fragment,{children:404===D.status?(0,M.jsx)(O.Z,{style:{justifyContent:"center",marginTop:"10rem"},text:null===(e=D.data)||void 0===e?void 0:e.message}):(0,M.jsx)(J.Z,{style:{justifyContent:"center",marginTop:"10rem"},text:null===D||void 0===D?void 0:D.message})}),!T&&q&&(0,M.jsxs)(p.Z,{sx:{width:"100%",overflow:"hidden",margin:"1rem 0"},children:[(0,M.jsx)(j.Z,{sx:{},children:(0,M.jsxs)(Z.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,M.jsx)(b.Z,{children:(0,M.jsx)(y.Z,{children:R.map((function(n){return(0,M.jsx)(w.Z,{align:n.align,style:{minWidth:n.minWidth,fontSize:"1.3rem"},children:n.label},n.id)}))})}),(0,M.jsx)(C.Z,{children:null===d||void 0===d?void 0:d.slice(a.page*a.limit,a.page*a.limit+a.limit).map((function(n){var e,i;return(0,M.jsxs)(y.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,M.jsx)(w.Z,{style:{fontSize:"1.3rem"},children:null===n||void 0===n?void 0:n._id}),(0,M.jsx)(w.Z,{style:{fontSize:"1.3rem"},children:null===n||void 0===n?void 0:n.name}),(0,M.jsx)(w.Z,{style:{fontSize:"1.3rem"},children:null===n||void 0===n?void 0:n.slug}),(0,M.jsx)(w.Z,{style:{fontSize:"1.3rem"},children:(null===n||void 0===n||null===(e=n.ancestors)||void 0===e?void 0:e.length)>0&&(0,M.jsxs)("span",{children:["[",null===n||void 0===n||null===(i=n.ancestors)||void 0===i?void 0:i.map((function(e,i){var r;return i+1===(null===n||void 0===n||null===(r=n.ancestors)||void 0===r?void 0:r.length)?null===e||void 0===e?void 0:e.name:(null===e||void 0===e?void 0:e.name)+", "})),"]"]})}),(0,M.jsxs)(w.Z,{style:{textAlign:"right"},children:[(0,M.jsxs)("svg",{onClick:function(){return e=null===n||void 0===n?void 0:n._id,void(X||U(e));var e},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash delete",viewBox:"0 0 16 16",children:[(0,M.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"}),(0,M.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"})]}),(0,M.jsxs)("svg",{onClick:function(){L(!0),A(n)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-square edit",viewBox:"0 0 16 16",children:[(0,M.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),(0,M.jsx)("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})]})]},null===n||void 0===n?void 0:n._id)}))})]})}),d.length&&(0,M.jsx)(S.Z,{rowsPerPageOptions:[10,20,50],component:"div",count:Number(null===d||void 0===d?void 0:d.length),rowsPerPage:a.limit,page:a.page,onPageChange:function(n,e){return o((function(n){return(0,x.Z)((0,x.Z)({},n),{},{page:e})}))},onRowsPerPageChange:function(n){o((function(){return{page:0,limit:+n.target.value}}))}})]}),(0,M.jsx)(g.Z,{open:P,onClose:function(){return L(!1)},children:(0,M.jsx)(V,{categoryForEdit:E,onClose:function(){return L(!1)}})})]})},D=function(n){var e=n.onClose,i=(0,m.useState)([]),r=(0,u.Z)(i,2),t=r[0],a=r[1],o=(0,z.m7)(),l=(0,u.Z)(o,2),s=l[0],d=l[1],c=d.data,h=d.isError,v=d.error,g=d.isLoading,x=d.isSuccess;return(0,m.useEffect)((function(){h&&k.Am.error(null===v||void 0===v?void 0:v.message),x&&(e(),k.Am.success(null===c||void 0===c?void 0:c.message))}),[h,x,null===c||void 0===c?void 0:c.message,null===v||void 0===v?void 0:v.message,e]),(0,M.jsxs)(I,{children:[(0,M.jsx)(E.Z,{variant:"h2",text:"Create Category"}),(0,M.jsx)(K,{children:(0,M.jsx)(P.J9,{initialValues:{name:""},validationSchema:L.Ry({name:L.Z_().required("Category name is required.").min(2,"Category name must have at least 2 characters.")}),onSubmit:function(n,e){e.setSubmitting;var i,r={name:n.name,parent:null!==t&&void 0!==t&&t.length?null===(i=t[(null===t||void 0===t?void 0:t.length)-1])||void 0===i?void 0:i.category_id:null};s(r)},children:(0,M.jsxs)(P.l0,{children:[(0,M.jsx)(N.Z,{label:"Name",name:"name",type:"text",placeholder:"Enter your category name"}),(0,M.jsx)(_.Z,{label:"Parent Category (optional)",categories:t,setCategories:a}),(0,M.jsx)("br",{}),(0,M.jsx)(A.Z,{type:"submit",text:"Create",disabled:g})]})})})]})},I=h.ZP.div(l||(l=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),K=h.ZP.div(s||(s=(0,c.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n\n  form {\n    width: 100%;\n    min-width: 30rem;\n  }\n"]))),U=function(){var n=(0,m.useState)(""),e=(0,u.Z)(n,2),i=e[0],r=e[1],t=(0,m.useState)(!1),a=(0,u.Z)(t,2),o=a[0],l=a[1],s=function(){l((function(n){return!n}))};return(0,M.jsxs)(Q,{children:[(0,M.jsx)(v.Z,{setKeyWord:r,modalController:s,label:"Categories"}),(0,M.jsx)(T,{keyword:i}),(0,M.jsx)(g.Z,{open:o,onClose:s,children:(0,M.jsx)(D,{onClose:s})})]})},Q=h.ZP.div(d||(d=(0,c.Z)(["\n  width: 100%;\n\n  .delete {\n    margin-right: 1.5rem;\n    cursor: pointer;\n    &:hover {\n      fill: red;\n    }\n  }\n\n  .edit {\n    cursor: pointer;\n    &:hover {\n      fill: teal;\n    }\n  }\n"])))},2962:function(n,e,i){var r,t=i(168),a=(i(2791),i(4603)),o=i(8361),l=i(184);e.Z=function(n){var e=n.style,i=n.text;return(0,l.jsxs)(s,{style:e,children:[(0,l.jsx)(o.Z,{variant:"h1",text:"Oops!"}),(0,l.jsx)("p",{children:i})]})};var s=a.ZP.div(r||(r=(0,t.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n"])))},1197:function(n,e,i){var r,t=i(168),a=i(1413),o=i(9439),l=i(5987),s=i(5705),d=i(4603),c=i(3242),u=i(184),m=["label"];e.Z=function(n){var e=n.label,i=(0,l.Z)(n,m),r=(0,s.U$)(i),t=(0,o.Z)(r,2),d=t[0],v=t[1];return(0,u.jsxs)(h,{children:[(0,u.jsx)("label",{htmlFor:i.id||i.name,children:e}),(0,u.jsx)("input",(0,a.Z)((0,a.Z)({},d),i)),v.touched&&v.error&&(0,u.jsx)(c.Z,{message:v.error})]})};var h=d.ZP.div(r||(r=(0,t.Z)(["\n  margin-bottom: 2rem;\n  label {\n    color: var(--text-secondary);\n    font-size: 1.3rem;\n  }\n  input {\n    background: #fff;\n    color: var(--text-secondary);\n    width: 100%;\n    height: 3.5rem;\n    padding: 0 1rem;\n    margin-top: 0.5rem;\n    border: none;\n    outline: none;\n    font-size: 1.3rem;\n    border-radius: 2px;\n    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n    &:focus {\n      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\n      color: #000;\n    }\n    &::placeholder {\n      font-size: 1.3rem;\n    }\n  }\n"])))},3222:function(n,e,i){var r,t=i(168),a=i(3759),o=i(4603),l=i(184);e.Z=function(n){var e=n.children,i=n.open,r=n.onClose;return(0,l.jsx)(a.Z,{open:i,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(s,{children:[(0,l.jsx)("div",{className:"header",children:(0,l.jsx)("svg",{onClick:r,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#fff",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})}),(0,l.jsx)("div",{className:"children",children:e})]})})};var s=o.ZP.div(r||(r=(0,t.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: #fff;\n  box-shadow: var(--shadow-1);\n  border-radius: 0.5rem;\n  overflow-y: auto;\n\n  @media screen and (max-width: 576px) {\n    width: 100%;\n    height: 100%;\n  }\n\n  .children {\n    padding: 3rem;\n\n    @media screen and (max-width: 576px) {\n      padding: 3rem 2rem;\n    }\n  }\n\n  .header {\n    display: flex;\n    justify-content: flex-end;\n    padding: 1rem 0;\n    background-color: var(--bg-primary);\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    svg {\n      cursor: pointer;\n      margin: 0 2rem;\n    }\n  }\n"])))},2651:function(n,e,i){var r,t=i(168),a=i(1413),o=i(5987),l=(i(2791),i(4603)),s=i(184),d=["text","children"];e.Z=function(n){var e=n.text,i=n.children,r=(0,o.Z)(n,d);return(0,s.jsxs)(c,(0,a.Z)((0,a.Z)({},r),{},{children:[(0,s.jsx)("span",{children:e})," ",i]}))};var c=l.ZP.button(r||(r=(0,t.Z)(["\n  border: none;\n  color: var(--text-primary);\n  background-color: tomato;\n  padding: 1rem 3rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #dd5a43;\n    color: #f1f1f1;\n  }\n"])))},7528:function(n,e,i){var r,t=i(168),a=i(3433),o=i(9439),l=i(2791),s=i(1539),d=i(4603),c=i(9993),u=i(3242),m=i(184);e.Z=function(n){var e,i,r=n.label,t=n.categories,d=n.setCategories,v=n.categoriesError,g=n.setCategoriesError,x=(0,l.useState)(""),f=(0,o.Z)(x,2),p=f[0],j=f[1],Z=(0,l.useState)([]),b=(0,o.Z)(Z,2),y=b[0],w=b[1],C=(0,s.QX)(),S=C.data,z=C.isLoading,k=C.isError,P=C.error,L=C.isSuccess,N=function(n,e){0===e&&j(n.target.value);var i=JSON.parse(n.target.value),r=i._id,t=i.slug,o=i.children;if(!t)return d([]),w([]),void j(n.target.value);d((function(n){var i=n.slice(0,e);return[].concat((0,a.Z)(i),[{category_id:r,category_slug:t}])})),w((function(n){var i=n.slice(0,e);return o?[].concat((0,a.Z)(i),[o]):i}))};return(0,m.jsxs)(h,{children:[(0,m.jsx)("label",{children:r}),z&&(0,m.jsx)("div",{children:"Loading..."}),k&&(0,m.jsx)(m.Fragment,{children:404===P.status?(0,m.jsx)("div",{style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:null===P||void 0===P||null===(e=P.data)||void 0===e?void 0:e.message}):(0,m.jsx)(c.Z,{text:null===P||void 0===P?void 0:P.message,style:{fontSize:"1.3rem",padding:"2rem"}})}),L&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("select",{value:p,onChange:function(n){return N(n,0)},onBlur:function(){(null===t||void 0===t||!t.length)&&g&&g("Category is required.")},children:[(0,m.jsx)("option",{value:JSON.stringify({}),children:"Select a category"}),null===S||void 0===S||null===(i=S.category)||void 0===i?void 0:i.map((function(n){return(0,m.jsx)("option",{value:JSON.stringify(n),children:n.name},n._id)}))]}),null===y||void 0===y?void 0:y.map((function(n,e){return(0,m.jsxs)("select",{onChange:function(n){return N(n,e+1)},children:[(0,m.jsx)("option",{value:JSON.stringify({}),children:"Select a sub-category"}),null===n||void 0===n?void 0:n.map((function(n){return(0,m.jsx)("option",{value:JSON.stringify(n),children:n.name},n._id)}))]},e)}))]}),v&&(0,m.jsx)(u.Z,{message:v})]})};var h=d.ZP.div(r||(r=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem;\n  label {\n    font-size: 1.3rem;\n    color: var(--text-secondary);\n  }\n  select {\n    background: #fff;\n    color: var(--text-secondary);\n    margin-top: 0.5rem;\n    width: 100%;\n    height: 3.5rem;\n    padding: 0 1rem;\n    border: none;\n    outline: none;\n    font-size: 1.3rem;\n    border-radius: 2px;\n    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n    &:focus {\n      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n    }\n  }\n"])))},3242:function(n,e,i){var r,t=i(168),a=(i(2791),i(4603)),o=i(184);e.Z=function(n){var e=n.message;return(0,o.jsxs)(l,{className:"error",children:[(0,o.jsx)("span",{children:"i"})," ",e]})};var l=a.ZP.div(r||(r=(0,t.Z)(["\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  span {\n    font-style: italic;\n    color: tomato;\n    margin-right: 0.3rem;\n    font-weight: 700;\n    font-size: 1.1rem;\n  }\n"])))}}]);
//# sourceMappingURL=634.101b9711.chunk.js.map