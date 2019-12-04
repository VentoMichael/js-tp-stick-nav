document.documentElement.classList.add('js-enabled');
const nav = document.querySelector('#main');
let topNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY > topNav) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll', fixNav);