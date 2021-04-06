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
        $("#MainForm").show();
    });
    $("#LoginButton").click(function () {
        var userValue = $("#UserInput").val();
        var passwordValue = $("#PasswordInput").val();

        alert("The user is: " + userValue ", and the password is: "
            + passwordValue);
    });

    $("$MainForm").hide();

    $(function () {
        $("form[name='registration']").validate({
            rules: {
                User: "required",
                Password: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                User: "Please enter your name",
                Password: {
                    required: "Please provide a password",
                    minlength: "Your password must be atleast 5 characters long"
                },
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

    });
}
);
