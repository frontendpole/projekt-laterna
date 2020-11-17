import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Nav from '../Navigation/Nav';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import mainLogo from '../../assets/images/LOGO-03.png';
import desktopNavLogo from '../../assets/images/LOGO-1.png';
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