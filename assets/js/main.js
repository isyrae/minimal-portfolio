// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
showMenu('nav-toggle','nav-menu')
// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY
// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

window.addEventListener('scroll', scrollActive)

// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
});
// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('., .work__img, .contact__input',{interval: 200}); 
// █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
// █ Minimal Portfolio UI                        █
// █ Author   : Rahul Mondal                     █
// █ GitHub   : https://github.com/isyrae        █
// █ Telegram : https://t.me/isyrae              █
// █ License  : MIT – Sleek & Open               █
// █ Vibe     : Soft · Minimal · Aesthetic       █
// █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
