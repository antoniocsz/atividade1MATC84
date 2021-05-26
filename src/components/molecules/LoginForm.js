import React, { memo } from 'react'
import { View } from 'react-native'

import { Input, Button } from '../atoms'

const LoginForm = ({ handlerForm, login, infos }) => (
  <View>
    <Input
      label="E-mail"
      onChangeText={(v) => handlerForm('email', v)}
      value={infos.email}
    />
    <Input
      label="Password"
      secureTextEntry
      onChangeText={(v) => handlerForm('password', v)}
      value={infos.password}
    />

    <Button label="Entrar" onPress={login} />
  </View>
)

export default memo(LoginForm)
