/* 기본 구문 
const Hello = () => {
    return <p>Hello!!</p>;
};

export default Hello;
*/

import World from "./World";
import styles from './Hello.module.css';

export default function Hello() {
    return (
        <>
            <p
                style = {{
                    color: "#f00",
                    borderRight:  "12px solid #000",
                    marginBottom: "30px",
                    opacity: 0.5,
                }}
                
            >
                Hello!!
            </p>
            <World/>
            <div className={styles.box}> Hello~ </div>
        </>
    ); 
}
