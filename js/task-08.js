const formEl = document.querySelector(".login-form");




function onFormSubmit(event) {
    event.preventDefault()

    const userMail = event.currentTarget.elements.email.value;

    const userPassword = event.currentTarget.elements.password.value;
    
    if (userMail === "" || userPassword === "") {
       return alert("All fields must be filled")
    }


    const formData = {
        userMail,
        userPassword,
    }

    console.log(formData);
    
    return this.reset()
}

formEl.addEventListener('submit', onFormSubmit);

