{/*import React, { useState } from 'react'*/}

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Elderly Assessment Tool</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item dropdown">

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/about">About</a>
              <a className="dropdown-item" href="/signIn">Login</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/register">Register</a>
            </div>
          </li>
        </ul>

        <div>
          <a className="nav-link" href="/signIn">
            <button className="btn btn-outline-success" type="button">Sign In</button>
          </a>
        </div>
        <div>
          <a className="nav-link" href="/register">
            <button className="btn btn-sm btn-outline-secondary" type="button">Register</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;