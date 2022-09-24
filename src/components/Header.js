import {Navbar, NavbarBrand, Container} from "reactstrap";
import NucampLogo from '../app/assets/img/logo.png';
import React from "react";

const Header = () => {
    /*
    Note - Added a container wrapping the NavbarBrand. I also added a
    container on CampsitesList.js due to horizontal scrolling and
    the content being shifted to the left.
     */
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <Container>
                <NavbarBrand href='/'>
                    <img src={NucampLogo} alt="nucamp logo"/>
                </NavbarBrand>
            </Container>

        </Navbar>
    )
};

export default Header;