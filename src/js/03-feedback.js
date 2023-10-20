import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveFormData = () => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(formData));
};

const loadFormData = () => {
    const storedData = localStorage.getItem(storageKey);
    if (storedData) {
        const formData = JSON.parse(storedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
};

const updateFormData = throttle(saveFormData, 500);
emailInput.addEventListener('input', updateFormData);
messageInput.addEventListener('input', updateFormData);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formData);
    
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(storageKey);
});