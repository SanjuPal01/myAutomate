System.register(["./p-0b5aeae5.system.js"],function(e){"use strict";var t,i,l,n;return{setters:[function(e){t=e.r;i=e.d;l=e.h;n=e.H}],execute:function(){var a=0;var r=function(){function e(e){t(this,e);this.checked=false;this.indeterminate=false;this.disabled=false;this.labelId="";this.labelled=false;this.change=i(this,"change",7)}e.prototype.handleKeydown=function(e){if(e.key===" "){this.handleToggle(e)}};e.prototype.handleToggle=function(e){if(e.target.nodeName!=="A"){this.toggle();e.preventDefault()}};e.prototype.componentWillLoad=function(){this.labelId="label-"+ ++a};e.prototype.componentDidRender=function(){this.labelled=this.labelEl.innerHTML.trim().length>0};e.prototype.toggle=function(){this.checked=!this.checked;this.indeterminate=false;this.change.emit(this.checked)};e.prototype.render=function(){var e=this;var t=this.checked?"check":this.indeterminate?"remove":"close";var i=function(t){return e.labelEl=t};return l(n,{role:"checkbox",tabindex:this.disabled?"-1":"0","aria-checked":this.checked?"true":this.indeterminate?"mixed":"false","aria-disabled":this.disabled?"true":null,"aria-labelledby":this.labelled?this.labelId:null},l("div",{class:"check-wrap"},l("chef-icon",null,t)),l("div",{class:"label-wrap",id:this.labelId,ref:i},l("slot",null)))};Object.defineProperty(e,"style",{get:function(){return"chef-checkbox{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}chef-checkbox,chef-checkbox .check-wrap{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}chef-checkbox .check-wrap{width:20px;min-width:20px;height:20px;border:2px solid;border-radius:var(--chef-border-radius);color:var(--chef-white);-ms-flex-pack:center;justify-content:center}chef-checkbox .check-wrap chef-icon{color:var(--chef-white)}chef-checkbox .label-wrap{display:none;margin-left:14px;font-size:14px;color:var(--chef-primary-dark)}chef-checkbox[aria-labelledby] .label-wrap{display:block}chef-checkbox[aria-checked=true] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-checked=false] .check-wrap{border-color:var(--chef-dark-grey);background-color:var(--chef-white)}chef-checkbox[aria-checked=mixed] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-disabled]{border:var(--chef-grey);opacity:.5;cursor:default;pointer-events:none}"},enumerable:true,configurable:true});return e}();e("chef_checkbox",r)}}});