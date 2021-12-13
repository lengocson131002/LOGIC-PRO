import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState, useRef, useEffect } from 'react';

const InputWrapper = styled.div`
    position: relative;
    min-width: 50%;
    flex: 1;
    cursor: pointer;
`;

const Input = styled.div`
    position: relative;
    border-radius: 5px;
    font-size: 17px;
    padding: 2rem 2.5rem;
    background: #7b5940;
    border: none;
    outline: none;
    /* width: 100%; */
    color: #fff;

    & .dropdown-icon {
        font-size: 3rem;
        position: absolute;
        right:1rem;
        top: 50%;
        transition: all 0.3s;
        transform: ${({ active }) => active ? 'translateY(-50%) rotate(180deg)' : ' translateY(-50%)'};
    }
`;

const Menu = styled.ul`
    margin-top: 1px;
    list-style: none;
    width: 100%;
    background: #7b5940;
    border-radius: 5px;
    position: absolute;
    max-height: ${({ active }) => active ? "50rem" : "0"};
    overflow-y : scroll;
    transition: all 0.1s;

`;
const MenuItem = styled.li`
    cursor: pointer;
    padding: 1rem 2rem;
    transition: all 0.2s;

    &:hover {
        background:rgba(241, 191, 105, 0.5);
        color: ${({ theme }) => theme.colors.tertiary};
    }
    ${({ selected, theme }) => selected && `
        background: ${theme.colors.primary} !important;
        color:  ${theme.colors.tertiary};
    `};

`;

let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
        let eventHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener('mousedown', eventHandler);

        return (() => {
            document.removeEventListener('mousedown', eventHandler);
        })
    });
    return domNode;
}


const InputSelect = (props) => {
    const { options, selected, setSelected } = props;
    const [selectedIndex, setSelectedIndex] = useState();
    const [isActive, setIsActive] = useState(false);


    const toggleSelectorHandler = () => {
        setIsActive(prevState => !prevState);
    }
    const selectItemHandler = (index) => {
        setIsActive(false);
        setSelected(index);
        setSelectedIndex(index);
    }
    const domNode = useClickOutside(() => { setIsActive(false) });
    return (
        < InputWrapper ref={domNode}>
            <Input active={isActive} onClick={toggleSelectorHandler}>
                {selected ? selected.name : "Choose one"}
                <RiArrowDropDownLine className="dropdown-icon" />
            </Input>
            <Menu active={isActive}>
                {options.map((option, index) => selectedIndex === index ?
                    (<MenuItem selected onClick={() => { selectItemHandler(index) }} key={index}>{option.name}</MenuItem>) :
                    (<MenuItem onClick={() => { selectItemHandler(index) }} key={index}>{option.name}</MenuItem>)
                )}
            </Menu>
        </ InputWrapper >
    )
}

export default InputSelect;
