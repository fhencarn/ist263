/*
   exam3.js
   Very simple JavaScript examples showing:

   1) Event listener + alert()
   2) getElementById + innerHTML + style
   3) setAttribute() to change an image src and alt

   All examples are triggered by clicking buttons in index.html.
*/

/* ========== Example 1: Event handler with alert() ========== */

// Find the button element with id="alertButton" in the HTML
const alertButton = document.getElementById("alertButton");

// Add an event listener for the "click" event on this button
alertButton.addEventListener("click", function () {
    // This code runs when the button is clicked
    alert("This alert comes from a JavaScript event handler attached to the button.");
});


/* ========== Example 2: Change text and color with innerHTML + style ========== */

// Define a function that changes the text and color of the paragraph
function changeMessage() {
    // Get the <p> element with id="jsMessage"
    const msg = document.getElementById("jsMessage");

    // innerHTML replaces the content inside the <p> tag
    msg.innerHTML = "JavaScript just changed this text using innerHTML.";

    // style.color changes the CSS color of the text
    msg.style.color = "#d35400";
}

// Find the button that should trigger the changeMessage function
const changeTextButton = document.getElementById("changeTextButton");

// When the button is clicked, run the changeMessage() function
changeTextButton.addEventListener("click", changeMessage);


/* ========== Example 3: setAttribute() to change image src and alt ========== */

// Get the <img> element that we want to change
const demoImage = document.getElementById("demoImage");

// Get the button that will cause the image to change
const swapImageButton = document.getElementById("swapImageButton");

// When the user clicks this button, we change the image source and alt text
swapImageButton.addEventListener("click", function () {
    // Change the "src" attribute to another image file
    // Make sure this file exists in the same folder as index.html
    demoImage.setAttribute(
        "src",
        "ChatGPT Image Dec 10, 2025, 12_33_45 PM.png"
    );

    // Update the "alt" text to describe the new image
    demoImage.setAttribute(
        "alt",
        "Placeholder banner image updated by JavaScript using the setAttribute method."
    );
});