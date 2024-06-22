// JS FOR NAVIGATION MENU MOBILE

const mobileNav = document.querySelector('.mnav')
const closeBtn = document.querySelector('.mnav__close-btn')
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon')

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.remove(navClosedClass); 
        mobileNav.classList.add(navOpenedClass); 
        closeBtnIcon.classList.remove(arrowRightClass)
        closeBtnIcon.classList.add(arrowLeftClass)
    } else {
        mobileNav.classList.remove(navOpenedClass); 
        mobileNav.classList.add(navClosedClass); 
        closeBtnIcon.classList.remove(arrowLeftClass)
        closeBtnIcon.classList.add(arrowRightClass)
    }
})

// JS FOR MODAL

window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

// Close all modals when press ESC
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode === 27) {
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        let modals = document.getElementsByClassName('modal');
        Array.prototype.slice.call(modals).forEach(i => {
            i.style.display = 'none'
        })
    }
};