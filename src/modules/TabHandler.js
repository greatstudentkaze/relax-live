class TabHandler {
  constructor({ section, tab, tabContent, sliderWrap, slide, options }) {
    this.section = document.querySelector(section);
    this.tabs = this.section.querySelectorAll(tab);
    this.tabsContent = this.section.querySelectorAll(tabContent);

    this.sliderWrap = this.section.querySelector(sliderWrap);

    this.options = {
      tabSelector: tab,
      slideSelector: slide,

      tabActive: options.tabActive,
      tabContentActive: options.tabContentActive
    };
  }

  init() {
    this.addEventListeners();
  }

  toggleTabContent(index) {
    if (this.sliderWrap) {
      this.getSelectedSlide();
    }

    this.tabsContent.forEach((tabContent, i) => {
      if (index === i) {
        this.openTab(i, tabContent);

        if (this.sliderWrap) {
          this.sliderWrap.style.transform = `translateX(-${i * this.slide.clientWidth}px`;
        }
      } else {
        this.closeTab(i, tabContent);
      }
    });
  }

  openTab(index, tabContent) {
    this.tabs[index].classList.add(this.options.tabActive);
    tabContent.classList.add(this.options.tabContentActive);
  }

  closeTab(index, tabContent) {
    this.tabs[index].classList.remove(this.options.tabActive);
    tabContent.classList.remove(this.options.tabContentActive);
  }

  getSelectedSlide() {
    this.slide = this.sliderWrap.querySelector(this.options.slideSelector);
  }

  sectionHandler(evt) {
    const target = evt.target,
      targetTab = target.closest(this.options.tabSelector);

    if (targetTab) {
      this.tabs.forEach((tab, index) => {
        if (tab === targetTab) {
          this.toggleTabContent(index);
        }
      });
    }
  }

  addEventListeners() {
    this.section.addEventListener('click', this.sectionHandler.bind(this));
  }
}

export default TabHandler;
