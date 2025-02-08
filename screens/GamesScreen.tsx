import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import Instruction from '../components/Instruction';
import GuessLogItem from '../components/GuessLogItem';

function generateRandomNumber(
  min: number,
  max: number,
  exclude: number,
): number {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return random;
  }
}

let minBoundary = 1;
let maxBoundary = 99;

function GameScreen({
  userNumber,
  onGameOver,
}: {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}): JSX.Element {
  const initialGuess = generateRandomNumber(1, 99, userNumber);
  const [currentNumber, setCurrentNumber] = React.useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentNumber === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentNumber, userNumber, onGameOver, guessRounds.length]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'up' && currentNumber > userNumber) ||
      (direction === 'down' && currentNumber < userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'up') {
      minBoundary = currentNumber + 1;
    } else {
      maxBoundary = currentNumber - 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentNumber,
    );
    setCurrentNumber(newRandomNumber);
    setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
  }
  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" />
      <NumberContainer number={currentNumber} />
      <Card>
        <Instruction text="Higher or lower?" style={styles.instructionStyle} />
        <View style={styles.buttonStyle}>
          <View style={styles.flex1}>
            <PrimaryButton
              text="-"
              onPress={nextGuessHandler.bind(this, 'down')}
            />
          </View>
          <View style={styles.flex1}>
            <PrimaryButton text="+" onPress={() => nextGuessHandler('up')} />
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonStyle: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  instructionStyle: {
    marginBottom: 24,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
