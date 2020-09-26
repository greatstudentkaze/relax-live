const tooltipHandler = ({ wrapperSelector, itemSelector, iconSelector, popupSelector, activeItemClass }) => {
  const wrapper = document.querySelector(wrapperSelector);

  wrapper.addEventListener('mouseover', evt => {
    const target = evt.target,
      item = target.closest(itemSelector);

    if (!target.closest(iconSelector)) return;

    const tooltip = item.querySelector(popupSelector);

    tooltip.classList.remove('item-popup--rotated');

    item.classList.add(activeItemClass);
    if (tooltip.getBoundingClientRect().top < 0) tooltip.classList.add('item-popup--rotated');
  });

  wrapper.addEventListener('mouseout', evt => {
    const target = evt.target,
      item = target.closest(itemSelector);

    if (!target.closest(iconSelector)) return;

    item.classList.remove(activeItemClass);
  });
};

export default tooltipHandler;
