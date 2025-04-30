import React, { useState } from 'react';
import LoginRegister from './LoginRegister';
import FastFoodMenu from './FastFoodMenu';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
