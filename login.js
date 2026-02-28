function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Login Successful");
            window.location.href = "image.html";
        } else {
            alert("Invalid Credentials");
        }
    })
    .catch(error => {
        alert("Error connecting with backend");
        console.error(error);
    });
}