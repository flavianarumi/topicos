import React from "react";
import TextoCentral from "./TextoCentral";
import PassoStack from "./PassoStack";

export default props => {
    //console.warn(props.navigation.navigate != null)
    //props.navigation.navigate("TelaA")
    return (
        <PassoStack {...props} avancar='TelaB'>
            <TextoCentral corFundo = 'blue'>
                Tela A
            </TextoCentral>
        </PassoStack>
    )
}
