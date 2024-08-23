// src/components/TaskInput.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddTaskMutation, useUpdateTaskMutation } from "../redux/apiSlice";
import { setTaskToUpdate } from "../redux/taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const [taskId, setTaskId] = useState("");
  const taskToUpdate = useSelector((state) => state.tasks.taskToUpdate);

  useEffect(() => {
    if (taskToUpdate) {
      setTaskText(taskToUpdate.task);
      setTaskId(taskToUpdate._id);
    }
  }, [taskToUpdate]);

  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskId) {
      await updateTask({ id: taskId, task: taskText });
    } else {
      await addTask({ task: taskText });
    }
    setTaskText("");
    setTaskId("");
    dispatch(setTaskToUpdate(null));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
        className="bg-gray-200 w-[60vw] rounded-full px-4 py-2"
      />
      <button className="ml-5 bg-yellow-500 px-6 py-2 rounded-md" type="submit">
        {taskId ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskInput;
