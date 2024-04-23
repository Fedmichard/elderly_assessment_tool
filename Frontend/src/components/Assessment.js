import React, { useState, useRef } from 'react';
import axios from 'axios';
import { jwtDecode} from 'jwt-decode'
import "core-js/stable/atob"
import { data } from '../assets/data';

const Asessment = () => {
    const cookie = document.cookie.split('=')[0]

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);

    let [active, setActive] = useState(0);

    const checkAnswer = (e, ans) => {
        console.log(ans)
        if (!lock) {

            if (question.answer === ans) {
                setLock(true)
                setScore((prev) => prev + 1)
                console.log("Correct!")
            } else {
                setLock(true)
                setScore((prev) => prev)
                console.log("Incorrect!")
            }
            setActive(ans)
            console.log(score)

        } else {
            if (active === 1, 2, 3, 4) {
                if (active === ans) {
                    setActive(0)
                    setLock(false)
                    console.log("Unselected")
                } else {
                    setActive(ans)
                    setLock(false)
                    console.log("Unselected")
                }
            }
            
            console.log(score)
        }
    }

    const next = () => {
        console.log("next!")
        if (lock === true) {
            setIndex(index++)
            setQuestion(data[index])
            setActive(0)
            setLock(false)
        }
    }

    if (cookie === "RegisteredUser") {
        // if is registered user
        return (
            <div style={{marginLeft: '5vw', marginRight: '5vw', marginBottom: '25vh'}}>
    
    
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
                    <div className='col-lg-12'>
                        <h4 style={{paddingLeft: '1vw'}}>{question.question}</h4>
                        
                        <ul style={{marginTop: '4vh'}}>
    
                            <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                <button type="button" className={`btn btn-secondary btn-outline-dark p-3 ${active === 1 ? `active` : undefined}`}
                                onClick={e => {checkAnswer(e, 1)}} style={{ marginRight: '1vw', width: '77vw', textAlign: 'left'}} >
                                    {question.option1}</button>
                            </li>
    
                            <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                <button type="button" className={`btn btn-secondary btn-outline-dark p-3 ${active === 2 ? `active` : undefined}`}
                                onClick={e => {checkAnswer(e, 2)}} style={{ marginRight: '1vw', width: '77vw', textAlign: 'left'}}>
                                    {question.option2}</button>
                            </li>
    
                            <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                <button type="button" className={`btn btn-secondary btn-outline-dark p-3 ${active === 3 ? `active` : undefined}`}
                                onClick={e => {checkAnswer(e, 3)}} style={{ marginRight: '1vw', width: '77vw', textAlign: 'left'}}>
                                    {question.option3}</button>
                            </li>
    
                            <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                <button type="button" className={`btn btn-secondary btn-outline-dark p-3 ${active === 4 ? `active` : undefined}`}
                                onClick={e => {checkAnswer(e, 4)}} style={{ marginRight: '1vw', width: '77vw', textAlign: 'left'}}>
                                    {question.option4}</button>
                            </li>
    
                        </ul>
                        
                    </div>
                    <div className='col-lg-12' style={{ alignItems: 'center'}} align='left'>
                        <button className='btn btn-info' onClick={next} style={{marginRight: '10vw', marginTop: '3vw', width: '20vw', height: '5vw', fontSize: '2vh'}}>Next</button>
                    </div>
                </div>

                
                <div className='row' style={{marginTop: '5vh', backgroundColor: '#E7E7E7', width: '1000px', maxWidth: '100%'}}>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <h2 style={{paddingLeft: '1vw', paddingTop: '0', paddingBottom: '0'}}>Previous test results:</h2>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6' align='right'>
                        <button className='btn btn-info' style={{width: '10vw', height: '5vw'}}></button>
                    </div>
                </div>
    
    
            </div>
        );
    } else {

        // If not a registered user
        return (
            <div style={{marginLeft: '5vw', marginRight: '5vw', marginBottom: '25vh'}}>
    
    
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
                    <div className='col-lg-12'>
                        <h4 style={{paddingLeft: '1vw'}}>Is the above image safe or a phishing scam?</h4>
                        <ul style={{marginTop: '4vh'}}>
    
                            <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                <button type="button" className="btn btn-secondary btn-outline-dark p-3 rounded-circle btn-md" style={{ marginRight: '1vw'}}></button>
                                Phishing Scam
                            </li>
    
                            <li style={{listStyleType: 'none'}}>
                                <button type="button" className="btn btn-secondary btn-outline-dark p-3 rounded-circle btn-md" style={{ marginRight: '1vw'}}></button>
                                Safe 
                            </li>
    
                        </ul>
                        
                    </div>
                    <div className='col-lg-12' style={{ alignItems: 'center'}}>
                        <button className='btn btn-info' style={{marginRight: '10vw', marginTop: '5vw', width: '20vw', height: '5vw', fontSize: '2vh'}}>Next</button>
                    </div>
    
                </div>
    
    
            </div>
        );
    }
}

export default Asessment;