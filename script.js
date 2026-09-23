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