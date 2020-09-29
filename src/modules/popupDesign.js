import popupHandler from './popupHandler';
import tabsSlider from './tabsSlider';
import SliderCarouselCounter from './SliderCarouselCounter';

const popupDesign = () => {
  // popup
  const popupSelectors = {
    popupSelector: '.popup-design',
    openBtnSelector: '.link-list-designs',
    closeBtnSelector: '.close',
    popupDialogSelector: '.popup-dialog-design'
  };

  popupHandler(popupSelectors);

  // slider
  class DesignsSlider extends SliderCarouselCounter {
    updateSlider() {
      this.slideList.style.transform = '';
      this.slideList.classList.remove('gsk-slider__list');
      this.options.position = 0;

      this.slideList = document.querySelector('.popup-designs-slider__style.visible-content-block');
      this.slides = this.slideList.children;

      this.options.maxPosition = this.slides.length - this.slidesNumber;

      this.updateCounter();
      this.addClasses();
    }
  }

  const popupSliderOptions = {
    wrapper: '.popup-design-slider',
    slideList: '.popup-designs-slider__style.visible-content-block',
    togglePrev: '#popup_design_left',
    toggleNext: '#popup_design_right',
    counter: '#popup-designs-counter',
    slidesNumber: 1
  };

  const popupSlider = new DesignsSlider(popupSliderOptions);
  popupSlider.init();

  // tabs
  const section = document.querySelector('.popup-dialog-design'),
    tabs = section.querySelectorAll('.button_o'),
    tabsContent = section.querySelectorAll('.popup-designs-slider__style'),
    addTabsContent = section.querySelectorAll('.popup-design-text'),
    sliderWrap = section.querySelector('.popup-designs-slider__style__style.visible-content-block');

  const toggleTabContent = index => {
    let slide;
    if (sliderWrap) slide = sliderWrap.querySelector('.popup-design-slider__style-slide');

    tabsContent.forEach((tabContent, i) => {
      if (index === i) {
        tabs[i].classList.add('active');
        if (sliderWrap) sliderWrap.style.transform = `translateX(-${i * slide.clientWidth}px)`;
        tabContent.classList.add('visible-content-block');
        addTabsContent[i].classList.add('visible-content-block');
        popupSlider.updateSlider();
      } else {
        tabs[i].classList.remove('active');
        tabContent.classList.remove('visible-content-block');
        addTabsContent[i].classList.remove('visible-content-block');
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

  tabsSlider('.popup-dialog-design');
};

export default popupDesign;
