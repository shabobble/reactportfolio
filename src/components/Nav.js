import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';

const styles = {
    navbar: {
        backgroundColor: '#34568b'
    },
    links: {
        textDecoration: 'none'
    },
    list: {
        padding: '10px'
    }
}

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={styles.navbar} light expand="md" className="sticky-top">
            <NavbarBrand className="ms-3 ps-4 pt-3">Patrick Sullivan</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav style={styles.list} className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="#about">
                            ABOUT ME
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#portfolio">
                            PROJECTS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">
                            CONTACT
                        </NavLink>
                    </NavItem>
                </Nav>  
            </Collapse>
        </Navbar>
    )
};

export default Navigation;