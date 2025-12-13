let caixa = document.querySelector('.caixa')

function abrirImagem(numero){

    let url = `index.html?imagem=Imagem${numero}.jpg&descricao=${numero}`
    window.open(url, '_blank')

}