// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    slides[slideIndex-1].style.display = "none";
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "block";  
}

// Orbital animation for slides with smoother transition
let currentAngle = 0;
const orbitalRadius = 200; // Define the radius of the orbital path

function orbitalEffect() {
    let slides = document.getElementsByClassName("mySlides");
    let container = document.getElementById("slideshow-container"); // The container element
    let centerX = container.offsetWidth / 2; // Get the center of the container
    let centerY = container.offsetHeight / 2; // Get the center of the container
    
    for (let i = 0; i < slides.length; i++) {
        // Calculate X and Y positions using sine and cosine functions
        let angle = currentAngle + (i * (360 / slides.length));
        let xPos = centerX + orbitalRadius * Math.cos(angle * Math.PI / 180);
        let yPos = centerY + orbitalRadius * Math.sin(angle * Math.PI / 180);
        
        // Apply CSS transformation to position the slides
        slides[i].style.position = "absolute";
        slides[i].style.left = `${xPos - slides[i].offsetWidth / 2}px`; // Adjust for slide width
        slides[i].style.top = `${yPos - slides[i].offsetHeight / 2}px`; // Adjust for slide height
        slides[i].style.zIndex = 10; // Ensure they appear in front of other content
    }
    
    currentAngle += 5; // Increment the angle to create continuous rotation
    if (currentAngle >= 360) {
        currentAngle = 0; // Reset angle after one full rotation
    }
    
    setTimeout(orbitalEffect, 100); // Apply the rotation every 100ms
}

// Back-to-Top Button
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Touch interaction for hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('.service-box');

    serviceBoxes.forEach(box => {
        box.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
            // Remove the class after a short delay to simulate hover effect
            setTimeout(() => this.classList.remove('touch-active'), 1000);
        });
    });
});

// Start the orbital effect
orbitalEffect();















function openPopup(menuItem) {
    // Show the popup container
    document.getElementById('popup-container').style.display = 'flex';

    // Clear previous content
    document.getElementById('popup-content').innerHTML = '';

    // Set content based on the menu item clicked
    if (menuItem === 'home') {
        document.getElementById('popup-content').innerHTML = '<h2>Welcome to Our Spa</h2><p>We offer the best massage and relaxation services.</p>';
    } else if (menuItem === 'about') {
        document.getElementById('popup-content').innerHTML = '<h2>About Us</h2><p>We are a premier spa offering a range of massage and wellness services.</p>';
    } else if (menuItem === 'gallery') {
        // Redirect to the gallery page
        window.location.href = 'gallery.html'; // Assuming you have a gallery.html page
    }
}


function closePopup() {
    // Hide the popup container
    document.getElementById('popup-container').style.display = 'none';
}