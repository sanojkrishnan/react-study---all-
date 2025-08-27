import React, { useState } from "react";

const UserArray = () => {
    const userList = [
        {id : 1 , name : "Sanoj"},
        {id : 2 , name : "Appu"},
        {id : 3 , name : "Krishnan"}
    ]

    const [usersArray , setUsersArray] = useState(userList)
    
    const updateUser = (newUser) => {
        console.log(newUser);
        setUsersArray([...usersArray,
            {id: usersArray.length+1, name: newUser}

        ])

    }

    return (
        <>
        <h1>useState in Array</h1>
        <form>
            <label>Add User : 
                <input type="text" name="username" onBlur={(e) => updateUser(e.target.value)}/>
            </label>
            <p>{JSON.stringify(usersArray)}</p>
        </form>

        </>
    )
}

export default UserArray;