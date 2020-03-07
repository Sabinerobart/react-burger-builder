import React from 'react';
import './Logo.css';
import logo from '../../assets/images/burger-logo.png';

const Logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={logo} alt="burger" />
  </div>
);

export default Logo;