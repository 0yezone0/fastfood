import React, { useState } from 'react';
import LoginRegister from './LoginRegister';
import FastFoodMenu from './FastFoodMenu';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Changed to true

  return (
    <>
      {isAuthenticated ? (
        <FastFoodMenu />
      ) : (
        <LoginRegister onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </>
  );
};

export default App;
