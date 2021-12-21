import Info from "./Info";
import ListContact from "../../HomePageComponents/Contacts/ListContact";
import styled from "styled-components";
import LinkButton from "../../../UI/LinkButton";

const HeaderStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content:space-between;
    padding: 2rem 4rem;

    @media (max-width: 1300px) {
        gap: 5px;
        padding: 2rem 0;
    }
    @media (max-width: 1024px) {
       display:none;
    }

    .buttons {
        display: flex;
        gap:1rem;
    }

    .lass-access {
        @media (max-width: 1300px) {
            display: none;
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <Info
                title="USERNAME"
                info="lnson131002"
            />
            <Info
                title="E-MAIL"
                info="abc@gmail.com"
            />
            <Info
                className="lass-access"
                title="LAST ACCESS"
                info={new Date().toISOString()}
            />
            <ListContact />
            <div className="buttons">
                <LinkButton
                    color="#fff"
                    href="#"
                    background="#6996d2"
                    clickbackground="#0f7dea"
                    fsize="14px"
                >Representatives</LinkButton>
                <LinkButton
                    color="#fff"
                    href="#"
                    background="#039746"
                    clickbackground="#00c616"
                    fsize="14px"
                >Live chat</LinkButton>
            </div>
        </HeaderStyled>

    )
}

export default Header;
