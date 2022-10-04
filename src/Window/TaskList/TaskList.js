import { IconContext } from "react-icons";
import { FaThList } from "react-icons/fa";
import { VscClearAll } from "react-icons/vsc";

function TaskList({ clearTaskList, taskList, tasksDone }) {
  return (
    <>
      <span className="window__centerTask">
        <div className="window__taskPanel">
          <IconContext.Provider value={{ color: "#fff", size: "1.2rem" }}>
            <div>
              <FaThList />
            </div>
          </IconContext.Provider>
          <h2>list of tasks</h2>
          <button onClick={clearTaskList}>
            <IconContext.Provider value={{ color: "#000", size: "1.2rem" }}>
              <div>
                <VscClearAll />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </span>
      <ul className="window__tasks">
        {taskList.map((task, index) => {
          let pjName = task.projectName;
          let nameOfTask = task.taskName;
          let timeTask = task.time;
          let dateTask = task.date;
          return (
            <li className="window__item" key={index}>
              <span>{nameOfTask}</span>
              <span>{pjName}</span>
              <span>{timeTask}</span>
              <span>{dateTask}</span>
              <span>
                <input type="checkbox" onClick={tasksDone} />
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TaskList;
