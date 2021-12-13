import styled from "styled-components";
import logo from '../../../asset/logo/logo-top.png';

import React from 'react'
const Logo = ({ className }) => {
    return (
        <div className={className}>
            <img src={logo} alt="" />
        </div>
    )
}

export default Logo;
