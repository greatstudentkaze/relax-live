import popupHandler from './popupHandler';
import SliderCarouselCounter from './SliderCarouselCounter';
import TabHandler from './TabHandler';
import tabsSlider from './tabsSlider';

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
  class PopupDesignTabHandler extends TabHandler {

    toggleTabContent(index) {
      super.toggleTabContent(index);
      popupSlider.updateSlider();
    }
  }

  const tabSelectors = {
    section: '.popup-dialog-design',
    tab: '.button_o',
    tabContent: '.popup-designs-slider__style',
    addTabContent: '.popup-design-text',
    sliderWrap: '.popup-designs-slider__style__style.visible-content-block',
    slide: '.popup-design-slider__style-slide',
    options: {
      tabActive: 'active',
      tabContentActive: 'visible-content-block',
      addTabContentActive: 'visible-content-block'
    }
  };

  const tabHandler = new PopupDesignTabHandler(tabSelectors);
  tabHandler.init();

  // tabs slider
  tabsSlider('.popup-dialog-design');
};

export default popupDesign;
