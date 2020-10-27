import React, { useState } from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import mainLogo from '../assets/images/LOGO-03.png';
import classNames from 'classnames';


const Header = () => {

  const [isHeaderSmall, setIsHeaderSmall] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 97) {
      setIsHeaderSmall(true)
    } else {
      setIsHeaderSmall(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <header className={classNames("PageHeader", { small: isHeaderSmall })}>
      <div className="PageHeader--wrapper">
        <NavLink to='/'><img src={mainLogo} className="PageHeader--logo" alt="logo Projektu Laterna" /></NavLink>
        <Nav />
      </div>
    </header>)
}

export default Header;