import React from 'react';
import Auth from '../Features/HomePageComponents/AuthModal/Auth';
import AuthContainer from '../Features/HomePageComponents/AuthModal/AuthContainer';
import ResetPasswordForm from '../Features/HomePageComponents/AuthModal/ResetPasswordForm';

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
