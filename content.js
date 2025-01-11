
// content.js
function extractLinkedInData() {
  const jobTitle = document.querySelector('.job-details-jobs-unified-top-card__job-title')?.textContent.trim();
  const company = document.querySelector('.job-details-jobs-unified-top-card__company-name')?.textContent.trim();
  const description = document.querySelector('.job-details-jobs-unified-top-card__job-description')?.textContent.trim();
  
  return { jobTitle, company, description };
}

function extractIndeedData() {
  const jobTitle = document.querySelector('.jobsearch-JobInfoHeader-title')?.textContent.trim();
  const company = document.querySelector('.jobsearch-CompanyInfoContainer')?.textContent.trim();
  const description = document.querySelector('#jobDescriptionText')?.textContent.trim();
  
  return { jobTitle, company, description };
}

function detectApplication() {
  // LinkedIn apply button click
  document.querySelectorAll('button').forEach(button => {
    if (button.textContent.toLowerCase().includes('apply')) {
      button.addEventListener('click', () => {
        const data = extractLinkedInData();
        chrome.runtime.sendMessage({
          type: 'SAVE_APPLICATION',
          source: 'LinkedIn',
          data
        });
      });
    }
  });

  // Indeed apply button click
  document.querySelectorAll('button, a').forEach(element => {
    if (element.textContent.toLowerCase().includes('apply now')) {
      element.addEventListener('click', () => {
        const data = extractIndeedData();
        chrome.runtime.sendMessage({
          type: 'SAVE_APPLICATION',
          source: 'Indeed',
          data
        });
      });
    }
  });
}

// Run detection when page loads and when URL changes
detectApplication();
const observer = new MutationObserver(detectApplication);
observer.observe(document.body, { childList: true, subtree: true });

