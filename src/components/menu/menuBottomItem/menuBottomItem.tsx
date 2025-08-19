import React from "react";
import "./menuBottomItem.scss";

interface MenuBottomItemProps {
  label: string;
  href: string;
  highlight?: boolean;
  icon?: string;
  alt: string;
}

const MenuBottomItem: React.FC<MenuBottomItemProps> = ({
  label,
  href,
  alt,
  highlight,
  icon,
}) => {
  return (
    <li className="menuBottomItem">
      <a href={href}>
        {icon && <img src={icon} alt={alt} className="menuBottomItemIcon" />}
        {highlight ? <span className="highlight">{label}</span> : label}
      </a>
    </li>
  );
};

export default MenuBottomItem;