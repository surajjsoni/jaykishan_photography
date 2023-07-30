

// JavaScript for responsive navigation menu
$(document).ready(function() {
    $('.menu-icon').click(function() {
      $('.menu').toggleClass('active');
    });
  });
  
  // JavaScript to split and wrap each character of the heading
  const headings = document.querySelectorAll('.animate__fadeInUp');
  headings.forEach(heading => {
    let text = heading.textContent;
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      newText += `<span>${text[i]}</span>`;
    }
    heading.innerHTML = newText;
  });
  