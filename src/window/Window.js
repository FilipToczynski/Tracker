import { IconContext } from "react-icons";
import { GrFormAdd } from "react-icons/gr";
import styles from "./window.module.css";

function Window({ name, date, time, tasks, timeSpent }) {
  // time & date & timer
  // time & date of creation of the project & task
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
          <input placeholder="task name"></input>
          <div>{name}</div>
          <div>time</div>
          <div>date</div>
          <div>timer</div>
          <button className={styles.button}>
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
          <div>list of task</div>
          <div>time spent total</div>
        </div>
        <div className={styles.bottom}>list</div>
      </div>
    </div>
  );
}

export default Window;
