import React from "react";
import { Text, View } from "react-native";

export default props => {
    return(
        <View>
            <Text>{props.nome} {props.sobrenome}</Text>
        </View>
    )
}