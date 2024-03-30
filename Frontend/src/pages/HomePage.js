import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/bootstrap-5.2.3-dist/PhishEld.css';

function HomePage() {
      return (
        <div className='bg bg-white' style={{backgroundImage: `require(${'../assets/RandomImage01'})`}}>
            
            <br />
            <br />
            <br />
            <br />

            <div className='container-fluid' style={{flex: 3}}>
                <div className='row'>

                    <div className='col' style={{paddingLeft: 100}} align='left'>
                        <h1 className='col mt-6 fw-bolder' style={{fontSize: 70}}>Cyber Security Assessment Tool</h1>
                    </div>
                    <div className='col' style={{paddingRight: 100}}>
                        <h5 style={{fontSize: 25}}>Learn about common cyber attacks, how to spot them, and how to protect yourself and your information.</h5>
                        <br />
                        <Link to='/about'>
                            <button className='btn btn-dark rounded-0 mt-4' style={{fontSize: 25}}>Learn more</button>
                        </Link>
                    </div>

                </div>
            </div>
        
            <br />
            <br />

            <div className='container-fluid'>
                <div>
                    <img src={require('../assets/oldPeople.png')} alt='Responsive image' className='img-fluid mt-2'
                    style={{paddingRight: 100, paddingLeft: 100, paddingTop: 20}} />
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='container-fluid'>
                <div className='row'>

                    <div className='col' style={{paddingLeft: 100}}>
                        <h5 style={{paddingLeft: 15}}>Feature One</h5>
                        <h1 className='col mt-6 fw-bolder' style={{fontSize: 80}}>Learn About Common Scams</h1>
                        <h5 style={{paddingLeft: 15, paddingTop: 20}}>Take an opportunity to learn about common methods cybercriminals
                        use to steal information from you and methods to spot and protect yourself.</h5>

                        <br />
                        <br />
                        <br />

                        <div className='row' style={{paddingLeft: 15}}>
                            <div className='col'>
                                <img src={require('../assets/73674.png')} alt='Responsive image' className='img-fluid mt-2' style={{width: 50, height: 50}}/>
                                <br />
                                <br />
                                <h3>Phishing Scams</h3>
                                <h5>A common type of attack in which the attacker attempts to trick you into giving up sensitive information.</h5>
                                <br />
                                <br />
                                <Link to='/aboutPhishing'>
                                    <button className='btn btn-outline-dark rounded-0' style={{fontSize: 25}}>Learn more</button>
                                </Link>
                            </div>

                            <div className='col'>
                                <img src={require('../assets/73674.png')} alt='Responsive image' className='img-fluid mt-2' style={{width: 50, height: 50}}/>
                                <br />
                                <br />
                                <h3>Phone Scams</h3>
                                <h5>A common scam in which unsolicited calls are sent out in order to trick you into giving up information</h5>
                                <br />
                                <br />
                                <Link to='/aboutPhones'>
                                    <button className='btn btn-outline-dark rounded-0' style={{fontSize: 25}}>Learn more</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    
            
                    <div className='col'>
                        <div>
                            <img src={require('../assets/cellphone-scam.jpg')} alt='Responsive image' className='img-fluid mt-2'
                            style={{paddingLeft: 130}} />
                        </div>
                    </div>

                </div>
            </div>

            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            <div className='container-fluid'>
                <div className='row'>

                    <div className='col' style={{paddingLeft: 100}}>
                        <h5 style={{paddingLeft: 15}}>Feature two</h5>
                        <h1 className='col mt-6 fw-bolder' style={{fontSize: 80}}>Take an Assessment to Test Your Knowledge</h1>
                        <h5 style={{paddingLeft: 15, paddingTop: 20}}>Test your knowledge on phishing and phone scams with two dedicated assessments.</h5>

                        <br />
                        <br />
                        <br />

                        <div className='row' style={{paddingLeft: 15}}>
                            <div className='col'>
                                <img src={require('../assets/73674.png')} alt='Responsive image' className='img-fluid mt-2' style={{width: 50, height: 50}}/>
                                <br />
                                <br />
                                <h3>Phishing Assessment</h3>
                                <h5>Take the Phishing Assessment Below.</h5>
                                <br />
                                <br />
                                <Link to='/phishingAssessment'>
                                    <button className='btn btn-outline-dark rounded-0' style={{fontSize: 25}}>Phishing Assessment</button>
                                </Link>
                            </div>

                            <div className='col'>
                                <img src={require('../assets/73674.png')} alt='Responsive image' className='img-fluid mt-2' style={{width: 50, height: 50}}/>
                                <br />
                                <br />
                                <h3>Phone Assessment</h3>
                                <h5>Take the Phone Scam Assessment Below.</h5>
                                <br />
                                <br />
                                <Link to='/phoneAssessment'>
                                    <button className='btn btn-outline-dark rounded-0' style={{fontSize: 25}}>Phone Scam Assessment</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    
            
                    <div className='col'>
                        <div>
                            <img src={require('../assets/oldmantest.jpg')} alt='Responsive image' className='img-fluid mt-2'
                            style={{paddingLeft: 130}} />
                        </div>
                    </div>

                </div>
            </div>

            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

        </div>
    );
};

export default HomePage;
