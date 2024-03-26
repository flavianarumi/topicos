import React from "react";
import { Text } from "react-native";
import If from "./If";
import styles from "../estilos"

export default props => {
    const usuario = props.usuario || {}

    return(
        <>
            <If teste = {usuario && usuario.nome && usuario.email}>
                {/* <If teste={usuario && Object.keys[usuario].length !==0>} */}
                <Text style={styles.TextGrande}>Usuario Logado: </Text>
                <Text style={styles.TextGrande}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}