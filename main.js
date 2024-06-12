//! Objetivo: Calcular costos de trámites de personas que necesiten gestionar el mismo y calcular el monto.

// Función para validar email
const validarEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
        String(email).toLowerCase()
    );

// Función para solicitar datos al usuario
const solicitarDato = (
    mensaje,
    validacion = (dato) => !!dato,
    error = "Dato no válido."
) => {
    let dato = prompt(mensaje);
    while (!validacion(dato)) {
        alert(error);
        dato = prompt(mensaje);
    }
    return dato;
};

// Trámites disponibles
const tramites = [
    { id: "1", nombre: "licencia de conducir", costo: 100 },
    { id: "2", nombre: "pasaporte", costo: 200 },
    { id: "3", nombre: "cédula de identidad", costo: 150 },
    { id: "4", nombre: "matrícula", costo: 250 },
    { id: "5", nombre: "carné de salud", costo: 120 },
];

function iniciarTramite() {
    // Solicitar datos al usuario
    const nombre = solicitarDato("Ingrese su Nombre:");
    const apellido = solicitarDato("Ingrese su Apellido:");
    const email = solicitarDato(
        "Ingrese su Email:",
        validarEmail,
        "Email no válido. Por favor, ingrese un email correcto."
    );

    // Mostrar opciones de trámites en el prompt
    const opcionesTramite = tramites
        .map((tramite) => `${tramite.id}. ${tramite.nombre}`)
        .join("\n");
    const tramiteSeleccionado = solicitarDato(
        `Ingrese el número del trámite a realizar:\n${opcionesTramite}`,
        (dato) => ["1", "2", "3", "4", "5"].includes(dato),
        "Trámite no válido."
    );

    const tramite = tramites.find((t) => t.id === tramiteSeleccionado);

    // Cuotas válidas
    const cuotasValidas = ["1", "3", "6", "9", "12"];
    const cuotas = solicitarDato(
        "En cuántas cuotas desea pagar (1, 3, 6, 9, 12):",
        (dato) => cuotasValidas.includes(dato),
        "Número de cuotas no válido."
    );

    // Mostrar resumen del trámite
    console.log(
        `El costo del trámite de ${tramite.nombre} es: $${tramite.costo}`
    );
    console.log(`Ha elegido pagar en ${cuotas} cuotas.`);
    console.log("Resumen de pago:");
    for (let i = 1; i <= parseInt(cuotas); i++) {
        console.log(`Cuota ${i}: $${(tramite.costo / cuotas).toFixed(2)}`);
    }

    // Confirmar trámite
    const confirmar = solicitarDato(
        "¿Desea confirmar el trámite? (Si/No):",
        (dato) => ["si", "no"].includes(dato.toLowerCase()),
        "Respuesta no válida."
    ).toLowerCase();
    console.log(
        confirmar === "si" ? "Trámite Confirmado." : "Trámite Cancelado."
    );
}

// Ciclo do while para repetir el proceso si se desea
let repetir;
do {
    iniciarTramite();
    repetir = prompt("¿Desea realizar otro trámite? (Si/No):").toLowerCase();
    while (!["si", "no"].includes(repetir)) {
        alert("Respuesta no válida.");
        repetir = prompt("¿Desea realizar otro trámite? (Si/No):").toLowerCase();
    }
} while (repetir === "si");

alert("Gracias por usar el servicio de trámites en línea.");
