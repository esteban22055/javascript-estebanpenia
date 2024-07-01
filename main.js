// Trámites disponibles
const tramites = [
    { id: "1", nombre: "Licencia de Conducir", costo: 100 },
    { id: "2", nombre: "Pasaporte", costo: 200 },
    { id: "3", nombre: "Cédula de Identidad", costo: 150 },
    { id: "4", nombre: "Matrícula", costo: 250 },
    { id: "5", nombre: "Carné de Salud", costo: 120 },
];

// Función para validar email
const validarEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(String(email).toLowerCase());

// Función para manejar el formulario de trámites
const manejarFormulario = (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const tramiteId = document.getElementById("tramite").value;
    const cuotas = document.getElementById("cuotas").value;

    if (!validarEmail(email)) {
        alert("Email no válido. Por favor, ingrese un email correcto.");
        return;
    }

    const tramite = tramites.find(t => t.id === tramiteId);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Trámite: ${tramite.nombre}</p>
        <p>Costo: $${tramite.costo}</p>
        <p>Cuotas: ${cuotas}</p>
        <p>Resumen de pago:</p>
        <ul>
            ${Array.from({ length: parseInt(cuotas) }, (_, i) => `<li>Cuota ${i + 1}: $${(tramite.costo / cuotas).toFixed(2)}</li>`).join('')}
        </ul>
        <button id="confirmarBtn">Confirmar Trámite</button>
        <button id="cancelarBtn">Cancelar Trámite</button>
    `;

    document.getElementById("confirmarBtn").addEventListener("click", () => {
        resultadoDiv.innerHTML = "<p>Trámite Confirmado.</p>";
        // Guardar datos en localStorage
        guardarTramiteEnStorage(nombre, apellido, email, tramite, cuotas);
    });

    document.getElementById("cancelarBtn").addEventListener("click", () => {
        resultadoDiv.innerHTML = "<p>Trámite Cancelado.</p>";
    });
};

// Función para guardar datos en localStorage
const guardarTramiteEnStorage = (nombre, apellido, email, tramite, cuotas) => {
    const tramitesGuardados = JSON.parse(localStorage.getItem("tramites")) || [];
    tramitesGuardados.push({ nombre, apellido, email, tramite, cuotas });
    localStorage.setItem("tramites", JSON.stringify(tramitesGuardados));
};

// Evento para manejar el envío del formulario
document.getElementById("tramiteForm").addEventListener("submit", manejarFormulario);

// Función para cargar trámites guardados en localStorage y mostrarlos
const cargarTramitesGuardados = () => {
    const tramitesGuardados = JSON.parse(localStorage.getItem("tramites")) || [];
    const resultadoDiv = document.getElementById("resultado");
    tramitesGuardados.forEach(tramite => {
        resultadoDiv.innerHTML += `
            <p>Nombre: ${tramite.nombre}</p>
            <p>Apellido: ${tramite.apellido}</p>
            <p>Email: ${tramite.email}</p>
            <p>Trámite: ${tramite.tramite.nombre}</p>
            <p>Costo: $${tramite.tramite.costo}</p>
            <p>Cuotas: ${tramite.cuotas}</p>
            <hr>
        `;
    });
};

// Cargar trámites guardados al cargar la página
document.addEventListener("DOMContentLoaded", cargarTramitesGuardados);
