import React from 'react';

function Task({ task, onDelete, onEdit }) {
  return (
    <li className="task">
      {/* Muestra el texto de la tarea */}
      <span className="task-text">
        {task.text}
      </span>
      
      {/* Botón para editar la tarea. Llama a la función onEdit con el id de la tarea */}
      <button className="edit-button" onClick={() => onEdit(task.id)}>
        Editar
      </button>

      {/* Botón para eliminar la tarea. Llama a la función onDelete con el id de la tarea */}
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default Task;
