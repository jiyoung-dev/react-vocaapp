/**
 * API로 데이터를 받아오는 공통 컴포넌트 생성 (Custom Hooks)
*/

import { useEffect, useState } from 'react';

export default function useFetch(url) {
    
    const [data, setData] = useState([]);  

    useEffect(() => {
        fetch(url)  // 1. 파라미터로 넘어온 url을 fetch해서  
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)  // 2. data를 업데이트 시켜주고 
        })
    }, [url]);  

    return data;  // 3. 해당 data를 반환해줌. 
}