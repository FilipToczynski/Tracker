import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { GrFormAdd } from "react-icons/gr";
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillStopFill } from "react-icons/bs";
import styles from "./window.module.css";

function Window({ name, date, time, tasks, timeSpent }) {
  const tasksArray = [{ projectName: "red" }];
  const [taskList, setTaskList] = useState(tasksArray);
  const [nameTask, setTaskName] = useState('task');
 
  const inputRef = useRef(null);

  const pullTaskList = () => {
    const updatedList = JSON.parse(localStorage.getItem(`${name}`));
    console.log(updatedList);
    // setTaskList([...updatedList]);
  };
  useEffect(() => {
    setTaskName(inputRef.current.value);
    pullTaskList();
  }, [setTaskName])

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
      timeToday.getMinutes() +
      ":" +
      timeToday.getSeconds();
    let x = {
      projectName: name,
      taskName: taskName,
      time: timeTask,
      date: dateTask,
      timeTotal: 0,
    }

    if (taskList) {
      console.log([...taskList, x])
    } else {
      setTaskList([...taskList, x]);
      // localStorage.setItem(
      //   `${name.taskList}`,
      //   JSON.stringify([...taskList, x])
      // );

      }
  }
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
              <h4>number of tasks</h4>
              <p>{tasks}</p>
            </div>
            <div className={styles.inData}>
              <h4>time spent total</h4>
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
          <div>time</div>
          <div>date</div>
          <div>timer</div>
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
          {taskList.map((task, index) => {
            const s = task.taskName;
            return (
              <li className={styles.item} key={index}>
                <span>{nameTask}</span>
                <span>{s}</span>
                <span>time</span>
                <span>date</span>
                <span>timer</span>
                {/* <button className={styles.button}>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <AiFillCaretRight />
                    </div>
                  </IconContext.Provider>
                </button> */}
                <button className={styles.button}>
                  <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
                    <div>
                      <BsFillStopFill />
                    </div>
                  </IconContext.Provider>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Window;
