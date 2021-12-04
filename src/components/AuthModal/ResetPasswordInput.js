import styled from "styled-components";
import Input from "./Input";
import InputCode from "./InputCode";
const ResetPasswordInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ResetPasswordInput = () => {
    return (
        <ResetPasswordInputStyled>
            <Input
                required
                id="email"
                label="Enter email"
            />
            <InputCode
                id="code"
                label="Enter code"
            />
        </ResetPasswordInputStyled>
    )
}

export default ResetPasswordInput;
