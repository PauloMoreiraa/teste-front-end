import React from "react";
import "./menu.scss";
import MenuTop from "./menuTop/menuTop";
import MenuMiddle from "./menuMiddle/menuMiddle";
import MenuBottom from "./menuBottom/menuBottom";

const Menu: React.FC = () => {
  return (
    <header>
      <MenuTop />
      <MenuMiddle />
      <MenuBottom />
    </header>
  );
};

export default Menu;
