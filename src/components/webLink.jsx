import React from "react";


const WebLink =({title, description, website}) => {
    return (
    <>
        <a href={website}>{title}</a>
        <p>{description}</p>
    </>
    )
}

export default WebLink;