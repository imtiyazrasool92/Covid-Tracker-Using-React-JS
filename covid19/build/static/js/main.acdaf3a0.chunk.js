(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),r=c.n(n),j=c(2),a=c(0),d=function(e){var t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],d=e.dataList.filter((function(e,t){return e.state.toLowerCase().includes(n.toLowerCase())&&"Total"!==e.state}));return console.log(d),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",value:n,onChange:function(e){r(e.target.value)}}),Object(a.jsxs)("table",{class:"table table-hover table-dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"State"}),Object(a.jsx)("th",{scope:"col",children:"Confirmed"}),Object(a.jsx)("th",{scope:"col",children:"Recovered"}),Object(a.jsx)("th",{scope:"col",children:"Deaths"}),Object(a.jsx)("th",{scope:"col",children:"Active"}),Object(a.jsx)("th",{scope:"col",children:"Last Updated"})]})}),d.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.state}),Object(a.jsx)("td",{children:e.confirmed}),Object(a.jsx)("td",{children:e.recovered}),Object(a.jsx)("td",{children:e.deaths}),Object(a.jsx)("td",{children:e.active}),Object(a.jsx)("td",{children:e.lastupdatedtime})]})}))]})]})},i=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){n(e.statewise)}))}),[]),Object(a.jsx)("div",{children:Object(a.jsx)(d,{dataList:c})})};r.a.render(Object(a.jsx)(i,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.acdaf3a0.chunk.js.map