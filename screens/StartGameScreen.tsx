import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import Instruction from '../components/Instruction';

function StartGameScreen({
  onPickNumber,
}: {
  onPickNumber: (number: number) => void;
}): React.ReactElement {
  const [enteredNumber, setEnteredNumber] = React.useState('');
  const {width, height} = useWindowDimensions();
  function inputHander(text: string) {
    setEnteredNumber(text);
  }
  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber, 10);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert('Invalid Input', 'Please enter a number between 1 and 99', [
        {text: 'OK', onPress: resetInputHandler, style: 'cancel'},
      ]);
      return;
    }
    console.log('Choosen number is', choosenNumber);
    onPickNumber(choosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  const marginTopDistance = height < 300 ? 30 : 100;

  return (
    <View style={[styles.root, {marginTop: marginTopDistance}]}>
      <Title text="Guess the Number" />
      <Card>
        <Instruction text="Enter a number" />
        <TextInput
          style={styles.textInput}
          placeholder=""
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={inputHander}
        />
        <View style={styles.buttonStyle}>
          <View style={styles.flex1}>
            <PrimaryButton text="Reset" onPress={resetInputHandler} />
          </View>
          <View style={styles.flex1}>
            <PrimaryButton text="Confirm" onPress={confirmInputHandler} />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 24,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
});
