import { useState } from "react"

export default function Word({ word: w }) {

    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);  // 단어뜻 보여주기 상태값 (isShow : 보여짐, !isShow : 숨김)
    const [isDone, setIsDone] = useState(word.isDone);  // 단어 암기여부 상태값 (isDone : 외움(체크표시), !isDone : 못외움(체크해제))

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {  // fetch 두번째 인자에 요청의 옵션들을 넣는다. 
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({  // 수정을 위한 데이터를 body에 실어서 보낸다. 
                ...word,  // isDone을 제외한 기존 데이터들 
                isDone: !isDone,  // isDone을 업데이트해서 보내줌. 
            }),
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        })
    }

    function del() {
        if(window.confirm("삭제하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            })  // 삭제 ok를하고 다시 컴포넌트를 렌더링해줘야 삭제후 화면이 바로 보여짐.
            .then(res => {
                if(res.ok) {
                    setWord({ id: 0 });  // 단어 state를 생성해 삭제를 누르면 해당 단어의 id를 0으로 만들어줌. 
                }
            });    
        }
    }

    if(word.id === 0) {
        return null;
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
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    )
}