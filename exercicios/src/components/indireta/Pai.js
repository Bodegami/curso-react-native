import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho';

export default props => {
  const [num, setNum] = useState(0)
  const [texto, setTexto] = useState("")
    
    function exibirValor(numero, texto) {
      setNum(numero)
      setTexto(texto)
    }

    return (
        <>
          <Text style={Estilo.txtG}>
            {texto}{num}
          </Text>
          <Filho 
          min={1} 
          max={60} 
          funcao={exibirValor}
          />
       </> 
    )
}