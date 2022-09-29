import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiListPlus } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsFillStopFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineNumber } from "react-icons/ai";
import "./window.scss";

function Window({ name, date, time, tasks, timeSpent, setListOfTasks }) {
  const tasksArray = [];
  const [taskList, setTaskList] = useState(tasksArray);
  const [nameTask, setTaskName] = useState("task");
  const [timer, setTimer] = useState(0);

  const inputRef = useRef(null);

  const pullTaskList = () => {
    if (name) {
      const updatedList = JSON.parse(localStorage.getItem(`${name}`)).taskList;
      console.log(updatedList);
      setTaskList([...updatedList]);
    }
  };
  useEffect(() => {
    setListOfTasks(taskList);
    setTaskName(inputRef.current.value);
    if (name) {
      console.log(name);
    }
    pullTaskList();
  }, [setTaskName, name]);

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
    let x = {
      projectName: name,
      taskName: taskName,
      time: timeTask,
      date: dateTask,
      timeTotal: 0,
    };

    if (name) {
      const neimae = JSON.parse(localStorage.getItem(`${name}`)).taskList;
      neimae.push(x);
      console.log(neimae);
      setTaskList(neimae);
      localStorage.setItem(
        `${name}`,
        JSON.stringify({
          name: name,
          dateProject: date,
          timeProject: time,
          taskList: neimae,
          timer: timer,
        })
      );
    }
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
      <div className="window__data">
        <div className="window__insight">
          <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
            <div>
              <AiOutlineLineChart />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <div className="window__row">
            <span className="window__splitRow">
              <div className="window__inData">
                <h4>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <BsCalendarEvent />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{date}</p>
              </div>
              <div className="window__inData">
                <h4>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <BsClock />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{time}</p>
              </div>
            </span>
            <span className="window__splitRow">
              <div className="window__inData">
                <h4>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <AiOutlineNumber />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{tasks}</p>
              </div>
              <div className="window__inData">
                <h4>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <BsStopwatch />
                    </div>
                  </IconContext.Provider>
                </h4>
                <p>{timeSpent}</p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="window__add">
        <h2 className="window__heading">Add new Task</h2>
        <div className="window__panel">
          <input placeholder="task name" ref={inputRef}></input>
          <div>{name}</div>
          <div>{timeTask}</div>
          <div>{dateTask}</div>
          <div>0</div>
          <button className="window__btn" onClick={addTask}>
            <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
              <div>
                <BiListPlus />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className="window__list">
        <span className="window__centerTask">
          <div className="window__taskPanel">
            <IconContext.Provider value={{ color: "#fff", size: "1.2rem" }}>
              <div>
                <FaThList />
              </div>
            </IconContext.Provider>
            <h2>list of task</h2>
            <button>clear</button>
          </div>
        </span>
        <ul className="window__tasks">
          {taskList &&
            taskList.map((task, index) => {
              let pjName = task.projectName;
              let nameOfTask = task.taskName;
              let timeTask = task.time;
              let dateTask = task.date;
              let taskTimer = task.timer;
              return (
                <li className="window__item" key={index}>
                  <span>{nameOfTask}</span>
                  <span>{pjName}</span>
                  <span>{timeTask}</span>
                  <span>{dateTask}</span>
                  <span>{timer}</span>
                  <span>
                    <button className="window__btn">
                      <IconContext.Provider
                        value={{ color: "#fff", size: "1rem" }}
                      >
                        <div>
                          <AiFillCaretRight />
                        </div>
                      </IconContext.Provider>
                    </button>
                    <button className="window__btn">
                      <IconContext.Provider
                        value={{ color: "#fff", size: "1rem" }}
                      >
                        <div>
                          <BsFillStopFill />
                        </div>
                      </IconContext.Provider>
                    </button>
                    <button className="window__btn">
                      <IconContext.Provider
                        value={{ color: "#fff", size: "1rem" }}
                      >
                        <div>
                          <BsFillStopFill />
                        </div>
                      </IconContext.Provider>
                    </button>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Window;
