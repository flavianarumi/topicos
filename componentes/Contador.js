export default props => { 
    let numero = props.inicial
    const inc = () => {
        numero++
        console.warn(numero)
    }
    const dec = () => numero--

    return (
        <>
            <Text style = {{fontSize: 35}}> {numero} </Text>
            <Button title = "+" onPress = {inc}/>
            <Button title = "-" onPress = {dec}/>
        </>
    )
}