import { useState } from "react";

function Counter() {

    //const는 재정의가 안됨
    // const number =0;
    // let number=0; => 값을 줄 수 없음

    //react에서 (가상 DOM) 변경되는 값 관리 =>  HOOK
    // useState() : 변수의 상태를 관리하는 훅

    const [number, setNumber] = useState(0); //변수와 변수를 변경할 set변수

    //더하기를 눌렀을 때 실행될 함수
    const onincres = () => {
        console.log(number);
        // number+=1;
        if (number >= 10) {
            setNumber(10);
        }
        else {
            setNumber(n => n + 1);
        }
    }

    //빼기를 눌렀을 때 실행될 함수
    const ondecres = () => {
        console.log(number);
        // number-=1;
        if (number <= 0) {
            setNumber(0);
        }
        else {
            setNumber(number - 1);
        }
    }

    console.log(number);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onincres}>+</button>
            <button onClick={ondecres}>-</button>
        </div>
    )
}

export default Counter;