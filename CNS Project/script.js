document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", function () {
    authenticateUser();
  });

  var create = document.getElementById("createacc");
  create.addEventListener("click", function () {
    window.location.href = "signup/index.html";
  });

  // var googleButton = document.getElementById("googleButton");
  // googleButton.addEventListener("click", function () {
  //   window.location.href = "encrypt-decrypt/index.html";
  // });
});

function signIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    client_id:
      "#YOUR_CLIENT_IT",
    redirect_uri: "http://127.0.0.1:5500/encrypt-decrypt/index.html",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    include_granted_scopes: "true",
    state: "pass-through value",
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

function authenticateUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Sample account details
  var sampleAccounts = [{ username: "cns", password: "cnsgroup" }];

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
