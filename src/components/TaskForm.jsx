import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  // Estado para almacenar el texto de la nueva tarea
  let [taskText, setTaskText] = useState('');

  // Función que maneja el envío del formulario
  let handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    if (taskText.trim() !== '') { // validacion del campo que no esté vacío
      onAddTask(taskText); // Llama a la función pasada como prop para agregar la tarea
      setTaskText(''); // Limpia el campo de texto después de agregar la tarea
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de entrada para el texto de la nueva tarea */}
      <input
        type="text"
        value={taskText} // Enlazar el valor del estado con el campo de texto
        onChange={(e) => setTaskText(e.target.value)} // Actualiza el estado con lo que escribe el usuario
        placeholder="Agregar nueva tarea" 
      />
      {/* Botón para agregar tarea */}

      
      <button className="save-button" type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
