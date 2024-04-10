import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/bootstrap-5.2.3-dist/PhishEld.css';

// images
import feature_pic from '../assets/73674.png';
import phone_scam from '../assets/cellphone-scam.jpg';
import old_man from '../assets/oldmantest.jpg';

const FeatureOptions = ({title, subtitle, buttonText, direction}) => (

    <div className='col-lg-6 mt-4' style={{position: 'relative'}}>
        <img src={feature_pic} alt='Responsive image' className='img-fluid mt-2 mb-3' style={{MaxWidth: 55, maxHeight: 55, height: '100%'}}/>
        <h3 className='mb-3'>{title}</h3>
        <p style={{marginBottom: '15vh', fontSize: 20}}>{subtitle}</p>
        <div style={{position: 'absolute', marginBottom: '2vh', bottom: '0'}}>
            <Link to={direction}>
                <button className='btn btn-outline-dark rounded-0' style={{fontSize: 25}}>{buttonText}</button>
            </Link>
        </div>
    </div>

)

const Feature = ({ feature, title, subtitle, img, featureTitle1, featureTitle2, featureSub1, featureSub2, featureButton1, featureButton2, d1, d2}) => (

    <div className='container-fluid' style={{marginBottom: '25vh'}}>
        <div className='row'>


            <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <h5> {feature} </h5>
                <h1 className='fw-bolder pb-4' style={{fontSize: 80, wordWrap: 'normal'}}> {title} </h1>
                <h5> {subtitle} </h5>

                <div className='row'>
                    

                    <FeatureOptions
                    title={featureTitle1}
                    subtitle={featureSub1}
                    buttonText={featureButton1}
                    direction={d1}
                    />
                    <FeatureOptions 
                    title={featureTitle2}
                    subtitle={featureSub2}
                    buttonText={featureButton2}
                    direction={d2}
                    />


                </div>
            </div>


            <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='container-fluid'>
                    <img src={img} alt='Responsive image' className='img-fluid' style={{width: '100%'}}/>
                </div>
            </div>


        </div>
    </div>

)

const Header = () => (

    <div className='container-fluid' style={{margin: '0', padding: '0', marginBottom: '10vh', marginTop: '15vh', marginBottom: '25vh'}}>
        <div className='row'>


            <div className='col' align='left'>

                <h1 className='col mt-6 fw-bolder' style={{fontSize: 70, wordWrap: 'break-word'}}>Cyber Security Assessment Tool</h1>

            </div>


            <div className='col pl-5' align='left'>

                <div className='row'>
                    <h5 style={{fontSize: 25, marginBottom: '5vh', wordWrap: 'break-word'}}>Learn about common cyber attacks, how to spot them, and how to protect yourself and your information.</h5>
                </div>

                <div className='row '>
                    <Link to='/about'>
                        <button className='btn btn-dark rounded-0 mt-4' style={{fontSize: 25}}>Learn more</button>
                    </Link>
                </div>

            </div>


        </div>

        <div className='container-fluid' style={{marginTop: '10vh'}}>
            <div>
                <img src={require('../assets/oldPeople.png')} alt='Responsive image' className='img-fluid mt-2' style={{maxHeight: '1280px', width: '100%'}}/>
            </div>
        </div>

    </div>

)

function HomePage() {

      return (
        <div className='container-fluid bg bg-white' style={{backgroundImage: `require(${'../assets/RandomImage01'})`, paddingLeft: '3vw', paddingRight: '3vw'}}>


            <Header />
            <Feature
            feature='Feature One'
            title='Learn About Common Scams'
            subtitle='Take an opportunity to learn about common methods cybercriminals use to steal information from you and methods to spot and protect yourself.'
            img={phone_scam}
            featureTitle1='Phishing Scams'
            featureSub1='A common type of attack in which the attacker attempts to trick you into giving up sensitive information.'
            featureButton1='Learn more'
            featureTitle2='Phone Scams'
            featureSub2='A common scam in which unsolicited calls are sent out in order to trick you into giving up information.'
            featureButton2='Learn more'
            d1='/aboutPhishing'
            d2='/aboutPhones'
            />
            <Feature 
            feature='Feature two'
            title='Take an Assessment to Test Your Knowledge'
            subtitle='Test your knowledge on phishing and phone scams with two dedicated assessments.'
            img={old_man}
            featureTitle1='Phishing Assessment'
            featureSub1='Take the phishing Assessment Below.'
            featureButton1='Phishing Assessment'
            featureTitle2='Phone Scam Assessment'
            featureSub2='Take the Phone Scam Assessment Below.'
            featureButton2='Phone Scam Assessment'
            d1='/phishingAssessment'
            d2='/phoneAssessment'
            />


        </div>
    );
};

export default HomePage;
