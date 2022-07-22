// ------------------Event to change navbar color-----------------------
window.addEventListener('scroll', function(){
    let navbar= document.querySelector('nav');
    let windowPosition= this.window.scrollY >0;
    navbar.classList.toggle('scrolling-active', windowPosition);
})


// ------------------Event hover effect nav bar-item--------------------

window.addEventListener('hover', function(){
    let item= document.getElementsByClassName("nav-item");
    item.classList.toggle('active');
})

// -------------------Bootstrap caroussel integration script-------------------------
const carousel = new bootstrap.Carousel('#myCarousel');
