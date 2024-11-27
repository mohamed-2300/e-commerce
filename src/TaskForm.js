import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('personnel');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline) return alert("Veuillez remplir tous les champs.");

    const newTask = {
      id: Date.now(),
      title,
      category,
      deadline,
    };
    addTask(newTask);
    setTitle('');
    setCategory('personnel');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="personnel">Personnel</option>
        <option value="travail">Travail</option>
        <option value="autre">Autre</option>
      </select>
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;
