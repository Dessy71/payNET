document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form, input fields, and submit button
  var paymentForm = document.getElementById("paymentForm");
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var submitButton = document.getElementById("submitButton");
  var paymentMessage = document.getElementById("paymentMessage");

  // Function to check if both input fields are non-empty
  function checkInputs() {
    var nameValue = nameInput.value.trim();
    var phoneValue = phoneInput.value.trim();

    // Enable the submit button only if both input fields have values
    if (nameValue !== "" && phoneValue.match(/^0[0-9]{9}$/)) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  // Add input event listeners to the name and phone input fields
  nameInput.addEventListener("input", checkInputs);
  phoneInput.addEventListener("input", checkInputs);

  // Add a submit event listener to the form
  paymentForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    var nameValue = nameInput.value.trim();
    var phoneValue = phoneInput.value.trim();

    // Check if both inputs are empty or phone is not in the correct format
    if (nameValue === "" || !phoneValue.match(/^0[0-9]{9}$/)) {
      alert("Please fill in all fields correctly.");
    } else {
      // If both inputs are valid, proceed with the payment
      makePayment();

      // Clear and reset the input fields
      nameInput.value = "";
      phoneInput.value = "";

      // Disable the submit button after payment
      submitButton.disabled = true;

      // Hide the payment message after a delay (e.g., 5 seconds)
      setTimeout(function () {
        paymentMessage.style.display = "none";
      }, 5000);
    }
  });
});

function getRandomProfile() {
  // Define an array of profiles with pre-configured passcodes
  const profiles = [
    { name: "Dess 1", passcode: "2356" },
    { name: "Dess 2", passcode: "3456" },
    { name: "Dess 3", passcode: "4567" },
    { name: "Dess 4", passcode: "9876" },
    { name: "Dess 5", passcode: "2345" },
  ];

  // Randomly select a profile from the array
  const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
  return randomProfile;
}

function makePayment() {
  // Simulate a successful payment (you can replace this with actual payment processing logic)
  const name = document.getElementById("name").value;

  // Get a randomly selected profile with its pre-configured passcode
  const profile = getRandomProfile();

  // Display the payment success message including the profile and passcode
  const paymentMessage = document.getElementById("paymentMessage");
  paymentMessage.style.display = "block";
  paymentMessage.innerHTML = `
        <p>Hello ${name},</p>
        <p>Your Profile: ${profile.name}</p>
        <p>Profile Passcode: ${profile.passcode}</p>
        <p>Remember to copy it somewhere.</p>`;
}
