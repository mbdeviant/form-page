const passwordInput = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const submitButton = document.getElementById("submit-button");
const formContainer = document.getElementById('form-container');
const passwordMatchWarning = document.createElement('p');

passwordMatchWarning.textContent = "*Passwords does not match"

formContainer.addEventListener('mousemove', () => {
    if(passwordConfirmation.value != '') checkPassword();   
});
submitButton.addEventListener('mousedown', ()=>{
    checkPassword();
})

function checkPassword() {
    if (passwordInput.value != passwordConfirmation.value) {
        submitButton.disabled = true;
        submitButton.classList.add('disabled');
        submitButton.classList.remove('enabled');
        passwordConfirmation.appendChild(passwordMatchWarning);

    }
    else if (passwordInput.value == passwordConfirmation.value) {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
        submitButton.classList.remove('disabled');
    }
}
