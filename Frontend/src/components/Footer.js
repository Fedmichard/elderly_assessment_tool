import React from 'react';

const Footer = () => (
    <footer className='container-fluid text-center'>
        <div className='container-fluid'>
            <div className='row'>

            </div>

            <br />
            <br />

            <div className='row mx-5'>

                <div className='col'>
                    <a className='btn btn-floating m-1' href='/aboutPhishing' style={{color: '#000', fontSize: 15, }}>
                        <strong>About Phishing Scams</strong>
                    </a>
                </div>

                <div className='col '>
                    <a className='btn btn-floating m-1' href='/aboutPhones' style={{color: '#000', fontSize: 15}}>
                        <strong>About Phone Scams</strong>
                    </a>
                </div>

                <div className='col'>
                    <a className='btn btn-floating m-1' href='/phishingAssessment' style={{color: '#000', fontSize: 15}}>
                        <strong>Phishing Scam Assessment</strong>
                    </a>
                </div>

                <div className='col'>
                    <a className='btn btn-floating m-1' href='/phoneAssessment' style={{color: '#000', fontSize: 15}}>
                        <strong>Phone Scam Assessment</strong>
                    </a>
                </div>

            </div>

            <br />

        </div>
    </footer>
);

export default Footer;