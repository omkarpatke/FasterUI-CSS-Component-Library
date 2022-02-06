const barsBtn = document.querySelector('.bars');
const sideBar = document.querySelector('.sideBar');
const closeBtn = document.querySelector('.close-btn');
sideBar.classList.add('hidden');
closeBtn.classList.add('hidden');

barsBtn.addEventListener('click',() => {
    console.log('clicked');
    sideBar.classList.remove('hidden');
    barsBtn.style.display = 'none';
    closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click' , () => {
    closeBtn.classList.add('hidden');
    sideBar.classList.add('hidden');
    barsBtn.style.display = 'block';
})

sideBar.addEventListener('click' , () => {
    closeBtn.classList.add('hidden');
    sideBar.classList.add('hidden');
    barsBtn.style.display = 'block';
})


