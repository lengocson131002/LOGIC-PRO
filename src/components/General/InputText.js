import styled from "styled-components";
const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    & label {
        font-size: 1.6rem;
        font-weight: lighter;
        margin-bottom: 1rem;
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

const InputText = ({ id, label, required, type = "text", readonly, className, value }) => {
    return (
        <InputStyled className={className}>
            <label htmlFor={id}>{label} {required && <span>*</span>}</label>
            {readonly ? <input type={type} id={id} value={value} readOnly /> :
                <input type={type} id={id} value={value} />}
        </InputStyled>
    )
};

export default InputText;
