<?php
require_once 'conexion.php';

session_start();
$tecnico_id = $_SESSION['tecnico_id']; // ID del técnico logueado

if (!$tecnico_id) {
    echo json_encode(["error" => "No tienes acceso a esta sección."]);
    exit;
}

$sql = "SELECT o.id, c.nombre AS cliente, o.descripcion, o.estado
        FROM ordenes o
        JOIN clientes c ON o.cliente_id = c.id
        WHERE o.tecnico_id = '$tecnico_id'";
$resultado = $conexion->query($sql);

$ordenes = [];
while ($fila = $resultado->fetch_assoc()) {
    $ordenes[] = $fila;
}

echo json_encode($ordenes);

$conexion->close();
?>
