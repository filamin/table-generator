(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/table-generator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:t.generate}},[n("span",[t._v("Сгенерировать")])]),n("div",{staticClass:"table"},[t._m(0),t._l(t.randomData,(function(e){return n("div",{key:e.name,staticClass:"row"},[n("div",{staticClass:"cell name"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"cell price"},[t._v(" "+t._s(e.price)+" ")]),n("div",{staticClass:"cell count"},[t._v(" "+t._s(e.count)+" ")]),n("div",{staticClass:"cell total"},[t._v(" "+t._s(e.total)+" ")])])})),n("div",{staticClass:"cell summary"},[t._v(" Итого: "+t._s(t.sum)+" ")])],2)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("span",{staticClass:"cell name"},[t._v(" Наименования ")]),n("span",{staticClass:"cell price"},[t._v(" Цена ")]),n("span",{staticClass:"cell count"},[t._v(" Количество ")]),n("span",{staticClass:"cell total"},[t._v(" Стоимость ")])])}],c=n("2909"),i=(n("b680"),n("d81d"),n("d3b7"),n("ddb0"),50),s={name:"App",data:function(){return{randomData:[]}},computed:{sum:function(){return+this.randomData.reduce((function(t,e){return t+e.total}),0).toFixed(2)}},methods:{generate:function(){var t=this,e=Object(c["a"])(Array(i).keys()).map((function(){var e={name:t.generateName(5),price:t.generateRandomFloat(.01,1e3),count:t.generateRandomInt(1,100)};return e.total=+(e.price*e.count).toFixed(2),e}));this.randomData=e},generateName:function(t){for(var e="",n=0;n<t;n++)e+=String.fromCharCode(this.generateRandomInt(1040,1103));return e},generateRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},generateRandomFloat:function(t,e){return+(Math.random()*(e-t)+t).toFixed(2)}}},l=s,u=(n("5c0b"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,null,null),p=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.4513a548.js.map