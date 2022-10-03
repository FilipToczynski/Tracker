

function Modal({deleteProject, toggleModal}) {
    return (
        <div className='sidebar__modal'>
            delete project?
            <div>
              <button onClick={deleteProject}>yes</button>
              <button onClick={toggleModal}>no</button>
            </div>
          </div>
    )
}

export default Modal;