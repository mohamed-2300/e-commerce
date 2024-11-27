import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
  const categories = ['personnel', 'travail', 'autre'];

  return (
    <div className="task-list">
      {categories.map((category) => (
        <div key={category} className="task-category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {tasks
            .filter((task) => task.category === category)
            .map((task) => (
              <Task key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
