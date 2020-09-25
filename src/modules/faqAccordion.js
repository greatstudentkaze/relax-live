const faqAccordion = () => {
  const accordion = document.querySelector('.js-accordion'),
    accordionItems = accordion.querySelectorAll('.js-accordion-item');

  const toggleAccordionItem = target => {
    accordionItems.forEach(accordionItem => {
      if (accordionItem === target) {
        accordionItem.classList.toggle('js-accordion-item-active');
      } else {
        accordionItem.classList.remove('js-accordion-item-active');
      }
    });
  };

  accordion.addEventListener('click', evt => {
    const target = evt.target,
      accordionItem = target.closest('.js-accordion-item'),
      openBtn = target.closest('.title_block');

    if (target !== openBtn) return;

    toggleAccordionItem(accordionItem);
  });
};

export default faqAccordion;
