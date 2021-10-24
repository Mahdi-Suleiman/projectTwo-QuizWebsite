//Question bank
var questionBank= [
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Garampani sanctuary is located at',
        option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
        answer : 'Diphu, Assam'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option : ['1967','1968','1958','1922'],
        answer : '1967'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    }   
    
]

let question= document.getElementById('question');
let quizContainer= document.getElementById('quiz-container');
let scorecard= document.getElementById('scorecard');
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let next= document.querySelector('.next');
let points= document.getElementById('score');
let span= document.querySelectorAll('span');
let i=0;
let score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
// function calcScore(e){
//     if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
//     {
//         score= score+1;
//         document.getElementById(e.id).style.background= 'limegreen';
//     }
//     else{
//         document.getElementById(e.id).style.background= 'tomato';
//     }
//     setTimeout(nextQuestion,300);
// }

//function to display next question
function nextQuestion(){
    if(i<questionBank.length)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= ؤ+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();





















// const questionBank=[
//     {
//         question:"how to do comment in css?",
//     "option1":"/* This is a single-line comment */",
//     "option2":"*/ This is a single-line comment /*",
//     "option3":"<-- This is a single-line comment -->",
//     "option4":"--< This is a single-line comment >--",
//     answer:"1",

//     },
//     {
//         question:"Which of the following allows specifying styles for the visual elements of the website ?",
//     "option1":"Cascading Style sheets",
//     "option2":"Web page",
//     "option3":"Form",
//     "option4":"Animation",
//     answer:"1",

//     },
//     {
//         question:"Which of the following is known as special symbol in the syntax of CSS ?",
//     "option1":"Selector",
//     "option2":"Declaration",
//     "option3":"Rules",
//     "option4":"Input",
//     answer:"3",

//     },
//     {
//         question:"Which of the following are two main parts of CSS rule ?",
//     "option1":"Select, declaration",
//     "option2":"Selector, declare",
//     "option3":"Selection, declaration",
//     "option4":"Selector, declaration",
//     answer:"2",

//     },
//     {
//         question:"Which of the following is an HTML element on which style can be applied ?",
//     "option1":"Declaration",
//     "option2":"Selector",
//     "option3":"Select",
//     "option4":"Declare",
//     answer:"3",

//     },
//     {
//       question:"Which of the following is the syntax of CSS ?",
//     "option1":"elect {property : value}",
//     "option2":"Selector {value : property}",
//     "option3":"Selector {property : value}",
//     "option4":"Selection {property : value}",
//     answer:"3",

//     },
//     {
//         question:"Which of the following has developed JavaScript ?",
//     "option1":" Yahoo",
//     "option2":"Google",
//     "option3":"Wikipedia",
//     "option4":"Netscape",
//     answer:"4",

//     },
//     {
//         question:"Which of the following is a scripting language that allows adding programming to web pages ?",
//     "option1":"Action script",
//     "option2":"JavaScript",
//     "option3":"HTML",
//     "option4":"CSS",
//     answer:"2",

//     } ,  
//     {
//         question:"Which of the following is a scripting language that is simple, lightweight programming language that does not contain advanced programming functionalities ?",
//     "option1":"JavaScript",
//     "option2":"HTML",
//     "option3":"C",
//     "option4":"Java",
//     answer:"1",

//     },
//     {
//         question:"Which of the following tag is used to insert JavaScript code into an HTML page ?",
//     "option1":"<script>... <script>",
//     "option2":"<script>... </script>",
//     "option3":"script>... <//script>",
//     "option4":"</script>... </script>",
//     answer:"2",

//     },
//         {
//     question:"Which of the following symbol signifies the start and end of a JavaScript block ?",
//     "option1":"Semicolon",
//     "option2":"Square bracket",
//     "option3":"Curly bracket",
//     "option4":"Round bracket",
//     answer:"3",

//         },
// ];
// //function to display questions
// function displayQuestion(){
//     for(var a=0;a<span.length;a++){
//         span[a].style.background='none';
//     }
//     question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
//     option0.innerHTML= questionBank[i].option[0];
//     option1.innerHTML= questionBank[i].option[1];
//     option2.innerHTML= questionBank[i].option[2];
//     option3.innerHTML= questionBank[i].option[3];
//     stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
// }

// //function to calculate scores
// function calcScore(e){
//     if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
//     {
//         score= score+1;
//         document.getElementById(e.id).style.background= 'limegreen';
//     }
//     else{
//         document.getElementById(e.id).style.background= 'tomato';
//     }
//     setTimeout(nextQuestion,300);
// }

// //function to display next question
// function nextQuestion(){
//     if(i<questionBank.length-1)
//     {
//         i=i+1;
//         displayQuestion();
//     }
//     else{
//         points.innerHTML= score+ '/'+ questionBank.length;
//         quizContainer.style.display= 'none';
//         scoreboard.style.display= 'block'
//     }
// }

// //click events to next button
// next.addEventListener('click',nextQuestion);

// //Back to Quiz button event
// function backToQuiz(){
//     location.reload();
// }

// //function to check Answers
// function checkAnswer(){
//     var answerBank= document.getElementById('answerBank');
//     var answers= document.getElementById('answers');
//     answerBank.style.display= 'block';
//     scoreboard.style.display= 'none';
//     for(var a=0;a<questionBank.length;a++)
//     {
//         var list= document.createElement('li');
//         list.innerHTML= questionBank[a].answer;
//         answers.appendChild(list);
//     }
// }


displayQuestion();
// let currentQuiz=0;
// let score=0;
// let container=document.getElementById('quizContainer')
// let questionEl=document.getElementById('question')
// let opt1=document.getElementById('opt1')
// let opt2=document.getElementById('opt2')
// let opt3=document.getElementById('opt3')
// let opt4=document.getElementById('opt4')
// let totQuestions=questions.length;
// let nextButton=document.getElementById('nextButton')
// let resultCont= document.getElementById('result')
// function loadquestion(questionIndex){
//     let q =question[questionIndex];
// questionEl.textContent=(questionIndex+1)+'.'+q.question;
// opt1.textContent=q.option1;
// opt2.textContent=q.option2;
// opt3.textContent=q.option3;
// opt4.textContent=q.option4;
// }


//     const quiz =document.getElementById('quiz')
//     const answerEls=document.querySelectorALL('.answer')
//     const questionEl=document.getElementById('.question')
//     const a_text=document.getElementById('a_text')
//     const b_text=document.getElementById('b_text')
//     const c_text=document.getElementById('c_text')
//     const d_text=document.getElementById('d_text')
//     const submit=document.getElementById('.submit')

//     let currentQuiz=0;
//     let score=0;
//     loadQuiz()
//     function loadQuiz(){
//         deselectAnswers()
//         const currentQuizData=  QuizData[currentQuiz]
//         questionEl.innerText=currentQuizData.question

//         a_text.innerText=currentQuiz.a
//         b_text.innerText=currentQuiz.b
//         c_text.innerText=currentQuiz.c
//         d_text.innerText=currentQuiz.d
//     }
// function deselectAnswers(){
//     answerEls.forEach(answerElS => answerElS.checked=false)

// }
// function getSelected(){
//     let answerEls
//         answerEls.forEach(answerEl=>{
//         if(answerEls.checked){
//             answer=answerEl.id
//         }

//     })
//         return answer  
//     }

// submit.addEventlistener('click',()=>{
//     const answer= getSelected()
//     if(answer){
//         if(answer===QuizData[currentQuiz],correct){
//             score++
//         }
//         currentQuiz++
//     }
//     if(currentQuiz<QuizData.length){
//         loadQuiz()
//     } else{
//         quiz.innerHTML}=`
//         <h2>your answer ${score}/${quizData.length}question correctly</h2>`
// })
