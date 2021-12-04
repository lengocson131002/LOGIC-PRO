import React from 'react';
import Auth from '../components/AuthModal/Auth';
import AuthContainer from '../components/AuthModal/AuthContainer';
import RegistrationForm from '../components/AuthModal/RegistrationForm';

const RegistrationPage = () => {
    return (
        <Auth>
            <AuthContainer>
                <RegistrationForm />
            </AuthContainer>
        </Auth>
    )
}

export default RegistrationPage;
