/**
 * 특정 날짜를 클릭했을때 단어들이 나오는 화면 컴포넌트
*/

import dummy from "../db/data.json";
import { useParams } from 'react-router-dom';

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
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}