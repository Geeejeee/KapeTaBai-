function toggleBodyClass() {
    document.body.classList.toggle('navbar-expanded');
    document.querySelector('.container').classList.toggle('navbar-expanded');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
  })

  sr.reveal('.menu-1', {delay:200, origin:'top'});
  sr.reveal('.menu-2', {delay:900, origin:'top'});