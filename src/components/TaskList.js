// src/components/TaskList.js
import React from "react";
import { useDeleteTaskMutation } from "../redux/apiSlice";
import { useDispatch } from "react-redux";
import { setTaskToUpdate } from "../redux/taskSlice";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  const [deleteTask] = useDeleteTaskMutation();

  const handleDelete = async (id) => {
    await deleteTask(id);
  };

  return (
    <ul className="flex gap-3 flex-wrap">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="bg-[#dad8d8] shadow-lg min-h-[20vh] min-w-[15vw] flex  flex-col items-center justify-between pt-2"
        >
          <div className="px-2">{task.task}</div>
          <div className="flex flex-col gap-1 w-full">
            <button
              onClick={() => dispatch(setTaskToUpdate(task))}
              className="bg-green-500 w-full"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 w-full"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
