//import liraries
import React, { useState } from 'react'
import { View, Text } from 'react-native'

// Components
import styles from './src/styles/ManipulandoStyles'
import { Input, Button, Logo } from './src/components'

// create a component
const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  const isDisabled = email.length > 0 && password.length > 0 ? false : true
  const pressed = () => setIsLogged(!isLogged)

  const loggedContent = isLogged ? (
    <Text style={styles.buttonText}>Usuário Logado com sucesso!</Text>
  ) : (
    <>
      <Input
        placeholder="Informe seu e-mail"
        defaultValue={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Digite sua senha"
        defaultValue={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
    </>
  )

  return (
    <View style={styles.container}>
      <Logo source={require('./src/image/reactnative.png')} />
      {loggedContent}
      <Button onPress={pressed} title="Acessar" disabled={isDisabled} />
    </View>
  )
}

//make this component available to the app
export default App
