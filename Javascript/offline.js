
var warning = document.getElementById('offlineWarning');
var warnIcon = document.getElementById('warnIcon');
var warnTitle = document.getElementById('warnTitle');
var warnMsg = document.getElementById('warnMsg');

if (warning && warnIcon && warnTitle && warnMsg) {
    
    // Show offline warning
    window.addEventListener('offline', function() {
        warnIcon.textContent = '📡';
        warnTitle.textContent = 'No Connection';
        warnMsg.textContent = 'You are offline. Some features may not work.';
        warning.style.display = 'flex';
    });

    // Show online warning (when back online)
    window.addEventListener('online', function() {
        warnIcon.textContent = '🌐';
        warnTitle.textContent = 'Back Online';
        warnMsg.textContent = 'Internet connection restored!';
        warning.style.display = 'flex';
        
        // Hide after 4 seconds
        setTimeout(function() {
            warning.style.display = 'none';
        }, 4000);
    });
}
