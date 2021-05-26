import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import publicRoutes from './PublicRoutes'
import authRoutes from './AuthRoutes'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        {publicRoutes.map((r, id) => (
          <Stack.Screen key={id} {...r} />
        ))}
        {authRoutes.map((r, id) => (
          <Stack.Screen key={id} {...r} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
