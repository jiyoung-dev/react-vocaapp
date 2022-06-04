/* �⺻ ���� 
const Hello = () => {
    return <p>Hello!!</p>;
};

export default Hello;
*/

import { useState } from "react";

export default function Hello() {

    //let name = "Jiyoung";  // ���⼭ name�� state�� �ƴ�, �ܼ��� �����̴�. 
    const [name, setName] = useState("Jiyoung");

    function changeName() {
        const newName = name === "Jiyoung" ? "Nayoung" : "Jiyoung";
        console.log(newName);
        //document.getElementById("name").innerHTML = name;  // �̷��� ���� �־����� �ʴ��̻�, ����Ʈ�� �ν����� ���Ͽ� UI�� ������Ʈ������ ���Ѵ�. => state�� �������.
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
