const tabs = () => {
  const scheme = document.getElementById('scheme'),
    tabs = scheme.querySelectorAll('.button_o'),
    textTabs = scheme.querySelectorAll('.scheme-description-block'),
    sliderWrap = scheme.querySelector('.js-slider-wrap');

  const toggleTabContent = index => {
    const slide = sliderWrap.querySelector('.scheme-slider__slide');

    textTabs.forEach((tabContent, i) => {
      if (index === i) {
        tabs[i].classList.add('active');
        sliderWrap.style.transform = `translateY(-${i * slide.clientHeight}px)`;
        tabContent.classList.add('visible-content-block');
      } else {
        tabs[i].classList.remove('active');
        tabContent.classList.remove('visible-content-block');
      }
    });
  };

  scheme.addEventListener('click', evt => {
    const targetTab = evt.target.closest('.button_o');

    if (targetTab) {
      tabs.forEach((tab, index) => {
        if (tab === targetTab) toggleTabContent(index);
      });
    }
  });

};

export default tabs;
