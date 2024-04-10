import React, { useState } from 'react';

import feature_pic from '../assets/73674.png';

const Asessment = () => {
    const [currQuestion, setCurrQuestion] = useState(0);

    return (
        <div style={{marginLeft: '5vw', marginRight: '5vw'}}>


            <div className='row' style={{marginTop: '10vh'}}>


                <div className='col'>

                    <h1><strong>Phishing Assessment</strong></h1>

                </div>

                <div className='col'>

                    <p style={{paddingLeft: 0}}>
                        <strong>Instructions:</strong> Read each question carefully and select the best answer.
                        Choose the response that you believe is most likely to indicate a phishing attempt.
                    </p>

                    <ul style={{paddingLeft: '1em'}}>
                        <li>Analyze the image</li>
                        <li>Check for suspicious activity</li>
                        <li>Answer to the best of your ability</li>
                    </ul>

                </div>


            </div>


            <div className='row' style={{marginTop: '10vh', height: '100%', width: '100%'}}>


                <div>
                    <img src={require('../assets/examples.PNG')} style={{maxHeight: '100%', maxWidth: '100%'}}></img>
                </div>


            </div>
            

            <div className='row' style={{marginTop: '5vh', backgroundColor: '#E7E7E7', paddingTop: '5vh', paddingBottom: '5vh', width: '1000px', maxWidth: '100%'}}>
                <div className='col'>
                    <h4 style={{paddingLeft: '1vw'}}>Is the above image safe or a phishing scam?</h4>
                    <ul style={{marginTop: '4vh'}}>
                        <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                            <button type="button" class="btn btn-secondary btn-outline-dark p-3 rounded-circle btn-md" style={{ marginRight: '1vw'}}></button>
                        Phishing Scam </li>

                        <li style={{listStyleType: 'none'}}>
                            <button type="button" class="btn btn-secondary btn-outline-dark p-3 rounded-circle btn-md" style={{ marginRight: '1vw'}}></button>
                        Safe </li>
                    </ul>
                </div>

            </div>


        </div>
    );
}

export default Asessment;