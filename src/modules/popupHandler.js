import togglePopup from './togglePopup';

const popupHandler = ({ popupSelector, openBtnSelector, closeBtnSelector, popupDialogSelector }) => {
  const popup = document.querySelector(popupSelector);

  document.addEventListener('click', evt => {
    const target = evt.target,
      openBtn = target.closest(openBtnSelector),
      closeBtn = target.closest(closeBtnSelector) && target.closest(popupSelector),
      areaOutsidePopup = !target.closest(popupDialogSelector);

    if (openBtn || closeBtn ||
      (areaOutsidePopup && popup.classList.contains('popup--opened'))) {
      evt.preventDefault();
      togglePopup(popup);
      document.body.style.overflowY = document.body.style.overflowY ? '' : 'hidden';
    }
  });
};

export default popupHandler;
