let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click',ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdanados= livros.sort( (a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdanados)
}


 