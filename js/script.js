// show menu 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#nav-menu');
const background = document.querySelector('.background');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
	 background.classList.toggle('active')
})

document.querySelectorAll('.nav__link').forEach(n => n.
    addEventListener('click', () =>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
	 background.classList.remove('active')
}))

// show menu end






// form control start
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Ваше имя не может быть пустым');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Ваша электронная почта не должна быть пустая');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Данная электронная почта не действительна');
	} else {
		setSuccessFor(email);
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

// form control end