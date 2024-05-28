// CONSIGNA: con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás: ✓ Pensar el alcance de tu proyecto ✓ Armar la estructurra HTML del proyecto. ✓ Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo. ✓  Utilizar funciones para fealizar esas operaciones.



//! Objetivo: Calcular costos de trámites de personas que necesiten gestionar el mismo y calcular el monto.


function iniciarTramite() {
    // Función para validar email
    function validarEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Solicitar datos al usuario
    let nombre = prompt("Ingrese su Nombre: ");
    while (!nombre) {
        alert("El nombre no puede estar vacío.");
        nombre = prompt("Ingrese su Nombre: ");
    }

    let apellido = prompt("Ingrese su Apellido: ");
    while (!apellido) {
        alert("El apellido no puede estar vacío.");
        apellido = prompt("Ingrese su Apellido: ");
    }

    let email = prompt("Ingrese su Email: ");
    while (!validarEmail(email)) {
        alert("Email no válido. Por favor, ingrese un email correcto.");
        email = prompt("Ingrese su Email: ");
    }

    // Mostrar opciones de trámites en el prompt
    let tramite = prompt("Ingrese el número del trámite a realizar:\n1. Licencia de Conducir\n2. Pasaporte\n3. Cédula de Identidad\n4. Matrícula\n5. Carné de Salud");
    while (!['1', '2', '3', '4', '5'].includes(tramite)) {
        alert("Trámite no válido.");
        tramite = prompt("Ingrese el número del trámite a realizar:\n1. Licencia de Conducir\n2. Pasaporte\n3. Cédula de Identidad\n4. Matrícula\n5. Carné de Salud");
    }
    
    // Variables para el costo y cuotas
    let costo;
    let cuotas;

    // Asignar costos según el trámite
    switch (tramite) {
        case '1':
            tramite = 'licencia de conducir';
            costo = 100;
            break;
        case '2':
            tramite = 'pasaporte';
            costo = 200;
            break;
        case '3':
            tramite = 'cédula de identidad';
            costo = 150;
            break;
        case '4':
            tramite = 'matrícula';
            costo = 250;
            break;
        case '5':
            tramite = 'carné de salud';
            costo = 120;
            break;
    }

    // Determinar cuotas según el costo
    if (costo > 0) {
        cuotas = prompt("En cuántas cuotas desea pagar (1, 3, 6, 9, 12): ");
        const cuotasValidas = ['1', '3', '6', '9', '12'];
        while (!cuotasValidas.includes(cuotas)) {
            alert("Número de cuotas no válido.");
            cuotas = prompt("En cuántas cuotas desea pagar (1, 3, 6, 9, 12): ");
        }
    }

    console.log(`El costo del trámite de ${tramite} es: $${costo}`);
    console.log(`Ha elegido pagar en ${cuotas} cuotas.`);
    
    // Ciclo for para mostrar las cuotas
    console.log("Resumen de pago:");
    for (let i = 1; i <= parseInt(cuotas); i++) {
        console.log(`Cuota ${i}: $${(costo / cuotas).toFixed(2)}`);
    }

    // Ciclo while para confirmar el trámite
    let confirmar = prompt("¿Desea confirmar el trámite? (Si/No): ").toLowerCase();
    while (confirmar !== 'si' && confirmar !== 'no') {
        alert("Respuesta no válida.");
        confirmar = prompt("¿Desea confirmar el trámite? (Si/No): ").toLowerCase();
    }

    if (confirmar === 'si') {
        console.log("Trámite Confirmado.");
    } else {
        console.log("Trámite Cancelado.");
    }
}

// Ciclo do while para repetir el proceso si se desea
let repetir;
do {
    iniciarTramite();
    repetir = prompt("¿Desea realizar otro trámite? (Si/No): ").toLowerCase();
    while (repetir !== 'si' && repetir !== 'no') {
        alert("Respuesta no válida.");
        repetir = prompt("¿Desea realizar otro trámite? (Si/No): ").toLowerCase();
    }
} while (repetir === 'si');

alert("Gracias por usar el servicio de trámites en línea.");