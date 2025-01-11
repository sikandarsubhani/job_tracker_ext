// popup.js
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['applications'], (result) => {
    const applications = result.applications || [];
    const container = document.getElementById('applications');
    
    applications.reverse().forEach(app => {
      const div = document.createElement('div');
      div.className = 'application';
      div.innerHTML = `
        <div class="title">${app.jobTitle || 'Unknown Title'}</div>
        <div class="company">${app.company || 'Unknown Company'}</div>
        <div class="timestamp">Applied on ${new Date(app.timestamp).toLocaleDateString()}</div>
      `;
      container.appendChild(div);
    });

    if (applications.length === 0) {
      container.innerHTML = '<p>No applications tracked yet.</p>';
    }
  });
});