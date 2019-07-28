import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom'
import RouteNavItem from './RouteNavItem';

import 'bootstrap/dist/css/bootstrap.css';
import './SiteNavbar.css'

const SiteNavbar = () => {
  const authenticated = useSelector(state => state.auth.authenticated, shallowEqual);

  return (
    <Navbar color="dark">
      <Nav>
        <NavbarBrand tag={Link} to="/">
          Home
        </NavbarBrand>
      </Nav>
        <Nav className="ml-auto">
          { authenticated
            ? <RouteNavItem href="/logout">Logout</RouteNavItem>
            : [
                <RouteNavItem key={1} href="/signup">Signup</RouteNavItem>,
                <RouteNavItem key={2} href="/login">Login</RouteNavItem>
              ]
          }
                                              
        </Nav>
    </Navbar>
  );
}

export default SiteNavbar
