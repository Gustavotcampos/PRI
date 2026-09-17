<?php
$requisicao = $_GET['classe'];

switch($requisicao){
    case 'produtos':
        require_once __DIR__ . '/api_produtos.php';
        break;
    case 'mostrarprodutos':
        require_once __DIR__ .  '/api_gerarProdutos.php';
        break;
    case 'verificarCpf':
        require_once __DIR__ .  '/api_verificarCpf.php';
        break;
    case 'inserirUsuario':
        require_once __DIR__ .  '/api_inserirUsuario.php';
        break;
    case 'fazerLogin':
        require_once __DIR__ . '/api_fazerLogin.php';
        break;
}
?>