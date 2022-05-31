# React Basic 

## 프로젝트 생성하기 
```
// 프로젝트 생성 
npx create-react-app {프로젝트이름}

// 페이지 호출 
npm start
```

## 구조 이해하기 
- node_modules
    - npm install을 하여 설치된 모듈들이 위치하는 폴더  
    - 삭제하더라도 다시 npm install하면 된다
    - 용량이 크기때문에 git에 업로드는 주로 하지않으며, package.json으로 확인한다. 
- public
    - static (정적파일) 자원들을 위한 폴더 
- src
    - 리액트 작업할 폴더 

### index.html 
가상 DOM을 위한 파일. index.js에 의해 렌더링된 결과가 표시된다. 

### index.js 
메인 js파일로, 여기서 html템플릿과 컴포넌트들을 조합하여 렌더링시킨다. 

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

/* 방법2
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
);
```
- `ReactDom.render(element, container[, callback])` : 컴포넌트를 페이지에 렌더링하는 역할. 첫번째 파라미터에는 렌더링할 내용을 jsx 형태로 작성하고, 두번째 파라미터는 해당 jsx를 렌더링할 document 내부 요소를 설정한다.   

### App.js 
컴포넌트를 정의하는 역할. App 자리에 컴포넌트 이름을 작성해주면 된다. 
```javascript
import './App.css';

function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
```
- 여기서 return해주는 구문은 `jsx` 라는 문법이다.(반드시 return문 있어야함) html과 형식이 비슷하지만, js에서 class는 예약어라서 className="" 형식을 따라야함.  
- jsx는 하나의 태그만 만들 수 있다. 여러개의 태그를 반환하고싶은 경우, 가장 바깥에 빈 태그로 감싸준다. 

