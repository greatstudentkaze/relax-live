const tooltipHandler = () => {
  const advantagesWrapper = document.querySelector('.wrapper_small');

  advantagesWrapper.addEventListener('mouseover', evt => {
    const target = evt.target,
      item = target.closest('.formula-item');

    if (!item) return;

    const tooltip = item.querySelector('.formula-item-popup');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';

    if (tooltip.getBoundingClientRect().top < 0) {
      console.log(1);
    }
  });

  advantagesWrapper.addEventListener('mouseout', evt => {
    const target = evt.target,
      item = target.closest('.formula-item');

    if (!item) return;

    const tooltip = item.querySelector('.formula-item-popup');
    tooltip.style.visibility = '';
    tooltip.style.opacity = '';
  });
};

export default tooltipHandler;
