import React from 'react';
import Login from '../components/SignIn.js'
import { Navigate } from 'react-router-dom';

const SignInPage = () => {
    const cookie = document.cookie.split('=')[0]
    if (cookie === "RegisteredUser") {
        return <Navigate to="/"/>
    } else {
        return (
            <div>
                <Login />
            </div>
        );
    }
};

export default SignInPage;