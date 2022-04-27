import{r as s,d as t,h as e,H as i,c as l}from"./p-1b10ccda.js";class a{constructor(e){s(this,e),this.locked=!1,this.visible=!1,this.closeModal=t(this,"closeModal",7)}handleEscape(s){"Escape"===s.key&&this.handleClose()}setFocus(s){if(s){this.prevFocusedElement=document.activeElement;const s=this.getFocusElement(this.locked),t=setInterval(()=>{s.focus(),s===document.activeElement&&clearInterval(t)},1)}}render(){return e(i,{class:this.visible?"visible":""},e("div",{class:"modal-overlay",onClick:this.handleClose.bind(this)}),e("div",{class:"modal","aria-modal":"true",role:"dialog","aria-labelledby":this.label,tabindex:"0"},e("chef-trap-focus",null,this.renderButton(),e("slot",{name:"title"}),e("slot",null))))}renderButton(){return this.locked?"":e("chef-button",{class:"close",onClick:this.handleClose.bind(this),secondary:!0},e("chef-icon",null,"close"))}getFocusElement(s){const t=this.el.getElementsByClassName("modal").item(0),e=this.el.getElementsByClassName("close").item(0).firstElementChild,i=this.el.querySelector("[firstFocus]");return s?t:i?"CHEF-BUTTON"===i.tagName?i.firstElementChild:i:e}handleClose(){this.locked||(this.closeModal.emit(),this.prevFocusedElement&&setTimeout(()=>{this.prevFocusedElement.focus()},1))}get el(){return l(this)}static get watchers(){return{visible:["setFocus"]}}static get style(){return"chef-modal{display:none}chef-modal.visible{display:block}chef-modal .modal-overlay{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:var(--chef-modal-bg-color)}chef-modal .modal{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);z-index:1001;background-color:var(--chef-white);color:var(--chef-primary-dark);border-radius:var(--chef-border-radius);padding:30px;--default-modal-width:700px;width:var(--modal-width,var(--default-modal-width))}chef-modal .modal .close{position:absolute;top:5px;right:5px;width:auto}chef-modal .modal [slot=title]{--default-title-size:24px;font-size:var(--title-size,var(--default-title-size))}"}}export{a as chef_modal};