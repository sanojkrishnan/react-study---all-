import React from "react";

  ///the simple class components example
class User extends React.Component {
    constructor(props) {   //
        super(props); //super is only require whe you are accessing this keyword inside the constructor
        console.log(this.props);
    }

    render() {
        //we can write any valid javascript code in here also, as the project demands
        //the code we write in side the render will execute every time when the dom renders 

        console.log(this.props)
        return(
            <>
            <h1>
                Class Component, Welcome to {this.props.website}
            </h1>
            </>

        )
    }

}

export default User;