import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id ));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // tasks.forEach((task) => {
    //   if(task.id === id) {
    //     document.querySelectorAll('.task.reminder')[id].style = { display: "none"};
    //   }
    // });
    setTasks(tasks.map( (task) => task.id === id ? { ...task, reminder: !task.reminder } : task ));
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Nothing lmao'}
    </div>
  );
}

export default App;
