"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[726],{8726:function(n,e,r){r.r(e),r.d(e,{default:function(){return tn}});var t,i,o,a,l,s,c,d,u,m,h=r(168),g=r(885),f=r(2791),v=r(703),p=r(9836),x=r(3382),y=r(3994),Z=r(9281),b=r(6890),j=r(9841),w=r(5855),C=r(8650),P=r(7749),S=r(9993),q=r(4603),k=r(184),E=void 0,z=function(n){var e=n.setKeyWord,r=(0,f.useState)(""),t=(0,g.Z)(r,2),i=t[0],o=t[1],a=(0,f.useState)(!1),l=(0,g.Z)(a,2),s=l[0],c=l[1],d=function(n,e){var r;return function(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];r&&clearTimeout(r),r=setTimeout((function(){n.apply(E,i)}),e)}}((function(n){e(n)}),500),u=(0,f.useCallback)((function(n){return d(n)}),[]);return(0,k.jsxs)(_,{children:[(0,k.jsx)("h1",{children:"Products"}),(0,k.jsxs)("form",{onSubmit:function(n){return n.preventDefault()},children:[(0,k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(s?"18":"16"),height:"".concat(s?"18":"16"),fill:"".concat(s?"#000000b2":"#666"),className:"bi bi-search",viewBox:"0 0 16 16",style:{transition:"all 0.1s ease-in-out"},children:(0,k.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),(0,k.jsx)("input",{onChange:function(n){o(n.target.value),u(n.target.value)},onFocus:function(){return c(!0)},onBlur:function(){return c(!1)},value:i,type:"text",placeholder:"Search product...",required:!0}),i&&(0,k.jsx)("div",{className:"search_clear",onClick:function(){e(""),o("")},children:(0,k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,k.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})})]})]})},_=q.ZP.div(t||(t=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n  background-color: #fff;\n  padding: 2rem 1.6rem;\n  display: flex;\n  gap: 3rem;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.116) 1px 2px 7px;\n\n  h1 {\n    font-size: 1.3rem;\n  }\n\n  form {\n    width: 100% !important;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 1rem;\n    box-shadow: rgba(0, 0, 0, 0.178) 0px 0px 3px;\n\n    input {\n      flex: 1;\n      height: 100%;\n      width: 6rem;\n      border: none;\n      padding-left: 1rem;\n      border-radius: 0.5rem 0 0 0.5rem;\n      font-size: 1.4rem;\n      &::placeholder {\n        font-size: 1.3rem;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n    .search_clear {\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0 1rem;\n      cursor: pointer;\n      &:hover {\n        svg {\n          color: red;\n        }\n      }\n    }\n  }\n"]))),N=r(2298),T=r(6960),A=r(2982),M=r(1413),L=r(6871),V=r(5705),R=r(1089),H=r(8361),O=r(2958),D=r(1197),B=r(7528),U=r(6316),W=r(905),Q=function(n){var e=n.product,r=n.onClose,t=n.refetch,i=(0,f.useState)(null===e||void 0===e?void 0:e.category),o=(0,g.Z)(i,2),a=o[0],l=o[1],s=(0,f.useState)(null===e||void 0===e?void 0:e.description),c=(0,g.Z)(s,2),d=c[0],u=c[1],m=(0,f.useState)([]),h=(0,g.Z)(m,2),v=h[0],p=h[1],x=(0,f.useState)(null===e||void 0===e?void 0:e.images),y=(0,g.Z)(x,2),Z=y[0],b=y[1],j=(0,f.useState)(null),w=(0,g.Z)(j,2),P=w[0],S=w[1],q=(0,f.useState)(null),E=(0,g.Z)(q,2),z=E[0],_=E[1],N=(0,f.useState)(null),Q=(0,g.Z)(N,2),nn=Q[0],en=Q[1],rn=(0,f.useState)(!1),tn=(0,g.Z)(rn,2),on=tn[0],an=tn[1],ln=(0,L.s0)(),sn=(0,C.wE)(),cn=(0,g.Z)(sn,2),dn=cn[0],un=cn[1],mn=un.data,hn=un.isError,gn=un.error,fn=un.isLoading,vn=un.isSuccess;return(0,f.useEffect)((function(){hn&&T.Am.error(null===gn||void 0===gn?void 0:gn.message),vn&&(T.Am.success(null===mn||void 0===mn?void 0:mn.message),t(),r())}),[hn,vn,null===mn||void 0===mn?void 0:mn.message,null===gn||void 0===gn?void 0:gn.message,ln,r,t]),(0,f.useEffect)((function(){a&&S(null),(null===v||void 0===v?void 0:v.length)>0&&en(null),d&&d.split(" ").length<50?_("Description must have at least 50 word."):_(null)}),[a,v,d]),(0,k.jsxs)(I,{children:[(0,k.jsx)(H.Z,{variant:"h2",text:"Update Product"}),(0,k.jsx)(J,{children:(0,k.jsx)(V.J9,{initialValues:{name:null===e||void 0===e?void 0:e.name,price:null===e||void 0===e?void 0:e.price,brand:null===e||void 0===e?void 0:e.brand,stock:null===e||void 0===e?void 0:e.stock},validationSchema:R.Ry({name:R.Z_().required("Product name is required.").min(3,"Product name must have at least 3 characters."),price:R.Rx().required("Product price is required.").max(1e5,"Maximum product price 100000"),brand:R.Z_(),stock:R.Rx().min(1,"Product stock must be greater than or equal 1").required("Product stock  is required.")}),onSubmit:function(n,r){r.setSubmitting;if(!d||!a||0===(null===v||void 0===v?void 0:v.length)&&0===Z.length)return d||_("Description is required."),a||S("Category is required."),void(0===(null===v||void 0===v?void 0:v.length)&&0===Z.length&&en("Product image is required."));if(d&&d.split(" ").length<50)return _("Description must have at least 50 word.");if((null===v||void 0===v?void 0:v.length)>0)(0,O.Z)(v).then((function(r){var t=r.map((function(n){return{public_id:n.public_id,url:n.secure_url}})),i=(0,M.Z)((0,M.Z)({},n),{},{category:a,description:d,images:[].concat((0,A.Z)(Z),(0,A.Z)(t))});dn({id:null===e||void 0===e?void 0:e._id,product:i})})).catch((function(n){en("There was an error while uploadin images.")}));else{var t=(0,M.Z)((0,M.Z)({},n),{},{category:a,description:d,images:Z});dn({id:null===e||void 0===e?void 0:e._id,product:t})}},children:(0,k.jsxs)(V.l0,{children:[(0,k.jsx)(D.Z,{label:"Name",name:"name",type:"text",placeholder:"Enter your product name"}),(0,k.jsx)(D.Z,{label:"Price",name:"price",type:"number",placeholder:"Enter your product price"}),(0,k.jsx)(D.Z,{label:"Brand",name:"brand",type:"text",placeholder:"Product brand"}),(0,k.jsx)(D.Z,{label:"Stock",name:"stock",type:"number",placeholder:"Product stock"}),(0,k.jsx)(G,{children:on?(0,k.jsx)(B.Z,{label:"Category",category:a,setCategory:l,categoryError:P,setCategoryError:S}):(0,k.jsxs)(F,{children:[(0,k.jsx)("label",{children:"Category"}),(0,k.jsxs)("div",{className:"content",children:[(0,k.jsx)("span",{className:"category",children:null===e||void 0===e?void 0:e.category}),(0,k.jsx)("span",{onClick:function(){return an(!0)},className:"change_category",children:"change"})]})]})}),(0,k.jsx)(K,{children:(0,k.jsx)(U.Z,{label:"Description",richText:d,setRichText:u,richTextError:z,setRichTextError:_})}),(0,k.jsxs)(X,{children:[(0,k.jsx)("label",{children:"Product Images"}),(null===Z||void 0===Z?void 0:Z.length)>0&&(0,k.jsx)($,{children:null===Z||void 0===Z?void 0:Z.map((function(n,e){return(0,k.jsxs)("div",{className:"img_box",children:[(0,k.jsx)("img",{src:n.url,alt:"product"}),(0,k.jsxs)("svg",{onClick:function(){b((function(e){return console.log(e),e.filter((function(e){return n._id!==e._id}))}))},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[(0,k.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"}),(0,k.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"})]})]},e)}))}),(0,k.jsx)(W.Z,{images:v,setImages:p,imagesError:nn,setImagesError:en})]}),(0,k.jsx)("br",{}),(0,k.jsx)(Y,{type:"submit",disabled:fn,children:"Submit"})]})})})]})},I=q.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n  background-color: #f2f2f2;\n"]))),J=q.ZP.div(o||(o=(0,h.Z)(["\n  border-radius: 0.5rem;\n  width: 100%;\n"]))),G=q.ZP.div(a||(a=(0,h.Z)([""]))),F=q.ZP.div(l||(l=(0,h.Z)(["\n  .content {\n    background: #fff;\n    min-height: 3.5rem;\n    display: flex;\n    gap: 0.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0.8rem 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 1.5rem;\n\n    .category {\n      text-transform: capitalize;\n      font-size: 1.3rem;\n    }\n    .change_category {\n      font-size: 1rem;\n      color: teal;\n      cursor: pointer;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n"]))),K=q.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),X=q.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),$=q.ZP.div(d||(d=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, auto));\n  gap: 1rem;\n  margin-bottom: 1rem;\n  user-select: none;\n  border: 1px solid #ccc;\n  padding: 1rem;\n\n  .img_box {\n    width: 100%;\n    position: relative;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    svg {\n      position: absolute;\n      top: 3px;\n      right: 3px;\n      cursor: pointer;\n      &:hover {\n        fill: red;\n      }\n    }\n  }\n"]))),Y=q.ZP.button(u||(u=(0,h.Z)(["\n  font-size: 1.3rem;\n  border: none;\n  background-color: var(--bg-primary);\n  padding: 1rem 2rem;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.5s;\n  &:hover {\n    color: #fff;\n    background-color: #ff6347f6;\n  }\n"]))),nn=r(3222),en=r(2962),rn=[{id:1,label:"Image",minWidth:120},{id:2,label:"Name",minWidth:250},{id:3,label:"Category",minWidth:100},{id:4,label:"Price",minWidth:100},{id:5,label:"Quantity",minWidth:100},{id:6,label:"Actions",minWidth:150,align:"right"}];function tn(){var n,e,r=f.useState(0),t=(0,g.Z)(r,2),i=t[0],o=t[1],a=f.useState(20),l=(0,g.Z)(a,2),s=l[0],c=l[1],d=f.useState(""),u=(0,g.Z)(d,2),m=u[0],h=u[1],q=f.useState(""),E=(0,g.Z)(q,2),_=E[0],A=(E[1],f.useState(!1)),M=(0,g.Z)(A,2),L=M[0],V=M[1],R=f.useState(null),H=(0,g.Z)(R,2),O=H[0],D=H[1];f.useEffect((function(){m&&o(0)}),[m]);var B=(0,N.Z)({keyword:m,category:_,page:i+1,limit:s}),U=(0,C.C$)(B,{refetchOnMountOrArgChange:!0,refetchOnReconnect:!0}),W=U.data,I=U.isSuccess,J=U.isLoading,G=U.isError,F=U.error,K=U.refetch,X=(0,C.xq)(),$=(0,g.Z)(X,2),Y=$[0],tn=$[1],an=tn.isLoading,ln=tn.isSuccess,sn=tn.isError;f.useEffect((function(){ln&&(T.Am.success("Product successfully deleted."),K()),sn&&T.Am.error("Product not deleted. Something went wrong!")}),[ln,sn,K]);return(0,k.jsxs)(on,{children:[(0,k.jsx)(z,{setKeyWord:h}),J&&(0,k.jsx)(P.Z,{}),G&&(0,k.jsx)(k.Fragment,{children:404===F.status?(0,k.jsx)(en.Z,{style:{justifyContent:"center",marginTop:"3rem"},text:null===(n=F.data)||void 0===n?void 0:n.message}):(0,k.jsx)(S.Z,{style:{justifyContent:"center",marginTop:"3rem"},text:null===F||void 0===F?void 0:F.message})}),!G&&I&&(0,k.jsxs)(v.Z,{sx:{width:"100%",overflow:"hidden",margin:"1rem 0"},children:[(0,k.jsx)(Z.Z,{sx:{},children:(0,k.jsxs)(p.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,k.jsx)(b.Z,{children:(0,k.jsx)(w.Z,{children:rn.map((function(n){return(0,k.jsx)(y.Z,{align:n.align,style:{minWidth:n.minWidth,fontSize:"1.3rem"},children:n.label},n.id)}))})}),(0,k.jsx)(x.Z,{children:null===W||void 0===W||null===(e=W.products)||void 0===e?void 0:e.map((function(n){return(0,k.jsxs)(w.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,k.jsx)(y.Z,{children:(0,k.jsx)("img",{src:null===n||void 0===n?void 0:n.images[0].url,alt:null===n||void 0===n?void 0:n.name,width:80})}),(0,k.jsx)(y.Z,{style:{fontSize:"1.3rem"},children:null===n||void 0===n?void 0:n.name}),(0,k.jsx)(y.Z,{style:{fontSize:"1.3rem"},children:null===n||void 0===n?void 0:n.category}),(0,k.jsx)(y.Z,{style:{fontSize:"1.3rem"},children:null===n||void 0===n?void 0:n.price}),(0,k.jsx)(y.Z,{style:{fontSize:"1.3rem"},children:null===n||void 0===n?void 0:n.stock}),(0,k.jsxs)(y.Z,{style:{textAlign:"right"},children:[(0,k.jsxs)("svg",{onClick:function(){return e=null===n||void 0===n?void 0:n._id,void(an||Y(e));var e},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash delete",viewBox:"0 0 16 16",children:[(0,k.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"}),(0,k.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"})]}),(0,k.jsxs)("svg",{onClick:function(){V(!0),D(n)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-square edit",viewBox:"0 0 16 16",children:[(0,k.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),(0,k.jsx)("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})]})]},null===n||void 0===n?void 0:n._id)}))})]})}),(0,k.jsx)(j.Z,{rowsPerPageOptions:[20,50,100],component:"div",count:null===W||void 0===W?void 0:W.productCount,rowsPerPage:s,page:i,onPageChange:function(n,e){o(e)},onRowsPerPageChange:function(n){c(+n.target.value),o(0)}})]}),(0,k.jsx)(nn.Z,{open:L,onClose:function(){return V(!1)},children:(0,k.jsx)(Q,{product:O,onClose:function(){return V(!1)},refetch:K})})]})}var on=q.ZP.div(m||(m=(0,h.Z)(["\n  width: 100%;\n\n  .delete {\n    margin-right: 1.5rem;\n    cursor: pointer;\n    &:hover {\n      fill: red;\n    }\n  }\n\n  .edit {\n    cursor: pointer;\n    &:hover {\n      fill: teal;\n    }\n  }\n"])))},9993:function(n,e,r){var t,i=r(168),o=r(1413),a=(r(2791),r(4603)),l=r(184);e.Z=function(n){var e=n.text,r=void 0===e?"There was an error!":e,t=n.style;return(0,l.jsx)(s,{style:(0,o.Z)({color:"red"},t),children:r})};var s=a.ZP.div(t||(t=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n"])))},2962:function(n,e,r){var t,i=r(168),o=(r(2791),r(4603)),a=r(184);e.Z=function(n){var e=n.style,r=n.text;return(0,a.jsxs)(l,{style:e,children:[(0,a.jsx)("h3",{children:"Oops!"}),(0,a.jsx)("p",{children:r})]})};var l=o.ZP.div(t||(t=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n\n  h3 {\n    font-size: 2rem;\n  }\n"])))},1197:function(n,e,r){var t,i=r(168),o=r(1413),a=r(885),l=r(5987),s=r(5705),c=r(4603),d=r(3242),u=r(184),m=["label"];e.Z=function(n){var e=n.label,r=(0,l.Z)(n,m),t=(0,s.U$)(r),i=(0,a.Z)(t,2),c=i[0],g=i[1];return(0,u.jsxs)(h,{children:[(0,u.jsx)("label",{htmlFor:r.id||r.name,children:e}),(0,u.jsx)("input",(0,o.Z)((0,o.Z)({},c),r)),g.touched&&g.error&&(0,u.jsx)(d.Z,{message:g.error})]})};var h=c.ZP.div(t||(t=(0,i.Z)(["\n  margin-bottom: 1.5rem;\n  label {\n    color: var(--text-secondary);\n    font-size: 1.3rem;\n  }\n  input {\n    color: var(--text-secondary);\n    width: 100%;\n    height: 3.5rem;\n    padding: 0 1rem;\n    margin-top: 0.5rem;\n    border: none;\n    outline: none;\n    &:focus {\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n      color: #000;\n    }\n    &::placeholder {\n      font-size: 1.3rem;\n    }\n  }\n"])))},2958:function(n,e,r){var t=r(5861),i=r(7757),o=r.n(i),a=r(4569),l=r.n(a),s=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t,i,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=[],t=0;t<e.length;t++)r.push(e[t]);return i=r.map((function(n){return new Promise((function(e,r){var t=new FileReader;t.readAsDataURL(n),t.onload=function(r){var t=n.name.split(".")[0];e({base64:r.target.result,options:{public_id:t,tags:[t]}})}}))})),n.next=5,Promise.all(i);case 5:return a=n.sent,n.abrupt("return",new Promise((function(n,e){l().post("/api/v1/media/uploadImage",{images:a}).then((function(e){n(e.data.urls)})).catch((function(n){e(n)}))})));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();e.Z=s},2298:function(n,e){e.Z=function(n){var e=new URLSearchParams("");for(var r in n){var t,i;if(n[r])if("price"===r){if(null!==n[r].gte&&null!==n[r].lte)e.append("price[gte]",null===(t=n[r])||void 0===t?void 0:t.gte),e.append("price[lte]",null===(i=n[r])||void 0===i?void 0:i.lte)}else e.append(r,n[r])}return e.toString()}},3222:function(n,e,r){var t,i=r(168),o=r(3759),a=r(4603),l=r(184);e.Z=function(n){var e=n.children,r=n.open,t=n.onClose;return(0,l.jsx)(o.Z,{open:r,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(s,{children:[(0,l.jsx)("div",{className:"close_btn",children:(0,l.jsx)("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#fff",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})}),e]})})};var s=a.ZP.div(t||(t=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 80rem;\n  max-height: 100vh;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 0.5rem;\n  overflow-y: auto;\n\n  .close_btn {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0.5rem 0;\n    background-color: var(--bg-primary);\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    svg {\n      cursor: pointer;\n      margin: 0 2rem;\n    }\n  }\n"])))},7528:function(n,e,r){var t,i=r(168),o=r(2982),a=r(885),l=r(2791),s=r(1539),c=r(4603),d=r(9993),u=r(3242),m=r(184);e.Z=function(n){var e,r=n.label,t=n.category,i=n.setCategory,c=n.categoryError,g=n.setCategoryError,f=(0,l.useState)(""),v=(0,a.Z)(f,2),p=v[0],x=v[1],y=(0,l.useState)([]),Z=(0,a.Z)(y,2),b=Z[0],j=Z[1],w=(0,s.QX)(),C=w.data,P=w.isLoading,S=w.isError,q=w.error,k=w.isSuccess,E=function(n,e){0===e&&x(n.target.value);var r=JSON.parse(n.target.value),t=r._id,a=r.slug,l=r.children;if(!a)return i(null),j([]),void x(JSON.stringify({}));i({_id:t,slug:a}),j((function(n){var r=n.slice(0,e);return l?[].concat((0,o.Z)(r),[l]):r}))};return(0,m.jsxs)(h,{children:[(0,m.jsx)("label",{children:r}),P&&(0,m.jsx)("div",{children:"Loading..."}),S&&(0,m.jsx)(d.Z,{text:q.message}),k&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("select",{value:p,onChange:function(n){return E(n,0)},onBlur:function(){!t&&g&&g("Category is required.")},children:[(0,m.jsx)("option",{value:JSON.stringify({}),children:"Select a category"}),null===C||void 0===C||null===(e=C.category)||void 0===e?void 0:e.map((function(n){return(0,m.jsx)("option",{value:JSON.stringify(n),children:n.name},n._id)}))]}),null===b||void 0===b?void 0:b.map((function(n,e){return(0,m.jsxs)("select",{onChange:function(n){return E(n,e+1)},children:[(0,m.jsx)("option",{value:JSON.stringify({}),children:"Select a sub-category"}),null===n||void 0===n?void 0:n.map((function(n){return(0,m.jsx)("option",{value:JSON.stringify(n),children:n.name},n._id)}))]},e)}))]}),c&&(0,m.jsx)(u.Z,{message:c})]})};var h=c.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n  label {\n    font-size: 1.3rem;\n    color: var(--text-secondary);\n  }\n  select {\n    background: #fff;\n    color: var(--text-secondary);\n    margin-top: 0.5rem;\n    width: 100%;\n    height: 3.5rem;\n    padding: 0 1rem;\n    border: none;\n    outline: none;\n    font-size: 1.3rem;\n    &:focus {\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n      color: #000;\n    }\n    &::placeholder {\n      font-size: 1.2rem;\n    }\n  }\n"])))},905:function(n,e,r){var t,i=r(168),o=r(885),a=r(2791),l=r(4603),s=r(3242),c=r(184);e.Z=function(n){var e=n.label,r=n.images,t=n.setImages,i=n.imagesError,l=n.setImagesError,u=(0,a.useState)(null),m=(0,o.Z)(u,2),h=m[0],g=m[1],f=(0,a.useState)(null),v=(0,o.Z)(f,2),p=v[0],x=v[1];(0,a.useEffect)((function(){if(h){t(h);for(var n=[],e=0;e<h.length;e++)n.push(URL.createObjectURL(h[e]));x(n)}}),[h,t]);return(0,c.jsxs)(d,{children:[e&&(0,c.jsx)("label",{children:e}),(null===p||void 0===p?void 0:p.length)>0&&(0,c.jsx)("div",{className:"image_list",children:null===p||void 0===p?void 0:p.map((function(n,e){return(0,c.jsxs)("div",{className:"img_box",children:[(0,c.jsx)("img",{src:n,alt:"product"}),(0,c.jsxs)("svg",{onClick:function(){return n=e,void g((function(e){for(var r=new DataTransfer,t=0;t<e.length;t++){var i=e[t];n!==t&&r.items.add(i)}return r.files}));var n},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[(0,c.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"}),(0,c.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"})]})]},e)}))}),(0,c.jsx)("input",{type:"file",multiple:!0,onChange:function(n){g((function(e){if(!e)return n.target.files;for(var r=new DataTransfer,t=0;t<e.length;t++){var i=e[t];r.items.add(i)}for(var o=0;o<n.target.files.length;o++){var a=n.target.files[o];r.items.add(a)}return r.files}))},onBlur:function(){(!r||0===r.length)&&l("Product image is required.")},accept:"image/*"}),i&&(0,c.jsx)(s.Z,{message:i})]})};var d=l.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n\n  label {\n    font-size: 1.3rem;\n    color: var(--text-secondary);\n  }\n\n  .image_list {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(110px, auto));\n    gap: 1rem;\n    margin-bottom: 1rem;\n    user-select: none;\n    border: 1px solid #ccc;\n    padding: 1rem;\n\n    .img_box {\n      width: 100%;\n      position: relative;\n      img {\n        width: 100%;\n        height: 100%;\n      }\n      svg {\n        position: absolute;\n        top: 3px;\n        right: 3px;\n        cursor: pointer;\n        &:hover {\n          fill: red;\n        }\n      }\n    }\n  }\n\n  input {\n    width: 100%;\n    max-width: 20rem;\n    margin-top: 0.5rem;\n  }\n"])))},6316:function(n,e,r){var t,i=r(168),o=(r(2791),r(6770)),a=r.n(o),l=r(4603),s=(r(6009),r(3242)),c=r(184),d=[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]];e.Z=function(n){var e=n.label,r=n.richText,t=n.setRichText,i=n.richTextError,o=n.setRichTextError;return(0,c.jsxs)(u,{children:[(0,c.jsx)("label",{children:e}),(0,c.jsx)("div",{className:"quill_container",children:(0,c.jsx)(a(),{theme:"snow",value:r,onChange:t,modules:{toolbar:d},onBlur:function(){!r&&o("Description is required.")}})}),i&&(0,c.jsx)(s.Z,{message:i})]})};var u=l.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n  label {\n    font-size: 1.3rem;\n    color: var(--text-secondary);\n  }\n\n  .quill_container {\n    margin-top: 0.5rem;\n    .ql-toolbar.ql-snow {\n      @media screen and (max-width: 576px) {\n        padding: 0;\n      }\n    }\n\n    .error {\n      font-size: 1.1rem;\n      padding: 1rem 0;\n      span {\n        font-style: italic;\n        color: tomato;\n        margin-right: 0.3rem;\n        font-weight: 700;\n        font-size: 1.1rem;\n      }\n    }\n  }\n"])))},8361:function(n,e,r){var t,i=r(168),o=(r(2791),r(4603)),a=r(184);e.Z=function(n){var e=n.variant,r=void 0===e?"h1":e,t=n.text,i=n.style;return(0,a.jsxs)(l,{style:i,children:["h1"===r&&(0,a.jsx)("h1",{children:t}),"h2"===r&&(0,a.jsx)("h2",{children:t}),"h3"===r&&(0,a.jsx)("h3",{children:t})]})};var l=o.ZP.div(t||(t=(0,i.Z)(["\n  width: 100%;\n  color: var(--text-primary);\n\n  h1 {\n    font-size: 2.4rem;\n    font-weight: 500;\n  }\n\n  h2 {\n    font-size: 2rem;\n    font-weight: 500;\n  }\n"])))},3242:function(n,e,r){var t,i=r(168),o=(r(2791),r(4603)),a=r(184);e.Z=function(n){var e=n.message;return(0,a.jsxs)(l,{className:"error",children:[(0,a.jsx)("span",{children:"i"})," ",e]})};var l=o.ZP.div(t||(t=(0,i.Z)(["\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  span {\n    font-style: italic;\n    color: tomato;\n    margin-right: 0.3rem;\n    font-weight: 700;\n    font-size: 1.1rem;\n  }\n"])))},1539:function(n,e,r){r.d(e,{QX:function(){return i},R5:function(){return o},m7:function(){return a},pi:function(){return l},l8:function(){return s}});var t=r(4473).Z.injectEndpoints({endpoints:function(n){return{getAllCategory:n.query({query:function(){return{url:"categories"}},providesTags:["Categories"]}),getAdminCategory:n.query({query:function(){return{url:"admin/categories"}},providesTags:["AdminCategories"]}),createCategory:n.mutation({query:function(n){return{url:"admin/categories",method:"POST",body:n}},invalidatesTags:["Categories","AdminCategories"]}),updateCategory:n.mutation({query:function(n){var e=n.id,r=n.category;return{url:"admin/categories/".concat(e),method:"PUT",body:r}},invalidatesTags:["Categories","AdminCategories"]}),deleteCategory:n.mutation({query:function(n){return{url:"admin/categories/".concat(n),method:"DELETE"}},invalidatesTags:["Categories","AdminCategories"]})}}}),i=t.useGetAllCategoryQuery,o=t.useGetAdminCategoryQuery,a=t.useCreateCategoryMutation,l=t.useUpdateCategoryMutation,s=t.useDeleteCategoryMutation},8650:function(n,e,r){r.d(e,{C$:function(){return i},lZ:function(){return o},xq:function(){return a},fp:function(){return l},KR:function(){return s},qX:function(){return c},wE:function(){return d}});var t=r(4473).Z.injectEndpoints({endpoints:function(n){return{getProducts:n.query({query:function(n){return{url:"products?".concat(n)}}}),getProduct:n.query({query:function(n){return{url:"product/".concat(n)}}}),deleteProduct:n.mutation({query:function(n){return{url:"admin/product/".concat(n),method:"DELETE"}}}),getNewArivalsCategories:n.query({query:function(){return{url:"products/new-arrivals-categories"}}}),getNewArivals:n.query({query:function(n){var e=n.category,r=n.currentPage;return{url:"products/new-arrivals?category=".concat(e,"&page=").concat(r)}}}),createProduct:n.mutation({query:function(n){return{url:"admin/product/new",method:"POST",body:n}}}),updateProduct:n.mutation({query:function(n){var e=n.id,r=n.product;return{url:"admin/product/".concat(e),method:"PUT",body:r}}})}}}),i=t.useGetProductsQuery,o=t.useGetProductQuery,a=t.useDeleteProductMutation,l=t.useGetNewArivalsCategoriesQuery,s=t.useGetNewArivalsQuery,c=t.useCreateProductMutation,d=t.useUpdateProductMutation}}]);
//# sourceMappingURL=726.586b26ac.chunk.js.map