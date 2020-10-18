import React, {useState, useEffect} from 'react';

import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  
return (
  <>
  <Nav scrollNav={scrollNav}>
    <NavbarContainer>
      <NavLogo to='/'>
        trvlr
      </NavLogo>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to='about'>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='discover'>Discover</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='services'>Sevices</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='signup'>Sign Up</NavLinks>
        </NavItem>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
      </NavBtn>
    </NavbarContainer>
  </Nav>
</>
)
}

export default Navbar;