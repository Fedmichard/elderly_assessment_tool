import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className='bg bg-light'>
            <div>
                <h1 className='text-center'>About Page</h1> <br />
                <h3 className='px-5'>Project Description</h3>
                <p className='px-5'>
                    This project utilizes REACTJS, CSS and Bootstrap for the client-side, while using *-Input backend stack-* for the server-side.
                    The overall purpose of this project was to *-Input project purpose-* for CEN 3078 course  
                    offered at Florida Gulf Coast University.
                </p>
                <h3 className='px-5'>Website Purpose</h3>
                <p className='px-5'>
                    *-Insert website purpose-*
                    <br/>
                    *-Additional info.-*
                    <br/>
                    *-Additional info.-*
                </p>
            </div>

            <div>
                <h3 className='text-center text-uppercase fw-bold'>benefits that you can enjoy:</h3>
                <div className='container'>
                    <div className='row fs-5'>

                        <div className='px-5 col-md-6 mt-3'>
                            <ul>
                                <li><strong>*Insert*</strong>*Insert*</li>
                                <li><strong>*Insert*</strong>*Insert*</li>
                                <li><strong>*Insert*</strong>*Insert*</li>
                            </ul>
                        </div>

                        

                        <div className='px-5 col-md-6 mt-3'>
                            <ul>
                                <li><strong>*Insert*</strong>*Insert*</li>
                                <li><strong>*Insert*</strong>*Insert*</li>
                                <li><strong>*Insert*</strong>*Insert*</li>
                            </ul>
                        </div>

                    </div>
                    <br />
                    <br />
                </div>
            </div>

            <div><h3 className='px-5 text-uppercase text-center fw-bold'>how the assessment tool works...</h3></div>
            <div className='px-5 container'>
                <div className='row'>
                    <div className='col-md-4 mt-4 border rounded border-success'>
                        <h5 className='text-uppercase text-center fw-bold'>step 1: *Insert*</h5><hr className='d-md-none'/>
                        {/*<div className='px-5'><img src={require()} alt='*insert*' className='img-fluid mt-2'/></div>*/}
                        <p className='mt-2 fs-6'>*insert*</p>
                    </div>

                    
                    <div className='col-md-4 mt-4 border rounded border-success'>
                        <h5 className='text-uppercase text-center fw-bold'>step 2: *Insert*</h5><hr className='d-md-none'/>
                        {/*<div className='px-5'><img src={require()} alt='*insert*' className='img-fluid mt-2'/></div>*/}
                        <p className='mt-2 fs-6'>*insert*</p>
                    </div>

                    
                    <div className='col-md-4 mt-4 border rounded border-success'>
                        <h5 className='text-uppercase text-center fw-bold'>step 3: *Insert*</h5><hr className='d-md-none'/>
                        {/*<div className='px-5'><img src={require()} alt='*insert*' className='img-fluid mt-2'/></div>*/}
                        <p className='mt-2 fs-6'>*insert*</p>
                    </div>
                </div>
            </div>
            <br />
            <div><h3 className='px-5 text-uppercase text-center fw-bold'>*insert*</h3></div>
            <div><h3 className='px-5 text-uppercase text-center fw-bold'>*insert*</h3></div>
            <div className='text-center mb-5'>
                <Link to='/register'>
                    <button className='btn btn-outline-dark rounded-0'>Register</button>
                </Link>
            </div>
        </div>
        
    );
};

export default AboutPage;