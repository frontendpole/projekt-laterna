import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavListItem.scss';

const NavListItem = ({ name, path }) => {

  return (
    <li className="Navigation--List--NavListItem">
      <NavLink exact to={path}>{name}</NavLink>
    </li>
  )
}

export default NavListItem;