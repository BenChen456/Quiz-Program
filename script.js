const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffleQuestions, currentQuestionIndex;

function startGame(){
    startButton.classList.add("hide");
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);   
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex+1)
    nextButton.classList.remove("hide");
    else{
        startButton.innerText = "Restart";
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(e){
    e.classList.remove("correct");
    e.classList.remove("wrong");
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: '4', correct: true},
            { text: "22", correct: false}
        ]
    },
    {
        question: "In which war did America win its Independence?",
        answers: [
            { text: "Civil War", correct: false},
            { text: "Spanish-American War", correct: false},
            { text: "7 Years War", correct: false},
            { text: "Revolutionary War", correct: true}
        ]
    },
    {
        question: "Which item is the smallest?",
        answers: [
            { text: "Isotope", correct: false},
            { text: "Atom", correct: true},
            { text: "Molecule", correct: false},
        ]
    }
]