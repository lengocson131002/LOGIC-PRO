import Info from "./Info";
import ListContact from "../../HomePageComponents/Contacts/ListContact";
import styled from "styled-components";
import LinkButton from "../../../UI/LinkButton";

const HeaderStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-end;
    gap: 2.5rem;
    padding: 2rem 0;

    .buttons {
        display: flex;
        gap:1rem;
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
