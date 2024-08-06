import React, { useState } from "react";
import "./styles.css";

const FilteredList = () => {
  const [search, setSearch] = useState("");

  const tasks = [
    { id: 1, description: "Sacar la basura" },
    { id: 2, description: "Barrer la casa" },
    { id: 3, description: "Trapear la casa" },
    { id: 4, description: "Lavar el patio" },
    { id: 5, description: "Lavar la ropa" },
    { id: 6, description: "Hacer el super" },
    { id: 7, description: "Hacer la comida" },
    { id: 8, description: "Lavar los trastes" },
    { id: 9, description: "Bañar al perro" },
    { id: 10, description: "Llevar al perro al veterinario" },
    { id: 11, description: "Planchar la ropa" },
  ];

  const filteredListTasks = tasks.filter((task) => {
    return task.description.toLowerCase().includes(search.toLowerCase());
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="form">
      <h1>
        Mi LISTA de <span>tareas</span> pendientes
      </h1>
      <form>
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Buscar tarea"
        />
      </form>

      <ul>
        {filteredListTasks.map((task) => {
          const { id, description } = task;

          return (
            <li key={id}>
              <input className="checkbox" type="checkbox" />
              <label>{description}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilteredList;
