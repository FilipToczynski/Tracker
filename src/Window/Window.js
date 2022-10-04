import { useEffect, useRef, useState } from "react";
import Insight from "./Insight/Insight";
import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";
import "./window.scss";


function Window({ name, date, time, seeWindow }) {
  const tasksArray = [{ taskName: "example"}];
  const [taskList, setTaskList] = useState(tasksArray);
  const inputRef = useRef(null);
  const [seeTaskWindow, setTaskWindow] = useState(seeWindow);
  const [taskDone, setTaskDone] = useState(0);
  const [numOfTask, setNumOfTask] = useState(0);

  let dateToday = new Date();
  let dateTask = dateToday.getFullYear() + "-" + (dateToday.getMonth() + 1) + "-" + dateToday.getDate();
  let timeToday = new Date();
  let timeTask = timeToday.getHours() + " : " + timeToday.getMinutes();

  const pullTaskList = () => {
    if (seeTaskWindow === true) {
      const updatedList = JSON.parse(localStorage.getItem(`${name}`)).taskList;
      setTaskList([...updatedList]);
    }
  };

  useEffect(() => {
    if (seeWindow === true) {
      const projectsTaskList = JSON.parse(localStorage.getItem(`${name}`)).taskList;
      setNumOfTask(projectsTaskList.length);
    }
    setTaskWindow(seeWindow);
    pullTaskList();
    setTaskDone(taskDone);
    //eslint-disable-next-line
  }, [name, seeWindow, taskDone, setTaskDone, setNumOfTask, numOfTask]);

  const tasksDone = () => {
    const noOftaskDone = document.querySelectorAll('input[type="checkbox"]:checked').length;
    setTaskDone(noOftaskDone);
  };

  const addTask = () => {
    let taskName = inputRef.current.value;
    let dateToday = new Date();
    let dateTask =dateToday.getFullYear() + "-" + (dateToday.getMonth() + 1) + "-" + dateToday.getDate();
    let timeToday = new Date();
    let timeTask = timeToday.getHours() + ":" + timeToday.getMinutes();

    if (name) {
      let singleTask = {
        projectName: name,
        taskName: taskName,
        time: timeTask,
        date: dateTask,
      };

      const projectsTaskList = JSON.parse(localStorage.getItem(`${name}`)).taskList;
      projectsTaskList.push(singleTask);
      setTaskList(projectsTaskList);
      localStorage.setItem(
        `${name}`,
        JSON.stringify({
          name: name,
          dateProject: date,
          timeProject: time,
          taskList: projectsTaskList,
        })
      );
      setNumOfTask(projectsTaskList.length);
    }
  };

  const clearTaskList = () => {
    setTaskDone(0);
    setNumOfTask(0);
    setTaskList([]);
    localStorage.setItem(
      `${name}`,
      JSON.stringify({
        name: name,
        dateProject: date,
        timeProject: time,
        taskList: [],
      })
    );
  };
  
  return (
    <div className="window">
     {seeTaskWindow && <div className="window__data">
      <Insight date={date} time={time} numOfTask={numOfTask} taskDone={taskDone}/>
      </div>}

      {seeTaskWindow && (
        <div className="window__add">
         <AddTask inputRef={inputRef} name={name} timeTask={timeTask} dateTask={dateTask} addTask={addTask} />
        </div>
      )}
      {seeTaskWindow && (
        <div className="window__list">
          <TaskList clearTaskList={clearTaskList} taskList={taskList} tasksDone={tasksDone} />
        </div>
      )}
    </div>
  );
}

export default Window;
