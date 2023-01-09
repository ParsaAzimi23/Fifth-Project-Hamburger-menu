import React from 'react';
import styled from 'styled-components'

const Ul = styled.ul`
    list-style-type:none;
    display: flex;
    justify-content:right;
    margin: 20px 50px;
    z-index: 18;
    li{
        padding:18px 30px;
    }
`
const Navbar = () => {
    return (
        <Ul>
            <li>Home</li>
            <li>Support</li>
            <li>Github</li>
            <li>Map</li>
        </Ul>
    );
};

export default Navbar;