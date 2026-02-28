async function register() {
    const user = {
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });

    const data = await response.json();
    alert(data.message);

    window.location.href = "index.html";
}