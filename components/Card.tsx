import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

function Card({children}: {children: React.ReactNode}): React.ReactElement {
  return <View style={styles.container}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
