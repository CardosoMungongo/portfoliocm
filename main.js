/*========================Show menu==============**/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
/*========================  Menu show==============**/
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
    
}
/*========================Menu HIDDEN==============**/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
    
}
/*========================Eemove menu mobile==============**/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========================alterar fundo do cabeçalho==============**/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //Cardoso Munogngo------/////
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

 
/*========================Email JS==============**/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
       e.preventDefault()
       
/*=======================  Serviços template==============*/
     emailjs.sendForm('service_1nx5gel','template_xctxubx','#contact-form','X0LtSBGPxIJZPIXnh')
     .then(() =>{
        contactMessage.textContent = '   Mensagem enviada com sucesso ✅ aguarde pela respota no seu email!'


        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
        

   // Clear inputfileds//
   contactForm. reset()

     }, () => {
        //Mensagem de erro///
        contactMessage.textContent = 'Meensagem não enviada (sem serviço) ❌'
     })

}
contactForm.addEventListener('submit', sendEmail)

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    //M---------------------------------------------/// 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const sections = document.querySelectorAll('section[id]') 

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offseHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

              if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link')
                
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)


/*================= Dark Theme============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Selected topi//

const SelectedTheme = localStorage.getItem('selected-theme') 
const SelectedIcon = localStorage.getItem('selected-icon')

// Selected topi//
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'ligth'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'

// Selected topi//

if (SelectedTheme) {
    // Selected topi//
    document.body.classList[SelectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[SelectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

 // Selected topi//
 themeButton.addEventListener('click', () => {
     // Selected topi//
     document.body.classList.toggle(darkTheme)
     themeButton.classList.toggle(iconTheme)
      // Selected topi//
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
 })

 const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true //Animations reoeat
 })

 sr.reveal('.home__perfil, .about__image, .contact__mail', {origin: 'right'})
 sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data', {origin: 'left'})
 sr.reveal('.sevices__card, .projects__card', {interval: 100})

