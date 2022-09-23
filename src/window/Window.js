import { IconContext } from "react-icons";
import { GrFormAdd } from "react-icons/gr";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./window.module.css";

function Window() {
  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.options}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <div className={styles.add}>
            <h2 className={styles.heading}>Add new task</h2>
            <div className={styles.panel}>
              <input placeholder="task name"></input>
              <div>project</div>
              <div>time</div>
              <div>date</div>
              <div>timer</div>
              <button className={styles.button}>
                <IconContext.Provider value={{ color: '#fff', size: '2rem' }}>
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
      </div>
    </div>
  );
}

export default Window;


