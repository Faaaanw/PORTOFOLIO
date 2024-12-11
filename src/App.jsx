import styles from './App.module.css';
import { Navbar } from './component/Navbar/Navbar';
import { Hero } from './component/Hero/Hero';
import { About } from './component/about/about';
import { Experience } from './component/experience/experience';
import {Project} from './component/project/project'
import { Contact } from './component/contact/Contact';
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;
