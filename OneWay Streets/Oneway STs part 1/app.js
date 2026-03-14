const questions = [
    { question: "Which street runs ONE WAY from Coombe to Thomas Street?", options: ["Meath Street", "Francis Street", "Bride Street", "Patrick Street"], correct: ["Meath Street"] },
    { question: "Meath Street runs ONE WAY between which streets?", options: ["Coombe and Thomas Street", "Francis Street and Thomas Street", "Coombe and Bride Street", "Patrick Street and Thomas Street"], correct: ["Coombe and Thomas Street"] },
    { question: "Which street runs ONE WAY between Cornmarket and Dean Street?", options: ["Francis Street", "Meath Street", "Thomas Street", "Patrick Street"], correct: ["Francis Street"] },
    { question: "Francis Street runs ONE WAY between which streets?", options: ["Cornmarket and Dean Street", "Coombe and Thomas Street", "Patrick Street and Bride Street", "Thomas Street and High Street"], correct: ["Cornmarket and Dean Street"] },
    { question: "Which street runs ONE WAY between Leinster Street South and Stephen’s Green North?", options: ["Kildare Street", "Dawson Street", "Nassau Street", "Molesworth Street"], correct: ["Kildare Street"] },
    { question: "Kildare Street runs ONE WAY between which streets?", options: ["Leinster Street South and Stephen’s Green North", "Dawson Street and Nassau Street", "Molesworth Street and Nassau Street", "Grafton Street and Nassau Street"], correct: ["Leinster Street South and Stephen’s Green North"] },
    { question: "Which street runs ONE WAY between Dawson Street and Kildare Street?", options: ["Molesworth Street", "Nassau Street", "South Frederick Street", "Duke Street"], correct: ["Molesworth Street"] },
    { question: "Molesworth Street runs ONE WAY between which streets?", options: ["Dawson Street and Kildare Street", "Nassau Street and Kildare Street", "Grafton Street and Dawson Street", "Suffolk Street and Nassau Street"], correct: ["Dawson Street and Kildare Street"] },
    { question: "Which street runs ONE WAY between Grangegorman Lower and Manor Street?", options: ["Kirwan Street", "Brunswick Street North", "Queen Street", "Green Street"], correct: ["Kirwan Street"] },
    { question: "Kirwan Street runs ONE WAY between which streets?", options: ["Grangegorman Lower and Manor Street", "King Street North and Manor Street", "Arran Quay and Manor Street", "Church Street and Manor Street"], correct: ["Grangegorman Lower and Manor Street"] },
    { question: "Which street runs ONE WAY between King Street North and Little Britain Street?", options: ["Green Street", "Queen Street", "Brunswick Street North", "Greek Street"], correct: ["Green Street"] },
    { question: "Green Street runs ONE WAY between which streets?", options: ["King Street North and Little Britain Street", "King Street North and Arran Quay", "Blackhall Place and Church Street", "Arran Quay and Church Street"], correct: ["King Street North and Little Britain Street"] },
    { question: "Which street runs ONE WAY between Meath Street and Pimlico?", options: ["Gray Street", "Francis Street", "Thomas Street", "Bride Street"], correct: ["Gray Street"] },
    { question: "Gray Street runs ONE WAY between which streets?", options: ["Meath Street and Pimlico", "Coombe and Thomas Street", "Patrick Street and Bride Street", "High Street and Thomas Street"], correct: ["Meath Street and Pimlico"] },
    { question: "Which street runs ONE WAY between Stephen Street Lower and Exchequer Street?", options: ["Drury Street", "Fade Street", "Wicklow Street", "Duke Street"], correct: ["Drury Street"] },
    { question: "Drury Street runs ONE WAY between which streets?", options: ["Stephen Street Lower and Exchequer Street", "South Great George Street and Wicklow Street", "Dame Street and Exchequer Street", "Grafton Street and Nassau Street"], correct: ["Stephen Street Lower and Exchequer Street"] },
    { question: "Which street runs ONE WAY between Bride Street and Patrick Street?", options: ["Bull Alley", "Meath Street", "Francis Street", "Thomas Street"], correct: ["Bull Alley"] },
    { question: "Bull Alley runs ONE WAY between which streets?", options: ["Bride Street and Patrick Street", "Patrick Street and Thomas Street", "Coombe and Thomas Street", "High Street and Thomas Street"], correct: ["Bride Street and Patrick Street"] },
    { question: "Which street runs ONE WAY between College Green and Aston Quay?", options: ["Westmoreland Street", "D’Olier Street", "O’Connell Street", "Eden Quay"], correct: ["Westmoreland Street"] },
    { question: "Westmoreland Street runs ONE WAY between which streets?", options: ["College Green and Aston Quay", "Burgh Quay and College Street", "O’Connell Street and Eden Quay", "Aston Quay and Eden Quay"], correct: ["College Green and Aston Quay"] },
    { question: "Which street runs ONE WAY between Blackhall Place and Church Street Upper?", options: ["Brunswick Street North", "Queen Street", "Green Street", "Kirwan Street"], correct: ["Brunswick Street North"] },
    { question: "Brunswick Street North runs ONE WAY between which streets?", options: ["Blackhall Place and Church Street Upper", "King Street North and Arran Quay", "Manor Street and Church Street", "Arran Quay and Church Street"], correct: ["Blackhall Place and Church Street Upper"] },
    { question: "Which street runs ONE WAY between King Street North and Arran Quay?", options: ["Queen Street", "Green Street", "Greek Street", "Kirwan Street"], correct: ["Queen Street"] },
    { question: "Queen Street runs ONE WAY between which streets?", options: ["King Street North and Arran Quay", "Blackhall Place and Church Street", "Arran Quay and Manor Street", "King Street North and Church Street"], correct: ["King Street North and Arran Quay"] },
    { question: "Which street runs ONE WAY between South Great George Street and Wicklow Street?", options: ["Exchequer Street", "Drury Street", "Fade Street", "Duke Street"], correct: ["Exchequer Street"] },
    { question: "Exchequer Street runs ONE WAY between which streets?", options: ["South Great George Street and Wicklow Street", "Dame Street and Wicklow Street", "Grafton Street and Nassau Street", "Drury Street and Fade Street"], correct: ["South Great George Street and Wicklow Street"] },
    { question: "Which street runs ONE WAY between Dame Street and Wellington Quay?", options: ["Eustace Street", "Sycamore Street", "Parliament Street", "East Essex Street"], correct: ["Eustace Street"] },
    { question: "Eustace Street runs ONE WAY between which streets?", options: ["Dame Street and Wellington Quay", "Parliament Street and Eustace Street", "College Green and Aston Quay", "Dame Street and East Essex Street"], correct: ["Dame Street and Wellington Quay"] },
    { question: "Which street runs ONE WAY between Amiens Street and Marlborough Street?", options: ["Talbot Street", "Abbey Street", "Eden Quay", "O’Connell Street"], correct: ["Talbot Street"] },
    { question: "Talbot Street runs ONE WAY between which streets?", options: ["Amiens Street and Marlborough Street", "O’Connell Street and Abbey Street", "Eden Quay and Marlborough Street", "Abbey Street and Talbot Place"], correct: ["Amiens Street and Marlborough Street"] },
    { question: "Which street runs ONE WAY between Drury Street and South Great George Street?", options: ["Fade Street", "Exchequer Street", "Wicklow Street", "Duke Street"], correct: ["Fade Street"] },
    { question: "Fade Street runs ONE WAY between which streets?", options: ["Drury Street and South Great George Street", "Wicklow Street and Grafton Street", "Dame Street and Drury Street", "Exchequer Street and Duke Street"], correct: ["Drury Street and South Great George Street"] },
    { question: "Which street runs ONE WAY between Chancery Place and Mary’s Lane?", options: ["Greek Street", "Green Street", "Queen Street", "Brunswick Street North"], correct: ["Greek Street"] },
    { question: "Greek Street runs ONE WAY between which streets?", options: ["Chancery Place and Mary’s Lane", "King Street North and Arran Quay", "Blackhall Place and Church Street", "Manor Street and Church Street"], correct: ["Chancery Place and Mary’s Lane"] },
    { question: "Which street runs ONE WAY between Tara Street and Hawkins Street?", options: ["Poolbeg Street", "D’Olier Street", "Westmoreland Street", "Burgh Quay"], correct: ["Poolbeg Street"] }
];

// ============================
// QUIZ STATE
// ============================

let currentIndex = 0;
let score = 0;

const userAnswers = {};
const markedQuestions = {};
const shuffledOptions = {};

// ============================
// DOM ELEMENTS
// ============================

const questionEl = document.getElementById("question");
const formEl = document.getElementById("answers-form");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");

const prevBtn = document.getElementById("prev-btn");
const markBtn = document.getElementById("mark-btn");
const nextBtn = document.getElementById("next-btn");

// ============================
// PROPER SHUFFLE (Fisher-Yates)
// ============================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle questions when quiz loads
shuffleArray(questions);

// ============================
// LOAD QUESTION
// ============================

function loadQuestion() {

    const q = questions[currentIndex];

    progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    questionEl.textContent = q.question;

    formEl.innerHTML = "";
    feedbackEl.textContent = "";
    feedbackEl.className = "";

    // Shuffle options once per question
    if (!shuffledOptions[currentIndex]) {
        shuffledOptions[currentIndex] = [...q.options];
        shuffleArray(shuffledOptions[currentIndex]);
    }

    shuffledOptions[currentIndex].forEach(option => {

        const label = document.createElement("label");
        label.classList.add("option-label");

        const input = document.createElement("input");

        // Radio if single answer, Checkbox if multiple
        input.type = q.correct.length > 1 ? "checkbox" : "radio";
        input.name = "answer";
        input.value = option;

        // Restore previous selection
        if (userAnswers[currentIndex]?.includes(option)) {
            input.checked = true;
        }

        // If already marked → lock and show colors
        if (markedQuestions[currentIndex] !== undefined) {
            input.disabled = true;

            if (q.correct.includes(option)) {
                label.classList.add("correct-option");
            }

            if (
                userAnswers[currentIndex]?.includes(option) &&
                !q.correct.includes(option)
            ) {
                label.classList.add("wrong-option");
            }
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        formEl.appendChild(label);
    });

    // Show feedback if already marked
    if (markedQuestions[currentIndex] !== undefined) {

        const isCorrect = markedQuestions[currentIndex];

        if (isCorrect) {
            feedbackEl.textContent = "✅ Correct!";
            feedbackEl.className = "correct";
        } else {
            feedbackEl.innerHTML =
                "❌ Incorrect! <br> Correct Answer: <strong>" +
                q.correct.join(", ") +
                "</strong>";
            feedbackEl.className = "wrong";
        }
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = markedQuestions[currentIndex] === undefined;
}

// ============================
// MARK QUESTION
// ============================

markBtn.onclick = () => {

    if (markedQuestions[currentIndex] !== undefined) return;

    const selected = [
        ...document.querySelectorAll("input[name='answer']:checked")
    ].map(i => i.value);

    if (selected.length === 0) {
        alert("Please select at least one answer.");
        return;
    }

    userAnswers[currentIndex] = selected;

    const correct = questions[currentIndex].correct;

    const isCorrect =
        selected.length === correct.length &&
        selected.every(a => correct.includes(a));

    if (isCorrect) score++;

    markedQuestions[currentIndex] = isCorrect;

    loadQuestion();
};

// ============================
// NEXT BUTTON
// ============================

nextBtn.onclick = () => {

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {

        let wrongHtml = "";

        questions.forEach((q, index) => {
            if (markedQuestions[index] === false) {
                wrongHtml += `
                    <div class="review-box">
                        <strong>Question:</strong> ${q.question}<br>
                        <strong>Your Answer:</strong> ${userAnswers[index].join(", ")}<br>
                        <strong>Correct Answer:</strong> ${q.correct.join(", ")}
                    </div>
                `;
            }
        });

        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz Finished</h2>
            <p><strong>Your score: ${score} / ${questions.length}</strong></p>
            ${wrongHtml || "<p>🎉 You got everything correct!</p>"}
            <button onclick="location.reload()">Restart Quiz</button>
        `;
    }
};

// ============================
// PREVIOUS BUTTON
// ============================

prevBtn.onclick = () => {

    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
};

// ============================
// START QUIZ
// ============================

loadQuestion();