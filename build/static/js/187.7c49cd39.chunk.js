"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[187],{2187:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,i,o,a,c,d,s=t(168),l=t(2791),u=t(4603),m=t(9439),p=t(3504),f=t(3400),h=t(383),x=t(7488),g=t(2978),v=t(554),b=t(5821),j=t(184),y=function(n){var e=n.cartItem,t=(0,l.useState)([]),r=(0,m.Z)(t,2),i=r[0],o=r[1],a=(0,g.I0)(),c=(0,g.v9)(v.zk);(0,l.useEffect)((function(){a((0,v.J3)())}),[a]);return(0,j.jsxs)(Z,{children:[(0,j.jsx)(w,{children:(0,j.jsx)(z,{children:(0,j.jsxs)("h2",{children:["Shopping Cart(",null===e||void 0===e?void 0:e.length,")"]})})}),e&&e.map((function(n){return(0,j.jsx)(w,{children:(0,j.jsxs)(k,{children:[(0,j.jsxs)("div",{className:"left_box",children:[(0,j.jsx)("div",{className:"select_product",children:(0,j.jsx)("input",{type:"checkbox",onChange:function(e){return function(n,e){n.target.checked?a((0,v.x$)({Item:e})):a((0,v.ab)({Item:e}))}(e,n)}})}),(0,j.jsx)("div",{className:"img_box",children:(0,j.jsx)("img",{src:n.product.images[0].url,alt:""})}),(0,j.jsxs)("div",{className:"dtails_box",children:[(0,j.jsx)("div",{className:"title",children:(0,j.jsx)(p.rU,{to:"/products/".concat(n.product._id),children:n.product.name})}),(0,j.jsx)("div",{className:"price",children:(0,j.jsxs)("span",{children:["BDT \u09f3",n.product.price]})}),(0,j.jsx)("div",{className:"shiping",children:(0,j.jsx)("span",{children:"Shipping: BDT \u09f35.55"})})]})]}),(0,j.jsxs)("div",{className:"cart_controller",children:[(0,j.jsxs)("div",{className:"delete",children:[(0,j.jsx)(f.Z,{onClick:function(){return function(n){a((0,b.pj)({product:n.product})),a((0,b.GR)({product:n.product})),a((0,v.ab)({Item:n}));var e=i&&i.map((function(e){return e.product._id!==n.product._id}));o(e)}(n)},"aria-label":"favourite",size:"large",children:(0,j.jsx)(x.Z,{fontSize:"large"})}),(0,j.jsx)(f.Z,{onClick:function(){return function(n){a((0,b.GR)({product:n.product})),a((0,v.ab)({Item:n}))}(n)},"aria-label":"delete",size:"large",color:"error",children:(0,j.jsx)(h.Z,{fontSize:"large"})})]}),(0,j.jsx)("div",{className:"quantity",children:(0,j.jsxs)("div",{className:"set_quantity",children:[(0,j.jsx)("button",{children:(0,j.jsx)("i",{className:"bi bi-dash",onClick:function(){return n.quantity>1&&(e=n,a((0,b._7)({product:e.product,quantity:e.quantity-1})),void(c&&c.map((function(n){if(n.product._id===e.product._id){var t={product:e.product,quantity:e.quantity-1};a((0,v.x$)({Item:t}))}return null}))));var e}})}),(0,j.jsx)("p",{children:n.quantity}),(0,j.jsx)("button",{children:(0,j.jsx)("i",{className:"bi bi-plus",onClick:function(){return n.quantity<10&&(e=n,a((0,b._7)({product:e.product,quantity:e.quantity+1})),void(c&&c.map((function(n){if(n.product._id===e.product._id){var t={product:e.product,quantity:e.quantity+1};a((0,v.x$)({Item:t}))}return null}))));var e}})})]})}),(0,j.jsxs)("div",{className:"notify",children:[10===n.quantity&&(0,j.jsx)("span",{children:"Maximum 10 Products"}),(0,j.jsxs)("p",{children:[" \u09f3 ",n.product.price*n.quantity," "]})]})]})]})},n.product._id)}))]})},Z=u.ZP.div(r||(r=(0,s.Z)(["\n  width: 100%;\n  /* min-width: 109rem; */\n  /* margin: 1rem; */\n  @media screen and (max-width: 768px) {\n    width: 100%;\n  }\n"]))),w=u.ZP.div(i||(i=(0,s.Z)(["\n  background: #fff;\n  padding: 1rem 0 1rem 2rem;\n  margin: 1rem 1rem 1rem 0;\n  border-radius: 0.5rem;\n\n  h2 {\n    font-size: 2.5rem;\n    font-weight: 600;\n  }\n"]))),z=u.ZP.div(o||(o=(0,s.Z)([""]))),k=u.ZP.div(a||(a=(0,s.Z)(['\n  display: flex;\n  justify-content: space-between;\n\n  .left_box {\n    display: flex;\n\n    .select_product {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .img_box {\n      padding: 0 1rem;\n      img {\n        width: 12rem;\n        height: 12rem;\n      }\n    }\n    .dtails_box {\n      .title {\n        a {\n          font-size: 1.4rem;\n        }\n      }\n      .price {\n        margin: 1rem 0;\n        span {\n          font-weight: 600;\n          font-size: 1.6rem;\n        }\n      }\n      .shiping {\n        span {\n          margin-right: 5px;\n          color: #2e9cc3;\n          font-weight: 500;\n          line-height: 18px;\n          font-size: 12px;\n        }\n      }\n    }\n  }\n  .cart_controller {\n    /* background: red; */\n    width: 12rem;\n    .delete {\n      display: flex;\n      justify-content: center;\n    }\n    .quantity {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0 1rem;\n      p {\n        font-family: "Roboto", "san-serif";\n        color: #757575;\n        word-wrap: break-word;\n        font-size: 1.4rem;\n        font-weight: 400;\n      }\n      .set_quantity {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        button {\n          width: 2.5rem;\n          height: 2.5rem;\n          border-radius: 50%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border: none;\n          cursor: pointer;\n          i {\n            font-size: 2rem;\n            color: #757575;\n          }\n        }\n        p {\n          padding: 0 1rem;\n          margin-bottom: 0;\n          color: #666;\n        }\n      }\n    }\n    .notify {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1rem;\n      span {\n        text-align: center;\n      }\n    }\n  }\n']))),_=t(9553),C=t(6151),q=t(6871),S=function(){var n=(0,l.useState)(0),e=(0,m.Z)(n,2),t=e[0],r=e[1],i=(0,q.s0)(),o=(0,g.v9)(v.zk);(0,l.useEffect)((function(){var n=o&&o.reduce((function(n,e){return n+e.product.price*e.quantity}),0);r(n)}),[o]);var a=(0,_.ZP)(C.Z)({backgroundColor:"tomato",width:"100%",color:"#fff",fontSize:"1.6rem",padding:"1rem 3rem",margin:"2rem 0 1rem","&:hover":{backgroundColor:"#A9333A"}});return(0,j.jsx)(N,{children:(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("h2",{children:"Cart Summary"}),(0,j.jsxs)("dl",{className:"sub_total",children:[(0,j.jsx)("dt",{children:"Product price"}),(0,j.jsxs)("dd",{children:[" $",t]})]}),(0,j.jsxs)(a,{onClick:function(){return o.length>0&&void i("/order")},variant:"contained",children:["BUY (",o.length,")"]})]})})},N=u.ZP.div(c||(c=(0,s.Z)(["\n  width: 25%;\n  max-width: 35rem;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n  }\n  .content {\n    background: #fff;\n    padding: 1rem 2rem;\n    margin: 1rem 0 1rem 1rem;\n    border-radius: 0.5rem;\n\n    h2 {\n      font-size: 2.5rem;\n      font-weight: 600;\n      margin-bottom: 2.4rem;\n    }\n    dd,\n    dt {\n      font-size: 1.4rem;\n      color: #000;\n      font-weight: 400;\n    }\n    .sub_total {\n      display: flex;\n      justify-content: space-between;\n    }\n    .shipping {\n      display: flex;\n      justify-content: space-between;\n    }\n    .total {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      dd,\n      dt {\n        font-size: 1.4rem;\n        color: #000;\n        font-weight: 600;\n      }\n      dd {\n        font-size: 2rem;\n      }\n    }\n    .hr {\n      border: 1px solid #f2f2f2;\n      margin: 2rem 0;\n    }\n    .buy_now {\n      width: 100%;\n      border: none;\n      background: tomato;\n      padding: 1rem 0;\n      border-radius: 0.5rem;\n      font-size: 1.6rem;\n      color: #fff;\n      cursor: pointer;\n      margin: 2rem 0 1rem;\n    }\n  }\n"]))),P=t(8802),R=t(8269),I=function(){var n=(0,g.v9)((function(n){return n.user})).cartItems;return(0,j.jsxs)(P.Z,{children:[(0,j.jsxs)(M,{children:[(0,j.jsx)(y,{cartItem:n}),(null===n||void 0===n?void 0:n.length)>0&&(0,j.jsx)(S,{})]}),(null===n||void 0===n?void 0:n.length)<1&&(0,j.jsx)(R.Z,{text:"Your cart is empty.",link:"/products",btnText:"Add Product"})]})},M=u.ZP.div(d||(d=(0,s.Z)(["\n  width: 100%;\n  max-width: 1440px;\n  background: transparent;\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 0;\n\n  @media screen and (max-width: 1440px) {\n    padding: 0 1rem;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"])))},8269:function(n,e,t){var r,i,o=t(168),a=(t(2791),t(6871)),c=t(4603),d=t(2651),s=t(184);e.Z=function(n){var e=n.text,t=n.link,r=n.btnText,i=(0,a.s0)();return(0,s.jsx)(l,{children:(0,s.jsxs)(u,{children:[(0,s.jsx)("h4",{children:e}),(0,s.jsx)(d.Z,{text:r,onClick:function(){i(t)}})]})})};var l=c.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50vh;\n"]))),u=c.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n\n  h4 {\n    font-size: 2rem;\n  }\n"])))},8802:function(n,e,t){var r,i=t(168),o=(t(2791),t(4603)),a=t(184);e.Z=function(n){var e=n.children;return(0,a.jsx)(c,{children:e})};var c=o.ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding: 0 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  @media screen and (max-width: 768px) {\n    padding: 0 2rem;\n  }\n  @media screen and (max-width: 576px) {\n    padding: 0 1rem;\n  }\n"])))},2651:function(n,e,t){var r,i=t(168),o=t(1413),a=t(5987),c=(t(2791),t(4603)),d=t(184),s=["text","children"];e.Z=function(n){var e=n.text,t=n.children,r=(0,a.Z)(n,s);return(0,d.jsxs)(l,(0,o.Z)((0,o.Z)({},r),{},{children:[(0,d.jsx)("span",{children:e})," ",t]}))};var l=c.ZP.button(r||(r=(0,i.Z)(["\n  border: none;\n  color: var(--text-primary);\n  background-color: tomato;\n  padding: 1rem 3rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #dd5a43;\n    color: #f1f1f1;\n  }\n"])))},383:function(n,e,t){var r=t(5318);e.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");e.Z=a},7488:function(n,e,t){var r=t(5318);e.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");e.Z=a},3400:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(4942),i=t(3366),o=t(7462),a=t(2791),c=t(8182),d=t(767),s=t(2065),l=t(9553),u=t(1046),m=t(3701),p=t(4036),f=t(5159);function h(n){return(0,f.Z)("MuiIconButton",n)}var x=(0,t(208).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),g=t(184),v=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,l.ZP)(m.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,"default"!==t.color&&e["color".concat((0,p.Z)(t.color))],t.edge&&e["edge".concat((0,p.Z)(t.edge))],e["size".concat((0,p.Z)(t.size))]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(n){var e=n.theme,t=n.ownerState;return(0,o.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,o.Z)({color:e.palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},(0,r.Z)({},"&.".concat(x.disabled),{backgroundColor:"transparent",color:e.palette.action.disabled}))})),j=a.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiIconButton"}),r=t.edge,a=void 0!==r&&r,s=t.children,l=t.className,m=t.color,f=void 0===m?"default":m,x=t.disabled,j=void 0!==x&&x,y=t.disableFocusRipple,Z=void 0!==y&&y,w=t.size,z=void 0===w?"medium":w,k=(0,i.Z)(t,v),_=(0,o.Z)({},t,{edge:a,color:f,disabled:j,disableFocusRipple:Z,size:z}),C=function(n){var e=n.classes,t=n.disabled,r=n.color,i=n.edge,o=n.size,a={root:["root",t&&"disabled","default"!==r&&"color".concat((0,p.Z)(r)),i&&"edge".concat((0,p.Z)(i)),"size".concat((0,p.Z)(o))]};return(0,d.Z)(a,h,e)}(_);return(0,g.jsx)(b,(0,o.Z)({className:(0,c.Z)(C.root,l),centerRipple:!0,focusRipple:!Z,disabled:j,ref:e,ownerState:_},k,{children:s}))}))},5987:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(3366);function i(n,e){if(null==n)return{};var t,i,o=(0,r.Z)(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}}}]);
//# sourceMappingURL=187.7c49cd39.chunk.js.map