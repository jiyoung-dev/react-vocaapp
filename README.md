# React Basic 

## ������Ʈ �����ϱ� 
```
// ������Ʈ ���� 
npx create-react-app {������Ʈ�̸�}

// ������ ȣ�� 
npm start
```

## ���� �����ϱ� 
- node_modules
    - npm install�� �Ͽ� ��ġ�� ������ ��ġ�ϴ� ����  
    - �����ϴ��� �ٽ� npm install�ϸ� �ȴ�
    - �뷮�� ũ�⶧���� git�� ���ε�� �ַ� ����������, package.json���� Ȯ���Ѵ�. 
- public
    - static (��������) �ڿ����� ���� ���� 
- src
    - ����Ʈ �۾��� ���� 

### index.html 
���� DOM�� ���� ����. index.js�� ���� �������� ����� ǥ�õȴ�. 

### index.js 
���� js���Ϸ�, ���⼭ html���ø��� ������Ʈ���� �����Ͽ� ��������Ų��. 

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

/* ���2
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
);
```
- `ReactDom.render(element, container[, callback])` : ������Ʈ�� �������� �������ϴ� ����. ù��° �Ķ���Ϳ��� �������� ������ jsx ���·� �ۼ��ϰ�, �ι�° �Ķ���ʹ� �ش� jsx�� �������� document ���� ��Ҹ� �����Ѵ�.   

### App.js 
������Ʈ�� �����ϴ� ����. App �ڸ��� ������Ʈ �̸��� �ۼ����ָ� �ȴ�. 
```javascript
import './App.css';

function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
```
- ���⼭ return���ִ� ������ `jsx` ��� �����̴�.(�ݵ�� return�� �־����) html�� ������ ���������, js���� class�� ������ className="" ������ �������.  
- jsx�� �ϳ��� �±׸� ���� �� �ִ�. �������� �±׸� ��ȯ�ϰ���� ���, ���� �ٱ��� �� �±׷� �����ش�. 

