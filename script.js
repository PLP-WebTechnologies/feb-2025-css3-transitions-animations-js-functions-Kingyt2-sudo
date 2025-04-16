const form = document.getElementById('myForm'); 
const nameInput = document.getElementById('name'); 
const ageInput = document.getElementById('age');   
const nameError = document.getElementById('nameError'); 
const ageError = document.getElementById('ageError');   
const messageArea = document.getElementById('messageArea'); 

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true; 

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please tell me your name!'; 
        isValid = false; 
    } else {
        nameError.textContent = ''; 
    }

    
    if (ageInput.value === '' || isNaN(ageInput.value)) {
        ageError.textContent = 'Please tell me your age as a number!'; 
        isValid = false; 
    } else {
        ageError.textContent = ''; 
    }

    
    if (isValid) {
        messageArea.textContent = `Hello, ${nameInput.value}! You are ${ageInput.value} years old. That's awesome!`; 
        form.reset(); 
    }
});