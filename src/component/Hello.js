/* 기본 구문 
const Hello = () => {
    return <p>Hello!!</p>;
};

export default Hello;
*/

export default function Hello() {

    function showName() {
        console.log("Jiyoung");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt);
    }

    // 이벤트 이름은 카멜표기법으로 작성 (ex. onClick, onKeyup, onChange, ...)
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button
                onClick={() => {
                    showAge(20);
                }}
            >
                Show age
            </button>
            <input
                type="text" 
                onChange={(e) => {
                    const txt = e.target.value
                    showText(txt);
                }}
            />
        </div>
    ); 
}
