/**
 * 특정 날짜를 클릭했을때 단어들이 나오는 화면 컴포넌트
*/

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from "./Word";

export default function Day() {
    const { day } = useParams();
    const days = useFetch("http://localhost:3001/days"); 
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const navigate = useNavigate();
    const nDay = Number(day) + 1;
    const pDay = Number(day) - 1;

    // 다음날짜 단어장으로 이동 
    function nextDay() {
        navigate(`/day/${nDay}`);
    }

    // 이전날짜 단어장으로 이동 
    function preDay() {
        navigate(`/day/${pDay}`);
    }

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
            <div
                style={{
                    marginTop: 30,
                    display: 'flex',
                    justifyContent : 'center',
                }}
            >
                {Number(day) > 1 &&   // day2부터 이전버튼 보이기 
                    <button 
                        style={{
                            margin : 10,  // [top, right, bottom, left]
                        }}
                        onClick={preDay}>◀ Day {pDay}</button>
                }
                {Number(day) != days.length &&
                    <button 
                        style={{
                            margin : 10,  // [top, right, bottom, left]
                        }}
                        onClick={nextDay}>Day {nDay} ▶</button>
                }
            </div>
        </>
    )
}