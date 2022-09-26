import Sidebar from "./Sidebar/Sidebar";
import Window from "./window/Window";
import styles from "./app.module.css";
import { useState } from "react";

function App() {

  const [name, setName] = useState('');
  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <Sidebar setName={setName}/>
        <Window indx={name}/>
      </div>
    </div>
  );
}

export default App;
