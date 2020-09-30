import tabsSlider from './tabsSlider';
import SliderCarouselCounter from './SliderCarouselCounter';
import TabHandler from './TabHandler';

const designs = () => {

  // slider (<= 1024px)
  class DesignsSlider extends SliderCarouselCounter {

    init() {
      if (this.togglePrev && this.toggleNext) this.configureToggles();

      if (this.counter) this.updateCounter();

      if (this.responsive) this.makeSliderResponsive();
    }

    prevSlide() {
      if (this.options.position > 0 || this.options.infinity) {
        this.removeActive(this.options.position);
        this.options.position--;

        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }

        this.addActive(this.options.position);
      }

      this.counter.current.textContent = this.options.position + 1;
    }

    nextSlide() {
      if (this.options.position < this.options.maxPosition || this.options.infinity) {
        this.removeActive(this.options.position);
        this.options.position++;

        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }

        this.addActive(this.options.position);
      }

      this.counter.current.textContent = this.options.position + 1;
    }

    updateSlider() {
      this.options.position = 0;

      this.slideList = document.querySelector('.designs-slider__style.visible-content-block');
      this.slides = this.slideList.children;

      this.options.maxPosition = this.slides.length - this.slidesNumber;

      this.updateCounter();
    }
  }

  const sliderOptions = {
    wrapper: '.designs-slider',
    slideList: '.designs-slider__style.visible-content-block',
    togglePrev: '#design_left',
    toggleNext: '#design_right',
    activeItem: 'visible-content-block',
    counter: '#designs-counter',
    slidesNumber: 1
  };

  const slider = new DesignsSlider(sliderOptions);
  slider.init();

  // tabs
  class DesignTabHandler extends TabHandler {
    constructor(props) {
      super(props);

      this.options.tabItemSelector = props.options.tabItem;
      this.options.tabItemActive = props.options.tabItemActive;
      this.options.addTabItemSelector = props.options.addTabItem;
      this.options.addTabItemActive = props.options.addTabItemActive;

      this.currentTab = {
        tabItems: this.tabsContent[0].querySelectorAll(this.options.tabItemSelector),
        addTabItems: this.addTabsContent[0].querySelectorAll(this.options.addTabItemSelector)
      };
    }

    toggleTabContent(index) {
      super.toggleTabContent(index);
      slider.updateSlider();

      this.currentTab.tabItems = this.tabsContent[index].querySelectorAll(this.options.tabItemSelector);
      this.currentTab.addTabItems = this.addTabsContent[index].querySelectorAll(this.options.addTabItemSelector);
    }

    sectionHandler(evt) {
      super.sectionHandler(evt);

      const addTabItemTarget = evt.target.closest(this.options.addTabItemSelector);

      if (addTabItemTarget) {
        this.currentTab.addTabItems.forEach((addTabItem, i) => {
          if (addTabItem === addTabItemTarget) {
            addTabItem.classList.add(this.options.addTabItemActive);
            this.currentTab.tabItems[i].classList.add(this.options.tabItemActive);
          } else {
            addTabItem.classList.remove(this.options.addTabItemActive);
            this.currentTab.tabItems[i].classList.remove(this.options.tabItemActive);
          }
        });
      }
    }
  }

  const tabsOptions = {
    section: '.designs',
    tab: '.button_o',
    tabContent: '.designs-slider__style',
    addTabContent: '.preview-block',
    options: {
      tabItem: '.designs-slider__style-slide',
      addTabItem: '.preview-block__item',
      tabActive: 'active',
      tabContentActive: 'visible-content-block',
      addTabContentActive: 'visible',
      tabItemActive: 'visible-content-block',
      addTabItemActive: 'preview_active',
    }
  };
  const designTabHandler = new DesignTabHandler(tabsOptions);
  designTabHandler.init();

  tabsSlider('.designs');
};

export default designs;
