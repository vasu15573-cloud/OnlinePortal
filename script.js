function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const result = document.getElementById("result");

    if (!selectedAnswer) {
        result.textContent = "Please select an answer.";
        return;
    }

    if (selectedAnswer.value === "New Delhi") {
        result.textContent = "Correct Answer!";
    } else {
        result.textContent = "Wrong Answer!";
    }
}

function login() {
    const username = document.getElementById("username").value;
    const message = document.getElementById("loginMessage");

    if (username === "") {
        message.textContent = "Please enter your username.";
    } else {
        message.textContent = "Login successful!";
    }
}