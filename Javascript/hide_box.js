
const message = document.getElementById('card_message');
const agreeBtn = document.getElementById('agreeBtn');
const ignoreBtn = document.getElementById('ignoreBtn');

// Show message if not dismissed before
window.onload = () => {
    if (!localStorage.getItem('messageDismissed')) {
        message.style.display = 'block';
    }
};

// Function to hide and remember dismissal
function dismissMessage() {
    message.style.display = 'none';
    localStorage.setItem('messageDismissed', 'true');
}

// Attach to buttons
agreeBtn.addEventListener('click', dismissMessage);
ignoreBtn.addEventListener('click', dismissMessage);

