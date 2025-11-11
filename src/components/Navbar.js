import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${searchQuery}`); // you can handle this query in your Courses page
      setSearchQuery('');
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-brand">
        <Link to="/">LearnOnline</Link>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/courses" onClick={toggleMenu}>Courses</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/login" onClick={toggleMenu} className="login-btn">Login</Link>
        <Link to="/signup" onClick={toggleMenu} className="signup-btn">Sign Up</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>☰</div>

      <button onClick={toggleDarkMode} className="dark-mode-btn">
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
