chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'search') {
        chrome.search.query({ text: message.query });
    }
});