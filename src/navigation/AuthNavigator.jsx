import React from 'react'
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator