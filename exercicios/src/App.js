import React from 'react';
import {View, StyleSheet} from 'react-native';

// import Aleatorio from './components/Aleatorios'
// import MinMax from './components/MinMax';
// import CompPadrao, { Comp2, Comp3 } from './components/Multi';
// import Primeiro from'./components/Primeiro';
// import Titulo from './components/Titulo';
//import Botao from './components/botao';
//import Contador from './components/contador';
//import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'



export default () => (
  <View style={style.App}>
    <ContadorV2 />
    {/* 
    <Pai />
    <Pai />
    <Contador inicial={100} passo={13}/>
    <Contador />
    <Botao />
    <Titulo  principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <MinMax min={3} max={20}/>
    <MinMax min={1} max={94}/>
    <CompPadrao />
    <Comp2 />
    <Comp3 />
    <Primeiro /> */}
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})


