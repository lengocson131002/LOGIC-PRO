import styled from "styled-components";
const InputRangeStyled = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2rem;
        
    & .thumb {
        position: relative;
        height: 3rem;
        width: 3rem;
        border: none;
        outline: none;
        border-radius: 50%;
        background: ${props => props.theme.colors.tertiary};
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: "0px 2px 6px #AAA";

        &::after {
            content: "";
            position: absolute;
            width: 50%;
            height: 50%;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: ${props => props.theme.colors.secondaryLight};
        }

        & .current-value {
            position: absolute;
            font-size: 1.5rem;
            top: -4rem;
            left: 50%;
            padding: 0.5rem 1.5rem;
            border-radius: 3px;
            transform: translateX(-50%);
            background: ${props => props.theme.colors.secondaryLight};

            &::before {
                content:"";
                position:absolute;
                bottom: -10px;
                left: 50%;
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 12px solid ${props => props.theme.colors.secondaryLight};
                transform: translateX(-50%);
            }

        }
    }
`;
export default InputRangeStyled;