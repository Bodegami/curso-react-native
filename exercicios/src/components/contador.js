import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
  const [numero, setNumero] = useState(inicial)

  const inc = () => setNumero(numero + passo)
  const dec = () => setNumero(numero - passo)

  return (
    <>
      <Text style={Estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  )
}

// export default props => {
//   const [numero, setNumero] = useState(props.inicial)

//   const inc = () => setNumero(numero + props.passo)
//   const dec = () => setNumero(numero - props.passo)

//   return (
//     <>
//       <Text style={Estilo.txtG}>{numero}</Text>
//       <Button title="+" onPress={inc} />
//       <Button title="-" onPress={dec} />
//     </>
//   )
// }