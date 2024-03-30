import React from 'react';

const Footer = () => (
    <footer className='text-center' style={{padding: 40}}>
        <div className='container-fluid p-4'>
            <div className='row'>

                <div className='col'>
                    <a class='btn' href='/phishingAsessment' style={{color: '#000', fontSize: 30}}>
                        <strong>Elderly Assessment Tool</strong>
                    </a>
                </div>

            </div>

            <br />
            <br />

            <div className='row text-center' style={{marginLeft: 400}}>

                <div className='col col-md-2'>
                    <a class='btn btn-floating m-1' href='/aboutPhishing' style={{color: '#000', fontSize: 15, }}>
                        <strong>About Phishing Scams</strong>
                    </a>
                </div>

                <div className='col col-md-2'>
                    <a class='btn btn-floating m-1' href='/aboutPhones' style={{color: '#000', fontSize: 15}}>
                        <strong>About Phone Scams</strong>
                    </a>
                </div>

                <div className='col col-md-2'>
                    <a class='btn btn-floating m-1' href='/phishingAsessment' style={{color: '#000', fontSize: 15}}>
                        <strong>Phishing Scam Assessment</strong>
                    </a>
                </div>

                <div className='col col-md-2'>
                    <a class='btn btn-floating m-1' href='/phoneAsessment' style={{color: '#000', fontSize: 15}}>
                        <strong>Phone Scam Assessment</strong>
                    </a>
                </div>

            </div>

            <br />

        </div>
    </footer>
);

export default Footer;