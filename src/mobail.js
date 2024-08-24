document.querySelector('.burger').addEventListener('click', burgerClick);
document.querySelector('ul').addEventListener('click', handleClick);
document.querySelector('.hidden').addEventListener('click', backdropClick);

function handleClick(e) {
  console.log(e.target, e.target.nodeName, e.target.dataset);
  if (e.target.nodeName === 'A') {
    burgerClick();
  }
}

function backdropClick(e) {
  console.log(e.target, e.currentTarget);
  if (e.target === e.currentTarget) {
    burgerClick();
  }
}

function burgerClick() {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
  document.querySelector('.hidden').classList.toggle('none');
  document.querySelector('body').classList.toggle('hidding');
}
