import React from 'react';
import Auth from '../components/HomePageComponents/AuthModal/Auth';
import AuthContainer from '../components/HomePageComponents/AuthModal/AuthContainer';
import ResetPasswordForm from '../components/HomePageComponents/AuthModal/ResetPasswordForm';

const ResetPasswordPage = () => {
    return (
        <Auth>
            <AuthContainer>
                <ResetPasswordForm />
            </AuthContainer>
        </Auth>
    )
}

export default ResetPasswordPage;
