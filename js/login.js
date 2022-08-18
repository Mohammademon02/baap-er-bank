// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    // step-2: get the email address insite the email field
    // always remember to use .value to get text form an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a: set an id on html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check whether valid user or not
    
    if (email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Toke ami tejjo sontan gosona korlam. tui password vule gasos.')
    }
})