import './App.css';
import Hello from "./component/Hello";
import Welcome from './component/Welcome';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Hello/>
      <div className={styles.box}> Hello~ </div>
      <Welcome/>
    </div>
  );
}

export default App;
