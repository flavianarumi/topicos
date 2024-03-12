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
        {carregaLista()} //p chamar func dentro de uma tag
        {produtos.map(p => {
            return <Text key = {p.id}>{p.id} - {p.nome} - Preço R$ {p.preco}</Text>
        })
        }
        </>
    )
}
