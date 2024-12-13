document.getElementById('loginTecnicoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const datos = new URLSearchParams(new FormData(this));

    fetch('Php/login_tecnico.php', {
        method: 'POST',
        body: datos,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Mostrar respuesta del servidor
            if (data.includes("Inicio de sesión exitoso")) {
                // Redirigir al módulo de gestión de órdenes
                window.location.href = 'gestion_ordenes.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al iniciar sesión.');
        });
});
