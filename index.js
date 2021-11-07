addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    if (url.searchParams.get("token") !== UNI_TOKEN) {
        return new Response("Bad Token", {
            status: 404
        });
    }
    // Post
    if (request.method === "POST") {
        const body = request.body;
        await UNI_CLIPBOARD.put("clipboard", body, { expirationTtl: 60 });
        return new Response("Post Clipboard", {
            headers: { "content-type": "text/plain; charset=utf-8" }
        });
    } else if (request.method === "GET") {
        // Get
        const clipboard = await UNI_CLIPBOARD.get("clipboard");
        if (clipboard) {
            return new Response(clipboard, {
                headers: { "content-type": "text/plain; charset=utf-8" }
            });
        } else {
            return new Response("Not Found", {
                headers: { "content-type": "text/plain; charset=utf-8" },
                status: 404
            });
        }
    }
}
