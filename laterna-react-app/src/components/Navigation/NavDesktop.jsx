import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import NavListItem from './NavListItem';
import './NavDesktop.scss';
import { NavLink } from 'react-router-dom';
import lanterns from '../../data/lanterns.json';
import arrowDark from '../../assets/images/przy latarniach-55.png';
import arrowLight from '../../assets/images/przy latarniach-56.png';


const NavDesktop = ({ history }) => {

  const [isLanternListOpened, setIsLanternListOpened] = useState(false);

  const [isLanternsDark, setIsLanternsDark] = useState(false);


  const toggleLanternList = () => {
    setIsLanternListOpened(!isLanternListOpened);
    setIsLanternsDark(!isLanternsDark)
  }

  useEffect(() => {
    const unListen = history.listen(() => {
      setIsLanternListOpened(false);
      setIsLanternsDark(false);
    });

    return () => {
      unListen();
    }
  }, [])

  return (
    <>
      <nav className="NavDesktop">
        <ul className="NavDesktop--list">
          <NavListItem as="button" path='/oprojekcie' name='o projekcie' />

          <button onClick={toggleLanternList} className={classNames("showLanternListDesktop", { active: isLanternsDark })}>
            <img className="arrowDesktop" src={isLanternListOpened ? arrowLight : arrowDark} alt="strzałka rozwijająca listę latarni" />
            <p>latarnie</p>
          </button>
          <NavListItem as="button" path='/paszport' name='paszport' />
          <NavListItem as="button" path='/sklep' name='sklep' />
          <NavListItem as="button" path='/kontakt' name='kontakt' />
        </ul>

      </nav>
      <ul className={classNames('NavDesktop--lanterns', { active: isLanternListOpened })}>
        <div className="NavDesktop--lanterns--wrapper">
          {lanterns.map(lantern => (
            <NavLink as="button" to={`/latarnie/${lantern.id}`}>{lantern.name}</NavLink>
          ))}
        </div>
      </ul>
    </>
  )
}

export default withRouter(NavDesktop);