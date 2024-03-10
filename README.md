# Bookstore eCommerce Website

This is an eCommerce website built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to browse and purchase books online.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Bootstrap (for styling)
- etc.

## Project Structure

client/
server/
models/
routes/
controllers/
config/
public/

## Installation

1. Clone the repository.
2. Navigate to the `client` and `server` directories and run `npm install` to install dependencies.
3. Set up environment variables as specified in `.env.example` files.
4. In the `client` directory, run `npm start` to start the frontend development server.
5. In the `server` directory, run `npm start` to start the backend server.

## Usage

Visit http://localhost:3000 to view the application. You can sign up, log in, browse books, add them to your cart, and proceed to checkout.

## API Endpoints

- GET /api/user
- GET /api/admin
- POST /api/products
- GET /api/product/:id
- GET /api/category

## Database Schema

- User
  - id
  - username
  - email
  - password
- Book
  - id
  - title
  - author
  - price
  - etc.

## Deployment

To deploy the application to a production environment, follow these steps:

1. Set up a MongoDB database.
2. Set up environment variables for production.
3. Build the React app using `npm run build`.
4. Deploy the built files and start the Node.js server.

## License

This project is licensed By Edwin Jude.

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
