const btn = document.querySelector('.quiz-btn');
const quizRules = document.querySelector('.quiz-rules');
const quiz = document.querySelector('.quiz');

const welcomingTag = document.querySelector("#welcomingTag");
const usernameFromCookies = document.cookie;
let usernameToShow = usernameFromCookies.slice(0, 1).toUpperCase();
usernameToShow = usernameToShow.concat('', usernameFromCookies.slice(1).toLowerCase())
welcomingTag.innerHTML = `Welcome ${usernameToShow}`;

function logout() {
  sessionStorage.clear();
  localStorage.removeItem('logged');
  window.close();
  window.open('../html/index.html', '_blank');
}

function oneTimeAttemptCheck() {
  const allUsers = JSON.parse(localStorage.getItem('formData'));
  const allUsersToPushAgain = [];
  console.log("all", allUsers);
  const loggedUser = localStorage.getItem(`logged`);
  allUsers.forEach((element, index) => {
    if (element.username === loggedUser)
      if (element.attempt === true) {
        console.log("TRUUUUE");
        Swal.fire({
          title: 'You already attempted the quiz!',
          text: "Attempts left: 0",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Logout'
        }).then((result) => {
          if (result.isConfirmed) {
            logout()
          }
        })
      }
      else {
        console.log("FAALSEE");

        element.attempt = true;
        window.location.href = "../html/quiz.html";
      }
    allUsersToPushAgain.push(element);
  });
  localStorage.removeItem("formData");
  localStorage.setItem("formData", JSON.stringify(allUsersToPushAgain));
}
