import React from "react";
// import TelaA from "./TelaA";
// import TelaB from "./TelaB";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function MyStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="TelaA" component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
    </Stack.Navigator>
    );
}

function TelaA({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui é a Tela A!</Text>
        <Button
        title="Ir para Tela B"
        onPress={() => navigation.navigate('TelaB')}
        />
        </View>
    );
}
    
function TelaB({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui é a Tela B!</Text>
        <Button title="Ir para Tela A" onPress={() => navigation.navigate('TelaA')} />
        </View>
    );
}
