import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";

function ProjectsList({ projectsList, toggleModal, projectData }) {
  return (
    <>
      {projectsList.map((project, index) => (
        <li
          key={index}
          className="sidebar__item"
          onClick={() => {
            projectData(project);
          }}
        >
          {project}
          <span className="sidebar__delete" onClick={toggleModal}>
            <IconContext.Provider
              value={{ color: "#f9f9f9", className: "trashcan" }}
            >
              <div>
                <BsTrash />
              </div>
            </IconContext.Provider>
          </span>
        </li>
      ))}
    </>
  );
}

export default ProjectsList;
