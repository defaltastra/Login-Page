// Sélection des éléments
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

// Création du message d'erreur
const errorMsg = document.createElement("p");
errorMsg.style.color = "#ff4da6";
errorMsg.style.textAlign = "center";
errorMsg.style.marginTop = "15px";
errorMsg.style.display = "none";
form.appendChild(errorMsg);

// Validation du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    if (username === "" || password === "") {
        showError("Please fill all fields ❌");
    } else if (password.length < 6) {
        showError("Password must be at least 6 characters ⚠️");
    } else {
        errorMsg.style.display = "none";
        alert("Login successful ✅");
        form.reset();
    }
});


function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
    errorMsg.animate(
        [
            { transform: "translateX(0px)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(0px)" }
        ],
        {
            duration: 300
        }
    );
}
