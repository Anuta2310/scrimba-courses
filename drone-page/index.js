const menuBtn = document.querySelector('.menu-btn')
      closeBtn = document.querySelector('.close-btn')
      navPanel = document.querySelector('.nav-panel');

menuBtn.addEventListener('click', () => {
  navPanel.style.visibility = 'visible'
})
closeBtn.addEventListener('click', () => {
  navPanel.style.visibility = 'hidden'
})
