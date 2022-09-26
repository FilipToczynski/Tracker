import { IconContext } from "react-icons";
import { GrFormAdd } from "react-icons/gr";
import styles from "./window.module.css";

function Window({ indx }) {
  return (
    <div className={styles.main}>
      <div className={styles.add}>
        <h2 className={styles.heading}>Add new task</h2>
        <div className={styles.panel}>
          <input placeholder="task name"></input>
          <div>{indx}</div>
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
