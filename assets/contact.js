const userEmail = document.getElementById("user-email");
const userMessageText = document.getElementById("user-message");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
})