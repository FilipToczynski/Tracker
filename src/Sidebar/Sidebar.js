import { IconContext } from "react-icons";
import styles from "./Sidebar.module.css";
import { useEffect, useRef, useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

function Sidebar() {
  const projectArray = ["dummy"];
  const [projectsList, setProjectsList] = useState(projectArray);

  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);

  function addProject() {
    const projectExists = projectsList.includes(inputRef.current.value);
    let lastIndex = projectsList.length - 1;
    let name = inputRef.current.value;
    let dateToday = new Date();
    let date = dateToday.getFullYear() +"-" +(dateToday.getMonth() + 1) +"-" +dateToday.getDate();
    let timeToday = new Date();
    let time =timeToday.getHours() +":" +timeToday.getMinutes() +":" +timeToday.getSeconds();

    if (projectExists) {
      window.alert("project already exists");
    } else {
      setProjectsList([...projectsList, inputRef.current.value]);
      localStorage.setItem(
        "allProjects",
        JSON.stringify([...projectsList, inputRef.current.value])
      );

      localStorage.setItem(
        `${lastIndex + 1}`,
        JSON.stringify({
          name: name,
          date: date,
          time: time,
        })
      );
    }
  }

  //  to reset the list
  // localStorage.setItem('allProjects', JSON.stringify(projectsList));
  // localStorage.removeItem('2', JSON.stringify({}));
  // localStorage.removeItem('3', JSON.stringify({}));

//   const pullProjectsList = () => {
//     const updatedList = JSON.parse(localStorage.getItem("allProjects"));

//     setProjectsList([...updatedList]);
//   };

//   useEffect(() => {
//     pullProjectsList();
//   }, [inputRef]);


// let indx;
// const getId = (index) => {
//   indx = index;
//   console.log(indx);
//   return indx;
// };

//   const closeModal = () => {
//     setModal(false);
//   };

//   const openModal = () => {
//     // console.log(indx);
//     setModal(true);
//   };

//     const deleteProject = () => {
//       console.log(indx);
//       localStorage.removeItem(indx, JSON.stringify({}));
//       const updatedList = JSON.parse(localStorage.getItem("allProjects"));
//       updatedList.splice(indx, 1);
//       localStorage.setItem('allProjects', JSON.stringify([...updatedList]));
//       setProjectsList([...updatedList]);
//       closeModal();
//     };

 

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
        <h2 className={styles.heading}>Projects list</h2>
        {modal && (
          <div className={styles.modal}>
            delete project?
            <div>
              {/* <button onClick={deleteProject}>yes</button>
              <button onClick={closeModal}>no</button> */}
            </div>
          </div>
        )}
        <ul className={styles.list}>
          {projectsList.map((project, index) => (
            <li
              key={index}
              className={styles.item}
              // onClick={() => getId(index)}
            >
              {project}
              {/* onClick={openModal} */}
              <span className={styles.delete}> 
                <IconContext.Provider
                  value={{ color: "#f9f9f9", className: styles.d }}
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
