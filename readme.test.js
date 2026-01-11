const fs = require('fs');
const path = require('path');

describe('README.md Documentation Tests', () => {
  let readmeContent;
  const readmePath = path.join(__dirname, 'README.md');

  beforeAll(() => {
    // Check if README.md exists and read its content
    if (fs.existsSync(readmePath)) {
      readmeContent = fs.readFileSync(readmePath, 'utf-8');
    }
  });

  describe('File Existence', () => {
    test('README.md file should exist', () => {
      expect(fs.existsSync(readmePath)).toBe(true);
    });

    test('README.md should not be empty', () => {
      expect(readmeContent).toBeDefined();
      expect(readmeContent.length).toBeGreaterThan(0);
    });
  });

  describe('Project Documentation', () => {
    test('should contain project title/name', () => {
      expect(readmeContent).toMatch(/#{1,2}\s+.*Emoji.*Launchpad/i);
    });

    test('should contain a description of what the project does', () => {
      const hasDescription = 
        readmeContent.toLowerCase().includes('interactive') &&
        readmeContent.toLowerCase().includes('emoji') &&
        readmeContent.toLowerCase().includes('keyboard');
      expect(hasDescription).toBe(true);
    });

    test('should contain a Features section', () => {
      expect(readmeContent).toMatch(/#{2,3}\s+Features/i);
    });

    test('should list key features of the project', () => {
      const hasKeyFeatures = 
        readmeContent.toLowerCase().includes('interactive') ||
        readmeContent.toLowerCase().includes('visual feedback') ||
        readmeContent.toLowerCase().includes('animated');
      expect(hasKeyFeatures).toBe(true);
    });

    test('should contain project structure/file organization', () => {
      expect(readmeContent).toMatch(/#{2,3}\s+.*Project\s+Structure/i);
      expect(readmeContent).toMatch(/index\.html/);
      expect(readmeContent).toMatch(/style\.css/);
    });

    test('should contain technical details or implementation notes', () => {
      const hasTechnicalSection = 
        readmeContent.match(/#{2,3}\s+Technical/i) ||
        readmeContent.toLowerCase().includes('html') &&
        readmeContent.toLowerCase().includes('css') &&
        readmeContent.toLowerCase().includes('javascript');
      expect(hasTechnicalSection).toBeTruthy();
    });
  });

  describe('Usage Instructions', () => {
    test('should contain a "How to Use" or usage section', () => {
      const hasUsageSection = 
        readmeContent.match(/#{2,3}\s+How\s+to\s+Use/i) ||
        readmeContent.match(/#{2,3}\s+Usage/i) ||
        readmeContent.match(/#{2,3}\s+Getting\s+Started/i);
      expect(hasUsageSection).toBeTruthy();
    });

    test('should provide instructions on how to run/open the project', () => {
      const hasRunInstructions = 
        readmeContent.toLowerCase().includes('open') &&
        readmeContent.toLowerCase().includes('browser');
      expect(hasRunInstructions).toBe(true);
    });

    test('should document the keyboard controls (A, S, D, F, G keys)', () => {
      expect(readmeContent).toMatch(/\bA\b.*😎/);
      expect(readmeContent).toMatch(/\bS\b.*🔥/);
      expect(readmeContent).toMatch(/\bD\b.*💩/);
      expect(readmeContent).toMatch(/\bF\b.*🦄/);
      expect(readmeContent).toMatch(/\bG\b.*🚀/);
    });

    test('should explain what happens when keys are pressed', () => {
      const hasInteractionExplanation = 
        readmeContent.toLowerCase().includes('press') &&
        (readmeContent.toLowerCase().includes('emoji appear') ||
         readmeContent.toLowerCase().includes('display') ||
         readmeContent.toLowerCase().includes('trigger'));
      expect(hasInteractionExplanation).toBe(true);
    });
  });

  describe('Customization/Extension Instructions', () => {
    test('should contain customization section', () => {
      expect(readmeContent).toMatch(/#{2,3}\s+Customization/i);
    });

    test('should provide instructions for adding new keys', () => {
      const hasNewKeyInstructions = 
        readmeContent.toLowerCase().includes('adding new keys') ||
        readmeContent.toLowerCase().includes('add') &&
        readmeContent.toLowerCase().includes('key');
      expect(hasNewKeyInstructions).toBe(true);
    });

    test('should include code examples for customization', () => {
      // Check for code blocks (markdown code fences)
      const hasCodeBlocks = readmeContent.includes('```');
      expect(hasCodeBlocks).toBe(true);
    });
  });

  describe('Additional Documentation Standards', () => {
    test('should contain browser compatibility information', () => {
      const hasBrowserInfo = 
        readmeContent.match(/#{2,3}\s+.*Browser.*Compatibility/i) ||
        readmeContent.toLowerCase().includes('chrome') ||
        readmeContent.toLowerCase().includes('firefox') ||
        readmeContent.toLowerCase().includes('safari');
      expect(hasBrowserInfo).toBeTruthy();
    });

    test('should contain license information', () => {
      expect(readmeContent).toMatch(/#{2,3}\s+License/i);
    });

    test('should be well-formatted with proper markdown headings', () => {
      // Check for at least one level 1 or level 2 heading
      const hasHeadings = readmeContent.match(/^#{1,2}\s+/m);
      expect(hasHeadings).toBeTruthy();
    });

    test('README should be reasonably comprehensive (at least 1000 characters)', () => {
      expect(readmeContent.length).toBeGreaterThan(1000);
    });
  });
});
