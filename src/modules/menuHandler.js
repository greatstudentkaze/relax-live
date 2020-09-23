import smoothScrollBy from './smoothScrollBy';

const menuHandler = () => {
  const menuPopup = document.querySelector('.popup-menu');

  const toggleMenu = () => menuPopup.classList.toggle('popup-menu--opened');

  document.addEventListener('click', evt => {
    const target = evt.target,
      menuBtn = target.closest('.menu'),
      closeBtn = target.closest('.close-menu'),
      menuItem = target.closest('.popup-menu-nav__item'),
      areaOutsideMenu = !target.closest('.popup-dialog-menu');

    if (menuBtn || closeBtn ||
      (areaOutsideMenu && menuPopup.classList.contains('popup-menu--opened'))) {
      evt.preventDefault();
      toggleMenu();
    } else if (menuItem) {
      evt.preventDefault();
      smoothScrollBy(document.getElementById(target.getAttribute('href').slice(1)));
      toggleMenu();
    }
  });
};

export default menuHandler;
