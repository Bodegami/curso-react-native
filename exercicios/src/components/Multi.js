import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default function Comp1() {
  return <Text style={Estilo.fontG}>Comp #01 Oficial</Text>
}

export function Comp2() {
  return <Text style={Estilo.fontG}>Comp #02</Text>
}

export function Comp3() {
  return <Text style={Estilo.fontG}>Comp #03</Text>
}
