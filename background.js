// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SAVE_APPLICATION') {
    chrome.storage.local.get(['applications'], (result) => {
      const applications = result.applications || [];
      applications.push({
        ...message.data,
        timestamp: new Date().toISOString(),
        source: message.source
      });
      chrome.storage.local.set({ applications });
    });
  }
});
