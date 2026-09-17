<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../config/database.php';

$dados = json_decode(file_get_contents('php://input'), true);

$email = $dados['email'];
$senha = $dados['senha'];

$sql = "SELECT nome_cli, email_cli, senha_cli FROM cliente WHERE email_cli = ? AND senha_cli = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $senha);

if ($stmt->execute()) {
    $resultado = $stmt->get_result();
    
    if ($resultado->num_rows > 0) {
        $cliente = $resultado->fetch_assoc(); 
        
        echo json_encode([
            'success' => true,
            'nome' => $cliente['nome_cli'] 
        ]);
    } else {
        echo json_encode([
            'success' => false
        ]);
    }
} else {
    echo json_encode([
        'success' => false
    ]);
    
}
?>