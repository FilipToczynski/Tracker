import "./sidebar.scss";
import { useEffect, useRef, useState } from "react";
import AddProject from "./AddProject/AddProject";
import Modal from "./Modal/Modal";
import ProjectsList from "./ProjectsList/ProjectsList";

function Sidebar({ setName, setDate, setTime, setTasks, setTimeSpent, setWindow }) {
  const projectArray = [];
  const initName = 'project';
  const [projectsList, setProjectsList] = useState(projectArray);
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
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
      setProjectsList([...projectsList, inputRef.current.value]);
      projectArray.push([...projectsList, inputRef.current.value]);
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
          taskList: [{taskName: 'task', projectName: 'project', time: 'time', date: 'date' }],
        })
      );
    }
    setWindow(false);
  }
 
  //  to reset the list
  // localStorage.removeItem('allProjects', JSON.stringify({}));  
  // localStorage.removeItem('add', JSON.stringify({}));

  const pullProjectsList = () => {
    let updatedList = JSON.parse(localStorage.getItem("allProjects"));
    setProjectsList([...updatedList]);
  };

  const initial = () => {
    localStorage.setItem('allProjects', JSON.stringify([]));  
  }
  useEffect(() => {
    let updatedList = JSON.parse(localStorage.getItem("allProjects"));
    console.log(updatedList);
    if (updatedList === null) {
      initial();  
      return;
    }

  }, []);

  useEffect(() => {
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
    setWindow(true);
  };

  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>{projectName}</h2>
      <AddProject inputRef={inputRef} setInput={setInput} addProject={addProject} input={input} />
      <div>
        <h2 className='sidebar__heading'>Projects list</h2>
        {modal && <Modal deleteProject={deleteProject} toggleModal={toggleModal} />}
        <ul className='sidebar__list'>  
         <ProjectsList projectsList={projectsList} toggleModal={toggleModal} projectData={projectData} />
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
