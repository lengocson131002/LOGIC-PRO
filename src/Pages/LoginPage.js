import React from 'react';
import Auth from '../components/AuthModal/Auth';
import AuthContainer from '../components/AuthModal/AuthContainer';
import LoginForm from '../components/AuthModal/LoginForm';

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
