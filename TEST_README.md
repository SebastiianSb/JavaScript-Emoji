# Testing Documentation

## Overview
This project includes unit tests for validating the README.md documentation using Jest.

## Setup Instructions

### Prerequisites
- Node.js installed (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

**Note:** If you're working in a cloud storage directory (pCloud, Dropbox, etc.), you may encounter symlink issues. To work around this:

1. Copy the project to a local directory:
   ```bash
   cp -r "/home/sebastian/pCloudDrive/Programming/JavaScript/02 - Emoji Keyboard" ~/emoji-keyboard-local
   cd ~/emoji-keyboard-local
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

Run all tests:
```bash
npm test
```

Run tests in watch mode (auto-rerun on file changes):
```bash
npm run test:watch
```

## Test File: `readme.test.js`

This test suite validates that the README.md file:

### File Existence
- ✓ README.md exists in the project root
- ✓ README.md is not empty

### Project Documentation
- ✓ Contains project title/name
- ✓ Contains description of the project
- ✓ Contains Features section
- ✓ Lists key features
- ✓ Contains project structure/file organization
- ✓ Contains technical details and implementation notes

### Usage Instructions
- ✓ Contains "How to Use" or usage section
- ✓ Provides instructions on how to run/open the project
- ✓ Documents all keyboard controls (A, S, D, F, G keys)
- ✓ Explains what happens when keys are pressed

### Customization/Extension
- ✓ Contains customization section
- ✓ Provides instructions for adding new keys
- ✓ Includes code examples for customization

### Additional Standards
- ✓ Contains browser compatibility information
- ✓ Contains license information
- ✓ Well-formatted with proper markdown headings
- ✓ Comprehensive (at least 1000 characters)

## Test Results

All tests currently pass with the existing README.md file! ✅

The README includes:
- Clear project title and description
- Comprehensive feature list
- Step-by-step usage instructions
- Complete keyboard mapping documentation
- Project structure overview
- Technical implementation details
- Customization guide with code examples
- Browser compatibility information
- License information

## Modifying Tests

To add new README validation tests, edit `readme.test.js` and add new test cases within the appropriate `describe` block or create new blocks for additional categories.

Example:
```javascript
test('should contain installation instructions', () => {
  expect(readmeContent).toMatch(/#{2,3}\s+Installation/i);
});
```
