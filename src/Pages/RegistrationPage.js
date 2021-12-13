import React from 'react';
import Auth from '../components/HomePageComponents/AuthModal/Auth';
import AuthContainer from '../components/HomePageComponents/AuthModal/AuthContainer';
import RegistrationForm from '../components/HomePageComponents/AuthModal/RegistrationForm';

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
