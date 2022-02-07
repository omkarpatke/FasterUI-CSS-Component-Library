
// Modal Component
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const showBtn = document.querySelector('.show-btn')
const modalContent = document.querySelector('.modal-content');
const modalBtns = document.querySelectorAll('.modal-btns');


showBtn.addEventListener('click', () => {
    modal.style.display='block';
    modalContent.style.display = 'block';
})

closeBtn.addEventListener('click' , () => {
    modal.style.display='none';
    modalContent.style.display = 'none';
})

modalBtns.forEach((btn) => {
    btn.addEventListener('click' , () => {
        modalContent.style.display = 'none';
        modal.style.display='none';
    })
})

// responsiveness

const navCloseBtn = document.querySelector('.nav-close-btn');
const navBars = document.querySelector('.navBars');
const sideBar = document.querySelector('.sideBar');
navCloseBtn.style.display = 'none';
navBars.style.display = 'none';


if(screen.width < 480){
    navBars.style.display = 'block';
    sideBar.style.display = 'none';
}

 navBars.addEventListener('click' , () => {
    navBars.style.display = 'none';
    navCloseBtn.style.display = 'block';
    sideBar.style.display = 'flex';
 })

 navCloseBtn.addEventListener('click' , () => {
    navBars.style.display = 'block';
    navCloseBtn.style.display = 'none';
    sideBar.style.display = 'none';
})

sideBar.addEventListener('click' , () => {
    sideBar.style.display = 'none';
    navCloseBtn.style.display = 'none';
    navBars.style.display = 'block';
})

