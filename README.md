# React Router Setup

This project utilizes React Router for client-side routing, allowing for navigation between different pages in the application without a full page reload. Here's an overview of the routes configured in the Routes component:

Home: Route to the home page (/).

Shop: Route to the shop page (/shop).

Signin: Route to the sign-in page (/signin).

Signup: Route to the sign-up page (/signup).

Dashboard (PrivateRoute): Private route accessible only to authenticated users, leading to the user dashboard (/user/dashboard).

AdminDashboard (AdminRoute): Route accessible only to authenticated admin users, leading to the admin dashboard (/admin/dashboard).

AddCategory (AdminRoute): Route accessible only to authenticated admin users for adding a new category (/create/category).

AddProduct (AdminRoute): Route accessible only to authenticated admin users for adding a new product (/create/product).

Product: Route to view details of a specific product (/product/:productId).

Cart: Route to view and manage the shopping cart (/cart).

Orders (AdminRoute): Route accessible only to authenticated admin users for managing orders (/admin/orders).

Profile (PrivateRoute): Route to the user's profile page, accessible only to authenticated users (/profile/:userId).

ManageProducts (PrivateRoute): Route accessible only to authenticated admin users for managing products (/admin/products).

UpdateProduct (AdminRoute): Route accessible only to authenticated admin users for updating a specific product (/admin/product/update/:productId).

Components Used

BrowserRouter: Provides the routing functionality to the React application.

Switch: Renders the first child <Route> or <Redirect> that matches the location.

Route: Declares a route with a specific path and component to render.

PrivateRoute: Custom component to restrict access to certain routes to authenticated users only.

AdminRoute: Custom component to restrict access to certain routes to authenticated admin users only.

# Installation

To use React Router in your own project, you can install it via npm:

npm install react-router-dom

Usage

Import necessary components from react-router-dom:

import { BrowserRouter, Switch, Route } from "react-router-dom";

Define routes inside the <Switch> component using <Route>:

<Switch>

<Route path="/" exact component={Home} />
{/_ Add other routes here _/}

</Switch>

Wrap your routes with the <BrowserRouter>
component to enable routing:

<BrowserRouter>
{/_ Define routes here _/}
</BrowserRouter>

Use <PrivateRoute> and <AdminRoute>
components for protected routes as needed.
