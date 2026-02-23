const warning = document.getElementById('offlineWarning');


window.addEventListener('offline', function () {
    warning.style.display = 'block'
    warning.innerHTML='⚠ No internet connection. Some features may not work.'
    
})
window.addEventListener('online', function () {
    warning.style.display = 'none' //add none after sometime and settimeout
    warning.innerHTML=' 🌐 Interner Connection On.'
})