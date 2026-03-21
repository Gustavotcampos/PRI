document.addEventListener('DOMContentLoaded', async function carregarProdutos() {
    const containerProdutos = document.getElementById('produtos')
    const conexao = await fetch('http://localhost/PRI/Backend/src/routes/api.php?classe=produtos')
    const listaProdutos = await conexao.json()

    listaProdutos.forEach( produto => {
        containerProdutos.innerHTML += `
            <div>
                <h3>${produto.nome}</h3>
                <p>${produto.preco}</p>
                <a href="http://localhost/PRI/Frontend/pages/produto.html?id=${produto.id}">Comprar</a>
            </div>
        `
    });
})