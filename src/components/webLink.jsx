import React from "react";
import PropTypes from "prop-types";   //prop-types is a jsx based module in npm that uses to validate props


const WebLink =({title, description, website}) => {
    return (
    <>
        <a href={website}>{title}</a>
        <p>{description}</p>
    </>
    )
}

WebLink.PropTypes = {
   title : PropTypes.string.isRequired,       //title will only accept a string value and also title is required
   description : PropTypes.string,  //description is optional, also accepts string
   website : PropTypes.string       //here also
}  //proptype is used to validate the props passed to the component, its for development purpose only

export default WebLink;