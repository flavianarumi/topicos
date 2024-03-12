import produtos from "./produtos";
export default props => {
    function carregaLista() {
        return produtos.map(p => {
            return <Text key = {p.id}>{p.id} - {p.nome} - Preço R$ {p.preco}</Text>
        })
    }
    return (
        <>
        <Text style = {Estilo.TextGrande}>
            Lista de Produtos
        </Text>

        <Text>
            {/*para pular linha na tela*/}
        </Text>
        {carregaLista()} {/*para chamar func dentro da tag*/}
        {produtos.map(p => {
            return <Text key = {p.id}>{p.id} - {p.nome} - Preço R$ {p.preco}</Text>
        })
        }
        </>
    )
}
