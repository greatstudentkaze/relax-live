import popupHandler from './popupHandler';
import SliderCarousel from './sliderCarousel';

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

  // popup slider
  class PopupDocumentsSlider extends SliderCarousel {
    constructor(sliderOptions) {
      super(sliderOptions);

      this.counter = {
        wrapper: document.querySelector(sliderOptions.counter)
      };
      this.counter.current = this.counter.wrapper.querySelector('.slider-counter-content__current');
      this.counter.total = this.counter.wrapper.querySelector('.slider-counter-content__total');
    }

    init() {
      super.init();
      if (this.counter) this.updateCounter();
    }

    prevSlide() {
      super.prevSlide();
      this.counter.current.textContent = this.options.position + 1;
    }

    nextSlide() {
      super.nextSlide();
      this.counter.current.textContent = this.options.position + 1;
    }

    updateCounter() {
      this.counter.current.textContent = this.options.position + 1;
      this.counter.total.textContent = this.slides.length;
    }
  }

  const popupSliderOptions = {
    wrapper: '.popup-transparency-slider',
    slideList: '.popup-transparency .js-slides-wrapper',
    togglePrev: '#transparency_left',
    toggleNext: '#transparency_right',
    counter: '#transparency-popup-counter',
    slidesNumber: 1
  };

  const popupSlider = new PopupDocumentsSlider(popupSliderOptions);

  // popup
  const popupTransparencySelectors = {
    popupSelector: '.popup-transparency',
    openBtnSelector: '.transparency-item__img',
    closeBtnSelector: '.close',
    popupDialogSelector: '.popup-dialog-transparency'
  };

  popupHandler(popupTransparencySelectors);

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
};

export default documents;
