$(document).ready(function() {
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top - 70
          }, 100);
      }
  });
  
  // Sign up button click handler
  $('#signUpBtn').click(function() {
      alert('Thank you for your interest! Sign up functionality would go here.');
  });
  
  // Navbar background change on scroll
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.navbar').addClass('bg-primary');
          $('.navbar').removeClass('bg-dark');
      } else {
          $('.navbar').addClass('bg-dark');
          $('.navbar').removeClass('bg-primary');
      }
  });
});

// Scroll to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
      $('#scrollToTopBtn').fadeIn();
  } else {
      $('#scrollToTopBtn').fadeOut();
  }
});

$('#scrollToTopBtn').click(function() {
  $('html, body').animate({scrollTop: 0}, '300');
  return false;
});