import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "one",
      day: "DD-MM-YY @ HH:MM",
    },
    {
      id: 2,
      text: "tooo",
      day: "DD-MM-YY @ HH:MM",
    },
    {
      id: 3,
      text: "three",
      day: "DD-MM-YY @ HH:MM",
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
