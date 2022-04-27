var __awaiter=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))(function(r,a){function o(t){try{u(i.next(t))}catch(t){a(t)}}function s(t){try{u(i["throw"](t))}catch(t){a(t)}}function u(t){t.done?r(t.value):new e(function(n){n(t.value)}).then(o,s)}u((i=i.apply(t,n||[])).next())})};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(n){return u([t,n])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(e)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;r=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){e.label=o[1];break}if(o[0]===6&&e.label<a[1]){e.label=a[1];a=o;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(o);break}if(a[2])e.ops.pop();e.trys.pop();continue}o=n.call(t,e)}catch(t){o=[6,t];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-0b5aeae5.system.js","./p-1095b4e8.system.js","./p-126d090a.system.js","./p-7b255586.system.js","./p-6d074125.system.js","./p-348117e9.system.js"],function(t){"use strict";var n,e,i,r,a,o,s,u,c,h,l,f,y,p,_,v,d,x;return{setters:[function(t){n=t.r;e=t.h;i=t.c},function(){},function(t){r=t.z;a=t.K;o=t.s;s=t.M;u=t.d;c=t.r;h=t.N;l=t.h;f=t.m;y=t.o;p=t.O},function(t){_=t.b;v=t.m},function(t){d=t.b},function(t){x=t.i}],execute:function(){var g=Math.max;function b(t){if(!(t&&t.length)){return[]}var n=0;t=r(t,function(t){if(x(t)){n=g(t.length,n);return true}});return a(n,function(n){return o(t,s(n))})}var m=b;var M=d(m);var T=M;var w=u("zip",T);w.placeholder=c;var A=w;var P=0/0;function R(t){if(typeof t=="number"){return t}if(h(t)){return P}return+t}var S=R;function N(t,n){return function(e,i){var r;if(e===undefined&&i===undefined){return n}if(e!==undefined){r=e}if(i!==undefined){if(r===undefined){return i}if(typeof e=="string"||typeof i=="string"){e=l(e);i=l(i)}else{e=S(e);i=S(i)}r=t(e,i)}return r}}var j=N;var k=j(function(t,n){return t*n},1);var E=k;var L=u("multiply",E);L.placeholder=c;var C=L;function z(t,n,e,i){var r=-1,a=t==null?0:t.length;while(++r<a){var o=t[r];n(i,o,e(o),t)}return i}var O=z;function q(t,n,e,i){_(t,function(t,r,a){n(i,t,e(t),a)});return i}var D=q;function H(t,n){return function(e,i){var r=y(e)?O:D,a=n?n():{};return r(e,t,f(i),a)}}var I=H;var B=Object.prototype;var Z=B.hasOwnProperty;var G=I(function(t,n,e){if(Z.call(t,e)){t[e].push(n)}else{p(t,e,[n])}});var K=G;var Q=u("groupBy",K);Q.placeholder=c;var U=Q;var V=Math.PI,W=2*V,X=1e-6,Y=W-X;function F(){this._x0=this._y0=this._x1=this._y1=null;this._=""}function J(){return new F}F.prototype=J.prototype={constructor:F,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){if(this._x1!==null){this._x1=this._x0,this._y1=this._y0;this._+="Z"}},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,r,a){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+r)+","+(this._y1=+a)},arcTo:function(t,n,e,i,r){t=+t,n=+n,e=+e,i=+i,r=+r;var a=this._x1,o=this._y1,s=e-t,u=i-n,c=a-t,h=o-n,l=c*c+h*h;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null){this._+="M"+(this._x1=t)+","+(this._y1=n)}else if(!(l>X));else if(!(Math.abs(h*s-u*c)>X)||!r){this._+="L"+(this._x1=t)+","+(this._y1=n)}else{var f=e-a,y=i-o,p=s*s+u*u,_=f*f+y*y,v=Math.sqrt(p),d=Math.sqrt(l),x=r*Math.tan((V-Math.acos((p+l-_)/(2*v*d)))/2),g=x/d,b=x/v;if(Math.abs(g-1)>X){this._+="L"+(t+g*c)+","+(n+g*h)}this._+="A"+r+","+r+",0,0,"+ +(h*f>c*y)+","+(this._x1=t+b*s)+","+(this._y1=n+b*u)}},arc:function(t,n,e,i,r,a){t=+t,n=+n,e=+e;var o=e*Math.cos(i),s=e*Math.sin(i),u=t+o,c=n+s,h=1^a,l=a?i-r:r-i;if(e<0)throw new Error("negative radius: "+e);if(this._x1===null){this._+="M"+u+","+c}else if(Math.abs(this._x1-u)>X||Math.abs(this._y1-c)>X){this._+="L"+u+","+c}if(!e)return;if(l<0)l=l%W+W;if(l>Y){this._+="A"+e+","+e+",0,1,"+h+","+(t-o)+","+(n-s)+"A"+e+","+e+",0,1,"+h+","+(this._x1=u)+","+(this._y1=c)}else if(l>X){this._+="A"+e+","+e+",0,"+ +(l>=V)+","+h+","+(this._x1=t+e*Math.cos(r))+","+(this._y1=n+e*Math.sin(r))}},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}};function $(t){return function n(){return t}}var tt=Math.abs;var nt=Math.atan2;var et=Math.cos;var it=Math.max;var rt=Math.min;var at=Math.sin;var ot=Math.sqrt;var st=1e-12;var ut=Math.PI;var ct=ut/2;var ht=2*ut;function lt(t){return t>1?0:t<-1?ut:Math.acos(t)}function ft(t){return t>=1?ct:t<=-1?-ct:Math.asin(t)}function yt(t){return t.innerRadius}function pt(t){return t.outerRadius}function _t(t){return t.startAngle}function vt(t){return t.endAngle}function dt(t){return t&&t.padAngle}function xt(t,n,e,i,r,a,o,s){var u=e-t,c=i-n,h=o-r,l=s-a,f=l*u-h*c;if(f*f<st)return;f=(h*(n-a)-l*(t-r))/f;return[t+f*u,n+f*c]}function gt(t,n,e,i,r,a,o){var s=t-e,u=n-i,c=(o?a:-a)/ot(s*s+u*u),h=c*u,l=-c*s,f=t+h,y=n+l,p=e+h,_=i+l,v=(f+p)/2,d=(y+_)/2,x=p-f,g=_-y,b=x*x+g*g,m=r-a,M=f*_-p*y,T=(g<0?-1:1)*ot(it(0,m*m*b-M*M)),w=(M*g-x*T)/b,A=(-M*x-g*T)/b,P=(M*g+x*T)/b,R=(-M*x+g*T)/b,S=w-v,N=A-d,j=P-v,k=R-d;if(S*S+N*N>j*j+k*k)w=P,A=R;return{cx:w,cy:A,x01:-h,y01:-l,x11:w*(r/m-1),y11:A*(r/m-1)}}function bt(){var t=yt,n=pt,e=$(0),i=null,r=_t,a=vt,o=dt,s=null;function u(){var u,c,h=+t.apply(this,arguments),l=+n.apply(this,arguments),f=r.apply(this,arguments)-ct,y=a.apply(this,arguments)-ct,p=tt(y-f),_=y>f;if(!s)s=u=J();if(l<h)c=l,l=h,h=c;if(!(l>st))s.moveTo(0,0);else if(p>ht-st){s.moveTo(l*et(f),l*at(f));s.arc(0,0,l,f,y,!_);if(h>st){s.moveTo(h*et(y),h*at(y));s.arc(0,0,h,y,f,_)}}else{var v=f,d=y,x=f,g=y,b=p,m=p,M=o.apply(this,arguments)/2,T=M>st&&(i?+i.apply(this,arguments):ot(h*h+l*l)),w=rt(tt(l-h)/2,+e.apply(this,arguments)),A=w,P=w,R,S;if(T>st){var N=ft(T/h*at(M)),j=ft(T/l*at(M));if((b-=N*2)>st)N*=_?1:-1,x+=N,g-=N;else b=0,x=g=(f+y)/2;if((m-=j*2)>st)j*=_?1:-1,v+=j,d-=j;else m=0,v=d=(f+y)/2}var k=l*et(v),E=l*at(v),L=h*et(g),C=h*at(g);if(w>st){var z=l*et(d),O=l*at(d),q=h*et(x),D=h*at(x),H;if(p<ut&&(H=xt(k,E,q,D,z,O,L,C))){var I=k-H[0],B=E-H[1],Z=z-H[0],G=O-H[1],K=1/at(lt((I*Z+B*G)/(ot(I*I+B*B)*ot(Z*Z+G*G)))/2),Q=ot(H[0]*H[0]+H[1]*H[1]);A=rt(w,(h-Q)/(K-1));P=rt(w,(l-Q)/(K+1))}}if(!(m>st))s.moveTo(k,E);else if(P>st){R=gt(q,D,k,E,l,P,_);S=gt(z,O,L,C,l,P,_);s.moveTo(R.cx+R.x01,R.cy+R.y01);if(P<w)s.arc(R.cx,R.cy,P,nt(R.y01,R.x01),nt(S.y01,S.x01),!_);else{s.arc(R.cx,R.cy,P,nt(R.y01,R.x01),nt(R.y11,R.x11),!_);s.arc(0,0,l,nt(R.cy+R.y11,R.cx+R.x11),nt(S.cy+S.y11,S.cx+S.x11),!_);s.arc(S.cx,S.cy,P,nt(S.y11,S.x11),nt(S.y01,S.x01),!_)}}else s.moveTo(k,E),s.arc(0,0,l,v,d,!_);if(!(h>st)||!(b>st))s.lineTo(L,C);else if(A>st){R=gt(L,C,z,O,h,-A,_);S=gt(k,E,q,D,h,-A,_);s.lineTo(R.cx+R.x01,R.cy+R.y01);if(A<w)s.arc(R.cx,R.cy,A,nt(R.y01,R.x01),nt(S.y01,S.x01),!_);else{s.arc(R.cx,R.cy,A,nt(R.y01,R.x01),nt(R.y11,R.x11),!_);s.arc(0,0,h,nt(R.cy+R.y11,R.cx+R.x11),nt(S.cy+S.y11,S.cx+S.x11),_);s.arc(S.cx,S.cy,A,nt(S.y11,S.x11),nt(S.y01,S.x01),!_)}}else s.arc(0,0,h,g,x,_)}s.closePath();if(u)return s=null,u+""||null}u.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,i=(+r.apply(this,arguments)+ +a.apply(this,arguments))/2-ut/2;return[et(i)*e,at(i)*e]};u.innerRadius=function(n){return arguments.length?(t=typeof n==="function"?n:$(+n),u):t};u.outerRadius=function(t){return arguments.length?(n=typeof t==="function"?t:$(+t),u):n};u.cornerRadius=function(t){return arguments.length?(e=typeof t==="function"?t:$(+t),u):e};u.padRadius=function(t){return arguments.length?(i=t==null?null:typeof t==="function"?t:$(+t),u):i};u.startAngle=function(t){return arguments.length?(r=typeof t==="function"?t:$(+t),u):r};u.endAngle=function(t){return arguments.length?(a=typeof t==="function"?t:$(+t),u):a};u.padAngle=function(t){return arguments.length?(o=typeof t==="function"?t:$(+t),u):o};u.context=function(t){return arguments.length?(s=t==null?null:t,u):s};return u}function mt(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Mt(t){return t}function Tt(){var t=Mt,n=mt,e=null,i=$(0),r=$(ht),a=$(0);function o(o){var s,u=o.length,c,h,l=0,f=new Array(u),y=new Array(u),p=+i.apply(this,arguments),_=Math.min(ht,Math.max(-ht,r.apply(this,arguments)-p)),v,d=Math.min(Math.abs(_)/u,a.apply(this,arguments)),x=d*(_<0?-1:1),g;for(s=0;s<u;++s){if((g=y[f[s]=s]=+t(o[s],s,o))>0){l+=g}}if(n!=null)f.sort(function(t,e){return n(y[t],y[e])});else if(e!=null)f.sort(function(t,n){return e(o[t],o[n])});for(s=0,h=l?(_-u*x)/l:0;s<u;++s,p=v){c=f[s],g=y[c],v=p+(g>0?g*h:0)+x,y[c]={data:o[c],index:s,value:g,startAngle:p,endAngle:v,padAngle:d}}return y}o.value=function(n){return arguments.length?(t=typeof n==="function"?n:$(+n),o):t};o.sortValues=function(t){return arguments.length?(n=t,e=null,o):n};o.sort=function(t){return arguments.length?(e=t,n=null,o):e};o.startAngle=function(t){return arguments.length?(i=typeof t==="function"?t:$(+t),o):i};o.endAngle=function(t){return arguments.length?(r=typeof t==="function"?t:$(+t),o):r};o.padAngle=function(t){return arguments.length?(a=typeof t==="function"?t:$(+t),o):a};return o}function wt(t){return t<0?-1:1}function At(t,n,e){var i=t._x1-t._x0,r=n-t._x1,a=(t._y1-t._y0)/(i||r<0&&-0),o=(e-t._y1)/(r||i<0&&-0),s=(a*r+o*i)/(i+r);return(wt(a)+wt(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(s))||0}function Pt(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function Rt(t,n,e){var i=t._x0,r=t._y0,a=t._x1,o=t._y1,s=(a-i)/3;t._context.bezierCurveTo(i+s,r+s*n,a-s,o-s*e,a,o)}function St(t){this._context=t}St.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN;this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Rt(this,this._t0,Pt(this,this._t0));break}if(this._line||this._line!==0&&this._point===1)this._context.closePath();this._line=1-this._line},point:function(t,n){var e=NaN;t=+t,n=+n;if(t===this._x1&&n===this._y1)return;switch(this._point){case 0:this._point=1;this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;Rt(this,Pt(this,e=At(this,t,n)),e);break;default:Rt(this,this._t0,e=At(this,t,n));break}this._x0=this._x1,this._x1=t;this._y0=this._y1,this._y1=n;this._t0=e}};function Nt(t){this._context=new jt(t)}(Nt.prototype=Object.create(St.prototype)).point=function(t,n){St.prototype.point.call(this,n,t)};function jt(t){this._context=t}jt.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,i,r,a){this._context.bezierCurveTo(n,t,i,e,a,r)}};var kt=100;var Et=20;var Lt=0;var Ct=function(){function t(t){n(this,t);this.gapSize=2;this.tooltips=true;this.dataPoints={primary:[],secondary:[]};this.id=this.id||"radial"+Lt++}t.prototype.handleDataPointUpdated=function(){this.updateDataPoints()};t.prototype.updateDataPoints=function(){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(e){t=Array.from(this.el.querySelectorAll("chef-data-point"));n=[];t.forEach(function(t){return Number(t.value)>0?n.push(t):null});this.dataPoints=U(function(t){return t.secondary?"secondary":"primary"},n);return[2]})})};t.prototype.componentWillLoad=function(){this.updateDataPoints()};t.prototype.render=function(){var t=Tt().sort(null).value(function(t){return t.value}).padAngle(this.gapSize*Math.PI/180);var n=this.dataPoints,i=n.primary,r=n.secondary;var a=this.dataPoints.secondary!==undefined;var o=A(t(i),i);var s=a?A(t(r),r):null;var u=[-1,-1,2,2].map(C(kt+Et));var c={innerRadius:kt-18,outerRadius:kt};var h={innerRadius:kt+10,outerRadius:kt+15,cornerRadius:5};return[e("div",{class:"innerText"},e("slot",{name:"innerText"})),e("svg",{width:"100%",height:"100%",viewBox:u.join(" ")},e("g",{class:"primary"},v(this.drawSegment.bind(this,c),o)),e("g",{class:"secondary"},v(this.drawSegment.bind(this,h),s))),v(this.createTooltips.bind(this),o),e("slot",null)]};t.prototype.createTooltips=function(t){var n=t[0],i=t[1];if(this.tooltips===true){return e("chef-tooltip",{for:""+this.id+n.index,follow:true,innerHTML:i.innerHTML})}else{return}};t.prototype.drawSegment=function(t,n){var i=t.innerRadius,r=t.outerRadius,a=t.cornerRadius,o=a===void 0?0:a;var s=n[0],u=n[1];var c=bt().innerRadius(i).outerRadius(r).cornerRadius(o)(s);return e("path",{class:u.className+" segment",id:""+this.id+s.index,d:c,onMouseOver:this.handleHover.bind(this)})};t.prototype.handleHover=function(t){var n=t.target.parentNode;var e=n.removeChild(t.target);n.appendChild(e)};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"chef-radial-chart{--base-stroke:var(--segment-base-stroke,1);--expanded-stroke:var(--segment-expanded-stroke,10);display:block;position:relative}chef-radial-chart chef-data-point{display:none}chef-radial-chart .segment{color:var(--chef-dark-grey);fill:currentColor;stroke-width:var(--base-stroke);stroke:currentColor;position:relative;-webkit-transition-property:stroke-width;transition-property:stroke-width;-webkit-transition-duration:.25s;transition-duration:.25s;-webkit-transition-timing-function:ease;transition-timing-function:ease}chef-radial-chart .secondary .segment{stroke:var(--chef-white)}chef-radial-chart .primary .segment:hover{stroke-width:var(--expanded-stroke)}chef-radial-chart .primary .segment.empty:hover{stroke-width:var(--base-stroke)}chef-radial-chart svg{position:relative;z-index:10}chef-radial-chart .innerText{position:absolute;z-index:5;height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;padding:20% 0}chef-radial-chart .innerText>*{padding:0 20%;text-align:center}"},enumerable:true,configurable:true});return t}();t("chef_radial_chart",Ct)}}});