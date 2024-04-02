import React from "react";
import { View, Text, Button } from "react-native";

export default props => (
    <View style={{flex: 1}}>
        <View>
            {props.avancar
                ? <Button
                        title="Avançar"
                        onPress={() => {
                            //props.navigation.navigate(props.avancar)
                            props.navigation.push(props.avancar) //empilha as telas - funciona so com stack
                        }}/>
                : false
            }
        </View>
        <View style={{flex :1}}>
            {props.children}
        </View>
    </View>
)