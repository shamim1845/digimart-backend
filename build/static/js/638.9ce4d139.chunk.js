"use strict";(self.webpackChunkdigimart_frontend=self.webpackChunkdigimart_frontend||[]).push([[638],{4638:function(n,e,t){t.r(e),t.d(e,{default:function(){return ce}});var i,r,o,a,s,l,c,d,u,m,h,g,f,x,v,p,j,y,w,b,Z,k,C,z,L,P,M,E,_,T,N,S,A=t(2791),F=t(168),q=t(8789),H=t(4165),R=t(5861),B=t(4569),D=t.n(B),O=t(2978),I=t(7689),V=t(1087),U=t(7352),G=t(184),Q=function(){var n=(0,I.s0)(),e=(0,O.v9)((function(n){return n.user})).authenticated,t=function(){var e=(0,R.Z)((0,H.Z)().mark((function e(){var t;return(0,H.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().get("/api/v1/logout");case 2:200===(t=e.sent).status&&(U.Am.success(t.data.message),setTimeout((function(){n("/"),window.location.reload()}),3e3));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,G.jsxs)(Y,{children:[(0,G.jsx)("img",{src:"/images/icons/person-fill.svg",alt:"Register/login Avatar"}),e?(0,G.jsx)("button",{className:"logout_button",onClick:t,children:"Log Out"}):(0,G.jsxs)("div",{className:"register_login",children:[(0,G.jsx)(V.OL,{className:function(n){return n.isActive?"activeNavLink":void 0},to:"/register",children:"Register"}),"/",(0,G.jsx)(V.OL,{className:function(n){return n.isActive?"activeNavLink":void 0},to:"/login",children:"Login"})]})]})},Y=q.ZP.div(i||(i=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  padding: 1rem 0;\n  img {\n    margin-right: 0.5rem;\n  }\n  .logout_button {\n    width: 7rem;\n    border: none;\n    cursor: pointer;\n    border-radius: 2px;\n    font-size: 1.3rem;\n    &:hover {\n      color: tomato;\n    }\n  }\n  .register_login {\n    margin-bottom: 0;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n\n    & a {\n      font-size: 1.3rem;\n      &:hover {\n        color: tomato;\n        @media screen and (max-width: 768px) {\n          color: #fff;\n        }\n      }\n    }\n\n    .activeNavLink {\n      color: tomato;\n      @media screen and (max-width: 768px) {\n        color: #fff;\n      }\n    }\n  }\n"]))),W=t(5821),X=t(2874),$=function(){var n=(0,O.I0)();return(0,G.jsx)(J,{children:(0,G.jsx)("select",{onChange:function(e){n((0,W.yo)(e.target.value))},children:X.i.map((function(n){return(0,G.jsx)("option",{value:n.name,children:n.name},n.name)}))})})},J=q.ZP.div(r||(r=(0,F.Z)(["\n  select {\n    cursor: pointer;\n    font-size: 1.3rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]))),K=function(){return(0,G.jsx)(nn,{children:(0,G.jsxs)(en,{children:[(0,G.jsxs)("div",{className:"left",children:[(0,G.jsxs)("div",{children:[(0,G.jsx)("img",{src:"/images/icons/email-envelop.svg",alt:"envelop"}),(0,G.jsx)("span",{children:"Email: support@digimart.com"})]}),(0,G.jsxs)("div",{children:[(0,G.jsx)("img",{src:"/images/icons/tag-fill.svg",alt:"Tag"}),(0,G.jsx)("span",{children:"Today Deals"})]})]}),(0,G.jsxs)("div",{className:"right",children:[(0,G.jsx)(Q,{}),(0,G.jsx)($,{})]})]})})},nn=q.ZP.div(o||(o=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 0 3rem;\n  border-top: 5px solid tomato;\n  border-bottom: 1px solid #e4e9eb;\n  background-color: #fff;\n"]))),en=q.ZP.div(a||(a=(0,F.Z)(["\n  width: 100%;\n  max-width: 1440px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #666;\n\n  .left {\n    height: 100%;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 2rem;\n    flex: 2;\n\n    div {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      img {\n        margin-right: 0.5rem;\n      }\n      span {\n        margin-bottom: 0;\n      }\n    }\n  }\n  .right {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5rem;\n  }\n"]))),tn=t(2805),rn=[{name:"Home",link:"/"},{name:"Products",link:"/products"}],on=function(){return(0,G.jsx)(an,{children:(0,G.jsxs)(sn,{children:[(0,G.jsx)(ln,{children:(0,G.jsx)(tn.Z,{variant:"dark"})}),(0,G.jsx)(cn,{children:(0,G.jsx)("ul",{className:"menu",children:rn.map((function(n){return(0,G.jsx)("li",{children:(0,G.jsx)(V.OL,{className:function(n){return n.isActive?"active":""},to:n.link,children:n.name})},n.link)}))})})]})})},an=q.ZP.div(s||(s=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 0 3rem;\n"]))),sn=q.ZP.div(l||(l=(0,F.Z)(["\n  height: 5rem;\n  width: 100%;\n  max-width: 1440px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),ln=q.ZP.div(c||(c=(0,F.Z)(["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  border-right: 1px solid #e4e9eb;\n"]))),cn=q.ZP.div(d||(d=(0,F.Z)(["\n  flex: 1;\n  height: 100%;\n\n  .menu {\n    height: 100%;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    margin: 0;\n\n    li {\n      padding: 0 1rem;\n      letter-spacing: 1px;\n      font-weight: 600;\n      a {\n        text-transform: capitalize;\n      }\n    }\n  }\n"]))),dn=t(9439),un=t(2338),mn=t(3433),hn=t(1539),gn=t(3616),fn=t(9993),xn=function(n){var e,t,i=n.setActiveDept,r=n.categoryBtnRef,o=(0,A.useState)([]),a=(0,dn.Z)(o,2),s=a[0],l=a[1],c=(0,A.useRef)(),d=(0,hn.QX)(),u=d.isFetching,m=d.data,h=d.isSuccess,g=d.isError,f=d.error;return(0,A.useEffect)((function(){function n(n){var e,t;null!==c&&void 0!==c&&null!==(e=c.current)&&void 0!==e&&e.contains(n.target)||null!==r&&void 0!==r&&null!==(t=r.current)&&void 0!==t&&t.contains(n.target)||i(!1)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[i,r]),(0,G.jsxs)(pn,{ref:c,children:[u&&(0,G.jsx)("div",{style:{fontSize:"1.3rem",padding:"2rem"},children:"Fetching..."}),g&&(0,G.jsx)(G.Fragment,{children:404===f.status?(0,G.jsx)("div",{style:{fontSize:"1.3rem",padding:"2rem"},children:null===f||void 0===f||null===(e=f.data)||void 0===e?void 0:e.message}):(0,G.jsx)(fn.Z,{text:null===f||void 0===f?void 0:f.message,style:{fontSize:"1.3rem",padding:"2rem"}})}),h&&(null===m||void 0===m||null===(t=m.category)||void 0===t?void 0:t.length)>0&&(0,G.jsx)(vn,{categories:m.category,setChildCategories:l,depth:0}),(null===s||void 0===s?void 0:s.length)>0&&s.map((function(n,e){var t=e+1;return(0,G.jsx)(vn,{categories:n,setChildCategories:l,depth:t},t)}))]})},vn=function(n){var e=n.categories,t=n.setChildCategories,i=n.depth,r=(0,A.useState)(""),o=(0,dn.Z)(r,2),a=o[0],s=o[1],l=(0,O.I0)(),c=(0,I.s0)();return(0,G.jsx)(jn,{children:(0,G.jsx)("ul",{children:e.map((function(n){return(0,G.jsxs)("li",{onClick:function(){return e=n.slug,l((0,gn.i8)(e)),void c("/products");var e},onMouseEnter:function(){return e=n.children,r=n._id,t((function(n){var t=(0,mn.Z)(n);return t=t.slice(0,i),null!==e&&(t[i]=e),t})),void s(r);var e,r},children:[(0,G.jsx)("span",{children:n.name}),n._id===a&&null!==n.children&&(0,G.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"tomato",className:"bi bi-arrow-right-short",viewBox:"0 0 16 16",children:(0,G.jsx)("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"})})]},n._id)}))})})},pn=q.ZP.div(u||(u=(0,F.Z)(["\n  position: absolute;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  left: 0;\n  top: 7rem;\n  z-index: 100;\n  display: flex;\n  border-radius: 0.5rem;\n  width: 100%;\n  overflow-x: auto;\n"]))),jn=q.ZP.div(m||(m=(0,F.Z)(["\n  display: flex;\n  border-left: 1px solid #e4e9eb;\n  min-width: 18rem;\n  max-width: max-content;\n  padding: 0.5rem 1rem;\n\n  &:first-child {\n    border: none;\n  }\n\n  ul {\n    padding: 0;\n    line-height: 1.7;\n    & li {\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      position: relative;\n      font-size: 1.3rem;\n      font-weight: 400;\n      transition: all 10ms;\n      cursor: pointer;\n      &:hover {\n        color: tomato;\n      }\n      svg {\n        margin-left: 1rem;\n      }\n    }\n  }\n"]))),yn=t(4294),wn=t(724),bn=t(1530),Zn=t(5026),kn=function(){var n=(0,A.useState)(""),e=(0,dn.Z)(n,2),t=e[0],i=e[1],r=(0,O.I0)(),o=(0,I.s0)(),a=(0,wn.ZP)(yn.Z)({minWidth:"100%",backgroundColor:"tomato",padding:"1rem",transition:"all 0.5s ease-in-out","&:hover":{backgroundColor:"#ff6347c1",transform:"scale(1.2)"}}),s=(0,O.v9)(bn.GI);(0,A.useEffect)((function(){i(s)}),[s]);var l=function(n){r((0,gn.c9)(n)),o("/products")},c=(0,Zn.Z)(l);return(0,G.jsx)(Cn,{children:(0,G.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t&&l(t)},children:[(0,G.jsx)("input",{onChange:function(n){i(n.target.value),c(n.target.value)},value:t,type:"text",placeholder:"What are you looking for?"}),t&&(0,G.jsx)("div",{className:"search_clear",onClick:function(){r((0,gn.c9)(""))},children:(0,G.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:(0,G.jsx)("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})})}),(0,G.jsx)("div",{className:"search_button",children:(0,G.jsx)(a,{type:"submit",children:(0,G.jsx)("img",{src:"/images/icons/search.svg",alt:"search icon"})})})]})})},Cn=q.ZP.div(h||(h=(0,F.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n\n  form {\n    width: 100% !important;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 0;\n\n    input {\n      flex: 1;\n      height: 100%;\n      width: 6rem;\n      border: none;\n      padding-left: 1rem;\n      border-radius: 0.5rem 0 0 0.5rem;\n      font-size: 1.4rem;\n      &::placeholder {\n        font-size: 1.4rem;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n    .search_clear {\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0 1rem;\n      cursor: pointer;\n      &:hover {\n        svg {\n          color: red;\n        }\n      }\n    }\n    .search_button {\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0 0.4rem;\n    }\n  }\n"]))),zn=t(9290),Ln=t(1716),Pn=t(9768),Mn=t(8661),En=function(){var n,e,t=(0,A.useState)(!1),i=(0,dn.Z)(t,2),r=i[0],o=i[1],a=(0,A.useRef)(null),s=(0,Ln.Z)(),l=s.scrolling,c=s.lastScrollY,d=(0,O.v9)(zn.S8),u=(0,O.v9)(zn.Mb),m=(0,Pn.a2)().data,h=(0,Mn._0)().data;return(0,G.jsx)(_n,{show:"top"===l&&c>700,children:(0,G.jsxs)(Tn,{children:[(0,G.jsx)(Nn,{children:(0,G.jsxs)(Sn,{ref:a,onClick:function(){o((function(n){return!n}))},title:"Categories",children:[(0,G.jsx)("img",{src:"/images/icons/menu-down.svg",alt:""}),(0,G.jsx)("h4",{children:"ALL CATEGORIES"})]})}),(0,G.jsx)(An,{children:(0,G.jsx)(kn,{})}),(0,G.jsxs)(Fn,{children:[(0,G.jsx)(V.rU,{to:"/account/myprofile",children:(0,G.jsx)("div",{className:"button",children:(0,G.jsx)("button",{title:"Account",children:(0,G.jsx)("img",{src:"/images/icons/person.svg",alt:""})})})}),(0,G.jsx)(V.rU,{to:"/favourite",children:(0,G.jsx)("div",{className:"button",children:(0,G.jsxs)("button",{title:"Favourite",children:[(0,G.jsx)("img",{src:"/images/icons/favourite.svg",alt:""}),(0,G.jsx)("span",{children:null===m||void 0===m||null===(n=m.favourites)||void 0===n?void 0:n.length})]})})}),(0,G.jsx)(V.rU,{to:"/cart",children:(0,G.jsx)("div",{className:"button",children:(0,G.jsxs)("button",{title:"Cart",children:[(0,G.jsx)("img",{src:"/images/icons/cart.svg",alt:""}),(0,G.jsx)("span",{children:null===h||void 0===h||null===(e=h.carts)||void 0===e?void 0:e.length})]})})}),u&&"admin"===d.role&&(0,G.jsx)(V.rU,{to:"/admin/dashboard",children:(0,G.jsx)("div",{className:"button",children:(0,G.jsx)("button",{title:"Dashboard",children:(0,G.jsx)(un.Z,{color:"info",fontSize:"large"})})})})]}),r&&(0,G.jsx)(xn,{setActiveDept:o,categoryBtnRef:a})]})})},_n=q.ZP.div(g||(g=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  background-color: tomato;\n  width: 100%;\n  padding: 0 3rem;\n  z-index: 100;\n  transition: position 0.5s ease-in-out;\n  position: ",";\n  top: 0;\n"])),(function(n){return n.show?"sticky":""})),Tn=q.ZP.div(f||(f=(0,F.Z)(["\n  width: 100%;\n  height: 7rem;\n  max-width: 1440px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1.5rem;\n  position: relative;\n"]))),Nn=q.ZP.div(x||(x=(0,F.Z)([""]))),Sn=q.ZP.div(v||(v=(0,F.Z)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex: 2;\n  background-color: #fff;\n  height: 4.5rem;\n  border-radius: 0.5rem;\n  min-width: 18rem;\n\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n\n  h4 {\n    color: tomato;\n    margin-bottom: 0px;\n    font-weight: 600;\n  }\n"]))),An=q.ZP.div(p||(p=(0,F.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: auto;\n  background-color: #fff;\n  height: 4.5rem;\n  margin: 0 2rem;\n  border-radius: 0.5rem;\n"]))),Fn=q.ZP.div(j||(j=(0,F.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n\n  .button {\n    & button {\n      cursor: pointer;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: #fff;\n      border: none;\n      height: 4.5rem;\n      width: 4.5rem;\n      border-radius: 0.5rem;\n      position: relative;\n\n      &:hover {\n        box-shadow: rgba(255, 155, 155, 0.3) 0px -50px 36px -28px inset;\n      }\n\n      & img {\n        width: 2rem;\n      }\n\n      & span {\n        position: absolute;\n        top: 0;\n        right: 0.3rem;\n        font-size: 1.3rem;\n      }\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),qn=function(){var n,e,t=(0,O.v9)((function(n){return n.user.userInfo})).role,i=(0,O.v9)((function(n){return n.user})).authenticated,r=(0,Pn.a2)().data,o=(0,Mn._0)().data;return(0,G.jsxs)(Hn,{children:[(0,G.jsx)(Rn,{children:(0,G.jsx)(V.OL,{to:"/",children:(0,G.jsxs)(Dn,{children:[(0,G.jsx)("img",{src:"/images/icons/home.svg",alt:"home icon"}),(0,G.jsx)("span",{children:"Home"})]})})}),(0,G.jsxs)(Bn,{children:[(0,G.jsx)(V.OL,{to:"/products",children:(0,G.jsxs)(Dn,{children:[(0,G.jsx)("img",{src:"/images/icons/product.svg",alt:"product icon"}),(0,G.jsx)("span",{children:"Products"})]})}),(0,G.jsx)(V.OL,{to:"/favourite",children:(0,G.jsxs)(Dn,{children:[(0,G.jsx)("img",{src:"/images/icons/favourite.svg",alt:"favourite icon"}),(0,G.jsx)("span",{children:"Favourite"}),(0,G.jsx)("span",{className:"badge",children:null===r||void 0===r||null===(n=r.favourites)||void 0===n?void 0:n.length})]})}),(0,G.jsx)(V.OL,{to:"/cart",children:(0,G.jsxs)(Dn,{children:[(0,G.jsx)("img",{src:"/images/icons/cart.svg",alt:"cart icon"}),(0,G.jsx)("span",{children:"Cart"}),(0,G.jsx)("span",{className:"badge",children:null===o||void 0===o||null===(e=o.carts)||void 0===e?void 0:e.length})]})}),(0,G.jsx)(V.OL,{to:"/account/myprofile",children:(0,G.jsxs)(Dn,{children:[(0,G.jsx)("img",{src:"/images/icons/person.svg",alt:"account icon"}),(0,G.jsx)("span",{children:"Account"})]})}),i&&"admin"===t&&(0,G.jsx)(V.OL,{to:"/admin/dashboard",children:(0,G.jsxs)(Dn,{children:[(0,G.jsx)(un.Z,{color:"info",fontSize:"large"}),(0,G.jsx)("span",{children:"Dashboard"})]})})]})]})},Hn=q.ZP.div(y||(y=(0,F.Z)(["\n  width: 100%;\n  background-color: aliceblue;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n  z-index: 1000;\n\n  @media screen and (max-width: 576px) {\n    padding: 0 1rem;\n  }\n"]))),Rn=q.ZP.div(w||(w=(0,F.Z)([""]))),Bn=q.ZP.div(b||(b=(0,F.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n"]))),Dn=q.ZP.button(Z||(Z=(0,F.Z)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  height: 4.5rem;\n  min-width: 4.5rem;\n  padding-top: 1rem;\n  position: relative;\n  &:hover {\n    box-shadow: rgba(255, 155, 155, 0.3) 0px -50px 36px -28px inset;\n  }\n  & img {\n    width: 2rem;\n  }\n  span {\n    font-size: 1.1rem;\n  }\n  .badge {\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 1.2rem;\n    font-weight: 600;\n  }\n"]))),On=t(552),In=t(4480),Vn=function(n){var e=n.sideBar,t=n.setSideBar,i=(0,A.useRef)(null);return(0,On.Z)(i,t),(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(Un,{sideBar:e,ref:i,children:[(0,G.jsxs)(Gn,{children:[(0,G.jsx)(tn.Z,{primaryColor:"#000",secondaryColor:"#fff"}),(0,G.jsx)(Qn,{onClick:function(){return t(!1)},children:(0,G.jsx)("i",{className:"bi bi-x"})})]}),(0,G.jsx)(Yn,{children:(0,G.jsxs)(Wn,{children:[(0,G.jsx)("h4",{children:"Browse All Categories"}),(0,G.jsx)(In.Z,{setSidebar:t})]})})]})})},Un=q.ZP.div(k||(k=(0,F.Z)(["\n  height: 100vh;\n  width: 100%;\n  max-width: 30rem;\n  transition: all 0.3s ease-in-out;\n  position: fixed;\n  left: ",";\n  z-index: 10000;\n"])),(function(n){return n.sideBar?"0":"-30rem"})),Gn=q.ZP.div(C||(C=(0,F.Z)(["\n  height: 5.5rem;\n  background-color: tomato;\n  padding-left: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Qn=q.ZP.div(z||(z=(0,F.Z)(["\n  margin-right: 1rem;\n  i {\n    font-size: 3.5rem;\n    color: #000;\n    cursor: pointer;\n    transition: all 250ms;\n    &:hover {\n      color: #fff;\n    }\n  }\n"]))),Yn=q.ZP.div(L||(L=(0,F.Z)(["\n  background-color: aliceblue;\n  padding: 2rem;\n  height: calc(100vh - 5.5rem);\n  overflow-y: auto;\n\n  ::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: tomato;\n  }\n"]))),Wn=q.ZP.div(P||(P=(0,F.Z)(["\n  h4 {\n    font-size: 1.6rem;\n    margin-bottom: 1rem;\n  }\n"]))),Xn=function(){var n=(0,A.useState)(!1),e=(0,dn.Z)(n,2),t=e[0],i=e[1],r=(0,Ln.Z)(),o=r.scrolling,a=r.lastScrollY;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Vn,{sideBar:t,setSideBar:i}),(0,G.jsxs)($n,{children:[(0,G.jsxs)(Jn,{children:[(0,G.jsx)("img",{onClick:function(){i((function(n){return!n}))},src:"/images/icons/hamberger.svg",alt:"sidebar icon"}),(0,G.jsx)(tn.Z,{primaryColor:"#000",secondaryColor:"#fff"})]}),(0,G.jsx)(Q,{})]}),(0,G.jsx)(Kn,{show:"top"===o&&a>700,children:(0,G.jsx)("div",{className:"searchBar",children:(0,G.jsx)(kn,{})})})]})},$n=q.ZP.div(M||(M=(0,F.Z)(["\n  background-color: tomato;\n  width: 100%;\n  padding: 1rem 2rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (max-width: 576px) {\n    padding: 1rem 1rem 0;\n  }\n"]))),Jn=q.ZP.div(E||(E=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  img {\n    width: 3rem;\n    margin-right: 1rem;\n    cursor: pointer;\n  }\n"]))),Kn=q.ZP.div(_||(_=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  background-color: tomato;\n  height: 6.2rem;\n  z-index: 100;\n  position: ",";\n  top: 0;\n\n  @media screen and (max-width: 768px) {\n    padding: 1rem 2rem;\n  }\n  @media screen and (max-width: 576px) {\n    padding: 1rem;\n  }\n\n  .searchBar {\n    width: 100%;\n    background-color: #fff;\n    border-radius: 0.5rem;\n  }\n"])),(function(n){return n.show?"sticky":"relative"})),ne=function(){var n=(0,A.useState)(window.innerWidth),e=(0,dn.Z)(n,2),t=e[0],i=e[1];return(0,A.useEffect)((function(){function n(){i(window.innerWidth)}return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),t},ee=function(){var n=ne();return(0,G.jsx)(G.Fragment,{children:n>768?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(K,{}),(0,G.jsx)(on,{}),(0,G.jsx)(En,{})]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Xn,{}),(0,G.jsx)(qn,{})]})})},te=t(7821),ie=t.n(te),re=[{title:"Privacy Policy",links:[{name:"Returns & Exchanges",link:"/"},{name:"Payment Terms",link:"/"},{name:"Terms Of Use",link:"/"},{name:"Privacy Policy",link:"/"}]},{title:"Quick Links",links:[{name:"Smartphones",link:"/"},{name:"Returns & Exchanges",link:"/"},{name:"Headphones",link:"/"},{name:"Monitors",link:"/"}]},{title:"Customer Care",links:[{name:"My Account",link:"/"},{name:"Track your Order",link:"/"},{name:"Returns/Exchange",link:"/"},{name:"Product Support",link:"/"}]}],oe=function(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ie(),{smooth:!0,top:"1000",color:"tomato",width:"40",height:"40",component:(0,G.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"tomato",className:"bi bi-arrow-bar-up",viewBox:"0 0 16 16",children:(0,G.jsx)("path",{fillRule:"evenodd",d:"M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"})})}),(0,G.jsxs)(ae,{children:[(0,G.jsxs)(se,{children:[(0,G.jsxs)("div",{className:"company_info",children:[(0,G.jsx)(tn.Z,{primaryColor:"tomato",secondaryColor:"#fff"}),(0,G.jsx)("p",{className:"about_digimart",children:"Digimart offers a wide range of digital products and services. With a sleek and modern interface, Digimart provides customers with a seamless shopping experience."}),(0,G.jsxs)("div",{className:"contact",children:[(0,G.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-headset",viewBox:"0 0 16 16",children:(0,G.jsx)("path",{d:"M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"})}),(0,G.jsx)("span",{children:" +0080 1234 56 789"})]})]}),(0,G.jsxs)("div",{className:"quick_action",children:[re.map((function(n,e){var t;return(0,G.jsxs)("div",{className:"main__content",children:[(0,G.jsx)("h3",{children:null===n||void 0===n?void 0:n.title}),(0,G.jsx)("ul",{children:null===n||void 0===n||null===(t=n.links)||void 0===t?void 0:t.map((function(n,e){return(0,G.jsx)("li",{children:(0,G.jsx)(V.rU,{to:null===n||void 0===n?void 0:n.link,children:null===n||void 0===n?void 0:n.name})},e)}))})]},e)})),(0,G.jsxs)("div",{className:"main__content social_media",children:[(0,G.jsx)("h3",{children:"Follow Me"}),(0,G.jsxs)("ul",{children:[(0,G.jsx)("li",{children:(0,G.jsx)("a",{href:"https://www.facebook.com/shamim1845",target:"_blank",rel:"noreferrer",children:(0,G.jsx)("span",{className:"facebook"})})}),(0,G.jsx)("li",{children:(0,G.jsx)("a",{href:"https://www.linkedin.com/in/shamim1845",target:"_blank",rel:"noreferrer",children:(0,G.jsx)("span",{className:"linkedin"})})}),(0,G.jsx)("li",{children:(0,G.jsx)("a",{href:"https://developershamim.me",target:"_blank",rel:"noreferrer",children:(0,G.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",className:"bi bi-globe",viewBox:"0 0 16 16",children:(0,G.jsx)("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"})})})})]})]}),(0,G.jsxs)("div",{className:"main__content ",children:[(0,G.jsx)("h3",{children:"Payment Methods"}),(0,G.jsx)("ul",{children:(0,G.jsx)("li",{children:(0,G.jsx)("img",{src:"https://res.cloudinary.com/dewq5eyuf/image/upload/f_auto,q_auto/v1/digimart/utils/ynpsi4a7uw05hc8fyvvo",alt:"stripe logo",width:100})})})]})]})]}),(0,G.jsx)("br",{}),(0,G.jsx)(le,{children:(0,G.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," Digimart. All rights reserved."]})})]})]})},ae=q.ZP.div(T||(T=(0,F.Z)(["\n  background-color: #232f3e;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 5rem 3rem;\n\n  @media screen and (max-width: 768px) {\n    padding: 5rem 2rem 10rem;\n  }\n"]))),se=q.ZP.div(N||(N=(0,F.Z)(['\n  width: 100%;\n  max-width: 1440px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 3rem;\n\n  .company_info {\n    width: 100%;\n    max-width: 30rem;\n    color: #ddd;\n\n    .about_digimart {\n      line-height: 1.6;\n      margin-top: 1rem;\n    }\n\n    .contact {\n      margin-top: 1rem;\n      display: flex;\n      align-items: center;\n      gap: 1rem;\n    }\n\n    @media screen and (max-width: 768px) {\n      max-width: 100%;\n    }\n  }\n\n  .quick_action {\n    margin-top: 0.8rem;\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 5rem;\n\n    .main__content {\n      width: fit-content;\n\n      h3 {\n        color: #fff;\n        font-size: 1.8rem;\n        font-weight: 600;\n        margin-bottom: 1rem;\n      }\n      ul {\n        padding-left: 0;\n\n        li {\n          line-height: 1.8;\n          a {\n            color: #ddd;\n            transition: all 0.1s;\n            &:hover {\n              text-decoration: underline;\n            }\n          }\n        }\n      }\n    }\n\n    .social_media {\n      ul {\n        display: flex;\n        gap: 2rem;\n\n        li {\n          width: 35px;\n          height: 35px;\n          border-radius: 50%;\n          overflow: hidden;\n\n          span {\n            background-image: url("https://res.cloudinary.com/dewq5eyuf/image/upload/f_auto,q_auto/v1/digimart/utils/vk2h4qfgaeicfjjiitxo");\n            display: inline-block;\n            width: 100%;\n            height: 100%;\n            border-radius: 50%;\n          }\n          svg {\n            width: 100%;\n            height: 100%;\n            padding: 3px;\n          }\n\n          .facebook {\n            zoom: 0.08;\n            background-position: -285px -695px;\n          }\n          .linkedin {\n            zoom: 0.08;\n            background-position: -2525px -1351px;\n          }\n        }\n      }\n    }\n  }\n']))),le=q.ZP.div(S||(S=(0,F.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #666;\n  padding: 3rem 0 0;\n  margin-top: 3rem;\n  /* background-color: pink; */\n"]))),ce=function(n){var e=n.children;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ee,{}),e,(0,G.jsx)(oe,{})]})}},4480:function(n,e,t){var i,r=t(9439),o=t(168),a=t(2791),s=t(8789),l=t(1539),c=t(9993),d=t(2978),u=t(1530),m=t(3616),h=t(7689),g=t(184);e.Z=function(){var n,e=(0,l.QX)(),t=e.data,i=e.isSuccess,r=e.isError,o=e.error;return(0,g.jsxs)(f,{children:[r&&(0,g.jsx)(g.Fragment,{children:404===o.status?(0,g.jsx)("div",{style:{fontSize:"1.3rem",padding:"1rem 0"},children:null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.message}):(0,g.jsx)(c.Z,{text:null===o||void 0===o?void 0:o.message,style:{marginTop:"1rem"}})}),i&&(null===t||void 0===t?void 0:t.category)&&(0,g.jsx)("ul",{children:(0,g.jsx)(x,{category:null===t||void 0===t?void 0:t.category})})]})};var f=s.ZP.div(i||(i=(0,o.Z)(["\n  user-select: none;\n  ul {\n    li {\n      text-transform: capitalize;\n      font-size: 1.3rem;\n      color: #757575;\n      line-height: 2rem;\n      &:hover {\n        color: tomato;\n      }\n\n      .category {\n        cursor: pointer;\n        display: flex;\n        gap: 0.5rem;\n        align-items: center;\n        margin: 0.5rem 0;\n\n        input {\n          cursor: pointer;\n        }\n      }\n      ul {\n        margin-left: 2.5rem;\n      }\n    }\n  }\n"]))),x=function n(e){var t=e.category,i=(0,a.useState)(null),o=(0,r.Z)(i,2),s=o[0],l=o[1],c=(0,d.I0)(),f=(0,h.s0)(),x=(0,d.v9)(u.oe),v=function(n){c((0,m.Ws)(1)),c((0,m.i8)((null===n||void 0===n?void 0:n.slug)===x?"":null===n||void 0===n?void 0:n.slug)),f("/products")};return(0,g.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,g.jsxs)("li",{children:[(0,g.jsxs)("div",{className:"category",onClick:function(){return v(e)},onMouseEnter:function(){return l(e)},children:[(0,g.jsx)("input",{type:"checkbox",checked:e.slug===x,onChange:function(){return v(e)}}),(0,g.jsx)("span",{children:e.name})]}),(null===e||void 0===e?void 0:e._id)===(null===s||void 0===s?void 0:s._id)&&(0,g.jsx)(n,{category:null===s||void 0===s?void 0:s.children})]},t)}))})}},2874:function(n,e,t){t.d(e,{i:function(){return i}});var i=[{name:"USD",icon:"$"},{name:"BDT",icon:"\u09f3"},{name:"INR",icon:"\u20b9"}]},5026:function(n,e,t){var i=t(2791);e.Z=function(n){var e=function(n,e){var t;return function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];t&&clearTimeout(t),t=setTimeout((function(){n.apply(undefined,r)}),e)}}(n,500);return(0,i.useCallback)((function(n){return e(n)}),[])}},1716:function(n,e,t){var i=t(9439),r=t(2791);e.Z=function(){var n=(0,r.useState)(""),e=(0,i.Z)(n,2),t=e[0],o=e[1],a=(0,r.useState)(window.scrollY),s=(0,i.Z)(a,2),l=s[0],c=s[1];return(0,r.useEffect)((function(){function n(){l<window.scrollY?o("down"):o("top"),c(window.scrollY)}return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[l]),{scrolling:t,lastScrollY:l}}},552:function(n,e,t){var i=t(2791);e.Z=function(n,e){return(0,i.useEffect)((function(){function t(t){var i;null!==n&&void 0!==n&&null!==(i=n.current)&&void 0!==i&&i.contains(t.target)||e(!1)}return window.addEventListener("mousedown",t),function(){window.removeEventListener("mousedown",t)}}),[n,e]),null}},9993:function(n,e,t){var i,r=t(168),o=t(1413),a=(t(2791),t(8789)),s=t(184);e.Z=function(n){var e=n.text,t=void 0===e?"There was an error!":e,i=n.style;return(0,s.jsx)(l,{style:(0,o.Z)({color:"red"},i),children:t})};var l=a.ZP.div(i||(i=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n"])))},2805:function(n,e,t){var i,r=t(168),o=(t(2791),t(8789)),a=t(184);e.Z=function(n){var e=n.primaryColor,t=void 0===e?"#000":e,i=n.secondaryColor,r=void 0===i?"tomato":i;return(0,a.jsx)(s,{primaryColor:t,secondaryColor:r,children:(0,a.jsxs)("h2",{children:["DIGI",(0,a.jsx)("span",{children:"MART"})]})})};var s=o.ZP.div(i||(i=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  h2 {\n    letter-spacing: 0.2rem;\n    font-size: 3rem;\n    margin: 0;\n    font-weight: 600;\n    color: ",";\n    span {\n      color: ",";\n    }\n\n    @media screen and (max-width: 768px) {\n      font-size: 2.5rem;\n    }\n  }\n"])),(function(n){return n.primaryColor}),(function(n){return n.secondaryColor}))},8661:function(n,e,t){t.d(e,{$B:function(){return o},EU:function(){return a},OS:function(){return s},_0:function(){return r}});var i=t(4473).Z.injectEndpoints({endpoints:function(n){return{getMyCartList:n.query({query:function(){return{url:"cart"}},providesTags:["getMyCartList"]}),addToCart:n.mutation({query:function(n){return{url:"cart/add",method:"POST",body:n}},invalidatesTags:["getMyCartList"]}),removeFromCart:n.mutation({query:function(n){return{url:"cart/remove",method:"DELETE",body:n}},invalidatesTags:["getMyCartList"]}),removeAllFromCart:n.mutation({query:function(){return{url:"cart/remove/all",method:"DELETE"}},invalidatesTags:["getMyCartList"]})}}}),r=i.useGetMyCartListQuery,o=i.useAddToCartMutation,a=i.useRemoveFromCartMutation,s=i.useRemoveAllFromCartMutation},1539:function(n,e,t){t.d(e,{QX:function(){return r},R5:function(){return o},l8:function(){return l},m7:function(){return a},pi:function(){return s}});var i=t(4473).Z.injectEndpoints({endpoints:function(n){return{getAllCategory:n.query({query:function(){return{url:"categories"}},providesTags:["Categories"]}),getAdminCategory:n.query({query:function(){return{url:"admin/categories"}},providesTags:["AdminCategories"]}),createCategory:n.mutation({query:function(n){return{url:"admin/categories",method:"POST",body:n}},invalidatesTags:["Categories","AdminCategories"]}),updateCategory:n.mutation({query:function(n){var e=n.id,t=n.category;return{url:"admin/categories/".concat(e),method:"PUT",body:t}},invalidatesTags:["Categories","AdminCategories"]}),deleteCategory:n.mutation({query:function(n){return{url:"admin/categories/".concat(n),method:"DELETE"}},invalidatesTags:["Categories","AdminCategories"]})}}}),r=i.useGetAllCategoryQuery,o=i.useGetAdminCategoryQuery,a=i.useCreateCategoryMutation,s=i.useUpdateCategoryMutation,l=i.useDeleteCategoryMutation},9768:function(n,e,t){t.d(e,{a2:function(){return r},d4:function(){return a},gb:function(){return o}});var i=t(4473).Z.injectEndpoints({endpoints:function(n){return{getMyFavouriteList:n.query({query:function(){return{url:"favourite"}},providesTags:["getMyFavouriteList"]}),addToFavouriteList:n.mutation({query:function(n){return{url:"favourite/add",method:"POST",body:n}},invalidatesTags:["getMyFavouriteList"]}),removeToFavouriteList:n.mutation({query:function(n){return{url:"favourite/remove",method:"DELETE",body:n}},invalidatesTags:["getMyFavouriteList"]})}}}),r=i.useGetMyFavouriteListQuery,o=i.useAddToFavouriteListMutation,a=i.useRemoveToFavouriteListMutation},1530:function(n,e,t){t.d(e,{GI:function(){return r},j2:function(){return i},oe:function(){return o}});var i=function(n){return n.productFilter},r=function(n){return n.productFilter.keyword},o=function(n){return n.productFilter.category}},9290:function(n,e,t){t.d(e,{Mb:function(){return i},S8:function(){return r},j:function(){return o}});var i=function(n){return n.user.authenticated},r=function(n){return n.user.userInfo},o=function(n){return n.user.currency}}}]);
//# sourceMappingURL=638.9ce4d139.chunk.js.map