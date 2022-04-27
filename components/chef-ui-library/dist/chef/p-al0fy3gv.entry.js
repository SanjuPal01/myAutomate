import{r as t,h as i,c as n}from"./p-1b10ccda.js";import"./p-d7ac2f15.js";import{z as r,K as s,s as h,M as u,d as e,r as o,N as a,h as f,m as c,o as l,O as d}from"./p-6b826df5.js";import{b as v,m as p}from"./p-ad917f49.js";import{b as M}from"./p-397bf533.js";import{i as y}from"./p-8f94e0ae.js";var m=Math.max,g=e("zip",M(function(t){if(!t||!t.length)return[];var i=0;return t=r(t,function(t){if(y(t))return i=m(t.length,i),!0}),s(i,function(i){return h(t,u(i))})}));g.placeholder=o;var b=g,T=function(t){return"number"==typeof t?t:a(t)?NaN:+t},w=e("multiply",function(t,i){var n;if(void 0===t&&void 0===i)return 1;if(void 0!==t&&(n=t),void 0!==i){if(void 0===n)return i;"string"==typeof t||"string"==typeof i?(t=f(t),i=f(i)):(t=T(t),i=T(i)),n=t*i}return n});w.placeholder=o;var N,A=w,L=function(t,i,n,r){for(var s=-1,h=null==t?0:t.length;++s<h;){var u=t[s];i(r,u,n(u),t)}return r},R=function(t,i,n,r){return v(t,function(t,s,h){i(r,t,n(t),h)}),r},j=Object.prototype.hasOwnProperty,x=e("groupBy",(N=function(t,i,n){j.call(t,n)?t[n].push(i):d(t,n,[i])},function(t,i){var n={};return(l(t)?L:R)(t,N,c(i),n)}));x.placeholder=o;var E=x,$=Math.PI,C=2*$,O=C-1e-6;function P(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function S(){return new P}function k(t){return function(){return t}}P.prototype=S.prototype={constructor:P,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,n,r){this._+="Q"+ +t+","+ +i+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,i,n,r,s,h){this._+="C"+ +t+","+ +i+","+ +n+","+ +r+","+(this._x1=+s)+","+(this._y1=+h)},arcTo:function(t,i,n,r,s){var h=this._x1,u=this._y1,e=(n=+n)-(t=+t),o=(r=+r)-(i=+i),a=h-t,f=u-i,c=a*a+f*f;if((s=+s)<0)throw new Error("negative radius: "+s);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=i);else if(c>1e-6)if(Math.abs(f*e-o*a)>1e-6&&s){var l=n-h,d=r-u,v=e*e+o*o,p=l*l+d*d,M=Math.sqrt(v),y=Math.sqrt(c),m=s*Math.tan(($-Math.acos((v+c-p)/(2*M*y)))/2),g=m/y,b=m/M;Math.abs(g-1)>1e-6&&(this._+="L"+(t+g*a)+","+(i+g*f)),this._+="A"+s+","+s+",0,0,"+ +(f*l>a*d)+","+(this._x1=t+b*e)+","+(this._y1=i+b*o)}else this._+="L"+(this._x1=t)+","+(this._y1=i)},arc:function(t,i,n,r,s,h){t=+t,i=+i;var u=(n=+n)*Math.cos(r),e=n*Math.sin(r),o=t+u,a=i+e,f=1^h,c=h?r-s:s-r;if(n<0)throw new Error("negative radius: "+n);null===this._x1?this._+="M"+o+","+a:(Math.abs(this._x1-o)>1e-6||Math.abs(this._y1-a)>1e-6)&&(this._+="L"+o+","+a),n&&(c<0&&(c=c%C+C),c>O?this._+="A"+n+","+n+",0,1,"+f+","+(t-u)+","+(i-e)+"A"+n+","+n+",0,1,"+f+","+(this._x1=o)+","+(this._y1=a):c>1e-6&&(this._+="A"+n+","+n+",0,"+ +(c>=$)+","+f+","+(this._x1=t+n*Math.cos(s))+","+(this._y1=i+n*Math.sin(s))))},rect:function(t,i,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}};var z=Math.abs,_=Math.atan2,D=Math.cos,H=Math.max,B=Math.min,Z=Math.sin,q=Math.sqrt,K=1e-12,Q=Math.PI,U=Q/2,W=2*Q;function X(t){return t>=1?U:t<=-1?-U:Math.asin(t)}function Y(t){return t.innerRadius}function F(t){return t.outerRadius}function G(t){return t.startAngle}function I(t){return t.endAngle}function J(t){return t&&t.padAngle}function V(t,i,n,r,s,h,u){var e=t-n,o=i-r,a=(u?h:-h)/q(e*e+o*o),f=a*o,c=-a*e,l=t+f,d=i+c,v=n+f,p=r+c,M=(l+v)/2,y=(d+p)/2,m=v-l,g=p-d,b=m*m+g*g,T=s-h,w=l*p-v*d,N=(g<0?-1:1)*q(H(0,T*T*b-w*w)),A=(w*g-m*N)/b,L=(-w*m-g*N)/b,R=(w*g+m*N)/b,j=(-w*m+g*N)/b,x=A-M,E=L-y,$=R-M,C=j-y;return x*x+E*E>$*$+C*C&&(A=R,L=j),{cx:A,cy:L,x01:-f,y01:-c,x11:A*(s/T-1),y11:L*(s/T-1)}}function tt(){var t=Y,i=F,n=k(0),r=null,s=G,h=I,u=J,e=null;function o(){var o,a,f,c=+t.apply(this,arguments),l=+i.apply(this,arguments),d=s.apply(this,arguments)-U,v=h.apply(this,arguments)-U,p=z(v-d),M=v>d;if(e||(e=o=S()),l<c&&(a=l,l=c,c=a),l>K)if(p>W-K)e.moveTo(l*D(d),l*Z(d)),e.arc(0,0,l,d,v,!M),c>K&&(e.moveTo(c*D(v),c*Z(v)),e.arc(0,0,c,v,d,M));else{var y,m,g=d,b=v,T=d,w=v,N=p,A=p,L=u.apply(this,arguments)/2,R=L>K&&(r?+r.apply(this,arguments):q(c*c+l*l)),j=B(z(l-c)/2,+n.apply(this,arguments)),x=j,E=j;if(R>K){var $=X(R/c*Z(L)),C=X(R/l*Z(L));(N-=2*$)>K?(T+=$*=M?1:-1,w-=$):(N=0,T=w=(d+v)/2),(A-=2*C)>K?(g+=C*=M?1:-1,b-=C):(A=0,g=b=(d+v)/2)}var O=l*D(g),P=l*Z(g),k=c*D(w),H=c*Z(w);if(j>K){var Y,F=l*D(b),G=l*Z(b),I=c*D(T),J=c*Z(T);if(p<Q&&(Y=function(t,i,n,r,s,h,u,e){var o=I-O,a=J-P,f=u-F,c=e-G,l=c*o-f*a;if(!(l*l<K))return[O+(l=(f*(P-G)-c*(O-F))/l)*o,P+l*a]}(0,0,0,0,0,0,k,H))){var tt=O-Y[0],it=P-Y[1],nt=F-Y[0],rt=G-Y[1],st=1/Z(((f=(tt*nt+it*rt)/(q(tt*tt+it*it)*q(nt*nt+rt*rt)))>1?0:f<-1?Q:Math.acos(f))/2),ht=q(Y[0]*Y[0]+Y[1]*Y[1]);x=B(j,(c-ht)/(st-1)),E=B(j,(l-ht)/(st+1))}}A>K?E>K?(y=V(I,J,O,P,l,E,M),m=V(F,G,k,H,l,E,M),e.moveTo(y.cx+y.x01,y.cy+y.y01),E<j?e.arc(y.cx,y.cy,E,_(y.y01,y.x01),_(m.y01,m.x01),!M):(e.arc(y.cx,y.cy,E,_(y.y01,y.x01),_(y.y11,y.x11),!M),e.arc(0,0,l,_(y.cy+y.y11,y.cx+y.x11),_(m.cy+m.y11,m.cx+m.x11),!M),e.arc(m.cx,m.cy,E,_(m.y11,m.x11),_(m.y01,m.x01),!M))):(e.moveTo(O,P),e.arc(0,0,l,g,b,!M)):e.moveTo(O,P),c>K&&N>K?x>K?(y=V(k,H,F,G,c,-x,M),m=V(O,P,I,J,c,-x,M),e.lineTo(y.cx+y.x01,y.cy+y.y01),x<j?e.arc(y.cx,y.cy,x,_(y.y01,y.x01),_(m.y01,m.x01),!M):(e.arc(y.cx,y.cy,x,_(y.y01,y.x01),_(y.y11,y.x11),!M),e.arc(0,0,c,_(y.cy+y.y11,y.cx+y.x11),_(m.cy+m.y11,m.cx+m.x11),M),e.arc(m.cx,m.cy,x,_(m.y11,m.x11),_(m.y01,m.x01),!M))):e.arc(0,0,c,w,T,M):e.lineTo(k,H)}else e.moveTo(0,0);if(e.closePath(),o)return e=null,o+""||null}return o.centroid=function(){var n=(+t.apply(this,arguments)+ +i.apply(this,arguments))/2,r=(+s.apply(this,arguments)+ +h.apply(this,arguments))/2-Q/2;return[D(r)*n,Z(r)*n]},o.innerRadius=function(i){return arguments.length?(t="function"==typeof i?i:k(+i),o):t},o.outerRadius=function(t){return arguments.length?(i="function"==typeof t?t:k(+t),o):i},o.cornerRadius=function(t){return arguments.length?(n="function"==typeof t?t:k(+t),o):n},o.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:k(+t),o):r},o.startAngle=function(t){return arguments.length?(s="function"==typeof t?t:k(+t),o):s},o.endAngle=function(t){return arguments.length?(h="function"==typeof t?t:k(+t),o):h},o.padAngle=function(t){return arguments.length?(u="function"==typeof t?t:k(+t),o):u},o.context=function(t){return arguments.length?(e=null==t?null:t,o):e},o}function it(t,i){return i<t?-1:i>t?1:i>=t?0:NaN}function nt(t){return t}function rt(t){return t<0?-1:1}function st(t,i,n){var r=t._x1-t._x0,s=i-t._x1,h=(t._y1-t._y0)/(r||s<0&&-0),u=(n-t._y1)/(s||r<0&&-0),e=(h*s+u*r)/(r+s);return(rt(h)+rt(u))*Math.min(Math.abs(h),Math.abs(u),.5*Math.abs(e))||0}function ht(t,i){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-i)/2:i}function ut(t,i,n){var r=t._x0,s=t._x1,h=t._y1,u=(s-r)/3;t._context.bezierCurveTo(r+u,t._y0+u*i,s-u,h-u*n,s,h)}function et(t){this._context=t}function ot(t){this._context=t}et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ut(this,this._t0,ht(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,i){var n=NaN;if(i=+i,(t=+t)!==this._x1||i!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3,ut(this,ht(this,n=st(this,t,i)),n);break;default:ut(this,this._t0,n=st(this,t,i))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=i,this._t0=n}}},(function(t){this._context=new ot(t)}.prototype=Object.create(et.prototype)).point=function(t,i){et.prototype.point.call(this,i,t)},ot.prototype={moveTo:function(t,i){this._context.moveTo(i,t)},closePath:function(){this._context.closePath()},lineTo:function(t,i){this._context.lineTo(i,t)},bezierCurveTo:function(t,i,n,r,s,h){this._context.bezierCurveTo(i,t,r,n,h,s)}};const at=100,ft=20;let ct=0;class lt{constructor(i){t(this,i),this.gapSize=2,this.tooltips=!0,this.dataPoints={primary:[],secondary:[]},this.id=this.id||`radial${ct++}`}handleDataPointUpdated(){this.updateDataPoints()}async updateDataPoints(){const t=Array.from(this.el.querySelectorAll("chef-data-point")),i=[];t.forEach(t=>Number(t.value)>0?i.push(t):null),this.dataPoints=E(t=>t.secondary?"secondary":"primary",i)}componentWillLoad(){this.updateDataPoints()}render(){const t=function(){var t=nt,i=it,n=null,r=k(0),s=k(W),h=k(0);function u(u){var e,o,a,f,c,l=u.length,d=0,v=new Array(l),p=new Array(l),M=+r.apply(this,arguments),y=Math.min(W,Math.max(-W,s.apply(this,arguments)-M)),m=Math.min(Math.abs(y)/l,h.apply(this,arguments)),g=m*(y<0?-1:1);for(e=0;e<l;++e)(c=p[v[e]=e]=+t(u[e],e,u))>0&&(d+=c);for(null!=i?v.sort(function(t,n){return i(p[t],p[n])}):null!=n&&v.sort(function(t,i){return n(u[t],u[i])}),e=0,a=d?(y-l*g)/d:0;e<l;++e,M=f)p[o=v[e]]={data:u[o],index:e,value:c=p[o],startAngle:M,endAngle:f=M+(c>0?c*a:0)+g,padAngle:m};return p}return u.value=function(i){return arguments.length?(t="function"==typeof i?i:k(+i),u):t},u.sortValues=function(t){return arguments.length?(i=t,n=null,u):i},u.sort=function(t){return arguments.length?(n=t,i=null,u):n},u.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:k(+t),u):r},u.endAngle=function(t){return arguments.length?(s="function"==typeof t?t:k(+t),u):s},u.padAngle=function(t){return arguments.length?(h="function"==typeof t?t:k(+t),u):h},u}().sort(null).value(t=>t.value).padAngle(this.gapSize*Math.PI/180),{primary:n,secondary:r}=this.dataPoints,s=void 0!==this.dataPoints.secondary,h=b(t(n),n),u=s?b(t(r),r):null,e=[-1,-1,2,2].map(A(at+ft)),o={innerRadius:at-18,outerRadius:at},a={innerRadius:at+10,outerRadius:at+15,cornerRadius:5};return[i("div",{class:"innerText"},i("slot",{name:"innerText"})),i("svg",{width:"100%",height:"100%",viewBox:e.join(" ")},i("g",{class:"primary"},p(this.drawSegment.bind(this,o),h)),i("g",{class:"secondary"},p(this.drawSegment.bind(this,a),u))),p(this.createTooltips.bind(this),h),i("slot",null)]}createTooltips([t,n]){return!0===this.tooltips?i("chef-tooltip",{for:`${this.id}${t.index}`,follow:!0,innerHTML:n.innerHTML}):void 0}drawSegment({innerRadius:t,outerRadius:n,cornerRadius:r=0},[s,h]){const u=tt().innerRadius(t).outerRadius(n).cornerRadius(r)(s);return i("path",{class:`${h.className} segment`,id:`${this.id}${s.index}`,d:u,onMouseOver:this.handleHover.bind(this)})}handleHover(t){const i=t.target.parentNode,n=i.removeChild(t.target);i.appendChild(n)}get el(){return n(this)}static get style(){return"chef-radial-chart{--base-stroke:var(--segment-base-stroke,1);--expanded-stroke:var(--segment-expanded-stroke,10);display:block;position:relative}chef-radial-chart chef-data-point{display:none}chef-radial-chart .segment{color:var(--chef-dark-grey);fill:currentColor;stroke-width:var(--base-stroke);stroke:currentColor;position:relative;-webkit-transition-property:stroke-width;transition-property:stroke-width;-webkit-transition-duration:.25s;transition-duration:.25s;-webkit-transition-timing-function:ease;transition-timing-function:ease}chef-radial-chart .secondary .segment{stroke:var(--chef-white)}chef-radial-chart .primary .segment:hover{stroke-width:var(--expanded-stroke)}chef-radial-chart .primary .segment.empty:hover{stroke-width:var(--base-stroke)}chef-radial-chart svg{position:relative;z-index:10}chef-radial-chart .innerText{position:absolute;z-index:5;height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;padding:20% 0}chef-radial-chart .innerText>*{padding:0 20%;text-align:center}"}}export{lt as chef_radial_chart};