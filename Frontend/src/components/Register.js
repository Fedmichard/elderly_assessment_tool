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
        password: '',
    });

    const handleChange = async (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/users/create_user', {
                ...formData

            });

            console.log('Server response:', response.data);

            // If registration is success, redirect to account page
            navigate('/');

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
                        <input type="text" value={formData.first_name} onChange={handleChange} name='first_name' placeholder='Enter First Name' className='form-control' required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" value={formData.last_name} onChange={handleChange} name='last_name' placeholder='Enter Last Name' className='form-control' required />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" value={formData.email} onChange={handleChange} name='email' placeholder='Enter Email Name' className='form-control' required />
                    </div>

                    <PasswordAndConfirmPasswordValidation />

                    <div className='d-grid mt-2'>
                        <button className='btn btn-success' type='submit'>Register</button>
                    </div>

                    <p className='text-end mt-2'>
                        Already Registered?<Link to="/signIn" style={{ color: 'green' }} className='ms-2'> Login </Link>
                    </p>
                </form>


            </div>
        </div>
    );
};

export default Register;