import SliderCarousel from './SliderCarousel';

class SliderCarouselCounter extends SliderCarousel {
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

export default SliderCarouselCounter;
