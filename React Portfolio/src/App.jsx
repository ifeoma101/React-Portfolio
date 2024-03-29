/*Import css modules*/
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import {About} from "./components/Navbar/Pages/About.jsx";
import {Skills} from "./components/Navbar/Pages/Skills.jsx"
import {Contact} from "./components/Navbar/Pages/Contact.jsx"

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <About/>
      <Skills/>
      <Contact/>
       </div>

  );
}

export default App
