!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=function(e){return e.classList.toggle("popup--opened")},r=function(e){scrollBy({top:e.getBoundingClientRect().top,behavior:"smooth"})},c=function(){var e=document.querySelector(".popup-menu");document.addEventListener("click",(function(t){var o=t.target,c=o.closest(".menu"),u=o.closest(".close-menu"),l=o.closest(".popup-menu-nav__item"),a=o.closest(".link-list"),i=!o.closest(".popup-dialog-menu");c||u||i&&e.classList.contains("popup--opened")?(t.preventDefault(),n(e)):l?(t.preventDefault(),r(document.getElementById(o.getAttribute("href").slice(1))),n(e)):a&&e.classList.remove("popup--opened")}))},u=function(){var e=document.querySelector(".button-footer"),t=document.getElementById("main");e.addEventListener("click",(function(e){e.preventDefault(),r(t)}))},l=function(e){var t=e.popupSelector,o=e.openBtnSelector,r=e.closeBtnSelector,c=e.popupDialogSelector,u=document.querySelector(t);document.addEventListener("click",(function(e){var l=e.target,a=l.closest(o),i=l.closest(r)&&l.closest(t),p=!l.closest(c);(a||i||p&&u.classList.contains("popup--opened"))&&(e.preventDefault(),n(u),document.body.style.overflowY=document.body.style.overflowY?"":"hidden")}))},a=function(){var e=document.querySelector(".wrapper_small");e.addEventListener("mouseover",(function(e){var t=e.target,o=t.closest(".formula-item");if(t.closest(".formula-item__icon-inner-text")){var n=o.querySelector(".formula-item-popup");n.classList.remove("formula-item-popup--rotated"),o.classList.add("active-item"),n.getBoundingClientRect().top<0&&n.classList.add("formula-item-popup--rotated")}})),e.addEventListener("mouseout",(function(e){var t=e.target,o=t.closest(".formula-item");t.closest(".formula-item__icon-inner-text")&&o.classList.remove("active-item")}))},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function o(e){var o=e.code,n=e.target,r=t,c=r.replace(/\D/g,""),u=n.value.replace(/\D/g,""),l=0,a=r.replace(/[_\d]/g,(function(e){return l<u.length?u.charAt(l++)||c.charAt(l):e}));-1!==(l=a.indexOf("_"))&&(a=a.slice(0,l)),a=a.substr(0,1)+"7"+a.substr(2);var i=r.substr(0,n.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test(n.value)||n.value.length<5||o>47&&o<58)&&(n.value=a),"blur"===e.type&&n.value.length<5&&(n.value="")}document.body.addEventListener("input",(function(t){t.target.closest(e)&&o(t)})),document.body.addEventListener("focusin",(function(t){t.target.closest(e)&&o(t)})),document.body.addEventListener("focusout",(function(t){t.target.closest(e)&&o(t)}))},p=function(){i('input[name="phone"]')};(function(){var e=document.querySelector(".header-contacts__phone-number-accord");document.querySelector(".header-contacts__arrow").addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("header-contacts__phone-number-accord--opened")}))})(),c(),u();l({popupSelector:".popup-repair-types",openBtnSelector:".link-list",closeBtnSelector:".close",popupDialogSelector:".popup-dialog-repair-types"});l({popupSelector:".popup-privacy",openBtnSelector:".link-privacy",closeBtnSelector:".close",popupDialogSelector:".popup-dialog-privacy"});l({popupSelector:".popup-consultation",openBtnSelector:".js-consultation",closeBtnSelector:".close-consultation",popupDialogSelector:".feedback-wrap"}),a(),p()}]);