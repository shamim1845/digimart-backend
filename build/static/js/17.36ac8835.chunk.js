"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[17],{3017:function(e,r,i){i.r(r);var n,t,a,d,s,l=i(168),o=i(1413),u=i(9439),c=i(2791),m=i(8789),h=i(7352),p=i(7689),v=i(2506),x=i(2797),g=i(1197),Z=i(8650),b=i(7528),f=i(6316),j=i(905),P=i(8361),w=i(2958),y=i(9814),S=i(1868),k=i(2651),q=i(184);r.default=function(){var e=(0,c.useState)([]),r=(0,u.Z)(e,2),i=r[0],n=r[1],t=(0,c.useState)(""),a=(0,u.Z)(t,2),d=a[0],s=a[1],l=(0,c.useState)([]),m=(0,u.Z)(l,2),D=m[0],I=m[1],A=(0,c.useState)(null),B=(0,u.Z)(A,2),H=B[0],J=B[1],L=(0,c.useState)(null),M=(0,u.Z)(L,2),N=M[0],V=M[1],X=(0,c.useState)(null),z=(0,u.Z)(X,2),F=z[0],G=z[1],K=(0,p.s0)(),O=(0,Z.qX)(),Q=(0,u.Z)(O,2),U=Q[0],W=Q[1],Y=W.data,$=W.isError,ee=W.error,re=W.isLoading,ie=W.isSuccess;(0,c.useEffect)((function(){$&&h.Am.error(null===ee||void 0===ee?void 0:ee.message),ie&&(h.Am.success(null===Y||void 0===Y?void 0:Y.message),K("/admin/products"))}),[$,ie,null===Y||void 0===Y?void 0:Y.message,null===ee||void 0===ee?void 0:ee.message,K]),(0,c.useEffect)((function(){(null===i||void 0===i?void 0:i.length)>0&&J(null),(null===D||void 0===D?void 0:D.length)>0&&G(null),d&&d.split(" ").length<10?V("Description must have at least 10 word."):V(null)}),[null===i||void 0===i?void 0:i.length,D,d]);var ne=(0,S.aH)().data;return(0,q.jsxs)(E,{children:[(0,q.jsx)(P.Z,{variant:"h2",text:"Create Product"}),(0,q.jsx)(C,{children:(0,q.jsx)(v.J9,{initialValues:{name:"",price:"",brand:"",stock:""},validationSchema:x.Ry({name:x.Z_().required("Product name is required.").min(3,"Product name must have at least 3 characters."),price:x.Rx().required("Product price is required.").max(1e5,"Maximum product price 100000"),brand:x.Z_(),stock:x.Rx().min(1,"Product stock must be greater than or equal 1").required("Product stock  is required.")}),onSubmit:function(e,r){r.setSubmitting;return null!==i&&void 0!==i&&i.length&&d&&null!==D&&void 0!==D&&D.length?d&&d.split(" ").length<10?V("Description must have at least 10 word."):void(0,w.Z)(D,"products").then((function(r){var n=r.map((function(e){return{public_id:e.public_id,url:e.secure_url}})),t=(0,o.Z)((0,o.Z)({},e),{},{categories:i,description:d,images:n});U(t)})).catch((function(e){G("There was an error while uploading images.")})):(null!==i&&void 0!==i&&i.length||J("Category is required."),d||V("Description is required."),void(null!==D&&void 0!==D&&D.length||G("Product image is required.")))},children:(0,q.jsxs)(v.l0,{children:[(0,q.jsx)(g.Z,{label:"Name",name:"name",type:"text",placeholder:"Enter your product name"}),(0,q.jsx)(g.Z,{label:"Price",name:"price",type:"number",placeholder:"Enter your product price"}),(0,q.jsxs)(y.Z,{label:"Brand",name:"brand",children:[(0,q.jsx)("option",{value:"",children:"Choose a brand"}),null===ne||void 0===ne?void 0:ne.brands.map((function(e){return(0,q.jsx)("option",{value:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e._id)}))]}),(0,q.jsx)(g.Z,{label:"Stock",name:"stock",type:"number",placeholder:"Product stock"}),(0,q.jsx)(_,{children:(0,q.jsx)(b.Z,{label:"Category",categories:i,setCategories:n,categoriesError:H,setCategoriesError:J})}),(0,q.jsx)(R,{children:(0,q.jsx)(f.Z,{label:"Description",richText:d,setRichText:s,richTextError:N,setRichTextError:V})}),(0,q.jsx)(T,{children:(0,q.jsx)(j.Z,{label:"Product Images",images:D,setImages:I,imagesError:F,setImagesError:G})}),(0,q.jsx)("br",{}),(0,q.jsx)(k.Z,{type:"submit",disabled:re,text:"Submit"})]})})})]})};var E=m.ZP.div(n||(n=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n"]))),C=m.ZP.div(t||(t=(0,l.Z)(["\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow-1);\n  padding: 5rem;\n  width: 100%;\n  @media screen and (max-width: 768px) {\n    /* margin: 0 5rem; */\n  }\n  @media screen and (max-width: 576px) {\n    /* padding: 2rem; */\n  }\n"]))),_=m.ZP.div(a||(a=(0,l.Z)([""]))),R=m.ZP.div(d||(d=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),T=m.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"])))}}]);
//# sourceMappingURL=17.36ac8835.chunk.js.map