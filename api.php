<?php

$requisicao = $_GET['classe'];

switch($requisicao){
    case 'produtos':
        require_once __DIR__ . '/api_produtos.php';
        break;
    case 'mostrarprodutos':
        require_once __DIR__ .  '/api_gerarProdutos.php';
        break;
}
?>