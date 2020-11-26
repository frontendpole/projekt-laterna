import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import NavListItem from './NavListItem';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from './images/MENU.png'
import closeIcon from './images/X.png';
import navLogo from './images/LOGO.png';
import lanterns from '../../data/lanterns.json';
import showLanternListImg from './images/przy latarniach.png';


const Nav = ({ history }) => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const [isLanternListOpened, setIsLanternListOpened] = useState(false);
  const toggleLanternList = () => {
    setIsLanternListOpened(!isLanternListOpened);
    setIsArrowRotated(!isArrowRotated)
  }

  useEffect(() => {
    const unListen = history.listen(() => {
      setIsMenuActive(false);
      window.scrollTo(0, 0);
    });

    return () => {
      unListen();
    }
  }, [])

  return (
    <>
      <button type='button' onClick={toggleMenu} id='hamburger'>
        <img alt="ikona hamburger menu" src={hamburgerIcon} style={{
          height: 20
        }} />
      </button>

      <nav className={classNames('Navigation', { active: isMenuActive })}>
        <div className="Navigation--header">
          <NavLink to='/' as="button">
            <img alt="logo Projektu Laterna" src={navLogo} className="Navigation--header--logo" />
          </NavLink>

          <button type='button' onClick={toggleMenu} id='closeMenu'>
            <img alt="ikona X do zamknięcia menu" src={closeIcon} className="Navigation--active--header--icon" />
          </button>
        </div>
        <ul className="Navigation--list">
          <NavListItem as="button" path='/o-projekcie' name='o projekcie' />

          <button onClick={toggleLanternList} id="showLanternList">
            <img
              className={classNames('arrow', { rotate: isArrowRotated })}
              src={showLanternListImg} alt="strzałka rozwijająca listę latarni"
              style={{ width: 6.11, height: 12.33 }} />
            <p>latarnie</p>
          </button>

          <ul className={classNames('Navigation--list--lanterns', { active: isLanternListOpened })}>
            {lanterns.map(lantern => (
              <NavLink key={lantern.id} as="button" to={`/latarnie/${lantern.id}/${lantern.url}`}>{lantern.name}</NavLink>
            ))}
          </ul>
          <NavListItem as="button" path='/paszport' name='paszport' />
          <NavListItem as="button" path='/sklep' name='sklep' />
          <NavListItem as="button" path='/kontakt' name='kontakt' />
        </ul>
      </nav>
    </>
  )
}

export default withRouter(Nav);