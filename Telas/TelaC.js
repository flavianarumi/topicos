import React from "react";
import TextoCentral from "./TextoCentral";
import PassoStack from "./PassoStack";

export default props => {
    //console.warn(props.navigation.navigate != null)
    props.navigation.navigate("TelaC")
    return (
        <PassoStack {...props} avancar='TelaA'>
            <TextoCentral corFundo = 'red'>
                Tela C
            </TextoCentral>
        </PassoStack>
    )
}
