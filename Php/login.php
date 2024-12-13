<?php
require_once 'conexion.php';

// Capturar los datos del formulario
$correo = isset($_POST['correoLogin']) ? $_POST['correoLogin'] : null;
$contraseña = isset($_POST['passwordLogin']) ? $_POST['passwordLogin'] : null;

// Verificar que los datos no estén vacíos
if (is_null($correo) || is_null($contraseña)) {
    echo "Faltan datos para iniciar sesión.";
    exit;
}

// Verificar si el correo existe en la base de datos
$sql = "SELECT * FROM clientes WHERE correo = '$correo'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    $cliente = $resultado->fetch_assoc();

    // Verificar la contraseña
    if (password_verify($contraseña, $cliente['contraseña'])) {
        session_start();
        $_SESSION['cliente_id'] = $cliente['id'];
        $_SESSION['cliente_nombre'] = $cliente['nombre'];

        // Redirigir a la página para crear solicitudes
        header('Location: ../solicitar_servicio.html');
        exit; // Terminar el script después de redirigir
    } else {
        echo "Contraseña incorrecta.";
    }
} else {
    echo "El correo no está registrado.";
}

$conexion->close();
?>
