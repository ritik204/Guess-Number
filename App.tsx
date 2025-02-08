/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import GamesScreen from './screens/GamesScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import {useCustomFonts} from './hooks/useCustomFonts';

function App(): React.JSX.Element {
  const [userNumber, setUserNumber] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return <></>;
  }

  function pickedNumberHandler(number: number) {
    setUserNumber(number);
    setIsGameOver(false);
  }
  function gameOverHandler(numberOfRounds: number) {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(0);
    setGuessRounds(0);
  }
  let screens = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber > 0) {
    screens = (
      <GamesScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && userNumber) {
    screens = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootscreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootscreen}
        imageStyle={styles.backgroundOpacity}>
        <SafeAreaView style={styles.rootscreen}>{screens}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootscreen: {
    flex: 1,
  },
  backgroundOpacity: {
    opacity: 0.15,
  },
});

export default App;
