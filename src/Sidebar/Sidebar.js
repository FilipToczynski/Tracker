import { IconContext } from "react-icons";
import styles from "./Sidebar.module.css";
import { GrFormAdd } from "react-icons/gr";
import { useRef, useState } from "react";

function Sidebar() {
  const projectArray = ["dummy"];
  const [projectsList, setProjectsList] = useState(projectArray);

  const inputRef = useRef(null);

  function addTask() {
    setProjectsList([inputRef.current.value, ...projectsList]);
    projectArray.push(inputRef.current.value)
  }
  
  // add current time to local storage
  // current date
  // name 
  // time spent on a task in total
  // all in one object

  // 1.push it to local storage and onClick on list item display the data below
  // read {
  //   date : curDate,
  //   time: curTime,
  //   name: read,
  //   timeTotal: timeTotal,
  //   prevTasks: look {
  //   same as above
  // }
  // }
  
  
  return (
    <div className={styles.sidebar}>
      <h4 className={styles.header}>very project much work</h4>
      <div>
        <h2 className={styles.heading}>Add project</h2>
        <div className={styles.module}>
          <input
            placeholder="project name"
            className={styles.input}
            ref={inputRef}
          ></input>
          <button className={styles.btn} onClick={addTask}>
            Add
            <IconContext.Provider value={{ color: "blue" }}>
              <div>
                <GrFormAdd />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div>
        <h2 className={styles.heading}>Projects list</h2>
        <ul className={styles.list}>
          {projectsList.map((project, index) => (
            <li key={index} className={styles.item}>
              {project}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
