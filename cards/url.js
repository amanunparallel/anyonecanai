// Get the current URL from the window location.
let onloadURL = window.location.href;

// Initialize an empty array to store the href attributes of the links.
let arrayLinksFinal = [];

// Select all anchor tags within the div that has the class 'ai-ideation-links__mover'.
let links = document.querySelectorAll(".ai-ideation-links__mover a");

// Iterate over each link, extracting its 'href' attribute and adding it to the array.
links.forEach((link) => {
  arrayLinksFinal.push(link.href);
});

const clickDelay = 500;

function clickButtonIfUrlIncludes(number) {
  if (onloadURL.includes(number)) {
    let activeButton = document.querySelector(`[data-click="${number}"]`);
    if (activeButton) {
      setTimeout(() => {
        activeButton.click();
      }, clickDelay);
    }
  }
}

[2, 3, 4, 5, 6, 7].forEach(clickButtonIfUrlIncludes);
