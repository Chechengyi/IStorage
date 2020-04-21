!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.storage=t():e.storage=t()}(window,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMinHeapByLocalInfo=function(e){var t=(new Date).getTime(),r=Object.keys(e).map((function(r){return{key:r,time:e[r]-t}}));if(0==r.length)return void(c&&clearTimeout(c));(function(e){u=e,l=e.length;var t=Math.floor((l-2)/2);for(;t>=0;)s(t),t--})(r),f()},t.insert=function(e){u[l]=e,function(e){for(;e>0;){var t=Math.floor((e-1)/2);if(!(u[t].time>u[e].time))break;d(t,e,u),e=t}}(l),l++,f()},t.clearHeap=function(){clearTimeout(c),u=[],l=0};var o,n=r(3),i=r(1),a=(o=i)&&o.__esModule?o:{default:o};var u=[],l=0,c=null;function f(){c&&clearTimeout(c);var e=u[0].time;c=setTimeout((function(){var e,t=(e=u[0],l--,u[0]=u.pop(),s(0),e);(0,n.remove)(t.key),a.default.trigger(t.key,t.key)}),e)}function s(e){for(;2*e+1<l;){var t=2*e+1;if(u[t+1]&&u[t].time>u[t+1].time&&(t+=1),!(u[e].time>u[t].time))break;d(e,t,u),e=t}}function d(e,t,r){r[t];r[e]=r[t],r[t]=r[e]}},function(e,t,r){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n={list:{},subscribe:function(e,t){this.list[e]||(this.list[e]=[]),this.list[e].push(t)},trigger:function(e){var t=this.list[e];if(t)for(var r=[].slice.call(arguments,1),n=0;n<t.length;n++)t[n].apply(t,o(r))},unsubscribe:function(e,t){if(!0!==t){var r=this.list[e];r&&(this.list[e]=r.filter((function(e){return e!==t})))}else this.list[e]=null}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.recordName=void 0,t.getLocalInfo=i,t.addLocalInfo=function(e,t){var r=(new Date).getTime()+t,a=i();void 0===a[e]?(a[e]=r,localStorage.setItem(n,JSON.stringify(a)),(0,o.insert)({key:e,time:t})):(a[e]=r,localStorage.setItem(n,JSON.stringify(a)),(0,o.createMinHeapByLocalInfo)(a))},t.deleteLocalInfo=function(e){var t=i();void 0!==t[e]&&(delete t[e],localStorage.setItem(n,JSON.stringify(t)),(0,o.createMinHeapByLocalInfo)(t))};var o=r(0),n=t.recordName="ISTORAGE_RECORD";function i(){var e=localStorage.getItem(n);return e=e?JSON.parse(e):{}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=function(e){return localStorage.getItem(e)},t.save=function(e,t,r){if(0===r)throw new Error("在存储的时候time不允许设为0");r&&(0,n.addLocalInfo)(e,r);localStorage.setItem(e,t)},t.remove=function(e){(0,n.deleteLocalInfo)(e),localStorage.removeItem(e)},t.clear=function(){(0,i.clearHeap)(),localStorage.clear()};var o,n=r(2),i=r(0),a=r(1);(o=a)&&o.__esModule},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(0),i=r(3),a=l(r(1)),u=l(r(5));function l(e){return e&&e.__esModule?e:{default:e}}!function(){if(!window.localStorage)throw new Error("浏览器版本不支持 localStorage");var e=(0,o.getLocalInfo)(),t=(new Date).getTime();Object.keys(e).forEach((function(r){e[r]<=t&&(localStorage.removeItem(r),delete e[r])})),localStorage.setItem(o.recordName,JSON.stringify(e)),(0,n.createMinHeapByLocalInfo)(e)}(),t.default={get:i.get,save:i.save,remove:i.remove,clear:i.clear,session:{get:u.default.get,save:u.default.save,remove:u.default.remove,clear:u.default.clear},on:a.default.subscribe.bind(a.default),off:a.default.unsubscribe.bind(a.default)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){return sessionStorage.getItem(e)},save:function(e,t){sessionStorage.setItem(e,t)},remove:function(e){sessionStorage.removeItem(e)},clear:function(){sessionStorage.clear()}}}]).default}));