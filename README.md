# dependencies

@testing-library/jest-dom (^5.17.0): This package provides custom Jest matchers to help you write assertions in your tests. It enhances the Jest testing framework with additional DOM-specific matchers.

@testing-library/react (^13.4.0): This package provides utilities for testing React components. It's commonly used for writing tests that interact with React components in a way that simulates how users would interact with them.

@testing-library/user-event (^13.5.0): This package provides utilities to simulate user events (like clicking, typing, etc.) in the testing environment. It's often used alongside @testing-library/react to simulate user interactions during tests.

braintree-web (^3.101.0): This package is the JavaScript client SDK for integrating with Braintree, a payment gateway service. It allows you to securely accept various payment methods in your web applications.

braintree-web-drop-in-react (^1.2.1): This package is a React wrapper for Braintree's Drop-in UI, which provides a pre-built UI for accepting payments with Braintree. It simplifies the integration process by providing a ready-to-use React component.

moment (^2.30.1): This package is a popular library for parsing, validating, manipulating, and formatting dates and times in JavaScript. It provides an easy-to-use API for working with dates and times.

query-string (^9.0.0): This package provides utilities for parsing and formatting URL query strings. It allows you to easily extract and manipulate query parameters from URLs.

react (^18.2.0): This package contains the core React library, which is used for building user interfaces in JavaScript applications. React allows you to create reusable UI components and manage their state efficiently.

react-dom (^18.2.0): This package provides DOM-specific methods for working with React. It's used to render React components into the DOM and to manage their lifecycle.

react-hot-toast (^2.4.1): This package is a lightweight and customizable toast notification library for React applications. It allows you to display non-intrusive notifications to users, such as success messages or error alerts.

react-router-dom (^5.2.0): This package provides routing capabilities for React applications. It allows you to define navigation routes and render different components based on the current URL.

react-scripts (5.0.1): This package contains scripts and configurations for setting up, building, and running React applications created with Create React App. It abstracts away the build configuration and provides a streamlined development experience.

web-vitals (^2.1.4): This package provides utilities for measuring and reporting web performance metrics such as FID (First Input Delay) and CLS (Cumulative Layout Shift). It helps developers monitor and improve the performance of their web applications.

# This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

# npm start

# Runs the app in the development mode.

# Open http://localhost:3000 to view it in the browser.

# The page will reload if you make edits.

You will also see any lint errors in the console.

# npm test

# Launches the test runner in the interactive watch mode.

See the section about running tests for more information.

# npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

# npm run eject

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Learn More

# You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

# Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

# Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# route.js

# using react-router-dom for handling routing, and implemented private routes for user and admin access control.

# Here's a brief overview of your route structure:

# / Home page.

# /shop: Shop page.

# /signin: Sign-in page.

# /signup: Sign-up page.

# /user/dashboard: User dashboard (accessible only to authenticated users).

# /admin/dashboard: Admin dashboard (accessible only to authenticated admins).

# /create/category: Page for adding a new category (accessible only to authenticated admins).

# /create/product: Page for adding a new product (accessible only to authenticated admins).

# /product/:productId: Page for viewing a specific product.

# /cart: Page for managing the shopping cart.

# /admin/orders: Page for managing orders (accessible only to authenticated admins).

# /profile/:userId: User profile page (accessible only to authenticated users).

# /admin/products: Page for managing products (accessible only to authenticated admins).

# /admin/product/update/:productId: Page for updating a specific product (accessible only to authenticated admins).
