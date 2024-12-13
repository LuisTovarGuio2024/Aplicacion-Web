document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('facturaForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener los valores ingresados y convertirlos a números
        const nombreCliente = document.getElementById('nombreCliente').value;
        const montoRepuestos = parseFloat(document.getElementById('montoRepuestos').value) || 0;
        const montoManoObra = parseFloat(document.getElementById('montoManoObra').value) || 0;

        
        const totalFactura = montoRepuestos + montoManoObra;

        
        const resultadoDiv = document.getElementById('resultadoFactura');
        resultadoDiv.innerHTML = `
            <h3>Factura Generada</h3>
            <p><strong>Cliente:</strong> ${nombreCliente}</p>
            <p><strong>Monto de Repuestos:</strong> $${montoRepuestos.toFixed(2)}</p>
            <p><strong>Mano de Obra:</strong> $${montoManoObra.toFixed(2)}</p>
            <p><strong>Total a Pagar:</strong> $${totalFactura.toFixed(2)}</p>
            <button id="generarRecibo" class="boton-enviar">Descargar Recibo</button>
        `;

        // funcionalidad para descargar el recibo
        document.getElementById('generarRecibo').addEventListener('click', function() {
            const reciboContenido = `
                Factura Generada
                ---------------------
                Cliente: ${nombreCliente}
                Monto de Repuestos: $${montoRepuestos.toFixed(2)}
                Mano de Obra: $${montoManoObra.toFixed(2)}
                ---------------------
                Total a Pagar: $${totalFactura.toFixed(2)}
            `;
            const blob = new Blob([reciboContenido], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `Factura_${nombreCliente}.txt`;
            link.click();
        });
    });
});

