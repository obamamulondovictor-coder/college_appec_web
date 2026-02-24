
var menuBtn = document.querySelector('.menu');
if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        var navList = document.querySelector('.navbar ul');
        if (navList) {
            navList.classList.toggle('show');
            
        }
    });
    
    // Close menu when clicking a link
    var navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var navList = document.querySelector('.navbar ul');
            if (navList) {
                navList.classList.remove('show');
                
            }
        });
    });
}

// Run this when page loads
window.addEventListener('scroll', function() {
    
    // 1. Scroll to top button
    var scrollBtn = document.getElementById('scroll');
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }


    var overlay = document.getElementById('overlay');
    if (overlay) {
        if (window.scrollY > 100) {
            overlay.style.height = '105px';
            overlay.style.backgroundColor = 'rgba(17, 73, 215, 0.71)';
        } else {
            overlay.style.height = '100px';
            overlay.style.backgroundColor = 'rgba(7, 72, 236, 0)';
        }
    }
});

if(document.style.maxWidth <= '743px'){
    document.getElementById('navbar').style.display = 'none'
}
