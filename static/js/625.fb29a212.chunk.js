"use strict";(self.webpackChunkrest_countries_api_with_color_theme_switcher_master=self.webpackChunkrest_countries_api_with_color_theme_switcher_master||[]).push([[625],{625:function(e,t,n){n.d(t,{Z:function(){return We}});var r=n(791),a=n.t(r,2);var s=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=Math.abs,c=String.fromCharCode,o=Object.assign;function u(e){return e.trim()}function l(e,t,n){return e.replace(t,n)}function f(e,t){return e.indexOf(t)}function p(e,t){return 0|e.charCodeAt(t)}function h(e,t,n){return e.slice(t,n)}function d(e){return e.length}function v(e){return e.length}function m(e,t){return t.push(e),e}var y=1,g=1,b=0,w=0,k=0,_="";function x(e,t,n,r,a,s,i){return{value:e,root:t,parent:n,type:r,props:a,children:s,line:y,column:g,length:i,return:""}}function $(e,t){return o(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function A(){return k=w>0?p(_,--w):0,g--,10===k&&(g=1,y--),k}function C(){return k=w<b?p(_,w++):0,g++,10===k&&(g=1,y++),k}function E(){return p(_,w)}function O(){return w}function S(e,t){return h(_,e,t)}function j(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return y=g=1,b=d(_=e),w=0,[]}function N(e){return _="",e}function T(e){return u(S(w-1,I(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(k=E())&&k<33;)C();return j(e)>2||j(k)>3?"":" "}function M(e,t){for(;--t&&C()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return S(e,O()+(t<6&&32==E()&&32==C()))}function I(e){for(;C();)switch(k){case e:return w;case 34:case 39:34!==e&&39!==e&&I(k);break;case 40:41===e&&I(e);break;case 92:C()}return w}function L(e,t){for(;C()&&e+k!==57&&(e+k!==84||47!==E()););return"/*"+S(t,w-1)+"*"+c(47===e?e:C())}function R(e){for(;!j(E());)C();return S(e,w)}var Z="-ms-",F="-moz-",q="-webkit-",D="comm",B="rule",H="decl",U="@keyframes";function W(e,t){for(var n="",r=v(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Y(e,t,n,r){switch(e.type){case"@import":case H:return e.return=e.return||e.value;case D:return"";case U:return e.return=e.value+"{"+W(e.children,r)+"}";case B:e.value=e.props.join(",")}return d(n=W(e.children,r))?e.return=e.value+"{"+n+"}":""}function G(e,t){switch(function(e,t){return(((t<<2^p(e,0))<<2^p(e,1))<<2^p(e,2))<<2^p(e,3)}(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+F+e+Z+e+e;case 6828:case 4268:return q+e+Z+e+e;case 6165:return q+e+Z+"flex-"+e+e;case 5187:return q+e+l(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return q+e+Z+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return q+e+Z+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+Z+l(e,"shrink","negative")+e;case 5292:return q+e+Z+l(e,"basis","preferred-size")+e;case 6060:return q+"box-"+l(e,"-grow","")+q+e+Z+l(e,"grow","positive")+e;case 4554:return q+l(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(p(e,t+1)){case 109:if(45!==p(e,t+4))break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+F+(108==p(e,t+3)?"$3":"$2-$3"))+e;case 115:return~f(e,"stretch")?G(l(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==p(e,t+1))break;case 6444:switch(p(e,d(e)-3-(~f(e,"!important")&&10))){case 107:return l(e,":",":"+q)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(45===p(e,14)?"inline-":"")+"box$3$1"+q+"$2$3$1"+Z+"$2box$3")+e}break;case 5936:switch(p(e,t+11)){case 114:return q+e+Z+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+Z+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+Z+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+Z+e+e}return e}function J(e){return N(K("",null,null,null,[""],e=P(e),0,[0],e))}function K(e,t,n,r,a,s,i,o,u){for(var p=0,h=0,v=i,y=0,g=0,b=0,w=1,k=1,_=1,x=0,$="",S=a,j=s,P=r,N=$;k;)switch(b=x,x=C()){case 40:if(108!=b&&58==N.charCodeAt(v-1)){-1!=f(N+=l(T(x),"&","&\f"),"&\f")&&(_=-1);break}case 34:case 39:case 91:N+=T(x);break;case 9:case 10:case 13:case 32:N+=z(b);break;case 92:N+=M(O()-1,7);continue;case 47:switch(E()){case 42:case 47:m(V(L(C(),O()),t,n),u);break;default:N+="/"}break;case 123*w:o[p++]=d(N)*_;case 125*w:case 59:case 0:switch(x){case 0:case 125:k=0;case 59+h:g>0&&d(N)-v&&m(g>32?X(N+";",r,n,v-1):X(l(N," ","")+";",r,n,v-2),u);break;case 59:N+=";";default:if(m(P=Q(N,t,n,p,h,a,o,$,S=[],j=[],v),s),123===x)if(0===h)K(N,t,P,P,S,s,v,o,j);else switch(y){case 100:case 109:case 115:K(e,P,P,r&&m(Q(e,P,P,0,0,a,o,$,a,S=[],v),j),a,j,v,o,r?S:j);break;default:K(N,P,P,P,[""],j,0,o,j)}}p=h=g=0,w=_=1,$=N="",v=i;break;case 58:v=1+d(N),g=b;default:if(w<1)if(123==x)--w;else if(125==x&&0==w++&&125==A())continue;switch(N+=c(x),x*w){case 38:_=h>0?1:(N+="\f",-1);break;case 44:o[p++]=(d(N)-1)*_,_=1;break;case 64:45===E()&&(N+=T(C())),y=E(),h=v=d($=N+=R(O())),x++;break;case 45:45===b&&2==d(N)&&(w=0)}}return s}function Q(e,t,n,r,a,s,c,o,f,p,d){for(var m=a-1,y=0===a?s:[""],g=v(y),b=0,w=0,k=0;b<r;++b)for(var _=0,$=h(e,m+1,m=i(w=c[b])),A=e;_<g;++_)(A=u(w>0?y[_]+" "+$:l($,/&\f/g,y[_])))&&(f[k++]=A);return x(e,t,n,0===a?B:o,f,p,d)}function V(e,t,n){return x(e,t,n,D,c(k),h(e,2,-2),0)}function X(e,t,n,r){return x(e,t,n,H,h(e,0,r),h(e,r+1,-1),r)}var ee=function(e,t,n){for(var r=0,a=0;r=a,a=E(),38===r&&12===a&&(t[n]=1),!j(a);)C();return S(e,w)},te=function(e,t){return N(function(e,t){var n=-1,r=44;do{switch(j(r)){case 0:38===r&&12===E()&&(t[n]=1),e[n]+=ee(w-1,t,n);break;case 2:e[n]+=T(r);break;case 4:if(44===r){e[++n]=58===E()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=c(r)}}while(r=C());return e}(P(e),t))},ne=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(n))&&!r){ne.set(e,!0);for(var a=[],s=te(t,a),i=n.props,c=0,o=0;c<s.length;c++)for(var u=0;u<i.length;u++,o++)e.props[o]=a[c]?s[c].replace(/&\f/g,i[u]):i[u]+" "+s[c]}}},ae=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},se=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case H:e.return=G(e.value,e.length);break;case U:return W([$(e,{value:l(e.value,"@","@"+q)})],r);case B:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([$(e,{props:[l(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return W([$(e,{props:[l(t,/:(plac\w+)/,":-webkit-input-$1")]}),$(e,{props:[l(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[l(t,/:(plac\w+)/,Z+"input-$1")]})],r)}return""}))}}],ie=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||se;var a,i,c={},o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)c[t[n]]=!0;o.push(e)}));var u,l,f=[Y,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],p=function(e){var t=v(e);return function(n,r,a,s){for(var i="",c=0;c<t;c++)i+=e[c](n,r,a,s)||"";return i}}([re,ae].concat(r,f));i=function(e,t,n,r){u=n,W(J(e?e+"{"+t.styles+"}":t.styles),p),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new s({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:i};return h.sheet.hydrate(o),h};var ce=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)};var oe=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},ue=n(840),le=n(782),fe=/[A-Z]|^ms/g,pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,he=function(e){return 45===e.charCodeAt(1)},de=function(e){return null!=e&&"boolean"!==typeof e},ve=(0,le.Z)((function(e){return he(e)?e:e.replace(fe,"-$&").toLowerCase()})),me=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(pe,(function(e,t,n){return ge={name:t,styles:n,next:ge},t}))}return 1===ue.Z[e]||he(e)||"number"!==typeof t||0===t?t:t+"px"};function ye(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return ge={name:n.name,styles:n.styles,next:ge},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)ge={name:r.name,styles:r.styles,next:ge},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=ye(e,t,n[a])+";";else for(var s in n){var i=n[s];if("object"!==typeof i)null!=t&&void 0!==t[i]?r+=s+"{"+t[i]+"}":de(i)&&(r+=ve(s)+":"+me(s,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=ye(e,t,i);switch(s){case"animation":case"animationName":r+=ve(s)+":"+c+";";break;default:r+=s+"{"+c+"}"}}else for(var o=0;o<i.length;o++)de(i[o])&&(r+=ve(s)+":"+me(s,i[o])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=ge,s=n(e);return ge=a,ye(e,t,s)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var ge,be=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var we=function(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";ge=void 0;var s=e[0];null==s||void 0===s.raw?(r=!1,a+=ye(n,t,s)):a+=s[0];for(var i=1;i<e.length;i++)a+=ye(n,t,e[i]),r&&(a+=s[i]);be.lastIndex=0;for(var c,o="";null!==(c=be.exec(a));)o+="-"+c[1];return{name:oe(a)+o,styles:a,next:ge}},ke={}.hasOwnProperty,_e=(0,r.createContext)("undefined"!==typeof HTMLElement?ie({key:"css"}):null);_e.Provider;var xe=function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(_e);return e(t,a,n)}))},$e=(0,r.createContext)({});var Ae=a.useInsertionEffect?a.useInsertionEffect:function(e){e()};var Ce="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ee=function(e,t){var n={};for(var r in t)ke.call(t,r)&&(n[r]=t[r]);return n[Ce]=e,n},Oe=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;ce(t,n,r);var a;a=function(){return function(e,t,n){ce(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,n,r)},Ae(a);return null},Se=xe((function(e,t,n){var a=e.css;"string"===typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var s=e[Ce],i=[a],c="";"string"===typeof e.className?c=function(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}(t.registered,i,e.className):null!=e.className&&(c=e.className+" ");var o=we(i,void 0,(0,r.useContext)($e));c+=t.key+"-"+o.name;var u={};for(var l in e)ke.call(e,l)&&"css"!==l&&l!==Ce&&(u[l]=e[l]);return u.ref=n,u.className=c,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Oe,{cache:t,serialized:o,isStringTag:"string"===typeof s}),(0,r.createElement)(s,u))}));n(110);var je=n(184);je.Fragment;function Pe(e,t,n){return ke.call(t,"css")?(0,je.jsx)(Se,Ee(e,t),n):(0,je.jsx)(e,t,n)}a.useInsertionEffect?a.useInsertionEffect:r.useLayoutEffect;function Ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return we(t)}var Te={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function ze(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return Te[r]?{value:t,unit:r}:(console.warn("React Spinners: "+e+" is not a valid css value. Defaulting to "+t+"px."),{value:t,unit:"px"})}function Me(e){var t=ze(e);return""+t.value+t.unit}var Ie={loading:!0,color:"#000000",css:"",speedMultiplier:1};function Le(e){return Object.assign({},Ie,{size:e})}var Re,Ze,Fe,qe=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},De=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Be=function(){return Be=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Be.apply(this,arguments)},He=function(){var e=Ne.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}(Re||(Re=qe(["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"],["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"]))),Ue=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.style=function(e){var n=t.props,r=n.size,a=n.color,s=n.speedMultiplier,i=ze(r),c=i.value,o=i.unit;return Ne(Ze||(Ze=qe(["\n      position: absolute;\n      height: ",";\n      width: ",";\n      border: 1px solid ",";\n      border-radius: 100%;\n      transition: 2s;\n      border-bottom: none;\n      border-right: none;\n      top: ","%;\n      left: ",'%;\n      animation-fill-mode: "";\n      animation: '," ","s ","s infinite linear;\n    "],["\n      position: absolute;\n      height: ",";\n      width: ",";\n      border: 1px solid ",";\n      border-radius: 100%;\n      transition: 2s;\n      border-bottom: none;\n      border-right: none;\n      top: ","%;\n      left: ",'%;\n      animation-fill-mode: "";\n      animation: '," ","s ","s infinite linear;\n    "])),""+c*(1-e/10)+o,""+c*(1-e/10)+o,a,.7*e*2.5,.35*e*2.5,He,1/s,.2*e/s)},t.wrapper=function(){var e=t.props.size;return Ne(Fe||(Fe=qe(["\n      position: relative;\n      width: ",";\n      height: ",";\n    "],["\n      position: relative;\n      width: ",";\n      height: ",";\n    "])),Me(e),Me(e))},t}return De(t,e),t.prototype.render=function(){var e,t,n,r=this.props,a=r.loading,s=r.css;return a?(e="span",t=Be({css:[this.wrapper(),s]},{children:[Pe("span",{css:this.style(0)},void 0),Pe("span",{css:this.style(1)},void 0),Pe("span",{css:this.style(2)},void 0),Pe("span",{css:this.style(3)},void 0),Pe("span",{css:this.style(4)},void 0)]}),n=void 0,ke.call(t,"css")?(0,je.jsxs)(Se,Ee(e,t),n):(0,je.jsxs)(e,t,n)):null},t.defaultProps=Le(50),t}(r.PureComponent),We=Ue}}]);
//# sourceMappingURL=625.fb29a212.chunk.js.map