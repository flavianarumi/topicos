import React, {useState} from 'react'
import { Text, Button } from 'react-native'

export default props => { 
    const [numero, setNumero] = useState(parseInt(props.inicial))

    // geralmente usa const
    // chamar como pares - toda vez que chamar ele renderiza o componente novamente
    // parseInt para transf. string para inteiro 
    // usar estado em vez de variáveis - variaveis não renderizam novamente com base nas alterações 
    // toda vez que alterar o estado - renderiza na tela 

    const inc = () => setNumero(numero+parseInt(props.passo))
    const dec = () => setNumero(numero-parseInt(props.passo))

    const handleTextChange = (text) => {
        text.trim() !== "" && !isNaN(text) ? setNumero(parseInt(text)) : setNumero(0);
    };

    return (
        <>
            <Text style = {{fontSize: 35}}> {numero} </Text>
            <Button title = "+" onPress = {inc}/>
            <Button title = "-" onPress = {dec}/>
            <TextInput  
                placeholder = "Inicialize o contador"
                onChangeText = {handleTextChange}
                //value = {numero.toString()} - para não mudar o texto do input
            />
        </>
    )
}