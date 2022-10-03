import Sidebar from "./Sidebar/Sidebar";
import Window from "./Window/Window";
import "./app.scss";
import { useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [tasks, setTasks] = useState('');
  const [seeWindow, setWindow] = useState(false);
  return (
    <div className='view'>
      <div className='container'>
        <Sidebar setName={setName} setDate={setDate} setTime={setTime} setTasks={setTasks} setTimeSpent={setTimeSpent} setWindow={setWindow}/>
        <Window name={name} date={date} time={time} tasks={tasks} timeSpent={timeSpent} seeWindow={seeWindow} />
      </div>
    </div>
  );
}

export default App;
