!function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="dist",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var o=function(){var t=document.querySelector(".header-contacts__phone-number-accord");document.querySelector(".header-contacts__arrow").addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("header-contacts__phone-number-accord--opened")}))},s=function(t){return t.classList.toggle("popup--opened")},n=function(t){scrollBy({top:t.getBoundingClientRect().top,behavior:"smooth"})},r=function(){var t=document.querySelector(".popup-menu");document.addEventListener("click",(function(e){var i=e.target,o=i.closest(".menu"),r=i.closest(".close-menu"),l=i.closest(".popup-menu-nav__item"),a=i.closest(".link-list"),c=!i.closest(".popup-dialog-menu");o||r||c&&t.classList.contains("popup--opened")?(e.preventDefault(),s(t)):l?(e.preventDefault(),n(document.getElementById(i.getAttribute("href").slice(1))),s(t)):a&&t.classList.remove("popup--opened")}))},l=function(){var t=document.querySelector(".button-footer"),e=document.getElementById("main");t.addEventListener("click",(function(t){t.preventDefault(),n(e)}))},a=function(t){var e=t.popupSelector,i=t.openBtnSelector,o=t.closeBtnSelector,n=t.popupDialogSelector,r=document.querySelector(e);document.addEventListener("click",(function(t){var l=t.target,a=l.closest(i),c=l.closest(o)&&l.closest(e),d=!l.closest(n);(a||c||d&&r.classList.contains("popup--opened"))&&(t.preventDefault(),s(r),document.body.style.overflowY=document.body.style.overflowY?"":"hidden")}))},c=function(){var t=document.querySelector(".wrapper_small");t.addEventListener("mouseover",(function(t){var e=t.target,i=e.closest(".formula-item");if(e.closest(".formula-item__icon-inner-text")){var o=i.querySelector(".formula-item-popup");o.classList.remove("formula-item-popup--rotated"),i.classList.add("active-item"),o.getBoundingClientRect().top<0&&o.classList.add("formula-item-popup--rotated")}})),t.addEventListener("mouseout",(function(t){var e=t.target,i=e.closest(".formula-item");e.closest(".formula-item__icon-inner-text")&&i.classList.remove("active-item")}))};function d(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function p(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var h=function(){function t(e){var i=e.wrapper,o=e.slideList,s=e.togglePrev,n=e.toggleNext,r=e.dotList,l=e.position,a=void 0===l?0:l,c=e.slidesNumber,d=void 0===c?4:c,u=e.infinity,p=void 0!==u&&u,h=e.responsive,v=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrapper=document.querySelector(i),this.slideList=document.querySelector(o),this.slides=this.slideList.children,this.togglePrev=document.querySelector(s),this.toggleNext=document.querySelector(n),this.slidesNumber=d,this.sliderId="".concat((+new Date).toString(16)),this.dotList=document.querySelector(r),this.options={position:a,maxPosition:this.slides.length-this.slidesNumber,slideWidth:Math.floor(100/this.slidesNumber),infinity:p},this.responsive=v}var e,i,o;return e=t,(i=[{key:"init",value:function(){this.addClasses(),this.addStyles(),this.togglePrev&&this.toggleNext||this.addToggles(),this.configureToggles(),this.dotList&&this.dotHandler(),this.responsive&&this.makeSliderResponsive()}},{key:"configureToggles",value:function(){this.togglePrev.addEventListener("click",this.prevSlide.bind(this)),this.toggleNext.addEventListener("click",this.nextSlide.bind(this))}},{key:"prevSlide",value:function(){(this.options.position>0||this.options.infinity)&&(this.dots&&this.dots[this.options.position].classList.remove("dot_active"),this.options.position--,this.options.position<0&&(this.options.position=this.options.maxPosition),this.dots&&this.dots[this.options.position].classList.add("dot_active"),this.slideList.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlide",value:function(){(this.options.position<this.options.maxPosition||this.options.infinity)&&(this.dots&&this.dots[this.options.position].classList.remove("dot_active"),this.options.position++,this.options.position>this.options.maxPosition&&(this.options.position=0),this.dots&&this.dots[this.options.position].classList.add("dot_active"),this.slideList.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"dotHandler",value:function(){var t=this;this.dots=d(this.dotList.children),this.dotList.addEventListener("click",(function(e){var i=e.target.closest(".dot");i&&t.dots.forEach((function(e,o){e===i?(e.classList.add("dot_active"),t.options.position=o,t.slideList.style.transform="translateX(-".concat(t.options.position*t.options.slideWidth,"%)")):e.classList.remove("dot_active")}))}))}},{key:"addClasses",value:function(){var t=this;this.wrapper.classList.add("gsk-slider"),this.slideList.classList.add("gsk-slider__list"),d(this.slides).forEach((function(e){return e.classList.add("gsk-slider__item","gsk-slider__item--".concat(t.sliderId))}))}},{key:"addStyles",value:function(){var t=document.getElementById("gsk-slider--".concat(this.sliderId));t||((t=document.createElement("style")).id="gsk-slider--".concat(this.sliderId)),t.textContent="\n      .gsk-slider__item--".concat(this.sliderId," {\n        flex-basis: ").concat(this.options.slideWidth,"% !important;\n      }"),document.head.append(t)}},{key:"createToggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"gsk-slider__toggle",o=document.createElement("button");return o.className="".concat(i," ").concat(i,"--").concat(t),o.type="button",o.textContent=e,o}},{key:"addToggles",value:function(){var t=document.createElement("div");t.className="gsk-slider__toggles",this.togglePrev=this.createToggle("prev","Назад"),this.toggleNext=this.createToggle("next","Вперед"),t.append(this.togglePrev),t.append(this.toggleNext),this.wrapper.append(t)}},{key:"makeSliderResponsive",value:function(){var t=this.slidesNumber,e=this.responsive.map((function(t){return t.breakpoint})),i=Math.max.apply(Math,d(e));this.checkWindowWidth(e,i,t),window.addEventListener("resize",this.checkWindowWidth.bind(this,e,i,t))}},{key:"checkWindowWidth",value:function(t,e){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,s=document.documentElement.clientWidth;s<e?t.forEach((function(t,e){s<t&&(i.slidesNumber=i.responsive[e].slidesNumber,i.updateOptions())})):(this.slidesNumber=o,this.updateOptions())}},{key:"updateOptions",value:function(){this.slideList.style.transform="translateX(0)",this.options.maxPosition=this.slides.length-this.slidesNumber,this.options.slideWidth=Math.floor(100/this.slidesNumber),this.addStyles()}}])&&p(e.prototype,i),o&&p(e,o),t}(),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function i(t){var i=t.code,o=t.target,s=e,n=s.replace(/\D/g,""),r=o.value.replace(/\D/g,""),l=0,a=s.replace(/[_\d]/g,(function(t){return l<r.length?r.charAt(l++)||n.charAt(l):t}));-1!==(l=a.indexOf("_"))&&(a=a.slice(0,l)),a=a.substr(0,1)+"7"+a.substr(2);var c=s.substr(0,o.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(o.value)||o.value.length<5||i>47&&i<58)&&(o.value=a),"blur"===t.type&&o.value.length<5&&(o.value="")}document.body.addEventListener("input",(function(e){e.target.closest(t)&&i(e)})),document.body.addEventListener("focusin",(function(e){e.target.closest(t)&&i(e)})),document.body.addEventListener("focusout",(function(e){e.target.closest(t)&&i(e)}))},f=function(){v('input[name="phone"]')};o(),r(),l();a({popupSelector:".popup-repair-types",openBtnSelector:".link-list",closeBtnSelector:".close",popupDialogSelector:".popup-dialog-repair-types"});a({popupSelector:".popup-privacy",openBtnSelector:".link-privacy",closeBtnSelector:".close",popupDialogSelector:".popup-dialog-privacy"});a({popupSelector:".popup-consultation",openBtnSelector:".js-consultation",closeBtnSelector:".close-consultation",popupDialogSelector:".feedback-wrap"}),c();new h({wrapper:".partners .wrapper",slideList:".partners-slider",togglePrev:"#partners-arrow_left",toggleNext:"#partners-arrow_right",slidesNumber:3,infinity:!0,responsive:[{breakpoint:576,slidesNumber:1}]}).init();new h({wrapper:".reviews-slider",slideList:".reviews-slider .js-slider-wrap",togglePrev:"#reviews-arrow_left",toggleNext:"#reviews-arrow_right",dotList:".slider-dots-reviews",slidesNumber:1}).init(),f()}]);