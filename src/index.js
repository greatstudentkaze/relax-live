// Polyfills
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'scroll-behavior-polyfill';
import 'mdn-polyfills/Node.prototype.append';
import './polyfills/template-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

// Modules
import showPhoneNumber from './modules/showPhoneNumber';
import menuHandler from './modules/menuHandler';
import smoothScrollUp from './modules/smoothScrollUp';
import popupHandler from './modules/popupHandler';
import tooltipHandler from './modules/tooltipHandler';
import SliderCarousel from './modules/SliderCarousel';
import faqAccordion from './modules/faqAccordion';
import documents from './modules/documents';
import TabHandler from './modules/TabHandler';
import tabsSlider from './modules/tabsSlider';
import repairTypes from './modules/repairTypes';
import designs from './modules/designs';
import popupDesign from './modules/popupDesign';
import portfolio from './modules/portfolio';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import renderRepairTypesData from './modules/renderRepairTypesData';

// Init Modules

// Phone Number
showPhoneNumber();

// Menu
menuHandler();

// Smooth Scrolling Up
smoothScrollUp();

// popup-repair-types
const popupRepairTypesSelectors = {
  popupSelector: '.popup-repair-types',
  openBtnSelector: '.link-list',
  closeBtnSelector: '.close',
  popupDialogSelector: '.popup-dialog-repair-types'
};

popupHandler(popupRepairTypesSelectors);

// popup-consultation
const popupConsultationSelectors = {
  popupSelector: '.popup-consultation',
  openBtnSelector: '.js-consultation',
  closeBtnSelector: '.close-consultation',
  popupDialogSelector: '.feedback-wrap',
  anotherPopupSelector: '.popup-privacy'
};

popupHandler(popupConsultationSelectors);

// popup-privacy
const popupPrivacySelectors = {
  popupSelector: '.popup-privacy',
  openBtnSelector: '.link-privacy',
  closeBtnSelector: '.close',
  popupDialogSelector: '.popup-dialog-privacy'
};

popupHandler(popupPrivacySelectors);

// popup-thank
const popupThankSelectors = {
  popupSelector: '.popup-thank',
  closeBtnSelector: '.close-thank',
  popupDialogSelector: '.feedback-wrap'
};

popupHandler(popupThankSelectors);

// Tooltips in the advantages block
const advantageTooltipSelectors = {
  wrapperSelector: '.formula .wrapper_small',
  itemSelector: '.formula-item',
  iconSelector: '.formula-item__icon-inner-text',
  popupSelector: '.formula-item-popup',
  activeItemClass: 'active-item',
};
tooltipHandler(advantageTooltipSelectors);

// Tooltips in the problems block
const problemTooltipSelectors = {
  wrapperSelector: '.problems .wrapper_middle',
  itemSelector: '.problems-item',
  iconSelector: '.problems-item__icon',
  popupSelector: '.problems-item-popup',
  activeItemClass: 'active-item',
};
tooltipHandler(problemTooltipSelectors);

// Partners slider
const partnersSliderOptions = {
  wrapper: '.partners .wrapper',
  slideList: '.partners-slider',
  togglePrev: '#partners-arrow_left',
  toggleNext: '#partners-arrow_right',
  slidesNumber: 3,
  infinity: true,
  responsive: [{ breakpoint: 576, slidesNumber: 1 }]
};
const partnersSlider = new SliderCarousel(partnersSliderOptions);
partnersSlider.init();

// Reviews slider
const reviewsSliderOptions = {
  wrapper: '.reviews-slider',
  slideList: '.reviews-slider .js-slider-wrap',
  togglePrev: '#reviews-arrow_left',
  toggleNext: '#reviews-arrow_right',
  dotList: '.slider-dots-reviews',
  slidesNumber: 1
};
const reviewsSlider = new SliderCarousel(reviewsSliderOptions);
reviewsSlider.init();

// Advantages slider
const advantagesSliderOptions = {
  wrapper: '.formula-slider-wrap',
  slideList: '.formula-slider',
  togglePrev: '#formula-arrow_left',
  toggleNext: '#formula-arrow_right',
  activeItem: 'active-item',
  slidesNumber: 1
};
const advantagesSlider = new SliderCarousel(advantagesSliderOptions);
advantagesSlider.init();

// Problems slider
const problemsSliderOptions = {
  wrapper: '.problems-slider-wrap',
  slideList: '.problems-slider',
  togglePrev: '#problems-arrow_left',
  toggleNext: '#problems-arrow_right',
  activeItem: 'active-item',
  slidesNumber: 1
};
const problemsSlider = new SliderCarousel(problemsSliderOptions);
problemsSlider.init();

// FAQ Accordion
faqAccordion();

// functional of document block
documents();

// scheme tabs
const schemeTabSelectors = {
  section: '.scheme',
  tab: '.button_o',
  tabContent: '.scheme-description-block',
  sliderWrap: '.js-slider-wrap',
  slide: '.scheme-slider__slide',
  options: {
    tabActive: 'active',
    tabContentActive: 'visible-content-block'
  }
};
const schemeTabHandler = new TabHandler(schemeTabSelectors);
schemeTabHandler.init();

// scheme tabs slider
tabsSlider('.scheme');

// repair-types tabs and sliders
repairTypes();

// functional of design block
designs();

// functional of design popup
popupDesign();

// functional of portfolio block
portfolio();

// Add a phone number input mask
maskPhone('input[name="phone"]');

// Send form
sendForm();

// Render data of .popup-repair-types
renderRepairTypesData('db/db.json');
