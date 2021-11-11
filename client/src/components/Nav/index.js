import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
      <div className="logo">
        <a className="logo_link" href="/" target="">
        <img src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg" alt=""/>
        </a>
        </div>
        <Link to="/">
          <span role="img" aria-label="MLB">MLB</span>
        </Link>
      </h1>
      <nav>
        {showNavigation()}ß
      </nav>
    </header>
  );
}

export default Nav;
