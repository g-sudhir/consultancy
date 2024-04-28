// App.jsx

import React, { useState } from 'react';
import Admin from './Pages/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';
import { OrdersProvider } from './Context/Allcontext';
import Login from './Pages/Login/Login'; // Import the Login component
import { Navigate } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <OrdersProvider>
        <Navbar />
        <Admin/>
      </OrdersProvider>
    </div>
  );
};

export default App;