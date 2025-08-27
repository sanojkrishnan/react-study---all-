import React, { useState } from "react";
import styles from "./loading.module.css"


const Loading = () => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
        <button onClick={() => {setIsLoading((previousState) => !previousState)}}>Toggle Loading</button> 
        <div className={!isLoading ? styles.loaderOne : ""}>
            <div className={!isLoading ? styles.loaderTwo : ""}>
                <h1 > useState hook with boolean types </h1>
            </div>
        </div>
        </>
    )
}

export default Loading;