import togglePopup from './togglePopup';
import SliderCarousel from './sliderCarousel';

const portfolio = () => {

  // slider
  class PortfolioSlider {
    constructor({ wrap, slideList, togglePrev, toggleNext, displayedSlidesNumber, responsive, slideWidth }) {
      this.wrapper = document.querySelector(wrap);
      this.slideList = document.querySelector(slideList);
      this.slides = this.slideList.children;

      this.togglePrev = document.querySelector(togglePrev);
      this.toggleNext = document.querySelector(toggleNext);

      this.slidesNumber = displayedSlidesNumber;

      this.responsive = responsive;

      this.position = 0;
      this.maxPosition = this.slides.length - this.slidesNumber;
      this.slideWidth = slideWidth;
    }

    init() {
      if (this.togglePrev && this.toggleNext) this.configureToggles();

      if (this.responsive) this.makeSliderResponsive();
    }

    prevSlide() {
      if (this.position > 0) {
        this.position--;

        this.slideList.style.transform = `translateX(-${this.position * this.slideWidth}px)`;

        this.toggleHandler('flex');
      }
    }

    nextSlide() {
      if (this.position < this.maxPosition) {
        this.position++;

        this.slideList.style.transform = `translateX(-${this.position * this.slideWidth}px)`;

        this.toggleHandler('flex');
      }
    }

    configureToggles() {
      this.togglePrev.addEventListener('click', this.prevSlide.bind(this));
      this.toggleNext.addEventListener('click', this.nextSlide.bind(this));
    }

    toggleHandler(propValue) {
      if (this.position === 0) {
        this.hideToggle(this.togglePrev);
      } else {
        this.showToggle(this.togglePrev, propValue);
      }

      if (this.position === this.maxPosition) {
        this.hideToggle(this.toggleNext);
      } else {
        this.showToggle(this.toggleNext, propValue);
      }
    }

    hideToggle(toggle) {
      toggle.style.display = 'none';
    }

    showToggle(toggle, value) {
      toggle.style.display = value ? value : '';
    }

    makeSliderResponsive() {
      const defaultSlidesNumber = this.slidesNumber,
        defaultSlideWidth = this.slideWidth,
        allBreakpoints = this.responsive.map(item => item.breakpoint),
        maxBreakpoint = Math.max(...allBreakpoints);

      this.checkWindowWidth(allBreakpoints, maxBreakpoint, defaultSlidesNumber, defaultSlideWidth);

      window.addEventListener('resize',
        this.checkWindowWidth.bind(this, allBreakpoints, maxBreakpoint, defaultSlidesNumber, defaultSlideWidth));
    }

    checkWindowWidth(allBreakpoints, maxBreakpoint, defaultSlidesNumber = 4, defaultSlideWidth) {
      const windowWidth = document.documentElement.clientWidth;

      if (windowWidth < maxBreakpoint) {
        allBreakpoints.forEach((breakpoint, i) => {
          if (windowWidth < breakpoint) {
            this.slidesNumber = this.responsive[i].displayedSlidesNumber;
            if (this.responsive[i].displayedSlidesNumber === 1) this.slideWidth = 393.75;
            else this.slideWidth = defaultSlideWidth;
            this.updateOptions();
          }
        });
      } else {
        this.slidesNumber = defaultSlidesNumber;
        this.slideWidth = defaultSlideWidth;
        this.updateOptions();
      }
    }

    updateOptions() {
      this.slideList.style.transform = 'translateX(0)';
      this.maxPosition = this.slides.length - this.slidesNumber;
      this.position = 0;
      this.toggleHandler('flex');
    }
  }

  const sliderOptions = {
    wrap: '.portfolio-slider',
    slideList: '.portfolio__slide-list',
    togglePrev: '#portfolio-arrow_left',
    toggleNext: '#portfolio-arrow_right',
    displayedSlidesNumber: 3,
    slideWidth: 344.667,
    responsive: [{ breakpoint: 1025, displayedSlidesNumber: 2 }, { breakpoint: 900, displayedSlidesNumber: 1 }]
  };

  const slider = new PortfolioSlider(sliderOptions);

  // popup slider
  class PopupPortfolioSlider extends SliderCarousel {
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
    wrapper: '.popup-portfolio-slider-wrap',
    slideList: '.popup-portfolio-slider',
    togglePrev: '#popup_portfolio_left',
    toggleNext: '#popup_portfolio_right',
    counter: '#popup-portfolio-counter',
    slidesNumber: 1
  };

  const popupSlider = new PopupPortfolioSlider(popupSliderOptions);

  // popup
  const section = document.querySelector('.portfolio'),
    portfolioItems = section.querySelectorAll('.portfolio__slide-list .portfolio-slider__slide-frame');

  const popup = document.querySelector('.popup-portfolio'),
    popupSlides = popup.querySelectorAll('.popup-portfolio-slider__slide'),
    popupTexts = popup.querySelectorAll('.popup-portfolio-text'),
    popupSlideCurrentNum = popup.querySelector('.slider-counter-content__current'),
    popupSlideTotalNum = popup.querySelector('.slider-counter-content__total');

  section.addEventListener('click', evt => {
    const target = evt.target.closest('.portfolio-slider__slide-frame');

    if (!target) return;

    portfolioItems.forEach((portfolioItem, i) => {
      if (portfolioItem === target) {
        popupSlides[i].classList.add('visible-content-block');
        popupTexts[i].classList.add('visible');
        popupSlideCurrentNum.textContent = i + 1;
        popupSlider.options.position = i;
        popupSlider.slideList.style.transform = `translateX(-${i * popupSlider.options.slideWidth}%)`;
      }
    });

    togglePopup(popup);
    document.body.style.overflowY = 'hidden';
  });

  popup.addEventListener('click', evt => {
    const target = evt.target,
      closeBtn = target.closest('.close'),
      areaOutsidePopup = !target.closest('.popup-dialog-portfolio');

    if (closeBtn || (areaOutsidePopup && popup.classList.contains('popup--opened'))) {
      evt.preventDefault();

      const slide = popup.querySelector('.popup-portfolio-slider__slide.visible-content-block'),
        text = popup.querySelector('.popup-portfolio-text.visible');

      togglePopup(popup);
      document.body.style.overflowY = '';

      slide.classList.remove('visible-content-block');
      text.classList.remove('visible');
    }
  });

  // init
  popupSlideTotalNum.textContent = portfolioItems.length;
  slider.init();
  popupSlider.init();
};

export default portfolio;
