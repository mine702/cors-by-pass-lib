self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    if (event.request.url.includes('/proxy/')) {
        const targetUrl = event.request.url.replace('/proxy/', '');
        const modifiedHeaders = new Headers(event.request.headers);

        event.respondWith(
            fetch(targetUrl, {
                method: event.request.method,
                headers: modifiedHeaders,
                body: event.request.method !== 'GET' && event.request.method !== 'HEAD' ? event.request.body : undefined
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response;
            }).catch(error => {
                return new Response(JSON.stringify({ error: error.toString() }), { status: 500 });
            })
        );
    } else {
        event.respondWith(fetch(event.request));
    }
});
