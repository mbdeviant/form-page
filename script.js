const passwordInput = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const submitButton = document.getElementById('submit-button');
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
        passwordMatch = false;

        console.log(passwordMatch);
        console.log(passwordInput.value);
        console.log(passwordConfirmation.value);
        
    }
    else if (passwordInput.value == passwordConfirmation.value){
        passwordMatch == true;
     
    }
}
