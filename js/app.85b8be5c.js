(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/outside-digital-task/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0321":function(e,t,n){},"0ed6":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["disabled"];function o(e,t,o,a,u,l){return Object(r["n"])(),Object(r["g"])("button",{style:Object(r["m"])({cursor:"url("+n("48f6")+"),pointer"}),class:Object(r["l"])([e.BtnClasses,{"button-disabled":e.disabled&&"transparent"!==e.color&&"button-red-tag"!==e.color,"button-disactive":!e.active},"button"]),disabled:e.disabled},[Object(r["q"])(e.$slots,"default")],14,c)}n("caad");var a=Object(r["k"])({name:"BaseButton",props:{color:{type:String,default:"red",validator:function(e){return["red","red-link","red-tag","transparent"].includes(e)}},disabled:{type:Boolean,default:!1},active:{type:Boolean,default:!0}},setup:function(e){var t=Object(r["c"])((function(){switch(e.color){case"red":return"button-red button-small button-big";case"red-link":return"button-red-link button-small button-big";case"red-tag":return"button-red-tag";case"transparent":return"button-transparent";default:return"red"}}));return{BtnClasses:t}}}),u=(n("380c"),n("6b0d")),l=n.n(u);const i=l()(a,[["render",o]]);t["default"]=i},"11ac":function(e,t,n){"use strict";n("bf3a")},"1b49":function(e,t,n){"use strict";n("0321")},"1ed6":function(e,t,n){"use strict";n("4fed")},"380c":function(e,t,n){"use strict";n("d525")},"48f6":function(e,t,n){e.exports=n.p+"img/pointer.af9253fd.svg"},"4fed":function(e,t,n){},5088:function(e,t,n){e.exports=n.p+"img/remove.b85b29b3.svg"},"50d5":function(e,t,n){"use strict";n("8b38")},6788:function(e,t,n){},"8b38":function(e,t,n){},"9d9f":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"checkbox"},o=["value","disabled"];function a(e,t,a,u,l,i){return Object(r["n"])(),Object(r["g"])("label",c,[Object(r["q"])(e.$slots,"default"),Object(r["v"])(Object(r["h"])("input",{onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",e.checked?t.target.value:"")}),"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.checked=t}),value:e.option,disabled:e.disabled,type:"checkbox"},null,40,o),[[r["t"],e.checked]]),Object(r["h"])("span",{style:Object(r["m"])({cursor:"url("+n("48f6")+"),pointer"}),class:"checkmark"},null,4)])}var u=Object(r["k"])({props:{option:{type:String,required:!1,default:""},disabled:{type:Boolean,default:!1}},setup:function(){var e=Object(r["o"])(!1);return{checked:e}}}),l=(n("1b49"),n("6b0d")),i=n.n(l);const s=i()(u,[["render",a]]);t["default"]=s},b8dc:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"input"},o=["for"],a=["value","type","id","placeholder","disabled"],u={key:0,class:"input-errors"};function l(e,t,n,l,i,s){return Object(r["n"])(),Object(r["g"])("div",c,[Object(r["h"])("label",{for:e.label,class:"input_label"},Object(r["s"])(e.label),9,o),Object(r["h"])("input",{onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),value:e.modelValue,type:e.type,id:e.label,placeholder:e.placeholder,class:Object(r["l"])([{"input_box-disabled":e.disabled,"input_box-hasError":e.errors.length},"input_box"]),disabled:e.disabled},null,42,a),e.errors.length?(Object(r["n"])(),Object(r["g"])("div",u,[(Object(r["n"])(!0),Object(r["g"])(r["a"],null,Object(r["p"])(e.errors,(function(e,t){return Object(r["n"])(),Object(r["g"])("p",{key:t},Object(r["s"])(e),1)})),128))])):Object(r["f"])("",!0)])}n("a9e3");var i=Object(r["k"])({name:"BaseInput",props:{modelValue:[String,Number],label:{type:String,default:"For input"},placeholder:{type:String,default:"Text..."},type:{type:String,default:"text"},errors:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1}}}),s=(n("50d5"),n("6b0d")),p=n.n(s);const d=p()(i,[["render",l]]);t["default"]=d},bf3a:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t),n.d(t,"app",(function(){return S}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("99af"),Object(r["i"])("Налоговый вычет")),o={class:"popup-container"},a=Object(r["h"])("h1",{class:"popup-headline"},"Налоговый вычет",-1),u=Object(r["h"])("div",{class:"popup-text"}," Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода. ",-1),l=Object(r["i"])("Рассчитать"),i={key:0,class:"popup-list"},s=Object(r["h"])("p",{class:"popup-list-text"},"Итого можете внести в качестве досрочных:",-1),p={style:{marginRight:"4px"},class:"popup-list-payment"},d=Object(r["h"])("hr",{style:{height:"1px",width:"100%",color:"#DFE3E6"}},null,-1),b={class:"popup-nav"},f=Object(r["h"])("p",{class:"popup-nav-text"},"Что уменьшаем ?",-1),j={class:"popup-nav-menu"},O=Object(r["i"])("Платёж"),v=Object(r["i"])("Срок"),y=Object(r["i"])("Добавить");function h(e,t,n,h,m,g){var k=Object(r["r"])("BaseButton"),x=Object(r["r"])("BaseInput"),B=Object(r["r"])("BaseCheckbox"),_=Object(r["r"])("BasePopup");return Object(r["n"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(k,{class:"nav_button",onClick:e.openModal,color:"red-link"},{default:Object(r["u"])((function(){return[c]})),_:1},8,["onClick"]),Object(r["j"])(_,{onClose:e.closeModal,active:e.popup,animation:"fade"},{default:Object(r["u"])((function(){return[Object(r["h"])("div",o,[a,u,Object(r["j"])(x,{onInput:e.errorsHandler,class:"popup-input",label:"Ваша зарплата в месяц",placeholder:"Введите данные",modelValue:e.pay,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.pay=t}),errors:e.errors},null,8,["onInput","modelValue","errors"]),Object(r["j"])(k,{onClick:e.calculate,color:"transparent"},{default:Object(r["u"])((function(){return[l]})),_:1},8,["onClick"]),e.paymentList&&e.pay?(Object(r["n"])(),Object(r["g"])("ul",i,[s,(Object(r["n"])(!0),Object(r["g"])(r["a"],null,Object(r["p"])(e.payments,(function(e,t){return Object(r["n"])(),Object(r["g"])("li",{key:t},[Object(r["j"])(B,null,{default:Object(r["u"])((function(){return[Object(r["h"])("span",p,Object(r["s"])(e),1),Object(r["h"])("span",null,Object(r["s"])("".concat(1===t?"во":"в"," ").concat(t+1,"-").concat(1===t?"ой":"ый"," год")),1)]})),_:2},1024),d])})),128))])):Object(r["f"])("",!0),Object(r["h"])("div",b,[f,Object(r["h"])("div",j,[Object(r["j"])(k,{onClick:t[1]||(t[1]=function(t){return e.popupNav="payment"}),color:"red-tag",style:{marginRight:"16px"},active:"payment"===e.popupNav},{default:Object(r["u"])((function(){return[O]})),_:1},8,["active"]),Object(r["j"])(k,{onClick:t[2]||(t[2]=function(t){return e.popupNav="time"}),color:"red-tag",active:"time"===e.popupNav},{default:Object(r["u"])((function(){return[v]})),_:1},8,["active"])])]),Object(r["j"])(k,{onClick:e.errorsHandler,style:{marginTop:"40px"},color:"red"},{default:Object(r["u"])((function(){return[y]})),_:1},8,["onClick"])])]})),_:1},8,["onClose","active"])],64)}n("b65f"),n("cb29");var m=Object(r["k"])({name:"App",setup:function(){var e=Object(r["o"])(!1);function t(){e.value=!0}function n(){e.value=!1}var c=Object(r["o"])("payment"),o=Object(r["o"])(null),a=Object(r["o"])(!1);function u(){s(),o.value&&(a.value=!0)}var l=Object(r["c"])((function(){var e=Math.trunc(12*o.value*.13);if(4*e>26e4){var t=26e4-3*e;if(t<0){var n=65e3;return new Array(4).fill(n)}return[e,e,e,t]}return new Array(4).fill(e)})),i=Object(r["o"])([]);function s(){o.value?i.value=[]:i.value=["Поле обязательно для заполнения"]}return{openModal:t,closeModal:n,popupNav:c,popup:e,payments:l,pay:o,paymentList:a,calculate:u,errors:i,errorsHandler:s}}}),g=(n("1ed6"),n("6b0d")),k=n.n(g);const x=k()(m,[["render",h]]);var B=x,_=(n("6788"),n("159b"),n("d3b7"),n("ddb0"),n("fb6a"),n("ac1f"),n("1276"),n("5319"),n("0e40")),C=n("c67b"),w=function(e){var t=n("ed86");t.keys().forEach((function(n){var r=t(n),c=n.split("/").slice(-1)[0],o=Object(_["a"])(Object(C["a"])(c.replace(/\.\w+$/,"")));e.component(o,r.default||r)}))},M=w,S=Object(r["d"])(B);M(S),S.mount("#app")},d0d3:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["src"];function o(e,t,o,a,u,l){return Object(r["n"])(),Object(r["e"])(r["b"],{name:e.animation,mode:"out-in"},{default:Object(r["u"])((function(){return[e.active?(Object(r["n"])(),Object(r["g"])("div",{key:0,onClick:t[2]||(t[2]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)}),class:"popup"},[Object(r["h"])("div",{onClick:t[1]||(t[1]=Object(r["w"])((function(){}),["stop"])),class:"popup-content"},[Object(r["h"])("img",{onClick:t[0]||(t[0]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)}),style:Object(r["m"])({cursor:"url("+n("48f6")+"),pointer"}),class:"popup-remove",src:n("5088")},null,12,c),Object(r["q"])(e.$slots,"default")])])):Object(r["f"])("",!0)]})),_:3},8,["name"])}n("caad");var a=Object(r["k"])({name:"BasePopup",props:{active:{type:Boolean,default:!1},animation:{type:String,default:"fade",validator:function(e){return["fade","bounce"].includes(e)}}},setup:function(e,t){var n=t.emit;function r(){n("close")}return{closeModal:r}}}),u=(n("11ac"),n("6b0d")),l=n.n(u);const i=l()(a,[["render",o]]);t["default"]=i},d525:function(e,t,n){},ed86:function(e,t,n){var r={"./BaseButton.vue":"0ed6","./BaseCheckbox.vue":"9d9f","./BaseInput.vue":"b8dc","./BasePopup.vue":"d0d3"};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=o,e.exports=c,c.id="ed86"}});
//# sourceMappingURL=app.85b8be5c.js.map