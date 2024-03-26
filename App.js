// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Titulo, Mensagem, somar} from './componentes/Componentes';
// import * as MeusComponentes from './componentes/Componentes';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MeusComponentes.Titulo texto = "Esse é o título"></MeusComponentes.Titulo>
//       <Mensagem conteudo = "Esse é o conteudo"></Mensagem>
//       <Text>{somar(10, 15)}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// // componente auxiliar
// const MeuComponenteAuxiliar = () => {
//   return (
//     <View>
//       <Text>Auxiliar</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eeaeca',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//-----------------------------------------------

// import React from 'react';
// import { Text, StyleSheet, View } from 'react-native';
// import styles from './estilos.js';
// import ListaProdutos from './componentes/ListaProdutos.js';
// import produtos from './componentes/produtos.js';

// {/*deixa o listaProdutos flexivel, pq esta como default la no arquivo*/}

// export default function App() {
//   return (
//     <View style = {styles.container}>
//       <ListaProdutos lista = {produtos} nome = 'Qualquer coisa'></ListaProdutos>
//     </View>
//   );
// }

//-----------------------------------------------
// import { Text, View, Button} from 'react-native';
// import styles from './estilos.js';
// import Pai from './componentes/Pai.js'

// export default function App() {
//   return (
//     <View style = {styles.container}> 
//       <Pai/> 
//     </View>
//   )
// }


//----------------------------------------------
// import ListaProdutos from './componentes/ListaProdutos.js'
// import produtos from './componentes/produtos.js';

// export default function App() {
//   const [mostrarMensagem, setMostrarMensagem] = React.useState(false)

//   return(
//     <View>
//       {mostrarMensagem && <ListaProdutos lista = {produtos} nome = "Qualquer lista"/>}

//       <Text/>

//       <Button title = "Mostrar Lista"
//         onPress = {() => setMostrarMensagem(!mostrarMensagem)} />

//     </View>
//   )
// }

// --------------------------------------------
import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Button } from "react-native";
import CompProp from "./componentes/CompProp";
import style from './estilos.js';

export default function App () {
  return (
    <SafeAreaView style={style.container}>
      <CompProp>
        <Text>Componente de Texto</Text>
        <Text>Componente de Texto</Text>
      </CompProp>
    </SafeAreaView>
  )
}