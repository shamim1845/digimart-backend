"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[559],{4559:function(e,n,i){i.r(n),i.d(n,{default:function(){return ae}});var t,r,o,l,a,s,d,c,u,h=i(168),m=i(885),v=i(2791),g=i(703),p=i(9836),x=i(3382),f=i(3994),Z=i(9281),b=i(6890),j=i(9841),w=i(5855),y=i(8650),C=i(7749),P=i(9993),S=i(4603),_=i(8361),k=i(184),M=void 0,L=function(e){var n=e.setKeyWord,i=(0,v.useState)(""),t=(0,m.Z)(i,2),r=t[0],o=t[1],l=(0,v.useState)(!1),a=(0,m.Z)(l,2),s=a[0],d=a[1],c=function(e,n){var i;return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];i&&clearTimeout(i),i=setTimeout((function(){e.apply(M,r)}),n)}}((function(e){n(e)}),500),u=(0,v.useCallback)((function(e){return c(e)}),[]);return(0,k.jsxs)(V,{children:[(0,k.jsx)(_.Z,{variant:"h4",text:"Products",style:{width:"auto"}}),(0,k.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"".concat(s?"18":"16"),height:"".concat(s?"18":"16"),fill:"".concat(s?"#000000b2":"#666"),className:"bi bi-search",viewBox:"0 0 16 16",style:{transition:"all 0.1s ease-in-out"},children:(0,k.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),(0,k.jsx)("input",{onChange:function(e){o(e.target.value),u(e.target.value)},onFocus:function(){return d(!0)},onBlur:function(){return d(!1)},value:r,type:"text",placeholder:"Search product...",required:!0}),r&&(0,k.jsx)("div",{className:"search_clear",onClick:function(){n(""),o("")},children:(0,k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,k.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})})]})]})},V=S.ZP.div(t||(t=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n  background-color: #fff;\n  padding: 2rem 1.6rem;\n  display: flex;\n  gap: 3rem;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.116) 1px 2px 7px;\n\n  form {\n    width: 100% !important;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 1rem;\n    box-shadow: rgba(0, 0, 0, 0.178) 0px 0px 3px;\n\n    input {\n      flex: 1;\n      height: 100%;\n      width: 6rem;\n      border: none;\n      padding-left: 1rem;\n      border-radius: 0.5rem 0 0 0.5rem;\n      font-size: 1.4rem;\n      &::placeholder {\n        font-size: 1.3rem;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n    .search_clear {\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0 1rem;\n      cursor: pointer;\n      &:hover {\n        svg {\n          color: red;\n        }\n      }\n    }\n  }\n"]))),z=i(2298),A=i(6960),E=i(2982),N=i(1413),q=i(6871),H=i(5705),R=i(1089),W=i(2958),T=i(1197),B=i(7528),I=i(6316),D=i(905),O=i(9814),F=i(1868),K=i(2651),U=i(4569),J=i.n(U),Q=function(e){return new Promise((function(n,i){J().delete("/api/v1/media/deleteImages",{data:{public_ids:e}}).then((function(e){n(e.data.response)})).catch((function(e){i(e)}))}))},$=function(e){var n=e.product,i=e.onClose,t=e.refetch,r=(0,v.useState)(null===n||void 0===n?void 0:n.categories),o=(0,m.Z)(r,2),l=o[0],a=o[1],s=(0,v.useState)(null===n||void 0===n?void 0:n.description),d=(0,m.Z)(s,2),c=d[0],u=d[1],h=(0,v.useState)(null===n||void 0===n?void 0:n.images),g=(0,m.Z)(h,2),p=g[0],x=g[1],f=(0,v.useState)([]),Z=(0,m.Z)(f,2),b=Z[0],j=Z[1],w=(0,v.useState)([]),C=(0,m.Z)(w,2),P=C[0],S=C[1],M=(0,v.useState)(null),L=(0,m.Z)(M,2),V=L[0],z=L[1],U=(0,v.useState)(null),J=(0,m.Z)(U,2),$=J[0],re=J[1],oe=(0,v.useState)(null),le=(0,m.Z)(oe,2),ae=le[0],se=le[1],de=(0,v.useState)(!1),ce=(0,m.Z)(de,2),ue=ce[0],he=ce[1],me=(0,q.s0)(),ve=(0,y.wE)(),ge=(0,m.Z)(ve,2),pe=ge[0],xe=ge[1],fe=xe.data,Ze=xe.isError,be=xe.error,je=xe.isLoading,we=xe.isSuccess;(0,v.useEffect)((function(){Ze&&A.Am.error(null===be||void 0===be?void 0:be.message),we&&(A.Am.success(null===fe||void 0===fe?void 0:fe.message),t(),i())}),[Ze,we,null===fe||void 0===fe?void 0:fe.message,null===be||void 0===be?void 0:be.message,me,i,t]),(0,v.useEffect)((function(){(null===l||void 0===l?void 0:l.length)>0&&z(null),(null===b||void 0===b?void 0:b.length)>0&&se(null),c&&c.split(" ").length<10?re("Description must have at least 10 word."):re(null)}),[null===l||void 0===l?void 0:l.length,b,c]);var ye=(0,F.aH)().data;return(0,k.jsxs)(G,{children:[(0,k.jsx)(_.Z,{variant:"h2",text:"Update Product"}),(0,k.jsx)(X,{children:(0,k.jsx)(H.J9,{initialValues:{name:null===n||void 0===n?void 0:n.name,price:null===n||void 0===n?void 0:n.price,brand:null===n||void 0===n?void 0:n.brand,stock:null===n||void 0===n?void 0:n.stock},validationSchema:R.Ry({name:R.Z_().required("Product name is required.").min(3,"Product name must have at least 3 characters."),price:R.Rx().required("Product price is required.").max(1e5,"Maximum product price 100000"),brand:R.Z_(),stock:R.Rx().min(1,"Product stock must be greater than or equal 1").required("Product stock  is required.")}),onSubmit:function(e,i){i.setSubmitting;if(null===l||void 0===l||!l.length||!c||(null===p||void 0===p||!p.length)&&(null===b||void 0===b||!b.length))return null!==l&&void 0!==l&&l.length||z("Category is required."),c||re("Description is required."),void(null!==p&&void 0!==p&&p.length||null!==b&&void 0!==b&&b.length||se("Product image is required."));if(c&&c.split(" ").length<10)return re("Description must have at least 10 word.");if((null===b||void 0===b?void 0:b.length)>0)(0,W.Z)(b,"products").then((function(i){var t=i.map((function(e){return{public_id:e.public_id,url:e.secure_url}})),r=(0,N.Z)((0,N.Z)({},e),{},{categories:l,description:c,images:[].concat((0,E.Z)(p),(0,E.Z)(t))});pe({id:null===n||void 0===n?void 0:n._id,product:r})})).catch((function(e){se("There was an error while uploading images.")}));else{var t=(0,N.Z)((0,N.Z)({},e),{},{categories:l,description:c,images:p});pe({id:null===n||void 0===n?void 0:n._id,product:t})}null!==P&&void 0!==P&&P.length&&Q(P).then((function(e){A.Am.success("Media deleted successfully.")})).catch((function(e){console.log(e),A.Am.success("Media not deleted.")}))},children:(0,k.jsxs)(H.l0,{children:[(0,k.jsx)(T.Z,{label:"Name",name:"name",type:"text",placeholder:"Enter your product name"}),(0,k.jsx)(T.Z,{label:"Price",name:"price",type:"number",placeholder:"Enter your product price"}),(0,k.jsxs)(O.Z,{label:"Brand",name:"brand",children:[(0,k.jsx)("option",{value:"",children:"Choose a brand"}),null===ye||void 0===ye?void 0:ye.brands.map((function(e){return(0,k.jsx)("option",{value:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e._id)}))]}),(0,k.jsx)(T.Z,{label:"Stock",name:"stock",type:"number",placeholder:"Product stock"}),(0,k.jsx)(Y,{children:ue?(0,k.jsx)(B.Z,{label:"Category",categories:l,setCategories:a,categoriesError:V,setCategoriesError:z}):(0,k.jsxs)(ee,{children:[(0,k.jsx)("label",{children:"Category"}),(0,k.jsxs)("div",{className:"content",children:[(0,k.jsx)("div",{className:"prev_category",children:null===n||void 0===n?void 0:n.categories.map((function(e){return(0,k.jsx)("span",{className:"category",children:null===e||void 0===e?void 0:e.category_slug},null===e||void 0===e?void 0:e._id)}))}),(0,k.jsx)("span",{onClick:function(){return he(!0)},className:"change_category",children:"Change category"})]})]})}),(0,k.jsx)(ne,{children:(0,k.jsx)(I.Z,{label:"Description",richText:c,setRichText:u,richTextError:$,setRichTextError:re})}),(0,k.jsxs)(ie,{children:[(0,k.jsx)("label",{children:"Product Images"}),(null===p||void 0===p?void 0:p.length)>0&&(0,k.jsx)(te,{children:null===p||void 0===p?void 0:p.map((function(e,n){return(0,k.jsxs)("div",{className:"img_box",children:[(0,k.jsx)("img",{src:e.url,alt:"product"}),(0,k.jsxs)("svg",{onClick:function(){x((function(n){return n.filter((function(n){return e._id!==n._id}))})),S((function(n){return[].concat((0,E.Z)(n),[null===e||void 0===e?void 0:e.public_id])}))},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[(0,k.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"}),(0,k.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"})]})]},n)}))}),(0,k.jsx)(D.Z,{images:b,setImages:j,imagesError:ae,setImagesError:se})]}),(0,k.jsx)("br",{}),(0,k.jsx)(K.Z,{type:"submit",disabled:je,text:"Submit"})]})})})]})},G=S.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n  background-color: #f2f2f2;\n"]))),X=S.ZP.div(o||(o=(0,h.Z)(["\n  border-radius: 0.5rem;\n  width: 100%;\n"]))),Y=S.ZP.div(l||(l=(0,h.Z)([""]))),ee=S.ZP.div(a||(a=(0,h.Z)(["\n  .content {\n    background: #fff;\n    min-height: 3.5rem;\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0.8rem 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 1.5rem;\n\n    .prev_category {\n      display: flex;\n      gap: 1rem;\n\n      .category {\n        text-transform: capitalize;\n        font-size: 1.3rem;\n        border: 1px solid #e4e9eb;\n        border-radius: 10px;\n        padding: 0.5rem 1rem;\n      }\n    }\n    .change_category {\n      font-size: 1rem;\n      color: teal;\n      cursor: pointer;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n"]))),ne=S.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),ie=S.ZP.div(d||(d=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),te=S.ZP.div(c||(c=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, auto));\n  gap: 1rem;\n  margin-bottom: 1rem;\n  user-select: none;\n  border: 1px solid #ccc;\n  padding: 1rem;\n\n  .img_box {\n    width: 100%;\n    position: relative;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    svg {\n      position: absolute;\n      top: 3px;\n      right: 3px;\n      cursor: pointer;\n      &:hover {\n        fill: red;\n      }\n    }\n  }\n"]))),re=i(3222),oe=i(2962),le=[{id:1,label:"Image",minWidth:120},{id:2,label:"Name",minWidth:250},{id:3,label:"Category",minWidth:100},{id:4,label:"Price",minWidth:100},{id:5,label:"Quantity",minWidth:100},{id:6,label:"Actions",minWidth:150,align:"right"}];function ae(){var e,n,i=v.useState(0),t=(0,m.Z)(i,2),r=t[0],o=t[1],l=v.useState(20),a=(0,m.Z)(l,2),s=a[0],d=a[1],c=v.useState(""),u=(0,m.Z)(c,2),h=u[0],S=u[1],_=v.useState(!1),M=(0,m.Z)(_,2),V=M[0],E=M[1],N=v.useState(null),q=(0,m.Z)(N,2),H=q[0],R=q[1];v.useEffect((function(){h&&o(0)}),[h]);var W=(0,z.Z)({keyword:h,page:r+1,limit:s}),T=(0,y.C$)(W,{refetchOnMountOrArgChange:!0,refetchOnReconnect:!0}),B=T.data,I=T.isSuccess,D=T.isLoading,O=T.isError,F=T.error,K=T.refetch,U=(0,y.xq)(),J=(0,m.Z)(U,2),G=J[0],X=J[1],Y=X.isLoading,ee=X.isSuccess,ne=X.isError;v.useEffect((function(){ee&&(A.Am.success("Product successfully deleted."),K()),ne&&A.Am.error("Product not deleted. Something went wrong!")}),[ee,ne,K]);return(0,k.jsxs)(se,{children:[(0,k.jsx)(L,{setKeyWord:S}),D&&(0,k.jsx)(C.Z,{}),O&&(0,k.jsx)(k.Fragment,{children:404===F.status?(0,k.jsx)(oe.Z,{style:{justifyContent:"center",marginTop:"10rem"},text:null===(e=F.data)||void 0===e?void 0:e.message}):(0,k.jsx)(P.Z,{style:{justifyContent:"center",marginTop:"10rem"},text:null===F||void 0===F?void 0:F.message})}),!O&&I&&(0,k.jsxs)(g.Z,{sx:{width:"100%",overflow:"hidden",margin:"1rem 0"},children:[(0,k.jsx)(Z.Z,{sx:{},children:(0,k.jsxs)(p.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,k.jsx)(b.Z,{children:(0,k.jsx)(w.Z,{children:le.map((function(e){return(0,k.jsx)(f.Z,{align:e.align,style:{minWidth:e.minWidth,fontSize:"1.3rem"},children:e.label},e.id)}))})}),(0,k.jsx)(x.Z,{children:null===B||void 0===B||null===(n=B.products)||void 0===n?void 0:n.map((function(e){return(0,k.jsxs)(w.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,k.jsx)(f.Z,{children:(0,k.jsx)("img",{src:null===e||void 0===e?void 0:e.images[0].url,alt:null===e||void 0===e?void 0:e.name,width:80})}),(0,k.jsx)(f.Z,{style:{fontSize:"1.3rem"},children:null===e||void 0===e?void 0:e.name}),(0,k.jsx)(f.Z,{style:{fontSize:"1.3rem"},children:null===e||void 0===e?void 0:e.categories.map((function(e){return(0,k.jsx)("span",{style:{marginRight:"1rem"},children:null===e||void 0===e?void 0:e.category_slug},null===e||void 0===e?void 0:e._id)}))}),(0,k.jsx)(f.Z,{style:{fontSize:"1.3rem"},children:null===e||void 0===e?void 0:e.price}),(0,k.jsx)(f.Z,{style:{fontSize:"1.3rem"},children:null===e||void 0===e?void 0:e.stock}),(0,k.jsxs)(f.Z,{style:{textAlign:"right"},children:[(0,k.jsxs)("svg",{onClick:function(){return function(e){if(!Y){G(null===e||void 0===e?void 0:e._id);var n=null===e||void 0===e?void 0:e.images.map((function(e){return null===e||void 0===e?void 0:e.public_id}));null!==n&&void 0!==n&&n.length&&Q(n).then((function(e){A.Am.success("Media deleted successfully.")})).catch((function(e){console.error(e),A.Am.success("Media not deleted.")}))}}(e)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash delete",viewBox:"0 0 16 16",children:[(0,k.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"}),(0,k.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"})]}),(0,k.jsxs)("svg",{onClick:function(){E(!0),R(e)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-square edit",viewBox:"0 0 16 16",children:[(0,k.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),(0,k.jsx)("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})]})]},null===e||void 0===e?void 0:e._id)}))})]})}),(0,k.jsx)(j.Z,{rowsPerPageOptions:[20,50,100],component:"div",count:null===B||void 0===B?void 0:B.productCount,rowsPerPage:s,page:r,onPageChange:function(e,n){o(n)},onRowsPerPageChange:function(e){d(+e.target.value),o(0)}})]}),(0,k.jsx)(re.Z,{open:V,onClose:function(){return E(!1)},children:(0,k.jsx)($,{product:H,onClose:function(){return E(!1)},refetch:K})})]})}var se=S.ZP.div(u||(u=(0,h.Z)(["\n  width: 100%;\n\n  .delete {\n    margin-right: 1.5rem;\n    cursor: pointer;\n    &:hover {\n      fill: red;\n    }\n  }\n\n  .edit {\n    cursor: pointer;\n    &:hover {\n      fill: teal;\n    }\n  }\n"])))},2962:function(e,n,i){var t,r=i(168),o=(i(2791),i(4603)),l=i(8361),a=i(184);n.Z=function(e){var n=e.style,i=e.text;return(0,a.jsxs)(s,{style:n,children:[(0,a.jsx)(l.Z,{variant:"h1",text:"Oops!"}),(0,a.jsx)("p",{children:i})]})};var s=o.ZP.div(t||(t=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n"])))},2298:function(e,n){n.Z=function(e){var n=new URLSearchParams("");for(var i in e){var t,r;if(e[i])if("price"===i){if(null!==e[i].gte&&null!==e[i].lte)n.append("price[gte]",null===(t=e[i])||void 0===t?void 0:t.gte),n.append("price[lte]",null===(r=e[i])||void 0===r?void 0:r.lte)}else n.append(i,e[i])}return n.toString()}},3222:function(e,n,i){var t,r=i(168),o=i(3759),l=i(4603),a=i(184);n.Z=function(e){var n=e.children,i=e.open,t=e.onClose;return(0,a.jsx)(o.Z,{open:i,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(s,{children:[(0,a.jsx)("div",{className:"close_btn",children:(0,a.jsx)("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#fff",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,a.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})}),n]})})};var s=l.ZP.div(t||(t=(0,r.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 80rem;\n  max-height: 100vh;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 0.5rem;\n  overflow-y: auto;\n\n  .close_btn {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0.5rem 0;\n    background-color: var(--bg-primary);\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    svg {\n      cursor: pointer;\n      margin: 0 2rem;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=559.31a8dc3c.chunk.js.map