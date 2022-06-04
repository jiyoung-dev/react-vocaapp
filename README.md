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