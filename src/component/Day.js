/**
 * 특정 날짜를 클릭했을때 단어들이 나오는 화면 컴포넌트
*/

import dummy from "../db/data.json"

export default function Day() {

    const day = 4;
    const wordList = dummy.words.filter(word => word.day === day);

    console.log(wordList);
    
    return (
        <>
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