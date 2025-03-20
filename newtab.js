document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query) {
            chrome.runtime.sendMessage({ action: 'search', query: query });
        }
    }
});