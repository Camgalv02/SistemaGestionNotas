// Array de nombres válidos
const nombresValidos = [
    'Caceres Ramon Antonio',
    'Canteros Brisa Abril',
    'Carreras Jeremias Sebastian',
    'Fleita Diego Rafael',
    'Florentin Evelin Elizabeth',
    'Gauna Aranda Denis Martin',
    'Gonzalez Barbara Teresita',
    'Lauritto Danisa Amelí',
    'Lopez Alejandra',
    'Moreyra Maria Sol',
    'Oviedo Rocio Belén',
    'Pereyra Sebastián Edgardo',
    'Ramirez Franco Ramón',
    'Saucedo Candela Abigail',
    'Zabala Wanda Naomi'
];

// Función de login
function login() {
    const apellidoInput = document.getElementById('apellido').value;
    if (nombresValidos.includes(apellidoInput)) {
        localStorage.setItem('apellido', apellidoInput);
        window.location.href = 'menu.html';
    } else {
        alert('Nombre no existe. Por favor, ingresa un nombre válido.');
    }
}

// Función para ir a Notas Unidad 4
function irNotasUnidad4() {
    window.location.href = 'notasUnidad4.html';
}

// Función para ir a Notas Todas las Unidades
function irNotasTodasUnidades() {
    window.location.href = 'notasTodasUnidades.html';
}

// Función para ir a la página de contratados
function irContratados() {
    window.location.href = 'contratados.html';
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('apellido');
    window.location.href = 'index.html';
}

// Función para volver al menú
function volverAlMenu() {
    window.location.href = 'menu.html';
}

// Función para mostrar las notas de la Unidad 4
function mostrarNotasUnidad4() {
    fetch('unidad4.json')
        .then(response => response.json())
        .then(data => {
            const apellido = localStorage.getItem('apellido');
            const alumno = data.alumnos.find(alumno => alumno.nombre === apellido);
            const notasDiv = document.getElementById('notasUnidad4');
            if (alumno) {
                notasDiv.innerHTML = `
                    <p>${apellido}:</p>
                    <ul>
                        <li>Diagrama 1: ${alumno.diagrama1}</li>
                        <li>Diagrama 2: ${alumno.diagrama2}</li>
                        <li>Diagrama 3: ${alumno.diagrama3}</li>
                        <li>Trabajo Unidad 2: ${alumno.trabajoUnidad2}</li>
                    </ul>
                `;
            } else {
                notasDiv.innerHTML = '<p>No se encontraron notas para este estudiante.</p>';
            }
        })
        .catch(error => console.error('Error al cargar las notas:', error));
}

// Función para mostrar las notas de todas las unidades
function mostrarNotasTodasUnidades() {
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            const apellido = localStorage.getItem('apellido');
            const alumno = data.alumnos.find(alumno => alumno.nombre === apellido);
            const notasDiv = document.getElementById('notasTodasUnidades');
            if (alumno) {
                notasDiv.innerHTML = `
                    <p>${apellido}:</p>
                    <ul>
                        <li>Unidad 1: ${alumno.unidad1}</li>
                        <li>Unidad 2: ${alumno.unidad2}</li>
                        <li>Unidad 3: ${alumno.unidad3}</li>
                        <li>Unidad 4: ${alumno.unidad4}</li>
                        <li>Carpeta: ${alumno.carpeta}</li>
                        <li>Promedio: ${alumno.promedio}</li>
                        <li>Faltas: ${alumno.faltas}</li>
                        <li>Resultado: ${alumno.resultado}</li>
                    </ul>
                `;
            } else {
                notasDiv.innerHTML = '<p>No se encontraron notas para este estudiante.</p>';
            }
        })
        .catch(error => console.error('Error al cargar las notas:', error));
}

// Función para mostrar los contratados
function mostrarContratados() {
    fetch('contratados.json')
        .then(response => response.json())
        .then(data => {
            const contratadosDiv = document.getElementById('contratados');
            let contratadosHTML = '<ul>';
            data.forEach(contratado => {
                contratadosHTML += `<li>${contratado}</li>`;
            });
            contratadosHTML += '</ul>';
            contratadosDiv.innerHTML = contratadosHTML;
        })
        .catch(error => console.error('Error al cargar los datos de contratados:', error));
}

// Llamar a las funciones cuando se cargue la página correspondiente
if (window.location.pathname.endsWith('notasUnidad4.html')) {
    document.addEventListener('DOMContentLoaded', mostrarNotasUnidad4);
} else if (window.location.pathname.endsWith('notasTodasUnidades.html')) {
    document.addEventListener('DOMContentLoaded', mostrarNotasTodasUnidades);
} else if (window.location.pathname.endsWith('contratados.html')) {
    document.addEventListener('DOMContentLoaded', mostrarContratados);
}
