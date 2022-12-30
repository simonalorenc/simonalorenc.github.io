var lastUrl = ""
window.addEventListener('hashchange', () => {
    if (lastUrl === location.hash) {
        location.replace("index.html#portfolio")
        return
    }
    lastUrl = location.hash
}, false);