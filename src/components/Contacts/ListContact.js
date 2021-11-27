import React from 'react';
import ListContactStyled from './ListContact.styled';
import { FaTelegramPlane, FaFacebookF, FaTwitter } from 'react-icons/fa';

const ListContact = (props) => {
    return (
        <ListContactStyled direction={props.direction}>
            <a href="#" className="contact-item">
                <FaTelegramPlane />
            </a>
            <a href="#" className="contact-item">
                <FaFacebookF />
            </a>
            <a href="#" className="contact-item">
                <FaTwitter />
            </a>
        </ListContactStyled>
    )
}

export default ListContact
