import React from "react";
import WebLink from "./components/webLink";
import User from "./components/classComponentEg";
import Comments from "./components/useStateEg";
import Loading from "./components/loading";
import UserForm from "./components/UserForm";
import UserArray from "./components/UsersArray";
import Theme from "./components/Theme";
import Counter from "./components/useEffectEg";
import Todo from "./components/Todo";
import ContextEg from "./components/useContextEg";
import UserMemo from "./components/useMemoEg";

const App = () => {
  const appName = "React Application"; //variable
  const user = {
    name: "Sanoj Appu", //object
  };
  const profileValid = true; //boolean

  const handleClick = () => {
    console.log("button clicked"); //will console
    alert("Button clicked!"); // will give alert popup message
  };

  //------------------------------------------objects----website links
  const reactLink = {
    name: "React",
    documentName:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    website: "https://react.dev/",
  };

  const instaLink = {
    name: "Instagram",
    documentName: "My instagram account which showcase my photos and videos.",
    website: "https://www.instagram.com/___stardus_t___/",
  };

  const linkedInLink = {
    name: "LinkedIn",
    documentName: "My LinkedIn profile showcasing my professional experience.",
    website: "www.linkedin.com/in/sanoj-krishnan",
  };

  return (
    <>
      {/* javascript fragment */}
      <h1 id="header">This is our simple react component : {appName} </h1>
      <p>This is a paragraph</p>
      <p>User name is : {user.name}</p>
      <p>Is it valid profile : {`${profileValid}`}</p>{" "}
      {/* to show boolean values in DOM as it is, you need to use template literals */}
      <p>{profileValid ? "valid profile" : "invalid profile"}</p>
      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <WebLink
        title={reactLink.name}
        description={reactLink.documentName}
        website={reactLink.website}
      />
      <WebLink
        title={instaLink.name /*Props Example */}
        description={instaLink.documentName}
        website={instaLink.website}
      />
      <WebLink
        title={linkedInLink.name}
        description={linkedInLink.documentName}
        website={linkedInLink.website}
      />{" "}
      {/* props example */}
      <User website={reactLink.name} />
      <Comments /> {/* This is an example for useState.. check the component */}
      <Loading />  {/*boolean in useState */}
      <UserForm /> {/*Object in useState */}
      <UserArray /> {/*Array in useState */}
      <Theme />   {/*Theme changer*/}
      <Counter />  {/*use Effect first example */}
      <Todo />    {/*this is an example for useReducer hook */}
      <ContextEg /> {/*useContext example */}
      <UserMemo /> {/*memoization using useMemo() example */}
      
    </>
  );
};

export default App;
