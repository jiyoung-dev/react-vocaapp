/**
 * 날짜별 버튼 컴포넌트
*/

import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {

    const days = useFetch("http://localhost:3001/days");  // useFetch() 라는 별도의 커스텀 훅을 생성해 API로 데이터를 받아오는 부분을 단순화시킴.  

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day{day.day}</Link>
                </li>
            ))}
        </ul>
    );
}