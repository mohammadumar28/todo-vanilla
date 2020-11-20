(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),c=n.n(o)()((function(e){return e[1]}));c.push([e.id,"body{background-color:#ccc}",""]);const r=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var c={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(c[a]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&c[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var o,c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},o=[],c=0;c<e.length;c++){var i=e[c],l=t.base?i[0]+t.base:i[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=a(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(r[u].references++,r[u].updater(m)):r.push({identifier:d,updater:v(m,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=c(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var c=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,c);else{var r=document.createTextNode(c),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function m(e,t,n){var o=n.css,c=n.media,r=n.sourceMap;if(c?e.setAttribute("media",c):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function v(e,t){var n,o,c;if(t.singleton){var r=f++;n=p||(p=l(t)),o=u.bind(null,n,r,!1),c=u.bind(null,n,r,!0)}else n=l(t),o=m.bind(null,n,t),c=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else c()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var c=a(n[o]);r[c].references--}for(var l=i(e,t),s=0;s<n.length;s++){var d=a(n[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=l}}}}},t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(192);function c(){document.querySelectorAll(".project-btn").forEach((e=>{e.addEventListener("click",(()=>{console.log(e.textContent),l(e.textContent)}))}))}function r(e,t){document.getElementById(`delete-btn-${t}`).addEventListener("click",(n=>{n.preventDefault();const o=JSON.parse(localStorage.getItem(e.project)),c=JSON.parse(localStorage.getItem("allTodos"));c.splice(c.indexOf(e),1),o.splice(o.indexOf(e),1),localStorage.setItem(e.project,JSON.stringify(o)),localStorage.setItem("allTodos",JSON.stringify(c)),document.getElementById(`card-${t}`).remove()}))}function a(e,t){const n=document.createElement("div");n.classList.add("card"),n.id=`card-${t}`;const o=document.createElement("h2");o.classList.add("title"),o.textContent=e.title;const c=document.createElement("p");c.classList.add("desc-text"),c.textContent=e.description;const r=document.createElement("p");r.classList.add("date-text"),r.textContent=e.dueDate;const a=document.createElement("p");a.classList.add("project"),a.textContent=e.project;const i=document.createElement("button");i.textContent="Edit Todo",i.classList.add("edit-btn"),i.id=`edit-btn-${t}`;const l=document.createElement("button");return l.textContent="Delete Todo",l.classList.add("delete-btn"),l.id=`delete-btn-${t}`,n.append(o,c,r,a,i,l),n}function i(e,t){const n=document.getElementById(`card-${t}`);document.getElementById(`edit-btn-${t}`).addEventListener("click",(o=>{o.preventDefault(),n.textContent="";const c=document.createElement("form");c.id="edit-form";const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","etitle"),l.value=e.title;const s=document.createElement("textarea");s.setAttribute("name","edescription"),s.value=e.description;const d=document.createElement("input");d.setAttribute("type","date"),d.setAttribute("name","edueDate"),d.value=e.dueDate;const u=document.createElement("button"),m=document.createElement("button");u.textContent="save changes",m.textContent="cancel",u.id=`save-btn-${t}`,m.id=`save-btn-${t}`,c.append(l,s,d,u,m),n.append(c),m.addEventListener("click",(o=>{o.preventDefault(),n.replaceWith(a(e,t)),r(e,t),i(e,t)})),u.addEventListener("click",(o=>{o.preventDefault();const c=JSON.parse(localStorage.getItem("allTodos")),u=c[t];u.title=l.value,u.description=s.value,u.dueDate=d.value,localStorage.setItem("allTodos",JSON.stringify(c)),n.replaceWith(a(u,t)),r(e,t),i(e,t)}))}))}function l(e="allTodos"){const t=JSON.parse(localStorage.getItem(e)),n=document.querySelector("#todo-content");n.textContent="",t.forEach(((e,t)=>{n.append(a(e,t)),r(e,t),i(e,t)}))}t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const s=document.querySelector("body"),d=Object.keys(localStorage),u=document.createElement("div");u.id="container";const m=document.createElement("div");m.id="side-nav";const p=document.createElement("ul");p.id="nav-list";const f=document.createElement("div");f.id="main-content";const v=document.createElement("h1");v.id="heading",v.textContent="Simple Todolist";const h=document.createElement("h2");h.textContent="New Project";const b=document.createElement("form");b.id="project-form";const g=document.createElement("input");g.setAttribute("type","text"),g.setAttribute("name","projectName"),g.required=!0;const E=document.createElement("button");E.textContent="Create Project",E.id="create-project",b.append(g,E);const y=document.createElement("div");y.id="todo-content";const S=document.createElement("form");S.id="new-todo";const x=document.createElement("input");x.setAttribute("type","text"),x.setAttribute("name","title"),x.setAttribute("placeholder","Task Title"),x.required=!0;const j=document.createElement("textarea");j.setAttribute("name","description"),j.setAttribute("placeholder","Task Description"),j.required=!0;const C=document.createElement("input");C.setAttribute("type","date"),C.setAttribute("name","dueDate"),C.required=!0;const T=document.createElement("select");T.setAttribute("name","projects"),T.id="project-options",d.forEach((e=>{const t=document.createElement("li"),n=document.createElement("button");n.classList.add("project-btn"),n.textContent=e,t.append(n),p.append(t);const o=document.createElement("option");o.textContent=e,o.value=e,T.append(o)}));const I=document.createElement("input");I.setAttribute("type","submit"),I.id="create-todo",m.append(p),S.append(x,j,C,T,I),f.append(v,h,b,S,y),u.append(m,f);class A{constructor(e){this.name=e,this.todos=[]}addTodo(e){this.todos.push(e)}}s.append(u),l("allTodos"),null==localStorage.getItem("allTodos")&&localStorage.setItem("allTodos","[]"),c();const N=document.querySelector("#new-todo"),O=document.querySelector("#create-todo"),L=document.querySelector("#create-project"),D=document.querySelector("#project-form");O.addEventListener("click",(e=>{e.preventDefault();const{projects:t}=N.elements;return function(e){const{title:t,description:n,dueDate:o}=e.elements;return!!(t.value.length>4&&n.value.length>4&&o.value)}(N)&&(function(e){const{title:t,description:n,dueDate:o,projects:c}=e.elements,r=new class{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.project=o}}(t.value,n.value,o.value,c.value),a=JSON.parse(localStorage.getItem("allTodos")),i=JSON.parse(localStorage.getItem(c.value));a.push(r),i.push(r),localStorage.setItem("allTodos",JSON.stringify(a)),localStorage.setItem(c.value,JSON.stringify(i))}(N),l(t.value),N.reset()),null})),L.addEventListener("click",(e=>(e.preventDefault(),function(e){const{projectName:t}=e.elements;return t.value.length>4}(D)&&(function(e){const{projectName:t}=e.elements,n=new A(t.value).name;localStorage.setItem(n,"[]")}(D),function(){const e=document.getElementById("nav-list"),t=document.querySelector("#project-options");t.textContent="",e.textContent="",Object.keys(localStorage).forEach((n=>{const o=document.createElement("li"),c=document.createElement("button");c.classList.add("project-btn"),c.textContent=n,o.append(c),e.append(o);const r=document.createElement("option");r.textContent=n,r.value=n,t.append(r)})),c()}(),D.reset()),null)))})()})();