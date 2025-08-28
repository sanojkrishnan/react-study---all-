import React, { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(false);

  const ThemeChange = {
    darkTheme: {
      backgroundColor: "black",
      color: "white",
      padding : "10px"
    },
    lightTheme: {
      backgroundColor: "white",
      color: "black",
      padding : "10px"
    },
  };

  return (
    <>
      <h1>Theme Changer</h1>
      <form>
        <label htmlFor="dark-theme-toggle">Enable Dark Theme</label>
        <input type="checkbox" id="dark-theme-toggle" onChange={() => setTheme(prevVal => !prevVal)}/>
      </form>
      <div style={theme ? ThemeChange.darkTheme : ThemeChange.lightTheme}>
        <h3>Theme Changes here</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          illo quos possimus dolores ut expedita, impedit asperiores hic autem
          tempora consequuntur vero at eius et! Incidunt, dolore nihil. Mollitia
          blanditiis animi doloremque deleniti qui, incidunt voluptas soluta
          eligendi architecto corrupti ea voluptatibus beatae illum? Eveniet
          voluptatum modi sunt velit. Adipisci earum distinctio sunt dicta? Nisi
          eaque, laboriosam modi fugiat alias praesentium voluptatum corporis
          soluta ea! Atque illo saepe tempore possimus reiciendis ea distinctio,
          quaerat dolore ipsam omnis ipsa at eligendi aspernatur maiores eius
          magnam nisi dolores necessitatibus reprehenderit voluptas accusamus
          non enim? Doloremque in dolorum aliquid officia, pariatur cupiditate
          obcaecati!
        </p>
      </div>
    </>
  );
};

export default Theme;
