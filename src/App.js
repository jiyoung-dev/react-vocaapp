import './App.css';
import Hello from "./component/Hello";

function App() {
  // 동일한 컴포넌트라도 state는 각각 관리된다. 
  return (
    <div className="App">
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  );
}

export default App;
