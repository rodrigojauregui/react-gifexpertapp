(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),r=n.n(i),s=n(2),a=n(0),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),i=Object(s.a)(n,2),r=i[0],j=i[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>0&&(t(r),j(""))},className:"mb-4",children:Object(a.jsx)("input",{className:"border-2",type:"text",value:r,onChange:function(e){j(e.target.value)}})})})},u=n(5),d=n(4),b=n.n(d),o=n(7),l=function(){var e=Object(o.a)(b.a.mark((function e(t){var n,c,i,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=DLvjXBVtW9JYDbl3AAftyvVBD5kSbE1X"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return i=e.sent,r=i.data,s=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){return Object(a.jsxs)("div",{className:"lds-spinner",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})},x=function(e){var t=e.title,n=e.url;e.id;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[" ",t," "]}),Object(a.jsx)("img",{src:n,alt:t,width:"200",height:"300"})]})},f=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){l(e).then((function(e){r({data:e,loading:!1})}))}),[e]),i}(t),i=n.data,r=n.loading;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:[" ",t," "]}),r&&Object(a.jsx)(O,{}),i.map((function(e){return Object(c.createElement)(x,Object(u.a)(Object(u.a)({},e),{},{key:e.id}))}))]})},v=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)("div",{className:"p-10",children:[Object(a.jsxs)("div",{className:"fixed bg-white w-full",children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:i}),Object(a.jsx)("hr",{})]}),Object(a.jsx)("div",{className:"mt-20",children:Object(a.jsx)(f,{category:n})})]})},h=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))});r.a.render(Object(a.jsx)(v,{}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.8f1ac14e.chunk.js.map