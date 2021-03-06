import togglePopup from './togglePopup';
import SliderCarouselCounter from './SliderCarouselCounter';

const portfolio = () => {

  // slider
  class PortfolioSlider extends SliderCarouselCounter {
    constructor(sliderOptions) {
      super(sliderOptions);

      this.wrapperMobile = document.querySelector(sliderOptions.wrapperMobile);
      this.slideListMobile = document.querySelector(sliderOptions.slideListMobile);
      this.slidesMobile = this.slideListMobile.children;
      this.togglePrevMobile = document.querySelector(sliderOptions.togglePrevMobile);
      this.toggleNextMobile = document.querySelector(sliderOptions.toggleNextMobile);

      this.options.slideWidth = sliderOptions.slideWidth;
    }

    init() {
      if (this.togglePrev && this.toggleNext) this.configureToggles();

      if (this.counter) this.updateCounter();

      if (this.responsive) this.makeSliderResponsive();
    }

    configureToggles() {
      super.configureToggles();
      this.togglePrevMobile.addEventListener('click', this.prevSlide.bind(this));
      this.toggleNextMobile.addEventListener('click', this.nextSlide.bind(this));
    }

    prevSlide() {
      if (this.options.position > 0) {
        this.options.position--;

        if (document.documentElement.clientWidth < 576) {
          this.slideListMobile.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`;
        } else {
          this.slideList.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`;
        }

        this.toggleHandler('flex');
      }

      this.counter.current.textContent = this.options.position + 1;
    }

    nextSlide() {
      if (this.options.position < this.options.maxPosition) {
        this.options.position++;

        if (document.documentElement.clientWidth < 576) {
          this.slideListMobile.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`;
        } else {
          this.slideList.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`;
        }

        this.toggleHandler('flex');
      }

      this.counter.current.textContent = this.options.position + 1;
    }

    toggleHandler(propValue) {
      if (this.options.position === 0) {
        this.hideToggle(this.togglePrev);
      } else {
        this.showToggle(this.togglePrev, propValue);
      }

      if (this.options.position === this.options.maxPosition) {
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
        defaultSlideWidth = this.options.slideWidth,
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
            if (this.responsive[i].displayedSlidesNumber === 1) {
              this.options.slideWidth = 393.75;

              if (windowWidth < 576) {
                this.options.slideWidth = 290;
              }
            } else {
              this.options.slideWidth = defaultSlideWidth;
            }
            this.updateOptions();
          }
        });
      } else {
        this.slidesNumber = defaultSlidesNumber;
        this.options.slideWidth = defaultSlideWidth;
        this.updateOptions();
      }
    }

    updateOptions() {
      this.options.position = 0;
      if (document.documentElement.clientWidth < 576) {
        this.slideListMobile.style.transform = 'translateX(0)';
        this.options.maxPosition = this.slidesMobile.length - this.slidesNumber;
      } else {
        this.slideList.style.transform = 'translateX(0)';
        this.options.maxPosition = this.slides.length - this.slidesNumber;
      }

      this.updateCounter();

      this.toggleHandler('flex');
    }

    updateCounter() {
      super.updateCounter();
      if (document.documentElement.clientWidth < 576) {
        this.counter.total.textContent = this.slidesMobile.length;
      }
    }
  }

  const sliderOptions = {
    wrapper: '.portfolio-slider',
    wrapperMobile: '.portfolio-slider-mobile',
    slideList: '.portfolio__slide-list',
    slideListMobile: '.portfolio__slide-list-mobile',
    togglePrev: '#portfolio-arrow_left',
    toggleNext: '#portfolio-arrow_right',
    togglePrevMobile: '#portfolio-arrow-mobile_left',
    toggleNextMobile: '#portfolio-arrow-mobile_right',
    counter: '#portfolio-counter',
    slidesNumber: 3,
    slideWidth: 344.667,
    responsive: [{ breakpoint: 1025, displayedSlidesNumber: 2 }, { breakpoint: 900, displayedSlidesNumber: 1 }]
  };

  const slider = new PortfolioSlider(sliderOptions);

  // popup slider
  class PopupPortfolioSlider extends SliderCarouselCounter {
    constructor(sliderOptions) {
      super(sliderOptions);

      this.addContent = document.querySelectorAll(sliderOptions.additionalContent);
      this.activeAddContent = sliderOptions.activeAddContent;
    }

    removeActive(position) {
      if (this.addContent) this.addContent[position].classList.remove(this.activeAddContent);
    }

    addActive(position) {
      if (this.addContent) this.addContent[position].classList.add(this.activeAddContent);
    }
  }

  const popupSliderOptions = {
    wrapper: '.popup-portfolio-slider-wrap',
    slideList: '.popup-portfolio-slider',
    togglePrev: '#popup_portfolio_left',
    toggleNext: '#popup_portfolio_right',
    additionalContent: '.popup-portfolio-text',
    activeAddContent: 'visible',
    counter: '#popup-portfolio-counter',
    slidesNumber: 1
  };

  const popupSlider = new PopupPortfolioSlider(popupSliderOptions);

  // popup
  const section = document.querySelector('.portfolio');

  const popup = document.querySelector('.popup-portfolio'),
    popupSlides = popup.querySelectorAll('.popup-portfolio-slider__slide'),
    popupTexts = popup.querySelectorAll('.popup-portfolio-text'),
    popupSlideCurrentNum = popup.querySelector('.slider-counter-content__current'),
    popupSlideTotalNum = popup.querySelector('.slider-counter-content__total');

  let portfolioItems = section.querySelectorAll('.portfolio__slide-list .portfolio-slider__slide-frame');

  section.addEventListener('click', evt => {
    const target = evt.target.closest('.portfolio-slider__slide-frame');

    if (!target) return;

    if (document.documentElement.clientWidth < 576) {
      portfolioItems = section.querySelectorAll('.portfolio__slide-list-mobile .portfolio-slider__slide-frame');
    } else {
      portfolioItems = section.querySelectorAll('.portfolio__slide-list .portfolio-slider__slide-frame');
    }

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
