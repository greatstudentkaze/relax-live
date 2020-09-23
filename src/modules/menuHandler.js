import togglePopup from './togglePopup';
import smoothScrollBy from './smoothScrollBy';

const menuHandler = () => {
  const menuPopup = document.querySelector('.popup-menu'),
    menuBtn = document.querySelector('.menu');

  menuBtn.addEventListener('click', evt => {
    evt.preventDefault();
    togglePopup(menuPopup);
  });

  menuPopup.addEventListener('click', evt => {
    const target = evt.target,
      closeBtn = target.closest('.close-menu'),
      menuItem = target.closest('.popup-menu-nav__item'),
      areaOutsideMenu = !target.closest('.popup-dialog-menu');

    if (closeBtn || (areaOutsideMenu && menuPopup.classList.contains('popup--opened'))) {
      evt.preventDefault();
      togglePopup(menuPopup);
    } else if (menuItem) {
      evt.preventDefault();
      smoothScrollBy(document.getElementById(target.getAttribute('href').slice(1)));
      togglePopup(menuPopup);
    }
  });
};

export default menuHandler;
