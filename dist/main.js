!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=function(){var e=document.querySelector(".header-contacts__phone-number-accord");document.querySelector(".header-contacts__arrow").addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("header-contacts__phone-number-accord--opened")}))},i=function(e){return e.classList.toggle("popup--opened")},s=function(e){scrollBy({top:e.getBoundingClientRect().top,behavior:"smooth"})},r=function(){var e=document.querySelector(".popup-menu");document.addEventListener("click",(function(t){var o=t.target,n=o.closest(".menu"),r=o.closest(".close-menu"),l=o.closest(".popup-menu-nav__item"),a=o.closest(".link-list"),c=!o.closest(".popup-dialog-menu");n||r||c&&e.classList.contains("popup--opened")?(t.preventDefault(),i(e)):l?(t.preventDefault(),s(document.getElementById(o.getAttribute("href").slice(1))),i(e)):a&&e.classList.remove("popup--opened")}))},l=function(){var e=document.querySelector(".button-footer"),t=document.getElementById("main");e.addEventListener("click",(function(e){e.preventDefault(),s(t)}))},a=function(e){var t=e.popupSelector,o=e.openBtnSelector,n=e.closeBtnSelector,s=e.popupDialogSelector,r=document.querySelector(t);document.addEventListener("click",(function(e){var l=e.target,a=l.closest(o),c=l.closest(n)&&l.closest(t),u=!l.closest(s);(a||c||u&&r.classList.contains("popup--opened"))&&(e.preventDefault(),i(r),document.body.style.overflowY=document.body.style.overflowY?"":"hidden")}))},c=function(){var e=document.querySelector(".wrapper_small");e.addEventListener("mouseover",(function(e){var t=e.target,o=t.closest(".formula-item");if(t.closest(".formula-item__icon-inner-text")){var n=o.querySelector(".formula-item-popup");n.classList.remove("formula-item-popup--rotated"),o.classList.add("active-item"),n.getBoundingClientRect().top<0&&n.classList.add("formula-item-popup--rotated")}})),e.addEventListener("mouseout",(function(e){var t=e.target,o=t.closest(".formula-item");t.closest(".formula-item__icon-inner-text")&&o.classList.remove("active-item")}))};function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t){var o=t.wrapper,n=t.slideList,i=t.togglePrev,s=t.toggleNext,r=t.position,l=void 0===r?0:r,a=t.slidesNumber,c=void 0===a?4:a,u=t.infinity,p=void 0!==u&&u,d=t.responsive,f=void 0===d?[]:d;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=document.querySelector(o),this.slideList=document.querySelector(n),this.slides=this.slideList.children,this.togglePrev=document.querySelector(i),this.toggleNext=document.querySelector(s),this.slidesNumber=c,this.options={position:l,maxPosition:this.slides.length-this.slidesNumber,slideWidth:Math.floor(100/this.slidesNumber),infinity:p},this.responsive=f}var t,o,n;return t=e,(o=[{key:"init",value:function(){this.addClasses(),this.addStyles(),this.togglePrev&&this.toggleNext||this.addToggles(),this.configureToggles(),this.responsive&&this.makeSliderResponsive()}},{key:"configureToggles",value:function(){this.togglePrev.addEventListener("click",this.prevSlide.bind(this)),this.toggleNext.addEventListener("click",this.nextSlide.bind(this))}},{key:"prevSlide",value:function(){(this.options.position>0||this.options.infinity)&&(this.options.position--,this.options.position<0&&(this.options.position=this.options.maxPosition),this.slideList.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlide",value:function(){(this.options.position<this.options.maxPosition||this.options.infinity)&&(this.options.position++,this.options.position>this.options.maxPosition&&(this.options.position=0),this.slideList.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"addClasses",value:function(){this.wrapper.classList.add("gsk-slider"),this.slideList.classList.add("gsk-slider__list"),u(this.slides).forEach((function(e){return e.classList.add("gsk-slider__item")}))}},{key:"addStyles",value:function(){var e=document.getElementById("gsk-slider");e||((e=document.createElement("style")).id="gsk-slider"),e.textContent="\n      .gsk-slider__item {\n        flex-basis: ".concat(this.options.slideWidth,"% !important;\n      }\n    "),document.head.append(e)}},{key:"createToggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"gsk-slider__toggle",n=document.createElement("button");return n.className="".concat(o," ").concat(o,"--").concat(e),n.type="button",n.textContent=t,n}},{key:"addToggles",value:function(){var e=document.createElement("div");e.className="gsk-slider__toggles",this.togglePrev=this.createToggle("prev","Назад"),this.toggleNext=this.createToggle("next","Вперед"),e.append(this.togglePrev),e.append(this.toggleNext),this.wrapper.append(e)}},{key:"makeSliderResponsive",value:function(){var e=this.slidesNumber,t=this.responsive.map((function(e){return e.breakpoint})),o=Math.max.apply(Math,u(t));this.checkWindowWidth(t,o,e),window.addEventListener("resize",this.checkWindowWidth.bind(this,t,o,e))}},{key:"checkWindowWidth",value:function(e,t){var o=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,i=document.documentElement.clientWidth;i<t?e.forEach((function(e,t){i<e&&(o.slidesNumber=o.responsive[t].slidesNumber,o.updateOptions())})):(this.slidesNumber=n,this.updateOptions())}},{key:"updateOptions",value:function(){this.slideList.style.transform="translateX(0)",this.options.maxPosition=this.slides.length-this.slidesNumber,this.options.slideWidth=Math.floor(100/this.slidesNumber),this.addStyles()}}])&&d(t.prototype,o),n&&d(t,n),e}(),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function o(e){var o=e.code,n=e.target,i=t,s=i.replace(/\D/g,""),r=n.value.replace(/\D/g,""),l=0,a=i.replace(/[_\d]/g,(function(e){return l<r.length?r.charAt(l++)||s.charAt(l):e}));-1!==(l=a.indexOf("_"))&&(a=a.slice(0,l)),a=a.substr(0,1)+"7"+a.substr(2);var c=i.substr(0,n.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(n.value)||n.value.length<5||o>47&&o<58)&&(n.value=a),"blur"===e.type&&n.value.length<5&&(n.value="")}document.body.addEventListener("input",(function(t){t.target.closest(e)&&o(t)})),document.body.addEventListener("focusin",(function(t){t.target.closest(e)&&o(t)})),document.body.addEventListener("focusout",(function(t){t.target.closest(e)&&o(t)}))},g=function(){h('input[name="phone"]')};n(),r(),l();a({popupSelector:".popup-repair-types",openBtnSelector:".link-list",closeBtnSelector:".close",popupDialogSelector:".popup-dialog-repair-types"});a({popupSelector:".popup-privacy",openBtnSelector:".link-privacy",closeBtnSelector:".close",popupDialogSelector:".popup-dialog-privacy"});a({popupSelector:".popup-consultation",openBtnSelector:".js-consultation",closeBtnSelector:".close-consultation",popupDialogSelector:".feedback-wrap"}),c();new f({wrapper:".partners .wrapper",slideList:".partners-slider",togglePrev:"#partners-arrow_left",toggleNext:"#partners-arrow_right",slidesNumber:3,infinity:!0,responsive:[{breakpoint:576,slidesNumber:1}]}).init(),g()}]);