import Sidebar from "./Sidebar/Sidebar";
import Window from "./window/Window";
import styles from "./app.module.css";
import { useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [tasks, setTasks] = useState('');
  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <Sidebar setName={setName} setDate={setDate} setTime={setTime} setTasks={setTasks} setTimeSpent={setTimeSpent}/>
        <Window name={name} date={date} time={time} tasks={tasks} timeSpent={timeSpent}/>
      </div>
    </div>
  );
}

export default App;
