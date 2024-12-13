
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar los datos del formulario
    const datos = new URLSearchParams(new FormData(this));

    // Enviar los datos al servidor mediante fetch
    fetch('Php/login.php', {
        method: 'POST',
        body: datos,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Mostrar la respuesta del servidor
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al iniciar sesión.');
        });
});
