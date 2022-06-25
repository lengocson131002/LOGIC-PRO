import React from 'react';
import Auth from './Components/Auth';
import AuthContainer from './Components/AuthContainer';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import ResetPasswordForm from './Components/ResetPasswordForm';
import useQuery from '../../Hooks/useQuery';
const AuthenticationPage = () => {
    const query = useQuery();

    console.log(query.get('a'));

    return (
        <Auth>
            <AuthContainer>
                {query.get('a') === 'login' && <LoginForm />}
                {query.get('a') === 'register' && <RegistrationForm />}
                {query.get('a') === 'reset-password' && <ResetPasswordForm />}
            </AuthContainer>
        </Auth>
    )
}

export default AuthenticationPage;