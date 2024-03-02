const readline = require('readline');

// Función para crear una lista de tareas
function crearListaTareas() {
    return [];
}

// Función para añadir una tarea a la lista
function agregarTarea(listaTareas, indicador, descripcion) {
    listaTareas.push({ indicador, descripcion, completada: false });
}

// Función para eliminar una tarea de la lista
function eliminarTarea(listaTareas, indicador) {
    const index = listaTareas.findIndex(tarea => tarea.indicador === indicador);
    if (index !== -1) {
        listaTareas.splice(index, 1);
    }
}

// Función para marcar una tarea como completada
function completarTarea(listaTareas, indicador) {
    const tarea = listaTareas.find(tarea => tarea.indicador === indicador);
    if (tarea) {
        tarea.completada = true;
    }
}

// Función principal para manejar las operaciones
function manejarOperaciones() {
    const listaTareas = crearListaTareas();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('¿Qué operación deseas realizar? (añadir/eliminar/completar): ', (operacion) => {
        switch (operacion) {
            case 'añadir':
                rl.question('Indicador de la tarea: ', (indicador) => {
                    rl.question('Descripción de la tarea: ', (descripcion) => {
                        agregarTarea(listaTareas, indicador, descripcion);
                        console.log('Tarea añadida correctamente.');
                        console.log(listaTareas);
                        rl.close();
                    });
                });
                break;
            case 'eliminar':
                rl.question('Indicador de la tarea a eliminar: ', (indicador) => {
                    eliminarTarea(listaTareas, indicador);
                    console.log('Tarea eliminada correctamente.');
                    console.log(listaTareas);
                    rl.close();
                });
                break;
            case 'completar':
                rl.question('Indicador de la tarea a completar: ', (indicador) => {
                    completarTarea(listaTareas, indicador);
                    console.log('Tarea marcada como completada correctamente.');
                    console.log(listaTareas);
                    rl.close();
                });
                break;
            default:
                console.log('Operación no reconocida.');
                rl.close();
                break;
        }
    });
}

// Ejecutar la función principal para manejar las operaciones
manejarOperaciones();
