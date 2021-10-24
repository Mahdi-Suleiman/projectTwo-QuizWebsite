const welcomingTag = document.querySelector("#welcomingTag");
const usernameFromCookies = document.cookie;
let usernameToShow = usernameFromCookies.slice(0, 1).toUpperCase();
usernameToShow = usernameToShow.concat('', usernameFromCookies.slice(1).toLowerCase())
welcomingTag.innerHTML = `Welcome ${usernameToShow}`;

//variables
const quizQuestion = document.querySelector("h3");
const allRadio = document.querySelectorAll(".my-radio");
const radio1 = document.querySelector("#answer1");
const label1 = document.querySelector("#label1");
const radio2 = document.querySelector("#answer2");
const label2 = document.querySelector("#label2");
const radio3 = document.querySelector("#answer3");
const label3 = document.querySelector("#label3");
const radio4 = document.querySelector("#answer4");
const label4 = document.querySelector("#label4");

const nextButton = document.querySelector('.next');
let currentQuestionCounter = 0;

// Functions
function buildMyQuiz(myCounter) {
    // let localstorageCounter = 0;
    myQuestions.forEach((currentQuestion, index) => {
        const savedAnswerInLocalstorage = JSON.stringify(currentQuestion.correctAnswer);
        localStorage.setItem(`Q${index + 1}`, savedAnswerInLocalstorage)
    })

    currentQuestionCounter = myCounter;
    quizQuestion.innerHTML = myQuestions[myCounter].question;
    label1.innerHTML = myQuestions[myCounter].answers.a;
    label2.innerHTML = myQuestions[myCounter].answers.b;
    label3.innerHTML = myQuestions[myCounter].answers.c;
    label4.innerHTML = myQuestions[myCounter].answers.d;

    radio1.setAttribute(`value`, "a");
    radio2.setAttribute(`value`, "b");
    radio3.setAttribute(`value`, "c");
    radio4.setAttribute(`value`, "d");

    // console.log(myCounter);
    // console.log("BuildMyQuiz");

}
function logout() {
    sessionStorage.clear();
    window.close();
    window.open('../html/index.html', '_blank');
}

function showNextQuestion() {
    let userChoice = 0;

    let correctChoiceFromLocalstorage = JSON.parse(localStorage.getItem(`Q${currentQuestionCounter + 1}`));
    for (let index = 0; index < allRadio.length; index++) {
        if (allRadio[index].checked == true) {
            userChoice = allRadio[index];
            currentQuestionCounter++;
            userChoice.checked = false;
            if (userChoice.value === correctChoiceFromLocalstorage) {
                localStorage.setItem(`A${currentQuestionCounter}`, true)
            }
            else {
                localStorage.setItem(`A${currentQuestionCounter}`, false)

            }
            // break;
        }
    }
    if (currentQuestionCounter === 9) {
        document.querySelector('#submit-button').style.display = "inline-block";
        nextButton.style.display = "none";
    }

    buildMyQuiz(currentQuestionCounter);
}
function submitExamButton() {
    window.open("../html/result-page.html", '_blank');
}

const myQuestions = [
    {
        question: "how to do comment in css?",
        answers: {
            a: "/* This is a single-line comment */",
            b: "/ This is a single-line comment /*",
            c: "<-- This is a single-line comment -->",
            d: "--< This is a single-line comment >--"
        },
        correctAnswer: "a",
    },
    {
        question: "Which of the following allows specifying styles for the visual elements of the website ?",
        answers: {
            a: "Cascading Style sheets",
            b: "Web page",
            c: "Form",
            d: "Animation"
        },
        correctAnswer: "a",
    },
    {
        question: "Which of the following is known as special symbol in the syntax of CSS ?",
        answers: {
            a: "Selector",
            b: "Declaration",
            c: "Rules",
            d: "Input"
        },
        correctAnswer: "c",

    },
    {
        question: "Which of the following are two main parts of CSS rule ?",
        answers: {
            a: "Select, declaration",
            b: "Selector, declare",
            c: "Selection, declaration",
            d: "Selector, declaration"
        },
        correctAnswer: "b",
    },
    {
        question: "Which of the following is an HTML element on which style can be applied ?",
        answers: {
            a: "Declaration",
            b: "Selector",
            c: "Select",
            d: "Declare"
        },
        correctAnswer: "c",

    },
    {
        question: "Which of the following is the syntax of CSS ?",
        answers: {
            a: "elect {property : value}",
            b: "Selector {value : property}",
            c: "Selector {property : value}",
            d: "Selection {property : value}"
        },
        correctAnswer: "c",

    },
    {
        question: "Which of the following is a scripting language that allows adding programming to web pages ?",
        answers: {
            a: "Action script",
            b: "JavaScript",
            c: "HTML",
            d: "CSS"
        },
        correctAnswer: "b",
    },
    {
        question: "Which of the following is a scripting language that is simple, lightweight programming language that does not contain advanced programming functionalities ?",
        answers: {
            a: "JavaScript",
            b: "HTML",
            c: "C",
            d: "Java"
        },
        correctAnswer: "a",
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm",
            d: "asp.net"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following symbol signifies the start and end of a JavaScript block ?",
        answers: {
            a: "Semicolon",
            b: "Square bracket",
            c: "Curly bracket",
            d: "Round bracket"
        },
        correctAnswer: "c",
    }
];