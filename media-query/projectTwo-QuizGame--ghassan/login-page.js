//local storage
const signUp = e => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  //   window.location.href="";
};

const logIn = e => {
  e.preventDefault();
  let emailLog = document.getElementById('email').value;
  let passwordLog = document.getElementById('password').value;
  let result = document.getElementById('result');

  let userEmail = localStorage.getItem('email');
  let userPassword = localStorage.getItem('password');

  if (emailLog != userEmail || passwordLog != userPassword) {
    result.innerHTML = 'Wrong email or wrong password..';
  }
  else if (emailLog === userEmail && passwordLog === userPassword) {
    result.innerHTML = 'Logged in';
    //  window.location.href="";
  }
  else {
    result.innerHTML = "Wrong input";
  }
};

const burgerMenu = document.querySelector(".burger-menu");
const navbar = document.querySelector(".navbar");
const navButtons = document.querySelector(".nav-btns");
function toggleBurgerMenu() {
  navbar.classList.toggle("navbar-burger");
  navButtons.classList.toggle("nav-btns-burger");
}