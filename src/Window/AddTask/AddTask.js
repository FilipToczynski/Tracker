import { IconContext } from "react-icons";
import { BiListPlus } from "react-icons/bi";

function AddTask({inputRef, name, timeTask, dateTask, addTask}) {
  return (
    <>
      <h2 className="window__heading">Add task</h2>
      <div className="window__panel">
        <input placeholder="task name" ref={inputRef}></input>
        <div>{name}</div>
        <div>{timeTask}</div>
        <div>{dateTask}</div>
        <button className="window__btn" onClick={addTask}>
          <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
            <div>
              <BiListPlus />
            </div>
          </IconContext.Provider>
        </button>
      </div>
    </>
  );
}

export default AddTask;
