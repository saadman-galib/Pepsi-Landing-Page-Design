const body = document.querySelector('body')
const heroImg = document.querySelector('.hero-right-part img')
const footerImg = document.querySelectorAll('.footer-img-container img')
const navIcon = document.querySelector('.nav-icon')
const navbarItems = document.querySelector('.navbar-right-part')

footerImg.forEach((img) => {
  img.addEventListener('click', (e) => {
    heroImg.src = e.target.src
    body.style.backgroundColor = e.target.dataset.bg
  })
})

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('fa-bars')
  const closeAdded = navIcon.classList.toggle('fa-xmark')

  if (closeAdded) {
    navbarItems.style.left = '0'
  } else {
    navbarItems.style.left = '-165%'
  }
})
