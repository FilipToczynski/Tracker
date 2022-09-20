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
            <div>add new one here</div>
            <div>list of tasks</div>
        </div>
      </div>
    </div>
  );
}

export default Window;

//
//
// current project    ////////////////////////////////////////////////////////////////////////////////////////
//                    building window tracker no 01-22s start end
// projects +
// - tracker
// -
// -
//                                                          this week: {time spent on the clock}
//                                                          money summary: {money made}
//                  list of tasks above here

// to extract from this file
//
//
//
