import styled from 'styled-components';
const ToggleButtonStyled = styled.div`
    cursor: pointer;
    height: 3rem;
    width: 3rem;

    & > div {
        position: relative;
        top: 2rem;
        width: 3rem;
        height: 3px;
        background: ${props => props.close ? '#fff' : "transparent"};
        transition: all 0.8s;

        &::before {
            content: "";
            position: absolute;
            top: ${props => props.close ? "-1rem" : "0"};
            left: 0;
            height: 3px;
            width: 100%;
            background: #fff;
            transition: all 0.8s;
            transform: ${props => props.close ? "none" : "rotate(-135deg)"};
        }
        &::after {
            content: "";
            position: absolute;
            bottom: ${props => props.close ? "-1rem" : "0"};
            left: 0;
            height: 3px;
            width: 100%;
            background: #fff;
            transition: all 0.8s;
            transform: ${props => props.close ? "none" : "rotate(135deg)"};
        }
    }
`;

const ToggleButton = (props) => {
    return (
        <ToggleButtonStyled close={props.close} onClick={() => props.onClick()} >
            <div></div>
        </ToggleButtonStyled>
    )
}
export default ToggleButton;
