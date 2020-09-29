class SliderCarousel {
  constructor({
    wrapper, slideList, togglePrev, toggleNext, dotList, activeItem,
    position = 0,
    slidesNumber = 4,
    infinity = false,
    responsive = [],
  }) {
    this.wrapper = document.querySelector(wrapper);
    this.slideList = document.querySelector(slideList);
    this.slides = this.slideList.children;
    this.togglePrev = document.querySelector(togglePrev);
    this.toggleNext = document.querySelector(toggleNext);
    this.slidesNumber = slidesNumber;
    this.sliderId = (~~(Math.random() * 1e8)).toString(16);

    this.dotList = document.querySelector(dotList);
    this.activeItem = activeItem;

    this.options = {
      position,
      maxPosition: this.slides.length - this.slidesNumber,
      slideWidth: Math.floor(100 / this.slidesNumber),
      infinity
    };
    this.responsive = responsive;
  }

  init() {
    this.addClasses();
    this.addStyles();

    if (this.togglePrev && this.toggleNext) {
      this.configureToggles();
    } else {
      this.addToggles();
      this.configureToggles();
    }

    if (this.dotList) {
      this.dotHandler();
    }

    if (this.responsive) {
      this.makeSliderResponsive();
    }
  }

  configureToggles() {
    this.togglePrev.addEventListener('click', this.prevSlide.bind(this));
    this.toggleNext.addEventListener('click', this.nextSlide.bind(this));
  }

  prevSlide() {
    if (this.options.position > 0 || this.options.infinity) {
      this.removeActive(this.options.position);
      this.options.position--;

      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }

      this.addActive(this.options.position);

      this.slideList.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
    }
  }

  nextSlide() {
    if (this.options.position < this.options.maxPosition || this.options.infinity) {
      this.removeActive(this.options.position);
      this.options.position++;

      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }

      this.addActive(this.options.position);

      this.slideList.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
    }
  }

  removeActive(position) {
    if (this.dots) this.dots[position].classList.remove('dot_active');
    if (this.activeItem) this.slides[position].classList.remove(this.activeItem);
  }

  addActive(position) {
    if (this.dots) this.dots[position].classList.add('dot_active');
    if (this.activeItem) this.slides[position].classList.add(this.activeItem);
  }

  dotHandler() {
    this.dots = [...this.dotList.children];
    this.dotList.addEventListener('click', evt => {
      const dotTarget = evt.target.closest('.dot');

      if (!dotTarget) return;

      this.dots.forEach((dot, i) => {
        if (dot === dotTarget) {
          dot.classList.add('dot_active');
          this.options.position = i;
          this.slideList.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
        } else {
          dot.classList.remove('dot_active');
        }
      });
    });
  }

  addClasses() {
    this.wrapper.classList.add('gsk-slider');
    this.slideList.classList.add('gsk-slider__list');
    [...this.slides].forEach(slide => {
      slide.classList.add('gsk-slider__item');
      slide.classList.add(`gsk-slider__item--${this.sliderId}`);
    });
    if (this.activeItem) this.slides[0].classList.add(this.activeItem);
  }

  addStyles() {
    let style = document.getElementById(`gsk-slider--${this.sliderId}`);
    if (!style) {
      style = document.createElement('style');
      style.id = `gsk-slider--${this.sliderId}`;
    }

    style.textContent = `
      .gsk-slider__item--${this.sliderId} {
        -ms-flex-preferred-size: ${this.options.slideWidth}% !important;
        flex-basis: ${this.options.slideWidth}% !important;
      }`;

    document.head.append(style);
  }

  createToggle(type = '', textContent = '', elementClass = 'gsk-slider__toggle') {
    const toggle = document.createElement('button');
    toggle.className = `${elementClass} ${elementClass}--${type}`;
    toggle.type = 'button';
    toggle.textContent = textContent;

    return toggle;
  }

  addToggles() {
    const togglesWrapper = document.createElement('div');
    togglesWrapper.className = 'gsk-slider__toggles';

    this.togglePrev = this.createToggle('prev', 'Назад');
    this.toggleNext = this.createToggle('next', 'Вперед');

    togglesWrapper.append(this.togglePrev);
    togglesWrapper.append(this.toggleNext);

    this.wrapper.append(togglesWrapper);
  }

  makeSliderResponsive() {
    const defaultSlidesNumber = this.slidesNumber,
      allBreakpoints = this.responsive.map(item => item.breakpoint),
      maxBreakpoint = Math.max(...allBreakpoints);

    this.checkWindowWidth(allBreakpoints, maxBreakpoint, defaultSlidesNumber);

    window.addEventListener('resize',
      this.checkWindowWidth.bind(this, allBreakpoints, maxBreakpoint, defaultSlidesNumber));
  }

  checkWindowWidth(allBreakpoints, maxBreakpoint, defaultSlidesNumber = 4) {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth < maxBreakpoint) {
      allBreakpoints.forEach((breakpoint, i) => {
        if (windowWidth < breakpoint) {
          this.slidesNumber = this.responsive[i].slidesNumber;
          this.updateOptions();
        }
      });
    } else {
      this.slidesNumber = defaultSlidesNumber;
      this.updateOptions();
    }
  }

  updateOptions() {
    this.slideList.style.transform = 'translateX(0)';
    this.options.maxPosition = this.slides.length - this.slidesNumber;
    this.options.slideWidth = Math.floor(100 / this.slidesNumber);
    this.addStyles();
  }
}

export default SliderCarousel;
