const tabs = ({ sectionSelector, tabSelector, tabContentSelector,
  sliderWrapSelector, slideSelector, visibleTabContent }) => {

  const section = document.querySelector(sectionSelector),
    tabs = section.querySelectorAll(tabSelector),
    tabsContent = section.querySelectorAll(tabContentSelector),
    sliderWrap = section.querySelector(sliderWrapSelector);

  const toggleTabContent = index => {
    let slide;
    if (sliderWrap) slide = sliderWrap.querySelector(slideSelector);

    tabsContent.forEach((tabContent, i) => {
      if (index === i) {
        tabs[i].classList.add('active');
        if (sliderWrap) sliderWrap.style.transform = `translateX(-${i * slide.clientWidth}px)`;
        tabContent.classList.add(visibleTabContent);
      } else {
        tabs[i].classList.remove('active');
        tabContent.classList.remove(visibleTabContent);
      }
    });
  };

  section.addEventListener('click', evt => {
    const targetTab = evt.target.closest(tabSelector);

    if (targetTab) {
      tabs.forEach((tab, index) => {
        if (tab === targetTab) toggleTabContent(index);
      });
    }
  });

};

export default tabs;
