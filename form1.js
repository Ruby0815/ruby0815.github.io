
 



document.getElementById("contactForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form submission

          // Get form values from form
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var message = document.getElementById("message").value;

          // Perform form validation
          if ( 
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
          ) {
            alert("Please fill in all fields.");
            return;
          }

          // Send form data to the server
          // Replace the following code with actual form
          alert("Form sent successfully!");
          document.getElementById("contactForm").reset();
         });

      var submitButton = document.querySelector('button[type="submit"]');
      // Disable send button on form: To prevent users from sending the form multiple times, we can disable the send button after submit button is clicked
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (event) {
          submitButton.disabled = true;
          submitButton.textContent = "Received..";
        });
      
  