import tabsSlider from './tabsSlider';
import SliderCarouselCounter from './SliderCarouselCounter';

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
  const section = document.querySelector('.designs'),
    tabs = section.querySelectorAll('.button_o'),
    tabsContent = section.querySelectorAll('.designs-slider__style'),
    addTabsContent = section.querySelectorAll('.preview-block');

  const currentTab = {
    slides: tabsContent[0].querySelectorAll('.designs-slider__style-slide'),
    previews: addTabsContent[0].querySelectorAll('.preview-block__item'),
  };

  const toggleTabContent = index => {
    tabsContent.forEach((tabContent, i) => {
      if (index === i) {
        tabs[i].classList.add('active');
        tabContent.classList.add('visible-content-block');
        addTabsContent[i].classList.add('visible');
        slider.updateSlider();
      } else {
        tabs[i].classList.remove('active');
        tabContent.classList.remove('visible-content-block');
        addTabsContent[i].classList.remove('visible');
      }
    });

    currentTab.slides = tabsContent[index].querySelectorAll('.designs-slider__style-slide');
    currentTab.previews = addTabsContent[index].querySelectorAll('.preview-block__item');
  };

  section.addEventListener('click', evt => {
    const target = evt.target,
      targetTab = target.closest('.button_o'),
      previewTarget = target.closest('.preview-block__item');

    if (targetTab) {
      tabs.forEach((tab, index) => {
        if (tab === targetTab) toggleTabContent(index);
      });
    }

    if (previewTarget) {
      currentTab.previews.forEach((preview, i) => {
        if (preview === previewTarget) {
          preview.classList.add('preview_active');
          currentTab.slides[i].classList.add('visible-content-block');
        } else {
          preview.classList.remove('preview_active');
          currentTab.slides[i].classList.remove('visible-content-block');
        }
      });
    }
  });

  tabsSlider('.designs');
};

export default designs;
