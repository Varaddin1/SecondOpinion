const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields");
    } else {
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }
});