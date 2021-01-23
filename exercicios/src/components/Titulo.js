import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default props => (
  <React.Fragment key="1">
    <Text style={Estilo.txtG}>{props.principal}</Text>
    <Text>{props.secundario}</Text>
  </React.Fragment>
)