import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Button } from '../../atoms'

export default () => {
  const navigation = useNavigation()
  const handlePage = () => navigation.navigate('Login')

  return (
    <Container
      header={
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

            flexDirection: 'row',
          }}>
          <Text style={{ fontSize: 26, color: '#2A3AAD', marginRight: 15 }}>
            Bem Vindo
          </Text>
          <Text
            style={{
              backgroundColor: '#BCC1E6',
              fontSize: 26,
              color: '#2A3AAD',
              width: 50,
              height: 50,
              textAlign: 'center',
              textAlignVertical: 'center',
              borderRadius: 60,
              borderWidth: 1,
            }}>
            A
          </Text>
        </View>
      }
      content={
        <ScrollView>
          {[0, 1, 3, 4].map((i) => (
            <View
              key={i}
              style={{
                padding: 15,
                borderRadius: 15,
                elevation: 5,
                width: 350,
                height: 320,
                backgroundColor: '#fff',
                alignSelf: 'center',
                margin: 5,
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Titulo</Text>
              <Text style={{ textAlign: 'justify' }}>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </Text>
            </View>
          ))}
        </ScrollView>
      }
      footer={<Button label="Voltar" onPress={handlePage} />}
    />
  )
}
