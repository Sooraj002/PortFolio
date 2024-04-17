document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the button element
  var scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

  // Add a click event listener to the button
  scrollToBottomBtn.addEventListener("click", function () {
    // Scroll the page to the bottom
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // This smoothens the scrolling behavior
    });
  });

  const textElements = [
    {
      elementId: "typingHeading",
      text: "Building Innovative and User-Friendly Websites",
    },
    {
      elementId: "typingSkillText",
      text: "Building Modern Web Applications Using MERN-Stack",
    },
  ];

  function typeAndBackspace(elementId, text, speed) {
    const targetElement = document.getElementById(elementId);
    let isTyping = true;
    let index = 0;

    function animateText() {
      if (isTyping) {
        targetElement.textContent = text.substring(0, index++);
      } else {
        targetElement.textContent = text.substring(0, index--);
      }

      if (index > text.length) {
        isTyping = false;
      } else if (index < 0) {
        isTyping = true;
      }

      setTimeout(animateText, speed);
    }

    animateText();
  }

  textElements.forEach(({ elementId, text }) => {
    typeAndBackspace(elementId, text, 100); // Adjust speed as needed (milliseconds)
  });
});
