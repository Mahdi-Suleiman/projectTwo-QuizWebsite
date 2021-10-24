const btn = document.querySelector('.quiz-btn');
const quizRules = document.querySelector('.quiz-rules');
const quiz = document.querySelector('.quiz');

btn.addEventListener('click', () => {
  window.location.href = "quiz.html";
});
const welcomingTag = document.querySelector("#welcomingTag");
const usernameFromCookies = document.cookie;
let usernameToShow = usernameFromCookies.slice(0, 1).toUpperCase();
usernameToShow = usernameToShow.concat('', usernameFromCookies.slice(1).toLowerCase())
welcomingTag.innerHTML = `Welcome ${usernameToShow}`;

function logout() {
  sessionStorage.clear();
  window.close();
  window.open('./index.html', '_blank');
}
