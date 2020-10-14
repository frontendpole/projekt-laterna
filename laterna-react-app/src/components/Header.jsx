import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import mainLogo from '../assets/images/LOGO-03.png';

const Header = () => {
  return (
    <header className="PageHeader">
      <NavLink to='/'><img src={mainLogo} alt="logo" /></NavLink>
      <Nav />
    </header>)
}

export default Header;