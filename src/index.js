// Modules
import showPhoneNumber from './modules/showPhoneNumber';
import menuHandler from './modules/menuHandler';
import smoothScrollUp from './modules/smoothScrollUp';
import popupHandler from './modules/popupHandler';
import tooltipHandler from './modules/tooltipHandler';
import sendForm from './modules/sendForm';

// Init Modules

// Phone Number
showPhoneNumber();

// Menu
menuHandler();

// Smooth Scrolling Up
smoothScrollUp();

// popup-repair-types
const popupRepairTypesSelectors = {
  popupSelector: '.popup-repair-types',
  openBtnSelector: '.link-list',
  closeBtnSelector: '.close',
  popupDialogSelector: '.popup-dialog-repair-types'
};

popupHandler(popupRepairTypesSelectors);

// popup-privacy
const popupPrivacySelectors = {
  popupSelector: '.popup-privacy',
  openBtnSelector: '.link-privacy',
  closeBtnSelector: '.close',
  popupDialogSelector: '.popup-dialog-privacy'
};

popupHandler(popupPrivacySelectors);

// Tooltips in the advantages block
tooltipHandler();

// Send form
sendForm();
