// const emailChecker = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$');
const emailDiv = document.querySelector('.email');
const emailInput = document.querySelector('.email>input');

const firstNDiv = document.querySelector('.first-name');
const firstNInput = document.querySelector('.first-name>input')

const numberDiv = document.querySelector('.phone-number');
const numberInput = document.querySelector('.phone-number>input')

const lastNDiv = document.querySelector('.last-name');
const lastNInput = document.querySelector('.last-name>input')

const pwDiv = document.querySelector('.password');
const pwInput = document.querySelector('.password>input')

const cpwDiv = document.querySelector('.confirm-password');
const cpwInput = document.querySelector('.confirm-password>input')
const cpwInputValue = cpwInput.value;
const form = document.querySelector('form');

numberInput.addEventListener('keypress', (e) => {
    if (e.which < 48 || e.which > 57) {
        e.preventDefault();
    }
})


function pwResetValidations() {
    pwDiv.classList.remove('correct');
    pwDiv.classList.remove('error');
    pwDiv.classList.remove('pw-validation');

}

function cpwResetValidations() {
    cpwDiv.classList.remove('correct');
    cpwDiv.classList.remove('error');
    cpwDiv.classList.remove('cpw-validation');
}
form.addEventListener('submit', (e) => {
    // e.preventDefault();
    if ((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(pwInput.value) === false) || (pwInput.value !== cpwInput.value)) {
        e.preventDefault();
        if (pwInput.value !== cpwInput.value) {
            if (pwDiv.classList.contains('correct')) {
                pwDiv.classList.remove('correct');
                pwDiv.classList.add('error')
            }
            cpwDiv.classList.add('cpw-validation');
            cpwDiv.classList.add('error')
        }
    }
})

cpwInput.addEventListener('focusout', (e) => {
    if (pwInput.value === cpwInput.value) {
        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(pwInput.value) && cpwInput.value) {
            return;
        }
        else if (!pwInput.value && !cpwInput.value) {
            return;
        } else {
            pwResetValidations()
            cpwResetValidations()
            pwDiv.classList.add('correct');
            cpwDiv.classList.add('correct');
        }

    }
    else {
        pwDiv.classList.add('error');
        cpwDiv.classList.add('error');
        cpwDiv.classList.add('cpw-validation');
    }
})

cpwInput.addEventListener('keyup', (e) => {
    pwResetValidations()
    cpwResetValidations()
    if (pwInput.value === cpwInput.value && pwInput.value == 0) {
        pwDiv.classList.add('error');
        cpwDiv.classList.add('error');
    }
    else if (pwInput.value === cpwInput.value) {
        pwDiv.classList.add('correct');
        cpwDiv.classList.add('correct');
    }
    else {
        pwDiv.classList.add('error');
        cpwDiv.classList.add('error');
        cpwDiv.classList.add('cpw-validation');
    }
})
pwInput.addEventListener('focusout', () => {
    pwDiv.classList.remove('pw-hint');

    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(pwInput.value) && !cpwInput.value) {
        pwResetValidations()
        cpwResetValidations()
        pwDiv.classList.add('correct');
    }
    else if (!pwInput.value) {
        pwResetValidations()
        cpwResetValidations()
    }
    else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(pwInput.value) && cpwInput.value) {
        pwResetValidations()
        cpwResetValidations()
        pwDiv.classList.add('error');
        pwDiv.classList.add('pw-validation');
        cpwDiv.classList.add('cpw-validation');
    }

    else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(pwInput.value)) {
        pwResetValidations()
        cpwResetValidations()
        pwDiv.classList.add('error');
        pwDiv.classList.add('pw-validation');
        cpwInput.value = '';
    }
})

pwInput.addEventListener('focus', () => {
    pwDiv.classList.add('pw-hint');
})

emailInput.addEventListener('focusout', () => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/.test(email.value)) {
        if (emailDiv.classList.contains('error')) {
            emailDiv.classList.remove('error');
            emailDiv.classList.add('correct');
        } else {
            emailDiv.classList.add('correct');
        }
    } else if (!email.value) {
        if (emailDiv.classList.contains('error') || emailDiv.classList.contains('correct')) {
            emailDiv.classList.remove('error');
            emailDiv.classList.remove('correct');
        } else {
            return;
        }
    } else {
        if (emailDiv.classList.contains('correct')) {
            emailDiv.classList.remove('correct');
            emailDiv.classList.add('error');
        } else {
            emailDiv.classList.add('error');
        }
    }
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/.test(email.value)) {
        if (emailDiv.classList.contains('email-validation')) {
            emailDiv.classList.remove('email-validation')
        } else {
            return;
        }
    } else if (!email.value) {
        if (emailDiv.classList.contains('email-validation')) {
            emailDiv.classList.remove('email-validation');
        }
    } else {
        emailDiv.classList.add('email-validation');
    }
})

firstNInput.addEventListener('focusout', () => {
    if (!firstNInput.value) {
        if (firstNDiv.classList.contains('correct')) {
            firstNDiv.classList.remove('correct');
        } else {
            return;
        }
    } else {
        firstNDiv.classList.add('correct');
    }
})

lastNInput.addEventListener('focusout', () => {
    if (!lastNInput.value) {
        if (lastNDiv.classList.contains('correct')) {
            lastNDiv.classList.remove('correct');
        } else {
            return;
        }
    } else {
        lastNDiv.classList.add('correct');
    }
})

