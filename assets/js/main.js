/* File structure:
[Reactive header]
[Mobile menu] 
[Contact us popup]
*/

window.addEventListener('DOMContentLoaded', () => {
    // [Reactive header]
    const header = document.querySelector('header');
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // [Mobile menu]
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOpen = document.querySelector('.header__burger');
    const mobileMenuClose = document.querySelector('.mobile-menu__close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

    for (let element of [mobileMenuOpen, mobileMenuClose, ...mobileMenuLinks]) {
        element.addEventListener('click', toggleMobileMenu);
    }

    function toggleMobileMenu() {
        document.body.classList.toggle('disable-scroll-js');
        mobileMenu.classList.toggle('active');
    }

    // [Contact us popup]
    const contactUsPopup = document.querySelector('.contact-us-popup');
    const contactUsOpen = document.querySelectorAll('.contact-us-popup-js');
    const contactUsClose = document.querySelector('.contact-us__close');

    for (let element of [...contactUsOpen, contactUsClose]) {
        element.addEventListener('click', toggleContactUsPopup);
    }

    function toggleContactUsPopup(e) {
        e.preventDefault();
        document.body.classList.toggle('disable-scroll-js');
        contactUsPopup.classList.toggle('active');
    }
});