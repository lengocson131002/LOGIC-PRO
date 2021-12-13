import styled from "styled-components";
const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    & label {
        font-size: 1.6rem;
        font-weight: lighter;
        margin-bottom: 0.5rem;
    }
    & input {
        border: none;
        outline: none;
        padding: 1.5rem 2.5rem;
        font-size: 1.7rem;
        color: #fff;
        background: ${props => props.theme.colors.tertiary};
        border-radius: 5px;
        font-weight: lighter;
        width: 100%;
    }

    & span {
        color: ${props => props.theme.colors.warning};
        font-size: 2rem;
        line-height: 0;
        margin-left: 0.5rem;;
    }
`;

const Input = (props) => {
    return (
        <InputStyled className={props.className}>
            <label htmlFor={props.id}>{props.label} {props.required && <span>*</span>}</label>
            <input type={props.type || "text"} id={props.id} />
        </InputStyled>
    )
};

export default Input;
