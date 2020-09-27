import tabsSlider from './tabsSlider';

const designs = () => {

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
