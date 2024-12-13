document.getElementById('solicitudForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const datos = new URLSearchParams(new FormData(this));

    fetch('Php/solicitar_servicio.php', {
        method: 'POST',
        body: datos,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Mostrar mensaje del servidor
            if (data.includes("Solicitud creada")) {
                document.getElementById('solicitudForm').reset();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar la solicitud.');
        });
});
