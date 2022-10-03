import { IconContext } from "react-icons";
import { GrFormAdd } from "react-icons/gr";

function AddProject({inputRef, setInput, addProject, input}) {
  return (
    <div>
      <h2 className="sidebar__heading">Add project</h2>
      <div className="sidebar__addProject">
        <input
          placeholder="project name"
          className="sidebar__input"
          ref={inputRef}
          onChange={setInput}
          required
        ></input>
        <button
          className="sidebar__btn"
          onClick={addProject}
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
  );
}

export default AddProject;
