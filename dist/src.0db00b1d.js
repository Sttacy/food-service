parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pAws":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof t&&t.amd?t([],r):"object"==typeof exports?exports.Handlebars=r():e.Handlebars=r()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";var n=r(1).default,o=r(2).default;e.__esModule=!0;var i=n(r(3)),a=o(r(76)),u=o(r(5)),s=n(r(4)),l=n(r(77)),c=o(r(82));function f(){var t=new i.HandlebarsEnvironment;return s.extend(t,i),t.SafeString=a.default,t.Exception=u.default,t.Utils=s,t.escapeExpression=s.escapeExpression,t.VM=l,t.template=function(e){return l.template(e,t)},t}var p=f();p.create=f,c.default(p),p.default=p,e.default=p,t.exports=e.default},function(t,e){"use strict";e.default=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},e.__esModule=!0},function(t,e){"use strict";e.default=function(t){return t&&t.__esModule?t:{default:t}},e.__esModule=!0},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0,e.HandlebarsEnvironment=c;var o=r(4),i=n(r(5)),a=r(9),u=r(69),s=n(r(71)),l=r(72);e.VERSION="4.7.8";e.COMPILER_REVISION=8;e.LAST_COMPATIBLE_COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},a.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:s.default,log:s.default.log,registerHelper:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple helpers");o.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===o.toString.call(t))o.extend(this.partials,t);else{if(void 0===e)throw new i.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple decorators");o.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){l.resetLoggedProperties()}};var f=s.default.log;e.log=f,e.createFrame=o.createFrame,e.logger=s.default},function(t,e){"use strict";e.__esModule=!0,e.extend=a,e.indexOf=function(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!o.test(t))return t;return t.replace(n,i)},e.isEmpty=function(t){return!t&&0!==t||!(!l(t)||0!==t.length)},e.createFrame=function(t){var e=a({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(t){return r[t]}function a(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}var u=Object.prototype.toString;e.toString=u;var s=function(t){return"function"==typeof t};s(/x/)&&(e.isFunction=s=function(t){return"function"==typeof t&&"[object Function]"===u.call(t)}),e.isFunction=s;var l=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===u.call(t)};e.isArray=l},function(t,e,r){"use strict";var n=r(6).default;e.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function i(t,e){var r=e&&e.loc,a=void 0,u=void 0,s=void 0,l=void 0;r&&(a=r.start.line,u=r.end.line,s=r.start.column,l=r.end.column,t+=" - "+a+":"+s);for(var c=Error.prototype.constructor.call(this,t),f=0;f<o.length;f++)this[o[f]]=c[o[f]];Error.captureStackTrace&&Error.captureStackTrace(this,i);try{r&&(this.lineNumber=a,this.endLineNumber=u,n?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=s,this.endColumn=l))}catch(p){}}i.prototype=new Error,e.default=i,t.exports=e.default},function(t,e,r){t.exports={default:r(7),__esModule:!0}},function(t,e,r){var n=r(8);t.exports=function(t,e,r){return n.setDesc(t,e,r)}},function(t,e){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0,e.registerDefaultHelpers=function(t){o.default(t),i.default(t),a.default(t),u.default(t),s.default(t),l.default(t),c.default(t)},e.moveHelperToHooks=function(t,e,r){t.helpers[e]&&(t.hooks[e]=t.helpers[e],r||delete t.helpers[e])};var o=n(r(10)),i=n(r(11)),a=n(r(64)),u=n(r(65)),s=n(r(66)),l=n(r(67)),c=n(r(68))},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,r){var o=r.inverse,i=r.fn;if(!0===e)return i(this);if(!1===e||null==e)return o(this);if(n.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):o(this);if(r.data&&r.ids){var a=n.createFrame(r.data);a.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:a}}return i(e,r)})},t.exports=e.default},function(t,e,r){"use strict";var n=r(12).default,o=r(42).default,i=r(54).default,a=r(59).default,u=r(2).default;e.__esModule=!0;var s=r(4),l=u(r(5));e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new l.default("Must pass iterator to #each");var r,u=e.fn,c=e.inverse,f=0,p="",d=void 0,h=void 0;function v(e,r,n){d&&(d.key=e,d.index=r,d.first=0===r,d.last=!!n,h&&(d.contextPath=h+e)),p+=u(t[e],{data:d,blockParams:s.blockParams([t[e],e],[h+e,null])})}if(e.data&&e.ids&&(h=s.appendContextPath(e.data.contextPath,e.ids[0])+"."),s.isFunction(t)&&(t=t.call(this)),e.data&&(d=s.createFrame(e.data)),t&&"object"==typeof t)if(s.isArray(t))for(var g=t.length;f<g;f++)f in t&&v(f,f,f===t.length-1);else if("function"==typeof n&&t[o]){for(var m=[],y=i(t),_=y.next();!_.done;_=y.next())m.push(_.value);for(g=(t=m).length;f<g;f++)v(f,f,f===t.length-1)}else r=void 0,a(t).forEach(function(t){void 0!==r&&v(r,f-1),r=t,f++}),void 0!==r&&v(r,f-1,!0);return 0===f&&(p=c(this)),p})},t.exports=e.default},function(t,e,r){t.exports={default:r(13),__esModule:!0}},function(t,e,r){r(14),r(41),t.exports=r(20).Symbol},function(t,e,r){"use strict";var n=r(8),o=r(15),i=r(16),a=r(17),u=r(19),s=r(23),l=r(18),c=r(26),f=r(27),p=r(29),d=r(28),h=r(30),v=r(35),g=r(36),m=r(37),y=r(38),_=r(31),x=r(25),b=n.getDesc,w=n.setDesc,P=n.create,M=v.get,O=o.Symbol,k=o.JSON,S=k&&k.stringify,E=!1,j=d("_hidden"),A=n.isEnum,I=c("symbol-registry"),H=c("symbols"),N="function"==typeof O,C=Object.prototype,T=a&&l(function(){return 7!=P(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=b(C,e);n&&delete C[e],w(t,e,r),n&&t!==C&&w(C,e,n)}:w,D=function(t){var e=H[t]=P(O.prototype);return e._k=t,a&&E&&T(C,t,{configurable:!0,set:function(e){i(this,j)&&i(this[j],t)&&(this[j][t]=!1),T(this,t,x(1,e))}}),e},L=function(t){return"symbol"==typeof t},F=function(t,e,r){return r&&i(H,e)?(r.enumerable?(i(t,j)&&t[j][e]&&(t[j][e]=!1),r=P(r,{enumerable:x(0,!1)})):(i(t,j)||w(t,j,x(1,{})),t[j][e]=!0),T(t,e,r)):w(t,e,r)},V=function(t,e){y(t);for(var r,n=g(e=_(e)),o=0,i=n.length;i>o;)F(t,r=n[o++],e[r]);return t},R=function(t,e){return void 0===e?P(t):V(P(t),e)},B=function(t){var e=A.call(this,t);return!(e||!i(this,t)||!i(H,t)||i(this,j)&&this[j][t])||e},G=function(t,e){var r=b(t=_(t),e);return!r||!i(H,e)||i(t,j)&&t[j][e]||(r.enumerable=!0),r},q=function(t){for(var e,r=M(_(t)),n=[],o=0;r.length>o;)i(H,e=r[o++])||e==j||n.push(e);return n},J=function(t){for(var e,r=M(_(t)),n=[],o=0;r.length>o;)i(H,e=r[o++])&&n.push(H[e]);return n},W=l(function(){var t=O();return"[null]"!=S([t])||"{}"!=S({a:t})||"{}"!=S(Object(t))});N||(s((O=function(){if(L(this))throw TypeError("Symbol is not a constructor");return D(p(arguments.length>0?arguments[0]:void 0))}).prototype,"toString",function(){return this._k}),L=function(t){return t instanceof O},n.create=R,n.isEnum=B,n.getDesc=G,n.setDesc=F,n.setDescs=V,n.getNames=v.get=q,n.getSymbols=J,a&&!r(40)&&s(C,"propertyIsEnumerable",B,!0));var K={for:function(t){return i(I,t+="")?I[t]:I[t]=O(t)},keyFor:function(t){return h(I,t)},useSetter:function(){E=!0},useSimple:function(){E=!1}};n.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=d(t);K[t]=N?e:D(e)}),E=!0,u(u.G+u.W,{Symbol:O}),u(u.S,"Symbol",K),u(u.S+u.F*!N,"Object",{create:R,defineProperty:F,defineProperties:V,getOwnPropertyDescriptor:G,getOwnPropertyNames:q,getOwnPropertySymbols:J}),k&&u(u.S+u.F*(!N||W),"JSON",{stringify:function(t){if(void 0!==t&&!L(t)){for(var e,r,n=[t],o=1,i=arguments;i.length>o;)n.push(i[o++]);return"function"==typeof(e=n[1])&&(r=e),!r&&m(e)||(e=function(t,e){if(r&&(e=r.call(this,t,e)),!L(e))return e}),n[1]=e,S.apply(k,n)}}}),f(O,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){t.exports=!r(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,r){var n=r(15),o=r(20),i=r(21),a=function(t,e,r){var u,s,l,c=t&a.F,f=t&a.G,p=t&a.S,d=t&a.P,h=t&a.B,v=t&a.W,g=f?o:o[e]||(o[e]={}),m=f?n:p?n[e]:(n[e]||{}).prototype;for(u in f&&(r=e),r)(s=!c&&m&&u in m)&&u in g||(l=s?m[u]:r[u],g[u]=f&&"function"!=typeof m[u]?r[u]:h&&s?i(l,n):v&&m[u]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((g.prototype||(g.prototype={}))[u]=l))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){var r=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(22);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){t.exports=r(24)},function(t,e,r){var n=r(8),o=r(25);t.exports=r(17)?function(t,e,r){return n.setDesc(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(15),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,r){var n=r(8).setDesc,o=r(16),i=r(28)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(26)("wks"),o=r(29),i=r(15).Symbol;t.exports=function(t){return n[t]||(n[t]=i&&i[t]||(i||o)("Symbol."+t))}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=r(8),o=r(31);t.exports=function(t,e){for(var r,i=o(t),a=n.getKeys(i),u=a.length,s=0;u>s;)if(i[r=a[s++]]===e)return r}},function(t,e,r){var n=r(32),o=r(34);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(31),o=r(8).getNames,i={}.toString,a="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.get=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return a.slice()}}(t):o(n(t))}},function(t,e,r){var n=r(8);t.exports=function(t){var e=n.getKeys(t),r=n.getSymbols;if(r)for(var o,i=r(t),a=n.isEnum,u=0;i.length>u;)a.call(t,o=i[u++])&&e.push(o);return e}},function(t,e,r){var n=r(33);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(39);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=!0},function(t,e){},function(t,e,r){t.exports={default:r(43),__esModule:!0}},function(t,e,r){r(44),r(50),t.exports=r(28)("iterator")},function(t,e,r){"use strict";var n=r(45)(!0);r(47)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){var n=r(46),o=r(34);t.exports=function(t){return function(e,r){var i,a,u=String(o(e)),s=n(r),l=u.length;return s<0||s>=l?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===l||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){"use strict";var n=r(40),o=r(19),i=r(23),a=r(24),u=r(16),s=r(48),l=r(49),c=r(27),f=r(8).getProto,p=r(28)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,r,v,g,m,y){l(r,e,v);var _,x,b=function(t){if(!d&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=e+" Iterator",P="values"==g,M=!1,O=t.prototype,k=O[p]||O["@@iterator"]||g&&O[g],S=k||b(g);if(k){var E=f(S.call(new t));c(E,w,!0),!n&&u(O,"@@iterator")&&a(E,p,h),P&&"values"!==k.name&&(M=!0,S=function(){return k.call(this)})}if(n&&!y||!d&&!M&&O[p]||a(O,p,S),s[e]=S,s[w]=h,g)if(_={values:P?S:b("values"),keys:m?S:b("keys"),entries:P?b("entries"):S},y)for(x in _)x in O||i(O,x,_[x]);else o(o.P+o.F*(d||M),e,_);return _}},function(t,e){t.exports={}},function(t,e,r){"use strict";var n=r(8),o=r(25),i=r(27),a={};r(24)(a,r(28)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n.create(a,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){r(51);var n=r(48);n.NodeList=n.HTMLCollection=n.Array},function(t,e,r){"use strict";var n=r(52),o=r(53),i=r(48),a=r(31);t.exports=r(47)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){t.exports={default:r(55),__esModule:!0}},function(t,e,r){r(50),r(44),t.exports=r(56)},function(t,e,r){var n=r(38),o=r(57);t.exports=r(20).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},function(t,e,r){var n=r(58),o=r(28)("iterator"),i=r(48);t.exports=r(20).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){var n=r(33),o=r(28)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=(e=Object(t))[o])?r:i?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,r){t.exports={default:r(60),__esModule:!0}},function(t,e,r){r(61),t.exports=r(20).Object.keys},function(t,e,r){var n=r(62);r(63)("keys",function(t){return function(e){return t(n(e))}})},function(t,e,r){var n=r(34);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(19),o=r(20),i=r(18);t.exports=function(t,e){var r=(o.Object||{})[t]||Object[t],a={};a[t]=e(r),n(n.S+n.F*i(function(){r(1)}),"Object",a)}},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0;var o=n(r(5));e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0;var o=r(4),i=n(r(5));e.default=function(t){t.registerHelper("if",function(t,e){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return o.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||o.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,r){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},t.exports=e.default},function(t,e){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)e.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),e[0]=o,t.log.apply(t,e)})},t.exports=e.default},function(t,e){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e,r){return t?r.lookupProperty(t,e):t})},t.exports=e.default},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0;var o=r(4),i=n(r(5));e.default=function(t){t.registerHelper("with",function(t,e){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");o.isFunction(t)&&(t=t.call(this));var r=e.fn;if(o.isEmpty(t))return e.inverse(this);var n=e.data;return e.data&&e.ids&&((n=o.createFrame(e.data)).contextPath=o.appendContextPath(e.data.contextPath,e.ids[0])),r(t,{data:n,blockParams:o.blockParams([t],[n&&n.contextPath])})})},t.exports=e.default},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0,e.registerDefaultDecorators=function(t){o.default(t)};var o=n(r(70))},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4);e.default=function(t){t.registerDecorator("inline",function(t,e,r,o){var i=t;return e.partials||(e.partials={},i=function(o,i){var a=r.partials;r.partials=n.extend({},a,e.partials);var u=t(o,i);return r.partials=a,u}),e.partials[o.args[0]]=o.fn,i})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=n.indexOf(o.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];console[e].apply(console,n)}}};e.default=o,t.exports=e.default},function(t,e,r){"use strict";var n=r(73).default,o=r(59).default,i=r(2).default;e.__esModule=!0,e.createProtoAccessControl=function(t){var e=n(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var r=n(null);return r.__proto__=!1,{properties:{whitelist:a.createNewLookupObject(r,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:a.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}},e.resultIsAllowed=function(t,e,r){return l("function"==typeof t?e.methods:e.properties,r)},e.resetLoggedProperties=function(){o(s).forEach(function(t){delete s[t]})};var a=r(75),u=i(r(71)),s=n(null);function l(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(function(t){!0!==s[t]&&(s[t]=!0,u.default.log("error",'Handlebars: Access has been denied to resolve the property "'+t+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(e),!1)}},function(t,e,r){t.exports={default:r(74),__esModule:!0}},function(t,e,r){var n=r(8);t.exports=function(t,e){return n.create(t,e)}},function(t,e,r){"use strict";var n=r(73).default;e.__esModule=!0,e.createNewLookupObject=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.extend.apply(void 0,[n(null)].concat(e))};var o=r(4)},function(t,e){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,r){"use strict";var n=r(78).default,o=r(59).default,i=r(1).default,a=r(2).default;e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,r=l.COMPILER_REVISION;if(e>=l.LAST_COMPATIBLE_COMPILER_REVISION&&e<=l.COMPILER_REVISION)return;if(e<l.LAST_COMPATIBLE_COMPILER_REVISION){var n=l.REVISION_CHANGES[r],o=l.REVISION_CHANGES[e];throw new s.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new s.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")},e.template=function(t,e){if(!e)throw new s.default("No environment passed to template");if(!t||!t.main)throw new s.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var r=t.compiler&&7===t.compiler[0];var i={strict:function(t,e,r){if(!(t&&e in t))throw new s.default('"'+e+'" not defined in '+t,{loc:r});return i.lookupProperty(t,e)},lookupProperty:function(t,e){var r=t[e];return null==r?r:Object.prototype.hasOwnProperty.call(t,e)?r:p.resultIsAllowed(r,i.protoAccessControl,e)?r:void 0},lookup:function(t,e){for(var r=t.length,n=0;n<r;n++){var o=t[n]&&i.lookupProperty(t[n],e);if(null!=o)return t[n][e]}},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:u.escapeExpression,invokePartial:function(r,n,o){o.hash&&(n=u.extend({},n,o.hash),o.ids&&(o.ids[0]=!0));r=e.VM.resolvePartial.call(this,r,n,o);var i=u.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),a=e.VM.invokePartial.call(this,r,n,i);null==a&&e.compile&&(o.partials[o.name]=e.compile(r,t.compilerOptions,e),a=o.partials[o.name](n,i));if(null!=a){if(o.indent){for(var l=a.split("\n"),c=0,f=l.length;c<f&&(l[c]||c+1!==f);c++)l[c]=o.indent+l[c];a=l.join("\n")}return a}throw new s.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var r=t[e];return r.decorator=t[e+"_d"],r},programs:[],program:function(t,e,r,n,o){var i=this.programs[t],a=this.fn(t);return e||o||n||r?i=d(this,t,a,e,r,n,o):i||(i=this.programs[t]=d(this,t,a)),i},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var r=t||e;return t&&e&&t!==e&&(r=u.extend({},e,t)),r},nullContext:n({}),noop:e.VM.noop,compilerInfo:t.compiler};function a(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;a._setup(r),!r.partial&&t.useData&&(n=function(t,e){e&&"root"in e||((e=e?l.createFrame(e):{}).root=t);return e}(e,n));var o=void 0,u=t.useBlockParams?[]:void 0;function s(e){return""+t.main(i,e,i.helpers,i.partials,n,u,o)}return t.useDepths&&(o=r.depths?e!=r.depths[0]?[e].concat(r.depths):r.depths:[e]),(s=v(t.main,s,i,r.depths||[],n,u))(e,r)}return a.isTop=!0,a._setup=function(n){if(n.partial)i.protoAccessControl=n.protoAccessControl,i.helpers=n.helpers,i.partials=n.partials,i.decorators=n.decorators,i.hooks=n.hooks;else{var a=u.extend({},e.helpers,n.helpers);!function(t,e){o(t).forEach(function(r){var n=t[r];t[r]=function(t,e){var r=e.lookupProperty;return f.wrapHelper(t,function(t){return u.extend({lookupProperty:r},t)})}(n,e)})}(a,i),i.helpers=a,t.usePartial&&(i.partials=i.mergeIfNeeded(n.partials,e.partials)),(t.usePartial||t.useDecorators)&&(i.decorators=u.extend({},e.decorators,n.decorators)),i.hooks={},i.protoAccessControl=p.createProtoAccessControl(n);var s=n.allowCallsToHelperMissing||r;c.moveHelperToHooks(i,"helperMissing",s),c.moveHelperToHooks(i,"blockHelperMissing",s)}},a._child=function(e,r,n,o){if(t.useBlockParams&&!n)throw new s.default("must pass block params");if(t.useDepths&&!o)throw new s.default("must pass parent depths");return d(i,e,t[e],r,0,n,o)},a},e.wrapProgram=d,e.resolvePartial=function(t,e,r){t?t.call||r.name||(r.name=t,t=r.partials[t]):t="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return t},e.invokePartial=function(t,e,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==h&&function(){r.data=l.createFrame(r.data);var t=r.fn;o=r.data["partial-block"]=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=l.createFrame(r.data),r.data["partial-block"]=n,t(e,r)},t.partials&&(r.partials=u.extend({},r.partials,t.partials))}();void 0===t&&o&&(t=o);if(void 0===t)throw new s.default("The partial "+r.name+" could not be found");if(t instanceof Function)return t(e,r)},e.noop=h;var u=i(r(4)),s=a(r(5)),l=r(3),c=r(9),f=r(81),p=r(72);function d(t,e,r,n,o,i,a){function u(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=a;return!a||e==a[0]||e===t.nullContext&&null===a[0]||(u=[e].concat(a)),r(t,e,t.helpers,t.partials,o.data||n,i&&[o.blockParams].concat(i),u)}return(u=v(r,u,t,a,n,i)).program=e,u.depth=a?a.length:0,u.blockParams=o||0,u}function h(){return""}function v(t,e,r,n,o,i){if(t.decorator){var a={};e=t.decorator(e,a,r,n&&n[0],o,i,n),u.extend(e,a)}return e}},function(t,e,r){t.exports={default:r(79),__esModule:!0}},function(t,e,r){r(80),t.exports=r(20).Object.seal},function(t,e,r){var n=r(39);r(63)("seal",function(t){return function(e){return t&&n(e)?t(e):e}})},function(t,e){"use strict";e.__esModule=!0,e.wrapHelper=function(t,e){if("function"!=typeof t)return t;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=e(r),t.apply(this,arguments)}}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t){"object"!=typeof globalThis&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__);var e=globalThis.Handlebars;t.noConflict=function(){return globalThis.Handlebars===t&&(globalThis.Handlebars=e),t}},t.exports=e.default}])});
},{}],"rWay":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=l(require("handlebars/dist/handlebars.runtime"));function l(n){return n&&n.__esModule?n:{default:n}}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var a=n.default.template({1:function(n,l,a,r,t){var o,c,i=null!=l?l:n.nullContext||{},s=n.hooks.helperMissing,u="function",m=n.escapeExpression,p=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<li class="menu__item">\r\n  <div class="card">\r\n    <img\r\n      src="'+m(e(c=null!=(c=p(a,"image")||(null!=l?p(l,"image"):l))?c:s)===u?c.call(i,{name:"image",hash:{},data:t,loc:{start:{line:5,column:11},end:{line:5,column:20}}}):c)+'"\r\n      alt="'+m(e(c=null!=(c=p(a,"name")||(null!=l?p(l,"name"):l))?c:s)===u?c.call(i,{name:"name",hash:{},data:t,loc:{start:{line:6,column:11},end:{line:6,column:19}}}):c)+'"\r\n      class="card__image"\r\n    >\r\n    <div class="card__content">\r\n      <h2 class="card__name">'+m(e(c=null!=(c=p(a,"name")||(null!=l?p(l,"name"):l))?c:s)===u?c.call(i,{name:"name",hash:{},data:t,loc:{start:{line:10,column:29},end:{line:10,column:37}}}):c)+'</h2>\r\n      <p class="card__price">\r\n        <i class="material-icons"> monetization_on </i>\r\n        '+m(e(c=null!=(c=p(a,"price")||(null!=l?p(l,"price"):l))?c:s)===u?c.call(i,{name:"price",hash:{},data:t,loc:{start:{line:13,column:8},end:{line:13,column:17}}}):c)+' кредитів\r\n      </p>\r\n\r\n      <p class="card__descr">\r\n        '+m(e(c=null!=(c=p(a,"description")||(null!=l?p(l,"description"):l))?c:s)===u?c.call(i,{name:"description",hash:{},data:t,loc:{start:{line:17,column:8},end:{line:17,column:23}}}):c)+'\r\n      </p>      \r\n<ul class="tag-list">\r\n'+(null!=(o=p(a,"each").call(i,null!=l?p(l,"ingredients"):l,{name:"each",hash:{},fn:n.program(2,t,0),inverse:n.noop,data:t,loc:{start:{line:20,column:0},end:{line:22,column:9}}}))?o:"")+'</ul>\r\n    </div>\r\n\r\n    <button class="card__button button">\r\n      <i class="material-icons button__icon"> shopping_cart </i>\r\n      В корзину\r\n    </button>\r\n  </div>\r\n</li>\r\n'},2:function(n,l,e,a,r){return'  <li class="tag-list__item">'+n.escapeExpression(n.lambda(l,l))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,l,e,a,r){var t;return null!=(t=(n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]})(e,"each").call(null!=l?l:n.nullContext||{},l,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:1,column:0},end:{line:32,column:9}}}))?t:""},useData:!0}),r=exports.default=a;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"NkM5":[function(require,module,exports) {
module.exports=[{id:"XWaQXcbk0",name:"Картопля, запечена в мундирі",description:"Ароматна, ситна, домашня картопля, фарширована сметано-беконовою начинкою, — це дуже простий та дуже ефективний спосіб нагодувати велику кількість людей, практично не витративши на приготування ні сил, ні часу. Звичайну картоплю при бажані тут можна замінити на солодкий батат, а в начинку додати, наприклад, кукурудзу або солодкий червоний перець.",image:"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",price:100,ingredients:["Картопля","Часник","Сметана","Бекон","Твердий сир","Зелена цибуля"]},{id:"pkXzyRp1P",name:"Томатний магрибський суп",description:"Томатний магрибський суп особливо розповсюджений в Марокко та Тунісі. Він досить простий в приготуванні і сам по собі легкий — в основі томати та курячий бульйон. Окрім них в супі необхідні лише спеції, мед та лимон, які всі разом і передають той самий східний колорит. Смак супу повністью залежить від якості томатів. Доповнять страву свіжа кінза та окремі дольки лимону.",image:"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg",price:150,ingredients:["Помідори","Курячий бульйон","Мед","Петрушка","Кінза","Паприка"]},{id:"QMom9q4Ku",name:"Крем-суп з гарбуза",description:"Портрет цієї оранжевої юшки прикрашає обгортку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, який придумав так звану нову кухню, вважав гарбуза одним із основ цього світогляу, а гарбузовий суп — найкращим витвором гастрономії.",image:"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",price:100,ingredients:["Гарбуз","Петрушка","Вершки","Бренді","Курячий бульйон"]},{id:"k2k0UrjZG",name:"Салат з червоних бобів та з творогом",description:"Тосканський салат, витриманий в кольорах італійського прапора. Буквально кілька ложок вистачає, щоб в шлунку утворилась приємна важкість. Джуе корисна штуказ точки зору ранку, коли важко сапхати в себе крупні дози біомаси, а їсти при цьому хочеться.",image:"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",price:150,ingredients:["Боби","Сіль","Часник","Оливкова олія","Творог","Червона цибуля"]},{id:"j2k8U1jZd",name:"Класичний грецький салат ",description:"Це рецепт, привезений з Греції. Секрет салату - свіжі овочі та гарна фета. Для салату використовують тільки оливкову олію, а такі спеції, як орегано та базилік, є візитною карткою грецької кухні.",image:"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg",price:350,ingredients:["Оливкова олія","Лимоний сік","Часник","Помідори","Червона цибуля","Сир фета","Маслини"]},{id:"X2aQ7cvkd",name:"Маффіни з лохиною та мускатним горіхом",description:"Культова ягода, яку навчилися виробляти цілий рік, у поєднанні з пухким тістом – це абсолютно безпрограшний варіант. Маффіни з лохиною стали популярним десертом в Англії та Америці, хоча походження їхнє французьке. Та й взагалі, ці маленькі солодкі кекси, якими ми їх знаємо зараз, замислювалися як звичайний хліб і на смак були нейтральні.",image:"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg",price:170,ingredients:["Оливкова олія","Пшенична мука","Лохина","Ванільний цукор","Мускатний горіх"]},{id:"nk3zy1pf8",name:"Азу по‑татарськи",description:"Одна з небагатьох страв, що удостоєні в радянській продуктовій традиції продажу з іменною нарізкою. І досі в кулінаріях та супермаркетах можна знайти яловичину, яку ріжуть соломкою та продають як азу. Щодо самої страви досі точаться суперечки, як і з чим готувати: використовувати яловичину або баранину, топлене або звичайне масло, гасити в казані або сотейнику з товстим дном. Редакцій цієї страви може бути багато, але її основа завжди незмінна — це нарізане соломкою м'ясо, картопля і томатний соус.",image:"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg",price:270,ingredients:["Яловичина","Засолені огірки","Картопля","Бульон","Часник"]},{id:"b7k2U13fd",name:"Смажений рис з яйцем по-китайськи",description:"Смажений рис - досить поширений інгредієнт страв східноазіатської кухні - готувати, по суті, можна із залишків вчорашньої вечері. Тільки добре остиглий, заздалегідь зварений рис, що в ідеалі простояв всю ніч у холодильнику, при попаданні в розпечений вок не розповзеться до стану каші і не перетворить вміст сковорідки на неповоротку безформну грудку.",image:"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg",price:240,ingredients:["Круглbй рис","Міні цукіні","Тертий імбирь","Гриби шіітаке","Соевий соус","Кунжутне масло"]}];
},{}],"Tnu0":[function(require,module,exports) {

},{}],"Zy0T":[function(require,module,exports) {
"use strict";var e=r(require("../templates/listMenu.hbs")),t=r(require("../js/menu.json"));function r(e){return e&&e.__esModule?e:{default:e}}require("../styles.css");var u=document.querySelector(".js-menu"),s=(0,e.default)(t.default);u.insertAdjacentHTML("afterbegin",s);
},{"../templates/listMenu.hbs":"rWay","../js/menu.json":"NkM5","../styles.css":"Tnu0"}],"Sq5u":[function(require,module,exports) {
var e={LIGHT:"light-theme",DARK:"dark-theme"},t=e.LIGHT,a=document.querySelector("body"),c=document.querySelector(".theme-switch__toggle");function h(){c.checked?(t=e.DARK,a.classList.remove("light-theme"),a.classList.add("dark-theme")):(t=e.LIGHT,a.classList.remove("dark-theme"),a.classList.add("light-theme")),localStorage.setItem("theme",t)}c.addEventListener("change",h);var m=localStorage.getItem("theme");m===e.DARK&&(c.checked=!0,h());
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/list"),require("./js/switchTheme");
},{"./js/list":"Zy0T","./js/switchTheme":"Sq5u"}]},{},["Focm"], null)
//# sourceMappingURL=/folder/src.0db00b1d.js.map