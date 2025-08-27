import React, { useState } from "react";

const UserForm = () => {

    const [userData , setUserData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        console.log(event.target.name); //it will show the name of the input field
        console.log(event.target.value); //it will show the value of the input field check the console

        setUserData({
            ...userData,    // the spread operator is used to copy the existing userData
            [event.target.name] : event.target.value    // dynamically update the userData state
        })

    }
    return(
        <>
        <h1>UseState with object</h1>
        <br />
        <p>{JSON.stringify(userData)}</p>  {/*it will show the userData in a string format on the DOM */}
        <form>
            <label>User Name : 
                <input type="text" name="username" onChange={handleChange}/>
            </label>
            <br />
            <br />
            <label>Password : 
                <input type="password" name="password" onChange={handleChange}/>
            </label>
        </form>
        </>
    )
}

export default UserForm;