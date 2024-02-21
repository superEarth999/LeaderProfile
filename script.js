// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // or 'end' or 'center'
            });
        }
    });
});

// menu bar


document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
    this.classList.toggle('change');

    // Prevent scrolling on body when the menu is open
    document.body.classList.toggle('no-scroll');
});

