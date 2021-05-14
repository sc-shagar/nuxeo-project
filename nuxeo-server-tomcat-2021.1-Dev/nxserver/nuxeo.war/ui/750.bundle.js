/*! For license information please see 750.bundle.js.LICENSE.txt */
(self.webpackChunk_nuxeo_nuxeo_web_ui=self.webpackChunk_nuxeo_nuxeo_web_ui||[]).push([[750],{78276:e=>{window,e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=41)}([function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=i(n(3)),s=i(n(1)),a=i(n(38)),o=i(n(39)),l=i(n(5)),u=String.fromCharCode(0),c=function(){function e(e){Array.isArray(e)?this.ops=e:null!=e&&Array.isArray(e.ops)?this.ops=e.ops:this.ops=[]}return e.prototype.insert=function(e,t){var n={};return"string"==typeof e&&0===e.length?this:(n.insert=e,null!=t&&"object"==typeof t&&Object.keys(t).length>0&&(n.attributes=t),this.push(n))},e.prototype.delete=function(e){return e<=0?this:this.push({delete:e})},e.prototype.retain=function(e,t){if(e<=0)return this;var n={retain:e};return null!=t&&"object"==typeof t&&Object.keys(t).length>0&&(n.attributes=t),this.push(n)},e.prototype.push=function(e){var t=this.ops.length,n=this.ops[t-1];if(e=s.default(!0,{},e),"object"==typeof n){if("number"==typeof e.delete&&"number"==typeof n.delete)return this.ops[t-1]={delete:n.delete+e.delete},this;if("number"==typeof n.delete&&null!=e.insert&&(t-=1,"object"!=typeof(n=this.ops[t-1])))return this.ops.unshift(e),this;if(r.default(e.attributes,n.attributes)){if("string"==typeof e.insert&&"string"==typeof n.insert)return this.ops[t-1]={insert:n.insert+e.insert},"object"==typeof e.attributes&&(this.ops[t-1].attributes=e.attributes),this;if("number"==typeof e.retain&&"number"==typeof n.retain)return this.ops[t-1]={retain:n.retain+e.retain},"object"==typeof e.attributes&&(this.ops[t-1].attributes=e.attributes),this}}return t===this.ops.length?this.ops.push(e):this.ops.splice(t,0,e),this},e.prototype.chop=function(){var e=this.ops[this.ops.length-1];return e&&e.retain&&!e.attributes&&this.ops.pop(),this},e.prototype.filter=function(e){return this.ops.filter(e)},e.prototype.forEach=function(e){this.ops.forEach(e)},e.prototype.map=function(e){return this.ops.map(e)},e.prototype.partition=function(e){var t=[],n=[];return this.forEach((function(i){(e(i)?t:n).push(i)})),[t,n]},e.prototype.reduce=function(e,t){return this.ops.reduce(e,t)},e.prototype.changeLength=function(){return this.reduce((function(e,t){return t.insert?e+l.default.length(t):t.delete?e-t.delete:e}),0)},e.prototype.length=function(){return this.reduce((function(e,t){return e+l.default.length(t)}),0)},e.prototype.slice=function(t,n){void 0===t&&(t=0),void 0===n&&(n=1/0);for(var i=[],r=l.default.iterator(this.ops),s=0;s<n&&r.hasNext();){var a=void 0;s<t?a=r.next(t-s):(a=r.next(n-s),i.push(a)),s+=l.default.length(a)}return new e(i)},e.prototype.compose=function(t){var n=l.default.iterator(this.ops),i=l.default.iterator(t.ops),s=[],a=i.peek();if(null!=a&&"number"==typeof a.retain&&null==a.attributes){for(var u=a.retain;"insert"===n.peekType()&&n.peekLength()<=u;)u-=n.peekLength(),s.push(n.next());a.retain-u>0&&i.next(a.retain-u)}for(var c=new e(s);n.hasNext()||i.hasNext();)if("insert"===i.peekType())c.push(i.next());else if("delete"===n.peekType())c.push(n.next());else{var d=Math.min(n.peekLength(),i.peekLength()),h=n.next(d),p=i.next(d);if("number"==typeof p.retain){var m={};"number"==typeof h.retain?m.retain=d:m.insert=h.insert;var f=o.default.compose(h.attributes,p.attributes,"number"==typeof h.retain);if(f&&(m.attributes=f),c.push(m),!i.hasNext()&&r.default(c.ops[c.ops.length-1],m)){var g=new e(n.rest());return c.concat(g).chop()}}else"number"==typeof p.delete&&"number"==typeof h.retain&&c.push(p)}return c.chop()},e.prototype.concat=function(t){var n=new e(this.ops.slice());return t.ops.length>0&&(n.push(t.ops[0]),n.ops=n.ops.concat(t.ops.slice(1))),n},e.prototype.diff=function(t,n){if(this.ops===t.ops)return new e;var i=[this,t].map((function(e){return e.map((function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:u;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join("")})),s=new e,c=a.default(i[0],i[1],n),d=l.default.iterator(this.ops),h=l.default.iterator(t.ops);return c.forEach((function(e){for(var t=e[1].length;t>0;){var n=0;switch(e[0]){case a.default.INSERT:n=Math.min(h.peekLength(),t),s.push(h.next(n));break;case a.default.DELETE:n=Math.min(t,d.peekLength()),d.next(n),s.delete(n);break;case a.default.EQUAL:n=Math.min(d.peekLength(),h.peekLength(),t);var i=d.next(n),l=h.next(n);r.default(i.insert,l.insert)?s.retain(n,o.default.diff(i.attributes,l.attributes)):s.push(l).delete(n)}t-=n}})),s.chop()},e.prototype.eachLine=function(t,n){void 0===n&&(n="\n");for(var i=l.default.iterator(this.ops),r=new e,s=0;i.hasNext();){if("insert"!==i.peekType())return;var a=i.peek(),o=l.default.length(a)-i.peekLength(),u="string"==typeof a.insert?a.insert.indexOf(n,o)-o:-1;if(u<0)r.push(i.next());else if(u>0)r.push(i.next(u));else{if(!1===t(r,i.next(1).attributes||{},s))return;s+=1,r=new e}}r.length()>0&&t(r,{},s)},e.prototype.invert=function(t){var n=new e;return this.reduce((function(e,i){if(i.insert)n.delete(l.default.length(i));else{if(i.retain&&null==i.attributes)return n.retain(i.retain),e+i.retain;if(i.delete||i.retain&&i.attributes){var r=i.delete||i.retain;return t.slice(e,e+r).forEach((function(e){i.delete?n.push(e):i.retain&&i.attributes&&n.retain(l.default.length(e),o.default.invert(i.attributes,e.attributes))})),e+r}}return e}),0),n.chop()},e.prototype.transform=function(t,n){if(void 0===n&&(n=!1),n=!!n,"number"==typeof t)return this.transformPosition(t,n);for(var i=t,r=l.default.iterator(this.ops),s=l.default.iterator(i.ops),a=new e;r.hasNext()||s.hasNext();)if("insert"!==r.peekType()||!n&&"insert"===s.peekType())if("insert"===s.peekType())a.push(s.next());else{var u=Math.min(r.peekLength(),s.peekLength()),c=r.next(u),d=s.next(u);if(c.delete)continue;d.delete?a.push(d):a.retain(u,o.default.transform(c.attributes,d.attributes,n))}else a.retain(l.default.length(r.next()));return a.chop()},e.prototype.transformPosition=function(e,t){void 0===t&&(t=!1),t=!!t;for(var n=l.default.iterator(this.ops),i=0;n.hasNext()&&i<=e;){var r=n.peekLength(),s=n.peekType();n.next(),"delete"!==s?("insert"===s&&(i<e||!t)&&(e+=r),i+=r):e-=Math.min(r,e-i)}return e},e.Op=l.default,e.AttributeMap=o.default,e}();e.exports=c},function(e,t){"use strict";var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===i.call(e)},o=function(e){if(!e||"[object Object]"!==i.call(e))return!1;var t,r=n.call(e,"constructor"),s=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!r&&!s)return!1;for(t in e);return void 0===t||n.call(e,t)},l=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},u=function(e,t){if("__proto__"===t){if(!n.call(e,t))return;if(s)return s(e,t).value}return e[t]};e.exports=function e(){var t,n,i,r,s,c,d=arguments[0],h=1,p=arguments.length,m=!1;for("boolean"==typeof d&&(m=d,d=arguments[1]||{},h=2),(null==d||"object"!=typeof d&&"function"!=typeof d)&&(d={});h<p;++h)if(null!=(t=arguments[h]))for(n in t)i=u(d,n),d!==(r=u(t,n))&&(m&&r&&(o(r)||(s=a(r)))?(s?(s=!1,c=i&&a(i)?i:[]):c=i&&o(i)?i:{},l(d,{name:n,newValue:e(m,c,r)})):void 0!==r&&l(d,{name:n,newValue:r}));return d}},function(e,t){var n=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var t,n,i;try{t=Map}catch(e){t=function(){}}try{n=Set}catch(e){n=function(){}}try{i=Promise}catch(e){i=function(){}}function r(s,o,l,u,c){"object"==typeof o&&(l=o.depth,u=o.prototype,c=o.includeNonEnumerable,o=o.circular);var d=[],h=[],p="undefined"!=typeof Buffer;return void 0===o&&(o=!0),void 0===l&&(l=1/0),function s(l,m){if(null===l)return null;if(0===m)return l;var f,g;if("object"!=typeof l)return l;if(e(l,t))f=new t;else if(e(l,n))f=new n;else if(e(l,i))f=new i((function(e,t){l.then((function(t){e(s(t,m-1))}),(function(e){t(s(e,m-1))}))}));else if(r.__isArray(l))f=[];else if(r.__isRegExp(l))f=new RegExp(l.source,a(l)),l.lastIndex&&(f.lastIndex=l.lastIndex);else if(r.__isDate(l))f=new Date(l.getTime());else{if(p&&Buffer.isBuffer(l))return f=Buffer.allocUnsafe?Buffer.allocUnsafe(l.length):new Buffer(l.length),l.copy(f),f;e(l,Error)?f=Object.create(l):void 0===u?(g=Object.getPrototypeOf(l),f=Object.create(g)):(f=Object.create(u),g=u)}if(o){var _=d.indexOf(l);if(-1!=_)return h[_];d.push(l),h.push(f)}for(var v in e(l,t)&&l.forEach((function(e,t){var n=s(t,m-1),i=s(e,m-1);f.set(n,i)})),e(l,n)&&l.forEach((function(e){var t=s(e,m-1);f.add(t)})),l){var y;g&&(y=Object.getOwnPropertyDescriptor(g,v)),y&&null==y.set||(f[v]=s(l[v],m-1))}if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(l);for(v=0;v<b.length;v++){var x=b[v];(!(k=Object.getOwnPropertyDescriptor(l,x))||k.enumerable||c)&&(f[x]=s(l[x],m-1),k.enumerable||Object.defineProperty(f,x,{enumerable:!1}))}}if(c){var w=Object.getOwnPropertyNames(l);for(v=0;v<w.length;v++){var k,M=w[v];(k=Object.getOwnPropertyDescriptor(l,M))&&k.enumerable||(f[M]=s(l[M],m-1),Object.defineProperty(f,M,{enumerable:!1}))}}return f}(s,l)}function s(e){return Object.prototype.toString.call(e)}function a(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return r.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},r.__objToStr=s,r.__isDate=function(e){return"object"==typeof e&&"[object Date]"===s(e)},r.__isArray=function(e){return"object"==typeof e&&"[object Array]"===s(e)},r.__isRegExp=function(e){return"object"==typeof e&&"[object RegExp]"===s(e)},r.__getRegExpFlags=a,r}();"object"==typeof e&&e.exports&&(e.exports=n)},function(e,t,n){var i=Array.prototype.slice,r=n(36),s=n(37),a=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:function(e,t,n){var u,c;if(o(e)||o(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=i.call(e),t=i.call(t),a(e,t,n));if(l(e)){if(!l(t))return!1;if(e.length!==t.length)return!1;for(u=0;u<e.length;u++)if(e[u]!==t[u])return!1;return!0}try{var d=r(e),h=r(t)}catch(e){return!1}if(d.length!=h.length)return!1;for(d.sort(),h.sort(),u=d.length-1;u>=0;u--)if(d[u]!=h[u])return!1;for(u=d.length-1;u>=0;u--)if(c=d[u],!a(e[c],t[c],n))return!1;return typeof e==typeof t}(e,t,n))};function o(e){return null==e}function l(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length||"function"!=typeof e.copy||"function"!=typeof e.slice||e.length>0&&"number"!=typeof e[0])}},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r,s=i(n(40));!function(e){e.iterator=function(e){return new s.default(e)},e.length=function(e){return"number"==typeof e.delete?e.delete:"number"==typeof e.retain?e.retain:"string"==typeof e.insert?e.insert.length:1}}(r||(r={})),t.default=r},function(e,t){"use strict";var n=Object.prototype.hasOwnProperty,i="~";function r(){}function s(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,n,r,a){if("function"!=typeof n)throw new TypeError("The listener must be a function");var o=new s(n,r||e,a),l=i?i+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],o]:e._events[l].push(o):(e._events[l]=o,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function l(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(i=!1)),l.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)n.call(e,t)&&r.push(i?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},l.prototype.listeners=function(e){var t=i?i+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,s=n.length,a=new Array(s);r<s;r++)a[r]=n[r].fn;return a},l.prototype.listenerCount=function(e){var t=i?i+e:e,n=this._events[t];return n?n.fn?1:n.length:0},l.prototype.emit=function(e,t,n,r,s,a){var o=i?i+e:e;if(!this._events[o])return!1;var l,u,c=this._events[o],d=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),d){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,s),!0;case 6:return c.fn.call(c.context,t,n,r,s,a),!0}for(u=1,l=new Array(d-1);u<d;u++)l[u-1]=arguments[u];c.fn.apply(c.context,l)}else{var h,p=c.length;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),d){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,r);break;default:if(!l)for(h=1,l=new Array(d-1);h<d;h++)l[h-1]=arguments[h];c[u].fn.apply(c[u].context,l)}}return!0},l.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},l.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},l.prototype.removeListener=function(e,t,n,r){var s=i?i+e:e;if(!this._events[s])return this;if(!t)return o(this,s),this;var a=this._events[s];if(a.fn)a.fn!==t||r&&!a.once||n&&a.context!==n||o(this,s);else{for(var l=0,u=[],c=a.length;l<c;l++)(a[l].fn!==t||r&&!a[l].once||n&&a[l].context!==n)&&u.push(a[l]);u.length?this._events[s]=1===u.length?u[0]:u:o(this,s)}return this},l.prototype.removeAllListeners=function(e){var t;return e?(t=i?i+e:e,this._events[t]&&o(this,t)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=i,l.EventEmitter=l,void 0!==e&&(e.exports=l)},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(e,t){e.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(e,t){e.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(e,t){e.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(e,t){e.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class="ql-fill ql-transparent"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(e,t){e.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}(e.exports="function"==typeof Object.keys?Object.keys:n).shim=n},function(e,t){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function i(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=n?i:r).supported=i,t.unsupported=r},function(e,t){var n=-1;function i(e,t,o,l){if(e===t)return e?[[0,e]]:[];if(null!=o){var h=function(e,t,n){var i="number"==typeof n?{index:n,length:0}:n.oldRange,r="number"==typeof n?null:n.newRange,s=e.length,a=t.length;if(0===i.length&&(null===r||0===r.length)){var o=i.index,l=e.slice(0,o),u=e.slice(o),c=r?r.index:null,h=o+a-s;if((null===c||c===h)&&!(h<0||h>a)){var p=t.slice(0,h);if((g=t.slice(h))===u){var m=Math.min(o,h);if((v=l.slice(0,m))===(b=p.slice(0,m)))return d(v,l.slice(m),p.slice(m),u)}}if(null===c||c===o){var f=o,g=(p=t.slice(0,f),t.slice(f));if(p===l){var _=Math.min(s-f,a-f);if((y=u.slice(u.length-_))===(x=g.slice(g.length-_)))return d(l,u.slice(0,u.length-_),g.slice(0,g.length-_),y)}}}if(i.length>0&&r&&0===r.length){var v=e.slice(0,i.index),y=e.slice(i.index+i.length);if(!(a<(m=v.length)+(_=y.length))){var b=t.slice(0,m),x=t.slice(a-_);if(v===b&&y===x)return d(v,e.slice(m,s-_),t.slice(m,a-_),y)}}return null}(e,t,o);if(h)return h}var p=s(e,t),m=e.substring(0,p);p=a(e=e.substring(p),t=t.substring(p));var f=e.substring(e.length-p),g=function(e,t){var o;if(!e)return[[1,t]];if(!t)return[[n,e]];var l=e.length>t.length?e:t,u=e.length>t.length?t:e,c=l.indexOf(u);if(-1!==c)return o=[[1,l.substring(0,c)],[0,u],[1,l.substring(c+u.length)]],e.length>t.length&&(o[0][0]=o[2][0]=n),o;if(1===u.length)return[[n,e],[1,t]];var d=function(e,t){var n=e.length>t.length?e:t,i=e.length>t.length?t:e;if(n.length<4||2*i.length<n.length)return null;function r(e,t,n){for(var i,r,o,l,u=e.substring(n,n+Math.floor(e.length/4)),c=-1,d="";-1!==(c=t.indexOf(u,c+1));){var h=s(e.substring(n),t.substring(c)),p=a(e.substring(0,n),t.substring(0,c));d.length<p+h&&(d=t.substring(c-p,c)+t.substring(c,c+h),i=e.substring(0,n-p),r=e.substring(n+h),o=t.substring(0,c-p),l=t.substring(c+h))}return 2*d.length>=e.length?[i,r,o,l,d]:null}var o,l,u,c,d,h=r(n,i,Math.ceil(n.length/4)),p=r(n,i,Math.ceil(n.length/2));return h||p?(o=p?h&&h[4].length>p[4].length?h:p:h,e.length>t.length?(l=o[0],u=o[1],c=o[2],d=o[3]):(c=o[0],d=o[1],l=o[2],u=o[3]),[l,u,c,d,o[4]]):null}(e,t);if(d){var h=d[0],p=d[1],m=d[2],f=d[3],g=d[4],_=i(h,m),v=i(p,f);return _.concat([[0,g]],v)}return function(e,t){for(var i=e.length,s=t.length,a=Math.ceil((i+s)/2),o=a,l=2*a,u=new Array(l),c=new Array(l),d=0;d<l;d++)u[d]=-1,c[d]=-1;u[o+1]=0,c[o+1]=0;for(var h=i-s,p=h%2!=0,m=0,f=0,g=0,_=0,v=0;v<a;v++){for(var y=-v+m;y<=v-f;y+=2){for(var b=o+y,x=(S=y===-v||y!==v&&u[b-1]<u[b+1]?u[b+1]:u[b-1]+1)-y;S<i&&x<s&&e.charAt(S)===t.charAt(x);)S++,x++;if(u[b]=S,S>i)f+=2;else if(x>s)m+=2;else if(p&&(M=o+h-y)>=0&&M<l&&-1!==c[M]){var w=i-c[M];if(S>=w)return r(e,t,S,x)}}for(var k=-v+g;k<=v-_;k+=2){for(var M=o+k,L=(w=k===-v||k!==v&&c[M-1]<c[M+1]?c[M+1]:c[M-1]+1)-k;w<i&&L<s&&e.charAt(i-w-1)===t.charAt(s-L-1);)w++,L++;if(c[M]=w,w>i)_+=2;else if(L>s)g+=2;else if(!p&&(b=o+h-k)>=0&&b<l&&-1!==u[b]){var S=u[b];if(x=o+S-b,S>=(w=i-w))return r(e,t,S,x)}}}return[[n,e],[1,t]]}(e,t)}(e=e.substring(0,e.length-p),t=t.substring(0,t.length-p));return m&&g.unshift([0,m]),f&&g.push([0,f]),function e(t,i){t.push([0,""]);for(var r,o=0,l=0,d=0,h="",p="";o<t.length;)if(o<t.length-1&&!t[o][1])t.splice(o,1);else switch(t[o][0]){case 1:d++,p+=t[o][1],o++;break;case n:l++,h+=t[o][1],o++;break;case 0:var m=o-d-l-1;if(i){if(m>=0&&c(t[m][1])){var f=t[m][1].slice(-1);if(t[m][1]=t[m][1].slice(0,-1),h=f+h,p=f+p,!t[m][1]){t.splice(m,1),o--;var g=m-1;t[g]&&1===t[g][0]&&(d++,p=t[g][1]+p,g--),t[g]&&t[g][0]===n&&(l++,h=t[g][1]+h,g--),m=g}}u(t[o][1])&&(f=t[o][1].charAt(0),t[o][1]=t[o][1].slice(1),h+=f,p+=f)}if(o<t.length-1&&!t[o][1]){t.splice(o,1);break}if(h.length>0||p.length>0){h.length>0&&p.length>0&&(0!==(r=s(p,h))&&(m>=0?t[m][1]+=p.substring(0,r):(t.splice(0,0,[0,p.substring(0,r)]),o++),p=p.substring(r),h=h.substring(r)),0!==(r=a(p,h))&&(t[o][1]=p.substring(p.length-r)+t[o][1],p=p.substring(0,p.length-r),h=h.substring(0,h.length-r)));var _=d+l;0===h.length&&0===p.length?(t.splice(o-_,_),o-=_):0===h.length?(t.splice(o-_,_,[1,p]),o=o-_+1):0===p.length?(t.splice(o-_,_,[n,h]),o=o-_+1):(t.splice(o-_,_,[n,h],[1,p]),o=o-_+2)}0!==o&&0===t[o-1][0]?(t[o-1][1]+=t[o][1],t.splice(o,1)):o++,d=0,l=0,h="",p=""}""===t[t.length-1][1]&&t.pop();var v=!1;for(o=1;o<t.length-1;)0===t[o-1][0]&&0===t[o+1][0]&&(t[o][1].substring(t[o][1].length-t[o-1][1].length)===t[o-1][1]?(t[o][1]=t[o-1][1]+t[o][1].substring(0,t[o][1].length-t[o-1][1].length),t[o+1][1]=t[o-1][1]+t[o+1][1],t.splice(o-1,1),v=!0):t[o][1].substring(0,t[o+1][1].length)==t[o+1][1]&&(t[o-1][1]+=t[o+1][1],t[o][1]=t[o][1].substring(t[o+1][1].length)+t[o+1][1],t.splice(o+1,1),v=!0)),o++;v&&e(t,i)}(g,l),g}function r(e,t,n,r){var s=e.substring(0,n),a=t.substring(0,r),o=e.substring(n),l=t.substring(r),u=i(s,a),c=i(o,l);return u.concat(c)}function s(e,t){if(!e||!t||e.charAt(0)!==t.charAt(0))return 0;for(var n=0,i=Math.min(e.length,t.length),r=i,s=0;n<r;)e.substring(s,r)==t.substring(s,r)?s=n=r:i=r,r=Math.floor((i-n)/2+n);return o(e.charCodeAt(r-1))&&r--,r}function a(e,t){if(!e||!t||e.slice(-1)!==t.slice(-1))return 0;for(var n=0,i=Math.min(e.length,t.length),r=i,s=0;n<r;)e.substring(e.length-r,e.length-s)==t.substring(t.length-r,t.length-s)?s=n=r:i=r,r=Math.floor((i-n)/2+n);return l(e.charCodeAt(e.length-r))&&r--,r}function o(e){return e>=55296&&e<=56319}function l(e){return e>=56320&&e<=57343}function u(e){return l(e.charCodeAt(0))}function c(e){return o(e.charCodeAt(e.length-1))}function d(e,t,i,r){return c(e)||u(r)?null:function(e){for(var t=[],n=0;n<e.length;n++)e[n][1].length>0&&t.push(e[n]);return t}([[0,e],[n,t],[1,i],[0,r]])}function h(e,t,n){return i(e,t,n,!0)}h.INSERT=1,h.DELETE=n,h.EQUAL=0,e.exports=h},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r,s=i(n(3)),a=i(n(1));!function(e){e.compose=function(e,t,n){void 0===e&&(e={}),void 0===t&&(t={}),"object"!=typeof e&&(e={}),"object"!=typeof t&&(t={});var i=a.default(!0,{},t);for(var r in n||(i=Object.keys(i).reduce((function(e,t){return null!=i[t]&&(e[t]=i[t]),e}),{})),e)void 0!==e[r]&&void 0===t[r]&&(i[r]=e[r]);return Object.keys(i).length>0?i:void 0},e.diff=function(e,t){void 0===e&&(e={}),void 0===t&&(t={}),"object"!=typeof e&&(e={}),"object"!=typeof t&&(t={});var n=Object.keys(e).concat(Object.keys(t)).reduce((function(n,i){return s.default(e[i],t[i])||(n[i]=void 0===t[i]?null:t[i]),n}),{});return Object.keys(n).length>0?n:void 0},e.invert=function(e,t){void 0===e&&(e={}),void 0===t&&(t={}),e=e||{};var n=Object.keys(t).reduce((function(n,i){return t[i]!==e[i]&&void 0!==e[i]&&(n[i]=t[i]),n}),{});return Object.keys(e).reduce((function(n,i){return e[i]!==t[i]&&void 0===t[i]&&(n[i]=null),n}),n)},e.transform=function(e,t,n){if(void 0===n&&(n=!1),"object"!=typeof e)return t;if("object"==typeof t){if(!n)return t;var i=Object.keys(t).reduce((function(n,i){return void 0===e[i]&&(n[i]=t[i]),n}),{});return Object.keys(i).length>0?i:void 0}}}(r||(r={})),t.default=r},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(5)),s=function(){function e(e){this.ops=e,this.index=0,this.offset=0}return e.prototype.hasNext=function(){return this.peekLength()<1/0},e.prototype.next=function(e){e||(e=1/0);var t=this.ops[this.index];if(t){var n=this.offset,i=r.default.length(t);if(e>=i-n?(e=i-n,this.index+=1,this.offset=0):this.offset+=e,"number"==typeof t.delete)return{delete:e};var s={};return t.attributes&&(s.attributes=t.attributes),"number"==typeof t.retain?s.retain=e:"string"==typeof t.insert?s.insert=t.insert.substr(n,e):s.insert=t.insert,s}return{retain:1/0}},e.prototype.peek=function(){return this.ops[this.index]},e.prototype.peekLength=function(){return this.ops[this.index]?r.default.length(this.ops[this.index])-this.offset:1/0},e.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},e.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var e=this.offset,t=this.index,n=this.next(),i=this.ops.slice(this.index);return this.offset=e,this.index=t,[n].concat(i)}return[]},e}();t.default=s},function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"ParentBlot",(function(){return m})),n.d(i,"ContainerBlot",(function(){return g})),n.d(i,"LeafBlot",(function(){return v})),n.d(i,"EmbedBlot",(function(){return T})),n.d(i,"ScrollBlot",(function(){return Y})),n.d(i,"BlockBlot",(function(){return E})),n.d(i,"InlineBlot",(function(){return S})),n.d(i,"TextBlot",(function(){return O})),n.d(i,"Attributor",(function(){return y})),n.d(i,"ClassAttributor",(function(){return x})),n.d(i,"StyleAttributor",(function(){return k})),n.d(i,"AttributorStore",(function(){return M})),n.d(i,"Registry",(function(){return u})),n.d(i,"Scope",(function(){return o}));var r,s=n(0),a=n.n(s);!function(e){e[e.TYPE=3]="TYPE",e[e.LEVEL=12]="LEVEL",e[e.ATTRIBUTE=13]="ATTRIBUTE",e[e.BLOT=14]="BLOT",e[e.INLINE=7]="INLINE",e[e.BLOCK=11]="BLOCK",e[e.BLOCK_BLOT=10]="BLOCK_BLOT",e[e.INLINE_BLOT=6]="INLINE_BLOT",e[e.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",e[e.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",e[e.ANY=15]="ANY"}(r||(r={}));var o=r;class l extends Error{constructor(e){super(e="[Parchment] "+e),this.message=e,this.name=this.constructor.name}}class u{constructor(){this.attributes={},this.classes={},this.tags={},this.types={}}static find(e,t=!1){return null==e?null:this.blots.has(e)?this.blots.get(e)||null:t?this.find(e.parentNode,t):null}create(e,t,n){const i=this.query(t);if(null==i)throw new l(`Unable to create ${t} blot`);const r=i,s=t instanceof Node||t.nodeType===Node.TEXT_NODE?t:r.create(n),a=new r(e,s,n);return u.blots.set(a.domNode,a),a}find(e,t=!1){return u.find(e,t)}query(e,t=o.ANY){let n;return"string"==typeof e?n=this.types[e]||this.attributes[e]:e instanceof Text||e.nodeType===Node.TEXT_NODE?n=this.types.text:"number"==typeof e?e&o.LEVEL&o.BLOCK?n=this.types.block:e&o.LEVEL&o.INLINE&&(n=this.types.inline):e instanceof HTMLElement&&((e.getAttribute("class")||"").split(/\s+/).some((e=>!!(n=this.classes[e]))),n=n||this.tags[e.tagName]),null==n?null:t&o.LEVEL&n.scope&&t&o.TYPE&n.scope?n:null}register(...e){if(e.length>1)return e.map((e=>this.register(e)));const t=e[0];if("string"!=typeof t.blotName&&"string"!=typeof t.attrName)throw new l("Invalid definition");if("abstract"===t.blotName)throw new l("Cannot register abstract class");return this.types[t.blotName||t.attrName]=t,"string"==typeof t.keyName?this.attributes[t.keyName]=t:(null!=t.className&&(this.classes[t.className]=t),null!=t.tagName&&(Array.isArray(t.tagName)?t.tagName=t.tagName.map((e=>e.toUpperCase())):t.tagName=t.tagName.toUpperCase(),(Array.isArray(t.tagName)?t.tagName:[t.tagName]).forEach((e=>{null!=this.tags[e]&&null!=t.className||(this.tags[e]=t)})))),t}}u.blots=new WeakMap;class c{constructor(e,t){this.scroll=e,this.domNode=t,u.blots.set(t,this),this.prev=null,this.next=null}static create(e){if(null==this.tagName)throw new l("Blot definition missing tagName");let t;return Array.isArray(this.tagName)?("string"==typeof e&&(e=e.toUpperCase(),parseInt(e,10).toString()===e&&(e=parseInt(e,10))),t="number"==typeof e?document.createElement(this.tagName[e-1]):this.tagName.indexOf(e)>-1?document.createElement(e):document.createElement(this.tagName[0])):t=document.createElement(this.tagName),this.className&&t.classList.add(this.className),t}get statics(){return this.constructor}attach(){}clone(){const e=this.domNode.cloneNode(!1);return this.scroll.create(e)}detach(){null!=this.parent&&this.parent.removeChild(this),u.blots.delete(this.domNode)}deleteAt(e,t){this.isolate(e,t).remove()}formatAt(e,t,n,i){const r=this.isolate(e,t);if(null!=this.scroll.query(n,o.BLOT)&&i)r.wrap(n,i);else if(null!=this.scroll.query(n,o.ATTRIBUTE)){const e=this.scroll.create(this.statics.scope);r.wrap(e),e.format(n,i)}}insertAt(e,t,n){const i=null==n?this.scroll.create("text",t):this.scroll.create(t,n),r=this.split(e);this.parent.insertBefore(i,r||void 0)}isolate(e,t){const n=this.split(e);if(null==n)throw new Error("Attempt to isolate at end");return n.split(t),n}length(){return 1}offset(e=this.parent){return null==this.parent||this===e?0:this.parent.children.offset(this)+this.parent.offset(e)}optimize(e){!this.statics.requiredContainer||this.parent instanceof this.statics.requiredContainer||this.wrap(this.statics.requiredContainer.blotName)}remove(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()}replaceWith(e,t){const n="string"==typeof e?this.scroll.create(e,t):e;return null!=this.parent&&(this.parent.insertBefore(n,this.next||void 0),this.remove()),n}split(e,t){return 0===e?this:this.next}update(e,t){}wrap(e,t){const n="string"==typeof e?this.scroll.create(e,t):e;if(null!=this.parent&&this.parent.insertBefore(n,this.next||void 0),"function"!=typeof n.appendChild)throw new l(`Cannot wrap ${e}`);return n.appendChild(this),n}}c.blotName="abstract";var d=c;class h extends d{constructor(e,t){super(e,t),this.uiNode=null,this.build()}appendChild(e){this.insertBefore(e)}attach(){super.attach(),this.children.forEach((e=>{e.attach()}))}attachUI(e){null!=this.uiNode&&this.uiNode.remove(),this.uiNode=e,h.uiClass&&this.uiNode.classList.add(h.uiClass),this.uiNode.setAttribute("contenteditable","false"),this.domNode.insertBefore(this.uiNode,this.domNode.firstChild)}build(){this.children=new class{constructor(){this.head=null,this.tail=null,this.length=0}append(...e){this.insertBefore(e[0],null),e.length>1&&this.append.apply(this,e.slice(1))}at(e){const t=this.iterator();let n=t();for(;n&&e>0;)e-=1,n=t();return n}contains(e){const t=this.iterator();let n=t();for(;n;){if(n===e)return!0;n=t()}return!1}indexOf(e){const t=this.iterator();let n=t(),i=0;for(;n;){if(n===e)return i;i+=1,n=t()}return-1}insertBefore(e,t){null!=e&&(this.remove(e),e.next=t,null!=t?(e.prev=t.prev,null!=t.prev&&(t.prev.next=e),t.prev=e,t===this.head&&(this.head=e)):null!=this.tail?(this.tail.next=e,e.prev=this.tail,this.tail=e):(e.prev=null,this.head=this.tail=e),this.length+=1)}offset(e){let t=0,n=this.head;for(;null!=n;){if(n===e)return t;t+=n.length(),n=n.next}return-1}remove(e){this.contains(e)&&(null!=e.prev&&(e.prev.next=e.next),null!=e.next&&(e.next.prev=e.prev),e===this.head&&(this.head=e.next),e===this.tail&&(this.tail=e.prev),this.length-=1)}iterator(e=this.head){return()=>{const t=e;return null!=e&&(e=e.next),t}}find(e,t=!1){const n=this.iterator();let i=n();for(;i;){const r=i.length();if(e<r||t&&e===r&&(null==i.next||0!==i.next.length()))return[i,e];e-=r,i=n()}return[null,0]}forEach(e){const t=this.iterator();let n=t();for(;n;)e(n),n=t()}forEachAt(e,t,n){if(t<=0)return;const[i,r]=this.find(e);let s=e-r;const a=this.iterator(i);let o=a();for(;o&&s<e+t;){const i=o.length();e>s?n(o,e-s,Math.min(t,s+i-e)):n(o,0,Math.min(i,e+t-s)),s+=i,o=a()}}map(e){return this.reduce(((t,n)=>(t.push(e(n)),t)),[])}reduce(e,t){const n=this.iterator();let i=n();for(;i;)t=e(t,i),i=n();return t}},Array.from(this.domNode.childNodes).filter((e=>e!==this.uiNode)).reverse().forEach((e=>{try{const t=p(e,this.scroll);this.insertBefore(t,this.children.head||void 0)}catch(e){if(e instanceof l)return;throw e}}))}deleteAt(e,t){if(0===e&&t===this.length())return this.remove();this.children.forEachAt(e,t,((e,t,n)=>{e.deleteAt(t,n)}))}descendant(e,t=0){const[n,i]=this.children.find(t);return null==e.blotName&&e(n)||null!=e.blotName&&n instanceof e?[n,i]:n instanceof h?n.descendant(e,i):[null,-1]}descendants(e,t=0,n=Number.MAX_VALUE){let i=[],r=n;return this.children.forEachAt(t,n,((t,n,s)=>{(null==e.blotName&&e(t)||null!=e.blotName&&t instanceof e)&&i.push(t),t instanceof h&&(i=i.concat(t.descendants(e,n,r))),r-=s})),i}detach(){this.children.forEach((e=>{e.detach()})),super.detach()}enforceAllowedChildren(){let e=!1;this.children.forEach((t=>{e||this.statics.allowedChildren.some((e=>t instanceof e))||(t.statics.scope===o.BLOCK_BLOT?(null!=t.next&&this.splitAfter(t),null!=t.prev&&this.splitAfter(t.prev),t.parent.unwrap(),e=!0):t instanceof h?t.unwrap():t.remove())}))}formatAt(e,t,n,i){this.children.forEachAt(e,t,((e,t,r)=>{e.formatAt(t,r,n,i)}))}insertAt(e,t,n){const[i,r]=this.children.find(e);if(i)i.insertAt(r,t,n);else{const e=null==n?this.scroll.create("text",t):this.scroll.create(t,n);this.appendChild(e)}}insertBefore(e,t){null!=e.parent&&e.parent.children.remove(e);let n=null;this.children.insertBefore(e,t||null),null!=t&&(n=t.domNode),this.domNode.parentNode===e.domNode&&this.domNode.nextSibling===n||this.domNode.insertBefore(e.domNode,n),e.parent=this,e.attach()}length(){return this.children.reduce(((e,t)=>e+t.length()),0)}moveChildren(e,t){this.children.forEach((n=>{e.insertBefore(n,t)}))}optimize(e){if(super.optimize(e),this.enforceAllowedChildren(),null!=this.uiNode&&this.uiNode!==this.domNode.firstChild&&this.domNode.insertBefore(this.uiNode,this.domNode.firstChild),0===this.children.length)if(null!=this.statics.defaultChild){const e=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(e)}else this.remove()}path(e,t=!1){const[n,i]=this.children.find(e,t),r=[[this,e]];return n instanceof h?r.concat(n.path(i,t)):(null!=n&&r.push([n,i]),r)}removeChild(e){this.children.remove(e)}replaceWith(e,t){const n="string"==typeof e?this.scroll.create(e,t):e;return n instanceof h&&this.moveChildren(n),super.replaceWith(n)}split(e,t=!1){if(!t){if(0===e)return this;if(e===this.length())return this.next}const n=this.clone();return this.parent&&this.parent.insertBefore(n,this.next||void 0),this.children.forEachAt(e,this.length(),((e,i,r)=>{const s=e.split(i,t);null!=s&&n.appendChild(s)})),n}splitAfter(e){const t=this.clone();for(;null!=e.next;)t.appendChild(e.next);return this.parent&&this.parent.insertBefore(t,this.next||void 0),t}unwrap(){this.parent&&this.moveChildren(this.parent,this.next||void 0),this.remove()}update(e,t){const n=[],i=[];e.forEach((e=>{e.target===this.domNode&&"childList"===e.type&&(n.push.apply(n,e.addedNodes),i.push.apply(i,e.removedNodes))})),i.forEach((e=>{if(null!=e.parentNode&&"IFRAME"!==e.tagName&&document.body.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)return;const t=this.scroll.find(e);null!=t&&(null!=t.domNode.parentNode&&t.domNode.parentNode!==this.domNode||t.detach())})),n.filter((e=>e.parentNode===this.domNode||e===this.uiNode)).sort(((e,t)=>e===t?0:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1)).forEach((e=>{let t=null;null!=e.nextSibling&&(t=this.scroll.find(e.nextSibling));const n=p(e,this.scroll);n.next===t&&null!=n.next||(null!=n.parent&&n.parent.removeChild(this),this.insertBefore(n,t||void 0))})),this.enforceAllowedChildren()}}function p(e,t){let n=t.find(e);if(null==n)try{n=t.create(e)}catch(i){n=t.create(o.INLINE),Array.from(e.childNodes).forEach((e=>{n.domNode.appendChild(e)})),e.parentNode&&e.parentNode.replaceChild(n.domNode,e),n.attach()}return n}h.uiClass="";var m=h;class f extends m{checkMerge(){return null!==this.next&&this.next.statics.blotName===this.statics.blotName}deleteAt(e,t){super.deleteAt(e,t),this.enforceAllowedChildren()}formatAt(e,t,n,i){super.formatAt(e,t,n,i),this.enforceAllowedChildren()}insertAt(e,t,n){super.insertAt(e,t,n),this.enforceAllowedChildren()}optimize(e){super.optimize(e),this.children.length>0&&null!=this.next&&this.checkMerge()&&(this.next.moveChildren(this),this.next.remove())}}f.blotName="container",f.scope=o.BLOCK_BLOT;var g=f;class _ extends d{static value(e){return!0}index(e,t){return this.domNode===e||this.domNode.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(t,1):-1}position(e,t){let n=Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);return e>0&&(n+=1),[this.parent.domNode,n]}value(){return{[this.statics.blotName]:this.statics.value(this.domNode)||!0}}}_.scope=o.INLINE_BLOT;var v=_;class y{static keys(e){return Array.from(e.attributes).map((e=>e.name))}constructor(e,t,n={}){this.attrName=e,this.keyName=t;const i=o.TYPE&o.ATTRIBUTE;this.scope=null!=n.scope?n.scope&o.LEVEL|i:o.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}add(e,t){return!!this.canAdd(e,t)&&(e.setAttribute(this.keyName,t),!0)}canAdd(e,t){return null==this.whitelist||("string"==typeof t?this.whitelist.indexOf(t.replace(/["']/g,""))>-1:this.whitelist.indexOf(t)>-1)}remove(e){e.removeAttribute(this.keyName)}value(e){const t=e.getAttribute(this.keyName);return this.canAdd(e,t)&&t?t:""}}function b(e,t){return(e.getAttribute("class")||"").split(/\s+/).filter((e=>0===e.indexOf(`${t}-`)))}var x=class extends y{static keys(e){return(e.getAttribute("class")||"").split(/\s+/).map((e=>e.split("-").slice(0,-1).join("-")))}add(e,t){return!!this.canAdd(e,t)&&(this.remove(e),e.classList.add(`${this.keyName}-${t}`),!0)}remove(e){b(e,this.keyName).forEach((t=>{e.classList.remove(t)})),0===e.classList.length&&e.removeAttribute("class")}value(e){const t=(b(e,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(e,t)?t:""}};function w(e){const t=e.split("-"),n=t.slice(1).map((e=>e[0].toUpperCase()+e.slice(1))).join("");return t[0]+n}var k=class extends y{static keys(e){return(e.getAttribute("style")||"").split(";").map((e=>e.split(":")[0].trim()))}add(e,t){return!!this.canAdd(e,t)&&(e.style[w(this.keyName)]=t,!0)}remove(e){e.style[w(this.keyName)]="",e.getAttribute("style")||e.removeAttribute("style")}value(e){const t=e.style[w(this.keyName)];return this.canAdd(e,t)?t:""}},M=class{constructor(e){this.attributes={},this.domNode=e,this.build()}attribute(e,t){t?e.add(this.domNode,t)&&(null!=e.value(this.domNode)?this.attributes[e.attrName]=e:delete this.attributes[e.attrName]):(e.remove(this.domNode),delete this.attributes[e.attrName])}build(){this.attributes={};const e=u.find(this.domNode);if(null==e)return;const t=y.keys(this.domNode),n=x.keys(this.domNode),i=k.keys(this.domNode);t.concat(n).concat(i).forEach((t=>{const n=e.scroll.query(t,o.ATTRIBUTE);n instanceof y&&(this.attributes[n.attrName]=n)}))}copy(e){Object.keys(this.attributes).forEach((t=>{const n=this.attributes[t].value(this.domNode);e.format(t,n)}))}move(e){this.copy(e),Object.keys(this.attributes).forEach((e=>{this.attributes[e].remove(this.domNode)})),this.attributes={}}values(){return Object.keys(this.attributes).reduce(((e,t)=>(e[t]=this.attributes[t].value(this.domNode),e)),{})}};class L extends m{constructor(e,t){super(e,t),this.attributes=new M(this.domNode)}static formats(e,t){const n=t.query(L.blotName);if(null==n||e.tagName!==n.tagName)return"string"==typeof this.tagName||(Array.isArray(this.tagName)?e.tagName.toLowerCase():void 0)}format(e,t){if(e!==this.statics.blotName||t){const n=this.scroll.query(e,o.INLINE);if(null==n)return;n instanceof y?this.attributes.attribute(n,t):!t||e===this.statics.blotName&&this.formats()[e]===t||this.replaceWith(e,t)}else this.children.forEach((e=>{e instanceof L||(e=e.wrap(L.blotName,!0)),this.attributes.copy(e)})),this.unwrap()}formats(){const e=this.attributes.values(),t=this.statics.formats(this.domNode,this.scroll);return null!=t&&(e[this.statics.blotName]=t),e}formatAt(e,t,n,i){null!=this.formats()[n]||this.scroll.query(n,o.ATTRIBUTE)?this.isolate(e,t).format(n,i):super.formatAt(e,t,n,i)}optimize(e){super.optimize(e);const t=this.formats();if(0===Object.keys(t).length)return this.unwrap();const n=this.next;n instanceof L&&n.prev===this&&function(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}(t,n.formats())&&(n.moveChildren(this),n.remove())}replaceWith(e,t){const n=super.replaceWith(e,t);return this.attributes.copy(n),n}update(e,t){super.update(e,t),e.some((e=>e.target===this.domNode&&"attributes"===e.type))&&this.attributes.build()}wrap(e,t){const n=super.wrap(e,t);return n instanceof L&&this.attributes.move(n),n}}L.allowedChildren=[L,v],L.blotName="inline",L.scope=o.INLINE_BLOT,L.tagName="SPAN";var S=L;class D extends m{constructor(e,t){super(e,t),this.attributes=new M(this.domNode)}static formats(e,t){const n=t.query(D.blotName);if(null==n||e.tagName!==n.tagName)return"string"==typeof this.tagName||(Array.isArray(this.tagName)?e.tagName.toLowerCase():void 0)}format(e,t){const n=this.scroll.query(e,o.BLOCK);null!=n&&(n instanceof y?this.attributes.attribute(n,t):e!==this.statics.blotName||t?!t||e===this.statics.blotName&&this.formats()[e]===t||this.replaceWith(e,t):this.replaceWith(D.blotName))}formats(){const e=this.attributes.values(),t=this.statics.formats(this.domNode,this.scroll);return null!=t&&(e[this.statics.blotName]=t),e}formatAt(e,t,n,i){null!=this.scroll.query(n,o.BLOCK)?this.format(n,i):super.formatAt(e,t,n,i)}insertAt(e,t,n){if(null==n||null!=this.scroll.query(t,o.INLINE))super.insertAt(e,t,n);else{const i=this.split(e);if(null==i)throw new Error("Attempt to insertAt after block boundaries");{const e=this.scroll.create(t,n);i.parent.insertBefore(e,i)}}}replaceWith(e,t){const n=super.replaceWith(e,t);return this.attributes.copy(n),n}update(e,t){super.update(e,t),e.some((e=>e.target===this.domNode&&"attributes"===e.type))&&this.attributes.build()}}D.blotName="block",D.scope=o.BLOCK_BLOT,D.tagName="P",D.allowedChildren=[S,D,v];var E=D,T=class extends v{static formats(e,t){}format(e,t){super.formatAt(0,this.length(),e,t)}formatAt(e,t,n,i){0===e&&t===this.length()?this.format(n,i):super.formatAt(e,t,n,i)}formats(){return this.statics.formats(this.domNode,this.scroll)}};const P={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0};class C extends m{constructor(e,t){super(null,t),this.registry=e,this.scroll=this,this.build(),this.observer=new MutationObserver((e=>{this.update(e)})),this.observer.observe(this.domNode,P),this.attach()}create(e,t){return this.registry.create(this,e,t)}find(e,t=!1){return this.registry.find(e,t)}query(e,t=o.ANY){return this.registry.query(e,t)}register(...e){return this.registry.register(...e)}build(){null!=this.scroll&&super.build()}detach(){super.detach(),this.observer.disconnect()}deleteAt(e,t){this.update(),0===e&&t===this.length()?this.children.forEach((e=>{e.remove()})):super.deleteAt(e,t)}formatAt(e,t,n,i){this.update(),super.formatAt(e,t,n,i)}insertAt(e,t,n){this.update(),super.insertAt(e,t,n)}optimize(e=[],t={}){super.optimize(t);const n=t.mutationsMap||new WeakMap;let i=Array.from(this.observer.takeRecords());for(;i.length>0;)e.push(i.pop());const r=(e,t=!0)=>{null!=e&&e!==this&&null!=e.domNode.parentNode&&(n.has(e.domNode)||n.set(e.domNode,[]),t&&r(e.parent))},s=e=>{n.has(e.domNode)&&(e instanceof m&&e.children.forEach(s),n.delete(e.domNode),e.optimize(t))};let a=e;for(let t=0;a.length>0;t+=1){if(t>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(a.forEach((e=>{const t=this.find(e.target,!0);null!=t&&(t.domNode===e.target&&("childList"===e.type?(r(this.find(e.previousSibling,!1)),Array.from(e.addedNodes).forEach((e=>{const t=this.find(e,!1);r(t,!1),t instanceof m&&t.children.forEach((e=>{r(e,!1)}))}))):"attributes"===e.type&&r(t.prev)),r(t))})),this.children.forEach(s),i=(a=Array.from(this.observer.takeRecords())).slice();i.length>0;)e.push(i.pop())}}update(e,t={}){e=e||this.observer.takeRecords();const n=new WeakMap;e.map((e=>{const t=u.find(e.target,!0);return null==t?null:n.has(t.domNode)?(n.get(t.domNode).push(e),null):(n.set(t.domNode,[e]),t)})).forEach((e=>{null!=e&&e!==this&&n.has(e.domNode)&&e.update(n.get(e.domNode)||[],t)})),t.mutationsMap=n,n.has(this.domNode)&&super.update(n.get(this.domNode),t),this.optimize(e,t)}}C.blotName="scroll",C.defaultChild=E,C.allowedChildren=[E,g],C.scope=o.BLOCK_BLOT,C.tagName="DIV";var Y=C;class A extends v{constructor(e,t){super(e,t),this.text=this.statics.value(this.domNode)}static create(e){return document.createTextNode(e)}static value(e){return e.data}deleteAt(e,t){this.domNode.data=this.text=this.text.slice(0,e)+this.text.slice(e+t)}index(e,t){return this.domNode===e?t:-1}insertAt(e,t,n){null==n?(this.text=this.text.slice(0,e)+t+this.text.slice(e),this.domNode.data=this.text):super.insertAt(e,t,n)}length(){return this.text.length}optimize(e){super.optimize(e),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof A&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())}position(e,t=!1){return[this.domNode,e]}split(e,t=!1){if(!t){if(0===e)return this;if(e===this.length())return this.next}const n=this.scroll.create(this.domNode.splitText(e));return this.parent.insertBefore(n,this.next||void 0),this.text=this.statics.value(this.domNode),n}update(e,t){e.some((e=>"characterData"===e.type&&e.target===this.domNode))&&(this.text=this.statics.value(this.domNode))}value(){return this.text}}A.blotName="text",A.scope=o.INLINE_BLOT;var O=A,N=n(1),j=n.n(N),q=n(2),R=n.n(q),I=n(3),H=n.n(I),F=n(6),B=n.n(F);const z=["error","warn","log","info"];let U="warn";function W(e){if(z.indexOf(e)<=z.indexOf(U)){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];console[e](...n)}}function V(e){return z.reduce(((t,n)=>(t[n]=W.bind(console,n,e),t)),{})}V.level=e=>{U=e},W.level=V.level;var G=V;const $="-shadow-selectionchange",J="attachShadow"in Element.prototype&&"getRootNode"in Element.prototype,X=!(!J||!document.createElement("div").attachShadow({mode:"open"}).getSelection),K=window.ShadyDOM&&window.ShadyDOM.inUse,Z=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,Q=!J||K||!X&&!Z,ee=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|script|source|style|template|track|wbr)$/,te=!(X||Q),ne=[Node.ELEMENT_NODE,Node.TEXT_NODE,Node.DOCUMENT_FRAGMENT_NODE];function ie(e,t,n){const i=t.childNodes||t.children;if(!i)return t;for(let t=0;t<i.length;++t){const s=i[n?t:i.length-1-t];if(r=s,ne.includes(r.nodeType)&&e.containsNode(s,!0)){if(e.containsNode(s,!1))return s;if(!ee.exec(s.localName||""))return ie(e,s,n)}}var r;return t}let re={node:null,offset:-1};function se(e,t,n){const i=t;for(;(t=ae(t,n))&&t.contains(i););return!!t&&t instanceof Element&&e.containsNode(t,!0)}function ae(e,t){if(!t)return e.previousSibling||e.parentNode||null;for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}return null}!function(){if(!te)return document.addEventListener("selectionchange",(e=>{document.dispatchEvent(new CustomEvent($))})),()=>{};let e=!1;document.addEventListener("selectionchange",(t=>{if(e)return;e=!0;const n=window.getSelection();if("Caret"===n.type){const e=function(e,t){const n=[],i=e=>{for(let t=0;t<e.length;++t)e[t].shadowRoot&&n.push(e[t].shadowRoot)};for(t.shadowRoot&&n.push(t.shadowRoot),i(t.childNodes);n.length;){const t=n.shift();for(let n=0;n<t.childNodes.length;++n)if(e.containsNode(t.childNodes[n],!0))return t;i(t.querySelectorAll("*"))}return null}(n,n.anchorNode);if(e instanceof window.ShadowRoot){const t=le(e);if(t){const e=t.startContainer,n=t.startOffset;re={node:e,offset:n}}}}document.dispatchEvent(new CustomEvent("-shadow-selectionchange")),window.requestAnimationFrame((()=>{e=!1}))}))}();const oe=new Map;function le(e){if(Q){const t=document.getSelection();return t.containsNode(e,!0)?t.getRangeAt(0):null}if(X){const t=e.getSelection();return t.rangeCount?t.getRangeAt(0):null}const t=oe.get(e);if(t)return t;const n=function(e){const t=window.getSelection();if("None"===t.type)return{range:null,type:"none"};if("Caret"!==t.type&&"Range"!==t.type)throw new TypeError("unexpected type: "+t.type);const n=ie(t,e,!0);if(n===e)return{range:null,mode:"none"};const i=document.createRange();let r,s=null;if("Range"===t.type&&(s=ie(t,e,!1),void 0===(r=function(e,t,n){if("Range"!==e.type)return;const i=()=>e.toString().length,r=i();let s;return e.modify("extend","forward","character"),(s=i())>r||se(e,n,!0)?(e.modify("extend","backward","character"),!0):s<r||!e.containsNode(t)?(e.modify("extend","backward","character"),!1):(e.modify("extend","backward","character"),(s=i())>r||se(e,t,!1)?(e.modify("extend","forward","character"),!1):s<r||!e.containsNode(n)?(e.modify("extend","forward","character"),!0):void 0)}(t,n,s))))return i.setStart(n,0),i.setEnd(s,s.length),{range:i,mode:"all"};const a=t.toString().length;let o=0,l=0;if(null===s);else if(s.nodeType===Node.TEXT_NODE){const e=s.textContent,n=s.nextSibling;for(let n=e.length-1;n>=0;--n)if(s.splitText(n),t.toString().length!==a){l=n+1;break}for(s.insertData(s.length,e.substr(s.length));s.nextSibling!==n;)s.nextSibling.remove()}if(n.nodeType===Node.TEXT_NODE){n!==s&&(n.appendData("?"),t.collapseToStart(),t.modify("extend","right","character"));const e=n.textContent,i=n.nextSibling;for(let e=n===s?l:e.length-1;e>=0;--e)if(n.splitText(e),""===t.toString()){o=e;break}for(n.insertData(n.length,e.substr(n.length));n.nextSibling!==i;)n.nextSibling.remove();n!==s&&n.deleteData(n.length-1,1),null===s&&(s=n,l=o)}else null===s&&(s=n);return 1===a&&re&&re.node===n&&re.offset>o&&r&&(r=!1),!0===r?(t.collapse(n,o),t.extend(s,l)):!1===r?(t.collapse(s,l),t.extend(n,o)):t.setPosition(n,o),i.setStart(n,o),i.setEnd(s,l),{range:i,mode:"normal"}}(e);return oe.set(e,n.range),window.setTimeout((()=>{oe.delete(e)}),0),n.range}let ue=G("quill:events");const ce=[];[$,"mousedown","mouseup","click"].forEach((e=>{document.addEventListener(e,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];ce.forEach((e=>{e.handleDOM(...t)}))}))}));class de extends B.a{constructor(){super(),this.listeners={},ce.push(this),this.on("error",ue.error)}emit(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];ue.log.call(ue,...t),super.emit(...t)}handleDOM(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const r=e.composedPath?e.composedPath()[0]:e.target;(this.listeners[e.type]||[]).forEach((t=>{let i=t.node,s=t.handler;(r===i||((e,t)=>{if(!("getRootNode"in document)||t.getRootNode()===document)return e.contains(t);for(;!e.contains(t);){const e=t.getRootNode();if(!e||!e.host)return!1;t=e.host}return!0})(i,r))&&s(e,...n)}))}listenDOM(e,t,n){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push({node:t,handler:n})}}de.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_BLOT_MOUNT:"scroll-blot-mount",SCROLL_BLOT_UNMOUNT:"scroll-blot-unmount",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},de.sources={API:"api",SILENT:"silent",USER:"user"};var he=de;function pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const me=G("quill:selection");class fe{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.index=e,this.length=t}}class ge{constructor(e,t){this.emitter=t,this.scroll=e,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.rootDocument=this.root.getRootNode?this.root.getRootNode():document,this.cursor=this.scroll.create("cursor",this),this.savedRange=new fe(0,0),this.lastRange=this.savedRange,this.handleComposition(),this.handleDragging(),te||this.emitter.listenDOM($,document,(()=>{this.mouseDown||setTimeout(this.update.bind(this,he.sources.USER),1)})),this.emitter.on(he.events.SCROLL_BEFORE_UPDATE,(()=>{if(!this.hasFocus())return;const e=this.getNativeRange();null!=e&&e.start.node!==this.cursor.textNode&&this.emitter.once(he.events.SCROLL_UPDATE,(()=>{try{this.root.contains(e.start.node)&&this.root.contains(e.end.node)&&this.setNativeRange(e.start.node,e.start.offset,e.end.node,e.end.offset),this.update(he.sources.SILENT)}catch(e){}}))})),this.emitter.on(he.events.SCROLL_OPTIMIZE,((e,t)=>{if(t.range){const e=t.range,n=e.startNode,i=e.startOffset,r=e.endNode,s=e.endOffset;this.setNativeRange(n,i,r,s),this.update(he.sources.SILENT)}})),this.update(he.sources.SILENT)}handleComposition(){this.root.addEventListener("compositionstart",(()=>{this.composing=!0,this.scroll.batchStart()})),this.root.addEventListener("compositionend",(()=>{if(this.scroll.batchEnd(),this.composing=!1,this.cursor.parent){const e=this.cursor.restore();if(!e)return;setTimeout((()=>{this.setNativeRange(e.startNode,e.startOffset,e.endNode,e.endOffset)}),1)}}))}handleDragging(){this.emitter.listenDOM("mousedown",document.body,(()=>{this.mouseDown=!0})),this.emitter.listenDOM("mouseup",document.body,(()=>{this.mouseDown=!1,this.update(he.sources.USER)}))}focus(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}format(e,t){this.scroll.update();const n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!this.scroll.query(e,o.BLOCK)){if(n.start.node!==this.cursor.textNode){const e=this.scroll.find(n.start.node,!1);if(null==e)return;if(e instanceof v){const t=e.split(n.start.offset);e.parent.insertBefore(this.cursor,t)}else e.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(e,t),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}getBounds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=this.scroll.length();let i;e=Math.min(e,n-1),t=Math.min(e+t,n-1)-e;let r=pe(this.scroll.leaf(e),2),s=r[0],a=r[1];if(null==s)return null;var o=pe(s.position(a,!0),2);i=o[0],a=o[1];const l=document.createRange();if(t>0){l.setStart(i,a);var u=pe(this.scroll.leaf(e+t),2);if(s=u[0],a=u[1],null==s)return null;var c=pe(s.position(a,!0),2);return i=c[0],a=c[1],l.setEnd(i,a),l.getBoundingClientRect()}let d,h="left";return i instanceof Text?(a<i.data.length?(l.setStart(i,a),l.setEnd(i,a+1)):(l.setStart(i,a-1),l.setEnd(i,a),h="right"),d=l.getBoundingClientRect()):(d=s.domNode.getBoundingClientRect(),a>0&&(h="right")),{bottom:d.top+d.height,height:d.height,left:d[h],right:d[h],top:d.top,width:0}}getNativeRange(){let e=le(this.rootDocument);if(null==e)return null;const t=this.normalizeNative(e);return me.info("getNativeRange",t),t}getRange(){const e=this.getNativeRange();return null==e?[null,null]:[this.normalizedToRange(e),e]}hasFocus(){return this.rootDocument.activeElement===this.root||_e(this.root,this.rootDocument.activeElement)}normalizedToRange(e){const t=[[e.start.node,e.start.offset]];e.native.collapsed||t.push([e.end.node,e.end.offset]);const n=t.map((e=>{const t=pe(e,2),n=t[0],i=t[1],r=this.scroll.find(n,!0),s=r.offset(this.scroll);return 0===i?s:r instanceof v?s+r.index(n,i):s+r.length()})),i=Math.min(Math.max(...n),this.scroll.length()-1),r=Math.min(i,...n);return new fe(r,i-r)}normalizeNative(e){if(!_e(this.root,e.startContainer)||!e.collapsed&&!_e(this.root,e.endContainer))return null;const t={start:{node:e.startContainer,offset:e.startOffset},end:{node:e.endContainer,offset:e.endOffset},native:e};return[t.start,t.end].forEach((e=>{let t=e.node,n=e.offset;for(;!(t instanceof Text)&&t.childNodes.length>0;)if(t.childNodes.length>n)t=t.childNodes[n],n=0;else{if(t.childNodes.length!==n)break;n=(t=t.lastChild)instanceof Text?t.data.length:t.childNodes.length>0?t.childNodes.length:t.childNodes.length+1}e.node=t,e.offset=n})),t}rangeToNative(e){const t=e.collapsed?[e.index]:[e.index,e.index+e.length],n=[],i=this.scroll.length();return t.forEach(((e,t)=>{e=Math.min(i-1,e);const r=pe(this.scroll.leaf(e),2),s=r[0],a=r[1],o=pe(s.position(a,0!==t),2),l=o[0],u=o[1];n.push(l,u)})),n.length<2?n.concat(n):n}scrollIntoView(e){const t=this.lastRange;if(null==t)return;const n=this.getBounds(t.index,t.length);if(null==n)return;const i=this.scroll.length()-1,r=pe(this.scroll.line(Math.min(t.index,i)),1)[0];let s=r;if(t.length>0&&(s=pe(this.scroll.line(Math.min(t.index+t.length,i)),1)[0]),null==r||null==s)return;const a=e.getBoundingClientRect();n.top<a.top?e.scrollTop-=a.top-n.top:n.bottom>a.bottom&&(e.scrollTop+=n.bottom-a.bottom)}setNativeRange(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(me.info("setNativeRange",e,t,n,i),null!=e&&(null==this.root.parentNode||null==e.parentNode||null==n.parentNode))return;let s="function"==typeof this.rootDocument.getSelection?this.rootDocument.getSelection():document.getSelection();if(null!=s)if(null!=e){this.hasFocus()||this.root.focus();const a=(this.getNativeRange()||{}).native;if(null==a||r||e!==a.startContainer||t!==a.startOffset||n!==a.endContainer||i!==a.endOffset){"BR"===e.tagName&&(t=Array.from(e.parentNode.childNodes).indexOf(e),e=e.parentNode),"BR"===n.tagName&&(i=Array.from(n.parentNode.childNodes).indexOf(n),n=n.parentNode);const r=document.createRange();r.setStart(e,t),r.setEnd(n,i),function(e,t,n){oe.has(e)&&(oe.delete(e),oe.set(e,n)),t.removeAllRanges(),t.addRange(n)}(this.rootDocument,s,r)}}else s.removeAllRanges(),this.root.blur()}setRange(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:he.sources.API;if("string"==typeof t&&(n=t,t=!1),me.info("setRange",e),null!=e){const n=this.rangeToNative(e);this.setNativeRange(...n,t)}else this.setNativeRange(null);this.update(n)}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.sources.USER;const t=this.lastRange,n=pe(this.getRange(),2),i=n[0],r=n[1];if(this.lastRange=i,null!=this.lastRange&&(this.savedRange=this.lastRange),!H()(t,this.lastRange)){if(!this.composing&&null!=r&&r.native.collapsed&&r.start.node!==this.cursor.textNode){const e=this.cursor.restore();e&&this.setNativeRange(e.startNode,e.startOffset,e.endNode,e.endOffset)}const n=[he.events.SELECTION_CHANGE,R()(this.lastRange),R()(t),e];this.emitter.emit(he.events.EDITOR_CHANGE,...n),e!==he.sources.SILENT&&this.emitter.emit(...n)}}}function _e(e,t){try{t.parentNode}catch(e){return!1}return e.contains(t)}class ve extends O{}function ye(e){return e.replace(/[&<>"']/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e])))}class be extends T{static value(){}constructor(e,t,n){super(e,t),this.selection=n,this.textNode=document.createTextNode(be.CONTENTS),this.domNode.appendChild(this.textNode),this.savedLength=0}detach(){null!=this.parent&&this.parent.removeChild(this)}format(e,t){if(0!==this.savedLength)return void super.format(e,t);let n=this,i=0;for(;null!=n&&n.statics.scope!==o.BLOCK_BLOT;)i+=n.offset(n.parent),n=n.parent;null!=n&&(this.savedLength=be.CONTENTS.length,n.optimize(),n.formatAt(i,be.CONTENTS.length,e,t),this.savedLength=0)}index(e,t){return e===this.textNode?0:super.index(e,t)}length(){return this.savedLength}position(){return[this.textNode,this.textNode.data.length]}remove(){super.remove(),this.parent=null}restore(){if(this.selection.composing||null==this.parent)return null;const e=this.selection.getNativeRange();for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);const t=this.prev instanceof ve?this.prev:null,n=t?t.length():0,i=this.next instanceof ve?this.next:null,r=i?i.text:"",s=this.textNode,a=s.data.split(be.CONTENTS).join("");let o;if(s.data=be.CONTENTS,t)o=t,(a||i)&&(t.insertAt(t.length(),a+r),i&&i.remove());else if(i)o=i,i.insertAt(0,a);else{const e=document.createTextNode(a);o=this.scroll.create(e),this.parent.insertBefore(o,this)}if(this.remove(),e){const r=(e,r)=>t&&e===t.domNode?r:e===s?n+r-1:i&&e===i.domNode?n+a.length+r:null,l=r(e.start.node,e.start.offset),u=r(e.end.node,e.end.offset);if(null!==l&&null!==u)return{startNode:o.domNode,startOffset:l,endNode:o.domNode,endOffset:u}}return null}update(e,t){if(e.some((e=>"characterData"===e.type&&e.target===this.textNode))){const e=this.restore();e&&(t.range=e)}}value(){return""}}be.blotName="cursor",be.className="ql-cursor",be.tagName="span",be.CONTENTS="\ufeff";var xe=be;class we extends T{static value(){}optimize(){(this.prev||this.next)&&this.remove()}length(){return 0}value(){return""}}we.blotName="break",we.tagName="BR";var ke=we;class Me extends S{static compare(e,t){const n=Me.order.indexOf(e),i=Me.order.indexOf(t);return n>=0||i>=0?n-i:e===t?0:e<t?-1:1}formatAt(e,t,n,i){if(Me.compare(this.statics.blotName,n)<0&&this.scroll.query(n,o.BLOT)){const r=this.isolate(e,t);i&&r.wrap(n,i)}else super.formatAt(e,t,n,i)}optimize(e){if(super.optimize(e),this.parent instanceof Me&&Me.compare(this.statics.blotName,this.parent.statics.blotName)>0){const e=this.parent.isolate(this.offset(),this.length());this.moveChildren(e),e.wrap(this)}}}Me.allowedChildren=[Me,ke,T,ve],Me.order=["cursor","inline","underline","strike","italic","bold","script","link","code"];var Le=Me;class Se extends E{constructor(e,t){super(e,t),this.cache={}}delta(){return null==this.cache.delta&&(this.cache.delta=Ee(this)),this.cache.delta}deleteAt(e,t){super.deleteAt(e,t),this.cache={}}formatAt(e,t,n,i){t<=0||(this.scroll.query(n,o.BLOCK)?e+t===this.length()&&this.format(n,i):super.formatAt(e,Math.min(t,this.length()-e-1),n,i),this.cache={})}insertAt(e,t,n){if(null!=n)return super.insertAt(e,t,n),void(this.cache={});if(0===t.length)return;const i=t.split("\n"),r=i.shift();r.length>0&&(e<this.length()-1||null==this.children.tail?super.insertAt(Math.min(e,this.length()-1),r):this.children.tail.insertAt(this.children.tail.length(),r),this.cache={});let s=this;i.reduce(((e,t)=>((s=s.split(e,!0)).insertAt(0,t),t.length)),e+r.length)}insertBefore(e,t){const n=this.children.head;super.insertBefore(e,t),n instanceof ke&&n.remove(),this.cache={}}length(){return null==this.cache.length&&(this.cache.length=super.length()+1),this.cache.length}moveChildren(e,t){super.moveChildren(e,t),this.cache={}}optimize(e){super.optimize(e),this.cache={}}path(e){return super.path(e,!0)}removeChild(e){super.removeChild(e),this.cache={}}split(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t&&(0===e||e>=this.length()-1)){const t=this.clone();return 0===e?(this.parent.insertBefore(t,this),this):(this.parent.insertBefore(t,this.next),t)}const n=super.split(e,t);return this.cache={},n}}Se.blotName="block",Se.tagName="P",Se.defaultChild=ke,Se.allowedChildren=[ke,Le,T,ve];class De extends T{attach(){super.attach(),this.attributes=new M(this.domNode)}delta(){return(new a.a).insert(this.value(),j()(this.formats(),this.attributes.values()))}format(e,t){const n=this.scroll.query(e,o.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,t)}formatAt(e,t,n,i){this.format(n,i)}insertAt(e,t,n){if("string"==typeof t&&t.endsWith("\n")){const n=this.scroll.create(Se.blotName);this.parent.insertBefore(n,0===e?this:this.next),n.insertAt(0,t.slice(0,-1))}else super.insertAt(e,t,n)}}function Ee(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.descendants(v).reduce(((e,n)=>0===n.length()?e:e.insert(n.value(),Te(n,{},t))),new a.a).insert("\n",Te(e))}function Te(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return null==e?t:("function"==typeof e.formats&&(t=j()(t,e.formats()),n&&delete t["code-token"]),null==e.parent||"scroll"===e.parent.statics.blotName||e.parent.statics.scope!==e.statics.scope?t:Te(e.parent,t,n))}function Pe(e){return Ae(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||Ye()}function Ce(e,t){return Ae(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||Ye()}function Ye(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Ae(e){if(Array.isArray(e))return e}De.scope=o.BLOCK_BLOT;const Oe=/^[ -~]*$/;function Ne(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"==typeof e.html)return e.html(t,n);if(e instanceof ve)return ye(e.value().slice(t,t+n));if(e.children){if("list-container"===e.statics.blotName){const i=[];return e.children.forEachAt(t,n,((e,t,n)=>{const r=e.formats();i.push({child:e,offset:t,length:n,indent:r.indent||0,type:r.list})})),function e(t,n,i){if(0===t.length){const t=Ce(qe(i.pop()),1)[0];return n<=0?"</li></".concat(t,">"):"</li></".concat(t,">").concat(e([],n-1,i))}const r=Pe(t),s=r[0],a=s.child,o=s.offset,l=s.length,u=s.indent,c=s.type,d=r.slice(1),h=Ce(qe(c),2),p=h[0],m=h[1];if(u>n)return i.push(c),u===n+1?"<".concat(p,"><li").concat(m,">").concat(Ne(a,o,l)).concat(e(d,u,i)):"<".concat(p,"><li>").concat(e(t,n+1,i));const f=i[i.length-1];if(u===n&&c===f)return"</li><li".concat(m,">").concat(Ne(a,o,l)).concat(e(d,u,i));const g=Ce(qe(i.pop()),1)[0];return"</li></".concat(g,">").concat(e(t,n-1,i))}(i,-1,[])}const r=[];if(e.children.forEachAt(t,n,((e,t,n)=>{r.push(Ne(e,t,n))})),i||"list"===e.statics.blotName)return r.join("");const s=e.domNode,a=s.outerHTML,o=s.innerHTML,l=Ce(a.split(">".concat(o,"<")),2),u=l[0],c=l[1];return"<table"===u?'<table style="border: 1px solid #000;">'.concat(r.join(""),"<").concat(c):"".concat(u,">").concat(r.join(""),"<").concat(c)}return e.domNode.outerHTML}function je(e,t){return Object.keys(t).reduce(((n,i)=>(null==e[i]||(t[i]===e[i]?n[i]=t[i]:Array.isArray(t[i])?t[i].indexOf(e[i])<0&&(n[i]=t[i].concat([e[i]])):n[i]=[t[i],e[i]]),n)),{})}function qe(e){const t="ordered"===e?"ol":"ul";switch(e){case"checked":return[t,' data-list="checked"'];case"unchecked":return[t,' data-list="unchecked"'];default:return[t,""]}}function Re(e,t){let n=e.index,i=e.length;return new fe(n+t,i)}class Ie{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.quill=e,this.options=t}}Ie.DEFAULTS={};var He=Ie,Fe=new WeakMap;class Be{constructor(e,t){this.quill=e,this.options=t,this.modules={}}init(){Object.keys(this.options.modules).forEach((e=>{null==this.modules[e]&&this.addModule(e)}))}addModule(e){const t=this.quill.constructor.import("modules/".concat(e));return this.modules[e]=new t(this.quill,this.options.modules[e]||{}),this.modules[e]}}Be.DEFAULTS={modules:{}},Be.themes={default:Be};var ze=Be;function Ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const We=G("quill"),Ve=new u;m.uiClass="ql-ui";class Ge{static debug(e){!0===e&&(e="log"),G.level(e)}static find(e){return Fe.get(e)||Ve.find(e)}static import(e){return null==this.imports[e]&&We.error("Cannot import ".concat(e,". Are you sure it was registered?")),this.imports[e]}static register(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof e){const n=e.attrName||e.blotName;"string"==typeof n?this.register("formats/".concat(n),e,t):Object.keys(e).forEach((n=>{this.register(n,e[n],t)}))}else null==this.imports[e]||n||We.warn("Overwriting ".concat(e," with"),t),this.imports[e]=t,(e.startsWith("blots/")||e.startsWith("formats/"))&&"abstract"!==t.blotName&&Ve.register(t),"function"==typeof t.register&&t.register(Ve)}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.options=function(e,t){if((t=j()(!0,{container:e,modules:{clipboard:!0,keyboard:!0,history:!0,uploader:!0}},t)).theme&&t.theme!==Ge.DEFAULTS.theme){if(t.theme=Ge.import("themes/".concat(t.theme)),null==t.theme)throw new Error("Invalid theme ".concat(t.theme,". Did you register it?"))}else t.theme=ze;const n=j()(!0,{},t.theme.DEFAULTS);[n,t].forEach((e=>{e.modules=e.modules||{},Object.keys(e.modules).forEach((t=>{!0===e.modules[t]&&(e.modules[t]={})}))}));const i=Object.keys(n.modules).concat(Object.keys(t.modules)).reduce(((e,t)=>{const n=Ge.import("modules/".concat(t));return null==n?We.error("Cannot load ".concat(t," module. Are you sure you registered it?")):e[t]=n.DEFAULTS||{},e}),{});return null!=t.modules&&t.modules.toolbar&&t.modules.toolbar.constructor!==Object&&(t.modules.toolbar={container:t.modules.toolbar}),t=j()(!0,{},Ge.DEFAULTS,{modules:i},n,t),["bounds","container","scrollingContainer"].forEach((e=>{"string"==typeof t[e]&&(t[e]=document.querySelector(t[e]))})),t.modules=Object.keys(t.modules).reduce(((e,n)=>(t.modules[n]&&(e[n]=t.modules[n]),e)),{}),t}(e,t),this.container=this.options.container,null==this.container)return We.error("Invalid Quill container",e);this.options.debug&&Ge.debug(this.options.debug);const n=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",Fe.set(this.container,this),this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new he;const i=this.options.registry.query(Y.blotName);this.scroll=new i(this.options.registry,this.root,{emitter:this.emitter}),this.editor=new class{constructor(e){this.scroll=e,this.delta=this.getDelta()}applyDelta(e){let t=!1;this.scroll.update();let n=this.scroll.length();this.scroll.batchStart();const i=function(e){return e.reduce(((e,t)=>{if("string"==typeof t.insert){const n=t.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return e.insert(n,t.attributes)}return e.push(t)}),new a.a)}(e);return i.reduce(((e,i)=>{const r=i.retain||i.delete||i.insert.length||1;let a=i.attributes||{};if(null!=i.insert){if("string"==typeof i.insert){let r=i.insert;r.endsWith("\n")&&t&&(t=!1,r=r.slice(0,-1)),(e>=n||this.scroll.descendant(De,e)[0])&&!r.endsWith("\n")&&(t=!0),this.scroll.insertAt(e,r);const o=Ce(this.scroll.line(e),2),l=o[0],u=o[1];let c=j()({},Te(l));if(l instanceof Se){const e=Ce(l.descendant(v,u),1)[0];c=j()(c,Te(e))}a=s.AttributeMap.diff(c,a)||{}}else if("object"==typeof i.insert){const t=Object.keys(i.insert)[0];if(null==t)return e;this.scroll.insertAt(e,t,i.insert[t])}n+=r}return Object.keys(a).forEach((t=>{this.scroll.formatAt(e,r,t,a[t])})),e+r}),0),i.reduce(((e,t)=>"number"==typeof t.delete?(this.scroll.deleteAt(e,t.delete),e):e+(t.retain||t.insert.length||1)),0),this.scroll.batchEnd(),this.scroll.optimize(),this.update(i)}deleteText(e,t){return this.scroll.deleteAt(e,t),this.update((new a.a).retain(e).delete(t))}formatLine(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.scroll.update(),Object.keys(n).forEach((i=>{this.scroll.lines(e,Math.max(t,1)).forEach((e=>{e.format(i,n[i])}))})),this.scroll.optimize();const i=(new a.a).retain(e).retain(t,R()(n));return this.update(i)}formatText(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object.keys(n).forEach((i=>{this.scroll.formatAt(e,t,i,n[i])}));const i=(new a.a).retain(e).retain(t,R()(n));return this.update(i)}getContents(e,t){return this.delta.slice(e,e+t)}getDelta(){return this.scroll.lines().reduce(((e,t)=>e.concat(t.delta())),new a.a)}getFormat(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],i=[];0===t?this.scroll.path(e).forEach((e=>{const t=Ce(e,1)[0];t instanceof Se?n.push(t):t instanceof v&&i.push(t)})):(n=this.scroll.lines(e,t),i=this.scroll.descendants(v,e,t));const r=[n,i].map((e=>{if(0===e.length)return{};let t=Te(e.shift());for(;Object.keys(t).length>0;){const n=e.shift();if(null==n)return t;t=je(Te(n),t)}return t}));return j.a.apply(j.a,r)}getHTML(e,t){const n=Ce(this.scroll.line(e),2),i=n[0],r=n[1];return i.length()>=r+t?Ne(i,r,t,!0):Ne(this.scroll,e,t,!0)}getText(e,t){return this.getContents(e,t).filter((e=>"string"==typeof e.insert)).map((e=>e.insert)).join("")}insertEmbed(e,t,n){return this.scroll.insertAt(e,t,n),this.update((new a.a).retain(e).insert({[t]:n}))}insertText(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t=t.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(e,t),Object.keys(n).forEach((i=>{this.scroll.formatAt(e,t.length,i,n[i])})),this.update((new a.a).retain(e).insert(t,R()(n)))}isBlank(){if(0===this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;const e=this.scroll.children.head;return e.statics.blotName===Se.blotName&&!(e.children.length>1)&&e.children.head instanceof ke}removeFormat(e,t){const n=this.getText(e,t),i=Ce(this.scroll.line(e+t),2),r=i[0],s=i[1];let o=0,l=new a.a;null!=r&&(o=r.length()-s,l=r.delta().slice(s,s+o-1).insert("\n"));const u=this.getContents(e,t+o).diff((new a.a).insert(n).concat(l)),c=(new a.a).retain(e).concat(u);return this.applyDelta(c)}update(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const i=this.delta;if(1===t.length&&"characterData"===t[0].type&&t[0].target.data.match(Oe)&&this.scroll.find(t[0].target)){const r=this.scroll.find(t[0].target),s=Te(r),o=r.offset(this.scroll),l=t[0].oldValue.replace(xe.CONTENTS,""),u=(new a.a).insert(l),c=(new a.a).insert(r.value()),d=n&&{oldRange:Re(n.oldRange,-o),newRange:Re(n.newRange,-o)};e=(new a.a).retain(o).concat(u.diff(c,d)).reduce(((e,t)=>t.insert?e.insert(t.insert,s):e.push(t)),new a.a),this.delta=i.compose(e)}else this.delta=this.getDelta(),e&&H()(i.compose(e),this.delta)||(e=i.diff(this.delta,n));return e}}(this.scroll),this.selection=new ge(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.uploader=this.theme.addModule("uploader"),this.theme.init(),this.emitter.on(he.events.EDITOR_CHANGE,(e=>{e===he.events.TEXT_CHANGE&&this.root.classList.toggle("ql-blank",this.editor.isBlank())})),this.emitter.on(he.events.SCROLL_UPDATE,((e,t)=>{const n=this.selection.lastRange,i=Ue(this.selection.getRange(),1)[0],r=n&&i?{oldRange:n,newRange:i}:void 0;$e.call(this,(()=>this.editor.update(null,t,r)),e)}));const r=this.clipboard.convert({html:"".concat(n,"<p><br></p>"),text:"\n"});this.setContents(r),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable(),this.allowReadOnlyEdits=!1}addContainer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof e){const t=e;(e=document.createElement("div")).classList.add(t)}return this.container.insertBefore(e,t),e}blur(){this.selection.setRange(null)}deleteText(e,t,n){var i=Ue(Je(e,t,n),4);return e=i[0],t=i[1],n=i[3],$e.call(this,(()=>this.editor.deleteText(e,t)),n,e,-1*t)}disable(){this.enable(!1)}editReadOnly(e){this.allowReadOnlyEdits=!0;const t=e();return this.allowReadOnlyEdits=!1,t}enable(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(e),this.container.classList.toggle("ql-disabled",!e)}focus(){const e=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=e,this.scrollIntoView()}format(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:he.sources.API;return $e.call(this,(()=>{const n=this.getSelection(!0);let i=new a.a;if(null==n)return i;if(this.scroll.query(e,o.BLOCK))i=this.editor.formatLine(n.index,n.length,{[e]:t});else{if(0===n.length)return this.selection.format(e,t),i;i=this.editor.formatText(n.index,n.length,{[e]:t})}return this.setSelection(n,he.sources.SILENT),i}),n)}formatLine(e,t,n,i,r){let s;var a=Ue(Je(e,t,n,i,r),4);return e=a[0],t=a[1],s=a[2],r=a[3],$e.call(this,(()=>this.editor.formatLine(e,t,s)),r,e,0)}formatText(e,t,n,i,r){let s;var a=Ue(Je(e,t,n,i,r),4);return e=a[0],t=a[1],s=a[2],r=a[3],$e.call(this,(()=>this.editor.formatText(e,t,s)),r,e,0)}getBounds(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t="number"==typeof e?this.selection.getBounds(e,n):this.selection.getBounds(e.index,e.length);const i=this.container.getBoundingClientRect();return{bottom:t.bottom-i.top,height:t.height,left:t.left-i.left,right:t.right-i.left,top:t.top-i.top,width:t.width}}getContents(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-e;var n=Ue(Je(e,t),2);return e=n[0],t=n[1],this.editor.getContents(e,t)}getFormat(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(!0),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof e?this.editor.getFormat(e,t):this.editor.getFormat(e.index,e.length)}getIndex(e){return e.offset(this.scroll)}getLength(){return this.scroll.length()}getLeaf(e){return this.scroll.leaf(e)}getLine(e){return this.scroll.line(e)}getLines(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return"number"!=typeof e?this.scroll.lines(e.index,e.length):this.scroll.lines(e,t)}getModule(e){return this.theme.modules[e]}getSelection(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}getSemanticHTML(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-e;var n=Ue(Je(e,t),2);return e=n[0],t=n[1],this.editor.getHTML(e,t)}getText(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-e;var n=Ue(Je(e,t),2);return e=n[0],t=n[1],this.editor.getText(e,t)}hasFocus(){return this.selection.hasFocus()}insertEmbed(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ge.sources.API;return $e.call(this,(()=>this.editor.insertEmbed(e,t,n)),i,e)}insertText(e,t,n,i,r){let s;var a=Ue(Je(e,0,n,i,r),4);return e=a[0],s=a[2],r=a[3],$e.call(this,(()=>this.editor.insertText(e,t,s)),r,e,t.length)}isEnabled(){return this.scroll.isEnabled()}off(){return this.emitter.off(...arguments)}on(){return this.emitter.on(...arguments)}once(){return this.emitter.once(...arguments)}removeFormat(e,t,n){var i=Ue(Je(e,t,n),4);return e=i[0],t=i[1],n=i[3],$e.call(this,(()=>this.editor.removeFormat(e,t)),n,e)}scrollIntoView(){this.selection.scrollIntoView(this.scrollingContainer)}setContents(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he.sources.API;return $e.call(this,(()=>{e=new a.a(e);const t=this.getLength(),n=this.editor.deleteText(0,t),i=this.editor.applyDelta(e),r=i.ops[i.ops.length-1];return null!=r&&"string"==typeof r.insert&&"\n"===r.insert[r.insert.length-1]&&(this.editor.deleteText(this.getLength()-1,1),i.delete(1)),n.compose(i)}),t)}setSelection(e,t,n){if(null==e)this.selection.setRange(null,t||Ge.sources.API);else{var i=Ue(Je(e,t,n),4);e=i[0],t=i[1],n=i[3],this.selection.setRange(new fe(Math.max(0,e),t),n),n!==he.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}setText(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he.sources.API;const n=(new a.a).insert(e);return this.setContents(n,t)}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he.sources.USER;const t=this.scroll.update(e);return this.selection.update(e),t}updateContents(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he.sources.API;return $e.call(this,(()=>(e=new a.a(e),this.editor.applyDelta(e,t))),t,!0)}}function $e(e,t,n,i){if(!this.isEnabled()&&t===he.sources.USER&&!this.allowReadOnlyEdits)return new a.a;let r=null==n?null:this.getSelection();const s=this.editor.delta,o=e();if(null!=r&&(!0===n&&(n=r.index),null==i?r=Xe(r,o,t):0!==i&&(r=Xe(r,n,i,t)),this.setSelection(r,he.sources.SILENT)),o.length()>0){const e=[he.events.TEXT_CHANGE,o,s,t];this.emitter.emit(he.events.EDITOR_CHANGE,...e),t!==he.sources.SILENT&&this.emitter.emit(...e)}return o}function Je(e,t,n,i,r){let s={};return"number"==typeof e.index&&"number"==typeof e.length?"number"!=typeof t?(r=i,i=n,n=t,t=e.length,e=e.index):(t=e.length,e=e.index):"number"!=typeof t&&(r=i,i=n,n=t,t=0),"object"==typeof n?(s=n,r=i):"string"==typeof n&&(null!=i?s[n]=i:r=n),[e,t,s,r=r||he.sources.API]}function Xe(e,t,n,i){if(null==e)return null;let r,s;if(t instanceof a.a){var o=Ue([e.index,e.index+e.length].map((e=>t.transformPosition(e,i!==he.sources.USER))),2);r=o[0],s=o[1]}else{var l=Ue([e.index,e.index+e.length].map((e=>e<t||e===t&&i===he.sources.USER?e:n>=0?e+n:Math.max(t,e+n))),2);r=l[0],s=l[1]}return new fe(r,s-r)}Ge.DEFAULTS={bounds:null,modules:{},placeholder:"",readOnly:!1,registry:Ve,scrollingContainer:null,theme:"default"},Ge.events=he.events,Ge.sources=he.sources,Ge.version="2.0.0-dev.3-nx.0",Ge.imports={delta:a.a,parchment:i,"core/module":He,"core/theme":ze};var Ke=class extends g{};const Ze="\ufeff";var Qe=class extends T{constructor(e,t){super(e,t),this.contentNode=document.createElement("span"),this.contentNode.setAttribute("contenteditable",!1),Array.from(this.domNode.childNodes).forEach((e=>{this.contentNode.appendChild(e)})),this.leftGuard=document.createTextNode(Ze),this.rightGuard=document.createTextNode(Ze),this.domNode.appendChild(this.leftGuard),this.domNode.appendChild(this.contentNode),this.domNode.appendChild(this.rightGuard)}index(e,t){return e===this.leftGuard?0:e===this.rightGuard?1:super.index(e,t)}restore(e){let t,n;const i=e.data.split(Ze).join("");if(e===this.leftGuard)if(this.prev instanceof ve){const e=this.prev.length();this.prev.insertAt(e,i),t={startNode:this.prev.domNode,startOffset:e+i.length}}else n=document.createTextNode(i),this.parent.insertBefore(this.scroll.create(n),this),t={startNode:n,startOffset:i.length};else e===this.rightGuard&&(this.next instanceof ve?(this.next.insertAt(0,i),t={startNode:this.next.domNode,startOffset:i.length}):(n=document.createTextNode(i),this.parent.insertBefore(this.scroll.create(n),this.next),t={startNode:n,startOffset:i.length}));return e.data=Ze,t}update(e,t){e.forEach((e=>{if("characterData"===e.type&&(e.target===this.leftGuard||e.target===this.rightGuard)){const n=this.restore(e.target);n&&(t.range=n)}}))}};function et(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function tt(e){return e instanceof Se||e instanceof De}class nt extends Y{constructor(e,t,n){let i=n.emitter;super(e,t),this.emitter=i,this.batch=!1,this.optimize(),this.enable(),this.domNode.addEventListener("dragstart",(e=>this.handleDragStart(e)))}batchStart(){Array.isArray(this.batch)||(this.batch=[])}batchEnd(){const e=this.batch;this.batch=!1,this.update(e)}emitMount(e){this.emitter.emit(he.events.SCROLL_BLOT_MOUNT,e)}emitUnmount(e){this.emitter.emit(he.events.SCROLL_BLOT_UNMOUNT,e)}deleteAt(e,t){const n=et(this.line(e),2),i=n[0],r=n[1],s=et(this.line(e+t),1)[0];if(super.deleteAt(e,t),null!=s&&i!==s&&r>0){if(i instanceof De||s instanceof De)return void this.optimize();const e=s.children.head instanceof ke?null:s.children.head;i.moveChildren(s,e),i.remove()}this.optimize()}enable(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",e)}formatAt(e,t,n,i){super.formatAt(e,t,n,i),this.optimize()}handleDragStart(e){e.preventDefault()}insertAt(e,t,n){if(e>=this.length())if(null==n||null==this.scroll.query(t,o.BLOCK)){const e=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(e),null==n&&t.endsWith("\n")?e.insertAt(0,t.slice(0,-1),n):e.insertAt(0,t,n)}else{const e=this.scroll.create(t,n);this.appendChild(e)}else super.insertAt(e,t,n);this.optimize()}insertBefore(e,t){if(e.statics.scope===o.INLINE_BLOT){const n=this.scroll.create(this.statics.defaultChild.blotName);n.appendChild(e),super.insertBefore(n,t)}else super.insertBefore(e,t)}isEnabled(){return"true"===this.domNode.getAttribute("contenteditable")}leaf(e){return this.path(e).pop()||[null,-1]}line(e){return e===this.length()?this.line(e-1):this.descendant(tt,e)}lines(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;const n=(e,t,i)=>{let r=[],s=i;return e.children.forEachAt(t,i,((e,t,i)=>{tt(e)?r.push(e):e instanceof g&&(r=r.concat(n(e,t,s))),s-=i})),r};return n(this,e,t)}optimize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.batch||(super.optimize(e,t),e.length>0&&this.emitter.emit(he.events.SCROLL_OPTIMIZE,e,t))}path(e){return super.path(e).slice(1)}remove(){}update(e){if(this.batch)return void(Array.isArray(e)&&(this.batch=this.batch.concat(e)));let t=he.sources.USER;"string"==typeof e&&(t=e),Array.isArray(e)||(e=this.observer.takeRecords()),e.length>0&&this.emitter.emit(he.events.SCROLL_BEFORE_UPDATE,t,e),super.update(e.concat([])),e.length>0&&this.emitter.emit(he.events.SCROLL_UPDATE,t,e)}}nt.blotName="scroll",nt.className="ql-editor",nt.tagName="DIV",nt.defaultChild=Se,nt.allowedChildren=[Se,De,Ke];var it=nt;const rt={scope:o.BLOCK,whitelist:["right","center","justify"]},st=new y("align","align",rt),at=new x("align","ql-align",rt),ot=new k("align","text-align",rt);class lt extends k{value(e){let t=super.value(e);if(!t.startsWith("rgb("))return t;const n=(t=t.replace(/^[^\d]+/,"").replace(/[^\d]+$/,"")).split(",").map((e=>"00".concat(parseInt(e,10).toString(16)).slice(-2))).join("");return"#".concat(n)}}const ut=new x("color","ql-color",{scope:o.INLINE}),ct=new lt("color","color",{scope:o.INLINE}),dt=new x("background","ql-bg",{scope:o.INLINE}),ht=new lt("background","background-color",{scope:o.INLINE});class pt extends Ke{static create(e){const t=super.create(e);return t.setAttribute("spellcheck",!1),t}html(e,t){const n=this.children.map((e=>e.domNode.innerText)).join("\n").slice(e,e+t);return"<pre>".concat(ye(n),"</pre>")}}class mt extends Se{static register(){Ge.register(pt)}}class ft extends Le{}ft.blotName="code",ft.tagName="CODE",mt.blotName="code-block",mt.className="ql-code-block",mt.tagName="DIV",pt.blotName="code-block-container",pt.className="ql-code-block-container",pt.tagName="DIV",pt.allowedChildren=[mt],mt.allowedChildren=[ve,ke,xe],mt.requiredContainer=pt,mt.TAB="  ";const gt={scope:o.BLOCK,whitelist:["rtl"]},_t=new y("direction","dir",gt),vt=new x("direction","ql-direction",gt),yt=new k("direction","direction",gt),bt={scope:o.INLINE,whitelist:["serif","monospace"]},xt=new x("font","ql-font",bt),wt=new class extends k{value(e){return super.value(e).replace(/["']/g,"")}}("font","font-family",bt),kt=new x("size","ql-size",{scope:o.INLINE,whitelist:["small","large","huge"]}),Mt=new k("size","font-size",{scope:o.INLINE,whitelist:["10px","18px","32px"]});function Lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function St(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const Dt=G("quill:clipboard"),Et=[[Node.TEXT_NODE,function(e,t){let n=e.data;if("O:P"===e.parentNode.tagName)return t.insert(n.trim());if(0===n.trim().length&&n.includes("\n"))return t;if(!function e(t){return null!=t&&(Nt.has(t)||("PRE"===t.tagName?Nt.set(t,!0):Nt.set(t,e(t.parentNode))),Nt.get(t))}(e)){const t=(e,t)=>{const n=t.replace(/[^\u00a0]/g,"");return n.length<1&&e?" ":n};n=(n=n.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,t.bind(t,!0)),(null==e.previousSibling&&Ot(e.parentNode)||null!=e.previousSibling&&Ot(e.previousSibling))&&(n=n.replace(/^\s+/,t.bind(t,!1))),(null==e.nextSibling&&Ot(e.parentNode)||null!=e.nextSibling&&Ot(e.nextSibling))&&(n=n.replace(/\s+$/,t.bind(t,!1)))}return t.insert(n)}],[Node.TEXT_NODE,Rt],["br",function(e,t){return At(t,"\n")||t.insert("\n"),t}],[Node.ELEMENT_NODE,Rt],[Node.ELEMENT_NODE,function(e,t,n){const i=n.query(e);if(null==i)return t;if(i.prototype instanceof T){const t={},r=i.value(e);if(null!=r)return t[i.blotName]=r,(new a.a).insert(t,i.formats(e,n))}else if(i.prototype instanceof E&&!At(t,"\n")&&t.insert("\n"),"function"==typeof i.formats)return Yt(t,i.blotName,i.formats(e,n));return t}],[Node.ELEMENT_NODE,function(e,t,n){const i=y.keys(e),r=x.keys(e),s=k.keys(e),a={};return i.concat(r).concat(s).forEach((t=>{let i=n.query(t,o.ATTRIBUTE);null!=i&&(a[i.attrName]=i.value(e),a[i.attrName])||(null==(i=Tt[t])||i.attrName!==t&&i.keyName!==t||(a[i.attrName]=i.value(e)||void 0),null==(i=Pt[t])||i.attrName!==t&&i.keyName!==t||(i=Pt[t],a[i.attrName]=i.value(e)||void 0))})),Object.keys(a).length>0?Yt(t,a):t}],[Node.ELEMENT_NODE,function(e,t){const n={},i=e.style||{};return"italic"===i.fontStyle&&(n.italic=!0),(i.fontWeight.startsWith("bold")||parseInt(i.fontWeight,10)>=700)&&(n.bold=!0),Object.keys(n).length>0&&(t=Yt(t,n)),parseFloat(i.textIndent||0)>0?(new a.a).insert("\t").concat(t):t}],["li",function(e,t,n){const i=n.query(e);if(null==i||"list"!==i.blotName||!At(t,"\n"))return t;let r=-1,s=e.parentNode;for(;null!=s;)["OL","UL"].includes(s.tagName)&&(r+=1),s=s.parentNode;return r<=0?t:t.reduce(((e,t)=>t.attributes&&t.attributes.list?e.push(t):e.insert(t.insert,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){Lt(e,t,n[t])}))}return e}({indent:r},t.attributes||{}))),new a.a)}],["ol, ul",function(e,t){return Yt(t,"list","OL"===e.tagName?"ordered":"bullet")}],["pre",function(e,t,n){const i=n.query("code-block");return Yt(t,"code-block",!i||i.formats(e,n))}],["tr",function(e,t){const n="TABLE"===e.parentNode.tagName?e.parentNode:e.parentNode.parentNode;return Yt(t,"table",Array.from(n.querySelectorAll("tr")).indexOf(e)+1)}],["b",qt.bind(qt,"bold")],["i",qt.bind(qt,"italic")],["style",function(){return new a.a}]],Tt=[st,_t].reduce(((e,t)=>(e[t.keyName]=t,e)),{}),Pt=[ot,ht,ct,yt,wt,Mt].reduce(((e,t)=>(e[t.keyName]=t,e)),{});class Ct extends He{constructor(e,t){super(e,t),this.quill.root.addEventListener("copy",(e=>this.onCaptureCopy(e,!1))),this.quill.root.addEventListener("cut",(e=>this.onCaptureCopy(e,!0))),this.quill.root.addEventListener("paste",this.onCapturePaste.bind(this)),this.matchers=[],Et.concat(this.options.matchers).forEach((e=>{let t=St(e,2),n=t[0],i=t[1];this.addMatcher(n,i)}))}addMatcher(e,t){this.matchers.push([e,t])}convert(e){let t=e.html,n=e.text,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i[mt.blotName])return(new a.a).insert(n,{[mt.blotName]:i[mt.blotName]});if(!t)return(new a.a).insert(n||"");const r=(new DOMParser).parseFromString(t,"text/html").body,s=new WeakMap,o=St(this.prepareMatching(r,s),2),l=o[0],u=o[1],c=jt(this.quill.scroll,r,l,u,s);return At(c,"\n")&&(null==c.ops[c.ops.length-1].attributes||i.table)?c.compose((new a.a).retain(c.length()-1).delete(1)):c}dangerouslyPasteHTML(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ge.sources.API;if("string"==typeof e){const n=this.convert({html:e,text:""});this.quill.setContents(n,t),this.quill.setSelection(0,Ge.sources.SILENT)}else{const i=this.convert({html:t,text:""});this.quill.updateContents((new a.a).retain(e).concat(i),n),this.quill.setSelection(e+i.length(),Ge.sources.SILENT)}}onCaptureCopy(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.defaultPrevented)return;e.preventDefault();const n=St(this.quill.selection.getRange(),1)[0];if(null==n)return;const i=this.onCopy(n,t),r=i.html,s=i.text;e.clipboardData.setData("text/plain",s),e.clipboardData.setData("text/html",r),t&&this.quill.deleteText(n,Ge.sources.USER)}onCapturePaste(e){if(e.defaultPrevented||!this.quill.isEnabled())return;e.preventDefault();const t=this.quill.getSelection(!0);if(null==t)return;const n=e.clipboardData.getData("text/html"),i=e.clipboardData.getData("text/plain"),r=Array.from(e.clipboardData.files||[]);!n&&r.length>0?this.quill.uploader.upload(t,r):this.onPaste(t,{html:n,text:i})}onCopy(e){const t=this.quill.getText(e);return{html:this.quill.getSemanticHTML(e),text:t}}onPaste(e,t){let n=t.text,i=t.html;const r=this.quill.getFormat(e.index),s=this.convert({text:n,html:i},r);Dt.log("onPaste",s,{text:n,html:i});const o=(new a.a).retain(e.index).delete(e.length).concat(s);this.quill.updateContents(o,Ge.sources.USER),this.quill.setSelection(o.length()-e.length,Ge.sources.SILENT),this.quill.scrollIntoView()}prepareMatching(e,t){const n=[],i=[];return this.matchers.forEach((r=>{const s=St(r,2),a=s[0],o=s[1];switch(a){case Node.TEXT_NODE:i.push(o);break;case Node.ELEMENT_NODE:n.push(o);break;default:Array.from(e.querySelectorAll(a)).forEach((e=>{t.has(e)?t.get(e).push(o):t.set(e,[o])}))}})),[n,i]}}function Yt(e,t,n){return"object"==typeof t?Object.keys(t).reduce(((e,n)=>Yt(e,n,t[n])),e):e.reduce(((e,i)=>i.attributes&&i.attributes[t]?e.push(i):e.insert(i.insert,j()({},{[t]:n},i.attributes))),new a.a)}function At(e,t){let n="";for(let i=e.ops.length-1;i>=0&&n.length<t.length;--i){const t=e.ops[i];if("string"!=typeof t.insert)break;n=t.insert+n}return n.slice(-1*t.length)===t}function Ot(e){return 0!==e.childNodes.length&&["address","article","blockquote","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","iframe","li","main","nav","ol","output","p","pre","section","table","td","tr","ul","video"].includes(e.tagName.toLowerCase())}Ct.DEFAULTS={matchers:[]};const Nt=new WeakMap;function jt(e,t,n,i,r){return t.nodeType===t.TEXT_NODE?i.reduce(((n,i)=>i(t,n,e)),new a.a):t.nodeType===t.ELEMENT_NODE?Array.from(t.childNodes||[]).reduce(((s,a)=>{let o=jt(e,a,n,i,r);return a.nodeType===t.ELEMENT_NODE&&(o=n.reduce(((t,n)=>n(a,t,e)),o),o=(r.get(a)||[]).reduce(((t,n)=>n(a,t,e)),o)),s.concat(o)}),new a.a):new a.a}function qt(e,t,n){return Yt(n,e,!0)}function Rt(e,t,n){if(!At(t,"\n")){if(Ot(e))return t.insert("\n");if(t.length()>0&&e.nextSibling){let i=e.nextSibling;for(;null!=i;){if(Ot(i))return t.insert("\n");const e=n.query(i);if(e&&e.prototype instanceof De)return t.insert("\n");i=i.firstChild}}}return t}class It extends He{constructor(e,t){super(e,t),this.lastRecorded=0,this.ignoreChange=!1,this.clear(),this.quill.on(Ge.events.EDITOR_CHANGE,((e,t,n,i)=>{e!==Ge.events.TEXT_CHANGE||this.ignoreChange||(this.options.userOnly&&i!==Ge.sources.USER?this.transform(t):this.record(t,n))})),this.quill.keyboard.addBinding({key:"z",shortKey:!0},this.undo.bind(this)),this.quill.keyboard.addBinding({key:"z",shortKey:!0,shiftKey:!0},this.redo.bind(this)),/Win/i.test(navigator.platform)&&this.quill.keyboard.addBinding({key:"y",shortKey:!0},this.redo.bind(this))}change(e,t){if(0===this.stack[e].length)return;const n=this.stack[e].pop(),i=this.quill.getContents(),r=n.invert(i);this.stack[t].push(r),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n,Ge.sources.USER),this.ignoreChange=!1;const s=function(e,t){const n=t.reduce(((e,t)=>e+(t.delete||0)),0);let i=t.length()-n;return function(e,t){const n=t.ops[t.ops.length-1];return null!=n&&(null!=n.insert?"string"==typeof n.insert&&n.insert.endsWith("\n"):null!=n.attributes&&Object.keys(n.attributes).some((t=>null!=e.query(t,o.BLOCK))))}(e,t)&&(i-=1),i}(this.quill.scroll,n);this.quill.setSelection(s)}clear(){this.stack={undo:[],redo:[]}}cutoff(){this.lastRecorded=0}record(e,t){if(0===e.ops.length)return;this.stack.redo=[];let n=e.invert(t);const i=Date.now();if(this.lastRecorded+this.options.delay>i&&this.stack.undo.length>0){const e=this.stack.undo.pop();n=n.compose(e)}else this.lastRecorded=i;0!==n.length()&&(this.stack.undo.push(n),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift())}redo(){this.change("redo","undo")}transform(e){Ht(this.stack.undo,e),Ht(this.stack.redo,e)}undo(){this.change("undo","redo")}}function Ht(e,t){let n=t;for(let t=e.length-1;t>=0;t-=1){const i=e[t];e[t]=n.transform(i,!0),n=i.transform(n),0===e[t].length()&&e.splice(t,1)}}function Ft(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}It.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};const Bt=G("quill:keyboard"),zt=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey";class Ut extends He{static match(e,t){return!["altKey","ctrlKey","metaKey","shiftKey"].some((n=>!!t[n]!==e[n]&&null!==t[n]))&&(t.key===e.key||t.key===e.which)}constructor(e,t){super(e,t),this.bindings={},Object.keys(this.options.bindings).forEach((e=>{this.options.bindings[e]&&this.addBinding(this.options.bindings[e])})),this.addBinding({key:"Enter",shiftKey:null},this.handleEnter),this.addBinding({key:"Enter",metaKey:null,ctrlKey:null,altKey:null},(()=>{})),/Firefox/i.test(navigator.userAgent)?(this.addBinding({key:"Backspace"},{collapsed:!0},this.handleBackspace),this.addBinding({key:"Delete"},{collapsed:!0},this.handleDelete)):(this.addBinding({key:"Backspace"},{collapsed:!0,prefix:/^.?$/},this.handleBackspace),this.addBinding({key:"Delete"},{collapsed:!0,suffix:/^.?$/},this.handleDelete)),this.addBinding({key:"Backspace"},{collapsed:!1},this.handleDeleteRange),this.addBinding({key:"Delete"},{collapsed:!1},this.handleDeleteRange),this.addBinding({key:"Backspace",altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},this.handleBackspace),this.listen()}addBinding(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=function(e){if("string"==typeof e||"number"==typeof e)e={key:e};else{if("object"!=typeof e)return null;e=R()(e,!1)}return e.shortKey&&(e[zt]=e.shortKey,delete e.shortKey),e}(e);null!=i?("function"==typeof t&&(t={handler:t}),"function"==typeof n&&(n={handler:n}),(Array.isArray(i.key)?i.key:[i.key]).forEach((e=>{const r=j()({},i,{key:e},t,n);this.bindings[r.key]=this.bindings[r.key]||[],this.bindings[r.key].push(r)}))):Bt.warn("Attempted to add invalid keyboard binding",i)}listen(){this.quill.root.addEventListener("keydown",(e=>{if(e.defaultPrevented)return;const t=(this.bindings[e.key]||[]).concat(this.bindings[e.which]||[]).filter((t=>Ut.match(e,t)));if(0===t.length)return;const n=this.quill.getSelection();if(null==n||!this.quill.hasFocus())return;const i=Ft(this.quill.getLine(n.index),2),r=i[0],s=i[1],a=Ft(this.quill.getLeaf(n.index),2),o=a[0],l=a[1],u=Ft(0===n.length?[o,l]:this.quill.getLeaf(n.index+n.length),2),c=u[0],d=u[1],h=o instanceof O?o.value().slice(0,l):"",p=c instanceof O?c.value().slice(d):"",m={collapsed:0===n.length,empty:0===n.length&&r.length()<=1,format:this.quill.getFormat(n),line:r,offset:s,prefix:h,suffix:p,event:e};t.some((e=>{if(null!=e.collapsed&&e.collapsed!==m.collapsed)return!1;if(null!=e.empty&&e.empty!==m.empty)return!1;if(null!=e.offset&&e.offset!==m.offset)return!1;if(Array.isArray(e.format)){if(e.format.every((e=>null==m.format[e])))return!1}else if("object"==typeof e.format&&!Object.keys(e.format).every((t=>!0===e.format[t]?null!=m.format[t]:!1===e.format[t]?null==m.format[t]:H()(e.format[t],m.format[t]))))return!1;return!(null!=e.prefix&&!e.prefix.test(m.prefix)||null!=e.suffix&&!e.suffix.test(m.suffix)||!0===e.handler.call(this,n,m,e))}))&&e.preventDefault()}))}handleBackspace(e,t){const n=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix)?2:1;if(0===e.index||this.quill.getLength()<=1)return;let i={};const r=Ft(this.quill.getLine(e.index),1)[0];let o=(new a.a).retain(e.index-n).delete(n);if(0===t.offset&&Ft(this.quill.getLine(e.index-1),1)[0]){const t=r.formats(),n=this.quill.getFormat(e.index-1,1);if(i=s.AttributeMap.diff(t,n)||{},Object.keys(i).length>0){const t=(new a.a).retain(e.index+r.length()-2).retain(1,i);o=o.compose(t)}}this.quill.updateContents(o,Ge.sources.USER),this.quill.focus()}handleDelete(e,t){const n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix)?2:1;if(e.index>=this.quill.getLength()-n)return;let i={};const r=Ft(this.quill.getLine(e.index),1)[0];let o=(new a.a).retain(e.index).delete(n);if(t.offset>=r.length()-1){const t=Ft(this.quill.getLine(e.index+1),1)[0];if(t){const n=r.formats(),a=this.quill.getFormat(e.index,1);i=s.AttributeMap.diff(n,a)||{},Object.keys(i).length>0&&(o=o.retain(t.length()-1).retain(1,i))}}this.quill.updateContents(o,Ge.sources.USER),this.quill.focus()}handleDeleteRange(e){const t=this.quill.getLines(e);let n={};if(t.length>1){const e=t[0].formats(),i=t[t.length-1].formats();n=s.AttributeMap.diff(i,e)||{}}this.quill.deleteText(e,Ge.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(e.index,1,n,Ge.sources.USER),this.quill.setSelection(e.index,Ge.sources.SILENT),this.quill.focus()}handleEnter(e,t){const n=Object.keys(t.format).reduce(((e,n)=>(this.quill.scroll.query(n,o.BLOCK)&&!Array.isArray(t.format[n])&&(e[n]=t.format[n]),e)),{}),i=(new a.a).retain(e.index).delete(e.length).insert("\n",n);this.quill.updateContents(i,Ge.sources.USER),this.quill.setSelection(e.index+1,Ge.sources.SILENT),this.quill.focus(),Object.keys(t.format).forEach((e=>{null==n[e]&&(Array.isArray(t.format[e])||"code"!==e&&"link"!==e&&this.quill.format(e,t.format[e],Ge.sources.USER))}))}}function Wt(e){return{key:"Tab",shiftKey:!e,format:{"code-block":!0},handler(t){const n=this.quill.scroll.query("code-block"),i=0===t.length?this.quill.getLines(t.index,1):this.quill.getLines(t);let r=t.index,s=t.length;i.forEach(((t,i)=>{e?(t.insertAt(0,n.TAB),0===i?r+=n.TAB.length:s+=n.TAB.length):t.domNode.textContent.startsWith(n.TAB)&&(t.deleteAt(0,n.TAB.length),0===i?r-=n.TAB.length:s-=n.TAB.length)})),this.quill.update(Ge.sources.USER),this.quill.setSelection(r,s,Ge.sources.SILENT)}}}function Vt(e,t){return{key:e,shiftKey:t,altKey:null,["ArrowLeft"===e?"prefix":"suffix"]:/^$/,handler(n){let i=n.index;return"ArrowRight"===e&&(i+=n.length+1),!(Ft(this.quill.getLeaf(i),1)[0]instanceof T&&("ArrowLeft"===e?t?this.quill.setSelection(n.index-1,n.length+1,Ge.sources.USER):this.quill.setSelection(n.index-1,Ge.sources.USER):t?this.quill.setSelection(n.index,n.length+1,Ge.sources.USER):this.quill.setSelection(n.index+n.length+1,Ge.sources.USER),1))}}}function Gt(e){return{key:e[0],shortKey:!0,handler(t,n){this.quill.format(e,!n.format[e],Ge.sources.USER)}}}function $t(e){return{key:e?"ArrowUp":"ArrowDown",collapsed:!0,format:["table"],handler(t,n){const i=e?"prev":"next",r=n.line,s=r.parent[i];if(null!=s){if("table-row"===s.statics.blotName){let e=s.children.head,t=r;for(;null!=t.prev;)t=t.prev,e=e.next;const i=e.offset(this.quill.scroll)+Math.min(n.offset,e.length()-1);this.quill.setSelection(i,0,Ge.sources.USER)}}else{const t=r.table()[i];null!=t&&(e?this.quill.setSelection(t.offset(this.quill.scroll)+t.length()-1,0,Ge.sources.USER):this.quill.setSelection(t.offset(this.quill.scroll),0,Ge.sources.USER))}return!1}}}Ut.DEFAULTS={bindings:{bold:Gt("bold"),italic:Gt("italic"),underline:Gt("underline"),indent:{key:"Tab",format:["blockquote","indent","list"],handler(e,t){return!(!t.collapsed||0===t.offset)||(this.quill.format("indent","+1",Ge.sources.USER),!1)}},outdent:{key:"Tab",shiftKey:!0,format:["blockquote","indent","list"],handler(e,t){return!(!t.collapsed||0===t.offset)||(this.quill.format("indent","-1",Ge.sources.USER),!1)}},"outdent backspace":{key:"Backspace",collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler(e,t){null!=t.format.indent?this.quill.format("indent","-1",Ge.sources.USER):null!=t.format.list&&this.quill.format("list",!1,Ge.sources.USER)}},"indent code-block":Wt(!0),"outdent code-block":Wt(!1),"remove tab":{key:"Tab",shiftKey:!0,collapsed:!0,prefix:/\t$/,handler(e){this.quill.deleteText(e.index-1,1,Ge.sources.USER)}},tab:{key:"Tab",handler(e,t){if(t.format.table)return!0;this.quill.history.cutoff();const n=(new a.a).retain(e.index).delete(e.length).insert("\t");return this.quill.updateContents(n,Ge.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(e.index+1,Ge.sources.SILENT),!1}},"blockquote empty enter":{key:"Enter",collapsed:!0,format:["blockquote"],empty:!0,handler(){this.quill.format("blockquote",!1,Ge.sources.USER)}},"list empty enter":{key:"Enter",collapsed:!0,format:["list"],empty:!0,handler(e,t){const n={list:!1};t.format.indent&&(n.indent=!1),this.quill.formatLine(e.index,e.length,n,Ge.sources.USER)}},"checklist enter":{key:"Enter",collapsed:!0,format:{list:"checked"},handler(e){const t=Ft(this.quill.getLine(e.index),2),n=t[0],i=t[1],r=j()({},n.formats(),{list:"checked"}),s=(new a.a).retain(e.index).insert("\n",r).retain(n.length()-i-1).retain(1,{list:"unchecked"});this.quill.updateContents(s,Ge.sources.USER),this.quill.setSelection(e.index+1,Ge.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:"Enter",collapsed:!0,format:["header"],suffix:/^$/,handler(e,t){const n=Ft(this.quill.getLine(e.index),2),i=n[0],r=n[1],s=(new a.a).retain(e.index).insert("\n",t.format).retain(i.length()-r-1).retain(1,{header:null});this.quill.updateContents(s,Ge.sources.USER),this.quill.setSelection(e.index+1,Ge.sources.SILENT),this.quill.scrollIntoView()}},"table backspace":{key:"Backspace",format:["table"],collapsed:!0,offset:0,handler(){}},"table delete":{key:"Delete",format:["table"],collapsed:!0,suffix:/^$/,handler(){}},"table enter":{key:"Enter",shiftKey:null,format:["table"],handler(e){const t=this.quill.getModule("table");if(t){const n=Ft(t.getTable(e),4),i=n[0],r=function(e,t,n,i){return null==t.prev&&null==t.next?null==n.prev&&null==n.next?0===i?-1:1:null==n.prev?-1:1:null==t.prev?-1:null==t.next?1:null}(0,n[1],n[2],n[3]);if(null==r)return;let s=i.offset();if(r<0){const t=(new a.a).retain(s).insert("\n");this.quill.updateContents(t,Ge.sources.USER),this.quill.setSelection(e.index+1,e.length,Ge.sources.SILENT)}else if(r>0){s+=i.length();const e=(new a.a).retain(s).insert("\n");this.quill.updateContents(e,Ge.sources.USER),this.quill.setSelection(s,Ge.sources.USER)}}}},"table tab":{key:"Tab",shiftKey:null,format:["table"],handler(e,t){const n=t.event,i=t.line,r=i.offset(this.quill.scroll);n.shiftKey?this.quill.setSelection(r-1,Ge.sources.USER):this.quill.setSelection(r+i.length(),Ge.sources.USER)}},"list autofill":{key:" ",shiftKey:null,collapsed:!0,format:{list:!1,"code-block":!1,blockquote:!1,header:!1,table:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler(e,t){if(null==this.quill.scroll.query("list"))return!0;const n=t.prefix.length,i=Ft(this.quill.getLine(e.index),2),r=i[0],s=i[1];if(s>n)return!0;let o;switch(t.prefix.trim()){case"[]":case"[ ]":o="unchecked";break;case"[x]":o="checked";break;case"-":case"*":o="bullet";break;default:o="ordered"}this.quill.insertText(e.index," ",Ge.sources.USER),this.quill.history.cutoff();const l=(new a.a).retain(e.index-s).delete(n+1).retain(r.length()-2-s).retain(1,{list:o});return this.quill.updateContents(l,Ge.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(e.index-n,Ge.sources.SILENT),!1}},"code exit":{key:"Enter",collapsed:!0,format:["code-block"],prefix:/^$/,suffix:/^\s*$/,handler(e){const t=Ft(this.quill.getLine(e.index),2),n=t[0],i=t[1];let r=2,s=n;for(;null!=s&&s.length()<=1&&s.formats()["code-block"];)if(s=s.prev,(r-=1)<=0){const t=(new a.a).retain(e.index+n.length()-i-2).retain(1,{"code-block":null}).delete(1);return this.quill.updateContents(t,Ge.sources.USER),this.quill.setSelection(e.index-1,Ge.sources.SILENT),!1}return!0}},"embed left":Vt("ArrowLeft",!1),"embed left shift":Vt("ArrowLeft",!0),"embed right":Vt("ArrowRight",!1),"embed right shift":Vt("ArrowRight",!0),"table down":$t(!1),"table up":$t(!0)}};class Jt extends He{constructor(e,t){super(e,t),e.root.addEventListener("drop",(t=>{let n;if(t.preventDefault(),document.caretRangeFromPoint)n=document.caretRangeFromPoint(t.clientX,t.clientY);else{if(!document.caretPositionFromPoint)return;{const e=document.caretPositionFromPoint(t.clientX,t.clientY);(n=document.createRange()).setStart(e.offsetNode,e.offset),n.setEnd(e.offsetNode,e.offset)}}const i=e.selection.normalizeNative(n),r=e.selection.normalizedToRange(i);this.upload(r,t.dataTransfer.files)}))}upload(e,t){const n=[];Array.from(t).forEach((e=>{e&&this.options.mimetypes.includes(e.type)&&n.push(e)})),n.length>0&&this.options.handler.call(this,e,n)}}Jt.DEFAULTS={mimetypes:["image/png","image/jpeg"],handler(e,t){const n=t.map((e=>new Promise((t=>{const n=new FileReader;n.onload=e=>{t(e.target.result)},n.readAsDataURL(e)}))));Promise.all(n).then((t=>{const n=t.reduce(((e,t)=>e.insert({image:t})),(new a.a).retain(e.index).delete(e.length));this.quill.updateContents(n,he.sources.USER),this.quill.setSelection(e.index+t.length,he.sources.SILENT)}))}};var Xt=Jt;Ge.register({"blots/block":Se,"blots/block/embed":De,"blots/break":ke,"blots/container":Ke,"blots/cursor":xe,"blots/embed":Qe,"blots/inline":Le,"blots/scroll":it,"blots/text":ve,"modules/clipboard":Ct,"modules/history":It,"modules/keyboard":Ut,"modules/uploader":Xt});var Kt=Ge,Zt=new class extends x{add(e,t){if("+1"===t||"-1"===t){const n=this.value(e)||0;t="+1"===t?n+1:n-1}return 0===t?(this.remove(e),!0):super.add(e,t)}canAdd(e,t){return super.canAdd(e,t)||super.canAdd(e,parseInt(t,10))}value(e){return parseInt(super.value(e),10)||void 0}}("indent","ql-indent",{scope:o.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});class Qt extends Se{}Qt.blotName="blockquote",Qt.tagName="blockquote";var en=Qt;class tn extends Se{static formats(e){return this.tagName.indexOf(e.tagName)+1}}tn.blotName="header",tn.tagName=["H1","H2","H3","H4","H5","H6"];var nn=tn;class rn extends Ke{}rn.blotName="list-container",rn.tagName="OL";class sn extends Se{static create(e){const t=super.create();return t.setAttribute("data-list",e),t}static formats(e){return e.getAttribute("data-list")||void 0}static register(){Ge.register(rn)}constructor(e,t){super(e,t);const n=t.ownerDocument.createElement("span"),i=n=>{if(!e.isEnabled())return;const i=this.statics.formats(t,e);"checked"===i?(this.format("list","unchecked"),n.preventDefault()):"unchecked"===i&&(this.format("list","checked"),n.preventDefault())};n.addEventListener("mousedown",i),n.addEventListener("touchstart",i),this.attachUI(n)}format(e,t){e===this.statics.blotName&&t?this.domNode.setAttribute("data-list",t):super.format(e,t)}}sn.blotName="list",sn.tagName="LI",rn.allowedChildren=[sn],sn.requiredContainer=rn;class an extends Le{static create(){return super.create()}static formats(){return!0}optimize(e){super.optimize(e),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}an.blotName="bold",an.tagName=["STRONG","B"];var on=an;class ln extends on{}ln.blotName="italic",ln.tagName=["EM","I"];var un=ln;class cn extends Le{static create(e){const t=super.create(e);return t.setAttribute("href",this.sanitize(e)),t.setAttribute("target","_blank"),t}static formats(e){return e.getAttribute("href")}static sanitize(e){return dn(e,this.PROTOCOL_WHITELIST)?e:this.SANITIZED_URL}format(e,t){e===this.statics.blotName&&t?this.domNode.setAttribute("href",this.constructor.sanitize(t)):super.format(e,t)}}function dn(e,t){const n=document.createElement("a");n.href=e;const i=n.href.slice(0,n.href.indexOf(":"));return t.indexOf(i)>-1}cn.blotName="link",cn.tagName="A",cn.SANITIZED_URL="about:blank",cn.PROTOCOL_WHITELIST=["http","https","mailto","tel"];class hn extends Le{static create(e){return"super"===e?document.createElement("sup"):"sub"===e?document.createElement("sub"):super.create(e)}static formats(e){return"SUB"===e.tagName?"sub":"SUP"===e.tagName?"super":void 0}}hn.blotName="script",hn.tagName=["SUB","SUP"];var pn=hn;class mn extends Le{}mn.blotName="strike",mn.tagName="S";var fn=mn;class gn extends Le{}gn.blotName="underline",gn.tagName="U";var _n=gn;class vn extends Qe{static create(e){if(null==window.katex)throw new Error("Formula module requires KaTeX.");const t=super.create(e);return"string"==typeof e&&(window.katex.render(e,t,{throwOnError:!1,errorColor:"#f00"}),t.setAttribute("data-value",e)),t}static value(e){return e.getAttribute("data-value")}html(){const e=this.value().formula;return"<span>".concat(e,"</span>")}}vn.blotName="formula",vn.className="ql-formula",vn.tagName="SPAN";var yn=vn;const bn=["alt","height","width"];class xn extends T{static create(e){const t=super.create(e);return"string"==typeof e&&t.setAttribute("src",this.sanitize(e)),t}static formats(e){return bn.reduce(((t,n)=>(e.hasAttribute(n)&&(t[n]=e.getAttribute(n)),t)),{})}static match(e){return/\.(jpe?g|gif|png)$/.test(e)||/^data:image\/.+;base64/.test(e)}static register(){/Firefox/i.test(navigator.userAgent)&&setTimeout((()=>{document.execCommand("enableObjectResizing",!1,!1)}),1)}static sanitize(e){return dn(e,["http","https","data"])?e:"//:0"}static value(e){return e.getAttribute("src")}format(e,t){bn.indexOf(e)>-1?t?this.domNode.setAttribute(e,t):this.domNode.removeAttribute(e):super.format(e,t)}}xn.blotName="image",xn.tagName="IMG";var wn=xn;const kn=["height","width"];class Mn extends De{static create(e){const t=super.create(e);return t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen",!0),t.setAttribute("src",this.sanitize(e)),t}static formats(e){return kn.reduce(((t,n)=>(e.hasAttribute(n)&&(t[n]=e.getAttribute(n)),t)),{})}static sanitize(e){return cn.sanitize(e)}static value(e){return e.getAttribute("src")}format(e,t){kn.indexOf(e)>-1?t?this.domNode.setAttribute(e,t):this.domNode.removeAttribute(e):super.format(e,t)}html(){const e=this.value().video;return'<a href="'.concat(e,'">').concat(e,"</a>")}}Mn.blotName="video",Mn.className="ql-video",Mn.tagName="IFRAME";var Ln=Mn;const Sn=new x("code-token","hljs",{scope:o.INLINE});class Dn extends Le{static formats(e,t){for(;null!=e&&e!==t.domNode;){if(e.classList.contains(mt.className))return super.formats(e,t);e=e.parentNode}}constructor(e,t,n){super(e,t,n),Sn.add(this.domNode,n)}format(e,t){e!==Dn.blotName?super.format(e,t):t?Sn.add(this.domNode,t):(Sn.remove(this.domNode),this.domNode.classList.remove(this.statics.className))}optimize(){super.optimize(...arguments),Sn.value(this.domNode)||this.unwrap()}}Dn.blotName="code-token",Dn.className="ql-token";class En extends mt{static create(e){const t=super.create(e);return"string"==typeof e&&t.setAttribute("data-language",e),t}static formats(e){return e.getAttribute("data-language")||"plain"}static register(){}format(e,t){e===this.statics.blotName&&t?this.domNode.setAttribute("data-language",t):super.format(e,t)}replaceWith(e,t){return this.formatAt(0,this.length(),Dn.blotName,!1),super.replaceWith(e,t)}}class Tn extends pt{attach(){super.attach(),this.forceNext=!1,this.scroll.emitMount(this)}format(e,t){e===En.blotName&&(this.forceNext=!0,this.children.forEach((n=>{n.format(e,t)})))}formatAt(e,t,n,i){n===En.blotName&&(this.forceNext=!0),super.formatAt(e,t,n,i)}highlight(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null==this.children.head)return;const n=Array.from(this.domNode.childNodes).filter((e=>e!==this.uiNode)),i="".concat(n.map((e=>e.textContent)).join("\n"),"\n"),r=En.formats(this.children.head.domNode);if(t||this.forceNext||this.cachedText!==i){if(i.trim().length>0||null==this.cachedText){const t=this.children.reduce(((e,t)=>e.concat(Ee(t,!1))),new a.a),n=e(i,r);t.diff(n).reduce(((e,t)=>{let n=t.retain,i=t.attributes;return n?(i&&Object.keys(i).forEach((t=>{[En.blotName,Dn.blotName].includes(t)&&this.formatAt(e,n,t,i[t])})),e+n):e}),0)}this.cachedText=i,this.forceNext=!1}}optimize(e){if(super.optimize(e),null!=this.parent&&null!=this.children.head&&null!=this.uiNode){const e=En.formats(this.children.head.domNode);e!==this.uiNode.value&&(this.uiNode.value=e)}}}Tn.allowedChildren=[En],En.requiredContainer=Tn,En.allowedChildren=[Dn,xe,ve,ke];class Pn extends He{static register(){Ge.register(Dn,!0),Ge.register(En,!0),Ge.register(Tn,!0)}constructor(e,t){if(super(e,t),null==this.options.hljs)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");this.highlightBlot=this.highlightBlot.bind(this),this.initListener(),this.initTimer()}initListener(){this.quill.on(Ge.events.SCROLL_BLOT_MOUNT,(e=>{if(!(e instanceof Tn))return;const t=this.quill.root.ownerDocument.createElement("select");this.options.languages.forEach((e=>{let n=e.key,i=e.label;const r=t.ownerDocument.createElement("option");r.textContent=i,r.setAttribute("value",n),t.appendChild(r)})),t.addEventListener("change",(()=>{e.format(En.blotName,t.value),this.quill.root.focus(),this.highlight(e,!0)})),null==e.uiNode&&(e.attachUI(t),e.children.head&&(t.value=En.formats(e.children.head.domNode)))}))}initTimer(){let e=null;this.quill.on(Ge.events.SCROLL_OPTIMIZE,(()=>{clearTimeout(e),e=setTimeout((()=>{this.highlight(),e=null}),this.options.interval)}))}highlight(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.quill.selection.composing)return;this.quill.update(Ge.sources.USER);const n=this.quill.getSelection();(null==e?this.quill.scroll.descendants(Tn):[e]).forEach((e=>{e.highlight(this.highlightBlot,t)})),this.quill.update(Ge.sources.SILENT),null!=n&&this.quill.setSelection(n,Ge.sources.SILENT)}highlightBlot(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"plain";if("plain"===t)return ye(e).split("\n").reduce(((e,n,i)=>(0!==i&&e.insert("\n",{[mt.blotName]:t}),e.insert(n))),new a.a);const n=this.quill.root.ownerDocument.createElement("div");return n.classList.add(mt.className),n.innerHTML=this.options.hljs.highlight(t,e).value,jt(this.quill.scroll,n,[(e,t)=>{const n=Sn.value(e);return n?t.compose((new a.a).retain(t.length(),{[Dn.blotName]:n})):t}],[(e,n)=>e.data.split("\n").reduce(((e,n,i)=>(0!==i&&e.insert("\n",{[mt.blotName]:t}),e.insert(n))),n)],new WeakMap)}}function Cn(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Pn.DEFAULTS={hljs:window.hljs,interval:1e3,languages:[{key:"plain",label:"Plain"},{key:"bash",label:"Bash"},{key:"cpp",label:"C++"},{key:"cs",label:"C#"},{key:"css",label:"CSS"},{key:"diff",label:"Diff"},{key:"xml",label:"HTML/XML"},{key:"java",label:"Java"},{key:"javascript",label:"Javascript"},{key:"markdown",label:"Markdown"},{key:"php",label:"PHP"},{key:"python",label:"Python"},{key:"ruby",label:"Ruby"},{key:"sql",label:"SQL"}]};class Yn extends Se{static create(e){const t=super.create();return e?t.setAttribute("data-row",e):t.setAttribute("data-row",jn()),t}static formats(e){if(e.hasAttribute("data-row"))return e.getAttribute("data-row")}cellOffset(){return this.parent?this.parent.children.indexOf(this):-1}format(e,t){e===Yn.blotName&&t?this.domNode.setAttribute("data-row",t):super.format(e,t)}row(){return this.parent}rowOffset(){return this.row()?this.row().rowOffset():-1}table(){return this.row()&&this.row().table()}}Yn.blotName="table",Yn.tagName="TD";class An extends Ke{checkMerge(){if(super.checkMerge()&&null!=this.next.children.head){const e=this.children.head.formats(),t=this.children.tail.formats(),n=this.next.children.head.formats(),i=this.next.children.tail.formats();return e.table===t.table&&e.table===n.table&&e.table===i.table}return!1}optimize(){super.optimize(...arguments),this.children.forEach((e=>{if(null==e.next)return;const t=e.formats(),n=e.next.formats();if(t.table!==n.table){const t=this.splitAfter(e);t&&t.optimize(),this.prev&&this.prev.optimize()}}))}rowOffset(){return this.parent?this.parent.children.indexOf(this):-1}table(){return this.parent&&this.parent.parent}}An.blotName="table-row",An.tagName="TR";class On extends Ke{}On.blotName="table-body",On.tagName="TBODY";class Nn extends Ke{balanceCells(){const e=this.descendants(An),t=e.reduce(((e,t)=>Math.max(t.children.length,e)),0);e.forEach((e=>{new Array(t-e.children.length).fill(0).forEach((()=>{let t;null!=e.children.head&&(t=Yn.formats(e.children.head.domNode));const n=this.scroll.create(Yn.blotName,t);e.appendChild(n),n.optimize()}))}))}cells(e){return this.rows().map((t=>t.children.at(e)))}deleteColumn(e){const t=Cn(this.descendant(On),1)[0];null!=t&&null!=t.children.head&&t.children.forEach((t=>{const n=t.children.at(e);null!=n&&n.remove()}))}insertColumn(e){const t=Cn(this.descendant(On),1)[0];null!=t&&null!=t.children.head&&t.children.forEach((t=>{const n=t.children.at(e),i=Yn.formats(t.children.head.domNode),r=this.scroll.create(Yn.blotName,i);t.insertBefore(r,n)}))}insertRow(e){const t=Cn(this.descendant(On),1)[0];if(null==t||null==t.children.head)return;const n=jn(),i=this.scroll.create(An.blotName);t.children.head.children.forEach((()=>{const e=this.scroll.create(Yn.blotName,n);i.appendChild(e)}));const r=t.children.at(e);t.insertBefore(i,r)}rows(){const e=this.children.head;return null==e?[]:e.children.map((e=>e))}}function jn(){const e=Math.random().toString(36).slice(2,6);return"row-".concat(e)}function qn(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Nn.blotName="table-container",Nn.tagName="TABLE",Nn.allowedChildren=[On],On.requiredContainer=Nn,On.allowedChildren=[An],An.requiredContainer=On,An.allowedChildren=[Yn],Yn.requiredContainer=An;function Rn(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const In=G("quill:toolbar");class Hn extends He{constructor(e,t){if(super(e,t),Array.isArray(this.options.container)){const t=document.createElement("div");!function(e,t){Array.isArray(t[0])||(t=[t]),t.forEach((t=>{const n=document.createElement("span");n.classList.add("ql-formats"),t.forEach((e=>{if("string"==typeof e)Fn(n,e);else{const t=Object.keys(e)[0],i=e[t];Array.isArray(i)?function(e,t,n){const i=document.createElement("select");i.classList.add("ql-".concat(t)),n.forEach((e=>{const t=document.createElement("option");!1!==e?t.setAttribute("value",e):t.setAttribute("selected","selected"),i.appendChild(t)})),e.appendChild(i)}(n,t,i):Fn(n,t,i)}})),e.appendChild(n)}))}(t,this.options.container),e.container.parentNode.insertBefore(t,e.container),this.container=t}else if("string"==typeof this.options.container){const t="getRootNode"in document?e.container.getRootNode():document;this.container=t.querySelector(this.options.container)}else this.container=this.options.container;if(!(this.container instanceof HTMLElement))return In.error("Container required for toolbar",this.options);this.container.classList.add("ql-toolbar"),this.controls=[],this.handlers={},Object.keys(this.options.handlers).forEach((e=>{this.addHandler(e,this.options.handlers[e])})),Array.from(this.container.querySelectorAll("button, select")).forEach((e=>{this.attach(e)})),this.quill.on(Ge.events.EDITOR_CHANGE,((e,t)=>{e===Ge.events.SELECTION_CHANGE&&this.update(t)})),this.quill.on(Ge.events.SCROLL_OPTIMIZE,(()=>{const e=Rn(this.quill.selection.getRange(),1)[0];this.update(e)}))}addHandler(e,t){this.handlers[e]=t}attach(e){let t=Array.from(e.classList).find((e=>0===e.indexOf("ql-")));if(!t)return;if(t=t.slice("ql-".length),"BUTTON"===e.tagName&&e.setAttribute("type","button"),null==this.handlers[t]&&null==this.quill.scroll.query(t))return void In.warn("ignoring attaching to nonexistent format",t,e);const n="SELECT"===e.tagName?"change":"click";e.addEventListener(n,(n=>{let i;if("SELECT"===e.tagName){if(e.selectedIndex<0)return;const t=e.options[e.selectedIndex];i=!t.hasAttribute("selected")&&(t.value||!1)}else i=!e.classList.contains("ql-active")&&(e.value||!e.hasAttribute("value")),n.preventDefault();this.quill.focus();const r=Rn(this.quill.selection.getRange(),1)[0];if(null!=this.handlers[t])this.handlers[t].call(this,i);else if(this.quill.scroll.query(t).prototype instanceof T){if(!(i=prompt("Enter ".concat(t))))return;this.quill.updateContents((new a.a).retain(r.index).delete(r.length).insert({[t]:i}),Ge.sources.USER)}else this.quill.format(t,i,Ge.sources.USER);this.update(r)})),this.controls.push([t,e])}update(e){const t=null==e?{}:this.quill.getFormat(e);this.controls.forEach((n=>{const i=Rn(n,2),r=i[0],s=i[1];if("SELECT"===s.tagName){let n;if(null==e)n=null;else if(null==t[r])n=s.querySelector("option[selected]");else if(!Array.isArray(t[r])){let e=t[r];"string"==typeof e&&(e=e.replace(/"/g,'\\"')),n=s.querySelector('option[value="'.concat(e,'"]'))}null==n?(s.value="",s.selectedIndex=-1):n.selected=!0}else if(null==e)s.classList.remove("ql-active");else if(s.hasAttribute("value")){const e=t[r]===s.getAttribute("value")||null!=t[r]&&t[r].toString()===s.getAttribute("value")||null==t[r]&&!s.getAttribute("value");s.classList.toggle("ql-active",e)}else s.classList.toggle("ql-active",null!=t[r])}))}}function Fn(e,t,n){const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("ql-".concat(t)),null!=n&&(i.value=n),e.appendChild(i)}Hn.DEFAULTS={},Hn.DEFAULTS={container:null,handlers:{clean(){const e=this.quill.getSelection();if(null!=e)if(0===e.length){const e=this.quill.getFormat();Object.keys(e).forEach((e=>{null!=this.quill.scroll.query(e,o.INLINE)&&this.quill.format(e,!1,Ge.sources.USER)}))}else this.quill.removeFormat(e,Ge.sources.USER)},direction(e){const t=this.quill.getFormat().align;"rtl"===e&&null==t?this.quill.format("align","right",Ge.sources.USER):e||"right"!==t||this.quill.format("align",!1,Ge.sources.USER),this.quill.format("direction",e,Ge.sources.USER)},indent(e){const t=this.quill.getSelection(),n=this.quill.getFormat(t),i=parseInt(n.indent||0,10);if("+1"===e||"-1"===e){let t="+1"===e?1:-1;"rtl"===n.direction&&(t*=-1),this.quill.format("indent",i+t,Ge.sources.USER)}},link(e){!0===e&&(e=prompt("Enter link URL:")),this.quill.format("link",e,Ge.sources.USER)},list(e){const t=this.quill.getSelection(),n=this.quill.getFormat(t);"check"===e?"checked"===n.list||"unchecked"===n.list?this.quill.format("list",!1,Ge.sources.USER):this.quill.format("list","unchecked",Ge.sources.USER):this.quill.format("list",e,Ge.sources.USER)}}};var Bn=n(7),zn=n.n(Bn),Un=n(8),Wn=n.n(Un),Vn=n(9),Gn=n.n(Vn),$n=n(10),Jn=n.n($n),Xn=n(11),Kn=n.n(Xn),Zn=n(12),Qn=n.n(Zn),ei=n(13),ti=n.n(ei),ni=n(14),ii=n.n(ni),ri=n(4),si=n.n(ri),ai=n(15),oi=n.n(ai),li=n(16),ui=n.n(li),ci=n(17),di=n.n(ci),hi=n(18),pi=n.n(hi),mi=n(19),fi=n.n(mi),gi=n(20),_i=n.n(gi),vi=n(21),yi=n.n(vi),bi=n(22),xi=n.n(bi),wi=n(23),ki=n.n(wi),Mi=n(24),Li=n.n(Mi),Si=n(25),Di=n.n(Si),Ei=n(26),Ti=n.n(Ei),Pi=n(27),Ci=n.n(Pi),Yi=n(28),Ai=n.n(Yi),Oi=n(29),Ni=n.n(Oi),ji=n(30),qi=n.n(ji),Ri=n(31),Ii=n.n(Ri),Hi=n(32),Fi=n.n(Hi),Bi=n(33),zi=n.n(Bi),Ui=n(34),Wi=n.n(Ui),Vi={align:{"":zn.a,center:Wn.a,right:Gn.a,justify:Jn.a},background:Kn.a,blockquote:Qn.a,bold:ti.a,clean:ii.a,code:si.a,"code-block":si.a,color:oi.a,direction:{"":ui.a,rtl:di.a},formula:pi.a,header:{1:fi.a,2:_i.a},italic:yi.a,image:xi.a,indent:{"+1":ki.a,"-1":Li.a},link:Di.a,list:{bullet:Ti.a,check:Ci.a,ordered:Ai.a},script:{sub:Ni.a,super:qi.a},strike:Ii.a,table:Fi.a,underline:zi.a,video:Wi.a},Gi=n(35),$i=n.n(Gi);let Ji=0;function Xi(e,t){e.setAttribute(t,!("true"===e.getAttribute(t)))}var Ki=class{constructor(e){this.select=e,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",(()=>{this.togglePicker()})),this.label.addEventListener("keydown",(e=>{switch(e.key){case"Enter":this.togglePicker();break;case"Escape":this.escape(),e.preventDefault()}})),this.select.addEventListener("change",this.update.bind(this))}togglePicker(){this.container.classList.toggle("ql-expanded"),Xi(this.label,"aria-expanded"),Xi(this.options,"aria-hidden")}buildItem(e){const t=document.createElement("span");return t.tabIndex="0",t.setAttribute("role","button"),t.classList.add("ql-picker-item"),e.hasAttribute("value")&&t.setAttribute("data-value",e.getAttribute("value")),e.textContent&&t.setAttribute("data-label",e.textContent),t.addEventListener("click",(()=>{this.selectItem(t,!0)})),t.addEventListener("keydown",(e=>{switch(e.key){case"Enter":this.selectItem(t,!0),e.preventDefault();break;case"Escape":this.escape(),e.preventDefault()}})),t}buildLabel(){const e=document.createElement("span");return e.classList.add("ql-picker-label"),e.innerHTML=$i.a,e.tabIndex="0",e.setAttribute("role","button"),e.setAttribute("aria-expanded","false"),this.container.appendChild(e),e}buildOptions(){const e=document.createElement("span");e.classList.add("ql-picker-options"),e.setAttribute("aria-hidden","true"),e.tabIndex="-1",e.id="ql-picker-options-".concat(Ji),Ji+=1,this.label.setAttribute("aria-controls",e.id),this.options=e,Array.from(this.select.options).forEach((t=>{const n=this.buildItem(t);e.appendChild(n),!0===t.selected&&this.selectItem(n)})),this.container.appendChild(e)}buildPicker(){Array.from(this.select.attributes).forEach((e=>{this.container.setAttribute(e.name,e.value)})),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}escape(){this.close(),setTimeout((()=>this.label.focus()),1)}close(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}selectItem(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.container.querySelector(".ql-selected");e!==n&&(null!=n&&n.classList.remove("ql-selected"),null!=e&&(e.classList.add("ql-selected"),this.select.selectedIndex=Array.from(e.parentNode.children).indexOf(e),e.hasAttribute("data-value")?this.label.setAttribute("data-value",e.getAttribute("data-value")):this.label.removeAttribute("data-value"),e.hasAttribute("data-label")?this.label.setAttribute("data-label",e.getAttribute("data-label")):this.label.removeAttribute("data-label"),t&&(this.select.dispatchEvent(new Event("change")),this.close())))}update(){let e;if(this.select.selectedIndex>-1){const t=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];e=this.select.options[this.select.selectedIndex],this.selectItem(t)}else this.selectItem(null);const t=null!=e&&e!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",t)}},Zi=class extends Ki{constructor(e,t){super(e),this.label.innerHTML=t,this.container.classList.add("ql-color-picker"),Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0,7).forEach((e=>{e.classList.add("ql-primary")}))}buildItem(e){const t=super.buildItem(e);return t.style.backgroundColor=e.getAttribute("value")||"",t}selectItem(e,t){super.selectItem(e,t);const n=this.label.querySelector(".ql-color-label"),i=e&&e.getAttribute("data-value")||"";n&&("line"===n.tagName?n.style.stroke=i:n.style.fill=i)}},Qi=class extends Ki{constructor(e,t){super(e),this.container.classList.add("ql-icon-picker"),Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((e=>{e.innerHTML=t[e.getAttribute("data-value")||""]})),this.defaultItem=this.container.querySelector(".ql-selected"),this.selectItem(this.defaultItem)}selectItem(e,t){super.selectItem(e,t);const n=e||this.defaultItem;this.label.innerHTML!==n.innerHTML&&(this.label.innerHTML=n.innerHTML)}},er=class{constructor(e,t){this.quill=e,this.boundsContainer=t||document.body,this.root=e.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",(()=>{this.root.style.marginTop="".concat(-1*this.quill.root.scrollTop,"px")})),this.hide()}hide(){this.root.classList.add("ql-hidden")}position(e){const t=e.left+e.width/2-this.root.offsetWidth/2,n=e.bottom+this.quill.root.scrollTop;this.root.style.left="".concat(t,"px"),this.root.style.top="".concat(n,"px"),this.root.classList.remove("ql-flip");const i=this.boundsContainer.getBoundingClientRect(),r=this.root.getBoundingClientRect();let s=0;if(r.right>i.right&&(s=i.right-r.right,this.root.style.left="".concat(t+s,"px")),r.left<i.left&&(s=i.left-r.left,this.root.style.left="".concat(t+s,"px")),r.bottom>i.bottom){const t=r.bottom-r.top,i=e.bottom-e.top+t;this.root.style.top="".concat(n-i,"px"),this.root.classList.add("ql-flip")}return s}show(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}};const tr=[!1,"center","right","justify"],nr=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],ir=[!1,"serif","monospace"],rr=["1","2","3",!1],sr=["small",!1,"large","huge"];class ar extends ze{constructor(e,t){super(e,t);const n=t=>{document.body.contains(e.root)?(null==this.tooltip||this.tooltip.root.contains(t.target)||document.activeElement===this.tooltip.textbox||this.quill.hasFocus()||this.tooltip.hide(),null!=this.pickers&&this.pickers.forEach((e=>{e.container.contains(t.target)||e.close()}))):document.body.removeEventListener("click",n)};e.emitter.listenDOM("click",document.body,n)}addModule(e){const t=super.addModule(e);return"toolbar"===e&&this.extendToolbar(t),t}buildButtons(e,t){Array.from(e).forEach((e=>{(e.getAttribute("class")||"").split(/\s+/).forEach((n=>{if(n.startsWith("ql-")&&(n=n.slice("ql-".length),null!=t[n]))if("direction"===n)e.innerHTML=t[n][""]+t[n].rtl;else if("string"==typeof t[n])e.innerHTML=t[n];else{const i=e.value||"";null!=i&&t[n][i]&&(e.innerHTML=t[n][i])}}))}))}buildPickers(e,t){this.pickers=Array.from(e).map((e=>{if(e.classList.contains("ql-align"))return null==e.querySelector("option")&&lr(e,tr),new Qi(e,t.align);if(e.classList.contains("ql-background")||e.classList.contains("ql-color")){const n=e.classList.contains("ql-background")?"background":"color";return null==e.querySelector("option")&&lr(e,nr,"background"===n?"#ffffff":"#000000"),new Zi(e,t[n])}return null==e.querySelector("option")&&(e.classList.contains("ql-font")?lr(e,ir):e.classList.contains("ql-header")?lr(e,rr):e.classList.contains("ql-size")&&lr(e,sr)),new Ki(e)})),this.quill.on(he.events.EDITOR_CHANGE,(()=>{this.pickers.forEach((e=>{e.update()}))}))}}ar.DEFAULTS=j()(!0,{},ze.DEFAULTS,{modules:{toolbar:{handlers:{formula(){this.quill.theme.tooltip.edit("formula")},image(){let e=this.container.querySelector("input.ql-image[type=file]");null==e&&((e=document.createElement("input")).setAttribute("type","file"),e.setAttribute("accept",this.quill.uploader.options.mimetypes.join(", ")),e.classList.add("ql-image"),e.addEventListener("change",(()=>{const t=this.quill.getSelection(!0);this.quill.uploader.upload(t,e.files),e.value=""})),this.container.appendChild(e)),e.click()},video(){this.quill.theme.tooltip.edit("video")}}}}});class or extends er{constructor(e,t){super(e,t),this.textbox=this.root.querySelector('input[type="text"]'),this.listen()}listen(){this.textbox.addEventListener("keydown",(e=>{"Enter"===e.key?(this.save(),e.preventDefault()):"Escape"===e.key&&(this.cancel(),e.preventDefault())}))}cancel(){this.hide()}edit(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"link",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),null!=t?this.textbox.value=t:e!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-".concat(e))||""),this.root.setAttribute("data-mode",e)}restoreFocus(){const e=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=e}save(){let e=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":{const t=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",e,he.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",e,he.sources.USER)),this.quill.root.scrollTop=t;break}case"video":e=function(e){let t=e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||e.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return t?"".concat(t[1]||"https","://www.youtube.com/embed/").concat(t[2],"?showinfo=0"):(t=e.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?"".concat(t[1]||"https","://player.vimeo.com/video/").concat(t[2],"/"):e}(e);case"formula":{if(!e)break;const t=this.quill.getSelection(!0);if(null!=t){const n=t.index+t.length;this.quill.insertEmbed(n,this.root.getAttribute("data-mode"),e,he.sources.USER),"formula"===this.root.getAttribute("data-mode")&&this.quill.insertText(n+1," ",he.sources.USER),this.quill.setSelection(n+2,he.sources.USER)}break}}this.textbox.value="",this.hide()}}function lr(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.forEach((t=>{const i=document.createElement("option");t===n?i.setAttribute("selected","selected"):i.setAttribute("value",t),e.appendChild(i)}))}const ur=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]];class cr extends or{constructor(e,t){super(e,t),this.quill.on(he.events.EDITOR_CHANGE,((e,t,n,i)=>{if(e===he.events.SELECTION_CHANGE)if(null!=t&&t.length>0&&i===he.sources.USER){this.show(),this.root.style.left="0px",this.root.style.width="",this.root.style.width="".concat(this.root.offsetWidth,"px");const e=this.quill.getLines(t.index,t.length);if(1===e.length)this.position(this.quill.getBounds(t));else{const n=e[e.length-1],i=this.quill.getIndex(n),r=Math.min(n.length()-1,t.index+t.length-i),s=this.quill.getBounds(new fe(i,r));this.position(s)}}else document.activeElement!==this.textbox&&this.quill.hasFocus()&&this.hide()}))}listen(){super.listen(),this.root.querySelector(".ql-close").addEventListener("click",(()=>{this.root.classList.remove("ql-editing")})),this.quill.on(he.events.SCROLL_OPTIMIZE,(()=>{setTimeout((()=>{if(this.root.classList.contains("ql-hidden"))return;const e=this.quill.getSelection();null!=e&&this.position(this.quill.getBounds(e))}),1)}))}cancel(){this.show()}position(e){const t=super.position(e),n=this.root.querySelector(".ql-tooltip-arrow");return n.style.marginLeft="",0!==t&&(n.style.marginLeft="".concat(-1*t-n.offsetWidth/2,"px")),t}}cr.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join("");class dr extends ar{constructor(e,t){null!=t.modules.toolbar&&null==t.modules.toolbar.container&&(t.modules.toolbar.container=ur),super(e,t),this.quill.container.classList.add("ql-bubble")}extendToolbar(e){this.tooltip=new cr(this.quill,this.options.bounds),this.tooltip.root.appendChild(e.container),this.buildButtons(e.container.querySelectorAll("button"),Vi),this.buildPickers(e.container.querySelectorAll("select"),Vi)}}dr.DEFAULTS=j()(!0,{},ar.DEFAULTS,{modules:{toolbar:{handlers:{link(e){e?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});const hr=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]];class pr extends or{constructor(e,t){super(e,t),this.preview=this.root.querySelector("a.ql-preview")}listen(){super.listen(),this.root.querySelector("a.ql-action").addEventListener("click",(e=>{this.root.classList.contains("ql-editing")?this.save():this.edit("link",this.preview.textContent),e.preventDefault()})),this.root.querySelector("a.ql-remove").addEventListener("click",(e=>{if(null!=this.linkRange){const e=this.linkRange;this.restoreFocus(),this.quill.formatText(e,"link",!1,he.sources.USER),delete this.linkRange}e.preventDefault(),this.hide()})),this.quill.on(he.events.SELECTION_CHANGE,((e,t,n)=>{if(null!=e){if(0===e.length&&n===he.sources.USER){const t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(this.quill.scroll.descendant(cn,e.index),2),n=t[0],i=t[1];if(null!=n){this.linkRange=new fe(e.index-i,n.length());const t=cn.formats(n.domNode);return this.preview.textContent=t,this.preview.setAttribute("href",t),this.show(),void this.position(this.quill.getBounds(this.linkRange))}}else delete this.linkRange;this.hide()}}))}show(){super.show(),this.root.removeAttribute("data-mode")}}pr.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join("");class mr extends ar{constructor(e,t){null!=t.modules.toolbar&&null==t.modules.toolbar.container&&(t.modules.toolbar.container=hr),super(e,t),this.quill.container.classList.add("ql-snow")}extendToolbar(e){e.container.classList.add("ql-snow"),this.buildButtons(e.container.querySelectorAll("button"),Vi),this.buildPickers(e.container.querySelectorAll("select"),Vi),this.tooltip=new pr(this.quill,this.options.bounds),e.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"k",shortKey:!0},((t,n)=>{e.handlers.link.call(e,!n.format.link)}))}}mr.DEFAULTS=j()(!0,{},ar.DEFAULTS,{modules:{toolbar:{handlers:{link(e){if(e){const e=this.quill.getSelection();if(null==e||0===e.length)return;let t=this.quill.getText(e);/^\S+@\S+\.\S+$/.test(t)&&0!==t.indexOf("mailto:")&&(t="mailto:".concat(t)),this.quill.theme.tooltip.edit("link",t)}else this.quill.format("link",!1)}}}}});var fr=mr;Kt.register({"attributors/attribute/direction":_t,"attributors/class/align":at,"attributors/class/background":dt,"attributors/class/color":ut,"attributors/class/direction":vt,"attributors/class/font":xt,"attributors/class/size":kt,"attributors/style/align":ot,"attributors/style/background":ht,"attributors/style/color":ct,"attributors/style/direction":yt,"attributors/style/font":wt,"attributors/style/size":Mt},!0),Kt.register({"formats/align":at,"formats/direction":vt,"formats/indent":Zt,"formats/background":ht,"formats/color":ct,"formats/font":xt,"formats/size":kt,"formats/blockquote":en,"formats/code-block":mt,"formats/header":nn,"formats/list":sn,"formats/bold":on,"formats/code":ft,"formats/italic":un,"formats/link":cn,"formats/script":pn,"formats/strike":fn,"formats/underline":_n,"formats/formula":yn,"formats/image":wn,"formats/video":Ln,"modules/syntax":Pn,"modules/table":class extends He{static register(){Ge.register(Yn),Ge.register(An),Ge.register(On),Ge.register(Nn)}constructor(){super(...arguments),this.listenBalanceCells()}balanceTables(){this.quill.scroll.descendants(Nn).forEach((e=>{e.balanceCells()}))}deleteColumn(){const e=qn(this.getTable(),3),t=e[0],n=e[2];null!=n&&(t.deleteColumn(n.cellOffset()),this.quill.update(Ge.sources.USER))}deleteRow(){const e=qn(this.getTable(),2)[1];null!=e&&(e.remove(),this.quill.update(Ge.sources.USER))}deleteTable(){const e=qn(this.getTable(),1)[0];if(null==e)return;const t=e.offset();e.remove(),this.quill.update(Ge.sources.USER),this.quill.setSelection(t,Ge.sources.SILENT)}getTable(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.quill.getSelection();if(null==e)return[null,null,null,-1];const t=qn(this.quill.getLine(e.index),2),n=t[0],i=t[1];if(null==n||n.statics.blotName!==Yn.blotName)return[null,null,null,-1];const r=n.parent;return[r.parent.parent,r,n,i]}insertColumn(e){const t=this.quill.getSelection(),n=qn(this.getTable(t),3),i=n[0],r=n[1],s=n[2];if(null==s)return;const a=s.cellOffset();i.insertColumn(a+e),this.quill.update(Ge.sources.USER);let o=r.rowOffset();0===e&&(o+=1),this.quill.setSelection(t.index+o,t.length,Ge.sources.SILENT)}insertColumnLeft(){this.insertColumn(0)}insertColumnRight(){this.insertColumn(1)}insertRow(e){const t=this.quill.getSelection(),n=qn(this.getTable(t),3),i=n[0],r=n[1];if(null==n[2])return;const s=r.rowOffset();i.insertRow(s+e),this.quill.update(Ge.sources.USER),e>0?this.quill.setSelection(t,Ge.sources.SILENT):this.quill.setSelection(t.index+r.children.length,t.length,Ge.sources.SILENT)}insertRowAbove(){this.insertRow(0)}insertRowBelow(){this.insertRow(1)}insertTable(e,t){const n=this.quill.getSelection();if(null==n)return;const i=new Array(e).fill(0).reduce((e=>{const n=new Array(t).fill("\n").join("");return e.insert(n,{table:jn()})}),(new a.a).retain(n.index));this.quill.updateContents(i,Ge.sources.USER),this.quill.setSelection(n.index,Ge.sources.SILENT),this.balanceTables()}listenBalanceCells(){this.quill.on(Ge.events.SCROLL_OPTIMIZE,(e=>{e.some((e=>!!["TD","TR","TBODY","TABLE"].includes(e.target.tagName)&&(this.quill.once(Ge.events.TEXT_CHANGE,((e,t,n)=>{n===Ge.sources.USER&&this.balanceTables()})),!0)))}))}},"modules/toolbar":Hn,"themes/bubble":dr,"themes/snow":fr,"ui/icons":Vi,"ui/picker":Ki,"ui/icon-picker":Qi,"ui/color-picker":Zi,"ui/tooltip":er},!0),t.default=Kt}]).default},99173:(e,t,n)=>{"use strict";n(76176);var i=n(14190),r=(n(89888),n(63297)),s=n(88203),a=n(2214),o=(n(8721),n(66538)),l=n(93426),u=n(79193);class c extends((0,a.Q)((0,s.P)((0,r.U)((0,l.P)([i.z],u.H3))))){static get template(){return o.d`
    <style include="chart-styles"></style>

    <div>
      <canvas id="canvas"></canvas>
    </div>
`}static get is(){return"chart-bar"}ready(){super.ready(),this._setType("bar")}_updateData(){this.data={labels:this.labels,datasets:this.values.map(((e,t)=>({data:this.values[t],label:this.series[t],fill:!0,backgroundColor:this.colors[t],borderColor:this.colors[t],borderWidth:1})))}}}window.customElements.define(c.is,c)},89888:(e,t,n)=>{"use strict";n(13507)},75517:(e,t,n)=>{"use strict";n(76176);var i=n(14190),r=(n(89888),n(63297)),s=n(88203),a=n(2214),o=(n(8721),n(66538)),l=n(93426),u=n(79193);class c extends((0,a.Q)((0,s.P)((0,r.U)((0,l.P)([i.z],u.H3))))){static get template(){return o.d`
    <style include="chart-styles"></style>

    <div>
      <canvas id="canvas"></canvas>
    </div>
`}static get is(){return"chart-line"}ready(){super.ready(),this._setType("line")}_updateData(){this.data={labels:this.labels,datasets:this.values.map(((e,t)=>({data:this.values[t],label:this.series[t],fill:!1,lineTension:0,fillColor:this.colors[t],strokeColor:this.colors[t],pointColor:this.colors[t],borderWidth:2,pointHitRadius:20,pointRadius:4,pointHoverRadius:4,pointBorderWidth:1,pointHoverBorderWidth:1,pointBorderColor:"#fff",pointStrokeColor:this.colors[t],pointBackgroundColor:this.colors[t],borderColor:this.colors[t]})))}}}window.customElements.define(c.is,c)},9841:(e,t,n)=>{"use strict";n(76176);var i=n(14190),r=(n(89888),n(63297)),s=n(88203),a=n(2214),o=(n(8721),n(66538)),l=n(93426),u=n(79193);class c extends((0,a.Q)((0,s.P)((0,r.U)((0,l.P)([i.z],u.H3))))){static get template(){return o.d`
    <style include="chart-styles"></style>

    <div>
      <canvas id="canvas"></canvas>
    </div>
`}static get is(){return"chart-pie"}ready(){super.ready(),this.options=Object.assign({legend:{display:!0,position:"bottom",labels:{boxWidth:12}},animation:!1},this.options),this._setType("pie")}_updateData(){this.data={labels:this.labels,datasets:[{data:this.values&&this.values.length&&Array.isArray(this.values[0])?this.values[0]:this.values,backgroundColor:this.colors,hoverBackgroundColor:this.colors}]}}}window.customElements.define(c.is,c)},63297:(e,t,n)=>{"use strict";n.d(t,{U:()=>i});const i=(0,n(30634).o)((function(e){return class extends e{static get properties(){return{type:{type:String,readOnly:!0,value:"bar"},chart:{notify:!0},data:{type:Object,value:function(){return{}}},options:{type:Object,value:function(){return{}}},colors:{type:Array,value:function(){return["#3366cc","#ff9900","#dc3912","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413","#2a778d","#668d1c","#bea413","#0c5922","#743411"]}},labels:{type:Array,value:function(){return[]}},values:{type:Array,value:function(){return[]}},series:{type:Array,value:function(){return[]}}}}static get observers(){return["_configurationChanged(data.*, options.*)","_updateData(colors, labels, values, series)"]}_configurationChanged(e,t){e.base.labels&&e.base.datasets?this.hasData=!0:this.hasData=!1,this.hasData&&this.isAttached&&this._queue()}}}))},8721:()=>{const e=document.createElement("template");e.innerHTML='<dom-module id="chart-styles">\n\n  <template>\n\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n\n      :host > div {\n        height: 100%;\n      }\n\n      #canvas {\n        width: 100%;\n        height: 100%;\n      }\n    </style>\n\n  </template>\n\n</dom-module>',document.head.appendChild(e.content)},88203:(e,t,n)=>{"use strict";n.d(t,{P:()=>i});const i=(0,n(30634).o)((function(e){return class extends e{_measure(e){requestAnimationFrame(function(){this.offsetHeight?e(!0):e(!1)}.bind(this))}_queue(){this.hasData&&this._measure((e=>{e&&this.updateChart()}))}updateChart(){this.async((function(){this.chart?(this.chart.stop(),this.mixin(this.chart.data,this.data),this.chart.update()):this.async((function(){this.hasData&&(this.chart=new Chart(this.ctx,{type:this.type,data:this.data,options:this.options}))}),null,0)}),null,0)}connectedCallback(){super.connectedCallback(),this.ctx=this.$.canvas.getContext("2d"),this._queue()}}}))},2214:(e,t,n)=>{"use strict";n.d(t,{Q:()=>i});const i=(0,n(30634).o)((function(e){return class extends e{connectedCallback(){super.connectedCallback(),this._boundOnIronResize=this._onIronResize.bind(this),this.addEventListener("iron-resize",this._boundOnIronResize)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundOnIronResize)}_onIronResize(){this._queue()}resize(){this.chart&&(this.chart.resize(),this.chart.render(!0))}}}))},52717:(e,t,n)=>{"use strict";n(36037);var i=n(93426),r=(n(76176),n(587),n(66538));{class e extends Nuxeo.Element{static get template(){return r.d`
        <style>
          :host {
            display: none;
          }
        </style>
        <nuxeo-connection id="nx" connection-id="[[connectionId]]"></nuxeo-connection>
      `}static get is(){return"nuxeo-es-search"}static get properties(){return{connectionId:{type:String,value:"nx"},auto:{type:Boolean,value:!1},index:{type:String,value:"nuxeo"},query:Object,aggregates:Object,type:String,aggregations:{type:Object,notify:!0,readOnly:!0},hits:{type:Object,notify:!0,readOnly:!0}}}static get observers(){return["_auto(connectionId, auto, index, query, aggregates)"]}_auto(){this.auto&&this.query&&this.aggregates&&this.execute()}execute(){return this.$.nx.connect().then(this._send.bind(this))}_send(){let e=[this.$.nx.client._baseURL,"site/es",this.index,"_search"].join("/");e=e.replace(/(^\/+)|([^:])\/\/+/g,"$2/"),this.type&&(e+=`?search_type=${this.type}`);const t={method:"POST",headers:{"Content-Type":"application/json"},body:{query:this.query,aggs:this.aggregates},url:e};return this.$.nx.request().then((e=>e.execute(t).then(this._handleResponse.bind(this)).catch(this._handleError.bind(this))))}_handleError(e,t){this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0,detail:{request:e,error:t}}))}_handleResponse(e){return this._setHits(e.hits),this._setAggregations(e.aggregations),this.dispatchEvent(new CustomEvent("results",{bubbles:!0,composed:!0,detail:{response:e}})),e}}customElements.define(e.is,e),Nuxeo.ESSearch=e}var s=n(79587);window.Nuxeo=window.Nuxeo||{},Nuxeo.AggregateDataBehavior={properties:{connectionId:{type:String,value:"nx"},index:{type:String,value:"nuxeo"},where:{type:Object,value:()=>({})},groupedBy:{type:String,value:""},groupLimit:{type:Number,value:-1},withRanges:{type:Object,value:()=>({})},startDate:{type:String,value:""},endDate:{type:String,value:""},dateField:{type:String,value:"dc:created"},withDateIntervals:{type:String,value:""},dateFormat:{type:String,value:"yyyy-MM-dd"},withoutExtendedBounds:{type:Boolean,value:!1},metrics:{type:String,value:""},metricsOperator:{type:String,value:"count"},timezone:{type:Function,value:()=>(0,s.Z)().format("Z")},query:Object,aggregates:Object,data:{type:Object,value:()=>[],notify:!0},response:{type:Object,readOnly:!0,notify:!0}},observers:["_aggregates(groupedBy, groupLimit, withRanges, withDateIntervals, metrics, metricsOperator, startDate, endDate)","_doFetch(index, query, aggregates)"],ready(){this._query(),this._aggregates()},get _metricsAggregation(){const e=this.metrics.match(/[^()]+/g);if(!e)return;let t,n;if(1===e.length)[t]=e,n=this.metricsOperator;else{if(2!==e.length)throw new Error("Invalid metrics");[n,t]=e}const i=this._fieldFor(t)||this._fieldFor(this.aggregatedOn);"count"===n&&(n="terms");const r={};let s;return s="terms"===n?r.by={}:r.metrics={},s[n]={field:i},r},_getNestedAggregation(){if(this.withDateIntervals){const e={field:this.dateField,interval:this.withDateIntervals,format:this.dateFormat,min_doc_count:0,time_zone:this.timezone};return this.withoutExtendedBounds||(this.startDate&&this.endDate?e.extended_bounds={min:this.startDate,max:this.endDate}:console.warn("Both start and end date should be set when using date aggregation with extended bounds")),{by:{date_histogram:e}}}const e=Object.keys(this.withRanges)[0];if(e)return{by:{range:{field:this._fieldFor(e),ranges:this.withRanges[e]}}}},get _topLevelAggregations(){const e=this.groupedBy.split(",").map((e=>({by:{terms:{field:this._fieldFor(e.trim())}}})));return-1!==this.groupLimit&&e.length&&(e[0].by.terms.size=this.groupLimit),e},_aggregates(){const e=[];this.groupedBy&&Array.prototype.push.apply(e,this._topLevelAggregations),(this.withDateIntervals||this.withRanges)&&e.push(this._getNestedAggregation()),this.metrics&&e.push(this._metricsAggregation);const t={};let n=t;e.forEach((e=>{if(e){const t=Object.keys(e)[0];n.aggs=e,n=e[t]}})),this.aggregates=t.aggs},fetch(){return this._search||(this._search=document.createElement("nuxeo-es-search"),this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(this._search)),this._search.connectionId=this.connectionId,this._search.index=this.index,this._search.query=this.query,this._search.aggregates=this.aggregates,this._search.execute().then(this._onResults.bind(this))},_doFetch(){this.index&&this.query&&this.aggregates&&this.debounce("do-fetch",this.fetch.bind(this))},_onResults(e){this._setResponse(e),e&&e.aggregations&&(this.data=this._unwrapAggregation(e.aggregations))},_unwrapAggregation(e){const t=e.key_as_string||e.key;let n;return n=e.by?e.by.buckets.map(this._unwrapAggregation.bind(this)):this._getMetricsValue(e),void 0!==t?{key:t,value:n}:n},_getMetricsValue:e=>e.metrics?e.metrics.value||e.metrics.values:e.doc_count,get _dateRange(){if(!this.startDate&&!this.endDate)return;const e={range:{}},t=e.range[this.dateField]={};return this.startDate&&(t.gte=this.startDate),this.endDate&&(t.lte=this.endDate),e},_fieldFor:e=>e,_buildTerms(e){return Array.isArray(this.where)?this.where.forEach((t=>{e.push(t)})):Object.keys(this.where).forEach((t=>{const n={};n[t]=this.where[t],e.push({term:n})}),this),{bool:{must:e}}}},Nuxeo.AggregateDataElement=(0,i.P)([Nuxeo.AggregateDataBehavior],Nuxeo.Element)},57392:(e,t,n)=>{"use strict";n(52717);{class e extends Nuxeo.AggregateDataElement{static get is(){return"nuxeo-audit-data"}static get properties(){return{index:{type:String,value:"audit"},eventId:{type:String,value:""},dateField:{type:String,value:"eventDate"}}}static get observers(){return["_query(eventId, where, startDate, endDate)","_aggregates(groupedBy, withRanges, withDateIntervals, metrics, metricsOperator, startDate, endDate)"]}_query(){const e=[{term:{eventId:this.eventId}}];this._dateRange&&e.push(this._dateRange),this.query=this._buildTerms(e)}}customElements.define(e.is,e),Nuxeo.AuditData=e}},79305:(e,t,n)=>{"use strict";n(52717);{class e extends Nuxeo.AggregateDataElement{static get is(){return"nuxeo-repository-data"}static get properties(){return{index:{type:String,value:"nuxeo"},dateField:{type:String,value:"dc:created"},ecmPrimaryType:{type:String,value:""},ecmLifecycleState:{type:String,value:""},ecmMixinType:{type:String,value:""}}}static get observers(){return["_query(ecmPrimaryType, ecmLifecycleState, ecmMixinType, where, startDate, endDate)","_aggregates(groupedBy, groupLimit, withRanges, withDateIntervals, metrics, metricsOperator, startDate, endDate)"]}_query(){const e=[];this.ecmPrimaryType&&e.push({terms:{"ecm:primaryType":this._splitTerms(this.ecmPrimaryType)}}),this.ecmLifecycleState&&e.push({terms:{"ecm:currentLifeCycleState":this._splitTerms(this.ecmLifecycleState)}}),this.ecmMixinType&&e.push({terms:{"ecm:mixinType":this._splitTerms(this.ecmMixinType)}}),this._dateRange&&e.push(this._dateRange),this.query=this._buildTerms(e)}_splitTerms(e){if(e)return e.split(",").map((e=>e.trim()))}}customElements.define(e.is,e),Nuxeo.RepositoryData=e}},14955:(e,t,n)=>{"use strict";n(52717);{class e extends Nuxeo.AggregateDataElement{static get is(){return"nuxeo-search-data"}static get properties(){return{index:{type:String,value:"audit"},pageProvider:String,dateField:{type:String,value:"eventDate"}}}static get observers(){return["_query(startDate, endDate, pageProvider)"]}_query(){const e=[{term:{eventId:"search"}}];this.pageProvider&&e.push({term:{"extended.pageProviderName":this.pageProvider}}),this._dateRange&&e.push(this._dateRange),this.query=this._buildTerms(e)}_fieldFor(e){return`extended.${e}`}}customElements.define(e.is,e),Nuxeo.SearchData=e}},99354:(e,t,n)=>{"use strict";n(52717);{class e extends Nuxeo.AggregateDataElement{static get is(){return"nuxeo-workflow-data"}static get properties(){return{index:{type:String,value:"audit_wf"},event:{type:String,value:""},workflow:String,task:{type:String,value:""},dateField:{type:String,value:"eventDate"}}}static get observers(){return["_query(workflow, startDate, endDate)","_aggregates(groupedBy, withRanges, withDateIntervals, metrics, metricsOperator, startDate, endDate)"]}_query(){const e=[{term:{eventId:this.event||(this.task?"afterWorkflowTaskEnded":"afterWorkflowFinish")}},{term:{"extended.modelName":this.workflow}}];this.task&&e.push({term:{"extended.taskName":this.task}}),this._dateRange&&e.push(this._dateRange),this.query=this._buildTerms(e)}_fieldFor(e){return`extended.${e}`}}customElements.define(e.is,e),Nuxeo.WorkflowData=e}},73141:(e,t,n)=>{"use strict";var i=n(66538),r=n(30032),s=n(16896);n(36037),n(24004),n(39660);{class e extends Nuxeo.Element{static get template(){return i.d`
        <style>
          :host {
            display: none;
          }
        </style>

        <nuxeo-resource
          id="res"
          path="/id/[[docId]]/@audit"
          enrichers="{{enrichers}}"
          schemas="[[schemas]]"
          loading="{{loading}}"
          headers="{{headers}}"
        >
        </nuxeo-resource>

        <nuxeo-operation
          id="auditOp"
          op="Audit.QueryWithPageProvider"
          enrichers="{{enrichers}}"
          schemas="[[schemas]]"
          loading="{{loading}}"
          headers="{{headers}}"
        >
        </nuxeo-operation>
      `}static get is(){return"nuxeo-audit-page-provider"}static get properties(){return{connectionId:{type:String,value:""},auto:{type:Boolean,value:!1},autoDelay:{type:Number,value:300},params:{type:Object,value:{}},docId:{type:String},pageSize:{type:Number,value:-1},page:{type:Number,value:1},currentPage:{type:Array,value:[],notify:!0},sort:{type:Object,value:{},notify:!0},numberOfPages:{type:Number,notify:!0},resultsCount:{type:Number,notify:!0},isNextPageAvailable:{type:Boolean,value:!1,notify:!0},currentPageSize:{type:Number,notify:!0},enrichers:{type:Object,value:{}},schemas:{type:String},headers:{type:Object,value:null},loading:{type:Boolean,notify:!0,readOnly:!0}}}static get observers(){return["_resetAndAutoFetch(params.*, docId, pageSize, sort)","_autoFetch(page)"]}_stringifyJSONObject(e){const t=e;return null!==e&&Object.keys(e).forEach((n=>{"string"==typeof e[n]?t[n]=e[n]:t[n]=JSON.stringify(e[n])})),t}fetch(){return this._isForDoc?this._fetchRes():this._fetchOp()}_fetchOp(){const e={providerName:"EVENTS_VIEW",namedQueryParams:this._stringifyJSONObject(this.params),currentPageIndex:this.page-1,pageSize:this.pageSize};return this._fetch(this.$.auditOp,e)}_fetchRes(){const e={};return this.params.startDate&&(e.startEventDate=this.params.startDate),this.params.endDate&&(e.endEventDate=this.params.endDate),this.params.eventCategory&&(e.category=this.params.eventCategory),this.params.eventIds&&(e.eventId=this.params.eventIds),this.params.principalName&&(e.principalName=this.params.principalName),e.currentPageIndex=this.page-1,e.pageSize=this.pageSize,this._fetch(this.$.res,e)}_fetch(e,t){return this._sortKeys.length>0&&(t.sortBy=this._sortKeys.join(","),t.sortOrder=this._sortValues.join(",")),e.params=t,e.execute().then((e=>(this.currentPage=e.entries.slice(0),this.numberOfPages=e.numberOfPages,this.resultsCount=e.resultsCount,this.isNextPageAvailable=e.isNextPageAvailable,this.currentPageSize=e.currentPageSize,this.dispatchEvent(new CustomEvent("update",{bubbles:!0,composed:!0})),e))).catch((e=>{throw this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{error:e}})),e}))}get _sortKeys(){return Object.keys(this.sort)}get _sortValues(){return this._sortKeys.map((e=>this.sort[e]))}get _isForDoc(){return this.docId&&this.docId.length>0}_resetAndAutoFetch(){this.page=1,this._autoFetch()}_autoFetch(){this.auto&&(this._debouncer=r.dx.debounce(this._debouncer,s.timeOut.after(this.autoDelay),(()=>this.fetch())))}}customElements.define(e.is,e),Nuxeo.AuditPageProvider=e}},84392:(e,t,n)=>{"use strict";function i(e,t){if(!e||"object"!=typeof e)throw new TypeError('The param "obj" must be a JSON object');if(!Array.isArray(t))throw new TypeError('The param "path" must be an array');if(0!==t.length)return(Object.prototype.hasOwnProperty.call(e,t[0])||e[t[0]])&&"object"==typeof e[t[0]]||(e[t[0]]={}),i(e[t[0]],t.slice(1))}n.d(t,{Z:()=>i})},50681:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(24004),n(35266),n(71560),n(3632),n(85621),n(30883)),a=n(41608),o=(n(72063),n(25297),n(79223));n(51917),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.mB,s.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          /* Fix known stacking issue in iOS (NXP-24600)
         https://github.com/PolymerElements/paper-dialog-scrollable/issues/72 */
          paper-dialog-scrollable {
            --paper-dialog-scrollable: {
              -webkit-overflow-scrolling: auto;
            }
          }
        </style>

        <nuxeo-operation
          id="addToCollectionOp"
          op="Document.AddToCollection"
          input="[[document.uid]]"
        ></nuxeo-operation>
        <nuxeo-operation id="createCollectionOp" op="Collection.Create"></nuxeo-operation>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_toggleDialog">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>

        <nuxeo-dialog id="dialog" with-backdrop no-auto-focus>
          <h2>[[i18n('addToCollectionButton.dialog.heading')]]</h2>
          <paper-dialog-scrollable>
            <nuxeo-selectivity
              id="nxSelect"
              label="[[i18n('addToCollectionButton.dialog.collections')]]"
              required
              operation="Collection.Suggestion"
              min-chars="0"
              placeholder="[[i18n('addToCollectionButton.dialog.select')]]"
              value="{{collection}}"
              tagging="true"
              query-results-filter="[[resultsFilter]]"
              result-formatter="[[resultFormatter]]"
              selection-formatter="[[selectionFormatter]]"
              new-entry-formatter="[[newEntryFormatter]]"
            >
            </nuxeo-selectivity>
            <nuxeo-textarea
              label="[[i18n('addToCollectionButton.dialog.description')]]"
              value="{{description::input}}"
              hidden$="[[!_isNew(collection)]]"
            >
            </nuxeo-textarea>
          </paper-dialog-scrollable>
          <div class="buttons">
            <paper-button dialog-dismiss on-click="_resetPopup" class="secondary"
              >[[i18n('addToCollectionButton.dialog.cancel')]]</paper-button
            >
            <paper-button
              dialog-confirm
              class="primary"
              name="add"
              on-click="_add"
              disabled$="[[!_isValid(collection)]]"
            >
              [[i18n('addToCollectionButton.dialog.add')]]
            </paper-button>
          </div>
        </nuxeo-dialog>
      `}static get is(){return"nuxeo-add-to-collection-button"}static get properties(){return{document:Object,icon:{type:String,value:"nuxeo:collections"},collection:{type:String,value:""},resultsFilter:{type:Function,value(){return this._resultsFilter.bind(this)}},resultFormatter:{type:Function,value(){return this._resultFormatter.bind(this)}},selectionFormatter:{type:Function,value(){return this._selectionFormatter.bind(this)}},newEntryFormatter:{type:Function,value(){return this._newEntryFormatter.bind(this)}},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_isAvailable(e){return this.isCollectionMember(e)}_computeLabel(){return this.i18n("addToCollectionButton.tooltip")}_toggleDialog(){this.$.dialog.toggle()}_add(){if(this._isNew()){const e=this.$$("#createCollectionOp"),t=this.$.nxSelect.selectedItem.displayLabel;return e.params={name:t,description:this.description},e.execute().then((e=>{this.collection=e.uid,this._addToCollection()}))}this._addToCollection()}_addToCollection(){const e=this.$$("#addToCollectionOp");return e.params={collection:this.collection},e.execute().then((()=>{this.dispatchEvent(new CustomEvent("added-to-collection",{composed:!0,bubbles:!0,detail:{docId:this.document.uid,collectionId:this.collection}})),this._resetPopup()}))}_resultsFilter(e){return e.id&&-1===e.id.indexOf("-999999")}_resultFormatter(e){const t=e.displayLabel||e.title;return-1===e.id?`<iron-icon icon="nuxeo:add" item-icon></iron-icon>${t}`:(0,o.r)(t)}_selectionFormatter(e){const t=e.displayLabel||e.title;return-1===e.id?t:(0,o.r)(t)}_newEntryFormatter(e){return{id:-1,displayLabel:e}}_isValid(){return""!==this.collection}_isNew(){return-1===this.collection}_resetPopup(){this.set("collection",null),this.description=""}}customElements.define(e.is,e),Nuxeo.AddToCollectionButton=e}},99250:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(24004),n(35266),n(3632),n(85621),n(30883)),a=n(41608);n(72063),n(25297),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.mB,s.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles"></style>

        <nuxeo-operation
          id="operation"
          op="Blob.RemoveFromDocument"
          input="[[document.uid]]"
          params="[[_params(xpath)]]"
        >
        </nuxeo-operation>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_toggleDialog">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>

        <nuxeo-dialog id="dialog" with-backdrop>
          <h2>[[i18n('deleteBlobButton.dialog.heading')]]</h2>
          <div>[[i18n('deleteBlobButton.dialog.message')]]</div>
          <div class="buttons">
            <paper-button dialog-dismiss class="secondary">[[i18n('deleteBlobButton.dialog.no')]]</paper-button>
            <paper-button dialog-confirm on-click="_remove" class="primary"
              >[[i18n('deleteBlobButton.dialog.yes')]]</paper-button
            >
          </div>
        </nuxeo-dialog>
      `}static get is(){return"nuxeo-delete-blob-button"}static get properties(){return{document:Object,xpath:{type:String,value:"file:content"},icon:{type:String,value:"nuxeo:remove"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_isAvailable(e){return e&&this.hasPermission(e,"WriteProperties")&&!this.isImmutable(e)&&!this.hasType(e,"Root")&&!this.isTrashed(e)&&!(e.isRecord&&"file:content"!==this.xpath)&&!(this.isUnderRetentionOrLegalHold(e)&&"file:content"===this.xpath)}_computeLabel(){return this.i18n("deleteBlobButton.tooltip")}_toggleDialog(){this.$.dialog.toggle()}_params(e){return{xpath:e.startsWith("files:")?e.split("/file")[0]:e}}_remove(){this.$.operation.execute().then((()=>{this.dispatchEvent(new CustomEvent("file-deleted",{composed:!0,bubbles:!0}))}))}}customElements.define(e.is,e),Nuxeo.DeleteBlobButton=e}},52603:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(24004),n(35266),n(3632),n(85621),n(30883)),a=n(41608);n(72063),n(25297),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.mB,s.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles"></style>

        <nuxeo-operation id="deleteOp" op="Document.Delete" input="[[document.uid]]" sync-indexing></nuxeo-operation>

        <nuxeo-operation id="trashOp" op="Document.Trash" input="[[document.uid]]" sync-indexing></nuxeo-operation>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_delete">
              <paper-icon-button icon="[[icon]]" noink id="deleteButton"></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-delete-document-button"}static get properties(){return{document:Object,icon:{type:String,value:"nuxeo:delete",computed:"_computeIcon(hard)"},hard:{type:Boolean,value:!1},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(hard, i18n)"}}}_isAvailable(e){return!this.isVersion(e)&&this.hasPermission(e,"Remove")&&(!this.isTrashed(e)||this.hard)&&!this.isUnderRetentionOrLegalHold(e)}_computeIcon(e){return e?"nuxeo:delete-permanently":"nuxeo:delete"}_computeLabel(e){return this.i18n(e?"deleteButton.tooltip.permanently":"deleteButton.tooltip")}_delete(){window.confirm(this.i18n("deleteButton.confirm"))&&(this.hard?this.$.deleteOp:this.$.trashOp).execute().then((()=>{this.dispatchEvent(new CustomEvent("document-deleted",{composed:!0,bubbles:!0,detail:{doc:this.document,hard:this.hard}}))})).catch((e=>{this.dispatchEvent(new CustomEvent("document-deleted",{composed:!0,bubbles:!0,detail:{doc:this.document,error:e,hard:this.hard}}))}))}}customElements.define(e.is,e),Nuxeo.DeleteDocumentButton=e}},22464:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(3632),n(85621),n(30883)),a=n(69699);n(72063),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.e,s.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles"></style>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_download">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-download-button"}static get properties(){return{document:Object,icon:{type:String,value:"nuxeo:download"},xpath:{type:String,value:"file:content"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_isAvailable(e){return this.hasContent(e,this.formatPropertyXpath(this.xpath))}_computeLabel(){return this.i18n("downloadButton.tooltip")}_download(){const e=this.document&&this._deepFind(this.document.properties,this.xpath);e&&(window.location.href=e.data)}_deepFind(e,t){for(let n=0,i=t.split("/"),r=i.length;n<r&&e&&e!==[];n++)e=e[i[n]];return e}}customElements.define(e.is,e),Nuxeo.DownloadButton=e}},41180:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(35266),n(3632),n(85621),n(55689),n(69699));n(72063),n(25297),n(23550),n(43822),n(26343);{class e extends((0,r.P)([s.e],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          .item {
            @apply --layout-horizontal;
            @apply --layout-center;
            padding-top: 0.4em;
            padding-bottom: 0.4em;
          }

          .item iron-icon {
            margin-right: 1em;
          }
        </style>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_toggleDialog">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>

        <nuxeo-dialog id="dialog" with-backdrop>
          <h2>[[i18n('exportButton.dialog.heading')]]</h2>

          <dom-repeat items="[[_filterRenditions(document, i18n)]]">
            <template>
              <div class="item">
                <iron-icon src="[[item.icon]]"></iron-icon><a href="[[item.url]]" download>[[item.label]]</a>
              </div>
            </template>
          </dom-repeat>

          <div class="buttons">
            <paper-button dialog-dismiss class="secondary">[[i18n('exportButton.dialog.cancel')]]</paper-button>
          </div>
        </nuxeo-dialog>
      `}static get is(){return"nuxeo-export-button"}static get properties(){return{document:Object,icon:{type:String,value:"nuxeo:export"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_isAvailable(e){return e}_computeLabel(){return this.i18n("exportButton.tooltip")}_toggleDialog(){this.$.dialog.toggle()}_filterRenditions(e){return e&&e.contextParameters&&e.contextParameters.renditions?e.contextParameters.renditions.filter((e=>"nuxeo:video:conversion"!==e.kind&&"nuxeo:picture:conversion"!==e.kind)).map((e=>Object.assign({label:this.formatRendition(e.name)},e))):[]}}customElements.define(e.is,e),Nuxeo.ExportButton=e}},67745:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(24004),n(3632),n(85621),n(30883)),a=n(41608);n(72063),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.mB,s.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          :host([favorite]) paper-icon-button {
            color: var(--icon-toggle-pressed-color, var(--nuxeo-action-color-activated));
          }
        </style>

        <nuxeo-operation id="opAdd" op="Document.AddToFavorites" input="[[document.uid]]"></nuxeo-operation>
        <nuxeo-operation id="opRemove" op="Document.RemoveFromFavorites" input="[[document.uid]]"></nuxeo-operation>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-favorites-toggle-button"}static get properties(){return{document:{type:Object,observer:"_documentChanged"},icon:{type:String,value:"nuxeo:favorites"},favorite:{type:Boolean,readOnly:!0,notify:!0,reflectToAttribute:!0},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(favorite, i18n)"}}}ready(){super.ready(),this.removeFromFavoritesHandler=e=>{this.document&&e.detail.docUid&&e.detail.docUid===this.document.uid&&this._setFavorite(!1)},window.addEventListener("removed-from-favorites",this.removeFromFavoritesHandler),this.addEventListener("click",this._toggle)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("removed-from-favorites",this.removeFromFavoritesHandler),this.removeFromFavoritesHandler=null}_isAvailable(e){return this.isCollectionMember(e)}_toggle(){this.favorite?this.$.opRemove.execute().then((()=>{this.dispatchEvent(new CustomEvent("removed-from-favorites",{composed:!0,bubbles:!0,detail:{doc:this.document}})),this._setFavorite(!1)})):this.$.opAdd.execute().then((()=>{this.dispatchEvent(new CustomEvent("added-to-favorites",{composed:!0,bubbles:!0,detail:{doc:this.document}})),this._setFavorite(!0)}))}_computeLabel(e){return this.i18n&&this.i18n("favoritesToggleButton.tooltip."+(e?"remove":"add"))}_documentChanged(){this._setFavorite(this.isFavorite(this.document))}}customElements.define(e.is,e),Nuxeo.FavoritesToggleButton=e}},37371:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(36037),n(3632),n(41608));n(49085),n(23550),n(43822),n(26343);{class e extends((0,r.P)([s.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          .action {
            text-decoration: none;
            color: var(--nuxeo-text-default);
          }
        </style>

        <template is="dom-if" if="[[_isAvailable(href, icon, iconSrc)]]">
          <a class="action" href="[[href]]" tabindex="-1" target="[[target]]">
            <paper-icon-button src="[[iconSrc]]" icon="[[icon]]" noink></paper-icon-button>
            <span class="label" hidden$="[[!showLabel]]">[[i18n(label)]]</span>
            <nuxeo-tooltip>[[i18n(label)]]</nuxeo-tooltip>
          </a>
        </template>
      `}static get is(){return"nuxeo-link-button"}static get properties(){return{href:String,target:String,iconSrc:String,icon:String,showLabel:{type:Boolean,value:!1},label:String}}_isAvailable(){return this.href&&(this.icon||this.iconSrc)}}customElements.define(e.is,e),Nuxeo.LinkButton=e}},73938:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(587),n(36037),n(24004),n(3632),n(85621),n(30883)),a=n(69699),o=n(41608);n(72063),n(23550),n(43822),n(26343);{class e extends((0,r.P)([o.mB,s.q,a.e],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          :host([locked]) paper-icon-button {
            color: var(--icon-toggle-outline-color, var(--nuxeo-action-color-activated));
          }
        </style>

        <nuxeo-connection id="nxcon"></nuxeo-connection>

        <nuxeo-operation id="opLock" op="Document.Lock" input="[[document.uid]]" headers='{"fetch-document": "lock"}'>
        </nuxeo-operation>
        <nuxeo-operation
          id="opUnlock"
          op="Document.Unlock"
          input="[[document.uid]]"
          headers='{"fetch-document": "lock"}'
        >
        </nuxeo-operation>

        <dom-if if="[[_isAvailable(document, locked)]]">
          <template>
            <div class="action">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[tooltip]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-lock-toggle-button"}static get properties(){return{document:{type:Object,observer:"_documentChanged"},icon:{type:String,computed:"_computeIcon(locked)"},locked:{type:Boolean,notify:!0,reflectToAttribute:!0},tooltip:{type:String,notify:!0,computed:"_computeTooltip(locked, i18n, document)"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(locked, i18n)"}}}ready(){super.ready(),this.addEventListener("click",this._toggle)}_isAvailable(e,t){return e&&!e.isVersion&&!this.isImmutable(e)&&"Root"!==e.type&&(this.hasPermission(e,"Write")||t&&this.hasPermission(e,"Read"))}_toggle(){!this.locked&&this._canLock()?this.$.opLock.execute().then((e=>{this.locked=!0,this.dispatchEvent(new CustomEvent("document-locked",{composed:!0,bubbles:!0,detail:{doc:e}}))})).catch(this._handleError.bind(this)):this._canUnlock()&&this.$.opUnlock.execute().then((e=>{this.locked=!1,this.dispatchEvent(new CustomEvent("document-unlocked",{composed:!0,bubbles:!0,detail:{doc:e}}))})).catch(this._handleError.bind(this))}_handleError(e){const t=`lockToggleButton.${this.locked?"unlock":"lock"}.error`;let n;switch(e.response.status){case 403:n=this.i18n(`${t}.noPermissions`);break;case 409:n=this.i18n(`${t}.${this.locked?"lockedByAnotherUser":"alreadyLocked"}`);break;default:n=this.i18n(`${t}.unexpectedError`)}this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:n}}))}_computeTooltip(e){return e&&this.document.lockOwner&&this.document.lockCreated?this.i18n("lockToggleButton.tooltip.lockedBy",this.document.lockOwner,this.formatDate(this.document.lockCreated)):this.i18n("lockToggleButton.tooltip."+(e?"unlock":"lock"))}_computeLabel(e){return this.i18n("lockToggleButton.tooltip."+(e?"unlock":"lock"))}_computeIcon(e){return e?"nuxeo:lock":"nuxeo:unlock"}_documentChanged(){this.locked=!(!this.document||!this.document.lockCreated)}_canLock(){return this.$.nxcon.connect().then((e=>!this.document.isProxy&&!this.document.isVersion&&(e.isAdministrator||this.document.contextParameters.permissions.indexOf("Everything")>-1||this.document.contextParameters.permissions.indexOf("Write")>-1)))}_canUnlock(){return this.$.nxcon.connect().then((e=>!this.document.isProxy&&(!!(e.isAdministrator||this.document.contextParameters.permissions.indexOf("Everything")>-1)||e.id===this.document.lockOwner&&this.document.contextParameters.permissions.indexOf("Write")>-1)&&!document.isVersion))}}customElements.define(e.is,e),Nuxeo.LockToggleButton=e}},37638:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(36037),n(24004),n(3632),n(85621),n(41608));n(72063),n(23550),n(43822),n(26343);{class e extends((0,r.P)([s.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          iron-icon:hover {
            fill: var(--nuxeo-link-hover-color);
          }
        </style>

        <nuxeo-operation
          id="moveDownOp"
          op="Document.Order"
          params="[[_computeParams(_beforeUid)]]"
          input="[[_sortedDocuments]]"
          sync-indexing
        >
        </nuxeo-operation>

        <dom-if id="availability" if="[[_available]]">
          <template>
            <div class="action">
              <paper-icon-button noink icon="icons:arrow-downward"></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-move-documents-down-button"}static get properties(){return{documents:Array,selectedDocuments:Array,tooltipPosition:{type:String,value:"bottom"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"},_available:Boolean,_beforeUid:Document,_sortedDocuments:Array}}static get observers(){return["_isAvailable(selectedDocuments.splices)"]}ready(){super.ready(),this.addEventListener("click",this.move)}move(){this.$.moveDownOp.execute().then((()=>{for(let e=0;e<this._sortedDocuments.length;e++)this.documents.splice(this.documents.indexOf(this._sortedDocuments[e]),1),this.documents.splice(this._focusIndex,0,this._sortedDocuments[e]);this._sortedDocuments=[],this.dispatchEvent(new CustomEvent("refresh-display",{composed:!0,bubbles:!0,detail:{focusIndex:this._focusIndex+1}}))})).catch((()=>{this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this.i18n("moveDocumentButton.error")}}))}))}_isAvailable(){if(this._available=!1,this.selectedDocuments&&this.selectedDocuments.length>0){this._sortedDocuments=this.selectedDocuments.slice(0);try{this._sortedDocuments.sort(((e,t)=>{const n=this.documents.indexOf(e),i=this.documents.indexOf(t);if(n<0||i<0)throw new Error("Document is not in the list.");return i-n}))}catch(e){return void this.dispatchEvent(new CustomEvent("clear-selected-items",{composed:!0,bubbles:!0}))}let e;const t=this._sortedDocuments.every(((t,n)=>!(n>0&&this._sortedDocuments[n-1].uid!==this.documents[this.documents.indexOf(t)+1].uid&&(e=n,1))));if(this._sortedDocuments[0].uid===this.documents[this.documents.length-1].uid){if(t)return;this._focusIndex=this.documents.indexOf(this._sortedDocuments[0])-e,this._sortedDocuments.splice(0,e),this._beforeUid=this.documents[this._focusIndex+1].uid}else{const e=this.documents.indexOf(this._sortedDocuments[0]);e<this.documents.length-2?(this._beforeUid=this.documents[e+2].uid,this._focusIndex=e+1):(this._beforeUid=null,this._focusIndex=this.documents.length-1)}this._sortedDocuments.sort(((e,t)=>this.documents.indexOf(e)-this.documents.indexOf(t))),this._available=!0}}_computeLabel(){return this.i18n("moveDocumentButton.down.tooltip")}_computeParams(){return this._beforeUid?{before:this._beforeUid}:{}}}customElements.define(e.is,e),Nuxeo.MoveDocumentsDown=e}},84806:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(36037),n(24004),n(3632),n(85621),n(41608));n(72063),n(23550),n(43822),n(26343);{class e extends((0,r.P)([s.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          iron-icon:hover {
            fill: var(--nuxeo-link-hover-color);
          }
        </style>

        <nuxeo-operation
          id="moveUpOp"
          op="Document.Order"
          params='{"before": "[[_beforeUid]]"}'
          input="[[_sortedDocuments]]"
          sync-indexing
        >
        </nuxeo-operation>

        <dom-if id="availability" if="[[_available]]">
          <template>
            <div class="action">
              <paper-icon-button noink icon="icons:arrow-upward"></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-move-documents-up-button"}static get properties(){return{documents:Array,selectedDocuments:Array,tooltipPosition:{type:String,value:"bottom"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"},_available:Boolean,_beforeUid:Document,_sortedDocuments:Array}}static get observers(){return["_isAvailable(selectedDocuments.splices)"]}ready(){super.ready(),this.addEventListener("click",this.move)}move(){this.$.moveUpOp.execute().then((()=>{for(let e=this._sortedDocuments.length-1;e>=0;e--)this.documents.splice(this.documents.indexOf(this._sortedDocuments[e]),1),this.documents.splice(this._focusIndex,0,this._sortedDocuments[e]);this._sortedDocuments=[],this.dispatchEvent(new CustomEvent("refresh-display",{composed:!0,bubbles:!0,detail:{focusIndex:this._focusIndex}}))})).catch((()=>{this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this.i18n("moveDocumentButton.error")}}))}))}_isAvailable(){if(this._available=!1,this.selectedDocuments&&this.selectedDocuments.length>0){this._sortedDocuments=this.selectedDocuments.slice(0);try{this._sortedDocuments.sort(((e,t)=>{const n=this.documents.indexOf(e),i=this.documents.indexOf(t);if(n<0||i<0)throw new Error("Document is not in the list.");return n-i}))}catch(e){return void this.dispatchEvent(new CustomEvent("clear-selected-items",{composed:!0,bubbles:!0,detail:{}}))}let e;const t=this._sortedDocuments.every(((t,n)=>!(n>0&&this._sortedDocuments[n-1].uid!==this.documents[this.documents.indexOf(t)-1].uid&&(e=n,1))));if(this._sortedDocuments[0].uid===this.documents[0].uid){if(t)return;this._focusIndex=this.documents.indexOf(this._sortedDocuments[e-1])+1,this._sortedDocuments.splice(0,e)}else this._focusIndex=this.documents.indexOf(this._sortedDocuments[0])-1;this._beforeUid=this.documents[this._focusIndex].uid,this._available=!0}}_computeLabel(){return this.i18n("moveDocumentButton.up.tooltip")}}customElements.define(e.is,e),Nuxeo.MoveDocumentsDown=e}},28117:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(95671),n(36037),n(24004),n(3632),n(85621),n(41608)),a=n(30883);n(72063),n(23550),n(43822),n(26343);{class e extends((0,r.P)([s.mB,a.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          :host([subscribed]) paper-icon-button {
            color: var(--icon-toggle-outline-color, var(--nuxeo-action-color-activated));
          }
        </style>

        <nuxeo-operation id="opSubscribe" op="Document.Subscribe" input="[[document.uid]]"></nuxeo-operation>
        <nuxeo-operation id="opUnsubscribe" op="Document.Unsubscribe" input="[[document.uid]]"></nuxeo-operation>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-notifications-toggle-button"}static get properties(){return{document:{type:Object,observer:"_documentChanged"},icon:{type:String,value:"nuxeo:notify"},subscribed:{type:Boolean,notify:!0,reflectToAttribute:!0},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(subscribed, i18n)"}}}ready(){super.ready(),this.documentUnsubscribedHandler=e=>{this.document&&e.detail.docUid&&e.detail.docUid===this.document.uid&&(this.subscribed=!1)},window.addEventListener("document-unsubscribed",this.documentUnsubscribedHandler),this.addEventListener("click",this._toggle)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("document-unsubscribed",this.documentUnsubscribedHandler),this.documentUnsubscribedHandler=null}_isAvailable(e){return e&&!e.isVersion}_toggle(){this.subscribed?this.$.opUnsubscribe.execute().then((()=>{this.dispatchEvent(new CustomEvent("document-unsubscribed",{composed:!0,bubbles:!0,detail:{doc:this.document}})),this.subscribed=!1})):this.$.opSubscribe.execute().then((()=>{this.dispatchEvent(new CustomEvent("document-subscribed",{composed:!0,bubbles:!0,detail:{doc:this.document}})),this.subscribed=!0}))}_computeLabel(e){return this.i18n("notificationsToggleButton.tooltip."+(e?"doNotNotify":"notify"))}_documentChanged(){this.subscribed=this.isSubscribed(this.document)}}customElements.define(e.is,e),Nuxeo.NotificationsToggleButton=e}},66542:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(3632),n(85621),n(30883)),a=n(69699);n(78919),n(72063),n(25297),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.e,s.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          #close-icon {
            position: absolute;
            right: -12px;
            top: -12px;
            width: 25px;
            height: 25px;
            border: 1px solid rgba(0, 0, 0, 0.4);
            padding: 3px;
            background: var(--nuxeo-secondary-color);
            color: var(--nuxeo-button-primary-text);
          }

          #close-icon:hover {
            border-color: var(--nuxeo-primary-color);
          }

          nuxeo-dialog {
            width: 100%;
            height: 100%;
            min-width: 480px;
          }

          nuxeo-dialog > nuxeo-document-preview {
            height: 100%;
          }

          nuxeo-dialog > * {
            margin: 0;
            padding: 0;
          }

          nuxeo-dialog > nuxeo-document-preview ::slotted(audio) {
            height: 50%;
          }
        </style>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_toggleDialog">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>

            <nuxeo-dialog on-iron-overlay-closed="_previewClosed" id="dialog" with-backdrop>
              <template>
                <nuxeo-document-preview id="preview" document="[[document]]" xpath="[[xpath]]"></nuxeo-document-preview>
                <paper-icon-button
                  id="close-icon"
                  icon="nuxeo:clear"
                  on-click="_toggleDialog"
                  noink
                ></paper-icon-button>
              </template>
            </nuxeo-dialog>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-preview-button"}static get properties(){return{document:Object,xpath:{type:String,value:"file:content"},icon:{type:String,value:"nuxeo:preview"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_previewClosed(){this.$$("#preview").stop()}_isAvailable(e){return this.hasContent(e,this.formatPropertyXpath(this.xpath))}_computeLabel(){return this.i18n("previewButton.tooltip")}_toggleDialog(){this.$$("#dialog").toggle()}}customElements.define(e.is,e),Nuxeo.PreviewButton=e}},94616:(e,t,n)=>{"use strict";var i=n(66538),r=n(30032),s=n(16896),a=n(93426),o=(n(75343),n(43384),n(93366),n(95671),n(36037),n(35266),n(3632),n(94131),n(85621),n(41608));n(72063),n(25297),n(49085),n(23550),n(43822),n(26343);{class e extends((0,a.P)([o.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          .horizontal {
            @apply --layout-horizontal;
            @apply --layout-center;
            @apply --layout-justified;
          }

          .selected {
            color: var(--nuxeo-primary-color, #0066ff);
            pointer-events: none;
          }

          iron-icon {
            cursor: pointer;
            margin: 20px 0 0 10px;
          }

          iron-icon:hover {
            color: var(--nuxeo-primary-color, #0066ff);
          }

          nuxeo-input {
            cursor: text;
            overflow: hidden;
            @apply --layout-flex;
          }
        </style>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_toggleDialog">
              <paper-icon-button id="shareBtn" icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>

        <nuxeo-dialog id="dialog" with-backdrop>
          <div>
            <h2>[[i18n('shareButton.dialog.heading')]]</h2>
          </div>
          <div id="permanent" class="horizontal">
            <nuxeo-input
              id="permalink"
              label="[[i18n('shareButton.link.label', document.properties.dc:title)]]"
              value="[[_buildPermalink(document)]]"
              readonly
            >
            </nuxeo-input>
            <iron-icon id="permalinkIcon" name="permalinkIcon" icon="link" on-tap="_copyLink"></iron-icon>
            <nuxeo-tooltip id="tooltip" for="permalinkIcon">[[i18n('shareButton.operation.copy')]]</nuxeo-tooltip>
          </div>

          <div class="buttons">
            <paper-button dialog-dismiss class="primary">[[i18n('shareButton.dialog.close')]]</paper-button>
          </div>
        </nuxeo-dialog>
      `}static get is(){return"nuxeo-share-button"}static get properties(){return{document:Object,icon:{type:String,value:"nuxeo:share"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_isAvailable(e){return e}_computeLabel(){return this.i18n("shareButton.tooltip")}_toggleDialog(){this.$.dialog.toggle()}_buildPermalink(e){return e?`${window.location.origin+window.location.pathname}#!/doc/${e.uid}`:""}_copyLink(e){const t=e.currentTarget,n=t.previousElementSibling;n.$.paperInput.$.nativeInput.select(),window.document.execCommand("copy")&&(t._debouncer=r.dx.debounce(t._debouncer,s.timeOut.after(2e3),(()=>{n.$.paperInput.$.nativeInput.setSelectionRange(0,0),n.$.paperInput.blur(),t.set("icon","link"),t.classList.remove("selected")})),t.set("icon","check"),t.classList.add("selected"),this.fire("notify",{message:this.i18n("shareButton.operation.copied"),duration:2e3}))}}customElements.define(e.is,e),Nuxeo.ShareButton=e}},85109:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(36037),n(24004),n(35266),n(3632),n(85621),n(30883)),a=n(41608);n(72063),n(25297),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.mB,s.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles"></style>

        <nuxeo-operation id="operation" op="Document.Untrash" input="[[document.uid]]" sync-indexing> </nuxeo-operation>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_untrash">
              <paper-icon-button icon="[[icon]]" noink id="untrashButton"></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-untrash-document-button"}static get properties(){return{document:Object,icon:{type:String,value:"nuxeo:restore-deleted"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_isAvailable(e){return e&&this.isTrashed(e)&&this.hasPermission(e,"Write")}_computeLabel(){return this.i18n("untrashButton.tooltip")}_untrash(){this.$.operation.execute().then((e=>{this.dispatchEvent(new CustomEvent("document-untrashed",{composed:!0,bubbles:!0,detail:{doc:e}}))})).catch((e=>{this.dispatchEvent(new CustomEvent("document-untrashed",{composed:!0,bubbles:!0,detail:{error:e}}))}))}}customElements.define(e.is,e),Nuxeo.UntrashDocumentButton=e}},33078:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(93366),n(95671),n(36037),n(39660),n(35266),n(3632),n(12952),n(85621),n(55689),n(41608)),a=n(30883);n(72063),n(25297),n(95918),n(23550),n(43822),n(26343);{class e extends((0,r.P)([a.q,s.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles nuxeo-button-styles">
          nuxeo-select {
            max-width: 380px;
          }
        </style>

        <nuxeo-resource id="workflows" path="/id/[[document.uid]]/@workflow"></nuxeo-resource>

        <dom-if if="[[_isAvailable(document)]]">
          <template>
            <div class="action" on-click="_toggleDialog">
              <paper-icon-button icon="[[icon]]" noink></paper-icon-button>
              <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
              <nuxeo-tooltip>[[_label]]</nuxeo-tooltip>
            </div>

            <nuxeo-dialog id="dialog" with-backdrop>
              <h2>[[i18n('workflowButton.dialog.heading')]]</h2>

              <nuxeo-select
                label="[[i18n('workflowButton.dialog.placeholder')]]"
                selected="{{selectedProcess}}"
                attr-for-selected="key"
              >
                <dom-repeat items="[[processes]]" as="process">
                  <template>
                    <paper-item key="[[process.workflowModelName]]">[[i18n(process.title)]]</paper-item>
                  </template>
                </dom-repeat>
              </nuxeo-select>

              <div class="buttons">
                <paper-button dialog-dismiss class="secondary">[[i18n('workflowButton.dialog.close')]]</paper-button>
                <paper-button id="startButton" class="primary" disabled="[[!selectedProcess]]" on-click="_startWorkflow"
                  >[[i18n('workflowButton.dialog.start')]]</paper-button
                >
              </div>
            </nuxeo-dialog>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-workflow-button"}static get properties(){return{document:{type:Object,observer:"_documentChanged"},processes:{type:Array},selectedProcess:{type:String},workflows:{type:Object,observer:"_workflowsChanged"},icon:{type:String,value:"nuxeo:workflow"},showLabel:{type:Boolean,value:!1},_label:{type:String,computed:"_computeLabel(i18n)"}}}_isAvailable(e){return!(!e||this.isRecord(e))&&this.hasRunnableWorkflows(e)&&!this.hasRunningWorkflows(e)}_computeLabel(){return this.i18n("workflowButton.tooltip")}_toggleDialog(){this.$$("#startButton").removeAttribute("disabled"),this.$$("#dialog").toggle()}_startWorkflow(){this.$$("#startButton").setAttribute("disabled",!0),this.workflows=this.$.workflows,this.$.workflows.data={"entity-type":"workflow",workflowModelName:this.selectedProcess,attachedDocumentIds:[this.document.uid]},this.workflows.post().then((e=>{this.dispatchEvent(new CustomEvent("workflowStarted",{composed:!0,bubbles:!0,detail:{workflow:e}})),this.$$("#dialog").toggle()}))}_workflowsChanged(){this.hasWorkflowRunning=this.workflows&&this.workflows.length>0}_documentChanged(){this.document&&(this.processes=this.document.contextParameters.runnableWorkflows,this.workflows=this.document.contextParameters.runningWorkflows,this.selectedProcess=this.processes.length>0?this.processes[0].workflowModelName:null)}}customElements.define(e.is,e),Nuxeo.WorkflowButton=e}},15855:(e,t,n)=>{"use strict";n(587),n(36037),n(12052),n(40629),n(59106);var i=n(66538),r=n(74153),s=n(93426),a=Math.PI,o=2*a,l=1e-6,u=o-l;function c(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function d(){return new c}c.prototype=d.prototype={constructor:c,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,i){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(e,t,n,i,r,s){this._+="C"+ +e+","+ +t+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(e,t,n,i,r){e=+e,t=+t,n=+n,i=+i,r=+r;var s=this._x1,o=this._y1,u=n-e,c=i-t,d=s-e,h=o-t,p=d*d+h*h;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(p>l)if(Math.abs(h*u-c*d)>l&&r){var m=n-s,f=i-o,g=u*u+c*c,_=m*m+f*f,v=Math.sqrt(g),y=Math.sqrt(p),b=r*Math.tan((a-Math.acos((g+p-_)/(2*v*y)))/2),x=b/y,w=b/v;Math.abs(x-1)>l&&(this._+="L"+(e+x*d)+","+(t+x*h)),this._+="A"+r+","+r+",0,0,"+ +(h*m>d*f)+","+(this._x1=e+w*u)+","+(this._y1=t+w*c)}else this._+="L"+(this._x1=e)+","+(this._y1=t)},arc:function(e,t,n,i,r,s){e=+e,t=+t,s=!!s;var c=(n=+n)*Math.cos(i),d=n*Math.sin(i),h=e+c,p=t+d,m=1^s,f=s?i-r:r-i;if(n<0)throw new Error("negative radius: "+n);null===this._x1?this._+="M"+h+","+p:(Math.abs(this._x1-h)>l||Math.abs(this._y1-p)>l)&&(this._+="L"+h+","+p),n&&(f<0&&(f=f%o+o),f>u?this._+="A"+n+","+n+",0,1,"+m+","+(e-c)+","+(t-d)+"A"+n+","+n+",0,1,"+m+","+(this._x1=h)+","+(this._y1=p):f>l&&(this._+="A"+n+","+n+",0,"+ +(f>=a)+","+m+","+(this._x1=e+n*Math.cos(r))+","+(this._y1=t+n*Math.sin(r))))},rect:function(e,t,n,i){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}};const h=d;function p(e){return function(){return e}}var m=Math.abs,f=Math.atan2,g=Math.cos,_=Math.max,v=Math.min,y=Math.sin,b=Math.sqrt,x=1e-12,w=Math.PI,k=w/2,M=2*w;function L(e){return e>1?0:e<-1?w:Math.acos(e)}function S(e){return e>=1?k:e<=-1?-k:Math.asin(e)}function D(e){return e.innerRadius}function E(e){return e.outerRadius}function T(e){return e.startAngle}function P(e){return e.endAngle}function C(e){return e&&e.padAngle}function Y(e,t,n,i,r,s,a,o){var l=n-e,u=i-t,c=a-r,d=o-s,h=d*l-c*u;if(!(h*h<x))return[e+(h=(c*(t-s)-d*(e-r))/h)*l,t+h*u]}function A(e,t,n,i,r,s,a){var o=e-n,l=t-i,u=(a?s:-s)/b(o*o+l*l),c=u*l,d=-u*o,h=e+c,p=t+d,m=n+c,f=i+d,g=(h+m)/2,v=(p+f)/2,y=m-h,x=f-p,w=y*y+x*x,k=r-s,M=h*f-m*p,L=(x<0?-1:1)*b(_(0,k*k*w-M*M)),S=(M*x-y*L)/w,D=(-M*y-x*L)/w,E=(M*x+y*L)/w,T=(-M*y+x*L)/w,P=S-g,C=D-v,Y=E-g,A=T-v;return P*P+C*C>Y*Y+A*A&&(S=E,D=T),{cx:S,cy:D,x01:-c,y01:-d,x11:S*(r/k-1),y11:D*(r/k-1)}}function O(){}function N(e){return null==e?O:function(){return this.querySelector(e)}}function j(){return[]}function q(e){return new Array(e.length)}function R(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}function I(e,t,n,i,r,s){for(var a,o=0,l=t.length,u=s.length;o<u;++o)(a=t[o])?(a.__data__=s[o],i[o]=a):n[o]=new R(e,s[o]);for(;o<l;++o)(a=t[o])&&(r[o]=a)}function H(e,t,n,i,r,s,a){var o,l,u,c={},d=t.length,h=s.length,p=new Array(d);for(o=0;o<d;++o)(l=t[o])&&(p[o]=u="$"+a.call(l,l.__data__,o,t),u in c?r[o]=l:c[u]=l);for(o=0;o<h;++o)(l=c[u="$"+a.call(e,s[o],o,s)])?(i[o]=l,l.__data__=s[o],c[u]=null):n[o]=new R(e,s[o]);for(o=0;o<d;++o)(l=t[o])&&c[p[o]]===l&&(r[o]=l)}function F(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}R.prototype={constructor:R,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};var B="http://www.w3.org/1999/xhtml";const z={svg:"http://www.w3.org/2000/svg",xhtml:B,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function U(e){var t=e+="",n=t.indexOf(":");return n>=0&&"xmlns"!==(t=e.slice(0,n))&&(e=e.slice(n+1)),z.hasOwnProperty(t)?{space:z[t],local:e}:e}function W(e){return function(){this.removeAttribute(e)}}function V(e){return function(){this.removeAttributeNS(e.space,e.local)}}function G(e,t){return function(){this.setAttribute(e,t)}}function $(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function J(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttribute(e):this.setAttribute(e,n)}}function X(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function K(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Z(e){return function(){this.style.removeProperty(e)}}function Q(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ee(e,t,n){return function(){var i=t.apply(this,arguments);null==i?this.style.removeProperty(e):this.style.setProperty(e,i,n)}}function te(e,t){return e.style.getPropertyValue(t)||K(e).getComputedStyle(e,null).getPropertyValue(t)}function ne(e){return function(){delete this[e]}}function ie(e,t){return function(){this[e]=t}}function re(e,t){return function(){var n=t.apply(this,arguments);null==n?delete this[e]:this[e]=n}}function se(e){return e.trim().split(/^|\s+/)}function ae(e){return e.classList||new oe(e)}function oe(e){this._node=e,this._names=se(e.getAttribute("class")||"")}function le(e,t){for(var n=ae(e),i=-1,r=t.length;++i<r;)n.add(t[i])}function ue(e,t){for(var n=ae(e),i=-1,r=t.length;++i<r;)n.remove(t[i])}function ce(e){return function(){le(this,e)}}function de(e){return function(){ue(this,e)}}function he(e,t){return function(){(t.apply(this,arguments)?le:ue)(this,e)}}function pe(){this.textContent=""}function me(e){return function(){this.textContent=e}}function fe(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?"":t}}function ge(){this.innerHTML=""}function _e(e){return function(){this.innerHTML=e}}function ve(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?"":t}}function ye(){this.nextSibling&&this.parentNode.appendChild(this)}function be(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function xe(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===B&&t.documentElement.namespaceURI===B?t.createElement(e):t.createElementNS(n,e)}}function we(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function ke(e){var t=U(e);return(t.local?we:xe)(t)}function Me(){return null}function Le(){var e=this.parentNode;e&&e.removeChild(this)}function Se(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function De(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}oe.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};var Ee={},Te=null;function Pe(e,t,n){return e=Ce(e,t,n),function(t){var n=t.relatedTarget;n&&(n===this||8&n.compareDocumentPosition(this))||e.call(this,t)}}function Ce(e,t,n){return function(i){var r=Te;Te=i;try{e.call(this,this.__data__,t,n)}finally{Te=r}}}function Ye(e){return e.trim().split(/^|\s+/).map((function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}}))}function Ae(e){return function(){var t=this.__on;if(t){for(var n,i=0,r=-1,s=t.length;i<s;++i)n=t[i],e.type&&n.type!==e.type||n.name!==e.name?t[++r]=n:this.removeEventListener(n.type,n.listener,n.capture);++r?t.length=r:delete this.__on}}}function Oe(e,t,n){var i=Ee.hasOwnProperty(e.type)?Pe:Ce;return function(r,s,a){var o,l=this.__on,u=i(t,s,a);if(l)for(var c=0,d=l.length;c<d;++c)if((o=l[c]).type===e.type&&o.name===e.name)return this.removeEventListener(o.type,o.listener,o.capture),this.addEventListener(o.type,o.listener=u,o.capture=n),void(o.value=t);this.addEventListener(e.type,u,n),o={type:e.type,name:e.name,value:t,listener:u,capture:n},l?l.push(o):this.__on=[o]}}function Ne(e,t,n){var i=K(e),r=i.CustomEvent;"function"==typeof r?r=new r(t,n):(r=i.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function je(e,t){return function(){return Ne(this,e,t)}}function qe(e,t){return function(){return Ne(this,e,t.apply(this,arguments))}}"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(Ee={mouseenter:"mouseover",mouseleave:"mouseout"}));var Re=[null];function Ie(e,t){this._groups=e,this._parents=t}function He(e){return"string"==typeof e?new Ie([[document.querySelector(e)]],[document.documentElement]):new Ie([[e]],Re)}function Fe(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}function Be(e){var t=0,n=e.children,i=n&&n.length;if(i)for(;--i>=0;)t+=n[i].value;else t=1;e.value=t}function ze(e,t){var n,i,r,s,a,o=new Ge(e),l=+e.value&&(o.value=e.value),u=[o];for(null==t&&(t=Ue);n=u.pop();)if(l&&(n.value=+n.data.value),(r=t(n.data))&&(a=r.length))for(n.children=new Array(a),s=a-1;s>=0;--s)u.push(i=n.children[s]=new Ge(r[s])),i.parent=n,i.depth=n.depth+1;return o.eachBefore(Ve)}function Ue(e){return e.children}function We(e){e.data=e.data.data}function Ve(e){var t=0;do{e.height=t}while((e=e.parent)&&e.height<++t)}function Ge(e){this.data=e,this.depth=this.height=0,this.parent=null}Ie.prototype=function(){return new Ie([[document.documentElement]],Re)}.prototype={constructor:Ie,select:function(e){"function"!=typeof e&&(e=N(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var s,a,o=t[r],l=o.length,u=i[r]=new Array(l),c=0;c<l;++c)(s=o[c])&&(a=e.call(s,s.__data__,c,o))&&("__data__"in s&&(a.__data__=s.__data__),u[c]=a);return new Ie(i,this._parents)},selectAll:function(e){"function"!=typeof e&&(e=function(e){return null==e?j:function(){return this.querySelectorAll(e)}}(e));for(var t=this._groups,n=t.length,i=[],r=[],s=0;s<n;++s)for(var a,o=t[s],l=o.length,u=0;u<l;++u)(a=o[u])&&(i.push(e.call(a,a.__data__,u,o)),r.push(a));return new Ie(i,r)},filter:function(e){"function"!=typeof e&&(e=function(e){return function(){return this.matches(e)}}(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var s,a=t[r],o=a.length,l=i[r]=[],u=0;u<o;++u)(s=a[u])&&e.call(s,s.__data__,u,a)&&l.push(s);return new Ie(i,this._parents)},data:function(e,t){if(!e)return m=new Array(this.size()),c=-1,this.each((function(e){m[++c]=e})),m;var n,i=t?H:I,r=this._parents,s=this._groups;"function"!=typeof e&&(n=e,e=function(){return n});for(var a=s.length,o=new Array(a),l=new Array(a),u=new Array(a),c=0;c<a;++c){var d=r[c],h=s[c],p=h.length,m=e.call(d,d&&d.__data__,c,r),f=m.length,g=l[c]=new Array(f),_=o[c]=new Array(f);i(d,h,g,_,u[c]=new Array(p),m,t);for(var v,y,b=0,x=0;b<f;++b)if(v=g[b]){for(b>=x&&(x=b+1);!(y=_[x])&&++x<f;);v._next=y||null}}return(o=new Ie(o,r))._enter=l,o._exit=u,o},enter:function(){return new Ie(this._enter||this._groups.map(q),this._parents)},exit:function(){return new Ie(this._exit||this._groups.map(q),this._parents)},join:function(e,t,n){var i=this.enter(),r=this,s=this.exit();return i="function"==typeof e?e(i):i.append(e+""),null!=t&&(r=t(r)),null==n?s.remove():n(s),i&&r?i.merge(r).order():r},merge:function(e){for(var t=this._groups,n=e._groups,i=t.length,r=n.length,s=Math.min(i,r),a=new Array(i),o=0;o<s;++o)for(var l,u=t[o],c=n[o],d=u.length,h=a[o]=new Array(d),p=0;p<d;++p)(l=u[p]||c[p])&&(h[p]=l);for(;o<i;++o)a[o]=t[o];return new Ie(a,this._parents)},order:function(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var i,r=e[t],s=r.length-1,a=r[s];--s>=0;)(i=r[s])&&(a&&4^i.compareDocumentPosition(a)&&a.parentNode.insertBefore(i,a),a=i);return this},sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=F);for(var n=this._groups,i=n.length,r=new Array(i),s=0;s<i;++s){for(var a,o=n[s],l=o.length,u=r[s]=new Array(l),c=0;c<l;++c)(a=o[c])&&(u[c]=a);u.sort(t)}return new Ie(r,this._parents).order()},call:function(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this},nodes:function(){var e=new Array(this.size()),t=-1;return this.each((function(){e[++t]=this})),e},node:function(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],r=0,s=i.length;r<s;++r){var a=i[r];if(a)return a}return null},size:function(){var e=0;return this.each((function(){++e})),e},empty:function(){return!this.node()},each:function(e){for(var t=this._groups,n=0,i=t.length;n<i;++n)for(var r,s=t[n],a=0,o=s.length;a<o;++a)(r=s[a])&&e.call(r,r.__data__,a,s);return this},attr:function(e,t){var n=U(e);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((null==t?n.local?V:W:"function"==typeof t?n.local?X:J:n.local?$:G)(n,t))},style:function(e,t,n){return arguments.length>1?this.each((null==t?Z:"function"==typeof t?ee:Q)(e,t,null==n?"":n)):te(this.node(),e)},property:function(e,t){return arguments.length>1?this.each((null==t?ne:"function"==typeof t?re:ie)(e,t)):this.node()[e]},classed:function(e,t){var n=se(e+"");if(arguments.length<2){for(var i=ae(this.node()),r=-1,s=n.length;++r<s;)if(!i.contains(n[r]))return!1;return!0}return this.each(("function"==typeof t?he:t?ce:de)(n,t))},text:function(e){return arguments.length?this.each(null==e?pe:("function"==typeof e?fe:me)(e)):this.node().textContent},html:function(e){return arguments.length?this.each(null==e?ge:("function"==typeof e?ve:_e)(e)):this.node().innerHTML},raise:function(){return this.each(ye)},lower:function(){return this.each(be)},append:function(e){var t="function"==typeof e?e:ke(e);return this.select((function(){return this.appendChild(t.apply(this,arguments))}))},insert:function(e,t){var n="function"==typeof e?e:ke(e),i=null==t?Me:"function"==typeof t?t:N(t);return this.select((function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(Le)},clone:function(e){return this.select(e?De:Se)},datum:function(e){return arguments.length?this.property("__data__",e):this.node().__data__},on:function(e,t,n){var i,r,s=Ye(e+""),a=s.length;if(!(arguments.length<2)){for(o=t?Oe:Ae,null==n&&(n=!1),i=0;i<a;++i)this.each(o(s[i],t,n));return this}var o=this.node().__on;if(o)for(var l,u=0,c=o.length;u<c;++u)for(i=0,l=o[u];i<a;++i)if((r=s[i]).type===l.type&&r.name===l.name)return l.value},dispatch:function(e,t){return this.each(("function"==typeof t?qe:je)(e,t))}},Ge.prototype=ze.prototype={constructor:Ge,count:function(){return this.eachAfter(Be)},each:function(e){var t,n,i,r,s=this,a=[s];do{for(t=a.reverse(),a=[];s=t.pop();)if(e(s),n=s.children)for(i=0,r=n.length;i<r;++i)a.push(n[i])}while(a.length);return this},eachAfter:function(e){for(var t,n,i,r=this,s=[r],a=[];r=s.pop();)if(a.push(r),t=r.children)for(n=0,i=t.length;n<i;++n)s.push(t[n]);for(;r=a.pop();)e(r);return this},eachBefore:function(e){for(var t,n,i=this,r=[i];i=r.pop();)if(e(i),t=i.children)for(n=t.length-1;n>=0;--n)r.push(t[n]);return this},sum:function(e){return this.eachAfter((function(t){for(var n=+e(t.data)||0,i=t.children,r=i&&i.length;--r>=0;)n+=i[r].value;t.value=n}))},sort:function(e){return this.eachBefore((function(t){t.children&&t.children.sort(e)}))},path:function(e){for(var t=this,n=function(e,t){if(e===t)return e;var n=e.ancestors(),i=t.ancestors(),r=null;for(e=n.pop(),t=i.pop();e===t;)r=e,e=n.pop(),t=i.pop();return r}(t,e),i=[t];t!==n;)t=t.parent,i.push(t);for(var r=i.length;e!==n;)i.splice(r,0,e),e=e.parent;return i},ancestors:function(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t},descendants:function(){var e=[];return this.each((function(t){e.push(t)})),e},leaves:function(){var e=[];return this.eachBefore((function(t){t.children||e.push(t)})),e},links:function(){var e=this,t=[];return e.each((function(n){n!==e&&t.push({source:n.parent,target:n})})),t},copy:function(){return ze(this).eachBefore(We)}};var $e=null,Je={};et("monochrome",null,[[0,0],[100,0]]),et("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),et("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),et("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),et("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),et("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),et("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),et("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var Xe=[];function Ke(e){if(void 0!==(e=e||{}).seed&&null!==e.seed&&e.seed===parseInt(e.seed,10))$e=e.seed;else if("string"==typeof e.seed)$e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(e.seed);else{if(void 0!==e.seed&&null!==e.seed)throw new TypeError("The seed value must be an integer or string");$e=null}var t,n;if(null!==e.count&&void 0!==e.count){for(var i=e.count,r=[],s=0;s<e.count;s++)Xe.push(!1);for(e.count=null;i>r.length;)$e&&e.seed&&(e.seed+=1),r.push(Ke(e));return e.count=i,r}return function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return it(e);case"hsl":var n=it(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var i=it(e),r=t.alpha||Math.random();return"hsla("+i[0]+", "+i[1]+"%, "+i[2]+"%, "+r+")";case"rgbArray":return tt(e);case"rgb":return"rgb("+tt(e).join(", ")+")";case"rgba":var s=tt(e);return r=t.alpha||Math.random(),"rgba("+s.join(", ")+", "+r+")";default:return function(e){var t=tt(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}([t=function(e){if(Xe.length>0){var t=Qe(r=function(e){if(isNaN(e)){if("string"==typeof e)if(Je[e]){var t=Je[e];if(t.hueRange)return t.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return Ze(nt(e)[0]).hueRange}else{var n=parseInt(e);if(n<360&&n>0)return Ze(e).hueRange}return[0,360]}(e.hue)),n=(r[1]-r[0])/Xe.length,i=parseInt((t-r[0])/n);return!0===Xe[i]?i=(i+2)%Xe.length:Xe[i]=!0,(t=Qe(r=[(r[0]+i*n)%359,(r[0]+(i+1)*n)%359]))<0&&(t=360+t),t}var r;return(t=Qe(r=function(e){if("number"==typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"==typeof e)if(Je[e]){var n=Je[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var i=nt(e)[0];return[i,i]}return[0,360]}(e.hue)))<0&&(t=360+t),t}(e),n=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return Qe([0,100]);var n=function(e){return Ze(e).saturationRange}(e),i=n[0],r=n[1];switch(t.luminosity){case"bright":i=55;break;case"dark":i=r-10;break;case"light":r=55}return Qe([i,r])}(t,e),function(e,t,n){var i=function(e,t){for(var n=Ze(e).lowerBounds,i=0;i<n.length-1;i++){var r=n[i][0],s=n[i][1],a=n[i+1][0],o=n[i+1][1];if(t>=r&&t<=a){var l=(o-s)/(a-r);return l*t+(s-l*r)}}return 0}(e,t),r=100;switch(n.luminosity){case"dark":r=i+20;break;case"light":i=(r+i)/2;break;case"random":i=0,r=100}return Qe([i,r])}(t,n,e)],e)}function Ze(e){for(var t in e>=334&&e<=360&&(e-=360),Je){var n=Je[t];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return Je[t]}return"Color not found"}function Qe(e){if(null===$e){var t=Math.random();return t+=.618033988749895,t%=1,Math.floor(e[0]+t*(e[1]+1-e[0]))}var n=e[1]||1,i=e[0]||0,r=($e=(9301*$e+49297)%233280)/233280;return Math.floor(i+r*(n-i))}function et(e,t,n){var i=n[0][0],r=n[n.length-1][0],s=n[n.length-1][1],a=n[0][1];Je[e]={hueRange:t,lowerBounds:n,saturationRange:[i,r],brightnessRange:[s,a]}}function tt(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,i=e[2]/100,r=Math.floor(6*t),s=6*t-r,a=i*(1-n),o=i*(1-s*n),l=i*(1-(1-s)*n),u=256,c=256,d=256;switch(r){case 0:u=i,c=l,d=a;break;case 1:u=o,c=i,d=a;break;case 2:u=a,c=i,d=l;break;case 3:u=a,c=o,d=i;break;case 4:u=l,c=a,d=i;break;case 5:u=i,c=a,d=o}return[Math.floor(255*u),Math.floor(255*c),Math.floor(255*d)]}function nt(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,i=parseInt(e.substr(4,2),16)/255,r=Math.max(t,n,i),s=r-Math.min(t,n,i),a=r?s/r:0;switch(r){case t:return[(n-i)/s%6*60||0,a,r];case n:return[60*((i-t)/s+2)||0,a,r];case i:return[60*((t-n)/s+4)||0,a,r]}}function it(e){var t=e[0],n=e[1]/100,i=e[2]/100,r=(2-n)*i;return[t,Math.round(n*i/(r<1?r:2-r)*1e4)/100,r/2*100]}var rt=n(41608);{let e,t,n,a;const o={w:100,h:30,s:3,t:10},l={};class u extends((0,s.P)([rt.mB],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            color: var(--nuxeo-text-default, #000);
          }

          #du {
            font-size: 1rem;
            font-weight: 400;
            width: 100%;
            height: 700px;
            margin-top: 10px;
          }

          #main {
            float: left;
            width: 70%;
          }

          #sb {
            float: right;
            width: 30%;
          }

          #sequence {
            width: 100%;
            height: 70px;
          }

          #chart {
            position: relative;
          }

          #chart path {
            stroke: #fff;
          }

          #ex {
            position: absolute;
            top: 260px;
            left: 305px;
            width: 140px;
            text-align: center;
            z-index: 10;
          }

          #cl {
            font-size: 2rem;
          }

          :host([loading]) .loadable {
            opacity: 0.25;
          }

          :host([loading]) paper-spinner-lite {
            position: absolute;
            top: 45%;
            left: 50%;
            --paper-spinner-color: var(--default-primary-color);
          }
        </style>

        <nuxeo-connection id="nx" connection-id="[[connectionId]]"></nuxeo-connection>

        <div id="du">
          <div id="main" class="loadable">
            <div id="sequence"></div>
            <div id="chart">
              <div id="ex" style="visibility: hidden;">
                <span id="cl"></span><br />
                <span id="clb"></span>
              </div>
            </div>
          </div>
          <div id="sb" class="loadable">
            <paper-radio-group selected="{{mode}}" on-paper-radio-group-changed="execute">
              <paper-radio-button noink name="size">[[i18n('documentDistributionChart.size')]]</paper-radio-button>
              <paper-radio-button noink name="count">[[i18n('documentDistributionChart.count')]]</paper-radio-button>
            </paper-radio-group>
            <p>
              <paper-checkbox noink on-change="execute" checked="{{includeHidden}}"
                >[[i18n('documentDistributionChart.includeHidden')]]</paper-checkbox
              >
            </p>
            <p>
              <paper-checkbox noink on-change="execute" checked="{{includeDeleted}}"
                >[[i18n('documentDistributionChart.includeDeleted')]]</paper-checkbox
              >
            </p>
            <p>
              <paper-checkbox noink on-change="execute" checked="{{includeVersion}}"
                >[[i18n('documentDistributionChart.includeVersions')]]</paper-checkbox
              >
            </p>
            <p>
              <paper-checkbox
                noink
                on-change="execute"
                checked="{{onlyFolder}}"
                disabled="[[_chechFolderDisabled(mode)]]"
                >[[i18n('documentDistributionChart.foldersOnly')]]</paper-checkbox
              >
            </p>
            <p></p>
          </div>

          <paper-spinner-lite active$="[[loading]]"></paper-spinner-lite>
        </div>
      `}static get is(){return"nuxeo-document-distribution-chart"}static get properties(){return{connectionId:{type:String,value:"nx"},index:{type:String,value:"nuxeo"},path:{type:String,value:""},mode:{type:String,value:"size",observer:"_observeMode"},maxDepth:{type:Number,value:10},chartLuminosity:{type:String,value:"light"},chartHue:{type:String,value:"blue"},width:{type:Number,value:750},height:{type:Number,value:600},includeHidden:{type:Boolean,value:!1},includeVersion:{type:Boolean,value:!1},includeDeleted:{type:Boolean,value:!0},onlyFolder:{type:Boolean,value:!1},_chartData:{type:Object},loading:{type:Boolean,notify:!0,reflectToAttribute:!0,value:!1},maxDocSize:{type:Number,value:1e3}}}ready(){super.ready(),this.execute()}_chechFolderDisabled(e){return"size"===e}_observeMode(){"size"===this.mode&&(this.onlyFolder=!1)}_computeSizeQuery(){const e=this.path.replace(/\/$/,"").split("/").length;let t={size:{sum:{field:"file:content.length"}}};for(let n=e-1+this.maxDepth;n>e;n--)t={size:{sum:{field:"file:content.length"}},subLevel:{terms:{field:`ecm:path@level${n}`,size:this.maxDocSize},aggs:t}};return{query:{bool:{must:{match_all:{}},must_not:this._computeMustNot(),filter:this._computeFilter()}},size:0,aggs:{subLevel:{terms:{field:`ecm:path@level${e}`,size:this.maxDocSize},aggs:t}}}}_computeDocCountQuery(){const e=this.path.replace(/\/$/,"").split("/").length;let t={subLevel:{terms:{field:`ecm:path@level${e-1+this.maxDepth}`,size:this.maxDocSize,order:{_count:"desc"}}}};for(let n=e-2+this.maxDepth;n>=e;n--)t={subLevel:{terms:{field:`ecm:path@level${n}`,size:this.maxDocSize,order:{_count:"desc"}},aggs:t}};return{query:{bool:{must:{match_all:{}},must_not:this._computeMustNot(),filter:this._computeFilter()}},size:0,aggs:t}}_computeMustNot(){const e=[];return this.includeHidden||e.push({term:{"ecm:mixinType":"HiddenInNavigation"}}),this.includeDeleted||e.push({term:{"ecm:isTrashed":!0}}),e}_computeFilter(){const e=[];if(this.onlyFolder&&"size"!==this.mode&&e.push({term:{"ecm:mixinType":"Folderish"}}),this.includeVersion||e.push({term:{"ecm:isVersion":!1}}),this.path&&this.path.length>0){const t=this.path.replace(/\/$/,"").split("/");for(let n=1;n<t.length;n++){const i={term:{}};i.term[`ecm:path@level${n}`]=t[n],e.push(i)}}return e}execute(){let e;if(this.loading=!0,"size"===this.mode)e=this._computeSizeQuery();else{if("count"!==this.mode)return void alert("Mode must be either size or docCount");e=this._computeDocCountQuery()}let t=[this.$.nx.client._baseURL,"site/es",this.index,"doc","_search"].join("/");t=t.replace(/(^\/+)|([^:])\/\/+/g,"$2/");const n={method:"POST",headers:{"Content-Type":"application/json"},body:e,url:t};return this.$.nx.request().then((e=>e.execute(n).then(this._handleResponse.bind(this)).catch(this._handleError.bind(this))))}_handleError(e){console.error(e),this.dispatchEvent(new CustomEvent("error",{composed:!0,bubbles:!0,detail:{reason:e,error:e}})),this.loading=!1}_handleResponse(e){this._buildSunBurst(e.aggregations),this.loading=!1}_transformSubBuckets(e){let t;if(e.name=e.key,e.color=this._getColor(e.name,this.chartHue,this.chartLuminosity),"size"===this.mode?(t=e.size.value,delete e.size):"count"===this.mode&&(t=e.doc_count,delete e.doc_count),delete e.key,e.size=t,e.subLevel){if(e.children=e.subLevel.buckets,delete e.subLevel,0===e.children.length)return;for(let t=0;t<e.children.length;t++)this._transformSubBuckets(e.children[t])}}_buildSunBurst(i){const r=i.subLevel;r.name="root",r.color=this._getColor(r.name,this.chartHue,this.chartLuminosity),r.children=r.buckets,delete r.buckets,delete r.doc_count_error_upper_bound,delete r.sum_other_doc_count;for(let e=0;e<r.children.length;e++)this._transformSubBuckets(r.children[e]);this._chartData=r,t=Math.min(this.width,this.height)/2,this.totalSize=0;const s=this.$.chart.querySelector("svg");s&&s.parentNode.removeChild(s),e=He(this.$.chart).append("svg:svg").attr("width",this.width).attr("height",this.height).append("svg:g").attr("id","container").attr("transform",`translate(${this.width/2},${this.height/2})`),n=function(){var e=1,t=1,n=0,i=!1;function r(r){var s=r.height+1;return r.x0=r.y0=n,r.x1=e,r.y1=t/s,r.eachBefore(function(e,t){return function(i){i.children&&function(e,t,n,i,r){for(var s,a=e.children,o=-1,l=a.length,u=e.value&&(i-t)/e.value;++o<l;)(s=a[o]).y0=n,s.y1=r,s.x0=t,s.x1=t+=s.value*u}(i,i.x0,e*(i.depth+1)/t,i.x1,e*(i.depth+2)/t);var r=i.x0,s=i.y0,a=i.x1-n,o=i.y1-n;a<r&&(r=a=(r+a)/2),o<s&&(s=o=(s+o)/2),i.x0=r,i.y0=s,i.x1=a,i.y1=o}}(t,s)),i&&r.eachBefore(Fe),r}return r.round=function(e){return arguments.length?(i=!!e,r):i},r.size=function(n){return arguments.length?(e=+n[0],t=+n[1],r):[e,t]},r.padding=function(e){return arguments.length?(n=+e,r):n},r}().size([2*Math.PI,t*t]),a=function(){var e=D,t=E,n=p(0),i=null,r=T,s=P,a=C,o=null;function l(){var l,u,c=+e.apply(this,arguments),d=+t.apply(this,arguments),p=r.apply(this,arguments)-k,_=s.apply(this,arguments)-k,D=m(_-p),E=_>p;if(o||(o=l=h()),d<c&&(u=d,d=c,c=u),d>x)if(D>M-x)o.moveTo(d*g(p),d*y(p)),o.arc(0,0,d,p,_,!E),c>x&&(o.moveTo(c*g(_),c*y(_)),o.arc(0,0,c,_,p,E));else{var T,P,C=p,O=_,N=p,j=_,q=D,R=D,I=a.apply(this,arguments)/2,H=I>x&&(i?+i.apply(this,arguments):b(c*c+d*d)),F=v(m(d-c)/2,+n.apply(this,arguments)),B=F,z=F;if(H>x){var U=S(H/c*y(I)),W=S(H/d*y(I));(q-=2*U)>x?(N+=U*=E?1:-1,j-=U):(q=0,N=j=(p+_)/2),(R-=2*W)>x?(C+=W*=E?1:-1,O-=W):(R=0,C=O=(p+_)/2)}var V=d*g(C),G=d*y(C),$=c*g(j),J=c*y(j);if(F>x){var X,K=d*g(O),Z=d*y(O),Q=c*g(N),ee=c*y(N);if(D<w&&(X=Y(V,G,Q,ee,K,Z,$,J))){var te=V-X[0],ne=G-X[1],ie=K-X[0],re=Z-X[1],se=1/y(L((te*ie+ne*re)/(b(te*te+ne*ne)*b(ie*ie+re*re)))/2),ae=b(X[0]*X[0]+X[1]*X[1]);B=v(F,(c-ae)/(se-1)),z=v(F,(d-ae)/(se+1))}}R>x?z>x?(T=A(Q,ee,V,G,d,z,E),P=A(K,Z,$,J,d,z,E),o.moveTo(T.cx+T.x01,T.cy+T.y01),z<F?o.arc(T.cx,T.cy,z,f(T.y01,T.x01),f(P.y01,P.x01),!E):(o.arc(T.cx,T.cy,z,f(T.y01,T.x01),f(T.y11,T.x11),!E),o.arc(0,0,d,f(T.cy+T.y11,T.cx+T.x11),f(P.cy+P.y11,P.cx+P.x11),!E),o.arc(P.cx,P.cy,z,f(P.y11,P.x11),f(P.y01,P.x01),!E))):(o.moveTo(V,G),o.arc(0,0,d,C,O,!E)):o.moveTo(V,G),c>x&&q>x?B>x?(T=A($,J,K,Z,c,-B,E),P=A(V,G,Q,ee,c,-B,E),o.lineTo(T.cx+T.x01,T.cy+T.y01),B<F?o.arc(T.cx,T.cy,B,f(T.y01,T.x01),f(P.y01,P.x01),!E):(o.arc(T.cx,T.cy,B,f(T.y01,T.x01),f(T.y11,T.x11),!E),o.arc(0,0,c,f(T.cy+T.y11,T.cx+T.x11),f(P.cy+P.y11,P.cx+P.x11),E),o.arc(P.cx,P.cy,B,f(P.y11,P.x11),f(P.y01,P.x01),!E))):o.arc(0,0,c,j,N,E):o.lineTo($,J)}else o.moveTo(0,0);if(o.closePath(),l)return o=null,l+""||null}return l.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,i=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-w/2;return[g(i)*n,y(i)*n]},l.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:p(+t),l):e},l.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:p(+e),l):t},l.cornerRadius=function(e){return arguments.length?(n="function"==typeof e?e:p(+e),l):n},l.padRadius=function(e){return arguments.length?(i=null==e?null:"function"==typeof e?e:p(+e),l):i},l.startAngle=function(e){return arguments.length?(r="function"==typeof e?e:p(+e),l):r},l.endAngle=function(e){return arguments.length?(s="function"==typeof e?e:p(+e),l):s},l.padAngle=function(e){return arguments.length?(a="function"==typeof e?e:p(+e),l):a},l.context=function(e){return arguments.length?(o=null==e?null:e,l):o},l}().startAngle((e=>e.x0)).endAngle((e=>e.x1)).innerRadius((e=>Math.sqrt(e.y0))).outerRadius((e=>Math.sqrt(e.y1))),this._createVisualization()}_getColor(e,t,n){let i=l[e];return void 0===i&&(i=Ke({hue:t,luminosity:n}),l[e]=i),i}_getAncestors(e){const t=[];let n=e;for(;n.parent;)t.unshift(n),n=n.parent;return t}_updateBreadcrumbs(e,t){const n=He((0,r.vz)(this.root).querySelector("#trail")).selectAll("g").data(e,(e=>e.data.name+e.data.depth)),i=n.enter().append("svg:g");i.append("svg:polygon").attr("points",this._breadcrumbPoints).style("fill",(e=>e.data.color)),i.append("svg:text").attr("x",(o.w+o.t)/2).attr("y",o.h/2).attr("dy","0.35em").attr("text-anchor","middle").text((e=>e.data.name.length>10?`${e.data.name.substring(0,9)}...`:e.data.name)),n.attr("transform",((e,t)=>`translate(${t*(o.w+o.s)}, 0)`)),n.exit().remove(),He((0,r.vz)(this.root).querySelector("#trail").querySelector("#endlabel")).attr("x",(e.length+.5)*(o.w+o.s)).attr("y",o.h/2).attr("dy","0.35em").attr("text-anchor","middle").text(t),He((0,r.vz)(this.root).querySelector("#trail")).style("visibility","")}_createVisualization(){this._initializeBreadcrumbTrail(),e.append("svg:circle").attr("r",t).style("opacity",0);const i=ze(this._chartData).sum((e=>e.size)).sort(((e,t)=>t.value-e.value)),s=n(i).descendants().filter((e=>e.x1-e.x0>.005)),o=e.data([this._chartData]).selectAll("path").data(s).enter().append("svg:path").attr("display",(e=>e.depth?null:"none")).attr("d",a).attr("fill-rule","evenodd").style("fill",(e=>e.data.color)).style("opacity",1).on("mouseover",this._mouseover.bind(this));He((0,r.vz)(this.root).querySelector("#container")).on("mouseleave",this._mouseleave),this.totalSize=o.datum().value}_mouseover(t){const n=(100*t.value/this.totalSize).toPrecision(3);let i=`${n}%`;n<.1&&(i="< 0.1%"),He(this.$.cl).text(this._formatValue(t.value,!0)),He(this.$.clb).text(`(${i})`),He(this.$.ex).style("visibility","");const s=this._getAncestors(t);this._updateBreadcrumbs(s,i),function(e){return"string"==typeof e?new Ie([document.querySelectorAll(e)],[document.documentElement]):new Ie([null==e?[]:e],Re)}((0,r.vz)(this.root).querySelectorAll("#chart path")).style("opacity",.3),e.selectAll("#chart path").filter((e=>s.indexOf(e)>=0)).style("opacity",1)}_mouseleave(){}_initializeBreadcrumbTrail(){for(;this.$.sequence.firstChild;)this.$.sequence.removeChild(this.$.sequence.firstChild);He(this.$.sequence).append("svg:svg").attr("width","100%").attr("height",50).attr("id","trail").append("svg:text").attr("id","endlabel").style("fill","#000"),He(this.$.cl).text(""),He(this.$.clb).text("")}_breadcrumbPoints(e,t){const n=[];return n.push("0,0"),n.push(`${o.w},0`),n.push(`${o.w+o.t},${o.h/2}`),n.push(`${o.w},${o.h}`),n.push(`0,${o.h}`),t>0&&n.push(`${o.t},${o.h/2}`),n.join(" ")}_formatValue(e,t){if("size"===this.mode){const n=t?1e3:1024;if(Math.abs(e)<n)return`${e} B`;const i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let r=-1;do{e/=n,++r}while(Math.abs(e)>=n&&r<i.length-1);return`${e.toFixed(1)} ${i[r]}`}if("count"===this.mode){let t=e+(e===this.maxDocSize?"+ ":" ");return t+=e>1?this.i18n("documentDistributionChart.documents"):this.i18n("documentDistributionChart.document"),t}return e}}customElements.define(u.is,u),Nuxeo.DocumentDistributionChart=u}},82374:(e,t,n)=>{"use strict";var i=n(66538),r=(n(36037),n(75343),n(12052),n(85621),n(55689),n(67365),n(43384),n(93426)),s=n(41608),a=n(63221);{class e extends((0,r.P)([s.mB,a.z],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            @apply --layout-vertical;
          }
          button {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            padding: 0;
            padding-inline-end: 2px;
            background: transparent;
            border: none;
            cursor: pointer;
            text-decoration: none;
            font-size: 1rem;
          }
          /* to fix a blinking default style on safari */
          button:active {
            color: inherit;
          }
          /* XXX - while we define our default focus state */
          button:focus {
            outline: none;
          }
          .heading {
            width: calc(100% - 20px);
            overflow-x: hidden;
            text-align: start;
          }
          iron-icon {
            --iron-icon-height: 20px;
            --iron-icon-width: 20px;
          }
          paper-checkbox {
            width: 100%;
            margin-top: 4px;
            --paper-checkbox-label-spacing: 8px;
          }
          label {
            cursor: pointer;
            @apply --nuxeo-label;
          }
          .show-more-button a {
            display: block;
            margin-top: 4px;
          }
        </style>

        <dom-if if="[[!collapsible]]">
          <template>
            <label>[[label]]</label>
            <dom-if if="[[_isEmpty]]">
              <template>
                <span>[[i18n('checkboxAggregation.noResults')]]</span>
              </template>
            </dom-if>
            <dom-if if="[[!_isEmpty]]">
              <template>
                <dom-repeat items="{{buckets}}">
                  <template>
                    <paper-checkbox noink checked="{{item.checked}}" on-change="_computeValues">
                      [[item.label]] ([[item.docCount]])
                    </paper-checkbox>
                  </template>
                </dom-repeat>
              </template>
            </dom-if>
          </template>
        </dom-if>

        <dom-if if="[[collapsible]]">
          <template>
            <button aria-expanded="[[opened]]" on-tap="_toggle">
              <label class="heading">[[label]]</label>
              <iron-icon icon="[[_toggleIcon(opened)]]"></iron-icon>
            </button>
            <iron-collapse opened="{{opened}}">
              <dom-if if="[[_isEmpty]]">
                <template>
                  <span>[[i18n('checkboxAggregation.noResults')]]</span>
                </template>
              </dom-if>
              <dom-if if="[[!_isEmpty]]">
                <template>
                  <dom-repeat items="{{_visibleBuckets}}">
                    <template>
                      <paper-checkbox noink checked="{{item.checked}}" on-change="_computeValues">
                        [[item.label]] ([[item.docCount]])
                      </paper-checkbox>
                    </template>
                  </dom-repeat>
                  <span hidden$="[[_hideShowMoreButton(buckets, visibleItems)]]" class="show-more-button">
                    <a href="javascript:void(0);" on-tap="_toggleShow">
                      [[_computeShowMoreLabel(_showAll, i18n)]]
                    </a>
                  </span>
                </template>
              </dom-if>
            </iron-collapse>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-checkbox-aggregation"}static get properties(){return{collapsible:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,value:""},opened:{type:Boolean,value:!1,reflectToAttribute:!0},visibleItems:{type:Number,value:8},_showAll:{type:Boolean,value:!1,readOnly:!0},_visibleBuckets:{type:Array,computed:"_computeVisibleBuckets(buckets, visibleItems, _showAll)"}}}_computeVisibleBuckets(e,t,n){return e&&0!==e.length?n?e:e.slice(0,t):[]}_toggle(){this.opened=!this.opened}_toggleIcon(e){return"hardware:keyboard-arrow-"+(e?"up":"down")}_toggleShow(){this._set_showAll(!this._showAll)}_computeShowMoreLabel(){return this.i18n(this._showAll?"checkboxAggregation.showLess":"checkboxAggregation.showAll")}_hideShowMoreButton(){return this.buckets&&this.buckets.length<=this.visibleItems}}customElements.define("nuxeo-checkbox-aggregation",e)}},87647:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(36037),n(41608)),a=(n(79223),n(63221));{class e extends((0,r.P)([s.mB,a.z],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
            width: 100%;
          }

          [hidden] {
            display: none;
          }
        </style>

        <nuxeo-selectivity
          data="[[_computeData(buckets)]]"
          min-chars="[[minChars]]"
          multiple
          placeholder="[[placeholder]]"
          value="{{value}}"
        >
        </nuxeo-selectivity>
      `}static get is(){return"nuxeo-dropdown-aggregation"}static get properties(){return{value:{type:Array,notify:!0},minChars:{type:Number,value:0},placeholder:String}}_computeData(e){return e?e.map((e=>{const t=`${e.label} (${e.docCount})`;return{id:e.key,text:t,displayLabel:t}})):[]}}customElements.define(e.is,e),Nuxeo.DropdownAggregation=e}},21237:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(78891),n(14190)),a=(n(49739),n(36037),n(85621),n(55689),n(54356),n(43226)),o=n(42840);{class e extends((0,r.P)([s.z,o.L,a.N],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
            min-height: 500px;
            position: relative;
          }

          /* scrollbars */
          :host ::-webkit-scrollbar-track {
            width: 12px !important;
            height: 3px;
          }
          :host ::-webkit-scrollbar {
            background-color: rgba(0, 0, 0, 0.03);
            width: 12px !important;
            height: 3px;
          }
          :host ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.15);
            border-radius: 1px !important;
          }

          #container {
            @apply --layout-vertical;
            @apply --layout-fit;
          }

          .header {
            @apply --layout-horizontal;
            @apply --layout-center;
          }

          .emptyResult {
            opacity: 0.5;
            display: block;
            font-weight: 300;
            padding: 1.5em 0.7em;
            text-align: center;
            font-size: 1.1rem;
          }

          .filters > * {
            margin: 1em 0 0 2.3em;
          }

          .filter {
            display: inline-block;
            background-color: var(--nuxeo-tag-background);
            padding: 0.2rem 0.4rem;
            margin: 0 0.3em 0.1em 0;
            font-size: 0.8rem;
            border-radius: 2.5em;
            line-height: initial;
          }

          .filter .remove:hover {
            cursor: pointer;
          }

          iron-list {
            height: 100%;
          }

          nuxeo-aggregation-navigation {
            position: absolute;
            top: 82px;
            bottom: 0;
            right: 12px;
          }

          :host([draggable]) ::slotted([selected]) {
            cursor: -webkit-grab;
            cursor: grab;
          }
        </style>

        <div id="container">
          <slot name="nuxeo-selection-toolbar"></slot>

          <div class="header">
            <div id="filters" class="filters">
              <dom-repeat items="[[filters]]" as="filter">
                <template>
                  <span class="tag filter">
                    [[filter.name]]: [[filter.value]]
                    <iron-icon icon="nuxeo:remove" class="remove" on-click="_removeFilter"></iron-icon>
                  </span>
                </template>
              </dom-repeat>
            </div>
          </div>

          <dom-if if="[[_isEmpty]]">
            <template>
              <div class="emptyResult">[[_computedEmptyLabel]]</div>
            </template>
          </dom-if>

          <iron-list
            id="list"
            items="[[items]]"
            as="[[as]]"
            grid
            selection-enabled
            selected-item="{{selectedItem}}"
            selected-items="{{selectedItems}}"
            on-scroll="_scrollChanged"
          >
            <slot></slot>
          </iron-list>

          <dom-if if="[[displayNavigation]]">
            <template>
              <nuxeo-aggregation-navigation
                buckets="[[buckets]]"
                on-scroll-to="_onScrollTo"
              ></nuxeo-aggregation-navigation>
            </template>
          </dom-if>
        </div>
      `}static get is(){return"nuxeo-data-grid"}static get properties(){return{multiSelection:{type:Boolean,value:!0},displayNavigation:{type:Boolean,value:!1}}}_removeFilter(e){this.dispatchEvent(new CustomEvent("column-filter-changed",{composed:!0,bubbles:!0,detail:{value:"",filterBy:e.model.filter.path,filterExpression:e.model.filter.expression}}))}_onScrollTo(e){this.scrollToIndex(e.detail.index)}draggableFilter(e){return e.selected}get visible(){return Boolean(this.offsetWidth||this.offsetHeight)}}customElements.define(e.is,e),Nuxeo.DataGrid=e}},96689:(e,t,n)=>{"use strict";n(43384),n(96430),n(85621),n(55689),n(36037),n(39660),n(23550),n(80957),n(91339);var i=n(93426),r=n(66538),s=n(69699);{class e extends((0,i.P)([s.e],Nuxeo.Element)){static get template(){return r.d`
        <style include="nuxeo-document-comments-styles"></style>

        <nuxeo-resource id="commentRequest" path="/id/[[uid]]/@comment/"></nuxeo-resource>

        <dom-if if="[[_moreAvailable(comments.length, total, allCommentsLoaded)]]">
          <template>
            <span class="more-content no-selection pointer smaller" on-tap="_loadMore"
              >[[_computeTextLabel(level, 'loadAll', total, i18n)]]</span
            >
          </template>
        </dom-if>
        <dom-repeat id="commentList" items="[[comments]]" as="comment">
          <template>
            <nuxeo-document-comment comment="{{comment}}" level="[[level]]"></nuxeo-document-comment>
          </template>
        </dom-repeat>

        <dom-if if="[[_allowReplies(level)]]">
          <template>
            <div class="input-area">
              <paper-textarea
                id="inputContainer"
                placeholder="[[_computeTextLabel(level, 'writePlaceholder', null, i18n)]]"
                value="{{text}}"
                max-rows="[[_computeMaxRows()]]"
                no-label-float
                on-keydown="_checkForEnter"
              >
              </paper-textarea>
              <dom-if if="[[!_isBlank(text)]]">
                <template>
                  <iron-icon
                    id="submit"
                    name="submit"
                    class="main-option opaque"
                    icon="check"
                    on-tap="_submitComment"
                  ></iron-icon>
                  <nuxeo-tooltip for="submit">[[i18n('comments.submit.tooltip')]]</nuxeo-tooltip>
                  <iron-icon name="clear" class="main-option opaque" icon="clear" on-tap="_clearInput"></iron-icon>
                </template>
              </dom-if>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-document-comment-thread"}static get properties(){return{uid:{type:String,observer:"_refresh"},comments:{type:Array,value:()=>[]},level:{type:Number,value:1},pageSize:{type:Number,readOnly:!0,value:10},allCommentsLoaded:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},total:{type:Number,readOnly:!0,value:0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("delete-comment",this._handleDeleteEvent),this.addEventListener("edit-comment",this._handleEditEvent),this.addEventListener("comments-changed",this._handleCommentsChange)}disconnectedCallback(){this.removeEventListener("delete-comment",this._handleDeleteEvent),this.removeEventListener("edit-comment",this._handleEditEvent),this.removeEventListener("comments-changed",this._handleCommentsChange),super.disconnectedCallback()}focusInput(){this.$$("#inputContainer").focus()}_checkForEnter(e){13===e.keyCode&&e.ctrlKey&&!this._isBlank(this.text)&&this._submitComment()}_clearInput(){this.text=""}_clearRequest(){this.$.commentRequest.data={},this.$.commentRequest.headers={},this.$.commentRequest.params={}}_fetchComments(e){this._clearRequest(),this.$.commentRequest.params={pageSize:e?0:this.pageSize,currentPageIndex:0},this.$.commentRequest.headers={"fetch-comment":"repliesSummary"},this.$.commentRequest.get().then((t=>{const n=this.comments.length>0?this.comments[0]:null,i=t.entries;for(;i.length>0&&n&&(i[0].creationDate>n.creationDate||i[0].id===n.id);)i.shift();t.entries.forEach((e=>{this.unshift("comments",e)})),this._setTotal(t.totalSize),this._setAllCommentsLoaded(!!e)})).catch((e=>{if(404!==e.status)throw this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"fetch.error")}})),e;this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"notFound")}}))}))}_getCommentIndexById(e){return this.comments.findIndex((t=>t.id===e))}_handleCommentsChange(e){"comments.length"===e.detail.path&&this.dispatchEvent(new CustomEvent("number-of-replies",{composed:!0,bubbles:!0,detail:{total:this.comments.length}}))}_handleDeleteEvent(e){const t=this._getCommentIndexById(e.detail.commentId);-1!==t&&(this.splice("comments",t,1),this._setTotal(this.total-1)),e.stopPropagation()}_handleEditEvent(e){const t=this._getCommentIndexById(e.detail.commentId);-1!==t&&(this.set(`comments.${t}.modificationDate`,e.detail.modificationDate),this.set(`comments.${t}.text`,e.detail.text)),e.stopPropagation()}_loadMore(){this._fetchComments(!0)}_refresh(){this.set("comments",[]),this._fetchComments(this.allCommentsLoaded)}_submitComment(e){e&&e.preventDefault(),this._clearRequest(),this.$.commentRequest.data={"entity-type":"comment",parentId:this.uid,text:this.text.trim()},this.$.commentRequest.post().then((e=>{this._clearInput(),this.push("comments",e),this._setTotal(this.total+1)})).catch((e=>{if(404!==e.status)throw this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"creation.error")}})),e;this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"notFound")}}))}))}_computeMaxRows(){const e=parseFloat(this.getComputedStyleValue("--nuxeo-comment-line-height")),t=parseFloat(this.getComputedStyleValue("--nuxeo-comment-max-height"));return Math.round((Number.isNaN(t)?80:t)/(Number.isNaN(e)?20:e))}_computeTextLabel(e,t,n){return 1===e?this.i18n(`comments.${t}.comment`,n):this.i18n(`comments.${t}.reply`,n)}_allowReplies(e){return e<=2}_isBlank(e){return!e||"string"!=typeof e||0===e.trim().length}_moreAvailable(e,t,n){return e<t&&!n}}customElements.define(e.is,e)}},80957:(e,t,n)=>{"use strict";n(75343),n(43384),n(35266),n(3632),n(53043),n(96430),n(76967),n(22403),n(85621),n(587),n(36037),n(39660),n(25297),n(23550),n(96689),n(91339);var i=n(93426),r=n(66538),s=n(9954),a=n(69699);n(26343);{class e extends((0,i.P)([a.e],Nuxeo.Element)){static get template(){return r.d`
        <style include="nuxeo-document-comments-styles nuxeo-button-styles">
          :host {
            margin-top: 5px;
          }

          #body:hover paper-icon-button {
            opacity: 0.5;
            transition: opacity 100ms;
          }

          .author {
            font-weight: bold;
            margin-right: 5px;
          }

          .info {
            margin-left: 10px;
            @apply --layout-vertical;
            @apply --layout-flex;
          }

          .separator {
            margin: 0 5px;
          }

          .text {
            display: inline;
          }

          .text span {
            white-space: pre-wrap;
          }

          paper-menu-button {
            --paper-menu-button: {
              padding: 0;
            }
          }

          paper-listbox {
            --paper-listbox: {
              padding: 0;
            }
          }

          paper-icon-button {
            opacity: 0;
            --paper-icon-button: {
              padding: 0;
            }
          }

          paper-icon-item {
            --paper-icon-item: {
              padding: 5px 5px;
              display: flex;
              cursor: pointer;
            }

            --paper-item-min-height: 24px;

            --paper-item-icon: {
              width: 1.75em;
              margin-right: 10px;
            }

            --paper-item-selected-weight: normal;

            --paper-item-focused-before: {
              background-color: transparent;
            }
          }
        </style>

        <nuxeo-connection id="nxcon" user="{{currentUser}}"></nuxeo-connection>
        <nuxeo-resource id="commentRequest" path="/id/[[comment.parentId]]/@comment/[[comment.id]]"></nuxeo-resource>

        <nuxeo-dialog id="dialog" with-backdrop>
          <h2>[[i18n('comments.deletion.dialog.heading')]]</h2>
          <div>[[_computeConfirmationLabel(comment.numberOfReplies)]]</div>
          <div class="buttons">
            <paper-button name="dismiss" dialog-dismiss class="secondary"
              >[[i18n('comments.deletion.dialog.buttons.cancel')]]</paper-button
            >
            <paper-button name="confirm" dialog-confirm on-click="_deleteComment" class="primary"
              >[[i18n('comments.deletion.dialog.buttons.delete')]]</paper-button
            >
          </div>
        </nuxeo-dialog>

        <dom-if if="[[comment]]">
          <template>
            <div id="content" class="horizontal">
              <nuxeo-user-avatar
                user="[[comment.author]]"
                height="[[_computeAvatarDimensions(level)]]"
                width="[[_computeAvatarDimensions(level)]]"
                border-radius="50"
                font-size="[[_computeAvatarFontSize(level)]]"
              >
              </nuxeo-user-avatar>
              <div class="info">
                <div id="body">
                  <div id="header" class="horizontal">
                    <span class="author">[[comment.author]]</span>
                    <span class="smaller opaque"
                      >[[_computeDateLabel(comment, comment.creationDate, comment.modificationDate, i18n)]]</span
                    >
                    <dom-if if="[[_areExtendedOptionsAvailable(comment.author, currentUser)]]">
                      <template>
                        <paper-menu-button id="options" no-animations close-on-activate>
                          <paper-icon-button class="main-option" icon="more-vert" slot="dropdown-trigger" alt="menu">
                          </paper-icon-button>
                          <paper-listbox slot="dropdown-content">
                            <paper-icon-item name="edit" class="smaller no-selection" on-tap="_editComment">
                              <iron-icon icon="nuxeo:edit" slot="item-icon"></iron-icon>
                              <span>[[i18n('comments.options.edit')]]</span>
                            </paper-icon-item>
                            <paper-icon-item
                              name="delete"
                              class="smaller no-selection"
                              on-tap="_toggleDeletionConfirmation"
                            >
                              <iron-icon icon="nuxeo:delete" slot="item-icon"></iron-icon>
                              <span>[[i18n('comments.options.delete')]]</span>
                            </paper-icon-item>
                          </paper-listbox>
                        </paper-menu-button>
                      </template>
                    </dom-if>
                  </div>
                  <dom-if if="[[!editing]]">
                    <template>
                      <div id="view-area" class="text">
                        <span inner-h-t-m-l="[[_computeTextToDisplay(comment.text, maxChars, truncated)]]"></span>
                        <dom-if if="[[truncated]]">
                          <template>
                            <span class="smaller opaque pointer" on-tap="_showFullComment"
                              >[[i18n('comments.showAll')]]</span
                            >
                          </template>
                        </dom-if>
                        <dom-if if="[[!truncated]]">
                          <template>
                            <iron-icon
                              name="reply"
                              class="main-option opaque"
                              icon="reply"
                              on-tap="_reply"
                              hidden$="[[!_isRootElement(level)]]"
                            ></iron-icon>
                          </template>
                        </dom-if>
                      </div>
                    </template>
                  </dom-if>
                  <dom-if if="[[editing]]">
                    <template>
                      <div class="input-area">
                        <paper-textarea
                          id="inputContainer"
                          placeholder="[[_computeTextLabel(level, 'writePlaceholder', null, i18n)]]"
                          value="{{text}}"
                          max-rows="[[_computeMaxRows()]]"
                          no-label-float
                          on-keydown="_checkForEnter"
                        >
                        </paper-textarea>
                        <dom-if if="[[!_isBlank(text)]]">
                          <template>
                            <iron-icon
                              id="submit"
                              name="submit"
                              class="main-option opaque"
                              icon="check"
                              on-tap="_submitComment"
                            ></iron-icon>
                            <nuxeo-tooltip for="submit">[[i18n('comments.submit.tooltip')]]</nuxeo-tooltip>
                            <iron-icon
                              name="clear"
                              class="main-option opaque"
                              icon="clear"
                              on-tap="_clearInput"
                            ></iron-icon>
                          </template>
                        </dom-if>
                      </div>
                    </template>
                  </dom-if>
                  <dom-if if="[[_isSummaryVisible(comment.expanded, comment.numberOfReplies)]]">
                    <template>
                      <div id="summary" class="horizontal smaller">
                        <span class="more-content pointer no-selection" on-tap="_expand"
                          >[[i18n('comments.numberOfReplies', comment.numberOfReplies)]]</span
                        >
                        <span class="separator opaque">•</span>
                        <span class="opaque"
                          >[[_computeDateLabel(comment, 'lastReplyDate', comment.lastReplyDate, i18n)]]</span
                        >
                      </div>
                    </template>
                  </dom-if>
                </div>

                <dom-if if="[[comment.expanded]]">
                  <template>
                    <nuxeo-document-comment-thread id="thread" uid="[[comment.id]]" level="[[_computeSubLevel(level)]]">
                    </nuxeo-document-comment-thread>
                  </template>
                </dom-if>
              </div>
            </div>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-document-comment"}static get properties(){return{comment:{type:Object},level:{type:Number,value:1},truncated:{type:Boolean,computed:"_computeTruncatedFlag(comment.showFull, comment.text,  maxChars)"},maxChars:{type:Number,readOnly:!0,value:256},editing:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1}}}connectedCallback(){super.connectedCallback(),this.addEventListener("number-of-replies",this._handleRepliesChange),this.text=this.comment&&this.comment.text}disconnectedCallback(){this.removeEventListener("number-of-replies",this._handleRepliesChange),super.disconnectedCallback()}_checkForEnter(e){13===e.keyCode&&e.ctrlKey&&!this._isBlank(this.comment.text)&&this._submitComment()}_clearInput(){this._setEditing(!1),this.text=this.comment.text}_deleteComment(){this.$.commentRequest.data={},this.$.commentRequest.remove().then((()=>{this.dispatchEvent(new CustomEvent("delete-comment",{composed:!0,bubbles:!0,detail:{commentId:this.comment.id}}))})).catch((e=>{if(404!==e.status)throw this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"deletion.error")}})),e;this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"notFound")}}))}))}_editComment(){this._setEditing(!0),(0,s.afterNextRender)(this,(function(){this.$$("#inputContainer").focus()}))}_expand(){this.set("comment.expanded",!0)}_handleRepliesChange(e){const t=e.detail.total;0===t&&this.set("comment.expanded",!1),this.set("comment.numberOfReplies",t),e.stopPropagation()}_reply(){this.comment.expanded||this._expand(),(0,s.afterNextRender)(this,(function(){this.$$("#thread").focusInput()}))}_showFullComment(){this.set("comment.showFull",!0)}_submitComment(e){e&&e.preventDefault(),this.$.commentRequest.data={"entity-type":"comment",parentId:this.comment.parentId,text:this.$$("#inputContainer").value.trim()},this.$.commentRequest.put().then((e=>{this.dispatchEvent(new CustomEvent("edit-comment",{composed:!0,bubbles:!0,detail:{commentId:this.comment.id,modificationDate:e.modificationDate,text:e.text}})),this.text=e.text,this.set("comment.modificationDate",e.modificationDate),this.set("comment.text",e.text),this._clearInput()})).catch((e=>{if(404!==e.status)throw this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"edition.error")}})),e;this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this._computeTextLabel(this.level,"notFound")}}))}))}_toggleDeletionConfirmation(){this.$.dialog.toggle()}_computeAvatarDimensions(e){return this._isRootElement(e)?24:20}_computeAvatarFontSize(e){return this._isRootElement(e)?13:11}_computeConfirmationLabel(e){return this.i18n("comments.deletion.dialog.message."+(e>0?"withReplies":"withoutReplies"))}_computeDateLabel(e,t){if(e){let n=this.formatDate(e.creationDate,"relative");return"lastReplyDate"===t?(n=this.formatDate(e.lastReplyDate,"relative"),this.i18n("comments.lastReply",n)):e.modificationDate?this.i18n("comments.edited",n):n}}_computeMaxRows(){const e=parseFloat(this.getComputedStyleValue("--nuxeo-comment-line-height")),t=parseFloat(this.getComputedStyleValue("--nuxeo-comment-max-height"));return Math.round((Number.isNaN(t)?80:t)/(Number.isNaN(e)?20:e))}_computeSubLevel(e){return e+1}_computeTextLabel(e,t,n){return 1===e?this.i18n(`comments.${t}.comment`,n):this.i18n(`comments.${t}.reply`,n)}_computeTextToDisplay(e,t,n){let i=e;return n&&(i=`${e.substring(0,t-1)}…`),i}_computeTruncatedFlag(e,t,n){return!e&&"string"==typeof t&&t.length>n}_areExtendedOptionsAvailable(e,t){return t&&(t.properties&&t.properties.username===e||t.isAdministrator)}_isBlank(e){return!e||"string"!=typeof e||0===e.trim().length}_isRootElement(e){return 1===e}_isSummaryVisible(e,t){return!e&&t>0}}customElements.define(e.is,e)}},91339:(e,t,n)=>{"use strict";n(75343);const i=n(66538).d`
  <dom-module id="nuxeo-document-comments-styles">
    <template>
      <style>
        :host {
          display: block;
        }

        .horizontal {
          @apply --layout-horizontal;
        }

        .main-option {
          height: 1.5em;
          width: 1.5em;
          cursor: pointer;
        }

        .more-content {
          color: var(--nuxeo-comment-more-content-color, #1f28bf);
        }

        .no-selection {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .opaque {
          opacity: 0.5;
        }

        .pointer {
          cursor: pointer;
        }

        .input-area {
          margin: 5px 0;

          @apply --layout-horizontal;
          @apply --layout-end;
        }

        .smaller {
          font-size: 0.86em;
        }

        paper-textarea {
          width: 100%;
          --paper-input-container-input: {
            font-size: 1em;
            line-height: var(--nuxeo-comment-line-height, 20px);
          }

          --iron-autogrow-textarea-placeholder: {
            color: var(--nuxeo-comment-placeholder-color, #939caa);
            font-size: 0.86em;
          }
        }
      </style>
    </template>
  </dom-module>
`;document.head.appendChild(i.content)},12699:(e,t,n)=>{"use strict";n(36037),n(9142),n(55689);var i=n(66538),r=n(79761),s=n(9954),a=n(93426),o=n(41608);{class e extends((0,a.P)([o.mB],Nuxeo.Element)){static get template(){return i.d`
        <style>
          #error {
            margin-bottom: 8px;
          }

          .error {
            border-left: 4px solid var(--paper-input-container-invalid-color, #de350b);
            color: var(--paper-input-container-invalid-color, #de350b);
            padding-left: 8px;
          }
        </style>
        <div id="error" hidden$="[[!_hasValidationErrors(_errorMessages.splices)]]">
          <dom-repeat items="[[_errorMessages]]">
            <template>
              <span class="error">[[item]]</span>
            </template>
          </dom-repeat>
        </div>
        <nuxeo-layout
          id="layout"
          href="[[_href]]"
          model="[[_model]]"
          error="[[i18n('documentLayout.notFound', layout, document.type)]]"
          on-element-changed="_elementChanged"
        >
        </nuxeo-layout>
      `}static get is(){return"nuxeo-document-layout"}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/nuxeo-document-layout.js`}}static get properties(){return{document:{type:Object,notify:!0},layout:{type:String,value:"view",reflectToAttribute:!0},hrefTemplate:{type:String,value:()=>"${document.type}/nuxeo-${document.type}-${layout}-layout.html"},hrefBase:{type:String,value:""},hrefFunction:{type:Function,computed:"_buildHrefFn(hrefTemplate)"},_model:{type:Object,value:{},readOnly:!0},_href:{type:String,readOnly:!0},_errorMessages:{type:Array,readOnly:!0,value:[]}}}static get observers(){return["_loadLayout(document, layout, hrefFunction, hrefBase)"]}get element(){return this.$.layout.element}validate(){return this.$.layout.validate()}applyAutoFocus(){const e=this._getFocusableElement(this.element);e&&e.focus()}reportValidation(e){this._resetValidationErrors(),e.violations.reverse().forEach((e=>{this.invalid=!0,e.path?e.path.forEach((t=>{const n=this._getBoundElements(`document.properties.${t.field_name}`);if(n){const i=this.i18n(e.messageKey,e.invalid_value,t.field_name);i===e.messageKey&&e.constraint&&e.constraint.name?this._addValidationError(this.i18n(`label.schema.constraint.violation.${e.constraint.name}`,e.invalid_value,t.field_name,...Object.values(e.constraint.parameters))):this._addValidationError(i),Object.values(n).forEach((e=>{e.invalid=!0}))}else this._addValidationError(this.i18n(e.messageKey,e.invalid_value,t.field_name))})):this._addValidationError(this.i18n(e.messageKey))}))}_buildHrefFn(e){return()=>{const t=e.matchAll(/\${([^}]+)}/g);let n=e;for(const[e,i]of t){const t=i.match(/^(layout|document)(\.(.+))?$/)?this.get(i).toLowerCase():"";n=n.replace(e,t)}return n}}_loadLayout(e,t,n,i){if(this._resetValidationErrors(),e){this.previousDocument&&e.uid===this.previousDocument.uid||this._set_href(null),this.previousDocument&&e.type!==this.previousDocument.type||this._set_model({document:e});const s=i||(0,r.iY)(this.__dataHost.importPath||this.importPath),a=[s,n(e,t)].join("/"!==s.slice(-1)?"/":"");this._set_href(a)}else void 0===e&&this._set_model({document:e});this.previousDocument=e}_elementChanged(){this._set_model({document:this.document}),this.element&&this.element.addEventListener("document-changed",(e=>{this.notifyPath(e.detail.path,e.detail.value)})),(0,s.afterNextRender)(this,(()=>{this.dispatchEvent(new CustomEvent("document-layout-changed",{bubbles:!0,composed:!0,detail:{element:this.element,layout:this.layout}})),this.applyAutoFocus()}))}_getBoundElements(e){return this.$.layout._getBoundElements(e)}_getFocusableElement(e){if(e&&e.shadowRoot&&!e.shadowRoot.activeElement){const t=Array.from(e.shadowRoot.querySelectorAll("*")).filter((e=>{const t=window.getComputedStyle(e);return!e.disabled&&"none"!==t.display&&"hidden"!==t.visibility}));let n=t.find((e=>e.autofocus));if(n)return n;t.filter((e=>e.shadowRoot)).forEach((e=>{if(n=this._getFocusableElement(e),n)return n}))}}_addValidationError(e){this.push("_errorMessages",e),this.$.error.scrollIntoView(),this.$.error.focus()}_hasValidationErrors(){return this._errorMessages&&this._errorMessages.length>0}_resetValidationErrors(){this._set_errorMessages([])}}customElements.define(e.is,e)}},78919:(e,t,n)=>{"use strict";var i=n(14190),r=(n(31171),n(36037),n(66538)),s=n(74153),a=n(93426),o=n(73504);n(62514),n(75953),n(24400);{class e extends((0,a.P)([o.F,i.z],Nuxeo.Element)){static get template(){return r.d`
        <style>
          :host {
            display: block;
          }

          nuxeo-image-viewer {
            width: 100%;
            height: 100%;
            min-height: var(--nuxeo-viewer-min-height, 60vh);
          }

          nuxeo-video-viewer {
            width: 100%;
            height: 100%;
          }

          audio {
            width: calc(100% - 16px);
            margin: 8px;
          }

          marked-element {
            background-color: white;
          }

          nuxeo-pdf-viewer {
            width: 100%;
            height: 100%;
            min-height: var(--nuxeo-viewer-min-height, 60vh);
          }

          iframe {
            height: 100%;
            min-height: var(--nuxeo-viewer-min-height, 60vh);
            width: 100%;
            border: none;
            padding: 0;
            margin: 0;
          }

          #xml {
            font-family: monospace;
          }

          #preview {
            border: none;
            width: 100%;
            height: 100%;
            overflow-wrap: break-word;
          }
        </style>

        <!-- Our available preview templates. First match will be used -->
        <template mime-pattern="image.*|application/photoshop|illustrator|postscript">
          <nuxeo-image-viewer src="[[_computeImageSource(_blob)]]" controls responsive></nuxeo-image-viewer>
        </template>

        <template mime-pattern="video.*|application/(g|m)xf">
          <nuxeo-video-viewer
            id="video"
            controls
            sources="[[_computeVideoSources(_blob)]]"
            storyboard="[[_computeStoryboard(_blob)]]"
          >
          </nuxeo-video-viewer>
        </template>

        <template mime-pattern="audio.*">
          <audio id="audio" controls>
            <source src="[[_computeAudioSource(_blob)]]" />
            AUDIO
          </audio>
        </template>

        <template mime-pattern="text/(?:.*-)?(markdown|html|plain)">
          <marked-element markdown="[[_blob.text]]" sanitize></marked-element>
        </template>

        <template mime-pattern="text/xml">
          <div id="xml">[[_blob.text]]</div>
        </template>

        <template mime-pattern="application/pdf">
          <nuxeo-pdf-viewer src="[[_blob.data]]"></nuxeo-pdf-viewer>
        </template>

        <template rendition="pdf">
          <nuxeo-pdf-viewer src="[[_computeRendition(document, xpath, 'pdf')]]"></nuxeo-pdf-viewer>
        </template>

        <template mime-pattern=".*">
          <iframe id="frame" src="[[_computeIFrameSource(_blob)]]"></iframe>
        </template>

        <div id="preview"></div>
      `}static get is(){return"nuxeo-document-preview"}static get properties(){return{document:Object,xpath:{type:String,value:"file:content"},_blob:Object}}static get observers(){return["_updateBlob(document, xpath)"]}ready(){super.ready(),this.addEventListener("iron-resize",this._onResize)}stop(){const e=this.$$("#video");e&&e.stop();const t=this.$$("#audio");t&&(t.pause(),t.currentTime=0)}_updateBlob(){this.document&&("Note"===this.document.type&&"file:content"===this.xpath?this._blob={text:this.document.properties["note:note"],"mime-type":this.document.properties["note:mime_type"]}:this._blob=this.document&&this._deepFind(this.document.properties,this.xpath),this._updatePreview())}_insertPreview(e){delete e.__templatizeOwner,this.templatize(e);const t=this.stamp();Object.keys(this.constructor.properties).forEach((e=>t._setPendingProperty(e,this[e]))),t._flushProperties(),this.$.preview.appendChild(t.root)}_updatePreview(){for(;this.$.preview.firstChild;)this.$.preview.removeChild(this.$.preview.firstChild);const e=(0,s.vz)(this.root).querySelectorAll("template");if("preview"in this._blob){const t=e[e.length-1];this._insertPreview(t)}else for(let t=0;t<e.length;t++){const n=e[t],i=n.getAttribute("mime-pattern"),r=i&&new RegExp(i).test(this._blob&&this._blob["mime-type"])&&(!i.startsWith("text/")||"text"in this._blob),s=n.getAttribute("rendition");if(s&&this._computeRendition(this.document,this.xpath,s)||r){this._insertPreview(n);break}}}_deepFind(e,t){for(let n=0,i=t.split("/"),r=i.length;n<r&&e&&e!==[];n++)e=e[i[n]];return e}_computeImageSource(){if(this.document&&this.document.properties&&this.document.properties["picture:views"]&&"file:content"===this.xpath){const e=this.document.properties["picture:views"].filter((e=>"FullHD"===e.title));if(e.length>0)return e[0].content.data}if(this.xpath&&this._blob&&this._blob["mime-type"]&&this._blob["mime-type"].match("image.*"))return this._blob.data}_computeVideoSources(){if(this.document&&this.document.properties&&this.document.properties["vid:transcodedVideos"]&&"file:content"===this.xpath){const e=[];return this.document.properties["vid:transcodedVideos"].forEach((t=>{t&&t.content&&t.content.data&&t.content["mime-type"]&&e.push({data:t.content.data,type:t.content["mime-type"]})})),e}if(this.xpath&&this._blob&&this._blob["mime-type"]&&this._blob["mime-type"].match("video.*|application/(g|m)xf"))return[{data:this._blob.data,type:this._blob["mime-type"]}]}_computeStoryboard(){if(this.document&&this.document.properties&&this.document.properties["vid:storyboard"]&&"file:content"===this.xpath)return this.document.properties["vid:storyboard"]}_computeAudioSource(){if(this._blob)return this._blob.data}_computeRendition(e,t,n){const i="file:content"===t&&e&&e.contextParameters&&e.contextParameters.renditions&&e.contextParameters.renditions.find((e=>e.name===n));return i&&i.url}_computeIFrameSource(){if(this.document&&this.document.contextParameters&&this.document.contextParameters.preview){let{url:e}=this.document.contextParameters.preview;return"file:content"!==this.xpath&&(e=e.replace("/@preview/",`/@blob/${this.xpath}/@preview/`)),e}if(this._blob)return this._blob.data}_onResize(){if(!this._isVisible){const e=this.$$("#audio");if(e&&!e.paused)return void e.pause();const t=this.$$("#video");t&&!t.isPaused()&&t.pause()}}get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)}}customElements.define(e.is,e),Nuxeo.DocumentPreview=e}},70319:(e,t,n)=>{"use strict";n(76176),n(36037);var i=n(30032),r=n(16896),s=n(52778),a=n(74153),o=n(93426),l=n(73504),u=n(30883),c={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},d="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",h={5:d,"5module":d+" export import",6:d+" const class extends export import super"},p=/^in(stanceof)?$/,m="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",f="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",g=new RegExp("["+m+"]"),_=new RegExp("["+m+f+"]");m=f=null;var v=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,155,22,13,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,0,33,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,0,161,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,754,9486,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541],y=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,232,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,792487,239];function b(e,t){for(var n=65536,i=0;i<t.length;i+=2){if((n+=t[i])>e)return!1;if((n+=t[i+1])>=e)return!0}}function x(e,t){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&g.test(String.fromCharCode(e)):!1!==t&&b(e,v)))}function w(e,t){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&_.test(String.fromCharCode(e)):!1!==t&&(b(e,v)||b(e,y)))))}var k=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null};function M(e,t){return new k(e,{beforeExpr:!0,binop:t})}var L={beforeExpr:!0},S={startsExpr:!0},D={};function E(e,t){return void 0===t&&(t={}),t.keyword=e,D[e]=new k(e,t)}var T={num:new k("num",S),regexp:new k("regexp",S),string:new k("string",S),name:new k("name",S),eof:new k("eof"),bracketL:new k("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new k("]"),braceL:new k("{",{beforeExpr:!0,startsExpr:!0}),braceR:new k("}"),parenL:new k("(",{beforeExpr:!0,startsExpr:!0}),parenR:new k(")"),comma:new k(",",L),semi:new k(";",L),colon:new k(":",L),dot:new k("."),question:new k("?",L),arrow:new k("=>",L),template:new k("template"),invalidTemplate:new k("invalidTemplate"),ellipsis:new k("...",L),backQuote:new k("`",S),dollarBraceL:new k("${",{beforeExpr:!0,startsExpr:!0}),eq:new k("=",{beforeExpr:!0,isAssign:!0}),assign:new k("_=",{beforeExpr:!0,isAssign:!0}),incDec:new k("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new k("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:M("||",1),logicalAND:M("&&",2),bitwiseOR:M("|",3),bitwiseXOR:M("^",4),bitwiseAND:M("&",5),equality:M("==/!=/===/!==",6),relational:M("</>/<=/>=",7),bitShift:M("<</>>/>>>",8),plusMin:new k("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:M("%",10),star:M("*",10),slash:M("/",10),starstar:new k("**",{beforeExpr:!0}),_break:E("break"),_case:E("case",L),_catch:E("catch"),_continue:E("continue"),_debugger:E("debugger"),_default:E("default",L),_do:E("do",{isLoop:!0,beforeExpr:!0}),_else:E("else",L),_finally:E("finally"),_for:E("for",{isLoop:!0}),_function:E("function",S),_if:E("if"),_return:E("return",L),_switch:E("switch"),_throw:E("throw",L),_try:E("try"),_var:E("var"),_const:E("const"),_while:E("while",{isLoop:!0}),_with:E("with"),_new:E("new",{beforeExpr:!0,startsExpr:!0}),_this:E("this",S),_super:E("super",S),_class:E("class",S),_extends:E("extends",L),_export:E("export"),_import:E("import",S),_null:E("null",S),_true:E("true",S),_false:E("false",S),_in:E("in",{beforeExpr:!0,binop:7}),_instanceof:E("instanceof",{beforeExpr:!0,binop:7}),_typeof:E("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:E("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:E("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},P=/\r\n?|\n|\u2028|\u2029/,C=new RegExp(P.source,"g");function Y(e,t){return 10===e||13===e||!t&&(8232===e||8233===e)}var A=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,O=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,N=Object.prototype,j=N.hasOwnProperty,q=N.toString;function R(e,t){return j.call(e,t)}var I=Array.isArray||function(e){return"[object Array]"===q.call(e)};function H(e){return new RegExp("^(?:"+e.replace(/ /g,"|")+")$")}var F=function(e,t){this.line=e,this.column=t};F.prototype.offset=function(e){return new F(this.line,this.column+e)};var B=function(e,t,n){this.start=t,this.end=n,null!==e.sourceFile&&(this.source=e.sourceFile)};function z(e,t){for(var n=1,i=0;;){C.lastIndex=i;var r=C.exec(e);if(!(r&&r.index<t))return new F(n,t-i);++n,i=r.index+r[0].length}}var U={ecmaVersion:9,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1};function W(e,t){return 2|(e?4:0)|(t?8:0)}var V=function(e,t,n){this.options=e=function(e){var t={};for(var n in U)t[n]=e&&R(e,n)?e[n]:U[n];if(t.ecmaVersion>=2015&&(t.ecmaVersion-=2009),null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),I(t.onToken)){var i=t.onToken;t.onToken=function(e){return i.push(e)}}return I(t.onComment)&&(t.onComment=function(e,t){return function(n,i,r,s,a,o){var l={type:n?"Block":"Line",value:i,start:r,end:s};e.locations&&(l.loc=new B(this,a,o)),e.ranges&&(l.range=[r,s]),t.push(l)}}(t,t.onComment)),t}(e),this.sourceFile=e.sourceFile,this.keywords=H(h[e.ecmaVersion>=6?6:"module"===e.sourceType?"5module":5]);var i="";if(!0!==e.allowReserved){for(var r=e.ecmaVersion;!(i=c[r]);r--);"module"===e.sourceType&&(i+=" await")}this.reservedWords=H(i);var s=(i?i+" ":"")+c.strict;this.reservedWordsStrict=H(s),this.reservedWordsStrictBind=H(s+" "+c.strictBind),this.input=String(t),this.containsEsc=!1,n?(this.pos=n,this.lineStart=this.input.lastIndexOf("\n",n-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(P).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=T.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(1),this.regexpState=null},G={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0}};V.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)},G.inFunction.get=function(){return(2&this.currentVarScope().flags)>0},G.inGenerator.get=function(){return(8&this.currentVarScope().flags)>0},G.inAsync.get=function(){return(4&this.currentVarScope().flags)>0},G.allowSuper.get=function(){return(64&this.currentThisScope().flags)>0},G.allowDirectSuper.get=function(){return(128&this.currentThisScope().flags)>0},G.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},V.prototype.inNonArrowFunction=function(){return(2&this.currentThisScope().flags)>0},V.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var n=this,i=0;i<e.length;i++)n=e[i](n);return n},V.parse=function(e,t){return new this(t,e).parse()},V.parseExpressionAt=function(e,t,n){var i=new this(n,e,t);return i.nextToken(),i.parseExpression()},V.tokenizer=function(e,t){return new this(t,e)},Object.defineProperties(V.prototype,G);var $=V.prototype,J=/^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;function X(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1}$.strictDirective=function(e){for(;;){O.lastIndex=e,e+=O.exec(this.input)[0].length;var t=J.exec(this.input.slice(e));if(!t)return!1;if("use strict"===(t[1]||t[2]))return!0;e+=t[0].length,O.lastIndex=e,e+=O.exec(this.input)[0].length,";"===this.input[e]&&e++}},$.eat=function(e){return this.type===e&&(this.next(),!0)},$.isContextual=function(e){return this.type===T.name&&this.value===e&&!this.containsEsc},$.eatContextual=function(e){return!!this.isContextual(e)&&(this.next(),!0)},$.expectContextual=function(e){this.eatContextual(e)||this.unexpected()},$.canInsertSemicolon=function(){return this.type===T.eof||this.type===T.braceR||P.test(this.input.slice(this.lastTokEnd,this.start))},$.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},$.semicolon=function(){this.eat(T.semi)||this.insertSemicolon()||this.unexpected()},$.afterTrailingComma=function(e,t){if(this.type===e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),t||this.next(),!0},$.expect=function(e){this.eat(e)||this.unexpected()},$.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token")},$.checkPatternErrors=function(e,t){if(e){e.trailingComma>-1&&this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element");var n=t?e.parenthesizedAssign:e.parenthesizedBind;n>-1&&this.raiseRecoverable(n,"Parenthesized pattern")}},$.checkExpressionErrors=function(e,t){if(!e)return!1;var n=e.shorthandAssign,i=e.doubleProto;if(!t)return n>=0||i>=0;n>=0&&this.raise(n,"Shorthand property assignments are valid only in destructuring patterns"),i>=0&&this.raiseRecoverable(i,"Redefinition of __proto__ property")},$.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value")},$.isSimpleAssignTarget=function(e){return"ParenthesizedExpression"===e.type?this.isSimpleAssignTarget(e.expression):"Identifier"===e.type||"MemberExpression"===e.type};var K=V.prototype;K.parseTopLevel=function(e){var t={};for(e.body||(e.body=[]);this.type!==T.eof;){var n=this.parseStatement(null,!0,t);e.body.push(n)}if(this.inModule)for(var i=0,r=Object.keys(this.undefinedExports);i<r.length;i+=1){var s=r[i];this.raiseRecoverable(this.undefinedExports[s].start,"Export '"+s+"' is not defined")}return this.adaptDirectivePrologue(e.body),this.next(),e.sourceType=this.options.sourceType,this.finishNode(e,"Program")};var Z={kind:"loop"},Q={kind:"switch"};K.isLet=function(e){if(this.options.ecmaVersion<6||!this.isContextual("let"))return!1;O.lastIndex=this.pos;var t=O.exec(this.input),n=this.pos+t[0].length,i=this.input.charCodeAt(n);if(91===i)return!0;if(e)return!1;if(123===i)return!0;if(x(i,!0)){for(var r=n+1;w(this.input.charCodeAt(r),!0);)++r;var s=this.input.slice(n,r);if(!p.test(s))return!0}return!1},K.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return!1;O.lastIndex=this.pos;var e=O.exec(this.input),t=this.pos+e[0].length;return!(P.test(this.input.slice(this.pos,t))||"function"!==this.input.slice(t,t+8)||t+8!==this.input.length&&w(this.input.charAt(t+8)))},K.parseStatement=function(e,t,n){var i,r=this.type,s=this.startNode();switch(this.isLet(e)&&(r=T._var,i="let"),r){case T._break:case T._continue:return this.parseBreakContinueStatement(s,r.keyword);case T._debugger:return this.parseDebuggerStatement(s);case T._do:return this.parseDoStatement(s);case T._for:return this.parseForStatement(s);case T._function:return e&&(this.strict||"if"!==e&&"label"!==e)&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(s,!1,!e);case T._class:return e&&this.unexpected(),this.parseClass(s,!0);case T._if:return this.parseIfStatement(s);case T._return:return this.parseReturnStatement(s);case T._switch:return this.parseSwitchStatement(s);case T._throw:return this.parseThrowStatement(s);case T._try:return this.parseTryStatement(s);case T._const:case T._var:return i=i||this.value,e&&"var"!==i&&this.unexpected(),this.parseVarStatement(s,i);case T._while:return this.parseWhileStatement(s);case T._with:return this.parseWithStatement(s);case T.braceL:return this.parseBlock(!0,s);case T.semi:return this.parseEmptyStatement(s);case T._export:case T._import:if(this.options.ecmaVersion>10&&r===T._import){O.lastIndex=this.pos;var a=O.exec(this.input),o=this.pos+a[0].length;if(40===this.input.charCodeAt(o))return this.parseExpressionStatement(s,this.parseExpression())}return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),r===T._import?this.parseImport(s):this.parseExport(s,n);default:if(this.isAsyncFunction())return e&&this.unexpected(),this.next(),this.parseFunctionStatement(s,!0,!e);var l=this.value,u=this.parseExpression();return r===T.name&&"Identifier"===u.type&&this.eat(T.colon)?this.parseLabeledStatement(s,l,u,e):this.parseExpressionStatement(s,u)}},K.parseBreakContinueStatement=function(e,t){var n="break"===t;this.next(),this.eat(T.semi)||this.insertSemicolon()?e.label=null:this.type!==T.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var r=this.labels[i];if(null==e.label||r.name===e.label.name){if(null!=r.kind&&(n||"loop"===r.kind))break;if(e.label&&n)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,n?"BreakStatement":"ContinueStatement")},K.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},K.parseDoStatement=function(e){return this.next(),this.labels.push(Z),e.body=this.parseStatement("do"),this.labels.pop(),this.expect(T._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(T.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},K.parseForStatement=function(e){this.next();var t=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(Z),this.enterScope(0),this.expect(T.parenL),this.type===T.semi)return t>-1&&this.unexpected(t),this.parseFor(e,null);var n=this.isLet();if(this.type===T._var||this.type===T._const||n){var i=this.startNode(),r=n?"let":this.value;return this.next(),this.parseVar(i,!0,r),this.finishNode(i,"VariableDeclaration"),(this.type===T._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&1===i.declarations.length?(this.options.ecmaVersion>=9&&(this.type===T._in?t>-1&&this.unexpected(t):e.await=t>-1),this.parseForIn(e,i)):(t>-1&&this.unexpected(t),this.parseFor(e,i))}var s=new X,a=this.parseExpression(!0,s);return this.type===T._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===T._in?t>-1&&this.unexpected(t):e.await=t>-1),this.toAssignable(a,!1,s),this.checkLVal(a),this.parseForIn(e,a)):(this.checkExpressionErrors(s,!0),t>-1&&this.unexpected(t),this.parseFor(e,a))},K.parseFunctionStatement=function(e,t,n){return this.next(),this.parseFunction(e,te|(n?0:ne),!1,t)},K.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement("if"),e.alternate=this.eat(T._else)?this.parseStatement("if"):null,this.finishNode(e,"IfStatement")},K.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(T.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},K.parseSwitchStatement=function(e){var t;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(T.braceL),this.labels.push(Q),this.enterScope(0);for(var n=!1;this.type!==T.braceR;)if(this.type===T._case||this.type===T._default){var i=this.type===T._case;t&&this.finishNode(t,"SwitchCase"),e.cases.push(t=this.startNode()),t.consequent=[],this.next(),i?t.test=this.parseExpression():(n&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),n=!0,t.test=null),this.expect(T.colon)}else t||this.unexpected(),t.consequent.push(this.parseStatement(null));return this.exitScope(),t&&this.finishNode(t,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},K.parseThrowStatement=function(e){return this.next(),P.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var ee=[];K.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===T._catch){var t=this.startNode();if(this.next(),this.eat(T.parenL)){t.param=this.parseBindingAtom();var n="Identifier"===t.param.type;this.enterScope(n?32:0),this.checkLVal(t.param,n?4:2),this.expect(T.parenR)}else this.options.ecmaVersion<10&&this.unexpected(),t.param=null,this.enterScope(0);t.body=this.parseBlock(!1),this.exitScope(),e.handler=this.finishNode(t,"CatchClause")}return e.finalizer=this.eat(T._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},K.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},K.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push(Z),e.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(e,"WhileStatement")},K.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement("with"),this.finishNode(e,"WithStatement")},K.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},K.parseLabeledStatement=function(e,t,n,i){for(var r=0,s=this.labels;r<s.length;r+=1)s[r].name===t&&this.raise(n.start,"Label '"+t+"' is already declared");for(var a=this.type.isLoop?"loop":this.type===T._switch?"switch":null,o=this.labels.length-1;o>=0;o--){var l=this.labels[o];if(l.statementStart!==e.start)break;l.statementStart=this.start,l.kind=a}return this.labels.push({name:t,kind:a,statementStart:this.start}),e.body=this.parseStatement(i?-1===i.indexOf("label")?i+"label":i:"label"),this.labels.pop(),e.label=n,this.finishNode(e,"LabeledStatement")},K.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},K.parseBlock=function(e,t){for(void 0===e&&(e=!0),void 0===t&&(t=this.startNode()),t.body=[],this.expect(T.braceL),e&&this.enterScope(0);!this.eat(T.braceR);){var n=this.parseStatement(null);t.body.push(n)}return e&&this.exitScope(),this.finishNode(t,"BlockStatement")},K.parseFor=function(e,t){return e.init=t,this.expect(T.semi),e.test=this.type===T.semi?null:this.parseExpression(),this.expect(T.semi),e.update=this.type===T.parenR?null:this.parseExpression(),this.expect(T.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,"ForStatement")},K.parseForIn=function(e,t){var n=this.type===T._in;return this.next(),"VariableDeclaration"===t.type&&null!=t.declarations[0].init&&(!n||this.options.ecmaVersion<8||this.strict||"var"!==t.kind||"Identifier"!==t.declarations[0].id.type)?this.raise(t.start,(n?"for-in":"for-of")+" loop variable declaration may not have an initializer"):"AssignmentPattern"===t.type&&this.raise(t.start,"Invalid left-hand side in for-loop"),e.left=t,e.right=n?this.parseExpression():this.parseMaybeAssign(),this.expect(T.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,n?"ForInStatement":"ForOfStatement")},K.parseVar=function(e,t,n){for(e.declarations=[],e.kind=n;;){var i=this.startNode();if(this.parseVarId(i,n),this.eat(T.eq)?i.init=this.parseMaybeAssign(t):"const"!==n||this.type===T._in||this.options.ecmaVersion>=6&&this.isContextual("of")?"Identifier"===i.id.type||t&&(this.type===T._in||this.isContextual("of"))?i.init=null:this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),e.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(T.comma))break}return e},K.parseVarId=function(e,t){e.id=this.parseBindingAtom(),this.checkLVal(e.id,"var"===t?1:2,!1)};var te=1,ne=2;K.parseFunction=function(e,t,n,i){this.initFunction(e),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!i)&&(this.type===T.star&&t&ne&&this.unexpected(),e.generator=this.eat(T.star)),this.options.ecmaVersion>=8&&(e.async=!!i),t&te&&(e.id=4&t&&this.type!==T.name?null:this.parseIdent(),!e.id||t&ne||this.checkLVal(e.id,this.strict||e.generator||e.async?this.treatFunctionsAsVar?1:2:3));var r=this.yieldPos,s=this.awaitPos,a=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(W(e.async,e.generator)),t&te||(e.id=this.type===T.name?this.parseIdent():null),this.parseFunctionParams(e),this.parseFunctionBody(e,n,!1),this.yieldPos=r,this.awaitPos=s,this.awaitIdentPos=a,this.finishNode(e,t&te?"FunctionDeclaration":"FunctionExpression")},K.parseFunctionParams=function(e){this.expect(T.parenL),e.params=this.parseBindingList(T.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams()},K.parseClass=function(e,t){this.next();var n=this.strict;this.strict=!0,this.parseClassId(e,t),this.parseClassSuper(e);var i=this.startNode(),r=!1;for(i.body=[],this.expect(T.braceL);!this.eat(T.braceR);){var s=this.parseClassElement(null!==e.superClass);s&&(i.body.push(s),"MethodDefinition"===s.type&&"constructor"===s.kind&&(r&&this.raise(s.start,"Duplicate constructor in the same class"),r=!0))}return e.body=this.finishNode(i,"ClassBody"),this.strict=n,this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},K.parseClassElement=function(e){var t=this;if(this.eat(T.semi))return null;var n=this.startNode(),i=function(e,i){void 0===i&&(i=!1);var r=t.start,s=t.startLoc;return!(!t.eatContextual(e)||(t.type===T.parenL||i&&t.canInsertSemicolon())&&(n.key&&t.unexpected(),n.computed=!1,n.key=t.startNodeAt(r,s),n.key.name=e,t.finishNode(n.key,"Identifier"),1))};n.kind="method",n.static=i("static");var r=this.eat(T.star),s=!1;r||(this.options.ecmaVersion>=8&&i("async",!0)?(s=!0,r=this.options.ecmaVersion>=9&&this.eat(T.star)):i("get")?n.kind="get":i("set")&&(n.kind="set")),n.key||this.parsePropertyName(n);var a=n.key,o=!1;return n.computed||n.static||!("Identifier"===a.type&&"constructor"===a.name||"Literal"===a.type&&"constructor"===a.value)?n.static&&"Identifier"===a.type&&"prototype"===a.name&&this.raise(a.start,"Classes may not have a static property named prototype"):("method"!==n.kind&&this.raise(a.start,"Constructor can't have get/set modifier"),r&&this.raise(a.start,"Constructor can't be a generator"),s&&this.raise(a.start,"Constructor can't be an async method"),n.kind="constructor",o=e),this.parseClassMethod(n,r,s,o),"get"===n.kind&&0!==n.value.params.length&&this.raiseRecoverable(n.value.start,"getter should have no params"),"set"===n.kind&&1!==n.value.params.length&&this.raiseRecoverable(n.value.start,"setter should have exactly one param"),"set"===n.kind&&"RestElement"===n.value.params[0].type&&this.raiseRecoverable(n.value.params[0].start,"Setter cannot use rest params"),n},K.parseClassMethod=function(e,t,n,i){return e.value=this.parseMethod(t,n,i),this.finishNode(e,"MethodDefinition")},K.parseClassId=function(e,t){this.type===T.name?(e.id=this.parseIdent(),t&&this.checkLVal(e.id,2,!1)):(!0===t&&this.unexpected(),e.id=null)},K.parseClassSuper=function(e){e.superClass=this.eat(T._extends)?this.parseExprSubscripts():null},K.parseExport=function(e,t){if(this.next(),this.eat(T.star))return this.expectContextual("from"),this.type!==T.string&&this.unexpected(),e.source=this.parseExprAtom(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(T._default)){var n;if(this.checkExport(t,"default",this.lastTokStart),this.type===T._function||(n=this.isAsyncFunction())){var i=this.startNode();this.next(),n&&this.next(),e.declaration=this.parseFunction(i,4|te,!1,n)}else if(this.type===T._class){var r=this.startNode();e.declaration=this.parseClass(r,"nullableID")}else e.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(null),"VariableDeclaration"===e.declaration.type?this.checkVariableExport(t,e.declaration.declarations):this.checkExport(t,e.declaration.id.name,e.declaration.id.start),e.specifiers=[],e.source=null;else{if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(t),this.eatContextual("from"))this.type!==T.string&&this.unexpected(),e.source=this.parseExprAtom();else{for(var s=0,a=e.specifiers;s<a.length;s+=1){var o=a[s];this.checkUnreserved(o.local),this.checkLocalExport(o.local)}e.source=null}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")},K.checkExport=function(e,t,n){e&&(R(e,t)&&this.raiseRecoverable(n,"Duplicate export '"+t+"'"),e[t]=!0)},K.checkPatternExport=function(e,t){var n=t.type;if("Identifier"===n)this.checkExport(e,t.name,t.start);else if("ObjectPattern"===n)for(var i=0,r=t.properties;i<r.length;i+=1){var s=r[i];this.checkPatternExport(e,s)}else if("ArrayPattern"===n)for(var a=0,o=t.elements;a<o.length;a+=1){var l=o[a];l&&this.checkPatternExport(e,l)}else"Property"===n?this.checkPatternExport(e,t.value):"AssignmentPattern"===n?this.checkPatternExport(e,t.left):"RestElement"===n?this.checkPatternExport(e,t.argument):"ParenthesizedExpression"===n&&this.checkPatternExport(e,t.expression)},K.checkVariableExport=function(e,t){if(e)for(var n=0,i=t;n<i.length;n+=1){var r=i[n];this.checkPatternExport(e,r.id)}},K.shouldParseExportStatement=function(){return"var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},K.parseExportSpecifiers=function(e){var t=[],n=!0;for(this.expect(T.braceL);!this.eat(T.braceR);){if(n)n=!1;else if(this.expect(T.comma),this.afterTrailingComma(T.braceR))break;var i=this.startNode();i.local=this.parseIdent(!0),i.exported=this.eatContextual("as")?this.parseIdent(!0):i.local,this.checkExport(e,i.exported.name,i.exported.start),t.push(this.finishNode(i,"ExportSpecifier"))}return t},K.parseImport=function(e){return this.next(),this.type===T.string?(e.specifiers=ee,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===T.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},K.parseImportSpecifiers=function(){var e=[],t=!0;if(this.type===T.name){var n=this.startNode();if(n.local=this.parseIdent(),this.checkLVal(n.local,2),e.push(this.finishNode(n,"ImportDefaultSpecifier")),!this.eat(T.comma))return e}if(this.type===T.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,2),e.push(this.finishNode(i,"ImportNamespaceSpecifier")),e}for(this.expect(T.braceL);!this.eat(T.braceR);){if(t)t=!1;else if(this.expect(T.comma),this.afterTrailingComma(T.braceR))break;var r=this.startNode();r.imported=this.parseIdent(!0),this.eatContextual("as")?r.local=this.parseIdent():(this.checkUnreserved(r.imported),r.local=r.imported),this.checkLVal(r.local,2),e.push(this.finishNode(r,"ImportSpecifier"))}return e},K.adaptDirectivePrologue=function(e){for(var t=0;t<e.length&&this.isDirectiveCandidate(e[t]);++t)e[t].directive=e[t].expression.raw.slice(1,-1)},K.isDirectiveCandidate=function(e){return"ExpressionStatement"===e.type&&"Literal"===e.expression.type&&"string"==typeof e.expression.value&&('"'===this.input[e.start]||"'"===this.input[e.start])};var ie=V.prototype;ie.toAssignable=function(e,t,n){if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":this.inAsync&&"await"===e.name&&this.raise(e.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern",n&&this.checkPatternErrors(n,!0);for(var i=0,r=e.properties;i<r.length;i+=1){var s=r[i];this.toAssignable(s,t),"RestElement"!==s.type||"ArrayPattern"!==s.argument.type&&"ObjectPattern"!==s.argument.type||this.raise(s.argument.start,"Unexpected token")}break;case"Property":"init"!==e.kind&&this.raise(e.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(e.value,t);break;case"ArrayExpression":e.type="ArrayPattern",n&&this.checkPatternErrors(n,!0),this.toAssignableList(e.elements,t);break;case"SpreadElement":e.type="RestElement",this.toAssignable(e.argument,t),"AssignmentPattern"===e.argument.type&&this.raise(e.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":"="!==e.operator&&this.raise(e.left.end,"Only '=' operator can be used for specifying default value."),e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(e.expression,t,n);break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue")}else n&&this.checkPatternErrors(n,!0);return e},ie.toAssignableList=function(e,t){for(var n=e.length,i=0;i<n;i++){var r=e[i];r&&this.toAssignable(r,t)}if(n){var s=e[n-1];6===this.options.ecmaVersion&&t&&s&&"RestElement"===s.type&&"Identifier"!==s.argument.type&&this.unexpected(s.argument.start)}return e},ie.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},ie.parseRestBinding=function(){var e=this.startNode();return this.next(),6===this.options.ecmaVersion&&this.type!==T.name&&this.unexpected(),e.argument=this.parseBindingAtom(),this.finishNode(e,"RestElement")},ie.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case T.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(T.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case T.braceL:return this.parseObj(!0)}return this.parseIdent()},ie.parseBindingList=function(e,t,n){for(var i=[],r=!0;!this.eat(e);)if(r?r=!1:this.expect(T.comma),t&&this.type===T.comma)i.push(null);else{if(n&&this.afterTrailingComma(e))break;if(this.type===T.ellipsis){var s=this.parseRestBinding();this.parseBindingListItem(s),i.push(s),this.type===T.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(e);break}var a=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(a),i.push(a)}return i},ie.parseBindingListItem=function(e){return e},ie.parseMaybeDefault=function(e,t,n){if(n=n||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(T.eq))return n;var i=this.startNodeAt(e,t);return i.left=n,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},ie.checkLVal=function(e,t,n){switch(void 0===t&&(t=0),e.type){case"Identifier":2===t&&"let"===e.name&&this.raiseRecoverable(e.start,"let is disallowed as a lexically bound name"),this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),n&&(R(n,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),n[e.name]=!0),0!==t&&5!==t&&this.declareName(e.name,t,e.start);break;case"MemberExpression":t&&this.raiseRecoverable(e.start,"Binding member expression");break;case"ObjectPattern":for(var i=0,r=e.properties;i<r.length;i+=1){var s=r[i];this.checkLVal(s,t,n)}break;case"Property":this.checkLVal(e.value,t,n);break;case"ArrayPattern":for(var a=0,o=e.elements;a<o.length;a+=1){var l=o[a];l&&this.checkLVal(l,t,n)}break;case"AssignmentPattern":this.checkLVal(e.left,t,n);break;case"RestElement":this.checkLVal(e.argument,t,n);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,n);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue")}};var re=V.prototype;re.checkPropClash=function(e,t,n){if(!(this.options.ecmaVersion>=9&&"SpreadElement"===e.type||this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var i,r=e.key;switch(r.type){case"Identifier":i=r.name;break;case"Literal":i=String(r.value);break;default:return}var s=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===i&&"init"===s&&(t.proto&&(n&&n.doubleProto<0?n.doubleProto=r.start:this.raiseRecoverable(r.start,"Redefinition of __proto__ property")),t.proto=!0);else{var a=t[i="$"+i];a?("init"===s?this.strict&&a.init||a.get||a.set:a.init||a[s])&&this.raiseRecoverable(r.start,"Redefinition of property"):a=t[i]={init:!1,get:!1,set:!1},a[s]=!0}}},re.parseExpression=function(e,t){var n=this.start,i=this.startLoc,r=this.parseMaybeAssign(e,t);if(this.type===T.comma){var s=this.startNodeAt(n,i);for(s.expressions=[r];this.eat(T.comma);)s.expressions.push(this.parseMaybeAssign(e,t));return this.finishNode(s,"SequenceExpression")}return r},re.parseMaybeAssign=function(e,t,n){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(e);this.exprAllowed=!1}var i=!1,r=-1,s=-1,a=-1;t?(r=t.parenthesizedAssign,s=t.trailingComma,a=t.shorthandAssign,t.parenthesizedAssign=t.trailingComma=t.shorthandAssign=-1):(t=new X,i=!0);var o=this.start,l=this.startLoc;this.type!==T.parenL&&this.type!==T.name||(this.potentialArrowAt=this.start);var u=this.parseMaybeConditional(e,t);if(n&&(u=n.call(this,u,o,l)),this.type.isAssign){var c=this.startNodeAt(o,l);return c.operator=this.value,c.left=this.type===T.eq?this.toAssignable(u,!1,t):u,i||X.call(t),t.shorthandAssign=-1,this.checkLVal(u),this.next(),c.right=this.parseMaybeAssign(e),this.finishNode(c,"AssignmentExpression")}return i&&this.checkExpressionErrors(t,!0),r>-1&&(t.parenthesizedAssign=r),s>-1&&(t.trailingComma=s),a>-1&&(t.shorthandAssign=a),u},re.parseMaybeConditional=function(e,t){var n=this.start,i=this.startLoc,r=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return r;if(this.eat(T.question)){var s=this.startNodeAt(n,i);return s.test=r,s.consequent=this.parseMaybeAssign(),this.expect(T.colon),s.alternate=this.parseMaybeAssign(e),this.finishNode(s,"ConditionalExpression")}return r},re.parseExprOps=function(e,t){var n=this.start,i=this.startLoc,r=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)||r.start===n&&"ArrowFunctionExpression"===r.type?r:this.parseExprOp(r,n,i,-1,e)},re.parseExprOp=function(e,t,n,i,r){var s=this.type.binop;if(null!=s&&(!r||this.type!==T._in)&&s>i){var a=this.type===T.logicalOR||this.type===T.logicalAND,o=this.value;this.next();var l=this.start,u=this.startLoc,c=this.parseExprOp(this.parseMaybeUnary(null,!1),l,u,s,r),d=this.buildBinary(t,n,e,c,o,a);return this.parseExprOp(d,t,n,i,r)}return e},re.buildBinary=function(e,t,n,i,r,s){var a=this.startNodeAt(e,t);return a.left=n,a.operator=r,a.right=i,this.finishNode(a,s?"LogicalExpression":"BinaryExpression")},re.parseMaybeUnary=function(e,t){var n,i=this.start,r=this.startLoc;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))n=this.parseAwait(),t=!0;else if(this.type.prefix){var s=this.startNode(),a=this.type===T.incDec;s.operator=this.value,s.prefix=!0,this.next(),s.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLVal(s.argument):this.strict&&"delete"===s.operator&&"Identifier"===s.argument.type?this.raiseRecoverable(s.start,"Deleting local variable in strict mode"):t=!0,n=this.finishNode(s,a?"UpdateExpression":"UnaryExpression")}else{if(n=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return n;for(;this.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(i,r);o.operator=this.value,o.prefix=!1,o.argument=n,this.checkLVal(n),this.next(),n=this.finishNode(o,"UpdateExpression")}}return!t&&this.eat(T.starstar)?this.buildBinary(i,r,n,this.parseMaybeUnary(null,!1),"**",!1):n},re.parseExprSubscripts=function(e){var t=this.start,n=this.startLoc,i=this.parseExprAtom(e),r="ArrowFunctionExpression"===i.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);if(this.checkExpressionErrors(e)||r)return i;var s=this.parseSubscripts(i,t,n);return e&&"MemberExpression"===s.type&&(e.parenthesizedAssign>=s.start&&(e.parenthesizedAssign=-1),e.parenthesizedBind>=s.start&&(e.parenthesizedBind=-1)),s},re.parseSubscripts=function(e,t,n,i){for(var r=this.options.ecmaVersion>=8&&"Identifier"===e.type&&"async"===e.name&&this.lastTokEnd===e.end&&!this.canInsertSemicolon()&&"async"===this.input.slice(e.start,e.end);;){var s=this.parseSubscript(e,t,n,i,r);if(s===e||"ArrowFunctionExpression"===s.type)return s;e=s}},re.parseSubscript=function(e,t,n,i,r){var s=this.eat(T.bracketL);if(s||this.eat(T.dot)){var a=this.startNodeAt(t,n);a.object=e,a.property=s?this.parseExpression():this.parseIdent("never"!==this.options.allowReserved),a.computed=!!s,s&&this.expect(T.bracketR),e=this.finishNode(a,"MemberExpression")}else if(!i&&this.eat(T.parenL)){var o=new X,l=this.yieldPos,u=this.awaitPos,c=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var d=this.parseExprList(T.parenR,this.options.ecmaVersion>=8&&"Import"!==e.type,!1,o);if(r&&!this.canInsertSemicolon()&&this.eat(T.arrow))return this.checkPatternErrors(o,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=l,this.awaitPos=u,this.awaitIdentPos=c,this.parseArrowExpression(this.startNodeAt(t,n),d,!0);this.checkExpressionErrors(o,!0),this.yieldPos=l||this.yieldPos,this.awaitPos=u||this.awaitPos,this.awaitIdentPos=c||this.awaitIdentPos;var h=this.startNodeAt(t,n);if(h.callee=e,h.arguments=d,"Import"===h.callee.type){1!==h.arguments.length&&this.raise(h.start,"import() requires exactly one argument");var p=h.arguments[0];p&&"SpreadElement"===p.type&&this.raise(p.start,"... is not allowed in import()")}e=this.finishNode(h,"CallExpression")}else if(this.type===T.backQuote){var m=this.startNodeAt(t,n);m.tag=e,m.quasi=this.parseTemplate({isTagged:!0}),e=this.finishNode(m,"TaggedTemplateExpression")}return e},re.parseExprAtom=function(e){this.type===T.slash&&this.readRegexp();var t,n=this.potentialArrowAt===this.start;switch(this.type){case T._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),t=this.startNode(),this.next(),this.type!==T.parenL||this.allowDirectSuper||this.raise(t.start,"super() call outside constructor of a subclass"),this.type!==T.dot&&this.type!==T.bracketL&&this.type!==T.parenL&&this.unexpected(),this.finishNode(t,"Super");case T._this:return t=this.startNode(),this.next(),this.finishNode(t,"ThisExpression");case T.name:var i=this.start,r=this.startLoc,s=this.containsEsc,a=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!s&&"async"===a.name&&!this.canInsertSemicolon()&&this.eat(T._function))return this.parseFunction(this.startNodeAt(i,r),0,!1,!0);if(n&&!this.canInsertSemicolon()){if(this.eat(T.arrow))return this.parseArrowExpression(this.startNodeAt(i,r),[a],!1);if(this.options.ecmaVersion>=8&&"async"===a.name&&this.type===T.name&&!s)return a=this.parseIdent(!1),!this.canInsertSemicolon()&&this.eat(T.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(i,r),[a],!0)}return a;case T.regexp:var o=this.value;return(t=this.parseLiteral(o.value)).regex={pattern:o.pattern,flags:o.flags},t;case T.num:case T.string:return this.parseLiteral(this.value);case T._null:case T._true:case T._false:return(t=this.startNode()).value=this.type===T._null?null:this.type===T._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case T.parenL:var l=this.start,u=this.parseParenAndDistinguishExpression(n);return e&&(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(u)&&(e.parenthesizedAssign=l),e.parenthesizedBind<0&&(e.parenthesizedBind=l)),u;case T.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(T.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case T.braceL:return this.parseObj(!1,e);case T._function:return t=this.startNode(),this.next(),this.parseFunction(t,0);case T._class:return this.parseClass(this.startNode(),!1);case T._new:return this.parseNew();case T.backQuote:return this.parseTemplate();case T._import:return this.options.ecmaVersion>10?this.parseDynamicImport():this.unexpected();default:this.unexpected()}},re.parseDynamicImport=function(){var e=this.startNode();return this.next(),this.type!==T.parenL&&this.unexpected(),this.finishNode(e,"Import")},re.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),110===t.raw.charCodeAt(t.raw.length-1)&&(t.bigint=t.raw.slice(0,-1)),this.next(),this.finishNode(t,"Literal")},re.parseParenExpression=function(){this.expect(T.parenL);var e=this.parseExpression();return this.expect(T.parenR),e},re.parseParenAndDistinguishExpression=function(e){var t,n=this.start,i=this.startLoc,r=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var s,a=this.start,o=this.startLoc,l=[],u=!0,c=!1,d=new X,h=this.yieldPos,p=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==T.parenR;){if(u?u=!1:this.expect(T.comma),r&&this.afterTrailingComma(T.parenR,!0)){c=!0;break}if(this.type===T.ellipsis){s=this.start,l.push(this.parseParenItem(this.parseRestBinding())),this.type===T.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}l.push(this.parseMaybeAssign(!1,d,this.parseParenItem))}var m=this.start,f=this.startLoc;if(this.expect(T.parenR),e&&!this.canInsertSemicolon()&&this.eat(T.arrow))return this.checkPatternErrors(d,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=h,this.awaitPos=p,this.parseParenArrowList(n,i,l);l.length&&!c||this.unexpected(this.lastTokStart),s&&this.unexpected(s),this.checkExpressionErrors(d,!0),this.yieldPos=h||this.yieldPos,this.awaitPos=p||this.awaitPos,l.length>1?((t=this.startNodeAt(a,o)).expressions=l,this.finishNodeAt(t,"SequenceExpression",m,f)):t=l[0]}else t=this.parseParenExpression();if(this.options.preserveParens){var g=this.startNodeAt(n,i);return g.expression=t,this.finishNode(g,"ParenthesizedExpression")}return t},re.parseParenItem=function(e){return e},re.parseParenArrowList=function(e,t,n){return this.parseArrowExpression(this.startNodeAt(e,t),n)};var se=[];re.parseNew=function(){var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(T.dot)){e.meta=t;var n=this.containsEsc;return e.property=this.parseIdent(!0),("target"!==e.property.name||n)&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is new.target"),this.inNonArrowFunction()||this.raiseRecoverable(e.start,"new.target can only be used in functions"),this.finishNode(e,"MetaProperty")}var i=this.start,r=this.startLoc;return e.callee=this.parseSubscripts(this.parseExprAtom(),i,r,!0),this.options.ecmaVersion>10&&"Import"===e.callee.type&&this.raise(e.callee.start,"Cannot use new with import(...)"),this.eat(T.parenL)?e.arguments=this.parseExprList(T.parenR,this.options.ecmaVersion>=8&&"Import"!==e.callee.type,!1):e.arguments=se,this.finishNode(e,"NewExpression")},re.parseTemplateElement=function(e){var t=e.isTagged,n=this.startNode();return this.type===T.invalidTemplate?(t||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),n.value={raw:this.value,cooked:null}):n.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),n.tail=this.type===T.backQuote,this.finishNode(n,"TemplateElement")},re.parseTemplate=function(e){void 0===e&&(e={});var t=e.isTagged;void 0===t&&(t=!1);var n=this.startNode();this.next(),n.expressions=[];var i=this.parseTemplateElement({isTagged:t});for(n.quasis=[i];!i.tail;)this.type===T.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(T.dollarBraceL),n.expressions.push(this.parseExpression()),this.expect(T.braceR),n.quasis.push(i=this.parseTemplateElement({isTagged:t}));return this.next(),this.finishNode(n,"TemplateLiteral")},re.isAsyncProp=function(e){return!e.computed&&"Identifier"===e.key.type&&"async"===e.key.name&&(this.type===T.name||this.type===T.num||this.type===T.string||this.type===T.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===T.star)&&!P.test(this.input.slice(this.lastTokEnd,this.start))},re.parseObj=function(e,t){var n=this.startNode(),i=!0,r={};for(n.properties=[],this.next();!this.eat(T.braceR);){if(i)i=!1;else if(this.expect(T.comma),this.afterTrailingComma(T.braceR))break;var s=this.parseProperty(e,t);e||this.checkPropClash(s,r,t),n.properties.push(s)}return this.finishNode(n,e?"ObjectPattern":"ObjectExpression")},re.parseProperty=function(e,t){var n,i,r,s,a=this.startNode();if(this.options.ecmaVersion>=9&&this.eat(T.ellipsis))return e?(a.argument=this.parseIdent(!1),this.type===T.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(a,"RestElement")):(this.type===T.parenL&&t&&(t.parenthesizedAssign<0&&(t.parenthesizedAssign=this.start),t.parenthesizedBind<0&&(t.parenthesizedBind=this.start)),a.argument=this.parseMaybeAssign(!1,t),this.type===T.comma&&t&&t.trailingComma<0&&(t.trailingComma=this.start),this.finishNode(a,"SpreadElement"));this.options.ecmaVersion>=6&&(a.method=!1,a.shorthand=!1,(e||t)&&(r=this.start,s=this.startLoc),e||(n=this.eat(T.star)));var o=this.containsEsc;return this.parsePropertyName(a),!e&&!o&&this.options.ecmaVersion>=8&&!n&&this.isAsyncProp(a)?(i=!0,n=this.options.ecmaVersion>=9&&this.eat(T.star),this.parsePropertyName(a,t)):i=!1,this.parsePropertyValue(a,e,n,i,r,s,t,o),this.finishNode(a,"Property")},re.parsePropertyValue=function(e,t,n,i,r,s,a,o){if((n||i)&&this.type===T.colon&&this.unexpected(),this.eat(T.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,a),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===T.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(n,i);else if(t||o||!(this.options.ecmaVersion>=5)||e.computed||"Identifier"!==e.key.type||"get"!==e.key.name&&"set"!==e.key.name||this.type===T.comma||this.type===T.braceR)this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((n||i)&&this.unexpected(),this.checkUnreserved(e.key),"await"!==e.key.name||this.awaitIdentPos||(this.awaitIdentPos=r),e.kind="init",t?e.value=this.parseMaybeDefault(r,s,e.key):this.type===T.eq&&a?(a.shorthandAssign<0&&(a.shorthandAssign=this.start),e.value=this.parseMaybeDefault(r,s,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected();else{(n||i)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var l="get"===e.kind?0:1;if(e.value.params.length!==l){var u=e.value.start;"get"===e.kind?this.raiseRecoverable(u,"getter should have no params"):this.raiseRecoverable(u,"setter should have exactly one param")}else"set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}},re.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(T.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(T.bracketR),e.key;e.computed=!1}return e.key=this.type===T.num||this.type===T.string?this.parseExprAtom():this.parseIdent("never"!==this.options.allowReserved)},re.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=e.expression=!1),this.options.ecmaVersion>=8&&(e.async=!1)},re.parseMethod=function(e,t,n){var i=this.startNode(),r=this.yieldPos,s=this.awaitPos,a=this.awaitIdentPos;return this.initFunction(i),this.options.ecmaVersion>=6&&(i.generator=e),this.options.ecmaVersion>=8&&(i.async=!!t),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(64|W(t,i.generator)|(n?128:0)),this.expect(T.parenL),i.params=this.parseBindingList(T.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(i,!1,!0),this.yieldPos=r,this.awaitPos=s,this.awaitIdentPos=a,this.finishNode(i,"FunctionExpression")},re.parseArrowExpression=function(e,t,n){var i=this.yieldPos,r=this.awaitPos,s=this.awaitIdentPos;return this.enterScope(16|W(n,!1)),this.initFunction(e),this.options.ecmaVersion>=8&&(e.async=!!n),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0,!1),this.yieldPos=i,this.awaitPos=r,this.awaitIdentPos=s,this.finishNode(e,"ArrowFunctionExpression")},re.parseFunctionBody=function(e,t,n){var i=t&&this.type!==T.braceL,r=this.strict,s=!1;if(i)e.body=this.parseMaybeAssign(),e.expression=!0,this.checkParams(e,!1);else{var a=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);r&&!a||(s=this.strictDirective(this.end))&&a&&this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list");var o=this.labels;this.labels=[],s&&(this.strict=!0),this.checkParams(e,!r&&!s&&!t&&!n&&this.isSimpleParamList(e.params)),e.body=this.parseBlock(!1),e.expression=!1,this.adaptDirectivePrologue(e.body.body),this.labels=o}this.exitScope(),this.strict&&e.id&&this.checkLVal(e.id,5),this.strict=r},re.isSimpleParamList=function(e){for(var t=0,n=e;t<n.length;t+=1)if("Identifier"!==n[t].type)return!1;return!0},re.checkParams=function(e,t){for(var n={},i=0,r=e.params;i<r.length;i+=1){var s=r[i];this.checkLVal(s,1,t?null:n)}},re.parseExprList=function(e,t,n,i){for(var r=[],s=!0;!this.eat(e);){if(s)s=!1;else if(this.expect(T.comma),t&&this.afterTrailingComma(e))break;var a=void 0;n&&this.type===T.comma?a=null:this.type===T.ellipsis?(a=this.parseSpread(i),i&&this.type===T.comma&&i.trailingComma<0&&(i.trailingComma=this.start)):a=this.parseMaybeAssign(!1,i),r.push(a)}return r},re.checkUnreserved=function(e){var t=e.start,n=e.end,i=e.name;this.inGenerator&&"yield"===i&&this.raiseRecoverable(t,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&"await"===i&&this.raiseRecoverable(t,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(i)&&this.raise(t,"Unexpected keyword '"+i+"'"),this.options.ecmaVersion<6&&-1!==this.input.slice(t,n).indexOf("\\")||(this.strict?this.reservedWordsStrict:this.reservedWords).test(i)&&(this.inAsync||"await"!==i||this.raiseRecoverable(t,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(t,"The keyword '"+i+"' is reserved"))},re.parseIdent=function(e,t){var n=this.startNode();return this.type===T.name?n.name=this.value:this.type.keyword?(n.name=this.type.keyword,"class"!==n.name&&"function"!==n.name||this.lastTokEnd===this.lastTokStart+1&&46===this.input.charCodeAt(this.lastTokStart)||this.context.pop()):this.unexpected(),this.next(),this.finishNode(n,"Identifier"),e||(this.checkUnreserved(n),"await"!==n.name||this.awaitIdentPos||(this.awaitIdentPos=n.start)),n},re.parseYield=function(e){this.yieldPos||(this.yieldPos=this.start);var t=this.startNode();return this.next(),this.type===T.semi||this.canInsertSemicolon()||this.type!==T.star&&!this.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(T.star),t.argument=this.parseMaybeAssign(e)),this.finishNode(t,"YieldExpression")},re.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var e=this.startNode();return this.next(),e.argument=this.parseMaybeUnary(null,!0),this.finishNode(e,"AwaitExpression")};var ae=V.prototype;ae.raise=function(e,t){var n=z(this.input,e);t+=" ("+n.line+":"+n.column+")";var i=new SyntaxError(t);throw i.pos=e,i.loc=n,i.raisedAt=this.pos,i},ae.raiseRecoverable=ae.raise,ae.curPosition=function(){if(this.options.locations)return new F(this.curLine,this.pos-this.lineStart)};var oe=V.prototype,le=function(e){this.flags=e,this.var=[],this.lexical=[],this.functions=[]};oe.enterScope=function(e){this.scopeStack.push(new le(e))},oe.exitScope=function(){this.scopeStack.pop()},oe.treatFunctionsAsVarInScope=function(e){return 2&e.flags||!this.inModule&&1&e.flags},oe.declareName=function(e,t,n){var i=!1;if(2===t){var r=this.currentScope();i=r.lexical.indexOf(e)>-1||r.functions.indexOf(e)>-1||r.var.indexOf(e)>-1,r.lexical.push(e),this.inModule&&1&r.flags&&delete this.undefinedExports[e]}else if(4===t)this.currentScope().lexical.push(e);else if(3===t){var s=this.currentScope();i=this.treatFunctionsAsVar?s.lexical.indexOf(e)>-1:s.lexical.indexOf(e)>-1||s.var.indexOf(e)>-1,s.functions.push(e)}else for(var a=this.scopeStack.length-1;a>=0;--a){var o=this.scopeStack[a];if(o.lexical.indexOf(e)>-1&&!(32&o.flags&&o.lexical[0]===e)||!this.treatFunctionsAsVarInScope(o)&&o.functions.indexOf(e)>-1){i=!0;break}if(o.var.push(e),this.inModule&&1&o.flags&&delete this.undefinedExports[e],3&o.flags)break}i&&this.raiseRecoverable(n,"Identifier '"+e+"' has already been declared")},oe.checkLocalExport=function(e){-1===this.scopeStack[0].lexical.indexOf(e.name)&&-1===this.scopeStack[0].var.indexOf(e.name)&&(this.undefinedExports[e.name]=e)},oe.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},oe.currentVarScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(3&t.flags)return t}},oe.currentThisScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(3&t.flags&&!(16&t.flags))return t}};var ue=function(e,t,n){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new B(e,n)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0])},ce=V.prototype;function de(e,t,n,i){return e.type=t,e.end=n,this.options.locations&&(e.loc.end=i),this.options.ranges&&(e.range[1]=n),e}ce.startNode=function(){return new ue(this,this.start,this.startLoc)},ce.startNodeAt=function(e,t){return new ue(this,e,t)},ce.finishNode=function(e,t){return de.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},ce.finishNodeAt=function(e,t,n,i){return de.call(this,e,t,n,i)};var he=function(e,t,n,i,r){this.token=e,this.isExpr=!!t,this.preserveSpace=!!n,this.override=i,this.generator=!!r},pe={b_stat:new he("{",!1),b_expr:new he("{",!0),b_tmpl:new he("${",!1),p_stat:new he("(",!1),p_expr:new he("(",!0),q_tmpl:new he("`",!0,!0,(function(e){return e.tryReadTemplateToken()})),f_stat:new he("function",!1),f_expr:new he("function",!0),f_expr_gen:new he("function",!0,!1,null,!0),f_gen:new he("function",!1,!1,null,!0)},me=V.prototype;me.initialContext=function(){return[pe.b_stat]},me.braceIsBlock=function(e){var t=this.curContext();return t===pe.f_expr||t===pe.f_stat||(e!==T.colon||t!==pe.b_stat&&t!==pe.b_expr?e===T._return||e===T.name&&this.exprAllowed?P.test(this.input.slice(this.lastTokEnd,this.start)):e===T._else||e===T.semi||e===T.eof||e===T.parenR||e===T.arrow||(e===T.braceL?t===pe.b_stat:e!==T._var&&e!==T._const&&e!==T.name&&!this.exprAllowed):!t.isExpr)},me.inGeneratorContext=function(){for(var e=this.context.length-1;e>=1;e--){var t=this.context[e];if("function"===t.token)return t.generator}return!1},me.updateContext=function(e){var t,n=this.type;n.keyword&&e===T.dot?this.exprAllowed=!1:(t=n.updateContext)?t.call(this,e):this.exprAllowed=n.beforeExpr},T.parenR.updateContext=T.braceR.updateContext=function(){if(1!==this.context.length){var e=this.context.pop();e===pe.b_stat&&"function"===this.curContext().token&&(e=this.context.pop()),this.exprAllowed=!e.isExpr}else this.exprAllowed=!0},T.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?pe.b_stat:pe.b_expr),this.exprAllowed=!0},T.dollarBraceL.updateContext=function(){this.context.push(pe.b_tmpl),this.exprAllowed=!0},T.parenL.updateContext=function(e){var t=e===T._if||e===T._for||e===T._with||e===T._while;this.context.push(t?pe.p_stat:pe.p_expr),this.exprAllowed=!0},T.incDec.updateContext=function(){},T._function.updateContext=T._class.updateContext=function(e){!e.beforeExpr||e===T.semi||e===T._else||e===T._return&&P.test(this.input.slice(this.lastTokEnd,this.start))||(e===T.colon||e===T.braceL)&&this.curContext()===pe.b_stat?this.context.push(pe.f_stat):this.context.push(pe.f_expr),this.exprAllowed=!1},T.backQuote.updateContext=function(){this.curContext()===pe.q_tmpl?this.context.pop():this.context.push(pe.q_tmpl),this.exprAllowed=!1},T.star.updateContext=function(e){if(e===T._function){var t=this.context.length-1;this.context[t]===pe.f_expr?this.context[t]=pe.f_expr_gen:this.context[t]=pe.f_gen}this.exprAllowed=!0},T.name.updateContext=function(e){var t=!1;this.options.ecmaVersion>=6&&e!==T.dot&&("of"===this.value&&!this.exprAllowed||"yield"===this.value&&this.inGeneratorContext())&&(t=!0),this.exprAllowed=t};var fe="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",ge={9:fe,10:"ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic",11:"ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic"},_e="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",ve="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",ye={9:ve,10:"Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",11:"Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"},be={};function xe(e){var t=be[e]={binary:H(ge[e]+" "+_e),nonBinary:{General_Category:H(_e),Script:H(ye[e])}};t.nonBinary.Script_Extensions=t.nonBinary.Script,t.nonBinary.gc=t.nonBinary.General_Category,t.nonBinary.sc=t.nonBinary.Script,t.nonBinary.scx=t.nonBinary.Script_Extensions}xe(9),xe(10),xe(11);var we=V.prototype,ke=function(e){this.parser=e,this.validFlags="gim"+(e.options.ecmaVersion>=6?"uy":"")+(e.options.ecmaVersion>=9?"s":""),this.unicodeProperties=be[e.options.ecmaVersion>=11?11:e.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[]};function Me(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}function Le(e){return 36===e||e>=40&&e<=43||46===e||63===e||e>=91&&e<=94||e>=123&&e<=125}function Se(e){return e>=65&&e<=90||e>=97&&e<=122}function De(e){return Se(e)||95===e}function Ee(e){return De(e)||Te(e)}function Te(e){return e>=48&&e<=57}function Pe(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function Ce(e){return e>=65&&e<=70?e-65+10:e>=97&&e<=102?e-97+10:e-48}function Ye(e){return e>=48&&e<=55}ke.prototype.reset=function(e,t,n){var i=-1!==n.indexOf("u");this.start=0|e,this.source=t+"",this.flags=n,this.switchU=i&&this.parser.options.ecmaVersion>=6,this.switchN=i&&this.parser.options.ecmaVersion>=9},ke.prototype.raise=function(e){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+e)},ke.prototype.at=function(e){var t=this.source,n=t.length;if(e>=n)return-1;var i=t.charCodeAt(e);if(!this.switchU||i<=55295||i>=57344||e+1>=n)return i;var r=t.charCodeAt(e+1);return r>=56320&&r<=57343?(i<<10)+r-56613888:i},ke.prototype.nextIndex=function(e){var t=this.source,n=t.length;if(e>=n)return n;var i,r=t.charCodeAt(e);return!this.switchU||r<=55295||r>=57344||e+1>=n||(i=t.charCodeAt(e+1))<56320||i>57343?e+1:e+2},ke.prototype.current=function(){return this.at(this.pos)},ke.prototype.lookahead=function(){return this.at(this.nextIndex(this.pos))},ke.prototype.advance=function(){this.pos=this.nextIndex(this.pos)},ke.prototype.eat=function(e){return this.current()===e&&(this.advance(),!0)},we.validateRegExpFlags=function(e){for(var t=e.validFlags,n=e.flags,i=0;i<n.length;i++){var r=n.charAt(i);-1===t.indexOf(r)&&this.raise(e.start,"Invalid regular expression flag"),n.indexOf(r,i+1)>-1&&this.raise(e.start,"Duplicate regular expression flag")}},we.validateRegExpPattern=function(e){this.regexp_pattern(e),!e.switchN&&this.options.ecmaVersion>=9&&e.groupNames.length>0&&(e.switchN=!0,this.regexp_pattern(e))},we.regexp_pattern=function(e){e.pos=0,e.lastIntValue=0,e.lastStringValue="",e.lastAssertionIsQuantifiable=!1,e.numCapturingParens=0,e.maxBackReference=0,e.groupNames.length=0,e.backReferenceNames.length=0,this.regexp_disjunction(e),e.pos!==e.source.length&&(e.eat(41)&&e.raise("Unmatched ')'"),(e.eat(93)||e.eat(125))&&e.raise("Lone quantifier brackets")),e.maxBackReference>e.numCapturingParens&&e.raise("Invalid escape");for(var t=0,n=e.backReferenceNames;t<n.length;t+=1){var i=n[t];-1===e.groupNames.indexOf(i)&&e.raise("Invalid named capture referenced")}},we.regexp_disjunction=function(e){for(this.regexp_alternative(e);e.eat(124);)this.regexp_alternative(e);this.regexp_eatQuantifier(e,!0)&&e.raise("Nothing to repeat"),e.eat(123)&&e.raise("Lone quantifier brackets")},we.regexp_alternative=function(e){for(;e.pos<e.source.length&&this.regexp_eatTerm(e););},we.regexp_eatTerm=function(e){return this.regexp_eatAssertion(e)?(e.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(e)&&e.switchU&&e.raise("Invalid quantifier"),!0):!!(e.switchU?this.regexp_eatAtom(e):this.regexp_eatExtendedAtom(e))&&(this.regexp_eatQuantifier(e),!0)},we.regexp_eatAssertion=function(e){var t=e.pos;if(e.lastAssertionIsQuantifiable=!1,e.eat(94)||e.eat(36))return!0;if(e.eat(92)){if(e.eat(66)||e.eat(98))return!0;e.pos=t}if(e.eat(40)&&e.eat(63)){var n=!1;if(this.options.ecmaVersion>=9&&(n=e.eat(60)),e.eat(61)||e.eat(33))return this.regexp_disjunction(e),e.eat(41)||e.raise("Unterminated group"),e.lastAssertionIsQuantifiable=!n,!0}return e.pos=t,!1},we.regexp_eatQuantifier=function(e,t){return void 0===t&&(t=!1),!!this.regexp_eatQuantifierPrefix(e,t)&&(e.eat(63),!0)},we.regexp_eatQuantifierPrefix=function(e,t){return e.eat(42)||e.eat(43)||e.eat(63)||this.regexp_eatBracedQuantifier(e,t)},we.regexp_eatBracedQuantifier=function(e,t){var n=e.pos;if(e.eat(123)){var i=0,r=-1;if(this.regexp_eatDecimalDigits(e)&&(i=e.lastIntValue,e.eat(44)&&this.regexp_eatDecimalDigits(e)&&(r=e.lastIntValue),e.eat(125)))return-1!==r&&r<i&&!t&&e.raise("numbers out of order in {} quantifier"),!0;e.switchU&&!t&&e.raise("Incomplete quantifier"),e.pos=n}return!1},we.regexp_eatAtom=function(e){return this.regexp_eatPatternCharacters(e)||e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)},we.regexp_eatReverseSolidusAtomEscape=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatAtomEscape(e))return!0;e.pos=t}return!1},we.regexp_eatUncapturingGroup=function(e){var t=e.pos;if(e.eat(40)){if(e.eat(63)&&e.eat(58)){if(this.regexp_disjunction(e),e.eat(41))return!0;e.raise("Unterminated group")}e.pos=t}return!1},we.regexp_eatCapturingGroup=function(e){if(e.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(e):63===e.current()&&e.raise("Invalid group"),this.regexp_disjunction(e),e.eat(41))return e.numCapturingParens+=1,!0;e.raise("Unterminated group")}return!1},we.regexp_eatExtendedAtom=function(e){return e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)||this.regexp_eatInvalidBracedQuantifier(e)||this.regexp_eatExtendedPatternCharacter(e)},we.regexp_eatInvalidBracedQuantifier=function(e){return this.regexp_eatBracedQuantifier(e,!0)&&e.raise("Nothing to repeat"),!1},we.regexp_eatSyntaxCharacter=function(e){var t=e.current();return!!Le(t)&&(e.lastIntValue=t,e.advance(),!0)},we.regexp_eatPatternCharacters=function(e){for(var t=e.pos,n=0;-1!==(n=e.current())&&!Le(n);)e.advance();return e.pos!==t},we.regexp_eatExtendedPatternCharacter=function(e){var t=e.current();return!(-1===t||36===t||t>=40&&t<=43||46===t||63===t||91===t||94===t||124===t||(e.advance(),0))},we.regexp_groupSpecifier=function(e){if(e.eat(63)){if(this.regexp_eatGroupName(e))return-1!==e.groupNames.indexOf(e.lastStringValue)&&e.raise("Duplicate capture group name"),void e.groupNames.push(e.lastStringValue);e.raise("Invalid group")}},we.regexp_eatGroupName=function(e){if(e.lastStringValue="",e.eat(60)){if(this.regexp_eatRegExpIdentifierName(e)&&e.eat(62))return!0;e.raise("Invalid capture group name")}return!1},we.regexp_eatRegExpIdentifierName=function(e){if(e.lastStringValue="",this.regexp_eatRegExpIdentifierStart(e)){for(e.lastStringValue+=Me(e.lastIntValue);this.regexp_eatRegExpIdentifierPart(e);)e.lastStringValue+=Me(e.lastIntValue);return!0}return!1},we.regexp_eatRegExpIdentifierStart=function(e){var t=e.pos,n=e.current();return e.advance(),92===n&&this.regexp_eatRegExpUnicodeEscapeSequence(e)&&(n=e.lastIntValue),function(e){return x(e,!0)||36===e||95===e}(n)?(e.lastIntValue=n,!0):(e.pos=t,!1)},we.regexp_eatRegExpIdentifierPart=function(e){var t=e.pos,n=e.current();return e.advance(),92===n&&this.regexp_eatRegExpUnicodeEscapeSequence(e)&&(n=e.lastIntValue),function(e){return w(e,!0)||36===e||95===e||8204===e||8205===e}(n)?(e.lastIntValue=n,!0):(e.pos=t,!1)},we.regexp_eatAtomEscape=function(e){return!!(this.regexp_eatBackReference(e)||this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)||e.switchN&&this.regexp_eatKGroupName(e))||(e.switchU&&(99===e.current()&&e.raise("Invalid unicode escape"),e.raise("Invalid escape")),!1)},we.regexp_eatBackReference=function(e){var t=e.pos;if(this.regexp_eatDecimalEscape(e)){var n=e.lastIntValue;if(e.switchU)return n>e.maxBackReference&&(e.maxBackReference=n),!0;if(n<=e.numCapturingParens)return!0;e.pos=t}return!1},we.regexp_eatKGroupName=function(e){if(e.eat(107)){if(this.regexp_eatGroupName(e))return e.backReferenceNames.push(e.lastStringValue),!0;e.raise("Invalid named reference")}return!1},we.regexp_eatCharacterEscape=function(e){return this.regexp_eatControlEscape(e)||this.regexp_eatCControlLetter(e)||this.regexp_eatZero(e)||this.regexp_eatHexEscapeSequence(e)||this.regexp_eatRegExpUnicodeEscapeSequence(e)||!e.switchU&&this.regexp_eatLegacyOctalEscapeSequence(e)||this.regexp_eatIdentityEscape(e)},we.regexp_eatCControlLetter=function(e){var t=e.pos;if(e.eat(99)){if(this.regexp_eatControlLetter(e))return!0;e.pos=t}return!1},we.regexp_eatZero=function(e){return 48===e.current()&&!Te(e.lookahead())&&(e.lastIntValue=0,e.advance(),!0)},we.regexp_eatControlEscape=function(e){var t=e.current();return 116===t?(e.lastIntValue=9,e.advance(),!0):110===t?(e.lastIntValue=10,e.advance(),!0):118===t?(e.lastIntValue=11,e.advance(),!0):102===t?(e.lastIntValue=12,e.advance(),!0):114===t&&(e.lastIntValue=13,e.advance(),!0)},we.regexp_eatControlLetter=function(e){var t=e.current();return!!Se(t)&&(e.lastIntValue=t%32,e.advance(),!0)},we.regexp_eatRegExpUnicodeEscapeSequence=function(e){var t,n=e.pos;if(e.eat(117)){if(this.regexp_eatFixedHexDigits(e,4)){var i=e.lastIntValue;if(e.switchU&&i>=55296&&i<=56319){var r=e.pos;if(e.eat(92)&&e.eat(117)&&this.regexp_eatFixedHexDigits(e,4)){var s=e.lastIntValue;if(s>=56320&&s<=57343)return e.lastIntValue=1024*(i-55296)+(s-56320)+65536,!0}e.pos=r,e.lastIntValue=i}return!0}if(e.switchU&&e.eat(123)&&this.regexp_eatHexDigits(e)&&e.eat(125)&&(t=e.lastIntValue)>=0&&t<=1114111)return!0;e.switchU&&e.raise("Invalid unicode escape"),e.pos=n}return!1},we.regexp_eatIdentityEscape=function(e){if(e.switchU)return!!this.regexp_eatSyntaxCharacter(e)||!!e.eat(47)&&(e.lastIntValue=47,!0);var t=e.current();return!(99===t||e.switchN&&107===t||(e.lastIntValue=t,e.advance(),0))},we.regexp_eatDecimalEscape=function(e){e.lastIntValue=0;var t=e.current();if(t>=49&&t<=57){do{e.lastIntValue=10*e.lastIntValue+(t-48),e.advance()}while((t=e.current())>=48&&t<=57);return!0}return!1},we.regexp_eatCharacterClassEscape=function(e){var t=e.current();if(function(e){return 100===e||68===e||115===e||83===e||119===e||87===e}(t))return e.lastIntValue=-1,e.advance(),!0;if(e.switchU&&this.options.ecmaVersion>=9&&(80===t||112===t)){if(e.lastIntValue=-1,e.advance(),e.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(e)&&e.eat(125))return!0;e.raise("Invalid property name")}return!1},we.regexp_eatUnicodePropertyValueExpression=function(e){var t=e.pos;if(this.regexp_eatUnicodePropertyName(e)&&e.eat(61)){var n=e.lastStringValue;if(this.regexp_eatUnicodePropertyValue(e)){var i=e.lastStringValue;return this.regexp_validateUnicodePropertyNameAndValue(e,n,i),!0}}if(e.pos=t,this.regexp_eatLoneUnicodePropertyNameOrValue(e)){var r=e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e,r),!0}return!1},we.regexp_validateUnicodePropertyNameAndValue=function(e,t,n){R(e.unicodeProperties.nonBinary,t)||e.raise("Invalid property name"),e.unicodeProperties.nonBinary[t].test(n)||e.raise("Invalid property value")},we.regexp_validateUnicodePropertyNameOrValue=function(e,t){e.unicodeProperties.binary.test(t)||e.raise("Invalid property name")},we.regexp_eatUnicodePropertyName=function(e){var t=0;for(e.lastStringValue="";De(t=e.current());)e.lastStringValue+=Me(t),e.advance();return""!==e.lastStringValue},we.regexp_eatUnicodePropertyValue=function(e){var t=0;for(e.lastStringValue="";Ee(t=e.current());)e.lastStringValue+=Me(t),e.advance();return""!==e.lastStringValue},we.regexp_eatLoneUnicodePropertyNameOrValue=function(e){return this.regexp_eatUnicodePropertyValue(e)},we.regexp_eatCharacterClass=function(e){if(e.eat(91)){if(e.eat(94),this.regexp_classRanges(e),e.eat(93))return!0;e.raise("Unterminated character class")}return!1},we.regexp_classRanges=function(e){for(;this.regexp_eatClassAtom(e);){var t=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassAtom(e)){var n=e.lastIntValue;!e.switchU||-1!==t&&-1!==n||e.raise("Invalid character class"),-1!==t&&-1!==n&&t>n&&e.raise("Range out of order in character class")}}},we.regexp_eatClassAtom=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatClassEscape(e))return!0;if(e.switchU){var n=e.current();(99===n||Ye(n))&&e.raise("Invalid class escape"),e.raise("Invalid escape")}e.pos=t}var i=e.current();return 93!==i&&(e.lastIntValue=i,e.advance(),!0)},we.regexp_eatClassEscape=function(e){var t=e.pos;if(e.eat(98))return e.lastIntValue=8,!0;if(e.switchU&&e.eat(45))return e.lastIntValue=45,!0;if(!e.switchU&&e.eat(99)){if(this.regexp_eatClassControlLetter(e))return!0;e.pos=t}return this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)},we.regexp_eatClassControlLetter=function(e){var t=e.current();return!(!Te(t)&&95!==t||(e.lastIntValue=t%32,e.advance(),0))},we.regexp_eatHexEscapeSequence=function(e){var t=e.pos;if(e.eat(120)){if(this.regexp_eatFixedHexDigits(e,2))return!0;e.switchU&&e.raise("Invalid escape"),e.pos=t}return!1},we.regexp_eatDecimalDigits=function(e){var t=e.pos,n=0;for(e.lastIntValue=0;Te(n=e.current());)e.lastIntValue=10*e.lastIntValue+(n-48),e.advance();return e.pos!==t},we.regexp_eatHexDigits=function(e){var t=e.pos,n=0;for(e.lastIntValue=0;Pe(n=e.current());)e.lastIntValue=16*e.lastIntValue+Ce(n),e.advance();return e.pos!==t},we.regexp_eatLegacyOctalEscapeSequence=function(e){if(this.regexp_eatOctalDigit(e)){var t=e.lastIntValue;if(this.regexp_eatOctalDigit(e)){var n=e.lastIntValue;t<=3&&this.regexp_eatOctalDigit(e)?e.lastIntValue=64*t+8*n+e.lastIntValue:e.lastIntValue=8*t+n}else e.lastIntValue=t;return!0}return!1},we.regexp_eatOctalDigit=function(e){var t=e.current();return Ye(t)?(e.lastIntValue=t-48,e.advance(),!0):(e.lastIntValue=0,!1)},we.regexp_eatFixedHexDigits=function(e,t){var n=e.pos;e.lastIntValue=0;for(var i=0;i<t;++i){var r=e.current();if(!Pe(r))return e.pos=n,!1;e.lastIntValue=16*e.lastIntValue+Ce(r),e.advance()}return!0};var Ae=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new B(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end])},Oe=V.prototype;function Ne(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}Oe.next=function(){this.options.onToken&&this.options.onToken(new Ae(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},Oe.getToken=function(){return this.next(),new Ae(this)},"undefined"!=typeof Symbol&&(Oe[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===T.eof,value:t}}}}),Oe.curContext=function(){return this.context[this.context.length-1]},Oe.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(T.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},Oe.readToken=function(e){return x(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},Oe.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},Oe.skipBlockComment=function(){var e,t=this.options.onComment&&this.curPosition(),n=this.pos,i=this.input.indexOf("*/",this.pos+=2);if(-1===i&&this.raise(this.pos-2,"Unterminated comment"),this.pos=i+2,this.options.locations)for(C.lastIndex=n;(e=C.exec(this.input))&&e.index<this.pos;)++this.curLine,this.lineStart=e.index+e[0].length;this.options.onComment&&this.options.onComment(!0,this.input.slice(n+2,i),n,this.pos,t,this.curPosition())},Oe.skipLineComment=function(e){for(var t=this.pos,n=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&!Y(i);)i=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(t+e,this.pos),t,this.pos,n,this.curPosition())},Oe.skipSpace=function(){e:for(;this.pos<this.input.length;){var e=this.input.charCodeAt(this.pos);switch(e){case 32:case 160:++this.pos;break;case 13:10===this.input.charCodeAt(this.pos+1)&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(!(e>8&&e<14||e>=5760&&A.test(String.fromCharCode(e))))break e;++this.pos}}},Oe.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var n=this.type;this.type=e,this.value=t,this.updateContext(n)},Oe.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(T.ellipsis)):(++this.pos,this.finishToken(T.dot))},Oe.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(T.assign,2):this.finishOp(T.slash,1)},Oe.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),n=1,i=42===e?T.star:T.modulo;return this.options.ecmaVersion>=7&&42===e&&42===t&&(++n,i=T.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(T.assign,n+1):this.finishOp(i,n)},Oe.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?this.finishOp(124===e?T.logicalOR:T.logicalAND,2):61===t?this.finishOp(T.assign,2):this.finishOp(124===e?T.bitwiseOR:T.bitwiseAND,1)},Oe.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(T.assign,2):this.finishOp(T.bitwiseXOR,1)},Oe.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45!==t||this.inModule||62!==this.input.charCodeAt(this.pos+2)||0!==this.lastTokEnd&&!P.test(this.input.slice(this.lastTokEnd,this.pos))?this.finishOp(T.incDec,2):(this.skipLineComment(3),this.skipSpace(),this.nextToken()):61===t?this.finishOp(T.assign,2):this.finishOp(T.plusMin,1)},Oe.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),n=1;return t===e?(n=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+n)?this.finishOp(T.assign,n+1):this.finishOp(T.bitShift,n)):33!==t||60!==e||this.inModule||45!==this.input.charCodeAt(this.pos+2)||45!==this.input.charCodeAt(this.pos+3)?(61===t&&(n=2),this.finishOp(T.relational,n)):(this.skipLineComment(4),this.skipSpace(),this.nextToken())},Oe.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(T.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(T.arrow)):this.finishOp(61===e?T.eq:T.prefix,1)},Oe.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(T.parenL);case 41:return++this.pos,this.finishToken(T.parenR);case 59:return++this.pos,this.finishToken(T.semi);case 44:return++this.pos,this.finishToken(T.comma);case 91:return++this.pos,this.finishToken(T.bracketL);case 93:return++this.pos,this.finishToken(T.bracketR);case 123:return++this.pos,this.finishToken(T.braceL);case 125:return++this.pos,this.finishToken(T.braceR);case 58:return++this.pos,this.finishToken(T.colon);case 63:return++this.pos,this.finishToken(T.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(T.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 126:return this.finishOp(T.prefix,1)}this.raise(this.pos,"Unexpected character '"+Ne(e)+"'")},Oe.finishOp=function(e,t){var n=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,n)},Oe.readRegexp=function(){for(var e,t,n=this.pos;;){this.pos>=this.input.length&&this.raise(n,"Unterminated regular expression");var i=this.input.charAt(this.pos);if(P.test(i)&&this.raise(n,"Unterminated regular expression"),e)e=!1;else{if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i}++this.pos}var r=this.input.slice(n,this.pos);++this.pos;var s=this.pos,a=this.readWord1();this.containsEsc&&this.unexpected(s);var o=this.regexpState||(this.regexpState=new ke(this));o.reset(n,r,a),this.validateRegExpFlags(o),this.validateRegExpPattern(o);var l=null;try{l=new RegExp(r,a)}catch(e){}return this.finishToken(T.regexp,{pattern:r,flags:a,value:l})},Oe.readInt=function(e,t){for(var n=this.pos,i=0,r=0,s=null==t?1/0:t;r<s;++r){var a,o=this.input.charCodeAt(this.pos);if((a=o>=97?o-97+10:o>=65?o-65+10:o>=48&&o<=57?o-48:1/0)>=e)break;++this.pos,i=i*e+a}return this.pos===n||null!=t&&this.pos-n!==t?null:i},Oe.readRadixNumber=function(e){var t=this.pos;this.pos+=2;var n=this.readInt(e);return null==n&&this.raise(this.start+2,"Expected number in radix "+e),this.options.ecmaVersion>=11&&110===this.input.charCodeAt(this.pos)?(n="undefined"!=typeof BigInt?BigInt(this.input.slice(t,this.pos)):null,++this.pos):x(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(T.num,n)},Oe.readNumber=function(e){var t=this.pos;e||null!==this.readInt(10)||this.raise(t,"Invalid number");var n=this.pos-t>=2&&48===this.input.charCodeAt(t);n&&this.strict&&this.raise(t,"Invalid number"),n&&/[89]/.test(this.input.slice(t,this.pos))&&(n=!1);var i=this.input.charCodeAt(this.pos);if(!n&&!e&&this.options.ecmaVersion>=11&&110===i){var r=this.input.slice(t,this.pos),s="undefined"!=typeof BigInt?BigInt(r):null;return++this.pos,x(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(T.num,s)}46!==i||n||(++this.pos,this.readInt(10),i=this.input.charCodeAt(this.pos)),69!==i&&101!==i||n||(43!==(i=this.input.charCodeAt(++this.pos))&&45!==i||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number")),x(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var a=this.input.slice(t,this.pos),o=n?parseInt(a,8):parseFloat(a);return this.finishToken(T.num,o)},Oe.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.invalidStringToken(t,"Code point out of bounds")}else e=this.readHexChar(4);return e},Oe.readString=function(e){for(var t="",n=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var i=this.input.charCodeAt(this.pos);if(i===e)break;92===i?(t+=this.input.slice(n,this.pos),t+=this.readEscapedChar(!1),n=this.pos):(Y(i,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos)}return t+=this.input.slice(n,this.pos++),this.finishToken(T.string,t)};var je={};Oe.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken()}catch(e){if(e!==je)throw e;this.readInvalidTemplateToken()}this.inTemplateElement=!1},Oe.invalidStringToken=function(e,t){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw je;this.raise(e,t)},Oe.readTmplToken=function(){for(var e="",t=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var n=this.input.charCodeAt(this.pos);if(96===n||36===n&&123===this.input.charCodeAt(this.pos+1))return this.pos!==this.start||this.type!==T.template&&this.type!==T.invalidTemplate?(e+=this.input.slice(t,this.pos),this.finishToken(T.template,e)):36===n?(this.pos+=2,this.finishToken(T.dollarBraceL)):(++this.pos,this.finishToken(T.backQuote));if(92===n)e+=this.input.slice(t,this.pos),e+=this.readEscapedChar(!0),t=this.pos;else if(Y(n)){switch(e+=this.input.slice(t,this.pos),++this.pos,n){case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:e+="\n";break;default:e+=String.fromCharCode(n)}this.options.locations&&(++this.curLine,this.lineStart=this.pos),t=this.pos}else++this.pos}},Oe.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if("{"!==this.input[this.pos+1])break;case"`":return this.finishToken(T.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template")},Oe.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return Ne(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(t>=48&&t<=55){var n=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],i=parseInt(n,8);return i>255&&(n=n.slice(0,-1),i=parseInt(n,8)),this.pos+=n.length-1,t=this.input.charCodeAt(this.pos),"0"===n&&56!==t&&57!==t||!this.strict&&!e||this.invalidStringToken(this.pos-1-n.length,e?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(i)}return Y(t)?"":String.fromCharCode(t)}},Oe.readHexChar=function(e){var t=this.pos,n=this.readInt(16,e);return null===n&&this.invalidStringToken(t,"Bad character escape sequence"),n},Oe.readWord1=function(){this.containsEsc=!1;for(var e="",t=!0,n=this.pos,i=this.options.ecmaVersion>=6;this.pos<this.input.length;){var r=this.fullCharCodeAtPos();if(w(r,i))this.pos+=r<=65535?1:2;else{if(92!==r)break;this.containsEsc=!0,e+=this.input.slice(n,this.pos);var s=this.pos;117!==this.input.charCodeAt(++this.pos)&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var a=this.readCodePoint();(t?x:w)(a,i)||this.invalidStringToken(s,"Invalid Unicode escape"),e+=Ne(a),n=this.pos}t=!1}return e+this.input.slice(n,this.pos)},Oe.readWord=function(){var e=this.readWord1(),t=T.name;return this.keywords.test(e)&&(this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+e),t=D[e]),this.finishToken(t,e)},V.acorn={Parser:V,version:"6.4.2",defaultOptions:U,Position:F,SourceLocation:B,getLineInfo:z,Node:ue,TokenType:k,tokTypes:T,keywordTypes:D,TokContext:he,tokContexts:pe,isIdentifierChar:w,isIdentifierStart:x,Token:Ae,isNewLine:Y,lineBreak:P,lineBreakG:C,nonASCIIwhitespace:A};var qe=function(e,t){"string"==typeof e&&(e=V.parse(e,qe.PARSE_OPTIONS)),this.nodeConstructor=e.constructor;var n=new this.nodeConstructor({options:{}});for(var i in e)n[i]="body"===i?e[i].slice():e[i];this.ast=n,this.initFunc_=t,this.paused_=!1,this.polyfills_=[],this.functionCounter_=0,this.stepFunctions_=Object.create(null);var r,s,a=/^step([A-Z]\w*)$/;for(var o in this)"function"==typeof this[o]&&(r=o.match(a))&&(this.stepFunctions_[r[1]]=this[o].bind(this));this.globalScope=this.createScope(this.ast,null),this.globalObject=this.globalScope.object,this.ast=V.parse(this.polyfills_.join("\n"),qe.PARSE_OPTIONS),this.polyfills_=void 0,qe.stripLocations_(this.ast,void 0,void 0),(s=new qe.State(this.ast,this.globalScope)).done=!1,this.stateStack=[s],this.run(),this.value=void 0,this.ast=n,(s=new qe.State(this.ast,this.globalScope)).done=!1,this.stateStack.length=0,this.stateStack[0]=s,this.stateStack=this.stateStack};qe.Completion={NORMAL:0,BREAK:1,CONTINUE:2,RETURN:3,THROW:4},qe.PARSE_OPTIONS={ecmaVersion:5},qe.READONLY_DESCRIPTOR={configurable:!0,enumerable:!0,writable:!1},qe.NONENUMERABLE_DESCRIPTOR={configurable:!0,enumerable:!1,writable:!0},qe.READONLY_NONENUMERABLE_DESCRIPTOR={configurable:!0,enumerable:!1,writable:!1},qe.VARIABLE_DESCRIPTOR={configurable:!1,enumerable:!0,writable:!0},qe.STEP_ERROR={STEP_ERROR:!0},qe.SCOPE_REFERENCE={SCOPE_REFERENCE:!0},qe.VALUE_IN_DESCRIPTOR={VALUE_IN_DESCRIPTOR:!0},qe.REGEXP_TIMEOUT={REGEXP_TIMEOUT:!0},qe.toStringCycles_=[],qe.vm=null,qe.WORKER_CODE=["onmessage = function(e) {","var result;","var data = e.data;","switch (data[0]) {","case 'split':","result = data[1].split(data[2], data[3]);","break;","case 'match':","result = data[1].match(data[2]);","break;","case 'search':","result = data[1].search(data[2]);","break;","case 'replace':","result = data[1].replace(data[2], data[3]);","break;","case 'exec':","var regexp = data[1];","regexp.lastIndex = data[2];","result = [regexp.exec(data[3]), data[1].lastIndex];","break;","default:","throw Error('Unknown RegExp operation: ' + data[0]);","}","postMessage(result);","};"],qe.legalArrayLength=function(e){var t=e>>>0;return t===Number(e)?t:NaN},qe.legalArrayIndex=function(e){var t=e>>>0;return String(t)===String(e)&&4294967295!==t?t:NaN},qe.stripLocations_=function(e,t,n){for(var i in t?e.start=t:delete e.start,n?e.end=n:delete e.end,e)if(e.hasOwnProperty(i)){var r=e[i];r&&"object"==typeof r&&qe.stripLocations_(r,t,n)}},qe.prototype.REGEXP_MODE=2,qe.prototype.REGEXP_THREAD_TIMEOUT=1e3,qe.prototype.getterStep_=!1,qe.prototype.setterStep_=!1,qe.prototype.appendCode=function(e){var t=this.stateStack[0];if(!t||"Program"!==t.node.type)throw Error("Expecting original AST to start with a Program node.");if("string"==typeof e&&(e=V.parse(e,qe.PARSE_OPTIONS)),!e||"Program"!==e.type)throw Error("Expecting new AST to start with a Program node.");this.populateScope_(e,t.scope),Array.prototype.push.apply(t.node.body,e.body),t.done=!1},qe.prototype.step=function(){var e=this.stateStack;do{var t=e[e.length-1];if(!t)return!1;var n=t.node,i=n.type;if("Program"===i&&t.done)return!1;if(this.paused_)return!0;try{var r=this.stepFunctions_[i](e,t,n)}catch(e){if(e!==qe.STEP_ERROR)throw e}if(r&&e.push(r),this.getterStep_)throw Error("Getter not supported in this context");if(this.setterStep_)throw Error("Setter not supported in this context")}while(!n.end);return!0},qe.prototype.run=function(){for(;!this.paused_&&this.step(););return this.paused_},qe.prototype.initGlobal=function(e){this.setProperty(e,"NaN",NaN,qe.READONLY_DESCRIPTOR),this.setProperty(e,"Infinity",1/0,qe.READONLY_DESCRIPTOR),this.setProperty(e,"undefined",void 0,qe.READONLY_DESCRIPTOR),this.setProperty(e,"window",e,qe.READONLY_DESCRIPTOR),this.setProperty(e,"this",e),this.setProperty(e,"self",e),this.OBJECT_PROTO=new qe.Object(null),this.FUNCTION_PROTO=new qe.Object(this.OBJECT_PROTO),this.initFunction(e),this.initObject(e),e.proto=this.OBJECT_PROTO,this.setProperty(e,"constructor",this.OBJECT,qe.NONENUMERABLE_DESCRIPTOR),this.initArray(e),this.initString(e),this.initBoolean(e),this.initNumber(e),this.initDate(e),this.initRegExp(e),this.initError(e),this.initMath(e),this.initJSON(e);var t=this,n=this.createNativeFunction((function(e){throw EvalError("Can't happen")}),!1);n.eval=!0,this.setProperty(e,"eval",n),this.setProperty(e,"parseInt",this.createNativeFunction(parseInt,!1)),this.setProperty(e,"parseFloat",this.createNativeFunction(parseFloat,!1)),this.setProperty(e,"isNaN",this.createNativeFunction(isNaN,!1)),this.setProperty(e,"isFinite",this.createNativeFunction(isFinite,!1));for(var i=[[escape,"escape"],[unescape,"unescape"],[decodeURI,"decodeURI"],[decodeURIComponent,"decodeURIComponent"],[encodeURI,"encodeURI"],[encodeURIComponent,"encodeURIComponent"]],r=0;r<i.length;r++){var s=function(e){return function(n){try{return e(n)}catch(e){t.throwException(t.URI_ERROR,e.message)}}}(i[r][0]);this.setProperty(e,i[r][1],this.createNativeFunction(s,!1),qe.NONENUMERABLE_DESCRIPTOR)}this.OBJECT=this.OBJECT,this.OBJECT_PROTO=this.OBJECT_PROTO,this.FUNCTION=this.FUNCTION,this.FUNCTION_PROTO=this.FUNCTION_PROTO,this.ARRAY=this.ARRAY,this.ARRAY_PROTO=this.ARRAY_PROTO,this.REGEXP=this.REGEXP,this.REGEXP_PROTO=this.REGEXP_PROTO,this.DATE=this.DATE,this.DATE_PROTO=this.DATE_PROTO,this.initFunc_&&this.initFunc_(this,e)},qe.prototype.initFunction=function(e){var t,n=this,i=/^[A-Za-z_$][\w$]*$/;t=function(e){if(arguments.length)var t=String(arguments[arguments.length-1]);else t="";var r=Array.prototype.slice.call(arguments,0,-1).join(",").trim();if(r){for(var s=r.split(/\s*,\s*/),a=0;a<s.length;a++){var o=s[a];i.test(o)||n.throwException(n.SYNTAX_ERROR,"Invalid function argument: "+o)}r=s.join(", ")}try{var l=V.parse("(function("+r+") {"+t+"})",qe.PARSE_OPTIONS)}catch(e){n.throwException(n.SYNTAX_ERROR,"Invalid code: "+e.message)}1!==l.body.length&&n.throwException(n.SYNTAX_ERROR,"Invalid code in function body.");var u=l.body[0].expression;return n.createFunction(u,n.globalScope)},this.FUNCTION=this.createNativeFunction(t,!0),this.setProperty(e,"Function",this.FUNCTION),this.setProperty(this.FUNCTION,"prototype",this.FUNCTION_PROTO,qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(this.FUNCTION_PROTO,"constructor",this.FUNCTION,qe.NONENUMERABLE_DESCRIPTOR),this.FUNCTION_PROTO.nativeFunc=function(){},this.FUNCTION_PROTO.nativeFunc.id=this.functionCounter_++,this.setProperty(this.FUNCTION_PROTO,"length",0,qe.READONLY_NONENUMERABLE_DESCRIPTOR);var r=function(e){if(!(e instanceof qe.Object||n.getScope().strict))if(null==e)e=n.globalObject;else{var t=n.createObjectProto(n.getPrototype(e));t.data=e,e=t}return e};t=function(e,t){var i=n.stateStack[n.stateStack.length-1];i.func_=this,i.funcThis_=r(e),i.arguments_=[],null!=t&&(t instanceof qe.Object?i.arguments_=n.arrayPseudoToNative(t):n.throwException(n.TYPE_ERROR,"CreateListFromArrayLike called on non-object")),i.doneExec_=!1},this.setNativeFunctionPrototype(this.FUNCTION,"apply",t),t=function(e){var t=n.stateStack[n.stateStack.length-1];t.func_=this,t.funcThis_=r(e),t.arguments_=[];for(var i=1;i<arguments.length;i++)t.arguments_.push(arguments[i]);t.doneExec_=!1},this.setNativeFunctionPrototype(this.FUNCTION,"call",t),this.polyfills_.push("Object.defineProperty(Function.prototype, 'bind',","{configurable: true, writable: true, value:","function(oThis) {","if (typeof this !== 'function') {","throw TypeError('What is trying to be bound is not callable');","}","var aArgs   = Array.prototype.slice.call(arguments, 1),","fToBind = this,","fNOP    = function() {},","fBound  = function() {","return fToBind.apply(this instanceof fNOP","? this",": oThis,","aArgs.concat(Array.prototype.slice.call(arguments)));","};","if (this.prototype) {","fNOP.prototype = this.prototype;","}","fBound.prototype = new fNOP();","return fBound;","}","});",""),t=function(){return String(this)},this.setNativeFunctionPrototype(this.FUNCTION,"toString",t),this.setProperty(this.FUNCTION,"toString",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),t=function(){return this.valueOf()},this.setNativeFunctionPrototype(this.FUNCTION,"valueOf",t),this.setProperty(this.FUNCTION,"valueOf",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR)},qe.prototype.initObject=function(e){var t,n=this;t=function(e){if(null==e)return n.calledWithNew()?this:n.createObjectProto(n.OBJECT_PROTO);if(!(e instanceof qe.Object)){var t=n.createObjectProto(n.getPrototype(e));return t.data=e,t}return e},this.OBJECT=this.createNativeFunction(t,!0),this.setProperty(this.OBJECT,"prototype",this.OBJECT_PROTO,qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(this.OBJECT_PROTO,"constructor",this.OBJECT,qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(e,"Object",this.OBJECT);var i=function(e){null==e&&n.throwException(n.TYPE_ERROR,"Cannot convert '"+e+"' to object")};t=function(e){i(e);var t=e instanceof qe.Object?e.properties:e;return n.arrayNativeToPseudo(Object.getOwnPropertyNames(t))},this.setProperty(this.OBJECT,"getOwnPropertyNames",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),t=function(e){return i(e),e instanceof qe.Object&&(e=e.properties),n.arrayNativeToPseudo(Object.keys(e))},this.setProperty(this.OBJECT,"keys",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),t=function(e){return null===e?n.createObjectProto(null):(e instanceof qe.Object||n.throwException(n.TYPE_ERROR,"Object prototype may only be an Object or null"),n.createObjectProto(e))},this.setProperty(this.OBJECT,"create",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),this.polyfills_.push("(function() {","var create_ = Object.create;","Object.create = function(proto, props) {","var obj = create_(proto);","props && Object.defineProperties(obj, props);","return obj;","};","})();",""),t=function(e,t,i){return t=String(t),e instanceof qe.Object||n.throwException(n.TYPE_ERROR,"Object.defineProperty called on non-object"),i instanceof qe.Object||n.throwException(n.TYPE_ERROR,"Property description must be an object"),!e.properties[t]&&e.preventExtensions&&n.throwException(n.TYPE_ERROR,"Can't define property '"+t+"', object is not extensible"),n.setProperty(e,t,qe.VALUE_IN_DESCRIPTOR,i.properties),e},this.setProperty(this.OBJECT,"defineProperty",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),this.polyfills_.push("(function() {","var defineProperty_ = Object.defineProperty;","Object.defineProperty = function(obj, prop, d1) {","var d2 = {};","if ('configurable' in d1) d2.configurable = d1.configurable;","if ('enumerable' in d1) d2.enumerable = d1.enumerable;","if ('writable' in d1) d2.writable = d1.writable;","if ('value' in d1) d2.value = d1.value;","if ('get' in d1) d2.get = d1.get;","if ('set' in d1) d2.set = d1.set;","return defineProperty_(obj, prop, d2);","};","})();","Object.defineProperty(Object, 'defineProperties',","{configurable: true, writable: true, value:","function(obj, props) {","var keys = Object.keys(props);","for (var i = 0; i < keys.length; i++) {","Object.defineProperty(obj, keys[i], props[keys[i]]);","}","return obj;","}","});",""),t=function(e,t){if(e instanceof qe.Object||n.throwException(n.TYPE_ERROR,"Object.getOwnPropertyDescriptor called on non-object"),(t=String(t))in e.properties){var i=Object.getOwnPropertyDescriptor(e.properties,t),r=e.getter[t],s=e.setter[t],a=n.createObjectProto(n.OBJECT_PROTO);return r||s?(n.setProperty(a,"get",r),n.setProperty(a,"set",s)):(n.setProperty(a,"value",i.value),n.setProperty(a,"writable",i.writable)),n.setProperty(a,"configurable",i.configurable),n.setProperty(a,"enumerable",i.enumerable),a}},this.setProperty(this.OBJECT,"getOwnPropertyDescriptor",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),t=function(e){return i(e),n.getPrototype(e)},this.setProperty(this.OBJECT,"getPrototypeOf",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),t=function(e){return Boolean(e)&&!e.preventExtensions},this.setProperty(this.OBJECT,"isExtensible",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),t=function(e){return e instanceof qe.Object&&(e.preventExtensions=!0),e},this.setProperty(this.OBJECT,"preventExtensions",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),this.setNativeFunctionPrototype(this.OBJECT,"toString",qe.Object.prototype.toString),this.setNativeFunctionPrototype(this.OBJECT,"toLocaleString",qe.Object.prototype.toString),this.setNativeFunctionPrototype(this.OBJECT,"valueOf",qe.Object.prototype.valueOf),t=function(e){return i(this),this instanceof qe.Object?String(e)in this.properties:this.hasOwnProperty(e)},this.setNativeFunctionPrototype(this.OBJECT,"hasOwnProperty",t),t=function(e){return i(this),this instanceof qe.Object?Object.prototype.propertyIsEnumerable.call(this.properties,e):this.propertyIsEnumerable(e)},this.setNativeFunctionPrototype(this.OBJECT,"propertyIsEnumerable",t),t=function(e){for(;;){if(!(e=n.getPrototype(e)))return!1;if(e===this)return!0}},this.setNativeFunctionPrototype(this.OBJECT,"isPrototypeOf",t)},qe.prototype.initArray=function(e){var t,n=this;t=function(e){if(n.calledWithNew())var t=this;else t=n.createArray();var i=arguments[0];if(1===arguments.length&&"number"==typeof i)isNaN(qe.legalArrayLength(i))&&n.throwException(n.RANGE_ERROR,"Invalid array length"),t.properties.length=i;else{for(var r=0;r<arguments.length;r++)t.properties[r]=arguments[r];t.properties.length=r}return t},this.ARRAY=this.createNativeFunction(t,!0),this.ARRAY_PROTO=this.ARRAY.properties.prototype,this.setProperty(e,"Array",this.ARRAY),t=function(e){return e&&"Array"===e.class},this.setProperty(this.ARRAY,"isArray",this.createNativeFunction(t,!1),qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(this.ARRAY_PROTO,"length",0,{configurable:!1,enumerable:!1,writable:!0}),this.ARRAY_PROTO.class="Array",t=function(){return Array.prototype.pop.call(this.properties)},this.setNativeFunctionPrototype(this.ARRAY,"pop",t),t=function(e){return Array.prototype.push.apply(this.properties,arguments)},this.setNativeFunctionPrototype(this.ARRAY,"push",t),t=function(){return Array.prototype.shift.call(this.properties)},this.setNativeFunctionPrototype(this.ARRAY,"shift",t),t=function(e){return Array.prototype.unshift.apply(this.properties,arguments)},this.setNativeFunctionPrototype(this.ARRAY,"unshift",t),t=function(){return Array.prototype.reverse.call(this.properties),this},this.setNativeFunctionPrototype(this.ARRAY,"reverse",t),t=function(e,t){var i=Array.prototype.splice.apply(this.properties,arguments);return n.arrayNativeToPseudo(i)},this.setNativeFunctionPrototype(this.ARRAY,"splice",t),t=function(e,t){var i=Array.prototype.slice.call(this.properties,e,t);return n.arrayNativeToPseudo(i)},this.setNativeFunctionPrototype(this.ARRAY,"slice",t),t=function(e){return Array.prototype.join.call(this.properties,e)},this.setNativeFunctionPrototype(this.ARRAY,"join",t),t=function(e){for(var t=[],i=0,r=n.getProperty(this,"length"),s=0;s<r;s++){if(n.hasProperty(this,s)){var a=n.getProperty(this,s);t[i]=a}i++}for(s=0;s<arguments.length;s++){var o=arguments[s];if(n.isa(o,n.ARRAY))for(var l=n.getProperty(o,"length"),u=0;u<l;u++)n.hasProperty(o,u)&&(t[i]=n.getProperty(o,u)),i++;else t[i]=o}return n.arrayNativeToPseudo(t)},this.setNativeFunctionPrototype(this.ARRAY,"concat",t),t=function(e,t){return Array.prototype.indexOf.apply(this.properties,arguments)},this.setNativeFunctionPrototype(this.ARRAY,"indexOf",t),t=function(e,t){return Array.prototype.lastIndexOf.apply(this.properties,arguments)},this.setNativeFunctionPrototype(this.ARRAY,"lastIndexOf",t),t=function(){return Array.prototype.sort.call(this.properties),this},this.setNativeFunctionPrototype(this.ARRAY,"sort",t),t=function(e,t){return Array.prototype.includes.call(this.properties,arguments)},this.setNativeFunctionPrototype(this.ARRAY,"includes",t),this.polyfills_.push("Object.defineProperty(Array.prototype, 'every',","{configurable: true, writable: true, value:","function(callbackfn, thisArg) {","if (!this || typeof callbackfn !== 'function') throw TypeError();","var T, k;","var O = Object(this);","var len = O.length >>> 0;","if (arguments.length > 1) T = thisArg;","k = 0;","while (k < len) {","if (k in O && !callbackfn.call(T, O[k], k, O)) return false;","k++;","}","return true;","}","});","Object.defineProperty(Array.prototype, 'filter',","{configurable: true, writable: true, value:","function(fun/*, thisArg*/) {","if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();","var t = Object(this);","var len = t.length >>> 0;","var res = [];","var thisArg = arguments.length >= 2 ? arguments[1] : void 0;","for (var i = 0; i < len; i++) {","if (i in t) {","var val = t[i];","if (fun.call(thisArg, val, i, t)) res.push(val);","}","}","return res;","}","});","Object.defineProperty(Array.prototype, 'forEach',","{configurable: true, writable: true, value:","function(callback, thisArg) {","if (!this || typeof callback !== 'function') throw TypeError();","var T, k;","var O = Object(this);","var len = O.length >>> 0;","if (arguments.length > 1) T = thisArg;","k = 0;","while (k < len) {","if (k in O) callback.call(T, O[k], k, O);","k++;","}","}","});","Object.defineProperty(Array.prototype, 'map',","{configurable: true, writable: true, value:","function(callback, thisArg) {","if (!this || typeof callback !== 'function') new TypeError;","var T, A, k;","var O = Object(this);","var len = O.length >>> 0;","if (arguments.length > 1) T = thisArg;","A = new Array(len);","k = 0;","while (k < len) {","if (k in O) A[k] = callback.call(T, O[k], k, O);","k++;","}","return A;","}","});","Object.defineProperty(Array.prototype, 'reduce',","{configurable: true, writable: true, value:","function(callback /*, initialValue*/) {","if (!this || typeof callback !== 'function') throw TypeError();","var t = Object(this), len = t.length >>> 0, k = 0, value;","if (arguments.length === 2) {","value = arguments[1];","} else {","while (k < len && !(k in t)) k++;","if (k >= len) {","throw TypeError('Reduce of empty array with no initial value');","}","value = t[k++];","}","for (; k < len; k++) {","if (k in t) value = callback(value, t[k], k, t);","}","return value;","}","});","Object.defineProperty(Array.prototype, 'reduceRight',","{configurable: true, writable: true, value:","function(callback /*, initialValue*/) {","if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();","var t = Object(this), len = t.length >>> 0, k = len - 1, value;","if (arguments.length >= 2) {","value = arguments[1];","} else {","while (k >= 0 && !(k in t)) k--;","if (k < 0) {","throw TypeError('Reduce of empty array with no initial value');","}","value = t[k--];","}","for (; k >= 0; k--) {","if (k in t) value = callback(value, t[k], k, t);","}","return value;","}","});","Object.defineProperty(Array.prototype, 'some',","{configurable: true, writable: true, value:","function(fun/*, thisArg*/) {","if (!this || typeof fun !== 'function') throw TypeError();","var t = Object(this);","var len = t.length >>> 0;","var thisArg = arguments.length >= 2 ? arguments[1] : void 0;","for (var i = 0; i < len; i++) {","if (i in t && fun.call(thisArg, t[i], i, t)) {","return true;","}","}","return false;","}","});","(function() {","var sort_ = Array.prototype.sort;","Array.prototype.sort = function(opt_comp) {","if (typeof opt_comp !== 'function') {","return sort_.call(this);","}","for (var i = 0; i < this.length; i++) {","var changes = 0;","for (var j = 0; j < this.length - i - 1; j++) {","if (opt_comp(this[j], this[j + 1]) > 0) {","var swap = this[j];","this[j] = this[j + 1];","this[j + 1] = swap;","changes++;","}","}","if (!changes) break;","}","return this;","};","})();","Object.defineProperty(Array.prototype, 'toLocaleString',","{configurable: true, writable: true, value:","function() {","var out = [];","for (var i = 0; i < this.length; i++) {","out[i] = (this[i] === null || this[i] === undefined) ? '' : this[i].toLocaleString();","}","return out.join(',');","}","});","")},qe.prototype.initString=function(e){var t,n=this;t=function(e){return e=arguments.length?String(e):"",n.calledWithNew()?(this.data=e,this):e},this.STRING=this.createNativeFunction(t,!0),this.setProperty(e,"String",this.STRING),this.setProperty(this.STRING,"fromCharCode",this.createNativeFunction(String.fromCharCode,!1),qe.NONENUMERABLE_DESCRIPTOR);for(var i=["charAt","charCodeAt","concat","indexOf","lastIndexOf","slice","substr","substring","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim"],r=0;r<i.length;r++)this.setNativeFunctionPrototype(this.STRING,i[r],String.prototype[i[r]]);t=function(e,t,i){return t=t?n.pseudoToNative(t):void 0,i=i?n.pseudoToNative(i):void 0,String(this).localeCompare(e,t,i)},this.setNativeFunctionPrototype(this.STRING,"localeCompare",t),t=function(e,t,i){var r=String(this);if(t=t?Number(t):void 0,n.isa(e,n.REGEXP)&&(e=e.data,n.maybeThrowRegExp(e,i),2===n.REGEXP_MODE))if(qe.vm){var s={string:r,separator:e,limit:t};(l=n.vmCall("string.split(separator, limit)",s,e,i))!==qe.REGEXP_TIMEOUT&&i(n.arrayNativeToPseudo(l))}else{var a=n.createWorker(),o=n.regExpTimeout(e,a,i);a.onmessage=function(e){clearTimeout(o),i(n.arrayNativeToPseudo(e.data))},a.postMessage(["split",r,e,t])}else{var l=r.split(e,t);i(n.arrayNativeToPseudo(l))}},this.setAsyncFunctionPrototype(this.STRING,"split",t),t=function(e,t){var i=String(this);if(e=n.isa(e,n.REGEXP)?e.data:new RegExp(e),n.maybeThrowRegExp(e,t),2!==n.REGEXP_MODE)r=i.match(e),t(r&&n.arrayNativeToPseudo(r));else if(qe.vm){var r,s={string:i,regexp:e};(r=n.vmCall("string.match(regexp)",s,e,t))!==qe.REGEXP_TIMEOUT&&t(r&&n.arrayNativeToPseudo(r))}else{var a=n.createWorker(),o=n.regExpTimeout(e,a,t);a.onmessage=function(e){clearTimeout(o),t(e.data&&n.arrayNativeToPseudo(e.data))},a.postMessage(["match",i,e])}},this.setAsyncFunctionPrototype(this.STRING,"match",t),t=function(e,t){var i=String(this);if(e=n.isa(e,n.REGEXP)?e.data:new RegExp(e),n.maybeThrowRegExp(e,t),2!==n.REGEXP_MODE)t(i.search(e));else if(qe.vm){var r={string:i,regexp:e},s=n.vmCall("string.search(regexp)",r,e,t);s!==qe.REGEXP_TIMEOUT&&t(s)}else{var a=n.createWorker(),o=n.regExpTimeout(e,a,t);a.onmessage=function(e){clearTimeout(o),t(e.data)},a.postMessage(["search",i,e])}},this.setAsyncFunctionPrototype(this.STRING,"search",t),t=function(e,t,i){var r=String(this);if(t=String(t),n.isa(e,n.REGEXP)&&(e=e.data,n.maybeThrowRegExp(e,i),2===n.REGEXP_MODE))if(qe.vm){var s={string:r,substr:e,newSubstr:t},a=n.vmCall("string.replace(substr, newSubstr)",s,e,i);a!==qe.REGEXP_TIMEOUT&&i(a)}else{var o=n.createWorker(),l=n.regExpTimeout(e,o,i);o.onmessage=function(e){clearTimeout(l),i(e.data)},o.postMessage(["replace",r,e,t])}else i(r.replace(e,t))},this.setAsyncFunctionPrototype(this.STRING,"replace",t),this.polyfills_.push("(function() {","var replace_ = String.prototype.replace;","String.prototype.replace = function(substr, newSubstr) {","if (typeof newSubstr !== 'function') {","return replace_.call(this, substr, newSubstr);","}","var str = this;","if (substr instanceof RegExp) {","var subs = [];","var m = substr.exec(str);","while (m) {","m.push(m.index, str);","var inject = newSubstr.apply(null, m);","subs.push([m.index, m[0].length, inject]);","m = substr.global ? substr.exec(str) : null;","}","for (var i = subs.length - 1; i >= 0; i--) {","str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);","}","} else {","var i = str.indexOf(substr);","if (i !== -1) {","var inject = newSubstr(str.substr(i, substr.length), i, str);","str = str.substring(0, i) + inject + str.substring(i + substr.length);","}","}","return str;","};","})();","")},qe.prototype.initBoolean=function(e){var t,n=this;t=function(e){return e=Boolean(e),n.calledWithNew()?(this.data=e,this):e},this.BOOLEAN=this.createNativeFunction(t,!0),this.setProperty(e,"Boolean",this.BOOLEAN)},qe.prototype.initNumber=function(e){var t,n=this;t=function(e){return e=arguments.length?Number(e):0,n.calledWithNew()?(this.data=e,this):e},this.NUMBER=this.createNativeFunction(t,!0),this.setProperty(e,"Number",this.NUMBER);for(var i=["MAX_VALUE","MIN_VALUE","NaN","NEGATIVE_INFINITY","POSITIVE_INFINITY"],r=0;r<i.length;r++)this.setProperty(this.NUMBER,i[r],Number[i[r]],qe.READONLY_NONENUMERABLE_DESCRIPTOR);t=function(e){try{return Number(this).toExponential(e)}catch(e){n.throwException(n.ERROR,e.message)}},this.setNativeFunctionPrototype(this.NUMBER,"toExponential",t),t=function(e){try{return Number(this).toFixed(e)}catch(e){n.throwException(n.ERROR,e.message)}},this.setNativeFunctionPrototype(this.NUMBER,"toFixed",t),t=function(e){try{return Number(this).toPrecision(e)}catch(e){n.throwException(n.ERROR,e.message)}},this.setNativeFunctionPrototype(this.NUMBER,"toPrecision",t),t=function(e){try{return Number(this).toString(e)}catch(e){n.throwException(n.ERROR,e.message)}},this.setNativeFunctionPrototype(this.NUMBER,"toString",t),t=function(e,t){return e=e?n.pseudoToNative(e):void 0,t=t?n.pseudoToNative(t):void 0,Number(this).toLocaleString(e,t)},this.setNativeFunctionPrototype(this.NUMBER,"toLocaleString",t)},qe.prototype.initDate=function(e){var t,n=this;t=function(e,t){if(!n.calledWithNew())return Date();var i=[null].concat(Array.from(arguments));return this.data=new(Function.prototype.bind.apply(Date,i)),this},this.DATE=this.createNativeFunction(t,!0),this.DATE_PROTO=this.DATE.properties.prototype,this.setProperty(e,"Date",this.DATE),this.setProperty(this.DATE,"now",this.createNativeFunction(Date.now,!1),qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(this.DATE,"parse",this.createNativeFunction(Date.parse,!1),qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(this.DATE,"UTC",this.createNativeFunction(Date.UTC,!1),qe.NONENUMERABLE_DESCRIPTOR);for(var i=["getDate","getDay","getFullYear","getHours","getMilliseconds","getMinutes","getMonth","getSeconds","getTime","getTimezoneOffset","getUTCDate","getUTCDay","getUTCFullYear","getUTCHours","getUTCMilliseconds","getUTCMinutes","getUTCMonth","getUTCSeconds","getYear","setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear","toDateString","toISOString","toJSON","toGMTString","toLocaleDateString","toLocaleString","toLocaleTimeString","toTimeString","toUTCString"],r=0;r<i.length;r++)t=function(e){return function(t){for(var i=[],r=0;r<arguments.length;r++)i[r]=n.pseudoToNative(arguments[r]);return this.data[e].apply(this.data,i)}}(i[r]),this.setNativeFunctionPrototype(this.DATE,i[r],t)},qe.prototype.initRegExp=function(e){var t,n=this;t=function(e,t){if(n.calledWithNew())var i=this;else i=n.createObjectProto(n.REGEXP_PROTO);return e=e?String(e):"",t=t?String(t):"",n.populateRegExp(i,new RegExp(e,t)),i},this.REGEXP=this.createNativeFunction(t,!0),this.REGEXP_PROTO=this.REGEXP.properties.prototype,this.setProperty(e,"RegExp",this.REGEXP),this.setProperty(this.REGEXP.properties.prototype,"global",void 0,qe.READONLY_NONENUMERABLE_DESCRIPTOR),this.setProperty(this.REGEXP.properties.prototype,"ignoreCase",void 0,qe.READONLY_NONENUMERABLE_DESCRIPTOR),this.setProperty(this.REGEXP.properties.prototype,"multiline",void 0,qe.READONLY_NONENUMERABLE_DESCRIPTOR),this.setProperty(this.REGEXP.properties.prototype,"source","(?:)",qe.READONLY_NONENUMERABLE_DESCRIPTOR),this.polyfills_.push("Object.defineProperty(RegExp.prototype, 'test',","{configurable: true, writable: true, value:","function(str) {","return String(str).search(this) !== -1","}","});"),t=function(e,t){var i=this.data;if(e=String(e),i.lastIndex=Number(n.getProperty(this,"lastIndex")),n.maybeThrowRegExp(i,t),2!==n.REGEXP_MODE)r=i.exec(e),n.setProperty(this,"lastIndex",i.lastIndex),t(u(r));else if(qe.vm){var r,s={string:e,regexp:i};(r=n.vmCall("regexp.exec(string)",s,i,t))!==qe.REGEXP_TIMEOUT&&(n.setProperty(this,"lastIndex",i.lastIndex),t(u(r)))}else{var a=n.createWorker(),o=n.regExpTimeout(i,a,t),l=this;a.onmessage=function(e){clearTimeout(o),n.setProperty(l,"lastIndex",e.data[1]),t(u(e.data[0]))},a.postMessage(["exec",i,i.lastIndex,e])}function u(e){if(e){var t=n.arrayNativeToPseudo(e);return n.setProperty(t,"index",e.index),n.setProperty(t,"input",e.input),t}return null}},this.setAsyncFunctionPrototype(this.REGEXP,"exec",t)},qe.prototype.initError=function(e){var t=this;this.ERROR=this.createNativeFunction((function(e){if(t.calledWithNew())var n=this;else n=t.createObject(t.ERROR);return e&&t.setProperty(n,"message",String(e),qe.NONENUMERABLE_DESCRIPTOR),n}),!0),this.setProperty(e,"Error",this.ERROR),this.setProperty(this.ERROR.properties.prototype,"message","",qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(this.ERROR.properties.prototype,"name","Error",qe.NONENUMERABLE_DESCRIPTOR);var n=function(n){var i=t.createNativeFunction((function(e){if(t.calledWithNew())var n=this;else n=t.createObject(i);return e&&t.setProperty(n,"message",String(e),qe.NONENUMERABLE_DESCRIPTOR),n}),!0);return t.setProperty(i,"prototype",t.createObject(t.ERROR),qe.NONENUMERABLE_DESCRIPTOR),t.setProperty(i.properties.prototype,"name",n,qe.NONENUMERABLE_DESCRIPTOR),t.setProperty(e,n,i),i};this.EVAL_ERROR=n("EvalError"),this.RANGE_ERROR=n("RangeError"),this.REFERENCE_ERROR=n("ReferenceError"),this.SYNTAX_ERROR=n("SyntaxError"),this.TYPE_ERROR=n("TypeError"),this.URI_ERROR=n("URIError")},qe.prototype.initMath=function(e){var t=this.createObjectProto(this.OBJECT_PROTO);this.setProperty(e,"Math",t);for(var n=["E","LN2","LN10","LOG2E","LOG10E","PI","SQRT1_2","SQRT2"],i=0;i<n.length;i++)this.setProperty(t,n[i],Math[n[i]],qe.READONLY_NONENUMERABLE_DESCRIPTOR);var r=["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","random","round","sin","sqrt","tan"];for(i=0;i<r.length;i++)this.setProperty(t,r[i],this.createNativeFunction(Math[r[i]],!1),qe.NONENUMERABLE_DESCRIPTOR)},qe.prototype.initJSON=function(e){var t=this,n=t.createObjectProto(this.OBJECT_PROTO);this.setProperty(e,"JSON",n);var i=function(e){try{var n=JSON.parse(String(e))}catch(e){t.throwException(t.SYNTAX_ERROR,e.message)}return t.nativeToPseudo(n)};this.setProperty(n,"parse",this.createNativeFunction(i,!1)),i=function(e,n,i){n&&"Function"===n.class?t.throwException(t.TYPE_ERROR,"Function replacer on JSON.stringify not supported"):n=n&&"Array"===n.class?(n=t.arrayPseudoToNative(n)).filter((function(e){return"string"==typeof e||"number"==typeof e})):null,"string"!=typeof i&&"number"!=typeof i&&(i=void 0);var r=t.pseudoToNative(e);try{var s=JSON.stringify(r,n,i)}catch(e){t.throwException(t.TYPE_ERROR,e.message)}return s},this.setProperty(n,"stringify",this.createNativeFunction(i,!1))},qe.prototype.isa=function(e,t){if(null==e||!t)return!1;var n=t.properties.prototype;if(e===n)return!0;for(e=this.getPrototype(e);e;){if(e===n)return!0;e=e.proto}return!1},qe.prototype.populateRegExp=function(e,t){e.data=new RegExp(t.source,t.flags),this.setProperty(e,"lastIndex",t.lastIndex,qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(e,"source",t.source,qe.READONLY_NONENUMERABLE_DESCRIPTOR),this.setProperty(e,"global",t.global,qe.READONLY_NONENUMERABLE_DESCRIPTOR),this.setProperty(e,"ignoreCase",t.ignoreCase,qe.READONLY_NONENUMERABLE_DESCRIPTOR),this.setProperty(e,"multiline",t.multiline,qe.READONLY_NONENUMERABLE_DESCRIPTOR)},qe.prototype.createWorker=function(){var e=this.createWorker.blob_;return e||(e=new Blob([qe.WORKER_CODE.join("\n")],{type:"application/javascript"}),this.createWorker.blob_=e),new Worker(URL.createObjectURL(e))},qe.prototype.vmCall=function(e,t,n,i){var r={timeout:this.REGEXP_THREAD_TIMEOUT};try{return qe.vm.runInNewContext(e,t,r)}catch(e){i(null),this.throwException(this.ERROR,"RegExp Timeout: "+n)}return qe.REGEXP_TIMEOUT},qe.prototype.maybeThrowRegExp=function(e,t){var i;if(0===this.REGEXP_MODE)i=!1;else if(1===this.REGEXP_MODE)i=!0;else if(qe.vm)i=!0;else if("function"==typeof Worker&&"function"==typeof URL)i=!0;else{try{qe.vm=n(19594)}catch(e){}i=!!qe.vm}i||(t(null),this.throwException(this.ERROR,"Regular expressions not supported: "+e))},qe.prototype.regExpTimeout=function(e,t,n){var i=this;return setTimeout((function(){t.terminate(),n(null);try{i.throwException(i.ERROR,"RegExp Timeout: "+e)}catch(e){}}),this.REGEXP_THREAD_TIMEOUT)},qe.prototype.createObject=function(e){return this.createObjectProto(e&&e.properties.prototype)},qe.prototype.createObjectProto=function(e){if("object"!=typeof e)throw Error("Non object prototype");var t=new qe.Object(e);return this.isa(t,this.ERROR)&&(t.class="Error"),t},qe.prototype.createArray=function(){var e=this.createObjectProto(this.ARRAY_PROTO);return this.setProperty(e,"length",0,{configurable:!1,enumerable:!1,writable:!0}),e.class="Array",e},qe.prototype.createFunctionBase_=function(e,t){var n=this.createObjectProto(this.FUNCTION_PROTO);if(t){var i=this.createObjectProto(this.OBJECT_PROTO);this.setProperty(n,"prototype",i,qe.NONENUMERABLE_DESCRIPTOR),this.setProperty(i,"constructor",n,qe.NONENUMERABLE_DESCRIPTOR)}else n.illegalConstructor=!0;return this.setProperty(n,"length",e,qe.READONLY_NONENUMERABLE_DESCRIPTOR),n.class="Function",n},qe.prototype.createFunction=function(e,t){var n=this.createFunctionBase_(e.params.length,!0);return n.parentScope=t,n.node=e,n},qe.prototype.createNativeFunction=function(e,t){var n=this.createFunctionBase_(e.length,t);return n.nativeFunc=e,e.id=this.functionCounter_++,n},qe.prototype.createAsyncFunction=function(e){var t=this.createFunctionBase_(e.length,!0);return t.asyncFunc=e,e.id=this.functionCounter_++,t},qe.prototype.nativeToPseudo=function(e){if(e instanceof qe.Object)throw Error("Object is already pseudo");if("object"!=typeof e&&"function"!=typeof e||null===e)return e;if(e instanceof RegExp){var t=this.createObjectProto(this.REGEXP_PROTO);return this.populateRegExp(t,e),t}if(e instanceof Date){var n=this.createObjectProto(this.DATE_PROTO);return n.data=new Date(e.valueOf()),n}if("function"==typeof e){var i=this,r=Object.getOwnPropertyDescriptor(e,"prototype");return this.createNativeFunction((function(){var t=Array.prototype.slice.call(arguments).map((function(e){return i.pseudoToNative(e)})),n=e.apply(i,t);return i.nativeToPseudo(n)}),!!r)}if(Array.isArray(e)){for(var s=this.createArray(),a=0;a<e.length;a++)a in e&&this.setProperty(s,a,this.nativeToPseudo(e[a]));return s}var o=this.createObjectProto(this.OBJECT_PROTO);for(var l in e)this.setProperty(o,l,this.nativeToPseudo(e[l]));return o},qe.prototype.pseudoToNative=function(e,t){if("object"!=typeof e&&"function"!=typeof e||null===e)return e;if(!(e instanceof qe.Object))throw Error("Object is not pseudo");if(this.isa(e,this.REGEXP)){var n=new RegExp(e.data.source,e.data.flags);return n.lastIndex=e.data.lastIndex,n}if(this.isa(e,this.DATE))return new Date(e.data.valueOf());var i,r=t||{pseudo:[],native:[]};if(-1!==(a=r.pseudo.indexOf(e)))return r.native[a];if(r.pseudo.push(e),this.isa(e,this.ARRAY)){i=[],r.native.push(i);for(var s=this.getProperty(e,"length"),a=0;a<s;a++)this.hasProperty(e,a)&&(i[a]=this.pseudoToNative(this.getProperty(e,a),r))}else{var o;for(var l in i={},r.native.push(i),e.properties)o=this.pseudoToNative(e.properties[l],r),Object.defineProperty(i,l,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.pseudo.pop(),r.native.pop(),i},qe.prototype.arrayNativeToPseudo=function(e){for(var t=this.createArray(),n=Object.getOwnPropertyNames(e),i=0;i<n.length;i++)this.setProperty(t,n[i],e[n[i]]);return t},qe.prototype.arrayPseudoToNative=function(e){var t=[];for(var n in e.properties)t[n]=this.getProperty(e,n);return t.length=qe.legalArrayLength(this.getProperty(e,"length"))||0,t},qe.prototype.getPrototype=function(e){switch(typeof e){case"number":return this.NUMBER.properties.prototype;case"boolean":return this.BOOLEAN.properties.prototype;case"string":return this.STRING.properties.prototype}return e?e.proto:null},qe.prototype.getProperty=function(e,t){if(this.getterStep_)throw Error("Getter not supported in that context");if(t=String(t),null==e&&this.throwException(this.TYPE_ERROR,"Cannot read property '"+t+"' of "+e),"object"==typeof e&&!(e instanceof qe.Object))throw TypeError("Expecting native value or pseudo object");if("length"===t){if(this.isa(e,this.STRING))return String(e).length}else if(t.charCodeAt(0)<64&&this.isa(e,this.STRING)){var n=qe.legalArrayIndex(t);if(!isNaN(n)&&n<String(e).length)return String(e)[n]}do{if(e.properties&&t in e.properties){var i=e.getter[t];return i?(this.getterStep_=!0,i):e.properties[t]}}while(e=this.getPrototype(e))},qe.prototype.hasProperty=function(e,t){if(!(e instanceof qe.Object))throw TypeError("Primitive data type has no properties");if("length"===(t=String(t))&&this.isa(e,this.STRING))return!0;if(this.isa(e,this.STRING)){var n=qe.legalArrayIndex(t);if(!isNaN(n)&&n<String(e).length)return!0}do{if(e.properties&&t in e.properties)return!0}while(e=this.getPrototype(e));return!1},qe.prototype.setProperty=function(e,t,n,i){if(this.setterStep_)throw Error("Setter not supported in that context");if(t=String(t),null==e&&this.throwException(this.TYPE_ERROR,"Cannot set property '"+t+"' of "+e),"object"==typeof e&&!(e instanceof qe.Object))throw TypeError("Expecting native value or pseudo object");i&&("get"in i||"set"in i)&&("value"in i||"writable"in i)&&this.throwException(this.TYPE_ERROR,"Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");var r=!this.stateStack||this.getScope().strict;if(e instanceof qe.Object){if(this.isa(e,this.STRING)){var s=qe.legalArrayIndex(t);if("length"===t||!isNaN(s)&&s<String(e).length)return void(r&&this.throwException(this.TYPE_ERROR,"Cannot assign to read only property '"+t+"' of String '"+e.data+"'"))}if("Array"===e.class){var a,o=e.properties.length;if("length"===t){if(i){if(!("value"in i))return;n=i.value}if(n=qe.legalArrayLength(n),isNaN(n)&&this.throwException(this.RANGE_ERROR,"Invalid array length"),n<o)for(a in e.properties)a=qe.legalArrayIndex(a),!isNaN(a)&&n<=a&&delete e.properties[a]}else isNaN(a=qe.legalArrayIndex(t))||(e.properties.length=Math.max(o,a+1))}if(!e.preventExtensions||t in e.properties)if(i){"get"in i&&(i.get?e.getter[t]=i.get:delete e.getter[t]),"set"in i&&(i.set?e.setter[t]=i.set:delete e.setter[t]);var l={};"configurable"in i&&(l.configurable=i.configurable),"enumerable"in i&&(l.enumerable=i.enumerable),"writable"in i&&(l.writable=i.writable,delete e.getter[t],delete e.setter[t]),"value"in i?(l.value=i.value,delete e.getter[t],delete e.setter[t]):n!==qe.VALUE_IN_DESCRIPTOR&&(l.value=n,delete e.getter[t],delete e.setter[t]);try{Object.defineProperty(e.properties,t,l)}catch(e){this.throwException(this.TYPE_ERROR,"Cannot redefine property: "+t)}}else{if(n===qe.VALUE_IN_DESCRIPTOR)throw ReferenceError("Value not specified.");for(var u=e;!(t in u.properties);)if(!(u=this.getPrototype(u))){u=e;break}if(u.setter&&u.setter[t])return this.setterStep_=!0,u.setter[t];if(u.getter&&u.getter[t])r&&this.throwException(this.TYPE_ERROR,"Cannot set property '"+t+"' of object '"+e+"' which only has a getter");else try{e.properties[t]=n}catch(n){r&&this.throwException(this.TYPE_ERROR,"Cannot assign to read only property '"+t+"' of object '"+e+"'")}}else r&&this.throwException(this.TYPE_ERROR,"Can't add property '"+t+"', object is not extensible")}else r&&this.throwException(this.TYPE_ERROR,"Can't create property '"+t+"' on '"+e+"'")},qe.prototype.setNativeFunctionPrototype=function(e,t,n){this.setProperty(e.properties.prototype,t,this.createNativeFunction(n,!1),qe.NONENUMERABLE_DESCRIPTOR)},qe.prototype.setAsyncFunctionPrototype=function(e,t,n){this.setProperty(e.properties.prototype,t,this.createAsyncFunction(n),qe.NONENUMERABLE_DESCRIPTOR)},qe.prototype.getScope=function(){var e=this.stateStack[this.stateStack.length-1].scope;if(!e)throw Error("No scope found.");return e},qe.prototype.createScope=function(e,t){var n=!1;if(t&&t.strict)n=!0;else{var i=e.body&&e.body[0];i&&i.expression&&"Literal"===i.expression.type&&"use strict"===i.expression.value&&(n=!0)}var r=this.createObjectProto(null),s=new qe.Scope(t,n,r);return t||this.initGlobal(s.object),this.populateScope_(e,s),s},qe.prototype.createSpecialScope=function(e,t){if(!e)throw Error("parentScope required");var n=t||this.createObjectProto(null);return new qe.Scope(e,e.strict,n)},qe.prototype.getValueFromScope=function(e){for(var t=this.getScope();t&&t!==this.globalScope;){if(e in t.object.properties)return t.object.properties[e];t=t.parentScope}if(t===this.globalScope&&this.hasProperty(t.object,e))return this.getProperty(t.object,e);var n=this.stateStack[this.stateStack.length-1].node;"UnaryExpression"===n.type&&"typeof"===n.operator||this.throwException(this.REFERENCE_ERROR,e+" is not defined")},qe.prototype.setValueToScope=function(e,t){for(var n=this.getScope(),i=n.strict;n&&n!==this.globalScope;){if(e in n.object.properties)return void(n.object.properties[e]=t);n=n.parentScope}if(n===this.globalScope&&(!i||this.hasProperty(n.object,e)))return this.setProperty(n.object,e,t);this.throwException(this.REFERENCE_ERROR,e+" is not defined")},qe.prototype.populateScope_=function(e,t){if("VariableDeclaration"===e.type)for(var n=0;n<e.declarations.length;n++)this.setProperty(t.object,e.declarations[n].id.name,void 0,qe.VARIABLE_DESCRIPTOR);else{if("FunctionDeclaration"===e.type)return void this.setProperty(t.object,e.id.name,this.createFunction(e,t),qe.VARIABLE_DESCRIPTOR);if("FunctionExpression"===e.type)return;if("ExpressionStatement"===e.type)return}var i=e.constructor;for(var r in e){var s=e[r];if(s&&"object"==typeof s)if(Array.isArray(s))for(n=0;n<s.length;n++)s[n]&&s[n].constructor===i&&this.populateScope_(s[n],t);else s.constructor===i&&this.populateScope_(s,t)}},qe.prototype.calledWithNew=function(){return this.stateStack[this.stateStack.length-1].isConstructor},qe.prototype.getValue=function(e){return e[0]===qe.SCOPE_REFERENCE?this.getValueFromScope(e[1]):this.getProperty(e[0],e[1])},qe.prototype.setValue=function(e,t){return e[0]===qe.SCOPE_REFERENCE?this.setValueToScope(e[1],t):this.setProperty(e[0],e[1],t)},qe.prototype.throwException=function(e,t){if(void 0===t)var n=e;else n=this.createObject(e),this.setProperty(n,"message",t,qe.NONENUMERABLE_DESCRIPTOR);throw this.unwind(qe.Completion.THROW,n,void 0),qe.STEP_ERROR},qe.prototype.unwind=function(e,t,n){if(e===qe.Completion.NORMAL)throw TypeError("Should not unwind for NORMAL completions");e:for(var i=this.stateStack;i.length>0;i.pop()){var r=i[i.length-1];switch(r.node.type){case"TryStatement":return void(r.cv={type:e,value:t,label:n});case"CallExpression":case"NewExpression":if(e===qe.Completion.RETURN)return void(r.value=t);if(e!==qe.Completion.THROW)throw Error("Unsynatctic break/continue not rejected by Acorn");break;case"Program":r.done=!0;break e}if(e===qe.Completion.BREAK){if(n?r.labels&&-1!==r.labels.indexOf(n):r.isLoop||r.isSwitch)return void i.pop()}else if(e===qe.Completion.CONTINUE&&(n?r.labels&&-1!==r.labels.indexOf(n):r.isLoop))return}var s;if(this.isa(t,this.ERROR)){var a={EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError},o=String(this.getProperty(t,"name")),l=this.getProperty(t,"message").valueOf();s=(a[o]||Error)(l)}else s=String(t);throw s},qe.prototype.createGetter_=function(e,t){if(!this.getterStep_)throw Error("Unexpected call to createGetter");this.getterStep_=!1;var n=Array.isArray(t)?t[0]:t,i=new this.nodeConstructor({options:{}});i.type="CallExpression";var r=new qe.State(i,this.stateStack[this.stateStack.length-1].scope);return r.doneCallee_=!0,r.funcThis_=n,r.func_=e,r.doneArgs_=!0,r.arguments_=[],r},qe.prototype.createSetter_=function(e,t,n){if(!this.setterStep_)throw Error("Unexpected call to createSetter");this.setterStep_=!1;var i=Array.isArray(t)?t[0]:this.globalObject,r=new this.nodeConstructor({options:{}});r.type="CallExpression";var s=new qe.State(r,this.stateStack[this.stateStack.length-1].scope);return s.doneCallee_=!0,s.funcThis_=i,s.func_=e,s.doneArgs_=!0,s.arguments_=[n],s},qe.Value,qe.State=function(e,t){this.node=e,this.scope=t},qe.Scope=function(e,t,n){this.parentScope=e,this.strict=t,this.object=n},qe.Object=function(e){this.getter=Object.create(null),this.setter=Object.create(null),this.properties=Object.create(null),this.proto=e},qe.Object.prototype.proto=null,qe.Object.prototype.class="Object",qe.Object.prototype.data=null,qe.Object.prototype.toString=function(){if(!(this instanceof qe.Object))return String(this);if("Array"===this.class){(i=qe.toStringCycles_).push(this);try{for(var e=[],t=0;t<this.properties.length;t++){var n=this.properties[t];e[t]=n instanceof qe.Object&&-1!==i.indexOf(n)?"...":n}}finally{i.pop()}return e.join(",")}if("Error"===this.class){var i,r,s;if(-1!==(i=qe.toStringCycles_).indexOf(this))return"[object Error]";var a=this;do{if("name"in a.properties){r=a.properties.name;break}}while(a=a.proto);a=this;do{if("message"in a.properties){s=a.properties.message;break}}while(a=a.proto);i.push(this);try{r=r&&String(r),s=s&&String(s)}finally{i.pop()}return s?r+": "+s:String(r)}return null!==this.data?String(this.data):"[object "+this.class+"]"},qe.Object.prototype.valueOf=function(){return void 0===this.data||null===this.data||this.data instanceof RegExp?this:this.data instanceof Date?this.data.valueOf():this.data},qe.prototype.stepArrayExpression=function(e,t,n){var i=n.elements,r=t.n_||0;for(t.array_?(this.setProperty(t.array_,r,t.value),r++):(t.array_=this.createArray(),t.array_.properties.length=i.length);r<i.length;){if(i[r])return t.n_=r,new qe.State(i[r],t.scope);r++}e.pop(),e[e.length-1].value=t.array_},qe.prototype.stepAssignmentExpression=function(e,t,n){if(!t.doneLeft_){t.doneLeft_=!0;var i=new qe.State(n.left,t.scope);return i.components=!0,i}if(!t.doneRight_){if(t.leftReference_||(t.leftReference_=t.value),t.doneGetter_&&(t.leftValue_=t.value),!t.doneGetter_&&"="!==n.operator){var r=this.getValue(t.leftReference_);if(t.leftValue_=r,this.getterStep_){t.doneGetter_=!0;var s=r;return this.createGetter_(s,t.leftReference_)}}return t.doneRight_=!0,new qe.State(n.right,t.scope)}if(t.doneSetter_)return e.pop(),void(e[e.length-1].value=t.setterValue_);var a=t.leftValue_,o=t.value;switch(n.operator){case"=":a=o;break;case"+=":a+=o;break;case"-=":a-=o;break;case"*=":a*=o;break;case"/=":a/=o;break;case"%=":a%=o;break;case"<<=":a<<=o;break;case">>=":a>>=o;break;case">>>=":a>>>=o;break;case"&=":a&=o;break;case"^=":a^=o;break;case"|=":a|=o;break;default:throw SyntaxError("Unknown assignment expression: "+n.operator)}var l=this.setValue(t.leftReference_,a);if(l)return t.doneSetter_=!0,t.setterValue_=a,this.createSetter_(l,t.leftReference_,a);e.pop(),e[e.length-1].value=a},qe.prototype.stepBinaryExpression=function(e,t,n){if(!t.doneLeft_)return t.doneLeft_=!0,new qe.State(n.left,t.scope);if(!t.doneRight_)return t.doneRight_=!0,t.leftValue_=t.value,new qe.State(n.right,t.scope);e.pop();var i,r=t.leftValue_,s=t.value;switch(n.operator){case"==":i=r==s;break;case"!=":i=r!=s;break;case"===":i=r===s;break;case"!==":i=r!==s;break;case">":i=r>s;break;case">=":i=r>=s;break;case"<":i=r<s;break;case"<=":i=r<=s;break;case"+":i=r+s;break;case"-":i=r-s;break;case"*":i=r*s;break;case"/":i=r/s;break;case"%":i=r%s;break;case"&":i=r&s;break;case"|":i=r|s;break;case"^":i=r^s;break;case"<<":i=r<<s;break;case">>":i=r>>s;break;case">>>":i=r>>>s;break;case"in":s instanceof qe.Object||this.throwException(this.TYPE_ERROR,"'in' expects an object, not '"+s+"'"),i=this.hasProperty(s,r);break;case"instanceof":this.isa(s,this.FUNCTION)||this.throwException(this.TYPE_ERROR,"Right-hand side of instanceof is not an object"),i=r instanceof qe.Object&&this.isa(r,s);break;default:throw SyntaxError("Unknown binary operator: "+n.operator)}e[e.length-1].value=i},qe.prototype.stepBlockStatement=function(e,t,n){var i=t.n_||0,r=n.body[i];if(r)return t.n_=i+1,new qe.State(r,t.scope);e.pop()},qe.prototype.stepBreakStatement=function(e,t,n){var i=n.label&&n.label.name;this.unwind(qe.Completion.BREAK,void 0,i)},qe.prototype.stepCallExpression=function(e,t,n){if(!t.doneCallee_){t.doneCallee_=1;var i=new qe.State(n.callee,t.scope);return i.components=!0,i}if(1===t.doneCallee_){t.doneCallee_=2;var r=t.value;if(Array.isArray(r)){if(t.func_=this.getValue(r),r[0]===qe.SCOPE_REFERENCE?t.directEval_="eval"===r[1]:t.funcThis_=r[0],r=t.func_,this.getterStep_)return t.doneCallee_=1,this.createGetter_(r,t.value)}else t.func_=r;t.arguments_=[],t.n_=0}if(r=t.func_,!t.doneArgs_){if(0!==t.n_&&t.arguments_.push(t.value),n.arguments[t.n_])return new qe.State(n.arguments[t.n_++],t.scope);if("NewExpression"===n.type){if(r.illegalConstructor&&this.throwException(this.TYPE_ERROR,r+" is not a constructor"),r===this.ARRAY)t.funcThis_=this.createArray();else{var s=r.properties.prototype;"object"==typeof s&&null!==s||(s=this.OBJECT_PROTO),t.funcThis_=this.createObjectProto(s)}t.isConstructor=!0}else void 0===t.funcThis_&&(t.funcThis_=t.scope.strict?void 0:this.globalObject);t.doneArgs_=!0}if(t.doneExec_)e.pop(),t.isConstructor&&"object"!=typeof t.value?e[e.length-1].value=t.funcThis_:e[e.length-1].value=t.value;else{t.doneExec_=!0,r instanceof qe.Object||this.throwException(this.TYPE_ERROR,r+" is not a function");var a=r.node;if(a){for(var o=this.createScope(a.body,r.parentScope),l=0;l<a.params.length;l++){var u=a.params[l].name,c=t.arguments_.length>l?t.arguments_[l]:void 0;this.setProperty(o.object,u,c)}var d=this.createArray();for(l=0;l<t.arguments_.length;l++)this.setProperty(d,l,t.arguments_[l]);this.setProperty(o.object,"arguments",d);var h=a.id&&a.id.name;return h&&this.setProperty(o.object,h,r),this.setProperty(o.object,"this",t.funcThis_,qe.READONLY_DESCRIPTOR),t.value=void 0,new qe.State(a.body,o)}if(r.eval){var p=t.arguments_[0];if("string"==typeof p){try{var m=V.parse(String(p),qe.PARSE_OPTIONS)}catch(e){this.throwException(this.SYNTAX_ERROR,"Invalid code: "+e.message)}var f=new this.nodeConstructor({options:{}});return f.type="EvalProgram_",f.body=m.body,qe.stripLocations_(f,n.start,n.end),(o=t.directEval_?t.scope:this.globalScope).strict?o=this.createScope(m,o):this.populateScope_(m,o),this.value=void 0,new qe.State(f,o)}t.value=p}else if(r.nativeFunc)t.value=r.nativeFunc.apply(t.funcThis_,t.arguments_);else{if(r.asyncFunc){var g=this,_=r.asyncFunc.length-1,v=t.arguments_.concat(new Array(_)).slice(0,_);return v.push((function(e){t.value=e,g.paused_=!1})),this.paused_=!0,void r.asyncFunc.apply(t.funcThis_,v)}this.throwException(this.TYPE_ERROR,r.class+" is not callable")}}},qe.prototype.stepCatchClause=function(e,t,n){if(!t.done_){t.done_=!0;var i=this.createSpecialScope(t.scope);return this.setProperty(i.object,n.param.name,t.throwValue),new qe.State(n.body,i)}e.pop()},qe.prototype.stepConditionalExpression=function(e,t,n){var i=t.mode_||0;if(0===i)return t.mode_=1,new qe.State(n.test,t.scope);if(1===i){t.mode_=2;var r=Boolean(t.value);if(r&&n.consequent)return new qe.State(n.consequent,t.scope);if(!r&&n.alternate)return new qe.State(n.alternate,t.scope);this.value=void 0}e.pop(),"ConditionalExpression"===n.type&&(e[e.length-1].value=t.value)},qe.prototype.stepContinueStatement=function(e,t,n){var i=n.label&&n.label.name;this.unwind(qe.Completion.CONTINUE,void 0,i)},qe.prototype.stepDebuggerStatement=function(e,t,n){e.pop()},qe.prototype.stepDoWhileStatement=function(e,t,n){if("DoWhileStatement"===n.type&&void 0===t.test_&&(t.value=!0,t.test_=!0),!t.test_)return t.test_=!0,new qe.State(n.test,t.scope);if(t.value){if(n.body)return t.test_=!1,t.isLoop=!0,new qe.State(n.body,t.scope)}else e.pop()},qe.prototype.stepEmptyStatement=function(e,t,n){e.pop()},qe.prototype.stepEvalProgram_=function(e,t,n){var i=t.n_||0,r=n.body[i];if(r)return t.n_=i+1,new qe.State(r,t.scope);e.pop(),e[e.length-1].value=this.value},qe.prototype.stepExpressionStatement=function(e,t,n){if(!t.done_)return t.done_=!0,new qe.State(n.expression,t.scope);e.pop(),this.value=t.value},qe.prototype.stepForInStatement=function(e,t,n){if(!t.doneInit_&&(t.doneInit_=!0,n.left.declarations&&n.left.declarations[0].init))return t.scope.strict&&this.throwException(this.SYNTAX_ERROR,"for-in loop variable declaration may not have an initializer."),new qe.State(n.left,t.scope);if(!t.doneObject_)return t.doneObject_=!0,t.variable_||(t.variable_=t.value),new qe.State(n.right,t.scope);if(t.isLoop||(t.isLoop=!0,t.object_=t.value,t.visited_=Object.create(null)),void 0===t.name_)e:for(;;){if(t.object_ instanceof qe.Object){for(t.props_||(t.props_=Object.getOwnPropertyNames(t.object_.properties));void 0!==(i=t.props_.shift());)if(Object.prototype.hasOwnProperty.call(t.object_.properties,i)&&!t.visited_[i]&&(t.visited_[i]=!0,Object.prototype.propertyIsEnumerable.call(t.object_.properties,i))){t.name_=i;break e}}else if(null!==t.object_&&void 0!==t.object_)for(t.props_||(t.props_=Object.getOwnPropertyNames(t.object_));;){var i;if(void 0===(i=t.props_.shift()))break;if(t.visited_[i]=!0,Object.prototype.propertyIsEnumerable.call(t.object_,i)){t.name_=i;break e}}if(t.object_=this.getPrototype(t.object_),t.props_=null,null===t.object_)return void e.pop()}if(!t.doneVariable_){t.doneVariable_=!0;var r=n.left;if("VariableDeclaration"!==r.type){t.variable_=null;var s=new qe.State(r,t.scope);return s.components=!0,s}t.variable_=[qe.SCOPE_REFERENCE,r.declarations[0].id.name]}if(t.variable_||(t.variable_=t.value),!t.doneSetter_){t.doneSetter_=!0;var a=t.name_,o=this.setValue(t.variable_,a);if(o)return this.createSetter_(o,t.variable_,a)}return t.name_=void 0,t.doneVariable_=!1,t.doneSetter_=!1,n.body?new qe.State(n.body,t.scope):void 0},qe.prototype.stepForStatement=function(e,t,n){var i=t.mode_||0;if(0===i){if(t.mode_=1,n.init)return new qe.State(n.init,t.scope)}else if(1===i){if(t.mode_=2,n.test)return new qe.State(n.test,t.scope)}else if(2===i){if(t.mode_=3,!n.test||t.value)return t.isLoop=!0,new qe.State(n.body,t.scope);e.pop()}else if(3===i&&(t.mode_=1,n.update))return new qe.State(n.update,t.scope)},qe.prototype.stepFunctionDeclaration=function(e,t,n){e.pop()},qe.prototype.stepFunctionExpression=function(e,t,n){e.pop(),e[e.length-1].value=this.createFunction(n,t.scope)},qe.prototype.stepIdentifier=function(e,t,n){if(e.pop(),t.components)e[e.length-1].value=[qe.SCOPE_REFERENCE,n.name];else{var i=this.getValueFromScope(n.name);if(this.getterStep_){for(var r=t.scope;!this.hasProperty(r,n.name);)r=r.parentScope;var s=i;return this.createGetter_(s,this.globalObject)}e[e.length-1].value=i}},qe.prototype.stepIfStatement=qe.prototype.stepConditionalExpression,qe.prototype.stepLabeledStatement=function(e,t,n){e.pop();var i=t.labels||[];i.push(n.label.name);var r=new qe.State(n.body,t.scope);return r.labels=i,r},qe.prototype.stepLiteral=function(e,t,n){e.pop();var i=n.value;if(i instanceof RegExp){var r=this.createObjectProto(this.REGEXP_PROTO);this.populateRegExp(r,i),i=r}e[e.length-1].value=i},qe.prototype.stepLogicalExpression=function(e,t,n){if("&&"!==n.operator&&"||"!==n.operator)throw SyntaxError("Unknown logical operator: "+n.operator);if(!t.doneLeft_)return t.doneLeft_=!0,new qe.State(n.left,t.scope);if(t.doneRight_)e.pop(),e[e.length-1].value=t.value;else{if(!("&&"===n.operator&&!t.value||"||"===n.operator&&t.value))return t.doneRight_=!0,new qe.State(n.right,t.scope);e.pop(),e[e.length-1].value=t.value}},qe.prototype.stepMemberExpression=function(e,t,n){if(!t.doneObject_)return t.doneObject_=!0,new qe.State(n.object,t.scope);var i;if(n.computed){if(!t.doneProperty_)return t.object_=t.value,t.doneProperty_=!0,new qe.State(n.property,t.scope);i=t.value}else t.object_=t.value,i=n.property.name;if(e.pop(),t.components)e[e.length-1].value=[t.object_,i];else{var r=this.getProperty(t.object_,i);if(this.getterStep_){var s=r;return this.createGetter_(s,t.object_)}e[e.length-1].value=r}},qe.prototype.stepNewExpression=qe.prototype.stepCallExpression,qe.prototype.stepObjectExpression=function(e,t,n){var i=t.n_||0,r=n.properties[i];if(t.object_){if("Identifier"===(a=r.key).type)var s=a.name;else{if("Literal"!==a.type)throw SyntaxError("Unknown object structure: "+a.type);s=a.value}t.properties_[s]||(t.properties_[s]={}),t.properties_[s][r.kind]=t.value,t.n_=++i,r=n.properties[i]}else t.object_=this.createObjectProto(this.OBJECT_PROTO),t.properties_=Object.create(null);if(r)return new qe.State(r.value,t.scope);for(var a in t.properties_){var o=t.properties_[a];if("get"in o||"set"in o){var l={configurable:!0,enumerable:!0,get:o.get,set:o.set};this.setProperty(t.object_,a,qe.VALUE_IN_DESCRIPTOR,l)}else this.setProperty(t.object_,a,o.init)}e.pop(),e[e.length-1].value=t.object_},qe.prototype.stepProgram=function(e,t,n){var i=n.body.shift();if(i)return t.done=!1,new qe.State(i,t.scope);t.done=!0},qe.prototype.stepReturnStatement=function(e,t,n){if(n.argument&&!t.done_)return t.done_=!0,new qe.State(n.argument,t.scope);this.unwind(qe.Completion.RETURN,t.value,void 0)},qe.prototype.stepSequenceExpression=function(e,t,n){var i=t.n_||0,r=n.expressions[i];if(r)return t.n_=i+1,new qe.State(r,t.scope);e.pop(),e[e.length-1].value=t.value},qe.prototype.stepSwitchStatement=function(e,t,n){if(!t.test_)return t.test_=1,new qe.State(n.discriminant,t.scope);for(1===t.test_&&(t.test_=2,t.switchValue_=t.value,t.defaultCase_=-1);;){var i=t.index_||0,r=n.cases[i];if(t.matched_||!r||r.test)if(r||t.matched_||-1===t.defaultCase_){if(!r)return void e.pop();if(!t.matched_&&!t.tested_&&r.test)return t.tested_=!0,new qe.State(r.test,t.scope);if(t.matched_||t.value===t.switchValue_){t.matched_=!0;var s=t.n_||0;if(r.consequent[s])return t.isSwitch=!0,t.n_=s+1,new qe.State(r.consequent[s],t.scope)}t.tested_=!1,t.n_=0,t.index_=i+1}else t.matched_=!0,t.index_=t.defaultCase_;else t.defaultCase_=i,t.index_=i+1}},qe.prototype.stepThisExpression=function(e,t,n){e.pop(),e[e.length-1].value=this.getValueFromScope("this")},qe.prototype.stepThrowStatement=function(e,t,n){if(!t.done_)return t.done_=!0,new qe.State(n.argument,t.scope);this.throwException(t.value)},qe.prototype.stepTryStatement=function(e,t,n){if(!t.doneBlock_)return t.doneBlock_=!0,new qe.State(n.block,t.scope);if(t.cv&&t.cv.type===qe.Completion.THROW&&!t.doneHandler_&&n.handler){t.doneHandler_=!0;var i=new qe.State(n.handler,t.scope);return i.throwValue=t.cv.value,t.cv=void 0,i}if(!t.doneFinalizer_&&n.finalizer)return t.doneFinalizer_=!0,new qe.State(n.finalizer,t.scope);e.pop(),t.cv&&this.unwind(t.cv.type,t.cv.value,t.cv.label)},qe.prototype.stepUnaryExpression=function(e,t,n){if(!t.done_){t.done_=!0;var i=new qe.State(n.argument,t.scope);return i.components="delete"===n.operator,i}e.pop();var r=t.value;if("-"===n.operator)r=-r;else if("+"===n.operator)r=+r;else if("!"===n.operator)r=!r;else if("~"===n.operator)r=~r;else if("delete"===n.operator){var s=!0;if(Array.isArray(r)){var a=r[0];a===qe.SCOPE_REFERENCE&&(a=t.scope);var o=String(r[1]);try{delete a.properties[o]}catch(e){t.scope.strict?this.throwException(this.TYPE_ERROR,"Cannot delete property '"+o+"' of '"+a+"'"):s=!1}}r=s}else if("typeof"===n.operator)r=r&&"Function"===r.class?"function":typeof r;else{if("void"!==n.operator)throw SyntaxError("Unknown unary operator: "+n.operator);r=void 0}e[e.length-1].value=r},qe.prototype.stepUpdateExpression=function(e,t,n){if(!t.doneLeft_){t.doneLeft_=!0;var i=new qe.State(n.argument,t.scope);return i.components=!0,i}if(t.leftSide_||(t.leftSide_=t.value),t.doneGetter_&&(t.leftValue_=t.value),!t.doneGetter_){var r=this.getValue(t.leftSide_);if(t.leftValue_=r,this.getterStep_){t.doneGetter_=!0;var s=r;return this.createGetter_(s,t.leftSide_)}}if(t.doneSetter_)return e.pop(),void(e[e.length-1].value=t.setterValue_);var a;if(r=Number(t.leftValue_),"++"===n.operator)a=r+1;else{if("--"!==n.operator)throw SyntaxError("Unknown update expression: "+n.operator);a=r-1}var o=n.prefix?a:r,l=this.setValue(t.leftSide_,a);if(l)return t.doneSetter_=!0,t.setterValue_=o,this.createSetter_(l,t.leftSide_,a);e.pop(),e[e.length-1].value=o},qe.prototype.stepVariableDeclaration=function(e,t,n){var i=n.declarations,r=t.n_||0,s=i[r];for(t.init_&&s&&(this.setValueToScope(s.id.name,t.value),t.init_=!1,s=i[++r]);s;){if(s.init)return t.n_=r,t.init_=!0,new qe.State(s.init,t.scope);s=i[++r]}e.pop()},qe.prototype.stepWithStatement=function(e,t,n){if(!t.doneObject_)return t.doneObject_=!0,new qe.State(n.object,t.scope);if(!t.doneBody_){t.doneBody_=!0;var i=this.createSpecialScope(t.scope,t.value);return new qe.State(n.body,i)}e.pop()},qe.prototype.stepWhileStatement=qe.prototype.stepDoWhileStatement;const Re=qe;{class e extends((0,o.P)([l.F,u.q],Nuxeo.Element)){static get is(){return"nuxeo-filter"}static get properties(){return{document:{type:Object,value:{}},user:{type:Object,value:{}},type:{type:String,value:"",_filter:{ctx:["document"],fn:"hasType",multiple:!0}},facet:{type:String,value:"",_filter:{ctx:["document"],fn:"hasFacet",multiple:!0}},schema:{type:String,value:"",_filter:{ctx:["document"],fn:"hasSchema",multiple:!0}},state:{type:String,value:"",_filter:{ctx:["document"],fn:"hasState",multiple:!0}},path:{type:String,value:"",_filter:{ctx:["document"],fn:"pathStartsWith"}},permission:{type:String,value:"",_filter:{ctx:["document"],fn:"hasPermission",multiple:!0}},expression:{type:String,value:"",_filter:{ctx:["document","user"],fn:"_evaluate"}},group:{type:String,value:"",_filter:{ctx:["user"],fn:"isMember",multiple:!0}}}}static get observers(){return["_update(document, user, facet, type, state, path, permission, expression, group)"]}_evaluate(e,t,n){let i=!1;try{if(Nuxeo.UI&&Nuxeo.UI.config&&Nuxeo.UI.config.expressions&&"false"===String(Nuxeo.UI.config.expressions.eval)){const r=new Re(n,((n,i)=>{n.setProperty(i,"this",n.nativeToPseudo(u.q)),Object.entries({document:e,user:t}).forEach((([e,t])=>{const r={};Object.getOwnPropertyNames(t).filter((e=>!e.startsWith("_"))).forEach((e=>{r[e]=t[e]})),n.setProperty(i,e,n.nativeToPseudo(r))})),Object.assign(n,u.q)}));r.run(),i=r.value}else i=new Function(["document","user"],`return ${n};`).apply(this,[e,t]);return i}catch(e){console.error(`${e} in <nuxeo-filter> expression "${n}"`)}return i}check(){for(const e in this.constructor.properties){const t=this[e],n=this.constructor.properties[e]._filter;if(t&&n){const e=n.ctx.map((e=>this[e])),i=n.multiple?t.trim().split(/\s*,\s*/):[t],r=this[n.fn];let s=!1;for(let t=0;t<i.length&&(s=r.apply(this,e.concat(i[t])),!s);t++);if(!s)return!1}}return!0}_update(){this.__renderDebouncer=i.dx.debounce(this.__renderDebouncer,r.microTask,(()=>{this.check()?this._render():this._clear()})),(0,s.E)(this.__renderDebouncer)}_render(){if(this._instance)return;const{parentNode:e}=(0,a.vz)(this);if(e){const t=(0,a.vz)(this).querySelector("template"),n=(0,a.vz)(e);if(t){delete t.__templatizeOwner,this.templatize(t),this._instance=this.stamp();for(const e in this.constructor.properties)this._instance._setPendingProperty(e,this[e]);if(this.__dataHost&&this.__dataHost.__data)for(const[e,t]of Object.entries(this.__dataHost.__data))this._instance._setPendingProperty(e,t);this._instance._flushProperties();const{root:e}=this._instance;n.insertBefore(e,this)}}}connectedCallback(){super.connectedCallback(),this._update()}disconnectedCallback(){super.disconnectedCallback(),this._clear()}_clear(){if(this._instance){const e=this._instance.children;if(e&&e.length){const t=(0,a.vz)((0,a.vz)(e[0]).parentNode);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}this._instance=null}}_forwardHostPropV2(e,t){if(this._instance){if((this._isPropertyPending("document")||this._isPropertyPending("user"))&&!this.check())return;this._instance.forwardHostProp(e,t)}}}customElements.define(e.is,e),Nuxeo.Filter=e}},62692:(e,t,n)=>{"use strict";n(36037);var i=n(66538);n(79323);{class e extends Nuxeo.Element{static get template(){return i.d`
        <style>
          :host {
            display: block;
          }

          [hidden] {
            display: none !important;
          }

          .item {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .item iron-image {
            width: 100%;
            height: 100%;
            --iron-image-placeholder: {
              background: #fafafa;
            }
          }

          .item .overlay {
            display: none;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 24px 10px 8px;
            background: rgba(0, 0, 0, 0.4);
            background: -webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
            background: -o-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
            background: -moz-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
            text-shadow: -1px 0 rgba(0, 0, 0, 0.4), 0 1px rgba(0, 0, 0, 0.4), 1px 0 rgba(0, 0, 0, 0.4),
              0 -1px rgba(0, 0, 0, 0.4);
          }

          .item:hover .overlay {
            display: block;
          }
        </style>

        <div class="item">
          <iron-image src="[[_url(document)]]" sizing="cover" preload fade></iron-image>
          <div class="overlay">[[document.title]]</div>
        </div>
      `}static get is(){return"nuxeo-justified-grid-item"}static get properties(){return{document:Object}}_url(e){return e&&e.contextParameters&&e.contextParameters.thumbnail&&e.contextParameters.thumbnail.url?e.contextParameters.thumbnail.url:""}}customElements.define(e.is,e),Nuxeo.JustifiedGridItem=e}},16687:(e,t,n)=>{"use strict";var i=n(66538),r=n(74153),s=n(16896),a=n(93426),o=n(73504),l=(n(78891),n(14190)),u=(n(49739),n(36037),n(3632),n(62018),n(85621),n(55689),n(30032)),c=n(9954),d=n(42840),h=n(5453);{class e extends((0,a.P)([l.z,o.F,d.L,h.N],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
          }

          #container {
            position: relative;
            height: 100%;
            width: 100%;
          }

          #list {
            @apply --layout-fit;
          }

          #list::after {
            content: '';
            flex-grow: 999999999;
          }

          #list .row {
            display: flex;
            flex-direction: row;
          }

          #list .item {
            position: relative;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
            border: 2px solid transparent;
            cursor: pointer;
            outline: none;
          }

          #list .item[selected],
          #list .item:hover,
          #list .item:focus {
            border: 2px solid var(--nuxeo-grid-selected, transparent);
            background-color: var(--nuxeo-grid-selected, transparent);
            color: white;
          }

          #list .item paper-icon-button {
            position: absolute;
            left: 10px;
            top: 10px;
            background-color: rgba(255, 255, 255, 0.95);
            border: 2px solid var(--nuxeo-grid-selected);
            border-radius: 50%;
            width: 32px;
            height: 32px;
            padding: 2px;
            color: var(--nuxeo-grid-selected);
            display: none;
          }

          #list .item[selected] paper-icon-button {
            border: 2px solid var(--nuxeo-grid-selected);
            background-color: var(--nuxeo-grid-selected);
            color: white;
            display: block;
          }

          #list .item:hover paper-icon-button,
          #list .item paper-icon-button[selection-mode] {
            display: block;
          }

          [hidden] {
            display: none !important;
          }

          .emptyResult {
            opacity: 0.5;
            display: block;
            font-weight: 300;
            padding: 1.5em 0.7em;
            text-align: center;
            font-size: 1.1rem;
          }
        </style>

        <dom-if if="[[_isEmpty]]">
          <template>
            <div class="emptyResult">[[_computedEmptyLabel]]</div>
          </template>
        </dom-if>

        <div id="container">
          <iron-list id="list" items="[[rows]]" as="row" on-iron-resize="_resize">
            <template>
              <div class="row">
                <dom-repeat items="[[row]]">
                  <template>
                    <div
                      class="item"
                      tabindex="0"
                      on-click="_click"
                      selected$="[[_isSelected(item, selectedItems.*)]]"
                      style$="height: [[item._view.height]]px; width: [[item._view.width]]px;"
                    >
                      <div id="item-[[item._view.index]]"></div>
                      [[_itemChanged(item, item._view.width, item._view.height)]]
                      <paper-icon-button
                        noink
                        icon="icons:check"
                        selection-mode$="[[selectionMode]]"
                        hidden$="[[!selectionEnabled]]"
                        on-click="_check"
                      >
                      </paper-icon-button>
                    </div>
                  </template>
                </dom-repeat>
              </div>
            </template>
          </iron-list>

          <iron-scroll-threshold id="scrollThreshold" scroll-target="list" on-lower-threshold="fetch">
          </iron-scroll-threshold>
          <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" multi></array-selector>
        </div>
      `}static get is(){return"nuxeo-justified-grid"}static get properties(){return{rowHeight:{type:Number,value:196},page:{type:Number,value:1},pageSize:{type:Number,value:50},rows:{type:Array,value:[]},_isFetching:{type:Boolean,value:!1},_templateElement:{type:Object}}}static get observers(){return["_selectedItemsChanged(selectedItems.splices)"]}ready(){super.ready();const e=(0,r.vz)(this).querySelector("template");e&&(this.templatize(e),this._templateElement=this.stamp().root.firstElementChild)}disconnectedCallback(){super.disconnectedCallback(),this._templateElement=null}_itemChanged(e){this._templateElement&&e&&e._view&&(0,c.afterNextRender)(this,(()=>{const t=this.$$(`#item-${e._view.index}`);if(t)if(t.childNodes.length>0)t.childNodes[0].set("document",e);else{const n=this._templateElement.cloneNode(!0);n.set("document",e),t.appendChild(n)}}))}reset(){this.set("items",[]),this.set("rows",[]),this.page=1,this.$.scrollThreshold.clearTriggers()}fetch(){return this._isFetching||!this._hasPageProvider()||this.page>this.nxProvider.numberOfPages?(this.$.scrollThreshold.clearTriggers(),this._isFetching=!1,Promise.resolve()):(this._isFetching=!0,this._fetchPage(this.page,this.pageSize).then((e=>{this._addItems(e.entries),this.page+=1,this.$.scrollThreshold.clearTriggers(),this._isFetching=!1})))}getSelectedItems(){return this.$.selector.selected}selectItem(e){this.selectionEnabled&&(this.$.selector.select(e),this._updateFlags())}selectIndex(e){this.selectionEnabled&&(this.$.selector.selectIndex(e),this._updateFlags())}selectItems(e){this.selectionEnabled&&e&&e.length>0&&(e.forEach((e=>this.$.selector.select(e))),this._updateFlags())}deselectItem(e){this.selectionEnabled&&(this.$.selector.deselect(e),this._updateFlags())}deselectIndex(e){this.selectionEnabled&&(this.$.selector.deselectIndex(e),this._updateFlags())}selectAll(){this.items.forEach((e=>this.$.selector.select(e))),this._updateFlags()}clearSelection(){this.$.selector.clearSelection(),this._updateFlags()}_check(e){this.selectionEnabled&&(this.selectionMode=!0,this._click(e))}_click(e){const{index:t}=e.model.item._view;this.selectionEnabled&&this.selectionMode?this._isIndexSelected(t)?this.deselectIndex(t):this.selectIndex(t):this.dispatchEvent(new CustomEvent("navigate",{composed:!0,bubbles:!0,detail:{doc:this.items[t],index:t}})),e.stopPropagation()}_selectedItemsChanged(){this.selectionMode=this.selectedItems&&this.selectedItems.length>0}_isSelected(e){return this._isIndexSelected(e._view.index)}_isIndexSelected(e){return this.selectedItems.indexOf(this.items[e])>-1}_addItems(e){let t=e;this.rows.length>0&&(t=this.rows[this.rows.length-1].map((e=>this.items[e._view.index])).concat(t),this.pop("rows")),this._computeRows(t).forEach((e=>this.push("rows",e))),this.$.scrollThreshold.clearTriggers()}_computeRows(e){const t=this.$.list.offsetWidth,n=[];let i=0,r=[];return e.forEach(((s,a)=>{const o=Object.assign({},s);o.size=o.properties["picture:info"]||{width:1,height:1},o.size.width=o.size.width||1,o.size.height=o.size.height||1,o._view={},o._view.index=this.items.indexOf(s),o._view.width=o.size.width*this.rowHeight/o.size.height,o._view.height=this.rowHeight,i+o._view.width<=t?(r.push(o),i+=o._view.width):(n.push(this._fitItemsToWidth(r,i,t)),r=[o],i=o._view.width),a===e.length-1&&n.push(this._fitItemsToWidth(r,i,t))})),n}_fitItemsToWidth(e,t,n){const i=n*this.rowHeight/t;return e.forEach((e=>{e._view.height=i,e._view.width=e._view.width/t*n})),e}_resize(){(this.$.list.offsetWidth||this.$.list.offsetHeight)&&(this._debouncer=u.dx.debounce(this._debouncer,s.timeOut.after(150),(()=>{this.rows=this._computeRows(this.items)})))}}customElements.define(e.is,e),Nuxeo.JustifiedGrid=e}},89340:(e,t,n)=>{"use strict";n(87697),n(93366),n(36037),n(3632),n(75343),n(95918);var i=n(66538);{class e extends Nuxeo.Element{static get template(){return i.d`
        <style>
          :host {
            display: block;
          }

          .container {
            @apply --layout-horizontal;
            @apply --layout-center;
          }

          .controls {
            color: var(--nuxeo-text-default, #000);
            font-size: 1rem;
            @apply --layout-horizontal;
            @apply --layout-center;
          }

          nuxeo-select {
            max-width: 4rem;

            --paper-dropdown-menu-input: {
              padding: 0;
              min-width: 2rem;
              text-align: center;
            }

            --paper-input-container: {
              padding: 0 !important;
            }

            --paper-input-container-underline: {
              display: none;
            }

            --paper-input-container-underline-focus: {
              display: none;
            }

            --paper-input-container-shared-input-style: {
              width: inherit;
              max-width: 4rem;
            }
          }

          .total {
            margin-inline-start: 2rem;
            font-size: 1rem;
            width: 4rem;
            text-align: center;
          }

          paper-icon-button {
            padding-top: 6px;
          }
        </style>

        <div class="container">
          <paper-icon-button
            id="firstPage"
            icon="av:skip-previous"
            title="First Page"
            on-click="_first"
            disabled$="[[_isFirst(page)]]"
          >
          </paper-icon-button>
          <paper-icon-button
            id="previousPage"
            icon="icons:chevron-left"
            title="Previous Page"
            on-click="_previous"
            disabled$="[[_isFirst(page)]]"
          >
          </paper-icon-button>
          <div class="controls">
            <nuxeo-select options="[[_computePageOptions(numberOfPages)]]" selected="{{page}}" vertical-align>
            </nuxeo-select>
            <span class="total">/ [[numberOfPages]]</span>
          </div>
          <paper-icon-button
            id="nextPage"
            icon="icons:chevron-right"
            title="Next Page"
            on-click="_next"
            disabled$="[[_isLast(page, numberOfPages)]]"
          >
          </paper-icon-button>
          <paper-icon-button
            id="lastPage"
            icon="av:skip-next"
            title="Last Page"
            on-click="_last"
            disabled$="[[_isLast(page, numberOfPages)]]"
          >
          </paper-icon-button>
        </div>
      `}static get is(){return"nuxeo-pagination-controls"}static get properties(){return{page:{type:Number,value:1,notify:!0},numberOfPages:Number}}_previous(){this.page--}_next(){this.page++}_first(){this.page=1}_last(){this.page=this.numberOfPages}_isFirst(e){return 1===e}_isLast(e){return e===this.numberOfPages}_computePageOptions(e){return Array.from({length:e},((e,t)=>t+1))}}customElements.define(e.is,e),Nuxeo.PaginationControls=e}},57632:(e,t,n)=>{"use strict";n(36037);var i=n(66538),r=n(74153),s=(n(67365),n(96230),n(93426)),a=n(73504),o=n(41608);{class e extends((0,s.P)([a.F,o.mB],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
            @apply --nuxeo-tree-node-theme;
          }

          ::slotted(iron-collapse) {
            padding-left: 1em;
            @apply --nuxeo-tree-children-theme;
          }

          ::slotted(.more) {
            @apply --nuxeo-tree-node-more-theme;
          }

          ::slotted(#content) {
            position: relative;
            margin: 0.1rem 0 0.2rem;
          }

          ::slotted(#content iron-icon) {
            margin-top: -0.25rem;
          }

          ::slotted(span iron-icon) {
            width: 0.95rem;
            margin: 0 0.1rem 0.3rem 0;
          }
        </style>

        <slot></slot>
      `}static get is(){return"nuxeo-tree-node"}static get properties(){return{data:Object,_children:{type:Array},controller:Object,opened:{type:Boolean,value:!1,observer:"_openedChanged"},loading:{type:Boolean,value:!1,observer:"_loadingChanged"},template:Object,nodeKey:{type:String,value:"id"},page:{type:Number,value:1},isNextAvailable:{type:Boolean,value:!1},_parentModel:{type:Boolean,value:!0}}}static get observers(){return["_renderNodeContent(data)"]}toggle(){this._updated?this.opened=!this.opened:(this._fetchChildren(),this.opened=!0)}_selectNode(e){let t;t=e.detail.item?{item:e.detail.item}:{item:this.data},this.dispatchEvent(new CustomEvent("select",{composed:!0,bubbles:!0,detail:t}))}open(){return this.opened=!0,this._updated?Promise.resolve():this._fetchChildren()}close(){this.opened=!1}_renderNodeContent(){if(this.template){this._instance&&(this._teardownInstance(),this._fetchChildren()),this.template.__templatizeOwner=null,this.templatize(this.template,!0),this._instance=this.stamp({}),this._instance.item=this.data,this._instance.opened=this.opened,this._instance.loading=this.loading,this._instance.isLeaf=this.controller.isLeaf(this.data),this.dataset[this.nodeKey]=this.data[this.nodeKey];const e=document.createElement("div");e.id="content",(0,r.vz)(e).appendChild(this._instance.root),(0,r.vz)(this).appendChild(e);const t=document.createElement("iron-collapse");t.id="children",t.opened=this.opened,t.loading=this.loading,t.noAnimation="true",(0,r.vz)(this).appendChild(t),(0,r.yl)(),this._setupToggleListener()}}_renderChildNodes(){if(this.template)return new Promise((e=>{const t=(0,r.vz)(this).querySelector("#children");for(;t.lastChild;)t.removeChild(t.lastChild);const n=this._children||[];for(let e=0;e<n.length;e++){const i=document.createElement("nuxeo-tree-node");i.controller=this.controller,i.template=this.template,i.nodeKey=this.nodeKey,i.dataHost=this._instance._rootDataHost,i.data=n[e],t.appendChild(i)}if(this.isNextAvailable){const e=document.createElement("a");e.setAttribute("class","more"),e.appendChild(document.createTextNode(this.i18n("tree.loadMore"))),this.listen(e,"click","_loadMoreData"),t.appendChild(e)}e(),this.loading=!1}))}_loadMoreData(){this.isNextAvailable&&!this.loading&&(this.page=this.page+1,this._fetchChildren())}_fetchChildren(){if(this.loading=!0,1===this.page&&(this._children=[],this.isNextAvailable=!0),this.isNextAvailable)return this.controller.getChildren(this.data,this.page).then((e=>(e.items?(e.items.forEach((e=>{this.push("_children",e)})),this.isNextAvailable=e.isNextAvailable):(this._children=e,this.isNextAvailable=!1),this._updated=!0,this._renderChildNodes())))}_setupToggleListener(){(0,r.yl)();const e=(0,r.vz)(this).querySelector("#content").querySelectorAll("[select]");for(let t=0;t<e.length;t++)this.listen(e[t],"click","_selectNode");const t=(0,r.vz)(this).querySelector("#content").querySelectorAll("[toggle]");for(let e=0;e<t.length;e++)this.listen(t[e],"click","toggle")}_forwardParentProp(e,t){this._instance&&(this._instance[e]=t)}_teardownInstance(){const{children:e}=this._instance;if(e&&e.length){const t=(0,r.vz)((0,r.vz)(e[0]).parentNode);for(let n=0;n<e.length;n++)t.removeChild(e[n])}this._instance=null,this._updated=!1}_openedChanged(){this._instance&&((0,r.vz)(this).querySelector("#children").opened=this.opened,this._instance.notifyPath("opened",this.opened),this._setupToggleListener())}_loadingChanged(){this._instance&&((0,r.vz)(this).querySelector("#children").loading=this.loading,this._instance.notifyPath("loading",this.loading))}removeSelf(){return this.remove(),Promise.resolve()}}customElements.define(e.is,e),Nuxeo.TreeNode=e}{class e extends Nuxeo.Element{static get template(){return i.d`
        <style>
          :host {
            display: block;
            @apply --nuxeo-tree-theme;
          }
        </style>

        <slot></slot>
      `}static get is(){return"nuxeo-tree"}static get properties(){return{data:Object,controller:Object,template:Object,nodeKey:{type:String,value:"id"}}}static get observers(){return["_update(data, controller)"]}_update(){if(this.data&&this.controller){const e=(0,r.vz)(this).querySelector("template");this._root&&(0,r.vz)(this).removeChild(this._root),this._root=document.createElement("nuxeo-tree-node"),this._root.id="root",this._root.template=e,this._root.dataHost=this.dataHost,this._root.controller=this.controller,this._root.nodeKey=this.nodeKey,this._root.data=this.data,this._root.dataset[this.nodeKey]=this.data[this.nodeKey],(0,r.vz)(this).appendChild(this._root),this._root.open()}}open(){this._openNodes(arguments)}_openNodes(e){if(!e||0===e.length)return;const t=this._find(e[0]);t&&t.open().then((()=>{this._openNodes(Array.prototype.slice.call(e,1))}))}_find(e){return this.querySelector(`[data-${this.nodeKey}="${e}"]`)}removeNodes(e){if(!e||0===e.length)return;const t=this._find(e[0]);t&&t.removeSelf().then((()=>{this.removeNodes(Array.prototype.slice.call(e,1))}))}}customElements.define(e.is,e),Nuxeo.Tree=e}},31464:(e,t,n)=>{"use strict";var i=n(66538),r=n(79193),s=n(93426),a=(n(62306),n(81547),n(43384),n(93366),n(95671),n(68582),n(63961),n(587),n(36037),n(39660),n(35266),n(12052),n(3632),n(53043),n(76967),n(22403),n(3691),n(85621),n(70590)),o=n(30883),l=n(41608);n(72063),n(55689),n(49085),n(38677),n(79223),n(26343);{class e extends((0,s.P)([l.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex nuxeo-button-styles">
          :host {
            display: block;
          }

          .header {
            @apply --layout-horizontal;
            @apply --layout-center;
            margin-bottom: 16px;
          }

          .header > iron-icon {
            padding: 8px;
          }

          .row {
            font-size: 0.8rem;
            border: 1px solid var(--nuxeo-border, #aaa);
            @apply --layout-horizontal;
            @apply --layout-center;
          }

          .row .label {
            font-weight: 400;
            @apply --layout-horizontal;
            @apply --layout-center;
            @apply --layout-flex;
          }

          .row .label iron-icon {
            margin: 0 8px;
          }

          .row .name {
            @apply --layout-flex;
          }

          .row .email {
            @apply --layout-flex;
          }

          .form-buttons {
            margin-top: 16px;
          }

          #errors {
            color: var(--nuxeo-warn-text, #de350b);
            margin: 1em 0;
          }
        </style>

        <nuxeo-resource id="request" path="/group"></nuxeo-resource>

        <div class="header">
          <iron-icon icon="nuxeo:group"></iron-icon>
          <h4>[[i18n('createGroup.heading')]]</h4>
        </div>

        <iron-form id="form">
          <form>
            <nuxeo-input id="groupName" label="[[i18n('createGroup.group.name')]]" value="{{groupName}}" required>
            </nuxeo-input>
            <nuxeo-input
              id="groupLabel"
              label="[[i18n('createGroup.group.label')]]"
              value="{{groupLabel}}"
            ></nuxeo-input>

            <nuxeo-user-suggestion
              id="picker"
              label="[[i18n('createGroup.members')]]"
              search-type="USER_GROUP_TYPE"
              placeholder="[[i18n('createGroup.search.placeholder')]]"
              selected-item="{{selectedUser}}"
              result-formatter="[[resultFormatter]]"
              query-results-filter="[[resultsFilter]]"
            >
            </nuxeo-user-suggestion>

            <!-- selected members -->
            <dom-repeat items="[[selectedUsers]]">
              <template>
                <div class="row">
                  <div class="label">
                    <iron-icon icon="nuxeo:user" hidden="[[item.groupname]]"></iron-icon>
                    <iron-icon icon="nuxeo:group" hidden="[[item.username]]"></iron-icon>
                    <span>[[item.displayLabel]]</span>
                  </div>
                  <div class="name">
                    <span hidden="[[item.groupname]]">[[item.username]]</span>
                    <span hidden="[[item.username]]">[[item.groupname]]</span>
                  </div>
                  <div class="email">
                    <span>[[item.email]]</span>
                  </div>
                  <paper-icon-button icon="nuxeo:remove" title="remove" on-click="_remove"></paper-icon-button>
                </div>
              </template>
            </dom-repeat>

            <div class="form-buttons">
              <paper-button noink id="cancelButton" class="secondary" on-click="_cancel"
                >[[i18n('command.cancel')]]</paper-button
              >
              <paper-button noink id="createButton" class="primary" on-click="_submit">
                [[i18n('command.create')]]
              </paper-button>
              <paper-button noink id="createAnotherButton" class="primary" on-click="_submitAnother">
                [[i18n('createGroup.createAnother')]]
              </paper-button>
            </div>

            <span id="errors" hidden$="[[!_hasErrors(errors)]]">[[errors]]</span>
          </form>
        </iron-form>
      `}static get is(){return"nuxeo-create-group"}static get properties(){return{groupName:{type:String,notify:!0},groupLabel:{type:String,notify:!0},selectedUser:{type:Object,notify:!0},selectedUsers:{type:Array,value:[],notify:!0},resultsFilter:{type:Function,value(){return this._resultsFilter.bind(this)}},resultFormatter:{type:Function},errors:{type:String,value:""},_createAnother:{type:Boolean,value:!1}}}static get observers(){return["_observeSelectedUser(selectedUser)"]}ready(){super.ready(),this.$.form.addEventListener("iron-form-presubmit",(e=>{e.preventDefault(),this._create()}))}_goHome(){this.dispatchEvent(new CustomEvent("goHome",{composed:!0,bubbles:!0}))}_observeSelectedUser(){this.selectedUser&&-1===this.selectedUsers.indexOf(this.selectedUser)&&this.push("selectedUsers",this.selectedUser),this.selectedUser=null}_remove(e){e.model.item&&this.splice("selectedUsers",this.selectedUsers.indexOf(e.model.item),1)}_submitAnother(){this._createAnother=!0,this.$.form.submit()}_submit(){this._createAnother=!1,this.$.form.submit()}_create(){this.$.request.data=this._computeData(),this.$.request.post().then((e=>{this.dispatchEvent(new CustomEvent("nuxeo-group-created",{composed:!0,bubbles:!0,detail:e})),this._resetFields(),this._createAnother||this._goHome()})).catch((e=>{this.errors=e.message}))}_cancel(){this._resetFields(),this._goHome()}_resetFields(){this.groupName="",this.groupLabel="",this.errors="",this.selectedUsers=[]}_computeData(){return{"entity-type":"group",groupname:this.groupName,grouplabel:this.groupLabel,memberUsers:this.selectedUsers.filter((e=>"USER_TYPE"===e.type)).map((e=>e.username)),memberGroups:this.selectedUsers.filter((e=>"GROUP_TYPE"===e.type)).map((e=>e.groupname))}}_resultsFilter(e){for(let t=0;t<this.selectedUsers.length;t++)if(e.id===this.selectedUsers[t].id)return!1;return!0}_hasErrors(){return""!==this.errors}}customElements.define(e.is,e),Nuxeo.CreateGroup=e}n(18626),n(9142);var u=n(83842),c=n(60925),d=n(69699);{class e extends((0,s.P)([u.V,c.x,d.e],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
            width: 100%;
          }
        </style>

        <nuxeo-input
          id="password"
          type="password"
          label="[[i18n('editPassword.password')]]"
          value="{{password}}"
          required
        >
        </nuxeo-input>

        <nuxeo-input
          id="passwordConfirmation"
          type="password"
          label="[[i18n('editPassword.verify')]]"
          value="{{_confirmationPassword}}"
          required
          auto-validate
          pattern="[[escapeRegExp(password)]]"
          error-message="[[_computeErrorMessage(password, i18n)]]"
        >
        </nuxeo-input>
      `}static get is(){return"nuxeo-edit-password"}static get properties(){return{password:{type:String,notify:!0},_confirmationPassword:{type:String}}}_computeErrorMessage(e){return e?this.i18n("editPassword.noMatch"):this.i18n("editPassword.required")}_getValidity(){return this.$.passwordConfirmation.validate()}resetFields(){this.set("password",""),this.set("_confirmationPassword","")}}customElements.define(e.is,e),Nuxeo.EditPassword=e}{class e extends((0,s.P)([l.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-button-styles">
          :host {
            display: block;
          }

          .header {
            @apply --layout-horizontal;
            @apply --layout-center;
            margin-bottom: 16px;
          }

          .header > iron-icon {
            padding: 8px;
          }

          .form-buttons {
            margin-top: 16px;
          }

          #errors {
            color: var(--nuxeo-warn-text, #de350b);
            margin: 1em 0;
          }
        </style>

        <nuxeo-connection user="{{_currentUser}}"></nuxeo-connection>

        <nuxeo-resource id="request" path="/user" headers='{"Content-Type": "application/json"}'> </nuxeo-resource>

        <nuxeo-operation id="invite" op="User.Invite"></nuxeo-operation>

        <div class="header">
          <iron-icon icon="nuxeo:user"></iron-icon>
          <h3>[[i18n('createUser.heading')]]</h3>
        </div>

        <iron-form id="form">
          <form>
            <nuxeo-input label="[[i18n('createUser.username')]]" value="{{user.username}}" name="username" required>
            </nuxeo-input>

            <nuxeo-layout
              id="layout"
              href="[[_layoutHref('nuxeo-edit-user.html')]]"
              model="[[_layoutModel(user, new)]]"
              on-element-changed="_layoutElementChanged"
            >
            </nuxeo-layout>

            <label>[[i18n('createUser.setPassword')]]</label>
            <paper-toggle-button checked="{{usePassword}}" name="password-toggle"></paper-toggle-button>

            <dom-if if="[[usePassword]]" restamp>
              <template>
                <nuxeo-edit-password id="passwordEditor" password="{{user.password}}" required></nuxeo-edit-password>
              </template>
            </dom-if>

            <div class="form-buttons">
              <paper-button noink id="cancelButton" class="secondary" on-click="_cancel"
                >[[i18n('command.cancel')]]</paper-button
              >
              <paper-button noink id="createButton" class="primary" on-click="_submit">
                [[i18n('command.create')]]
              </paper-button>
              <paper-button noink id="createAnotherButton" class="primary" on-click="_submitAnother">
                [[i18n('createUser.createAnother')]]
              </paper-button>
            </div>

            <span id="errors" hidden$="[[!_hasErrors(errors)]]">[[errors]]</span>
          </form>
        </iron-form>
      `}static get is(){return"nuxeo-create-user"}static get properties(){return{user:{type:Object,value:{}},usePassword:{type:Boolean,value:!1},errors:{type:String,value:""},_createAnother:{type:Boolean,value:!1},_currentUser:{type:Object}}}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/nuxeo-user-group-management/nuxeo-create-user.js`}}ready(){super.ready(),this.$.form.addEventListener("iron-form-presubmit",(e=>{e.preventDefault(),this._create()}))}_goHome(){this.dispatchEvent(new CustomEvent("goHome",{composed:!0,bubbles:!0}))}_submitAnother(){this._createAnother=!0,this.$.form.submit()}_submit(){this._createAnother=!1,this.$.form.submit()}_create(){this._isAdministrator(this._currentUser)||!this.user.groups||-1===this.user.groups.indexOf("administrators")?this._doCreate(this.user).then((()=>{this._resetFields(),this._createAnother||this._goHome()})).catch((e=>{this.errors=e.message})):this.errors=this.i18n("createUser.errorAdministratorsGroup")}_doCreate(e){const t={"entity-type":"user",id:"",properties:e};return this.usePassword?(this.$.request.data=t,this.$.request.post().then((e=>{this.dispatchEvent(new CustomEvent("nuxeo-user-created",{composed:!0,bubbles:!0,detail:e}))}))):(this.$.invite.input=t,this.$.invite.execute().then((()=>{t.id=e.username,this.dispatchEvent(new CustomEvent("nuxeo-user-invited",{composed:!0,bubbles:!0,detail:t}))})))}_cancel(){this._resetFields(),this._goHome()}_resetFields(){this.user={groups:[]},this.$$("#passwordEditor")&&this.$$("#passwordEditor").resetFields(),this.errors="",this.usePassword=!1}_hasErrors(){return""!==this.errors}_isAdministrator(e){return e&&e.isAdministrator}_layoutHref(e){return this.resolveUrl(e)}_layoutModel(){return{user:this.user,new:!0}}_layoutElementChanged(){this.$.layout.element.addEventListener("user-changed",(e=>{this.set(e.detail.path,e.detail.value)}))}}customElements.define(e.is,e),Nuxeo.CreateUser=e}n(89340),n(42108),n(25297),n(64091),n(39059),n(67117),n(24004);var h=n(79587);{class e extends((0,s.P)([l.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex iron-flex-factors nuxeo-button-styles">
          :host {
            display: block;
          }
          h3 {
            @apply --layout-flex;
          }

          .table-header {
            @apply --layout-horizontal;
            @apply --layout-center;
            background-color: var(--nuxeo-table-header-background, #fafafa);
            color: var(--nuxeo-text-default, rgba(0, 0, 0, 0.54));
            font-weight: 400;
            min-height: 48px;
            padding: 0 0 0 12px;
            border-bottom: 2px solid var(--nuxeo-border, #eee);
            box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
          }

          .table-row {
            @apply --layout-horizontal;
            @apply --layout-center;
            padding: 0 1em;
            min-height: 48px;
            border-bottom: 1px solid var(--nuxeo-border, #eee);
            background-color: var(--nuxeo-table-items-background, #fafafa);
          }

          .table-row:hover {
            background: var(--nuxeo-container-hover, #fafafa);
          }

          .table {
            border: 1px solid var(--nuxeo-border, #eee);
          }

          .table-row:last-of-type {
            border-bottom: none;
          }

          .ace-row > div {
            padding: 0.2em 0;
          }

          .table-headers > div {
            background-color: var(--nuxeo-table-header-background, #f8f9fb);
            font-weight: bold;
          }

          .table-actions {
            width: 50px;
          }

          .ace-permission-tag {
            background-color: var(--nuxeo-secondary-color, #7e90a5);
            border-radius: 3px;
            color: #fff;
            margin: 0 0.2em 0.2em 0;
            padding: 0.06em 0.3em;
            white-space: nowrap;
            @apply --nuxeo-tag;
          }

          .ace-permission-path {
            color: var(--nuxeo-secondary-color, #213f7d);
            font-size: 0.8rem;
          }

          .buttons {
            @apply --buttons-bar;
          }

          .confirm {
            padding: 2em;
            font-size: 1.1em;
          }

          .emptyResult {
            opacity: 0.5;
            display: block;
            font-weight: 300;
            padding: 1.5em 0.7em;
            text-align: center;
          }
        </style>

        <nuxeo-operation id="permissions" op="Repository.Query" enrichers="acls"></nuxeo-operation>
        <nuxeo-operation id="rmPermission" op="Document.RemovePermission"></nuxeo-operation>

        <dom-if if="[[label]]">
          <template>
            <div class="layout horizontal center">
              <h3>[[label]]</h3>
            </div>
          </template>
        </dom-if>

        <div class="table">
          <div class="table-header">
            <div class="flex-3">[[i18n('userGroupPermissions.on')]]</div>
            <div class="flex-6 layout horizontal">
              <div class="flex-2">[[i18n('userGroupPermissions.right')]]</div>
              <div class="flex-2">[[i18n('userGroupPermissions.timeFrame')]]</div>
              <div class="flex-2">[[i18n('userGroupPermissions.grantedBy')]]</div>
              <div class="table-actions"></div>
            </div>
          </div>
          <dom-if if="[[!empty]]">
            <template>
              <dom-repeat items="[[documents]]" as="document">
                <template>
                  <div class="table-row">
                    <div class="flex-3">
                      <div>[[document.title]]</div>
                      <div class="ace-permission-path">[[document.path]]</div>
                    </div>
                    <div class="layout vertical flex-6 ace-row">
                      <dom-repeat items="[[document.aces]]" as="ace">
                        <template>
                          <div class="layout horizontal center">
                            <div class="flex-2">
                              <span class="ace-permission-tag">[[ace.permission]]</span>
                            </div>
                            <div class="flex-2">
                              <span>[[ace.timeFrame]]</span>
                            </div>
                            <div class="flex-2">
                              <dom-if if="[[ace.creator]]">
                                <template>
                                  <nuxeo-tag icon="nuxeo:group">[[ace.creator]]</nuxeo-tag>
                                </template>
                              </dom-if>
                            </div>
                            <div class="table-actions">
                              <dom-if if="[[!readonly]]">
                                <template>
                                  <paper-icon-button
                                    icon="nuxeo:delete"
                                    noink
                                    title="[[i18n('userGroupPermissions.delete.button')]]"
                                    on-click="_toggleDialog"
                                    hidden$="[[!_canDelete(ace)]]"
                                  >
                                  </paper-icon-button>
                                </template>
                              </dom-if>
                            </div>
                          </div>
                        </template>
                      </dom-repeat>
                    </div>
                  </div>
                </template>
              </dom-repeat>
            </template>
          </dom-if>
          <dom-if if="[[empty]]">
            <template>
              <div class="table-row">
                <div class="emptyResult">[[i18n('userGroupPermissions.noPermissions', entity)]]</div>
              </div>
            </template>
          </dom-if>
        </div>
        <nuxeo-pagination-controls
          page="{{_currentPage}}"
          number-of-pages="[[_numberOfPages]]"
        ></nuxeo-pagination-controls>

        <nuxeo-dialog id="dialog" with-backdrop>
          <h2>[[i18n('userGroupPermissions.delete.confirm')]]</h2>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button noink dialog-dismiss class="secondary">[[i18n('label.no')]]</paper-button>
            </div>
            <paper-button class="primary" noink dialog-confirm on-click="_deleteAce"
              >[[i18n('label.yes')]]</paper-button
            >
          </div>
        </nuxeo-dialog>
      `}static get is(){return"nuxeo-user-group-permissions-table"}static get properties(){return{label:String,entity:String,documents:Array,displayInherited:{type:Boolean,value:!1},empty:Boolean,_deletedAce:Object,_currentPage:{type:Number,value:1},pageSize:{type:Number,value:25},_numberOfPages:Number,readonly:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_fetchPermissions(entity, _currentPage)"]}_fetchPermissions(){this.$.permissions.params={query:`SELECT * FROM Document WHERE ecm:mixinType != "HiddenInNavigation"AND ecm:isProxy = 0 AND ecm:isVersion = 0 AND ecm:isTrashed = 0AND ecm:acl/*1/principal = "${this.entity}"`,page:this._currentPage-1,pageSize:this.pageSize},this.$.permissions.headers={"X-NXContext-Category":"acls"},this.$.permissions.execute().then((e=>{this._numberOfPages=e.numberOfPages,this._computePermissions(e.entries)}))}_computePermissions(e){e.forEach((e=>{e.aces=[],e.contextParameters.acls.map((t=>(t.aces||t.ace).forEach((n=>{!this.displayInherited&&this._isInherited(t)||this._aceBelongsToEntity(n)&&(n.docId=e.uid,n.docTitle=e.title,n.docPath=e.path,n.timeFrame=this._formatTimeFrame(n),e.aces.push(n))}))))})),this.documents=e,this.empty=0===this.documents.length}_aceBelongsToEntity(e){return e.username===this.entity}_formatTimeFrame(e){const t=(0,h.Z)(),n=e.begin||null,i=e.end||null,r="D MMM YYYY",s=`${this.i18n("userGroupPermissions.since")} `,a=`${this.i18n("userGroupPermissions.from")} `,o=`${this.i18n("userGroupPermissions.until")} `,l=` ${this.i18n("userGroupPermissions.untilMiddle")} `;return null!==n&&null===i?(t.isAfter(n)?s:a)+(0,h.Z)(n).format(r):null===n&&null!==i?o+(0,h.Z)(i).format(r):null!==n&&null!==i?(t.isAfter(n)?s:a)+(0,h.Z)(n).format(r)+l+(0,h.Z)(i).format(r):this.i18n("userGroupPermissions.permanent")}_deleteAce(){const e=this._deletedAce;this.$.rmPermission.input=e.docId,this.$.rmPermission.params={id:e.id},this.$.rmPermission.execute().then((()=>{this._fetchPermissions()}))}_isInherited(e){return"inherited"===e.name}_toggleDialog(e){this._deletedAce=e.model.ace,this.$.dialog.toggle()}_canDelete(e){return!!e.id}}customElements.define(e.is,e),Nuxeo.UserGroupPermissionsTable=e}{class e extends((0,s.P)([l.mB,o.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex iron-flex-alignment iron-flex-factors nuxeo-button-styles">
          :host {
            display: block;
          }

          [hidden] {
            display: none !important;
          }

          h2 {
            color: var(--nuxeo-title-color, #213f7d);
          }

          nuxeo-user-group-permissions-table {
            margin-top: 1em;
          }

          .header-actions paper-button {
            margin-left: 1em;
          }

          .header-actions iron-icon {
            width: 1.3rem;
          }

          .card {
            background: none var(--nuxeo-box, #fff);
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
            margin: 2em 0;
            padding: 2em 1.5em;
          }

          .header {
            margin-bottom: 2rem;
            @apply --layout-start;
          }

          h3 iron-icon {
            width: 1.3em;
            margin-right: 0.2rem;
          }

          h3 {
            font-weight: 400;
            font-size: 1.25rem;
            letter-spacing: 0;
            line-height: 1.625rem;
          }

          .groupname {
            margin: 0.5rem 0 0;
          }

          .grouplabel,
          .counter {
            font-weight: normal;
            margin: 0.5rem 0 0;
          }

          .avatar {
            margin: 0.5rem 0.5rem 0 0;
            width: 2rem;
          }

          .header-actions {
            height: 2.8rem;
            margin-top: 0.5em;
          }

          .activity-entry {
            margin-top: 15px;
          }

          .remove {
            @apply --nuxeo-link;
            text-decoration: underline;
            padding-left: 0.5em;
            font-size: 0.8rem;
          }

          .remove:hover {
            @apply --nuxeo-link-hover;
          }

          /* Table */
          .title {
            margin: 0 0 0.8em 0;
            padding: 0;
          }

          .table {
            border: 1px solid var(--nuxeo-border, #e3e3e3);
          }

          .table-header {
            @apply --layout-horizontal;
            @apply --layout-center;
            background-color: var(--nuxeo-table-header-background, #fafafa);
            color: var(--nuxeo-table-header-titles, rgba(0, 0, 0, 0.54));
            font-weight: 400;
            min-height: 48px;
            padding: 0 0 0 12px;
            border-bottom: 2px solid var(--nuxeo-border, #eee);
            box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
          }

          .table-row {
            @apply --layout-horizontal;
            @apply --layout-center;
            padding: 12px 0 12px 12px;
            border-bottom: 1px solid var(--nuxeo-border, #eee);
            cursor: pointer;
          }

          .table-row:hover {
            background: var(--nuxeo-container-hover, #fafafa);
          }

          .table-row:last-of-type {
            border-bottom: none;
          }

          .table-actions {
            width: 3em;
          }

          .filter-wrapper {
            margin-top: 1em;
          }

          nuxeo-dialog[id='editGroupDialog'] {
            width: 40%;
          }

          .buttons {
            @apply --buttons-bar;
          }

          #editForm {
            padding: 1em 2em 2em;
          }

          .emptyResult {
            opacity: 0.5;
            display: block;
            font-weight: 300;
            padding: 1.5em 0.7em;
            text-align: center;
          }

          .preserve-white-space {
            white-space: pre;
          }
        </style>

        <nuxeo-connection user="{{_currentUser}}"></nuxeo-connection>

        <nuxeo-resource
          id="request"
          path="group/[[groupname]]"
          response="{{group}}"
          headers='{"fetch-group": "memberUsers,memberGroups"}'
        >
        </nuxeo-resource>
        <nuxeo-resource id="users" path="[[_usersPath(groupname)]]" response="{{memberUsers}}" auto></nuxeo-resource>
        <nuxeo-resource id="groups" path="[[_groupsPath(groupname)]]" response="{{memberGroups}}" auto></nuxeo-resource>
        <nuxeo-resource
          id="editRequest"
          path="group/[[groupname]]"
          response="{{group}}"
          headers='{"fetch-group": "memberUsers,memberGroups"}'
        >
        </nuxeo-resource>

        <paper-toast id="toast"></paper-toast>

        <nuxeo-dialog id="deleteGroupDialog" with-backdrop>
          <h2>[[i18n('groupManagement.delete.confirm')]]</h2>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button noink dialog-dismiss class="secondary">[[i18n('label.no')]]</paper-button>
            </div>
            <paper-button noink class="primary" on-click="_deleteGroup">[[i18n('label.yes')]]</paper-button>
          </div>
        </nuxeo-dialog>

        <nuxeo-dialog id="rmFromGroupDialog" with-backdrop class="vertical layout">
          <h2>[[i18n('groupManagement.removeUserFromGroup.confirm', _removedMember.id)]]</h2>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button noink dialog-dismiss class="secondary">[[i18n('label.no')]]</paper-button>
            </div>
            <paper-button noink class="primary" dialog-confirm on-click="_removeMember">
              [[i18n('label.yes')]]
            </paper-button>
          </div>
        </nuxeo-dialog>

        <nuxeo-dialog id="editGroupDialog" with-backdrop>
          <h2>[[i18n('groupManagement.editGroup.heading')]]</h2>
          <iron-form id="editForm">
            <form>
              <nuxeo-input label="[[i18n('groupManagement.group.label')]]" value="{{_editableGroup.grouplabel}}">
              </nuxeo-input>
            </form>
          </iron-form>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button dialog-dismiss>[[i18n('command.cancel')]]</paper-button>
            </div>
            <paper-button noink class="primary" on-click="_submitEditForm">
              [[i18n('command.save.changes')]]
            </paper-button>
          </div>
        </nuxeo-dialog>

        <nuxeo-card>
          <div class="header horizontal layout">
            <iron-icon icon="nuxeo:user" class="avatar"></iron-icon>
            <div class="layout vertical flex">
              <h3 class="groupname preserve-white-space">[[group.groupname]]</h3>
              <h4 class="grouplabel preserve-white-space">[[group.grouplabel]]</h4>
              <h5 class="counter">[[_countUsers(group.memberUsers)]] + [[_countGroups(group.memberGroups)]]</h5>
            </div>

            <dom-if if="[[_canEditGroup(readonly, _currentUser, groupname)]]">
              <template>
                <div class="layout horizontal header-actions">
                  <paper-button
                    id="deleteGroupButton"
                    noink
                    class="flex-end horizontal-button"
                    on-click="_toggleDeleteGroup"
                  >
                    <iron-icon icon="nuxeo:delete"></iron-icon>
                    <span>[[i18n('command.delete')]]</span>
                  </paper-button>
                  <paper-button
                    id="addMembersButton"
                    noink
                    class="flex-end primary horizontal-button"
                    on-click="_toggleEditMembers"
                  >
                    <iron-icon icon="nuxeo:add"></iron-icon>
                    <span>[[i18n('groupManagement.addMembers')]]</span>
                  </paper-button>
                  <paper-button
                    id="editGroupButton"
                    noink
                    on-click="_toggleEditGroup"
                    class="primary horizontal-button"
                  >
                    <iron-icon icon="nuxeo:edit"></iron-icon>
                    <span>[[i18n('groupManagement.editGroup')]]</span>
                  </paper-button>
                </div>
              </template>
            </dom-if>
          </div>
        </nuxeo-card>

        <div class="card layout vertical" hidden$="[[!showEditMembers]]">
          <nuxeo-user-suggestion
            id="picker"
            search-type="USER_GROUP_TYPE"
            placeholder="[[i18n('groupManagement.addEntity')]]"
            selected-item="{{selectedMember}}"
            result-formatter="[[resultFormatter]]"
            query-results-filter="[[resultsFilter]]"
          >
          </nuxeo-user-suggestion>
          <dom-repeat items="[[activity]]">
            <template>
              <div class="activity-entry">
                <nuxeo-tag icon="[[_icon(item)]]">
                  <span class="preserve-white-space">[[item.displayLabel]]</span>
                </nuxeo-tag>
                <span>[[i18n('groupManagement.addedToGroup')]]</span>
                <span class="remove" on-click="_toggleDeleteDialog">[[i18n('groupManagement.remove')]]</span>
              </div>
            </template>
          </dom-repeat>
        </div>

        <!-- users table -->
        <nuxeo-card icon="nuxeo:user" heading="[[i18n('groupManagement.users.heading')]]">
          <div class="filter-wrapper">
            <nuxeo-input
              autofocus
              value="{{usersFilter}}"
              type="search"
              placeholder="[[i18n('groupManagement.filterUsers.placeholder')]]"
            >
              <iron-icon icon="nuxeo:search" prefix></iron-icon>
            </nuxeo-input>
          </div>
          <div class="table">
            <div class="table-header">
              <div class="flex-4">[[i18n('groupManagement.name')]]</div>
              <div class="flex-4">[[i18n('groupManagement.identifier')]]</div>
              <div class="table-actions"></div>
            </div>
            <div class="table-rows">
              <dom-if if="[[!_empty(memberUsers.entries)]]">
                <template>
                  <dom-repeat items="[[memberUsers.entries]]">
                    <template>
                      <div class="table-row">
                        <div class="flex-4">
                          <dom-if if="[[_userHasName(item)]]">
                            <template>
                              <nuxeo-user-tag user="[[item]]"></nuxeo-user-tag>
                            </template>
                          </dom-if>
                        </div>
                        <div class="flex-4 preserve-white-space">[[item.id]]</div>
                        <div class="table-actions">
                          <dom-if if="[[_canEditGroup(readonly, _currentUser, groupname)]]">
                            <template>
                              <paper-icon-button
                                icon="nuxeo:clear"
                                noink
                                title="[[i18n('groupManagement.removeFrom', groupname)]]"
                                on-click="_toggleDeleteDialog"
                              >
                              </paper-icon-button>
                            </template>
                          </dom-if>
                        </div>
                      </div>
                    </template>
                  </dom-repeat>
                </template>
              </dom-if>
              <dom-if if="[[_empty(memberUsers.entries)]]">
                <template>
                  <div class="table-row">
                    <div class="emptyResult">[[i18n('groupManagement.noSearchResults')]]</div>
                  </div>
                </template>
              </dom-if>
            </div>
          </div>
          <nuxeo-pagination-controls page="{{usersCurrentPage}}" number-of-pages="[[memberUsers.numberOfPages]]">
          </nuxeo-pagination-controls>
        </nuxeo-card>

        <!-- nested groups -->
        <nuxeo-card icon="nuxeo:group" heading="[[i18n('groupManagement.nestedGroups.heading')]]">
          <div class="filter-wrapper">
            <nuxeo-input
              autofocus
              value="{{groupsFilter}}"
              type="search"
              placeholder="[[i18n('groupManagement.filterGroups.placeholder')]]"
            >
              <iron-icon icon="nuxeo:search" prefix></iron-icon>
            </nuxeo-input>
          </div>
          <div class="table">
            <div class="table-header">
              <div class="flex-4">[[i18n('groupManagement.name')]]</div>
              <div class="flex-4">[[i18n('groupManagement.identifier')]]</div>
              <div class="table-actions"></div>
            </div>
            <div class="table-rows">
              <dom-if if="[[!_empty(memberGroups.entries)]]">
                <template>
                  <dom-repeat items="[[memberGroups.entries]]">
                    <template>
                      <div class="table-row">
                        <div class="flex-4">
                          <nuxeo-group-tag group="[[item]]"></nuxeo-group-tag>
                        </div>
                        <div class="flex-4 preserve-white-space">[[item.grouplabel]]</div>
                        <div class="table-actions">
                          <dom-if if="[[_canEditGroup(readonly, _currentUser, groupname)]]">
                            <template>
                              <paper-icon-button
                                icon="nuxeo:clear"
                                noink
                                title="[[i18n('groupManagement.removeFrom', groupname)]]"
                                on-click="_toggleDeleteDialog"
                              >
                              </paper-icon-button>
                            </template>
                          </dom-if>
                        </div>
                      </div>
                    </template>
                  </dom-repeat>
                </template>
              </dom-if>
              <dom-if if="[[_empty(memberGroups.entries)]]">
                <template>
                  <div class="table-row">
                    <div>[[i18n('groupManagement.noSearchResults')]]</div>
                  </div>
                </template>
              </dom-if>
            </div>
          </div>
          <nuxeo-pagination-controls page="{{groupsCurrentPage}}" number-of-pages="[[memberGroups.numberOfPages]]">
          </nuxeo-pagination-controls>
        </nuxeo-card>

        <!-- permissions -->
        <nuxeo-card heading="[[i18n('groupManagement.permissions.heading')]]">
          <nuxeo-user-group-permissions-table entity="[[groupname]]"></nuxeo-user-group-permissions-table>
        </nuxeo-card>
      `}static get is(){return"nuxeo-group-management"}static get properties(){return{groupname:{type:String,observer:"_fetch"},group:Object,selectedMember:{type:Object,observer:"_memberSelected"},memberUsers:Object,memberGroups:Object,activity:{type:Array,value:[]},resultsFilter:{type:Function,value(){return this._resultsFilter.bind(this)}},resultFormatter:{type:Function},showEditMembers:{type:Boolean,value:!1},usersCurrentPage:Number,usersFilter:String,groupsCurrentPage:Number,groupsFilter:String,_editableGroup:Object,_removedMember:Object,_fromDelete:{type:Boolean,value:!1},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_currentUser:{type:Object}}}static get observers(){return["_fetchUsers(usersCurrentPage)","_filterUsers(usersFilter)","_fetchGroups(groupsCurrentPage)","_filterGroups(groupsFilter)"]}ready(){super.ready(),this.$.editForm.addEventListener("iron-form-presubmit",(e=>{e.preventDefault(),this._saveGroup()}))}_hasAdministrationPermissions(e){return e&&(e.isAdministrator||this.isMember(e,"powerusers")&&"administrators"!==this.groupname)}_canEditGroup(e,t,n){return!e&&this._hasAdministrationPermissions(t,n)}_userHasName(e){return e.properties.firstName||e.properties.lastName}_fetch(){this.groupname&&this.$.request.get().then((()=>{this.activity=[],this.showEditMembers=!1,this.selectedMember=null,this._fetchGroups(),this._fetchUsers()}))}_saveGroup(){this.$.editRequest.data=this._editableGroup,this.$.editRequest.put().then((()=>{this._toast(this.i18n("groupManagement.group.updated")),this.$.editGroupDialog.toggle()}))}_fetchGroups(){if(this.group){if(this._fromDelete&&1===this.memberGroups.currentPageSize)return this._fromDelete=!1,void this.groupsCurrentPage--;const e={q:this.groupsFilter,currentPageIndex:this.groupsCurrentPage-1};this.$.groups.params=e}}_fetchUsers(){if(this.group){if(this._fromDelete&&1===this.memberUsers.currentPageSize)return this._fromDelete=!1,void this.usersCurrentPage--;const e={q:this.usersFilter,currentPageIndex:this.usersCurrentPage-1};this.$.users.params=e}}_memberSelected(){if(this.selectedMember){const e=this.selectedMember;switch(e.type){case"USER_TYPE":{const t=this.group.memberUsers||[];t.push(e.id),e["entity-type"]="user",this.group.memberUsers=t;break}case"GROUP_TYPE":{const t=this.group.memberGroups||[];t.push(e.id),e["entity-type"]="group",this.group.memberGroups=t;break}}this.push("activity",e),this.$.editRequest.data=this.group,this.$.editRequest.put().then((()=>{"user"===e["entity-type"]?this._fetchUsers():this._fetchGroups(),this._toast(this.i18n("groupManagement.addedUserToGroup",e.displayLabel,this.group.groupname))}))}this.selectedMember=null}_removeMember(){const e=this._removedMember;let t;switch(e["entity-type"]){case"user":this.group.memberUsers&&(t=this.group.memberUsers.indexOf(this._removedMember.id),this.group.memberUsers.splice(t,1));break;case"group":this.group.memberGroups&&(t=this.group.memberGroups.indexOf(this._removedMember.id),this.group.memberGroups.splice(t,1))}this.$.editRequest.data=this.group,this.$.editRequest.put().then((()=>{this._fromDelete=!0,"user"===e["entity-type"]?this._fetchUsers():this._fetchGroups(),this._removeRecent(this._removedMember.id),this._toast(this.i18n("groupManagement.removedUserFromGroup",this._removedMember.id))}))}_removeRecent(e){for(let t=0;t<this.activity.length;t++)if(this.activity[t].id===e)return void this.splice("activity",t,1)}_submitEditForm(){this.$.editForm.submit()}_filterUsers(){this.group&&(this.usersCurrentPage=1,this._fetchUsers())}_filterGroups(){this.group&&(this.groupsCurrentPage=1,this._fetchGroups())}_deleteGroup(){const e=this.group;this.$.deleteGroupDialog.toggle(),this.$.editRequest.data=e,this.$.editRequest.remove().then((()=>{this.dispatchEvent(new CustomEvent("nuxeo-group-deleted",{composed:!0,bubbles:!0,detail:e})),this._goHome()}))}_toggleEditMembers(){this.showEditMembers=!this.showEditMembers}_toggleDeleteDialog(e){const t=e.model.item["entity-type"];this._removedMember=e.model.item,this._removedMember.id="user"===t?e.model.item.id:e.model.item.groupname,this.$.rmFromGroupDialog.toggle()}_toggleEditGroup(){this._clone(),this.$.editGroupDialog.toggle()}_toggleDeleteGroup(){this.$.deleteGroupDialog.toggle()}_empty(e){return e&&0===e.length}_goHome(){this.dispatchEvent(new CustomEvent("goHome",{composed:!0,bubbles:!0}))}_resultsFilter(e){const t=this.group.memberUsers&&this.group.memberUsers.indexOf(e.id)>=0,n=this.group.memberGroups&&this.group.memberGroups.indexOf(e.id)>=0;return!t&&!n&&e.id!==this.group.groupname}_icon(e){return"GROUP_TYPE"===e.type?"nuxeo:group":"nuxeo:user"}_countUsers(e){if(e){const t=` ${1===e.length?this.i18n("groupManagement.member"):this.i18n("groupManagement.members")}`;return e.length+t}}_countGroups(e){if(e){const t=` ${1===e.length?this.i18n("groupManagement.nestedGroup"):this.i18n("groupManagement.nestedGroups")}`;return e.length+t}}_toast(e){this.$.toast.text=e,this.$.toast.open()}_clone(){this._editableGroup=JSON.parse(JSON.stringify(this.group))}_usersPath(){if(this.groupname)return`group/${this.groupname}/@users`}_groupsPath(){if(this.groupname)return`group/${this.groupname}/@groups`}}customElements.define(e.is,e),Nuxeo.GroupManagement=e}n(75343),n(73873);{class e extends((0,s.P)([l.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex iron-flex-alignment iron-flex-factors">
          :host {
            display: block;
            @apply --nuxeo-user-group-search-layout;
          }

          .search {
            width: calc(100% - 11rem);
          }

          .title {
            margin: 0 0 0.8em;
            padding: 0;
          }

          .table-header {
            @apply --layout-horizontal;
            @apply --layout-center;
            background-color: var(--nuxeo-table-header-background, #fafafa);
            color: var(--nuxeo-text-default, rgba(0, 0, 0, 0.54));
            font-weight: 400;
            min-height: 48px;
            padding: 0 0 0 12px;
            border-bottom: 2px solid var(--nuxeo-border, #eee);
            box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
          }

          .table-row {
            @apply --layout-horizontal;
            @apply --layout-center;
            padding: 12px 0 12px 12px;
            border-bottom: 1px solid var(--nuxeo-border, #eee);
            cursor: pointer;
          }

          .table-row:hover {
            background: var(--nuxeo-container-hover, #fafafa);
          }

          .table {
            border: 1px solid var(--nuxeo-border, #eee);
          }

          .counter {
            margin-right: 2em;
          }

          h3 iron-icon {
            width: 1.3em;
            margin-right: 0.2rem;
          }

          .emptyResult {
            opacity: 0.5;
            display: block;
            font-weight: 300;
            padding: 1.5em 0.7em;
            text-align: center;
          }

          .preserve-white-space {
            white-space: pre;
          }
        </style>

        <nuxeo-resource id="userSearch" auto path="/user/search" response="{{users}}"></nuxeo-resource>
        <nuxeo-resource
          id="groupSearch"
          auto
          path="/group/search"
          response="{{groups}}"
          headers='{"fetch-group": "memberUsers,memberGroups"}'
        >
        </nuxeo-resource>

        <nuxeo-card class="search">
          <nuxeo-input
            autofocus
            value="{{searchTerm}}"
            type="search"
            placeholder="[[i18n('userGroupSearch.search.placeholder')]]"
          >
            <iron-icon icon="nuxeo:search" prefix></iron-icon>
          </nuxeo-input>
        </nuxeo-card>

        <dom-if if="[[!_showResults(searchTerm)]]">
          <template>
            <!-- groups -->
            <nuxeo-card name="groups" icon="nuxeo:group" heading="[[i18n('userGroupSearch.groups')]]">
              <div class="table">
                <div class="table-header">
                  <div class="flex-4">[[i18n('userGroupSearch.name')]]</div>
                  <div class="flex-2">[[i18n('userGroupSearch.identifier')]]</div>
                  <div class="flex-4">[[i18n('userGroupSearch.contains')]]</div>
                </div>
                <div class="table-rows">
                  <dom-repeat items="[[groups.entries]]" as="item">
                    <template>
                      <div class="table-row" on-click="_manageGroup">
                        <div class="flex-4">
                          <nuxeo-group-tag group="[[item]]"></nuxeo-group-tag>
                        </div>
                        <div name="id" class="flex-2 preserve-white-space">[[item.groupname]]</div>
                        <div class="flex-4">
                          <span class="counter">[[_countUsers(item.memberUsers)]]</span>
                          <span class="counter">[[_countGroups(item.memberGroups)]]</span>
                        </div>
                      </div>
                    </template>
                  </dom-repeat>
                  <dom-if if="[[_empty(groups.entries)]]">
                    <template>
                      <div class="table-row">
                        <div class="emptyResult">[[i18n('userGroupSearch.empty.groups')]]</div>
                      </div>
                    </template>
                  </dom-if>
                </div>
              </div>
              <nuxeo-pagination-controls page="{{groupsCurrentPage}}" number-of-pages="[[groups.numberOfPages]]">
              </nuxeo-pagination-controls>
            </nuxeo-card>

            <!-- users -->
            <nuxeo-card name="users" icon="nuxeo:user" heading="[[i18n('userGroupSearch.users.heading')]]">
              <div class="table">
                <div class="table-header">
                  <div class="flex-4">[[i18n('userGroupSearch.name')]]</div>
                  <div class="flex-2">[[i18n('userGroupSearch.identifier')]]</div>
                  <div class="flex-4">[[i18n('userGroupSearch.email')]]</div>
                </div>
                <div class="table-rows">
                  <dom-repeat items="[[users.entries]]" as="item">
                    <template>
                      <div class="table-row" on-click="_manageUser">
                        <div class="flex-4">
                          <dom-if if="[[_userHasName(item)]]">
                            <template>
                              <nuxeo-user-tag user="[[item]]"></nuxeo-user-tag>
                            </template>
                          </dom-if>
                        </div>
                        <div name="id" class="flex-2 preserve-white-space">[[item.id]]</div>
                        <div class="flex-4">[[item.properties.email]]</div>
                      </div>
                    </template>
                  </dom-repeat>
                  <dom-if if="[[_empty(users.entries)]]">
                    <template>
                      <div class="table-row">
                        <div class="emptyResult">[[i18n('userGroupSearch.empty.users')]]</div>
                      </div>
                    </template>
                  </dom-if>
                </div>
              </div>
              <nuxeo-pagination-controls page="{{usersCurrentPage}}" number-of-pages="[[users.numberOfPages]]">
              </nuxeo-pagination-controls>
            </nuxeo-card>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-user-group-search"}static get properties(){return{searchTerm:{type:String,value:"",observer:"_searchTermChanged",notify:!0},users:Object,groups:Object,groupsCurrentPage:Number,usersCurrentPage:Number}}static get observers(){return["_searchGroups(groupsCurrentPage)","_searchUsers(usersCurrentPage)"]}_searchTermChanged(){""!==this.searchTerm?(this.groupsCurrentPage=this.usersCurrentPage=1,this._searchGroups(),this._searchUsers()):this.users=this.groups={}}_searchGroups(){const e={q:this.searchTerm,currentPageIndex:this.groupsCurrentPage-1};this.$.groupSearch.params=e}_searchUsers(){const e={q:this.searchTerm,currentPageIndex:this.usersCurrentPage-1};this.$.userSearch.params=e}_manageUser(e){this.dispatchEvent(new CustomEvent("manageUser",{composed:!0,bubbles:!0,detail:{user:e.model.item.id}}))}_manageGroup(e){this.dispatchEvent(new CustomEvent("manageGroup",{composed:!0,bubbles:!0,detail:{group:e.model.item.groupname}}))}_empty(e){return e&&0===e.length}_countUsers(e){const t=` ${1===e.length?this.i18n("userGroupSearch.member"):this.i18n("userGroupSearch.members")}`;return e.length+t}_countGroups(e){if(e.length>0){const t=` ${1===e.length?this.i18n("userGroupSearch.nestedGroup"):this.i18n("userGroupSearch.nestedGroups")}`;return e.length+t}}_userHasName(e){return e.properties.firstName||e.properties.lastName}_showResults(){return 0===this.searchTerm.length}}customElements.define(e.is,e),Nuxeo.UserGroupSearch=e}{class e extends((0,s.P)([l.mB,o.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex iron-flex-alignment iron-flex-factors nuxeo-button-styles">
          :host {
            display: block;
          }

          [hidden] {
            display: none !important;
          }

          label {
            font-weight: bold;
            margin-bottom: 5px;
          }

          .header {
            @apply --layout-start;
          }

          .username {
            margin: 10px 0 5px 5px;
          }

          .name {
            font-weight: normal;
            margin: 0 0 0 5px;
          }

          .avatar {
            margin-top: 10px;
          }

          .actions {
            @apply --layout-horizontal;
            @apply --layout-flex;
            @apply --layout-center;
            @apply --layout-end-justified;
          }

          .actions paper-button {
            margin-left: 1em;
          }

          .activity-entry:nth-of-type(1) {
            margin-top: 20px;
          }

          .activity-entry {
            margin-top: 15px;
          }

          .remove {
            color: var(--nuxeo-warn-text, #de350b);
            cursor: pointer;
            font-size: 0.8rem;
            margin-left: 10px;
            text-decoration: underline;
          }

          .table {
            margin-top: 12px;
          }

          .table-headers {
            @apply --layout-horizontal;
            @apply --layout-center;
            background-color: var(--nuxeo-table-header-background, #fafafa);
            color: var(--nuxeo-text-default, rgba(0, 0, 0, 0.54));
            font-weight: 400;
            min-height: 48px;
            padding: 0 0 0 12px;
            border-bottom: 2px solid var(--nuxeo-border, #eee);
            box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
          }

          .table-row {
            @apply --layout-horizontal;
            @apply --layout-center;
            padding: 0 1em;
            min-height: 48px;
            border-bottom: 1px solid var(--nuxeo-border, #eee);
            background-color: var(--nuxeo-table-items-background, #fafafa);
          }

          .table-row:hover {
            background: var(--nuxeo-container-hover, #fafafa);
          }

          .table {
            border: 1px solid var(--nuxeo-border, #eee);
          }

          .table-row:last-of-type {
            border-bottom: none;
          }

          .table-headers > div {
            background-color: var(--nuxeo-table-header-background, #f8f9fb);
            font-weight: bold;
          }

          .table-actions {
            width: 50px;
          }

          nuxeo-view-user {
            margin: 2em;
          }

          nuxeo-user-group-permissions-table {
            margin-top: 1.5em;
          }

          nuxeo-dialog {
            padding-top: 24px;
          }

          #errors {
            color: var(--nuxeo-warn-text, #de350b);
            margin-top: 20px;
          }

          .buttons {
            @apply --buttons-bar;
            margin-top: 2em;
          }

          .header {
            height: auto;
            padding: 0;
          }

          .header .heading {
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.04em;
          }

          .user-icon {
            margin: 8px;
            width: 1.3rem;
          }
        </style>

        <nuxeo-connection user="{{_currentUser}}"></nuxeo-connection>

        <nuxeo-resource id="request" path="user/[[username]]" enrichers="userprofile" enrichers-entity="user">
        </nuxeo-resource>

        <nuxeo-resource id="editRequest" path="user/[[username]]"></nuxeo-resource>

        <paper-toast id="toast"></paper-toast>

        <nuxeo-card>
          <div class="horizontal layout center header">
            <iron-icon icon="nuxeo:user" class="user-icon"></iron-icon>
            <div class="layout vertical">
              <div class="user heading" name="userHeading">[[user.id]]</div>
              <div>[[user.properties.firstName]] [[user.properties.lastName]]</div>
            </div>

            <div class="actions">
              <!-- delete -->
              <dom-if if="[[_canDelete(readonly, _currentUser, user)]]">
                <template>
                  <paper-button
                    noink
                    id="deleteUserButton"
                    class="horizontal layout center horizontal-button"
                    on-click="_toggleDeleteUser"
                  >
                    <iron-icon noink icon="nuxeo:delete"></iron-icon>
                    <span>[[i18n('command.delete')]]</span>
                  </paper-button>
                </template>
              </dom-if>

              <!-- change password -->
              <dom-if if="[[_canEdit(readonly, _currentUser, user)]]">
                <template>
                  <paper-button
                    noink
                    id="changePasswordButton"
                    class="text horizontal layout center horizontal-button"
                    on-click="_toggleChangePassword"
                  >
                    <iron-icon icon="nuxeo:lock"></iron-icon>
                    <span>[[i18n('command.change.password')]]</span>
                  </paper-button>
                </template>
              </dom-if>

              <!-- edit -->
              <dom-if if="[[_canEdit(readonly, _currentUser, user)]]">
                <template>
                  <paper-button
                    noink
                    id="editUserButton"
                    class="primary horizontal layout center horizontal-button"
                    on-click="_toggleEditUser"
                  >
                    <iron-icon icon="nuxeo:edit"></iron-icon>
                    <span>[[i18n('userManagement.editUser.button')]]</span>
                  </paper-button>
                </template>
              </dom-if>
            </div>
          </div>

          <!-- user -->
          <nuxeo-view-user user="[[user]]"></nuxeo-view-user>
        </nuxeo-card>

        <!-- groups -->
        <nuxeo-card>
          <div class="layout horizontal center">
            <h3 class="header flex">
              <span class="heading">[[i18n('userManagement.groups')]]</span>
            </h3>
            <dom-if if="[[_canEdit(readonly, _currentUser, user)]]">
              <template>
                <paper-button noink id="addGroup" class="flex-end horizontal-button" on-click="_toggleEditGroups">
                  <iron-icon icon="nuxeo:add"></iron-icon>
                  <span>[[i18n('userManagement.addToGroup.button')]]</span>
                </paper-button>
              </template>
            </dom-if>
          </div>
          <div class="layout vertical" hidden$="[[!showEditGroups]]">
            <nuxeo-user-suggestion
              id="picker"
              class="flex"
              search-type="GROUP_TYPE"
              placeholder="[[i18n('userManagement.search.groups')]]"
              selected-item="{{selectedGroup}}"
              result-formatter="[[resultFormatter]]"
              query-results-filter="[[resultsFilter]]"
            >
            </nuxeo-user-suggestion>
            <div id="errors" hidden$="[[!errors]]">[[errors]]</div>
            <dom-repeat items="[[activity]]">
              <template>
                <div class="activity-entry">
                  [[i18n('userManagement.memberOf.group', user.id)]]
                  <nuxeo-group-tag group="[[item]]"></nuxeo-group-tag>
                  <span class="remove" on-click="_toggleDialog">[[i18n('userManagement.group.remove')]]</span>
                </div>
              </template>
            </dom-repeat>
          </div>
          <div class="table">
            <div class="table-headers">
              <div class="flex">[[i18n('userManagement.name')]]</div>
              <div class="flex-4">[[i18n('userManagement.identifier')]]</div>
              <div class="table-actions">&nbsp;</div>
            </div>
            <dom-if if="[[!empty]]">
              <template>
                <dom-repeat items="[[groups]]">
                  <template>
                    <div class="table-row">
                      <div class="flex">
                        <nuxeo-group-tag group="[[item]]"></nuxeo-group-tag>
                      </div>
                      <div class="flex-4">[[item.name]]</div>
                      <div class="table-actions">
                        <dom-if if="[[_canEdit(readonly, _currentUser, user)]]">
                          <template>
                            <paper-icon-button
                              icon="nuxeo:remove"
                              title="[[i18n('userManagement.removeFrom.group', item.label)]]"
                              on-click="_toggleDialog"
                            >
                            </paper-icon-button>
                          </template>
                        </dom-if>
                      </div>
                    </div>
                  </template>
                </dom-repeat>
              </template>
            </dom-if>
            <dom-if if="[[empty]]">
              <template>
                <div class="table-row">
                  <div>[[i18n('userManagement.noSearchResults')]]</div>
                </div>
              </template>
            </dom-if>
          </div>
        </nuxeo-card>

        <!-- local permissions -->
        <nuxeo-card heading="[[i18n('userManagement.localPermissions.heading')]]">
          <nuxeo-user-group-permissions-table entity="[[username]]" readonly="[[readonly]]">
          </nuxeo-user-group-permissions-table>
        </nuxeo-card>

        <!-- group permissions -->
        <dom-repeat items="[[groups]]">
          <template>
            <nuxeo-card heading="[[i18n('userManagement.entityPermissions', item.name)]]">
              <nuxeo-user-group-permissions-table entity="[[item.name]]" readonly="[[readonly]]">
              </nuxeo-user-group-permissions-table>
            </nuxeo-card>
          </template>
        </dom-repeat>

        <nuxeo-dialog id="dialog" with-backdrop>
          <h2>[[i18n('userManagement.removeUserFromGroup.confirm', user.id, _removedGroup.name)]]</h2>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button noink dialog-dismiss class="secondary">[[i18n('label.no')]]</paper-button>
            </div>
            <paper-button noink dialog-confirm on-click="_remove" class="primary">[[i18n('label.yes')]]</paper-button>
          </div>
        </nuxeo-dialog>

        <nuxeo-dialog id="deleteUserDialog" with-backdrop>
          <h2>[[i18n('userManagement.delete.user.confirm')]]</h2>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button noink dialog-dismiss class="secondary">[[i18n('label.no')]]</paper-button>
            </div>
            <paper-button noink class="primary" on-click="_deleteUser">[[i18n('label.yes')]]</paper-button>
          </div>
        </nuxeo-dialog>

        <nuxeo-dialog id="changePasswordDialog" with-backdrop>
          <h2>[[i18n('command.change.password')]]</h2>
          <iron-form id="changePasswordForm">
            <form class="vertical layout">
              <nuxeo-edit-password required id="passwordEditor"></nuxeo-edit-password>
            </form>
          </iron-form>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button noink dialog-dismiss class="secondary">[[i18n('command.cancel')]]</paper-button>
            </div>
            <paper-button noink class="primary" on-click="_submitChangePassword">
              [[i18n('command.save.changes')]]
            </paper-button>
          </div>
        </nuxeo-dialog>

        <nuxeo-dialog id="editUserDialog" with-backdrop>
          <h2>[[i18n('userManagement.editUser.heading')]]</h2>
          <iron-form id="editUserForm">
            <form class="vertical layout">
              <nuxeo-input
                label="[[i18n('userManagement.username')]]"
                value="[[user.properties.username]]"
                readonly
                required
              >
              </nuxeo-input>
              <nuxeo-layout id="layout" href="[[_layoutHref('nuxeo-edit-user.html')]]"></nuxeo-layout>
            </form>
          </iron-form>
          <div class="buttons horizontal end-justified layout">
            <div class="flex start-justified">
              <paper-button noink dialog-dismiss class="secondary">[[i18n('command.cancel')]]</paper-button>
            </div>
            <paper-button noink class="primary" on-click="_submitEditUser">
              [[i18n('command.save.changes')]]
            </paper-button>
          </div>
        </nuxeo-dialog>
      `}static get is(){return"nuxeo-user-management"}static get properties(){return{username:{type:String,observer:"_fetch"},user:Object,groups:{type:Object,computed:"_computeGroups(user)"},selectedGroup:{type:Object,observer:"_groupSelected"},activity:{type:Array,value:[]},resultsFilter:{type:Function,value(){return this._resultsFilter.bind(this)}},resultFormatter:{type:Function},showEditGroups:{type:Boolean,value:!1},empty:Boolean,_removedGroup:Object,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},errors:{type:String,reflectToAttribute:!0},_currentUser:{type:Object}}}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/nuxeo-user-group-management/nuxeo-user-management.js`}}static get observers(){return["_userRemovedFromGroup(groups.splices)"]}ready(){super.ready(),this.$.editUserForm.addEventListener("iron-form-presubmit",(e=>{e.preventDefault(),this._saveUser()})),this.$.changePasswordForm.addEventListener("iron-form-presubmit",(e=>{e.preventDefault(),this._savePassword()}))}_fetch(){this.username&&this.$.request.get().then((e=>{delete e.properties.password,this.user=e,this.activity=[],this.showEditGroups=!1,this.selectedGroup=null}))}_isAdministrator(e){return e&&e.isAdministrator}_hasAdministrationPermissions(e){return e&&(e.isAdministrator||this.isMember(e,"powerusers")&&!this.user.isAdministrator)}_canEdit(e,t,n){return!e&&this.user&&t&&(this._hasAdministrationPermissions(t)||this._isSameUsername(t.properties.username,n.properties.username))}_canDelete(e,t,n){return!e&&this.user&&t&&this._hasAdministrationPermissions(t)&&!this._isSameUsername(t.properties.username,n.properties.username)}_isSameUsername(e,t){return e&&t&&e===t}_computeGroups(){if(this.user)return this.user.extendedGroups.filter((e=>this.user.properties.groups.indexOf(e.name)>-1))}_groupSelected(){if(this.selectedGroup){if(!this._isAdministrator(this._currentUser)&&"administrators"===this.selectedGroup.groupname)return this.errors=this.i18n("userManagement.errorAdministratorsGroup"),void(this.selectedGroup=null);const e={name:this.selectedGroup.groupname,label:this.selectedGroup.grouplabel};this.push("activity",e),this.$.request.path=`user/${this.user.id}/group/${e.name}`,this.$.request.post().then((t=>{this.user=t,this._toast(this.i18n("userManagement.addedUserToGroup",this.user.id,e.name))}))}this.selectedGroup=null}_remove(){const e=this._removedGroup;return this.$.request.path=`user/${this.user.id}/group/${e.name}`,this.$.request.remove().then((()=>{this._removeRecent(e.name),this._removeFromGroup(e.name),this._toast(this.i18n("userManagement.removedUserFromGroup",this.user.id,e.name))}))}_removeRecent(e){for(let t=0;t<this.activity.length;t++)if(this.activity[t].name===e)return void this.splice("activity",t,1)}_removeFromGroup(e){const t=this.user.properties.groups.indexOf(e);this.user.properties.groups.splice(t,1);for(let t=0;t<this.groups.length;t++)if(this.groups[t].name===e)return void this.splice("groups",t,1)}_userRemovedFromGroup(){this.empty=this.groups&&0===this.groups.length}_toggleEditGroups(){this.showEditGroups=!this.showEditGroups}_toggleDialog(e){this._removedGroup=e.model.item,this.$.dialog.toggle()}_toggleChangePassword(){this.$.passwordEditor.resetFields&&this.$.passwordEditor.resetFields(),this.$.changePasswordDialog.toggle()}_submitChangePassword(){this.$.changePasswordForm.submit()}_savePassword(){this.$.editRequest.data=JSON.parse(JSON.stringify(this.user)),this.$.editRequest.data.properties.password=this.$.passwordEditor.password,this.$.editRequest.put().then((e=>{this.user=e,this._toast(this.i18n("userManagement.password.changed")),this.$.changePasswordDialog.toggle()})).catch((()=>{this._toast(this.i18n("userProfile.password.error"))}))}_toggleEditUser(){this.$.layout.model={user:JSON.parse(JSON.stringify(this.user.properties))},this.$.editUserDialog.toggle()}_submitEditUser(){this.$.editUserForm.submit()}_saveUser(){this.$.editUserDialog.toggle();const e=JSON.parse(JSON.stringify(this.user));e.properties=this.$.layout.model.user,this.$.editRequest.data=e,this.$.editRequest.put().then((e=>{this.user=e,this._toast(this.i18n("userManagement.user.updated"))}))}_toggleDeleteUser(){this.$.deleteUserDialog.toggle()}_deleteUser(){this.$.deleteUserDialog.toggle(),this.$.editRequest.remove().then((()=>{this.dispatchEvent(new CustomEvent("nuxeo-user-deleted",{composed:!0,bubbles:!0,detail:this.user})),this._goHome()}))}_goHome(){this.dispatchEvent(new CustomEvent("goHome",{composed:!0,bubbles:!0}))}_resultsFilter(e){for(let t=0;t<this.groups.length;t++)if(e.id===this.groups[t].name)return!1;return!0}_toast(e){this.$.toast.text=e,this.$.toast.open()}_layoutHref(e){return this.resolveUrl(e)}}customElements.define(e.is,e),Nuxeo.UserManagement=e}{class e extends((0,s.P)([l.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex iron-flex-alignment iron-flex-factors nuxeo-button-styles">
          :host {
            display: block;
          }

          .actions {
            @apply --layout-horizontal;
            @apply --layout-flex;
            @apply --layout-center;
            @apply --layout-end-justified;
          }

          .actions paper-button {
            margin-left: 1em;
          }

          .actions iron-icon {
            width: 1.3rem;
          }

          .table {
            border: 1px solid var(--nuxeo-border, #e6e9ef);
            margin-top: 1em;
          }

          .table .header {
            @apply --layout-horizontal;
            @apply --layout-center;
            background-color: var(--nuxeo-table-header-background, #e6e9ef);
            padding: 1.3em 1em;
            font-weight: 400;
            border-bottom: 2px solid var(--nuxeo-border, #eee);
            box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
          }

          .table .row {
            @apply --layout-horizontal;
            @apply --layout-center;
            background-color: var(--nuxeo-table-items-background, #e6e9ef);
            border-bottom: 1px solid var(--nuxeo-border, #eee);
            padding: 0 1em;
            min-height: 48px;
          }

          nuxeo-view-user {
            margin: 2em;
          }

          nuxeo-dialog {
            min-width: 400px;
            padding-top: 24px;
          }

          .buttons {
            @apply --buttons-bar;
            margin-top: 2em;
          }

          .header {
            height: auto;
            padding: 0;
          }

          .header .heading {
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.04em;
          }

          .user-icon {
            margin: 8px;
            width: 1.3rem;
          }
        </style>

        <nuxeo-connection id="nxcon"></nuxeo-connection>
        <nuxeo-resource id="request" path="me/" enrichers="userprofile" enrichers-entity="user"></nuxeo-resource>
        <nuxeo-resource id="changePassword" path="me/changepassword"></nuxeo-resource>

        <paper-toast id="toast"></paper-toast>

        <nuxeo-card>
          <div class="horizontal layout center header">
            <iron-icon class="user-icon" icon="nuxeo:user"></iron-icon>
            <div class="layout vertical">
              <div class="user heading">[[user.id]]</div>
              <div>[[user.properties.firstName]] [[user.properties.lastName]]</div>
            </div>

            <div class="actions">
              <!-- change password -->
              <dom-if if="[[!readonly]]">
                <template>
                  <paper-button
                    noink
                    id="changePasswordButton"
                    class="horizontal layout center text horizontal-button"
                    on-click="_openChangePasswordDialog"
                  >
                    <iron-icon icon="nuxeo:lock"></iron-icon>
                    <span>[[i18n('userProfile.password.change')]]</span>
                  </paper-button>
                </template>
              </dom-if>
              <nuxeo-dialog id="changePasswordDialog" with-backdrop>
                <h3>[[i18n('userProfile.password.change')]]</h3>

                <iron-form id="changePasswordForm">
                  <form class="vertical layout">
                    <nuxeo-input id="passwordOld" type="password" label="[[i18n('userProfile.password.old')]]" required>
                    </nuxeo-input>

                    <nuxeo-input
                      id="passwordNew"
                      type="password"
                      label="[[i18n('userProfile.password.new')]]"
                      required
                      value="{{passwordNew}}"
                    >
                    </nuxeo-input>

                    <nuxeo-input
                      id="passwordConfirm"
                      type="password"
                      label="[[i18n('userProfile.password.confirm')]]"
                      required
                      pattern="[[passwordNew]]"
                    >
                    </nuxeo-input>
                  </form>
                </iron-form>

                <div class="buttons">
                  <div class="flex start-justified">
                    <paper-button noink dialog-dismiss class="secondary">[[i18n('command.cancel')]]</paper-button>
                  </div>
                  <paper-button noink class="primary" on-click="_submitChangePassword">
                    [[i18n('command.save.changes')]]
                  </paper-button>
                </div>
              </nuxeo-dialog>
            </div>
          </div>

          <!-- user -->
          <nuxeo-view-user user="[[user]]"></nuxeo-view-user>
        </nuxeo-card>

        <!-- groups -->
        <nuxeo-card heading="[[i18n('userManagement.groups')]]">
          <div class="table">
            <div class="header">
              <div class="flex">[[i18n('userManagement.name')]]</div>
              <div class="flex-4">[[i18n('userManagement.identifier')]]</div>
            </div>
            <dom-repeat items="[[groups]]">
              <template>
                <div class="row">
                  <div class="flex"><nuxeo-group-tag group="[[item]]"></nuxeo-group-tag></div>
                  <div class="flex-4">[[item.name]]</div>
                </div>
              </template>
            </dom-repeat>
          </div>
        </nuxeo-card>

        <!-- local permissions -->
        <nuxeo-card heading="[[i18n('userManagement.localPermissions.heading')]]">
          <nuxeo-user-group-permissions-table entity="[[username]]" readonly></nuxeo-user-group-permissions-table>
        </nuxeo-card>

        <!-- group permissions -->
        <dom-repeat items="[[groups]]">
          <template>
            <nuxeo-card heading="[[i18n('userManagement.entityPermissions', item.name)]]">
              <nuxeo-user-group-permissions-table entity="[[item.name]]" readonly> </nuxeo-user-group-permissions-table>
            </nuxeo-card>
          </template>
        </dom-repeat>
      `}static get is(){return"nuxeo-user-profile"}static get properties(){return{username:{type:String,observer:"_fetch"},user:Object,groups:{type:Object,computed:"_computeGroups(user)"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/nuxeo-user-group-management/nuxeo-user-profile.js`}}ready(){super.ready(),this._isRegistered("nuxeo-view-user")||(0,a.T)(this.resolveUrl("nuxeo-view-user.html")),this.$.changePasswordForm.addEventListener("iron-form-presubmit",(e=>{e.preventDefault(),this._savePassword()}))}_isRegistered(e){return document.createElement(e)instanceof r.H3}_fetch(){this.username&&this.$.request.get().then((e=>{delete e.properties.password,this.user=e}))}_computeGroups(){return this.user.extendedGroups.filter((e=>this.user.properties.groups.indexOf(e.name)>-1))}_openChangePasswordDialog(){this.$.passwordOld.value=this.$.passwordNew.value=this.$.passwordConfirm.value="",this.$.changePasswordDialog.open()}_submitChangePassword(){this.$.changePasswordForm.submit()}_savePassword(){this.$.changePassword.data={oldPassword:this.$.passwordOld.value,newPassword:this.$.passwordNew.value},this.$.changePassword.put().then((e=>{this.user=e,this._toast(this.i18n("userProfile.password.changed")),this.$.changePasswordDialog.close(),this.$.nxcon.username=this.user.id,this.$.nxcon.password=this.$.passwordNew.value,this.$.nxcon.connect()})).catch((e=>{401===e.status?this._toast(this.i18n("userProfile.password.wrong"),!0):this._toast(this.i18n("userProfile.password.error"),!0)}))}_toast(e){this.$.toast.text=e,this.$.toast.open()}}customElements.define(e.is,e),Nuxeo.UserProfile=e}{class e extends((0,s.P)([l.mB,o.q],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex iron-flex-alignment nuxeo-button-styles">
          :host {
            display: block;
            position: relative;
            @apply --layout-flex;
          }

          #createDropdown {
            position: absolute;
            right: 0;
            padding: 0;
            top: 15px;
          }

          paper-menu-button {
            width: 130px;
            height: 48px;
            margin-bottom: 16px;
          }

          paper-button {
            width: 100%;
          }

          paper-listbox {
            width: 130px;
            outline: none;
          }

          paper-listbox paper-icon-item iron-icon {
            width: 1.5rem;
            height: 1.5rem;
          }

          paper-listbox paper-icon-item:hover {
            background: var(--nuxeo-container-hover, #fafafa);
            cursor: pointer;
          }
        </style>

        <nuxeo-connection user="{{_currentUser}}"></nuxeo-connection>

        <paper-toast id="toast"></paper-toast>
        <iron-pages selected="[[page]]" attr-for-selected="name">
          <section name="search">
            <div class="horizontal layout center">
              <dom-if if="[[_canCreateUserGroup(readonly, _currentUser)]]">
                <template>
                  <div class="flex">
                    <paper-menu-button
                      id="createDropdown"
                      no-animations
                      no-overlap
                      horizontal-align="right"
                      vertical-align="top"
                      vertical-offset="-4"
                    >
                      <paper-button noink class="primary horizontal-button" id="createButton" slot="dropdown-trigger">
                        <iron-icon icon="nuxeo:add"></iron-icon>
                        <span>[[i18n('userGroupManagement.new.usergroup')]]</span>
                      </paper-button>
                      <paper-listbox no-animations id="menu" selectable="item" slot="dropdown-content">
                        <paper-icon-item name="user" on-click="_createUser">
                          <iron-icon icon="nuxeo:user" slot="item-icon">&gt;</iron-icon>
                          <span>[[i18n('userGroupManagement.new.user')]]</span>
                        </paper-icon-item>
                        <paper-icon-item name="group" on-click="_createGroup">
                          <iron-icon icon="nuxeo:group" slot="item-icon">&gt;</iron-icon>
                          <span>[[i18n('userGroupManagement.new.group')]]</span>
                        </paper-icon-item>
                      </paper-listbox>
                    </paper-menu-button>
                  </div>
                </template>
              </dom-if>
            </div>
            <nuxeo-user-group-search></nuxeo-user-group-search>
          </section>

          <section name="create-user">
            <nuxeo-card>
              <nuxeo-create-user readonly$="[[readonly]]"></nuxeo-create-user>
            </nuxeo-card>
          </section>

          <section name="manage-user">
            <nuxeo-user-management username="[[selectedUser]]" readonly$="[[readonly]]"></nuxeo-user-management>
          </section>

          <section name="create-group">
            <nuxeo-card>
              <nuxeo-create-group></nuxeo-create-group>
            </nuxeo-card>
          </section>

          <section name="manage-group">
            <nuxeo-group-management groupname="[[selectedGroup]]" readonly$="[[readonly]]"></nuxeo-group-management>
          </section>
        </iron-pages>
      `}static get is(){return"nuxeo-user-group-management"}static get properties(){return{page:{type:String,value:"search",notify:!0},selectedUser:String,selectedGroup:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_currentUser:{type:Object}}}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/nuxeo-user-group-management.js`}}ready(){super.ready(),this._isRegistered("nuxeo-view-user")||(0,a.T)(this.resolveUrl("nuxeo-user-group-management/nuxeo-view-user.html")),this._isRegistered("nuxeo-edit-user")||(0,a.T)(this.resolveUrl("nuxeo-user-group-management/nuxeo-edit-user.html")),window.addEventListener("manageUser",(e=>{this._manageUser(e)})),window.addEventListener("manageGroup",(e=>{this._manageGroup(e)})),this.addEventListener("goHome",this._goSearch),this.addEventListener("nuxeo-user-created",this._toast),this.addEventListener("nuxeo-user-invited",this._toast),this.addEventListener("nuxeo-group-created",this._toast)}_goSearch(){this.selectedGroup=null,this.selectedUser=null,this.page="search",this.$$("nuxeo-user-group-search")._searchTermChanged()}_createUser(){this.page="create-user"}_createGroup(){this.page="create-group"}_manageUser(e){this.selectedUser=null,this.selectedUser=e.detail.user,this.page="manage-user"}_manageGroup(e){this.selectedGroup=null,this.selectedGroup=e.detail.group,this.page="manage-group"}_canCreateUserGroup(e,t){return!e&&this.hasAdministrationPermissions(t)}_toast(e){let t;switch(e.type){case"nuxeo-user-created":case"nuxeo-user-invited":t=`User ${e.detail.id} created`;break;case"nuxeo-group-created":t=`Group ${e.detail.groupname} created`}t&&(this.$.toast.text=t,this.$.toast.open())}_isRegistered(e){return document.createElement(e)instanceof r.H3}}customElements.define(e.is,e),Nuxeo.UserGroupManagement=e}},95172:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(62306),n(43384),n(73873),n(36037),n(39660),n(35266),n(3632),n(53043),n(76967),n(22403),n(85621),n(55689),n(89340),n(42108),n(64091),n(49085),n(67117),n(41608));{class e extends((0,r.P)([s.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex-factors">
          :host {
            display: block;
            @apply --nuxeo-user-group-latest-layout;
          }

          .title {
            margin: 0 0 0.8em;
            padding: 0;
          }

          .table {
            border: 1px solid var(--divider-color);
          }

          .table-header {
            @apply --layout-horizontal;
            @apply --layout-center;
            background-color: var(--nuxeo-table-header-background, #fafafa);
            color: var(--nuxeo-text-default, rgba(0, 0, 0, 0.54));
            font-weight: 400;
            min-height: 48px;
            padding: 0 0 0 12px;
            border-bottom: 2px solid var(--nuxeo-border, #eee);
            box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2) inset;
          }

          .table-row {
            @apply --layout-horizontal;
            @apply --layout-center;
            padding: 12px 0 12px 12px;
            border-bottom: 1px solid var(--nuxeo-border, #eee);
            cursor: pointer;
          }

          .table-row:hover {
            background: var(--nuxeo-container-hover, #fafafa);
          }

          .table-actions {
            width: 3em;
          }

          .table {
            border: 1px solid var(--nuxeo-border, #eee);
          }

          h3 iron-icon {
            width: 1.3em;
            margin-right: 0.2rem;
          }

          .emptyResult {
            opacity: 0.5;
            display: block;
            font-weight: 300;
            padding: 1.5em 0.7em;
            text-align: center;
          }

          .preserve-white-space {
            white-space: pre;
          }
        </style>

        <nuxeo-resource
          id="latestCreatedUsersGroups"
          auto
          path="/query/LATEST_CREATED_USERS_OR_GROUPS_PROVIDER"
          response="{{latestCreatedUsersGroups}}"
          headers='{"properties": "*"}'
        >
        </nuxeo-resource>

        <nuxeo-card icon="nuxeo:recent" heading="[[i18n('userGroupLatest.recentlyCreated')]]">
          <div class="table">
            <div class="table-header">
              <div class="flex">[[i18n('userGroupLatest.name')]]</div>
              <div class="flex-2">[[i18n('userGroupLatest.identifier')]]</div>
              <div class="table-actions">
                <paper-icon-button noink icon="nuxeo:refresh" on-click="_refreshLatest"></paper-icon-button>
              </div>
            </div>
            <div class="table-rows">
              <dom-repeat items="[[latestCreatedUsersGroups.entries]]" as="item">
                <template>
                  <div class="table-row" on-click="_manageUserOrGroup">
                    <div class="flex">
                      <dom-if if="[[_isUser(item)]]">
                        <template>
                          <dom-if if="[[_userHasName(item)]]">
                            <template>
                              <nuxeo-user-tag user="[[item]]"></nuxeo-user-tag>
                            </template>
                          </dom-if>
                        </template>
                      </dom-if>
                      <dom-if if="[[_isGroup(item)]]">
                        <template>
                          <nuxeo-group-tag group="[[item]]"></nuxeo-group-tag>
                        </template>
                      </dom-if>
                    </div>
                    <div class="flex-2 preserve-white-space">[[item.uid]]</div>
                    <div class="table-actions"></div>
                  </div>
                </template>
              </dom-repeat>
              <dom-if if="[[_empty(latestCreatedUsersGroups.entries)]]">
                <template>
                  <div class="table-row">
                    <div class="emptyResult">[[i18n('userGroupLatest.emptyRecentUserOrGroup')]]</div>
                  </div>
                </template>
              </dom-if>
            </div>
          </div>
        </nuxeo-card>
      `}static get is(){return"nuxeo-user-group-latest"}static get properties(){return{latestCreatedUsersGroups:Object}}ready(){super.ready(),window.addEventListener("nuxeo-user-created",(()=>{this._refreshLatestWithDelay()})),window.addEventListener("nuxeo-group-created",(()=>{this._refreshLatestWithDelay()})),window.addEventListener("nuxeo-user-deleted",(()=>{this._refreshLatest()})),window.addEventListener("nuxeo-group-deleted",(()=>{this._refreshLatest()}))}_empty(e){return e&&0===e.length}_userHasName(e){return e.properties["user:firstName"]||e.properties["user:lastName"]}_isUser(e){return"user"===e.type}_isGroup(e){return"group"===e.type}_displayLCUserGroup(e){if(this._isUser(e)){let t="";return e.properties["user:firstName"]&&(t+=e.properties["user:firstName"]),e.properties["user:lastName"]&&(t.length>0&&(t+=" "),t+=e.properties["user:lastName"]),t}if(this._isGroup(e))return e.properties["group:grouplabel"]}_manageUserOrGroup(e){this._isUser(e.model.item)?this.dispatchEvent(new CustomEvent("manageUser",{composed:!0,bubbles:!0,detail:{user:e.model.item.uid}})):this._isGroup(e.model.item)&&this.dispatchEvent(new CustomEvent("manageGroup",{composed:!0,bubbles:!0,detail:{group:e.model.item.uid}}))}_refreshLatest(){this.latestCreatedUsersGroups={},this.$.latestCreatedUsersGroups.execute()}_refreshLatestWithDelay(){setTimeout((()=>{this._refreshLatest()}),1e3)}}customElements.define(e.is,e),Nuxeo.UserGroupLatest=e}},80638:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(75343),n(69699)),a=n(41608);n(72063),n(23550);{class e extends((0,r.P)([a.mB,s.e],Nuxeo.Element)){static get template(){return i.d`
        <style>
          a,
          a:active,
          a:visited,
          a:focus {
            @apply --nuxeo-link;
          }
          a:hover {
            @apply --nuxeo-link-hover;
          }
          .properties label {
            @apply --nuxeo-label;
            min-width: 10rem;
            margin-inline-end: 12px;
          }
          .properties .item {
            @apply --layout-horizontal;
            @apply --layout-flex;
            @apply --layout-justified;
            line-height: 2.2rem;
          }
        </style>
        <dom-if if="[[label]]">
          <template>
            <h3>[[label]]</h3>
          </template>
        </dom-if>
        <div class="properties">
          <dom-repeat items="[[document.properties.vid:transcodedVideos]]" as="conversion">
            <dom-if if="[[conversion.content]]">
              <template>
                <div class="item">
                  <label>[[conversion.name]]</label>
                  <span>[[conversion.info.width]] x [[conversion.info.height]]</span>
                  <span>[[formatSize(conversion.content.length)]]</span>
                  <a href="[[conversion.content.data]]">
                    <iron-icon icon="nuxeo:download"></iron-icon>
                    <nuxeo-tooltip>[[i18n('videoViewLayout.download.tooltip')]]</nuxeo-tooltip>
                  </a>
                </div>
              </template>
            </dom-if>
          </dom-repeat>
        </div>
      `}static get is(){return"nuxeo-video-conversions"}static get properties(){return{document:Object,label:String}}}customElements.define(e.is,e)}},124:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=n(41608);n(75343);{class e extends((0,r.P)([s.mB],Nuxeo.Element)){static get template(){return i.d`
        <style>
          .properties label {
            @apply --nuxeo-label;
            min-width: 10rem;
            margin-inline-end: 12px;
          }

          .properties .item {
            @apply --layout-horizontal;
            @apply --layout-flex;
            line-height: 2.2rem;
          }
        </style>
        <div class="properties">
          <div class="item">
            <label>[[i18n('videoViewLayout.format')]]</label>
            <div>[[document.properties.vid:info.format]]</div>
          </div>
          <div class="item">
            <label>[[i18n('videoViewLayout.duration')]]</label>
            <div>[[document.properties.vid:info.duration]]</div>
          </div>
          <div class="item">
            <label>[[i18n('videoViewLayout.width')]]</label>
            <div>[[document.properties.vid:info.width]]</div>
          </div>
          <div class="item">
            <label>[[i18n('videoViewLayout.height')]]</label>
            <div>[[document.properties.vid:info.height]]</div>
          </div>
          <div class="item">
            <label>[[i18n('videoViewLayout.frameRate')]]</label>
            <div>[[document.properties.vid:info.frameRate]]</div>
          </div>
        </div>
      `}static get is(){return"nuxeo-video-info"}static get properties(){return{document:Object}}}customElements.define(e.is,e)}},62514:(e,t,n)=>{"use strict";var i=n(66538),r=(n(53774),n(93366),n(14190)),s=(n(36037),n(3632),n(85621),n(93426));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var m="undefined"!=typeof window&&void 0!==window.document,f=m?window:{},g=!(!m||!f.document.documentElement)&&"ontouchstart"in f.document.documentElement,_=!!m&&"PointerEvent"in f,v="cropper",y="all",b="crop",x="move",w="zoom",k="e",M="w",L="s",S="n",D="ne",E="nw",T="se",P="sw",C="".concat(v,"-crop"),Y="".concat(v,"-disabled"),A="".concat(v,"-hidden"),O="".concat(v,"-hide"),N="".concat(v,"-invisible"),j="".concat(v,"-modal"),q="".concat(v,"-move"),R="".concat(v,"Action"),I="".concat(v,"Preview"),H="crop",F="move",B="none",z="crop",U="cropend",W="cropmove",V="cropstart",G="dblclick",$=_?"pointerdown":g?"touchstart":"mousedown",J=_?"pointermove":g?"touchmove":"mousemove",X=_?"pointerup pointercancel":g?"touchend touchcancel":"mouseup",K="ready",Z="resize",Q="wheel",ee="zoom",te="image/jpeg",ne=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,ie=/^data:/,re=/^data:image\/jpeg;base64,/,se=/^img|canvas$/i,ae={viewMode:0,dragMode:H,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},oe=Number.isNaN||f.isNaN;function le(e){return"number"==typeof e&&!oe(e)}var ue=function(e){return e>0&&e<1/0};function ce(e){return void 0===e}function de(e){return"object"===a(e)&&null!==e}var he=Object.prototype.hasOwnProperty;function pe(e){if(!de(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&he.call(n,"isPrototypeOf")}catch(e){return!1}}function me(e){return"function"==typeof e}var fe=Array.prototype.slice;function ge(e){return Array.from?Array.from(e):fe.call(e)}function _e(e,t){return e&&me(t)&&(Array.isArray(e)||le(e.length)?ge(e).forEach((function(n,i){t.call(e,n,i,e)})):de(e)&&Object.keys(e).forEach((function(n){t.call(e,e[n],n,e)}))),e}var ve=Object.assign||function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return de(e)&&n.length>0&&n.forEach((function(t){de(t)&&Object.keys(t).forEach((function(n){e[n]=t[n]}))})),e},ye=/\.\d*(?:0|9){12}\d*$/;function be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return ye.test(e)?Math.round(e*t)/t:e}var xe=/^width|height|left|top|marginLeft|marginTop$/;function we(e,t){var n=e.style;_e(t,(function(e,t){xe.test(t)&&le(e)&&(e="".concat(e,"px")),n[t]=e}))}function ke(e,t){if(t)if(le(e.length))_e(e,(function(e){ke(e,t)}));else if(e.classList)e.classList.add(t);else{var n=e.className.trim();n?n.indexOf(t)<0&&(e.className="".concat(n," ").concat(t)):e.className=t}}function Me(e,t){t&&(le(e.length)?_e(e,(function(e){Me(e,t)})):e.classList?e.classList.remove(t):e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,"")))}function Le(e,t,n){t&&(le(e.length)?_e(e,(function(e){Le(e,t,n)})):n?ke(e,t):Me(e,t))}var Se=/([a-z\d])([A-Z])/g;function De(e){return e.replace(Se,"$1-$2").toLowerCase()}function Ee(e,t){return de(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(De(t)))}function Te(e,t,n){de(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(De(t)),n)}var Pe=/\s\s*/,Ce=function(){var e=!1;if(m){var t=!1,n=function(){},i=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(e){t=e}});f.addEventListener("test",n,i),f.removeEventListener("test",n,i)}return e}();function Ye(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n;t.trim().split(Pe).forEach((function(t){if(!Ce){var s=e.listeners;s&&s[t]&&s[t][n]&&(r=s[t][n],delete s[t][n],0===Object.keys(s[t]).length&&delete s[t],0===Object.keys(s).length&&delete e.listeners)}e.removeEventListener(t,r,i)}))}function Ae(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n;t.trim().split(Pe).forEach((function(t){if(i.once&&!Ce){var s=e.listeners,a=void 0===s?{}:s;r=function(){delete a[t][n],e.removeEventListener(t,r,i);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];n.apply(e,o)},a[t]||(a[t]={}),a[t][n]&&e.removeEventListener(t,a[t][n],i),a[t][n]=r,e.listeners=a}e.addEventListener(t,r,i)}))}function Oe(e,t,n){var i;return me(Event)&&me(CustomEvent)?i=new CustomEvent(t,{detail:n,bubbles:!0,cancelable:!0}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(i)}function Ne(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var je=f.location,qe=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Re(e){var t=e.match(qe);return null!==t&&(t[1]!==je.protocol||t[2]!==je.hostname||t[3]!==je.port)}function Ie(e){var t="timestamp=".concat((new Date).getTime());return e+(-1===e.indexOf("?")?"?":"&")+t}function He(e){var t=e.rotate,n=e.scaleX,i=e.scaleY,r=e.translateX,s=e.translateY,a=[];le(r)&&0!==r&&a.push("translateX(".concat(r,"px)")),le(s)&&0!==s&&a.push("translateY(".concat(s,"px)")),le(t)&&0!==t&&a.push("rotate(".concat(t,"deg)")),le(n)&&1!==n&&a.push("scaleX(".concat(n,")")),le(i)&&1!==i&&a.push("scaleY(".concat(i,")"));var o=a.length?a.join(" "):"none";return{WebkitTransform:o,msTransform:o,transform:o}}function Fe(e,t){var n=e.pageX,i=e.pageY,r={endX:n,endY:i};return t?r:d({startX:n,startY:i},r)}function Be(e){var t=e.aspectRatio,n=e.height,i=e.width,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",s=ue(i),a=ue(n);if(s&&a){var o=n*t;"contain"===r&&o>i||"cover"===r&&o<i?n=i/t:i=n*t}else s?n=i/t:a&&(i=n*t);return{width:i,height:n}}function ze(e,t,n,i){var r=t.aspectRatio,s=t.naturalWidth,a=t.naturalHeight,o=t.rotate,l=void 0===o?0:o,u=t.scaleX,c=void 0===u?1:u,d=t.scaleY,p=void 0===d?1:d,m=n.aspectRatio,f=n.naturalWidth,g=n.naturalHeight,_=i.fillColor,v=void 0===_?"transparent":_,y=i.imageSmoothingEnabled,b=void 0===y||y,x=i.imageSmoothingQuality,w=void 0===x?"low":x,k=i.maxWidth,M=void 0===k?1/0:k,L=i.maxHeight,S=void 0===L?1/0:L,D=i.minWidth,E=void 0===D?0:D,T=i.minHeight,P=void 0===T?0:T,C=document.createElement("canvas"),Y=C.getContext("2d"),A=Be({aspectRatio:m,width:M,height:S}),O=Be({aspectRatio:m,width:E,height:P},"cover"),N=Math.min(A.width,Math.max(O.width,f)),j=Math.min(A.height,Math.max(O.height,g)),q=Be({aspectRatio:r,width:M,height:S}),R=Be({aspectRatio:r,width:E,height:P},"cover"),I=Math.min(q.width,Math.max(R.width,s)),H=Math.min(q.height,Math.max(R.height,a)),F=[-I/2,-H/2,I,H];return C.width=be(N),C.height=be(j),Y.fillStyle=v,Y.fillRect(0,0,N,j),Y.save(),Y.translate(N/2,j/2),Y.rotate(l*Math.PI/180),Y.scale(c,p),Y.imageSmoothingEnabled=b,Y.imageSmoothingQuality=w,Y.drawImage.apply(Y,[e].concat(h(F.map((function(e){return Math.floor(be(e))}))))),Y.restore(),C}var Ue=String.fromCharCode,We=/^data:.*,/;var Ve={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var e=this.element,t=this.options,n=this.container,i=this.cropper,r=Number(t.minContainerWidth),s=Number(t.minContainerHeight);ke(i,A),Me(e,A);var a={width:Math.max(n.offsetWidth,r>=0?r:200),height:Math.max(n.offsetHeight,s>=0?s:100)};this.containerData=a,we(i,{width:a.width,height:a.height}),ke(e,A),Me(i,A)},initCanvas:function(){var e=this.containerData,t=this.imageData,n=this.options.viewMode,i=Math.abs(t.rotate)%180==90,r=i?t.naturalHeight:t.naturalWidth,s=i?t.naturalWidth:t.naturalHeight,a=r/s,o=e.width,l=e.height;e.height*a>e.width?3===n?o=e.height*a:l=e.width/a:3===n?l=e.width/a:o=e.height*a;var u={aspectRatio:a,naturalWidth:r,naturalHeight:s,width:o,height:l};this.canvasData=u,this.limited=1===n||2===n,this.limitCanvas(!0,!0),u.width=Math.min(Math.max(u.width,u.minWidth),u.maxWidth),u.height=Math.min(Math.max(u.height,u.minHeight),u.maxHeight),u.left=(e.width-u.width)/2,u.top=(e.height-u.height)/2,u.oldLeft=u.left,u.oldTop=u.top,this.initialCanvasData=ve({},u)},limitCanvas:function(e,t){var n=this.options,i=this.containerData,r=this.canvasData,s=this.cropBoxData,a=n.viewMode,o=r.aspectRatio,l=this.cropped&&s;if(e){var u=Number(n.minCanvasWidth)||0,c=Number(n.minCanvasHeight)||0;a>1?(u=Math.max(u,i.width),c=Math.max(c,i.height),3===a&&(c*o>u?u=c*o:c=u/o)):a>0&&(u?u=Math.max(u,l?s.width:0):c?c=Math.max(c,l?s.height:0):l&&(u=s.width,(c=s.height)*o>u?u=c*o:c=u/o));var d=Be({aspectRatio:o,width:u,height:c});u=d.width,c=d.height,r.minWidth=u,r.minHeight=c,r.maxWidth=1/0,r.maxHeight=1/0}if(t)if(a>(l?0:1)){var h=i.width-r.width,p=i.height-r.height;r.minLeft=Math.min(0,h),r.minTop=Math.min(0,p),r.maxLeft=Math.max(0,h),r.maxTop=Math.max(0,p),l&&this.limited&&(r.minLeft=Math.min(s.left,s.left+(s.width-r.width)),r.minTop=Math.min(s.top,s.top+(s.height-r.height)),r.maxLeft=s.left,r.maxTop=s.top,2===a&&(r.width>=i.width&&(r.minLeft=Math.min(0,h),r.maxLeft=Math.max(0,h)),r.height>=i.height&&(r.minTop=Math.min(0,p),r.maxTop=Math.max(0,p))))}else r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=i.width,r.maxTop=i.height},renderCanvas:function(e,t){var n=this.canvasData,i=this.imageData;if(t){var r=function(e){var t=e.width,n=e.height,i=e.degree;if(90==(i=Math.abs(i)%180))return{width:n,height:t};var r=i%90*Math.PI/180,s=Math.sin(r),a=Math.cos(r),o=t*a+n*s,l=t*s+n*a;return i>90?{width:l,height:o}:{width:o,height:l}}({width:i.naturalWidth*Math.abs(i.scaleX||1),height:i.naturalHeight*Math.abs(i.scaleY||1),degree:i.rotate||0}),s=r.width,a=r.height,o=n.width*(s/n.naturalWidth),l=n.height*(a/n.naturalHeight);n.left-=(o-n.width)/2,n.top-=(l-n.height)/2,n.width=o,n.height=l,n.aspectRatio=s/a,n.naturalWidth=s,n.naturalHeight=a,this.limitCanvas(!0,!1)}(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,we(this.canvas,ve({width:n.width,height:n.height},He({translateX:n.left,translateY:n.top}))),this.renderImage(e),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(e){var t=this.canvasData,n=this.imageData,i=n.naturalWidth*(t.width/t.naturalWidth),r=n.naturalHeight*(t.height/t.naturalHeight);ve(n,{width:i,height:r,left:(t.width-i)/2,top:(t.height-r)/2}),we(this.image,ve({width:n.width,height:n.height},He(ve({translateX:n.left,translateY:n.top},n)))),e&&this.output()},initCropBox:function(){var e=this.options,t=this.canvasData,n=e.aspectRatio||e.initialAspectRatio,i=Number(e.autoCropArea)||.8,r={width:t.width,height:t.height};n&&(t.height*n>t.width?r.height=r.width/n:r.width=r.height*n),this.cropBoxData=r,this.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*i),r.height=Math.max(r.minHeight,r.height*i),r.left=t.left+(t.width-r.width)/2,r.top=t.top+(t.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,this.initialCropBoxData=ve({},r)},limitCropBox:function(e,t){var n=this.options,i=this.containerData,r=this.canvasData,s=this.cropBoxData,a=this.limited,o=n.aspectRatio;if(e){var l=Number(n.minCropBoxWidth)||0,u=Number(n.minCropBoxHeight)||0,c=a?Math.min(i.width,r.width,r.width+r.left,i.width-r.left):i.width,d=a?Math.min(i.height,r.height,r.height+r.top,i.height-r.top):i.height;l=Math.min(l,i.width),u=Math.min(u,i.height),o&&(l&&u?u*o>l?u=l/o:l=u*o:l?u=l/o:u&&(l=u*o),d*o>c?d=c/o:c=d*o),s.minWidth=Math.min(l,c),s.minHeight=Math.min(u,d),s.maxWidth=c,s.maxHeight=d}t&&(a?(s.minLeft=Math.max(0,r.left),s.minTop=Math.max(0,r.top),s.maxLeft=Math.min(i.width,r.left+r.width)-s.width,s.maxTop=Math.min(i.height,r.top+r.height)-s.height):(s.minLeft=0,s.minTop=0,s.maxLeft=i.width-s.width,s.maxTop=i.height-s.height))},renderCropBox:function(){var e=this.options,t=this.containerData,n=this.cropBoxData;(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCropBox(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,e.movable&&e.cropBoxMovable&&Te(this.face,R,n.width>=t.width&&n.height>=t.height?x:y),we(this.cropBox,ve({width:n.width,height:n.height},He({translateX:n.left,translateY:n.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Oe(this.element,z,this.getData())}},Ge={initPreview:function(){var e=this.element,t=this.crossOrigin,n=this.options.preview,i=t?this.crossOriginUrl:this.url,r=e.alt||"The image to preview",s=document.createElement("img");if(t&&(s.crossOrigin=t),s.src=i,s.alt=r,this.viewBox.appendChild(s),this.viewBoxImage=s,n){var a=n;"string"==typeof n?a=e.ownerDocument.querySelectorAll(n):n.querySelector&&(a=[n]),this.previews=a,_e(a,(function(e){var n=document.createElement("img");Te(e,I,{width:e.offsetWidth,height:e.offsetHeight,html:e.innerHTML}),t&&(n.crossOrigin=t),n.src=i,n.alt=r,n.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',e.innerHTML="",e.appendChild(n)}))}},resetPreview:function(){_e(this.previews,(function(e){var t=Ee(e,I);we(e,{width:t.width,height:t.height}),e.innerHTML=t.html,function(e,t){if(de(e[t]))try{delete e[t]}catch(n){e[t]=void 0}else if(e.dataset)try{delete e.dataset[t]}catch(n){e.dataset[t]=void 0}else e.removeAttribute("data-".concat(De(t)))}(e,I)}))},preview:function(){var e=this.imageData,t=this.canvasData,n=this.cropBoxData,i=n.width,r=n.height,s=e.width,a=e.height,o=n.left-t.left-e.left,l=n.top-t.top-e.top;this.cropped&&!this.disabled&&(we(this.viewBoxImage,ve({width:s,height:a},He(ve({translateX:-o,translateY:-l},e)))),_e(this.previews,(function(t){var n=Ee(t,I),u=n.width,c=n.height,d=u,h=c,p=1;i&&(h=r*(p=u/i)),r&&h>c&&(d=i*(p=c/r),h=c),we(t,{width:d,height:h}),we(t.getElementsByTagName("img")[0],ve({width:s*p,height:a*p},He(ve({translateX:-o*p,translateY:-l*p},e))))})))}},$e={bind:function(){var e=this.element,t=this.options,n=this.cropper;me(t.cropstart)&&Ae(e,V,t.cropstart),me(t.cropmove)&&Ae(e,W,t.cropmove),me(t.cropend)&&Ae(e,U,t.cropend),me(t.crop)&&Ae(e,z,t.crop),me(t.zoom)&&Ae(e,ee,t.zoom),Ae(n,$,this.onCropStart=this.cropStart.bind(this)),t.zoomable&&t.zoomOnWheel&&Ae(n,Q,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleDragModeOnDblclick&&Ae(n,G,this.onDblclick=this.dblclick.bind(this)),Ae(e.ownerDocument,J,this.onCropMove=this.cropMove.bind(this)),Ae(e.ownerDocument,X,this.onCropEnd=this.cropEnd.bind(this)),t.responsive&&Ae(window,Z,this.onResize=this.resize.bind(this))},unbind:function(){var e=this.element,t=this.options,n=this.cropper;me(t.cropstart)&&Ye(e,V,t.cropstart),me(t.cropmove)&&Ye(e,W,t.cropmove),me(t.cropend)&&Ye(e,U,t.cropend),me(t.crop)&&Ye(e,z,t.crop),me(t.zoom)&&Ye(e,ee,t.zoom),Ye(n,$,this.onCropStart),t.zoomable&&t.zoomOnWheel&&Ye(n,Q,this.onWheel,{passive:!1,capture:!0}),t.toggleDragModeOnDblclick&&Ye(n,G,this.onDblclick),Ye(e.ownerDocument,J,this.onCropMove),Ye(e.ownerDocument,X,this.onCropEnd),t.responsive&&Ye(window,Z,this.onResize)}},Je={resize:function(){if(!this.disabled){var e,t,n=this.options,i=this.container,r=this.containerData,s=i.offsetWidth/r.width;1===s&&i.offsetHeight===r.height||(n.restore&&(e=this.getCanvasData(),t=this.getCropBoxData()),this.render(),n.restore&&(this.setCanvasData(_e(e,(function(t,n){e[n]=t*s}))),this.setCropBoxData(_e(t,(function(e,n){t[n]=e*s})))))}},dblclick:function(){var e,t;this.disabled||this.options.dragMode===B||this.setDragMode((e=this.dragBox,t=C,(e.classList?e.classList.contains(t):e.className.indexOf(t)>-1)?F:H))},wheel:function(e){var t=this,n=Number(this.options.wheelZoomRatio)||.1,i=1;this.disabled||(e.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){t.wheeling=!1}),50),e.deltaY?i=e.deltaY>0?1:-1:e.wheelDelta?i=-e.wheelDelta/120:e.detail&&(i=e.detail>0?1:-1),this.zoom(-i*n,e)))},cropStart:function(e){var t=e.buttons,n=e.button;if(!(this.disabled||("mousedown"===e.type||"pointerdown"===e.type&&"mouse"===e.pointerType)&&(le(t)&&1!==t||le(n)&&0!==n||e.ctrlKey))){var i,r=this.options,s=this.pointers;e.changedTouches?_e(e.changedTouches,(function(e){s[e.identifier]=Fe(e)})):s[e.pointerId||0]=Fe(e),i=Object.keys(s).length>1&&r.zoomable&&r.zoomOnTouch?w:Ee(e.target,R),ne.test(i)&&!1!==Oe(this.element,V,{originalEvent:e,action:i})&&(e.preventDefault(),this.action=i,this.cropping=!1,i===b&&(this.cropping=!0,ke(this.dragBox,j)))}},cropMove:function(e){var t=this.action;if(!this.disabled&&t){var n=this.pointers;e.preventDefault(),!1!==Oe(this.element,W,{originalEvent:e,action:t})&&(e.changedTouches?_e(e.changedTouches,(function(e){ve(n[e.identifier]||{},Fe(e,!0))})):ve(n[e.pointerId||0]||{},Fe(e,!0)),this.change(e))}},cropEnd:function(e){if(!this.disabled){var t=this.action,n=this.pointers;e.changedTouches?_e(e.changedTouches,(function(e){delete n[e.identifier]})):delete n[e.pointerId||0],t&&(e.preventDefault(),Object.keys(n).length||(this.action=""),this.cropping&&(this.cropping=!1,Le(this.dragBox,j,this.cropped&&this.options.modal)),Oe(this.element,U,{originalEvent:e,action:t}))}}},Xe={change:function(e){var t,n=this.options,i=this.canvasData,r=this.containerData,s=this.cropBoxData,a=this.pointers,o=this.action,l=n.aspectRatio,u=s.left,c=s.top,h=s.width,p=s.height,m=u+h,f=c+p,g=0,_=0,v=r.width,C=r.height,Y=!0;!l&&e.shiftKey&&(l=h&&p?h/p:1),this.limited&&(g=s.minLeft,_=s.minTop,v=g+Math.min(r.width,i.width,i.left+i.width),C=_+Math.min(r.height,i.height,i.top+i.height));var O=a[Object.keys(a)[0]],N={x:O.endX-O.startX,y:O.endY-O.startY},j=function(e){switch(e){case k:m+N.x>v&&(N.x=v-m);break;case M:u+N.x<g&&(N.x=g-u);break;case S:c+N.y<_&&(N.y=_-c);break;case L:f+N.y>C&&(N.y=C-f)}};switch(o){case y:u+=N.x,c+=N.y;break;case k:if(N.x>=0&&(m>=v||l&&(c<=_||f>=C))){Y=!1;break}j(k),(h+=N.x)<0&&(o=M,u-=h=-h),l&&(p=h/l,c+=(s.height-p)/2);break;case S:if(N.y<=0&&(c<=_||l&&(u<=g||m>=v))){Y=!1;break}j(S),p-=N.y,c+=N.y,p<0&&(o=L,c-=p=-p),l&&(h=p*l,u+=(s.width-h)/2);break;case M:if(N.x<=0&&(u<=g||l&&(c<=_||f>=C))){Y=!1;break}j(M),h-=N.x,u+=N.x,h<0&&(o=k,u-=h=-h),l&&(p=h/l,c+=(s.height-p)/2);break;case L:if(N.y>=0&&(f>=C||l&&(u<=g||m>=v))){Y=!1;break}j(L),(p+=N.y)<0&&(o=S,c-=p=-p),l&&(h=p*l,u+=(s.width-h)/2);break;case D:if(l){if(N.y<=0&&(c<=_||m>=v)){Y=!1;break}j(S),p-=N.y,c+=N.y,h=p*l}else j(S),j(k),N.x>=0?m<v?h+=N.x:N.y<=0&&c<=_&&(Y=!1):h+=N.x,N.y<=0?c>_&&(p-=N.y,c+=N.y):(p-=N.y,c+=N.y);h<0&&p<0?(o=P,c-=p=-p,u-=h=-h):h<0?(o=E,u-=h=-h):p<0&&(o=T,c-=p=-p);break;case E:if(l){if(N.y<=0&&(c<=_||u<=g)){Y=!1;break}j(S),p-=N.y,c+=N.y,h=p*l,u+=s.width-h}else j(S),j(M),N.x<=0?u>g?(h-=N.x,u+=N.x):N.y<=0&&c<=_&&(Y=!1):(h-=N.x,u+=N.x),N.y<=0?c>_&&(p-=N.y,c+=N.y):(p-=N.y,c+=N.y);h<0&&p<0?(o=T,c-=p=-p,u-=h=-h):h<0?(o=D,u-=h=-h):p<0&&(o=P,c-=p=-p);break;case P:if(l){if(N.x<=0&&(u<=g||f>=C)){Y=!1;break}j(M),h-=N.x,u+=N.x,p=h/l}else j(L),j(M),N.x<=0?u>g?(h-=N.x,u+=N.x):N.y>=0&&f>=C&&(Y=!1):(h-=N.x,u+=N.x),N.y>=0?f<C&&(p+=N.y):p+=N.y;h<0&&p<0?(o=D,c-=p=-p,u-=h=-h):h<0?(o=T,u-=h=-h):p<0&&(o=E,c-=p=-p);break;case T:if(l){if(N.x>=0&&(m>=v||f>=C)){Y=!1;break}j(k),p=(h+=N.x)/l}else j(L),j(k),N.x>=0?m<v?h+=N.x:N.y>=0&&f>=C&&(Y=!1):h+=N.x,N.y>=0?f<C&&(p+=N.y):p+=N.y;h<0&&p<0?(o=E,c-=p=-p,u-=h=-h):h<0?(o=P,u-=h=-h):p<0&&(o=D,c-=p=-p);break;case x:this.move(N.x,N.y),Y=!1;break;case w:this.zoom(function(e){var t=d({},e),n=0;return _e(e,(function(e,i){delete t[i],_e(t,(function(t){var i=Math.abs(e.startX-t.startX),r=Math.abs(e.startY-t.startY),s=Math.abs(e.endX-t.endX),a=Math.abs(e.endY-t.endY),o=Math.sqrt(i*i+r*r),l=(Math.sqrt(s*s+a*a)-o)/o;Math.abs(l)>Math.abs(n)&&(n=l)}))})),n}(a),e),Y=!1;break;case b:if(!N.x||!N.y){Y=!1;break}t=Ne(this.cropper),u=O.startX-t.left,c=O.startY-t.top,h=s.minWidth,p=s.minHeight,N.x>0?o=N.y>0?T:D:N.x<0&&(u-=h,o=N.y>0?P:E),N.y<0&&(c-=p),this.cropped||(Me(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}Y&&(s.width=h,s.height=p,s.left=u,s.top=c,this.action=o,this.renderCropBox()),_e(a,(function(e){e.startX=e.endX,e.startY=e.endY}))}},Ke={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&ke(this.dragBox,j),Me(this.cropBox,A),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=ve({},this.initialImageData),this.canvasData=ve({},this.initialCanvasData),this.cropBoxData=ve({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(ve(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Me(this.dragBox,j),ke(this.cropBox,A)),this},replace:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&e&&(this.isImg&&(this.element.src=e),t?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,_e(this.previews,(function(t){t.getElementsByTagName("img")[0].src=e})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Me(this.cropper,Y)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,ke(this.cropper,Y)),this},destroy:function(){var e=this.element;return e.cropper?(e.cropper=void 0,this.isImg&&this.replaced&&(e.src=this.originalUrl),this.uncreate(),this):this},move:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=this.canvasData,i=n.left,r=n.top;return this.moveTo(ce(e)?e:i+Number(e),ce(t)?t:r+Number(t))},moveTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=this.canvasData,i=!1;return e=Number(e),t=Number(t),this.ready&&!this.disabled&&this.options.movable&&(le(e)&&(n.left=e,i=!0),le(t)&&(n.top=t,i=!0),i&&this.renderCanvas(!0)),this},zoom:function(e,t){var n=this.canvasData;return e=(e=Number(e))<0?1/(1-e):1+e,this.zoomTo(n.width*e/n.naturalWidth,null,t)},zoomTo:function(e,t,n){var i=this.options,r=this.canvasData,s=r.width,a=r.height,o=r.naturalWidth,l=r.naturalHeight;if((e=Number(e))>=0&&this.ready&&!this.disabled&&i.zoomable){var u=o*e,c=l*e;if(!1===Oe(this.element,ee,{ratio:e,oldRatio:s/o,originalEvent:n}))return this;if(n){var d=this.pointers,h=Ne(this.cropper),p=d&&Object.keys(d).length?function(e){var t=0,n=0,i=0;return _e(e,(function(e){var r=e.startX,s=e.startY;t+=r,n+=s,i+=1})),{pageX:t/=i,pageY:n/=i}}(d):{pageX:n.pageX,pageY:n.pageY};r.left-=(u-s)*((p.pageX-h.left-r.left)/s),r.top-=(c-a)*((p.pageY-h.top-r.top)/a)}else pe(t)&&le(t.x)&&le(t.y)?(r.left-=(u-s)*((t.x-r.left)/s),r.top-=(c-a)*((t.y-r.top)/a)):(r.left-=(u-s)/2,r.top-=(c-a)/2);r.width=u,r.height=c,this.renderCanvas(!0)}return this},rotate:function(e){return this.rotateTo((this.imageData.rotate||0)+Number(e))},rotateTo:function(e){return le(e=Number(e))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=e%360,this.renderCanvas(!0,!0)),this},scaleX:function(e){var t=this.imageData.scaleY;return this.scale(e,le(t)?t:1)},scaleY:function(e){var t=this.imageData.scaleX;return this.scale(le(t)?t:1,e)},scale:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=this.imageData,i=!1;return e=Number(e),t=Number(t),this.ready&&!this.disabled&&this.options.scalable&&(le(e)&&(n.scaleX=e,i=!0),le(t)&&(n.scaleY=t,i=!0),i&&this.renderCanvas(!0,!0)),this},getData:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.options,i=this.imageData,r=this.canvasData,s=this.cropBoxData;if(this.ready&&this.cropped){e={x:s.left-r.left,y:s.top-r.top,width:s.width,height:s.height};var a=i.width/i.naturalWidth;if(_e(e,(function(t,n){e[n]=t/a})),t){var o=Math.round(e.y+e.height),l=Math.round(e.x+e.width);e.x=Math.round(e.x),e.y=Math.round(e.y),e.width=l-e.x,e.height=o-e.y}}else e={x:0,y:0,width:0,height:0};return n.rotatable&&(e.rotate=i.rotate||0),n.scalable&&(e.scaleX=i.scaleX||1,e.scaleY=i.scaleY||1),e},setData:function(e){var t=this.options,n=this.imageData,i=this.canvasData,r={};if(this.ready&&!this.disabled&&pe(e)){var s=!1;t.rotatable&&le(e.rotate)&&e.rotate!==n.rotate&&(n.rotate=e.rotate,s=!0),t.scalable&&(le(e.scaleX)&&e.scaleX!==n.scaleX&&(n.scaleX=e.scaleX,s=!0),le(e.scaleY)&&e.scaleY!==n.scaleY&&(n.scaleY=e.scaleY,s=!0)),s&&this.renderCanvas(!0,!0);var a=n.width/n.naturalWidth;le(e.x)&&(r.left=e.x*a+i.left),le(e.y)&&(r.top=e.y*a+i.top),le(e.width)&&(r.width=e.width*a),le(e.height)&&(r.height=e.height*a),this.setCropBoxData(r)}return this},getContainerData:function(){return this.ready?ve({},this.containerData):{}},getImageData:function(){return this.sized?ve({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,t={};return this.ready&&_e(["left","top","width","height","naturalWidth","naturalHeight"],(function(n){t[n]=e[n]})),t},setCanvasData:function(e){var t=this.canvasData,n=t.aspectRatio;return this.ready&&!this.disabled&&pe(e)&&(le(e.left)&&(t.left=e.left),le(e.top)&&(t.top=e.top),le(e.width)?(t.width=e.width,t.height=e.width/n):le(e.height)&&(t.height=e.height,t.width=e.height*n),this.renderCanvas(!0)),this},getCropBoxData:function(){var e,t=this.cropBoxData;return this.ready&&this.cropped&&(e={left:t.left,top:t.top,width:t.width,height:t.height}),e||{}},setCropBoxData:function(e){var t,n,i=this.cropBoxData,r=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&pe(e)&&(le(e.left)&&(i.left=e.left),le(e.top)&&(i.top=e.top),le(e.width)&&e.width!==i.width&&(t=!0,i.width=e.width),le(e.height)&&e.height!==i.height&&(n=!0,i.height=e.height),r&&(t?i.height=i.width/r:n&&(i.width=i.height*r)),this.renderCropBox()),this},getCroppedCanvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var t=this.canvasData,n=ze(this.image,this.imageData,t,e);if(!this.cropped)return n;var i=this.getData(),r=i.x,s=i.y,a=i.width,o=i.height,l=n.width/Math.floor(t.naturalWidth);1!==l&&(r*=l,s*=l,a*=l,o*=l);var u=a/o,c=Be({aspectRatio:u,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),d=Be({aspectRatio:u,width:e.minWidth||0,height:e.minHeight||0},"cover"),p=Be({aspectRatio:u,width:e.width||(1!==l?n.width:a),height:e.height||(1!==l?n.height:o)}),m=p.width,f=p.height;m=Math.min(c.width,Math.max(d.width,m)),f=Math.min(c.height,Math.max(d.height,f));var g=document.createElement("canvas"),_=g.getContext("2d");g.width=be(m),g.height=be(f),_.fillStyle=e.fillColor||"transparent",_.fillRect(0,0,m,f);var v=e.imageSmoothingEnabled,y=void 0===v||v,b=e.imageSmoothingQuality;_.imageSmoothingEnabled=y,b&&(_.imageSmoothingQuality=b);var x,w,k,M,L,S,D=n.width,E=n.height,T=r,P=s;T<=-a||T>D?(T=0,x=0,k=0,L=0):T<=0?(k=-T,T=0,L=x=Math.min(D,a+T)):T<=D&&(k=0,L=x=Math.min(a,D-T)),x<=0||P<=-o||P>E?(P=0,w=0,M=0,S=0):P<=0?(M=-P,P=0,S=w=Math.min(E,o+P)):P<=E&&(M=0,S=w=Math.min(o,E-P));var C=[T,P,x,w];if(L>0&&S>0){var Y=m/a;C.push(k*Y,M*Y,L*Y,S*Y)}return _.drawImage.apply(_,[n].concat(h(C.map((function(e){return Math.floor(be(e))}))))),g},setAspectRatio:function(e){var t=this.options;return this.disabled||ce(e)||(t.aspectRatio=Math.max(0,e)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(e){var t=this.options,n=this.dragBox,i=this.face;if(this.ready&&!this.disabled){var r=e===H,s=t.movable&&e===F;e=r||s?e:B,t.dragMode=e,Te(n,R,e),Le(n,C,r),Le(n,q,s),t.cropBoxMovable||(Te(i,R,e),Le(i,C,r),Le(i,q,s))}return this}},Ze=f.Cropper,Qe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,e),!t||!se.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=ve({},ae,pe(n)&&n),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,n,i;return t=e,i=[{key:"noConflict",value:function(){return window.Cropper=Ze,e}},{key:"setDefaults",value:function(e){ve(ae,pe(e)&&e)}}],(n=[{key:"init",value:function(){var e,t=this.element,n=t.tagName.toLowerCase();if(!t.cropper){if(t.cropper=this,"img"===n){if(this.isImg=!0,e=t.getAttribute("src")||"",this.originalUrl=e,!e)return;e=t.src}else"canvas"===n&&window.HTMLCanvasElement&&(e=t.toDataURL());this.load(e)}}},{key:"load",value:function(e){var t=this;if(e){this.url=e,this.imageData={};var n=this.element,i=this.options;if(i.rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer)if(ie.test(e))re.test(e)?this.read((r=e.replace(We,""),s=atob(r),a=new ArrayBuffer(s.length),_e(o=new Uint8Array(a),(function(e,t){o[t]=s.charCodeAt(t)})),a)):this.clone();else{var r,s,a,o,l=new XMLHttpRequest,u=this.clone.bind(this);this.reloading=!0,this.xhr=l,l.onabort=u,l.onerror=u,l.ontimeout=u,l.onprogress=function(){l.getResponseHeader("content-type")!==te&&l.abort()},l.onload=function(){t.read(l.response)},l.onloadend=function(){t.reloading=!1,t.xhr=null},i.checkCrossOrigin&&Re(e)&&n.crossOrigin&&(e=Ie(e)),l.open("GET",e),l.responseType="arraybuffer",l.withCredentials="use-credentials"===n.crossOrigin,l.send()}else this.clone()}}},{key:"read",value:function(e){var t=this.options,n=this.imageData,i=function(e){var t,n=new DataView(e);try{var i,r,s;if(255===n.getUint8(0)&&216===n.getUint8(1))for(var a=n.byteLength,o=2;o+1<a;){if(255===n.getUint8(o)&&225===n.getUint8(o+1)){r=o;break}o+=1}if(r){var l=r+10;if("Exif"===function(e,t,n){var i="";n+=t;for(var r=t;r<n;r+=1)i+=Ue(e.getUint8(r));return i}(n,r+4,4)){var u=n.getUint16(l);if(((i=18761===u)||19789===u)&&42===n.getUint16(l+2,i)){var c=n.getUint32(l+4,i);c>=8&&(s=l+c)}}}if(s){var d,h,p=n.getUint16(s,i);for(h=0;h<p;h+=1)if(d=s+12*h+2,274===n.getUint16(d,i)){d+=8,t=n.getUint16(d,i),n.setUint16(d,1,i);break}}}catch(e){t=1}return t}(e),r=0,s=1,a=1;if(i>1){this.url=function(e,t){for(var n=[],i=new Uint8Array(e);i.length>0;)n.push(Ue.apply(null,ge(i.subarray(0,8192)))),i=i.subarray(8192);return"data:".concat("image/jpeg",";base64,").concat(btoa(n.join("")))}(e);var o=function(e){var t=0,n=1,i=1;switch(e){case 2:n=-1;break;case 3:t=-180;break;case 4:i=-1;break;case 5:t=90,i=-1;break;case 6:t=90;break;case 7:t=90,n=-1;break;case 8:t=-90}return{rotate:t,scaleX:n,scaleY:i}}(i);r=o.rotate,s=o.scaleX,a=o.scaleY}t.rotatable&&(n.rotate=r),t.scalable&&(n.scaleX=s,n.scaleY=a),this.clone()}},{key:"clone",value:function(){var e=this.element,t=this.url,n=e.crossOrigin,i=t;this.options.checkCrossOrigin&&Re(t)&&(n||(n="anonymous"),i=Ie(t)),this.crossOrigin=n,this.crossOriginUrl=i;var r=document.createElement("img");n&&(r.crossOrigin=n),r.src=i||t,r.alt=e.alt||"The image to crop",this.image=r,r.onload=this.start.bind(this),r.onerror=this.stop.bind(this),ke(r,O),e.parentNode.insertBefore(r,e.nextSibling)}},{key:"start",value:function(){var e=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;var n=f.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(f.navigator.userAgent),i=function(t,n){ve(e.imageData,{naturalWidth:t,naturalHeight:n,aspectRatio:t/n}),e.initialImageData=ve({},e.imageData),e.sizing=!1,e.sized=!0,e.build()};if(!t.naturalWidth||n){var r=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=r,r.onload=function(){i(r.width,r.height),n||s.removeChild(r)},r.src=t.src,n||(r.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(r))}else i(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var e=this.image;e.onload=null,e.onerror=null,e.parentNode.removeChild(e),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var e=this.element,t=this.options,n=this.image,i=e.parentNode,r=document.createElement("div");r.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var s=r.querySelector(".".concat(v,"-container")),a=s.querySelector(".".concat(v,"-canvas")),o=s.querySelector(".".concat(v,"-drag-box")),l=s.querySelector(".".concat(v,"-crop-box")),u=l.querySelector(".".concat(v,"-face"));this.container=i,this.cropper=s,this.canvas=a,this.dragBox=o,this.cropBox=l,this.viewBox=s.querySelector(".".concat(v,"-view-box")),this.face=u,a.appendChild(n),ke(e,A),i.insertBefore(s,e.nextSibling),this.isImg||Me(n,O),this.initPreview(),this.bind(),t.initialAspectRatio=Math.max(0,t.initialAspectRatio)||NaN,t.aspectRatio=Math.max(0,t.aspectRatio)||NaN,t.viewMode=Math.max(0,Math.min(3,Math.round(t.viewMode)))||0,ke(l,A),t.guides||ke(l.getElementsByClassName("".concat(v,"-dashed")),A),t.center||ke(l.getElementsByClassName("".concat(v,"-center")),A),t.background&&ke(s,"".concat(v,"-bg")),t.highlight||ke(u,N),t.cropBoxMovable&&(ke(u,q),Te(u,R,y)),t.cropBoxResizable||(ke(l.getElementsByClassName("".concat(v,"-line")),A),ke(l.getElementsByClassName("".concat(v,"-point")),A)),this.render(),this.ready=!0,this.setDragMode(t.dragMode),t.autoCrop&&this.crop(),this.setData(t.data),me(t.ready)&&Ae(e,K,t.ready,{once:!0}),Oe(e,K)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),Me(this.element,A))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&l(t.prototype,n),i&&l(t,i),e}();ve(Qe.prototype,Ve,Ge,$e,Je,Xe,Ke);const et=Qe;n(72063);{class e extends((0,s.P)([r.z],Nuxeo.Element)){static get is(){return"nuxeo-image-viewer"}static get properties(){return{src:{type:String},controls:{type:Boolean,value:!1},zoomOnWheel:{type:Boolean,value:!1},responsive:{type:Boolean,value:!1},_fitToRealSize:{type:Boolean,value:!1}}}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/viewers/nuxeo-image-viewer.js`}}static get template(){return i.d`
        <link rel="stylesheet" href="vendor/cropperjs/dist/cropper.css" />
        <style>
          :host {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
          }

          #canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          #toolbar {
            position: absolute;
            bottom: 16px;
            max-width: 300px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            z-index: 25;
            text-align: center;
            padding: 2px;
            border-radius: 4px;
            background-color: rgba(0, 0, 0, 0.5);
          }

          paper-icon-button {
            width: 34px;
            height: 34px;
            color: white !important;
            --paper-icon-button-ink-color: white;
          }

          #image {
            display: none;
            max-width: 100%;
            max-height: 100%;
          }
        </style>

        <div id="canvas">
          <img id="image" src$="[[src]]" on-load="_init" />
          <dom-if if="[[_isToolbarVisible(controls, src, _el)]]">
            <template>
              <div id="toolbar">
                <paper-icon-button on-click="_click" icon="zoom-out" data-action="zoom-out"></paper-icon-button>
                <paper-icon-button
                  on-click="_click"
                  icon="[[_getFitIcon(_fitToRealSize)]]"
                  data-action$="[[_computeFitAction(_fitToRealSize)]]"
                >
                </paper-icon-button>
                <paper-icon-button on-click="_click" icon="zoom-in" data-action="zoom-in"></paper-icon-button>
                <paper-icon-button on-click="_click" icon="image:rotate-left" data-action="rotate-left">
                </paper-icon-button>
                <paper-icon-button on-click="_click" icon="image:rotate-right" data-action="rotate-right">
                </paper-icon-button>
              </div>
            </template>
          </dom-if>
        </div>
      `}ready(){super.ready(),this.addEventListener("iron-resize",this._resize)}_init(){if(this._el&&this._el.destroy(),this.src){const e={autoCrop:!1,background:!1,checkCrossOrigin:!1,checkOrientation:!1,dragMode:"move",responsive:!1,restore:!1,toggleDragModeOnDblclick:!1,viewMode:1,zoomOnWheel:this.zoomOnWheel,zoom:e=>this._verifyZoomRatio(e)};this._el=new et(this.$.image,e)}}_click(e){switch(e.target.dataset.action||e.target.parentNode.dataset.action){case"zoom-in":this._el.zoom(.1);break;case"zoom-out":this._el.zoom(-.1);break;case"fit-to-viewer":this._el.zoomTo(this._getOriginalZoomRatio());break;case"fit-to-real-size":this._el.zoomTo(1);break;case"rotate-left":this._el.rotate(-90);break;case"rotate-right":this._el.rotate(90)}}_computeFitAction(e){return e?"fit-to-viewer":"fit-to-real-size"}_getFitIcon(e){return`nuxeo:${this._computeFitAction(e)}`}_getOriginalZoomRatio(){if(this._el){const e=this._el.initialCanvasData;return e.width/e.naturalWidth}}_resize(){this._el&&this._isCanvasVisible()&&(this._el.resize(),this._el.zoomTo(this._getOriginalZoomRatio()),this._fitToRealSize=!1)}_verifyZoomRatio(e){if(this._el&&e&&e.detail&&e.detail.ratio){const t=5;this._fitToRealSize=this._getOriginalZoomRatio().toFixed(t)!==e.detail.ratio.toFixed(t)}}_isCanvasVisible(){const{canvas:e}=this.$;return e&&0!==e.offsetWidth&&0!==e.offsetHeight}_isToolbarVisible(e,t,n){return e&&t&&n}}customElements.define(e.is,e),Nuxeo.ImageViewer=e}},75953:(e,t,n)=>{"use strict";var i=n(66538);n(36037);{class e extends Nuxeo.Element{static get template(){return i.d`
        <style>
          :host {
            display: block;
            @apply --nuxeo-pdf-viewer-layout;
          }

          iframe {
            width: 100%;
            height: 100%;
            border: 0;
            @apply --nuxeo-pdf-viewer-iframe;
          }
        </style>

        <iframe src$="[[_path(src)]]"></iframe>
      `}static get is(){return"nuxeo-pdf-viewer"}static get properties(){return{src:{type:String}}}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/viewers/nuxeo-pdf-viewer.js`}}_path(e){const t=document.createElement("a");return t.href=e,this.resolveUrl(`../vendor/pdfjs/web/viewer.html?file=${encodeURI(t.href)}`)}}customElements.define(e.is,e),Nuxeo.PDFViewer=e}},24400:(e,t,n)=>{"use strict";var i=n(66538);n(36037),n(75343),n(85621),n(55689);{class e extends Nuxeo.Element{static get template(){return i.d`
        <style>
          :host {
            display: block;
            position: relative;
          }

          #container {
            display: block;
            width: 100%;
            height: 100%;
            @apply --layout-vertical;
          }

          #video {
            background: var(--primary-background-color);
            max-height: 100%;
            width: 100%;
            outline: none;
            @apply --layout-flex;
          }

          #video.hasStoryboard {
            max-height: calc(100% - 110px);
          }

          #storyboard {
            background: var(--primary-background-color);
            max-height: 110px;
          }

          #thumbnails {
            position: absolute;
            left: 0;
            right: 0;
            overflow-x: auto;
            @apply --layout-horizontal;
          }

          .thumbnail {
            cursor: pointer;
            height: 85px;
            padding: 4px 4px 2px 0;
          }
        </style>

        <div id="container">
          <video
            id="video"
            controls$="[[controls]]"
            width="[[width]]"
            height="[[height]]"
            preload="[[preload]]"
            poster="[[poster]]"
          >
            <dom-repeat items="[[sources]]" as="source">
              <template>
                <source src="[[source.data]]" type="[[source.type]]" />
              </template>
            </dom-repeat>
          </video>

          <dom-if if="[[_hasStoryboard(storyboard)]]">
            <template>
              <div id="storyboard">
                <div id="thumbnails">
                  <dom-repeat items="[[storyboard]]" as="thumbnail">
                    <template>
                      <img class="thumbnail" on-click="_jumpTo" src="[[thumbnail.content.data]]" />
                    </template>
                  </dom-repeat>
                </div>
              </div>
            </template>
          </dom-if>
        </div>
      `}static get is(){return"nuxeo-video-viewer"}static get properties(){return{preload:{type:String,value:"auto"},controls:{type:Boolean,value:!1},poster:String,sources:Object,storyboard:{type:Array,value:[]}}}play(){this.$.video.play()}stop(){this.$.video.pause(),this.$.video.currentTime=0}pause(){this.$.video.pause()}isPaused(){return this.$.video.paused}_hasStoryboard(){const e=this.storyboard&&this.storyboard.length>0;return e?this.$.video.classList.add("hasStoryboard"):this.$.video.classList.remove("hasStoryboard"),e}_jumpTo(e){this.$.video.currentTime=e.model.thumbnail.timecode}}customElements.define(e.is,e),Nuxeo.VideoViewer=e}},39343:(e,t,n)=>{"use strict";n(62306),n(82545),n(60925),n(36037),n(24004),n(12052),n(55689);var i=n(66538),r=n(93426),s=n(72475);{class e extends((0,r.P)([s.I],Nuxeo.Element)){static get template(){return i.d`
        <style include="iron-flex iron-flex-alignment">
          :host {
            display: block;
            position: relative;
            padding-bottom: 8px;
          }

          [hidden] {
            display: none !important;
          }

          :host([invalid]) .label,
          .error {
            color: var(--paper-input-container-invalid-color, #de350b);
          }

          :host([invalid]) .error {
            opacity: 1;
            font-size: 0.923rem;
          }

          .label {
            @apply --nuxeo-label;
          }

          .label[required]::after {
            display: inline-block;
            content: '*';
            margin-left: 4px;
            color: var(--paper-input-container-invalid-color, #de350b);
            font-size: 1.2em;
          }

          paper-checkbox {
            margin-top: 10px;
          }
        </style>

        <nuxeo-operation id="op" op="Directory.SuggestEntries"></nuxeo-operation>

        <label class="label" hidden$="[[!label]]" required$="[[required]]">[[label]]</label>

        <iron-selector
          attr-for-selected="name"
          multi
          selected-attribute="checked"
          class="layout vertical flex"
          selected-values="{{_selected}}"
          on-selected-items-changed="_updateItems"
        >
          <dom-repeat items="[[_entries]]">
            <template>
              <paper-checkbox
                name="[[idFunction(item)]]"
                data-index="[[index]]"
                checked="[[item.checked]]"
                disabled="[[readonly]]"
              >
                [[format(item)]]
              </paper-checkbox>
            </template>
          </dom-repeat>
        </iron-selector>

        <label class="error" hidden$="[[!invalid]]">[[errorMessage]]</label>
      `}static get is(){return"nuxeo-directory-checkbox"}static get properties(){return{selectedItems:{type:Array,notify:!0},value:{type:Array,notify:!0},_selected:{type:Array,value:()=>[]}}}_updateItems(e){if(this._entries&&e.detail&&e.detail.value){const t=[],n=[];for(let i=0;i<e.detail.value.length;i++){const r=this._entries[e.detail.value[i].dataIndex];t.push(r),n.push(this.idFunction(r))}this.selectedItems=t,this.value=n}}_getValidity(){return!this.required||this.value&&this.value.length>0}_isChecked(e){const t=(this.value&&this.value.length>0?this.value:null)||this.selectedItems;return t&&t.some((t=>this.idFunction(t)===this.idFunction(e)&&(this._selected.push(this.idFunction(e)),!0)))}}customElements.define(e.is,e),Nuxeo.DirectoryCheckbox=e}},39901:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(36037),n(24004),n(58683),n(40629),n(55689),n(72475));{class e extends((0,r.P)([s.I],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
            position: relative;
            padding-bottom: 8px;
          }

          [hidden] {
            display: none !important;
          }

          :host([invalid]) .label,
          .error {
            color: var(--paper-input-container-invalid-color, #de350b);
          }

          :host([invalid]) .error {
            opacity: 1;
            font-size: 0.923rem;
          }

          .label {
            @apply --nuxeo-label;
          }

          .label[required]::after {
            display: inline-block;
            content: '*';
            margin-left: 4px;
            color: var(--paper-input-container-invalid-color, #de350b);
            font-size: 1.2em;
          }

          paper-checkbox {
            margin-top: 10px;
          }

          paper-radio-group {
            --paper-radio-group-item-padding: 12px 8px 0px 0px;
          }
        </style>

        <nuxeo-operation id="op" op="Directory.SuggestEntries"></nuxeo-operation>

        <label class="label" hidden$="[[!label]]" required$="[[required]]">[[label]]</label>

        <paper-radio-group on-selected-item-changed="_updateItem" selected="{{_selected}}">
          <dom-repeat items="[[_entries]]">
            <template>
              <paper-radio-button
                name="[[idFunction(item)]]"
                data-index="[[index]]"
                checked="[[item.checked]]"
                disabled="[[readonly]]"
              >
                [[format(item)]]
              </paper-radio-button>
            </template>
          </dom-repeat>
        </paper-radio-group>

        <label class="error" hidden$="[[!invalid]]">[[errorMessage]]</label>
      `}static get is(){return"nuxeo-directory-radio-group"}static get properties(){return{selectedItem:{type:Object,notify:!0},value:{type:String,notify:!0,observer:"_updateSelected"},_selected:String}}_updateItem(e){e.detail&&e.detail.value&&(this.set("selectedItem",this._entries[e.detail.value.dataIndex]),this.set("value",this.idFunction(this.selectedItem)))}_updateSelected(){this.value&&this.value.length>0&&this.value!==this._selected&&(this._selected=this.value)}_getValidity(){return!this.required||!!this.value}_isChecked(e){const t=(this.value&&this.value.length>0?this.value:null)||this.selectedItem;return!(!t||this.idFunction(t)!==this.idFunction(e)||(this._selected=this.idFunction(e),0))}}customElements.define(e.is,e),Nuxeo.DirectoryRadioGroup=e}},77416:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=n(83842),a=n(60925),o=(n(36037),n(69699)),l=n(41608),u=n(79223);{const e={};class t extends((0,r.P)([l.mB,o.e,s.V,a.x],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }
        </style>

        <nuxeo-selectivity
          id="s2"
          operation="[[operation]]"
          label="[[label]]"
          min-chars="[[minChars]]"
          frequency="[[frequency]]"
          multiple="[[multiple]]"
          params="[[_computeParams(params.*, directoryName, dbl10n)]]"
          placeholder="[[placeholder]]"
          error-message="[[errorMessage]]"
          readonly="[[readonly]]"
          value="{{value}}"
          selected-items="{{selectedItems}}"
          selected-item="{{selectedItem}}"
          selection-formatter="[[selectionFormatter]]"
          required="[[required]]"
          invalid="[[invalid]]"
          resolve-entry="[[resolveEntry]]"
          stay-open-on-select="[[stayOpenOnSelect]]"
          id-function="[[idFunction]]"
          query-results-filter="[[queryResultsFilter]]"
        >
        </nuxeo-selectivity>
      `}static get is(){return"nuxeo-directory-suggestion"}static get properties(){return{directoryName:{type:String},dbl10n:{type:Boolean,value:!1},label:String,canSelectParent:Boolean,operation:{type:String,value:"Directory.SuggestEntries"},params:Object,value:{type:String,notify:!0},multiple:{type:Boolean,value:!1},stayOpenOnSelect:{type:Boolean,value:!1},readonly:{type:Boolean,value:!1},idFunction:{type:Function,value(){return this._idFunction.bind(this)}},minChars:{type:Number,value:3},frequency:Number,placeholder:String,errorMessage:String,selectedItems:{type:Array,notify:!0},selectedItem:{type:Object,notify:!0},selectionFormatter:{type:Function,value(){return this._selectionFormatter.bind(this)}},separator:{type:String,value:"/"},resolveEntry:{type:Function,value(){return this._resolveEntry.bind(this)}},queryResultsFilter:Function}}_getValidity(){return this.$.s2._getValidity()}_computeParams(){return Object.assign({},{directoryName:this.directoryName,dbl10n:this.dbl10n,canSelectParent:this.canSelectParent,localize:!0,lang:window.nuxeo.I18n.language?window.nuxeo.I18n.language.split("-")[0]:"en"},this.params)}_getItemKey(e){return`${this.directoryName}:${this.idFunction(e)}`}_selectionFormatter(t){if("string"!=typeof t){const n=this._getItemKey(t),i=e[n];(!i||!i.computedId&&t.computedId)&&(e[n]=t)}return(0,u.r)(t.absoluteLabel||t.displayLabel)}_resolveEntry(e){return{id:this.idFunction(e),displayLabel:this._fetchLabel(e)}}_idFunction(e){if("string"==typeof e)return e;if(e.computedId)return e.computedId;let t=e.id||e.uid;const n=e.properties&&e.properties.parent;return n&&(t=`${this._idFunction(n)}${this.separator}${t}`),t}_fetchLabel(t){const n="string"==typeof t&&e[this._getItemKey(t)]||t;return n.absoluteLabel||n.displayLabel||this.formatDirectory(n,this.separator)}}customElements.define(t.is,t),Nuxeo.DirectorySuggestion=t}},72475:(e,t,n)=>{"use strict";n.d(t,{I:()=>s}),n(76176);var i=n(83842),r=n(60925);const s=[n(41608).mB,i.V,r.x,{properties:{directoryName:{type:String},dbl10n:{type:Boolean,value:!1},label:String,canSelectParent:Boolean,readonly:{type:Boolean,value:!1},idFunction:{type:Function,value(){return this._idFunction.bind(this)}},errorMessage:String,format:{type:Function,value(){return this._formatter.bind(this)}},_entries:Array},observers:["_fetchEntries(directoryName)"],_fetchEntries(){this.directoryName&&(this.value=[],this.async((()=>{this.$.op.params={directoryName:this.directoryName,dbl10n:this.dbl10n,canSelectParent:this.canSelectParent,localize:!0,lang:window.nuxeo.I18n.language?window.nuxeo.I18n.language.split("-")[0]:"en"},this.$.op.execute().then((e=>{this._entries=[],e.forEach((e=>{this._populate(e)})),this.dispatchEvent(new CustomEvent("directory-entries-loaded",{composed:!0,bubbles:!0}))}))})))},_formatter:e=>e.absoluteLabel||e.displayLabel,_idFunction:e=>e.id||e.computedId||e.uid,_populate(e){!this.canSelectParent&&e.children||(e.checked=this._isChecked(e),this._entries.push(e)),e.children&&e.children.forEach((e=>{this._populate(e)}))}}]},49818:(e,t,n)=>{"use strict";var i=n(60925),r=(n(36037),n(24004),n(66538)),s=n(93426),a=n(83842),o=n(5453),l=n(79223);{class e extends((0,s.P)([a.V,i.x,o.N],Nuxeo.Element)){static get template(){return r.d`
        <style>
          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }
        </style>

        <nuxeo-operation id="op" op="Document.FetchByProperty"></nuxeo-operation>

        <nuxeo-selectivity
          id="s2"
          operation="[[operation]]"
          label="[[label]]"
          min-chars="[[minChars]]"
          frequency="[[frequency]]"
          multiple="[[multiple]]"
          params="[[_computeParams(params.*, pageProvider, schemas, repository)]]"
          placeholder="[[placeholder]]"
          error-message="[[errorMessage]]"
          readonly="[[readonly]]"
          value="{{value}}"
          selected-items="{{selectedItems}}"
          selected-item="{{selectedItem}}"
          selection-formatter="[[selectionFormatter]]"
          result-formatter="[[resultFormatter]]"
          required="[[required]]"
          invalid="[[invalid]]"
          init-selection="[[initSelection]]"
          id-function="[[_idFunction]]"
          stay-open-on-select="[[stayOpenOnSelect]]"
          headers="[[headers]]"
          enrichers="[[enrichers]]"
          query-results-filter="[[queryResultsFilter]]"
        >
        </nuxeo-selectivity>
      `}static get is(){return"nuxeo-document-suggestion"}static get properties(){return{pageProvider:{type:String,value:"default_document_suggestion"},schemas:{type:Array,value:["*"]},repository:{type:String,value:"default"},label:String,operation:{type:String,value:"Repository.PageProvider"},params:Object,value:{type:String,notify:!0},multiple:{type:Boolean,value:!1},stayOpenOnSelect:{type:Boolean,value:!1},readonly:{type:Boolean,value:!1},minChars:{type:Number,value:3},frequency:Number,placeholder:String,errorMessage:String,selectedItems:{type:Array,notify:!0},selectedItem:{type:Object,notify:!0},selectionFormatter:{type:Function,value(){return this._selectionFormatter.bind(this)}},resultFormatter:{type:Function,value(){return this._resultFormatter.bind(this)}},idProperty:{type:String,value:"ecm:uuid"},query:{type:String,value:null},_idFunction:{type:Function,value(){return this._docIdFunction.bind(this)}},initSelection:{type:Function,value(){return this._initSelection.bind(this)}},enrichers:{type:String,value:""},headers:{type:Object,value:null},queryResultsFilter:Function}}_getValidity(){return this.$.s2._getValidity()}_computeParams(){return Object.assign({},{documentSchemas:this.schemas,repository:this.repository,providerName:this.pageProvider,pageProviderName:this.pageProvider,page:0,pageSize:20},this.params)}_selectionFormatter(e){return"string"==typeof e?`<span>${(0,l.r)(e)}</span>`:`<a href="${this.urlFor(e)}">${(0,l.r)(e.title)}</a>`}_resultFormatter(e){return`${(0,l.r)(e.title)}<br/>${(0,l.r)(e.path)}`}_initSelection(e,t){if(e){const n=this.multiple?e.some((e=>"string"!=typeof e&&"object"!=typeof e&&!e.title)):"string"!=typeof e&&"object"!=typeof e&&!e.title,i=this.multiple?e.length>0&&e.every((e=>"string"==typeof e&&e.length>0)):"string"==typeof e&&e.length>0;if(!n&&i)return this._resolveDocs(e,t);if(!n&&!i)return t(e);console.warn("Unable to resolve such entry. Write your own resolver")}}_resolveDocs(e,t){this.$.op.params={values:e,property:this.idProperty,query:this.query},this.$.op.execute().then((n=>{if(this.multiple)if(n.entries.length<e.length){const i=e.map((e=>n.entries.find((t=>this._idFunction(t)===e))||e));t(i)}else t(n.entries);else t(n.entries.length>0?n.entries[0]:e)}))}_docIdFunction(e){return"string"==typeof e?e:"ecm:uuid"===this.idProperty?e.uid:"ecm:path"===this.idProperty?e.path:e.properties[this.idProperty]}}customElements.define(e.is,e),Nuxeo.DocumentSuggestion=e}},59088:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=n(83842),a=(n(43384),n(87697),n(93366),n(60925)),o=(n(587),n(36037),n(35266),n(85621),n(55689),n(41608)),l=(n(72063),n(9986));{class e extends((0,r.P)([l.S,o.mB,s.V,a.x],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            @apply --layout-flex;
          }

          [hidden] {
            display: none;
          }

          #dropZone.hover {
            @apply --nuxeo-drop-zone-hover;
          }

          a {
            @apply --nuxeo-link;
          }

          a:hover {
            @apply --nuxeo-link-hover;
          }

          :host([required]) #button::after {
            display: inline-block;
            content: '*';
            margin-left: 4px;
            color: var(--paper-input-container-invalid-color, #de350b);
          }

          :host([invalid]) paper-button {
            color: var(--paper-input-container-invalid-color, #de350b);
            margin-bottom: 5px;
          }

          :host([invalid]) .error {
            color: var(--paper-input-container-invalid-color, #de350b);
          }

          #button {
            margin-bottom: 5px;
          }

          iron-icon {
            cursor: pointer;
          }
        </style>

        <nuxeo-connection id="nx"></nuxeo-connection>

        <input
          hidden
          id="input"
          type="file"
          multiple$="[[multiple]]"
          accept$="[[accept]]"
          on-change="_filesChanged"
          required$="[[required]]"
        />

        <div id="dropZone" hidden$="[[readonly]]">
          <dom-if if="[[!uploading]]">
            <template>
              <paper-button id="button" raised on-click="_pick">
                <iron-icon icon="nuxeo:upload"></iron-icon>
                <span>[[i18n('file.upload')]]</span>
              </paper-button>
            </template>
          </dom-if>
        </div>

        <label class="error" hidden$="[[!invalid]]">[[errorMessage]]</label>

        <dom-if if="[[_hasSingleValue(multiple, value)]]">
          <template>
            <div class="file">
              <div class="layout horizontal">
                <a href$="[[_data(value)]]" download="[[_fileName(value)]]">[[_fileName(value)]]</a>
                <iron-icon
                  icon="nuxeo:remove"
                  title="[[i18n('command.remove')]]"
                  on-click="remove"
                  hidden$="[[readonly]]"
                >
                </iron-icon>
              </div>
            </div>
          </template>
        </dom-if>

        <dom-if if="[[multiple]]">
          <template>
            <dom-repeat items="[[value]]" as="file">
              <template>
                <div class="file">
                  <div class="layout horizontal">
                    <a href$="[[_data(file)]]" download="[[_fileName(file)]]">[[_fileName(file)]]</a>
                    <iron-icon
                      icon="nuxeo:remove"
                      title="[[i18n('command.remove')]]"
                      on-click="remove"
                      hidden$="[[readonly]]"
                    >
                    </iron-icon>
                  </div>
                </div>
              </template>
            </dom-repeat>
          </template>
        </dom-if>

        <dom-if if="[[readonly]]">
          <template>
            <label class="empty" hidden$="[[!_hasValue(value)]]">[[emptyLabel]]</label>
          </template>
        </dom-if>
      `}static get is(){return"nuxeo-file"}static get properties(){return{value:{type:Object,notify:!0},multiple:{type:Boolean,value:!1},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},required:{type:Boolean,value:!1,reflectToAttribute:!0},emptyLabel:String,errorMessage:String}}ready(){super.ready(),this.connection=this.$.nx,this.setupDropZone(this.$.dropZone),this.addEventListener("batchFinished",this._updateValue)}disconnectedCallback(){super.disconnectedCallback(),this.teardownDropZone()}_filesChanged(e){this.uploadFiles(e.target.files)}_pick(){this.$.input.click()}_updateValue(){if(this.multiple){this.value&&Array.isArray(this.value)||(this.value=[]);for(let e=0;e<this.files.length;e++)this.push("value",{"upload-batch":this.batchId,"upload-fileId":e.toString(),_name:this.files[e].name,_url:URL.createObjectURL(this.files[e])})}else this.value={"upload-batch":this.batchId,"upload-fileId":(this.files.length-1).toString(),_name:this.files[this.files.length-1].name,_url:URL.createObjectURL(this.files[this.files.length-1])}}remove(e){this.$.input.value=null,this.multiple?this.splice("value",e.model.__data.index,1):(this.value=null,this.files=null)}_fileName(e){return e.name||e._name||"upload-fileId"in e&&this.files[Number(e["upload-fileId"])].name}_data(e){return e.data||e._url||"upload-fileId"in e&&URL.createObjectURL(this.files[Number(e["upload-fileId"])])}_getValidity(){return!this.required||this._hasValue()}_hasSingleValue(){return!this.multiple&&this._hasValue()}_hasValue(){return this.multiple?!!this.value&&this.value.length>0:!!this.value}}customElements.define(e.is,e),Nuxeo.File=e}},64091:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(95671),n(36037),n(85621),n(5453));n(23550),n(39059);{class e extends((0,r.P)([s.N],Nuxeo.Element)){static get template(){return i.d`
        <style>
          a {
            @apply --nuxeo-link;
          }

          a:hover {
            @apply --nuxeo-link-hover;
          }

          .preserve-white-space {
            white-space: pre;
          }
        </style>
        <nuxeo-tag icon="nuxeo:group">
          <dom-if if="[[!disabled]]">
            <template>
              <a class="preserve-white-space" href$="[[_href(group)]]" on-click="_preventPropagation"
                >[[_label(group)]]</a
              >
            </template>
          </dom-if>
          <dom-if if="[[disabled]]">
            <template>
              <span class="preserve-white-space">[[_label(group)]]</span>
            </template>
          </dom-if>
          <dom-if if="[[_isEntity(group)]]">
            <template>
              <nuxeo-tooltip position="top" offset="0" animation-delay="0">[[_name(group)]]</nuxeo-tooltip>
            </template>
          </dom-if>
        </nuxeo-tag>
      `}static get is(){return"nuxeo-group-tag"}static get properties(){return{group:Object,disabled:{type:Boolean,value:!1}}}_isEntity(e){return e&&e["entity-type"]&&("group"===e["entity-type"]||"document"===e["entity-type"]&&"group"===e.type)}_name(e){return this._isEntity(e)?e.groupname||e.properties["group:groupname"]:e.name?e.name.replace("group:",""):e.replace("group:","")}_label(e){return this._isEntity(e)?e.grouplabel||e.properties["group:grouplabel"]||this._name(e):e.label?e.label.replace("group:",""):e.replace("group:","")}_href(e){return this.urlFor("group",this._name(e))}_preventPropagation(e){e.stopPropagation()}}customElements.define(e.is,e),Nuxeo.GroupTag=e}},7815:(e,t,n)=>{"use strict";var i=n(66538),r=n(30032),s=n(16896);n(36037),n(26011);const a=i.d`
  <dom-module id="quill-snow">
    <template>
      <style>
        /*!
 * Quill Editor v2.0.0-dev.3
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
        .ql-container {
          box-sizing: border-box;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 13px;
          height: 100%;
          margin: 0px;
          position: relative;
        }
        .ql-container.ql-disabled .ql-tooltip {
          visibility: hidden;
        }
        .ql-container:not(.ql-disabled) li[data-list='checked'] > .ql-ui,
        .ql-container:not(.ql-disabled) li[data-list='unchecked'] > .ql-ui {
          cursor: pointer;
        }
        .ql-clipboard {
          left: -100000px;
          height: 1px;
          overflow-y: hidden;
          position: absolute;
          top: 50%;
        }
        .ql-clipboard p {
          margin: 0;
          padding: 0;
        }
        .ql-editor {
          box-sizing: border-box;
          counter-reset: list-0;
          line-height: 1.42;
          height: 100%;
          outline: none;
          overflow-y: auto;
          padding: 12px 15px;
          tab-size: 4;
          -moz-tab-size: 4;
          text-align: left;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .ql-editor > * {
          cursor: text;
        }
        .ql-editor p,
        .ql-editor ol,
        .ql-editor pre,
        .ql-editor blockquote,
        .ql-editor h1,
        .ql-editor h2,
        .ql-editor h3,
        .ql-editor h4,
        .ql-editor h5,
        .ql-editor h6 {
          margin: 0;
          padding: 0;
        }
        .ql-editor p,
        .ql-editor h1,
        .ql-editor h2,
        .ql-editor h3,
        .ql-editor h4,
        .ql-editor h5,
        .ql-editor h6 {
          counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        }
        .ql-editor table {
          border-collapse: collapse;
        }
        .ql-editor td {
          border: 1px solid #000;
          padding: 2px 5px;
        }
        .ql-editor ol {
          padding-left: 1.5em;
        }
        .ql-editor li {
          list-style-type: none;
          padding-left: 1.5em;
          position: relative;
        }
        .ql-editor li > .ql-ui:before {
          display: inline-block;
          margin-left: -1.5em;
          margin-right: 0.3em;
          text-align: right;
          white-space: nowrap;
          width: 1.2em;
        }
        .ql-editor li[data-list='checked'] > .ql-ui,
        .ql-editor li[data-list='unchecked'] > .ql-ui {
          color: #777;
        }
        .ql-editor li[data-list='bullet'] > .ql-ui:before {
          content: '\\2022';
        }
        .ql-editor li[data-list='checked'] > .ql-ui:before {
          content: '\\2611';
        }
        .ql-editor li[data-list='unchecked'] > .ql-ui:before {
          content: '\\2610';
        }
        .ql-editor li[data-list='ordered'] {
          counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
          counter-increment: list-0;
        }
        .ql-editor li[data-list='ordered'] > .ql-ui:before {
          content: counter(list-0, decimal) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-1 {
          counter-increment: list-1;
        }
        .ql-editor li[data-list='ordered'].ql-indent-1 > .ql-ui:before {
          content: counter(list-1, lower-alpha) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-1 {
          counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-2 {
          counter-increment: list-2;
        }
        .ql-editor li[data-list='ordered'].ql-indent-2 > .ql-ui:before {
          content: counter(list-2, lower-roman) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-2 {
          counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-3 {
          counter-increment: list-3;
        }
        .ql-editor li[data-list='ordered'].ql-indent-3 > .ql-ui:before {
          content: counter(list-3, decimal) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-3 {
          counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-4 {
          counter-increment: list-4;
        }
        .ql-editor li[data-list='ordered'].ql-indent-4 > .ql-ui:before {
          content: counter(list-4, lower-alpha) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-4 {
          counter-reset: list-5 list-6 list-7 list-8 list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-5 {
          counter-increment: list-5;
        }
        .ql-editor li[data-list='ordered'].ql-indent-5 > .ql-ui:before {
          content: counter(list-5, lower-roman) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-5 {
          counter-reset: list-6 list-7 list-8 list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-6 {
          counter-increment: list-6;
        }
        .ql-editor li[data-list='ordered'].ql-indent-6 > .ql-ui:before {
          content: counter(list-6, decimal) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-6 {
          counter-reset: list-7 list-8 list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-7 {
          counter-increment: list-7;
        }
        .ql-editor li[data-list='ordered'].ql-indent-7 > .ql-ui:before {
          content: counter(list-7, lower-alpha) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-7 {
          counter-reset: list-8 list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-8 {
          counter-increment: list-8;
        }
        .ql-editor li[data-list='ordered'].ql-indent-8 > .ql-ui:before {
          content: counter(list-8, lower-roman) '. ';
        }
        .ql-editor li[data-list='ordered'].ql-indent-8 {
          counter-reset: list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-9 {
          counter-increment: list-9;
        }
        .ql-editor li[data-list='ordered'].ql-indent-9 > .ql-ui:before {
          content: counter(list-9, decimal) '. ';
        }
        .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
          padding-left: 3em;
        }
        .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
          padding-left: 4.5em;
        }
        .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
          padding-right: 3em;
        }
        .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
          padding-right: 4.5em;
        }
        .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
          padding-left: 6em;
        }
        .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
          padding-left: 7.5em;
        }
        .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
          padding-right: 6em;
        }
        .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
          padding-right: 7.5em;
        }
        .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
          padding-left: 9em;
        }
        .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
          padding-left: 10.5em;
        }
        .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
          padding-right: 9em;
        }
        .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
          padding-right: 10.5em;
        }
        .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
          padding-left: 12em;
        }
        .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
          padding-left: 13.5em;
        }
        .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
          padding-right: 12em;
        }
        .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
          padding-right: 13.5em;
        }
        .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
          padding-left: 15em;
        }
        .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
          padding-left: 16.5em;
        }
        .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
          padding-right: 15em;
        }
        .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
          padding-right: 16.5em;
        }
        .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
          padding-left: 18em;
        }
        .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
          padding-left: 19.5em;
        }
        .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
          padding-right: 18em;
        }
        .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
          padding-right: 19.5em;
        }
        .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
          padding-left: 21em;
        }
        .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
          padding-left: 22.5em;
        }
        .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
          padding-right: 21em;
        }
        .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
          padding-right: 22.5em;
        }
        .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
          padding-left: 24em;
        }
        .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
          padding-left: 25.5em;
        }
        .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
          padding-right: 24em;
        }
        .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
          padding-right: 25.5em;
        }
        .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
          padding-left: 27em;
        }
        .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
          padding-left: 28.5em;
        }
        .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
          padding-right: 27em;
        }
        .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
          padding-right: 28.5em;
        }
        .ql-editor li.ql-direction-rtl {
          padding-right: 1.5em;
        }
        .ql-editor li.ql-direction-rtl > .ql-ui:before {
          margin-left: 0.3em;
          margin-right: -1.5em;
          text-align: left;
        }
        .ql-editor table {
          table-layout: fixed;
          width: 100%;
        }
        .ql-editor table td {
          outline: none;
        }
        .ql-editor .ql-code-block-container {
          font-family: monospace;
        }
        .ql-editor .ql-video {
          display: block;
          max-width: 100%;
        }
        .ql-editor .ql-video.ql-align-center {
          margin: 0 auto;
        }
        .ql-editor .ql-video.ql-align-right {
          margin: 0 0 0 auto;
        }
        .ql-editor .ql-bg-black {
          background-color: #000;
        }
        .ql-editor .ql-bg-red {
          background-color: #e60000;
        }
        .ql-editor .ql-bg-orange {
          background-color: #f90;
        }
        .ql-editor .ql-bg-yellow {
          background-color: #ff0;
        }
        .ql-editor .ql-bg-green {
          background-color: #008a00;
        }
        .ql-editor .ql-bg-blue {
          background-color: #06c;
        }
        .ql-editor .ql-bg-purple {
          background-color: #93f;
        }
        .ql-editor .ql-color-white {
          color: #fff;
        }
        .ql-editor .ql-color-red {
          color: #e60000;
        }
        .ql-editor .ql-color-orange {
          color: #f90;
        }
        .ql-editor .ql-color-yellow {
          color: #ff0;
        }
        .ql-editor .ql-color-green {
          color: #008a00;
        }
        .ql-editor .ql-color-blue {
          color: #06c;
        }
        .ql-editor .ql-color-purple {
          color: #93f;
        }
        .ql-editor .ql-font-serif {
          font-family: Georgia, Times New Roman, serif;
        }
        .ql-editor .ql-font-monospace {
          font-family: Monaco, Courier New, monospace;
        }
        .ql-editor .ql-size-small {
          font-size: 0.75em;
        }
        .ql-editor .ql-size-large {
          font-size: 1.5em;
        }
        .ql-editor .ql-size-huge {
          font-size: 2.5em;
        }
        .ql-editor .ql-direction-rtl {
          direction: rtl;
          text-align: inherit;
        }
        .ql-editor .ql-align-center {
          text-align: center;
        }
        .ql-editor .ql-align-justify {
          text-align: justify;
        }
        .ql-editor .ql-align-right {
          text-align: right;
        }
        .ql-editor .ql-ui {
          position: absolute;
        }
        .ql-editor.ql-blank::before {
          color: rgba(0, 0, 0, 0.6);
          content: attr(data-placeholder);
          font-style: italic;
          left: 15px;
          pointer-events: none;
          position: absolute;
          right: 15px;
        }
        .ql-snow.ql-toolbar:after,
        .ql-snow .ql-toolbar:after {
          clear: both;
          content: '';
          display: table;
        }
        .ql-snow.ql-toolbar button,
        .ql-snow .ql-toolbar button {
          background: none;
          border: none;
          cursor: pointer;
          display: inline-block;
          float: left;
          height: 24px;
          padding: 3px 5px;
          width: 28px;
        }
        .ql-snow.ql-toolbar button svg,
        .ql-snow .ql-toolbar button svg {
          float: left;
          height: 100%;
        }
        .ql-snow.ql-toolbar button:active:hover,
        .ql-snow .ql-toolbar button:active:hover {
          outline: none;
        }
        .ql-snow.ql-toolbar input.ql-image[type='file'],
        .ql-snow .ql-toolbar input.ql-image[type='file'] {
          display: none;
        }
        .ql-snow.ql-toolbar button:hover,
        .ql-snow .ql-toolbar button:hover,
        .ql-snow.ql-toolbar button:focus,
        .ql-snow .ql-toolbar button:focus,
        .ql-snow.ql-toolbar button.ql-active,
        .ql-snow .ql-toolbar button.ql-active,
        .ql-snow.ql-toolbar .ql-picker-label:hover,
        .ql-snow .ql-toolbar .ql-picker-label:hover,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active,
        .ql-snow.ql-toolbar .ql-picker-item:hover,
        .ql-snow .ql-toolbar .ql-picker-item:hover,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
          color: #06c;
        }
        .ql-snow.ql-toolbar button:hover .ql-fill,
        .ql-snow .ql-toolbar button:hover .ql-fill,
        .ql-snow.ql-toolbar button:focus .ql-fill,
        .ql-snow .ql-toolbar button:focus .ql-fill,
        .ql-snow.ql-toolbar button.ql-active .ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
        .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
          fill: #06c;
        }
        .ql-snow.ql-toolbar button:hover .ql-stroke,
        .ql-snow .ql-toolbar button:hover .ql-stroke,
        .ql-snow.ql-toolbar button:focus .ql-stroke,
        .ql-snow .ql-toolbar button:focus .ql-stroke,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
        .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
        .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
          stroke: #06c;
        }
        @media (pointer: coarse) {
          .ql-snow.ql-toolbar button:hover:not(.ql-active),
          .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
          }
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
          }
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
          .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
          .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
          }
        }
        .ql-snow {
          box-sizing: border-box;
        }
        .ql-snow * {
          box-sizing: border-box;
        }
        .ql-snow .ql-hidden {
          display: none;
        }
        .ql-snow .ql-out-bottom,
        .ql-snow .ql-out-top {
          visibility: hidden;
        }
        .ql-snow .ql-tooltip {
          position: absolute;
          transform: translateY(10px);
        }
        .ql-snow .ql-tooltip a {
          cursor: pointer;
          text-decoration: none;
        }
        .ql-snow .ql-tooltip.ql-flip {
          transform: translateY(-10px);
        }
        .ql-snow .ql-formats {
          display: inline-block;
          vertical-align: middle;
        }
        .ql-snow .ql-formats:after {
          clear: both;
          content: '';
          display: table;
        }
        .ql-snow .ql-stroke {
          fill: none;
          stroke: #444;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2;
        }
        .ql-snow .ql-stroke-miter {
          fill: none;
          stroke: #444;
          stroke-miterlimit: 10;
          stroke-width: 2;
        }
        .ql-snow .ql-fill,
        .ql-snow .ql-stroke.ql-fill {
          fill: #444;
        }
        .ql-snow .ql-empty {
          fill: none;
        }
        .ql-snow .ql-even {
          fill-rule: evenodd;
        }
        .ql-snow .ql-thin,
        .ql-snow .ql-stroke.ql-thin {
          stroke-width: 1;
        }
        .ql-snow .ql-transparent {
          opacity: 0.4;
        }
        .ql-snow .ql-direction svg:last-child {
          display: none;
        }
        .ql-snow .ql-direction.ql-active svg:last-child {
          display: inline;
        }
        .ql-snow .ql-direction.ql-active svg:first-child {
          display: none;
        }
        .ql-snow .ql-editor h1 {
          font-size: 2em;
        }
        .ql-snow .ql-editor h2 {
          font-size: 1.5em;
        }
        .ql-snow .ql-editor h3 {
          font-size: 1.17em;
        }
        .ql-snow .ql-editor h4 {
          font-size: 1em;
        }
        .ql-snow .ql-editor h5 {
          font-size: 0.83em;
        }
        .ql-snow .ql-editor h6 {
          font-size: 0.67em;
        }
        .ql-snow .ql-editor a {
          text-decoration: underline;
        }
        .ql-snow .ql-editor blockquote {
          border-left: 4px solid #ccc;
          margin-bottom: 5px;
          margin-top: 5px;
          padding-left: 16px;
        }
        .ql-snow .ql-editor code,
        .ql-snow .ql-editor .ql-code-block-container {
          background-color: #f0f0f0;
          border-radius: 3px;
        }
        .ql-snow .ql-editor .ql-code-block-container {
          margin-bottom: 5px;
          margin-top: 5px;
          padding: 5px 10px;
        }
        .ql-snow .ql-editor code {
          font-size: 85%;
          padding: 2px 4px;
        }
        .ql-snow .ql-editor .ql-code-block-container {
          background-color: #23241f;
          color: #f8f8f2;
          overflow: visible;
        }
        .ql-snow .ql-editor img {
          max-width: 100%;
        }
        .ql-snow .ql-picker {
          color: #444;
          display: inline-block;
          float: left;
          font-size: 14px;
          font-weight: 500;
          height: 24px;
          position: relative;
          vertical-align: middle;
        }
        .ql-snow .ql-picker-label {
          cursor: pointer;
          display: inline-block;
          height: 100%;
          padding-left: 8px;
          padding-right: 2px;
          position: relative;
          width: 100%;
        }
        .ql-snow .ql-picker-label::before {
          display: inline-block;
          line-height: 22px;
        }
        .ql-snow .ql-picker-options {
          background-color: #fff;
          display: none;
          min-width: 100%;
          padding: 4px 8px;
          position: absolute;
          white-space: nowrap;
        }
        .ql-snow .ql-picker-options .ql-picker-item {
          cursor: pointer;
          display: block;
          padding-bottom: 5px;
          padding-top: 5px;
        }
        .ql-snow .ql-picker.ql-expanded .ql-picker-label {
          color: #ccc;
          z-index: 2;
        }
        .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
          fill: #ccc;
        }
        .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
          stroke: #ccc;
        }
        .ql-snow .ql-picker.ql-expanded .ql-picker-options {
          display: block;
          margin-top: -1px;
          top: 100%;
          z-index: 1;
        }
        .ql-snow .ql-color-picker,
        .ql-snow .ql-icon-picker {
          width: 28px;
        }
        .ql-snow .ql-color-picker .ql-picker-label,
        .ql-snow .ql-icon-picker .ql-picker-label {
          padding: 2px 4px;
        }
        .ql-snow .ql-color-picker .ql-picker-label svg,
        .ql-snow .ql-icon-picker .ql-picker-label svg {
          right: 4px;
        }
        .ql-snow .ql-icon-picker .ql-picker-options {
          padding: 4px 0px;
        }
        .ql-snow .ql-icon-picker .ql-picker-item {
          height: 24px;
          width: 24px;
          padding: 2px 4px;
        }
        .ql-snow .ql-color-picker .ql-picker-options {
          padding: 3px 5px;
          width: 152px;
        }
        .ql-snow .ql-color-picker .ql-picker-item {
          border: 1px solid transparent;
          float: left;
          height: 16px;
          margin: 2px;
          padding: 0px;
          width: 16px;
        }
        .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
          position: absolute;
          margin-top: -9px;
          right: 0;
          top: 50%;
          width: 18px;
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
          content: attr(data-label);
        }
        .ql-snow .ql-picker.ql-header {
          width: 98px;
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item::before {
          content: 'Normal';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
          content: 'Heading 1';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
          content: 'Heading 2';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
          content: 'Heading 3';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
          content: 'Heading 4';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
          content: 'Heading 5';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
          content: 'Heading 6';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
          font-size: 2em;
        }
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
          font-size: 1.5em;
        }
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
          font-size: 1.17em;
        }
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
          font-size: 1em;
        }
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
          font-size: 0.83em;
        }
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
          font-size: 0.67em;
        }
        .ql-snow .ql-picker.ql-font {
          width: 108px;
        }
        .ql-snow .ql-picker.ql-font .ql-picker-label::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item::before {
          content: 'Sans Serif';
        }
        .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
          content: 'Serif';
        }
        .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
          content: 'Monospace';
        }
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
          font-family: Georgia, Times New Roman, serif;
        }
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
          font-family: Monaco, Courier New, monospace;
        }
        .ql-snow .ql-picker.ql-size {
          width: 98px;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item::before {
          content: 'Normal';
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
          content: 'Small';
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
          content: 'Large';
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
          content: 'Huge';
        }
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
          font-size: 10px;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
          font-size: 18px;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
          font-size: 32px;
        }
        .ql-snow .ql-color-picker.ql-background .ql-picker-item {
          background-color: #fff;
        }
        .ql-snow .ql-color-picker.ql-color .ql-picker-item {
          background-color: #000;
        }
        .ql-code-block-container {
          position: relative;
        }
        .ql-code-block-container .ql-ui {
          right: 5px;
          top: 5px;
        }
        .ql-toolbar.ql-snow {
          border: 1px solid #ccc;
          box-sizing: border-box;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          padding: 8px;
        }
        .ql-toolbar.ql-snow .ql-formats {
          margin-right: 15px;
        }
        .ql-toolbar.ql-snow .ql-picker-label {
          border: 1px solid transparent;
        }
        .ql-toolbar.ql-snow .ql-picker-options {
          border: 1px solid transparent;
          box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
        }
        .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
          border-color: #ccc;
        }
        .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
          border-color: #ccc;
        }
        .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
        .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
          border-color: #000;
        }
        .ql-toolbar.ql-snow + .ql-container.ql-snow {
          border-top: 0px;
        }
        .ql-snow .ql-tooltip {
          background-color: #fff;
          border: 1px solid #ccc;
          box-shadow: 0px 0px 5px #ddd;
          color: #444;
          padding: 5px 12px;
          white-space: nowrap;
        }
        .ql-snow .ql-tooltip::before {
          content: 'Visit URL:';
          line-height: 26px;
          margin-right: 8px;
        }
        .ql-snow .ql-tooltip input[type='text'] {
          display: none;
          border: 1px solid #ccc;
          font-size: 13px;
          height: 26px;
          margin: 0px;
          padding: 3px 5px;
          width: 170px;
        }
        .ql-snow .ql-tooltip a.ql-preview {
          display: inline-block;
          max-width: 200px;
          overflow-x: hidden;
          text-overflow: ellipsis;
          vertical-align: top;
        }
        .ql-snow .ql-tooltip a.ql-action::after {
          border-right: 1px solid #ccc;
          content: 'Edit';
          margin-left: 16px;
          padding-right: 8px;
        }
        .ql-snow .ql-tooltip a.ql-remove::before {
          content: 'Remove';
          margin-left: 8px;
        }
        .ql-snow .ql-tooltip a {
          line-height: 26px;
        }
        .ql-snow .ql-tooltip.ql-editing a.ql-preview,
        .ql-snow .ql-tooltip.ql-editing a.ql-remove {
          display: none;
        }
        .ql-snow .ql-tooltip.ql-editing input[type='text'] {
          display: inline-block;
        }
        .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
          border-right: 0px;
          content: 'Save';
          padding-right: 0px;
        }
        .ql-snow .ql-tooltip[data-mode='link']::before {
          content: 'Enter link:';
        }
        .ql-snow .ql-tooltip[data-mode='formula']::before {
          content: 'Enter formula:';
        }
        .ql-snow .ql-tooltip[data-mode='video']::before {
          content: 'Enter video:';
        }
        .ql-snow a {
          color: #06c;
        }
        /*
.ql-container.ql-snow {
  border: 1px solid #ccc;
}
*/
      </style>
    </template>
  </dom-module>
`;document.head.appendChild(a.content);{class e extends Nuxeo.Element{static get template(){return i.d`
        <style include="quill-snow">
          #editor {
            outline: none;
            height: 100%;
            min-height: 30em;
          }

          div#editor > * {
            margin-top: 0;
          }
        </style>

        <div id="editor"></div>
      `}static get is(){return"nuxeo-html-editor"}static get properties(){return{value:{type:String,notify:!0},placeholder:{type:String,value:"Type here..."},readOnly:{type:Boolean,value:!1,reflectToAttribute:!0},_editor:{type:Object}}}static get observers(){return["_valueChanged(value, _editor)","_readOnlyChanged(readOnly, _editor)"]}static get importMeta(){return{url:`${window.location.protocol}//${window.location.host}${window.location.pathname}/widgets/nuxeo-html-editor.js`}}ready(){super.ready();const{placeholder:e,readOnly:t}=this;this._editor=new Quill(this.$.editor,{theme:"snow",modules:{toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{align:""},{align:"center"},{align:"right"}],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],["blockquote"],[{list:"ordered"},{list:"bullet"}],["link","image"],["clean"]]},placeholder:e,readOnly:t}),this._editor.on("text-change",(()=>{this._debouncer=r.dx.debounce(this._debouncer,s.timeOut.after(200),(()=>this._updateValue()))}))}_updateValue(){this._internalChange=!0,this.value=this._editor.getSemanticHTML(),this._internalChange=!1}_valueChanged(){if(this._editor&&!this._internalChange){const e=this._editor.clipboard.convert({html:this.value});this._editor.setContents(e,Quill.sources.USER),this._editor.setSelection(0,Quill.sources.SILENT)}}_readOnlyChanged(){this._editor&&(this._editor.enable(!this.readOnly),this._editor.getModule("toolbar").container.style.display=this.readOnly?"none":"")}}customElements.define(e.is,e)}},37519:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=(n(43384),n(36037),n(24004),n(3632),n(41608));n(23550),n(43822);{class e extends((0,r.P)([s.mB],Nuxeo.Element)){static get template(){return i.d`
        <style include="nuxeo-action-button-styles"></style>

        <nuxeo-operation
          id="op"
          op="[[operation]]"
          input="[[input]]"
          params="[[params]]"
          sync-indexing$="[[syncIndexing]]"
          async$="[[async]]"
          poll-interval="[[pollInterval]]"
        >
        </nuxeo-operation>

        <div class="action" on-click="_execute">
          <paper-icon-button id="bt" icon="[[icon]]"></paper-icon-button>
          <span class="label" hidden$="[[!showLabel]]">[[i18n(label)]]</span>
          <nuxeo-tooltip>[[i18n(_tooltip)]]</nuxeo-tooltip>
        </div>
      `}static get is(){return"nuxeo-operation-button"}static get properties(){return{icon:String,label:String,tooltip:String,showLabel:{type:Boolean,value:!1},operation:String,input:Object,syncIndexing:Boolean,params:{type:Object,value:()=>({})},response:{type:Object,value:null,notify:!0},notification:{type:String},download:{type:Boolean,value:!1},event:{type:String,value:"operation-executed"},detail:{type:String},async:{type:Boolean,value:!1},pollInterval:{type:Number,value:1e3},errorLabel:{type:String},_tooltip:{type:String,computed:"_computeTooltip(tooltip, label)"}}}_execute(){this.$.op.execute().then((e=>{this.notification&&this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this.i18n(this.notification)}}));let t={response:e};this.detail&&(t="string"==typeof this.detail?JSON.parse(this.detail):this.detail),this.dispatchEvent(new CustomEvent(this.event,{composed:!0,bubbles:!0,detail:t})),this.download&&this._download(e)})).catch((e=>{if(this.dispatchEvent(new CustomEvent("notify",{composed:!0,bubbles:!0,detail:{message:this.errorLabel?this.i18n(this.errorLabel,e):e}})),404!==e.status)throw e}))}_download(e){const t=document.createElement("a");t.style="display: none",t.download="",t.href=e.url,document.body.appendChild(t),t.click(),document.body.removeChild(t)}_computeTooltip(e,t){return e||t}}customElements.define(e.is,e),Nuxeo.OperationButton=e}},87319:(e,t,n)=>{"use strict";var i=n(66538),r=n(93426),s=n(83842),a=n(60925),o=(n(36037),n(24004),n(3691),n(41608)),l=n(79223);{class e extends((0,r.P)([o.mB,s.V,a.x],Nuxeo.Element)){static get template(){return i.d`
        <style>
          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }
        </style>

        <nuxeo-selectivity
          id="s2"
          operation="[[operation]]"
          label="[[label]]"
          min-chars="[[minChars]]"
          tagging$="[[allowNewTags]]"
          multiple
          params="[[params]]"
          placeholder="[[placeholder]]"
          error-message="[[errorMessage]]"
          readonly="[[readonly]]"
          value="{{value}}"
          selected-items="{{selectedItems}}"
          required="[[required]]"
          invalid="[[invalid]]"
          new-entry-formatter="[[newEntryFormatter]]"
          result-formatter="[[resultFormatter]]"
          added-entry-handler="[[addedTagHandler]]"
          removed-entry-handler="[[removedTagHandler]]"
          init-selection="[[initSelection]]"
          stay-open-on-select="[[stayOpenOnSelect]]"
        >
        </nuxeo-selectivity>

        <nuxeo-operation id="addTagOp" op="Services.TagDocument" input="[[document.uid]]"></nuxeo-operation>

        <nuxeo-operation id="removeTagOp" op="Services.UntagDocument" input="[[document.uid]]"></nuxeo-operation>

        <paper-toast id="toast"></paper-toast>
      `}static get is(){return"nuxeo-tag-suggestion"}static get properties(){return{label:String,operation:{type:String,value:"Tag.Suggestion"},params:Object,document:{type:Object,observer:"_observeDocument"},allowNewTags:Boolean,value:{type:String,notify:!0},readonly:{type:Boolean,value:!1},minChars:{type:Number,value:1},placeholder:String,stayOpenOnSelect:{type:Boolean,value:!1},errorMessage:String,selectedItems:{type:Object,notify:!0},resultFormatter:{type:Function,value(){return this._resultFormatter.bind(this)}},initSelection:{type:Function,value(){return this._initSelection.bind(this)}},newEntryFormatter:{type:Function,value(){return this._newEntryFormatter.bind(this)}},addedTagHandler:{type:Function,value(){return this._addedTagHandler.bind(this)}},removedTagHandler:{type:Function,value(){return this._removedTagHandler.bind(this)}}}}_getValidity(){return this.$.s2._getValidity()}_resultFormatter(e){return e.newTag?`<span class='s2newTag'>+ ${(0,l.r)(e.displayLabel)}</span>`:`<span class='s2existingTag'>${(0,l.r)(e.displayLabel)}</span>`}_newEntryFormatter(e){return{id:e,displayLabel:e,newTag:!0}}_addedTagHandler(e){this.document&&(this.$.addTagOp.params={tags:e.id},this.$.addTagOp.execute().then((()=>{this.$.toast.hide(),this.$.toast.text=this.i18n("tags.addedToDocument",e.id),this.$.toast.open()})))}_removedTagHandler(e){this.document&&(this.$.removeTagOp.params={tags:e.id},this.$.removeTagOp.execute().then((()=>{this.$.toast.hide(),this.$.toast.text=this.i18n("tags.removedFromDocument",e.id),this.$.toast.open()})))}_initSelection(e,t){return t(this.value.map((e=>({id:e,displayLabel:e}))))}_observeDocument(){this.document?this.document.contextParameters&&this.document.contextParameters.tags?this.value=this.document.contextParameters.tags:(this.value=[],console.warn("Cannot use nuxeo-tag-element on a document that has no tag in its contextParameters. Make sure you use the 'tags' enricher to fetch the document")):this.value=[]}}customElements.define(e.is,e),Nuxeo.TagSuggestion=e}},84969:(e,t,n)=>{"use strict";var i=n(66538);n(36037),n(85621),n(55689),n(39059),n(67117),n(64091);{class e extends Nuxeo.Element{static get template(){return i.d`
        <style>
          :host {
            display: inline-block;
          }
        </style>
        <dom-repeat items="[[items]]" as="item">
          <template>
            <dom-if if="[[_type('tag')]]">
              <template>
                <nuxeo-tag>[[item]]</nuxeo-tag>
              </template>
            </dom-if>
            <dom-if if="[[_type('user')]]">
              <template>
                <nuxeo-user-tag user="[[item]]"></nuxeo-user-tag>
              </template>
            </dom-if>
            <dom-if if="[[_type('group')]]">
              <template>
                <nuxeo-group-tag group="[[item]]"></nuxeo-group-tag>
              </template>
            </dom-if>
          </template>
        </dom-repeat>
      `}static get is(){return"nuxeo-tags"}static get properties(){return{type:{type:String,value:"tag"},items:{type:Array}}}_type(e){return this.type===e}}customElements.define(e.is,e),Nuxeo.Tags=e}},12418:(e,t,n)=>{"use strict";n(76176);var i=n(2550);(0,n(21536).k)({is:"iron-a11y-keys",behaviors:[i.G],properties:{target:{type:Object,observer:"_targetChanged"},keys:{type:String,reflectToAttribute:!0,observer:"_keysChanged"}},attached:function(){this.target||(this.target=this.parentNode)},_targetChanged:function(e){this.keyEventTarget=e},_keysChanged:function(){this.removeOwnKeyBindings(),this.addOwnKeyBinding(this.keys,"_fireKeysPressed")},_fireKeysPressed:function(e){this.fire("keys-pressed",e.detail,{})}})},87697:(e,t,n)=>{"use strict";n(43384),n(83253);const i=n(66538).d`<iron-iconset-svg name="av" size="24">
<svg><defs>
<g id="add-to-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></g>
<g id="airplay"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="album"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="art-track"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></g>
<g id="av-timer"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></g>
<g id="branding-watermark"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></g>
<g id="call-to-action"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></g>
<g id="closed-caption"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></g>
<g id="equalizer"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></g>
<g id="explicit"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></g>
<g id="fast-forward"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></g>
<g id="fast-rewind"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></g>
<g id="featured-play-list"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></g>
<g id="featured-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></g>
<g id="fiber-dvr"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></g>
<g id="fiber-manual-record"><circle cx="12" cy="12" r="8"></circle></g>
<g id="fiber-new"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></g>
<g id="fiber-pin"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></g>
<g id="fiber-smart-record"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></g>
<g id="forward-10"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="forward-30"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></g>
<g id="forward-5"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></g>
<g id="games"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="hd"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></g>
<g id="hearing"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"></path></g>
<g id="high-quality"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></g>
<g id="library-add"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="library-books"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></g>
<g id="library-music"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></g>
<g id="loop"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-none"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-off"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></g>
<g id="movie"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="music-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path></g>
<g id="new-releases"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="not-interested"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="note"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></g>
<g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>
<g id="pause-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></g>
<g id="pause-circle-outline"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></g>
<g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>
<g id="play-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></g>
<g id="play-circle-outline"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="playlist-add"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></g>
<g id="playlist-add-check"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></g>
<g id="playlist-play"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></g>
<g id="queue"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="queue-music"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></g>
<g id="queue-play-next"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></g>
<g id="radio"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></g>
<g id="recent-actors"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></g>
<g id="remove-from-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></g>
<g id="repeat"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>
<g id="repeat-one"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></g>
<g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>
<g id="replay-10"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-30"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-5"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></g>
<g id="shuffle"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></g>
<g id="skip-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></g>
<g id="skip-previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></g>
<g id="slow-motion-video"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></g>
<g id="snooze"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></g>
<g id="sort-by-alpha"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></g>
<g id="stop"><path d="M6 6h12v12H6z"></path></g>
<g id="subscriptions"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></g>
<g id="subtitles"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></g>
<g id="surround-sound"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="video-call"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
<g id="video-label"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></g>
<g id="video-library"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
<g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
<g id="videocam-off"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></g>
<g id="volume-down"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></g>
<g id="volume-mute"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></g>
<g id="volume-off"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></g>
<g id="volume-up"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g>
<g id="web"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></g>
<g id="web-asset"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(i.content)},58743:(e,t,n)=>{"use strict";var i=n(21536),r=n(76176);const s={properties:{libraryLoaded:{type:Boolean,value:!1,notify:!0,readOnly:!0},libraryErrorMessage:{type:String,value:null,notify:!0,readOnly:!0}},observers:["_libraryUrlChanged(libraryUrl)"],_libraryUrlChanged:function(e){this._isReady&&this.libraryUrl&&this._loadLibrary()},_libraryLoadCallback:function(e,t){e?(r.XY._warn("Library load failed:",e.message),this._setLibraryErrorMessage(e.message)):(this._setLibraryErrorMessage(null),this._setLibraryLoaded(!0),this.notifyEvent&&this.fire(this.notifyEvent,t,{composed:!0}))},_loadLibrary:function(){a.require(this.libraryUrl,this._libraryLoadCallback.bind(this),this.callbackName)},ready:function(){this._isReady=!0,this.libraryUrl&&this._loadLibrary()}};var a={apiMap:{},require:function(e,t,n){var i=this.nameFromUrl(e);this.apiMap[i]||(this.apiMap[i]=new o(i,e,n)),this.apiMap[i].requestNotify(t)},nameFromUrl:function(e){return e.replace(/[\:\/\%\?\&\.\=\-\,]/g,"_")+"_api"}},o=function(e,t,n){if(this.notifiers=[],!n){if(!(t.indexOf(this.callbackMacro)>=0))return void(this.error=new Error("IronJsonpLibraryBehavior a %%callback%% parameter is required in libraryUrl"));n=e+"_loaded",t=t.replace(this.callbackMacro,n)}this.callbackName=n,window[this.callbackName]=this.success.bind(this),this.addScript(t)};o.prototype={callbackMacro:"%%callback%%",loaded:!1,addScript:function(e){var t=document.createElement("script");t.src=e,t.onerror=this.handleError.bind(this);var n=document.querySelector("script")||document.body;n.parentNode.insertBefore(t,n),this.script=t},removeScript:function(){this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.script=null},handleError:function(e){this.error=new Error("Library failed to load"),this.notifyAll(),this.cleanup()},success:function(){this.loaded=!0,this.result=Array.prototype.slice.call(arguments),this.notifyAll(),this.cleanup()},cleanup:function(){delete window[this.callbackName]},notifyAll:function(){this.notifiers.forEach(function(e){e(this.error,this.result)}.bind(this)),this.notifiers=[]},requestNotify:function(e){this.loaded||this.error?e(this.error,this.result):this.notifiers.push(e)}},(0,i.k)({is:"iron-jsonp-library",behaviors:[s],properties:{libraryUrl:String,callbackName:String,notifyEvent:String}})},54187:(e,t,n)=>{"use strict";n(76176);var i=n(21536),r=n(74153);const s=(0,i.k)({is:"iron-label",listeners:{tap:"_tapHandler"},properties:{for:{type:String,value:"",reflectToAttribute:!0,observer:"_forChanged"},_forElement:Object},attached:function(){this._forChanged()},ready:function(){this._generateLabelId()},_generateLabelId:function(){if(!this.id){var e="iron-label-"+s._labelNumber++;(0,r.vz)(this).setAttribute("id",e)}},_findTarget:function(){if(this.for){var e=(0,r.vz)(this).getOwnerRoot();return(0,r.vz)(e).querySelector("#"+this.for)}var t=(0,r.vz)(this).querySelector("[iron-label-target]");return t||(t=(0,r.vz)(this).firstElementChild),t},_tapHandler:function(e){this._forElement&&(0,r.vz)(e).localTarget!==this._forElement&&(this._forElement.focus(),this._forElement.click())},_applyLabelledBy:function(){this._forElement&&(0,r.vz)(this._forElement).setAttribute("aria-labelledby",this.id)},_forChanged:function(){this._forElement&&(0,r.vz)(this._forElement).removeAttribute("aria-labelledby"),this._forElement=this._findTarget(),this._applyLabelledBy()}});s._labelNumber=0},90201:(e,t,n)=>{"use strict";n(76176);var i=n(21536),r=n(74153);(0,i.k)({is:"iron-location",_template:null,properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged"),this.listen(window,"location-changed","_urlChanged"),this.listen(window,"popstate","_urlChanged"),this.listen(document.body,"click","_globalOnClick"),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged"),this.unlisten(window,"location-changed","_urlChanged"),this.unlisten(window,"popstate","_urlChanged"),this.unlisten(document.body,"click","_globalOnClick"),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(this.__location.pathname),this.query=this.__location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var e=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),t="";this.query&&(t="?"+this.query.replace(/\#/g,"%23"),t=this.encodeSpaceAsPlusInQuery?t.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+"):t.replace(/\+/g,"%2B").replace(/ /g,"%20"));var n="";return this.hash&&(n="#"+window.encodeURI(this.hash)),e+t+n},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(this.__location.pathname)||this.query!==this.__location.search.substring(1)||this.hash!==window.decodeURIComponent(this.__location.hash.substring(1)))){var e=this._getUrl(),t=new URL(e,this.__location.protocol+"//"+this.__location.host).href,n=window.performance.now(),i=this._lastChangedAt+this.dwellTime>n;this._lastChangedAt=n,i?window.history.replaceState({},"",t):window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})}},_globalOnClick:function(e){if(!e.defaultPrevented){var t=this._getSameOriginLinkHref(e);t&&(e.preventDefault(),t!==this.__location.href&&(window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})))}},_getSameOriginLinkHref:function(e){if(0!==e.button)return null;if(e.metaKey||e.ctrlKey||e.shiftKey)return null;for(var t=(0,r.vz)(e).path,n=null,i=0;i<t.length;i++){var s=t[i];if("A"===s.tagName&&s.href){n=s;break}}if(!n)return null;if("_blank"===n.target)return null;if(("_top"===n.target||"_parent"===n.target)&&window.top!==window)return null;if(n.download)return null;var a,o,l,u=n.href;if(a=null!=document.baseURI?new URL(u,document.baseURI):new URL(u),o=this.__location.origin?this.__location.origin:this.__location.protocol+"//"+this.__location.host,a.origin)l=a.origin;else{var c=a.host,d=a.port,h=a.protocol;("https:"===h&&"443"===d||"http:"===h&&"80"===d)&&(c=a.hostname),l=h+"//"+c}if(l!==o)return null;var p=a.pathname+a.search+a.hash;return"/"!==p[0]&&(p="/"+p),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(p)?null:new URL(p,this.__location.href).href},_makeRegExp:function(e){return RegExp(e)}})},31171:(e,t,n)=>{"use strict";n(76176);var i=n(66592);window.marked||(window.marked=i);var r=n(21536),s=n(74153),a=n(66538);(0,r.k)({_template:a.d`
    <style>
      :host {
        display: block;
      }
    </style>
    <slot name="markdown-html">
      <div id="content"></div>
    </slot>
  `,is:"marked-element",properties:{markdown:{type:String,value:null},breaks:{type:Boolean,value:!1},pedantic:{type:Boolean,value:!1},renderer:{type:Function,value:null},sanitize:{type:Boolean,value:!1},sanitizer:{type:Function,value:null},disableRemoteSanitization:{type:Boolean,value:!1},smartypants:{type:Boolean,value:!1},callback:{type:Function,value:null},xhr:{type:Object,notify:!0,readOnly:!0}},observers:["render(markdown, breaks, pedantic, renderer, sanitize, sanitizer, smartypants, callback)"],ready:function(){this.markdown||(this._markdownElement=(0,s.vz)(this).querySelector('[type="text/markdown"]'),this._markdownElement&&(this._markdownElement.src&&this._request(this._markdownElement.src),""!==this._markdownElement.textContent.trim()&&(this.markdown=this._unindent(this._markdownElement.textContent)),new MutationObserver(this._onScriptAttributeChanged.bind(this)).observe(this._markdownElement,{attributes:!0})))},attached:function(){this._attached=!0,this._outputElement=this.outputElement,this.render()},detached:function(){this._attached=!1},unindent:function(e){return this._unindent(e)},get outputElement(){return(0,s.vz)(this).queryDistributedElements('[slot="markdown-html"]')[0]||this.$.content},render:function(){if(this._attached)if(this.markdown){var e=new marked.Renderer;this.renderer&&this.renderer(e);var t={renderer:e,highlight:this._highlight.bind(this),breaks:this.breaks,sanitize:this.sanitize,sanitizer:this.sanitizer,pedantic:this.pedantic,smartypants:this.smartypants};(0,s.vz)(this._outputElement).innerHTML=marked(this.markdown,t,this.callback),this.fire("marked-render-complete",{},{composed:!0})}else(0,s.vz)(this._outputElement).innerHTML=""},_highlight:function(e,t){return this.fire("syntax-highlight",{code:e,lang:t},{composed:!0}).detail.code||e},_unindent:function(e){if(!e)return e;var t=e.replace(/\t/g,"  ").split("\n"),n=t.reduce((function(e,t){if(/^\s*$/.test(t))return e;var n=t.match(/^(\s*)/)[0].length;return null===e||n<e?n:e}),null);return t.map((function(e){return e.substr(n)})).join("\n")},_request:function(e){this._setXhr(new XMLHttpRequest);var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("error",this._handleError.bind(this)),t.addEventListener("loadend",function(e){var t=this.xhr.status||0;0===t||t>=200&&t<300?(this.sanitize=!this.disableRemoteSanitization,this.markdown=e.target.response):this._handleError(e),this.fire("marked-loadend",e)}.bind(this)),t.open("GET",e),t.setRequestHeader("Accept","text/markdown"),t.send()},_handleError:function(e){this.fire("marked-request-error",e,{cancelable:!0}).defaultPrevented||(this.markdown="Failed loading markdown source")},_onScriptAttributeChanged:function(e){"src"===e[0].attributeName&&this._request(this._markdownElement.src)}})},5265:(e,t,n)=>{"use strict";n(76176);var i=n(14190),r=n(21536),s=n(66538),a=n(53128);(0,r.k)({_template:s.d`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
  `,is:"neon-animatable",behaviors:[a.a,i.z]})},35060:(e,t,n)=>{"use strict";n(76176);var i=n(14190),r=n(14162),s=n(21536),a=n(74153),o=n(66538),l=n(84513);(0,s.k)({_template:o.d`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host > ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      :host > ::slotted(:not(.iron-selected):not(.neon-animating))
       {
        display: none !important;
      }

      :host > ::slotted(.neon-animating) {
        pointer-events: none;
      }
    </style>

    <slot id="content"></slot>
  `,is:"neon-animated-pages",behaviors:[i.z,r.P,l.t],properties:{activateEvent:{type:String,value:""},animateInitialSelection:{type:Boolean,value:!1}},listeners:{"iron-select":"_onIronSelect","neon-animation-finish":"_onNeonAnimationFinish"},_onIronSelect:function(e){var t=e.detail.item;if(!(this.items.indexOf(t)<0)){var n=this._valueToItem(this._prevSelected)||!1;this._prevSelected=this.selected,n||this.animateInitialSelection?(this.animationConfig=[],this.entryAnimation?this.animationConfig.push({name:this.entryAnimation,node:t}):t.getAnimationConfig&&this.animationConfig.push({animatable:t,type:"entry"}),n&&(n.classList.contains("neon-animating")&&(this._squelchNextFinishEvent=!0,this.cancelAnimation(),this._completeSelectedChanged(),this._squelchNextFinishEvent=!1),this.exitAnimation?this.animationConfig.push({name:this.exitAnimation,node:n}):n.getAnimationConfig&&this.animationConfig.push({animatable:n,type:"exit"}),n.classList.add("neon-animating")),t.classList.add("neon-animating"),this.animationConfig.length>=1?this.isAttached?this.playAnimation(void 0,{fromPage:n,toPage:t}):this.async((function(){this.playAnimation(void 0,{fromPage:null,toPage:t})})):this._completeSelectedChanged(n,t)):this._completeSelectedChanged()}},_completeSelectedChanged:function(e,t){if(t&&t.classList.remove("neon-animating"),e&&e.classList.remove("neon-animating"),!t||!e)for(var n,i=(0,a.vz)(this.$.content).getDistributedNodes(),r=0;n=i[r];r++)n.classList&&n.classList.remove("neon-animating");this.async(this._notifyPageResize)},_onNeonAnimationFinish:function(e){this._squelchNextFinishEvent?this._squelchNextFinishEvent=!1:this._completeSelectedChanged(e.detail.fromPage,e.detail.toPage)},_notifyPageResize:function(){var e=this.selectedItem||this._valueToItem(this.selected);this.resizerShouldNotify=function(t){return t==e},this.notifyResize()}})},7533:(e,t,n)=>{"use strict";n(76176),n(82942);var i=n(84513),r=n(33046),s=n(21536),a=n(66538);(0,s.k)({_template:a.d`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[r.n,i.t],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},1679:(e,t,n)=>{"use strict";n(76176),n(75343),n(43384),n(76518),n(90851),n(86738);var i=n(83694),r=n(21536);const s=n(66538).d`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;s.setAttribute("strip-whitespace",""),(0,r.k)({_template:s,is:"paper-fab",behaviors:[i.n],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(e,t){return e.length>0||t.length>0}})},53043:(e,t,n)=>{"use strict";n(76176),n(75343),n(2826),n(86385);var i=n(21536),r=n(66538),s=n(99856);(0,i.k)({_template:r.d`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[s.U]})},14862:(e,t,n)=>{"use strict";n(75343),n(94131),n(54199),n(90851);var i=n(2550),r=n(83842),s=n(3062),a=n(65863),o=n(21536),l=n(83235);const u=n(76176).dy`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;u.setAttribute("strip-whitespace",""),(0,o.k)({_template:u,is:"paper-slider",behaviors:[i.G,r.V,a.B,s.f],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&(0,l.BP)(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,n,i,r){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",n),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}},_trackStart:function(e){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,n=Math.min(this._maxx,Math.max(this._minx,e.detail.dx*t));this._x=this._startx+n;var i=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(i);var r=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(r+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),n=(e.detail.x-t.left)/this._w*100;this._isRTL&&(n=100-n);var i=this.ratio;this._setTransiting(!0),this._positionKnob(n),i===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,n,i){i||this._setMarkers([]);var r=Math.round((n-t)/this.step);r>e&&(r=e),(r<0||!isFinite(r))&&(r=0),this._setMarkers(new Array(r))},_mergeClasses:function(e){return Object.keys(e).filter((function(t){return e[t]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,a.S._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}})},97977:(e,t,n)=>{"use strict";n(76176),n(90851),n(43663);var i=n(21536),r=n(66538),s=n(9144);const a=r.d`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;a.setAttribute("strip-whitespace",""),(0,i.k)({_template:a,is:"paper-spinner",behaviors:[s.L]})},8321:(e,t,n)=>{"use strict";n(76176),n(75343),n(43384),n(3632),n(90851),n(83253);var i=n(66538);const r=i.d`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(r.content);var s=n(91186),a=n(32653),o=n(66943),l=n(21536),u=n(74153);(0,l.k)({_template:i.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;

        @apply --paper-tab-content-focused;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,is:"paper-tab",behaviors:[a.a,s.P,o.o],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var e=(0,u.vz)(this).parentNode;return!!e&&!!e.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(e){if(this.link){var t=this.queryEffectiveChildren("a");if(!t)return;if(e.target===t)return;t.click()}}});var c=n(35314),d=n(65964),h=n(14190);(0,l.k)({_template:i.d`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>