
document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío normal del formulario

    // Capturar los datos del formulario
    const datos = new URLSearchParams(new FormData(this));

    // Enviar los datos al servidor mediante fetch
    fetch('Php/registro.php', {
        method: 'POST',
        body: datos,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => response.text()) // Obtener la respuesta como texto
        .then(data => {
            // Mostrar el mensaje devuelto por el servidor
            alert(data); // Muestra "Cliente registrado exitosamente" o "El correo ya está registrado"
            
            // Limpiar el formulario si el registro fue exitoso
            if (data.includes("Cliente registrado exitosamente")) {
                document.getElementById('registroForm').reset();
            }
        })
        .catch(error => {
            // Manejar errores en la petición
            console.error('Error:', error);
            alert('Hubo un problema al registrar el cliente.');
        });
});
