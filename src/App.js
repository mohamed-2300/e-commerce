import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Ajouter une nouvelle tâche
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Vérification pour les notifications
  useEffect(() => {
    const checkDeadlines = () => {
      tasks.forEach((task) => {
        const timeLeft = new Date(task.deadline) - new Date();
        if (timeLeft <= 0) {
          alert(`La tâche "${task.title}" est arrivée à échéance !`);
        }
      });
    };
    const interval = setInterval(checkDeadlines, 60000); // Vérifie toutes les minutes
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="App">
      <h1>Gestionnaire de Tâches</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
