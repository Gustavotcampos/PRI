<?php
ini_set('display_errors', 0);
header('Content-Type: application/json');
require_once __DIR__ . '/../config/database.php';

$dados = json_decode(file_get_contents('php://input'), true);
$cpf = $dados['cpf'];

if (empty($cpf)) {
    echo json_encode(['error' => 'CPF não fornecido']);
    exit;
}

$stmt = $conn->prepare("SELECT * FROM cliente WHERE cpf_cli = ?");
$stmt->bind_param("s", $cpf);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['exists' => true]);
} else {
    echo json_encode(['exists' => false]);
}
?>