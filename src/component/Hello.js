/* 기본 구문 
const Hello = () => {
    return <p>Hello!!</p>;
};

export default Hello;
*/

import World from "./World";

export default function Hello() {
    return (
        <>
            <p>Hello!!</p>
            <World/>
        </>
    ); 
}
