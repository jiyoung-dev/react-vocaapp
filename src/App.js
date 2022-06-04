import './App.css';
import Hello from "./component/Hello";

function App() {
  return (
    <div className="App">
      <h1>props: properties</h1>
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>
    </div>
  );
}

export default App;
