
const test = require("node:test");
const assert = require("node:assert/strict");

const { login, submitExam, resetExam } = require("../script.js");

function setupBrowser() {
    const elements = {
        email: { value: "" },
        username: { value: "" },
        password: { value: "" },
        loginMessage: { textContent: "" },
        result: { textContent: "" },
        examForm: {
            resetCalled: false,
            reset() {
                this.resetCalled = true;
            }
        }
    };

    const selectedAnswers = {};

    global.document = {
        getElementById(id) {
            return elements[id];
        },

        querySelector(selector) {
            const match = selector.match(/name="([^"]+)"/);
            const question = match ? match[1] : null;
            return selectedAnswers[question] || null;
        }
    };

    return { elements, selectedAnswers };
}

test("login rejects empty fields", () => {
    const { elements } = setupBrowser();

    login();

    assert.equal(
        elements.loginMessage.textContent,
        "Please fill in all fields."
    );
});

test("login rejects an invalid email", () => {
    const { elements } = setupBrowser();

    elements.email.value = "invalid-email";
    elements.username.value = "vasu";
    elements.password.value = "secret123";

    login();

    assert.equal(
        elements.loginMessage.textContent,
        "Please enter a valid email address."
    );
});

test("login rejects a password shorter than six characters", () => {
    const { elements } = setupBrowser();

    elements.email.value = "vasu@example.com";
    elements.username.value = "vasu";
    elements.password.value = "12345";

    login();

    assert.equal(
        elements.loginMessage.textContent,
        "Password must contain at least 6 characters."
    );
});

test("login accepts valid input", () => {
    const { elements } = setupBrowser();

    elements.email.value = "vasu@example.com";
    elements.username.value = "vasu";
    elements.password.value = "secret123";

    login();

    assert.equal(
        elements.loginMessage.textContent,
        "Login successful! Welcome to the exam portal."
    );
});

test("exam calculates score and unanswered questions", () => {
    const { elements, selectedAnswers } = setupBrowser();

    selectedAnswers.q1 = { value: "New Delhi" };
    selectedAnswers.q2 = { value: "Saturn" };
    selectedAnswers.q3 = { value: "Rabindranath Tagore" };

    submitExam();

    assert.equal(
        elements.result.textContent,
        "Exam completed! Your score: 2/10. Unanswered questions: 7."
    );
});

test("resetExam resets the form and clears the result", () => {
    const { elements } = setupBrowser();

    elements.result.textContent = "Exam completed!";

    resetExam();

    assert.equal(elements.examForm.resetCalled, true);
    assert.equal(elements.result.textContent, "");
});