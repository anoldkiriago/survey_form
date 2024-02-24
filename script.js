document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Perform form validation
      if (validateForm()) {
        // If validation passes, you can submit the form data or perform other actions
        alert('Form submitted successfully!');
      }
    });
  
    // Function to validate the form
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const admission = document.getElementById('admission').value.trim();
  
      // Basic validation - check if required fields are not empty
      if (name === '' || email === '' || admission === '') {
        alert('Please fill out all required fields.');
        return false;
      }
  
      // Additional validation can be added as needed
  
      return true; // Form is valid
    }
  
    // Toggle menu button functionality
    const menuToggleBtn = document.getElementById('menu-toggle');
    menuToggleBtn.addEventListener('click', function () {
      // Add your menu toggle logic here
      alert('Toggle menu button clicked!');
    });
  });
  