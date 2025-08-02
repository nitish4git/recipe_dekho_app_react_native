import { View, Text } from 'react-native'
import React from 'react'
import TabNavigator from './TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home'
import RecipeDetails from '../screens/Recipe/RecipeDetails'
import Recipe from '../screens/Recipe/Recipe'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='MainTabs' component={TabNavigator}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Recipe" component={Recipe}/>
        <Stack.Screen name="RecipeDetails" component={RecipeDetails}/>
    </Stack.Navigator>
  )
}

export default StackNavigator