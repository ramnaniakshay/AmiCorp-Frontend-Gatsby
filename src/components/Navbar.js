import React from 'react';
import { Link, navigate } from 'gatsby';

function Navbar() {
  const handleLogout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem('jwt');
    // Redirect to login page
    navigate('/login');
  };

  const jwtToken = localStorage.getItem('jwt');

  return (
    <div style={{ textAlign: 'center', fontSize: '20px', backgroundColor: 'yellow', color: 'white', textDecoration: 'none' }}>
      <Link to='/'>Home &nbsp;&nbsp;|&nbsp;&nbsp;</Link>
      <Link to='/project'>Projects &nbsp;&nbsp;|&nbsp;&nbsp;</Link>
      <Link to='/about'>About &nbsp;&nbsp;|&nbsp;&nbsp;</Link>
      <Link to='/service'>Service &nbsp;&nbsp;|&nbsp;&nbsp;</Link>
      {!jwtToken && (
        <>
          <Link to='/login'>Login &nbsp;&nbsp;|&nbsp;&nbsp;</Link>
          <Link to='/signup'>Signup </Link>
        </>
      )}
      {jwtToken && (
        <>
          <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleLogout}>
            Logout
          </span>
        </>
      )}
    </div>
  );
}

export default Navbar;
