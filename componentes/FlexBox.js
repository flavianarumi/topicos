import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    return (
        <View>
            <Quadrado cor='red'/>
            <Quadrado cor='gray'/>
            <Quadrado cor='green'/>
            <Quadrado cor='cyan'/>
            <Quadrado cor='green'/>
        </View>
    )
}
const styles = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000'
    }
})