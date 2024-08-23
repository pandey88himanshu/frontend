import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useGetTasksQuery } from "./redux/apiSlice";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: tasks = [], error, isLoading } = useGetTasksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-8 py-4 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">To-Do List</h1>
        <input
          type="text"
          placeholder="Search tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-200 w-full rounded-full px-4 py-2 mb-4"
        />
      </div>

      <TaskInput />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;
