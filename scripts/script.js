let menuSection = document.querySelector('.menu-section')
let menuToggle = document.querySelector('.menu-toggle')

menuToggle.onclick = e => {
  menuSection.classList.toggle('active')

  menuSection.className.includes('active')
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')
}
