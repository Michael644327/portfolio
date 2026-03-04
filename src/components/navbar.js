import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { jsRoutes, mainNavConfig } from '../routes';
import { getRouterLinks } from '../utils/getRouteLinks';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function MainNavbar() {
    const getDropdownChildren = (item) => {
        if (item.children === 'js') {
            return jsRoutes.filter(route => route.meta?.showInMainNav).map(route => ({
                label: route.meta.label,
                path: `/jsdemos/${route.path}`,
                type: 'link',
            }));
        }
        return item.children || [];
    }
    return (
        <>
            <Navbar bg="dark" variant="blue" expand="lg" sticky='top'>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/portfolio/">
                        <img src="./img/mmm.jpg" className="align-middle me-1 img-fluid logo" alt="My Website" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="ms-auto">
                            {mainNavConfig.filter(item => item.showInNav)
                                .map((item, index) => {
                                    if (item.type === 'link') {
                                        return (
                                            <Nav.Link key={index} as={Link} to={item.path}>
                                                {item.label}
                                            </Nav.Link>
                                        );
                                    }
                                    if (item.type === 'dropdown') {
                                        const children = getDropdownChildren(item);
                                        return (
                                            <NavDropdown
                                                key={index}
                                                title={item.label}
                                                id={`nav-dropdown-${index}`}>
                                                {children.map((child, childIndex) => {
                                                    return (
                                                        <NavDropdown.Item
                                                            key={childIndex}
                                                            as={Link}
                                                            to={child.path}>
                                                            {child.label}
                                                        </NavDropdown.Item>
                                                    )
                                                })}
                                            </NavDropdown>
                                        );
                                    }
                                    if (item.type === 'external') {
                                        return (
                                            <Nav.Link
                                                key={index}
                                                href={item.href} target="_blank"
                                                rel="noopener noreferrer"
                                                className='nav-item'>
                                                {item.label}<span className='external-icon'>🔗</span>
                                            </Nav.Link>
                                        )

                                    }
                                    return null;
                                })}
                        </Nav>
                    </Navbar.Collapse>
                    {/* <div className="lc-block collapse navbar-collapse" id="myNavbar4">
                        <div lc-helper="shortcode" className="live-shortcode me-auto">
                            <ul id="menu-menu-1" className="navbar-nav">
                                <li><Link to="#">首頁</Link></li>
                                <li className='nav-item dropdown'><Link to="#">功能練習</Link>
                                    {getRouterLinks(fcRoutes, "/function")}
                                    <li><Link to="#">作品集</Link></li>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </Container>
            </Navbar>
        </>
    )
}
export default MainNavbar;