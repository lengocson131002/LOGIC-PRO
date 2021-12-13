import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const AuthTwoFactorsStyled = styled.div`
    text-align: center;

    & h4 {
        font-size: 1.9rem;
        font-weight: 400;
        margin-bottom: 1rem;

    }

    & > span {
        font-size: 1.2rem;
        font-weight: 200;
    }

    & .toggle-auth {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-weight: lighter;
        text-decoration: none;
        margin-bottom: 1rem;

        & input {
            position: relative;
            appearance: none;
            width: 5rem;
            height: 2.5rem;
            border-radius: 15px;
            background: ${props => props.theme.colors.secondary};
            cursor: pointer;
            
            &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 2px;
                transform: translateY(-50%);
                height: 2rem;
                width: 2rem;
                border-radius: 50%;
                background: ${props => props.theme.colors.error};
                transition: all 0.2s;
            }
            &:checked::before{
                left: 2.7rem;
            }

        }

        & span {
            color: ${props => props.theme.colors.secondaryLight}
        }
    }
    
`;

const AuthTwoFactors = (props) => {
    return (
        <AuthTwoFactorsStyled>
            <h4>2 FACTOR AUTHENTICATION:</h4>
            <NavLink
                to="#"
                className="toggle-auth">
                <span>OFF</span>
                <input type="checkbox" {...props} onChange={() => { }} />
                <span>ON</span>
            </NavLink>
            <span>PROTECT YOUR ACCOUNT WITH 2FA</span>
        </AuthTwoFactorsStyled>
    )
}

export default AuthTwoFactors
