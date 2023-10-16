import React from 'react';
import './Header.css';
import { faker } from '@faker-js/faker';

function Header() {
  const randomImage = faker.image.urlPicsumPhotos();

  return (
    <div className="header">
      <img src={randomImage} alt="Staff" />
      <h2 className="header-title">Featured Articles</h2>
    </div>
  );
}

export default Header;
