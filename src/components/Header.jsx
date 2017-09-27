import React from "react";
import { Link } from 'react-router-dom';
import styles from '../styles/Header.css';

function Header(props) {
  return (
    <div className = { styles.header }>
      <h1>Help Queue!</h1>
      <Link to='/'>Home</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;
