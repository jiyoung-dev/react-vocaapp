/* 기본 구문 
const Hello = () => {
    return <p>Hello!!</p>;
};

export default Hello;
*/

import { useState } from "react";

export default function Hello() {

    //let name = "Jiyoung";  // 여기서 name은 state가 아닌, 단순히 변수이다. 
    const [name, setName] = useState("Jiyoung");

    function changeName() {
        const newName = name === "Jiyoung" ? "Nayoung" : "Jiyoung";
        console.log(newName);
        //document.getElementById("name").innerHTML = name;  // 이렇게 직접 넣어주지 않는이상, 리액트는 인식하지 못하여 UI를 업데이트해주지 못한다. => state를 사용하자.
        setName(newName);
    }

    return (
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    ); 
}
