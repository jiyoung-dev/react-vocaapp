import './App.css';
import Hello from "./component/Hello";

function App() {
  // ������ ������Ʈ�� state�� ���� �����ȴ�. 
  return (
    <div className="App">
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  );
}

export default App;
