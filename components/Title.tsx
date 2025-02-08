import {Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

function Title({text}: {text: string}): JSX.Element {
  return <Text style={styles.title}>{text}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'OpenSans-Regular',
  },
});
