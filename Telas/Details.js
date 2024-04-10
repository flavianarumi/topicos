import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Home from './Home';
export default props => {
    return (
        <View style={[styles.tela, { backgroundColor: '#F38375' }]}>
            <Text style={[{fontSize: 50, color: '#FFF' }]}>
                Details
            </Text>
            <Button 
                title="Ir para HomeScreen"
                onPress={() => props.navigation.navigate('Home')}/>
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