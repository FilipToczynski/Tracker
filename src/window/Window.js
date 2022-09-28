import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { GrFormAdd } from "react-icons/gr";
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillStopFill } from "react-icons/bs";
import styles from "./window.module.css";

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
    let timeTask =
      timeToday.getHours() +
      ":" +
      timeToday.getMinutes();
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
    let timeTask =
      timeToday.getHours() +
      " : " +
      timeToday.getMinutes();
  return (
    <div className={styles.main}>
      <div className={styles.data}>
        <div className={styles.row}>
          <div className={styles.splitRow}>
            <div className={styles.inData}>
              <h4>Created</h4>
              <p>{date}</p>
            </div>
            <div className={styles.inData}>
              <h4>on</h4>
              <p>{time}</p>
            </div>
          </div>
          <div className={styles.splitRow}>
            <div className={styles.inData}>
              <h4>tasks</h4>
              <p>#{tasks}</p>
            </div>
            <div className={styles.inData}>
              <h4>time total</h4>
              <p>{timeSpent}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.add}>
        <h2 className={styles.heading}>Add new task</h2>
        <div className={styles.panel}>
          <input placeholder="task name" ref={inputRef}></input>
          <div>{name}</div>
          <div>{timeTask}</div>
          <div>{dateTask}</div>
          <div>0</div>
          <button className={styles.button} onClick={addTask}>
            <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
              <div>
                <GrFormAdd />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.top}>
          <h2 className={styles.heading}>list of task</h2>
        </div>
        <ul className={styles.bottom}>
          {taskList && taskList.map((task, index) => {
            let pjName = task.projectName;
            let nameOfTask = task.taskName;
            let timeTask = task.time;
            let dateTask = task.date;
            let taskTimer = task.timer;
            return (
              <li className={styles.item} key={index}>
                <span>{nameOfTask}</span>
                <span>{pjName}</span>
                <span>{timeTask}</span>
                <span>{dateTask}</span>
                <span>{timer}</span>
                <span>

                <button className={styles.button}>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <AiFillCaretRight />
                    </div>
                  </IconContext.Provider>
                </button>
                <button className={styles.button}>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <BsFillStopFill />
                    </div>
                  </IconContext.Provider>
                </button>
                <button className={styles.button}>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
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
