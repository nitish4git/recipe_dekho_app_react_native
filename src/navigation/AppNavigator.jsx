import React, { useState } from 'react';
import StackNavigator from './StackNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn ? <StackNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
