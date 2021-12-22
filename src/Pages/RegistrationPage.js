import React from 'react';
import Auth from '../Features/HomePageComponents/AuthModal/Auth';
import AuthContainer from '../Features/HomePageComponents/AuthModal/AuthContainer';
import RegistrationForm from '../Features/HomePageComponents/AuthModal/RegistrationForm';

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
