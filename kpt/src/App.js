import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/Sign_Up';
import React ,{ useEffect, useState } from 'react';


function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=> {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', true);
  }
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
    <Route path='login' element={isLoggedIn ? <Navigate to = '/' /> : <Login handleLogin={handleLogin} /> } />
    <Route path='signup' element={isLoggedIn ? <Navigate to = '/'/> : <SignUp />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
