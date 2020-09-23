import smoothScrollBy from './smoothScrollBy';

const smoothScrollUp = () => {
  const scrollUpBtn = document.querySelector('.button-footer'),
    scrollTarget = document.getElementById('main');

  scrollUpBtn.addEventListener('click', evt => {
    evt.preventDefault();
    smoothScrollBy(scrollTarget);
  });
};

export default smoothScrollUp;
