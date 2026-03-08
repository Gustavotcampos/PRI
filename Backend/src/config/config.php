<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "pri";

$conn = mysqli_connect($servidor, $usuario, $senha, $banco);

if($conn->connect_error){
    die("conexão falhou: " . $conn->connect_error);
}

?>