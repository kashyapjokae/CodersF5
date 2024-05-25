document.addEventListener("DOMContentLoaded", function() {
  const contactBtn = document.getElementById("Contact-us-btn");
  const section = document.querySelector(".container");

  // Toggle section display on button click
  contactBtn.addEventListener("click", function() {
      section.style.display = (section.style.display === "none") ? "block" : "none";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollUpButton = document.getElementById('scrollUp');
  const scrollDownButton = document.getElementById('scrollDown');
  const list = document.querySelector('.list');

  // Scroll up button functionality
  scrollUpButton.addEventListener('click', function() {
      list.scrollTop -= 40; // Adjust the scroll amount as needed
  });

  // Scroll down button functionality
  scrollDownButton.addEventListener('click', function() {
      list.scrollTop += 40; // Adjust the scroll amount as needed
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const itemsContainer = document.getElementById('itemsContainer');
  const scrollRight = document.getElementById('scrollRight');
  const scrollLeft = document.getElementById('scrollLeft');
  
  let scrollAmount = 0;
  const scrollStep = 100;
  
  // Scroll right button functionality
  scrollRight.addEventListener('click', () => {
      scrollAmount += scrollStep;
      itemsContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
  
  // Scroll left button functionality
  scrollLeft.addEventListener('click', () => {
      scrollAmount -= scrollStep;
      itemsContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});
