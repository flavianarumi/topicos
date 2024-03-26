import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default props => {
    return(
        <View style = {styles.card}>
            <Text>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    }
})