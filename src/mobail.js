document.querySelector('.burger').addEventListener('click', burgerClick);
document.querySelector('ul').addEventListener('click', handleClick);
document.querySelector('.hidden').addEventListener('click', backdropClick);

function handleClick(e) {
  console.log(e.target, e.target.nodeName);
  //   console.log(window.innerWidth);
  if (e.target.nodeName === 'A' && window.innerWidth < 1440) {
    close();
  }
}

function backdropClick(e) {
  console.log(e.target, e.currentTarget);
  if (e.target === e.currentTarget) {
    close();
  }
}

function burgerClick() {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
  document.querySelector('.hidden').classList.toggle('none');
  document.querySelector('body').classList.toggle('hidding');
}

function close() {
  document.querySelector('.burger').classList.remove('active');
  document.querySelector('.nav').classList.remove('open');
  document.querySelector('.hidden').classList.remove('none');
  document.querySelector('body').classList.remove('hidding');
}
