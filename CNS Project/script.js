document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", function () {
    authenticateUser();
  });
});

function authenticateUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Sample account details
  var sampleAccounts = [
    { username: "cns", password: "cnsgroup" },
    // Add more accounts if needed
  ];

  // Check if the entered username and password match any of the sample accounts
  var authenticated = sampleAccounts.some(function (account) {
    return account.username === username && account.password === password;
  });

  if (authenticated) {
    window.location.href = "encrypt-decrypt/index.html";

    // Redirect to another page or perform further actions
  } else {
    alert("Invalid username or password");
  }
}
