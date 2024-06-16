function parseUrl(urlString) {
    try {
        const url = new URL(urlString);

        return {
            href: url.href,
            hash: url.hash,
            port: url.port,
            host: url.host,
            protocol: url.protocol,
            hostname: url.hostname,
            pathname: url.pathname,
            origin: url.origin
        };
    } catch (e) {
        return { error: 'Invalid URL' };
    }
}
