/**
 * 특정 날짜를 클릭했을때 단어들이 나오는 화면 컴포넌트
*/

import dummy from "../db/data.json";
import { useParams } from 'react-router-dom';
import Word from "./Word";

export default function Day() {
    const { day } = useParams();
    console.log({ day });
    const wordList = dummy.words.filter(word => word.day === Number(day));
    
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