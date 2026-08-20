<?php
require_once __DIR__ . '/../config/database.php';
$id = $_GET['id'];
$id = (int)$id;
$sql = "SELECT * FROM produtos WHERE cod_prod = " . $id;
$resultado = mysqli_query($conn, $sql);
$linha = mysqli_fetch_assoc($resultado);

header('Content-Type: application/json');
echo json_encode($linha);
?>