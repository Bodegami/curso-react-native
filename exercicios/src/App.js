import React from 'react';
import {View, StyleSheet} from 'react-native';

import Aleatorio from './components/Aleatorios'
import MinMax from './components/MinMax';
import CompPadrao, { Comp2, Comp3 } from './components/Multi';
import Primeiro from'./components/Primeiro';

export default () => (
  <View style={style.App}>
    <Aleatorio min={1} max={60}/>
    {/* <MinMax min={3} max={20}/>
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


