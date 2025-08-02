import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../navigation/NavigationServices';
import {Provider} from "react-redux"
import { store } from '../redux/Store/recipeStore';

const AppProvider = ({children}) => {
  return (
    <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      {children}
    </NavigationContainer>
    </Provider>
  )
}

export default AppProvider