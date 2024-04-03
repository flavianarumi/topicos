import React from 'react';
import TelaA from './TelaA';
import TelaB from './TelaB';
import TelaC from './TelaC';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function MyStack() {

return (
    <Stack.Navigator initialRouteName="TelaA">
      <Stack.Screen name="TelaA" component={TelaA} />
      <Stack.Screen name="TelaB" component={TelaB} />
      <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Navigator>
  );
}