$(document).ready(function() {
    let currentIndex = 0; 
    const images = $('.slider .slide');
    const totalSlides = images.length; 

  
    function showSlide(index) {
        
        const offset = -index * $('.container').width();
        $('.slider').css('transform', 'translateX(' + offset + 'px)');
    }

  
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; 
        }
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(nextSlide, 3000);
});
