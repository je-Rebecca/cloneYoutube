const moreBtn = document.querySelector('.info .metadat .moreBtn');
const title = document.querySelector('.info .metadat .title');

moreBtn.addEventListener('click',()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})
