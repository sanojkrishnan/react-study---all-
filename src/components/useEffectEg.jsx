import React, { useState } from "react" ;
import UserFile from "./childComponent/UseEffectChild";
import UserShow from "./childComponent/UsersData";


const Counter = () => {
    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }

return (
    <>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <UserFile counter={count}/>   {/* Child component for useEffect (the example for use effect is in there)*/}
    <UserShow />    {/* use effect example using backend data */}
    </>
)
}

export default Counter ;