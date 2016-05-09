import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/todos">Todos</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    {children}
  </div>
);

export default App;
