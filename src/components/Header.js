import React from 'react';

function Header({ setPage }) {
  return (
    <header>
      <h1>Abhishek Verma Portfolio</h1>
      <nav>
        <a onClick={() => setPage('home')}>Home</a>
        <a onClick={() => setPage('about')}>About</a>
        <a onClick={() => setPage('projects')}>Projects</a>
        <a onClick={() => setPage('contact')}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
