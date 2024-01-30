(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(81),o=t.n(a),r=t(645),s=t.n(r),c=t(667),d=t.n(c),i=new URL(t(591),t.b),l=new URL(t(302),t.b),p=s()(o()),u=d()(i),m=d()(l);p.push([e.id,`\n\n@font-face {\n    font-family: 'yumin';\n    src: url(${u});\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'yumin', serif;\n    --logo-color: #040404;\n    --logo-text-shadow: -1px 1px 0 #ddd584,\n    1px 1px 0 #ddd584,\n    1px -1px 0 #ddd584,\n    -1px -1px 0 #ddd584;\n    --curse-text-shadow: -1px 1px 0 #13b5db,\n    1px 1px 0 #13b5db,\n    1px -1px 0 #13b5db,\n    -1px -1px 0 #13b5db;\n}\n\nbody {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n                  url(${m});\n    background-size: 100% auto;\n    background-repeat: repeat-y;\n}\n\nheader {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px;\n    gap: 5px;\n}\n\nheader img {\n    width: 200px;\n}\n\nheader a {\n    margin-right: auto;\n    color: var(--logo-color);\n    text-shadow: var(--logo-text-shadow);\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n}\n\nimg {\n    width: 100%;  \n}\n\nnav {\n    /* margin-right: 20px; */\n    display: flex;\n    align-self: stretch;\n    align-items: stretch;\n}\n\nnav button {\n    \n    border: none;\n    margin: 0;\n    padding: 1rem;\n    background-color: rgba(0, 0, 0, 0);\n    color: #ffffff;\n    font-size: 2rem;\n    transition: .5s;\n}\n\nnav button:hover{\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer;\n}\n\n.container {\n    /* background-color: antiquewhite; */\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container h1 {\n    color: #ffffff;\n}\n\n.cards {\n    width: min(100%, 700px);\n    background-color: rgb(255, 255, 255, 0.7);\n    padding: 10px;\n    display: grid;\n    /* grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr; */\n    gap: 10px;\n}\n\n.menu .cards  {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n}\n\n.latest .cards {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n}\n\n.card .intro {\n    font-size: 3rem;\n}\n\n.card .food-name {\n    \n    font-size: 2rem;\n    color: var(--logo-color);\n    text-shadow: var(--curse-text-shadow);\n}\n\n.card .food-price {\n    margin-top: auto;\n    font-size: 1.5rem;\n}\n\n.card .contact {\n    font-size: 1.5rem;\n}\n\n.img-container {\n    background-color: #ffffff;\n    height: 350px;\n    width: 100%;\n    margin: 0;\n    display: flex;\n    align-items: center;\n}\n\n.img-container img {\n   width: 100%; \n   \n}`,""]);const f=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(s[d]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);a&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},s=[],c=0;c<e.length;c++){var d=e[c],i=a.base?d[0]+a.base:d[0],l=r[i]||0,p="".concat(i," ").concat(l);r[i]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var c=t(r[s]);n[c].references--}for(var d=a(e,o),i=0;i<r.length;i++){var l=t(r[i]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},302:(e,n,t)=>{e.exports=t.p+"d4848d02efe38a339432.jpg"},591:(e,n,t)=>{e.exports=t.p+"60e3a3f48616c3827e62.ttf"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),s=t.n(r),c=t(565),d=t.n(c),i=t(216),l=t.n(i),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"043985e08e0b6d9fc976.png",g=t.p+"69c5163ea9a40444fbb9.jpg",v=t.p+"d38db7a0cc2e083a3f1e.jpg",b=t.p+"78845b224f137e7c90b8.jpg",x=t.p+"f2e491aa27717190b8d5.jpg",y=t.p+"81def96724e8a038e210.jpg";function w(){const e=document.createElement("div");e.classList.add("container"),e.classList.add("latest");const n=document.createElement("h1");n.textContent="Latest",e.append(n);const t=document.createElement("div");t.classList.add("cards");const a=document.createElement("div");a.classList.add("card");const o=new Image;o.src=g,a.append(o),t.append(a);const r=document.createElement("div");r.classList.add("card");const s=document.createElement("div");s.classList.add("intro"),s.textContent="The HOTTEST (literally) cafe in Shinjuku !!!";const c=document.createElement("p");return c.textContent="Welcome to the world of Jujustu Kaisen, where mystical powers and ancient curses collide! Step into our Jujustu Kaisen themed cafe and immerse yourself in the thrilling universe created by Gege Akutami. Inspired by the popular manga and anime series, our cafe is a haven for fans and enthusiasts alike.\n\n  As you enter, you'll immediately be transported to the vibrant streets of Tokyo and the hidden world of sorcery. Our cafe is meticulously designed to capture the essence of Jujustu Kaisen, with walls adorned with breathtaking artwork, character cutouts, and memorabilia that will make your heart skip a beat.",r.append(s),r.append(c),t.append(r),e.append(t),e}const E=document.querySelector("#content"),L=document.querySelector("#latest-button"),C=document.querySelector("#menu-button"),k=document.querySelector("#find-us-button");L.addEventListener("click",(()=>{for(;E.firstChild;)E.removeChild(E.firstChild);E.appendChild(w())})),C.addEventListener("click",(()=>{for(;E.firstChild;)E.removeChild(E.firstChild);E.appendChild(function(){const e=document.createElement("div");e.classList.add("container"),e.classList.add("menu");const n=document.createElement("h1");n.textContent="Menu",e.append(n);const t=document.createElement("div");t.classList.add("cards");const a=document.createElement("div");a.classList.add("card");const o=document.createElement("div");o.classList.add("img-container");const r=new Image;r.src=v,o.append(r);const s=document.createElement("p");s.classList.add("food-name"),s.textContent="Sukuna's finger";const c=document.createElement("p");c.classList.add("food-description"),c.textContent="Over a thousand years ago, Sukuna accepted Kenjaku's offer to participate in the Culling Game.\n   As part of the contract, Kenjaku divided Sukuna's soul into his twenty fingers and turned them into cursed objects, \n   allowing Sukuna to live on after his death.";const d=document.createElement("p");d.classList.add("food-price"),d.textContent="$15",a.append(o),a.append(s),a.append(c),a.append(d),t.append(a);const i=document.createElement("div");i.classList.add("card");const l=document.createElement("div");l.classList.add("img-container");const p=new Image;p.src=v,l.append(p);const u=document.createElement("p");u.classList.add("food-name"),u.textContent="Sukuna's finger x 15";const m=document.createElement("p");m.classList.add("food-description"),m.textContent="Jogo found Yuji and didn't hesitate to feed him every finger in his possession.\n   Once Sukuna gained control of the vessel, Jogo recognized his presence was even worse than Satoru's because it was overwhelmingly evil.\n   ";const f=document.createElement("p");f.classList.add("food-price"),f.textContent="$200",i.append(l),i.append(u),i.append(m),i.append(f),t.append(i);const h=document.createElement("div");h.classList.add("card");const g=document.createElement("div");g.classList.add("img-container");const y=new Image;y.src=b,g.append(y);const w=document.createElement("p");w.classList.add("food-name"),w.textContent="Cursed Spirit";const E=document.createElement("p");E.classList.add("food-description"),E.textContent="A taste of a cursed spirit that nobody else knows...like swallowing whole a cloth that was used to wipe up vomit";const L=document.createElement("p");L.classList.add("food-price"),L.textContent="$10",h.append(g),h.append(w),h.append(E),h.append(L),t.append(h);const C=document.createElement("div");C.classList.add("card");const k=document.createElement("div");k.classList.add("img-container");const S=new Image;S.src=x,k.append(S);const j=document.createElement("p");j.classList.add("food-name"),j.textContent="Nanami's bun";const T=document.createElement("p");T.classList.add("food-description"),T.textContent="Nanami would visit the bakery for his favorite bread where he was friendly with the young lady behind the counter.\n   He notices a small curse on her shoulders and decided it was harmless enough and not worth risking exposing himself.";const I=document.createElement("p");return I.classList.add("food-price"),I.textContent="$5",C.append(k),C.append(j),C.append(T),C.append(I),t.append(C),e.append(t),e}())})),k.addEventListener("click",(()=>{for(;E.firstChild;)E.removeChild(E.firstChild);E.appendChild(function(){const e=document.createElement("div");e.classList.add("container"),e.classList.add("latest");const n=document.createElement("h1");n.textContent="Latest",e.append(n);const t=document.createElement("div");t.classList.add("cards");const a=document.createElement("div");a.classList.add("card");const o=document.createElement("span"),r=document.createElement("i");r.classList.add("bi"),r.classList.add("bi-geo-alt-fill"),o.append(r),o.append(": 1 234 Nishishinjuku, Shinjuku City, Tokyo"),a.append(o);const s=document.createElement("span"),c=document.createElement("i");c.classList.add("bi"),c.classList.add("bi-telephone-fill"),s.append(c),s.append(": +81 1-2345-6789"),a.append(s),t.append(a);const d=document.createElement("div");d.classList.add("card");const i=new Image;return i.src=y,a.append(i),t.append(d),e.append(t),e}())})),function(){const e=document.getElementById("homepage");e.textContent="";const n=new Image;n.src=h,e.append(n);const t=document.createElement("h1");t.textContent="Cafe",e.append(t)}(),E.appendChild(w())})()})();