import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="sidebar">
    <ul>
      <li>
        <h1>FB</h1>
      </li>
      <hr />
      <div className="nav">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">
            <i className="fas fa-home fa-2x"></i>
            <p className="nav-label">HOME</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">
            <i className="fas fa-user fa-2x"></i>
            <p className="nav-label">ABOUT</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active">
            <i className="fas fa-file-alt fa-2x"></i>
            <p className="nav-label">RESUME</p>
          </NavLink>
        </li>
      </div>
    </ul>
  </div>
);
