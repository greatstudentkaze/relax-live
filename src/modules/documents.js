import popupHandler from './popupHandler';
import SliderCarousel from './SliderCarousel';
import SliderCarouselCounter from './SliderCarouselCounter';

const documents = () => {

  // slider
  const sliderOptions = {
    wrapper: '.transparency-slider-wrap',
    slideList: '.transparency-slider',
    togglePrev: '#transparency-arrow_left',
    toggleNext: '#transparency-arrow_right',
    slidesNumber: 3,
    responsive: [{ breakpoint: 1090, slidesNumber: 1 }]
  };

  const slider = new SliderCarousel(sliderOptions);

  // popup
  const popupTransparencySelectors = {
    popupSelector: '.popup-transparency',
    openBtnSelector: '.transparency-item__img',
    closeBtnSelector: '.close',
    popupDialogSelector: '.popup-dialog-transparency'
  };

  // popup slider
  const popupSliderOptions = {
    wrapper: '.popup-transparency-slider',
    slideList: '.popup-transparency .js-slides-wrapper',
    togglePrev: '#transparency_left',
    toggleNext: '#transparency_right',
    counter: '#transparency-popup-counter',
    slidesNumber: 1
  };

  const popupSlider = new SliderCarouselCounter(popupSliderOptions);

  const sliderWrap = document.querySelector('.transparency-slider-wrap'),
    documents = sliderWrap.querySelectorAll('.transparency-item__img');

  sliderWrap.addEventListener('click', evt => {
    const target = evt.target.closest('.transparency-item__img');

    if (!target) return;

    documents.forEach((documentImg, i) => {
      if (documentImg === target) {
        popupSlider.counter.current.textContent = i + 1;
        popupSlider.options.position = i;
        popupSlider.slideList.style.transform = `translateX(-${i * popupSlider.options.slideWidth}%)`;
      }
    });
  });

  // init
  slider.init();
  popupSlider.init();
  popupHandler(popupTransparencySelectors);
};

export default documents;
