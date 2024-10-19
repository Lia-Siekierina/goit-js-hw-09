const feedbackForm = document.querySelector('.feedback-form');

checkInputStart();

feedbackForm.addEventListener('input', onInputChange);
feedbackForm.addEventListener('submit', onFormSubmit);

function onInputChange() {
    const formData = {
        email:(feedbackForm.elements.email.value).trim(),
        message:(feedbackForm.elements.message.value).trim(),
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    const email = (feedbackForm.elements.email.value).trim();
    const message = (feedbackForm.elements.message.value).trim();

    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }

    const userInfo = { email: email, message: message };
    console.log(userInfo);
    
    feedbackForm.reset();
    localStorage.clear();
}

function checkInputStart() {
    const localInfo = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

     feedbackForm.elements.email.value = localInfo.email || '';  
     feedbackForm.elements.message.value = localInfo.message || ''; 
}