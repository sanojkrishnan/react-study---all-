import React, { useEffect, useState } from "react";

const UserShow = () => {

    const [userData , setUserData] =useState([]);
    const  [refresh , setRefresh] = useState(false);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users"

        fetch(url)
        .then(data => data.json())
        .then((result) =>{ console.log(result); setUserData( result )});
    }, [refresh])   //passing an empty array, so the data will never re render when the counter is increasing 
    return (
        <>
        <h1>User Data</h1>
        <br/>
        <button onClick={() => setRefresh((prevState) => !prevState)}>Refresh</button>
        <br/>
        <br/>
        <ul>
            {userData.map((item)=> <li key={item.id}> {item.name} </li>)}
        </ul>
        </>
    )
};

export default UserShow;