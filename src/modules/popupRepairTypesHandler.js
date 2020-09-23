import togglePopup from './togglePopup';

const popupRepairTypesHandler = () => {
  const repairTypesPopup = document.querySelector('.popup-repair-types');

  document.addEventListener('click', evt => {
    const target = evt.target,
      linkList = target.closest('.link-list'),
      closeBtn = target.closest('.close'),
      areaOutsidePopup = !target.closest('.popup-dialog-repair-types');

    if (linkList || closeBtn ||
      (areaOutsidePopup && repairTypesPopup.classList.contains('popup--opened'))) {
      evt.preventDefault();
      togglePopup(repairTypesPopup);
    }
  });
};

export default popupRepairTypesHandler;
