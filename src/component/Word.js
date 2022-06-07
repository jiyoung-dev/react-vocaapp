import { useState } from "react"

export default function Word({ word }) {

    const [isShow, setIsShow] = useState(false);  // 단어뜻 보여주기 상태값 (isShow : 보여짐, !isShow : 숨김)
    const [isDone, setIsDone] = useState(word.isDone);  // 단어 암기여부 상태값 (isDone : 외움(체크표시), !isDone : 못외움(체크해제))

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        setIsDone(!isDone);
    }

    return (
        <tr className={isDone ? "off" : ""}>  
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? '숨기기' : '보기'}
                </button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    )
}