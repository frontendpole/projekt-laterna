import React, { useState } from 'react';
import NavListItem from './NavListItem';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../assets/images/MENU.png'
import closeIcon from '../assets/images/X.png';
import navLogo from '../assets/images/LOGO.png';


const Nav = () => {

  const [navClass, setNavClass] = useState('Navigation');

  return (
    <>
      <button type='button' onClick={() => setNavClass('Navigation--active')} id='hamburger'>
        <img src={hamburgerIcon} style={{
          height: 20
        }} />
      </button>
      <nav className={navClass}>
        <div className="Navigation--active--header">
          <button onClick={() => setNavClass('Navigation')}><NavLink to='/'><img src={navLogo} className="Navigation--active--header--logo" /></NavLink></button>
          <button type='button' onClick={() => setNavClass('Navigation')} id='closeMenu'>
            <img src={closeIcon} className="Navigation--active--header--icon" />
          </button>
        </div>
        <ul className="Navigation--active--list">
          <button onClick={() => setNavClass('Navigation')}>
            <NavListItem path='/oprojekcie' name='o projekcie' />
          </button>
          <button onClick={() => setNavClass('Navigation')}>
            <NavListItem path='/latarnie' name='latarnie' />
          </button>
          <div className="lantern-list">
            <button onClick={() => setNavClass('Navigation')}>
              <NavListItem path='/latarnia1' name='latarnia1' />
            </button>
          </div>
          <button onClick={() => setNavClass('Navigation')}>
            <NavListItem path='/paszport' name='paszport' />
          </button>
          <button onClick={() => setNavClass('Navigation')}>
            <NavListItem path='/sklep' name='sklep' />
          </button>
          <button onClick={() => setNavClass('Navigation')}>
            <NavListItem path='/kontakt' name='kontakt' />
          </button>
        </ul>
      </nav>
    </>
  )
}

export default Nav;