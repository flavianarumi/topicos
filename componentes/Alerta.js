import React from 'react';
import { View, Button, Alert } from 'react-native';

export default Alerta = () => {
    const showAlert = () => {
        Alert.alert (
            'Título do alerta',
            'Este é um exemplo de mensagem de alerta.',
            [
                {text: 'Ok', onPress: () => console.warn('Ok, pressionado')},
                {text: 'Cancelar', onPress: () => console.warn('Cancelar pressionado')}
            ]
        );
    };
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Button title = "Mostrar alerta" onPress={showAlert}/>
        </View>
    )
}