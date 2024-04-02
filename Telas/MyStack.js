import React from "react";
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";
import PassoStack from "./PassoStack";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{headerShown: true}}>  

        <Stack.Screen 
            name="TelaA" 
            component={TelaA}
            options={{ title: 'Informações Iniciais' }}
        />
{/* 
        <Stack.Screen 
            name="TelaB" 
            component={TelaB}
            options={{ title: 'Informações Tela B' }}
        />  */}

        <Stack.Screen name="TelaB">
            {props =>(
                <PassoStack {...props} avancar="TelaC">
                    <TelaB/>    
                </PassoStack>
            )}            
        </Stack.Screen>

        <Stack.Screen 
            name="TelaC" 
            component={TelaC}
            options={{ title: 'Informações Tela C' }}
        />        
    </Stack.Navigator>
)