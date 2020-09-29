import SliderCarouselCounter from './SliderCarouselCounter';
import tabsSlider from "./tabsSlider";

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

  const repairTypesSliderOptions = {
    wrapper: '.repair-types-slider',
    slideList: '.types-repair.visible-content-flex',
    togglePrev: '#repair-types-arrow_left',
    toggleNext: '#repair-types-arrow_right',
    counter: '#repair-counter',
    slidesNumber: 1
  };

  const repairTypesSlider = new RepairTypesSlider(repairTypesSliderOptions);
  repairTypesSlider.init();

  // tabs
  const section = document.querySelector('.repair-types'),
    tabs = section.querySelectorAll('.button_o'),
    tabsContent = section.querySelectorAll('.types-repair'),
    sliderWrap = section.querySelector('.types-repair.visible-content-block');

  const toggleTabContent = index => {
    let slide;
    if (sliderWrap) slide = sliderWrap.querySelector('.repair-types-slider__slide');

    tabsContent.forEach((tabContent, i) => {
      if (index === i) {
        tabs[i].classList.add('active');
        if (sliderWrap) sliderWrap.style.transform = `translateX(-${i * slide.clientWidth}px)`;
        tabContent.classList.add('visible-content-flex');
        repairTypesSlider.updateSlider();
      } else {
        tabs[i].classList.remove('active');
        tabContent.classList.remove('visible-content-flex');
      }
    });
  };

  section.addEventListener('click', evt => {
    const targetTab = evt.target.closest('.button_o');

    if (targetTab) {
      tabs.forEach((tab, index) => {
        if (tab === targetTab) toggleTabContent(index);
      });
    }
  });

  // tabs slider
  tabsSlider('.repair-types');
};

export default repairTypes;
