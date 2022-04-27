var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function u(e){try{c(n["throw"](e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(s,u)}c((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(e){return function(t){return c([e,t])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-0b5aeae5.system.js","./p-5f414978.system.js","./p-77f515b3.system.js"],function(e){"use strict";var t,r,n,i,o,s;return{setters:[function(e){t=e.r;r=e.g;n=e.h;i=e.c},function(e){o=e.m},function(e){s=e.A}],execute:function(){var u=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var c=function(e,t,r){return o(e,{path:t,exact:r,strict:true})};var a=function(e){return e.tagName==="STENCIL-ROUTE"};var l=function(){function e(e){t(this,e);this.group=u();this.subscribers=[];this.queue=r(this,"queue")}e.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};e.prototype.regenerateSubscribers=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;var n=this;return __generator(this,function(i){if(e==null){return[2]}t=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(a).map(function(r,n){var i=c(e.pathname,r.url,r.exact);if(i&&t===-1){t=n}return{el:r,match:i}});if(t===-1){return[2]}if(this.activeIndex===t){this.subscribers[t].el.match=this.subscribers[t].match;return[2]}this.activeIndex=t;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(e){n.queue.write(function(){n.subscribers.forEach(function(e,t){e.el.componentUpdated=undefined;if(t===n.activeIndex){return e.el.style.display=""}if(n.scrollTopOffset){e.el.scrollTopOffset=n.scrollTopOffset}e.el.group=n.group;e.el.match=null;e.el.style.display="none"})});if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},e))}};return[2]})})};e.prototype.render=function(){return n("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return e}();e("stencil_route_switch",l);s.injectProps(l,["location","routeViewsUpdated"])}}});