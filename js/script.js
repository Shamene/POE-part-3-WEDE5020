// Wait for the form to load fully before running the code
document.addEventListener("DOMContentLoaded", function() {

  // Find the form on the page so we can listen for when it's submitted
  const form = document.querySelector("form");

  // When the user clicks "Send Message"
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops the page from reloading when submitted

    // Get the user's name from the input box
    const name = document.getElementById("name").value.trim();

    // If the user typed a name, show a thank-you message
    if (name !== "") {
      alert(`Thank you, ${name}! Your message has been sent successfully.`);

      // Clears the form after showing the message
      form.reset();
    } else {
      // If the name field is empty, remind the user to fill it in
      alert("Please enter your name before submitting the form.");
    }
  });
});