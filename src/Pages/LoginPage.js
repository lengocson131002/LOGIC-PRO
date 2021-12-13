import React from 'react';
import Auth from '../components/HomePageComponents/AuthModal/Auth';
import AuthContainer from '../components/HomePageComponents/AuthModal/AuthContainer';
import LoginForm from '../components/HomePageComponents/AuthModal/LoginForm';

const LoginPage = () => {
    return (
        <Auth>
            <AuthContainer>
                <LoginForm />
            </AuthContainer>
        </Auth>
    )
}

export default LoginPage
