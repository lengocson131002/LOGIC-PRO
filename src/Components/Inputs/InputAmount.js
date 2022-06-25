import styled from "styled-components";
const Input = styled.input.attrs(props => ({
    type: 'number',
    step: 1,
    ...props
}))`
    border-radius: 5px;
    font-size: 17px;
    padding: 2rem 4rem 2rem 2rem;
    background: #7b5940;
    border: none;
    outline: none;
    width: 100%;
    flex: 1;
    color: #fff;
`;
const InputAmountWrapper = styled.div`
    position: relative;
   & span {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        font-size: 2rem;
        z-index: 1;
    }
`;

const InputAmount = (props) => {
    return (
        <InputAmountWrapper>
            <Input {...props} />
            <span>$</span>
        </InputAmountWrapper>
    )
}

export default InputAmount;
