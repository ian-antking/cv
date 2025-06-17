const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),

  /**
   * Defines launch options for Puppeteer.
   * These options will be used by any tool that launches Puppeteer.
   */
  launch: {
    // These are the crucial arguments for running in a container.
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage', // A common flag for Docker/CI environments
      '--single-process',      // May help in some constrained environments
    ],
  },
};