import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavListItem.scss';

const NavListItem = ({ name, path }) => {

  const menu = [
    { name: 'o projekcie', path: '/oprojekcie' },
    { name: 'latarnie', path: '/latarnie' },
    { name: 'paszport', path: '/paszport' },
    { name: 'sklep', path: '/sklep' },
    { name: 'kontakt', path: '/kontakt' }
  ]

  return (
    <div className="Navigation--List--NavListItem">
      <NavLink exact to={path}>{name}</NavLink>



      {/* {
        menu.map(item => (
          <li key={item.name}>
            <NavLink exact to={item.path}>{item.name}</NavLink>
          </li>
        ))
      } */}
    </div>
  )
}

export default NavListItem;