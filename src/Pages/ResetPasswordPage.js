import React from 'react';
import Auth from '../components/AuthModal/Auth';
import AuthContainer from '../components/AuthModal/AuthContainer';
import ResetPasswordForm from '../components/AuthModal/ResetPasswordForm';

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
