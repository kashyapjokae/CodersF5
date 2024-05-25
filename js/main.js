document.getElementById('scrollLeft').addEventListener('click', function() {
    scrollItems('left');
});

document.getElementById('scrollRight').addEventListener('click', function() {
    scrollItems('right');
});

function scrollItems(direction) {
    const itemsContainer = document.getElementById('itemsContainer');
    const itemWidth = itemsContainer.querySelector('.item').offsetWidth;
    const containerWidth = itemsContainer.offsetWidth;
    const scrollAmount = itemWidth * 5; // Scroll by the width of 5 items

    if (direction === 'left') {
        itemsContainer.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        itemsContainer.scrollLeft += scrollAmount;
    }
}









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





function scrollItems(direction) {
    const itemsContainer = document.getElementById('itemsContainer');
    const scrollAmount = 100; // Adjust this value to change the scroll amount

    if (direction === 'left') {
        itemsContainer.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        itemsContainer.scrollLeft += scrollAmount;
    }
}
