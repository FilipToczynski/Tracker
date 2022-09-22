import { IconContext } from "react-icons";
import styles from "./Sidebar.module.css";
import { GrFormAdd } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";

function Sidebar() {
  const projectArray = ["dummy"];
  const [projectsList, setProjectsList] = useState(projectArray);

  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  function addTask() {
    const projectExists = projectsList.includes(inputRef.current.value);

    if (projectExists) {
      window.alert("project already exists");
    } else {

      setProjectsList([...projectsList, inputRef.current.value]);
      localStorage.setItem(
        "allProjects",
        JSON.stringify([...projectsList, inputRef.current.value])
      );
    }
  }

  //  to reset the list
  // localStorage.setItem('allProjects', JSON.stringify(projectsList));

  const pullProjectsList = () => {
    const updatedList = JSON.parse(localStorage.getItem("allProjects"));

    setProjectsList([...updatedList]);
  };

  useEffect(() => {
    pullProjectsList();
  }, [inputRef]);

  // add current time to lrerrl storage
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

  // to do
  // dont allow to make projects wit the same name

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
            onChange={setInput}
            required
          ></input>
          <button
            className={styles.btn}
            onClick={addTask}
            disabled={input.length === 0 ? true : false}
          >
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
