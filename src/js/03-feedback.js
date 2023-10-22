import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

let formData = {};

const saveFormData = (e) => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
    };
    
const loadFormData = () => {
    try {
    const storedData = localStorage.getItem(storageKey);
    if (!storedData) return; 
        formData = JSON.parse(storedData);
        Object.entries(formData).forEach(([key, val]) => {
        form.elements[key].value = val;
    });

    } catch (error) {
    console.log(error.message);
    }
};

    loadFormData();

    const updateFormData = throttle(saveFormData, 500);
    form.addEventListener("input", updateFormData);

    form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(formData);
    formData = {};
    e.target.reset(); 
    localStorage.removeItem(storageKey);
});
