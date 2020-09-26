const tabsSlider = sectionSelector => {
  const tabsWrap = document.querySelector(`${sectionSelector} .nav-wrap`),
    tabList = tabsWrap.querySelector('.nav-list'),
    tabs = tabsWrap.querySelectorAll('.button_o');

  let currentTab = 0,
    scrollWidth = 0,
    maxPosition = tabs.length;

  const checkWindowWidth = () => {
    tabList.style.transform = '';
    currentTab = 0;
    scrollWidth = 0;

    if (document.documentElement.clientWidth <= 576) {
      maxPosition = tabs.length - 1;
    } else if (document.documentElement.clientWidth <= 668) {
      maxPosition = tabs.length - 2;
    } else if (document.documentElement.clientWidth <= 1024) {
      maxPosition = tabs.length - 3;
    } else {
      maxPosition = tabs.length - 5;
    }
  };

  tabsWrap.addEventListener('click', evt => {
    const target = evt.target;

    if (!target.closest('.nav-arrow')) return;

    evt.preventDefault();

    if (target.closest('.nav-arrow_left')) {
      if (currentTab > 0) scrollWidth -= tabs[--currentTab].clientWidth;
      else if (currentTab < 0) currentTab = 0;
    } else if (target.closest('.nav-arrow_right')) {
      if (currentTab < maxPosition) scrollWidth += tabs[currentTab++].clientWidth;
      else if (currentTab > tabs.length) currentTab = tabs.length - 1;
    }

    tabList.style.transform = `translateX(-${scrollWidth}px)`;
  });

  window.addEventListener('resize', checkWindowWidth);

  checkWindowWidth();
};

export default tabsSlider;
