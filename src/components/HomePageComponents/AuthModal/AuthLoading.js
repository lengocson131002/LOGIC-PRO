import React from 'react';
import styled from 'styled-components';

const AuthLoadingStyled = styled.div`
    position: relative;
    text-align: center;
    padding: 5rem;
    border-bottom: 1px solid #adb5bd;
    width: 80%;
    min-width: 30rem;
    margin: 0 auto;

    & > h3 {
        font-weight: 400;
        font-size: 3rem;
    }

    & .loading {
        position: absolute;
        bottom: -2.5rem;
        left: 50%;
        transform: translateX(-50%);
        background: ${props => props.theme.colors.tertiary};
        display: flex;
        gap: 1rem;
        padding: 1.5rem;
        border-radius: 5px;
        font-size: 1.4rem;
        width: fit-content;
    }

    & .spinner {
        position: relative;
        width: 2rem;
        height: 2rem;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 80%;
            height: 80%;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-bottom-color:#fff;
            border-radius: 50%;
            animation: spinner 1s infinite linear;
        }
    

        @keyframes spinner {
            0% {
                transform: rotate(0);
            }    
            100% {
                transform: rotate(360deg);
            }    
        }
    }
`;

const AuthLoading = () => {
    return (
        <AuthLoadingStyled>
            <h3>Username</h3>
            <div className="loading">
                <div className="spinner"></div>
                <span>Loading your dashboard...</span>
            </div>
        </AuthLoadingStyled>
    )
}

export default AuthLoading
