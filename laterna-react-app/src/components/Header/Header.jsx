import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Nav from '../Navigation/Nav';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import mainLogo from '../../assets/images/LOGO-03.png';
import desktopNavLogo from '../../assets/images/LOGO-1.png';
import classNames from 'classnames';
import NavDesktop from '../Navigation/NavDesktop';

const Header = () => {

  const [isHeaderSmall, setIsHeaderSmall] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

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
            src={isDesktopOrLaptop ? desktopNavLogo : mainLogo}
            className={classNames("PageHeader--logo", { mini: isHeaderSmall })}
            alt="logo Projektu Laterna" />
        </NavLink>

        {isTabletOrMobile &&
          <Nav />
        }

        {isDesktopOrLaptop &&
          <NavDesktop />}
      </div>
    </header>)
}

export default Header;