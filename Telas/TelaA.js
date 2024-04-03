import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default props => {
    return (
        <View style={[styles.tela, { backgroundColor: '#F38375' }]}>
            <Text style={[{fontSize: 50, color: '#FFF' }]}>
                Tela A
            </Text>
            <Button 
                title="Ir para Tela B"
                onPress={() => props.navigation.navigate('TelaB')}/>
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