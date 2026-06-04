// function Start(){
//     return (
//         <div>
//             <h2>Start.jsx Area</h2>
//         </div>
//     )
// }

//화살표 함수
const Start=()=>{
    //내부 변수 사용
    const name='홍길동';

    //css 파일을 생성하여 import 하는 방법
    //스타일 객체를 선언하는 방법
    const style={
        color : "white",
        backgroundColor:"black"
    }

    return (
        <div className="Strat">
            {/* return div 안쪽 영역은 가상 DOM 영역  */}
            <h2 style={style}> {name} Hello~! Start.jsx Area</h2>
        </div>
    )
}
export default Start;