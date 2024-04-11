const botoes  = document.querySelectorAll('.btn')
botoes.forEach( btn => btn.addEventListener('click',filtrarLivros))


function filtrarLivros() {
    const elementoBtn =document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponobilidade() : filtrarPorCategoria(categoria) 
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValortotalDosLivrosDiponiveisNaTela(valorTotal)       
    }
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponobilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValortotalDosLivrosDiponiveisNaTela( valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML=`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`

}