(this["webpackJsonp03-gif-expert-app"]=this["webpackJsonp03-gif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){console.log(t.target.value),o(t.target.value)}})})},j=n(10),d=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("p",{children:e}),Object(u.jsx)("p",{children:Object(u.jsx)("img",{src:n,alt:e})})]})})},l=n(6),b=n.n(l),p=n(8),f=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=","10","&api_key=","4Onggjy2SShUmuytSYWKpuuk29qLt3jI"),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){return a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},g=function(){var t=Object(r.useState)(["Dragon ball"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};n(17);a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2f02037a.chunk.js.map