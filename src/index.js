function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    }
}

function initialize() {
    registerServiceWorker();

    // fetch 함수 재정의
    const originalFetch = window.fetch;
    window.fetch = function (input, init = {}) {
        if (typeof input === 'string' && input.startsWith('http')) {
            const url = new URL(input);
            input = `/proxy/${url.href}`;
        }
        return originalFetch(input, init);
    };
}

export { initialize };
