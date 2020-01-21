import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated, logout, user} = authContext;
  
  const onLogout = () => {
    logout();
  }
  const authLinks = (
    <>
    <Link to="/reviews" className="item"> Recent Reviews</Link>
    <span className="item">Signed in as {user && user.name}</span>
    <span className="item">
      <a onClick={onLogout} href="#!">
        Sign Out
      </a>
    </span>
    </>
  )
  const guestLinks = (
    <>
    <Link to="/register" className="item">Sign Up</Link>
    <Link to="/login" className="item">Login</Link>
    </>
  )
  return (
    <div className="ui menu">
      <div className="left menu">
        <Link to="/" style={{color:'black'}}><h2>
          <i className="book icon"/> Book App 
          </h2>
        </Link>
      </div>
    <div className="right menu">
      {isAuthenticated ? authLinks : guestLinks}
  </div>
    </div>
  )
}

export default Navbar;