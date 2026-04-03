// Project Page Web - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Project Page loaded successfully!');

    // Add interactive hover effects to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            console.log(`Navigation clicked: ${item.textContent}`);
            // You can add navigation logic here
            // For example: window.location.href = '/page';
        });
    });

    // Add subtle parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const textureBackground = document.querySelector('.texture-background');
        
        if (textureBackground) {
            textureBackground.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });

    // Optional: Add smooth rotation animation on project items
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const rotated = this.querySelector('.project-rotated');
            if (rotated) {
                // Store original rotation
                const originalRotation = rotated.style.transform;
                rotated.dataset.originalRotation = originalRotation;
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const rotated = this.querySelector('.project-rotated');
            if (rotated && rotated.dataset.originalRotation) {
                // Restore original rotation
                rotated.style.transform = rotated.dataset.originalRotation;
            }
        });
    });

    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Optional: Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
