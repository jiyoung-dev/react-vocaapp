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

## CSS Module 
### ���� 
- Ŭ�������� �浹�ϴ� ������ �غ��� �� ���� 
- ������Ʈ ������ ��Ÿ���� �����Ҷ� ������ 

### ���� 
- ���ϸ� ���� 
> ������Ʈ��.module.css 

- �����ϴ¹� 
``` javascript
import styles from 'module.css ���'  
...
<div className={styles.box} />
```

## �̺�Ʈ �ڵ鸵 
### �̺�Ʈ ����Ҷ� ���ǻ��� 
- �̺�Ʈ���� ī��ǥ������� �ۼ��Ѵ�. 

## ����Ʈ �� 
> Hook�� �Լ��� ������Ʈ�� Ŭ������ ������Ʈ�� ����� ����� �� �ֵ��� ���ִ� ����̴�. ��ǥ������, useState�� useEffect�� ����ؼ� Ŭ���� ������Ʈ���� ���� state�� lifecycle ��ɵ��� �Լ��������� ���� �ְ� �Ȱ�.  
### useState ���� 
1. import �ϱ� 
```javascript
import { useState } from "react";
```

2. useState ���� 
```javascript
const [name, setName] = useState();
```
- useState()�� ȣ��Ǹ� �迭�� ��ȯ�Ѵ�. 
- ù��° ���ڰ��� ���°��̰�, �ι�°�� ���¸� ������Ʈ���ִ� �Լ�����. 
  - setName()�� �Ķ���͸� �־� ȣ���ϸ� �� �Ķ���ͷ� name ���� �ٲ�Եǰ� ������Ʈ�� �������ȴ�.
- `useState("Mike");` �̷��� �ʱⰪ�� �������� �����ִ�. �� �ʱⰪ�� ù��° ������ �ÿ� ���ѹ� ����.  

## Props ���� 
> props�� �θ� ������Ʈ�� �ڽ� ������Ʈ���� ���� �����Ҷ� ����ϴ°���. Read Only�̴�.   
- props�� `<ComponentName prop1={value1} prop2={value2} ... />` ���·� ������Ʈ�� �θ��� �Բ� �������ش�. 
- props�� �޾Ƽ� ����Ҷ��� `function(props)` �� �޾ƿ� �Լ� ���ο��� `props.prop1`, `props.prop2` �̷������� ������ְų�, `function({ prop1, prop2 })` �̷��� �޾ƿͼ� `prop1`, `prop2` �̷������� �����ϰ� ����Ҽ��� �ִ�.  
- �ڽ� ������Ʈ �ȿ��� props ������ �����ϰ������ state �Լ��� ������ָ� �ȴ�. ȭ�鿡�� � �����͸� �����ϰ��� �Ҷ�, ����Ʈ������ props�� state �ΰ����� �Բ� ���ֻ����. 

## React-Router
### ��ġ 
```cmd
npm install react-router-dom
```

### ���� 
```javascript 
// App.js 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyPage from './component/EmptyPage';
import Main from './component/Main';
import Test from './component/Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/test/:num" element={ <Test /> } />
            <Route path="*" element={ <EmptyPage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```
- `<BrowserRouter>`: ����Ʈ ����͸� �����ϴ� �ڵ�.
- `<Routes>`: Route���� �����ϴ� �θ���. v6���� ���׷��̵� �Ǹ鼭 Switch���� Routes�� �̸��� �����. 
- `<Route>`: �������� ��θ� �������ش�. ("/"�� ���� ù��° �����.)
- ���� �ڵ忡�� path="*"�� ����ó���� ���� ��μ�����.  

### useParams() 
> ����Ʈ ����Ϳ��� �Ķ���� ������ ������ Ȱ���ϰ� �������, useParams��� ���� ����Ѵ�.  

- import�ϱ�: `import { useParams } from "react-router-dom";`
- ����: `let { params } = useParams();` 
- ���: `~url/test/1, ~url/test/2` ���� �������ִ� �Ķ���Ͱ��� ���� �ٸ� ���Ʈ �������� ȣ���� �� �ְԵȴ�.  

## JSON Server 
> json server�� ���� ª�� �ð��� REST API�� �������ִ� ���̺귯����. ������ DB������ �ʿ��Ҷ� ����ϸ� ������ �����̴�. 
### ��ġ 
```cmd
npm install -g json-server
```
### json ���ϻ��� 
> �����ͺ��̽��� �̿��� json ������ �����. 

### ���� 
```cmd
json-server --watch xxx.json --port 3001  
```
- �̶� json ������ ����θ� �����ְų�, ������ �ִ� ��ġ�ȿ��� ����� �����Ѵ�. 
- ���Ͱ��� ��������� REST API ������ �����Եȴ�. 

## Custom Hooks
> Ŀ���� ���� �����ڰ� ���� ���� hook�̴�. �ߺ��Ǵ� ������ �ϳ��� �� ������Ʈ�� ����� ����Ѵ�. ����, Input�� Fetch�� �����Ҷ� ���� ���δ�.                 
- ����ϴ� ����
  1. �ڵ尡 ���������� �������� ������. 
  2. �ʿ���� �ݺ��� ���̰�, ���뼺�� ���δ�. 
  3. ���������� ������ Ŀ���� �Ÿ� �����ϸ� �ǹǷ�, ���������� �����ϴ�. 
- ���� 
  1. ����Ʈ�� �����Ű� ���������� �� �̸��� use�� �����Ѵ�.  
  2. ���� hooks��� ���丮�� ����� Ŀ���� ���� ������. 
  3. Ŀ���� ���� JSX�� �ƴ� �迭 �Ǵ� ��ü�� return �ؾ��Ѵ�.  