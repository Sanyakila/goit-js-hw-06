const input = document.querySelector('#validation-input');
console.log(input);

input.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        valid();
    } else {
        inValid();
    }
});

function valid () {
    input.classList.add('valid');
    input.classList.remove('invalid');
}

function inValid() {
    input.classList.add('invalid');
    input.classList.remove('valid');
}