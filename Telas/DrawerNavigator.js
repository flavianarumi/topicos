import React from "react";
import HomeStack from "./HomeStack";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen name="HomeStack" component={HomeStack}/>
        
    </Drawer.Navigator>
)