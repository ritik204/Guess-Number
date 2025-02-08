import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import {Text} from 'react-native';

function Instruction({
  text,
  style,
}: {
  text: string;
  style?: any;
}): React.ReactElement {
  return <Text style={[styles.instructionText, style]}>{text}</Text>;
}

export default Instruction;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
    fontFamily: 'OpenSans-Regular',
  },
});
