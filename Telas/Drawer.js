import React from "react";
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="TelaB">
        <Drawer.Screen name="TelaA" component={TelaA}/>
        <Drawer.Screen name="TelaB" component={TelaB}/>
        <Drawer.Screen name="TelaC" component={TelaC}/>
    </Drawer.Navigator>
)