import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = ({ label, ...otherProps }) => {
  return (
    <TouchableOpacity
      style={{
        elevation: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor: '#fff',
        margin: 15,
        marginHorizontal: 25,
        width: 250,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      {...otherProps}>
      <Text style={{ margin: 0, padding: 0, fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default memo(Button)
