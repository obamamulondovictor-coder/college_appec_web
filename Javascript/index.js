
// Get all slides and dots
var slides = document.querySelectorAll('.hero_slide');
var dots = document.querySelectorAll('.hero_dot');
var currentSlide = 0;
var slideTimer;

// If no slides, stop here
if (slides.length === 0) {
    // No slider on this page
} else {
    // Function to change to a specific slide
    function goToSlide(slideIndex) {
        // Don't do anything if we're already on this slide
        if (slideIndex === currentSlide) return;

        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Update current slide index
        currentSlide = slideIndex;

        // Add active class to new slide
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Function to go to next slide
    function nextSlide() {
        var next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    // Click on dots to change slides
    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            goToSlide(index);
            // Reset timer so it doesn't switch immediately
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, 4500);
        });
    });

    // Start auto-slide
    slideTimer = setInterval(nextSlide, 4500);
}


window.addEventListener('scroll', function () {
    var scrollBtn = document.getElementById('scroll');
    if (scrollBtn) {
        // Show button when scrolled down 300px
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});


const footer_links = document.querySelectorAll('.line'); 
footer_links.forEach((add_link_abilities) => {
  add_link_abilities.addEventListener('click', (event) => {
    // event.preventDefault(); 
    window.open('https://facebook.com', '_blank'); 

  });
});



