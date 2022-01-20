import React from 'react';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Container, Wrapper, Left, Language, Center, Right, Logo, MenuItem} from './navbar-styling';


function Navbar() {
    return (

    <Container>
        <Wrapper>
            <Left>
                <Language>ES</Language>
            </Left>
            <Center>
                <Logo>MÜNCH</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <AiOutlineShoppingCart />
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
    );
}

export default Navbar;
