import React, { useContext } from "react";
import DetailsForContext from "./detailsForContext";
import UserContext from "../contextDeclaring/userContext";

const UsersForContext = () => {
    const data = useContext(UserContext) ;
    return (
        <>
        <h1>User : {data}</h1>
        <DetailsForContext />
        </>
    )
};

export default UsersForContext ;