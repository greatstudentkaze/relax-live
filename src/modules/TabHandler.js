class TabHandler {
  constructor({ section, tab, tabContent, addTabContent, sliderWrap, slide, options }) {
    this.section = document.querySelector(section);
    this.tabs = this.section.querySelectorAll(tab);
    this.tabsContent = this.section.querySelectorAll(tabContent);

    this.addTabsContent = this.section.querySelectorAll(addTabContent);

    this.sliderWrap = this.section.querySelector(sliderWrap);

    this.options = {
      tabSelector: tab,
      addTabContentSelector: addTabContent,
      slideSelector: slide,

      tabActive: options.tabActive,
      tabContentActive: options.tabContentActive,
      addTabContentActive: options.addTabContentActive
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

    if (this.options.addTabContentSelector) {
      this.addTabsContent[index].classList.add((this.options.addTabContentActive));
    }
  }

  closeTab(index, tabContent) {
    this.tabs[index].classList.remove(this.options.tabActive);
    tabContent.classList.remove(this.options.tabContentActive);

    if (this.options.addTabContentSelector) {
      this.addTabsContent[index].classList.remove((this.options.addTabContentActive));
    }
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
