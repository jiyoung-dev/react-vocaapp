import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

export default function CreateDay() {

  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function addDay() {

    if(!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/days/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: days.length + 1
        }),
      })
      .then(res => {
        if(res.ok) {
          alert("생성이 완료되었습니다.");
          navigate(`/`);
          setIsLoading(false);
        }
      })
    }

  }

  return (  // 로딩중 아닐때만 현재일수 및 day추가버튼 보이기 
    <div>
      {days.length === 0 && <span>Loading...</span>} 
      {days.length > 0 &&   
        <>
          <h3>현재일수 : {days.length}일</h3>
          <button
            style={{
              opacity: isLoading ? 0.3 : 1,  
            }}
            onClick={addDay}
          >
            {isLoading ? "Saving..." : "Day 추가"}
          </button>
        </>
      }
      
    </div>
  );

}