<?php
require_once __DIR__ . '/../config/database.php';
$sql = "SELECT * FROM produto";
$resultado = mysqli_query($conn, $sql);

while ($linha = mysqli_fetch_assoc($resultado)) {
        $lista_produtos[] = $linha;
    }

header('Content-Type: application/json');
echo json_encode($lista_produtos);
?>