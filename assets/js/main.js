/*==== SHOW MENU ====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==== REMOVE MENU MOBILE ====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==== SCROOL SECTIONS ACTIVE LINK ====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==== CHANGE BACKGROUND HEADER ====*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==== SHOW SCROLL TOP ====*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)

/*==== SWIPER CAROUSEL ====*/
const swiper = new Swiper('.reference__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1240: {
            slidesPerView: 3,
        },
    }
})

/*==== ACTIVE ACCORDION ====*/
let labels = document.querySelectorAll('label');

labels.forEach(label => {
    label.addEventListener('click', function () {
        labels.forEach(label => label.classList.remove('active'));
        this.classList.add('active')
    })
})

/*==== GSAP ANIMATION ====*/
gsap.from('.home__data', { opacity: 0, duration: 1, delay: .3, y: 25 })
gsap.from('.home-h4, .home__title, .home-button', { opacity: 0, duration: 1.5, delay: .5, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav__logo, .nav__logo2, .nav__toggle', { opacity: 0, duration: 1.5, delay: .8, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.home__img', { opacity: 0, duration: 1, delay: .8, y: 60 })
gsap.from('.nav__item', { opacity: 0, duration: 1.5, delay: 1.3, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.home__social-icon', { opacity: 0, duration: 1.5, delay: 2, y: 25, ease: 'expo.out', stagger: .2 })