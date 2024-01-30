(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(81),o=t.n(a),r=t(645),c=t.n(r),i=t(667),d=t.n(i),s=new URL(t(591),t.b),p=new URL(t(302),t.b),l=c()(o()),u=d()(s),m=d()(p);l.push([e.id,`\n\n@font-face {\n    font-family: 'yumin';\n    src: url(${u});\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'yumin', serif;\n    --logo-color: #040404;\n    --logo-text-shadow: -1px 1px 0 #ddd584,\n    1px 1px 0 #ddd584,\n    1px -1px 0 #ddd584,\n    -1px -1px 0 #ddd584;\n    --curse-text-shadow: -1px 1px 0 #13b5db,\n    1px 1px 0 #13b5db,\n    1px -1px 0 #13b5db,\n    -1px -1px 0 #13b5db;\n}\n\nbody {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n                  url(${m});\n    background-size: 100% auto;\n    background-repeat: repeat-y;\n}\n\nheader {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px;\n    gap: 5px;\n}\n\nheader img {\n    width: 200px;\n}\n\nheader a {\n    margin-right: auto;\n    color: var(--logo-color);\n    text-shadow: var(--logo-text-shadow);\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n}\n\n\n\nnav {\n    /* margin-right: 20px; */\n    display: flex;\n    align-self: stretch;\n    align-items: stretch;\n}\n\nnav button {\n    \n    border: none;\n    margin: 0;\n    padding: 1rem;\n    background-color: rgba(0, 0, 0, 0);\n    color: #ffffff;\n    font-size: 2rem;\n    transition: .5s;\n}\n\nnav button:hover{\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer;\n}\n\n.container {\n    /* background-color: antiquewhite; */\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container h1 {\n    color: #ffffff;\n}\n\n.cards {\n    width: min(100%, 700px);\n    background-color: rgb(255, 255, 255, 0.7);\n    padding: 10px;\n    display: grid;\n    /* grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr; */\n    gap: 10px;\n}\n\n.menu .cards  {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n}\n\n.latest .cards {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n}\n\n.card .intro {\n    font-size: 3rem;\n}\n\n.card .food-name {\n    font-size: 2rem;\n    color: var(--logo-color);\n    text-shadow: var(--curse-text-shadow);\n}\n\n.card .food-price {\n    font-size: 1.5rem;\n}\n\n.card .contact {\n    font-size: 1.5rem;\n}\n\n.img-container {\n    background-color: #ffffff;\n    /* height: 50%; */\n    width: 100%;\n    margin: auto 0;\n}\n\nimg {\n   width: 100%; \n   \n}`,""]);const f=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);a&&c[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var d=e[i],s=a.base?d[0]+a.base:d[0],p=r[s]||0,l="".concat(s," ").concat(p);r[s]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,a);a.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var d=a(e,o),s=0;s<r.length;s++){var p=t(r[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},302:(e,n,t)=>{e.exports=t.p+"d4848d02efe38a339432.jpg"},591:(e,n,t)=>{e.exports=t.p+"60e3a3f48616c3827e62.ttf"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),c=t.n(r),i=t(565),d=t.n(i),s=t(216),p=t.n(s),l=t(589),u=t.n(l),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"043985e08e0b6d9fc976.png",v=t.p+"69c5163ea9a40444fbb9.jpg",h=t.p+"d38db7a0cc2e083a3f1e.jpg",b=t.p+"78845b224f137e7c90b8.jpg",x=t.p+"f2e491aa27717190b8d5.jpg",y=t.p+"81def96724e8a038e210.jpg";function E(){const e=document.createElement("div");e.classList.add("container"),e.classList.add("latest");const n=document.createElement("h1");n.textContent="Latest",e.append(n);const t=document.createElement("div");t.classList.add("cards");const a=document.createElement("div");a.classList.add("card");const o=new Image;o.src=v,a.append(o),t.append(a);const r=document.createElement("div");r.classList.add("card");const c=document.createElement("div");return c.classList.add("intro"),c.textContent="The HOTTEST (literally) cafe in Shinjuku !!!",r.append(c),t.append(r),e.append(t),e}const L=document.getElementById("homepage"),C=new Image;C.src=g,L.append(C);const w=document.createElement("h1");w.textContent="Cafe",L.append(w);const S=document.querySelector("#content"),k=document.querySelector("#latest-button"),T=document.querySelector("#menu-button"),j=document.querySelector("#find-us-button");k.addEventListener("click",(()=>{for(;S.firstChild;)S.removeChild(S.firstChild);S.appendChild(E())})),T.addEventListener("click",(()=>{for(;S.firstChild;)S.removeChild(S.firstChild);S.appendChild(function(){const e=document.createElement("div");e.classList.add("container"),e.classList.add("menu");const n=document.createElement("h1");n.textContent="Menu",e.append(n);const t=document.createElement("div");t.classList.add("cards");const a=document.createElement("div");a.classList.add("card");const o=document.createElement("div");o.classList.add("img-container");const r=new Image;r.src=h,o.append(r);const c=document.createElement("p");c.classList.add("food-name"),c.textContent="Sukuna's finger 1";const i=document.createElement("p");i.classList.add("food-description"),i.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?";const d=document.createElement("p");d.classList.add("food-price"),d.textContent="$15",a.append(o),a.append(c),a.append(i),a.append(d),t.append(a);const s=document.createElement("div");s.classList.add("card");const p=document.createElement("div");p.classList.add("img-container");const l=new Image;l.src=b,p.append(l);const u=document.createElement("p");u.classList.add("food-name"),u.textContent="Cursed Spirit";const m=document.createElement("p");m.classList.add("food-description"),m.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa esse placeat, magnam illum ducimus rem voluptatum incidunt maxime, sint voluptatem natus. Minima rem delectus voluptas totam optio nemo. Ea?";const f=document.createElement("p");f.classList.add("food-price"),f.textContent="$10",s.append(p),s.append(u),s.append(m),s.append(f),t.append(s);const g=document.createElement("div");g.classList.add("card");const v=document.createElement("div");v.classList.add("img-container");const y=new Image;y.src=x,v.append(y);const E=document.createElement("p");E.classList.add("food-name"),E.textContent="Nanami's bun";const L=document.createElement("p");L.classList.add("food-description"),L.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi inventore porro, veritatis quasi quam maiores in? Cumque iure, totam veritatis doloribus atque sed eum nam voluptas ipsum dolores dicta.";const C=document.createElement("p");C.classList.add("food-price"),C.textContent="$5",g.append(v),g.append(E),g.append(L),g.append(C),t.append(g);const w=document.createElement("div");w.classList.add("card");const S=document.createElement("div");S.classList.add("img-container");const k=new Image;k.src=h,S.append(k);const T=document.createElement("p");T.classList.add("food-name"),T.textContent="Sukuna's finger 2";const j=document.createElement("p");j.classList.add("food-description"),j.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aspernatur et hic aliquid fuga obcaecati laudantium vero consequuntur odio. Doloribus pariatur assumenda inventore maiores iste mollitia iusto, vitae minima expedita?";const I=document.createElement("p");return I.classList.add("food-price"),I.textContent="$15",w.append(S),w.append(T),w.append(j),w.append(I),t.append(w),e.append(t),e}())})),j.addEventListener("click",(()=>{for(;S.firstChild;)S.removeChild(S.firstChild);S.appendChild(function(){const e=document.createElement("div");e.classList.add("container"),e.classList.add("latest");const n=document.createElement("h1");n.textContent="Latest",e.append(n);const t=document.createElement("div");t.classList.add("cards");const a=document.createElement("div");a.classList.add("card");const o=document.createElement("span"),r=document.createElement("i");r.classList.add("bi"),r.classList.add("bi-geo-alt-fill"),o.append(r),o.append(": 1 234 Nishishinjuku, Shinjuku City, Tokyo"),a.append(o);const c=document.createElement("span"),i=document.createElement("i");i.classList.add("bi"),i.classList.add("bi-telephone-fill"),c.append(i),c.append(": +81 1-2345-6789"),a.append(c),t.append(a);const d=document.createElement("div");d.classList.add("card");const s=new Image;return s.src=y,a.append(s),t.append(d),e.append(t),e}())})),S.appendChild(E())})()})();