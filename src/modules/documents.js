import popupHandler from './popupHandler';
import SliderCarousel from './sliderCarousel';

const documents = () => {
  // popup
  const popupTransparencySelectors = {
    popupSelector: '.popup-transparency',
    openBtnSelector: '.transparency-item__img',
    closeBtnSelector: '.close',
    popupDialogSelector: '.popup-dialog-transparency'
  };

  popupHandler(popupTransparencySelectors);

  // sliders
  class DocumentsSlider extends SliderCarousel {
    constructor(sliderOptions) {
      super(sliderOptions);
      this.addSlideList = document.querySelector(sliderOptions.addSlideList);
      this.addSlides = this.addSlideList.children;
      this.addTogglePrev = document.querySelector(sliderOptions.addTogglePrev);
      this.addToggleNext = document.querySelector(sliderOptions.addToggleNext);
      this.addSlidesNumber = sliderOptions.addSlidesNumber;
      this.counter = {
        wrapper: document.querySelector(sliderOptions.counter)
      };
      this.counter.current = this.counter.wrapper.querySelector('.slider-counter-content__current');
      this.counter.total = this.counter.wrapper.querySelector('.slider-counter-content__total');
    }

    init() {
      super.init();
      if (this.counter) this.updateCounter();
      if (this.slidesNumber > this.addSlidesNumber) {
        this.options.addPosition = 0;
        this.options.addMaxPosition = this.addSlides.length - this.addSlidesNumber;
      }
    }

    configureToggles() {
      super.configureToggles();
      this.addTogglePrev.addEventListener('click', this.prevSlide.bind(this));
      this.addToggleNext.addEventListener('click', this.nextSlide.bind(this));
    }

    prevSlide() {
      super.prevSlide();
      this.counter.current.textContent = this.options.position + 1;
      if (this.options.addMaxPosition) {
        this.removeActive(this.options.addPosition--);

        if (this.options.addPosition < 0) {
          this.options.addPosition = this.options.addMaxPosition;
        }

        this.addActive(this.options.addPosition);
        this.counter.current.textContent = this.options.addPosition + 1;
      }
    }

    nextSlide() {
      super.nextSlide();
      this.counter.current.textContent = this.options.position + 1;
      if (this.options.addMaxPosition) {
        this.removeActive(this.options.addPosition++);

        if (this.options.addPosition > this.options.addMaxPosition) {
          this.options.addPosition = 0;
        }

        this.addActive(this.options.addPosition);
        this.counter.current.textContent = this.options.addPosition + 1;
      }
    }

    removeActive(position) {
      if (this.activeItem) this.addSlides[position].classList.remove(this.activeItem);
    }

    addActive(position) {
      if (this.activeItem) this.addSlides[position].classList.add(this.activeItem);
    }

    updateCounter() {
      this.counter.current.textContent = this.options.position + 1;
      this.counter.total.textContent = this.slides.length;
    }
  }

  const sliderOptions = {
    wrapper: '.transparency-slider-wrap',
    slideList: '.transparency-slider',
    togglePrev: '#transparency-arrow_left',
    toggleNext: '#transparency-arrow_right',
    addSlideList: '.popup-transparency-slider',
    addTogglePrev: '#transparency_left',
    addToggleNext: '#transparency_right',
    addSlidesNumber: 1,
    activeItem: 'visible-content-block',
    counter: '#transparency-popup-counter',
    slidesNumber: 3,
    responsive: [{ breakpoint: 1090, slidesNumber: 1 }]
  };
  const documentsSlider = new DocumentsSlider(sliderOptions);
  documentsSlider.init();
};

export default documents;
