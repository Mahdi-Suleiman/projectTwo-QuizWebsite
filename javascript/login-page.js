// signIn signUp username in cookie (for navbar)


function signIn(e) {

  let username = document.getElementById('username').value, password = document.getElementById('password').value;
  let formData = JSON.parse(localStorage.getItem('formData')) || [];
  let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data => data.username.toLowerCase() == username && data.password.toLowerCase() == password);
  console.log(exist)
  if (!exist) {
    e.preventDefault();
    alert("Incorrect login credentials");
  }
  else {

    document.cookie = `${username}; expires=Thu, 18 Dec 2099 12:00:00 UTC`;
    window.open("../html/quiz-rules.html")
  }
}

function goToRegisteration() {
  window.open("../html/registration.html", "_blank");
}
// const btn = document.querySelector('.reg-btn').addEventListener('click', ()=>{
//     window.location.href = "registration.html";
// });

// Registration button

// const btn = document.querySelector('.reg-btn').addEventListener('click',()=>{
//   location.href="registration.html";
// });
// console.log(document.querySelector('.reg-btn').click);
// console.log(document.querySelector('.log-btn'))

// btn.addEventListener('click', ()=>{
//   location.href="quiz.html";
// });

// ghassan

// const 
