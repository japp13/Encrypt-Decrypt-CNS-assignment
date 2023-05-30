document.addEventListener("DOMContentLoaded", function () {
  var signUpForm = document.getElementById("signup");
  signUpForm.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;

    sampleAccounts = [{ username: "cns", password: "cnsgroup" }];

    var existingAccount = sampleAccounts.find(function (account) {
      return account.username === username;
    });

    // Add the new account to the sampleAccounts array
    sampleAccounts.push({ username: userName, password: passWord });
    alert("Account created successfully");

    // Redirect to the login page or perform further actions
    window.location.href = "../index.html";
  });
});
