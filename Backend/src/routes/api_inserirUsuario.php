<?php

header('Content-Type: application/json');
require_once __DIR__ . '/../config/database.php';

$dados = json_decode(file_get_contents('php://input'), true);

$nome = $dados['nome'];
$email = $dados['email'];
$cpf = $dados['cpf'];
$senha = $dados['senha'];

$sql = "INSERT INTO cliente (nome_cli, email_cli, cpf_cli, senha_cli) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nome, $email, $cpf, $senha);
if($stmt->execute()){
    echo json_encode(['success' => true, 'nome' => $nome]);
    
} else {
    echo json_encode(['success' => false]);
}
?>