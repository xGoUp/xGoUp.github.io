document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve the values entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Perform basic validation (you can add more advanced validation)
    if (username === "" || password === "") {
      alert("Please enter both username and password");
      return;
    }
  
    // Perform login logic (e.g., send an API request to a server for authentication)
    // You can customize this part according to your specific requirements
  
    // Reset the form
    document.getElementById("login-form").reset();
  
    // Redirect the user to the dashboard or another page
    window.location.href = "dashboard.html";
  });
  