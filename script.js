const passwordInput = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const submitButton = document.getElementById("submit-button");
const form = document.getElementById('sign-up');

submitButton.addEventListener('click', () =>{
    if(passwordMatch == false){
        return;
    }
})

form.addEventListener('mouseleave', () => {
    checkPassword();
});

function checkPassword() {
    if (passwordInput.value != passwordConfirmation.value) {
        submitButton.disabled = true;
        submitButton.classList.add('disabled');
        submitButton.classList.remove('enabled');
    }
    else if (passwordInput.value == passwordConfirmation.value){
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
        submitButton.classList.remove('disabled');
    }
}
