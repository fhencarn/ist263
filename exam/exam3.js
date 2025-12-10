// ## Example 1: Event handler with an anonymous function that shows an alert
const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", function () {
    alert("This alert comes from a JavaScript event handler attached to the button.");
});

// ## Example 2: Function that uses getElementById, innerHTML, and style
function changeMessage() {
    const msg = document.getElementById("jsMessage"); // DOM node for the paragraph
    msg.innerHTML = "JavaScript just changed this text using innerHTML.";
    msg.style.color = "#d35400"; // change text color with the style property
}

const changeTextButton = document.getElementById("changeTextButton");
changeTextButton.addEventListener("click", changeMessage);

// ## Example 3: setAttribute to change the image source and alt text
const demoImage = document.getElementById("demoImage");
const swapImageButton = document.getElementById("swapImageButton");

swapImageButton.addEventListener("click", function () {
    demoImage.setAttribute(
        "src",
        "ChatGPT Image Dec 10, 2025, 12_33_45 PM.png"
    );
    demoImage.setAttribute(
        "alt",
        "Placeholder banner image updated by JavaScript using the setAttribute method."
    );
});

// ## Hamburger menu: toggling nav visibility on small screens
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    // Toggle the 'open' class on the nav for small screens
    mainNav.classList.toggle("open");

    // Update aria-expanded for accessibility
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
});

// ## Note: In class you also learned external JS files.
// ## This page uses embedded JS, but you could move this into script.js
// ## and include it with: <script src="script.js"></script>
