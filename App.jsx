import { View, Text, StatusBar, LogBox } from 'react-native'
import React from 'react'
import AppProvider from './src/provider/AppProvider'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <AppProvider>
          <StatusBar  barStyle={'dark-content'} />
      <AppNavigator/>
    </AppProvider>
  )
}

export default App