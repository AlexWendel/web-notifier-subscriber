window.addEventListener('load', function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker-demo.js');
    } else {
        console.log('Service workers aren\'t supported in this browser.');
    }
});