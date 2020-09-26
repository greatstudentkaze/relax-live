// Modules
import showPhoneNumber from './modules/showPhoneNumber';
import menuHandler from './modules/menuHandler';
import smoothScrollUp from './modules/smoothScrollUp';
import popupHandler from './modules/popupHandler';
import tooltipHandler from './modules/tooltipHandler';
import SliderCarousel from './modules/sliderCarousel';
import faqAccordion from './modules/faqAccordion';
import tabs from './modules/tabs';
import tabsSlider from './modules/tabsSlider';
import sendForm from './modules/sendForm';

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

// Tooltips in the advantages block
tooltipHandler();

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
  slidesNumber: 1,
  extraStyles: '.gsk-slider__list { align-items: start !important; }'
};
const advantagesSlider = new SliderCarousel(advantagesSliderOptions);
advantagesSlider.init();

// FAQ Accordion
faqAccordion();

// scheme tabs
tabs();

// scheme tabs slider
tabsSlider();

// Send form
sendForm();
