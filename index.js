import * as qq from './bank.js';
const quizBox = document.getElementById("question_selection");
const score = document.getElementById("hideScore");
const closeBtn = document.getElementById("close");
const anotherQuizBtn = document.getElementById("anotherQuiz");
anotherQuizBtn.addEventListener("click", closeQuiz);
const quizQ = document.getElementById("question");
closeBtn.addEventListener("click", closeQuiz);
const sBtnMath = document.getElementById("sBtnMath");
sBtnMath.addEventListener("click", startQuiz)
const sBtnAmericanHistory = document.getElementById("sBtnAmericanHistory");
sBtnAmericanHistory.addEventListener("click", startQuizUS)
const sBtnEnglish = document.getElementById("sBtnEnglish");
sBtnEnglish.addEventListener("click", startQuizEng)
const sBtnScience = document.getElementById("sBtnScience");
sBtnScience.addEventListener("click", startQuizSci)
//reset

let Q = 0;
let chosen;
let correctChoices = 0;
let answerCorrectFirst = true;

function startQuiz(){
    quizBox.classList.remove("hide");
    populateAnswers();
    sBtnEnglish.classList.add("hide")
    sBtnScience.classList.add("hide")
    sBtnAmericanHistory.classList.add("hide")
    sBtnMath.classList.add("hide")
}

function closeQuiz(){
    Q = 0;
    chosen = null;
    correctChoices =0;
    quizBox.classList.add("hide");
    score.classList.add("hide")
    sBtnEnglish.classList.remove("hide")
    sBtnScience.classList.remove("hide")
    sBtnAmericanHistory.classList.remove("hide")
    sBtnMath.classList.remove("hide")
    for (let i=0; i<4; i++){
        document.getElementById("q" + i).classList.remove("picked");
    }
    document.getElementById("submit").removeEventListener("click" , submit)
    document.getElementById("submit").removeEventListener("click" , submitEng)
    document.getElementById("submit").removeEventListener("click" , submitUS)
    document.getElementById("submit").removeEventListener("click" , submitSci)
}

function populateAnswers(){

    for (let i=0; i<4; i++){
        answerCorrectFirst = true;
        document.getElementById("q" + i).classList.remove("incorrect")
        document.getElementById("q" + i).innerText = qq.mathQuizQ[Q].answers[i].text;
        document.getElementById("q" + i).addEventListener("click" , () =>{
             chosen = qq.mathQuizQ[Q].answers[i]
             let pickedBox = document.getElementById("q" + i);
                for (let k=0; k<4; k++)
                {
                    if (document.getElementById("q" + k) == pickedBox){
                        pickedBox.classList.add("picked");
                    }
                    else 
                    {
                        document.getElementById("q" + k).classList.remove("picked")
                    }
                }
            });
    }
    quizQ.innerText = qq.mathQuizQ[Q].question;
    document.getElementById("submit").addEventListener("click" , submit)
}


function submit(){
    if(chosen == null)
    {
        alert("Please pick an answer")
    }
    else if (chosen.correct)
    {

     //   alert("Correct!")
        if(Q < qq.mathQuizQ.length-1 && answerCorrectFirst)
        {
            correctChoices++
            console.log("C")
            Q++;
            chosen = null;
            for (let i=0; i<4; i++){
                document.getElementById("q" + i).classList.remove("picked");
            }
            populateAnswers();
        }

        else if(Q < qq.mathQuizQ.length-1)
        {
            Q++;
            chosen = null;
            for (let i=0; i<4; i++){
                document.getElementById("q" + i).classList.remove("picked");
            }
            populateAnswers();
        }

        else {
            quizBox.classList.add("hide");
            score.classList.remove("hide");
            if (answerCorrectFirst)
            {
                correctChoices++
            }
            document.getElementById("score").innerHTML = "You got " + correctChoices + " correct on the first try!";
        }
    }
    else
        {
        console.log("IN")
        answerCorrectFirst = false;
            document.getElementById(chosen.n).classList.add("incorrect");
            document.getElementById(chosen.n).classList.remove("picked");
            chosen = null;
        }
    

    }


//US Quiz    
    function startQuizUS(){
        quizBox.classList.remove("hide");
        populateAnswersUS();
        sBtnEnglish.classList.add("hide")
        sBtnScience.classList.add("hide")
        sBtnAmericanHistory.classList.add("hide")
        sBtnMath.classList.add("hide")
    }
    
    function populateAnswersUS(){
    
        for (let i=0; i<4; i++){
            answerCorrectFirst = true;
            document.getElementById("q" + i).classList.remove("incorrect")
            document.getElementById("q" + i).innerText = qq.USQuiz[Q].answers[i].text;
            document.getElementById("q" + i).addEventListener("click" , () =>{
                 chosen = qq.USQuiz[Q].answers[i]
                 let pickedBox = document.getElementById("q" + i);
                    for (let k=0; k<4; k++)
                    {
                        if (document.getElementById("q" + k) == pickedBox){
                            pickedBox.classList.add("picked");
                        }
                        else 
                        {
                            document.getElementById("q" + k).classList.remove("picked")
                        }
                    }
                });
        }
        quizQ.innerText = qq.USQuiz[Q].question;
        document.getElementById("submit").addEventListener("click" , submitUS)
    }
    
    
    function submitUS(){
        if(chosen == null)
        {
            alert("Please pick an answer")
        }
        else if (chosen.correct)
        {
    
            if(Q < qq.USQuiz.length-1 && answerCorrectFirst)
            {
                correctChoices++
                console.log("C")
                Q++;
                chosen = null;
                for (let i=0; i<4; i++){
                    document.getElementById("q" + i).classList.remove("picked");
                }
                populateAnswersUS();
            }
    
            else if(Q < qq.USQuiz.length-1)
            {
                Q++;
                chosen = null;
                for (let i=0; i<4; i++){
                    document.getElementById("q" + i).classList.remove("picked");
                }
                populateAnswersUS();
            }
    
            else {
                quizBox.classList.add("hide");
                score.classList.remove("hide");
                if (answerCorrectFirst)
                {
                    correctChoices++
                }
                document.getElementById("score").innerHTML = "You got " + correctChoices + " correct on the first try!";
            }
        }
        else
            {
            console.log("IN")
            answerCorrectFirst = false;
                document.getElementById(chosen.n).classList.add("incorrect");
                document.getElementById(chosen.n).classList.remove("picked");
                chosen = null;
            }
        
    
        }


//Eng Quiz    
function startQuizEng(){
    quizBox.classList.remove("hide");
    populateAnswersEng();
    sBtnEnglish.classList.add("hide")
    sBtnScience.classList.add("hide")
    sBtnAmericanHistory.classList.add("hide")
    sBtnMath.classList.add("hide")
}

function populateAnswersEng(){

    for (let i=0; i<4; i++){
        answerCorrectFirst = true;
        document.getElementById("q" + i).classList.remove("incorrect")
        document.getElementById("q" + i).innerText = qq.EngQuiz[Q].answers[i].text;
        document.getElementById("q" + i).addEventListener("click" , () =>{
             chosen = qq.EngQuiz[Q].answers[i]
             let pickedBox = document.getElementById("q" + i);
                for (let k=0; k<4; k++)
                {
                    if (document.getElementById("q" + k) == pickedBox){
                        pickedBox.classList.add("picked");
                    }
                    else 
                    {
                        document.getElementById("q" + k).classList.remove("picked")
                    }
                }
            });
    }
    quizQ.innerText = qq.EngQuiz[Q].question;
    document.getElementById("submit").addEventListener("click" , submitEng)
}


function submitEng(){
    if(chosen == null)
    {
        alert("Please pick an answer")
    }
    else if (chosen.correct)
    {

        if(Q < qq.EngQuiz.length-1 && answerCorrectFirst)
        {
            correctChoices++
            console.log("C")
            Q++;
            chosen = null;
            for (let i=0; i<4; i++){
                document.getElementById("q" + i).classList.remove("picked");
            }
            populateAnswersEng();
        }

        else if(Q < qq.EngQuiz.length-1)
        {
            Q++;
            chosen = null;
            for (let i=0; i<4; i++){
                document.getElementById("q" + i).classList.remove("picked");
            }
            populateAnswersEng();
        }

        else {
            quizBox.classList.add("hide");
            score.classList.remove("hide");
            if (answerCorrectFirst)
            {
                correctChoices++
            }
            document.getElementById("score").innerHTML = "You got " + correctChoices + " correct on the first try!";
        }
    }
    else
        {
        console.log("IN")
        answerCorrectFirst = false;
            document.getElementById(chosen.n).classList.add("incorrect");
            document.getElementById(chosen.n).classList.remove("picked");
            chosen = null;
        }
    

    }


//Sci Quiz    
function startQuizSci(){
    quizBox.classList.remove("hide");
    populateAnswersSci();
    sBtnEnglish.classList.add("hide")
    sBtnScience.classList.add("hide")
    sBtnAmericanHistory.classList.add("hide")
    sBtnMath.classList.add("hide")
}

function populateAnswersSci(){

    for (let i=0; i<4; i++){
        answerCorrectFirst = true;
        document.getElementById("q" + i).classList.remove("incorrect")
        document.getElementById("q" + i).innerText = qq.SciQuiz[Q].answers[i].text;
        document.getElementById("q" + i).addEventListener("click" , () =>{
             chosen = qq.SciQuiz[Q].answers[i]
             let pickedBox = document.getElementById("q" + i);
                for (let k=0; k<4; k++)
                {
                    if (document.getElementById("q" + k) == pickedBox){
                        pickedBox.classList.add("picked");
                    }
                    else 
                    {
                        document.getElementById("q" + k).classList.remove("picked")
                    }
                }
            });
    }
    quizQ.innerText = qq.SciQuiz[Q].question;
    document.getElementById("submit").addEventListener("click" , submitSci)
}


function submitSci(){
    if(chosen == null)
    {
        alert("Please pick an answer")
    }
    else if (chosen.correct)
    {

        if(Q < qq.SciQuiz.length-1 && answerCorrectFirst)
        {
            correctChoices++
            console.log("C")
            Q++;
            chosen = null;
            for (let i=0; i<4; i++){
                document.getElementById("q" + i).classList.remove("picked");
            }
            populateAnswersSci();
        }

        else if(Q < qq.SciQuiz.length-1)
        {
            Q++;
            chosen = null;
            for (let i=0; i<4; i++){
                document.getElementById("q" + i).classList.remove("picked");
            }
            populateAnswersSci();
        }

        else {
            quizBox.classList.add("hide");
            score.classList.remove("hide");
            if (answerCorrectFirst)
            {
                correctChoices++
            }
            document.getElementById("score").innerHTML = "You got " + correctChoices + " correct on the first try!";
        }
    }
    else
        {
        console.log("IN")
        answerCorrectFirst = false;
            document.getElementById(chosen.n).classList.add("incorrect");
            document.getElementById(chosen.n).classList.remove("picked");
            chosen = null;
        }
    

    }
