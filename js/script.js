let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('name').value;
    if(name.length === 0){
        nameError.innerHTML = 'Name is required'
        return false;
    }
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Full name is required'
        return false;
    }
    nameError.innerHTML = 'valid'
    return true;
}
function validateEmail() {
    let email = document.getElementById('email').value;
    if(email.length === 0){
        emailError.innerHTML = 'Email cannot be empty'
        return false;
    }
    else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Enter valid email'
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;

}
function validateMessage() {
    let message = document.getElementById('message').value;

    let minimumCharacter = '15';
    let left = minimumCharacter - message.length

    if(left > 0){
        messageError.innerHTML = left + 'more charcters are required'
        return false;       
    }
    messageError.innerHTML = 'valid'
    return true;
}
function sendMessage() {
    if(validateName() && validateEmail() && validateMessage()){
          submitError.innerHTML = 'Submitted!'    
          return true;
    }else {
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}