window.onscroll = () => {
    if(window.scrollY > 300){
        const scroll = document.getElementById('scroll');
        scroll.style.display = 'block'
    }
   else{
    const scroll = document.getElementById('scroll');
    scroll.style.display = 'none'
   }

}
window.onscroll = () =>{
    const overlay = document.getElementById('overlay')
    if(window.scrollY > 100){
        overlay.style.height = '105px'
        overlay.style.backgroundColor = ' rgba(17, 73, 215, 0.71)';
    }
    else{
        overlay.style.height = '100px'
        overlay.style.backgroundColor = ' rgba(7, 72, 236, 0)';
    }
}
