import { IconContext } from "react-icons";
import styles from "./Sidebar.module.css";
import { GrFormAdd } from 'react-icons/gr'

function Sidebar() {
  const projects = ["barbell", "nose"];

  // pull name from local storage insert in {project}

  return (
    <div className={styles.sidebar}>
      <h4 className={styles.header}>project</h4>
      <div className={styles.module}>
        <input placeholder="project name"></input>
        <button>
          Add
          <IconContext.Provider
            value={{ color: "blue", className: "global-class-name" }}
          >
            <div>
              <GrFormAdd />
            </div>
          </IconContext.Provider>
        </button>
      </div>
      <ul className={styles.list}>
        {projects.map((pj) => (
          <li className={styles.item}>{pj}</li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
