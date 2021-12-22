import React from 'react'
import styled from "styled-components";
const InputCodeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    & label {
        font-size: 1.6rem;
        font-weight: lighter;
        margin-bottom: 0.5rem;
    }
    & div {
        width: 100%;
        position: relative;
        overflow: hidden;

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

        & .img-code {
            position: absolute;
            width: 17rem;
            height: 5rem;
            padding: 0 1rem;
            top: 0;
            right: 0;
            background: #000;
            border-radius: 5px;

            border-top-left-radius: 10px;
            border-bottom-left-radius: 0;
            

            & > img {
                height: 100%;
            }
        }
    }

    & span {
        color: ${props => props.theme.colors.warning};
        font-size: 2rem;
        line-height: 0;
        margin-left: 0.5rem;;
    }
`;

const InputCode = (props) => {
    return (
        <InputCodeStyled className={props.className}>
            <label htmlFor={props.id}>{props.label}  <span>*</span></label>
            <div>
                <input type="text" id={props.id} />
                <div className="img-code">
                    <img src="https://via.placeholder.com/150x50" alt="" />
                </div>
            </div>
        </InputCodeStyled>
    )
};

export default InputCode;
