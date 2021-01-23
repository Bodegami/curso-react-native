import React from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    
    return (
        <View style={style.Botoes}>
          <Button title="-" onPress={props.dec}/>
          <Text> OU </Text>
          <Button title="+" onPress={props.inc}/>
        </View>
    )
}

const style = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    backgroundColor: '#FF0'
  }
})