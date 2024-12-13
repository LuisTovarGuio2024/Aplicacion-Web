document.addEventListener('DOMContentLoaded', function () {
    // Obtener las órdenes del técnico
    fetch('Php/obtener_ordenes_tecnico.php')
        .then(response => response.json())
        .then(ordenes => {
            if (ordenes.error) {
                alert(ordenes.error); // Mostrar mensaje de error si no hay acceso
                return;
            }

            const tbody = document.getElementById('ordenes-body');
            ordenes.forEach(orden => {
                const tr = document.createElement('tr');

                // Crear celdas de la tabla
                tr.innerHTML = `
                    <td>${orden.id}</td>
                    <td>${orden.cliente}</td>
                    <td>${orden.descripcion}</td>
                    <td>${orden.estado}</td>
                    <td>
                        <button onclick="cambiarEstado(${orden.id}, 'En Proceso')">En Proceso</button>
                        <button onclick="cambiarEstado(${orden.id}, 'Completada')">Completada</button>
                    </td>
                `;

                tbody.appendChild(tr); // Agregar fila a la tabla
            });
        })
        .catch(error => console.error('Error al cargar las órdenes:', error));
});

// Función para cambiar el estado de una orden
function cambiarEstado(id, nuevoEstado) {
    fetch('Php/actualizar_estado.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ id, estado: nuevoEstado })
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Mostrar mensaje de confirmación
            location.reload(); // Recargar la página para actualizar la tabla
        })
        .catch(error => console.error('Error al cambiar el estado:', error));
}
