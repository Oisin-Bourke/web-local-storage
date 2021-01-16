// create needed constants
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// Stop the form from submitting when button is pressed 
form.addEventListener('submit', e => {
    e.preventDefault();
});

submitBtn.addEventListener('click', () => {
    // store the name entered in web storage
    localStorage.setItem('name', nameInput.value);
    // display the greetings and update the form display
    nameDisplayCheck();
});

forgetBtn.addEventListener('click', () => {
    localStorage.removeItem('name');
    nameDisplayCheck();
});

const nameDisplayCheck = () => {
    if(localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome' + name;
        personalGreeting.textContent = 'Welcome to out Website, ' + name + '! We hope you have fun while you are here.';
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    } else {
        h1.textContent = 'Welcome to our website';
        personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}

document.body.onload = nameDisplayCheck;
