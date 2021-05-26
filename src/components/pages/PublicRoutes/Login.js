import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../atoms'
import { LoginForm } from '../../molecules'

export default () => {
  const [infos, setInfos] = useState({
    email: '',
    password: '',
  })

  const navigation = useNavigation()

  const handlerForm = (name, value) => setInfos({ ...infos, [name]: value })
  const handlePage = () => navigation.navigate('Home')

  return (
    <Container
      content={
        <LoginForm handlerForm={handlerForm} login={handlePage} infos={infos} />
      }
    />
  )
}
