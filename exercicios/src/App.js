import React from 'react';
import {View, StyleSheet} from 'react-native';

import CompPadrao, { Comp2, Comp3 } from './components/Multi';
import Primeiro from'./components/Primeiro';

export default () => (
  <View style={style.App}>
    <CompPadrao />
    <Comp2 />
    <Comp3 />
    <Primeiro />
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})


