"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[442],{7848:function(n,t,e){e.d(t,{Z:function(){return b}});var r,i,o,a=e(168),d=e(4603),u=e(9439),s=e(2791),c=e(8316),l=e(3400),v=e(3504),f=e(5014),m=e(5515),h=e(8361),x=e(1033),p=(e(554),e(5821),e(2978)),g=e(184),y=function(n){var t=n.product,e=n.quantity,r=(0,f.Z)(null===t||void 0===t?void 0:t._id).removeFromCartHandler,i=(0,m.Z)(null===t||void 0===t?void 0:t._id).addfavouriteItemFromCartHandler,o=(0,s.useState)(!1),a=(0,u.Z)(o,2),d=a[0],y=a[1],b=(0,s.useState)(0),w=(0,u.Z)(b,2),C=w[0],T=w[1],_=((0,p.I0)(),(0,f.Z)(null===t||void 0===t?void 0:t._id).addToCartHandler);(0,s.useEffect)((function(){e&&T(e)}),[e]);return(0,g.jsxs)(j,{children:[(0,g.jsxs)("div",{className:"left_content",children:[(0,g.jsx)("div",{className:"img_box",children:(0,g.jsx)("img",{src:t.images[0].url,alt:null===t||void 0===t?void 0:t.name})}),(0,g.jsxs)("div",{className:"dtails_box",children:[(0,g.jsx)(v.rU,{to:"/products/".concat(t._id),children:(0,g.jsx)(h.Z,{variant:"h3",text:null===t||void 0===t?void 0:t.name,style:{fontWeight:"500"}})}),(0,g.jsx)("div",{className:"price",children:(0,g.jsx)(x.Z,{price:null===t||void 0===t?void 0:t.price})}),(0,g.jsx)("div",{className:"rating",children:(0,g.jsx)(c.Z,{name:"half-rating-read",size:"large",value:null===t||void 0===t?void 0:t.avgRating,precision:.1,readOnly:!0})})]})]}),(0,g.jsxs)("div",{className:"right_content",children:[(0,g.jsxs)("div",{className:"controller_top",children:[(0,g.jsx)(l.Z,{onClick:i,"aria-label":"favourite",size:"large",children:(0,g.jsx)("i",{className:"bi bi-heart",style:{fontSize:"2rem"}})}),(0,g.jsx)(l.Z,{onClick:r,"aria-label":"delete",size:"large",color:"error",children:(0,g.jsx)("i",{className:"bi bi-trash",style:{fontSize:"2rem"}})})]}),(0,g.jsx)("div",{className:"controller_bottom",children:(0,g.jsxs)(Z,{children:[(0,g.jsxs)("div",{className:"set_quantity",children:[(0,g.jsx)("button",{title:"Decrease Quantity",onClick:function(){return _(e-1)},disabled:0===e,children:(0,g.jsx)("i",{className:"bi bi-dash"})}),(0,g.jsx)("div",{className:"textElement",children:d?(0,g.jsx)("form",{onSubmit:function(n){n.preventDefault(),_(C),y(!1)},children:(0,g.jsx)("input",{name:"quantity",type:"number",max:null===t||void 0===t?void 0:t.stock,min:1,value:C,onChange:function(n){return T(n.target.value)}})}):(0,g.jsx)("span",{title:"Double-click to set the quantity",onDoubleClick:function(){return y(!0)},children:e})}),(0,g.jsx)("button",{disabled:e>=(null===t||void 0===t?void 0:t.stock),title:"Increase Quantity",onClick:function(){return _(e+1)},children:(0,g.jsx)("i",{className:"bi bi-plus"})})]}),e>=(null===t||void 0===t?void 0:t.stock)&&(0,g.jsxs)("span",{children:["Maximum ",null===t||void 0===t?void 0:t.stock," Products"]})]})})]})]})},j=d.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  .left_content {\n    display: flex;\n    align-items: center;\n    .img_box {\n      padding: 0 1rem;\n      img {\n        width: 12rem;\n        height: 12rem;\n      }\n    }\n    .dtails_box {\n      .price {\n        margin: 1rem 0;\n        span {\n          font-weight: 600;\n          font-size: 1.6rem;\n        }\n      }\n      .rating {\n      }\n    }\n  }\n\n  .right_content {\n    .controller_top {\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      gap: 1rem;\n    }\n    .controller_bottom {\n    }\n  }\n"]))),Z=d.ZP.div(i||(i=(0,a.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-primary);\n\n  .set_quantity {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 1rem;\n\n    button {\n      width: 3rem;\n      height: 3rem;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border: none;\n      background-color: #dadada;\n      cursor: pointer;\n      i {\n        font-size: 2rem;\n        color: var(--text-primary);\n        &:hover {\n          color: tomato;\n        }\n      }\n    }\n\n    .textElement {\n      height: 3rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      form {\n        box-shadow: var(--shadow-3);\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        user-select: none;\n\n        input {\n          width: 100%;\n          height: 100%;\n          text-align: center;\n          max-width: 8rem;\n          border: none;\n          outline: none;\n        }\n      }\n\n      span {\n        padding: 0 1rem;\n      }\n    }\n  }\n"]))),b=function(n){var t=n.cartItem;return(0,g.jsx)(w,{children:t&&t.map((function(n){var t;return(0,g.jsx)(y,{product:n.product,quantity:n.quantity},null===n||void 0===n||null===(t=n.product)||void 0===t?void 0:t._id)}))})},w=d.ZP.div(o||(o=(0,a.Z)(["\n  flex: 3;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n"])))},8087:function(n,t,e){var r,i=e(168),o=e(4603),a=e(8361),d=e(5928),u=e(1033),s=e(184);t.Z=function(n){var t=n.title,e=n.variant,r=(0,d.Z)(),i=r.productPrice,o=r.shippingCost,l=r.tax,v=r.total;return(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)(a.Z,{variant:e,text:t,style:{marginBottom:"1rem"}}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Product price"}),(0,s.jsx)("dd",{children:(0,s.jsx)(u.Z,{price:i})})]}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Shipping cost"}),(0,s.jsx)("dd",{children:(0,s.jsx)(u.Z,{price:o})})]}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Tax"}),(0,s.jsx)("dd",{children:(0,s.jsx)(u.Z,{price:l})})]}),(0,s.jsx)("div",{className:"hr"}),(0,s.jsxs)("dl",{className:"total",children:[(0,s.jsx)("dt",{children:"Total"}),(0,s.jsx)("dd",{children:(0,s.jsx)(u.Z,{price:v})})]})]})})};var c=o.ZP.div(r||(r=(0,i.Z)(["\n  .content {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 2rem;\n    box-shadow: var(--shadow-3);\n    border-radius: 0.5rem;\n\n    dl {\n      display: flex;\n      justify-content: space-between;\n      gap: 5rem;\n    }\n\n    dd,\n    dt {\n      font-size: 1.4rem;\n      color: var(--text-primary);\n      font-weight: 500;\n    }\n\n    .total {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      dd,\n      dt {\n        font-weight: 600;\n      }\n      dd {\n        font-size: 2rem;\n      }\n    }\n\n    .hr {\n      box-shadow: var(--shadow-3);\n      width: 100%;\n      margin: 1rem 0;\n    }\n\n    .buy_now {\n      width: 100%;\n      border: none;\n      background: tomato;\n      padding: 1rem 0;\n      border-radius: 0.5rem;\n      font-size: 1.6rem;\n      color: #fff;\n      cursor: pointer;\n      margin: 2rem 0 1rem;\n    }\n  }\n"])))},8269:function(n,t,e){var r,i,o=e(168),a=e(1413),d=(e(2791),e(6871)),u=e(4603),s=e(2651),c=e(8361),l=e(184);t.Z=function(n){var t=n.text,e=n.link,r=n.btnText,i=n.style,o=(0,d.s0)();return(0,l.jsx)(v,{style:(0,a.Z)({},i),children:(0,l.jsxs)(f,{children:[(0,l.jsx)(c.Z,{variant:"h1",text:t}),(0,l.jsx)(s.Z,{text:r,onClick:function(){o(e)}})]})})};var v=u.ZP.div(r||(r=(0,o.Z)(["\n  width: 100%;\n  height: 50vh;\n"]))),f=u.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  height: 100%;\n"])))},8802:function(n,t,e){var r,i=e(168),o=(e(2791),e(4603)),a=e(184);t.Z=function(n){var t=n.children;return(0,a.jsx)(d,{children:t})};var d=o.ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding: 0 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  @media screen and (max-width: 768px) {\n    padding: 0 2rem;\n  }\n  @media screen and (max-width: 576px) {\n    padding: 0 1rem;\n  }\n"])))},2874:function(n,t,e){e.d(t,{i:function(){return r}});var r=[{name:"USD",icon:"$"},{name:"BDT",icon:"\u09f3"},{name:"INR",icon:"\u20b9"}]},5928:function(n,t,e){var r=e(9439),i=e(2791),o=e(8661),a=e(9658);t.Z=function(){var n=(0,i.useState)(0),t=(0,r.Z)(n,2),e=t[0],d=t[1],u=(0,i.useState)(0),s=(0,r.Z)(u,2),c=s[0],l=s[1],v=(0,i.useState)(0),f=(0,r.Z)(v,2),m=f[0],h=f[1],x=(0,i.useState)(0),p=(0,r.Z)(x,2),g=p[0],y=p[1],j=(0,o._0)().data,Z=null===j||void 0===j?void 0:j.carts;return(0,i.useEffect)((function(){var n=null===Z||void 0===Z?void 0:Z.reduce((function(n,t){return n+t.product.price*t.quantity}),0),t=Math.round(n*(a.rW.shipping/100)),e=Math.round(n*(a.rW.tax/100));d(n),l(t),h(e),y(n+t+e)}),[Z]),{productPrice:e,shippingCost:c,tax:m,total:g}}},5014:function(n,t,e){var r=e(9439),i=e(2791),o=e(8661),a=e(6960),d=e(6871),u=e(9768);t.Z=function(n){var t=(0,i.useState)(0),e=(0,r.Z)(t,2),s=e[0],c=e[1],l=(0,d.s0)(),v=(0,o._0)(),f=v.isSuccess,m=v.data;(0,i.useEffect)((function(){if(f){var t,e=null===m||void 0===m||null===(t=m.carts)||void 0===t?void 0:t.find((function(t){var e;return(null===t||void 0===t||null===(e=t.product)||void 0===e?void 0:e._id)===n}));c(e?null===e||void 0===e?void 0:e.quantity:0)}}),[f,null===m||void 0===m?void 0:m.carts,n]);var h=(0,o.$B)(),x=(0,r.Z)(h,1)[0],p=(0,o.EU)(),g=(0,r.Z)(p,1)[0],y=(0,u.d4)(),j=(0,r.Z)(y,1)[0];return{quantity:s,addToCartHandler:function(t){0===t?g({productId:n}).unwrap().then((function(n){a.Am.info(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;a.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)})):x({productId:n,quantity:t}).unwrap().then((function(n){a.Am.success(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;a.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message),401===(null===n||void 0===n?void 0:n.status)&&setTimeout((function(){l("/login"),window.scrollTo(0,0)}),2e3)}))},addToCartFromFavouriteHandler:function(){x({productId:n,quantity:1}).unwrap().then((function(t){a.Am.success(null===t||void 0===t?void 0:t.message),j({productId:n})})).catch((function(n){var t;a.Am.error(null===(t=n.data)||void 0===t?void 0:t.message)}))},removeFromCartHandler:function(){g({productId:n}).unwrap().then((function(n){a.Am.info(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;a.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)}))}}}},5515:function(n,t,e){var r=e(9439),i=e(2791),o=e(9768),a=e(8661),d=e(6960),u=e(6871);t.Z=function(n){var t=(0,i.useState)(!1),e=(0,r.Z)(t,2),s=e[0],c=e[1],l=(0,u.s0)(),v=(0,o.gb)(),f=(0,r.Z)(v,1)[0],m=(0,o.d4)(),h=(0,r.Z)(m,1)[0],x=(0,a.EU)(),p=(0,r.Z)(x,1)[0],g=(0,o.a2)(),y=g.isSuccess,j=g.data,Z=g.isError;(0,i.useEffect)((function(){if(y){var t=null===j||void 0===j?void 0:j.favourites.find((function(t){return(null===t||void 0===t?void 0:t._id)===n}));c(!!t)}Z&&c(!1)}),[y,Z,null===j||void 0===j?void 0:j.favourites,n]);return{favourite:s,addfavouriteItemHandler:function(){!s&&f({productId:n}).unwrap().then((function(n){d.Am.success(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;d.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message),401===(null===n||void 0===n?void 0:n.status)&&setTimeout((function(){l("/login"),window.scrollTo(0,0)}),2e3)}))},addfavouriteItemFromCartHandler:function(){!s&&f({productId:n}).unwrap().then((function(t){d.Am.success(null===t||void 0===t?void 0:t.message),p({productId:n})})).catch((function(n){var t;d.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)}))},removefavouriteHandler:function(){s&&h({productId:n}).unwrap().then((function(n){d.Am.info(null===n||void 0===n?void 0:n.message)})).catch((function(n){var t;d.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)}))}}}},9993:function(n,t,e){var r,i=e(168),o=e(1413),a=(e(2791),e(4603)),d=e(184);t.Z=function(n){var t=n.text,e=void 0===t?"There was an error!":t,r=n.style;return(0,d.jsx)(u,{style:(0,o.Z)({color:"red"},r),children:e})};var u=a.ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n"])))},2651:function(n,t,e){var r,i=e(168),o=e(1413),a=e(5987),d=(e(2791),e(4603)),u=e(184),s=["text","children"];t.Z=function(n){var t=n.text,e=n.children,r=(0,a.Z)(n,s);return(0,u.jsxs)(c,(0,o.Z)((0,o.Z)({},r),{},{children:[(0,u.jsx)("span",{children:t})," ",e]}))};var c=d.ZP.button(r||(r=(0,i.Z)(["\n  border: none;\n  color: var(--text-primary);\n  background-color: tomato;\n  padding: 1rem 3rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #dd5a43;\n    color: #f1f1f1;\n  }\n  &:disabled {\n    background-color: #dd5a43d3;\n    cursor: not-allowed;\n    color: var(--text-primary);\n  }\n"])))},1033:function(n,t,e){e.d(t,{Z:function(){return h}});var r=e(9439),i=e(2791),o=e(2978),a=e(9290),d=e(5861),u=e(7757),s=e.n(u),c=e(4418),l=function(){var n=(0,d.Z)(s().mark((function n(t){var e,r,i,o,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.amount,r=t.from,i=t.to,"c6ff310e447c4b9fb19f86d026d27056",o=new c.dS("OpenExchangeRates","c6ff310e447c4b9fb19f86d026d27056"),n.next=5,o.convert(e,r,i);case 5:return a=n.sent,n.abrupt("return",a.toFixed(2));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=l,f=e(2874),m=e(184),h=function(n){var t=n.price,e=(0,i.useState)(null),d=(0,r.Z)(e,2),u=d[0],s=d[1],c=(0,o.v9)(a.j);(0,i.useEffect)((function(){v({amount:t,from:"USD",to:c}).then((function(n){s(n)}))}),[c,t]);var l=f.i.find((function(n){return n.name===c}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{children:[" ",null===l||void 0===l?void 0:l.icon]}),(0,m.jsxs)("span",{children:[" ",u]})]})}},4489:function(n,t,e){var r=e(9553),i=e(6151),o=(0,r.ZP)(i.Z)({backgroundColor:"tomato",width:"100%",color:"var(--text-primary)",fontFamily:"Poppins",fontSize:"1.6rem",padding:"1rem 3rem",margin:"2rem 0 1rem","&:hover":{backgroundColor:"#A9333A"}});t.Z=o},8361:function(n,t,e){var r,i=e(168),o=(e(2791),e(4603)),a=e(184);t.Z=function(n){var t=n.variant,e=void 0===t?"h1":t,r=n.text,i=n.style;return(0,a.jsxs)(d,{children:["h2"===e&&(0,a.jsx)("h2",{style:i,children:r}),"h3"===e&&(0,a.jsx)("h3",{style:i,children:r}),"h1"===e&&(0,a.jsx)("h1",{style:i,children:r}),"h4"===e&&(0,a.jsx)("h4",{style:i,children:r})]})};var d=o.ZP.div(r||(r=(0,i.Z)(["\n  color: var(--text-primary);\n\n  h1 {\n    font-size: 2.4rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 1.8rem;\n  }\n\n  h4 {\n    font-size: 1.4rem;\n  }\n"])))},8661:function(n,t,e){e.d(t,{_0:function(){return i},$B:function(){return o},EU:function(){return a},OS:function(){return d}});var r=e(4473).Z.injectEndpoints({endpoints:function(n){return{getMyCartList:n.query({query:function(){return{url:"cart"}},providesTags:["getMyCartList"]}),addToCart:n.mutation({query:function(n){return{url:"cart/add",method:"POST",body:n}},invalidatesTags:["getMyCartList"]}),removeFromCart:n.mutation({query:function(n){return{url:"cart/remove",method:"DELETE",body:n}},invalidatesTags:["getMyCartList"]}),removeAllFromCart:n.mutation({query:function(){return{url:"cart/remove/all",method:"DELETE"}},invalidatesTags:["getMyCartList"]})}}}),i=r.useGetMyCartListQuery,o=r.useAddToCartMutation,a=r.useRemoveFromCartMutation,d=r.useRemoveAllFromCartMutation},9768:function(n,t,e){e.d(t,{a2:function(){return i},gb:function(){return o},d4:function(){return a}});var r=e(4473).Z.injectEndpoints({endpoints:function(n){return{getMyFavouriteList:n.query({query:function(){return{url:"favourite"}},providesTags:["getMyFavouriteList"]}),addToFavouriteList:n.mutation({query:function(n){return{url:"favourite/add",method:"POST",body:n}},invalidatesTags:["getMyFavouriteList"]}),removeToFavouriteList:n.mutation({query:function(n){return{url:"favourite/remove",method:"DELETE",body:n}},invalidatesTags:["getMyFavouriteList"]})}}}),i=r.useGetMyFavouriteListQuery,o=r.useAddToFavouriteListMutation,a=r.useRemoveToFavouriteListMutation},9290:function(n,t,e){e.d(t,{Mb:function(){return r},S8:function(){return i},j:function(){return o}});var r=function(n){return n.user.authenticated},i=function(n){return n.user.userInfo},o=function(n){return n.user.currency}}}]);
//# sourceMappingURL=442.fd8a4d5a.chunk.js.map