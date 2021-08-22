import React from 'react';
import CalculatorScreen from './screens/CalculatorScreen';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn);

export default class App extends React.Component{
  componentDidMount() {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
  }
  render() {
    return <CalculatorScreen />
  }
}