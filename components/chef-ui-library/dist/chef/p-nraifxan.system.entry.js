var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r["throw"](e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}c((r=r.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return c([e,t])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;o=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=t.call(e,n)}catch(e){u=[6,e];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-0b5aeae5.system.js"],function(e){"use strict";var t,n;return{setters:[function(e){t=e.r;n=e.h}],execute:function(){var r=function(){function e(e){t(this,e);this.opened=false}e.prototype.open=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){this.opened=true;return[2]})})};e.prototype.close=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){this.opened=false;return[2]})})};e.prototype.toggle=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){this.opened=!this.opened;return[2]})})};e.prototype.render=function(){return n("slot",null)};Object.defineProperty(e,"style",{get:function(){return"chef-expander{display:block}chef-expander>*{display:none}chef-expander[opened]>*{display:inherit}"},enumerable:true,configurable:true});return e}();e("chef_expander",r)}}});