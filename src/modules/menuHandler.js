import togglePopup from './togglePopup';
import smoothScrollBy from './smoothScrollBy';

const menuHandler = () => {
  const menuPopup = document.querySelector('.popup-menu');

  document.addEventListener('click', evt => {
    const target = evt.target,
      menuBtn = target.closest('.menu'),
      closeBtn = target.closest('.close-menu'),
      menuItem = target.closest('.popup-menu-nav__item'),
      linkList = target.closest('.link-list'),
      areaOutsideMenu = !target.closest('.popup-dialog-menu');

    if (menuBtn || closeBtn ||
      (areaOutsideMenu && menuPopup.classList.contains('popup--opened'))) {
      evt.preventDefault();
      togglePopup(menuPopup);
    } else if (menuItem) {
      evt.preventDefault();
      smoothScrollBy(document.getElementById(target.getAttribute('href').slice(1)));
      togglePopup(menuPopup);
    } else if (linkList) {
      menuPopup.classList.remove('popup--opened');
    }
  });
};

export default menuHandler;
