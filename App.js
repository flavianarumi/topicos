import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <MeuComponente></MeuComponente>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeaeca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
