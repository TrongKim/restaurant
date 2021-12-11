const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if(signInButton != undefined && signInButton != undefined) {
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
	
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
} else {
	console.log('nani');
}