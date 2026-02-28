async function uploadImage() {
    let file = document.getElementById("imageFile").files[0];

    if (!file) {
        alert("Please upload an image");
        return;
    }

    let formData = new FormData();
    formData.append("image", file);

    try {
        let response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            alert("Backend response error!");
            return;
        }

        let data = await response.json();

        localStorage.setItem("result", data.result);
        window.location.href = "result.html";
    }
    catch (error) {
        alert("Error connecting to backend!");
        console.log(error);
    }
}