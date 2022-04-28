import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/logos/green-peace-logo.png"
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const location = useLocation()
    const admin = location.pathname === '/admin';

    return (
        <>
            <Navbar className={admin ? 'd-none' : 'd-block'} bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Link to='/'><img style={{ width: '180px' }} src={logo} alt="" /></Link></Navbar.Brand>
                    <Nav className="ml-auto d-flex align-items-center">
                        <div className="header-links">
                            <ActiveLink to="/"></ActiveLink>
                            <ActiveLink to="/home">Home</ActiveLink>
                            <ActiveLink to="/donation">Dontation</ActiveLink>
                            <ActiveLink to="/events">Events</ActiveLink>
                        </div>
                        <div className="header-btn">
                            <ActiveLink to='/'>{user ? user.displayName : ''}</ActiveLink>
                            {
                                user ? (<ActiveLink className='btn btn-dark ms-4 text-white py-2' to='/admin'>Admin</ActiveLink>) : ''
                            }
                            <Link className='btn btn-primary ms-4 text-white py-2' to='/register'>Volunteer Register</Link>
                            {
                                user ? (<button onClick={logout} className='btn btn-primary ms-4 text-white py-2' >Signout</button>) : (<ActiveLink className='btn btn-primary ms-4 text-white py-2' to='/login'>Login</ActiveLink>)
                            }

                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;