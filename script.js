const passwordInput = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const submitButton = document.getElementById("submit-button");
const formContainer = document.getElementById('form-container');
const form = document.getElementById('sign-up');
const passwordMatchWarning = document.createElement('p');

passwordMatchWarning.textContent = "*Passwords does not match";
passwordMatchWarning.classList.add('match-warning');

formContainer.addEventListener('mousemove', () => {
    if(passwordConfirmation.value != '') checkPassword();
});
submitButton.addEventListener('mousedown', ()=>{
    checkPassword();
    if(passwordConfirmation.value != '') form.appendChild(passwordMatchWarning);
})

function checkPassword() {
    if (passwordInput.value != passwordConfirmation.value) {
        submitButton.disabled = true;
        submitButton.classList.add('disabled');
        submitButton.classList.remove('enabled');
        form.appendChild(passwordMatchWarning);

    }
    else if (passwordInput.value == passwordConfirmation.value) {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
        submitButton.classList.remove('disabled');
        form.removeChild(passwordMatchWarning);
    }
}
