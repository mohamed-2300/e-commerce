import React from 'react';

function Task({ task, deleteTask }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>Catégorie : {task.category}</p>
      <p>Échéance : {new Date(task.deadline).toLocaleString()}</p>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
}

export default Task;
