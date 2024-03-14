import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom/";
import { isAuthenticated } from "./index";


const PrivateRoute = ({component:Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} /> // Use Component instead of component
        ) : (
          <Redirect
            to={{ 
              pathname: "/signin",
              state: { from: props.location }
           }}
          />
        )
      }
    />
  );
  
export default PrivateRoute;
