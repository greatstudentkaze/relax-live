const showPhoneNumber = () => {
  const phoneNumberAccordion = document.querySelector('.header-contacts__phone-number-accord'),
    arrowBtn = document.querySelector('.header-contacts__arrow');

  arrowBtn.addEventListener('click', evt => {
    evt.preventDefault();
    phoneNumberAccordion.classList.toggle('header-contacts__phone-number-accord--opened');
  });
};

export default showPhoneNumber;
