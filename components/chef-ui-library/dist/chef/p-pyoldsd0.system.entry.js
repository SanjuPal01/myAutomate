System.register(["./p-0b5aeae5.system.js"],function(t){"use strict";var e,i,n,r;return{setters:[function(t){e=t.r;i=t.d;n=t.h;r=t.c}],execute:function(){var s=function(){function t(t){e(this,t);this.omit="";this.clickOutside=i(this,"clickOutside",7)}t.prototype.render=function(){return n("slot",null)};t.prototype.onDocumentClick=function(t){var e=this.el.contains(t.target);var i=this.omit&&this.omit.length&&t.target.closest("."+this.omit);if(!e&&!i){this.clickOutside.emit(null)}};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}();t("chef_click_outside",s)}}});