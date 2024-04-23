import React, {useState} from 'react';
import axios from 'axios';
import { jwtDecode} from 'jwt-decode'
import "core-js/stable/atob"

axios.defaults.withCredentials = true;

const deleteCookie = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post('http://localhost:3001/users/logout')
    .then((res) => {
        console.log(res.data.status);
        if (res.data.status == "success") {
        } else {
            alert(res.data.error);
        }
    })

    window.location.reload();
    
  } catch (error) {
      console.error('Error during login:', error);
  }
}

const AccountConfirm = ({isloggedin, name}) => {
  if (isloggedin) {

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

          <div className="pr-2">
             <a style={{paddingRight: '1vw', color: 'gray'}}>Hello, {name} </a>
             <button className="btn btn-sm btn-outline-dark rounded-0" onClick={deleteCookie} type="button">logout</button>
          </div>

        </div>

    </nav>
    )
  } else {
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
    )
  }
}

function NavBar() {
  const cookie = document.cookie.split('=')[0]

  if (cookie === "RegisteredUser") {
    const user = jwtDecode(document.cookie)

    return (
      <div>
        <AccountConfirm name={user.firstname} isloggedin={true}/>
      </div>
      )
  } else {
    return (
      <div>
        <AccountConfirm isloggedin={false}/>
      </div>
    )
  }
}
 
export default NavBar;