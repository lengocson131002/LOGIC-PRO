import styled from "styled-components";
import { NavLink } from 'react-router-dom';
const MobileNavigationStyled = styled.li`
    display: block;
    padding-left: ${props => props.level === "sub" ? "4rem" : "0"};
 
    & .nav-link {
        text-transform: uppercase;
        text-decoration: none;
        font-size: ${props => props.level === "sub" ? "1.8rem" : "2rem"};
        color: #fff;
        width: 100%;
    }

    .active {
        color: ${props => props.theme.colors.secondaryLight};
    }
`;

const MobileNavigationLink = (props) => {
    return (
        <MobileNavigationStyled level={props.level}>
            <NavLink to={props.to}
                className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>{props.name}</NavLink >
        </MobileNavigationStyled >
    )
}

export default MobileNavigationLink;
