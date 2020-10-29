import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import NavListItem from './NavListItem';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../../assets/images/MENU.png'
import closeIcon from '../../assets/images/X.png';
import navLogo from '../../assets/images/LOGO.png';
import lanterns from '../../../data/lanterns.json';
import showLanternListImg from '../../assets/images/przy latarniach.png';


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
    });

    return () => {
      unListen();
    }
  }, [])

  return (
    <>
      <button type='button' onClick={toggleMenu} id='hamburger'>
        <img src={hamburgerIcon} style={{
          height: 20
        }} />
      </button>

      <nav className={classNames('Navigation', { active: isMenuActive })}>
        <div className="Navigation--header">
          <NavLink to='/' as="button">
            <img src={navLogo} className="Navigation--header--logo" />
          </NavLink>

          <button type='button' onClick={toggleMenu} id='closeMenu'>
            <img src={closeIcon} className="Navigation--active--header--icon" />
          </button>
        </div>
        <ul className="Navigation--list">
          <NavListItem as="button" path='/oprojekcie' name='o projekcie' />

          <button onClick={toggleLanternList} id="showLanternList">
            <img className={classNames('arrow', { rotate: isArrowRotated })} src={showLanternListImg} alt="strzałka rozwijająca listę latarni" style={{ width: 6.11, height: 12.33 }} />
            <p>latarnie</p>
          </button>

          <ul className={classNames('Navigation--list--lanterns', { active: isLanternListOpened })}>
            {lanterns.map(lantern => (
              <NavLink as="button" to={`/latarnie/${lantern.id}`}>{lantern.name}</NavLink>
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