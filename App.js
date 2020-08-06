import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';

import Keys from './components/keys'

import './shim.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Keys />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    width: Dimensions.get('window').width - 30,
    padding: 15,
  },
});
