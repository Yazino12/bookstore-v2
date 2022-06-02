import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav>
      <div className="left">
        <h1>Bookstore CMS</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeclassname="active-link"
                exact="true"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <FaUserCircle
        style={{
          color: 'var(--azure)',
          width: '2.183em',
          height: '2.183em',
        }}
      />
    </nav>
  );
}

export default Navbar;
