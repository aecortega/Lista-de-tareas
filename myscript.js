// Obtener elementos del DOM
let entradaTareaDOM = document.getElementById("entradaTarea");
let botonAgregarDOM = document.getElementById("botonAgregarTarea");
let listaTareasDOM = document.getElementById("listaTareas");

// Agregar evento de click al botón de agregar
botonAgregarDOM.addEventListener("click", agregarTarea);

// Contadores de tareas totales y tareas incompletas
var totalTareas = 0;
var completadas = 0;

// Función para agregar una nueva tarea
function agregarTarea() {
    if (entradaTareaDOM.value) {
        // Crear un nuevo elemento de tarea
        let nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add("estiloTarea");
        listaTareasDOM.appendChild(nuevaTarea);

        // Agregar el texto de la tarea
        let textoTarea = document.createElement('p');
        textoTarea.innerText = entradaTareaDOM.value;
        nuevaTarea.appendChild(textoTarea);

        // Agregar iconos para completar y eliminar
        let contenedorIconos = document.createElement("div")
        nuevaTarea.appendChild(contenedorIconos);

        let iconoCompletar = document.createElement("i");
        iconoCompletar.classList.add("bi", "bi-check-square-fill", "completa");
        contenedorIconos.appendChild(iconoCompletar);

        let iconoEliminar = document.createElement("i");
        iconoEliminar.classList.add("bi", "bi-trash-fill", "eliminar");
        contenedorIconos.appendChild(iconoEliminar);

        // Agregar eventos de click para eliminar y marcar como completada
        iconoEliminar.addEventListener('click', eliminarTarea);
        iconoCompletar.addEventListener('click', marcarComoCompletada);

        // Incrementar contador de tareas
        totalTareas++;
        document.getElementById("totalTareas").innerText = totalTareas;
        document.getElementById("tareasRestantes").innerText = totalTareas - completadas;
    } else {
        // Alerta si no se ingresó ninguna tarea
        alert("Por favor, ingresa una tarea.");
    }
}

// Función para eliminar una tarea
function eliminarTarea(e) {
    let tareaEliminar = e.target.parentNode.parentNode;
    tareaEliminar.remove();
    totalTareas--;
    document.getElementById("totalTareas").innerText = totalTareas;
    document.getElementById("tareasRestantes").innerText = totalTareas - completadas;
}

// Función para marcar una tarea como completada
function marcarComoCompletada(e) {
    let tareaCompletada = e.target.parentNode.parentNode;
    tareaCompletada.classList.add("marcarCompleto");

    let iconoEliminar = e.target.nextSibling;
    iconoEliminar.remove();

    completadas++;
    document.getElementById("tareasCompletadas").innerText = completadas;
    document.getElementById("tareasRestantes").innerText = totalTareas - completadas;
}
