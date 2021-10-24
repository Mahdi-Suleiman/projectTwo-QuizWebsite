const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const usernamePattern=/^[A-Za-z]{3,13}$/;


form.addEventListener('submit', e => {
	e.preventDefault();
	
	 checkInputs();
    
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
    const flags =[];

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
        flags.push(true);
	}
    // jhgfufuyf

	// if(usernameValue.include(usernamePattern)){
    //     setErrorFor(username, 'Username must be in alphabets (between 3 to 13 characters)');
    // }else{
    //     setSuccessFor(username);
    // }
    //iuguiyguyfgu
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
        flags.push(true);

	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
        flags.push(true);

	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
        flags.push(true);

	}
if(passwordValue.length<6) {
        setErrorFor(password, 'Password cannot be less6');
    } else {
        setSuccessFor(password);
        flags.push(true);

    }
    if(password2Value.length<6) {
        setErrorFor(password2, 'Password cannot be less6');
    } else {
        setSuccessFor(password);
        flags.push(true);
    }

    if(flags.length === 6){
        signUp()
    }
    
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const signUp = e => {
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
  
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
  
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some (data => 
            data.username.toLowerCase() == username.toLowerCase()
        );
  
    if(!exist){
        formData.push({ username, email, password});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
        window.location.href="index.html";
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
  }