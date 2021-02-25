$(document).ready(function () {
    var loginButton = document.createElement("button");
    $(loginButton).text("Log In");

    var registerButton = document.createElement("button");
    $(registerButton).text("Register");

    var divContainer = $("nav.navbar div.container");

    $(divContainer).append(loginButton);
    $(divContainer).append(registerButton);

    $(loginButton).click(function () {
        alert("you have logged in");
    });

    $(registerButton).click(function () {
        var span = document.createElement("span");
        $(span).text("User");
        $("#MainContainerDiv").append(span);

        span = document.createElement("span");
        $(span).text("Password");
        $("#MainContainerDiv").append(span);
    });
}
);

