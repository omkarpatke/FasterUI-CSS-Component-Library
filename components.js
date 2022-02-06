const barsBtn = document.querySelector('.bars');
const sideBar = document.querySelector('.sideBar');
const closeBtn = document.querySelector('.close-btn');
const docsBtn = document.querySelector('.res-doc-link');
closeBtn.classList.add('hidden');

if(screen.width < 480){
    sideBar.classList.add('hidden');
    sideBar.addEventListener('click' , () => {
        barsBtn.style.display = 'block';
        sideBar.classList.add('hidden');
        closeBtn.classList.add('hidden');
    });
}

if(screen.width > 500){
    sideBar.classList.remove('hidden');
    docsBtn.classList.add('hidden')
}

barsBtn.addEventListener('click',() => {
    sideBar.classList.remove('hidden');
    barsBtn.style.display = 'none';
    closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click' , () => {
    closeBtn.classList.add('hidden');
    sideBar.classList.add('hidden');
    barsBtn.style.display = 'block';
});



