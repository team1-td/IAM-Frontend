//Submit form  
function formSubmit() {
    if (isOneFieldEmpty(getUsernameElement())) {
        errorMessage(getErrorTextUsername(), "Username is required");
        redBorber(getUsernameElement());
        return false;
    }
    if (isOneFieldEmpty(getEmailElement())) {
        errorMessage(getErrorTextEmail(), "Email is required");
        redBorber(getEmailElement());
        return false;
    }
    if (isOneFieldEmpty(getNameElement())) {
        errorMessage(getErrorTextName(), "Name is required");
        redBorber(getNameElement());
        return false;
    }
    if (isOneFieldEmpty(getSurnameElement())) {
        errorMessage(getErrorTextSurname(), "Surname is required");
        redBorber(getSurnameElement());
        return false;
    }
    if (isOneFieldEmpty(getPasswordElement())) {
        errorMessage(getErrorTextPassword(), "Password is required");
        redBorber(getPasswordElement());
        return false;
    }
    if (isOneFieldEmpty(getConfirmPasswordElement())) {
        errorMessage(getErrorTextConfirmPassword(), "Password is required");
        redBorber(getConfirmPasswordElement());
        return false;
    }
    if (isElementGreaterThan7(getUsernameElement())) {
        errorMessage(getErrorTextUsername(), "Minimum 8 characters");
        redBorber(getUsernameElement());
        return false;
    }

    if (isElementLessThan13(getUsernameElement())) {
        errorMessage(getErrorTextUsername(), "Maximum 12 characters");
        redBorber(getUsernameElement());
        return false;
    }
    
    if (!isValidEmail(getEmailElement())) {
        errorMessage(getErrorTextEmail(), "Invalid email format");
        redBorber(getEmailElement());
        return false;
    }
    
    if (!isValidPassword(getPasswordElement())) {
        errorMessage(getErrorTextPassword(), "Password requires minimum 8 characters, maximum 12 characaters, at least one uppercase character, one lowercase character, one number and one symbol");
        redBorber(getPasswordElement());
        return false;
    }
    if (!isValidPassword(getConfirmPasswordElement())) {
        errorMessage(getErrorTextPassword(), "Password requires minimum 8 characters, maximum 12 characaters, at least one uppercase character, one lowercase character, one number and one symbol");
        redBorber(getConfirmPasswordElement());
        return false;
    }
    return true;
}


//Section of all checks

//Check for empty fields
function isOneFieldEmpty(inputElement) {
    return inputElement.value == "";
}

//Check for element length greater than 7 
function isElementGreaterThan7(inputElement) {
    return inputElement.value.length < 8;
}

//Check for element length less than 13
function isElementLessThan13(inputElement) {
    return inputElement.value.length > 12;
}

//Check Regular Expression email
function isValidEmail(inputElement) {
    let emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return inputElement.value.match(emailformat);
}

//Check Regular Expression password
function isValidPassword(inputElement) {
    let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    return inputElement.value.match(passwordformat);
}


//Section of error handling

//Generate red border
function redBorber(inputElement) {
    inputElement.setAttribute("class", "input-error");
}

//Generate error message
function errorMessage(errorText, message) {
    errorText.innerHTML = message;
}

//Turn off error
function turnOffError(errorText, inputElement) {
    errorText.innerHTML = "";
    inputElement.setAttribute("class", "inputfield_style");
}


// Section of the turn off of the error messages when the input field keydowns

//Get of listening to the "keydown" event in the input fields
document.getElementById("registration__username").addEventListener("keydown", turnOffErrorUsername);
document.getElementById("registration__email").addEventListener("keydown", turnOffErrorEmail);
document.getElementById("registration__name").addEventListener("keydown", turnOffErrorName);
document.getElementById("registration__surname").addEventListener("keydown", turnOffErrorSurname);
document.getElementById("registration__password").addEventListener("keydown", turnOffErrorPassword);
document.getElementById("registration__confirm-password").addEventListener("keydown", turnOffErrorConfirmPassword);


//Turn off error messages when the input fields are no longer empty
function turnOffErrorUsername() {
    turnOffError(getErrorTextUsername(), getUsernameElement());
}

function turnOffErrorEmail(){
    turnOffError(getErrorTextEmail(), getEmailElement());
}

function turnOffErrorName() {
    turnOffError(getErrorTextName(), getNameElement());
}

function turnOffErrorSurname() {
    turnOffError(getErrorTextSurname(), getSurnameElement());
}

function turnOffErrorPassword() {
    turnOffError(getErrorTextPassword(), getPasswordElement());
}

function turnOffErrorConfirmPassword() {
    turnOffError(getErrorTextConfirmPassword(), getConfirmPasswordElement());
}

//section of the elements get from the html document

//Get input elements from html document
function getUsernameElement() {
    return document.getElementById("registration__username");
}

function getEmailElement() {
    return document.getElementById("registration__email");
}

function getNameElement() {
    return document.getElementById("registration__name");
}

function getSurnameElement() {
    return document.getElementById("registration__surname");
}

function getPasswordElement() {
    return document.getElementById("registration__password");
}

function getConfirmPasswordElement() {
    return document.getElementById("registration__confirm__password");
}

//Get error text elements from html document
function getErrorTextUsername() {
    return document.getElementById("error-text-username");
}

function getErrorTextEmail() {
    return document.getElementById("error-text-email");
}

function getErrorTextName() {
    return document.getElementById("error-text-name");
}

function getErrorTextSurname() {
    return document.getElementById("error-text-surname");
}

function getErrorTextPassword() {
    return document.getElementById("error-text-password");
}

function getErrorTextConfirmPassword() {
    return document.getElementById("error-text-confirm-password");
}
