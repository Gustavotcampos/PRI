document.addEventListener('DOMContentLoaded', async function exibirProduto() {
    const mostrarProduto = document.getElementById('exibirProduto')
    const urlParams = new URLSearchParams(window.location.search);
    const idDaUrl = urlParams.get('id');
    const conexao = await fetch(`http://localhost/PRI/Backend/src/routes/api.php?classe=mostrarprodutos&id=${idDaUrl}`)
    const resultado = await conexao.json()

        mostrarProduto.innerHTML = `
        <h1>${resultado.nome}</h1>
        <p>${resultado.descrição}</p>
    `
        
})
