import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      
      <h1>Lista de Tareas</h1>
      
      {/* Componente TaskList para la lista de tareas */}
      <TaskList />
    </div>
  );
}

export default App;
