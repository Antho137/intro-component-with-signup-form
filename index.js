// Select all input elements for verification
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#trialForm"); 

// Return true if the input argument is empty
const isRequired = value => value === '' ? false : true;

// Return false if the length argument is not between the min and max argument
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email);
}

const isPasswordValid = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,}$/;
    return regexPassword.test(password);
}

// Get the form field element, add error class and show the error message
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
}

// Get the form field element, remove error class and hide the error message
const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = "";
}

// checking first name validity
const checkFirstName = () => {
    let valid = false;
    const min = 3;
    const max = 15;
    const fName = firstName.value.trim();
    if (!isRequired(fName)) {
        showError(firstName, 'First Name cannot be empty.');
        firstName.style.borderColor = "red";
        firstName.placeholder = "";
        firstName.style.backgroundImage = "url(images/icon-error.svg)";
        firstName.style.backgroundRepeat = "no-repeat";
        firstName.style.backgroundPosition = "90%";
    } else if (!isBetween(fName.length, min, max)) {
        showError(firstName, `First Name must be between ${min} and ${max} characters.`);
        firstName.style.borderColor = "red";
        firstName.placeholder = "";
        firstName.style.backgroundImage = "url(images/icon-error.svg)";
        firstName.style.backgroundRepeat = "no-repeat";
        firstName.style.backgroundPosition = "90%";
    } else {
        showSuccess(firstName);        
        firstName.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// checking last name validity
const checkLastName = () => {
    let valid = false;
    const min = 3;
    const max = 15;
    const lName = lastName.value.trim();
    if (!isRequired(lName)) {
        showError(lastName, 'Last Name cannot be empty.');
        lastName.style.borderColor = "red";
        lastName.placeholder = "";
        lastName.style.backgroundImage = "url(images/icon-error.svg)";
        lastName.style.backgroundRepeat = "no-repeat";
        lastName.style.backgroundPosition = "90%";
    } else if (!isBetween(lName.length, min, max)) {
        showError(lastName, `First Name must be between ${min} and ${max} characters.`);
        lastName.style.borderColor = "red";
        lastName.placeholder = "";
        lastName.style.backgroundImage = "url(images/icon-error.svg)";
        lastName.style.backgroundRepeat = "no-repeat";
        lastName.style.backgroundPosition = "90%";
    } else {
        showSuccess(lastName);
        lastName.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// checking email validity
const checkEmail = () => {
    let valid = false;
    const emailAddress = email.value.trim();
    if (!isRequired(emailAddress)) {
        showError(email, 'Email cannot be empty.');
        email.style.borderColor = "red";
        email.placeholder = "";
        email.style.backgroundImage = "url(images/icon-error.svg)";
        email.style.backgroundRepeat = "no-repeat";
        email.style.backgroundPosition = "90%";
    } else if (!isEmailValid(emailAddress)) {
        showError(email, 'Looks like this is not an email.');
        email.style.borderColor = "red";
        email.placeholder = "";
        email.style.backgroundImage = "url(images/icon-error.svg)";
        email.style.backgroundRepeat = "no-repeat";
        email.style.backgroundPosition = "90%";
    } else {
        showSuccess(email);
        email.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// checking password validity
const checkPassword = () => {
    let valid = false;
    const validPassword = password.value.trim();
    if (!isRequired(validPassword)) {
        showError(password, 'Password cannot be empty.');
        password.style.borderColor = "red";
        password.placeholder = "";
        password.style.backgroundImage = "url(images/icon-error.svg)";
        password.style.backgroundRepeat = "no-repeat";
        password.style.backgroundPosition = "90%";      
    } else if (!isPasswordValid(validPassword)) {
        showError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, 1 special character in (!@#$%&)');
        password.style.borderColor = "red";
        password.placeholder = "";
        password.style.backgroundImage = "url(images/icon-error.svg)";
        password.style.backgroundRepeat = "no-repeat";
        password.style.backgroundPosition = "90%";
    } else {
        showSuccess(password);
        password.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// Pevent the form from submitting and validate fields
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isFirstNameValid = checkFirstName();
    let isLastNameValid = checkLastName();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();

    let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

    // Submit the form if it is valid
    if (isFormValid) {
        alert("Thanks for Claiming your free trial. \nYou submitted: \nFirst Name: " + firstName.value + "\nLast Name: " + lastName.value + "\n" + "Email Address: " + email.value + "\n");
    }
    form.reset();
    firstName.focus();
});