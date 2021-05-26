import React, { useState, memo } from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({ label, ...otherProps }) => {
  const [isFocused, setFocused] = useState(false)
  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  return (
    <View
      style={{
        elevation: 5,
        borderWidth: !isFocused ? 1 : 2,
        borderRadius: 5,
        margin: 5,
        marginHorizontal: 25,
        padding: 5,
        borderColor: !isFocused ? '#fff' : '#aaa',
        backgroundColor: '#fff',
        height: 60,
      }}>
      <View
        style={{
          paddingTop: 18,
        }}>
        <Text
          style={{
            position: 'absolute',
            left: 0,
            top: !isFocused ? 18 : 0,
            fontSize: !isFocused ? 20 : 16,
            color: !isFocused ? '#aaa' : '#000',
          }}>
          {label}
        </Text>
        <TextInput
          style={{
            height: 26,
            fontSize: 16,
            color: '#000',
            borderBottomColor: '#555',
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...otherProps}
        />
      </View>
    </View>
  )
}

export default memo(Input)
