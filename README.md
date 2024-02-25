# About Webdev
The following are notes that I have written while trying to understand how React is meant to function.

## Some buzzwords
* npm - A software registry and package manager for javascript.
* NodeJS - A JRE (javascript runtime environment). Created to run JS outside of the browser. While the browser will provide you with built in classes like document and window, Node will provide you with different built ins. [How NodeJS is different than the browser's JRE](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser)
* JRE - A javascript runtime environment. More than just an interpreter. A JRE provides a toolbox (built-in classes and methods) which help you write functionality in JavaScript much more effeciently. [more info](https://www.codecademy.com/article/introduction-to-javascript-runtime-environments)
* react - a library (aka. a framework) for creating user interfaces.
* react-dom - a react renderer for the web. Provides default components.
* react-native - a react renderer for native applications. Provides default components.

## Thoughts On Frontend & Backend Language Unification
NOTE: I am unfamiliar with frontend. This reaction is based on ignorance, not fact. But I am recording my first time feelings and thoughts.

The idea of using the same language for both frontend and backend is **fundamentally flawed**. Frontend, which is displaying pages to a user, is a problem which requires a lot of dynamic behavior. A user must be able to log in on any device, and using any input method, be able to observe and navigate any page with several accessibilty options. This lends the solution to be a highly dynamic program. JavaScript is a valid solution.

The backend is defined by protocols. The front end communicates to the backend by using pre-defined sequences of actions. These are fixed. These do not change often. The solution for this problem has no need to be highly dynamic. JavaScript is a silly choice for a solution. You are using a swiss army knife to chop down a tree.

NodeJS can be used standalone - without a browser. This lends developers to use NodeJS to run both the frontend and the backend. While possible, this is a highly ineffecient choice. Tools which are more suited to writing exist for the job. All languages are just tools we use to program machines faster.

## The Files
There are several files in both public and root directory that I am trying to understand
* public: This folder contains the files hosted by React
  - manifest.json: file used to initialize PWAs (progressive web apps).
  - package.json: file used to contain all the libraries we are using to create our node-based web app.

## My understanding of the web process
Imagine you are visiting the website 'example.com' for the first time:
* Browser sends request to get resource.
* Server receives request, which MUST be processed by OS, software firewalls, parsed several times etc.
* Server decides to send HTML file
* Browser receives HTML file, and must parse it into a DOM, with error correction possible.
* The DOM is used to decide rendering order

**Questions:**
* Why not just send the DOM over? Is it because of size? If the DOM is well optimized (as I assume it is), it should be much smaller than the HTML and CSS files used to describe it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
