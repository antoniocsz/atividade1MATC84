import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../styles/ManipulandoStyles'

const Button = ({ title, onPress, disabled }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

export default Button
