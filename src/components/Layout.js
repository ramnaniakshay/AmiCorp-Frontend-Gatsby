import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import { navigate } from 'gatsby';
import axios from 'axios';

function Layout({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const jwtToken = localStorage.getItem('jwt');
      if (!jwtToken) {
        navigate('/login');
      } else {
        try {
          const response = await axios.get('http://localhost:1337/api/users/me', {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          });
          setAuthenticated(true);
        } catch (error) {
          console.error('Token validation failed:', error);
          navigate('/login');
        }
      }
    };

    checkAuthentication();
  }, []);

  return (
    <div>
      <Navbar />
      {authenticated && children}
      <Hero />
      <footer>Copyright of something 2024</footer>
    </div>
  );
}

export default Layout;
