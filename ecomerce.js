var bar=document.querySelector('.side');
const nav=document.querySelector('.nav');
const close=document.querySelector('.sd');
if(bar){
    bar.addEventListener('click',function(){
        nav.classList.add('active');
        document.querySelector('.side').style.display='none';
    })
}

if(close){
    close.addEventListener('click',function(){
        nav.classList.remove('active');
        document.querySelector('.side').style.display='block';
    })
}