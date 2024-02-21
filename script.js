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


// document.getElementById('menu-toggle').addEventListener('click', function() {
//     var nav = document.querySelector('nav');
//     nav.classList.toggle('show');
//     this.classList.toggle('change');

//     // Prevent scrolling on body when the menu is open
//     document.body.classList.toggle('no-scroll');
// });


document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
    this.classList.toggle('change');

    // Toggle body scrollinggitocument.body.classList.toggle('no-scroll');
});

// Close the menu when a menu item is clicked
document.querySelectorAll('nav ul li a').forEach(function(item) {
    item.addEventListener('click', function() {
        var nav = document.querySelector('nav');
        var menuToggle = document.getElementById('menu-toggle');
        
        // Close the menu
        nav.classList.remove('show');
        menuToggle.classList.remove('change');
        
        // Enable scrolling
        document.body.classList.remove('no-scroll');
    });
});




