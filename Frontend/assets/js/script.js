document.addEventListener('DOMContentLoaded', async function carregarProdutos() {
    const containerProdutos = document.getElementById('produtos');
    
    const conexao = await fetch('/PRI/Backend/src/routes/api.php?classe=produtos');
    const listaProdutos = await conexao.json();

    listaProdutos.forEach(produto => {
        containerProdutos.innerHTML += `
            <div class="miniquad" data-id="${produto.id}">
                <img class="imgprod" src="${produto.imagem}" alt="${produto.nome}">
                <div class="nome"><strong>${produto.nome}</strong></div>
                <div class="preco">R$${produto.preco}</div>
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


})

document.addEventListener('DOMContentLoaded', (e) => {
const nomeUsuario = localStorage.getItem('usuario_nome');
    const login = document.getElementById('login');
    if (nomeUsuario) {
        login.textContent = `${nomeUsuario}`;

        login.addEventListener('click', (e) => {
            window.location.href = 'http://localhost/PRI/Frontend/pages/dashboard.html';
        });
    } 
})