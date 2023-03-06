import * as React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar  from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Home from './components/Home';
import Contact from './components/Contact';
import Punnett from './components/Punnett';
import signup from './components/signup';
import signin from './components/signin';
import Square from './components/Square';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar />
      <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Punnett">Punnett</Link></li>
          <li><Link to="/signin">Sign in</Link> </li>
          <li><Link to="/signup">Sign Up</Link> </li>
          <li><Link to="/Square">Square</Link></li>
        </ul>
      </nav>
   <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Punnett" element={<Punnett />} />
    <Route path="/signup" element={<signup />} />
    <Route path="/signin" element={<signin />} />
    <Route path='/Square' element={<Square />} />
   </Routes>
   </>
  );
}

export default App;