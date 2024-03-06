import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <MeuComponente></MeuComponente>
      <MeuComponenteAuxiliar></MeuComponenteAuxiliar>
      <StatusBar style="auto" />
    </View>
  );
}

// componente auxiliar
const MeuComponenteAuxiliar = () => {
  return (
    <View>
      <Text>Auxiliar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeaeca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
