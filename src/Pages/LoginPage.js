import React from 'react';
import Auth from '../Features/HomePageComponents/AuthModal/Auth';
import AuthContainer from '../Features/HomePageComponents/AuthModal/AuthContainer';
import LoginForm from '../Features/HomePageComponents/AuthModal/LoginForm';

const LoginPage = () => {
    return (
        <Auth>
            <AuthContainer>
                <LoginForm />
            </AuthContainer>
        </Auth>
    )
}

export default LoginPage;
