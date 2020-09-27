const portfolio = () => {

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
  slider.init();

};

export default portfolio;
