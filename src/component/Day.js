/**
 * 특정 날짜를 클릭했을때 단어들이 나오는 화면 컴포넌트
*/

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from "./Word";

export default function Day() {
    const { day } = useParams();
    const [words, setWords] = useState([]);  // 더미데이터 대신 words state 만들기 
    const wordList = words.filter(word => word.day === Number(day));
    
    useEffect(() => {
        // API 비동기 통신을 위해 fetch() 사용. 
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setWords(data)
        })
    }, [day]);  // day가 변경되면 새로운 정보를 불러오도록 [day] 로 변경

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        // 버튼 클릭이벤트에 따라 단어 데이터가 바뀌도록 동작 => 단어 컴포넌트를 따로 만드는게 좋다. 
                        // 각각의 컴포넌트마다 state를 가지는게 좋기 때문. 
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    )
}