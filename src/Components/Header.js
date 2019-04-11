import React from "react";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-inverse bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Brand
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">
                Home
                <span className="sr-only" />
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/form">Form Demo</Link>
            </li>
            <li>
              <Link to="/formeg">InlineDemo</Link>
            </li>
            <li>
              <Link to="/formdemo">FormDemo2</Link>
            </li>
            <li>
              <Link to="/refdemo">RefDemo</Link>
            </li>
            <li>
              <Link to="/AddDelete">StateDemo</Link>
            </li>
            <li>
              <Link to="/LifecycleA">LifeCycleA</Link>
            </li>
            <li>
              <Link to="/Contact">ViewContact</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li><Link to="/login">Login</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
