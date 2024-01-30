(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(81),i=t.n(r),a=t(645),o=t.n(a),s=t(667),c=t.n(s),d=new URL(t(591),t.b),l=new URL(t(302),t.b),u=o()(i()),p=c()(d),m=c()(l);u.push([n.id,`\n\n@font-face {\n    font-family: 'yumin';\n    src: url(${p});\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'yumin', serif;\n    --logo-color: #040404;\n    --logo-text-shadow: -1px 1px 0 #ddd584,\n    1px 1px 0 #ddd584,\n    1px -1px 0 #ddd584,\n    -1px -1px 0 #ddd584;\n    --curse-text-shadow: -1px 1px 0 #13b5db,\n    1px 1px 0 #13b5db,\n    1px -1px 0 #13b5db,\n    -1px -1px 0 #13b5db;\n}\n\nbody {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n                  url(${m});\n    background-size: 100% auto;\n    background-repeat: repeat-y;\n}\n\n#content {\n    \n}\n\nheader {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px;\n    gap: 5px;\n}\n\nheader img {\n    width: 200px;\n}\n\nheader a {\n    margin-right: auto;\n    color: var(--logo-color);\n    text-shadow: var(--logo-text-shadow);\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n}\n\n\n\nnav {\n    /* margin-right: 20px; */\n    display: flex;\n    align-self: stretch;\n    align-items: stretch;\n}\n\nnav button {\n    \n    border: none;\n    margin: 0;\n    padding: 1rem;\n    background-color: rgba(0, 0, 0, 0);\n    color: #ffffff;\n    font-size: 2rem;\n    transition: .5s;\n}\n\nnav button:hover{\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer;\n}\n\n.container {\n    /* background-color: antiquewhite; */\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container h1 {\n    color: #ffffff;\n}\n\n.cards {\n    width: min(100%, 700px);\n    background-color: rgb(255, 255, 255, 0.7);\n    padding: 10px;\n    display: grid;\n    /* grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr; */\n    gap: 10px;\n}\n\n.menu .cards  {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n}\n\n.latest .cards {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n}\n\n.card .intro {\n    font-size: 3rem;\n}\n\n.card .food-name {\n    font-size: 2rem;\n    color: var(--logo-color);\n    text-shadow: var(--curse-text-shadow);\n}\n\n.card .food-description {\n\n}\n\n.card .food-price {\n    font-size: 1.5rem;\n}\n\n.card .contact {\n    font-size: 1.5rem;\n}\n\n.img-container {\n    background-color: #ffffff;\n    /* height: 50%; */\n    width: 100%;\n    margin: auto 0;\n}\n\nimg {\n   width: 100%; \n   \n}`,""]);const f=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=i(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=r(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},302:(n,e,t)=>{n.exports=t.p+"d4848d02efe38a339432.jpg"},591:(n,e,t)=>{n.exports=t.p+"60e3a3f48616c3827e62.ttf"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),o=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};function g(){const n=document.createElement("div");n.classList.add("container"),n.classList.add("latest");const e=document.createElement("h1");e.textContent="Latest",n.append(e);const t=document.createElement("div");return t.classList.add("cards"),t.innerHTML='\n  <div class="card">\n    <span class="contact"><i class="bi bi-geo-alt-fill"></i>: 1 234 Nishishinjuku, Shinjuku City, Tokyo</span>\n    <span class="contact"><i class="bi bi-telephone-fill"></i>: +81 1-2345-6789</span>\n  </div>\n  <div class="card">\n    <img src="../src/findus.jpg" alt="findus">\n  </div>\n  \n  ',n.append(t),n}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,t.p;const v=document.querySelector("#content"),h=document.querySelector("#latest-button"),b=document.querySelector("#menu-button"),x=document.querySelector("#find-us-button");h.addEventListener("click",(()=>{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(function(){const n=document.createElement("div");n.classList.add("container"),n.classList.add("latest");const e=document.createElement("h1");e.textContent="Latest",n.append(e);const t=document.createElement("div");return t.classList.add("cards"),t.innerHTML='\n  <div class="card">\n    <img src="../src/latest.jpg" alt="latest">\n  </div>  \n  <div class="card">\n    <div class="intro">The <strong>HOTTEST</strong> (literally) cafe in Shinjuku !!!</div>\n  </div>  \n  ',n.append(t),n}())})),b.addEventListener("click",(()=>{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(function(){const n=document.createElement("div");n.classList.add("container"),n.classList.add("menu");const e=document.createElement("h1");e.textContent="Menu",n.append(e);const t=document.createElement("div");return t.classList.add("cards"),t.innerHTML='<div class="card">\n    <div class="img-container"><img src="../src/menu/finger.jpg" alt=""></div>\n      <p class="food-name">Sukuna\'s finger 1</p>\n      <p class="food-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?</p>\n      <p class="food-price">$15</p>\n    </div>\n    <div class="card">\n      <div class="img-container"><img src="../src/menu/spirit.jpg" alt=""></div>\n      <p class="food-name">Cursed Spirit</p>\n      <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa esse placeat, magnam illum ducimus rem voluptatum incidunt maxime, sint voluptatem natus. Minima rem delectus voluptas totam optio nemo. Ea?</p>\n      <p class="food-price">$5</p>\n    </div>\n    <div class="card">\n      <div class="img-container"><img src="../src/menu/bun.jpg" alt=""></div>\n      <p class="food-name">Nanami\'s bun</p>\n      <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi inventore porro, veritatis quasi quam maiores in? Cumque iure, totam veritatis doloribus atque sed eum nam voluptas ipsum dolores dicta.</p>\n      <p class="food-price">$5</p>\n    </div>\n    <div class="card">\n      <div class="img-container"><img src="../src/menu/finger.jpg" alt=""></div>\n      <p class="food-name">Sukuna\'s finger 2</p>\n      <p class="food-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?</p>\n      <p class="food-price">$15</p>\n    </div>',n.append(t),n}())})),x.addEventListener("click",(()=>{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(g())})),v.appendChild(g())})()})();