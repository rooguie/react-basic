//users 객체에 [{},{},{}] (등록, 삭제, 리스트보기) 하기 위한 컴포넌트 작성
import React, { useMemo, useRef, useState } from 'react'
import UserList1 from './UserList1';
import CreateUser from './CreateUser';


function UserList2() {

    //users의 객체를 등록, 수정, 삭제 하기 위해서 useState()로 관리
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com',
            active: true
        },
        {
            id: 2,
            username: 'kim',
            email: 'kim@naver.com',
            active: false
        },
        {
            id: 3,
            username: 'lee',
            email: 'leeTest@gmail.com',
            active: false
        }
    ]);

    //컴포넌트 안에서 관리할 수 있는 변수 생성
    //useRef() : userRef()로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 재렌더링 되지 않음.
    const nextId = useRef(4);

    //CreateUser 값을 관리할 useState() 생성
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    //구조분해
    const { username, email } = inputs;

    //onChange() 설정
    const onChange = (e) => {
        const { name, value } = e.target; //name=> key, value=>value

        setInputs({
            ...inputs, //기존 inputs 복사
            [name]: value
        })
    }

    //onCreate() 설정 => 추가버튼이 해야하는 일
    //users에 추가할 객체를 생성 => users배열에 추가
    const onCreate = () => {
        //이미 onChange에서 input에서 값을 변경해 놓음
        const user = {
            id: nextId.current, //현재 객체의 값 가져오기
            username: username, //key:value의 이름이 같으면 생략가능
            email,
            active: false
        }

        //react에서 객체 추가할때 push/pop은 사용하지 않음 => 원본데이터가 변경되는 일은 하지 않음
        // setUsers([...users,user]); //원래 users의 값 복사, user 추가
        setUsers([...users].concat(user)); //성능 개선이됨. (내부적으로 더 효율적)
        console.log(nextId.current);

        //nextId 값을 1 증가
        nextId.current += 1;

        //추가 후 inputs 객체를 초기화
        setInputs({
            username: '',
            email: ''
        });
    }

    // onRemove() 설정
    const onRemove = (id) => {
        console.log(id);
        //id : 파라미터의 값으로 가져온 값(User => user.id)
        //삭제 : user.id != users.id 가져온 id와 일치하지 않는 id들만 users에서 가져옴
        //filter : 조건에 맞는 값만 추출하여 배열로 리턴(true만 리턴)
        setUsers(users.filter(user => user.id !== id))
    }

    //onToggle() 설정
    //user 값을 클릭하면 active == true / false로 토글
    //클릭한 유저의 active를 자신의 값과 반대로 설정
    const onToggle = (id) => {
        //현재 클릭한 id의 active 값을 자신의 값과 반대로 설정
        setUsers(
            users.map(user => user.id === id ? { ...user, active: !user.active } : user)
        )
    }

    //활성 사용자 수 => active: true인 사용자 수 출력
    const countActiveUser=()=>{
        return (
            users.filter(user => user.active).length
        )
    }

    // const count=countActiveUser();
    //활성 사용자 수를 세는 건, users의 값이 변화가 있을 때만 세어야 하는데...
    //계속 input값이 바뀌거나, 컴포넌트가 재 렌더링 되거나.. 불필요하게 호출되어서
    //자원이 낭비 됨
    //useMemo 첫번째 파라미터로 함수를 넣어주고(어떻게 연산할지 정의하는 함수),
    //두번째 파라미터는 deps 배열을 넣어주면 되는데..
    // 이 배열에 넣은 내용이 바뀌면, 등록한 함수를 호출해서 값은 연산해주고,
    // 만약 해당 배열의 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 된다.

    const count=useMemo(()=>countActiveUser(),[users]);

    return (

        <div>
            {/* 등록 컴포넌트 => CreateUser */}
            {/* 해당 컴포넌트의 input 객체가 여기 있다고 생각하고 작업 
                => 만들어진 변수값을 props전달
            */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            {/* UserList 컴포넌트 => UserList1 users={users} */}
            <UserList1 users={users} onRemove={onRemove} onToggle={onToggle} />

            <div>활성사용자 수 : {count}명</div>
        </div>
    )
}

export default UserList2