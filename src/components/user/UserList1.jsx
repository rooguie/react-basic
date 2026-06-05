import React from 'react'
import User from './User'



function UserList1({users, onRemove, onToggle}) {
    //props 객체로 묶어서 옴
    //props.user => 가장 많이 사용 안함
    //const {users} = props
    // {props} => 받을 때 구조 분해
    return (
        <div>
            {
                users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
                ))

            }
        </div>
    )
}

export default UserList1