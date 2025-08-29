import React, { useMemo, useState } from "react";
import UserCard from "./childComponent/userCardMemo";

const UserMemo = () => {
    const userManual = [
        {
            id:1,
            name: "Nisha"
        },
        {
            id:2,
            name: "Sanoj"
        },
        {
            id:3,
            name: "Thara"
        },
        {
            id:4,
            name: "Laila"
        },
    ];


    const [userState , setUserState] = useState(userManual);
    const[counter , setCounter] = useState(0);

    const userIteration = useMemo(() => {userState.map((item) =>{
        console.log("preparing card..."); //when i increment the counter, this function is re-rendering so its again running 4 times, it will affect the parfomence, useMemo is to stop that re rendering  
        return(
            <UserCard key={item.id} data={item}/>
        )
    } )}, [userState]);

    const handleCounter = () => {
        setCounter(counter => counter +1);
    }

    const setUserDetails = (name) => {
        setUserState([{...userState}, {id:userState.length+1 , name: name} ])
    }

    return(
        <>
        <h1>
            memo
        </h1>
        <h3>{counter}</h3>
        <button onClick={() => handleCounter()}>increment</button>
        <p>{userIteration}</p>
        <hr />
        <input type="text" onBlur={(e) => setUserDetails(e.target.value)}/>
        </>
    )
}


export default UserMemo ;