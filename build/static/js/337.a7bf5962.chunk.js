"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[337],{2337:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,i,o,a,u=e(168),d=(e(2791),e(4603)),s=e(8802),c=e(8316),l=e(3400),v=e(3504),f=e(5515),m=e(8361),h=e(1033),g=e(5014),x=e(184),p=function(n){var t=n.product,e=(0,f.Z)(null===t||void 0===t?void 0:t._id).removefavouriteHandler,r=(0,g.Z)(null===t||void 0===t?void 0:t._id).addToCartFromFavouriteHandler;return(0,x.jsxs)(y,{children:[(0,x.jsxs)("div",{className:"left_content",children:[(0,x.jsx)("div",{className:"img_box",children:(0,x.jsx)("img",{src:t.images[0].url,alt:null===t||void 0===t?void 0:t.name})}),(0,x.jsxs)("div",{className:"dtails_box",children:[(0,x.jsx)(v.rU,{to:"/products/".concat(t._id),children:(0,x.jsx)(m.Z,{variant:"h3",text:null===t||void 0===t?void 0:t.name,style:{fontWeight:"500"}})}),(0,x.jsx)("div",{className:"price",children:(0,x.jsx)(h.Z,{price:null===t||void 0===t?void 0:t.price})}),(0,x.jsx)("div",{className:"rating",children:(0,x.jsx)(c.Z,{name:"half-rating-read",size:"large",value:null===t||void 0===t?void 0:t.avgRating,precision:.1,readOnly:!0})})]})]}),(0,x.jsxs)("div",{className:"right_content",children:[(0,x.jsx)(l.Z,{onClick:r,"aria-label":"favourite",size:"large",children:(0,x.jsx)("i",{className:"bi bi-cart-dash-fill",style:{fontSize:"2rem"}})}),(0,x.jsx)(l.Z,{onClick:e,"aria-label":"delete",size:"large",color:"error",children:(0,x.jsx)("i",{className:"bi bi-trash",style:{fontSize:"2rem"}})})]})]})},y=d.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  .left_content {\n    display: flex;\n    align-items: center;\n    .img_box {\n      padding: 0 1rem;\n      img {\n        width: 12rem;\n        height: 12rem;\n      }\n    }\n    .dtails_box {\n      .price {\n        margin: 1rem 0;\n        span {\n          font-weight: 600;\n          font-size: 1.6rem;\n        }\n      }\n      .rating {\n      }\n    }\n  }\n\n  .right_content {\n  }\n"]))),Z=function(n){var t=n.favouriteItems;return(0,x.jsx)(j,{children:(null===t||void 0===t?void 0:t.length)&&(null===t||void 0===t?void 0:t.map((function(n){return(0,x.jsx)(p,{product:n},n._id)})))})},j=d.ZP.div(i||(i=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin-bottom: 2rem;\n"]))),b=e(8269),w=e(9768),T=e(9993),C=function(){var n,t,e,r=(0,w.a2)(),i=r.isSuccess,o=r.data,a=r.isError,u=r.error;return(0,x.jsx)(s.Z,{children:(0,x.jsxs)(F,{children:[a&&(0,x.jsx)(x.Fragment,{children:404===u.status?(0,x.jsx)(b.Z,{text:"Your favourite list is empty.",link:"/products",btnText:"Add Product"}):(0,x.jsx)(T.Z,{text:null===u||void 0===u||null===(n=u.data)||void 0===n?void 0:n.message,style:{padding:"10rem 0",width:"100%",background:"pink",display:"flex",justifyContent:"center"}})}),i&&(0,x.jsx)(x.Fragment,{children:null!==o&&void 0!==o&&null!==(t=o.favourites)&&void 0!==t&&t.length?(0,x.jsxs)(A,{children:[(0,x.jsx)(m.Z,{variant:"h1",text:"Default Wish List (".concat((null===o||void 0===o||null===(e=o.favourites)||void 0===e?void 0:e.length)||0,")"),style:{marginBottom:"2rem"}}),(0,x.jsx)(Z,{favouriteItems:null===o||void 0===o?void 0:o.favourites})]}):(0,x.jsx)(b.Z,{text:"Your favourite list is empty.",link:"/products",btnText:"Add Product"})})]})})},F=d.ZP.div(o||(o=(0,u.Z)(["\n  width: 100%;\n  max-width: 1440px;\n  padding: 2rem 0;\n"]))),A=d.ZP.div(a||(a=(0,u.Z)(["\n  width: 100%;\n"])))},8269:function(n,t,e){var r,i,o=e(168),a=e(1413),u=(e(2791),e(6871)),d=e(4603),s=e(2651),c=e(8361),l=e(184);t.Z=function(n){var t=n.text,e=n.link,r=n.btnText,i=n.style,o=(0,u.s0)();return(0,l.jsx)(v,{style:(0,a.Z)({},i),children:(0,l.jsxs)(f,{children:[(0,l.jsx)(c.Z,{variant:"h1",text:t}),(0,l.jsx)(s.Z,{text:r,onClick:function(){o(e)}})]})})};var v=d.ZP.div(r||(r=(0,o.Z)(["\n  width: 100%;\n  height: 50vh;\n"]))),f=d.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  height: 100%;\n"])))},8802:function(n,t,e){var r,i=e(168),o=(e(2791),e(4603)),a=e(184);t.Z=function(n){var t=n.children;return(0,a.jsx)(u,{children:t})};var u=o.ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding: 0 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  @media screen and (max-width: 768px) {\n    padding: 0 2rem;\n  }\n  @media screen and (max-width: 576px) {\n    padding: 0 1rem;\n  }\n"])))},2874:function(n,t,e){e.d(t,{i:function(){return r}});var r=[{name:"USD",icon:"$"},{name:"BDT",icon:"\u09f3"},{name:"INR",icon:"\u20b9"}]},5014:function(n,t,e){var r=e(9439),i=e(2791),o=e(8661),a=e(6960),u=e(6871),d=e(9768);t.Z=function(n){var t=(0,i.useState)(0),e=(0,r.Z)(t,2),s=e[0],c=e[1],l=(0,u.s0)(),v=(0,o._0)(),f=v.isSuccess,m=v.data;(0,i.useEffect)((function(){if(f){var t,e=null===m||void 0===m||null===(t=m.carts)||void 0===t?void 0:t.find((function(t){var e;return(null===t||void 0===t||null===(e=t.product)||void 0===e?void 0:e._id)===n}));c(e?null===e||void 0===e?void 0:e.quantity:0)}}),[f,null===m||void 0===m?void 0:m.carts,n]);var h=(0,o.$B)(),g=(0,r.Z)(h,1)[0],x=(0,o.EU)(),p=(0,r.Z)(x,1)[0],y=(0,d.d4)(),Z=(0,r.Z)(y,1)[0];return{quantity:s,addToCartHandler:function(t){0===t?p({productId:n}).unwrap().then((function(n){a.Am.info(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;a.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)})):g({productId:n,quantity:t}).unwrap().then((function(n){a.Am.success(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;a.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message),401===(null===n||void 0===n?void 0:n.status)&&setTimeout((function(){l("/login"),window.scrollTo(0,0)}),2e3)}))},addToCartFromFavouriteHandler:function(){g({productId:n,quantity:1}).unwrap().then((function(t){a.Am.success(null===t||void 0===t?void 0:t.message),Z({productId:n})})).catch((function(n){var t;a.Am.error(null===(t=n.data)||void 0===t?void 0:t.message)}))},removeFromCartHandler:function(){p({productId:n}).unwrap().then((function(n){a.Am.info(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;a.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)}))}}}},5515:function(n,t,e){var r=e(9439),i=e(2791),o=e(9768),a=e(8661),u=e(6960),d=e(6871);t.Z=function(n){var t=(0,i.useState)(!1),e=(0,r.Z)(t,2),s=e[0],c=e[1],l=(0,d.s0)(),v=(0,o.gb)(),f=(0,r.Z)(v,1)[0],m=(0,o.d4)(),h=(0,r.Z)(m,1)[0],g=(0,a.EU)(),x=(0,r.Z)(g,1)[0],p=(0,o.a2)(),y=p.isSuccess,Z=p.data,j=p.isError;(0,i.useEffect)((function(){if(y){var t=null===Z||void 0===Z?void 0:Z.favourites.find((function(t){return(null===t||void 0===t?void 0:t._id)===n}));c(!!t)}j&&c(!1)}),[y,j,null===Z||void 0===Z?void 0:Z.favourites,n]);return{favourite:s,addfavouriteItemHandler:function(){!s&&f({productId:n}).unwrap().then((function(n){u.Am.success(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;u.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message),401===(null===n||void 0===n?void 0:n.status)&&setTimeout((function(){l("/login"),window.scrollTo(0,0)}),2e3)}))},addfavouriteItemFromCartHandler:function(){!s&&f({productId:n}).unwrap().then((function(t){u.Am.success(null===t||void 0===t?void 0:t.message),x({productId:n})})).catch((function(n){var t;u.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)}))},removefavouriteHandler:function(){s&&h({productId:n}).unwrap().then((function(n){u.Am.info(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;u.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)}))}}}},9993:function(n,t,e){var r,i=e(168),o=e(1413),a=(e(2791),e(4603)),u=e(184);t.Z=function(n){var t=n.text,e=void 0===t?"There was an error!":t,r=n.style;return(0,u.jsx)(d,{style:(0,o.Z)({color:"red"},r),children:e})};var d=a.ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n"])))},2651:function(n,t,e){var r,i=e(168),o=e(1413),a=e(5987),u=(e(2791),e(4603)),d=e(184),s=["text","children"];t.Z=function(n){var t=n.text,e=n.children,r=(0,a.Z)(n,s);return(0,d.jsxs)(c,(0,o.Z)((0,o.Z)({},r),{},{children:[(0,d.jsx)("span",{children:t})," ",e]}))};var c=u.ZP.button(r||(r=(0,i.Z)(["\n  border: none;\n  color: var(--text-primary);\n  background-color: tomato;\n  padding: 1rem 3rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #dd5a43;\n    color: #f1f1f1;\n  }\n  &:disabled {\n    background-color: #dd5a43d3;\n    cursor: not-allowed;\n    color: var(--text-primary);\n  }\n"])))},1033:function(n,t,e){e.d(t,{Z:function(){return h}});var r=e(9439),i=e(2791),o=e(2978),a=e(9290),u=e(5861),d=e(7757),s=e.n(d),c=e(4418),l=function(){var n=(0,u.Z)(s().mark((function n(t){var e,r,i,o,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.amount,r=t.from,i=t.to,"c6ff310e447c4b9fb19f86d026d27056",o=new c.dS("OpenExchangeRates","c6ff310e447c4b9fb19f86d026d27056"),n.next=5,o.convert(e,r,i);case 5:return a=n.sent,n.abrupt("return",a.toFixed(2));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=l,f=e(2874),m=e(184),h=function(n){var t=n.price,e=(0,i.useState)(null),u=(0,r.Z)(e,2),d=u[0],s=u[1],c=(0,o.v9)(a.j);(0,i.useEffect)((function(){v({amount:t,from:"USD",to:c}).then((function(n){s(n)}))}),[c,t]);var l=f.i.find((function(n){return n.name===c}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{children:[" ",null===l||void 0===l?void 0:l.icon]}),(0,m.jsxs)("span",{children:[" ",d]})]})}},8361:function(n,t,e){var r,i=e(168),o=(e(2791),e(4603)),a=e(184);t.Z=function(n){var t=n.variant,e=void 0===t?"h1":t,r=n.text,i=n.style;return(0,a.jsxs)(u,{children:["h2"===e&&(0,a.jsx)("h2",{style:i,children:r}),"h3"===e&&(0,a.jsx)("h3",{style:i,children:r}),"h1"===e&&(0,a.jsx)("h1",{style:i,children:r}),"h4"===e&&(0,a.jsx)("h4",{style:i,children:r})]})};var u=o.ZP.div(r||(r=(0,i.Z)(["\n  color: var(--text-primary);\n\n  h1 {\n    font-size: 2.4rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 1.8rem;\n  }\n\n  h4 {\n    font-size: 1.4rem;\n  }\n"])))},8661:function(n,t,e){e.d(t,{_0:function(){return i},$B:function(){return o},EU:function(){return a},OS:function(){return u}});var r=e(4473).Z.injectEndpoints({endpoints:function(n){return{getMyCartList:n.query({query:function(){return{url:"cart"}},providesTags:["getMyCartList"]}),addToCart:n.mutation({query:function(n){return{url:"cart/add",method:"POST",body:n}},invalidatesTags:["getMyCartList"]}),removeFromCart:n.mutation({query:function(n){return{url:"cart/remove",method:"DELETE",body:n}},invalidatesTags:["getMyCartList"]}),removeAllFromCart:n.mutation({query:function(){return{url:"cart/remove/all",method:"DELETE"}},invalidatesTags:["getMyCartList"]})}}}),i=r.useGetMyCartListQuery,o=r.useAddToCartMutation,a=r.useRemoveFromCartMutation,u=r.useRemoveAllFromCartMutation},9768:function(n,t,e){e.d(t,{a2:function(){return i},gb:function(){return o},d4:function(){return a}});var r=e(4473).Z.injectEndpoints({endpoints:function(n){return{getMyFavouriteList:n.query({query:function(){return{url:"favourite"}},providesTags:["getMyFavouriteList"]}),addToFavouriteList:n.mutation({query:function(n){return{url:"favourite/add",method:"POST",body:n}},invalidatesTags:["getMyFavouriteList"]}),removeToFavouriteList:n.mutation({query:function(n){return{url:"favourite/remove",method:"DELETE",body:n}},invalidatesTags:["getMyFavouriteList"]})}}}),i=r.useGetMyFavouriteListQuery,o=r.useAddToFavouriteListMutation,a=r.useRemoveToFavouriteListMutation},9290:function(n,t,e){e.d(t,{Mb:function(){return r},S8:function(){return i},j:function(){return o}});var r=function(n){return n.user.authenticated},i=function(n){return n.user.userInfo},o=function(n){return n.user.currency}}}]);
//# sourceMappingURL=337.a7bf5962.chunk.js.map