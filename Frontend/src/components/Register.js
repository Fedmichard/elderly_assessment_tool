import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Install dependency
import axios from 'axios'; // Install dependency
import '../styles/bootstrap-5.2.3-dist/PhishEld.css';
axios.defaults.withCredentials = true;

function Register() {
    const navigate = useNavigate(); // Hook for navigation

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleValidation= (evnt)=>{

        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;

            //for password 
    if(passwordInputFieldName==='password'){
        const uppercaseRegExp   = /(?=.*?[A-Z])/;
        const lowercaseRegExp   = /(?=.*?[a-z])/;
        const digitsRegExp      = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp   = /.{8,}/;

        const passwordLength =      passwordInputValue.length;
        const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
        const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
        const digitsPassword =      digitsRegExp.test(passwordInputValue);
        const specialCharPassword = specialCharRegExp.test(passwordInputValue);
        const minLengthPassword =   minLengthRegExp.test(passwordInputValue);

        let errMsg ="";
        if(passwordLength===0){
                errMsg="Password is empty";
        }else if(!uppercasePassword){
                errMsg="At least one Uppercase";
        }else if(!lowercasePassword){
                errMsg="At least one Lowercase";
        }else if(!digitsPassword){
                errMsg="At least one digit";
        }else if(!specialCharPassword){
                errMsg="At least one Special Characters";
        }else if(!minLengthPassword){
                errMsg="At least minumum 8 characters";
        }else{
            errMsg="";
        }
        setPasswordErr(errMsg);
        }

        // for confirm password
        if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && formData.confirmPassword.length>0) ){
                
            if(formData.confirmPassword!==formData.password)
            {
            setConfirmPasswordError("Confirm password is not matched");
            }else{
            setConfirmPasswordError("");
            }
            
        }

    }

    const handleChange = async (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/users/create_user', {
                ...formData
            }).then((res) => {
                console.log(res.data.status);
                if (res.data.status == "success") {
                    navigate('/signIn');
                    alert('Account Successfully Created!');
                } else {
                    alert(res.data.error);
                }
            })

            console.log('Server response:', response.data);

            // If registration is success, redirect to account page

        } catch (error) {
            console.error('Error submitting registration:', error);

        }

    };

    return (
        <div className="signup template d-flex justify-content-center align-items-center bg-color">
            <div className='p-5 rounded bg-white'>
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
                        <input type="email" value={formData.email} onChange={handleChange} name='email' placeholder='Enter Email' className='form-control' required />
                    </div>

                    <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={formData.password}  onChange={handleChange} onKeyUp={handleValidation} name="password" placeholder="Enter Password" className="form-control" />
                            <p className="text-danger">{passwordError}</p>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" value={formData.confirmPassword}  onChange={handleChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="Re-Enter Password" className="form-control" />
                        <p className="text-danger">{confirmPasswordError}</p>
                    </div>

                    <div className='alert alert-danger' role='alert' id='error' style={{display: 'none'}}></div>
                    <div className='alert alert-success' role='alert' id='success' style={{display: 'none'}}></div>
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