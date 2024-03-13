import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import '../styles/elements/Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <LanguageSelector />
        <Link to="/">Index</Link>
        <Link to="/manage-account">Manage Account</Link>
      </nav>
    </header>
  );
}

export default Header;