import React from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Header = ({ children }) => <View style={{ flex: 1 }}>{children}</View>

const Content = ({ children }) => <View style={{ flex: 4 }}>{children}</View>

const Container = ({ header, footer, content }) => (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <LinearGradient
      // Background Linear Gradient
      colors={['#DAF7A6', '#FFC300', '#FF5733', '#C70039']}
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Header>{footer}</Header>
    </LinearGradient>
  </ScrollView>
)

export default Container
