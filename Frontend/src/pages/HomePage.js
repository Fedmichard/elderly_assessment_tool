import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/bootstrap-5.2.3-dist/PhishEld.css';
function HomePage() {
      return (
        <div className='bg bg-light' style={{backgroundImage: `require(${'../assets/RandomImage01'})`}}>
            <div className='text-center'>
                <h1 className='mt-2 text-uppercase fw-bolder'>Elderly Assessment Tool</h1>
                <h2 className='text-uppercase fw-bold'>*Insert*</h2>
                <Link to='/registration'>
                    <button className='btn btn-primary mt-4'>*Insert*</button>
                </Link>
            </div><br />
            <br />
            <div>
                <h3 className='text-center text-uppercase fw-bold'>benefits that you can enjoy:</h3>
                <div className='container'>
                    <div className='row fs-5'>
                        <div className='px-5 col-md-6 mt-3'>
                            <ul>
                            <li><strong>*Insert* </strong>*Insert*</li>
                            <li><strong>*Insert* </strong>*Insert*</li>
                            <li><strong>*Insert* </strong>*Insert*</li>
                            </ul>
                        </div>

                        <div className='px-5 col-md-6 mt-3'>
                            <ul>
                            <li>*Insert* <strong>*Insert*</strong></li>
                            <li>*Insert* <strong>*Insert*</strong> *Insert*</li>
                            <li>*Insert* <strong>*Insert*</strong> *Insert*</li>
                            </ul>
                        </div>
                    </div><br />
                    </div>
                </div>


            <div><h3 className='px-5 text-uppercase text-center fw-bold'>how the assesment tool works... </h3></div>
            <div className='px-5 container'>
                <div className='row'>
                    <div className='col-md-4 mt-4 border rounded border-primary'>
                    <h5 className='text-uppercase text-center fw-bold'>step 1: *Insert*</h5><hr className='d-md-none' />
                    {/*<div className='px-5'><img src={require('../assets/Reservation01.jpeg')} alt='*Insert*' className='img-fluid mt-2'></img></div>*/}
                    <p className='mt-2 fs-6'>*Insert* </p>
                    </div>

                    <div className='col-md-4 mt-4 border rounded border-primary'>
                    <h5 className='text-uppercase text-center fw-bold'>step 2: *Insert*</h5><hr className='d-md-none' />
                    {/*<div className='px-5'><img src={require('../assets/Boat04.jpeg')} alt='*Insert*' className='img-fluid mt-2'></img></div>*/}
                    <p className='mt-2 fs-6'>*Insert*</p>
                    </div>

                    <div className='col-md-4 mt-4 border rounded border-primary'>
                    <h5 className='text-uppercase text-center fw-bold'>step 3: *Insert*</h5><hr className='d-md-none' />
                    {/*<div className='px-5'><img src={require('../assets/Boat05.jpeg')} alt='*Insert*' className='img-fluid mt-2'></img></div>*/}
                    <p className='mt-2 fs-6'>*Insert*</p>
                    </div>
                </div>
            </div><br />

            <div><h3 className='px-5 text-uppercase text-center fw-bold'>*Insert*</h3></div>
            <div><h3 className='px-5 text-uppercase text-center mt-3'>*Insert*</h3></div>
            <div className='text-center mb-5'>
            <Link to='/registration'>
                <button className='btn btn-primary mt-3'>Register</button>
            </Link>
            </div>
        </div>
    );
};

export default HomePage;
