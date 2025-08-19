import React from "react";
import MenuMiddleLogo from "../menuMiddleLogo/menuMiddleLogo";
import MenuSearch from "../menuSearch/menuSearch";
import "./menuMiddle.scss";
import MenuMiddleLinks from "../menuMiddleLinks/menuMiddleLinks";

const MenuMiddle: React.FC = () => {
  return (
    <div className="menuMiddle">
      <MenuMiddleLogo />
      <MenuSearch />
      <MenuMiddleLinks />
    </div>
  );
};

export default MenuMiddle;
