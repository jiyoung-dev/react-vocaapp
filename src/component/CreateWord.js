import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

export default function CreateWord() {

    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        fetch(`http://localhost:3001/words/`, {  // fetch 두번째 인자에 요청의 옵션들을 넣는다. 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                day : dayRef.current.value, 
                eng : engRef.current.value, 
                kor : korRef.current.value,
                isDone : false,
            }),
        })
        .then(res => {
            if(res.ok) {
                alert("생성이 완료되었습니다.");
                navigate(`/day/${dayRef.current.value}`);
            }
        })
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="ex. computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="ex. 컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}