module.exports = {
    testEnvironment: 'node',
    testTimeout: 30000, // Set the timeout value to 10 seconds
    preset: 'jest-playwright-preset',
    reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './reports',
      filename: 'report.html',
      expand: true
    }]
  ],
};