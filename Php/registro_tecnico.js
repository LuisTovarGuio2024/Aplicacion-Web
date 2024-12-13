document.getElementById('registroTecnicoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío normal del formulario

    const datos = new URLSearchParams(new FormData(this)); // Capturar datos del formulario

    fetch('Php/registro_tecnico.php', {
        method: 'POST',
        body: datos,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(response => response.text()) // Obtener la respuesta como texto
        .then(data => {
            alert(data); // Mostrar mensaje del servidor
            if (data.includes("Técnico registrado exitosamente")) {
                document.getElementById('registroTecnicoForm').reset(); // Limpiar el formulario
            }
        })
        .catch(error => {
            console.error('Error:', error); // Mostrar errores en la consola
            alert('Hubo un problema al registrar el técnico.');
        });
});
