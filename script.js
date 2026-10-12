function login() {
const email = document.getElementById("email").value.trim();
const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value;
const message = document.getElementById("loginMessage");


if (email === "" || username === "" || password === "") {
    message.textContent = "Please fill in all fields.";
    return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
}

if (password.length < 6) {
    message.textContent = "Password must contain at least 6 characters.";
    return;
}

message.textContent = "Login successful! Welcome to the exam portal.";


}

function submitExam() {
const answers = {
q1: "New Delhi",
q2: "Jupiter",
q3: "Rabindranath Tagore",
q4: "Bengal Tiger",
q5: "Part III",
q6: "President",
q7: "Central Processing Unit",
q8: "HTML",
q9: "Keyboard",
q10: "10"
};


let score = 0;
let unanswered = 0;

for (const question in answers) {
    const selected = document.querySelector(
        'input[name="' + question + '"]:checked'
    );

    if (!selected) {
        unanswered++;
    } else if (selected.value === answers[question]) {
        score++;
    }
}

const result = document.getElementById("result");

result.textContent =
    "Exam completed! Your score: " + score + "/10. " +
    "Unanswered questions: " + unanswered + ".";


}

function resetExam() {
document.getElementById("examForm").reset();
document.getElementById("result").textContent = "";
}


if (typeof module !== "undefined") {
    module.exports = { login, submitExam, resetExam };
}