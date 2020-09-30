import SliderCarouselCounter from './SliderCarouselCounter';
import TabHandler from './TabHandler';
import tabsSlider from './tabsSlider';

const repairTypes = () => {

  // slider
  class RepairTypesSlider extends SliderCarouselCounter {
    updateSlider() {
      this.slideList.style.transform = '';
      this.slideList.classList.remove('gsk-slider__list');
      this.options.position = 0;

      this.slideList = document.querySelector('.types-repair.visible-content-flex');
      this.slides = this.slideList.children;

      this.options.maxPosition = this.slides.length - this.slidesNumber;

      this.updateCounter();
      this.addClasses();
    }
  }

  const sliderOptions = {
    wrapper: '.repair-types-slider',
    slideList: '.types-repair.visible-content-flex',
    togglePrev: '#repair-types-arrow_left',
    toggleNext: '#repair-types-arrow_right',
    counter: '#repair-counter',
    slidesNumber: 1
  };

  const slider = new RepairTypesSlider(sliderOptions);
  slider.init();

  // tabs
  class RepairTypesTabHandler extends TabHandler {
    toggleTabContent(index) {
      super.toggleTabContent(index);
      slider.updateSlider();
    }
  }

  const tabSelectors = {
    section: '.repair-types',
    tab: '.button_o',
    tabContent: '.types-repair',
    sliderWrap: '.types-repair.visible-content-block',
    slide: '.repair-types-slider__slide',
    options: {
      tabActive: 'active',
      tabContentActive: 'visible-content-flex'
    }
  };

  const tabHandler = new RepairTypesTabHandler(tabSelectors);
  tabHandler.init();

  // tabs slider
  tabsSlider('.repair-types');
};

export default repairTypes;
