(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}" class="question${questionNumber}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        let flag = false;
        const test = document.querySelectorAll(`.question${currentSlide}`)
        for (let index = 0; index < test.length; index++) {
            if (test[index].checked == true) {
                flag = true;
            }
        }
        console.log(flag);

        if (flag === true)
            showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    /*
    const myQuestions = [
        {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        }
    ];
    */
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

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
