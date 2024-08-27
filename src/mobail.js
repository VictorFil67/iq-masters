document.querySelector('.burger').addEventListener('click', burgerClick);
document.querySelector('ul').addEventListener('click', handleClick);
document.querySelector('.hidden').addEventListener('click', backdropClick);

function handleClick(e) {
  if (e.target.nodeName === 'A' && window.innerWidth < 1440) {
    const elem = e.target
      .getAttribute('href')
      .substring(e.target.getAttribute('href').indexOf('#'));
    console.log(elem);

    close();
    const sections = document.querySelectorAll('section');
    console.log(sections);
    sections.forEach(section => section.classList.remove('shift'));
    document.querySelector(elem).classList.add('shift');
    const newsections = document.querySelectorAll('section');
    console.log(newsections);
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
  document.querySelector('.hidden').classList.toggle('backdrop');
  document.querySelector('body').classList.toggle('hidding');
  const location = window.location.href;
}

function close() {
  document.querySelector('.burger').classList.remove('active');
  document.querySelector('.nav').classList.remove('open');
  document.querySelector('.hidden').classList.remove('backdrop');
  document.querySelector('body').classList.remove('hidding');
  const location = window.location.href;
  if (location.includes('#')) {
    console.log(location);
  }
}
