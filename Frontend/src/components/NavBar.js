{/*import React, { useState } from 'react'*/}

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light pl-4">
      <a className="navbar-brand pl-5" href="/">Elderly Assessment Tool</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <a className="nav-link" href="/aboutPhishing">About Phishing Scams</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/aboutPhones">About Phone Scams</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/phishingAssessment">Phishing Scam Assessment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/phoneAssessment">Phone Scam Assessment</a>
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
            <button className="btn btn-outline-dark rounded-0" type="button">Sign In</button>
          </a>
        </div>
        <div className="pr-2">
          <a className="nav-link pr-5" href="/register">
            <button className="btn btn-sm btn-outline-dark rounded-0" type="button">Register</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;