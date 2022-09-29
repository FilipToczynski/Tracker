import { IconContext } from "react-icons";
import "./sidebar.scss";
import { useEffect, useRef, useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

function Sidebar({ setName, setDate, setTime, setTasks, setTimeSpent, listOfTasks }) {
  const projectArray = ["example"];
  const initName = 'project'
  const [projectsList, setProjectsList] = useState(projectArray);

  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState('');
  const [projectDate, setProjectDate] = useState("");
  const [projectTime, setProjectTime] = useState("");
  const [projectName, setProjectName] = useState(initName);

  

  function addProject() {
    const projectExists = projectsList.includes(inputRef.current.value);
    let name = inputRef.current.value;
    let dateToday = new Date();
    let dateProject =
      dateToday.getFullYear() +
      "-" +
      (dateToday.getMonth() + 1) +
      "-" +
      dateToday.getDate();
    let timeToday = new Date();
    let timeProject =
      timeToday.getHours() +
      ":" +
      timeToday.getMinutes();

    if (projectExists) {
      window.alert("project already exists");
    } else {
      console.log(listOfTasks);
      setProjectsList([...projectsList, inputRef.current.value]);
      localStorage.setItem(
        "allProjects",
        JSON.stringify([...projectsList, inputRef.current.value])
      );

      localStorage.setItem(
        `${name}`,
        JSON.stringify({
          name: name,
          dateProject: dateProject,
          timeProject: timeProject,
          taskList: task,
        })
      );
    }
  }

  //  to reset the list
  // localStorage.setItem(
  //   'project',
  //   JSON.stringify({
  //     name: 'project',
  //     dateProject: 'date',
  //     timeProject: 'time',
  //     taskList: [],
  //   }));
  // localStorage.setItem('allProjects', JSON.stringify(projectsList));
  // localStorage.removeItem('undefined', JSON.stringify({}));
  // localStorage.removeItem('3', JSON.stringify({}));

  const pullProjectsList = () => {
    const updatedList = JSON.parse(localStorage.getItem("allProjects"));

    setProjectsList([...updatedList]);
  };

  useEffect(() => {
    setTask(listOfTasks);
    pullProjectsList();
    setName(projectName);
    setDate(projectDate);
    setTime(projectTime);
  }, [
    inputRef,
    setName,
    projectName,
    projectDate,
    projectTime,
    setDate,
    setTime,
    listOfTasks,
  ]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const deleteProject = () => {
    const updatedList = JSON.parse(localStorage.getItem("allProjects"));
    const indx = projectsList.indexOf(projectName);
    localStorage.removeItem(projectName, JSON.stringify({}));
    updatedList.splice(indx, 1);
    localStorage.setItem("allProjects", JSON.stringify([...updatedList]));
    setProjectsList([...updatedList]);
    toggleModal();
  };

  const projectData = (project) => {
    const pj = JSON.parse(localStorage.getItem(project));
    const pjDate = pj.dateProject;
    const pjTime = pj.timeProject;
    const pjTasks = pj.taskList.length;
    const pjTimeSpent = pj.timeTotal;
    setProjectName(project);
    setProjectDate(pjDate);
    setDate(pjDate);
    setProjectTime(pjTime);
    setName(project);
    setTime(pjTime);
    setTasks(pjTasks);
    setTimeSpent(pjTimeSpent);
  };

  console.log(projectName);
  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>{projectName}</h2>
      <div>
        <h2 className='sidebar__heading'>Add project</h2>
        <div className='sidebar__module'>
          <input
            placeholder="project name"
            className='sidebar__input'
            ref={inputRef}
            onChange={setInput}
            required
          ></input>
          <button
            className='sidebar__btn'
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
      <div>
        <h2 className='sidebar__heading'>Projects list</h2>
        {modal && (
          <div className='sidebar__modal'>
            delete project?
            <div>
              <button onClick={deleteProject}>yes</button>
              <button onClick={toggleModal}>no</button>
            </div>
          </div>
        )}
        <ul className='sidebar__list'>
          {projectsList.map((project, index) => (
            <li
              key={index}
              className='sidebar__item'
              onClick={() => {
                projectData(project);
              }}
            >
              {project}
              <span className='sidebar__delete' onClick={toggleModal}>
                <IconContext.Provider
                  value={{ color: "#f9f9f9", className: 'trashcan' }}
                > 
                  <div>
                    <BsTrash />
                  </div>
                </IconContext.Provider>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
