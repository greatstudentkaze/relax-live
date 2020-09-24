const tooltipHandler = () => {
  const advantagesWrapper = document.querySelector('.wrapper_small');

  advantagesWrapper.addEventListener('mouseover', evt => {
    const target = evt.target,
      item = target.closest('.formula-item');
    if (!item) return;

    item.classList.add('active-item');
    const tooltip = item.querySelector('.formula-item-popup');


    if (tooltip.getBoundingClientRect().top < 0) {
      tooltip.classList.add('formula-item-popup--rotated');
    } else {
      tooltip.classList.remove('formula-item-popup--rotated');
    }
  });

  advantagesWrapper.addEventListener('mouseout', evt => {
    const target = evt.target,
      item = target.closest('.formula-item');

    if (!item) return;

    item.classList.remove('active-item');
    const tooltip = item.querySelector('.formula-item-popup');

  });
};

export default tooltipHandler;
