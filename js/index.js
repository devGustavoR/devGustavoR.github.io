/* ABRIR E FECHAR MENU */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/* ABRIR MENU */
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
  })
}

/* FECHAR MENU */
if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
  })
}

/* REMOVER MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* HABILIDADES */
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i<skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})

/* SCROLL */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ALTERAÇÃO NO FUNDO DO HEADER */
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SHOW SCROLL UP */ 

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* MODO ESCURO */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Tópico anteriormente seleccionado (se o utilizador o tiver seleccionado)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema actual que a interface tem validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// Validamos se o utilizador escolheu previamente um tópico
if (selectedTheme) {
  // Se a validação for cumprida, pergunta qual foi o problema para saber se ativamos ou desativamos o escuro
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Ativar / desativar o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicionar ou remover o dark
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardar o tema e o icone atual
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Definir textos
const jobs = [ 'Técnico de informática', 'Violinista',  'Gamer',];

// Puxar elemento HTML 
const jobTitleElement = document.getElementById('job-title');

// Definir a função que simula a digitação do texto
function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    jobTitleElement.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

    // Aguardar um curto período de tempo antes de chamar a si mesma novamente
    setTimeout(function() {
      typeWriter(text, i+1, fnCallback)
    }, 50);
  }
  else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 300);
  }
}

// Definir a função que reinicia o título original
function resetJobTitle() {
  const originalJobTitle = 'Desenvolvedor Front-end';
  typeWriter(originalJobTitle, 0, function(){
    // Aguardar um período de tempo antes de chamar a função de alteração do título do trabalho
    setTimeout(function(){
      // Verificar se ainda há trabalhos a serem exibidos
      if (jobs.length > 0) {
        const nextJobTitle = jobs.shift();
        changeJobTitle(nextJobTitle);
      } else {
        // Reiniciar a animação após exibir todos os textos anteriores
        jobs.push(jobs.shift()); // move o primeiro item para o final da lista
        resetJobTitle();
      }
    }, 2000);
  });
}

// Altera o título do trabalho
function changeJobTitle(jobTitle) {
  // Chamar a função de digitação do texto com o novo título
  typeWriter(jobTitle, 0, function(){
    setTimeout(function(){
      // Verificar se ainda há trabalhos a serem exibidos
      if (jobs.length > 0) {
        // Obter o próximo título da lista de trabalhos e removê-lo da lista
        const nextJobTitle = jobs.shift();
        // Chamar a função de alteração do título do trabalho com o próximo título
        changeJobTitle(nextJobTitle);
      } else {
        // Reiniciar a animação após exibir todos os textos anteriores
        jobs.push(jobs.shift()); // move o primeiro item para o final da lista
        resetJobTitle();
      }
    }, 2000);
  });
}

// Iniciar a animação de digitação do título do trabalho
resetJobTitle();

