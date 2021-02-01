import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "one",
      day: "DD-MM-YY @ HH:MM",
      reminder: true,
    },
    {
      id: 2,
      text: "tooo",
      day: "DD-MM-YY @ HH:MM",
      reminder: true,
    },
    {
      id: 3,
      text: "three",
      day: "DD-MM-YY @ HH:MM",
      reminder: true,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id ));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id
                ? { ...task, reminder: !task.reminder }
                : task 
    ));
  }

  //Toggle showAddTask
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="container">
      <Header showAddTask={showAddTask} toggleShowAddTask={toggleShowAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Nothing lmao'}
    </div>
  );
}

export default App;
