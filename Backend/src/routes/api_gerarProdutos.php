<?php
$id = $_GET['id'];
$id = (int)$id;
$sql = "SELECT * FROM produtos WHERE id = " . $id;
$resultado = mysqli_query($conn, $sql);
$linha = mysqli_fetch_assoc($resultado);

header('Content-Type: application/json');
echo json_encode($linha);
?>