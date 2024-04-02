import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default props => (
    <View style = {[style.tela, {backgroundColor: props.corFundo || ''}]}>
        <Text style = {[style.texto, {color: props.corTexto || '#fff'}]}>
            {props.children}
        </Text>
    </View>
)

const style = StyleSheet.create({
    texto: {
        fontSize: 50
    },
    tela: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})