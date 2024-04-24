import React from 'react';
import Register from '../components/Register';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
    const cookie = document.cookie.split('=')[0]
    if (cookie === "RegisteredUser") {
        return <Navigate to="/"/>
    } else {
        return (
            <div>
                <Register />
            </div>
        );
    }
};

export default RegisterPage