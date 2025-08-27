import React, { useState } from "react";

const Comments = () => {
  const [title, setTitle] = useState("Default Title");

  const handleEvent = () => {
    if (title === "Default Title") {
      setTitle("Updated Title");
    }
    else if (title === "Updated Title") {
        setTitle("Default Title")
    }
  };
  return (
    <>
      <h1>{title}</h1>
      <button onClick={handleEvent}>Change Title</button>
    </>
  );
};

export default Comments;
