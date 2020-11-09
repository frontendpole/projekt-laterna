import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavListItem.scss';

const NavListItem = ({ name, path }) => {

  const menu = [
    { name: 'o projekcie', path: '/projekt-laterna/oprojekcie' },
    { name: 'latarnie', path: '/projekt-laterna/latarnie' },
    { name: 'paszport', path: '/projekt-laterna/paszport' },
    { name: 'sklep', path: '/projekt-laterna/sklep' },
    { name: 'kontakt', path: '/projekt-laterna/kontakt' }
  ]

  return (
    <li className="Navigation--List--NavListItem">
      <NavLink exact to={path}>{name}</NavLink>
    </li>
  )
}

export default NavListItem;