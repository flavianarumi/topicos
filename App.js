import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Titulo, Mensagem, somar} from './componentes/Componentes';
import * as MeuComponentes from './componentes/Componentes';

export default function App() {
  return (
    <View style={styles.container}>
      <MeuComponentes.Titulo texto = "Esse é o título"></MeuComponentes.Titulo>
      <Mensagem conteudo = "Esse é o conteudo"></Mensagem>
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
