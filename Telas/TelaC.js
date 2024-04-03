import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default props => {
    return (
        <View style={[styles.tela, { backgroundColor: '#FBC3BC' }]}>
            <Text style={[{fontSize: 50, color: '#FFF' }]}>
                Tela C
            </Text>
            <Button 
                title="Ir para Tela A"
                onPress={() => props.navigation.navigate('TelaA')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
});