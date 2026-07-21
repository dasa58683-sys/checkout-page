const btn = document.querySelector(".continue-btn");

btn.addEventListener("click", () => {

    // Show Loader
    document.querySelector(".loader-container").style.display = "flex";

    // Redirect after 800 milliseconds
    setTimeout(() => {

        window.location.href = "http://127.0.0.1:5500/proceed%20to%20checkout%20page/index.html";

    }, 800);

});