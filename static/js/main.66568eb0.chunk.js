(this["webpackJsonpmy-crypto-app"]=this["webpackJsonpmy-crypto-app"]||[]).push([[0],{47:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(13),s=c.n(a),i=(c(47),c(30)),j=c.n(i),o=c(39),l=c(7),d=c(77),h=c(78),u=c(81),b=c(82),O=c(79),p=c(80),x=c(40),m=c.n(x),g=c(76),f=c(1),v=function(e){var t=e.coins;return e.loading?Object(f.jsx)(g.a,{animation:"border",variant:"primary",role:"status",size:"lg",children:Object(f.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("img",{src:e.image,alt:"crypto",width:171,height:180,thumbnail:!0})}),Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.symbol}),Object(f.jsxs)("td",{children:["$",e.current_price]})]})})}))})},y=function(e){for(var t=e.coinsPerPage,c=e.totalCoins,r=e.paginate,n=[],a=1;a<=Math.ceil(c/t);a++)n.push(a);return Object(f.jsx)("nav",{children:Object(f.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(f.jsx)("li",{className:"page-item",children:Object(f.jsx)("a",{onClick:function(){return r(e)},href:"!#",className:"page-link",children:e})},e)}))})})},C=function(e){var t=e.getQuery,c=Object(r.useState)(""),n=Object(l.a)(c,2),a=n[0],s=n[1];return Object(f.jsx)("section",{className:"search","data-testid":"searchCoin-1",children:Object(f.jsx)("form",{className:"d-flex",children:Object(f.jsx)("input",{"aria-label":"search",type:"text",className:"form-control",placeholder:"Search",value:a,onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})})};var k=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],x=s[1],g=Object(r.useState)(1),k=Object(l.a)(g,2),S=k[0],N=k[1],P=Object(r.useState)(10),w=Object(l.a)(P,1)[0],F=Object(r.useState)(""),L=Object(l.a)(F,2),_=L[0],E=L[1];Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_?"&ids=".concat(_.toLowerCase()):"",x(!0),e.prev=2,e.next=5,m.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud".concat(t,"&order=market_cap_desc&per_page=100&page=1&sparkline=false"));case 5:c=e.sent,n(c.data),x(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Error Error"),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]);var B=S*w,I=B-w,T=_?c:c.slice(I,B);return Object(f.jsxs)(d.a,{fluid:!0,children:[Object(f.jsx)(h.a,{children:Object(f.jsxs)(u.a,{bg:"dark",variant:"dark",expand:"lg",children:[";",Object(f.jsxs)(d.a,{fluid:!0,children:[Object(f.jsx)(u.a.Brand,{href:"#home",children:"Cryptocurrency"}),Object(f.jsx)(b.a,{className:"me-auto",children:Object(f.jsx)(b.a.Link,{href:"#home",children:"Trending"})}),Object(f.jsx)(C,{getQuery:function(e){return E(e)}})]})]})}),Object(f.jsx)(h.a,{children:Object(f.jsx)(O.a,{children:Object(f.jsxs)(p.a,{striped:!0,border:!0,hover:!0,responsive:"sm",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Crypto Image"}),Object(f.jsx)("th",{children:"Crypto Name"}),Object(f.jsx)("th",{children:"Crypto Symbol"}),Object(f.jsx)("th",{children:"Current Price $AUD"})]})}),Object(f.jsx)(v,{coins:T,loading:i})]})})}),Object(f.jsx)(h.a,{children:Object(f.jsx)(y,{coinsPerPage:w,totalCoins:c.length,paginate:function(e){return N(e)}})})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};c(73);s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),S()}},[[74,1,2]]]);
//# sourceMappingURL=main.66568eb0.chunk.js.map