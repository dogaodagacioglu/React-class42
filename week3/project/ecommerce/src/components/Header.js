import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ title }) => {
  return (
    <div className='title-container'>
      <h1 className='title-container--title'>{title}</h1>
      <div className='nav'>
        <Link className='nav-link' to='/'>
          Products
        </Link>
        <Link className='nav-link' to='/favorites'>
          Favorites
        </Link>
      </div>
    </div>
  );
};