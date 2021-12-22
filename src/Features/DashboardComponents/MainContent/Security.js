import styled from "styled-components";
import { Button } from "../../../Components/Buttons";
import ContentHeader from "./ContentHeader";
import InputText from "../../General/InputText";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
    padding:6rem;
    border-radius: 15px;
    background:rgba(0,0,0,0.5);

    @media (max-width: 767px) {
        padding: 4rem 2rem;
    }

    & h4 {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 5rem;
    }

    & > p {
        font-weight: lighter;
        margin-bottom: 1rem;
    }

    & > .qr-code {
        width: 20rem;
        height: 20rem;
        margin: 5rem 0;
    }

    & span {
        font-weight: bold;

        &.code {
            display: block;
            font-size: 3rem;
            margin: 3rem 0;
        }
    }

    & a {
        display: inline-block;
        margin: 0 1rem;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration-color: transparent;
        transition: all 0.3s;
        
        &:hover {
            text-decoration-color: inherit; 
        }

        
    }

    ${Button} {
        margin: 5rem auto;
    }

`;


const Security = () => {
    return (
        <div>
            <ContentHeader>SECURITY</ContentHeader>
            <Wrapper>
                <h4>GOOGLE AUTHENTICATION</h4>
                <p>1. Install
                    <a href="http://m.google.com/authenticator" > Google Authenticator</a>
                    on your mobile device.</p>
                <p>2. Your Secret Code is: <span>THFTAEXYZ4IQORW5</span></p>

                <div className="qr-code"><img src="https://via.placeholder.com/200" alt="" /></div>
                <p> 3. Please enter two factor token from Google Authenticator to verify correct setup: </p>
                <span className="code">THFTAEXYZ4IQORW5</span>
                <InputText
                    id="code"
                    label="Enter the code from the app"
                />
                <Button
                    href="#"
                    className="btn-cta"
                    background="#f1c069"
                    clickbackground="#ffb83d"
                    center
                >WITHDRAW FUNDS &rarr; </Button>
            </Wrapper>
        </div>
    )
}

export default Security
