// Modules
import showPhoneNumber from './modules/showPhoneNumber';
import menuHandler from './modules/menuHandler';
import smoothScrollUp from './modules/smoothScrollUp';
import popupHandler from './modules/popupHandler';
import tooltipHandler from './modules/tooltipHandler';
import SliderCarousel from './modules/sliderCarousel';
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

// popup-privacy
const popupPrivacySelectors = {
  popupSelector: '.popup-privacy',
  openBtnSelector: '.link-privacy',
  closeBtnSelector: '.close',
  popupDialogSelector: '.popup-dialog-privacy'
};

popupHandler(popupPrivacySelectors);

// popup-consultation
const popupConsultationSelectors = {
  popupSelector: '.popup-consultation',
  openBtnSelector: '.js-consultation',
  closeBtnSelector: '.close-consultation',
  popupDialogSelector: '.feedback-wrap'
};

popupHandler(popupConsultationSelectors);

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
// const reviewsSliderOptions = {
//   wrapper: '.reviews-slider-wrap',
//   slideList: '.reviews-slider',
//   togglePrev: '#reviews-arrow_left',
//   toggleNext: '#reviews-arrow_right',
//   slidesNumber: 1,
// };
// const reviewsSlider = new SliderCarousel(reviewsSliderOptions);
// reviewsSlider.init();

// Send form
sendForm();
