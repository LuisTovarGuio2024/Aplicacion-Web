<?php
require_once 'conexion.php';

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contraseña = password_hash($_POST['contraseña'], PASSWORD_BCRYPT); // Encriptar contraseña
$telefono = $_POST['telefono'];

// Validar que no existan campos vacíos
if (empty($nombre) || empty($correo) || empty($contraseña) || empty($telefono)) {
    echo "Todos los campos son obligatorios.";
    exit;
}

// Verificar si el correo ya está registrado
$sql_verificar = "SELECT id FROM tecnicos WHERE correo = '$correo'";
$resultado_verificar = $conexion->query($sql_verificar);

if ($resultado_verificar->num_rows > 0) {
    echo "El correo ya está registrado. Por favor, usa otro.";
    exit;
}

// Insertar técnico en la base de datos
$sql = "INSERT INTO tecnicos (nombre, correo, contraseña, telefono) 
        VALUES ('$nombre', '$correo', '$contraseña', '$telefono')";

if ($conexion->query($sql) === TRUE) {
    echo "Técnico registrado exitosamente.";
} else {
    echo "Error al registrar técnico: " . $conexion->error;
}

$conexion->close();
?>