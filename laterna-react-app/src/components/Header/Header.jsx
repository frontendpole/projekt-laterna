import React, { useState } from 'react';
import Nav from '../Navigation/Nav';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import mainLogo from './images/logo bez O mobile.png';
import desktopNavLogo from './images/logo bez O.png';
import desktopO from './images/samo O.png';
import mobileO from './images/samo O mobile.png';
import classNames from 'classnames';
import NavDesktop from '../Navigation/NavDesktop';
import useLayoutQueries from '../../functions/useLayoutQueries';

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
        <NavLink to='/'>
          <img
            src={useLayoutQueries().isDesktopOrLaptop ? desktopNavLogo : mainLogo}
            className={classNames("PageHeader--logo", { mini: isHeaderSmall })}
            alt="logo Projektu Laterna" />
          <img className={classNames("PageHeader--O", { mini: isHeaderSmall })} src={useLayoutQueries().isDesktopOrLaptop ? desktopO : mobileO} alt="animowana litera O w logo Projektu Laterna" />
        </NavLink>

        {useLayoutQueries().isTabletOrMobile &&
          <Nav />
        }

        {useLayoutQueries().isDesktopOrLaptop &&
          <NavDesktop />}
      </div>
    </header>)
}

export default Header;