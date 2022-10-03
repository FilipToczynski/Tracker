import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiListPlus } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { VscClearAll } from "react-icons/vsc";
import { FaThList } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import "./window.scss";

function Window({ name, date, time, seeWindow }) {
  const tasksArray = [{ taskName: "example"}];
  const [taskList, setTaskList] = useState(tasksArray);
  const inputRef = useRef(null);
  const [seeTaskWindow, setTaskWindow] = useState(seeWindow);
  const [taskDone, setTaskDone] = useState(0);
  const [numOfTask, setNumOfTask] = useState(0);

  const pullTaskList = () => {
    if (seeTaskWindow === true) {
      const updatedList = JSON.parse(localStorage.getItem(`${name}`)).taskList;
      setTaskList([...updatedList]);
    }
  };

  useEffect(() => {
    if (seeWindow === true) {
      const projectsTaskList = JSON.parse(
        localStorage.getItem(`${name}`)
      ).taskList;
      setNumOfTask(projectsTaskList.length);
    }
    setTaskWindow(seeWindow);
    pullTaskList();
    setTaskDone(taskDone);
    //eslint-disable-next-line
  }, [name, seeWindow, taskDone, setTaskDone, setNumOfTask, numOfTask]);

  const tasksDone = () => {
    const noOftaskDone = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;
    setTaskDone(noOftaskDone);
  };

  const addTask = () => {
    let taskName = inputRef.current.value;
    let dateToday = new Date();
    let dateTask =
      dateToday.getFullYear() +
      "-" +
      (dateToday.getMonth() + 1) +
      "-" +
      dateToday.getDate();
    let timeToday = new Date();
    let timeTask = timeToday.getHours() + ":" + timeToday.getMinutes();

    if (name) {
      let singleTask = {
        projectName: name,
        taskName: taskName,
        time: timeTask,
        date: dateTask,
        timeTotal: 0,
      };
      const projectsTaskList = JSON.parse(
        localStorage.getItem(`${name}`)
      ).taskList;
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

  let dateToday = new Date();
  let dateTask =
    dateToday.getFullYear() +
    "-" +
    (dateToday.getMonth() + 1) +
    "-" +
    dateToday.getDate();
  let timeToday = new Date();
  let timeTask = timeToday.getHours() + " : " + timeToday.getMinutes();
  return (
    <div className="window">
      {seeTaskWindow && (
        <div className="window__data">
          <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
            <div>
              <AiOutlineBarChart />
            </div>
          </IconContext.Provider>
          <div>
            <div className="window__row">
              <div className="window__inData">
                <h4>
                  <IconContext.Provider
                    value={{ color: "#fff", size: "0.7rem" }}
                  >
                    <div>
                      <BsCalendarEvent />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{date}</p>
              </div>
              <div className="window__inData">
                <h4>
                  <IconContext.Provider
                    value={{ color: "#fff", size: "0.7rem" }}
                  >
                    <div>
                      <BsClock />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{time}</p>
              </div>
              <div className="window__inData">
                <h4>
                  <IconContext.Provider
                    value={{ color: "#fff", size: "0.7rem" }}
                  >
                    <div>
                      <AiOutlineNumber />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{numOfTask}</p>
              </div>
              <div className="window__inData">
                <h4>
                  <IconContext.Provider
                    value={{ color: "#fff", size: "0.7rem" }}
                  >
                    <div>
                      <AiOutlineCheck />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{taskDone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
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
