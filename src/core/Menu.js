import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { signout, isAuthenticated } from "../auth";
import { Fragment } from "react";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffff" };
  }
};

const Menu = ({ history }) => (
  <div>

    <ul className="nav nav-tabs bg-primary">

      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/")} to="/">
          Home Page
        </Link>
      </li>


      {isAuthenticated() && isAuthenticated().user.role===0 &&(
        <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/user/dashboard")}
          to="/user/dashboard"
        >
          Dashboard
        </Link>
      </li>
      )}

      {isAuthenticated() && isAuthenticated().user.role===1 &&(
        <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/admin/dashboard")}
          to="/admin/dashboard"
        >
          Dashboard
        </Link>
      </li>
      )}


      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signin")}
              to="/signin"
            >
              signin Page
            </Link>
          </li>


          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signup")}
              to="/signup"
            >
              signup Page
            </Link>
          </li>
        </Fragment>
      )}



      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "#ffffff" }}
            onClick={() =>
              signout(() => {
                history.push("/");
              })
            }
          >
            signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
