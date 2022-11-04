/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Navigator from './src/navigation/AppNavigator';

const App: () => Node = () => {

  return (
    <Navigator></Navigator>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
