window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButton()

  activateMenuAtCurentSection(home)
  activateMenuAtCurentSection(services)
  activateMenuAtCurentSection(about)
  activateMenuAtCurentSection(contact)

}

function activateMenuAtCurentSection(section) {
  const targetLine = scrollY +innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
   
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine


  const menuItem = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)
  
  menuItem.classList.remove('active')
  if (sectionBoundaries) {
    menuItem.classList.add('active')
  }

}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll') 
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700',
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services h4, 
#services h2, 
#services header, 
#services .card,
#about,
#about header,
#about .content`);
 
