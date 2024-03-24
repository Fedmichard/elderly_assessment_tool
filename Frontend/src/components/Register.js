import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Install dependency
import axios from 'axios'; // Install dependency
import PasswordAndConfirmPasswordValidation from './PasswordAndConfirmPasswordValidation';
import '../styles/bootstrap-5.2.3-dist/PhishEld.css';

function Register() {
    const navigate = useNavigate(); // Hook for navigation
    
        const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ' ',
        streetAddress: '',
        city: '',
        state: '',
    });

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine streetAddress, city, and state into a single address
    const address = `${formData.streetAddress}, ${formData.city}, ${formData.state}`;

    try {
        const response = await axios.post('http://localhost:3001/registration', {
            ...formData,
            address: address,
        });

        console.log('Server response:', response.data);

        // If registration is success, redirect to account page
        navigate('/account');
    } catch (error) {
        console.error('Error submitting registration:', error);
    }
};

    return (
        <div className="signup template d-flex justify-content-center align-items-center bg-color">
            <div className='form_container_register p-5 rounded bg-white'>
                <div className='text-center fw-bolder'>
                    <h1><strong>Join our Elderly Assessment Tool</strong></h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center fw-bold'>Register</h3>

                    <div className='mb-2'>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" value={formData.first_name} onChange={handleChange} name='first_name' placeholder='Enter First Name' className='form-control' required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" value={formData.last_name} onChange={handleChange} name='last_name' placeholder='Enter Last Name' className='form-control' required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" value={formData.email} onChange={handleChange} name='email' placeholder='Enter Email Name' className='form-control' required/>
                    </div>

                    <PasswordAndConfirmPasswordValidation />

                    <div className='mb-2'>
                        <label htmlFor="streetAddress">Street Address</label>
                        <input type="text" value={formData.streetAddress} onChange={handleChange} id="streetAddress" name="streetAddress" placeholder='Enter Street Address' className='form-control' required/><br/>

                        <label htmlFor="city">City</label>
                        <input type="text" value={formData.city} onChange={handleChange} id="city" name="city" placeholder='Enter City' className='form-control' required/><br/>

                        <label htmlFor="state">State/Provinence</label>
                        <input type="text" value={formData.state} onChange={handleChange} id="state" name="state" placeholder='Enter State' className='form-control' required/><br/>
                    </div>

                    <div className='d-grid mt-2'>
                        <button className='btn btn-primary' type='submit'>Register</button>
                    </div>  

                    <p className='text-end mt-2'>
                        Already Registered?<Link to="/login" className='ms-2'>Login </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;