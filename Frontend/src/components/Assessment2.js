import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode} from 'jwt-decode'
import "core-js/stable/atob"
import { data } from '../assets/data2';

const Asessment = () => {
    const cookie = document.cookie.split('=')[0]

    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(data[0])
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)
    let message = "Exam complete! If you scored well you may move onto the next session with no problems, otherwise feel free to retake the exam!";

    const checkAnswer = (e, ans) => {
        if (question.answer == ans) {
            setScore(prev => prev + 1)
        } else {
            setScore(prev => prev)
        }

        if (index === data.length - 1) {
            setResult(true);
            return
        }

        setIndex(index + 1)
        setQuestion(data[index])
    }

    if (cookie === "RegisteredUser") {
        const user = jwtDecode(document.cookie)
        const userId = user.id
 
        const storeRes = async () => {
            try {
                const response = await axios.post('http://localhost:3001/users/updateTestsTwo', { userId, score })
                .then((res) => {
                    console.log(res.data.status);
                    if (res.data.status == "success") {
                    } else {
                        alert(res.data.error);
                    }
                })
            } catch (error) {
                console.error('Error during login:', error);
            }
        }

        const getTests = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users/getTestsTwo', {userId})
                .then((res) => {
                    console.log(res.data.status)
                    if (res.data.status == "success") {
                        return res.data
                    } else {
                        alert(res.data)
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }

        if (result) {
            storeRes()
        }

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
    
    
                    <div className='border' style={{padding: '20px', maxHeight: '80vh'}}>
                        <img src={require(`../assets/PhishingScams/` + data[index].picture)} style={{height: '100%', maxHeight: '80vh', maxWidth: '100%'}}></img>
                    </div>
    
    
                </div>
                
    
                <div className='row' style={{marginTop: '5vh', backgroundColor: '#E7E7E7', paddingTop: '5vh', paddingBottom: '5vh', width: '1000px', maxWidth: '100%'}}>
                    {result?<>
                        <div className='col'>
                            <div className='row'>
                                <h4 style={{paddingLeft: '5vh'}}> Result: {Math.round((score / 12) * 100) * 100 / 100} % </h4>
                                <h4> , {score} / 12 </h4>
                            </div>
                            <div className='row'>
                                <h6 style={{paddingLeft: '5vh', paddingRight: '5vh'}}> {message} </h6>
                            </div>
                        </div>
                        <br />
                    </>:<>

                        <div className='col-lg-12'>
                            <h4 style={{paddingLeft: '1vw'}}>{question.question}</h4>
                            
                            <ul style={{marginTop: '4vh'}}>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 1)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}} >
                                        {question.option1}</button>
                                </li>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 2)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}}>
                                        {question.option2}</button>
                                </li>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 3)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}}>
                                        {question.option3}</button>
                                </li>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 4)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}}>
                                        {question.option4}</button>
                                </li>
        
                            </ul>
                            
                        </div>

                    </>}
                    
                    
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
    
    
                    <div className='border' style={{padding: '20px', maxHeight: '80vh'}}>
                        <img src={require(`../assets/PhishingScams/` + data[index].picture)} style={{height: '100%', maxHeight: '50vh', maxWidth: '100%'}}></img>
                    </div>
    
    
                </div>
                
    
                <div className='row' style={{marginTop: '5vh', backgroundColor: '#E7E7E7', paddingTop: '5vh', paddingBottom: '5vh', width: '1000px', maxWidth: '100%'}}>
                    {result?<>
                        <div className='col'>
                            <div className='row'>
                                <h4 style={{paddingLeft: '5vh'}}> Result: {Math.round((score / 12) * 100) * 100 / 100} % </h4>
                                <h4> , {score} / 12 </h4>
                            </div>
                            <div className='row'>
                                <h6 style={{paddingLeft: '5vh', paddingRight: '5vh'}}> {message} </h6>
                            </div>
                        </div>
                        <br />
                    </>:<>

                        <div className='col-lg-12'>
                            <h4 style={{paddingLeft: '1vw'}}>{question.question}</h4>
                            
                            <ul style={{marginTop: '4vh'}}>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 1)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}} >
                                        {question.option1}</button>
                                </li>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 2)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}}>
                                        {question.option2}</button>
                                </li>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 3)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}}>
                                        {question.option3}</button>
                                </li>
        
                                <li style={{listStyleType: 'none', marginBottom: '2vh'}}>
                                    <button className={`btn btn-secondary btn-outline-dark p-3`}
                                    onClick={e => {checkAnswer(e, 4)}} style={{ marginRight: '1vw', maxWidth: '45vw', width: '100%', textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', textOverflow: 'ellipsis'}}>
                                        {question.option4}</button>
                                </li>
        
                            </ul>
                            
                        </div>

                    </>}
                    
                    
                </div>
    
    
            </div>
        );
    }
}

export default Asessment;