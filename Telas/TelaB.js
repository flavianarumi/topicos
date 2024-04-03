import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default props => {
    return (
        <View style={[styles.tela, { backgroundColor: '#F7A399' }]}>
            <Text style={[{fontSize: 50, color: '#FFF' }]}>
                Tela B
            </Text>
            <Button 
                title="Ir para Tela C"
                onPress={() => props.navigation.navigate('TelaC')}/>
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