var serviceWorkerOption = {"assets":[]};
        
        !function(t){var e={};function r(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){(function(){var e;function r(t,e,r){null!=t&&("number"==typeof t?this.fromNumber(t,e,r):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function i(){return new r(null)}var o="undefined"!=typeof navigator;o&&"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=function(t,e,r,i,o,n){for(var s=32767&e,h=e>>15;--n>=0;){var u=32767&this[t],a=this[t++]>>15,f=h*u+a*s;o=((u=s*u+((32767&f)<<15)+r[i]+(1073741823&o))>>>30)+(f>>>15)+h*a+(o>>>30),r[i++]=1073741823&u}return o},e=30):o&&"Netscape"!=navigator.appName?(r.prototype.am=function(t,e,r,i,o,n){for(;--n>=0;){var s=e*this[t++]+r[i]+o;o=Math.floor(s/67108864),r[i++]=67108863&s}return o},e=26):(r.prototype.am=function(t,e,r,i,o,n){for(var s=16383&e,h=e>>14;--n>=0;){var u=16383&this[t],a=this[t++]>>14,f=h*u+a*s;o=((u=s*u+((16383&f)<<14)+r[i]+o)>>28)+(f>>14)+h*a,r[i++]=268435455&u}return o},e=28),r.prototype.DB=e,r.prototype.DM=(1<<e)-1,r.prototype.DV=1<<e;r.prototype.FV=Math.pow(2,52),r.prototype.F1=52-e,r.prototype.F2=2*e-52;var n,s,h=new Array;for(n="0".charCodeAt(0),s=0;s<=9;++s)h[n++]=s;for(n="a".charCodeAt(0),s=10;s<36;++s)h[n++]=s;for(n="A".charCodeAt(0),s=10;s<36;++s)h[n++]=s;function u(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}function a(t,e){var r=h[t.charCodeAt(e)];return null==r?-1:r}function f(t){var e=i();return e.fromInt(t),e}function c(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}function p(t){this.m=t}function l(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function y(t,e){return t&e}function d(t,e){return t|e}function m(t,e){return t^e}function v(t,e){return t&~e}function g(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function b(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function T(){}function S(t){return t}function w(t){this.r2=i(),this.q3=i(),r.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}p.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},p.prototype.revert=function(t){return t},p.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},p.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},p.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},l.prototype.convert=function(t){var e=i();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(r.ZERO)>0&&this.m.subTo(e,e),e},l.prototype.revert=function(t){var e=i();return t.copyTo(e),this.reduce(e),e},l.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],i=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,i,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},l.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},l.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},r.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},r.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0},r.prototype.fromString=function(t,e){var i;if(16==e)i=4;else if(8==e)i=3;else if(256==e)i=8;else if(2==e)i=1;else if(32==e)i=5;else{if(4!=e)return void this.fromRadix(t,e);i=2}this.t=0,this.s=0;for(var o=t.length,n=!1,s=0;--o>=0;){var h=8==i?255&t[o]:a(t,o);h<0?"-"==t.charAt(o)&&(n=!0):(n=!1,0==s?this[this.t++]=h:s+i>this.DB?(this[this.t-1]|=(h&(1<<this.DB-s)-1)<<s,this[this.t++]=h>>this.DB-s):this[this.t-1]|=h<<s,(s+=i)>=this.DB&&(s-=this.DB))}8==i&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),n&&r.ZERO.subTo(this,this)},r.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},r.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},r.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},r.prototype.lShiftTo=function(t,e){var r,i=t%this.DB,o=this.DB-i,n=(1<<o)-1,s=Math.floor(t/this.DB),h=this.s<<i&this.DM;for(r=this.t-1;r>=0;--r)e[r+s+1]=this[r]>>o|h,h=(this[r]&n)<<i;for(r=s-1;r>=0;--r)e[r]=0;e[s]=h,e.t=this.t+s+1,e.s=this.s,e.clamp()},r.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var i=t%this.DB,o=this.DB-i,n=(1<<i)-1;e[0]=this[r]>>i;for(var s=r+1;s<this.t;++s)e[s-r-1]|=(this[s]&n)<<o,e[s-r]=this[s]>>i;i>0&&(e[this.t-r-1]|=(this.s&n)<<o),e.t=this.t-r,e.clamp()}},r.prototype.subTo=function(t,e){for(var r=0,i=0,o=Math.min(t.t,this.t);r<o;)i+=this[r]-t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i-=t[r],e[r++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=i<0?-1:0,i<-1?e[r++]=this.DV+i:i>0&&(e[r++]=i),e.t=r,e.clamp()},r.prototype.multiplyTo=function(t,e){var i=this.abs(),o=t.abs(),n=i.t;for(e.t=n+o.t;--n>=0;)e[n]=0;for(n=0;n<o.t;++n)e[n+i.t]=i.am(0,o[n],e,n,0,i.t);e.s=0,e.clamp(),this.s!=t.s&&r.ZERO.subTo(e,e)},r.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var i=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,i,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},r.prototype.divRemTo=function(t,e,o){var n=t.abs();if(!(n.t<=0)){var s=this.abs();if(s.t<n.t)return null!=e&&e.fromInt(0),void(null!=o&&this.copyTo(o));null==o&&(o=i());var h=i(),u=this.s,a=t.s,f=this.DB-c(n[n.t-1]);f>0?(n.lShiftTo(f,h),s.lShiftTo(f,o)):(n.copyTo(h),s.copyTo(o));var p=h.t,l=h[p-1];if(0!=l){var y=l*(1<<this.F1)+(p>1?h[p-2]>>this.F2:0),d=this.FV/y,m=(1<<this.F1)/y,v=1<<this.F2,g=o.t,b=g-p,T=null==e?i():e;for(h.dlShiftTo(b,T),o.compareTo(T)>=0&&(o[o.t++]=1,o.subTo(T,o)),r.ONE.dlShiftTo(p,T),T.subTo(h,h);h.t<p;)h[h.t++]=0;for(;--b>=0;){var S=o[--g]==l?this.DM:Math.floor(o[g]*d+(o[g-1]+v)*m);if((o[g]+=h.am(0,S,o,b,0,p))<S)for(h.dlShiftTo(b,T),o.subTo(T,o);o[g]<--S;)o.subTo(T,o)}null!=e&&(o.drShiftTo(p,e),u!=a&&r.ZERO.subTo(e,e)),o.t=p,o.clamp(),f>0&&o.rShiftTo(f,o),u<0&&r.ZERO.subTo(o,o)}}},r.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},r.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},r.prototype.exp=function(t,e){if(t>4294967295||t<1)return r.ONE;var o=i(),n=i(),s=e.convert(this),h=c(t)-1;for(s.copyTo(o);--h>=0;)if(e.sqrTo(o,n),(t&1<<h)>0)e.mulTo(n,s,o);else{var u=o;o=n,n=u}return e.revert(o)},r.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var r,i=(1<<e)-1,o=!1,n="",s=this.t,h=this.DB-s*this.DB%e;if(s-- >0)for(h<this.DB&&(r=this[s]>>h)>0&&(o=!0,n=u(r));s>=0;)h<e?(r=(this[s]&(1<<h)-1)<<e-h,r|=this[--s]>>(h+=this.DB-e)):(r=this[s]>>(h-=e)&i,h<=0&&(h+=this.DB,--s)),r>0&&(o=!0),o&&(n+=u(r));return o?n:"0"},r.prototype.negate=function(){var t=i();return r.ZERO.subTo(this,t),t},r.prototype.abs=function(){return this.s<0?this.negate():this},r.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},r.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+c(this[this.t-1]^this.s&this.DM)},r.prototype.mod=function(t){var e=i();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(r.ZERO)>0&&t.subTo(e,e),e},r.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new p(e):new l(e),this.exp(t,r)},r.ZERO=f(0),r.ONE=f(1),T.prototype.convert=S,T.prototype.revert=S,T.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r)},T.prototype.sqrTo=function(t,e){t.squareTo(e)},w.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=i();return t.copyTo(e),this.reduce(e),e},w.prototype.revert=function(t){return t},w.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},w.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},w.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)};var B,A,D,M=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],R=(1<<26)/M[M.length-1];function E(){var t;t=(new Date).getTime(),A[D++]^=255&t,A[D++]^=t>>8&255,A[D++]^=t>>16&255,A[D++]^=t>>24&255,D>=C&&(D-=C)}if(r.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},r.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),o=f(r),n=i(),s=i(),h="";for(this.divRemTo(o,n,s);n.signum()>0;)h=(r+s.intValue()).toString(t).substr(1)+h,n.divRemTo(o,n,s);return s.intValue().toString(t)+h},r.prototype.fromRadix=function(t,e){this.fromInt(0),null==e&&(e=10);for(var i=this.chunkSize(e),o=Math.pow(e,i),n=!1,s=0,h=0,u=0;u<t.length;++u){var f=a(t,u);f<0?"-"==t.charAt(u)&&0==this.signum()&&(n=!0):(h=e*h+f,++s>=i&&(this.dMultiply(o),this.dAddOffset(h,0),s=0,h=0))}s>0&&(this.dMultiply(Math.pow(e,s)),this.dAddOffset(h,0)),n&&r.ZERO.subTo(this,this)},r.prototype.fromNumber=function(t,e,i){if("number"==typeof e)if(t<2)this.fromInt(1);else for(this.fromNumber(t,i),this.testBit(t-1)||this.bitwiseTo(r.ONE.shiftLeft(t-1),d,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(r.ONE.shiftLeft(t-1),this);else{var o=new Array,n=7&t;o.length=1+(t>>3),e.nextBytes(o),n>0?o[0]&=(1<<n)-1:o[0]=0,this.fromString(o,256)}},r.prototype.bitwiseTo=function(t,e,r){var i,o,n=Math.min(t.t,this.t);for(i=0;i<n;++i)r[i]=e(this[i],t[i]);if(t.t<this.t){for(o=t.s&this.DM,i=n;i<this.t;++i)r[i]=e(this[i],o);r.t=this.t}else{for(o=this.s&this.DM,i=n;i<t.t;++i)r[i]=e(o,t[i]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()},r.prototype.changeBit=function(t,e){var i=r.ONE.shiftLeft(t);return this.bitwiseTo(i,e,i),i},r.prototype.addTo=function(t,e){for(var r=0,i=0,o=Math.min(t.t,this.t);r<o;)i+=this[r]+t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i+=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i+=t[r],e[r++]=i&this.DM,i>>=this.DB;i+=t.s}e.s=i<0?-1:0,i>0?e[r++]=i:i<-1&&(e[r++]=this.DV+i),e.t=r,e.clamp()},r.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},r.prototype.dAddOffset=function(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}},r.prototype.multiplyLowerTo=function(t,e,r){var i,o=Math.min(this.t+t.t,e);for(r.s=0,r.t=o;o>0;)r[--o]=0;for(i=r.t-this.t;o<i;++o)r[o+this.t]=this.am(0,t[o],r,o,0,this.t);for(i=Math.min(t.t,e);o<i;++o)this.am(0,t[o],r,o,0,e-o);r.clamp()},r.prototype.multiplyUpperTo=function(t,e,r){--e;var i=r.t=this.t+t.t-e;for(r.s=0;--i>=0;)r[i]=0;for(i=Math.max(e-this.t,0);i<t.t;++i)r[this.t+i-e]=this.am(e-i,t[i],r,0,0,this.t+i-e);r.clamp(),r.drShiftTo(1,r)},r.prototype.modInt=function(t){if(t<=0)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==e)r=this[0]%t;else for(var i=this.t-1;i>=0;--i)r=(e*r+this[i])%t;return r},r.prototype.millerRabin=function(t){var e=this.subtract(r.ONE),o=e.getLowestSetBit();if(o<=0)return!1;var n=e.shiftRight(o);(t=t+1>>1)>M.length&&(t=M.length);for(var s=i(),h=0;h<t;++h){s.fromInt(M[Math.floor(Math.random()*M.length)]);var u=s.modPow(n,this);if(0!=u.compareTo(r.ONE)&&0!=u.compareTo(e)){for(var a=1;a++<o&&0!=u.compareTo(e);)if(0==(u=u.modPowInt(2,this)).compareTo(r.ONE))return!1;if(0!=u.compareTo(e))return!1}}return!0},r.prototype.clone=function(){var t=i();return this.copyTo(t),t},r.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},r.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},r.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},r.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},r.prototype.toByteArray=function(){var t=this.t,e=new Array;e[0]=this.s;var r,i=this.DB-t*this.DB%8,o=0;if(t-- >0)for(i<this.DB&&(r=this[t]>>i)!=(this.s&this.DM)>>i&&(e[o++]=r|this.s<<this.DB-i);t>=0;)i<8?(r=(this[t]&(1<<i)-1)<<8-i,r|=this[--t]>>(i+=this.DB-8)):(r=this[t]>>(i-=8)&255,i<=0&&(i+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==o&&(128&this.s)!=(128&r)&&++o,(o>0||r!=this.s)&&(e[o++]=r);return e},r.prototype.equals=function(t){return 0==this.compareTo(t)},r.prototype.min=function(t){return this.compareTo(t)<0?this:t},r.prototype.max=function(t){return this.compareTo(t)>0?this:t},r.prototype.and=function(t){var e=i();return this.bitwiseTo(t,y,e),e},r.prototype.or=function(t){var e=i();return this.bitwiseTo(t,d,e),e},r.prototype.xor=function(t){var e=i();return this.bitwiseTo(t,m,e),e},r.prototype.andNot=function(t){var e=i();return this.bitwiseTo(t,v,e),e},r.prototype.not=function(){for(var t=i(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t},r.prototype.shiftLeft=function(t){var e=i();return t<0?this.rShiftTo(-t,e):this.lShiftTo(t,e),e},r.prototype.shiftRight=function(t){var e=i();return t<0?this.lShiftTo(-t,e):this.rShiftTo(t,e),e},r.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+g(this[t]);return this.s<0?this.t*this.DB:-1},r.prototype.bitCount=function(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=b(this[r]^e);return t},r.prototype.testBit=function(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)},r.prototype.setBit=function(t){return this.changeBit(t,d)},r.prototype.clearBit=function(t){return this.changeBit(t,v)},r.prototype.flipBit=function(t){return this.changeBit(t,m)},r.prototype.add=function(t){var e=i();return this.addTo(t,e),e},r.prototype.subtract=function(t){var e=i();return this.subTo(t,e),e},r.prototype.multiply=function(t){var e=i();return this.multiplyTo(t,e),e},r.prototype.divide=function(t){var e=i();return this.divRemTo(t,e,null),e},r.prototype.remainder=function(t){var e=i();return this.divRemTo(t,null,e),e},r.prototype.divideAndRemainder=function(t){var e=i(),r=i();return this.divRemTo(t,e,r),new Array(e,r)},r.prototype.modPow=function(t,e){var r,o,n=t.bitLength(),s=f(1);if(n<=0)return s;r=n<18?1:n<48?3:n<144?4:n<768?5:6,o=n<8?new p(e):e.isEven()?new w(e):new l(e);var h=new Array,u=3,a=r-1,y=(1<<r)-1;if(h[1]=o.convert(this),r>1){var d=i();for(o.sqrTo(h[1],d);u<=y;)h[u]=i(),o.mulTo(d,h[u-2],h[u]),u+=2}var m,v,g=t.t-1,b=!0,T=i();for(n=c(t[g])-1;g>=0;){for(n>=a?m=t[g]>>n-a&y:(m=(t[g]&(1<<n+1)-1)<<a-n,g>0&&(m|=t[g-1]>>this.DB+n-a)),u=r;0==(1&m);)m>>=1,--u;if((n-=u)<0&&(n+=this.DB,--g),b)h[m].copyTo(s),b=!1;else{for(;u>1;)o.sqrTo(s,T),o.sqrTo(T,s),u-=2;u>0?o.sqrTo(s,T):(v=s,s=T,T=v),o.mulTo(T,h[m],s)}for(;g>=0&&0==(t[g]&1<<n);)o.sqrTo(s,T),v=s,s=T,T=v,--n<0&&(n=this.DB-1,--g)}return o.revert(s)},r.prototype.modInverse=function(t){var e=t.isEven();if(this.isEven()&&e||0==t.signum())return r.ZERO;for(var i=t.clone(),o=this.clone(),n=f(1),s=f(0),h=f(0),u=f(1);0!=i.signum();){for(;i.isEven();)i.rShiftTo(1,i),e?(n.isEven()&&s.isEven()||(n.addTo(this,n),s.subTo(t,s)),n.rShiftTo(1,n)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);for(;o.isEven();)o.rShiftTo(1,o),e?(h.isEven()&&u.isEven()||(h.addTo(this,h),u.subTo(t,u)),h.rShiftTo(1,h)):u.isEven()||u.subTo(t,u),u.rShiftTo(1,u);i.compareTo(o)>=0?(i.subTo(o,i),e&&n.subTo(h,n),s.subTo(u,s)):(o.subTo(i,o),e&&h.subTo(n,h),u.subTo(s,u))}return 0!=o.compareTo(r.ONE)?r.ZERO:u.compareTo(t)>=0?u.subtract(t):u.signum()<0?(u.addTo(t,u),u.signum()<0?u.add(t):u):u},r.prototype.pow=function(t){return this.exp(t,new T)},r.prototype.gcd=function(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var i=e;e=r,r=i}var o=e.getLowestSetBit(),n=r.getLowestSetBit();if(n<0)return e;for(o<n&&(n=o),n>0&&(e.rShiftTo(n,e),r.rShiftTo(n,r));e.signum()>0;)(o=e.getLowestSetBit())>0&&e.rShiftTo(o,e),(o=r.getLowestSetBit())>0&&r.rShiftTo(o,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return n>0&&r.lShiftTo(n,r),r},r.prototype.isProbablePrime=function(t){var e,r=this.abs();if(1==r.t&&r[0]<=M[M.length-1]){for(e=0;e<M.length;++e)if(r[0]==M[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<M.length;){for(var i=M[e],o=e+1;o<M.length&&i<R;)i*=M[o++];for(i=r.modInt(i);e<o;)if(i%M[e++]==0)return!1}return r.millerRabin(t)},r.prototype.square=function(){var t=i();return this.squareTo(t),t},r.prototype.Barrett=w,null==A){var L;if(A=new Array,D=0,"undefined"!=typeof window&&window.crypto)if(window.crypto.getRandomValues){var O=new Uint8Array(32);for(window.crypto.getRandomValues(O),L=0;L<32;++L)A[D++]=O[L]}else if("Netscape"==navigator.appName&&navigator.appVersion<"5"){var x=window.crypto.random(32);for(L=0;L<x.length;++L)A[D++]=255&x.charCodeAt(L)}for(;D<C;)L=Math.floor(65536*Math.random()),A[D++]=L>>>8,A[D++]=255&L;D=0,E()}function P(){if(null==B){for(E(),(B=new F).init(A),D=0;D<A.length;++D)A[D]=0;D=0}return B.next()}function j(){}function F(){this.i=0,this.j=0,this.S=new Array}j.prototype.nextBytes=function(t){var e;for(e=0;e<t.length;++e)t[e]=P()},F.prototype.init=function(t){var e,r,i;for(e=0;e<256;++e)this.S[e]=e;for(r=0,e=0;e<256;++e)r=r+this.S[e]+t[e%t.length]&255,i=this.S[e],this.S[e]=this.S[r],this.S[r]=i;this.i=0,this.j=0},F.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]};var C=256;t.exports={default:r,BigInteger:r,SecureRandom:j}}).call(this)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r(2),o=r(3),n=r(4),s=r(6),h=o.logger("SW",o.LogLevels.error),u=self,a={};u.addEventListener("message",t=>{const e=t.data,r=a[e.id];e.payload?r.resolve(e.payload):r.reject(),delete a[e.id]});let f=0;const c=t=>{try{const[,r,o,u]=/http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(t.request.url)||[];switch(h.debug("[fetch]:",t),o){case"stream":{const o=function(t){if(!t)return[0,0];const[,e]=t.split("="),r=e.split(", "),[i,o]=r[0].split("-");return[+i,+o||0]}(t.request.headers.get("Range"));let[c,p]=o;const y=JSON.parse(decodeURIComponent(u)),d=l;h.debug("[stream]",r,c,p),t.respondWith(Promise.race([(e=45e3,new Promise(t=>{setTimeout(()=>{t(new Response("",{status:408,statusText:"Request timed out."}))},e)})),new Promise((t,e)=>{const r=function(t,e,r){if(0===t[0]&&1===t[1])return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":"bytes 0-1/"+(r||"*"),"Content-Length":"2","Content-Type":e||"video/mp4"}});return null}(o,y.mimeType,y.size);if(r)return t(r);const u=p&&p<d?function(t){return 2**Math.ceil(Math.log(t)/Math.log(2))}(p-c+1):d,l=function(t,e=2048){return t-t%e}(c,u);h.debug("[stream] requestFilePart:",l,u);const m={type:"requestFilePart",id:f++,payload:[y.dcID,y.location,l,u]};(a[m.id]=n.deferredPromise()).then(e=>{let r=e.bytes;h.debug("[stream] requestFilePart result:",e);const o={"Accept-Ranges":"bytes","Content-Range":`bytes ${l}-${l+r.byteLength-1}/${y.size||"*"}`,"Content-Length":""+r.byteLength};y.mimeType&&(o["Content-Type"]=y.mimeType),i.isSafari&&(r=r.slice(c-l,p-l+1),o["Content-Range"]=`bytes ${c}-${c+r.byteLength-1}/${y.size||"*"}`,o["Content-Length"]=""+r.byteLength),t(new Response(r,{status:206,statusText:"Partial Content",headers:o}))}).catch(t=>{}),s.notifySomeone(m)})]));break}}}catch(e){t.respondWith(new Response("",{status:500,statusText:"Internal Server Error"}))}var e},p=()=>{u.onfetch=c};u.addEventListener("install",t=>{h("installing"),t.waitUntil(u.skipWaiting())}),u.addEventListener("activate",t=>{h("activating",u),t.waitUntil(u.clients.claim())}),u.onerror=t=>{h.error("error:",t)},u.onunhandledrejection=t=>{h.error("onunhandledrejection:",t)},u.onoffline=u.ononline=p,p();const l=524288},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isSafari=e.isAndroid=e.isApple=e.userAgent=void 0,e.userAgent=navigator?navigator.userAgent:null,e.isApple=-1!=navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),e.isAndroid=-1!=navigator.userAgent.toLowerCase().indexOf("android");const i="undefined"!=typeof window?window:self;e.isSafari=!!("safari"in i)||!(!e.userAgent||!(/\b(iPad|iPhone|iPod)\b/.test(e.userAgent)||e.userAgent.match("Safari")&&!e.userAgent.match("Chrome")))},function(t,e,r){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.logger=e.LogLevels=void 0,function(t){t[t.log=1]="log",t[t.warn=2]="warn",t[t.error=4]="error",t[t.debug=8]="debug"}(i=e.LogLevels||(e.LogLevels={}));var o=Date.now();function n(){return"["+((Date.now()-o)/1e3).toFixed(3)+"]"}e.logger=function(t,e=i.log|i.warn|i.error){function r(...r){return e&i.log&&console.log(n(),"["+t+"]:",...r)}return e=i.error,r.warn=function(...r){return e&i.warn&&console.warn(n(),"["+t+"]:",...r)},r.info=function(...r){return e&i.log&&console.info(n(),"["+t+"]:",...r)},r.error=function(...r){return e&i.error&&console.error(n(),"["+t+"]:",...r)},r.trace=function(...r){return e&i.log&&console.trace(n(),"["+t+"]:",...r)},r.debug=function(...r){return e&i.debug&&console.debug(n(),"["+t+"]:",...r)},r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deferredPromise=e.secureRandom=void 0;const i=r(5),o=r(0);e.secureRandom=new o.SecureRandom,e.deferredPromise=function(){let t={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...e)=>{t.lastNotify=e,t.listeners.forEach(t=>t(...e))},lastNotify:void 0,listeners:[],addNotifyListener:e=>{t.lastNotify&&e(...t.lastNotify),t.listeners.push(e)}},e=new Promise((r,i)=>{t.resolve=t=>{e.isFulfilled||(e.isFulfilled=!0,r(t))},t.reject=(...t)=>{e.isRejected||(e.isRejected=!0,i(...t))}});return e.finally(()=>{e.notify=null,e.listeners.length=0,e.lastNotify=null}),Object.assign(e,t),e},Object.defineProperty(Uint8Array.prototype,"hex",{get:function(){return i.bytesToHex([...this])},set:function(t){this.set(i.bytesFromHex(t))},enumerable:!0,configurable:!0}),Uint8Array.prototype.randomize=function(){return e.secureRandom.nextBytes(this),this},Uint8Array.prototype.concat=function(...t){return i.bufferConcats(this,...t)},Uint8Array.prototype.toString=function(){return String.fromCharCode.apply(null,[...this])},Uint8Array.prototype.toJSON=function(){return[...this]},Array.prototype.forEachReverse=function(t){for(var e=this.length-1;e>=0;--e)t(this[e],e,this)},Array.prototype.findAndSplice=function(t){let e=this.findIndex(t);return-1!==e?this.splice(e,1)[0]:void 0},String.prototype.toHHMMSS=function(t=!1){const e=parseInt(this+"",10),r=Math.floor(e/3600);let i=Math.floor((e-3600*r)/60),o=e-3600*r-60*i;return r&&(t=!0),i<10&&(i=t?"0"+i:i),o<10&&(o="0"+o),(r?r+":":"")+i+":"+o}},function(t,e,r){"use strict";
/*!
 * Webogram v0.7.0 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */Object.defineProperty(e,"__esModule",{value:!0}),e.getFileNameByLocation=e.nextRandomInt=e.addPadding=e.longFromInts=e.longToBytes=e.bytesToWordss=e.bytesFromWordss=e.bytesFromWords=e.longToInts=e.bufferConcats=e.bufferConcat=e.bytesFromArrayBuffer=e.convertToByteArray=e.convertToUint8Array=e.convertToArrayBuffer=e.bytesToArrayBuffer=e.bytesFromBigInt=e.bytesXor=e.bytesCmp=e.blobSafeMimeType=e.blobConstruct=e.dataUrlToBlob=e.base64ToBlob=e.uint6ToBase64=e.bytesToBase64=e.bytesFromHex=e.bytesToHex=e.bigStringInt=e.bigint=e.isObject=e.dT=void 0;const i=r(0);var o=Date.now();function n(t){return new i.BigInteger(t.toString(16),16)}function s(t){return new i.BigInteger(t,10)}function h(t){return t<26?t+65:t<52?t+71:t<62?t-4:62===t?43:63===t?47:65}function u(t,e){for(var r=atob(t),i=r.length,o=Math.ceil(i/1024),n=new Array(o),s=0;s<o;++s){for(var h=1024*s,u=Math.min(h+1024,i),f=new Array(u-h),c=h,p=0;c<u;++p,++c)f[p]=r[c].charCodeAt(0);n[s]=new Uint8Array(f)}return a(n,e)}function a(t,e=""){let r;const i=f(e);try{r=new Blob(t,{type:i})}catch(e){let o=new BlobBuilder;t.forEach(t=>{o.append(t)}),r=o.getBlob(i)}return r}function f(t){return-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json"].indexOf(t)?"application/octet-stream":t}function c(t){return new Uint8Array(t).buffer}function p(t){return void 0!==t.buffer?t:new Uint8Array(t)}function l(t,e){var r=t.byteLength||t.length,i=e.byteLength||e.length,o=new Uint8Array(r+i);return o.set(t instanceof ArrayBuffer?new Uint8Array(t):t,0),o.set(e instanceof ArrayBuffer?new Uint8Array(e):e,r),o.buffer}function y(t){var e=s(t).divideAndRemainder(n(4294967296));return[e[0].intValue(),e[1].intValue()]}function d(t){for(var e=t.words,r=t.sigBytes,i=[],o=0;o<r;o++)i.push(e[o>>>2]>>>24-o%4*8&255);return i}e.dT=function(){return"["+((Date.now()-o)/1e3).toFixed(3)+"]"},e.isObject=function(t){return"object"==typeof t&&null!==t},e.bigint=n,e.bigStringInt=s,e.bytesToHex=function(t){t=t||[];for(var e=[],r=0;r<t.length;r++)e.push((t[r]<16?"0":"")+(t[r]||0).toString(16));return e.join("")},e.bytesFromHex=function(t){var e,r=t.length,i=0,o=[];for(t.length%2&&(o.push(parseInt(t.charAt(0),16)),i++),e=i;e<r;e+=2)o.push(parseInt(t.substr(e,2),16));return o},e.bytesToBase64=function(t){for(var e,r="",i=t.length,o=0,n=0;n<i;n++)e=n%3,o|=t[n]<<(16>>>e&24),2!==e&&i-n!=1||(r+=String.fromCharCode(h(o>>>18&63),h(o>>>12&63),h(o>>>6&63),h(63&o)),o=0);return r.replace(/A(?=A$|$)/g,"=")},e.uint6ToBase64=h,e.base64ToBlob=u,e.dataUrlToBlob=function(t){var e=t.split(",");return u(e[1],e[0].split(":")[1].split(";")[0])},e.blobConstruct=a,e.blobSafeMimeType=f,e.bytesCmp=function(t,e){var r=t.length;if(r!=e.length)return!1;for(var i=0;i<r;i++)if(t[i]!=e[i])return!1;return!0},e.bytesXor=function(t,e){for(var r=t.length,i=[],o=0;o<r;++o)i[o]=t[o]^e[o];return i},e.bytesFromBigInt=function(t,e){var r=t.toByteArray();if(e&&r.length<e){for(var i=[],o=0,n=e-r.length;o<n;o++)i[o]=0;r=r instanceof ArrayBuffer?l(i,r):i.concat(r)}else for(;!r[0]&&(!e||r.length>e);)r=r.slice(1);return r},e.bytesToArrayBuffer=c,e.convertToArrayBuffer=function(t){return t instanceof ArrayBuffer?t:void 0!==t.buffer&&t.buffer.byteLength==t.length*t.BYTES_PER_ELEMENT?t.buffer:c(t)},e.convertToUint8Array=p,e.convertToByteArray=function(t){if(Array.isArray(t))return t;for(var e=[],r=0,i=(t=p(t)).length;r<i;r++)e.push(t[r]);return e},e.bytesFromArrayBuffer=function(t){for(var e=t.byteLength,r=new Uint8Array(t),i=[],o=0;o<e;++o)i[o]=r[o];return i},e.bufferConcat=l,e.bufferConcats=function(...t){let e=0;t.forEach(t=>e+=t.byteLength||t.length);var r=new Uint8Array(e);let i=0;return t.forEach(t=>{r.set(t instanceof ArrayBuffer?new Uint8Array(t):t,i),i+=t.byteLength||t.length}),r},e.longToInts=y,e.bytesFromWords=d,e.bytesFromWordss=function(t){for(var e=[],r=0;r<4*t.length;r++)e.push(t[r>>>2]>>>24-r%4*8&255);return e},e.bytesToWordss=function(t){let e;e=t instanceof ArrayBuffer?new Uint8Array(t):t;var r,i=e.length,o=[];for(r=0;r<i;r++)o[r>>>2]|=e[r]<<24-r%4*8;return new Uint32Array(o)},e.longToBytes=function(t){return d({words:y(t),sigBytes:8}).reverse()},e.longFromInts=function(t,e){return n(t).shiftLeft(32).add(n(e)).toString(10)},e.addPadding=function(t,e=16,r,o=!1,n=!1){let s=e-(t.byteLength||t.length)%e;if(s>0&&(s<e||o)){let e=new Array(s);if(r)for(let t=0;t<s;t++)e[t]=0;else(new i.SecureRandom).nextBytes(e);if(t instanceof ArrayBuffer)t=n?l(e,t):l(t,e);else if(t instanceof Uint8Array){let r=new Uint8Array(t.length+e.length);n?(r.set(e),r.set(t,e.length)):(r.set(t),r.set(e,t.length)),t=r}else t=n?e.concat(t):t.concat(e)}return t},e.nextRandomInt=function(t){return Math.floor(Math.random()*t)},e.getFileNameByLocation=function(t,e){const r=""["".length-1]||"";switch(t._){case"inputPhotoFileLocation":case"inputDocumentFileLocation":{const e=t.thumb_size?"_"+t.thumb_size:"";return(""[0]?""[0]+"_":"")+t.id+e+(r?"."+r:r)}case"fileLocationToBeDeprecated":case"inputPeerPhotoFileLocation":case"inputStickerSetThumb":case"inputFileLocation":return t.volume_id+"_"+t.local_id+(r?"."+r:r);default:return console.error("Unrecognized location:",t),""}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notifyAll=e.notifySomeone=e.isWorker=e.isServiceWorker=e.isWebWorker=void 0,e.isWebWorker="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,e.isServiceWorker="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,e.isWorker=e.isWebWorker||e.isServiceWorker;const i=(t,...e)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(r=>{r.length&&r.slice(t?0:-1).forEach(t=>{t.postMessage(...e)})})},o=(...t)=>{self.postMessage(...t)},n=()=>{};e.notifySomeone=e.isServiceWorker?i.bind(null,!1):e.isWebWorker?o:n,e.notifyAll=e.isServiceWorker?i.bind(null,!0):e.isWebWorker?o:n}]);