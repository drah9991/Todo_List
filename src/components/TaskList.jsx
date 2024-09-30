import React, { useState, useRef } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

function TaskList() {
  // Estado para almacenar la lista de tareas
  let [tasks, setTasks] = useState([]);
  
  // Estado para identificar la tarea que está siendo editada
  let [editingTask, setEditingTask] = useState(null);
  
  // Estado para almacenar el texto editado de la tarea
  let [editText, setEditText] = useState('');
  
  // Referencia al elemento de diálogo (modal) para edición de tareas
  let dialogRef = useRef(null);

  // Función  agregar una nueva tarea a la lista
  let addTask = (text) => {
    let newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]); // Añadir la nueva tarea al array de tareas
  };

  // Función eliminar una tarea según el id
  let deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // Filtrar la tarea eliminada
  };

  // Función comenzar a editar una tarea
  let editTask = (taskId) => {
    let taskToEdit = tasks.find(task => task.id === taskId); // Buscar la tarea a editar
    setEditingTask(taskId); // Almacenar el ID de la tarea que se está editando
    setEditText(taskToEdit.text); // Establecer el texto actual de la tarea en el estado
    dialogRef.current.showModal(); // Abrir el modal de edición
  };

  // Función para actualizar la tarea editada
  let updateTask = (e) => {
    e.preventDefault();
    setTasks(tasks.map(task =>
      task.id === editingTask ? { ...task, text: editText } : task
    ));
    closeEditDialog(); // Cerrar el diálogo de edición una vez actualizada la tarea
  };

  // Función para cerrar el modal de edición y limpiar los estados
  let closeEditDialog = () => {
    setEditingTask(null); // Limpiar el estado de la tarea que se estaba editando
    setEditText(''); // Limpiar el texto de edición
    dialogRef.current.close(); // Cerrar el modal de edición
  };

  return (
    <div>
      {/*formulario para agregar nuevas tareas */}
      <TaskForm onAddTask={addTask} />
      
      {/* Lista de tareas */}
      <ul>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask} // Eliminar la tarea
            onEdit={editTask} // Editar la tarea
          />
        ))}
      </ul>
      
      {/* Diálogo (modal) para editar tareas */}
      <dialog ref={dialogRef}>
        <form onSubmit={updateTask}>
          <h3>Editar Tarea</h3>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)} // Actualizar el texto de la tarea en edición
            placeholder="Editar tarea"
          />
          <div>
            <button className="edit-button" type="submit">Guardar</button>
            <button className="delete-button" type="button" onClick={closeEditDialog}>Cancelar</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default TaskList;
