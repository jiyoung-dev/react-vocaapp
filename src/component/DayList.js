/**
 * 날짜별 버튼 컴포넌트
*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList() {

    const [days, setDays] = useState([]);  // 더미데이터에서 날짜데이터를 불러오던걸 없애고 days라는 state를 만든다. API에서 리스트를 가져와 바꿔주는 방식으로 진행. 

    useEffect(() => {
        // API 비동기 통신을 위해 fetch() 사용. 
        fetch('http://localhost:3001/days')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setDays(data)
        })
    }, []);

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