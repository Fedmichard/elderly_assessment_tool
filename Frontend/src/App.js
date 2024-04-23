
import React, { Component } from 'react';
//import './styles/App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import RegisterPage from './pages/RegisterPage.js';
import SignInPage from './pages/SignInPage.js';
import AccountPage from './pages/AccountPage.js';
import AboutPhishingScams from './pages/AboutPhishingScams.js';
import AboutPhoneScams from './pages/AboutPhoneScams.js';
import PhishingAssessment from './pages/PhishingAssessment.js';
import PhoneAssessment from './pages/PhoneScamAssessment.js';
import ResourcesPage from './pages/ResourcesPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aboutPhishing" element={<AboutPhishingScams />} />
          <Route path="/aboutPhones" element={<AboutPhoneScams />} />
          <Route path="/phishingAssessment" element={<PhishingAssessment />} />
          <Route path="/phoneAssessment" element={<PhoneAssessment />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path='/resourcesPage' element={<ResourcesPage />} />
        </Routes>
        <Footer />
      </Router>
    );
  };
};

export default App;
