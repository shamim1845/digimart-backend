"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[12],{3017:function(e,r,n){n.r(r);var i,t,a,l,o,s=n(168),d=n(1413),u=n(9439),c=n(2791),m=n(4603),p=n(6960),h=n(6871),v=n(5705),g=n(1089),x=n(1197),b=n(8650),Z=n(7528),f=n(6316),j=n(905),y=n(8361),P=n(2958),w=n(9814),S=n(1868),E=n(2651),k=n(184);r.default=function(){var e=(0,c.useState)([]),r=(0,u.Z)(e,2),n=r[0],i=r[1],t=(0,c.useState)(""),a=(0,u.Z)(t,2),l=a[0],o=a[1],s=(0,c.useState)([]),m=(0,u.Z)(s,2),T=m[0],D=m[1],I=(0,c.useState)(null),A=(0,u.Z)(I,2),B=A[0],H=A[1],J=(0,c.useState)(null),L=(0,u.Z)(J,2),M=L[0],N=L[1],V=(0,c.useState)(null),X=(0,u.Z)(V,2),z=X[0],F=X[1],G=(0,h.s0)(),K=(0,b.qX)(),Q=(0,u.Z)(K,2),U=Q[0],W=Q[1],Y=W.data,$=W.isError,ee=W.error,re=W.isLoading,ne=W.isSuccess;(0,c.useEffect)((function(){$&&p.Am.error(null===ee||void 0===ee?void 0:ee.message),ne&&(p.Am.success(null===Y||void 0===Y?void 0:Y.message),G("/admin/products"))}),[$,ne,null===Y||void 0===Y?void 0:Y.message,null===ee||void 0===ee?void 0:ee.message,G]),(0,c.useEffect)((function(){(null===n||void 0===n?void 0:n.length)>0&&H(null),(null===T||void 0===T?void 0:T.length)>0&&F(null),l&&l.split(" ").length<10?N("Description must have at least 10 word."):N(null)}),[null===n||void 0===n?void 0:n.length,T,l]);var ie=(0,S.aH)().data;return(0,k.jsxs)(q,{children:[(0,k.jsx)(y.Z,{variant:"h2",text:"Create Product"}),(0,k.jsx)(C,{children:(0,k.jsx)(v.J9,{initialValues:{name:"",price:"",brand:"",stock:""},validationSchema:g.Ry({name:g.Z_().required("Product name is required.").min(3,"Product name must have at least 3 characters."),price:g.Rx().required("Product price is required.").max(1e5,"Maximum product price 100000"),brand:g.Z_(),stock:g.Rx().min(1,"Product stock must be greater than or equal 1").required("Product stock  is required.")}),onSubmit:function(e,r){r.setSubmitting;return null!==n&&void 0!==n&&n.length&&l&&null!==T&&void 0!==T&&T.length?l&&l.split(" ").length<10?N("Description must have at least 10 word."):void(0,P.Z)(T,"products").then((function(r){var i=r.map((function(e){return{public_id:e.public_id,url:e.secure_url}})),t=(0,d.Z)((0,d.Z)({},e),{},{categories:n,description:l,images:i});U(t)})).catch((function(e){F("There was an error while uploading images.")})):(null!==n&&void 0!==n&&n.length||H("Category is required."),l||N("Description is required."),void(null!==T&&void 0!==T&&T.length||F("Product image is required.")))},children:(0,k.jsxs)(v.l0,{children:[(0,k.jsx)(x.Z,{label:"Name",name:"name",type:"text",placeholder:"Enter your product name"}),(0,k.jsx)(x.Z,{label:"Price",name:"price",type:"number",placeholder:"Enter your product price"}),(0,k.jsxs)(w.Z,{label:"Brand",name:"brand",children:[(0,k.jsx)("option",{value:"",children:"Choose a brand"}),null===ie||void 0===ie?void 0:ie.brands.map((function(e){return(0,k.jsx)("option",{value:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e._id)}))]}),(0,k.jsx)(x.Z,{label:"Stock",name:"stock",type:"number",placeholder:"Product stock"}),(0,k.jsx)(_,{children:(0,k.jsx)(Z.Z,{label:"Category",categories:n,setCategories:i,categoriesError:B,setCategoriesError:H})}),(0,k.jsx)(O,{children:(0,k.jsx)(f.Z,{label:"Description",richText:l,setRichText:o,richTextError:M,setRichTextError:N})}),(0,k.jsx)(R,{children:(0,k.jsx)(j.Z,{label:"Product Images",images:T,setImages:D,imagesError:z,setImagesError:F})}),(0,k.jsx)("br",{}),(0,k.jsx)(E.Z,{type:"submit",disabled:re,text:"Submit"})]})})})]})};var q=m.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n"]))),C=m.ZP.div(t||(t=(0,s.Z)(["\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow-1);\n  padding: 5rem;\n  width: 100%;\n  @media screen and (max-width: 768px) {\n    /* margin: 0 5rem; */\n  }\n  @media screen and (max-width: 576px) {\n    /* padding: 2rem; */\n  }\n"]))),_=m.ZP.div(a||(a=(0,s.Z)([""]))),O=m.ZP.div(l||(l=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),R=m.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"])))},5987:function(e,r,n){n.d(r,{Z:function(){return t}});var i=n(3366);function t(e,r){if(null==e)return{};var n,t,a=(0,i.Z)(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}}}]);
//# sourceMappingURL=12.65342aa7.chunk.js.map