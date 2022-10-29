const passwordInput = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const submitButton = document.getElementById("submit-button");
const form = document.getElementById('sign-up');


let passwordMatch = true;

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
    }
    else if (passwordInput.value == passwordConfirmation.value){
        
        submitButton.disabled = false;
    }
}
