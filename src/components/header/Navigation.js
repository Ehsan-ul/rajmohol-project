import React from 'react';
import { Navbar, Button, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse  } from 'reactstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar dark color='dark'>
        <div className='container'>
          <NavbarBrand href='/'>Rajmohol Restaurent</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
