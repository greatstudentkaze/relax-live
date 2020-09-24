const tooltipHandler = () => {
  const advantagesWrapper = document.querySelector('.wrapper_small');

  advantagesWrapper.addEventListener('mouseover', evt => {
    const target = evt.target,
      item = target.closest('.formula-item');

    if (!target.closest('.formula-item__icon-inner-text')) return;

    const tooltip = item.querySelector('.formula-item-popup');

    tooltip.classList.remove('formula-item-popup--rotated');

    item.classList.add('active-item');
    if (tooltip.getBoundingClientRect().top < 0) tooltip.classList.add('formula-item-popup--rotated');
  });

  advantagesWrapper.addEventListener('mouseout', evt => {
    const target = evt.target,
      item = target.closest('.formula-item');

    if (!target.closest('.formula-item__icon-inner-text')) return;

    item.classList.remove('active-item');
  });
};

export default tooltipHandler;
