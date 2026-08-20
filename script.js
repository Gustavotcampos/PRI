document.addEventListener('DOMContentLoaded', async function carregarProdutos() {
    const containerProdutos = document.getElementById('produtos');
    
    const conexao = await fetch('http://localhost/PRI/Backend/src/routes/api.php?classe=produtos');
    const listaProdutos = await conexao.json();

    listaProdutos.forEach(produto => {
        containerProdutos.innerHTML += `
            <div class="miniquad" data-id="${produto.cod_prod}">
                <img class="imgprod" src="${produto.imagem || 'assets/img/no-image.png'}" alt="${produto.nome_prod}">
                <div class="nome"><strong>${produto.nome_prod}</strong></div>
                <div class="preco">R$${produto.preco_prod}</div>
            </div>
        `;
    });

    containerProdutos.addEventListener('click', (e) => {
        const card = e.target.closest('.miniquad');    
        if (card) {
            const id = card.dataset.id;
            if (id) {
                window.location.href = `http://localhost/PRI/Frontend/pages/produto.html?id=${id}`;
            }
        }
    });
});