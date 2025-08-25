import React from "react";

const App = () =>{
  const  appName = "React Application"   //variable
  const user = {
    name : "Sanoj Appu"            //object
  }
  const profileValid = true      //boolean

  const handleClick = () => {

    console.log("button clicked")   //will console
    alert("Button clicked!");      // will give alert popup message
  }

  return(
    <>{/* javascript fragment */}
    <h1 id="header">This is our simple react component : {appName}  </h1>
    <p>This is a paragraph</p>
    <p>User name is : {user.name}</p>
    <p>Is it valid profile : {`${profileValid}`}</p> {/* to show boolean values in DOM as it is, you need to use template literals */}
    <p>{profileValid ? "valid profile" : "invalid profile"}</p>
    <button onClick={handleClick} >Click me</button>
    </>
  )
}


export default App;