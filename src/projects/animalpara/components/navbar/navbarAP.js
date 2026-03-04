import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
// import routesAP from '../../../../routes/routesAP';
import { apRoutes } from '../../../../routes/AP';

import "../styles/navbarAP.css"
import LoginModal from '../animalpara/LoginModal';
import ShoppingCar from '../animalpara/ShoppingCar';

const NavbarAP = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(false);
    const [loginUser, setLoginUser] = useState(null);
    // const [shoppingCart, setShoppingCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // const [shoppingCart, setShoppingCart] = useState({
    //     userId: "",
    //     items: [],
    //     totalAmount: 0,
    //     lastUpdated: ""
    //   });

    const [loginModal, setLoginModal] = useState(false);
    const handleLoginlOpen = () => setLoginModal(true);
    const handleLoginClose = () => setLoginModal(false);

    const [shoppingModal, setShoppingModal] = useState(false);
    const handleShoppingOpen = () => setShoppingModal(true);
    const handleShoppingClose = () => setShoppingModal(false);

    return (
        <>
            <Navbar bg="primary" variant="blue" expand="lg" sticky='top'>
                <Container fluid>
                    <Link className="navbar-brand" to="/">回作品集</Link>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="ms-auto">
                            {apRoutes.filter(item => item.showInNav)
                                .map((item, index) => {
                                    return (
                                        <Nav.Link key={index} as={Link} to={item.path}>
                                            {item.meta.label}
                                        </Nav.Link>
                                    );
                                })}
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="position-relative">
                                    <button type="button" className="btn btn-black text-white" onClick={handleLoginlOpen}>
                                        <i className="bi bi-person-circle"></i>
                                    </button>
                                </li>
                                {isLogin ? (
                                    <li className="position-relative">
                                        <button type="button" className="btn btn-primary">
                                            <i className="bi bi-chat-left-dots-fill"></i>
                                        </button>
                                        <span className="bg-danger text-white position-absolute noticeicon px-2 rounded-circle">3</span>
                                    </li>
                                ) : ''}
                                <li className="position-relative">
                                    <button type="button" className="btn btn-black text-white" onClick={handleShoppingOpen}>
                                        <i className="bi bi-cart2"></i>
                                    </button>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal
                isLogin={isLogin} setIsLogin={setIsLogin}
                loginUser={loginUser} setLoginUser={setLoginUser}
                show={loginModal} handleClose={handleLoginClose} />
            <ShoppingCar
                isLogin={isLogin} loginUser={loginUser}
                cartItems={cartItems}
                setCartItems={setCartItems}
                show={shoppingModal} handleClose={handleShoppingClose} />
        </>
    );
}

export default NavbarAP;