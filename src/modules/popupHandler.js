import togglePopup from './togglePopup';

const popupHandler = selectors => {
  const { popupSelector, closeBtnSelector, popupDialogSelector,
    openBtnSelector, anotherPopupSelector } = selectors;

  const popup = document.querySelector(popupSelector),
    anotherPopup = document.querySelector(anotherPopupSelector);

  document.addEventListener('click', evt => {
    const target = evt.target,
      openBtn = target.closest(openBtnSelector),
      closeBtn = target.closest(closeBtnSelector) && target.closest(popupSelector),
      areaOutsidePopup = !target.closest(popupDialogSelector);

    if (anotherPopup && anotherPopup.classList.contains('popup--opened')) return;

    if (openBtn || closeBtn ||
      (areaOutsidePopup && popup.classList.contains('popup--opened'))) {
      evt.preventDefault();
      togglePopup(popup);
      document.body.style.overflowY = document.body.style.overflowY ? '' : 'hidden';
    }
  });
};

export default popupHandler;
