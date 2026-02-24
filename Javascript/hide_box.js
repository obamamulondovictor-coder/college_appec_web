
var message = document.getElementById('card_message');
var agreeBtn = document.getElementById('agreeBtn');
var ignoreBtn = document.getElementById('ignoreBtn');

// Only run if cookie message elements exist
if (message && agreeBtn && ignoreBtn) {
    
    // Check if user already made choice using localStorage
    if (!localStorage.getItem('messageDismissed')) {
        // Show message after page loads
        setTimeout(function() {
            message.style.display = 'block';
        }, 400);
    }

    // Handle accept button
    agreeBtn.addEventListener('click', function() {
        localStorage.setItem('messageDismissed', 'true');
        message.style.display = 'none';
    });

    // Handle dismiss button
    ignoreBtn.addEventListener('click', function() {
        localStorage.setItem('messageDismissed', 'true');
        message.style.display = 'none';
    });
}

