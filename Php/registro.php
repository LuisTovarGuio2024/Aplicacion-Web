<?php
require_once 'conexion.php'; // Conexión a la base de datos

// Capturar datos enviados desde el formulario
$nombre = $_POST['nombreRegistro'];
$correo = $_POST['correoRegistro'];
$password = password_hash($_POST['passwordRegistro'], PASSWORD_BCRYPT); // Encriptar contraseña
$direccion = $_POST['direccionRegistro'];
$ciudad = $_POST['ciudadRegistro'];
$telefono = $_POST['telefonoRegistro'];

// Validar que no existan campos vacíos
if (empty($nombre) || empty($correo) || empty($password) || empty($direccion) || empty($ciudad) || empty($telefono)) {
    echo "Todos los campos son obligatorios.";
    exit; // Detener el script
}

// Verificar si el correo ya está registrado
$sql_verificar = "SELECT id FROM clientes WHERE correo = '$correo'";
$resultado_verificar = $conexion->query($sql_verificar);

if ($resultado_verificar->num_rows > 0) {
    echo "El correo ya está registrado. Por favor, usa otro.";
    exit; // Detener el script
}

// Insertar datos en la base de datos
$sql = "INSERT INTO clientes (nombre, correo, contraseña, direccion, ciudad, telefono) 
        VALUES ('$nombre', '$correo', '$password', '$direccion', '$ciudad', '$telefono')";

if ($conexion->query($sql) === TRUE) {
    echo "Cliente registrado exitosamente: $nombre.";
} else {
    echo "Error al registrar cliente: " . $conexion->error;
}

$conexion->close();
?>