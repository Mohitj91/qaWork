Please use this  command in terminal to execute login.test.js:  npx jest
To open the report, please open report.html in googlr chrome, altenatively you can go to the reports folder in terminal and execute the command: open -a "Google Chrome" report.html


Setup Steps:

1. Install Node.js: Playwright is built on top of Node.js, so you'll need to have it installed on your system. You can download the latest version of Node.js from the official website: https://nodejs.org

2. Create a new project directory: Open your terminal or command prompt and create a new directory for your Playwright project.

mkdir my-playwright-project
cd my-playwright-project

3. Initialize a new Node.js project: Use npm (Node Package Manager) to initialize a new Node.js project in your project directory. This will create a package.json file that will keep track of your project dependencies.

npm init -y

4. Install Playwright: Use npm to install Playwright as a dependency in your project.

npm install playwright

5. Choose a browser: Playwright supports multiple browsers, including Chromium, Firefox, and WebKit. You need to choose which browser you want to use with Playwright. To install the necessary browser binaries, run one of the following commands:

For Chromium:
npx playwright install chromium

6. Run your Playwright code: To execute your Playwright code, run the JavaScript file using :


 npx jest
