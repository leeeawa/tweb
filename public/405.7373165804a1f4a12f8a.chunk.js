"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[405,512],{1405:(e,t,s)=>{s.r(t),s.d(t,{ripple:()=>c});var i=s(8497),n=s(9674),r=s(5432),o=s(3512),l=s(5975);let a=0;function c(e,t=(()=>Promise.resolve()),s=null,c=!1,d=e){if(e.querySelector(".c-ripple"))return;e.classList.add("rp");let h,u=document.createElement("div");u.classList.add("c-ripple"),e.classList.contains("rp-square")&&u.classList.add("is-square"),e[c?"prepend":"append"](u);const m=(e,i)=>{const o=Date.now(),l=document.createElement("div"),c=a++,d=1e3*+window.getComputedStyle(u).getPropertyValue("--ripple-duration").replace("s","");h=()=>{let e=Date.now()-o;const t=()=>{n.Z.mutate((()=>{l.remove()})),s&&s(c)};if(e<d){let s=Math.max(d-e,d/2);setTimeout((()=>l.classList.add("hiding")),Math.max(s-d/2,0)),setTimeout(t,s)}else l.classList.add("hiding"),setTimeout(t,d/2);r.IS_TOUCH_SUPPORTED||window.removeEventListener("contextmenu",h),h=null,v=!1},t&&t(c),window.requestAnimationFrame((()=>{const t=u.getBoundingClientRect();l.classList.add("c-ripple__circle");const s=e-t.left,n=i-t.top,r=Math.sqrt(Math.pow(Math.abs(n-t.height/2)+t.height/2,2)+Math.pow(Math.abs(s-t.width/2)+t.width/2,2)),o=s-r/2,a=n-r/2;l.style.width=l.style.height=r+"px",l.style.left=o+"px",l.style.top=a+"px",u.append(l)}))},p=t=>t.target!==e&&(["BUTTON","A"].includes(t.target.tagName)||(0,i.Z)(t.target,"c-ripple")!==u)&&(d===e||!(0,l.Z)(t.target,d));let v=!1;if(r.IS_TOUCH_SUPPORTED){let e=()=>{h&&h()};d.addEventListener("touchstart",(t=>{if(!o.default.settings.animationsEnabled)return;if(t.touches.length>1||v||p(t))return;v=!0;let{clientX:s,clientY:i}=t.touches[0];m(s,i),d.addEventListener("touchend",e,{once:!0}),window.addEventListener("touchmove",(t=>{t.cancelBubble=!0,t.stopPropagation(),e(),d.removeEventListener("touchend",e)}),{once:!0})}),{passive:!0})}else d.addEventListener("mousedown",(e=>{if(![0,2].includes(e.button))return;if(!o.default.settings.animationsEnabled)return;if("0"===d.dataset.ripple||p(e))return;if(v)return void(v=!1);let{clientX:t,clientY:s}=e;m(t,s),window.addEventListener("mouseup",h,{once:!0,passive:!0}),window.addEventListener("contextmenu",h,{once:!0,passive:!0})}),{passive:!0})}},410:(e,t,s)=>{s.d(t,{GO:()=>n,ZP:()=>r});const i=s(1267).Z.debug,n="undefined"!=typeof window?window:self,r=i},1267:(e,t,s)=>{s.d(t,{Z:()=>n});const i={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1,transport:"websocket"};i.http=location.search.indexOf("http=1")>0,i.http&&(i.transport="https");const n=i},3725:(e,t,s)=>{s.d(t,{b:()=>n});var i=s(319);function n(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach((e=>e(...t)))},listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise(((s,i)=>{e.resolve=e=>{t.isFulfilled||t.isRejected||(t.isFulfilled=!0,s(e))},e.reject=(...e)=>{t.isRejected||t.isFulfilled||(t.isRejected=!0,i(...e))}}));return t.catch(i.Z).finally((()=>{t.notify=t.notifyAll=t.lastNotify=null,t.listeners.length=0,t.cancel&&(t.cancel=()=>{})})),Object.assign(t,e),t}},5975:(e,t,s)=>{function i(e,t){if(e.parentElement===t)return e;for(;e.parentElement;)if((e=e.parentElement).parentElement===t)return e;return null}s.d(t,{Z:()=>i})},8487:(e,t,s)=>{function i(e){return null==e?void 0:e.isConnected}s.d(t,{Z:()=>i})},3241:(e,t,s)=>{s.d(t,{Z:()=>i});class i{constructor(e){this._constructor(e)}_constructor(e=!1){this.reuseResults=e,this.listeners={},this.listenerResults={}}addEventListener(e,t,s){var i;(null!==(i=this.listeners[e])&&void 0!==i?i:this.listeners[e]=[]).push({callback:t,options:s}),this.listenerResults.hasOwnProperty(e)&&(t(...this.listenerResults[e]),null==s?void 0:s.once)&&this.listeners[e].pop()}addMultipleEventsListeners(e){for(const t in e)this.addEventListener(t,e[t])}removeEventListener(e,t,s){this.listeners[e]&&this.listeners[e].findAndSplice((e=>e.callback===t))}_dispatchEvent(e,t,...s){this.reuseResults&&(this.listenerResults[e]=s);const i=t&&[],n=this.listeners[e];return n&&n.slice().forEach((t=>{var r;if(-1===n.findIndex((e=>e.callback===t.callback)))return;let o;try{o=t.callback(...s)}catch(e){console.error(e)}i&&i.push(o),(null===(r=t.options)||void 0===r?void 0:r.once)&&this.removeEventListener(e,t.callback)})),i}dispatchResultableEvent(e,...t){return this._dispatchEvent(e,!0,...t)}dispatchEvent(e,...t){this._dispatchEvent(e,!1,...t)}cleanup(){this.listeners={},this.listenerResults={}}}},319:(e,t,s)=>{function i(){}s.d(t,{Z:()=>i})},3035:(e,t,s)=>{let i;function n(e){i?i.push(e):(i=[e],requestAnimationFrame((()=>{const e=i;i=void 0,e.forEach((e=>e()))})))}s.d(t,{AD:()=>c,T2:()=>n,TR:()=>a,d1:()=>d});let r,o,l=!1;function a(e){r?l?e():r.push(e):(r=[e],requestAnimationFrame((()=>{l=!0;for(let e=0;e<r.length;++e)r[e]();r=void 0,l=!1})))}function c(){return o||(o=new Promise(requestAnimationFrame),o.then((()=>{o=void 0})),o)}function d(){return new Promise((e=>{n((()=>{n(e)}))}))}},9674:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(3035),n=s(3725),r=s(410),o=s(8487);const l=new class{constructor(){this.promises={},this.raf=i.T2.bind(null),this.scheduled=!1}do(e,t){let s=this.promises[e];return s||(this.scheduleFlush(),s=this.promises[e]=(0,n.b)()),void 0!==t&&s.then((()=>t())),s}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const s=(0,o.Z)(e),i=s?this.mutate():Promise.resolve();return void 0!==t&&(s?t():i.then((()=>t()))),i}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf((()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}})))}};r.GO&&(r.GO.sequentialDom=l);const a=l},1507:(e,t,s)=>{s.d(t,{NM:()=>i,gZ:()=>l,hj:()=>n,rU:()=>o,yF:()=>r});const i=0,n=1271266957,r=777e3,o=2147483647,l=""},3512:(e,t,s)=>{s.r(t),s.d(t,{RootScope:()=>o,default:()=>a});var i=s(1507),n=s(3241),r=s(410);class o extends n.Z{constructor(){super(),this.overlaysActive=0,this.idle={isIDLE:!0,deactivated:!1,focusPromise:Promise.resolve(),focusResolve:()=>{}},this.connectionStatus={},this.filterId=0,this.config={forwarded_count_max:100,edit_time_limit:172800,pinned_dialogs_count_max:5,pinned_infolder_count_max:100,message_length_max:4096,caption_length_max:1024},this.addEventListener("peer_changed",(e=>{this.peerId=e,document.body.classList.toggle("has-chat",!!e)})),this.addEventListener("user_auth",(({id:e})=>{this.myId="number"==typeof i.NM?+e:""+e})),this.addEventListener("connection_status_change",(e=>{this.connectionStatus[e.name]=e})),this.addEventListener("idle",(e=>{e?this.idle.focusPromise=new Promise((e=>{this.idle.focusResolve=e})):this.idle.focusResolve()}))}get themeColorElem(){return void 0!==this._themeColorElem?this._themeColorElem:this._themeColorElem=document.head.querySelector('[name="theme-color"]')||null}setThemeColor(e=this.themeColor){e||(e=this.isNight()?"#212121":"#ffffff");const t=this.themeColorElem;t&&t.setAttribute("content",e)}setThemeListener(){try{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{this.systemTheme=e.matches?"night":"day",this.myId?this.dispatchEvent("theme_change"):this.setTheme()};"addEventListener"in e?e.addEventListener("change",t):"addListener"in e&&e.addListener(t),t()}catch(e){}}setTheme(){const e=this.isNight(),t=document.head.querySelector('[name="color-scheme"]');t&&t.setAttribute("content",e?"dark":"light"),document.documentElement.classList.toggle("night",e),this.setThemeColor()}get isOverlayActive(){return this.overlaysActive>0}set isOverlayActive(e){this.overlaysActive+=e?1:-1,this.dispatchEvent("overlay_toggle",this.isOverlayActive)}isNight(){return"night"===this.getTheme().name}getTheme(e=("system"===this.settings.theme?this.systemTheme:this.settings.theme)){return this.settings.themes.find((t=>t.name===e))}}const l=new o;r.GO.rootScope=l;const a=l}}]);
//# sourceMappingURL=405.7373165804a1f4a12f8a.chunk.js.map