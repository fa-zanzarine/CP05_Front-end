const header = document.getElementById('header')
const menuBtn = document.getElementById('menu-btn')
const menuMobile = document.getElementById('menu-mobile')

// deixa o cabeçalho quase sólido (90% opaco, classes do próprio Tailwind) depois que a página rola um pouco
function verificarScroll() {
  const rolou = window.scrollY > 40
  header.classList.toggle('bg-gray-950', rolou)
  header.classList.toggle('bg-opacity-90', rolou)
}

// abre/fecha o menu do celular
function alternarMenu() {
  const estaAberto = menuBtn.getAttribute('aria-expanded') === 'true'

  menuMobile.classList.toggle('hidden')
  menuBtn.setAttribute('aria-expanded', String(!estaAberto))

  const icone = menuBtn.querySelector('i')
  icone.classList.toggle('fa-bars')
  icone.classList.toggle('fa-xmark')
}

window.addEventListener('scroll', verificarScroll)
menuBtn.addEventListener('click', alternarMenu)

// fecha o menu do celular quando clica em algum link dele
const linksDoMenu = document.querySelectorAll('.menu-mobile-link')
linksDoMenu.forEach(function (link) {
  link.addEventListener('click', function () {
    menuMobile.classList.add('hidden')
    menuBtn.setAttribute('aria-expanded', 'false')

    const icone = menuBtn.querySelector('i')
    icone.classList.add('fa-bars')
    icone.classList.remove('fa-xmark')
  })
})
