<?php
$host = "localhost";
$user = "root"; // Usuario por defecto de XAMPP
$pass = ""; // Contraseña por defecto (vacía en XAMPP)
$dbname = "aplicacion_web"; // Cambia al nombre de tu base de datos

$conexion = new mysqli($host, $user, $pass, $dbname);

// Verifica la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
} 
?>
