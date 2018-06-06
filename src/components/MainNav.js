import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default props =>
  <nav className="main-nav">
    <ul>
      <li><Link to="/">Search</Link></li>
      <li><NavLink to='/Art'>Art</NavLink></li>
      <li><NavLink to='/City'>City</NavLink></li>
      <li><NavLink to='/Birds'>Birds</NavLink></li>
    </ul>
  </nav>
