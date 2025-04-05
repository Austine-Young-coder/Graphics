
// Get all testimonial elements
let testimonials = document.querySelectorAll('.testimonial');

// Initialize the current testimonial index
let currentTestimonial = 0;

// Function to show the next testimonial
function showNextTestimonial() {
  // Remove the 'active' class from the current testimonial
  testimonials[currentTestimonial].classList.remove('active');
  
  // Increment the current testimonial index, wrapping around to 0 if necessary
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  
  // Add the 'active' class to the new current testimonial
  testimonials[currentTestimonial].classList.add('active');
}

// Set an interval to call showNextTestimonial every 3 seconds
setInterval(showNextTestimonial, 3000);
