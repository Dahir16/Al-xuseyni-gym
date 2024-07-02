let userName = document.getElementById('userName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');


// contact form
const form = document.querySelector('.form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        userName: userName.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            userName.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }else {
            alert('Try again later!')
        }
    }
    xhr.send(JSON.stringify(formData));

});