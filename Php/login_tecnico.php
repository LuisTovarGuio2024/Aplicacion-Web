<?php
require_once 'conexion.php';

$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

// Buscar técnico por correo
$sql = "SELECT * FROM tecnicos WHERE correo = '$correo'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    $tecnico = $resultado->fetch_assoc();
    if (password_verify($contraseña, $tecnico['contraseña'])) {
        echo "Inicio de sesión exitoso. Bienvenido, " . $tecnico['nombre'] . ".";
    } else {
        echo "Contraseña incorrecta.";
    }
} else {
    echo "El correo no está registrado.";
}

$conexion->close();
?>
