(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c(5),r=(c(20),c(21),c(8)),a=c(11),i=c(4),j=c(1),l=c(2);function o(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var b=c(6),d=c.n(b),h=c(0),u=function(e){var t=e.person,c=e.slug;return Object(h.jsx)(s.b,{to:"../".concat(c),className:d()({"has-text-danger":"f"===t.sex}),children:t.name})},O=function(e){var t=e.person,c=e.people,n=e.isSelected,s=c.find((function(e){return e.name===t.motherName})),r=c.find((function(e){return e.name===t.fatherName}));return Object(h.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":n(t)}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(u,{person:t,slug:t.slug})}),Object(h.jsx)("td",{children:t.sex}),Object(h.jsx)("td",{children:t.born}),Object(h.jsx)("td",{children:t.died}),Object(h.jsx)("td",{children:s?Object(h.jsx)(u,{person:s,slug:s.slug}):t.motherName||"-"}),Object(h.jsx)("td",{children:r?Object(h.jsx)(u,{person:r,slug:r.slug}):t.fatherName||"-"})]},t.slug)},x=function(e){var t=e.people,c=e.slug,n=function(e){return e.slug===c};return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(O,{isSelected:n,person:e,people:t},e.slug)}))})]})},p=(c(23),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.isLoading,c=e.isError,n=e.people,s=Object(l.i)().slug,r=void 0===s?"":s;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"box table-container",children:[t&&Object(h.jsx)(p,{}),c&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),n.length>0?Object(h.jsx)(x,{people:n,slug:r}):!t&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},f=function(){return Object(h.jsx)("h1",{className:"title",children:"Home Page"})},v=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})},g=(c(24),function(e){var t=e.title,c=e.to;return Object(h.jsx)(s.c,{to:c,className:function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},children:t})}),N=function(){return Object(h.jsx)("nav",{className:"navbar is-fixed-top has-shadow","data-cy":"nav",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(g,{to:"/",title:"Home"}),Object(h.jsx)(g,{to:"/people",title:"People"})]})})})},y=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(N,{}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(l.b,{})})})]})},w=function(){var e=Object(j.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(j.useState)(!1),b=Object(i.a)(s,2),d=b[0],u=b[1],O=Object(j.useState)(!1),x=Object(i.a)(O,2),p=x[0],g=x[1];return Object(j.useEffect)((function(){var e=function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,o();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(!0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsx)(l.e,{children:Object(h.jsxs)(l.c,{path:"/",element:Object(h.jsx)(y,{}),children:[Object(h.jsx)(l.c,{path:"/",element:Object(h.jsx)(f,{})}),Object(h.jsx)(l.c,{path:"home",element:Object(h.jsx)(l.a,{to:"/",replace:!0})}),Object(h.jsxs)(l.c,{path:"people",children:[Object(h.jsx)(l.c,{index:!0,element:Object(h.jsx)(m,{people:c,isLoading:p,isError:d})}),Object(h.jsx)(l.c,{path:":slug",element:Object(h.jsx)(m,{people:c,isLoading:p,isError:d})})]}),Object(h.jsx)(l.c,{path:"*",element:Object(h.jsx)(v,{})})]})})};Object(n.createRoot)(document.getElementById("root")).render(Object(h.jsx)(s.a,{children:Object(h.jsx)(w,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.6c3a88cb.chunk.js.map