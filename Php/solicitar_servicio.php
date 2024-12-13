<?php
require_once 'conexion.php';

session_start();

// Obtener el ID del cliente logueado
$cliente_id = $_SESSION['cliente_id']; // Asegúrate de guardar esto al iniciar sesión
$descripcion = $_POST['descripcion'];

if (empty($cliente_id) || empty($descripcion)) {
    echo "Todos los campos son obligatorios.";
    exit;
}

// Seleccionar un técnico aleatorio (puedes cambiar la lógica de selección)
$sql_tecnico = "SELECT id FROM tecnicos ORDER BY RAND() LIMIT 1";
$resultado_tecnico = $conexion->query($sql_tecnico);

if ($resultado_tecnico->num_rows > 0) {
    $tecnico = $resultado_tecnico->fetch_assoc();
    $tecnico_id = $tecnico['id'];
} else {
    echo "No hay técnicos disponibles en este momento.";
    exit;
}

// Insertar la orden en la base de datos
$sql = "INSERT INTO ordenes (cliente_id, tecnico_id, descripcion) VALUES ('$cliente_id', '$tecnico_id', '$descripcion')";

if ($conexion->query($sql) === TRUE) {
    echo "Solicitud creada exitosamente. Un técnico será asignado.";
} else {
    echo "Error al crear la solicitud: " . $conexion->error;
}

$conexion->close();
?>
