import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

function PrimaryButton({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}): React.ReactElement {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#72069c'}}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
