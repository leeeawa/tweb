var serviceWorkerOption = {"assets":["/0.4b56744f7ec7420f270a.chunk.js","/1.38675876f4e46d287dbe.chunk.js","/11.f9d96fa11386b5391004.chunk.js","/12.ab5084dc015e111334e5.chunk.js","/13.de60fc693df70ccea72f.chunk.js","/14.7511118f52ef7e0af6dc.chunk.js","/15.2daed452a291a2f97ace.chunk.js","/16.6ddf30d90673c68a110a.chunk.js","/17.6d16ad45bf6d11ba5ecf.chunk.js","/18.f683286f39fb9d7cb666.chunk.js","/19.91e20b4eea33d83c673f.chunk.js","/2.78b603ff26e600c0c701.chunk.js","/20.afb9337fc065344d5b70.chunk.js","/21.859f63e29f6f0e760721.chunk.js","/22.b79a7f086eb5778d6ac7.chunk.js","/23.81490fbcfdacc4d4346f.chunk.js","/24.35f482db96e0df3be260.chunk.js","/3.6782f67eb76bb4093ff1.chunk.js","/4.544e00f7dd185a04244b.chunk.js","/5.18e1f9bf610aacc5e2a7.chunk.js","/6.a8204130e8acc4a9f8b2.chunk.js","/7.d64dcb68a30405adfb34.chunk.js","/8.d4f81ac68bad7289cc83.chunk.js","/main.a7ccc904fa9aff457ecb.css","/main.b0913bb97d916696be74.bundle.js","/mtproto.worker.cbfb61f00e845e59ce01.bundle.worker.js","/npm.qr-code-styling.04c060a1842edd04dcba.chunk.js","/rlottie.worker.086dfed03cbca80766c6.bundle.worker.js","/style-desktop.9d7b485ed526720a3aad.css","/webp.worker.c0cc94110cda650246b2.bundle.worker.js"]};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"log",(function(){return oe})),n.d(t,"deferredPromises",(function(){return se}));const r={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1,transport:"websocket"};r.http=location.search.indexOf("http=1")>0,r.http&&(r.transport="https");var o=r;const i=o.debug;"undefined"!=typeof window?window:self;var s=i;var a="undefined"!=typeof window?window:self;const c=navigator?navigator.userAgent:null,l=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&a.MSStream,!!("safari"in a)||!(!c||!(/\b(iPad|iPhone|iPod)\b/.test(c)||c.match("Safari")&&!c.match("Chrome")))),u=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,h=(navigator.maxTouchPoints>0&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i),"undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope),d="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&!h,f=()=>self.clients.matchAll({includeUncontrolled:!1,type:"window"}),g=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(n=>{n.length&&n.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},p=(...e)=>{self.postMessage(...e)},m=()=>{};h&&g.bind(null,!1),h&&g.bind(null,!0);var v;!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(v||(v={}));const y=[v.None,v.Error,v.Warn,v.Log,v.Debug],w=Date.now();function b(){return"["+((Date.now()-w)/1e3).toFixed(3)+"]"}let P;const S=l||u;P=S?e=>e.split("@")[0]:e=>{const t=e.trim().split(" ");if(3===t.length)return t[1].slice(t[1].lastIndexOf(".")+1)};const A=!S,O=S?2:3;function T(){const e=(new Error).stack.split("\n"),t=e[O]||e[e.length-1];return"["+(P(t)||"<anonymous>")+"]"}const _={black:"[30m",red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",magenta:"[35m",cyan:"[36m",white:"[37m"},x=[["debug",v.Debug],["info",v.Log],["warn",v.Warn],["error",v.Error],["assert",v.Error],["trace",v.Log]];function E(e,t=v.Log|v.Warn|v.Error,n=!1,r=""){let o;s||n||(t=v.Error),A?r||(h?r=_.yellow:d&&(r=_.cyan)):r="";let i=r;r=r?`%s ${r}%s`:"%s";const a=function(...n){return t&v.Log&&console.log(r,b(),e,T(),...n)};return x.forEach(([n,o])=>{a[n]=function(...i){return t&o&&console[n](r,b(),e,T(),...i)}}),a.setPrefix=function(t){o=t,e="["+t+"]"},a.setPrefix(e),a.setLevel=function(e){t=y.slice(0,e+1).reduce((e,t)=>e|t,0)},a.bindPrefix=function(e){return E(`${o}] [${e}`,t,n,i)},a}var j=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};const k=self;function C(e){return e.ok&&200===e.status}function D(e){return Promise.race([e,(t=1e4,new Promise(e=>{setTimeout(e,t)})).then(()=>Promise.reject())]);var t}function F(e){return function(e,t){return new Promise(n=>{const r=new FileReader;r.addEventListener("loadend",e=>{n(e.target.result)}),r[t](e)})}(e,"readAsArrayBuffer")}function R(){}function N(e,t=""){let n;Array.isArray(e)||(e=[e]);const r=function(e){return-1===["image/jpeg","image/png","image/gif","image/svg+xml","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e)?"application/octet-stream":e}(t);try{n=new Blob(e,{type:r})}catch(t){let o=new BlobBuilder;e.forEach(e=>{o.append(e)}),n=o.getBlob(r)}return n}var L=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};var M=new class{constructor(){this.blobSupported=!0;try{N([],"")}catch(e){this.blobSupported=!1}}isAvailable(){return this.blobSupported}getFakeFileWriter(e,t,n){let r=new Uint8Array(t);return{write:(e,t)=>L(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;r.set(e,t)})),truncate:()=>{r=new Uint8Array},trim:e=>{r=r.slice(0,e)},finalize:(t=!0)=>{const o=N(r,e);return t&&n&&n(o),o},getParts:()=>r,replaceParts:e=>{r=e}}}},W=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};class I{constructor(e){this.dbName=e,this.useStorage=!0,o.test&&(this.dbName+="_test"),I.STORAGES.length&&(this.useStorage=I.STORAGES[0].useStorage),this.openDatabase(),I.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation(t=>t.delete("/"+e))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation(t=>t.match("/"+e))}save(e,t){return this.timeoutOperation(n=>n.put("/"+e,t))}getFile(e,t="blob"){return this.get(e).then(e=>{if(!e)throw"NO_ENTRY_FOUND";return e[t]()})}saveFile(e,t){t instanceof Blob||(t=N(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then(()=>t)}timeoutOperation(e){return this.useStorage?new Promise((t,n)=>W(this,void 0,void 0,(function*(){let r=!1;const o=setTimeout(()=>{n(),r=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const o=yield e(n);if(r)return;t(o)}catch(e){n(e)}clearTimeout(o)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(e,t,n){const r=M.getFakeFileWriter(n,t,t=>this.saveFile(e,t).catch(()=>t));return Promise.resolve(r)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>{if(t.useStorage=e,!e)return t.deleteAll()}))}}I.STORAGES=[];var q=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};const B=new I("cachedStreamChunks");setInterval(()=>B.timeoutOperation(e=>e.keys().then(t=>{const n=new Map,r=Date.now()/1e3|0;for(const e of t){const t=e.url.match(/\/(\d+?)\?/);t&&!n.has(t[1])&&n.set(t[1],e)}const o=[];for(const[t,i]of n){const n=e.match(i).then(n=>{if(+n.headers.get("Time-Cached")+86400<=r)return oe("will delete stream chunk:",t),e.delete(i,{ignoreSearch:!0,ignoreVary:!0})});o.push(n)}return Promise.all(o)})),18e5),setInterval(()=>{f().then(e=>{for(const[t,n]of se)if(!e.find(e=>e.id===t)){for(const e in n){n[e].reject()}se.delete(t)}})},12e4);const U=new Map;class G{constructor(e){this.info=e,this.loadedOffsets=new Set,this.destroy=()=>{U.delete(this.id)},this.id=G.getId(e),U.set(this.id,this),this.limitPart=e.size>78643200?z:$,this.destroyDebounced=function(e,t,n=!0,r=!0){let o,i,s,c,l=!1;const u=t=>{const n=s,r=c;try{n(e.apply(null,t))}catch(e){console.error("debounce error",e),r(e)}},h=(...e)=>{i||(i=new Promise((e,t)=>(s=e,c=t))),o?(clearTimeout(o),l=!0,c(),i=new Promise((e,t)=>(s=e,c=t))):n&&(u(e),l=!1);const h=a.setTimeout(()=>{!r||n&&!l||u(e),o===h&&(o=i=s=c=void 0,l=!1)},t);return o=h,i.catch(R),i};return h.clearTimeout=()=>{o&&(a.clearTimeout(o),c(),o=i=s=c=void 0,l=!1)},h}(this.destroy,15e4,!1,!0)}requestFilePartFromWorker(e,t,n=!1){return q(this,void 0,void 0,(function*(){const r={type:"requestFilePart",payload:[this.info.dcId,this.info.location,e,t]},o=JSON.stringify(r);r.id=o;const i=yield f().then(e=>{if(e.length)return e.find(e=>se.has(e.id))||e[0]});if(!i)throw new Error("no window");let s=se.get(i.id);s||se.set(i.id,s={});let a=s[o];if(a)return a.then(e=>e.bytes);i.postMessage(r),this.loadedOffsets.add(e),a=s[o]=function(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((n,r)=>{e.resolve=e=>{t.isFulfilled||t.isRejected||(t.isFulfilled=!0,n(e))},e.reject=(...e)=>{t.isRejected||t.isFulfilled||(t.isRejected=!0,r(...e))}});return t.catch(R).finally(()=>{t.notify=t.notifyAll=t.lastNotify=null,t.listeners.length=0,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}();const c=a.then(e=>e.bytes);return this.saveChunkToCache(c,e,t),!n&&this.preloadChunks(e,e+15*this.limitPart),c}))}requestFilePartFromCache(e,t,n){const r=this.getChunkKey(e,t);return B.getFile(r).then(e=>n?new Uint8Array:function(e){return F(e).then(e=>new Uint8Array(e))}(e),e=>{})}requestFilePart(e,t,n){return this.requestFilePartFromCache(e,t,n).then(r=>r||this.requestFilePartFromWorker(e,t,n))}saveChunkToCache(e,t,n){return e.then(e=>{const r=this.getChunkKey(t,n),o=new Response(e,{headers:{"Content-Length":""+e.length,"Content-Type":"application/octet-stream","Time-Cached":""+(Date.now()/1e3|0)}});return B.save(r,o)})}preloadChunk(e){this.loadedOffsets.has(e)||(this.loadedOffsets.add(e),this.requestFilePart(e,this.limitPart,!0))}preloadChunks(e,t){if(t>this.info.size&&(t=this.info.size),e)for(;e<t;e+=this.limitPart)this.preloadChunk(e);else this.preloadChunk(V(e,this.limitPart))}requestRange(e){this.destroyDebounced();const t=function(e,t,n){if(0===e[0]&&1===e[1])return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":"bytes 0-1/"+(n||"*"),"Content-Length":"2","Content-Type":t||"video/mp4"}});return null}(e,this.info.mimeType,this.info.size);if(t)return t;let[n,r]=e;const o=r&&r<this.limitPart?function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.log(2)))}(r-n+1):this.limitPart,i=V(n,o);return r||(r=Math.min(n+o,this.info.size-1)),this.requestFilePart(i,o).then(e=>{n===i&&r===i+o||(e=e.slice(n-i,r-i+1));const t={"Accept-Ranges":"bytes","Content-Range":`bytes ${n}-${n+e.byteLength-1}/${this.info.size||"*"}`,"Content-Length":""+e.byteLength};return this.info.mimeType&&(t["Content-Type"]=this.info.mimeType),new Response(e,{status:206,statusText:"Partial Content",headers:t})})}getChunkKey(e,t){return this.id+"?offset="+e+"&limit="+t}static get(e){var t;return null!==(t=U.get(this.getId(e)))&&void 0!==t?t:new G(e)}static getId(e){return e.location.id}}const $=524288,z=1048576;function V(e,t=2048){return e-e%t}var J={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]};class K{constructor(e,t){this.storageIsAvailable=!0,function(e,t){if(t)for(let n in t)void 0!==t[n]&&(e[n]=t[n])}(this,e),o.test&&(this.name+="_test"),this.storeName=t,this.log=E("IDB-"+this.storeName),this.openDatabase(!0),K.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const n=t.db;n&&(n.onclose=()=>{},n.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let n=!1;return setTimeout(()=>{n||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,r)=>{t.onsuccess=o=>{n=!0;const i=t.result;let s=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),r(e)},i.onclose=e=>{this.log.error("closed:",e),!s&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(s=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},t.onerror=e=>{n=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),r(e)},t.onupgradeneeded=e=>{n=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var n;const r=e.createObjectStore(t.name);if(null===(n=t.indexes)||void 0===n?void 0:n.length)for(const e of t.indexes)r.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",n=>e.map((e,r)=>n.put(t[r],e)),"")}saveFile(e,t){return t instanceof Blob||(t=N(t)),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,n,r=this.storeName){let o;return n&&(o=performance.now(),this.log(n+": start")),this.openDatabase().then(i=>new Promise((s,a)=>{const c=i.transaction([r],e);c.onerror=e=>{clearTimeout(l),a(c.error)},c.oncomplete=e=>{clearTimeout(l),n&&this.log(n+": end",performance.now()-o);const t=d.map(e=>e.result);s(h?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",c)},1e4),u=t(c.objectStore(r)),h=Array.isArray(u),d=h?u:[].concat(u)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}K.STORAGES=[];var Y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};const H=self,X=location.protocol+"//"+location.hostname+location.pathname.split("/").slice(0,-1).join("/")+"/";const Q=new class{constructor(e,t,n){this.defaults=n,this.cache={},this.storage=new K(e,t)}get(e){return Y(this,void 0,void 0,(function*(){if(void 0!==this.cache[e])return this.cache[e];let t;try{t=yield this.storage.get(e)}catch(e){}if(void 0!==this.cache[e])return this.cache[e];if(void 0===t){const n=this.defaults[e];t="function"==typeof n?n():n}return this.cache[e]=t}))}set(e,t){return Y(this,void 0,void 0,(function*(){this.cache[e]=t;try{this.storage.save(e,t)}catch(e){}}))}}(J,"session",{push_mute_until:0,push_last_alive:0,push_lang:{},push_settings:{}});H.addEventListener("push",e=>{const t=e.data.json();oe("push",t);let n=!1;const r=Promise.all([Q.get("push_mute_until"),Q.get("push_last_alive"),H.clients.matchAll({type:"window"})]).then(e=>{const[r,o,i]=e;if(oe("matched clients",i),n=i.length>0,n)throw"Supress notification because some instance is alive";const s=Date.now();if(re()&&r&&s<r)throw`Supress notification because mute for ${Math.ceil((r-s)/6e4)} min`;if(!t.badge)throw"No badge?"});r.catch(e=>{oe(e)});const o=r.then(()=>Promise.all([Q.get("push_settings"),Q.get("push_lang")])).then(e=>function(e,t,n){const r="assets/img/logo_filled_rounded.png";let o,i=e.title||"Telegram",s=e.description||"";e.custom&&(o=e.custom.channel_id?""+-e.custom.channel_id:e.custom.chat_id?""+-e.custom.chat_id:e.custom.from_id||"");e.custom.peerId=""+o;let a="peer"+o;t&&t.nopreview&&(i="Telegram",s=n.push_message_nopreview||"You have a new message",a="unknown_peer");oe("show notify",i,s,r,e);const c=[{action:"mute1d",title:n.push_action_mute1d||"Mute for 24H"}];return H.registration.showNotification(i,{body:s,icon:r,tag:a,data:e,actions:c}).then(e=>{var t;e&&e.notification&&(t=e.notification,ee.has(t)||(ee.add(t),t.onclose=te))}).catch(e=>{oe.error("Show notification promise",e)})}(t,e[0],e[1])).catch(()=>(oe("Closing all notifications on push",n),re()||n?ne():H.registration.showNotification("Telegram",{tag:"unknown_peer"}).then(()=>{if(n)return ne();setTimeout(()=>ne(),n?0:100)}).catch(e=>{oe.error("Show notification error",e)})));e.waitUntil(o)}),H.addEventListener("notificationclick",e=>{const t=e.notification;oe("On notification click: ",t.tag),t.close();const n=e.action;if("mute1d"===n&&re())return oe("[SW] mute for 1d"),void Q.set("push_mute_until",Date.now()+864e5);const r=t.data;if(!r)return;const o=H.clients.matchAll({type:"window"}).then(e=>{r.action=n,Z={type:"push_click",payload:r};for(let t=0;t<e.length;t++){const n=e[t];if("focus"in n)return n.focus(),n.postMessage(Z),void(Z=void 0)}if(H.clients.openWindow)return Q.get("push_settings").then(e=>H.clients.openWindow(e.baseUrl||X))}).catch(e=>{oe.error("Clients.matchAll error",e)});e.waitUntil(o)}),H.addEventListener("notificationclose",te);let Z,ee=new Set;function te(e){var t;t=e.notification,ee.delete(t)}function ne(){for(const e of ee)try{e.close()}catch(e){}let e;return e="getNotifications"in H.registration?H.registration.getNotifications({}).then(e=>{for(let t=0,n=e.length;t<n;++t)try{e[t].close()}catch(e){}}).catch(e=>{oe.error("Offline register SW error",e)}):Promise.resolve(),ee.clear(),e}function re(){return u}const oe=E("SW",v.Error|v.Debug|v.Log|v.Warn),ie=self,se=new Map,ae={notifications_clear:()=>{ne()},ping:(e,t)=>{!function(e,t){const n=t.ports&&t.ports[0]||t.source,r=e.payload;r.localNotifications&&Q.set("push_last_alive",Date.now()),Z&&n&&"postMessage"in n&&(n.postMessage(Z,[]),Z=void 0),r.lang&&Q.set("push_lang",r.lang),r.settings&&Q.set("push_settings",r.settings)}(e,t)},requestFilePart:(e,t)=>{const n=t.source,r=se.get(n.id);if(!r)return;const o=r[e.id];o&&(e.error?o.reject(e.error):o.resolve(e.payload),delete r[e.id])},toggleStorage:e=>{I.toggleStorage(e.payload)}};ie.addEventListener("message",e=>{const t=e.data,n=ae[t.type];n&&n(t,e)});const ce=e=>{if(0===e.request.url.indexOf(location.origin+"/")&&e.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/)&&!l)return e.respondWith(function(e){return j(this,void 0,void 0,(function*(){try{const t=yield D(k.caches.open("cachedAssets")),n=yield D(t.match(e.request,{ignoreVary:!0}));if(n&&C(n))return n;const r={Vary:"*"};let o=yield fetch(e.request,{headers:r});if(C(o))t.put(e.request,o.clone());else if(304===o.status){const n=e.request.url.replace(/\?.+$/,"")+"?"+(1e5*Math.random()|0);o=yield fetch(n,{headers:r}),C(o)&&t.put(e.request,o.clone())}return o}catch(t){return fetch(e.request)}}))}(e));try{const[,t,n,r]=/http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(e.request.url)||[];switch(n){case"stream":!function(e,t){const n=function(e){if(!e)return[0,0];const[,t]=e.split("="),n=t.split(", "),[r,o]=n[0].split("-");return[+r,+o||0]}(e.request.headers.get("Range")),r=JSON.parse(decodeURIComponent(t)),o=G.get(r);var i;e.respondWith(Promise.race([(i=45e3,new Promise(e=>{setTimeout(()=>{e(new Response("",{status:408,statusText:"Request timed out."}))},i)})),o.requestRange(n)]))}(e,r)}}catch(t){e.respondWith(new Response("",{status:500,statusText:"Internal Server Error"}))}},le=()=>{ie.onfetch=ce};ie.addEventListener("install",e=>{oe("installing"),e.waitUntil(ie.skipWaiting())}),ie.addEventListener("activate",e=>{oe("activating",ie),e.waitUntil(ie.caches.delete("cachedAssets")),e.waitUntil(ie.clients.claim())}),ie.onerror=e=>{oe.error("error:",e)},ie.onunhandledrejection=e=>{oe.error("onunhandledrejection:",e)},ie.onoffline=ie.ononline=le,le()}]);
//# sourceMappingURL=sw.js.map