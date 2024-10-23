const toggleBtn=document.getElementById('bar');
const nav=document.getElementById('navbar');
const crossBtn=document.getElementById('cross-btn');

if(toggleBtn){
    toggleBtn.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(crossBtn){
    crossBtn.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}