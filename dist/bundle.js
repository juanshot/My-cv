(()=>{"use strict";var e={772:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),a=n.n(o)()((function(e){return e[1]}));a.push([e.id,'@-webkit-keyframes open{0%{width:0%}50%{width:20%}100%{left:40%}}h2{margin-top:0;margin-bottom:5px;font-size:48px;color:#fff}h4{margin-top:0;margin-bottom:5px;font-size:18px;color:#00c483}.card{background-color:#1c1e1f;border-radius:5px;width:20%}.card.main{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-end;background-image:url(https://cv-jmg.s3.us-east-2.amazonaws.com/juan.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;min-height:90%;width:30%;box-shadow:0 10px 10px 0 rgba(0,0,0,.5);z-index:2}.card.detail{background-color:#1c1e1f;font-size:22px;height:70%;z-index:0;margin-left:-10px;padding:30px;width:40%;-webkit-animation:linear alternate;-webkit-animation-name:open;-webkit-animation-duration:.5s}.card.detail a{color:#00c483;text-decoration:underline}.card.detail hr{border-color:#545454}.card.detail .item{margin-top:10px}.card.menu{display:flex;flex-direction:column;font-size:35px;justify-content:center;align-items:center;background-color:#1c1e1f;height:70%;width:74px;z-index:0;margin-right:-10px;padding:10px}@media only screen and (max-width: 600px){.card.main{display:none}.card.detail{width:100%}}.menu-item{cursor:pointer;color:#545454;padding:10px 0 10px 0}.menu-item.active{color:#00c483}.menu-item.download{margin-top:auto}.menu-item:hover{font-weight:bold;color:#00c483}.person__info{height:200px;width:100%;text-align:center;color:#fff}.person__info .person__name{font-weight:900;line-height:1.17;color:#fff;text-align:center}.person__info .person__social_networks{display:flex;width:100%;justify-content:center;font-size:18px}.person__info .person__social_networks a{margin-right:10px}body,html{padding:0;margin:0;box-sizing:border-box;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;color:#545454}#root{display:flex;align-items:center;justify-content:center;height:100vh;background-color:#222}',""]);const r=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(379),a=n.n(o),r=n(772);a()(r.Z,{insert:"head",singleton:!1});const i=r.Z.locals||{}},379:(e,t,n)=>{var o,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function i(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],a=0;a<e.length;a++){var c=e[a],d=t.base?c[0]+t.base:c[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=i(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(r[u].references++,r[u].updater(f)):r.push({identifier:s,updater:h(f,t),references:1}),o.push(s)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,t){var n,o,a;if(t.singleton){var r=m++;n=p||(p=d(t)),o=u.bind(null,n,r,!1),a=u.bind(null,n,r,!0)}else n=d(t),o=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var a=i(n[o]);r[a].references--}for(var d=c(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}n=d}}}},752:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(956);const a=o(n(161)),r=o(n(500)),i=o(n(56)),c=(e="detail")=>{d(),i.default(e),a.default(),r.default(c,e)},d=()=>{document.getElementById("root").innerHTML=""};c("detail")},403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,n,o)=>{const a=document.getElementById(e),r=document.getElementById(t),i=document.importNode(a.content,!0).firstElementChild;return o&&(i.id=o),{componentElement:i,parentElement:r,insertAtStart:n,attach:()=>{r.insertAdjacentElement(n?"afterbegin":"beforeend",i)}}}},56:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(403)),r=o(n(640));t.default=e=>{const t=r.default().getMenuItems().find((t=>t.name===e));a.default(t.templateId,"root",!0,"detail__card").attach()}},161:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(403));t.default=()=>{a.default("main-card","root",!0,"person__card").attach()}},500:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(403)),r=o(n(640));t.default=(e,t)=>{const n=t=>{const n=t.target.getAttribute("name");e(n)},o=a.default("menu","root",!0,"menu-bar");var i;i=o.componentElement,r.default().getMenuItems().forEach((e=>{const o=document.createElement("div");o.classList.add("menu-item"),e.name===t&&o.classList.add("active");const a=document.createElement("i");a.setAttribute("name",e.name),e.iconClasses.forEach((t=>{a.classList.add(t),a.addEventListener("click",e.action?e.action:n)})),o.appendChild(a),i.appendChild(o)})),o.attach()}},263:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"detail",templateId:"detail-card",iconClasses:["far","fa-user"]},{name:"contacts",templateId:"contacts",iconClasses:["far","fa-envelope"]},{name:"portfolio",templateId:"portfolio",iconClasses:["fas","fa-laptop-code"]},{name:"studies",templateId:"studies",iconClasses:["fas","fa-university"]},{name:"download",type:"link",action:()=>{fetch("https://cv-jmg.s3.us-east-2.amazonaws.com/JuanMiguelGarciaFE.PDF").then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e);let n=document.createElement("a");n.href=t,n.download="JuanMGarcia.pdf",document.body.appendChild(n),n.click(),n.remove()}))},templateId:"download",iconClasses:["fa","fa-download"]}]},640:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(263));t.default=()=>{let e=a.default.map((e=>Object.assign(Object.assign({},e),{active:!1})));return{getMenuItems:()=>e,setMenuItems:t=>{e=[...t]}}}}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={id:o,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(752)})();