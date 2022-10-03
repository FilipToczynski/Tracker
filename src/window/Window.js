import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiListPlus } from "react-icons/bi";
import { VscClearAll } from "react-icons/vsc";
import { FaThList } from "react-icons/fa";
import "./window.scss";
import Insight from "./Insight/Insight";


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
      <div className="window__data">
      <Insight date={date} time={time} numOfTask={numOfTask} taskDone={taskDone}/>
      </div>

      {seeTaskWindow && (
        <div className="window__add">
          <h2 className="window__heading">Add task</h2>
          <div className="window__panel">
            <input placeholder="task name" ref={inputRef}></input>
            <div>{name}</div>
            <div>{timeTask}</div>
            <div>{dateTask}</div>
            <button className="window__btn" onClick={addTask}>
              <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
                <div>
                  <BiListPlus />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>
      )}
      {seeTaskWindow && (
        <div className="window__list">
          <span className="window__centerTask">
            <div className="window__taskPanel">
              <IconContext.Provider value={{ color: "#fff", size: "1.2rem" }}>
                <div>
                  <FaThList />
                </div>
              </IconContext.Provider>
              <h2>list of tasks</h2>
              <button onClick={clearTaskList}>
                <IconContext.Provider value={{ color: "#000", size: "1.2rem" }}>
                  <div>
                    <VscClearAll />
                  </div>
                </IconContext.Provider>
              </button>
            </div>
          </span>
          <ul className="window__tasks">
            {taskList.map((task, index) => {
              let pjName = task.projectName;
              let nameOfTask = task.taskName;
              let timeTask = task.time;
              let dateTask = task.date;
              return (
                <li className="window__item" key={index}>
                  <span>{nameOfTask}</span>
                  <span>{pjName}</span>
                  <span>{timeTask}</span>
                  <span>{dateTask}</span>
                  <span>
                    <input type="checkbox" onClick={tasksDone} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Window;
