(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{12:function(e,t,o){},31:function(e,t,o){"use strict";o.r(t);var c=o(0),s=o.n(c),n=o(8),a=o.n(n),l=o(3),d=(o(12),o(5)),r=o(1),i=function(e){var t=e.todos,o=e.setTodos,c=e.inputText,s=e.setInputText,n=e.setStatus;return Object(r.jsxs)("form",{className:"form-wrapper",children:[Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("input",{value:c,onChange:function(e){s(e.target.value)},type:"text",className:"todo-input"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(d.a)(t),[{text:c,completed:!1,id:1e3*Math.random()}])),s("")},className:"add-button",type:"submit",children:"+"})]}),Object(r.jsx)("div",{className:"select",children:Object(r.jsxs)("select",{name:"todos",onChange:function(e){n(e.target.value)},className:"drop-down",children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"completed",children:"Completed"}),Object(r.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},j=o(11),u=o(16),b=o.n(u),O=o(18),m=o.n(O),f=function(e){var t=e.text,o=e.todo,c=e.todos,s=e.setTodos;return Object(r.jsxs)("div",{className:"todo-list",children:[Object(r.jsx)("div",{className:"todo-item ".concat(o.completed?"completed":""),children:t}),Object(r.jsxs)("div",{className:"todo-item-btns",children:[Object(r.jsx)("button",{onClick:function(){s(c.map((function(e){return e.id===o.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):e}))),console.log(o)},className:"complete-btn",children:Object(r.jsx)(b.a,{style:{fill:"green",border:"none"}})}),Object(r.jsx)("button",{onClick:function(){s(c.filter((function(e){return e.id!==o.id})))},className:"trash-btn",children:Object(r.jsx)(m.a,{style:{fill:"gray"}})})]})]})},p=function(e){var t=e.todos,o=e.setTodos,c=e.filteredTodos;return Object(r.jsxs)("div",{className:"todo-container",children:[Object(r.jsx)("h1",{children:"Tasks"}),Object(r.jsx)("ol",{className:"todo-lists",children:c.map((function(e){return Object(r.jsx)(f,{todo:e,text:e.text,todos:t,setTodos:o},e.id)}))})]})};var h=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),o=t[0],s=t[1],n=Object(c.useState)([]),a=Object(l.a)(n,2),d=a[0],j=a[1],u=Object(c.useState)("all"),b=Object(l.a)(u,2),O=b[0],m=b[1],f=Object(c.useState)([]),h=Object(l.a)(f,2),x=h[0],v=h[1],N=Object(c.useState)([]),g=Object(l.a)(N,2),S=g[0],T=g[1];Object(c.useEffect)((function(){w()}),[]),Object(c.useEffect)((function(){k(),y()}),[d,O]);var k=function(){switch(O){case"completed":v(d.filter((function(e){return!0===e.completed})));break;case"uncompleted":v(d.filter((function(e){return!1===e.completed})));break;default:v(d)}console.log(x),T(d.filter((function(e){return!0===e.completed}))),console.log(S)},y=function(){localStorage.setItem("todos",JSON.stringify(d))},w=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));j(e)}};return Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("button",{className:"header-btn header-btn-one",children:"T"}),Object(r.jsx)("button",{className:"header-btn header-btn-two",children:"O"}),Object(r.jsx)("button",{className:"header-btn header-btn-three",children:"D"}),Object(r.jsx)("button",{className:"header-btn header-btn-four",children:"O"})]}),Object(r.jsx)(i,{todos:d,setTodos:j,inputText:o,setInputText:s,setStatus:m}),Object(r.jsx)(p,{todos:d,setTodos:j,filteredTodos:x})]})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a937c470.chunk.js.map