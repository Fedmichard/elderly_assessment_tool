import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/bootstrap-5.2.3-dist/PhishEld.css';

function HomePage() {
      return (
        <div className='bg bg-white ml-5 mr-5' style={{backgroundImage: `require(${'../assets/RandomImage01'})`}}>
            
            <br />
            <br />
            <br />
            <br />

            <div className='container-fluid'>
                <div className='row'>

                    <div className='col' align='left'>
                        <h1 className='col mt-6 fw-bolder' style={{fontSize: 70, wordWrap: 'break-word', padding: 0}}>Cyber Security Assessment Tool</h1>
                    </div>
                    <div className='col'>
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
                    <img src={require('../assets/oldPeople.png')} alt='Responsive image' className='img-fluid mt-2'/>
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

                    <div className='col'>
                        <h5>Feature One</h5>
                        <h1 className='fw-bolder' style={{fontSize: 80, wordWrap: 'normal'}}>Learn About Common Scams</h1>
                        <br />
                        <h5>Take an opportunity to learn about common methods cybercriminals
                        use to steal information from you and methods to spot and protect yourself.</h5>

                        <br />
                        <br />
                        <br />

                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={require('../assets/73674.png')} alt='Responsive image' className='img-fluid mt-2' style={{MaxWidth: 50, maxHeight: 50, height: '100%'}}/>
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

                            <div className='col-md-6'>
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
            
                    <div className='col-lg-6'>
                        <div>
                            <img src={require('../assets/cellphone-scam.jpg')} alt='Responsive image' className='img-fluid mt-2' style={{height: '100%', maxHeight: 800, width: '100%'}}/>
                        </div>
                    </div>

                </div>
            </div>

            
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <h5>Feature two</h5>
                        <h1 style={{fontSize: 80, wordWrap: 'break-word'}}>Take an Assessment to Test Your Knowledge</h1>
                        <br />
                        <h5>Test your knowledge on phishing and phone scams with two dedicated assessments.</h5>

                        <br />
                        <br />
                        <br />

                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={require('../assets/73674.png')} alt='Responsive image' className='img-fluid mt-2' style={{width: 50, height: 50}}/>
                                <br />
                                <br />
                                <h3>Phishing Assessment</h3>
                                <h5 className='mb-3'>Take the Phishing Scam Assessment Below.</h5>
                                <br />
                                <br />
                                <div className='container' style={{margin: 0, padding: 0}}>
                                    <Link to='/phishingAssessment'>
                                        <button className='btn btn-outline-dark rounded-0 align-self-end' style={{fontSize: 25}}>Phishing Assessment</button>
                                    </Link>
                                </div>
                            </div>

                            <div className='col-md-6 flex-column'>
                                <img src={require('../assets/73674.png')} alt='Responsive image' className='img-fluid mt-2' style={{width: 50, height: 50}}/>
                                <br />
                                <br />
                                <h3>Phone Assessment</h3>
                                <h5 className='mb-3'>Take the Phone Scam Assessment Below.</h5>
                                <br />
                                <br />
                                <div className='align-self-end mb-auto' style={{margin: 0, padding: 0}}>
                                    <Link to='/phoneAssessment'>
                                        <button className='btn btn-outline-dark rounded-0' style={{fontSize: 25}}>Phone Scam Assessment</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
            
                    <div className='col-lg-6' style={{align: 'right'}}>
                        <div>
                            <img src={require('../assets/oldmantest.jpg')} alt='Responsive image' className='img-fluid mt-2' style={{maxHeight: '800px', height:'100%', width:'100%' }} />
                        </div>
                    </div>

                </div>
            </div>

            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

        </div>
    );
};

export default HomePage;
