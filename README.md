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

## CSS Module 
### 장점 
- 클래스명이 충돌하는 단점을 극복할 수 있음 
- 컴포넌트 단위로 스타일을 적용할때 유용함 

### 사용법 
- 파일명 지정 
> 컴포넌트명.module.css 

- 적용하는법 
``` javascript
import styles from 'module.css 경로'  
...
<div className={styles.box} />
```

## 이벤트 핸들링 
### 이벤트 사용할때 주의사항 
- 이벤트명은 카멜표기법으로 작성한다. 

## 리액트 훅 
> Hook은 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능이다. 대표적으로, useState와 useEffect를 사용해서 클래스 컴포넌트에서 쓰던 state와 lifecycle 기능들을 함수형에서도 쓸수 있게 된것.  
### useState 사용법 
1. import 하기 
```javascript
import { useState } from "react";
```

2. useState 선언 
```javascript
const [name, setName] = useState();
```
- useState()는 호출되면 배열을 반환한다. 
- 첫번째 인자값은 상태값이고, 두번째는 상태를 업데이트해주는 함수역할. 
  - setName()에 파라미터를 넣어 호출하면 그 파라미터로 name 값이 바뀌게되고 컴포넌트가 렌더링된다.
- `useState("Mike");` 이렇게 초기값을 세팅해줄 수도있다. 이 초기값은 첫번째 랜더링 시에 딱한번 사용됨.  

## Props 사용법 
> props는 부모 컴포넌트가 자식 컴포넌트에게 값을 전달할때 사용하는것임. Read Only이다.   
- props는 `<ComponentName prop1={value1} prop2={value2} ... />` 형태로 컴포넌트를 부를때 함께 지정해준다. 
- props를 받아서 사용할때는 `function(props)` 로 받아와 함수 내부에서 `props.prop1`, `props.prop2` 이런식으로 사용해주거나, `function({ prop1, prop2 })` 이렇게 받아와서 `prop1`, `prop2` 이런식으로 간단하게 사용할수도 있다.  
- 자식 컴포넌트 안에서 props 값들을 변경하고싶으면 state 함수를 만들어주면 된다. 화면에서 어떤 데이터를 갱신하고자 할때, 리액트에서는 props와 state 두가지를 함께 자주사용함. 

## React-Router
### 설치 
```cmd
npm install react-router-dom
```

### 적용 
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
- `<BrowserRouter>`: 리액트 라우터를 시작하는 코드.
- `<Routes>`: Route들을 구성하는 부모요소. v6으로 업그레이드 되면서 Switch에서 Routes로 이름이 변경됨. 
- `<Route>`: 페이지의 경로를 설정해준다. ("/"는 가장 첫번째 경로임.)
- 위의 코드에서 path="*"는 예외처리를 위한 경로설정임.  

### useParams() 
> 리액트 라우터에서 파라미터 정보를 가져와 활용하고 싶은경우, useParams라는 훅을 사용한다.  

- import하기: `import { useParams } from "react-router-dom";`
- 저장: `let { params } = useParams();` 
- 사용: `~url/test/1, ~url/test/2` 에서 전달해주는 파라미터값에 따라 다른 라우트 페이지를 호출할 수 있게된다.  

## JSON Server 
> json server는 아주 짧은 시간에 REST API를 구축해주는 라이브러리다. 간단히 DB서버가 필요할때 사용하면 적당한 도구이다. 
### 설치 
```cmd
npm install -g json-server
```
### json 파일생성 
> 데이터베이스로 이용할 json 파일을 만든다. 

### 실행 
```cmd
json-server --watch xxx.json --port 3001  
```
- 이때 json 파일의 상대경로를 적어주거나, 파일이 있는 위치안에서 명령을 실행한다. 
- 위와같이 실행해줘야 REST API 서버가 열리게된다. 

## Custom Hooks
> 커스텀 훅은 개발자가 직접 만든 hook이다. 중복되는 로직을 하나의 훅 컴포넌트로 만들어 사용한다. 보통, Input과 Fetch를 관리할때 자주 쓰인다.                 
- 사용하는 목적
  1. 코드가 간결해지고 가독성이 좋아짐. 
  2. 필요없는 반복을 줄이고, 재사용성을 높인다. 
  3. 수정사항이 있으면 커스텀 훅만 수정하면 되므로, 유지보수에 용이하다. 
- 사용법 
  1. 리액트의 내장훅과 마찬가지로 훅 이름은 use로 시작한다.  
  2. 보통 hooks라는 디렉토리를 만들어 커스텀 훅을 관리함. 
  3. 커스텀 훅은 JSX가 아닌 배열 또는 객체를 return 해야한다.  