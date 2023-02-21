const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert("Всі поля мають бути заповнені!");
    } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
    }
});