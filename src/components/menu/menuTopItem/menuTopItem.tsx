import React from "react";
import "./menuTopItem.scss";

interface MenuTopItemProps {
  icon: string;
  children: React.ReactNode;
  alt: string;
}

const MenuTopItem: React.FC<MenuTopItemProps> = ({ icon, children, alt }) => {
  return (
    <div className="menuTopItem">
      <img src={icon} alt={alt} className="menu-icon" />
      <span>{children}</span>
    </div>
  );
};

export default MenuTopItem;