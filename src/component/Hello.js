/* 기본 구문 
const Hello = () => {
    return <p>Hello!!</p>;
};

export default Hello;
*/

import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {  // {age} = props / age = props.age
    const [name, setName] = useState("Jiyoung");
    const [newAge, setAge] = useState(age);
    const msg = newAge > 19 ? "Adult." : "Minor.";

    return (
        <div>
            <h2 id="name">{name}({newAge}) : {msg}</h2>
            <UserName name={name} age={newAge}/>
            <button 
                onClick={() => {
                    setName(name === "Jiyoung" ? "Nayoung" : "Jiyoung");
                    
                }}
            >
                Change
            </button>
            <button
                onClick={() => {
                    setAge(newAge + 1);
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setAge(newAge - 1);
                }}
            >
                -
            </button>
        </div>
    ); 
}
