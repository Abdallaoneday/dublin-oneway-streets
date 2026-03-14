const questions = [
     { question: "Poolbeg Street runs ONE WAY between which streets?", options: ["Tara Street and Hawkins Street", "Pearse Street and Townsend Street", "College Green and Aston Quay", "Burgh Quay and College Street"], correct: ["Tara Street and Hawkins Street"] },
    { question: "Which street runs ONE WAY between Portland Row and Buckingham Street Upper?", options: ["Killarney Street", "Talbot Street", "Sean McDermott Street", "Gardiner Street"], correct: ["Killarney Street"] },
    { question: "Killarney Street runs ONE WAY between which streets?", options: ["Portland Row and Buckingham Street Upper", "Amiens Street and Marlborough Street", "Gardiner Street and Talbot Street", "Abbey Street and O’Connell Street"], correct: ["Portland Row and Buckingham Street Upper"] },
    { question: "Which street runs ONE WAY between Townsend Street and Pearse Street?", options: ["Shaw Street", "Mark Street", "Poolbeg Street", "Tara Street"], correct: ["Shaw Street"] },
    { question: "Shaw Street runs ONE WAY between which streets?", options: ["Townsend Street and Pearse Street", "Pearse Street and Tara Street", "College Green and Aston Quay", "Burgh Quay and College Street"], correct: ["Townsend Street and Pearse Street"] },
    { question: "Which street runs ONE WAY between Pearse Street and Townsend Street?", options: ["Mark Street", "Shaw Street", "Poolbeg Street", "D’Olier Street"], correct: ["Mark Street"] },
    { question: "Mark Street runs ONE WAY between which streets?", options: ["Pearse Street and Townsend Street", "Tara Street and Hawkins Street", "College Green and Aston Quay", "Aston Quay and Eden Quay"], correct: ["Pearse Street and Townsend Street"] },
    { question: "Which street runs ONE WAY between Burgh Quay and College Street?", options: ["D’Olier Street", "Westmoreland Street", "O’Connell Street", "Poolbeg Street"], correct: ["D’Olier Street"] },
    { question: "D’Olier Street runs ONE WAY between which streets?", options: ["Burgh Quay and College Street", "College Green and Aston Quay", "Aston Quay and Eden Quay", "Eden Quay and Marlborough Street"], correct: ["Burgh Quay and College Street"] },
    { question: "Which street runs ONE WAY between Meath Street and Swift Alley?", options: ["Engine Alley", "Gray Street", "Francis Street", "Bull Alley"], correct: ["Engine Alley"] },
    { question: "Which street runs ONE WAY between Stephen’s Green South and Adelaide Road?", options: ["Earlsfort Terrace", "Harcourt Street", "Camden Street", "Leeson Street"], correct: ["Earlsfort Terrace"] },
    { question: "Earlsfort Terrace runs ONE WAY between which streets?", options: ["Stephen’s Green South and Adelaide Road", "Harcourt Street and Camden Street", "Leeson Street and Baggot Street", "Grafton Street and Nassau Street"], correct: ["Stephen’s Green South and Adelaide Road"] },
    { question: "Which street runs ONE WAY between Camden Street Lower and New Bride Street?", options: ["Camden Row", "Montague Street", "Harcourt Street", "Pleasants Street"], correct: ["Camden Row"] },
    { question: "Camden Row runs ONE WAY between which streets?", options: ["Camden Street Lower and New Bride Street", "Harcourt Street and Adelaide Road", "Camden Street and Harcourt Street", "Leeson Street and Baggot Street"], correct: ["Camden Street Lower and New Bride Street"] },
    { question: "Which street runs ONE WAY between Baggot Street Lower and Mount Street Upper?", options: ["James Street East", "Haddington Road", "Leeson Street", "Pembroke Street"], correct: ["James Street East"] },
    { question: "James Street East runs ONE WAY between which streets?", options: ["Baggot Street Lower and Mount Street Upper", "Haddington Road and Pembroke Street", "Leeson Street and Baggot Street", "Pembroke Street and Mount Street"], correct: ["Baggot Street Lower and Mount Street Upper"] },
    { question: "Which street runs ONE WAY between Bolton Street and Parnell Street?", options: ["King’s Inns Street", "North King Street", "Dominick Street", "Capel Street"], correct: ["King’s Inns Street"] },
    { question: "King’s Inns Street runs ONE WAY between which streets?", options: ["Bolton Street and Parnell Street", "Dominick Street and Capel Street", "North King Street and Church Street", "Parnell Street and O’Connell Street"], correct: ["Bolton Street and Parnell Street"] },
    { question: "Which street runs ONE WAY between Dame Street and East Essex Street?", options: ["Sycamore Street", "Eustace Street", "Parliament Street", "Temple Bar"], correct: ["Sycamore Street"] },
    { question: "Sycamore Street runs ONE WAY between which streets?", options: ["Dame Street and East Essex Street", "Parliament Street and Eustace Street", "Temple Bar and Dame Street", "College Green and Aston Quay"], correct: ["Dame Street and East Essex Street"] },
    { question: "Which street runs ONE WAY between Camden Street Lower and Harcourt Street?", options: ["Montague Street", "Camden Row", "Harcourt Road", "Pleasants Street"], correct: ["Montague Street"] },
    { question: "Montague Street runs ONE WAY between which streets?", options: ["Camden Street Lower and Harcourt Street", "Camden Street and Adelaide Road", "Leeson Street and Baggot Street", "Harcourt Street and Stephen’s Green"], correct: ["Camden Street Lower and Harcourt Street"] },
    { question: "Which street runs ONE WAY between Stephen’s Green North and Nassau Street?", options: ["Dawson Street", "Kildare Street", "Grafton Street", "Suffolk Street"], correct: ["Dawson Street"] },
    { question: "Dawson Street runs ONE WAY between which streets?", options: ["Stephen’s Green North and Nassau Street", "Kildare Street and Molesworth Street", "Grafton Street and Nassau Street", "Leinster Street and Nassau Street"], correct: ["Stephen’s Green North and Nassau Street"] },
    { question: "Which street runs ONE WAY between Suffolk Street and Leinster Street South?", options: ["Nassau Street", "Dawson Street", "Kildare Street", "Molesworth Street"], correct: ["Nassau Street"] },
    { question: "Nassau Street runs ONE WAY between which streets?", options: ["Suffolk Street and Leinster Street South", "Stephen’s Green North and Nassau Street", "Kildare Street and Molesworth Street", "Dawson Street and Nassau Street"], correct: ["Suffolk Street and Leinster Street South"] },
    { question: "Which street runs ONE WAY between Molesworth Street and Nassau Street?", options: ["South Frederick Street", "Dawson Street", "Kildare Street", "Suffolk Street"], correct: ["South Frederick Street"] },
    { question: "South Frederick Street runs ONE WAY between which streets?", options: ["Molesworth Street and Nassau Street", "Dawson Street and Kildare Street", "Grafton Street and Suffolk Street", "Nassau Street and Grafton Street"], correct: ["Molesworth Street and Nassau Street"] },
    { question: "Which street runs ONE WAY between Parliament Street and Eustace Street?", options: ["East Essex Street", "Sycamore Street", "Temple Bar", "Dame Street"], correct: ["East Essex Street"] },
    { question: "East Essex Street runs ONE WAY between which streets?", options: ["Parliament Street and Eustace Street", "Dame Street and Temple Bar", "Sycamore Street and Parliament Street", "College Green and Aston Quay"], correct: ["Parliament Street and Eustace Street"] },
    { question: "Which street runs ONE WAY between Jervis Street and Wolfe Tone Street?", options: ["Parnell Street", "Capel Street", "North King Street", "Dominick Street"], correct: ["Parnell Street"] },
    { question: "Parnell Street runs ONE WAY between which streets?", options: ["Jervis Street and Wolfe Tone Street", "Capel Street and Dominick Street", "O’Connell Street and Marlborough Street", "North King Street and Church Street"], correct: ["Jervis Street and Wolfe Tone Street"] },
    { question: "Which street runs ONE WAY between Patrick Street and Kevin Street Upper?", options: ["Saint Patrick Close", "Bride Street", "Bull Alley", "High Street"], correct: ["Saint Patrick Close"] },
    { question: "Saint Patrick Close runs ONE WAY between which streets?", options: ["Patrick Street and Kevin Street Upper", "Bride Street and Patrick Street", "Kevin Street and Harcourt Street", "Patrick Street and Thomas Street"], correct: ["Patrick Street and Kevin Street Upper"] },
    { question: "Engine Alley runs ONE WAY between which streets?", options: ["Meath Street and Swift Alley", "Meath Street and Thomas Street", "Coombe and Thomas Street", "Gray Street and Meath Street"], correct: ["Meath Street and Swift Alley"] }
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