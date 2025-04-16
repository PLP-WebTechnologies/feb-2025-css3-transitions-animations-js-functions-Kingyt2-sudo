const myBox = document.getElementById('myBox');
const secretWordInput = document.getElementById('secretWordInput');
const messageArea = document.getElementById('messageArea');


let favoriteColor = localStorage.getItem('favoriteBoxColor'); 

if (favoriteColor) {
    myBox.style.backgroundColor = favoriteColor; 
    messageArea.textContent = `Welcome back! I remember your favorite color is ${favoriteColor}!`;
} else {
    messageArea.textContent = "Hello! Type 'dance' to see my moves!";
}

// 3. Creating a dance (CSS Animation)!
myBox.style.transition = 'all 2s ease-in-out'; 

function startDance() {
    myBox.style.animation = 'dance 2s infinite alternate'; 
}

function stopDance() {
    myBox.style.animation = ''; 
}

// 4. The dance spell (CSS Animation Keyframes)!
const style = document.createElement('style');
style.textContent = `
    @keyframes dance {
        from {
            transform: rotate(0deg);
            background-color: ${favoriteColor || 'blue'}; // Use remembered color or blue
        }
        to {
            transform: rotate(360deg);
            background-color: purple;
        }
    }
`;
document.head.appendChild(style);

// 5. Listening for the secret word (Event Listener)!
secretWordInput.addEventListener('input', function() {
    const word = secretWordInput.value.toLowerCase(); 

    if (word === 'dance') {
        startDance(); 
        messageArea.textContent = "I'm dancing!";
        favoriteColor = 'purple'; 
        localStorage.setItem('favoriteBoxColor', favoriteColor); 
    } else if (word === 'stop') {
        stopDance();
        messageArea.textContent = "Okay, I'll stop.";
    } else {
        stopDance(); 
        messageArea.textContent = "Keep typing the secret word...";
    }
});