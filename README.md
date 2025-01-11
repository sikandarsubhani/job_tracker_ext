# Job Application Tracker Extension

A browser extension that automatically tracks and stores job applications from LinkedIn and Indeed, helping you maintain a record of your job search journey.

## Features

- Automatically detects job applications on LinkedIn and Indeed
- Stores job title, company name, and application date
- Provides a simple popup interface to view application history
- Local storage for maintaining privacy
- Chronological listing of applications

## Installation

1. Clone this repository or download the source code
2. Open Chrome/Edge browser and navigate to extensions
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

1. The extension will automatically track when you apply for jobs on:
   - LinkedIn
   - Indeed
2. Click the extension icon in your browser toolbar to view your application history
3. Applications are displayed in reverse chronological order

## Tech Stack

- JavaScript
- Chrome Extension API
- HTML/CSS
- Local Storage API

## Required Permissions

- Storage
- activeTab
- Specific site access for LinkedIn and Indeed

## Planned Features

1. **Application Status Tracking**
   - Add ability to update application status
   - Track different stages (Applied, Interview, Offer, Rejected)

2. **Data Export**
   - Export application history to CSV
   - Backup/restore functionality

3. **Enhanced Job Details**
   - Salary information
   - Job description storage
   - Application deadline tracking
   - Location information

4. **Reminder System**
   - Follow-up reminders
   - Interview scheduling
   - Custom notification settings

5. **Integration Improvements**
   - Support for more job sites
   - Auto-fill application forms
   - Resume tracking per application

6. **UI Enhancements**
   - Search and filter applications
   - Sort by different criteria
   - Dark mode support
   - Custom tags for applications

7. **Analytics**
   - Application success rate
   - Response time statistics
   - Company response patterns

8. **Cloud Sync**
   - Cross-browser synchronization
   - Multiple device support
   - Secure cloud backup

## Privacy Note

All data is stored locally on your device. The extension does not transmit any personal information to external servers.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
