import React from 'react';
import {View} from 'react-native';

import CompPadrao, { Comp2, Comp3 } from './components/Multi';
import Primeiro from'./components/Primeiro';

export default () => (
  <View>
    <CompPadrao />
    <Comp2 />
    <Comp3 />
    <Primeiro />
  </View>
)


