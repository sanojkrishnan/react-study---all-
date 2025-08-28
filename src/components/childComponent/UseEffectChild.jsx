import React, { useEffect } from "react"


const UserFile = (count) => {

    useEffect(() => {
        console.log("inside use effect" , count)
        
        return (
            () => {
                console.log("un-mounted")
            }
        )
    }, [count]) //=> [] means mounting phase -> execute only once
           //=> if no dependency array is passed, then i will be in update phase
           //=> if you pass any state or props inside the array, it will only update when the sate or prop is updated
           //=> for unmounting return a function inside the callback

    console.log("...re-rendering - out side use effect");
    return(
        <>
        <h1>User Company</h1>
        </>
    )
}

export default UserFile;