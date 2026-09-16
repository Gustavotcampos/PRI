<?php
require_once __DIR__ . '/../config/database.php';
$sql = "SELECT * FROM produtos";
$resultado = mysqli_query($conn, $sql);
$lista_produtos = [];

while ($linha = mysqli_fetch_assoc($resultado)) {
        $lista_produtos[] = $linha;
    }

header('Content-Type: application/json');
echo json_encode($lista_produtos);
?>